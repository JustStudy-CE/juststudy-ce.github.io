'use strict';

//Keep these in global scope
let adBreak;
let adConfig;

//PLAYWIRE
if(isPlaywireEnabled())
{
    //PLAYWIRE RAMP v1.0
    // var ramp = {config: '//config.playwire.com/1024690/v2/websites/73592/banner.json' };
    //
    // var playwireScript = document.createElement("script");
    // playwireScript.id = "ramp";
    // playwireScript.type = "text/javascript";
    // playwireScript.async = true;
    // playwireScript.src = "//cdn.intergient.com/ramp.js";
    // document.head.appendChild(playwireScript);

    //PLAYWIRE RAMP v2.0
    window.ramp = window.ramp || {};
    window.ramp.que = window.ramp.que || [];
    window.ramp.passiveMode = true;
    window.ramp.onReady = function()
    {
        playwireRampInitialised = true;

        //ads stealing focus bugfix
        const handleSlotRenderEnded = () => {
            let hasFocus = true;
            let intervalId;

            const handleBlur = () => {
                hasFocus = false;
            };

            const handleFocus = () => {
                hasFocus = true;
            };

            window.addEventListener('blur', handleBlur);
            window.addEventListener('focus', handleFocus);

            intervalId = setInterval(() => {
                if (!hasFocus) {
                    window.focus();
                    clearInterval(intervalId);
                    window.removeEventListener('blur', handleBlur);
                    window.removeEventListener('focus', handleFocus);
                } else {
                    clearInterval(intervalId);
                    window.removeEventListener('blur', handleBlur);
                    window.removeEventListener('focus', handleFocus);
                }
            }, 1000);
        };

        window.googletag.pubads().addEventListener('slotRenderEnded', handleSlotRenderEnded);
    };

    window._pwGA4PageviewId = ''.concat(Date.now());
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () {
        dataLayer.push(arguments);
    };
    gtag('js', new Date());
    gtag('config', 'G-F2WLE0BJLM', { 'send_page_view': false, 'cookie_flags': 'samesite=none;secure' });
    gtag(
        'event',
        'ramp_js',
        {
            'send_to': 'G-F2WLE0BJLM',
            'pageview_id': window._pwGA4PageviewId
        }
    );

    var playwireScript = document.createElement("script");
    playwireScript.type = "text/javascript";
    playwireScript.async = true;
    playwireScript.src = "//cdn.intergient.com/1024690/73592/ramp.js";
    document.head.appendChild(playwireScript);

    //PLAYWIRE PRECONNECTS
    addPreconnectLink("https://cdn.intergi.com", true);
    addPreconnectLink("https://cdn.intergient.com", true);
    addPreconnectLink("https://securepubads.g.doubleclick.net", true);
    addPreconnectLink("https://cdn.playwire.com", true);
    addPreconnectLink("https://z.moatads.com", true);

    function addPreconnectLink(preconnectUrl, crossOriginEnabled)
    {
        var link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = preconnectUrl;

        if(crossOriginEnabled)
        {
            link.crossOrigin = 'anonymous';
        }

        document.head.appendChild(link);
    }
}

//ADINPLAY
if(isAdinPlayEnabled())
{
    window.aiptag = window.aiptag || {cmd: []};
    aiptag.cmd.display = aiptag.cmd.display || [];
    aiptag.cmd.player = aiptag.cmd.player || [];

    //CMP tool settings
    aiptag.cmp = {
        show: true,
        position: "bottom",  //centered, bottom
        button: false,
        buttonText: "Privacy settings",
        buttonPosition: "bottom-left" //bottom-left, bottom-right, top-left, top-right
    }

    //init video player
    if(videoAdProvider === AdProviderAdinplay)
    {
        aiptag.cmd.player.push(function() {
            aiptag.adplayer = new aipPlayer({
                AD_WIDTH: 960,
                AD_HEIGHT: 540,
                AD_DISPLAY: 'fullscreen', //default, fullscreen, center, fill
                LOADING_TEXT: 'loading advertisement',
                PREROLL_ELEM: function(){return document.getElementById('preroll');},
                AIP_COMPLETE: function(evt){onInterstitialComplete(evt);},
                AIP_REWARDEDCOMPLETE: function(evt){onRewardedInterstitialComplete(evt);},
                AIP_REWARDEDGRANTED: function(){onRewardedInterstitialGranted();}
            });
        });
    }

    var adinplayScript = document.createElement("script");
    adinplayScript.type = "text/javascript";
    adinplayScript.async = true;
    adinplayScript.src = "//api.adinplay.com/libs/aiptag/pub/SHK/smashkarts.io/tag.min.js";
    document.head.appendChild(adinplayScript);
}

//GOOGLE H5 GAMES
if(isGoogleH5GamesEnabled())
{
    window.googletag = window.googletag || { cmd: [] };
    googletag.cmd.push(() =>
    {
        var url = (window.location != window.parent.location) ? document.referrer : document.location.href;
        if (url.startsWith("https://smashkarts.io/") || url.startsWith("http://smashkarts.io/") ||
            url.startsWith("https://www.smashkarts.io/") || url.startsWith("http://www.smashkarts.io/")
            || url.includes("smashkarts-dev.firebaseapp.com"))
        {
            (function ()
            {
                var afgads = document.createElement('script');
                afgads.setAttribute("async", true);
                afgads.setAttribute("type", "text/javascript");
                afgads.setAttribute("data-ad-frequency-hint", "30s");
                afgads.setAttribute("data-ad-client", "ca-pub-1463476156508236");
                afgads.setAttribute("src", "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js");
                var node = document.getElementsByTagName('script')[0];
                node.parentNode.insertBefore(afgads, node);
            })();

            window.adsbygoogle = window.adsbygoogle || [];
            adBreak = adConfig = function (o) { adsbygoogle.push(o); };
            adConfig({ preloadAdBreaks: "on", sound: "on" });
        }
    });
}
