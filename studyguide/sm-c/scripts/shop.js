'use strict';

var currentOrderId = "";
var currentProductId = "";
var completedOrderId = "";
var sandbox = false;
var shopUrl = (sandbox ? "https://sandbox-secure.xsolla.com" : "https://secure.xsolla.com");

async function buyProduct(productId)
{
  console.log("buyProduct " + productId);

  var functionRef = firebase.app().functions().httpsCallable("getXsollaTokenForItemMulti");

  var response = await functionRef(productId);
  if(response != null && response.data != null)
  {
    var url = shopUrl + "/paystation3/?access_token=" + response.data.token;
    currentOrderId = response.data.order_id;
    currentProductId = productId;
    openStoreWindowInFrame(url);
  }
}

async function openStoreWindoWithToken(productId, token, orderId)
{
  var url = shopUrl + "/paystation3/?access_token=" + token;
  currentOrderId = orderId;
  currentProductId = productId;
  openStoreWindowInFrame(url);
}


async function openStoreWindowInFrame(url)
{
  var elem = document.getElementById("xsolla-iframe");
  elem.src = url;
  elem.style.display = "block";
}

window.addEventListener("message", (event) => {
 if (event.origin == shopUrl)
 {
   if(event.data != null)
   {
     var jsonData = JSON.parse(event.data);
     if(jsonData != null)
     {
      if(jsonData.data != null)
      {
        if(jsonData.data.action ==  "change-status" && jsonData.data.value == "done")
        {
          completedOrderId = jsonData.data.purchase_invoice_id;  
        }
        else if (jsonData.data.action == "close-widget")
        {
          purchaseComplete();
        }
      }
      
      if(jsonData.command == "return" || jsonData.command == "close-widget")
      {
        purchaseComplete();
      }
         
     }
   }      
   console.log("Window event " + event.data);
 }
}, false);

  function purchaseComplete()
  {
    if(currentOrderId != "")
    {
      var elem = document.getElementById("xsolla-iframe");
      elem.style.display = "none";

      var obj = 
      {
        orderId: currentOrderId.toString(),
        productId: currentProductId
      }
      const functionName = (completedOrderId != "") ? "PurchaseComplete" : "PurchaseCanceled";
      window.unityGame.SendMessage(unityFirebaseGameOjbectName, functionName, JSON.stringify(obj)); 
      completedOrderId = "";
      currentProductId = "";
      currentOrderId = "";
    }
  }
