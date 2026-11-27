/* Retro Mode: 8-bit arcade skin for main_theme.
   Loaded in <head> so data-retro is set before first paint (no flash).
   Styles live in css/retro.css, all scoped to html[data-retro="true"]. */
(function () {
  "use strict";

  var RETRO_KEY = "retro";
  var SOUND_KEY = "retro_sounds";
  var root = document.documentElement;

  function read(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function write(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* storage blocked */ }
  }

  function retroOn() { return read(RETRO_KEY) === "true"; }
  function soundsOn() { return read(SOUND_KEY) === "true"; }

  function applyRetro(on) {
    root.setAttribute("data-retro", on ? "true" : "false");
  }

  // Apply immediately, before <body> exists.
  applyRetro(retroOn());

  /* ---------- Sounds (WebAudio, no files) ---------- */
  var audioCtx = null;

  function blip(freq) {
    if (!retroOn() || !soundsOn()) return;
    try {
      if (!audioCtx) {
        var Ctx = window.AudioContext || window.webkitAudioContext;
        if (!Ctx) return;
        audioCtx = new Ctx();
      }
      if (audioCtx.state === "suspended") audioCtx.resume();
      var t = audioCtx.currentTime;
      var osc = audioCtx.createOscillator();
      var gain = audioCtx.createGain();
      osc.type = "square";
      osc.frequency.setValueAtTime(freq, t);
      osc.frequency.setValueAtTime(freq * 1.5, t + 0.04);
      gain.gain.setValueAtTime(0.06, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.12);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(t);
      osc.stop(t + 0.13);
    } catch (e) { /* audio unavailable */ }
  }

  var CLICKABLE = [
    "a", "button", ".top-real-button", ".item-container", ".settings-panel-arrow",
    ".settings-slider", ".switch", ".settings-option-dropdown-button",
    ".settings-option-dropdown-content-item", ".settings-option-element",
    ".settings-option-input-bt", ".close-news-button"
  ].join(",");

  document.addEventListener("pointerdown", function (e) {
    try {
      var target = e.target && e.target.closest ? e.target.closest(CLICKABLE) : null;
      if (!target) return;
      var freq = 660;
      if (target.matches(".item-container")) {
        freq = 880;
      } else if (target.matches(".switch") && target.querySelector("#retroswitch, #retrosoundswitch")) {
        freq = 990;
      }
      blip(freq);
    } catch (err) { /* never break clicks */ }
  }, true);

  /* ---------- Settings switches ---------- */
  function initSwitches() {
    var retroSwitch = document.getElementById("retroswitch");
    var soundSwitch = document.getElementById("retrosoundswitch");

    if (retroSwitch) {
      retroSwitch.checked = retroOn();
      retroSwitch.addEventListener("change", function () {
        write(RETRO_KEY, retroSwitch.checked ? "true" : "false");
        applyRetro(retroSwitch.checked);
      });
    }
    if (soundSwitch) {
      soundSwitch.checked = soundsOn();
      soundSwitch.addEventListener("change", function () {
        write(SOUND_KEY, soundSwitch.checked ? "true" : "false");
        // Confirmation bleep when sounds are switched on (and Retro Mode is on)
        if (soundSwitch.checked) blip(990);
      });
    }

    // Keep other open tabs/frames in sync
    window.addEventListener("storage", function (e) {
      if (e.key === RETRO_KEY || e.key === null) {
        applyRetro(retroOn());
        if (retroSwitch) retroSwitch.checked = retroOn();
      }
      if (e.key === SOUND_KEY || e.key === null) {
        if (soundSwitch) soundSwitch.checked = soundsOn();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSwitches);
  } else {
    initSwitches();
  }
})();
