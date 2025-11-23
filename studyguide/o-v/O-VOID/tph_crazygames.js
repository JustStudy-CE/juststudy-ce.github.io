// Private
function crazy_callback(event, output = null) {
    gml_Script_gmcallback_crazy_callback(null, null, event, output);
}

function adStarted() {
    console.log("CrazyGamesSDK: ad started");
    crazy_callback("crazy.break.started");
}

function adError() {
    console.log("CrazyGamesSDK: ad error");
    crazy_callback("crazy.break.error");
}

function adFinished() {
    console.log("CrazyGamesSDK: ad finished");
    crazy_callback("crazy.break.finished");
}

function bannerRendered() {
    console.log("CrazyGamesSDK: banner rendered");
    crazy_callback("crazy.banner.rendered");
}

function bannerError() {
    console.log("CrazyGamesSDK: banner error");
    crazy_callback("crazy.banner.error");
}

function adblockDetection(event) {
    // if(event.hasAdblock) {
    //     console.log('User is using an adblocker');
    //     crazy_callback("crazy.adblock.detected");
    // } else {
    //     console.log('User is NOT using an adblocker');
    //     crazy_callback("crazy.adblock.notDetected");
    // }
    console.log('User is NOT using an adblocker');
    crazy_callback("crazy.adblock.notDetected");
};

function sdkInitialized(event) {
    const userInfo = event.userInfo;
    console.log(userInfo);
    /* UserInfo object example
    userInfo: {
        countryCode: "FR", // ISO 3166-1 alpha-2 country code
        // For browser and os, format is the same as https://github.com/faisalman/ua-parser-js
        browser: {
            name: "Chrome",
            version: "87.0.4280.141"
        },
        os: {
            name: "Windows",
            version: "10"
        },
        device: {
            type: "desktop" // possible values: "desktop", "tablet", "mobile"
        }
    }
    */
    const json = JSON.stringify(userInfo)
    crazy_callback("crazy.sdk.initialized", json);
};

function installListeners() {
    const crazysdk = window.CrazyGames.CrazySDK.getInstance();
    crazysdk.addEventListener('adStarted', adStarted);
    crazysdk.addEventListener('adError', adError);
    crazysdk.addEventListener('adFinished', adFinished);
    
    crazysdk.addEventListener('bannerRendered', (event) => {
        console.log(`Banner for container ${event.containerId} has been rendered!`);
    });
    crazysdk.addEventListener('bannerError', (event) => {
        console.log(`Banner render error: ${event.error}`);
    });

    crazysdk.addEventListener('adblockDetectionExecuted', adblockDetection);

    crazysdk.addEventListener('initialized', sdkInitialized);

    window.addEventListener('wheel', event => event.preventDefault(), { passive: false });
    
    window.addEventListener('keydown', event => {
        if (['ArrowUp','ArrowDown',' '].includes(event.key)) {
            event.preventDefault();
        }
    });
}

function removeListeners() {
    const crazysdk = window.CrazyGames.CrazySDK.getInstance();
    crazysdk.removeEventListener('adStarted', this.adStarted);
    crazysdk.removeEventListener('adError', this.adError);
    crazysdk.removeEventListener('adFinished', this.adFinished);
    crazysdk.removeEventListener('bannerRendered', this.bannerRendered);
    crazysdk.removeEventListener('bannerError', this.bannerError);
    crazysdk.removeEventListener('adblockDetectionExecuted', this.adblockDetection);
}

function parseInviteLink(param) {
	const href = window.location.href;
	const reg = new RegExp('[?&]' + param + '=([^&#]*)', 'i');
	const string = reg.exec(href);
	return string ? string[1] : null;
}

// Public
function crazy_init() {
    console.log("CrazyGamesSDK: init");
    const crazysdk = window.CrazyGames.CrazySDK.getInstance();
    crazysdk.init();
    installListeners();
}

function crazy_gameplay_start() {
    console.log("CrazyGamesSDK: gameplay start");
    const crazysdk = window.CrazyGames.CrazySDK.getInstance();
    crazysdk.gameplayStart();
}

function crazy_gameplay_stop() {
    console.log("CrazyGamesSDK: gameplay stop");
    const crazysdk = window.CrazyGames.CrazySDK.getInstance();
    crazysdk.gameplayStop();
}

function crazy_happy() {
    console.log("CrazyGamesSDK: happytime");
    const crazysdk = window.CrazyGames.CrazySDK.getInstance();
    crazysdk.happytime();
}

function crazy_game_finished() {
    removeListeners();
}

function crazy_break(type) {
    console.log("CrazyGamesSDK: ad break");
    const crazysdk = window.CrazyGames.CrazySDK.getInstance();
    crazysdk.requestAd(type);
}

function crazy_invite_link(args) {
	console.log("CrazyGamesSDK: invite link");
    const crazysdk = window.CrazyGames.CrazySDK.getInstance();
    const jsobject = JSON.parse(args);
    return crazysdk.inviteLink(jsobject);
}

function crazy_get_invite_param(param) {
	return parseInviteLink(param);
}

function crazy_request_banner(args) {
    const crazysdk = window.CrazyGames.CrazySDK.getInstance();
    const jsobject = JSON.parse(args);
    crazysdk.requestBanner(jsobject);
}

function crazy_request_responsive_banner(args) {
    const crazysdk = window.CrazyGames.CrazySDK.getInstance();
    const jsobject = JSON.parse(args);
    console.log(jsobject);
    crazysdk.requestResponsiveBanner(bannerArray);
}

function crazy_show_banner(containerId) {
    document.getElementById(containerId).classList.remove("hidden");
}

function crazy_hide_banner(containerId) {

    const crazysdk = window.CrazyGames.CrazySDK.getInstance();
    document.getElementById(containerId).classList.add("hidden");
    crazysdk.clearBanner(containerId);

}

function crazy_hide_all_banners() {

    const crazysdk = window.CrazyGames.CrazySDK.getInstance();
    const containers = document.getElementsByClassName("crazy_banner");
    for (let i = 0; i < containers.length; i++) {
        containers[i].classList.add("hidden");
    }
    crazysdk.clearAllBanners();

}

function crazy_sdk_game_loading_start() {
    const crazysdk = window.CrazyGames.CrazySDK.getInstance();
    crazysdk.sdkGameLoadingStart();
}

function crazy_sdk_game_loading_stop() {
    const crazysdk = window.CrazyGames.CrazySDK.getInstance();
    crazysdk.sdkGameLoadingStop();
}