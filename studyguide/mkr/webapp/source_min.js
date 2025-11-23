var pokiSite = true;
var pokiStopped = true;
function pokiEnsureStop() {
  if (!pokiStopped) {
    PokiSDK.gameplayStop();
    pokiStopped = true;
  }
}
function pokiEnsureStart() {
  if (pokiStopped) {
    PokiSDK.gameplayStart();
    pokiStopped = false;
  }
}
function setPokiInited() {
  PokiSDK.gameLoadingStart();
  sdkInited = true;
}
function initPokiSdk() {
  // if (!pokiDebug) {
  //   !function () {
  //     "use strict";

  //     var _0xa077b9 = window.location.hostname;
  //     var _0x5efbe0 = ["bG9jYWxob3N0", "LnBva2kuY29t", "LnBva2ktZ2RuLmNvbQ=="].map(function (_0x5bf831) {
  //       return atob(_0x5bf831);
  //     }).some(function (_0x5db4c7) {
  //       return function (_0x54b044, _0x1421f8) {
  //         return "." === _0x1421f8.charAt(0x0) ? -0x1 !== _0x54b044.indexOf(_0x1421f8, _0x54b044.length - _0x1421f8.length) : _0x1421f8 === _0x54b044;
  //       }(_0xa077b9, _0x5db4c7);
  //     });
  //   //   if (!_0x5efbe0) {
  //   //     window.location.href = atob("aHR0cHM6Ly9wb2tpLmNvbS9zaXRlbG9jaw==");
  //   //     if (window.top.location !== window.location) {
  //   //       window.top.location = window.location;
  //   //     }
  //   //   }
  //     console.log("avoided site lock")
  //   }();
  // }
  PokiSDK.init().then(() => {
    setPokiInited();
    console.log("here")
  }).catch(() => {
    console.log("here2")
    setPokiInited();
  });
}
function gameLoadingFinished() {
  PokiSDK.gameLoadingFinished();
}
function initSdk() {
  initPokiSdk();
}
function startGameSdk() {
  startGame();
}
function adInit() {
  console.log("adInit()");
  setTimeout(() => Module.ccall("ad_on_inited", "v"), 100);
}
function adInterstitialShow() {
    console.log("ahahah tried to give me ad with no reward");
//   PokiSDK.commercialBreak().then(() => {
//     setGameFocus(true);
//     Module.ccall("ad_interstitial_on_showed", "v", ["number"], [1]);
//   });
    setGameFocus(true);
    Module.ccall("ad_interstitial_on_showed", "v", ["number"], [1]);
}
function adRewardedShow() {
     console.log("ahahah tried to give me add");
     setTimeout(() => {
        Module.ccall("ad_rewarded_on_rewarded", "v");
     }, 1000);
     Module.ccall("ad_rewarded_on_showed", "v", ["number"], [1]);
     Module.ccall("ad_rewarded_on_rewarded", "v");
//   });
}
var Audio = {};
Audio.inited = false;
Audio.ctx = null;
Audio.timer = null;
Audio.allowed = false;
Audio.paused = false;
Audio.postInit = [];
Audio.init = function (samples, sampleRate) {
  Audio.inited = true;
  Audio.samples = samples;
  Audio.sampleRate = sampleRate;
  Audio.bufferingDelay = 50 / 1000;
  Audio.bufferDurationSecs = Audio.samples / Audio.sampleRate;
  Audio.nextPlayTime = 0;
  Audio.numSimultaneouslyQueuedBuffers = 5;
  Audio.paused = false;
  Audio.resume();
};
Audio.deinit = function () {
  Audio.allowed = false;
  Audio.inited = false;
};
Audio.allow = function () {
  Audio.allowed = true;
  for (let i = 0; i < Audio.postInit.length; i++) {
    Audio.postInit[i]();
  }
  Audio.postInit = [];
  document.removeEventListener("keydown", Audio.initCtx);
  document.removeEventListener("mousedown", Audio.initCtx);
  document.removeEventListener("touchend", Audio.initCtx);
};
Audio.queuedata = function () {
  if (!Audio.ctx || !Audio.allowed) {
    if (Audio.inited) _webaudio_fill();
    return;
  }
  for (let i = 0; i < Audio.numSimultaneouslyQueuedBuffers; ++i) {
    const secsUntilNextPlayStart = Audio.nextPlayTime - Audio.ctx.currentTime;
    if (
      secsUntilNextPlayStart >=
      Audio.bufferingDelay +
        Audio.bufferDurationSecs * Audio.numSimultaneouslyQueuedBuffers
    )
      return;
    Audio.data = _webaudio_fill();
    Audio.push(Audio.data);
  }
};
Audio.push = function () {
  if (Audio.paused) return;
  const curtime = Audio.ctx.currentTime;
  const playtime = Math.max(curtime + Audio.bufferingDelay, Audio.nextPlayTime);
  Audio.nextPlayTime = playtime + Audio.bufferDurationSecs;
  const buffer = Audio.ctx.createBuffer(1, Audio.samples, Audio.sampleRate);
  const bufferData = buffer.getChannelData(0);
  for (let i = 0; i < Audio.samples; i++) {
    bufferData[i] = Module.getValue(Audio.data + 4 * i, "float");
  }
  const source = Audio.ctx.createBufferSource();
  source.buffer = buffer;
  source.connect(Audio.ctx.destination);
  if (typeof source["start"] != "undefined") {
    source.start(playtime);
  } else if (typeof source["noteOn"] != "undefined") {
    source.noteOn(playtime);
  }
};
Audio.caller = function () {
  if (!Audio.ctx) return;
  --Audio.numAudioTimersPending;
  Audio.queuedata();
  const secsUntilNextPlayStart = Audio.nextPlayTime - Audio.ctx.currentTime;
  const preemptBufferFeedSecs = Audio.bufferDurationSecs / 2.0;
  if (Audio.numAudioTimersPending < Audio.numSimultaneouslyQueuedBuffers) {
    ++Audio.numAudioTimersPending;
    if (Audio.numAudioTimersPending < Audio.numSimultaneouslyQueuedBuffers) {
      ++Audio.numAudioTimersPending;
      setTimeout(Audio.caller, 1.0);
    }
  }
};
Audio.onRuntimeInitialized = function () {
  document.addEventListener("keydown", Audio.initCtx);
  document.addEventListener("mousedown", Audio.initCtx);
  document.addEventListener("touchend", Audio.initCtx);
  Audio.initCtx();
};
Audio.initCtx = function (e) {
  if (!Audio.ctx) {
    Audio.ctx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (!Audio.allowed) {
    if (Audio.ctx.state === "running") {
      Audio.allow();
    } else {
      Audio.ctx.resume().then(function (state) {
        if (Audio.ctx.state === "running") {
          Audio.allow();
        }
      });
    }
  }
};
Audio.pause = function () {
  Audio.paused = true;
  if (Audio.timer) {
    clearTimeout(Audio.timer);
    Audio.numAudioTimersPending = 0;
    Audio.timer = null;
    Audio.nextPlayTime = 0;
  }
};
Audio.resume = function () {
  Audio.paused = false;
  Audio.numAudioTimersPending = 1;
  Audio.timer = setTimeout(Audio.caller, 1.0);
};
var Storage = {};
Storage.VERSION = 1;
Storage.PATH_VERSION = "com.martinmagni.mekorama/version";
Storage.PREFIX = "com.martinmagni.mekorama/data/";
Storage.LEGACY_PREFIX = "/";
Storage.stringToHex = function (str) {
  var hex = "";
  for (var i = 0; i < str.length; i++) {
    hex += str.charCodeAt(i).toString(16) + " ";
  }
  return hex;
};
Storage.arrayToBase64 = function (array) {
  let binaryString = "";
  for (let i = 0; i < array.byteLength; i++) {
    binaryString += String.fromCharCode(array[i]);
  }
  return window.btoa(binaryString);
};
Storage.base64ToArray = function (base64) {
  const binaryString = window.atob(base64);
  let array = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    array[i] = binaryString.charCodeAt(i);
  }
  return array;
};
Storage.get = function (prefix, path) {
  let base64;
  try {
    base64 = localStorage.getItem(prefix + path);
  } catch (e) {
    return null;
  }
  if (base64 === null) return null;
  try {
    return Storage.base64ToArray(base64);
  } catch (e) {
    console.error(
      `Failed to get path '${path}' with base64 '${Storage.stringToHex(
        base64
      )}'`
    );
    console.error(e);
    return null;
  }
};
Storage.put = function (prefix, path, data) {
  let base64;
  try {
    base64 = Storage.arrayToBase64(data);
  } catch (e) {
    console.error(
      `Failed to put path '${path}' with data '${Storage.stringToHex(data)}'`
    );
    console.error(e);
    return;
  }
  try {
    localStorage.setItem(prefix + path, base64);
  } catch (e) {}
};
Storage.migrate0 = function () {
  let old_version;
  try {
    old_version = localStorage.getItem(Storage.PATH_VERSION);
  } catch (e) {
    return;
  }
  if (old_version !== null) return;
  const version = 1;
  console.log(`Migrating Local Storage DB from ${old_version} to ${version}`);
  let len;
  try {
    len = localStorage.length;
  } catch (e) {
    return;
  }
  for (let i = 0; i < len; i++) {
    let key;
    try {
      key = localStorage.key(i);
    } catch (e) {
      continue;
    }
    if (key === null || !key.startsWith(Storage.LEGACY_PREFIX)) {
      continue;
    }
    const path = key.slice(Storage.LEGACY_PREFIX.length);
    const data = Storage.get(Storage.LEGACY_PREFIX, path);
    if (data === null) continue;
    Storage.put(Storage.PREFIX, path, data);
    try {
      localStorage.removeItem(Storage.LEGACY_PREFIX + path);
    } catch (e) {}
  }
  try {
    localStorage.setItem(
      Storage.PATH_VERSION,
      JSON.stringify({ version: version })
    );
  } catch (e) {}
};
Storage.sync = function () {
  let len;
  try {
    len = localStorage.length;
  } catch (e) {
    return;
  }
  const path_ptr = _malloc(Storage.PATH_MAX);
  let data_cap = 1024;
  let data_ptr = _malloc(data_cap);
  for (let i = 0; i < len; i++) {
    let key;
    try {
      key = localStorage.key(i);
    } catch (e) {
      continue;
    }
    if (key === null || !key.startsWith(Storage.PREFIX)) {
      continue;
    }
    const path = key.slice(Storage.PREFIX.length);
    const data = Storage.get(Storage.PREFIX, path);
    if (data === null) continue;
    const data_len = data.length;
    if (data_len > data_cap) {
      data_cap = data_len;
      _free(data_ptr);
      data_ptr = _malloc(data_cap);
    }
    Module.stringToUTF8(path, path_ptr, Storage.PATH_MAX);
    Module.writeArrayToMemory(data, data_ptr);
    _storage_write(path_ptr, data_ptr, data_len);
  }
  _free(path_ptr);
  _free(data_ptr);
};
Storage.init = function (path_max) {
  Storage.PATH_MAX = path_max;
  Storage.migrate0();
  Storage.sync();
  try {
    localStorage.setItem(
      Storage.PATH_VERSION,
      JSON.stringify({ version: Storage.VERSION })
    );
  } catch (e) {}
};
Storage.remove = function (path_ptr) {
  const path = Storage.PREFIX + Module.UTF8ToString(path_ptr);
  try {
    localStorage.removeItem(path);
  } catch (e) {}
};
Storage.write = function (path_ptr, data_ptr, data_len) {
  const path = Module.UTF8ToString(path_ptr);
  const data = new Uint8Array(Module.HEAPU8.buffer, data_ptr, data_len);
  Storage.put(Storage.PREFIX, path, data);
};
var postRunDone = false;
var theDomLoaded = false;
var sdkInited = false;
var gameReadyToStart = false;
var requestedCanvas = false;
var adblocker = false;
var gameStarted = false;
var updatedScreenSize = false;
var startupTimeStr = "";
var loadProgressFrac = 0;
var fakeProgressPercentStart = 80 + Math.random() * 15;
window.addEventListener("DOMContentLoaded", domContentLoaded);
window.addEventListener("load", function () {
  console.log("Load event received");
  if (inIframe()) {
    document.addEventListener("click", (ev) => {
      let canvas = document.getElementById("canvas");
      if (canvas) {
        canvas.focus();
      }
    });
    window.addEventListener("keydown", (ev) => {
      if (
        ["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(
          ev.key
        )
      ) {
        ev.preventDefault();
      }
    });
    window.addEventListener("wheel", (ev) => ev.preventDefault(), {
      passive: false,
    });
  }
});
function touchStart(ev) {
  ev.preventDefault();
  for (let i = 0; i < ev.changedTouches.length; i++) {
    let t = ev.changedTouches.item(i);
    _touch_start(t.identifier);
    _touch_move(t.identifier, t.clientX, t.clientY);
  }
}
function touchMove(ev) {
  ev.preventDefault();
  for (let i = 0; i < ev.changedTouches.length; i++) {
    let t = ev.changedTouches.item(i);
    _touch_move(t.identifier, t.clientX, t.clientY);
  }
}
function touchEnd(ev) {
  ev.preventDefault();
  for (let i = 0; i < ev.changedTouches.length; i++) {
    let t = ev.changedTouches.item(i);
    _touch_end(t.identifier);
  }
}
function mouseDown(ev) {
  ev.preventDefault();
  _mouse_updown(ev.button, ev.clientX, ev.clientY, 1);
}
function mouseMove(ev) {
  ev.preventDefault();
  _mouse_move(ev.button, ev.clientX, ev.clientY);
}
function mouseUp(ev) {
  ev.preventDefault();
  _mouse_updown(ev.button, ev.clientX, ev.clientY, 0);
}
function mouseWheel(ev) {
  ev.preventDefault();
  _mouse_scroll(ev.deltaX, ev.deltaY);
}
function inIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}
function updateLoadProgress() {
  let progressElement = document.getElementById("progress");
  if (progressElement) {
    progressElement.value = Math.round(
      loadProgressFrac * fakeProgressPercentStart
    );
    progressElement.max = 100;
  }
  if (loadProgressFrac >= 1) {
    console.log("Loading done");
    tryStartGame();
  }
}
function domContentLoaded() {
  initSdk();
  sdkInited = true;
  console.log("DOM content loaded event received");
  let canvas = document.getElementById("canvas");
  canvas.addEventListener("contextmenu", stopContextMenu);
  if (!postRunDone) {
    resizeCanvas(false);
  }
  window.addEventListener("blur", (ev) => setGameFocus(false));
  window.addEventListener("focus", (ev) => setGameFocus(true));
  canvas.onpointerdown = beginPointerDrag;
  canvas.onpointerup = endPointerDrag;
  theDomLoaded = true;
}
function beginPointerDrag(e) {
  let canvas = document.getElementById("canvas");
  canvas.setPointerCapture(e.pointerId);
}
function endPointerDrag(e) {
  let canvas = document.getElementById("canvas");
  canvas.releasePointerCapture(e.pointerId);
}
function setGameFocus(f) {
  if (postRunDone) {
    Module.ccall("set_game_focus", "v", ["number"], [f]);
  }
}
function getCSSRgb(color) {
  return `rgb(${Math.round(color[0])}, ${Math.round(color[1])}, ${Math.round(
    color[2]
  )})`;
}
let lastGradientStyleStr = "";
let lastDeepLinkLoadFraction = 0;
function getGradientStr(frac) {
  let fromColor = [frac * 0x70, frac * 0xe1, frac * 0xfd];
  let toColor = [frac * 0x00, frac * 0xa2, frac * 0xff];
  let str = `linear-gradient(135deg, ${getCSSRgb(fromColor)}, ${getCSSRgb(
    toColor
  )})`;
  return str;
}
function hideOverlayGradient() {
  var gradient = document.getElementById("gradient");
  gradient.style.display = "none";
}
var showedStartGameError = false;
function hideOverlay() {
  var playContent = document.getElementById("play_content");
  playContent.style.display = "none";
  hideOverlayGradient();
}
function startGame() {
  try {
    console.log("Registering event listeners");
    window.addEventListener("beforeunload", function (event) {
      Module.ccall("app_terminate_if_necessary", "v");
    });
    window.addEventListener("unload", function (event) {
      Module.ccall("app_terminate_if_necessary", "v");
    });
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "visible") {
        Module.ccall("app_resume", "v");
      } else {
        Module.ccall("app_pause", "v");
      }
    });
    console.log("Confirming accept in app");
    try {
      Module.ccall("user_accepted_and_clicked", "v");
      Module.ccall(
        "set_is_mobile",
        "v",
        ["number"],
        [matchMedia("(pointer:coarse)").matches]
      );
    } catch (err4) {}
    gameStarted = true;
    if (!updatedScreenSize) {
      resizeCanvas(true);
    }
  } catch (err) {
    if (!showedStartGameError) {
      let foundModuleAsm = false;
      let additionalInfo = "";
      try {
        if (Module["asm"]) {
          foundModuleAsm = true;
        }
      } catch (err2) {}
      if (!foundModuleAsm) {
        additionalInfo += "Could not find Module.asm";
      }
      console.log(
        `Error when starting game. Try to reload the page. Error message: ${err}. ${additionalInfo}`
      );
      showedStartGameError = true;
    }
  }
}
var startGameAttempts = 0;
var tryStartGameTimeout = null;
function tryStartGame() {
  console.log("tryStartGame()", gameReadyToStart);
  if (gameReadyToStart) {
    return;
  }
  if (!postRunDone || !theDomLoaded || !sdkInited) {
    startGameAttempts++;
    if (startGameAttempts == 20) {
      return;
    }
    if (tryStartGameTimeout != null) {
      clearTimeout(tryStartGameTimeout);
    }
    tryStartGameTimeout = setTimeout(tryStartGame, startGameAttempts * 100);
    console.log(
      "Not ready to start game yet...",
      postRunDone,
      theDomLoaded,
      sdkInited
    );
    return;
  }
  gameReadyToStart = true;
  gameLoadingFinished();
  console.log("Starting game");
  console.log("Calling commercial break");
  startGameSdk();
}
function simpleLogC(str) {
  if (postRunDone) {
    Module.ccall("log_simple", "v", ["string"], [str]);
  } else {
    console.log(str);
  }
}
function appErrorC(code, str) {
  if (postRunDone) {
    Module.ccall("app_error", "v", ["number", "string"], [code, str]);
  } else {
    console.error(str, code);
  }
}
function simpleAppErrorC(str) {
  appErrorC(1, str);
}
function parseUrlArgument(name) {
  let result = "";
  let str = window.location.search;
  if (str.length > 0 && str[0] == "?") {
    var arr = str.substr(1).split("&");
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].startsWith(name + "=")) {
        result = arr[i].substr(name.length + 1);
        break;
      }
    }
  }
  return result;
}
function parseUrlArgumentInt(name) {
  let str = parseUrlArgument(name);
  let parsed = parseInt(str);
  if (isNaN(parsed)) {
    return 0;
  } else {
    return parsed;
  }
}
function resizeCanvas(informC) {
  let iw = window.innerWidth;
  let ih = window.innerHeight;
  let canvas = document.getElementById("canvas");
  let border = document.getElementById("canvas_border");
  canvas.width = iw * window.devicePixelRatio;
  canvas.height = ih * window.devicePixelRatio;
  border.style.marginTop = "0px";
  let gradient = document.getElementById("gradient");
  let webViewContent = document.getElementById("webview_content");
  [gradient, webViewContent].forEach((e) => {
    if (e) {
      e.style.left = "0px";
    }
  });
  [canvas, gradient, webViewContent].forEach((e) => {
    if (e) {
      e.style.width = iw + "px";
      e.style.height = ih + "px";
      e.style.borderRadius = "0px";
    }
  });
  if (informC && gameStarted && requestedCanvas) {
    Module.ccall(
      "update_screen_size",
      "v",
      ["number", "number", "number"],
      [canvas.width, canvas.height, window.devicePixelRatio]
    );
    updatedScreenSize = true;
  }
}
function pokiSendLevelData() {
  navigator.sendBeacon(
    "https://leveldata.poki.io/mekorama-3645E4E29419B4B8",
    "f57a3980-d52f-469d-b24e-0e126842f8df"
  );
}
function stopContextMenu(event) {
  event.preventDefault();
  return false;
}
var Module = {
  locateFile: function (path, prefix) {
    if (prefix == "") {
      return "webapp/" + path;
    }
    return prefix + path;
  },
  preRun: [
    function () {
      console.log("preRun() called");
    },
  ],
  postRun: [
    function () {
      console.log("postRun() called");
      document.onfullscreenchange = function () {
        setTimeout(function () {
          resizeCanvas(true);
          if (document.fullscreenElement && gameStarted && requestedCanvas) {
            let canvas = document.getElementById("canvas");
            Module.ccall(
              "update_screen_size",
              "v",
              ["number", "number", "number"],
              [canvas.width, canvas.height, 1]
            );
          }
        }, 500);
      };
      window.addEventListener("resize", (event) => resizeCanvas(true), false);
      if (theDomLoaded) {
        resizeCanvas(true);
      }
      console.log("Registering keydown listener");
      Audio.onRuntimeInitialized();
      window.addEventListener("keydown", (e) => {
        ccall("keydown_browser", "v", ["string"], [e.key]);
      });
      {
        let canvas = document.getElementById("canvas");
        canvas.addEventListener("touchstart", touchStart, true);
        document.addEventListener("touchmove", touchMove, true);
        document.addEventListener("touchend", touchEnd, true);
        document.addEventListener("touchcancel", touchEnd, true);
        canvas.addEventListener("mousedown", mouseDown, true);
        document.addEventListener("mousemove", mouseMove, true);
        document.addEventListener("mouseup", mouseUp, true);
        canvas.addEventListener("wheel", mouseWheel, true);
      }
      postRunDone = true;
    },
  ],
  print: (function () {
    return function (text) {
      if (arguments.length > 1)
        text = Array.prototype.slice.call(arguments).join(" ");
      console.log(text);
    };
  })(),
  printErr: function (text) {
    if (arguments.length > 1)
      text = Array.prototype.slice.call(arguments).join(" ");
    console.error(text);
  },
  canvas: (function () {
    var canvas = document.getElementById("canvas");
    canvas.addEventListener(
      "webglcontextlost",
      function (e) {
        e.preventDefault();
        Module.ccall("pause_main_loop", "v");
      },
      false
    );
    canvas.addEventListener(
      "webglcontextrestored",
      function (event) {
        Module.ccall("opengl_resume", "v");
        Module.ccall("resume_main_loop", "v");
      },
      false
    );
    requestedCanvas = true;
    return canvas;
  })(),
  setStatus: function (text) {
    if (!Module.setStatus.last)
      Module.setStatus.last = { time: Date.now(), text: "" };
    if (text === Module.setStatus.last.text) return;
    var m = text.match(/([^(]+)\((\d+(\.\d+)?)\/(\d+)\)/);
    var now = Date.now();
    if (m && now - Module.setStatus.last.time < 30) return;
    Module.setStatus.last.time = now;
    Module.setStatus.last.text = text;
    if (m) {
      text = m[1];
      loadProgressFrac = parseInt(m[2]) / parseInt(m[4]);
    } else {
      loadProgressFrac = 1;
    }
    updateLoadProgress();
  },
  totalDependencies: 0,
  monitorRunDependencies: function (left) {
    this.totalDependencies = Math.max(this.totalDependencies, left);
  },
  postMainLoop: function () {
    Audio.queuedata();
  },
};
("use strict");
function isSandbox(path) {
  return path.startsWith("sandbox/");
}
function scanImage(url, revokeUrl) {
  const img = document.createElement("img");
  img.crossOrigin = "Anonymous";
  img.onload = function () {
    try {
      let canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      let ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      let imageData = ctx.getImageData(0, 0, img.width, img.height);
      let code = jsQR(imageData.data, imageData.width, imageData.height);
      if (code) {
        let buf = new Uint8Array(code.binaryData);
        writeScannedFile(buf);
      } else {
        alert("Unable to read QR code in image");
      }
      if (revokeUrl) {
        URL.revokeObjectURL(url);
      }
    } catch (err) {
      console.error(err);
    }
  };
  img.src = url;
}
function handleFileDrop(path) {
  const content = readLocalFile(path);
  const url = URL.createObjectURL(
    new Blob([content.buffer], { type: Browser.getMimetype(path) })
  );
  scanImage(url, true);
}
const base64Chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function removePadding(b64) {
  var lastKey = base64Chars.indexOf(b64.charAt(b64.length - 1));
  if (lastKey == 64) {
    return b64.substring(0, b64.length - 1);
  }
  return b64;
}
function base64ToUint8Array(b64) {
  b64 = removePadding(removePadding(b64));
  let byteCount = parseInt((b64.length / 4) * 3, 10);
  let arr = new Uint8Array(byteCount);
  b64 = b64.replace(/[^A-Za-z0-9\+\/\=]/g, "");
  let j = 0;
  for (let i = 0; i < byteCount; i += 3) {
    let enc1 = base64Chars.indexOf(b64.charAt(j++));
    let enc2 = base64Chars.indexOf(b64.charAt(j++));
    let enc3 = base64Chars.indexOf(b64.charAt(j++));
    let enc4 = base64Chars.indexOf(b64.charAt(j++));
    let chr1 = (enc1 << 2) | (enc2 >> 4);
    let chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
    let chr3 = ((enc3 & 3) << 6) | enc4;
    arr[i] = chr1;
    if (enc3 != 64) arr[i + 1] = chr2;
    if (enc4 != 64) arr[i + 2] = chr3;
  }
  return arr;
}
function uint8ArrayToBase64(buf) {
  return btoa(
    Array(buf.length)
      .fill("")
      .map((_, i) => String.fromCharCode(buf[i]))
      .join("")
  );
}
function scannedLevelCreated(filename, levelIndex) {
  let fileData = readLocalFile(`sandbox/${filename}`);
  const hash = SHA256.createHash().update(fileData).digest();
  localStorage.setItem(hash, levelIndex);
}
let scannedHash = null;
function writeScannedFile(arr) {
  let filename = null;
  try {
    scannedHash = SHA256.createHash().update(arr).digest();
    filename = localStorage.getItem(scannedHash);
  } catch (err) {
    console.log("Error when creating hash", err);
  }
  let stream = FS.open("sandbox/w_scanned.bin", "w");
  FS.write(stream, arr, 0, arr.length, 0);
  FS.close(stream);
  Module.ccall("url_level_saved", "v", ["string"], [filename]);
}
function urlLevelRemoved(filename) {
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (filename == localStorage.getItem(key)) {
        localStorage.removeItem(key);
        break;
      }
    }
  } catch (err) {
    console.log("Error in urlLevelRemoved()", err);
  }
}
function urlLevelWritten(filename) {
  console.log("urlLevelWritten", filename);
  try {
    if (scannedHash && filename) {
      localStorage.setItem(scannedHash, filename);
    }
  } catch (err) {
    console.log("Error in urlLevelWritten()", err);
  }
}
function tryReadUrlLevel() {
  let levelStr;
  if (pokiSite) {
    levelStr = PokiSDK.getURLParam("l");
    const re = / /g;
    levelStr = levelStr.replace(re, "+");
  } else {
    levelStr = parseUrlArgument("l");
    if (levelStr) {
      levelStr = decodeURIComponent(levelStr);
    }
  }
  if (levelStr) {
    let arr = base64ToUint8Array(levelStr);
    writeScannedFile(arr);
    return true;
  }
  let url = parseUrlArgument("u");
  if (url) {
    let decoded = decodeURIComponent(url);
    scanImage(decoded, false);
    return true;
  }
  return false;
}
function writeLocalFile(buffer, pathDevice) {
  let arr = new Uint8Array(buffer);
  if (isSandbox(path)) {
    Storage.put(pathDevice, arr);
    return;
  }
  let stream = FS.open(pathDevice, "w");
  FS.write(stream, arr, 0, arr.length, 0);
  FS.close(stream);
}
function readLocalFile(path) {
  let buf;
  if (isSandbox(path)) {
    buf = Storage.get(path);
    if (buf !== null) return buf;
  }
  let stream = FS.open(path, "r");
  FS.llseek(stream, 0, 2);
  let fileSize = stream.position;
  FS.llseek(stream, 0, 0);
  buf = new Uint8Array(fileSize);
  FS.read(stream, buf, 0, fileSize, 0);
  FS.close(stream);
  return buf;
}
function getHostname() {
  let hostname = window.location.hostname.split(":")[0];
  let lengthBytes = lengthBytesUTF8(hostname) + 1;
  let stringOnWasmHeap = _malloc(lengthBytes);
  stringToUTF8(hostname, stringOnWasmHeap, lengthBytes);
  return stringOnWasmHeap;
}
function parseUrlArgumentString(name) {
  let str = parseUrlArgument(name);
  let lengthBytes = lengthBytesUTF8(str) + 1;
  let stringOnWasmHeap = _malloc(lengthBytes);
  stringToUTF8(str, stringOnWasmHeap, lengthBytes);
  return stringOnWasmHeap;
}
function firebasePause() {}
function firebaseResume() {}
function firebaseDeinit() {}
function currentTimeSecondsRound() {
  return Math.round(Date.now() / 1000);
}
let webViewIframe = null;
let webviewDomLoaded = false;
let storedScripts = [];
function postStored() {
  for (var i = 0; i < storedScripts.length; i++) {
    webViewIframe.contentWindow.postMessage("eval:" + storedScripts[i], "*");
  }
  storedScripts = [];
}
function onWebviewDomContentLoaded() {
  webviewDomLoaded = true;
  postStored();
}
function webViewPostMessage(message) {
  webViewClose();
  alert("webview message " + message);
}
function webViewError(type, message) {
  webViewPostMessage(`error|${type}|${message}`);
}
function webViewHide() {
  var content = document.getElementById("webview_content");
  content.style.display = "none";
}
function webViewClose() {
  try {
    webViewHide();
    var content = document.getElementById("webview_content");
    if (content.contains(webViewIframe)) {
      webviewDomLoaded = false;
      webViewIframe.contentWindow.removeEventListener(
        "DOMContentLoaded",
        onWebviewDomContentLoaded
      );
      content.removeChild(webViewIframe);
    }
    setTimeout(function () {
      Module.ccall("set_game_focus", "v", ["number"], [true]);
    }, 100);
  } catch (err) {
    webViewError("unknown", err);
  }
}
function showDialog(url) {
  if (webViewIframe == null) {
    window.onmessage = function (e) {
      webViewPostMessage(e.data);
    };
  }
  var content = document.getElementById("webview_content");
  content.style.display = "block";
  webViewIframe = document.createElement("iframe");
  webViewIframe.classList.add("webview");
  webViewIframe.allowtransparency = true;
  webViewIframe.src = url;
  content.appendChild(webViewIframe);
  webviewDomLoaded = false;
  webViewIframe.contentWindow.addEventListener(
    "DOMContentLoaded",
    onWebviewDomContentLoaded
  );
}
function showImageFileUploadDialog() {
  showDialog("file_upload_dialog.html");
}
function copyTextFromElement(inputId) {
  var copyText = document.getElementById(inputId);
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
}
async function getShareUrl(rawStr) {
  if (pokiSite) {
    return new Promise((resolve, reject) => {
      const params = { l: rawStr };
      PokiSDK.shareableURL(params).then((url) => {
        resolve(url);
      });
    });
  } else {
    return new Promise((resolve, reject) => {
      resolve("https://play.mekorama.com/?l=" + encodeURIComponent(rawStr));
    });
  }
}
function showShareDialog(path) {
  var content = document.getElementById("webview_content");
  content.style.display = "block";
  content.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  let cardPath = "sandbox/mekorama.png";
  let cardBuf = readLocalFile(cardPath);
  const cardUrl = URL.createObjectURL(
    new Blob([cardBuf.buffer], { type: Browser.getMimetype(cardPath) })
  );
  let buf = readLocalFile(path);
  let b64 = uint8ArrayToBase64(buf);
  let w = Math.min(window.innerWidth, 1000);
  let maxCanvasW = w * 0.4;
  getShareUrl(b64).then((url) => {
    let html = `
    <div class="center middle" style="background-color: white; padding: 20px; width: ${w}px;">
      <p>
        Copy the link to share level or right-click + save image to download QR code or card
      </p>
      <p>
        <canvas id="qr_canvas" ></canvas>
        <img id="mekorama_card" src="${cardUrl}" />
      </p>
      <div class="form-row">
        <input id="share_url_input" class="form-control" size="80" type="url" value="${url}" />
      </div>
      <p style="margin: 10px;" >
        <button id="copy_button" class="btn btn-primary" onclick="copyTextFromElement('share_url_input'); return false;">Copy Link</button>
        <button class="btn btn-primary" onclick="webViewHide()" >Close</button>
      </p>
    </div>
    `;
    content.innerHTML = html;
    let qrCanvas = document.getElementById("qr_canvas");
    let cardImg = document.getElementById("mekorama_card");
    qrCanvas.style.display = "inline";
    let cbuf = new Uint8ClampedArray(buf);
    QRCode.toCanvas(
      qrCanvas,
      [{ data: cbuf, mode: "byte" }],
      { width: maxCanvasW },
      function (err) {
        if (err) console.error(err);
      }
    );
    if (qrCanvas.width > maxCanvasW) {
      let ar = qrCanvas.height / qrCanvas.width;
      qrCanvas.width = maxCanvasW;
      qrCanvas.height = ar * qrCanvas.width;
    }
    let ratio = 63.5 / 88.9;
    cardImg.height = qrCanvas.height;
    cardImg.width = Math.round(cardImg.height * ratio);
  });
}
if (window.__scriptInjected) {
  window.dispatchEvent(new Event("load"));
  window.dispatchEvent(new Event("DOMContentLoaded"));
}