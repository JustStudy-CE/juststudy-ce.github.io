'use strict';

//inject bait script
var baitScript = document.createElement('script');
baitScript.setAttribute('src',baitScriptSrc);
baitScript.async = false;
document.head.appendChild(baitScript);

//globals
var bannerMinRefreshDelayMillisecs = 0; //can be overwritten depending on ad provider, 0 defaults to requesting a new ad each time

var loadingBannerShownTimestamp = {val: -1}; //wrap in object to pass by ref
const divIdLoadingBanner = "adContainerLoadingLeft";

var mainMenuBannerShownTimestamp = {val: -1}; //wrap in object to pass by ref
const divIdMainMenuBanner = "adContainerMainMenu";

var winCeremonyBannerShownTimestamp = {val: -1}; //wrap in object to pass by ref
const divIdWinCeremonyBanner = "adContainerWin";

var spectateBannerShownTimestamp = {val: -1}; //wrap in object to pass by ref
const divIdSpectateBanner = "adContainerSpectate";

var deathBannerShownTimestamp = {val: -1}; //wrap in object to pass by ref
const divIdDeathBanner = "adContainerDeath";

const testBaitDelay = 1000;
var adblockDetectedType;
var pendingAdblockDetectedMessage;

var isVideoAdPlaying; //used internally in ad provider scripts

const loadingAdBannerPollDelay = 100;
var loadingAdBannerIntervalId;

function createAdBlockBaitDiv(divId, classList)
{
  var div = document.getElementById(divId);

  if(div == null)
  {
    div = document.createElement("div");

    div.id = divId;

    if(classList != null)
    {
      div.classList.add(classList);

    }

    div.style.display = "block";
    div.style.backgroundColor = 'transparent';
    div.style.height = '10px';
    div.style.width = '10px';
    div.style.position = 'fixed';
    div.style.bottom = '-100px';
    div.style.left = '-100px';

    div.innerHTML = '&nbsp;';

    document.body.appendChild(div);
  }

  return div;
}

function wasAdBlockDivRemoved(div)
{
  return getComputedStyle(div).display === "none" || div.getBoundingClientRect().height === 0;
}

function onUpdateAdBlockDetectedComplete(detectionType)
{
  if(!window.adblockDetected)
  {
    adblockDetectedType = detectionType;

    window.adblockDetected = (detectionType != null);

    if(window.adblockDetected)
    {
      console.log(`Adblock detected: ${detectionType}`);
    }

    pendingAdblockDetectedMessage = true;
    trySendAdBlockDetectedMessage();
  }
}

function trySendAdBlockDetectedMessage()
{
  if(window.unityGame != null && pendingAdblockDetectedMessage)
  {
    window.unityGame.SendMessage(unityFirebaseGameOjbectName, "OnUpdateAdBlockDetectedComplete", adblockDetectedType != null ? adblockDetectedType : "");

    pendingAdblockDetectedMessage = false;
  }
}

function updateAdBlockDetected()
{
  if(window.adblockDetected)
    return;

  var imgUrlTestPassed = true; //should be false but disabling temporarily as previous img src url has been removed
  var fbDivTestPassed = false;

  //nested function
  function checkAllAsyncTestsComplete()
  {
    if(imgUrlTestPassed && fbDivTestPassed)
    {
      onUpdateAdBlockDetectedComplete(null);
    }
  }

  //test local div ad bait
  var localAdBlockDiv = createAdBlockBaitDiv("AdBanner", ['adLeaderboard', 'adBanner', 'leaderboard_ad']);

  //delay testing bait divs to let adblockers do their thing
  setTimeout(() =>
  {
    //test local script bait
    if(document.getElementById('sklocalscriptbait') == null)
    {
      onUpdateAdBlockDetectedComplete("Local Script");
      return;
    }

    //test local div bait
    if(wasAdBlockDivRemoved(localAdBlockDiv))
    {
      onUpdateAdBlockDetectedComplete("Local Div");
      return;
    }

    //disabling temporarily as previous img src url has been removed
      // //test image pixel ad bait detection
      // var img = new Image();
      //
      // img.onload = () =>
      // {
      //   imgUrlTestPassed = true;
      //   checkAllAsyncTestsComplete();
      // }
      //
      // img.onerror = () =>
      // {
      //   onUpdateAdBlockDetectedComplete("Img Url Test");
      //   return;
      // };
      //
      // img.src = 'https://px.moatads.com/pixel.gif';

    //test bait divs from firebase ids
    if (typeof firebase !== 'undefined' && firebase.database() != null && firebase.auth() != null)
    {
      try
      {
        const dbRef = firebase.database().ref();

        dbRef.child("adblock").once("value").then((snapshot) =>
        {
          if (snapshot.exists())
          {
            var adblockDivIds = snapshot.val();

            if(Array.isArray(adblockDivIds))
            {
              var adblockDivs = [];

              adblockDivIds.forEach(divId =>
              {
                const div = createAdBlockBaitDiv(divId);
                adblockDivs.push(div);
              });

              //delay testing bait divs to let adblockers do their thing
              setTimeout(() =>
              {
                //check bait divs
                for (let i = 0; i < adblockDivs.length; i++)
                {
                  const div = adblockDivs[i];

                  if(wasAdBlockDivRemoved(div))
                  {
                    onUpdateAdBlockDetectedComplete("Firebase Div");
                    return;
                  }
                }

                fbDivTestPassed = true;
                checkAllAsyncTestsComplete();
              }, testBaitDelay);
            }
          }
        });
      }
      catch(e)
      {
        console.log(`updateAdBlockDetected error: ${e}`);
      }
    }
  }, testBaitDelay);
}

function setElementSize(identifier, x, y, w, h)
{
  const el = document.getElementById(identifier);
  if(el != null)
  {
    el.style.left = x + "px";
    el.style.top = y + "px";
    el.style.width = w + "px";
    el.style.height = h + "px";
  }
}

function hideAdContainer(adElementId)
{
  const ad = document.getElementById(adElementId);

  if(ad != null)
  {
    ad.style.display = "none";
  }
}

function showAdContainer(adElementId)
{
  const ad = document.getElementById(adElementId);

  if(ad != null)
  {
    ad.style.position = "absolute";
    ad.style.display = getComputedStyle(ad).getPropertyValue("--shown_display");
  }
}

function hideLoadingBanner()
{
  if(!offCanvasAdsEnabled)
  {
    hideAdContainer(divIdLoadingBanner);
    hideLoadingAd();
  }
}

function showLoadingBanner()
{
  if(!offCanvasAdsEnabled)
  {
    //check for adblock specifically for main menu banner as we show our own disable blocker panel 
    if(!isMobile() && !window.adblockDetected)
    {
      showAdContainer(divIdLoadingBanner);
      requestLoadingAd();
    }
  }
}

//Used by playwire to ensure everything still gets initialised correctly for season pass holders 
function showDummyMainMenuBanner()
{
  if(!offCanvasAdsEnabled)
  {
    hideWinCeremonyBanner();
    hideLongBanner();
    hideMainMenuBanner();
    hideSpectateBanner();

    showAdContainer(divIdMainMenuBanner);

    requestDummyMainMenuAd();
  }
}

function hideMainMenuBanner()
{
  if(!offCanvasAdsEnabled)
  {
    hideAdContainer(divIdMainMenuBanner);
    hideMainMenuAd();
  }
}

function showMainMenuBanner()
{
  if(!offCanvasAdsEnabled)
  {
    hideWinCeremonyBanner();
    hideLongBanner();
    hideSpectateBanner();

    //check for adblock specifically for main menu banner as we show our own disable blocker panel 
    if(!isMobile() && !window.adblockDetected)
    {
      showAdContainer(divIdMainMenuBanner);
      requestMainMenuAd();
    }
  }
}

function hideWinCeremonyBanner()
{
  if(!offCanvasAdsEnabled)
  {
    hideAdContainer(divIdWinCeremonyBanner);
    hideWinCeremonyAd();
  }
}

function showWinCeremonyBanner()
{
  if(!offCanvasAdsEnabled)
  {
    hideLongBanner();
    hideMainMenuBanner();
    hideSpectateBanner();

    showAdContainer(divIdWinCeremonyBanner);
    requestWinCeremonyAd();
  }
}

function hideSpectateBanner()
{
  if(!offCanvasAdsEnabled)
  {
    hideAdContainer(divIdSpectateBanner);
    hideSpectateAd();
  }
}

function showSpectateBanner()
{
  if(!offCanvasAdsEnabled)
  {
    hideLongBanner();
    hideMainMenuBanner();
    hideWinCeremonyBanner();

    showAdContainer(divIdSpectateBanner);
    requestSpectateAd();
  }
}

function hideLongBanner()
{
  if(offCanvasAdsEnabled)
  {
    if(onlyShowOffCanvasAdsOnDeath)
    {
      hideBtmAdContainer();
      hideRightAdContainer();
      updateGameCanvasSize();
    }
    else if(!showBtmAd)
    {
      //not showing off canvas btm ad so destroy standard on canvas death banner
      hideAdContainer(divIdDeathBanner);
      hideDeathAd();
    }
  }
  else
  {
    hideAdContainer(divIdDeathBanner);
    hideDeathAd();
  }
}

function showLongBanner()
{
  if(offCanvasAdsEnabled)
  {
    if(onlyShowOffCanvasAdsOnDeath)
    {
      if(showBtmAd)
      {
        updateBtmAdContainer();
      }

      if(showRightAd)
      {
        updateRightAdContainer();
      }

      updateGameCanvasSize();
    }
    else if(!showBtmAd)
    {
      //not showing off canvas btm ad so show standard on canvas death banner
      hideWinCeremonyBanner();
      hideMainMenuBanner();

      showAdContainer(divIdDeathBanner);
      requestDeathAd();
    }
  }
  else
  {
    hideWinCeremonyBanner();
    hideMainMenuBanner();

    showAdContainer(divIdDeathBanner);
    requestDeathAd();
  }
}

function showNonRewardedInterstitial(audioOn, interstitialType, interstitialName)
{
  if(!window.adblockDetected)
  {
    //showInterstitial(audioOn, 'start', 'pregame');
    //showInterstitial(audioOn, 'next', 'winceremony')
    showInterstitial(audioOn, interstitialType, interstitialName)
  }
  else
  {
    interstitialError(false);
  }
}

function interstitialStart(rewarded)
{
  isVideoAdPlaying = true;

  window.unityGame.SendMessage(unityFirebaseGameOjbectName, "InterstitialStart", rewarded ? 1 : 0);

  if(offCanvasAdsEnabled)
  {
    hideAllOffCanvasAds();
  }
}

function interstitialError(rewarded)
{
  isVideoAdPlaying = false;

  window.unityGame.SendMessage(unityFirebaseGameOjbectName, "InterstitialFailed", rewarded ? 1 : 0);

  if(offCanvasAdsEnabled)
  {
    refreshAllOffCanvasAds();
  }
}

function interstitialSkipped(rewarded)
{
  isVideoAdPlaying = false;

  window.unityGame.SendMessage(unityFirebaseGameOjbectName, "InterstitialSkipped", rewarded ? 1 : 0);

  if(offCanvasAdsEnabled)
  {
    refreshAllOffCanvasAds();
  }
}

function interstitialNoFill(rewarded)
{
  isVideoAdPlaying = false;

  window.unityGame.SendMessage(unityFirebaseGameOjbectName, "InterstitialNoFill", rewarded ? 1 : 0);

  if(offCanvasAdsEnabled)
  {
    refreshAllOffCanvasAds();
  }
}

function interstitialComplete(rewarded)
{
  isVideoAdPlaying = false;

  window.unityGame.SendMessage(unityFirebaseGameOjbectName, "InterstitialComplete", rewarded ? 1 : 0);

  if(offCanvasAdsEnabled)
  {
    refreshAllOffCanvasAds();
  }
}

function canShowLoadingAdBanner()
{
  return (!window.adblockDetected &&
      (loadingState === "None" || loadingState === "Closing" || loadingState === "Closed") &&
      (userNoAdsEndTimestamp != null && userNoAdsEndTimestamp <= Date.now()) &&
      !isMobile());
}

function updateLoadingAdBanner()
{
  //poll to determine if we can show a loading ad or not
  loadingAdBannerIntervalId = setInterval(() =>
  {
    if(canShowLoadingAdBanner())
    {
      showLoadingBanner();
      showMainMenuBanner();
      clearInterval(loadingAdBannerIntervalId);
    }
    else if(userNoAdsEndTimestamp != null)
    {
      clearInterval(loadingAdBannerIntervalId);
    }
  }, loadingAdBannerPollDelay);
}
