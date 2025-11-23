!(function () {
  function e(e, t) {
    fetch(e, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: t,
      mode: "no-cors",
      keepalive: !0,
      credentials: "omit",
    }).catch(function (a) {
      console.error(a);
      try {
        var n =
          "XMLHttpRequest" in window
            ? new XMLHttpRequest()
            : new ActiveXObject("Microsoft.XMLHTTP");
        n.open("POST", e, !0),
          n.setRequestHeader("Content-Type", "text/plain"),
          n.send(t);
      } catch (e) {}
    });
  }
  function t(t, a, n) {
    console.error(t);
    var o = [
      { k: "where", v: a },
      {
        k: "error",
        v:
          t.name && t.message
            ? "".concat(t.name, ": ").concat(t.message)
            : JSON.stringify(t),
      },
    ];
    if (void 0 !== n) {
      var i = n;
      "string" != typeof t && (i = JSON.stringify(t)),
        o.push({ k: "extra", v: i });
    }
    e(
      "https://t.poki.io/l",
      JSON.stringify({ c: "observer-error", ve: 7, d: o })
    );
  }
  window._pokiUserGlobalName = window._pokiUserGlobalName || "user";
  var a = "poki_session";
  window._pokiSessionGlobalName = window._pokiSessionGlobalName || "session";
  var n = [
    "poki.at",
    "poki.be",
    "poki.by",
    "poki.ch",
    "poki.cn",
    "poki.co.id",
    "poki.co.il",
    "poki.com.br",
    "poki.com",
    "poki.cz",
    "poki.de",
    "poki.dk",
    "poki.fi",
    "poki.it",
    "poki.jp",
    "poki.nl",
    "poki.pl",
    "poki.pt",
    "poki.se",
    "www.trochoi.net",
    "juststudy-ce.github.io",
    "localhost",
    "127.0.0.1",
  ];
  function o(e, t) {
    if (!e) return !1;
    if (!(e && e.page && e.landing_page && e.previous_page)) return !1;
    if (!e.tab_id) return !1;
    if (!e.expire || Date.now() > e.expire) return !1;
    if (e.expire > Date.now() + 18e5) return !1;
    if (t) {
      if (void 0 !== e.referrer_domain) {
        var a = (function () {
          try {
            var e = new URL(document.referrer).hostname;
            return n.indexOf(e) > -1 ? "poki" : e;
          } catch (e) {}
          return "";
        })();
        if (
          "poki" !== a &&
          "authorize.roblox.com" !== a &&
          "accounts.google.com" !== a &&
          a !== e.referrer_domain
        )
          return !1;
      }
      var o = new URLSearchParams(window.location.search);
      if (
        [
          "gclid",
          "msclkid",
          "yclid",
          "ttclid",
          "fbclid",
          "utm_campaign",
          "campaign",
          "adgroup",
          "creative",
          "utm_term",
        ].some(function (e) {
          return o.has(e);
        }) ||
        "web_app_manifest" === o.get("utm_source") ||
        "bing" === o.get("utm_source") ||
        "cpc" === o.get("utm_medium") ||
        "rtb-cpm" === o.get("utm_medium")
      )
        return !1;
    }
    return !0;
  }
  function i() {
    var e = null;
    o(window[window._pokiSessionGlobalName], !1) &&
      (e = window[window._pokiSessionGlobalName]);
    try {
      var n = sessionStorage.getItem(a);
      if (n) {
        var i = JSON.parse(n);
        o(i, !0) && (!e || i.depth > e.depth) && (e = i);
      }
    } catch (e) {
      try {
        t(e, "getSession", sessionStorage.getItem(a));
      } catch (n) {
        t(e, "getSession", n);
      }
    }
    return e;
  }
  function d(e) {
    try {
      var n = i();
      if (!n) return;
      e(n);
      var o = JSON.stringify(n);
      try {
        sessionStorage.setItem(a, o);
      } catch (e) {}
      (window[window._pokiSessionGlobalName] = n),
        (function (e, t, a) {
          document.cookie = ""
            .concat(e, "=")
            .concat(t, "; path=/; samesite=lax; max-age=")
            .concat(Math.min(a || 15552e3, 15552e3));
        })(a, o);
    } catch (e) {
      t(e, "updateSessionProperties");
    }
  }
  const r = {},
    { documentElement: l, body: c, compatMode: u } = document,
    s = c && c.clientWidth && c.clientHeight;
  l && l.clientWidth && l.clientHeight && ("CSS1Compat" === u || !s)
    ? (r.size = l.clientWidth + "x" + l.clientHeight)
    : (r.size = c.clientWidth + "x" + c.clientHeight);
  let p = null,
    v = !1;
  function k(e) {
    var t;
    if (
      ((p = 0),
      null != e && null !== (t = e.purpose) && void 0 !== t && t.consents)
    )
      for (let t = 1; t <= 10; t++) e.purpose.consents[t] && (p |= 1 << t);
  }
  function y() {
    window.__tcfapi &&
      !v &&
      (window.__tcfapi("addEventListener", 2, (e, t) => {
        !t ||
          ("tcloaded" !== e.eventStatus &&
            "useractioncomplete" !== e.eventStatus) ||
          k(e);
      }),
      window.__tcfapi("getTCData", 2, (e, t) => {
        t && k(e);
      }),
      (v = !0));
  }
  y();
  const g = {
    action: "a",
    browser_size: "bs",
    category: "c",
    connect: "co",
    connection_type: "ct",
    count: "cn",
    cpus: "cu",
    data: "d",
    depth: "de",
    dns: "dn",
    dom_complete: "dc",
    domain: "do",
    experiment: "ex",
    first_byte: "fb",
    flash_version: "f",
    game_id: "gid",
    game_version_id: "vid",
    has_adblock: "ha",
    hash: "h",
    id: "id",
    insert_id: "ii",
    interaction: "i",
    is_new: "in",
    key: "k",
    label: "l",
    landing_page: "lp",
    language: "la",
    last_byte: "lb",
    message: "m",
    name: "n",
    nav: "n",
    page: "p",
    pageview_id: "pvid",
    path: "pa",
    previous_page: "pp",
    protocol: "pr",
    query_params: "qp",
    referrer: "r",
    screen_orientation: "sor",
    screen_resolution: "sc",
    scroll_y: "sy",
    session: "s",
    site_id: "si",
    stack: "s",
    tab_id: "ti",
    tag_id: "t",
    tcf_purpose_consents: "tpc",
    time_on_page: "tp",
    time_on_previous_page: "tr",
    time_on_site: "ts",
    time_spa_load: "sl",
    timeout: "to",
    timestamp: "tt",
    timezone: "tz",
    transfer_size: "tr",
    type: "ty",
    user: "u",
    user_id: "ui",
    user_id_version: "uvv",
    user_id_valid_for: "uvi",
    value: "v",
    version: "ve",
  };
  let m = !1;
  const f = [
    "AT",
    "BE",
    "BG",
    "CH",
    "CY",
    "CZ",
    "DE",
    "DK",
    "ES",
    "EE",
    "FI",
    "FR",
    "GR",
    "HR",
    "HU",
    "IE",
    "IS",
    "IT",
    "LI",
    "LT",
    "LU",
    "LV",
    "MT",
    "NL",
    "NO",
    "PL",
    "PT",
    "RO",
    "SK",
    "SI",
    "SE",
    "GB",
  ];
  function w(e) {
    m = e;
  }
  function b() {
    return (
      (void 0 === window.pokiBingRemarketing || window.pokiBingRemarketing) &&
      ((window.pokiCountry && !f.includes(window.pokiCountry)) || m)
    );
  }
  function A() {
    return (
      (void 0 === window.pokiGoogleRemarketing ||
        window.pokiGoogleRemarketing) &&
      ((window.pokiCountry && !f.includes(window.pokiCountry)) || m)
    );
  }
  const h = "AW-962655633";
  function I() {
    if (window.gtagLoaded) return;
    (window.gtagLoaded = !0),
      window.gtag("set", "allow_ad_personalization_signals", !0),
      window.gtag("set", "restricted_data_processing", !1),
      window.gtag("set", "linker", { accept_incoming: !0 }),
      window.gtag("js", new Date());
    const e = A() ? "granted" : "denied";
    window.gtag("consent", "default", {
      ad_storage: e,
      ad_user_data: e,
      ad_personalization: e,
      analytics_storage: e,
    }),
      window.gtag("config", h, { send_page_view: !1, conversion_linker: !0 });
    const t = document.createElement("script");
    t.src = "https://www.googletagmanager.com/gtag/js?id=".concat(h);
    const a = document.getElementsByTagName("script")[0];
    a.parentNode.insertBefore(t, a);
  }
  function _(e) {
    I();
    const t = e ? "granted" : "denied";
    window.gtag("consent", "update", {
      ad_storage: t,
      ad_user_data: t,
      ad_personalization: t,
      analytics_storage: t,
    });
  }
  function B(e) {
    I(),
      window.gtag("event", "conversion", {
        send_to: "".concat(h, "/").concat(e),
        value: 1,
        currency: "USD",
      });
  }
  function D() {
    return /(?:phone|windows\s+phone|ipod|blackberry|(?:android|bb\d+|meego|silk|googlebot) .+? mobile|palm|windows\s+ce|opera mini|avantgo|mobilesafari|docomo|kaios)/i.test(
      navigator.userAgent
    );
  }
  function S() {
    return /(?:ipad|playbook|(?:android|bb\d+|meego|silk)(?! .+? mobile))/i.test(
      navigator.userAgent
    );
  }
  function T() {
    window.uetq ||
      ((window.uetq = []),
      window.uetq.push("config", "tcf", { enabled: !0 }),
      (function (e, t, a, n, o) {
        var i, d, r;
        (e[o] = e[o] || []),
          (i = function () {
            var t = { ti: "5066235" };
            (t.q = e[o]), (e[o] = new UET(t)), e[o].push("pageLoad");
          }),
          ((d = t.createElement(a)).src = "//bat.bing.com/bat.js"),
          (d.async = 1),
          (d.onload = d.onreadystatechange =
            function () {
              var e = this.readyState;
              (e && "loaded" !== e && "complete" !== e) ||
                (i(), (d.onload = d.onreadystatechange = null));
            }),
          (r = t.getElementsByTagName(a)[0]).parentNode.insertBefore(d, r);
      })(window, document, "script", 0, "uetq"));
  }
  (window.gtag_enable_tcf_support = !0),
    (window.dataLayer = window.dataLayer || []),
    (window.gtagLoaded = !1),
    (window.gtag = function () {
      dataLayer.push(arguments);
    });
  let C, N;
  function E(e) {
    const t = i();
    if (!t) return;
    (C = performance.now()), N && clearInterval(N);
    const a = t.gameplayTotalTime || 0;
    a <= 9e5 &&
      (N = setTimeout(() => {
        if (
          (t.gclid &&
            A() &&
            (D()
              ? B("1RivCPGb38gBEJHrg8sD")
              : S()
              ? B("nA26CIzb3qQBEJHrg8sD")
              : B("Q-g4CKu_36QBEJHrg8sD")),
          b())
        ) {
          T();
          let t = "desktop";
          D() ? (t = "mobile") : S() && (t = "tablet");
          let a = !1;
          window.api && window.api.getAdblock && (a = window.api.getAdblock()),
            window.uetq.push("event", "15-minute-play-time", {
              event_category: t,
              event_label: e,
              event_value: a ? 1 : 0,
            });
        }
      }, 9e5 - a));
  }
  function M() {
    C &&
      (d((e) => {
        e.gameplayTotalTime =
          (e.gameplayTotalTime || 0) + (performance.now() - C);
      }),
      (C = void 0)),
      N && clearInterval(N);
  }
  window._pokiContextGlobalName = window._pokiContextGlobalName || "context";
  let P = !0;
  function G(e) {
    return "object" != typeof e
      ? [{ key: "arg", value: JSON.stringify(e) }]
      : Object.keys(e)
          .map((t) => {
            if (
              "category" === t ||
              "action" === t ||
              "label" === t ||
              "eventNoun" === t ||
              "eventVerb" === t
            )
              return !1;
            let a = e[t];
            return (
              "object" == typeof a && (a = JSON.stringify(a)),
              { key: t, value: a }
            );
          })
          .filter((e) => !!e);
  }
  function R(e) {
    const { position: t } = e.content.data;
    switch (t) {
      case "PP":
        return "preroll";
      case "PM":
        return "midroll";
      case "PR":
        return "rewarded";
      default:
        return "unknown-".concat(t);
    }
  }
  function H(e) {
    return e < 0
      ? 0
      : e < 30
      ? Math.floor(e)
      : e < 60
      ? 30
      : e < 120
      ? 60
      : e < 300
      ? 120
      : e < 600
      ? 300
      : e < 1200
      ? 600
      : e < 1800
      ? 1200
      : 1800;
  }
  window.addEventListener("visibilitychange", () => {
    P = "visible" === document.visibilityState;
  });
  let L = !1;
  function U(e, a, n, o = "", r = [], l = {}) {
    var c, u, s, p, v, k;
    const y = window[window._pokiContextGlobalName],
      { session: g, user: m } = y;
    if ("pageview" === a && !y.site.id) return;
    const f = Math.max(Date.now() - g.page.start, 0),
      w = (function () {
        try {
          return !i();
        } catch (e) {
          return t(e, "isSessionExpired"), !0;
        }
      })();
    let b,
      A = 0;
    ("pageview" !== a || g.depth > 1) &&
      (A = Math.max(Date.now() - g.landing_page.start, 0)),
      "pageview" === a &&
        g.previous_page.start &&
        (b = g.page.start - g.previous_page.start);
    let h,
      I =
        null === (c = e.content) ||
        void 0 === c ||
        null === (u = c.pokifordevs) ||
        void 0 === u
          ? void 0
          : u.game_id,
      _ =
        null === (s = e.content) ||
        void 0 === s ||
        null === (p = s.pokifordevs) ||
        void 0 === p
          ? void 0
          : p.game_version_id;
    I || ({ gameID: I } = e),
      _ || (_ = e.gameVersion),
      y.site.id || "pubhost" !== a || "initialized" !== n
        ? "pageview" !== a || L || ((L = !0), ({ referrer: h } = document))
        : ({ referrer: h } = document);
    let B = 0;
    g.expire && (B = Math.ceil((g.expire - Date.now()) / 1e3)),
      (w && "pageview" !== a) ||
        (l.interaction &&
          d(function (e) {
            e.expire = Date.now() + 18e5;
          }),
        window[window._pokiTrackerGlobalName].push({
          session: { id: g.id, depth: g.depth, count: g.count },
          user: {
            id: m.id,
            is_new: m.is_new,
            user_id_version: m.version,
            user_id_valid_for: m.ttl,
          },
          page: {
            path: g.page.path,
            type: g.page.type,
            id: e.storeNoPageID ? void 0 : g.page.id,
            pageview_id: g.page.pageview_id,
          },
          previous_page: {
            path: g.previous_page.path,
            type: g.previous_page.type,
            id: g.previous_page.id,
            pageview_id: g.previous_page.pageview_id,
          },
          landing_page: {
            path: g.landing_page.path,
            type: g.landing_page.type,
            id: g.landing_page.id,
            pageview_id: g.landing_page.pageview_id,
          },
          category: a,
          action: n,
          label: o,
          data: r,
          interaction: l.interaction,
          site_id: y.site.id,
          tag_id: y.tag,
          referrer: h,
          flash_version: y.flashVersion,
          time_on_site: A,
          time_spa_load: e.loadTime,
          time_on_page: f,
          time_on_previous_page: b,
          tab_id: g.tab_id,
          has_adblock:
            null === (v = window.api) ||
            void 0 === v ||
            null === (k = v.getAdblock) ||
            void 0 === k
              ? void 0
              : k.call(v),
          once_per_pageview: l.once_per_pageview,
          game_id: I || void 0,
          game_version_id: _ || void 0,
          experiment: y.experiment,
          timeout: B,
        }));
  }
  function W(a) {
    const n = window[window._pokiContextGlobalName],
      { event: o } = a,
      i = a.eventData || a.data || {};
    try {
      if ("sdk-message" === o)
        if ("pokiTrackingScreenDisplayAdImpression" === i.content.event)
          U(
            i,
            "ad",
            "displayImpression",
            i.content.data.platformAd ? "platform" : "ingame",
            [
              { key: "opportunityId", value: i.content.data.opportunityId },
              { key: "adUnitPath", value: i.content.data.adUnitPath },
              { key: "prebidBid", value: i.content.data.prebidBid },
              { key: "prebidBidder", value: i.content.data.prebidBidder },
              {
                key: "prebidWon",
                value: i.content.data.prebidWon || i.content.data.preBidWon,
              },
              { key: "prebidSecondBid", value: i.content.data.prebidSecondBid },
              {
                key: "prebidSecondBidder",
                value: i.content.data.prebidSecondBidder,
              },
              { key: "dfpIsBackfill", value: i.content.data.dfpIsBackfill },
              { key: "dfpLineItemId", value: i.content.data.dfpLineItemId },
              { key: "duringGameplay", value: i.content.data.duringGameplay },
              { key: "houseAdId", value: i.content.data.houseAdId },
              { key: "isEmpty", value: i.content.data.isEmpty },
              { key: "adDomain", value: i.content.data.adDomain },
              { key: "trigger", value: i.content.data.refreshType },
              { key: "number", value: i.content.data.refreshNumber },
              { key: "blocked", value: i.content.data.blocked },
            ]
          );
        else if ("pokiTrackingScreenDisplayAdRequested" === i.content.event)
          U(
            i,
            "ad",
            "displayRequest",
            i.content.data.platformAd ? "platform" : "ingame",
            [
              { key: "opportunityId", value: i.content.data.opportunityId },
              { key: "adUnitPath", value: i.content.data.adUnitPath },
              { key: "duringGameplay", value: i.content.data.duringGameplay },
              { key: "trigger", value: i.content.data.refreshType },
              { key: "number", value: i.content.data.refreshNumber },
              {
                key: "headerBiddingAllowed",
                value: i.content.data.headerBiddingAllowed,
              },
            ]
          );
        else if (
          "pokiTrackingScreenDisplayAdDestroy" !== i.content.event ||
          i.content.data.platformAd
        )
          if (
            "pokiTrackingScreenDisplayAdDestroy" === i.content.event &&
            i.content.data.platformAd
          )
            U(i, "platform", "destroyAd", "", [
              { key: "opportunityId", value: i.content.data.opportunityId },
            ]);
          else if ("pokiTrackingScreenGameLoadingFinished" === i.content.event)
            U(
              i,
              "game",
              "loadingFinished",
              "",
              [
                { key: "time_on_page", value: i.content.data.now },
                { key: "transferSize", value: i.content.data.transferSize },
                { key: "trackers", value: i.content.data.trackers },
                {
                  key: "external_resources",
                  value: i.content.data.external_resources,
                },
              ],
              { once_per_pageview: !0 }
            );
          else if ("pokiTrackingScreenGameplayStart" === i.content.event) {
            var r, l, c;
            U(i, "game", "play", "start", G(i.content.data), {
              interaction: !0,
            }),
              E(
                null === (r = n.page) ||
                  void 0 === r ||
                  null === (l = r.content) ||
                  void 0 === l ||
                  null === (c = l.game) ||
                  void 0 === c
                  ? void 0
                  : c.id
              );
          } else if ("pokiTrackingScreenGameplayStop" === i.content.event)
            M(),
              U(i, "game", "play", "stop", G(i.content.data), {
                interaction: !0,
              });
          else if ("pokiTrackingAdsStatusError" === i.content.event)
            U(i, "ad", "error", "", [
              { key: "opportunityId", value: i.content.data.opportunityId },
              { key: "adBreakId", value: i.content.data.adBreakId },
              { key: "currentAdNumber", value: i.content.data.currentAdNumber },
              { key: "totalAdAmount", value: i.content.data.totalAdAmount },
              { key: "waterfall", value: i.content.data.waterfall },
            ]);
          else if ("pokiTrackingSdkStatusFailed" === i.content.event)
            U(i, "ad", "failed", "", [
              { key: "opportunityId", value: i.content.data.opportunityId },
              { key: "adBreakId", value: i.content.data.adBreakId },
              { key: "currentAdNumber", value: i.content.data.currentAdNumber },
              { key: "totalAdAmount", value: i.content.data.totalAdAmount },
            ]);
          else if ("pokiTrackingAdsStatusBuffering" === i.content.event)
            U(i, "ad", "videoBuffering", R(i), [
              { key: "waterfall", value: i.content.data.waterfall },
              { key: "opportunityId", value: i.content.data.opportunityId },
              { key: "adBreakId", value: i.content.data.adBreakId },
              { key: "currentAdNumber", value: i.content.data.currentAdNumber },
              { key: "totalAdAmount", value: i.content.data.totalAdAmount },
              { key: "adDomain", value: i.content.data.adDomain },
            ]);
          else if ("pokiTrackingAdsVideoError" === i.content.event)
            U(i, "ad", "videoError", R(i), [
              { key: "waterfall", value: i.content.data.waterfall },
              { key: "opportunityId", value: i.content.data.opportunityId },
              { key: "adBreakId", value: i.content.data.adBreakId },
              { key: "currentAdNumber", value: i.content.data.currentAdNumber },
              { key: "totalAdAmount", value: i.content.data.totalAdAmount },
              { key: "message", value: i.content.data.message },
              { key: "errorCode", value: i.content.data.errorCode },
              { key: "adDomain", value: i.content.data.adDomain },
              { key: "creativeId", value: i.content.data.creativeId },
              ...(1 === i.content.data.waterfall
                ? [
                    { key: "imaAdID", value: i.content.data.IMAAdID },
                    { key: "imaAdSystem", value: i.content.data.IMAAdSystem },
                    {
                      key: "imaContentType",
                      value: i.content.data.IMAContentType,
                    },
                    { key: "imaTitle", value: i.content.data.IMATitle },
                    {
                      key: "imaUniversalAdIDRegistry",
                      value: i.content.data.IMAUniversalAdIDRegistry,
                    },
                    {
                      key: "imaUniversalAdIDValue",
                      value: i.content.data.IMAUniversalAdIDValue,
                    },
                    {
                      key: "imaUniversalAdIDs",
                      value: i.content.data.IMAUniversalAdIDs,
                    },
                    {
                      key: "imaWrapperIDs",
                      value: i.content.data.IMAWrapperIDs,
                    },
                    {
                      key: "hbPrebidLikelyWon",
                      value: i.content.data.HBPrebidLikelyWon,
                    },
                    { key: "hbAdDomain", value: i.content.data.HBAdDomain },
                    { key: "hbBidder", value: i.content.data.HBBidder },
                    { key: "hbSource", value: i.content.data.HBSource },
                    { key: "hbAdId", value: i.content.data.HBAdId },
                    { key: "hbCreativeId", value: i.content.data.HBCreativeId },
                    { key: "apsBidder", value: i.content.data.APSBidder },
                  ]
                : []),
              ...(i.content.data.HBVastXML
                ? [{ key: "hbVastXML", value: i.content.data.HBVastXML }]
                : []),
            ]);
          else if ("pokiTrackingAdsVideoExtendedVideoError" === i.content.event)
            U(i, "ad", "videoExtendedError", R(i), [
              { key: "waterfall", value: i.content.data.waterfall },
              { key: "opportunityId", value: i.content.data.opportunityId },
              { key: "adBreakId", value: i.content.data.adBreakId },
              { key: "currentAdNumber", value: i.content.data.currentAdNumber },
              { key: "totalAdAmount", value: i.content.data.totalAdAmount },
              { key: "message", value: i.content.data.message },
              { key: "errorCode", value: i.content.data.errorCode },
              { key: "adDomain", value: i.content.data.adDomain },
              { key: "creativeId", value: i.content.data.creativeId },
              { key: "imaAdID", value: i.content.data.IMAAdID },
              { key: "imaAdSystem", value: i.content.data.IMAAdSystem },
              { key: "imaContentType", value: i.content.data.IMAContentType },
              { key: "imaTitle", value: i.content.data.IMATitle },
              {
                key: "imaUniversalAdIDRegistry",
                value: i.content.data.IMAUniversalAdIDRegistry,
              },
              {
                key: "imaUniversalAdIDValue",
                value: i.content.data.IMAUniversalAdIDValue,
              },
              {
                key: "imaUniversalAdIDs",
                value: i.content.data.IMAUniversalAdIDs,
              },
              { key: "imaWrapperIDs", value: i.content.data.IMAWrapperIDs },
              {
                key: "hbPrebidLikelyWon",
                value: i.content.data.HBPrebidLikelyWon,
              },
              { key: "hbAdDomain", value: i.content.data.HBAdDomain },
              { key: "hbBidder", value: i.content.data.HBBidder },
              { key: "hbSource", value: i.content.data.HBSource },
              { key: "hbAdId", value: i.content.data.HBAdId },
              { key: "hbCreativeId", value: i.content.data.HBCreativeId },
              { key: "apsBidder", value: i.content.data.APSBidder },
              { key: "vastChain", value: i.content.data.vastChain },
              { key: "vastResolved", value: i.content.data.vastResolved },
              { key: "vastResolveErr", value: i.content.data.vastResolveErr },
            ]);
          else if ("pokiTrackingAdsVideoLoaderError" === i.content.event)
            U(i, "ad", "videoLoaderError", R(i), [
              { key: "waterfall", value: i.content.data.waterfall },
              { key: "opportunityId", value: i.content.data.opportunityId },
              { key: "adBreakId", value: i.content.data.adBreakId },
              { key: "currentAdNumber", value: i.content.data.currentAdNumber },
              { key: "totalAdAmount", value: i.content.data.totalAdAmount },
              { key: "adDomain", value: i.content.data.adDomain },
            ]);
          else if ("pokiTrackingAdsStatusPrebidRequested" === i.content.event)
            U(i, "ad", "videoPrebidRequested", R(i), [
              { key: "waterfall", value: i.content.data.waterfall },
              { key: "opportunityId", value: i.content.data.opportunityId },
              { key: "adBreakId", value: i.content.data.adBreakId },
              { key: "currentAdNumber", value: i.content.data.currentAdNumber },
              { key: "totalAdAmount", value: i.content.data.totalAdAmount },
              { key: "blocked", value: i.content.data.blocked },
            ]);
          else if ("pokiTrackingAdsStatusReady" === i.content.event)
            U(i, "ad", "videoReady", R(i), [
              { key: "waterfall", value: i.content.data.waterfall },
              { key: "opportunityId", value: i.content.data.opportunityId },
              { key: "adBreakId", value: i.content.data.adBreakId },
              { key: "currentAdNumber", value: i.content.data.currentAdNumber },
              { key: "totalAdAmount", value: i.content.data.totalAdAmount },
              { key: "adDomain", value: i.content.data.adDomain },
            ]);
          else if ("pokiTrackingAdsStatusSkipped" === i.content.event)
            U(
              i,
              "ad",
              "videoSkipped",
              R(i),
              [
                { key: "waterfall", value: i.content.data.waterfall },
                { key: "opportunityId", value: i.content.data.opportunityId },
                { key: "adBreakId", value: i.content.data.adBreakId },
                {
                  key: "currentAdNumber",
                  value: i.content.data.currentAdNumber,
                },
                { key: "totalAdAmount", value: i.content.data.totalAdAmount },
                { key: "adDomain", value: i.content.data.adDomain },
              ],
              { interaction: !0 }
            );
          else if ("pokiTrackingAdsVideoClicked" === i.content.event)
            U(
              i,
              "ad",
              "videoClicked",
              R(i),
              [
                { key: "waterfall", value: i.content.data.waterfall },
                { key: "opportunityId", value: i.content.data.opportunityId },
                { key: "adBreakId", value: i.content.data.adBreakId },
                {
                  key: "currentAdNumber",
                  value: i.content.data.currentAdNumber,
                },
                { key: "totalAdAmount", value: i.content.data.totalAdAmount },
                { key: "adDomain", value: i.content.data.adDomain },
              ],
              { interaction: !0 }
            );
          else if ("pokiTrackingAdsStatusCompleted" === i.content.event)
            U(i, "ad", "videoCompleted", R(i), [
              { key: "waterfall", value: i.content.data.waterfall },
              { key: "opportunityId", value: i.content.data.opportunityId },
              { key: "adBreakId", value: i.content.data.adBreakId },
              { key: "currentAdNumber", value: i.content.data.currentAdNumber },
              { key: "totalAdAmount", value: i.content.data.totalAdAmount },
              { key: "adDomain", value: i.content.data.adDomain },
            ]);
          else if ("pokiTrackingAdsStatusImpression" === i.content.event) {
            U(i, "ad", "videoImpression", R(i), [
              { key: "waterfall", value: i.content.data.waterfall },
              { key: "opportunityId", value: i.content.data.opportunityId },
              { key: "adBreakId", value: i.content.data.adBreakId },
              { key: "currentAdNumber", value: i.content.data.currentAdNumber },
              { key: "totalAdAmount", value: i.content.data.totalAdAmount },
              { key: "prebidBidder", value: i.content.data.prebidBidder },
              { key: "prebidBid", value: i.content.data.prebidBid },
              { key: "creativeId", value: i.content.data.creativeId },
              { key: "adUnitPath", value: i.content.data.adUnitPath },
              { key: "houseAdId", value: i.content.data.houseAdId },
              { key: "adDomain", value: i.content.data.adDomain },
            ]);
            var u, s;
            if (A())
              null === (u = window) ||
                void 0 === u ||
                null === (s = u.gtag) ||
                void 0 === s ||
                s.call(u, "event", "conversion", {
                  send_to: "AW-962655633/FPkKCJ6c7KQBEJHrg8sD",
                  value: 0,
                  currency: "MXN",
                });
          } else if ("pokiTrackingAdsVideoPaused" === i.content.event)
            U(i, "ad", "videoPaused", R(i), [
              { key: "waterfall", value: i.content.data.waterfall },
              { key: "opportunityId", value: i.content.data.opportunityId },
              { key: "adBreakId", value: i.content.data.adBreakId },
              { key: "currentAdNumber", value: i.content.data.currentAdNumber },
              { key: "totalAdAmount", value: i.content.data.totalAdAmount },
              { key: "adDomain", value: i.content.data.adDomain },
            ]);
          else if ("pokiTrackingAdsStatusRequested" === i.content.event)
            U(i, "ad", "videoRequest", R(i), [
              { key: "waterfall", value: i.content.data.waterfall },
              { key: "opportunityId", value: i.content.data.opportunityId },
              { key: "adBreakId", value: i.content.data.adBreakId },
              { key: "currentAdNumber", value: i.content.data.currentAdNumber },
              { key: "totalAdAmount", value: i.content.data.totalAdAmount },
              { key: "adUnitPath", value: i.content.data.adUnitPath },
              {
                key: "headerBiddingAllowed",
                value: i.content.data.headerBiddingAllowed,
              },
            ]);
          else if ("pokiTrackingAdsVideoResumed" === i.content.event)
            U(i, "ad", "videoResumed", R(i), [
              { key: "waterfall", value: i.content.data.waterfall },
              { key: "opportunityId", value: i.content.data.opportunityId },
              { key: "adBreakId", value: i.content.data.adBreakId },
              { key: "currentAdNumber", value: i.content.data.currentAdNumber },
              { key: "totalAdAmount", value: i.content.data.totalAdAmount },
              { key: "adDomain", value: i.content.data.adDomain },
            ]);
          else if ("pokiTrackingAdsStatusStarted" === i.content.event)
            U(i, "ad", "videoStarted", R(i), [
              { key: "waterfall", value: i.content.data.waterfall },
              { key: "opportunityId", value: i.content.data.opportunityId },
              { key: "adBreakId", value: i.content.data.adBreakId },
              { key: "currentAdNumber", value: i.content.data.currentAdNumber },
              { key: "totalAdAmount", value: i.content.data.totalAdAmount },
              { key: "duration", value: i.content.data.duration },
              { key: "skip", value: i.content.data.skip },
              { key: "prebidBidder", value: i.content.data.prebidBidder },
              { key: "prebidBid", value: i.content.data.prebidBid },
              { key: "creativeId", value: i.content.data.creativeId },
              { key: "adUnitPath", value: i.content.data.adUnitPath },
              { key: "houseAdId", value: i.content.data.houseAdId },
              { key: "adDomain", value: i.content.data.adDomain },
              {
                key: "hbPrebidLikelyWon",
                value: i.content.data.HBPrebidLikelyWon,
              },
            ]);
          else if ("pokiTrackingRewardedWebRequest" === i.content.event)
            U(i, "ad", "rewardedWeb", "request", [
              { key: "opportunityId", value: i.content.data.opportunityId },
            ]);
          else if ("pokiTrackingRewardedWebReady" === i.content.event)
            U(i, "ad", "rewardedWeb", "ready", [
              { key: "opportunityId", value: i.content.data.opportunityId },
            ]);
          else if ("pokiTrackingRewardedWebImpression" === i.content.event)
            U(i, "ad", "rewardedWeb", "impression", [
              { key: "opportunityId", value: i.content.data.opportunityId },
              { key: "adUnitPath", value: i.content.data.adUnitPath },
              { key: "bid", value: i.content.data.bid },
              { key: "bidder", value: i.content.data.bidder },
              { key: "prebidBidder", value: i.content.data.prebidBidder },
              {
                key: "prebidWon",
                value: i.content.data.prebidWon || i.content.data.preBidWon,
              },
              { key: "adDomain", value: i.content.data.adDomain },
            ]);
          else if ("pokiTrackingRewardedWebClosedGranted" === i.content.event)
            U(i, "ad", "rewardedWeb", "closedGranted", [
              { key: "opportunityId", value: i.content.data.opportunityId },
            ]);
          else if (
            "pokiTrackingRewardedWebClosedDeclined" === i.content.event ||
            "pokiTrackingRewardedWebclosedDeclined" === i.content.event
          )
            U(i, "ad", "rewardedWeb", "closedDeclined", [
              { key: "opportunityId", value: i.content.data.opportunityId },
            ]);
          else if ("pokiTrackingRewardedWebEmpty" === i.content.event)
            U(i, "ad", "rewardedWeb", "empty", [
              { key: "opportunityId", value: i.content.data.opportunityId },
            ]);
          else if ("pokiTrackingScreenFirstRound" === i.content.event) {
            var p, v, k, y, g, m;
            const e = A();
            if (
              (U(
                i,
                "game",
                "play",
                "first",
                [{ key: "hasGoogleConsent", value: e }],
                { interaction: !0, once_per_pageview: !0 }
              ),
              E(
                null === (p = n.page) ||
                  void 0 === p ||
                  null === (v = p.content) ||
                  void 0 === v ||
                  null === (k = v.game) ||
                  void 0 === k
                  ? void 0
                  : k.id
              ),
              "GB" === n.geo)
            )
              return;
            const t =
              null === (y = n.page) ||
              void 0 === y ||
              null === (g = y.content) ||
              void 0 === g ||
              null === (m = g.game) ||
              void 0 === m
                ? void 0
                : m.id;
            let a = !1;
            if (
              (window.api &&
                window.api.getAdblock &&
                (a = window.api.getAdblock()),
              b())
            ) {
              T();
              let e = "desktop";
              D() ? (e = "mobile") : S() && (e = "tablet"),
                window.uetq.push("event", "game-play-first", {
                  event_category: e,
                  event_label: t,
                  event_value: a ? 1 : 0,
                }),
                a ||
                  window.uetq.push("event", "", {
                    ecomm_prodid: t,
                    ecomm_pagetype: "product",
                  });
            }
            e &&
              (B("KzjDCPH3l6IBEJHrg8sD"),
              B("YAozCMbHmZQDEJHrg8sD"),
              D()
                ? (B("GcnkCL2-mZQDEJHrg8sD"), B("yoVJCODb6pMDEJHrg8sD"))
                : S()
                ? (B("LpAFCNHG6pMDEJHrg8sD"), B("NC5BCKnU6pMDEJHrg8sD"))
                : (B("tmXGCPitoJQDEJHrg8sD"),
                  B("vjKvCO35q4cDEJHrg8sD"),
                  /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
                    ? B("AT-CCLLI3qQBEJHrg8sD")
                    : B("XuGfCNXE3qQBEJHrg8sD")));
          } else if ("pokiTrackingScreenCommercialBreak" === i.content.event)
            U(i, "game", "commercialBreak", "", [
              { key: "opportunityId", value: i.content.data.opportunityId },
              { key: "adBreakId", value: i.content.data.adBreakId },
              { key: "currentAdNumber", value: i.content.data.currentAdNumber },
              { key: "totalAdAmount", value: i.content.data.totalAdAmount },
            ]);
          else if ("pokiTrackingScreenRewardedBreak" === i.content.event)
            U(
              i,
              "game",
              "rewardedBreak",
              "",
              [
                { key: "opportunityId", value: i.content.data.opportunityId },
                { key: "adBreakId", value: i.content.data.adBreakId },
                {
                  key: "currentAdNumber",
                  value: i.content.data.currentAdNumber,
                },
                { key: "totalAdAmount", value: i.content.data.totalAdAmount },
              ].filter((e) => void 0 !== e.value),
              { interaction: !0 }
            );
          else if ("SaveGameMigrator" === i.type && "error" === i.content.event)
            U(i, "game", "saveGameMigrator", "error", [
              { key: "error", value: i.content.error },
            ]);
          else if ("SaveGameMigrator" === i.type && "start" === i.content.event)
            U(i, "game", "saveGameMigrator", "start");
          else if (
            "SaveGameMigrator" === i.type &&
            "timeout" === i.content.event
          )
            U(i, "game", "saveGameMigrator", "timeout");
          else if ("pokiTrackingSdkStatusInitialized" === i.content.event)
            U(i, "game", "sdkInitialized", "", [], { once_per_pageview: !0 });
          else if (
            "pokiTrackingScreenDisplayAdRequest" !== i.content.event ||
            i.content.data.platformAd
          )
            if (
              "pokiTrackingScreenDisplayAdRequest" === i.content.event &&
              i.content.data.platformAd
            )
              U(i, "platform", "displayAd", "", [
                { key: "opportunityId", value: i.content.data.opportunityId },
                { key: "size", value: i.content.data.size },
              ]);
            else if ("pokiTrackingCustom" === i.content.event)
              U(
                i,
                i.content.data.category || i.content.data.eventNoun,
                i.content.data.action || i.content.data.eventVerb,
                "",
                G(i.content.data.eventData || {})
              );
            else if ("pokiTrackingMeasure" === i.content.event) {
              const { user: t, session: a } = n,
                o = {
                  ...i.content.data,
                  user_id: t.id,
                  pageview_id: a.page.pageview_id,
                };
              e("https://t.poki.io/game-event", JSON.stringify(o));
            } else
              "pokiTrackingScreenPlayerActive" === i.content.event
                ? U(i, "game", "playerActive", "", [], { interaction: !0 })
                : "pokiTrackingPlaytestShowModal" === i.content.event
                ? U(i, "playtest", "showModal", "", [
                    { key: "show", value: i.content.data.show },
                  ])
                : "pokiTrackingPlaytestAccepted" === i.content.event
                ? U(i, "playtest", "accepted", "", [], { interaction: !0 })
                : "pokiTrackingPlaytestRejected" === i.content.event
                ? U(i, "playtest", "rejected", "", [], { interaction: !0 })
                : "pokiTrackingPlaytestNoCanvas" === i.content.event
                ? U(i, "playtest", "noCanvas", "", [])
                : "pokiTrackingPlaytestStarting" === i.content.event
                ? U(i, "playtest", "starting", "", [])
                : "pokiTrackingPlaytestClosed" === i.content.event
                ? U(i, "playtest", "closed", "", [
                    { key: "reason", value: i.content.data.reason },
                  ])
                : "pokiTrackingPlaytestError" === i.content.event
                ? U(i, "playtest", "error", "", [
                    { key: "message", value: i.content.data.message },
                  ])
                : "pokiTrackingScreenisAdBlockFunctionCall" ===
                    i.content.event &&
                  U(i, "game", "isAdBlockedCalled", "", []);
          else
            U(i, "game", "displayAd", "", [
              { key: "opportunityId", value: i.content.data.opportunityId },
              { key: "size", value: i.content.data.size },
            ]);
        else
          U(i, "game", "destroyAd", "ingame", [
            { key: "opportunityId", value: i.content.data.opportunityId },
          ]);
      else if ("adslot-renderEnded" === o)
        U(i, "ad", "displayImpression", "platform", [
          { key: "trigger", value: i.refreshType },
          { key: "adUnitPath", value: i.adUnitPath },
          { key: "number", value: i.refreshNumber },
          { key: "opportunityId", value: i.opportunityId },
          { key: "prebidBid", value: i.prebidBid },
          { key: "prebidBidder", value: i.prebidBidder },
          { key: "prebidWon", value: i.prebidWon || i.preBidWon },
          { key: "prebidSecondBid", value: i.prebidSecondBid },
          { key: "prebidSecondBidder", value: i.prebidSecondBidder },
          { key: "dfpIsBackfill", value: i.dfpIsBackfill },
          { key: "dfpLineItemId", value: i.dfpLineItemId },
          { key: "houseAdId", value: i.houseAdId },
          { key: "isEmpty", value: i.isEmpty },
          { key: "adDomain", value: i.adDomain },
        ]);
      else if ("ads-adblocked" === o)
        U(i, "ad", "adblocked", "platform", [
          { key: "playground", value: i.playground },
          { key: "sdk", value: i.sdk },
        ]);
      else if ("ads-notFound" === o)
        U(i, "ad", "notFound", "platform", [
          { key: "event", value: i.event },
          { key: "code", value: i.code },
          { key: "refreshType", value: i.refreshType },
        ]);
      else if ("ads-render" === o)
        U(i, "ad", "displayRequest", "platform", [
          { key: "trigger", value: i.refreshType },
          { key: "adUnitPath", value: i.adUnitPath },
          { key: "number", value: i.refreshNumber },
          { key: "opportunityId", value: i.opportunityId },
        ]);
      else if ("housead-click" === o)
        U(i, "ad", "houseAdClick", "platform", [
          { key: "houseAdId", value: i.houseAdId },
        ]);
      else if ("consent-full" === o)
        w(!0),
          _(!0),
          U(i, "consent", "full"),
          (function (e) {
            if ("GB" !== e.geo) {
              (window._comscore = window._comscore || []),
                window._comscore.push({ c1: "2", c2: "20061681" });
              var t = document.createElement("script");
              t.src = "https://sb.scorecardresearch.com/cs/20061681/beacon.js";
              var a = document.getElementsByTagName("script")[0];
              a.parentNode.insertBefore(t, a);
            }
          })(n);
      else if ("consent-no" === o) w(!1), _(!1), U(i, "consent", "no");
      else if ("consent-noniab" === o) {
        const { nonIABConsents: e } = i;
        U(i, "consent", "noniab", "", [
          { key: "consents", value: JSON.stringify(e) },
        ]);
      } else if ("consent-npa" === o) U(i, "consent", "npa");
      else if ("consent-unknown" === o) U(i, "consent", "unknown");
      else if ("consent-bootError" === o) U(i, "consent", "bootError");
      else if (o.startsWith("rating-"))
        U(
          i,
          "game",
          "rating",
          o.substr(13).toLowerCase(),
          [{ key: "previous_vote", value: i.previousVote }],
          { interaction: !0 }
        );
      else if ("sdk-details" === o)
        U(i, "game", "sdkDetails", "", [{ key: "version", value: i.version }], {
          once_per_pageview: !0,
        });
      else if ("react-prehydrate" === o) {
        const e = [
          { key: "bot.verified", value: window.pokiBotVerified },
          { key: "bot.score", value: window.pokiBotScore },
          { key: "playground", value: null == i ? void 0 : i.playground },
          { key: "sdk", value: null == i ? void 0 : i.sdk },
          { key: "ayMode", value: null == i ? void 0 : i.ayMode },
        ];
        void 0 !== i.isIPad && e.push({ key: "isIPad", value: i.isIPad });
        const t = () => {
          U(i, "page", "reactPrehydrate", n.page.type, e);
        };
        try {
          navigator.cookieDeprecationLabel
            .getValue()
            .then((t) => {
              t && e.push({ key: "cookieDeprecationLabel", value: t });
            })
            .finally(() => {
              t();
            });
        } catch (e) {
          t();
        }
      } else if ("tile-click" === o)
        i.searchExpanded
          ? U(
              i,
              "search",
              "tileClick",
              n.page.type,
              [
                { key: "id", value: i.id },
                { key: "type", value: i.type },
                { key: "index", value: i.index },
                { key: "path", value: i.path },
                { key: "list", value: i.list },
                { key: "terms", value: i.terms },
                { key: "searchSessionId", value: i.searchSessionId },
                { key: "panelSection", value: i.panelSection },
              ],
              { interaction: !0 }
            )
          : U(
              i,
              "page",
              "tileClick",
              n.page.type,
              [
                { key: "id", value: i.id },
                { key: "type", value: i.type },
                { key: "index", value: i.index },
                { key: "path", value: i.path },
                { key: "list", value: i.list },
                { key: "thumbnail", value: i.image },
              ],
              { interaction: !0 }
            );
      else if ("pubHost-initialized" === o) {
        var f, C;
        U(i, "pubhost", "initialized", "", [
          { key: "topOrigin", value: i.topOrigin },
          {
            key: "bot.verified",
            value: null === (f = i.bot) || void 0 === f ? void 0 : f.verified,
          },
          {
            key: "bot.score",
            value: null === (C = i.bot) || void 0 === C ? void 0 : C.score,
          },
        ]);
      } else if ("page-pulse" === o) {
        M(), E();
        const e = Math.floor((Date.now() - n.session.page.start) / 1e3),
          t = (function (e) {
            return H(e);
          })(e),
          a = (function (e) {
            return H(e - 30);
          })(e);
        if (
          (((30 === t && a < 30) ||
            (60 === t && a < 60) ||
            (120 === t && a < 120) ||
            (300 === t && a < 300) ||
            (600 === t && a < 600) ||
            (1200 === t && a < 1200) ||
            (1800 === t && a < 1800)) &&
            U(i, "page", "timeSpent", "".concat(t, "s"), [
              { key: "visible", value: P ? "1" : "0" },
            ]),
          "GB" === n.geo)
        )
          return;
        if (e >= 300 && e < 330) {
          if (b() && "game" === n.page.type) {
            var N, L, W;
            T();
            const e =
              null === (N = n.page) ||
              void 0 === N ||
              null === (L = N.content) ||
              void 0 === L ||
              null === (W = L.game) ||
              void 0 === W
                ? void 0
                : W.id;
            let t = !1;
            window.api &&
              window.api.getAdblock &&
              (t = window.api.getAdblock());
            let a = "desktop";
            D() ? (a = "mobile") : S() && (a = "tablet"),
              window.uetq.push("event", "page_timeSpent-300", {
                event_category: a,
                event_label: e,
                event_value: t ? 1 : 0,
              });
          }
          "game" === n.page.type &&
            A() &&
            ((x = n.user.id),
            (q = n.page.id),
            I(),
            window.gtag("event", "page_view", {
              send_to: h,
              user_id: x,
              value: 0,
              items: [{ id: q, google_business_vertical: "custom" }],
            }),
            B("2IEyCPmFmZQDEJHrg8sD"),
            D()
              ? B("AYEACNah6pMDEJHrg8sD")
              : S()
              ? B("y05mCNeWmZQDEJHrg8sD")
              : B("lsPJCLbOqYEBEJHrg8sD"));
        } else
          e >= 900 &&
            e < 930 &&
            "game" === n.page.type &&
            A() &&
            (D()
              ? B("t5VrCLXIlMkBEJHrg8sD")
              : S()
              ? B("WUfoCMSC5LkBEJHrg8sD")
              : B("Gh96CL-84MkBEJHrg8sD"));
      } else if ("appStoreButton-click" === o)
        U(i, "game", "appstoreClick", i.store, [], { interaction: !0 });
      else if ("home-click" === o)
        U(i, "home", "click", n.page.type, [], { interaction: !0 });
      else if ("logo-click" === o)
        U(i, "logo", "click", n.page.type, [], { interaction: !0 });
      else if ("fullscreenButton-click" === o)
        U(
          i,
          "fullscreenButton",
          "click",
          "",
          [{ key: "targetState", value: i.targetState }],
          { interaction: !0 }
        );
      else if ("page-pillClick" === o)
        U(i, "page", "pillClick", "", [], { interaction: !0 });
      else if ("page-pillDrag" === o)
        U(
          i,
          "page",
          "pillDrag",
          "",
          [
            { key: "x", value: i.x },
            { key: "y", value: i.y },
          ],
          { interaction: !0 }
        );
      else if ("page-autoRedirectClick" === o)
        U(i, "page", "autoRedirect", "click", [], { interaction: !0 });
      else if ("searchPanel-close" === o)
        U(
          i,
          "searchPanel",
          "close",
          n.page.type,
          [{ key: "searchSessionId", value: i.searchSessionId }],
          { interaction: !0 }
        );
      else if ("searchPanel-open" === o)
        U(
          i,
          "searchPanel",
          "open",
          n.page.type,
          [{ key: "searchSessionId", value: i.searchSessionId }],
          { interaction: !0 }
        );
      else if ("game-launch" === o)
        U(i, "game", "launch", "", [], { interaction: !0 });
      else if (("page-view" !== o && "pageview" !== o) || 0 === i.counter) {
        const { category: e, action: t, options: o } = a;
        let { label: d } = a;
        null != o && o.pageTypeAsLabel && (d = n.page.type),
          U(i, e, t, d, G(i), o);
      } else {
        const e = [];
        void 0 === i.counter &&
          window.pokiBotDetected &&
          e.push({ key: "bot", value: window.pokiBotDetected }),
          U(i, "pageview", "", "", e, { interaction: !0 }),
          M(),
          (function (e, t) {
            const a = new URLSearchParams(t).get(e);
            return null === a ? "" : a;
          })("gclid", window.location.search) &&
            d((e) => {
              e.gclid = !0;
            });
      }
    } catch (e) {
      t(e, "gtm");
    }
    var x, q;
  }
  const x = window;
  (x._pokiTrackerGlobalName = x._pokiTrackerGlobalName || "tracker"),
    (x[x._pokiTrackerGlobalName] = x[x._pokiTrackerGlobalName] || []);
  const q = x[x._pokiTrackerGlobalName];
  for (
    q.uniqueEvents = {},
      q.firstPageview = !0,
      q.installTCFHandler = y,
      q.push = (function (e, a, n, o, i, d) {
        return (r) => {
          if ("function" != typeof r)
            try {
              var l, c;
              if (((r.version = 7), !r.category)) return;
              if (r.once_per_pageview) {
                const e = ""
                  .concat(r.category, "-")
                  .concat(r.action || "", "-")
                  .concat(r.label || "");
                if (a.uniqueEvents[e]) return;
                a.uniqueEvents[e] = !0;
              }
              if (
                (delete r.once_per_pageview,
                "pageview" === r.category &&
                  ((a.uniqueEvents = {}),
                  (r.query_params = e.location.search.substr(1)),
                  (r.hash = e.location.hash.substr(1))),
                void 0 !== r.action &&
                  null !== r.action &&
                  (r.action = r.action.toString()),
                "" === r.action && delete r.action,
                void 0 !== r.label &&
                  null !== r.label &&
                  (r.label = r.label.toString()),
                "" === r.label && delete r.label,
                Array.isArray(r.data))
              )
                for (let e = 0; e < r.data.length; e++)
                  void 0 !== r.data[e].value &&
                    null !== r.data[e].value &&
                    (r.data[e].value = r.data[e].value.toString());
              else delete r.data;
              if (
                ((r.cpus = e.navigator.hardwareConcurrency || 0),
                (r.domain = e.location.hostname),
                (r.protocol = e.location.protocol.substr(
                  0,
                  e.location.protocol.length - 1
                )),
                (r.scroll_y = e.scrollY),
                (r.timezone = new Date().getTimezoneOffset()),
                (r.timestamp = Date.now()),
                (r.tcf_purpose_consents = d()),
                e.navigator.connection &&
                  e.navigator.connection.effectiveType &&
                  (r.connection_type = e.navigator.connection.effectiveType),
                r.user && (r.user.language = e.navigator.language),
                (r.screen_resolution = e.screen.width + "x" + e.screen.height),
                (r.screen_orientation =
                  null === (l = e.screen) ||
                  void 0 === l ||
                  null === (c = l.orientation) ||
                  void 0 === c
                    ? void 0
                    : c.type),
                (r.browser_size = i.size),
                "pageview" === r.category &&
                  a.firstPageview &&
                  e.performance &&
                  e.performance.getEntriesByType)
              )
                try {
                  const t = e.performance.getEntriesByType("navigation");
                  if (t.length > 0) {
                    const e = t[0];
                    r.nav = {
                      connect: Math.round(e.connectEnd - e.connectStart),
                      dns: Math.round(e.domainLookupEnd - e.domainLookupStart),
                      dom_complete: Math.round(e.domComplete),
                      first_byte: Math.round(e.responseStart - e.requestStart),
                      last_byte: Math.round(e.responseEnd - e.requestStart),
                      transfer_size: e.transferSize,
                    };
                  }
                } catch (e) {}
              (r.insert_id = o()),
                (r = (function e(t) {
                  return (
                    Object.keys(t).forEach((a) => {
                      if (!g[a])
                        return (
                          console.error("unknown field ".concat(a)),
                          void delete t[a]
                        );
                      if (Array.isArray(t[a])) {
                        if (0 === t[a].length) return void delete t[a];
                        for (let n = 0; n < t[a].length; n++)
                          t[a][n] = e(t[a][n]);
                      } else {
                        if (null === t[a] || void 0 === t[a])
                          return void delete t[a];
                        "object" == typeof t[a] && e(t[a]);
                      }
                      const n = g[a];
                      a !== n && ((t[n] = t[a]), delete t[a]);
                    }),
                    t
                  );
                })(r)),
                n("https://t.poki.io/t", JSON.stringify(r)),
                "pageview" === r.category && (a.firstPageview = !1);
            } catch (e) {
              t(e, "push");
            }
          else r();
        };
      })(
        x,
        q,
        e,
        function () {
          for (var e = Math.floor(Date.now() / 1e3), t = "", a = 0; a < 4; a++)
            (t = String.fromCharCode(255 & e) + t), (e >>= 8);
          if (window.crypto && crypto.getRandomValues && Uint32Array) {
            var n = new Uint32Array(12);
            crypto.getRandomValues(n);
            for (var o = 0; o < 12; o++) t += String.fromCharCode(255 & n[o]);
          } else
            for (var i = 0; i < 12; i++)
              t += String.fromCharCode(Math.floor(256 * Math.random()));
          return btoa(t)
            .replace(/\+/g, "-")
            .replace(/\//g, "_")
            .replace(/=/g, "");
        },
        r,
        function () {
          return p;
        }
      );
    q.length > 0;

  )
    q.push(q.shift());
  !(function () {
    for (
      window.pokiGTM = window.pokiGTM || [],
        window.pokiGTM.push = W,
        window.pokiGTM.push({ event: "pageview", eventData: {} });
      window.pokiGTM.length > 0;

    )
      window.pokiGTM.push(window.pokiGTM.shift());
  })();
})();
