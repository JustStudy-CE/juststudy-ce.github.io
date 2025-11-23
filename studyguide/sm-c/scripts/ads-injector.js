'use strict';

//PLAYWIRE
if(isPlaywireEnabled())
{
    var pwCommonScript = document.createElement("script");
    pwCommonScript.src = pwCommonScriptSrc;
    document.body.appendChild(pwCommonScript);

    if(displayAdProvider === AdProviderPlaywire)
    {
        var pwDisplayScript = document.createElement("script");
        pwDisplayScript.src = pwDisplayScriptSrc;
        document.body.appendChild(pwDisplayScript);
    }

    if(videoAdProvider === AdProviderPlaywire)
    {
        var pwVideoScript = document.createElement("script");
        pwVideoScript.src = pwVideoScriptSrc;
        document.body.appendChild(pwVideoScript);
    }
}

//ADINPLAY
if(isAdinPlayEnabled())
{
    if(displayAdProvider === AdProviderAdinplay)
    {
        var adinplayDisplayScript = document.createElement("script");
        adinplayDisplayScript.src = adinplayDisplayScriptSrc;
        document.body.appendChild(adinplayDisplayScript);
    }

    if(videoAdProvider === AdProviderAdinplay)
    {
        var adinplayVideoScript = document.createElement("script");
        adinplayVideoScript.src = adinplayVideoScriptSrc;
        document.body.appendChild(adinplayVideoScript);
    }
}

//GOOGLE H5 GAMES
if(isGoogleH5GamesEnabled())
{
    var googleH5GamesVideoScript = document.createElement("script");
    googleH5GamesVideoScript.src = googleH5GamesVideoScriptSrc;
    document.body.appendChild(googleH5GamesVideoScript);
}

//DUMMY ADS
if(displayAdProvider === AdProviderDummy)
{
    var dummyDisplayScript = document.createElement("script");
    dummyDisplayScript.src = dummyDisplayScriptSrc;
    document.body.appendChild(dummyDisplayScript);
}

if(videoAdProvider === AdProviderDummy)
{
    var dummyVideoScript = document.createElement("script");
    dummyVideoScript.src = dummyVideoScriptSrc;
    document.body.appendChild(dummyVideoScript);
}
