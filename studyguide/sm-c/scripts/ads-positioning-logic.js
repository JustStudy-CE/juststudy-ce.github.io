'use strict';

var gameContainer;
function updateAdSizes()
{
  if(gameContainer == null)
  {
    gameContainer = document.getElementById('gameContainer');
  }

  if(gameContainer != null)
  {
    updateLongBanner();
    
    if(!offCanvasAdsEnabled)
    {
      updateMainMenuBanner();
      updateWinBanner();
      updateSpectateBanner();
    }
  }
}

var mainMenuBanner;
const defaultMainMenuScaleStr = "scale(100%, 100%)";
const defaultMainMenuTranslateStr = "translate(0px, -50%)";
function updateMainMenuBanner()
{
  if(mainMenuBanner == null)
  {
    mainMenuBanner = document.getElementById(divIdMainMenuBanner);
  }

  if(mainMenuBanner != null && mainMenuBanner.style.display !== "none")
  {
    var adContainerW = mainMenuBanner.offsetWidth;
    var adContainerH = mainMenuBanner.offsetHeight;
    var gameContainerH = gameContainer.offsetHeight;

    if(adContainerH/gameContainerH > 0.75)
    {
      var newHeight = gameContainerH * 0.75;
      var newScale = newHeight / adContainerH;
      var scaleString = "scale( " + newScale + "," + newScale + ")";
      mainMenuBanner.style.transform = `${scaleString} ${defaultMainMenuTranslateStr}`;
    }
    else
    {
      mainMenuBanner.style.transform =  `${defaultMainMenuScaleStr} ${defaultMainMenuTranslateStr}`
    }
  }
}

var winBanner;
const defaultWinCeremonyScaleStr = "scale(100%, 100%)";
const defaultWinCeremonyTranslateStr = "translate(0px, 0px)"; //"translate(0px, -50%)"
function updateWinBanner()
{
  if(winBanner == null)
  {
    winBanner = document.getElementById(divIdWinCeremonyBanner);
  }

  if(winBanner != null && winBanner.style.display !== "none")
  {
    var adContainerW = winBanner.offsetWidth;
    var adContainerH = winBanner.offsetHeight;
    var gameContainerH = gameContainer.offsetHeight;

    if(adContainerH/gameContainerH > 0.75)
    {
      var newHeight = gameContainerH * 0.75;
      var newScale = newHeight / adContainerH;
      var scaleString = "scale( " + newScale + "," + newScale + ")";
      winBanner.style.transform = `${scaleString} ${defaultWinCeremonyTranslateStr}`;
    }
    else
    {
      winBanner.style.transform =  `${defaultWinCeremonyScaleStr} ${defaultWinCeremonyTranslateStr}`
    }
  }
}

var spectateBanner;
const defaultSpectateScaleStr = "scale(100%, 100%)";
const defaultSpectateTranslateStr = "translate(0px, 0px)"; //"translate(0px, -50%)"
function updateSpectateBanner()
{
  if(spectateBanner == null)
  {
    spectateBanner = document.getElementById(divIdSpectateBanner);
  }

  if(spectateBanner != null && spectateBanner.style.display !== "none")
  {
    var adContainerW = spectateBanner.offsetWidth;
    var adContainerH = spectateBanner.offsetHeight;
    var gameContainerH = gameContainer.offsetHeight;

    if(adContainerH/gameContainerH > 0.75)
    {
      var newHeight = gameContainerH * 0.75;
      var newScale = newHeight / adContainerH;
      var scaleString = "scale( " + newScale + "," + newScale + ")";
      spectateBanner.style.transform = `${scaleString} ${defaultSpectateTranslateStr}`;
    }
    else
    {
      spectateBanner.style.transform =  `${defaultSpectateScaleStr} ${defaultSpectateTranslateStr}`
    }
  }
}

var longBanner;
function updateLongBanner()
{
  if(longBanner == null)
  {
    longBanner = document.getElementById(divIdDeathBanner);

    if(isMobile() && longBanner != null)
    {
      //revert from right to center for mobile
      longBanner.style.right = "auto"; 
    }
  }

  if(longBanner != null && longBanner.style.display !== "none")
  {
    longBanner.style.bottom = 0 + "px";
    //longBanner.style.width = 100 + "vw";
    //longBanner.style.width = gameContainer.offsetWidth + "px";

    var adContainerW = longBanner.offsetWidth;
    var adContainerH = longBanner.offsetHeight;
    var gameContainerH = gameContainer.offsetHeight;

    if(isMobile())
    {
      longBanner.style.top = (gameContainerH - adContainerH) + "px";
      longBanner.style.transform =  "scale( 1, 1) translate(0px, -10px)";
    }
    else
    {
      //reserve 30% screen height for horizontal ads, 75% for vertical ads
      let heightPercentage = (adContainerW > adContainerH) ? 0.3 : 0.75;

      if(adContainerH/gameContainerH > heightPercentage)
      {
        const newHeight = gameContainerH * heightPercentage;
        const newScale = newHeight / adContainerH;
        const scaleString = "scale( " + newScale + "," + newScale + ")";
        //const offsetX = 0;
        const offsetX = (adContainerW - adContainerW*newScale)/2 - 10;
        const offsetY = (adContainerH - adContainerH*newScale)/2 - 10;
        const translateString = "translate(" + offsetX + "px, " + offsetY + "px)";
        longBanner.style.transform = translateString + " " + scaleString;
      }
      else
      {
        longBanner.style.transform =  "scale( 1, 1) translate(-10px, -10px)";
      }
    }
  }
}

//window.addEventListener("load", updateAdSizes);
//window.addEventListener("resize", updateAdSizes);
setInterval(updateAdSizes, 500);
