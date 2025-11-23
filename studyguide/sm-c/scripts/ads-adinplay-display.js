'use strict';

///////////////////////////
//ad tags
const adTagLoadingBanner = "smashkarts-io_300x600_2";
const adTagMainMenuBanner = "smashkarts-io_300x250";
const adTagWinCeremonyBanner = "smashkarts-io_300x250_2";
const adTagSpectateBanner = "smashkarts-io_300x250_3";
const adTagDeathBannerWeb = "smashkarts-io_728x90-new";
const adTagDeathBannerMobile = "smashkarts-io_320x100";

var currShownAdElementIds = [];

const officialFullscreenIFramedProxies = [
    "https://schoolkarts.com/",
    "https://www.gstatic.com/"
]

function hasAdContent(adElementId)
{
    const ad = document.getElementById(adElementId);

    return (ad != null && ad.innerHTML);
}

function showAd(adElementId)
{
    const ad = document.getElementById(adElementId);

    if(ad != null)
    {
        ad.style.display = "block";
    }
}

function requestAd(adElementId, adShownTimestamp)
{
    if(currShownAdElementIds.includes(adElementId))
        return;

    if(Date.now() >= (adShownTimestamp.val + bannerMinRefreshDelayMillisecs) || !hasAdContent(adElementId))
    {
        adShownTimestamp.val = Date.now();

        destroyAd(adElementId);

        currShownAdElementIds.push(adElementId);

        aiptag.cmd.display.push(function()
        {
            aipDisplayTag.display(adElementId);
            showAd(adElementId);
        });
    }
}

function hideAd(adElementId)
{
    if(currShownAdElementIds.includes(adElementId))
    {
        //for adinplay we dont distingush between hiding and destroying
        destroyAd(adElementId);

        //if we were hiding you would need to reset the currShownAdElement
        //currShownAdElementId = null;
    }
}

function destroyAd(adElementId)
{
    const ad = document.getElementById(adElementId);

    if(ad != null)
    {
        ad.style.display = "none";
        //ad.innerHTML = "";
        aiptag.cmd.display.push(function()
        {
            aipDisplayTag.destroy(adElementId);
        });
    }

    const indexToRemove = currShownAdElementIds.indexOf(adElementId);

    if(indexToRemove >= 0)
    {
        currShownAdElementIds.splice(indexToRemove, 1);
    }
}

function requestLoadingAd()
{
    requestAd(adTagLoadingBanner, loadingBannerShownTimestamp);

    //@podonnell: breaking rev - Dec 11th
    //if(!isIFramed() || isOfficialFullscreenIFramedProxy())
    // {
    //     requestAd(adTagLoadingBanner, loadingBannerShownTimestamp);
    // }
}

function hideLoadingAd()
{
    hideAd(adTagLoadingBanner);
}

function requestMainMenuAd()
{
    requestAd(adTagMainMenuBanner, mainMenuBannerShownTimestamp);

    //@podonnell: breaking rev - Dec 11th
    // if(!isIFramed() || isOfficialFullscreenIFramedProxy())
    // {
    //     requestAd(adTagMainMenuBanner, mainMenuBannerShownTimestamp);
    // }
}

function hideMainMenuAd()
{
    hideAd(adTagMainMenuBanner);
}

function requestWinCeremonyAd()
{
    requestAd(adTagWinCeremonyBanner, winCeremonyBannerShownTimestamp);
}

function hideWinCeremonyAd()
{
    hideAd(adTagWinCeremonyBanner);
}

function requestSpectateAd()
{
    requestAd(adTagSpectateBanner, spectateBannerShownTimestamp);
}

function hideSpectateAd()
{
    hideAd(adTagSpectateBanner);
}

function requestDeathAd()
{
    if(isMobile())
    {
        requestAd(adTagDeathBannerMobile, deathBannerShownTimestamp);
    }
    else
    {
        requestAd(adTagDeathBannerWeb, deathBannerShownTimestamp);
    }
}

function hideDeathAd()
{
    hideAd(adTagDeathBannerMobile);
    hideAd(adTagDeathBannerWeb);
}

function requestOffCanvasAd(adResArrayToHide, adTagIdToShow)
{
    hideOffCanvasAds(adResArrayToHide);

    currShownAdElementIds.push(adTagIdToShow);

    aiptag.cmd.display.push(function()
    {
        aipDisplayTag.display(adTagIdToShow);
        showAd(adTagIdToShow);
    });
}

function hideOffCanvasAds(adResArray)
{
    adResArray.forEach(adRes => {
        destroyAd(adRes.adId);
    });
}

function isOfficialFullscreenIFramedProxy()
{
    const url = document.referrer; 
    return url != null && officialFullscreenIFramedProxies.includes(url);
}
