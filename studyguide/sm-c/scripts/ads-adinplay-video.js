'use strict';

let aipRewardedAdAvailable = false;

function aipVideoPlayerInitialised()
{
    return (typeof aiptag.adplayer !== 'undefined');
}

function showInterstitial(audioOn, interstitialType, interstitialName)
{
    if (!isVideoAdPlaying && firebase.auth().currentUser != null)
    {
        //check if the adslib is loaded correctly or blocked by adblockers etc.
        if (aipVideoPlayerInitialised())
        {
            isVideoAdPlaying = true;

            interstitialStart(false);

            aiptag.cmd.player.push(function()
            {
                aiptag.adplayer.startPreRoll();
            });
        }
        else
        {
            //Adlib didnt load this could be due to an adblocker, timeout etc.
            //Please add your script here that starts the content, this usually is the same script as added in AIP_COMPLETE.
            console.log("Ad Could not be loaded, load your content here");

            isVideoAdPlaying = false;

            interstitialError(false);
        }
    }
}

function onInterstitialComplete(evt)
{
    /*******************
     ***** WARNING *****
     *******************
     Please do not remove the PREROLL_ELEM
     from the page, it will be hidden automaticly.
     */
    console.log("onInterstitialComplete: " + evt);

    isVideoAdPlaying = false;

    if(evt === "video-ad-completed")
    {
        interstitialComplete(false);
    }
    else if(evt === "video-ad-skipped")
    {
        interstitialSkipped(false);
    }
    else
    {
        interstitialError(false);
    }
}

function tryInitRewardedInterstitial(audioOn)
{
    if(!window.adblockDetected)
    {
        if(aipVideoPlayerInitialised())
        {
            initRewardedInterstitial();
        }
        else
        {
            //poll until video player is ready
            const checkVideoPlayerInterval = setInterval(() => {
                //player isnt ready => do nothing
                if (!aipVideoPlayerInitialised())
                    return;

                //player is ready => stop polling and send message to unity
                clearInterval(checkVideoPlayerInterval);
                initRewardedInterstitial();
            }, 1000);
        }
    }
}

function initRewardedInterstitial()
{
    if(!aipRewardedAdAvailable)
    {
        //It's important the EventListener rewardedSlotReady is added only once.
        if(aipAPItag.rewardedSlotEventListener !== true)
        {
            aipAPItag.rewardedSlotEventListener = true;
    
            aiptag.events.addEventListener("rewardedSlotReady", function (e)
            {
                if(e.detail.isEmpty !== true)
                {
                    //rewarded ad is ready to show
                    console.log("rewarded ad is ready to show");
                    aipRewardedAdAvailable = true;
                    window.unityGame.SendMessage(unityFirebaseGameOjbectName, "RewardedInterstitialAvailable");
                }
                else
                {
                    //There is no rewarded ad available
                    console.log("rewarded ad not available");
                    aipRewardedAdAvailable = false;
                }
            }, false);
        }
    
        //set the preload flag to true to use preloading of the rewarded ad
        aiptag.cmd.player.push(function() { aiptag.adplayer.startRewardedAd({preload: true, showLoading: false}); });
    }
    else
    {
        //rewarded ad already preloaded
        window.unityGame.SendMessage(unityFirebaseGameOjbectName, "RewardedInterstitialAvailable");
    }
}

function tryShowRewardedInterstitial(audioOn)
{
    if(!aipVideoPlayerInitialised() || !aipRewardedAdAvailable)
    {
        interstitialNoFill(true);
        return;
    }

    if (!isVideoAdPlaying && firebase.auth().currentUser != null)
    {
        isVideoAdPlaying = true;

        interstitialStart(true);

        aiptag.adplayer.showRewardedAd();

        aipRewardedAdAvailable = false;

        // aiptag.cmd.player.push(function() 
        // { 
        //    
        //     aiptag.adplayer.startRewardedAd(); 
        // });
    }
}

function onRewardedInterstitialGranted()
{
    console.log("Reward Granted");

    isVideoAdPlaying = false;

    interstitialComplete(true);
}

function onRewardedInterstitialComplete(evt)
{
    //evt can be: timeout, empty or closed
    console.log("Rewarded Ad Completed: " + evt);

    isVideoAdPlaying = false;

    if(evt === "closed")
    {
        //skipped by the user
        interstitialSkipped(true);
    }
    else
    {
        //timeout or empty
        interstitialNoFill(true);
    }
}
