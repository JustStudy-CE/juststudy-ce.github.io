"use strict";

if(typeof(Worker) !== "undefined")
{
    const checkTimeDelay = 500;
    let consoleOpen = false;
    let checkTimestamp = Date.now();

    const consoleCheckerThread = new Worker(ccWorkerScriptSrc);

    consoleCheckerThread.addEventListener("message", (msg) =>
    {
        checkTimestamp = msg.data;
    });

    setInterval(() =>
    {
        const wasConsoleOpen = consoleOpen;
        consoleOpen = (Date.now() - checkTimestamp > checkTimeDelay);
        
        if(consoleOpen && !wasConsoleOpen)
        {
            console.log("%cSTOP!", "color:red; font-style:heavy; font-size:75px; font-weight:900; text-shadow:2px 2px 0 rgb(0,0,0)");
            console.log("%cThis is a browser feature intended for developers. If someone told you to copy and paste something here, there is a good chance that they are attempting to gain access to your account and personal information!", "font-size:20px;");
        }
    }, checkTimeDelay);

    ////Alternative just to pause lock up debugger when console is open 
    // (function pauseGameWhenConsoleOpen()
    // {
    //     try
    //     {
    //         (function pauseDebugger()
    //         {
    //             debugger;
    //             pauseDebugger()
    //         })()
    //     }
    //     catch (e)
    //     {
    //         setTimeout(pauseGameWhenConsoleOpen, 5000)
    //     }
    // })()
}
