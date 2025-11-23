var amplitude = (function () {
  "use strict";
  function t(e) {
    return (t =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i);
    }
  }
  function r(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function _(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {},
        i = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols &&
        (i = i.concat(
          Object.getOwnPropertySymbols(n).filter(function (e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable;
          })
        )),
        i.forEach(function (e) {
          r(t, e, n[e]);
        });
    }
    return t;
  }
  function n(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = new Array(e.length); t < e.length; t++)
            n[t] = e[t];
          return n;
        }
      })(e) ||
      (function (e) {
        if (
          Symbol.iterator in Object(e) ||
          "[object Arguments]" === Object.prototype.toString.call(e)
        )
          return Array.from(e);
      })(e) ||
      (function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      })()
    );
  }
  var e, o, s, a, u, c;
  ((e = {}).SET = "$set"),
    (e.SET_ONCE = "$setOnce"),
    (e.ADD = "$add"),
    (e.APPEND = "$append"),
    (e.PREPEND = "$prepend"),
    (e.REMOVE = "$remove"),
    (e.PREINSERT = "$preinsert"),
    (e.POSTINSERT = "$postinsert"),
    (e.UNSET = "$unset"),
    (e.CLEAR_ALL = "$clearAll"),
    ((s = o = o || {})[(s.None = 0)] = "None"),
    (s[(s.Error = 1)] = "Error"),
    (s[(s.Warn = 2)] = "Warn"),
    (s[(s.Verbose = 3)] = "Verbose"),
    ((u = a = a || {}).Unknown = "unknown"),
    (u.Skipped = "skipped"),
    (u.Success = "success"),
    (u.RateLimit = "rate_limit"),
    (u.PayloadTooLarge = "payload_too_large"),
    (u.Invalid = "invalid"),
    (u.Failed = "failed"),
    ((c = a = a || {}).fromHttpCode = function (e) {
      return 200 <= e && e < 300
        ? c.Success
        : 429 === e
        ? c.RateLimit
        : 413 === e
        ? c.PayloadTooLarge
        : 400 <= e && e < 500
        ? c.Invalid
        : 500 <= e
        ? c.Failed
        : c.Unknown;
    });
  a.Skipped;
  function l() {
    return (
      "object" == typeof window &&
      void 0 !==
        (null === window || void 0 === window ? void 0 : window.document)
    );
  }
  var p,
    d = {},
    h =
      (((p = (function () {
        return "object" == typeof process &&
          void 0 !==
            (null ===
              (e =
                null === process || void 0 === process
                  ? void 0
                  : process.versions) || void 0 === e
              ? void 0
              : e.node)
          ? global
          : "undefined" != typeof window
          ? window
          : "undefined" != typeof self
          ? self
          : d;
        var e;
      })()).__AMPLITUDE__ = p.__AMPLITUDE__ || {}),
      p.__AMPLITUDE__),
    f = "Amplitude Logger ",
    v =
      ((g.prototype.disable = function () {
        this._logLevel = 0;
      }),
      (g.prototype.enable = function (e) {
        void 0 === e && (e = o.Warn), (this._logLevel = e);
      }),
      (g.prototype.log = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._logLevel < o.Verbose ||
          global.console.log(f + "[Log]: " + e.join(" "));
      }),
      (g.prototype.warn = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._logLevel < o.Warn ||
          global.console.warn(f + "[Warn]: " + e.join(" "));
      }),
      (g.prototype.error = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._logLevel < o.Error ||
          global.console.error(f + "[Error]: " + e.join(" "));
      }),
      g);
  function g() {
    this._logLevel = 0;
  }
  h.logger || (h.logger = new v());
  var y = {
      DEFAULT_INSTANCE: "$default_instance",
      API_VERSION: 2,
      MAX_STRING_LENGTH: 4096,
      MAX_PROPERTY_KEYS: 1e3,
      IDENTIFY_EVENT: "$identify",
      GROUP_IDENTIFY_EVENT: "$groupidentify",
      LAST_EVENT_ID: "amplitude_lastEventId",
      LAST_EVENT_TIME: "amplitude_lastEventTime",
      LAST_IDENTIFY_ID: "amplitude_lastIdentifyId",
      LAST_SEQUENCE_NUMBER: "amplitude_lastSequenceNumber",
      SESSION_ID: "amplitude_sessionId",
      DEVICE_ID: "amplitude_deviceId",
      OPT_OUT: "amplitude_optOut",
      USER_ID: "amplitude_userId",
      DEVICE_ID_INDEX: 0,
      USER_ID_INDEX: 1,
      OPT_OUT_INDEX: 2,
      SESSION_ID_INDEX: 3,
      LAST_EVENT_TIME_INDEX: 4,
      EVENT_ID_INDEX: 5,
      IDENTIFY_ID_INDEX: 6,
      SEQUENCE_NUMBER_INDEX: 7,
      COOKIE_TEST_PREFIX: "amp_cookie_test",
      COOKIE_PREFIX: "amp",
      STORAGE_DEFAULT: "",
      STORAGE_COOKIES: "cookies",
      STORAGE_NONE: "none",
      STORAGE_LOCAL: "localStorage",
      STORAGE_SESSION: "sessionStorage",
      REVENUE_EVENT: "revenue_amount",
      REVENUE_PRODUCT_ID: "$productId",
      REVENUE_QUANTITY: "$quantity",
      REVENUE_PRICE: "$price",
      REVENUE_REVENUE_TYPE: "$revenueType",
      AMP_DEVICE_ID_PARAM: "amp_device_id",
      REFERRER: "referrer",
      UTM_SOURCE: "utm_source",
      UTM_MEDIUM: "utm_medium",
      UTM_CAMPAIGN: "utm_campaign",
      UTM_TERM: "utm_term",
      UTM_CONTENT: "utm_content",
      ATTRIBUTION_EVENT: "[Amplitude] Attribution Captured",
      TRANSPORT_HTTP: "http",
      TRANSPORT_BEACON: "beacon",
    },
    m = function (e) {
      for (var t = "", n = 0; n < e.length; n++) {
        var i = e.charCodeAt(n);
        i < 128
          ? (t += String.fromCharCode(i))
          : (127 < i && i < 2048
              ? (t += String.fromCharCode((i >> 6) | 192))
              : ((t += String.fromCharCode((i >> 12) | 224)),
                (t += String.fromCharCode(((i >> 6) & 63) | 128))),
            (t += String.fromCharCode((63 & i) | 128)));
      }
      return t;
    },
    w = function (e) {
      for (var t, n, i = "", o = 0, r = 0; o < e.length; )
        (t = e.charCodeAt(o)) < 128
          ? ((i += String.fromCharCode(t)), o++)
          : 191 < t && t < 224
          ? ((r = e.charCodeAt(o + 1)),
            (i += String.fromCharCode(((31 & t) << 6) | (63 & r))),
            (o += 2))
          : ((r = e.charCodeAt(o + 1)),
            (n = e.charCodeAt(o + 2)),
            (i += String.fromCharCode(
              ((15 & t) << 12) | ((63 & r) << 6) | (63 & n)
            )),
            (o += 3));
      return i;
    },
    E = {
      _keyStr:
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      encode: function (e) {
        try {
          if (window.btoa && window.atob)
            return window.btoa(unescape(encodeURIComponent(e)));
        } catch (e) {}
        return E._encode(e);
      },
      _encode: function (e) {
        var t,
          n,
          i,
          o,
          r,
          s,
          a,
          u = "",
          c = 0;
        for (e = m(e); c < e.length; )
          (o = (t = e.charCodeAt(c++)) >> 2),
            (r = ((3 & t) << 4) | ((n = e.charCodeAt(c++)) >> 4)),
            (s = ((15 & n) << 2) | ((i = e.charCodeAt(c++)) >> 6)),
            (a = 63 & i),
            isNaN(n) ? (s = a = 64) : isNaN(i) && (a = 64),
            (u =
              u +
              E._keyStr.charAt(o) +
              E._keyStr.charAt(r) +
              E._keyStr.charAt(s) +
              E._keyStr.charAt(a));
        return u;
      },
      decode: function (e) {
        try {
          if (window.btoa && window.atob)
            return decodeURIComponent(escape(window.atob(e)));
        } catch (e) {}
        return E._decode(e);
      },
      _decode: function (e) {
        var t,
          n,
          i,
          o,
          r,
          s,
          a = "",
          u = 0;
        for (e = e.replace(/[^A-Za-z0-9+/=]/g, ""); u < e.length; )
          (t =
            (E._keyStr.indexOf(e.charAt(u++)) << 2) |
            ((o = E._keyStr.indexOf(e.charAt(u++))) >> 4)),
            (n =
              ((15 & o) << 4) | ((r = E._keyStr.indexOf(e.charAt(u++))) >> 2)),
            (i = ((3 & r) << 6) | (s = E._keyStr.indexOf(e.charAt(u++)))),
            (a += String.fromCharCode(t)),
            64 !== r && (a += String.fromCharCode(n)),
            64 !== s && (a += String.fromCharCode(i));
        return (a = w(a));
      },
    },
    I = Object.prototype.toString;
  function b(e) {
    switch (I.call(e)) {
      case "[object Date]":
        return "date";
      case "[object RegExp]":
        return "regexp";
      case "[object Arguments]":
        return "arguments";
      case "[object Array]":
        return "array";
      case "[object Error]":
        return "error";
    }
    return null === e
      ? "null"
      : void 0 === e
      ? "undefined"
      : e != e
      ? "nan"
      : e && 1 === e.nodeType
      ? "element"
      : "undefined" != typeof Buffer &&
        "function" == typeof Buffer.isBuffer &&
        Buffer.isBuffer(e)
      ? "buffer"
      : t((e = e.valueOf ? e.valueOf() : Object.prototype.valueOf.apply(e)));
  }
  function S(e, t, n) {
    return (
      b(e) === n ||
      (q.error(
        "Invalid " + t + " input type. Expected " + n + " but received " + b(e)
      ),
      !1)
    );
  }
  function T(e) {
    var t = b(e);
    if ("object" !== t)
      return (
        q.error(
          "Error: invalid properties format. Expecting Javascript object, received " +
            t +
            ", ignoring"
        ),
        {}
      );
    if (Object.keys(e).length > y.MAX_PROPERTY_KEYS)
      return (
        q.error("Error: too many properties (more than 1000), ignoring"), {}
      );
    var n,
      i,
      o,
      r = {};
    for (var s in e) {
      Object.prototype.hasOwnProperty.call(e, s) &&
        ("string" !== (i = b((n = s))) &&
          ((n = String(n)),
          q.warn(
            "WARNING: Non-string property key, received type " +
              i +
              ', coercing to string "' +
              n +
              '"'
          )),
        null !== (o = G(n, e[s])) && (r[n] = o));
    }
    return r;
  }
  function N() {
    for (var e = "", t = 0; t < 22; ++t)
      e +=
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
          Math.floor(64 * Math.random())
        );
    return e;
  }
  function O(e) {
    try {
      for (
        var t = document.cookie.split(";"), n = null, i = 0;
        i < t.length;
        i++
      ) {
        for (var o = t[i]; " " === o.charAt(0); ) o = o.substring(1, o.length);
        if (0 === o.indexOf(e)) {
          n = o.substring(e.length, o.length);
          break;
        }
      }
      return n;
    } catch (e) {
      return null;
    }
  }
  function A(e, t, n) {
    var i,
      o = null !== t ? n.expirationDays : -1;
    o &&
      ((i = new Date()).setTime(i.getTime() + 24 * o * 60 * 60 * 1e3), (o = i));
    var r = e + "=" + t;
    o && (r += "; expires=" + o.toUTCString()),
      (r += "; path=/"),
      n.domain && (r += "; domain=" + n.domain),
      n.secure && (r += "; Secure"),
      n.sameSite && (r += "; SameSite=" + n.sameSite),
      (document.cookie = r);
  }
  function k(e) {
    var t,
      n = 0 < arguments.length && void 0 !== e ? e : "",
      i = n.split(".")[y.LAST_EVENT_TIME_INDEX];
    return (
      i && (t = parseInt(i, 32)),
      t || (B.warn("unable to parse malformed cookie: ".concat(n)), 0)
    );
  }
  function R(e) {
    console.log("fetched host name: ", e)
    return (true), "www.freecell.io";
  }
  function C(e) {
    var t = "";
    return (
      ne.domain &&
        (t = "." === ne.domain.charAt(0) ? ne.domain.substring(1) : ne.domain),
      e + t
    );
  }
  var D,
    P,
    x,
    U = { DISABLE: 0, ERROR: 1, WARN: 2, INFO: 3 },
    j = U.WARN,
    q = {
      error: function (e) {
        U.ERROR <= j && M(e);
      },
      warn: function (e) {
        U.WARN <= j && M(e);
      },
      info: function (e) {
        U.INFO <= j && M(e);
      },
    },
    M = function (e) {
      try {
        console.log("[Amplitude] " + e);
      } catch (e) {}
    },
    V = function (e) {
      return "string" === b(e) && e.length > y.MAX_STRING_LENGTH
        ? e.substring(0, y.MAX_STRING_LENGTH)
        : e;
    },
    L = ["nan", "function", "arguments", "regexp", "element"],
    G = function e(t, n) {
      var i = b(n);
      if (-1 !== L.indexOf(i))
        q.warn(
          'WARNING: Property key "' +
            t +
            '" with invalid value type ' +
            i +
            ", ignoring"
        ),
          (n = null);
      else if ("undefined" === i) n = null;
      else if ("error" === i)
        (n = String(n)),
          q.warn(
            'WARNING: Property key "' +
              t +
              '" with value type error, coercing to ' +
              n
          );
      else if ("array" === i) {
        for (var o = [], r = 0; r < n.length; r++) {
          var s = n[r],
            a = b(s);
          "array" !== a
            ? "object" === a
              ? o.push(T(s))
              : o.push(e(t, s))
            : q.warn(
                "WARNING: Cannot have " +
                  a +
                  " nested in an array property value, skipping"
              );
        }
        n = o;
      } else "object" === i && (n = T(n));
      return n;
    },
    F = function (e, t) {
      var n = b(t);
      if ("string" === n) return t;
      if ("date" === n || "number" === n || "boolean" === n)
        return (
          (t = String(t)),
          q.warn(
            "WARNING: Non-string groupName, received type " +
              n +
              ', coercing to string "' +
              t +
              '"'
          ),
          t
        );
      if ("array" === n) {
        for (var i = [], o = 0; o < t.length; o++) {
          var r = t[o],
            s = b(r);
          "array" !== s && "object" !== s
            ? "string" === s
              ? i.push(r)
              : ("date" !== s && "number" !== s && "boolean" !== s) ||
                ((r = String(r)),
                q.warn(
                  "WARNING: Non-string groupName, received type " +
                    s +
                    ', coercing to string "' +
                    r +
                    '"'
                ),
                i.push(r))
            : q.warn("WARNING: Skipping nested " + s + " in array groupName");
        }
        return i;
      }
      q.warn(
        "WARNING: Non-string groupName, received type " +
          n +
          ". Please use strings or array of strings for groupName"
      );
    },
    K = function (e) {
      Object.prototype.hasOwnProperty.call(U, e) && (j = U[e]);
    },
    B = q,
    z = function (e) {
      return !e || 0 === e.length;
    },
    X = function (e, t) {
      e = e.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
      var n = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(t);
      return null === n ? void 0 : decodeURIComponent(n[1].replace(/\+/g, " "));
    },
    W = function e(t) {
      if ("array" === b(t)) for (var n = 0; n < t.length; n++) t[n] = e(t[n]);
      else if ("object" === b(t)) for (var i in t) i in t && (t[i] = e(t[i]));
      else t = V(t);
      return t;
    },
    $ = function (e) {
      var t = b(e);
      if ("object" !== t)
        return (
          q.error(
            "Error: invalid groups format. Expecting Javascript object, received " +
              t +
              ", ignoring"
          ),
          {}
        );
      var n,
        i,
        o,
        r = {};
      for (var s in e) {
        Object.prototype.hasOwnProperty.call(e, s) &&
          ("string" !== (i = b((n = s))) &&
            ((n = String(n)),
            q.warn(
              "WARNING: Non-string groupType, received type " +
                i +
                ', coercing to string "' +
                n +
                '"'
            )),
          null !== (o = F(n, e[s])) && (r[n] = o));
      }
      return r;
    },
    H = S,
    Y = T,
    Q = function (e) {
      return (
        !!S(e, "deviceId", "string") &&
        (!e.includes(".") ||
          (q.error(
            "Device IDs may not contain '.' characters. Value will be ignored: \"".concat(
              e,
              '"'
            )
          ),
          !1))
      );
    },
    J = function (e) {
      return (
        !!S(e, "transport", "string") &&
        (e !== y.TRANSPORT_HTTP && e !== y.TRANSPORT_BEACON
          ? (q.error(
              "transport value must be one of '"
                .concat(y.TRANSPORT_BEACON, "' or '")
                .concat(y.TRANSPORT_HTTP, "'")
            ),
            !1)
          : !(e !== y.TRANSPORT_HTTP && !navigator.sendBeacon) ||
            (q.error(
              "browser does not support sendBeacon, so transport must be HTTP"
            ),
            !1))
      );
    },
    Z = function () {
      return "http://localhost:1000/";
    },
    ee = {
      set: A,
      get: O,
      getAll: function (e) {
        try {
          var t = document.cookie.split(";").map(function (e) {
              return e.trimStart();
            }),
            n = [],
            i = !0,
            o = !1,
            r = void 0;
          try {
            for (
              var s, a = t[Symbol.iterator]();
              !(i = (s = a.next()).done);
              i = !0
            ) {
              for (var u = s.value; " " === u.charAt(0); ) u = u.substring(1);
              0 === u.indexOf(e) && n.push(u.substring(e.length));
            }
          } catch (e) {
            (o = !0), (r = e);
          } finally {
            try {
              i || null == a.return || a.return();
            } finally {
              if (o) throw r;
            }
          }
          return n;
        } catch (e) {
          return [];
        }
      },
      getLastEventTime: k,
      sortByEventTime: function (e) {
        return n(e).sort(function (e, t) {
          var n = k(e);
          return k(t) - n;
        });
      },
      areCookiesEnabled: function (e) {
        var t = 0 < arguments.length && void 0 !== e ? e : {},
          n = y.COOKIE_TEST_PREFIX + N(),
          i = !1;
        try {
          var o = String(new Date());
          A(n, o, t),
            B.info("Testing if cookies available"),
            (i = O(n + "=") === o);
        } catch (e) {
          B.warn(
            'Error thrown when checking for cookies. Reason: "'.concat(e, '"')
          );
        } finally {
          B.info("Cleaning up cookies availability test"), A(n, null, t);
        }
        return i;
      },
    },
    te = function (e) {
      for (
        var t = R(e).split("."),
          n = [],
          i = "_tldtest_" + N(),
          o = t.length - 2;
        0 <= o;
        --o
      )
        n.push(t.slice(o).join("."));
      for (var r = 0; r < n.length; ++r) {
        var s = n[r],
          a = { domain: "." + s };
        if ((ee.set(i, 1, a), ee.get(i))) return ee.set(i, null, a), s;
      }
      return "";
    },
    ne = { expirationDays: void 0, domain: void 0 },
    ie = function (e) {
      var t = C(e) + "=",
        n = ee.get(t);
      try {
        if (n) return JSON.parse(E.decode(n));
      } catch (e) {
        return null;
      }
      return null;
    },
    oe = function (e, t) {
      try {
        return ee.set(C(e), E.encode(JSON.stringify(t)), ne), !0;
      } catch (e) {
        return !1;
      }
    },
    re = function (e) {
      try {
        return ee.set(C(e), null, ne), !0;
      } catch (e) {
        return !1;
      }
    },
    se = {
      reset: function () {
        ne = { expirationDays: void 0, domain: void 0 };
      },
      options: function (e) {
        if (0 === arguments.length) return ne;
        (e = e || {}),
          (ne.expirationDays = e.expirationDays),
          (ne.secure = e.secure),
          (ne.sameSite = e.sameSite);
        var t = z(e.domain) ? "." + te(Z().href) : e.domain,
          n = Math.random();
        (ne.domain = t), oe("amplitude_test", n);
        var i = ie("amplitude_test");
        return (
          (i && i === n) || (t = null),
          re("amplitude_test"),
          (ne.domain = t),
          ne
        );
      },
      get: ie,
      set: oe,
      remove: re,
      setRaw: function (e, t) {
        try {
          return ee.set(C(e), t, ne), !0;
        } catch (e) {
          return !1;
        }
      },
      getRaw: function (e) {
        var t = C(e) + "=";
        return ee.get(t);
      },
    };
  if (
    (function () {
      var e,
        t = new Date();
      try {
        return (
          window.localStorage.setItem(t, t),
          (e = window.localStorage.getItem(t) === String(t)),
          window.localStorage.removeItem(t),
          e
        );
      } catch (e) {}
      return !1;
    })()
  )
    D = window.localStorage;
  else if (window.globalStorage)
    try {
      D = window.globalStorage[window.location.hostname];
    } catch (e) {}
  else {
    "undefined" != typeof document &&
      ((P = document.createElement("div")),
      (x = "localStorage"),
      (P.style.display = "none"),
      document.getElementsByTagName("head")[0].appendChild(P),
      P.addBehavior &&
        (P.addBehavior("#default#userdata"),
        (D = {
          length: 0,
          setItem: function (e, t) {
            P.load(x),
              P.getAttribute(e) || this.length++,
              P.setAttribute(e, t),
              P.save(x);
          },
          getItem: function (e) {
            return P.load(x), P.getAttribute(e);
          },
          removeItem: function (e) {
            P.load(x),
              P.getAttribute(e) && this.length--,
              P.removeAttribute(e),
              P.save(x);
          },
          clear: function () {
            P.load(x);
            for (
              var e, t = 0;
              (e = P.XMLDocument.documentElement.attributes[t++]);

            )
              P.removeAttribute(e.name);
            P.save(x), (this.length = 0);
          },
          key: function (e) {
            return P.load(x), P.XMLDocument.documentElement.attributes[e];
          },
        }),
        P.load(x),
        (D.length = P.XMLDocument.documentElement.attributes.length)));
  }
  function ae() {
    this.storage = null;
  }
  var ue,
    ce = (D = D || {
      length: 0,
      setItem: function () {},
      getItem: function () {},
      removeItem: function () {},
      clear: function () {},
      key: function () {},
    });
  ae.prototype.getStorage = function () {
    return (
      null !== this.storage ||
        (ee.areCookiesEnabled()
          ? (this.storage = se)
          : ((n = "amp_cookiestore_"),
            (this.storage = {
              _options: { expirationDays: void 0, domain: void 0, secure: !1 },
              reset: function () {
                this._options = {
                  expirationDays: void 0,
                  domain: void 0,
                  secure: !1,
                };
              },
              options: function (e) {
                return 0 === arguments.length
                  ? this._options
                  : ((e = e || {}),
                    (this._options.expirationDays =
                      e.expirationDays || this._options.expirationDays),
                    (this._options.domain =
                      e.domain ||
                      this._options.domain ||
                      (window && window.location && window.location.hostname)),
                    (this._options.secure = e.secure || !1));
              },
              get: function (e) {
                try {
                  return JSON.parse(ce.getItem(n + e));
                } catch (e) {}
                return null;
              },
              set: function (e, t) {
                try {
                  return ce.setItem(n + e, JSON.stringify(t)), !0;
                } catch (e) {}
                return !1;
              },
              remove: function (e) {
                try {
                  ce.removeItem(n + e);
                } catch (e) {
                  return !1;
                }
              },
            }))),
      this.storage
    );
    var n;
  };
  function le(e, t) {
    function n(e, t, n, i) {
      return X(e, t) || X(n, i);
    }
    function i(e, t) {
      z(t) || (l[e] = t);
    }
    var o = e ? "?" + e.split(".").slice(-1)[0].replace(/\|/g, "&") : "",
      r = n(y.UTM_SOURCE, t, "utmcsr", o),
      s = n(y.UTM_MEDIUM, t, "utmcmd", o),
      a = n(y.UTM_CAMPAIGN, t, "utmccn", o),
      u = n(y.UTM_TERM, t, "utmctr", o),
      c = n(y.UTM_CONTENT, t, "utmcct", o),
      l = {};
    return (
      i(y.UTM_SOURCE, r),
      i(y.UTM_MEDIUM, s),
      i(y.UTM_CAMPAIGN, a),
      i(y.UTM_TERM, u),
      i(y.UTM_CONTENT, c),
      l
    );
  }
  function pe() {
    (this.userPropertiesOperations = {}), (this.properties = []);
  }
  var de =
      (r((ue = {}), y.STORAGE_COOKIES, !0),
      r(ue, y.STORAGE_NONE, !0),
      r(ue, y.STORAGE_LOCAL, !0),
      r(ue, y.STORAGE_SESSION, !0),
      ue),
    he = (function () {
      function l(e) {
        var t = e.storageKey,
          n = e.disableCookies,
          i = e.domain,
          o = e.secure,
          r = e.sameSite,
          s = e.expirationDays,
          a = e.storage;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, l),
          (this.storageKey = t),
          (this.domain = i),
          (this.secure = o),
          (this.sameSite = r),
          (this.expirationDays = s),
          (this.cookieDomain = "");
        var u,
          c = te(Z().href);
        (this.cookieDomain = i || (c ? "." + c : null)),
          de[a]
            ? (this.storage = a)
            : ((u =
                n ||
                !ee.areCookiesEnabled({
                  domain: this.cookieDomain,
                  secure: this.secure,
                  sameSite: this.sameSite,
                  expirationDays: this.expirationDays,
                })),
              (this.storage = u ? y.STORAGE_LOCAL : y.STORAGE_COOKIES));
      }
      var e, t, n;
      return (
        (e = l),
        (t = [
          {
            key: "getCookieStorageKey",
            value: function () {
              if (!this.domain) return this.storageKey;
              var e =
                "." === this.domain.charAt(0)
                  ? this.domain.substring(1)
                  : this.domain;
              return "".concat(this.storageKey).concat(e ? "_".concat(e) : "");
            },
          },
          {
            key: "save",
            value: function (e) {
              var t = e.deviceId,
                n = e.userId,
                i = e.optOut,
                o = e.sessionId,
                r = e.lastEventTime,
                s = e.eventId,
                a = e.identifyId,
                u = e.sequenceNumber;
              if (this.storage !== y.STORAGE_NONE) {
                var c = [
                  t,
                  E.encode(n || ""),
                  i ? "1" : "",
                  o ? o.toString(32) : "0",
                  r ? r.toString(32) : "0",
                  s ? s.toString(32) : "0",
                  a ? a.toString(32) : "0",
                  u ? u.toString(32) : "0",
                ].join(".");
                switch (this.storage) {
                  case y.STORAGE_SESSION:
                    window.sessionStorage &&
                      window.sessionStorage.setItem(this.storageKey, c);
                    break;
                  case y.STORAGE_LOCAL:
                    ce.setItem(this.storageKey, c);
                    break;
                  case y.STORAGE_COOKIES:
                    this.saveCookie(c);
                }
              }
            },
          },
          {
            key: "saveCookie",
            value: function (e) {
              ee.set(this.getCookieStorageKey(), e, {
                domain: this.cookieDomain,
                secure: this.secure,
                sameSite: this.sameSite,
                expirationDays: this.expirationDays,
              });
            },
          },
          {
            key: "load",
            value: function () {
              var e,
                t,
                n,
                i,
                o = this;
              if (
                (this.storage === y.STORAGE_COOKIES &&
                  ((e = this.getCookieStorageKey() + "="),
                  (i =
                    0 === (t = ee.getAll(e)).length || 1 === t.length
                      ? t[0]
                      : ((n = ee.sortByEventTime(t)[0]),
                        t.forEach(function () {
                          return ee.set(o.getCookieStorageKey(), null, {});
                        }),
                        this.saveCookie(n),
                        ee.get(e)))),
                !(i = i || ce.getItem(this.storageKey)))
              )
                try {
                  i =
                    window.sessionStorage &&
                    window.sessionStorage.getItem(this.storageKey);
                } catch (e) {
                  B.info(
                    'window.sessionStorage unavailable. Reason: "'.concat(
                      e,
                      '"'
                    )
                  );
                }
              if (!i) return null;
              var r = i.split("."),
                s = null;
              if (r[y.USER_ID_INDEX])
                try {
                  s = E.decode(r[y.USER_ID_INDEX]);
                } catch (e) {
                  s = null;
                }
              return {
                deviceId: r[y.DEVICE_ID_INDEX],
                userId: s,
                optOut: "1" === r[y.OPT_OUT_INDEX],
                sessionId: parseInt(r[y.SESSION_ID_INDEX], 32),
                lastEventTime: parseInt(r[y.LAST_EVENT_TIME_INDEX], 32),
                eventId: parseInt(r[y.EVENT_ID_INDEX], 32),
                identifyId: parseInt(r[y.IDENTIFY_ID_INDEX], 32),
                sequenceNumber: parseInt(r[y.SEQUENCE_NUMBER_INDEX], 32),
              };
            },
          },
          {
            key: "clear",
            value: function () {
              var e;
              if (
                (this.storage === y.STORAGE_COOKIES &&
                  ((e = ee.get(this.getCookieStorageKey() + "=")),
                  ee.set(this.getCookieStorageKey(), null, {
                    domain: this.cookieDomain,
                    secure: this.secure,
                    sameSite: this.sameSite,
                    expirationDays: 0,
                  })),
                e || ((e = ce.getItem(this.storageKey)), ce.clear()),
                !e)
              )
                try {
                  (e =
                    window.sessionStorage &&
                    window.sessionStorage.getItem(this.storageKey)),
                    window.sessionStorage.clear();
                } catch (e) {
                  B.info(
                    'window.sessionStorage unavailable. Reason: "'.concat(
                      e,
                      '"'
                    )
                  );
                }
              return !!e;
            },
          },
        ]) && i(e.prototype, t),
        n && i(e, n),
        l
      );
    })(),
    fe = "$clearAll";
  (pe.prototype.add = function (e, t) {
    return (
      "number" === b(t) || "string" === b(t)
        ? this._addOperation("$add", e, t)
        : B.error(
            "Unsupported type for value: " +
              b(t) +
              ", expecting number or string"
          ),
      this
    );
  }),
    (pe.prototype.append = function (e, t) {
      return this._addOperation("$append", e, t), this;
    }),
    (pe.prototype.clearAll = function () {
      return (
        0 < Object.keys(this.userPropertiesOperations).length
          ? Object.prototype.hasOwnProperty.call(
              this.userPropertiesOperations,
              fe
            ) ||
            B.error(
              "Need to send $clearAll on its own Identify object without any other operations, skipping $clearAll"
            )
          : (this.userPropertiesOperations[fe] = "-"),
        this
      );
    }),
    (pe.prototype.prepend = function (e, t) {
      return this._addOperation("$prepend", e, t), this;
    }),
    (pe.prototype.set = function (e, t) {
      return this._addOperation("$set", e, t), this;
    }),
    (pe.prototype.setOnce = function (e, t) {
      return this._addOperation("$setOnce", e, t), this;
    }),
    (pe.prototype.unset = function (e) {
      return this._addOperation("$unset", e, "-"), this;
    }),
    (pe.prototype.preInsert = function (e, t) {
      return this._addOperation("$preInsert", e, t), this;
    }),
    (pe.prototype.postInsert = function (e, t) {
      return this._addOperation("$postInsert", e, t), this;
    }),
    (pe.prototype.remove = function (e, t) {
      return this._addOperation("$remove", e, t), this;
    }),
    (pe.prototype._addOperation = function (e, t, n) {
      Object.prototype.hasOwnProperty.call(this.userPropertiesOperations, fe)
        ? B.error(
            "This identify already contains a $clearAll operation, skipping operation " +
              e
          )
        : -1 === this.properties.indexOf(t)
        ? (Object.prototype.hasOwnProperty.call(
            this.userPropertiesOperations,
            e
          ) || (this.userPropertiesOperations[e] = {}),
          (this.userPropertiesOperations[e][t] = n),
          this.properties.push(t))
        : B.error(
            'User property "' +
              t +
              '" already used in this identify, skipping operation ' +
              e
          );
    });
  var ve =
    "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {};
  function ge(e, t) {
    return e((t = { exports: {} }), t.exports), t.exports;
  }
  var _e = ge(function (e) {
      function p(e, t) {
        var n = (65535 & e) + (65535 & t);
        return (((e >> 16) + (t >> 16) + (n >> 16)) << 16) | (65535 & n);
      }
      function a(e, t, n, i, o, r) {
        return p(((s = p(p(t, e), p(i, r))) << (a = o)) | (s >>> (32 - a)), n);
        var s, a;
      }
      function d(e, t, n, i, o, r, s) {
        return a((t & n) | (~t & i), e, t, o, r, s);
      }
      function h(e, t, n, i, o, r, s) {
        return a((t & i) | (n & ~i), e, t, o, r, s);
      }
      function f(e, t, n, i, o, r, s) {
        return a(t ^ n ^ i, e, t, o, r, s);
      }
      function v(e, t, n, i, o, r, s) {
        return a(n ^ (t | ~i), e, t, o, r, s);
      }
      function u(e, t) {
        var n, i, o, r;
        (e[t >> 5] |= 128 << t % 32), (e[14 + (((t + 64) >>> 9) << 4)] = t);
        for (
          var s = 1732584193,
            a = -271733879,
            u = -1732584194,
            c = 271733878,
            l = 0;
          l < e.length;
          l += 16
        )
          (s = d((n = s), (i = a), (o = u), (r = c), e[l], 7, -680876936)),
            (c = d(c, s, a, u, e[l + 1], 12, -389564586)),
            (u = d(u, c, s, a, e[l + 2], 17, 606105819)),
            (a = d(a, u, c, s, e[l + 3], 22, -1044525330)),
            (s = d(s, a, u, c, e[l + 4], 7, -176418897)),
            (c = d(c, s, a, u, e[l + 5], 12, 1200080426)),
            (u = d(u, c, s, a, e[l + 6], 17, -1473231341)),
            (a = d(a, u, c, s, e[l + 7], 22, -45705983)),
            (s = d(s, a, u, c, e[l + 8], 7, 1770035416)),
            (c = d(c, s, a, u, e[l + 9], 12, -1958414417)),
            (u = d(u, c, s, a, e[l + 10], 17, -42063)),
            (a = d(a, u, c, s, e[l + 11], 22, -1990404162)),
            (s = d(s, a, u, c, e[l + 12], 7, 1804603682)),
            (c = d(c, s, a, u, e[l + 13], 12, -40341101)),
            (u = d(u, c, s, a, e[l + 14], 17, -1502002290)),
            (s = h(
              s,
              (a = d(a, u, c, s, e[l + 15], 22, 1236535329)),
              u,
              c,
              e[l + 1],
              5,
              -165796510
            )),
            (c = h(c, s, a, u, e[l + 6], 9, -1069501632)),
            (u = h(u, c, s, a, e[l + 11], 14, 643717713)),
            (a = h(a, u, c, s, e[l], 20, -373897302)),
            (s = h(s, a, u, c, e[l + 5], 5, -701558691)),
            (c = h(c, s, a, u, e[l + 10], 9, 38016083)),
            (u = h(u, c, s, a, e[l + 15], 14, -660478335)),
            (a = h(a, u, c, s, e[l + 4], 20, -405537848)),
            (s = h(s, a, u, c, e[l + 9], 5, 568446438)),
            (c = h(c, s, a, u, e[l + 14], 9, -1019803690)),
            (u = h(u, c, s, a, e[l + 3], 14, -187363961)),
            (a = h(a, u, c, s, e[l + 8], 20, 1163531501)),
            (s = h(s, a, u, c, e[l + 13], 5, -1444681467)),
            (c = h(c, s, a, u, e[l + 2], 9, -51403784)),
            (u = h(u, c, s, a, e[l + 7], 14, 1735328473)),
            (s = f(
              s,
              (a = h(a, u, c, s, e[l + 12], 20, -1926607734)),
              u,
              c,
              e[l + 5],
              4,
              -378558
            )),
            (c = f(c, s, a, u, e[l + 8], 11, -2022574463)),
            (u = f(u, c, s, a, e[l + 11], 16, 1839030562)),
            (a = f(a, u, c, s, e[l + 14], 23, -35309556)),
            (s = f(s, a, u, c, e[l + 1], 4, -1530992060)),
            (c = f(c, s, a, u, e[l + 4], 11, 1272893353)),
            (u = f(u, c, s, a, e[l + 7], 16, -155497632)),
            (a = f(a, u, c, s, e[l + 10], 23, -1094730640)),
            (s = f(s, a, u, c, e[l + 13], 4, 681279174)),
            (c = f(c, s, a, u, e[l], 11, -358537222)),
            (u = f(u, c, s, a, e[l + 3], 16, -722521979)),
            (a = f(a, u, c, s, e[l + 6], 23, 76029189)),
            (s = f(s, a, u, c, e[l + 9], 4, -640364487)),
            (c = f(c, s, a, u, e[l + 12], 11, -421815835)),
            (u = f(u, c, s, a, e[l + 15], 16, 530742520)),
            (s = v(
              s,
              (a = f(a, u, c, s, e[l + 2], 23, -995338651)),
              u,
              c,
              e[l],
              6,
              -198630844
            )),
            (c = v(c, s, a, u, e[l + 7], 10, 1126891415)),
            (u = v(u, c, s, a, e[l + 14], 15, -1416354905)),
            (a = v(a, u, c, s, e[l + 5], 21, -57434055)),
            (s = v(s, a, u, c, e[l + 12], 6, 1700485571)),
            (c = v(c, s, a, u, e[l + 3], 10, -1894986606)),
            (u = v(u, c, s, a, e[l + 10], 15, -1051523)),
            (a = v(a, u, c, s, e[l + 1], 21, -2054922799)),
            (s = v(s, a, u, c, e[l + 8], 6, 1873313359)),
            (c = v(c, s, a, u, e[l + 15], 10, -30611744)),
            (u = v(u, c, s, a, e[l + 6], 15, -1560198380)),
            (a = v(a, u, c, s, e[l + 13], 21, 1309151649)),
            (s = v(s, a, u, c, e[l + 4], 6, -145523070)),
            (c = v(c, s, a, u, e[l + 11], 10, -1120210379)),
            (u = v(u, c, s, a, e[l + 2], 15, 718787259)),
            (a = v(a, u, c, s, e[l + 9], 21, -343485551)),
            (s = p(s, n)),
            (a = p(a, i)),
            (u = p(u, o)),
            (c = p(c, r));
        return [s, a, u, c];
      }
      function c(e) {
        for (var t = "", n = 32 * e.length, i = 0; i < n; i += 8)
          t += String.fromCharCode((e[i >> 5] >>> i % 32) & 255);
        return t;
      }
      function l(e) {
        var t = [];
        for (t[(e.length >> 2) - 1] = void 0, i = 0; i < t.length; i += 1)
          t[i] = 0;
        for (var n = 8 * e.length, i = 0; i < n; i += 8)
          t[i >> 5] |= (255 & e.charCodeAt(i / 8)) << i % 32;
        return t;
      }
      function i(e) {
        for (var t, n = "0123456789abcdef", i = "", o = 0; o < e.length; o += 1)
          (t = e.charCodeAt(o)),
            (i += n.charAt((t >>> 4) & 15) + n.charAt(15 & t));
        return i;
      }
      function n(e) {
        return unescape(encodeURIComponent(e));
      }
      function o(e) {
        return c(u(l((t = n(e))), 8 * t.length));
        var t;
      }
      function r(e, t) {
        return (function (e, t) {
          var n,
            i,
            o = l(e),
            r = [],
            s = [];
          for (
            r[15] = s[15] = void 0,
              16 < o.length && (o = u(o, 8 * e.length)),
              n = 0;
            n < 16;
            n += 1
          )
            (r[n] = 909522486 ^ o[n]), (s[n] = 1549556828 ^ o[n]);
          return (
            (i = u(r.concat(l(t)), 512 + 8 * t.length)), c(u(s.concat(i), 640))
          );
        })(n(e), n(t));
      }
      function t(e, t, n) {
        return t ? (n ? r(t, e) : i(r(t, e))) : n ? o(e) : i(o(e));
      }
      var s;
      (s = ve), e.exports ? (e.exports = t) : (s.md5 = t);
    }),
    ye = function (e) {
      return encodeURIComponent(e).replace(/[!'()*]/g, function (e) {
        return "%" + e.charCodeAt(0).toString(16).toUpperCase();
      });
    },
    me = Object.getOwnPropertySymbols,
    we = Object.prototype.hasOwnProperty,
    Ee = Object.prototype.propertyIsEnumerable;
  var Ie = (function () {
      try {
        if (!Object.assign) return;
        var e = new String("abc");
        if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0])) return;
        for (var t = {}, n = 0; n < 10; n++)
          t["_" + String.fromCharCode(n)] = n;
        if (
          "0123456789" !==
          Object.getOwnPropertyNames(t)
            .map(function (e) {
              return t[e];
            })
            .join("")
        )
          return;
        var i = {};
        return (
          "abcdefghijklmnopqrst".split("").forEach(function (e) {
            i[e] = e;
          }),
          "abcdefghijklmnopqrst" !== Object.keys(Object.assign({}, i)).join("")
            ? void 0
            : 1
        );
      } catch (e) {
        return;
      }
    })()
      ? Object.assign
      : function (e, t) {
          for (
            var n,
              i,
              o = (function (e) {
                if (null == e)
                  throw new TypeError(
                    "Object.assign cannot be called with null or undefined"
                  );
                return Object(e);
              })(e),
              r = 1;
            r < arguments.length;
            r++
          ) {
            for (var s in (n = Object(arguments[r])))
              we.call(n, s) && (o[s] = n[s]);
            if (me) {
              i = me(n);
              for (var a = 0; a < i.length; a++)
                Ee.call(n, i[a]) && (o[i[a]] = n[i[a]]);
            }
          }
          return o;
        },
    be = "%[a-f0-9]{2}";
  new RegExp(be, "gi"), new RegExp("(" + be + ")+", "gi");
  function Se(e, t) {
    return t.encode ? (t.strict ? ye : encodeURIComponent)(e) : e;
  }
  function Te(e, t, n) {
    (this.url = e), (this.data = t || {}), (this.headers = n);
  }
  var Ne = function (i, o) {
    !1 === (o = Ie({ encode: !0, strict: !0, arrayFormat: "none" }, o)).sort &&
      (o.sort = function () {});
    var r = (function (i) {
      switch (i.arrayFormat) {
        case "index":
          return function (e, t, n) {
            return null === t
              ? [Se(e, i), "[", n, "]"].join("")
              : [Se(e, i), "[", Se(n, i), "]=", Se(t, i)].join("");
          };
        case "bracket":
          return function (e, t) {
            return null === t ? Se(e, i) : [Se(e, i), "[]=", Se(t, i)].join("");
          };
        default:
          return function (e, t) {
            return null === t ? Se(e, i) : [Se(e, i), "=", Se(t, i)].join("");
          };
      }
    })(o);
    return i
      ? Object.keys(i)
          .sort(o.sort)
          .map(function (t) {
            var e = i[t];
            if (void 0 === e) return "";
            if (null === e) return Se(t, o);
            if (Array.isArray(e)) {
              var n = [];
              return (
                e.slice().forEach(function (e) {
                  void 0 !== e && n.push(r(t, e, n.length));
                }),
                n.join("&")
              );
            }
            return Se(t, o) + "=" + Se(e, o);
          })
          .filter(function (e) {
            return 0 < e.length;
          })
          .join("&")
      : "";
  };
  Te.prototype.send = function (e) {
    var t, n;
    !!window.XDomainRequest
      ? ((t = new window.XDomainRequest()).open("POST", this.url, !0),
        (t.onload = function () {
          e(200, t.responseText);
        }),
        (t.onerror = function () {
          "Request Entity Too Large" === t.responseText
            ? e(413, t.responseText)
            : e(500, t.responseText);
        }),
        (t.ontimeout = function () {}),
        (t.onprogress = function () {}),
        t.send(Ne(this.data)))
      : ((n = new XMLHttpRequest()).open("POST", this.url, !0),
        (n.onreadystatechange = function () {
          4 === n.readyState && e(n.status, n.responseText);
        }),
        (function (e, t) {
          for (var n in t) e.setRequestHeader(n, t[n]);
        })(n, this.headers),
        n.send(Ne(this.data)));
  };
  function Oe() {
    (this._price = null),
      (this._productId = null),
      (this._quantity = 1),
      (this._revenueType = null),
      (this._properties = null);
  }
  (Oe.prototype.setProductId = function (e) {
    return (
      "string" !== b(e)
        ? B.error(
            "Unsupported type for productId: " + b(e) + ", expecting string"
          )
        : z(e)
        ? B.error("Invalid empty productId")
        : (this._productId = e),
      this
    );
  }),
    (Oe.prototype.setQuantity = function (e) {
      return (
        "number" !== b(e)
          ? B.error(
              "Unsupported type for quantity: " + b(e) + ", expecting number"
            )
          : (this._quantity = parseInt(e)),
        this
      );
    }),
    (Oe.prototype.setPrice = function (e) {
      return (
        "number" !== b(e)
          ? B.error(
              "Unsupported type for price: " + b(e) + ", expecting number"
            )
          : (this._price = e),
        this
      );
    }),
    (Oe.prototype.setRevenueType = function (e) {
      return (
        "string" !== b(e)
          ? B.error(
              "Unsupported type for revenueType: " + b(e) + ", expecting string"
            )
          : (this._revenueType = e),
        this
      );
    }),
    (Oe.prototype.setEventProperties = function (e) {
      return (
        "object" !== b(e)
          ? B.error(
              "Unsupported type for eventProperties: " +
                b(e) +
                ", expecting object"
            )
          : (this._properties = Y(e)),
        this
      );
    }),
    (Oe.prototype._isValidRevenue = function () {
      return (
        "number" === b(this._price) ||
        (B.error("Invalid revenue, need to set price field"), !1)
      );
    }),
    (Oe.prototype._toJSONObject = function () {
      var e = "object" === b(this._properties) ? this._properties : {};
      return (
        null !== this._productId && (e[y.REVENUE_PRODUCT_ID] = this._productId),
        null !== this._quantity && (e[y.REVENUE_QUANTITY] = this._quantity),
        null !== this._price && (e[y.REVENUE_PRICE] = this._price),
        null !== this._revenueType &&
          (e[y.REVENUE_REVENUE_TYPE] = this._revenueType),
        e
      );
    });
  function Ae(e) {
    l() ||
      B.warn(
        "amplitude-js will not work in a non-browser environment. If you are planning to add Amplitude to a node environment, please use @amplitude/node"
      ),
      (this._instanceName = z(e) ? y.DEFAULT_INSTANCE : e.toLowerCase()),
      (this._unsentEvents = []),
      (this._unsentIdentifys = []),
      (this._ua = new ke(navigator.userAgent).getResult()),
      (this.options = _({}, Ce, {
        trackingOptions: _({}, Ce.trackingOptions),
      })),
      (this.cookieStorage = new ae().getStorage()),
      (this._q = []),
      (this._sending = !1),
      (this._updateScheduled = !1),
      (this._onInit = []),
      (this._eventId = 0),
      (this._identifyId = 0),
      (this._lastEventTime = null),
      (this._newSession = !1),
      (this._sequenceNumber = 0),
      (this._sessionId = null),
      (this._isInitialized = !1),
      (this._userAgent = (navigator && navigator.userAgent) || null);
  }
  var ke = ge(function (E, I) {
      !(function (o, p) {
        var d = "function",
          e = "model",
          t = "name",
          n = "type",
          i = "vendor",
          r = "version",
          s = "architecture",
          a = "console",
          u = "mobile",
          c = "tablet",
          l = "smarttv",
          h = "wearable",
          f = {
            extend: function (e, t) {
              var n = {};
              for (var i in e)
                t[i] && t[i].length % 2 == 0
                  ? (n[i] = t[i].concat(e[i]))
                  : (n[i] = e[i]);
              return n;
            },
            has: function (e, t) {
              return (
                "string" == typeof e &&
                -1 !== t.toLowerCase().indexOf(e.toLowerCase())
              );
            },
            lowerize: function (e) {
              return e.toLowerCase();
            },
            major: function (e) {
              return "string" == typeof e
                ? e.replace(/[^\d\.]/g, "").split(".")[0]
                : p;
            },
            trim: function (e) {
              return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
            },
          },
          v = {
            rgx: function (e, t) {
              for (var n, i, o, r, s, a = 0; a < t.length && !r; ) {
                for (
                  var u = t[a], c = t[a + 1], l = (n = 0);
                  l < u.length && !r;

                )
                  if ((r = u[l++].exec(e)))
                    for (i = 0; i < c.length; i++)
                      (s = r[++n]),
                        "object" == typeof (o = c[i]) && 0 < o.length
                          ? 2 == o.length
                            ? typeof o[1] == d
                              ? (this[o[0]] = o[1].call(this, s))
                              : (this[o[0]] = o[1])
                            : 3 == o.length
                            ? typeof o[1] != d || (o[1].exec && o[1].test)
                              ? (this[o[0]] = s ? s.replace(o[1], o[2]) : p)
                              : (this[o[0]] = s ? o[1].call(this, s, o[2]) : p)
                            : 4 == o.length &&
                              (this[o[0]] = s
                                ? o[3].call(this, s.replace(o[1], o[2]))
                                : p)
                          : (this[o] = s || p);
                a += 2;
              }
            },
            str: function (e, t) {
              for (var n in t)
                if ("object" == typeof t[n] && 0 < t[n].length) {
                  for (var i = 0; i < t[n].length; i++)
                    if (f.has(t[n][i], e)) return "?" === n ? p : n;
                } else if (f.has(t[n], e)) return "?" === n ? p : n;
              return e;
            },
          },
          g = {
            browser: {
              oldsafari: {
                version: {
                  "1.0": "/8",
                  1.2: "/1",
                  1.3: "/3",
                  "2.0": "/412",
                  "2.0.2": "/416",
                  "2.0.3": "/417",
                  "2.0.4": "/419",
                  "?": "/",
                },
              },
            },
            device: {
              amazon: { model: { "Fire Phone": ["SD", "KF"] } },
              sprint: {
                model: { "Evo Shift 4G": "7373KT" },
                vendor: { HTC: "APA", Sprint: "Sprint" },
              },
            },
            os: {
              windows: {
                version: {
                  ME: "4.90",
                  "NT 3.11": "NT3.51",
                  "NT 4.0": "NT4.0",
                  2e3: "NT 5.0",
                  XP: ["NT 5.1", "NT 5.2"],
                  Vista: "NT 6.0",
                  7: "NT 6.1",
                  8: "NT 6.2",
                  8.1: "NT 6.3",
                  10: ["NT 6.4", "NT 10.0"],
                  RT: "ARM",
                },
              },
            },
          },
          _ = {
            browser: [
              [
                /(opera\smini)\/([\w\.-]+)/i,
                /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,
                /(opera).+version\/([\w\.]+)/i,
                /(opera)[\/\s]+([\w\.]+)/i,
              ],
              [t, r],
              [/(opios)[\/\s]+([\w\.]+)/i],
              [[t, "Opera Mini"], r],
              [/\s(opr)\/([\w\.]+)/i],
              [[t, "Opera"], r],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
                /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,
                /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,
                /(?:ms|\()(ie)\s([\w\.]+)/i,
                /(rekonq)\/([\w\.]*)/i,
                /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,
              ],
              [t, r],
              [/(konqueror)\/([\w\.]+)/i],
              [[t, "Konqueror"], r],
              [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
              [[t, "IE"], r],
              [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],
              [[t, "Edge"], r],
              [/(yabrowser)\/([\w\.]+)/i],
              [[t, "Yandex"], r],
              [/(Avast)\/([\w\.]+)/i],
              [[t, "Avast Secure Browser"], r],
              [/(AVG)\/([\w\.]+)/i],
              [[t, "AVG Secure Browser"], r],
              [/(puffin)\/([\w\.]+)/i],
              [[t, "Puffin"], r],
              [/(focus)\/([\w\.]+)/i],
              [[t, "Firefox Focus"], r],
              [/(opt)\/([\w\.]+)/i],
              [[t, "Opera Touch"], r],
              [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
              [[t, "UCBrowser"], r],
              [/(comodo_dragon)\/([\w\.]+)/i],
              [[t, /_/g, " "], r],
              [/(windowswechat qbcore)\/([\w\.]+)/i],
              [[t, "WeChat(Win) Desktop"], r],
              [/(micromessenger)\/([\w\.]+)/i],
              [[t, "WeChat"], r],
              [/(brave)\/([\w\.]+)/i],
              [[t, "Brave"], r],
              [/(qqbrowserlite)\/([\w\.]+)/i],
              [t, r],
              [/(QQ)\/([\d\.]+)/i],
              [t, r],
              [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
              [t, r],
              [/(baiduboxapp)[\/\s]?([\w\.]+)/i],
              [t, r],
              [/(2345Explorer)[\/\s]?([\w\.]+)/i],
              [t, r],
              [/(MetaSr)[\/\s]?([\w\.]+)/i],
              [t],
              [/(LBBROWSER)/i],
              [t],
              [/xiaomi\/miuibrowser\/([\w\.]+)/i],
              [r, [t, "MIUI Browser"]],
              [/;fbav\/([\w\.]+);/i],
              [r, [t, "Facebook"]],
              [
                /safari\s(line)\/([\w\.]+)/i,
                /android.+(line)\/([\w\.]+)\/iab/i,
              ],
              [t, r],
              [/headlesschrome(?:\/([\w\.]+)|\s)/i],
              [r, [t, "Chrome Headless"]],
              [/\swv\).+(chrome)\/([\w\.]+)/i],
              [[t, /(.+)/, "$1 WebView"], r],
              [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
              [[t, /(.+(?:g|us))(.+)/, "$1 $2"], r],
              [
                /((?:android.+)crmo|crios)\/([\w\.]+)/i,
                /android.+(chrome)\/([\w\.]+)\s+(?:mobile\s?safari)/i,
              ],
              [[t, "Chrome Mobile"], r],
              [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
              [r, [t, "Android Browser"]],
              [/(sailfishbrowser)\/([\w\.]+)/i],
              [[t, "Sailfish Browser"], r],
              [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
              [t, r],
              [/(dolfin)\/([\w\.]+)/i],
              [[t, "Dolphin"], r],
              [/(qihu|qhbrowser|qihoobrowser|360browser)/i],
              [[t, "360 Browser"]],
              [/(coast)\/([\w\.]+)/i],
              [[t, "Opera Coast"], r],
              [/fxios\/([\w\.-]+)/i],
              [r, [t, "Firefox"]],
              [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
              [r, [t, "Mobile Safari"]],
              [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
              [r, t],
              [
                /webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i,
              ],
              [[t, "GSA"], r],
              [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
              [t, [r, v.str, g.browser.oldsafari.version]],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [t, r],
              [/(navigator|netscape)\/([\w\.-]+)/i],
              [[t, "Netscape"], r],
              [
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)/i,
                /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                /(links)\s\(([\w\.]+)/i,
                /(gobrowser)\/?([\w\.]*)/i,
                /(ice\s?browser)\/v?([\w\._]+)/i,
                /(mosaic)[\/\s]([\w\.]+)/i,
              ],
              [t, r],
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
              [[s, "amd64"]],
              [/(ia32(?=;))/i],
              [[s, f.lowerize]],
              [/((?:i[346]|x)86)[;\)]/i],
              [[s, "ia32"]],
              [/windows\s(ce|mobile);\sppc;/i],
              [[s, "arm"]],
              [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
              [[s, /ower/, "", f.lowerize]],
              [/(sun4\w)[;\)]/i],
              [[s, "sparc"]],
              [
                /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i,
              ],
              [[s, f.lowerize]],
            ],
            device: [
              [/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],
              [e, i, [n, c]],
              [/applecoremedia\/[\w\.]+ \((ipad)/],
              [e, [i, "Apple"], [n, c]],
              [/(apple\s{0,1}tv)/i],
              [
                [e, "Apple TV"],
                [i, "Apple"],
                [n, l],
              ],
              [
                /(archos)\s(gamepad2?)/i,
                /(hp).+(touchpad)/i,
                /(hp).+(tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /\s(nook)[\w\s]+build\/(\w+)/i,
                /(dell)\s(strea[kpr\s\d]*[\dko])/i,
              ],
              [i, e, [n, c]],
              [/(kf[A-z]+)\sbuild\/.+silk\//i],
              [e, [i, "Amazon"], [n, c]],
              [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
              [
                [e, v.str, g.device.amazon.model],
                [i, "Amazon"],
                [n, u],
              ],
              [/android.+aft([bms])\sbuild/i],
              [e, [i, "Amazon"], [n, l]],
              [/\((ip[honed|\s\w*]+);.+(apple)/i],
              [e, i, [n, u]],
              [/\((ip[honed|\s\w*]+);/i],
              [e, [i, "Apple"], [n, u]],
              [
                /(blackberry)[\s-]?(\w+)/i,
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
                /(hp)\s([\w\s]+\w)/i,
                /(asus)-?(\w+)/i,
              ],
              [i, e, [n, u]],
              [/\(bb10;\s(\w+)/i],
              [e, [i, "BlackBerry"], [n, u]],
              [
                /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i,
              ],
              [e, [i, "Asus"], [n, c]],
              [
                /(sony)\s(tablet\s[ps])\sbuild\//i,
                /(sony)?(?:sgp.+)\sbuild\//i,
              ],
              [
                [i, "Sony"],
                [e, "Xperia Tablet"],
                [n, c],
              ],
              [
                /android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
              ],
              [e, [i, "Sony"], [n, u]],
              [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
              [i, e, [n, a]],
              [/android.+;\s(shield)\sbuild/i],
              [e, [i, "Nvidia"], [n, a]],
              [/(playstation\s[34portablevi]+)/i],
              [e, [i, "Sony"], [n, a]],
              [/(sprint\s(\w+))/i],
              [
                [i, v.str, g.device.sprint.vendor],
                [e, v.str, g.device.sprint.model],
                [n, u],
              ],
              [
                /(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,
                /(zte)-(\w*)/i,
                /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i,
              ],
              [i, [e, /_/g, " "], [n, u]],
              [/(nexus\s9)/i],
              [e, [i, "HTC"], [n, c]],
              [
                /d\/huawei([\w\s-]+)[;\)]/i,
                /(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i,
              ],
              [e, [i, "Huawei"], [n, u]],
              [/android.+(bah2?-a?[lw]\d{2})/i],
              [e, [i, "Huawei"], [n, c]],
              [/(microsoft);\s(lumia[\s\w]+)/i],
              [i, e, [n, u]],
              [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
              [e, [i, "Microsoft"], [n, a]],
              [/(kin\.[onetw]{3})/i],
              [
                [e, /\./g, " "],
                [i, "Microsoft"],
                [n, u],
              ],
              [
                /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,
                /mot[\s-]?(\w*)/i,
                /(XT\d{3,4}) build\//i,
                /(nexus\s6)/i,
              ],
              [e, [i, "Motorola"], [n, u]],
              [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
              [e, [i, "Motorola"], [n, c]],
              [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
              [
                [i, f.trim],
                [e, f.trim],
                [n, l],
              ],
              [/hbbtv.+maple;(\d+)/i],
              [
                [e, /^/, "SmartTV"],
                [i, "Samsung"],
                [n, l],
              ],
              [/\(dtv[\);].+(aquos)/i],
              [e, [i, "Sharp"], [n, l]],
              [
                /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
                /((SM-T\w+))/i,
              ],
              [[i, "Samsung"], e, [n, c]],
              [/smart-tv.+(samsung)/i],
              [i, [n, l], e],
              [
                /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
                /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,
                /sec-((sgh\w+))/i,
              ],
              [[i, "Samsung"], e, [n, u]],
              [/sie-(\w*)/i],
              [e, [i, "Siemens"], [n, u]],
              [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
              [[i, "Nokia"], e, [n, u]],
              [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
              [e, [i, "Acer"], [n, c]],
              [/android.+([vl]k\-?\d{3})\s+build/i],
              [e, [i, "LG"], [n, c]],
              [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
              [[i, "LG"], e, [n, c]],
              [/(lg) netcast\.tv/i],
              [i, e, [n, l]],
              [
                /(nexus\s[45])/i,
                /lg[e;\s\/-]+(\w*)/i,
                /android.+lg(\-?[\d\w]+)\s+build/i,
              ],
              [e, [i, "LG"], [n, u]],
              [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],
              [i, e, [n, c]],
              [/android.+(ideatab[a-z0-9\-\s]+)/i],
              [e, [i, "Lenovo"], [n, c]],
              [/(lenovo)[_\s-]?([\w-]+)/i],
              [i, e, [n, u]],
              [/linux;.+((jolla));/i],
              [i, e, [n, u]],
              [/((pebble))app\/[\d\.]+\s/i],
              [i, e, [n, h]],
              [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
              [i, e, [n, u]],
              [/crkey/i],
              [
                [e, "Chromecast"],
                [i, "Google"],
                [n, l],
              ],
              [/android.+;\s(glass)\s\d/i],
              [e, [i, "Google"], [n, h]],
              [/android.+;\s(pixel c)[\s)]/i],
              [e, [i, "Google"], [n, c]],
              [/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],
              [e, [i, "Google"], [n, u]],
              [
                /android.+;\s(\w+)\s+build\/hm\1/i,
                /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,
                /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,
                /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i,
              ],
              [
                [e, /_/g, " "],
                [i, "Xiaomi"],
                [n, u],
              ],
              [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
              [
                [e, /_/g, " "],
                [i, "Xiaomi"],
                [n, c],
              ],
              [/android.+;\s(m[1-5]\snote)\sbuild/i],
              [e, [i, "Meizu"], [n, u]],
              [/(mz)-([\w-]{2,})/i],
              [[i, "Meizu"], e, [n, u]],
              [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})[\s)]/i],
              [e, [i, "OnePlus"], [n, u]],
              [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
              [e, [i, "RCA"], [n, c]],
              [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
              [e, [i, "Dell"], [n, c]],
              [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
              [e, [i, "Verizon"], [n, c]],
              [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
              [[i, "Barnes & Noble"], e, [n, c]],
              [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
              [e, [i, "NuVision"], [n, c]],
              [/android.+;\s(k88)\sbuild/i],
              [e, [i, "ZTE"], [n, c]],
              [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
              [e, [i, "Swiss"], [n, u]],
              [/android.+[;\/]\s*(zur\d{3})\s+build/i],
              [e, [i, "Swiss"], [n, c]],
              [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
              [e, [i, "Zeki"], [n, c]],
              [
                /(android).+[;\/]\s+([YR]\d{2})\s+build/i,
                /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i,
              ],
              [[i, "Dragon Touch"], e, [n, c]],
              [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
              [e, [i, "Insignia"], [n, c]],
              [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
              [e, [i, "NextBook"], [n, c]],
              [
                /android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i,
              ],
              [[i, "Voice"], e, [n, u]],
              [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
              [[i, "LvTel"], e, [n, u]],
              [/android.+;\s(PH-1)\s/i],
              [e, [i, "Essential"], [n, u]],
              [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
              [e, [i, "Envizen"], [n, c]],
              [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
              [i, e, [n, c]],
              [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
              [e, [i, "MachSpeed"], [n, c]],
              [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
              [i, e, [n, c]],
              [/android.+[;\/]\s*TU_(1491)\s+build/i],
              [e, [i, "Rotor"], [n, c]],
              [/android.+(KS(.+))\s+build/i],
              [e, [i, "Amazon"], [n, c]],
              [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
              [i, e, [n, c]],
              [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
              [[n, f.lowerize], i, e],
              [/[\s\/\(](smart-?tv)[;\)]/i],
              [[n, l]],
              [/(android[\w\.\s\-]{0,9});.+build/i],
              [e, [i, "Generic"]],
            ],
            engine: [
              [/windows.+\sedge\/([\w\.]+)/i],
              [r, [t, "EdgeHTML"]],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [r, [t, "Blink"]],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,
                /(icab)[\/\s]([23]\.[\d\.]+)/i,
              ],
              [t, r],
              [/rv\:([\w\.]{1,9}).+(gecko)/i],
              [r, t],
            ],
            os: [
              [/microsoft\s(windows)\s(vista|xp)/i],
              [t, r],
              [
                /(windows)\snt\s6\.2;\s(arm)/i,
                /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,
                /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i,
              ],
              [
                [t, v.str, g.os.windows.name],
                [r, v.str, g.os.windows.version],
              ],
              [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
              [
                [t, "Windows"],
                [r, v.str, g.os.windows.version],
              ],
              [/\((bb)(10);/i],
              [[t, "BlackBerry"], r],
              [
                /(blackberry)\w*\/?([\w\.]*)/i,
                /(tizen|kaios)[\/\s]([\w\.]+)/i,
                /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,
              ],
              [t, r],
              [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
              [[t, "Symbian"], r],
              [/\((series40);/i],
              [t],
              [/mozilla.+\(mobile;.+gecko.+firefox/i],
              [[t, "Firefox OS"], r],
              [
                /(nintendo|playstation)\s([wids34portablevu]+)/i,
                /(mint)[\/\s\(]?(\w*)/i,
                /(mageia|vectorlinux)[;\s]/i,
                /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,
                /(hurd|linux)\s?([\w\.]*)/i,
                /(gnu)\s?([\w\.]*)/i,
              ],
              [[t, "Linux"], r],
              [/(cros)\s[\w]+\s([\w\.]+\w)/i],
              [[t, "Chromium OS"], r],
              [/(sunos)\s?([\w\.\d]*)/i],
              [[t, "Solaris"], r],
              [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
              [[t, "Linux"], r],
              [/(iphone)(?:.*os\s*([\w]*)\slike\smac|;\sopera)/i],
              [
                [t, "iPhone"],
                [r, /_/g, "."],
              ],
              [/(ipad)(?:.*os\s*([\w]*)\slike\smac|;\sopera)/i],
              [
                [t, "iPad"],
                [r, /_/g, "."],
              ],
              [/(haiku)\s(\w+)/i],
              [t, r],
              [
                /cfnetwork\/.+darwin/i,
                /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,
              ],
              [
                [r, /_/g, "."],
                [t, "iOS"],
              ],
              [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
              [
                [t, "Mac"],
                [r, /_/g, "."],
              ],
              [
                /((?:open)?solaris)[\/\s-]?([\w\.]*)/i,
                /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,
                /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,
                /(unix)\s?([\w\.]*)/i,
              ],
              [t, r],
            ],
          },
          y = function (e, t) {
            if (
              ("object" == typeof e && ((t = e), (e = p)), !(this instanceof y))
            )
              return new y(e, t).getResult();
            var n =
                e ||
                (o && o.navigator && o.navigator.userAgent
                  ? o.navigator.userAgent
                  : ""),
              i = t ? f.extend(_, t) : _;
            return (
              (this.getBrowser = function () {
                var e = { name: p, version: p };
                return (
                  v.rgx.call(e, n, i.browser), (e.major = f.major(e.version)), e
                );
              }),
              (this.getCPU = function () {
                var e = { architecture: p };
                return v.rgx.call(e, n, i.cpu), e;
              }),
              (this.getDevice = function () {
                var e = { vendor: p, model: p, type: p };
                return v.rgx.call(e, n, i.device), e;
              }),
              (this.getEngine = function () {
                var e = { name: p, version: p };
                return v.rgx.call(e, n, i.engine), e;
              }),
              (this.getOS = function () {
                var e = { name: p, version: p };
                return v.rgx.call(e, n, i.os), e;
              }),
              (this.getResult = function () {
                return {
                  ua: this.getUA(),
                  browser: this.getBrowser(),
                  engine: this.getEngine(),
                  os: this.getOS(),
                  device: this.getDevice(),
                  cpu: this.getCPU(),
                };
              }),
              (this.getUA = function () {
                return n;
              }),
              (this.setUA = function (e) {
                return (n = e), this;
              }),
              this
            );
          };
        (y.VERSION = "0.7.21"),
          (y.BROWSER = { NAME: t, MAJOR: "major", VERSION: r }),
          (y.CPU = { ARCHITECTURE: s }),
          (y.DEVICE = {
            MODEL: e,
            VENDOR: i,
            TYPE: n,
            CONSOLE: a,
            MOBILE: u,
            SMARTTV: l,
            TABLET: c,
            WEARABLE: h,
            EMBEDDED: "embedded",
          }),
          (y.ENGINE = { NAME: t, VERSION: r }),
          (y.OS = { NAME: t, VERSION: r }),
          E.exports && (I = E.exports = y),
          (I.UAParser = y);
        var m,
          w = o && (o.jQuery || o.Zepto);
        w &&
          !w.ua &&
          ((m = new y()),
          (w.ua = m.getResult()),
          (w.ua.get = function () {
            return m.getUA();
          }),
          (w.ua.set = function (e) {
            m.setUA(e);
            var t = m.getResult();
            for (var n in t) w.ua[n] = t[n];
          }));
      })("object" == typeof window ? window : ve);
    }),
    Re = (ke.UAParser, "8.5.0"),
    Ce = {
      apiEndpoint: "api.amplitude.com",
      batchEvents: !1,
      cookieExpiration: 365,
      cookieName: "amplitude_id",
      sameSiteCookie: "Lax",
      cookieForceUpgrade: !1,
      deferInitialization: !1,
      disableCookies: !1,
      deviceIdFromUrlParam: !1,
      domain: "",
      eventUploadPeriodMillis: 3e4,
      eventUploadThreshold: 30,
      forceHttps: !0,
      includeFbclid: !1,
      includeGclid: !1,
      includeReferrer: !1,
      includeUtm: !1,
      language: (function () {
        return (
          (navigator &&
            ((navigator.languages && navigator.languages[0]) ||
              navigator.language ||
              navigator.userLanguage)) ||
          ""
        );
      })(),
      logLevel: "WARN",
      logAttributionCapturedEvent: !1,
      optOut: !1,
      onError: function () {},
      onExitPage: function () {},
      platform: "Web",
      savedMaxCount: 1e3,
      saveEvents: !0,
      saveParamsReferrerOncePerSession: !0,
      secureCookie: !1,
      sessionTimeout: 18e5,
      storage: y.STORAGE_DEFAULT,
      trackingOptions: {
        city: !0,
        country: !0,
        carrier: !0,
        device_manufacturer: !0,
        device_model: !0,
        dma: !0,
        ip_address: !0,
        language: !0,
        os_name: !0,
        os_version: !0,
        platform: !0,
        region: !0,
        version_name: !0,
      },
      transport: y.TRANSPORT_HTTP,
      unsetParamsReferrerOnNewSession: !1,
      unsentKey: "amplitude_unsent",
      unsentIdentifyKey: "amplitude_unsent_identify",
      uploadBatchSize: 100,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    };
  (Ae.prototype.Identify = pe),
    (Ae.prototype.Revenue = Oe),
    (Ae.prototype.init = function (e, i, o, t) {
      var r = this;
      if ("string" !== b(e) || z(e))
        B.error("Invalid apiKey. Please re-initialize with a valid apiKey");
      else
        try {
          Pe(this.options, o),
            l() &&
              void 0 !== window.Prototype &&
              Array.prototype.toJSON &&
              ((function () {
                var e;
                if (l()) {
                  var t = window,
                    n = Array;
                  if (
                    void 0 !== t.Prototype &&
                    void 0 !==
                      (null === (e = n.prototype) || void 0 === e
                        ? void 0
                        : e.toJSON)
                  )
                    return delete n.prototype.toJSON;
                }
              })(),
              B.warn(
                "Prototype.js injected Array.prototype.toJSON. Deleting Array.prototype.toJSON to prevent double-stringify"
              )),
            this.options.cookieName !== Ce.cookieName &&
              B.warn(
                "The cookieName option is deprecated. We will be ignoring it for newer cookies"
              ),
            (this.options.apiKey = e),
            (this._storageSuffix =
              "_" +
              e +
              (this._instanceName === y.DEFAULT_INSTANCE
                ? ""
                : "_" + this._instanceName)),
            (this._storageSuffixV5 = e.slice(0, 6)),
            (this._oldCookiename =
              this.options.cookieName + this._storageSuffix),
            (this._unsentKey = this.options.unsentKey + this._storageSuffix),
            (this._unsentIdentifyKey =
              this.options.unsentIdentifyKey + this._storageSuffix),
            (this._cookieName = y.COOKIE_PREFIX + "_" + this._storageSuffixV5),
            this.cookieStorage.options({
              expirationDays: this.options.cookieExpiration,
              domain: this.options.domain,
              secure: this.options.secureCookie,
              sameSite: this.options.sameSiteCookie,
            }),
            (this._metadataStorage = new he({
              storageKey: this._cookieName,
              disableCookies: this.options.disableCookies,
              expirationDays: this.options.cookieExpiration,
              domain: this.options.domain,
              secure: this.options.secureCookie,
              sameSite: this.options.sameSiteCookie,
              storage: this.options.storage,
            }));
          var n = !!this.cookieStorage.get(this._oldCookiename),
            s = !!this._metadataStorage.load();
          this._useOldCookie = !s && n && !this.options.cookieForceUpgrade;
          var a = s || n;
          if (
            ((this.options.domain = this.cookieStorage.options().domain),
            this.options.deferInitialization && !a)
          )
            return void this._deferInitialization(e, i, o, t);
          "string" === b(this.options.logLevel) && K(this.options.logLevel);
          var u = Ge(this);
          (this._apiPropertiesTrackingOptions =
            0 < Object.keys(u).length ? { tracking_options: u } : {}),
            this.options.cookieForceUpgrade &&
              n &&
              (s || Ue(this), this.cookieStorage.remove(this._oldCookiename)),
            xe(this),
            (this._pendingReadStorage = !0);
          this.options.saveEvents &&
            ((this._unsentEvents = this._loadSavedUnsentEvents(
              this.options.unsentKey
            )
              .map(function (e) {
                return { event: e };
              })
              .concat(this._unsentEvents)),
            (this._unsentIdentifys = this._loadSavedUnsentEvents(
              this.options.unsentIdentifyKey
            )
              .map(function (e) {
                return { event: e };
              })
              .concat(this._unsentIdentifys))),
            (function (e) {
              o &&
                o.deviceId &&
                !Q(o.deviceId) &&
                (B.error(
                  'Invalid device ID rejected. Randomly generated UUID will be used instead of "'.concat(
                    o.deviceId,
                    '"'
                  )
                ),
                delete o.deviceId),
                (r.options.deviceId = r._getInitialDeviceId(
                  o && o.deviceId,
                  e
                )),
                (r.options.userId =
                  ("string" === b(i) && !z(i) && i) ||
                  ("number" === b(i) && i.toString()) ||
                  r.options.userId ||
                  null);
              var t = new Date().getTime();
              (r._sessionId &&
                r._lastEventTime &&
                !(t - r._lastEventTime > r.options.sessionTimeout)) ||
                (r.options.unsetParamsReferrerOnNewSession &&
                  r._unsetUTMParams(),
                (r._newSession = !0),
                (r._sessionId = t),
                r.options.saveParamsReferrerOncePerSession &&
                  r._trackParamsAndReferrer()),
                r.options.saveParamsReferrerOncePerSession ||
                  r._trackParamsAndReferrer(),
                r.options.saveEvents &&
                  (De(r._unsentEvents), De(r._unsentIdentifys)),
                (r._lastEventTime = t),
                qe(r),
                (r._pendingReadStorage = !1),
                r._sendEventsIfReady();
              for (var n = 0; n < r._onInit.length; n++) r._onInit[n](r);
              (r._onInit = []), (r._isInitialized = !0);
            })(),
            this.runQueuedFunctions(),
            "function" === b(t) && t(this);
          var c = this.options.onExitPage;
          "function" === b(c) &&
            (this.pageHandlersAdded ||
              ((this.pageHandlersAdded = !0),
              window.addEventListener(
                "pagehide",
                function () {
                  var e;
                  (e = r.options.transport),
                    r.setTransport(y.TRANSPORT_BEACON),
                    c(),
                    r.setTransport(e);
                },
                !1
              )));
        } catch (e) {
          B.error(e), "function" === b(o.onError) && o.onError(e);
        }
    }),
    (Ae.prototype.deleteLowerLevelDomainCookies = function () {
      var e = R(),
        t =
          this.options.domain && "." === this.options.domain[0]
            ? this.options.domain.slice(1)
            : this.options.domain;
      if (t && e !== t && new RegExp(t + "$").test(e)) {
        for (
          var n = e.split("."), i = t.split("."), o = n.length;
          o > i.length;
          --o
        ) {
          var r = n.slice(n.length - o).join(".");
          ee.set(this._cookieName, null, { domain: "." + r });
        }
        ee.set(this._cookieName, null, {});
      }
    }),
    (Ae.prototype._getInitialDeviceId = function (e, t) {
      if (e) return e;
      if (this.options.deviceIdFromUrlParam) {
        var n = this._getDeviceIdFromUrlParam(this._getUrlParams());
        if (n) return n;
      }
      return this.options.deviceId ? this.options.deviceId : t || N();
    });
  var De = function (e) {
    for (var t = 0; t < e.length; t++) {
      var n = e[t].event.user_properties,
        i = e[t].event.event_properties,
        o = e[t].event.groups;
      (e[t].event.user_properties = Y(n)),
        (e[t].event.event_properties = Y(i)),
        (e[t].event.groups = $(o));
    }
  };
  Ae.prototype._trackParamsAndReferrer = function () {
    var e, t, n, i, o;
    this.options.includeUtm && (e = this._initUtmData()),
      this.options.includeReferrer &&
        (t = this._saveReferrer(this._getReferrer())),
      this.options.includeGclid && (n = this._saveGclid(this._getUrlParams())),
      this.options.includeFbclid &&
        (i = this._saveFbclid(this._getUrlParams())),
      this.options.logAttributionCapturedEvent &&
        ((o = _({}, e, t, n, i)),
        0 < Object.keys(o).length && this.logEvent(y.ATTRIBUTION_EVENT, o));
  };
  var Pe = function e(t, n) {
    if ("object" === b(n)) {
      var i,
        o,
        r,
        s = new Set(["headers"]);
      for (var a in n)
        s.has(a)
          ? (t[a] = _({}, t[a], n[a]))
          : Object.prototype.hasOwnProperty.call(n, a) &&
            ((i = a),
            (r = o = void 0),
            Object.prototype.hasOwnProperty.call(t, i) &&
              ((o = n[i]),
              (r = b(t[i])),
              ("transport" !== i || J(o)) &&
                H(o, i + " option", r) &&
                ("boolean" === r
                  ? (t[i] = !!o)
                  : ("string" === r && !z(o)) ||
                    ("number" === r && 0 < o) ||
                    "function" === r
                  ? (t[i] = o)
                  : "object" === r && e(t[i], o))));
    }
  };
  (Ae.prototype.runQueuedFunctions = function () {
    var e = this._q;
    this._q = [];
    for (var t = 0; t < e.length; t++) {
      var n = this[e[t][0]];
      "function" === b(n) && n.apply(this, e[t].slice(1));
    }
  }),
    (Ae.prototype._apiKeySet = function (e) {
      return (
        !z(this.options.apiKey) ||
        (B.error(
          "Invalid apiKey. Please set a valid apiKey with init() before calling " +
            e
        ),
        !1)
      );
    }),
    (Ae.prototype._loadSavedUnsentEvents = function (e) {
      var t = this._getFromStorage(ce, e),
        n = this._parseSavedUnsentEventsString(t, e);
      return this._setInStorage(ce, e, JSON.stringify(n)), n;
    }),
    (Ae.prototype._parseSavedUnsentEventsString = function (e, t) {
      if (z(e)) return [];
      if ("string" === b(e))
        try {
          var n = JSON.parse(e);
          if ("array" === b(n)) return n;
        } catch (e) {}
      return (
        B.error(
          "Unable to load " + t + " events. Restart with a new empty queue."
        ),
        []
      );
    }),
    (Ae.prototype.isNewSession = function () {
      return this._newSession;
    }),
    (Ae.prototype.onInit = function (e) {
      this._isInitialized ? e(this) : this._onInit.push(e);
    }),
    (Ae.prototype.getSessionId = function () {
      return this._sessionId;
    }),
    (Ae.prototype.nextEventId = function () {
      return this._eventId++, this._eventId;
    }),
    (Ae.prototype.nextIdentifyId = function () {
      return this._identifyId++, this._identifyId;
    }),
    (Ae.prototype.nextSequenceNumber = function () {
      return this._sequenceNumber++, this._sequenceNumber;
    }),
    (Ae.prototype._unsentCount = function () {
      return this._unsentEvents.length + this._unsentIdentifys.length;
    }),
    (Ae.prototype._sendEventsIfReady = function () {
      return (
        0 !== this._unsentCount() &&
        (!this.options.batchEvents ||
        this._unsentCount() >= this.options.eventUploadThreshold ||
        this.options.transport === y.TRANSPORT_BEACON
          ? (this.sendEvents(), !0)
          : (this._updateScheduled ||
              ((this._updateScheduled = !0),
              setTimeout(
                function () {
                  (this._updateScheduled = !1), this.sendEvents();
                }.bind(this),
                this.options.eventUploadPeriodMillis
              )),
            !1))
      );
    }),
    (Ae.prototype.clearStorage = function () {
      return this._metadataStorage.clear();
    }),
    (Ae.prototype._getFromStorage = function (e, t) {
      return e.getItem(t + this._storageSuffix);
    }),
    (Ae.prototype._setInStorage = function (e, t, n) {
      e.setItem(t + this._storageSuffix, n);
    });
  var xe = function (e) {
      var t, n;
      e._useOldCookie
        ? "object" !== b((t = e.cookieStorage.get(e._oldCookiename))) ||
          je(e, t)
        : "object" === b((n = e._metadataStorage.load())) && je(e, n);
    },
    Ue = function (e) {
      var t = e.cookieStorage.get(e._oldCookiename);
      "object" === b(t) && (je(e, t), qe(e));
    },
    je = function (e, t) {
      t.deviceId && (e.options.deviceId = t.deviceId),
        t.userId && (e.options.userId = t.userId),
        null !== t.optOut &&
          void 0 !== t.optOut &&
          !1 !== t.optOut &&
          (e.options.optOut = t.optOut),
        t.sessionId && (e._sessionId = parseInt(t.sessionId, 10)),
        t.lastEventTime && (e._lastEventTime = parseInt(t.lastEventTime, 10)),
        t.eventId && (e._eventId = parseInt(t.eventId, 10)),
        t.identifyId && (e._identifyId = parseInt(t.identifyId, 10)),
        t.sequenceNumber &&
          (e._sequenceNumber = parseInt(t.sequenceNumber, 10));
    },
    qe = function (e) {
      var t = {
        deviceId: e.options.deviceId,
        userId: e.options.userId,
        optOut: e.options.optOut,
        sessionId: e._sessionId,
        lastEventTime: e._lastEventTime,
        eventId: e._eventId,
        identifyId: e._identifyId,
        sequenceNumber: e._sequenceNumber,
      };
      e._useOldCookie
        ? e.cookieStorage.set(e.options.cookieName + e._storageSuffix, t)
        : e._metadataStorage.save(t);
    };
  (Ae.prototype._initUtmData = function (e, t) {
    (e = e || this._getUrlParams()),
      (t = t || this.cookieStorage.get("__utmz"));
    var n = le(t, e);
    return Me(this, n), n;
  }),
    (Ae.prototype._unsetUTMParams = function () {
      var e = new pe();
      e.unset(y.REFERRER),
        e.unset(y.UTM_SOURCE),
        e.unset(y.UTM_MEDIUM),
        e.unset(y.UTM_CAMPAIGN),
        e.unset(y.UTM_TERM),
        e.unset(y.UTM_CONTENT),
        this.identify(e);
    });
  var Me = function (e, t) {
    if ("object" === b(t) && 0 !== Object.keys(t).length) {
      var n = new pe();
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) &&
          (n.setOnce("initial_" + i, t[i]), n.set(i, t[i]));
      e.identify(n);
    }
  };
  (Ae.prototype._getReferrer = function () {
    return document.referrer;
  }),
    (Ae.prototype._getUrlParams = function () {
      return location.search;
    }),
    (Ae.prototype._saveGclid = function (e) {
      var t = X("gclid", e);
      if (!z(t)) {
        var n = { gclid: t };
        return Me(this, n), n;
      }
    }),
    (Ae.prototype._saveFbclid = function (e) {
      var t = X("fbclid", e);
      if (!z(t)) {
        var n = { fbclid: t };
        return Me(this, n), n;
      }
    }),
    (Ae.prototype._getDeviceIdFromUrlParam = function (e) {
      return X(y.AMP_DEVICE_ID_PARAM, e);
    }),
    (Ae.prototype._getReferringDomain = function (e) {
      if (z(e)) return null;
      var t = e.split("/");
      return 3 <= t.length ? t[2] : null;
    }),
    (Ae.prototype._saveReferrer = function (e) {
      if (!z(e)) {
        var t = { referrer: e, referring_domain: this._getReferringDomain(e) };
        return Me(this, t), t;
      }
    }),
    (Ae.prototype.saveEvents = function () {
      try {
        var e = JSON.stringify(
          this._unsentEvents.map(function (e) {
            return e.event;
          })
        );
        this._setInStorage(ce, this.options.unsentKey, e);
      } catch (e) {}
      try {
        var t = JSON.stringify(
          this._unsentIdentifys.map(function (e) {
            return e.event;
          })
        );
        this._setInStorage(ce, this.options.unsentIdentifyKey, t);
      } catch (e) {}
    }),
    (Ae.prototype.setDomain = function (e) {
      if (this._shouldDeferCall())
        return this._q.push(
          ["setDomain"].concat(Array.prototype.slice.call(arguments, 0))
        );
      if (H(e, "domain", "string"))
        try {
          this.cookieStorage.options({
            expirationDays: this.options.cookieExpiration,
            secure: this.options.secureCookie,
            domain: e,
            sameSite: this.options.sameSiteCookie,
          }),
            (this.options.domain = this.cookieStorage.options().domain),
            xe(this),
            qe(this);
        } catch (e) {
          B.error(e);
        }
    }),
    (Ae.prototype.setUserId = function (e) {
      if (this._shouldDeferCall())
        return this._q.push(
          ["setUserId"].concat(Array.prototype.slice.call(arguments, 0))
        );
      try {
        (this.options.userId = (null != e && "" + e) || null), qe(this);
      } catch (e) {
        B.error(e);
      }
    }),
    (Ae.prototype.setGroup = function (e, t) {
      if (this._shouldDeferCall())
        return this._q.push(
          ["setGroup"].concat(Array.prototype.slice.call(arguments, 0))
        );
      var n, i;
      this._apiKeySet("setGroup()") &&
        H(e, "groupType", "string") &&
        !z(e) &&
        (((n = {})[e] = t),
        (i = new pe().set(e, t)),
        this._logEvent(
          y.IDENTIFY_EVENT,
          null,
          null,
          i.userPropertiesOperations,
          n,
          null,
          null,
          null
        ));
    }),
    (Ae.prototype.setOptOut = function (e) {
      if (this._shouldDeferCall())
        return this._q.push(
          ["setOptOut"].concat(Array.prototype.slice.call(arguments, 0))
        );
      if (H(e, "enable", "boolean"))
        try {
          (this.options.optOut = e), qe(this);
        } catch (e) {
          B.error(e);
        }
    }),
    (Ae.prototype.setSessionId = function (e) {
      if (H(e, "sessionId", "number"))
        try {
          (this._sessionId = e), qe(this);
        } catch (e) {
          B.error(e);
        }
    }),
    (Ae.prototype.resetSessionId = function () {
      this.setSessionId(new Date().getTime());
    }),
    (Ae.prototype.regenerateDeviceId = function () {
      if (this._shouldDeferCall())
        return this._q.push(
          ["regenerateDeviceId"].concat(
            Array.prototype.slice.call(arguments, 0)
          )
        );
      this.setDeviceId(N());
    }),
    (Ae.prototype.setDeviceId = function (e) {
      if (this._shouldDeferCall())
        return this._q.push(
          ["setDeviceId"].concat(Array.prototype.slice.call(arguments, 0))
        );
      if (Q(e))
        try {
          z(e) || ((this.options.deviceId = "" + e), qe(this));
        } catch (e) {
          B.error(e);
        }
    }),
    (Ae.prototype.setTransport = function (e) {
      if (this._shouldDeferCall())
        return this._q.push(
          ["setTransport"].concat(Array.prototype.slice.call(arguments, 0))
        );
      J(e) && (this.options.transport = e);
    }),
    (Ae.prototype.setUserProperties = function (e) {
      if (this._shouldDeferCall())
        return this._q.push(
          ["setUserProperties"].concat(Array.prototype.slice.call(arguments, 0))
        );
      if (
        this._apiKeySet("setUserProperties()") &&
        H(e, "userProperties", "object")
      ) {
        var t = W(Y(e));
        if (0 !== Object.keys(t).length) {
          var n = new pe();
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && n.set(i, t[i]);
          this.identify(n);
        }
      }
    }),
    (Ae.prototype.clearUserProperties = function () {
      if (this._shouldDeferCall())
        return this._q.push(
          ["clearUserProperties"].concat(
            Array.prototype.slice.call(arguments, 0)
          )
        );
      var e;
      this._apiKeySet("clearUserProperties()") &&
        ((e = new pe()).clearAll(), this.identify(e));
    });
  function Ve(e, t) {
    for (var n = 0; n < t._q.length; n++) {
      var i = e[t._q[n][0]];
      "function" === b(i) && i.apply(e, t._q[n].slice(1));
    }
    return e;
  }
  (Ae.prototype.identify = function (e, t, n) {
    if (this._shouldDeferCall())
      return this._q.push(
        ["identify"].concat(Array.prototype.slice.call(arguments, 0))
      );
    if (this._apiKeySet("identify()"))
      if (
        ("object" === b(e) &&
          Object.prototype.hasOwnProperty.call(e, "_q") &&
          (e = Ve(new pe(), e)),
        e instanceof pe)
      ) {
        if (0 < Object.keys(e.userPropertiesOperations).length)
          return this._logEvent(
            y.IDENTIFY_EVENT,
            null,
            null,
            e.userPropertiesOperations,
            null,
            null,
            null,
            t,
            n
          );
        Ke(t, n, 0, "No request sent", {
          reason: "No user property operations",
        });
      } else
        B.error(
          "Invalid identify input type. Expected Identify object but saw " +
            b(e)
        ),
          Ke(t, n, 0, "No request sent", {
            reason: "Invalid identify input type",
          });
    else Ke(t, n, 0, "No request sent", { reason: "API key is not set" });
  }),
    (Ae.prototype.groupIdentify = function (e, t, n, i, o) {
      if (this._shouldDeferCall())
        return this._q.push(
          ["groupIdentify"].concat(Array.prototype.slice.call(arguments, 0))
        );
      if (this._apiKeySet("groupIdentify()"))
        if (H(e, "group_type", "string") && !z(e))
          if (null != t)
            if (
              ("object" === b(n) &&
                Object.prototype.hasOwnProperty.call(n, "_q") &&
                (n = Ve(new pe(), n)),
              n instanceof pe)
            ) {
              if (0 < Object.keys(n.userPropertiesOperations).length)
                return this._logEvent(
                  y.GROUP_IDENTIFY_EVENT,
                  null,
                  null,
                  null,
                  r({}, e, t),
                  n.userPropertiesOperations,
                  null,
                  i,
                  o
                );
              Ke(i, o, 0, "No request sent", {
                reason: "No group property operations",
              });
            } else
              B.error(
                "Invalid identify input type. Expected Identify object but saw " +
                  b(n)
              ),
                Ke(i, o, 0, "No request sent", {
                  reason: "Invalid identify input type",
                });
          else Ke(i, o, 0, "No request sent", { reason: "Invalid group name" });
        else Ke(i, o, 0, "No request sent", { reason: "Invalid group type" });
      else Ke(i, o, 0, "No request sent", { reason: "API key is not set" });
    }),
    (Ae.prototype.setVersionName = function (e) {
      if (this._shouldDeferCall())
        return this._q.push(
          ["setVersionName"].concat(Array.prototype.slice.call(arguments, 0))
        );
      H(e, "versionName", "string") && (this.options.versionName = e);
    }),
    (Ae.prototype._logEvent = function (e, t, n, i, o, r, s, a, u) {
      if ((xe(this), e))
        if (this.options.optOut)
          Ke(a, u, 0, "No request sent", { reason: "optOut is set to true" });
        else
          try {
            var c =
                e === y.IDENTIFY_EVENT || e === y.GROUP_IDENTIFY_EVENT
                  ? this.nextIdentifyId()
                  : this.nextEventId(),
              l = this.nextSequenceNumber(),
              p = "number" === b(s) ? s : new Date().getTime();
            (this._sessionId &&
              this._lastEventTime &&
              !(p - this._lastEventTime > this.options.sessionTimeout)) ||
              (this._sessionId = p),
              (this._lastEventTime = p),
              qe(this);
            var d = this._ua.browser.name,
              h = this._ua.browser.major,
              f = this._ua.os.name;
            i = i || {};
            var v = _({}, this._apiPropertiesTrackingOptions);
            (n = _({}, n || {}, v)),
              (t = t || {}),
              (o = o || {}),
              (r = r || {});
            var g = {
              device_id: this.options.deviceId,
              user_id: this.options.userId,
              timestamp: p,
              event_id: c,
              session_id: this._sessionId || -1,
              event_type: e,
              version_name: this.options.versionName || null,
              platform: Le(this, "platform") ? this.options.platform : null,
              os_name: (Le(this, "os_name") && d) || null,
              os_version: (Le(this, "os_version") && h) || null,
              device_model: (Le(this, "device_model") && f) || null,
              language: Le(this, "language") ? this.options.language : null,
              api_properties: n,
              event_properties: W(Y(t)),
              user_properties: W(Y(i)),
              uuid: (function e(t) {
                return t
                  ? (t ^ ((16 * Math.random()) >> (t / 4))).toString(16)
                  : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e);
              })(),
              library: { name: "amplitude-js", version: Re },
              sequence_number: l,
              groups: W($(o)),
              group_properties: W(Y(r)),
              user_agent: this._userAgent,
            };
            return (
              e === y.IDENTIFY_EVENT || e === y.GROUP_IDENTIFY_EVENT
                ? (this._unsentIdentifys.push({
                    event: g,
                    callback: a,
                    errorCallback: u,
                  }),
                  this._limitEventsQueued(this._unsentIdentifys))
                : (this._unsentEvents.push({
                    event: g,
                    callback: a,
                    errorCallback: u,
                  }),
                  this._limitEventsQueued(this._unsentEvents)),
              this.options.saveEvents && this.saveEvents(),
              this._sendEventsIfReady(),
              c
            );
          } catch (e) {
            B.error(e);
          }
      else Ke(a, u, 0, "No request sent", { reason: "Missing eventType" });
    });
  var Le = function (e, t) {
      return !!e.options.trackingOptions[t];
    },
    Ge = function (e) {
      for (
        var t = ["city", "country", "dma", "ip_address", "region"],
          n = {},
          i = 0;
        i < t.length;
        i++
      ) {
        var o = t[i];
        Le(e, o) || (n[o] = !1);
      }
      return n;
    };
  (Ae.prototype._limitEventsQueued = function (e) {
    e.length > this.options.savedMaxCount &&
      e.splice(0, e.length - this.options.savedMaxCount).forEach(function (e) {
        Ke(e.callback, e.errorCallback, 0, "No request sent", {
          reason:
            "Event dropped because options.savedMaxCount exceeded. User may be offline or have a content blocker",
        });
      });
  }),
    (Ae.prototype.logEvent = function (e, t, n, i) {
      return this._shouldDeferCall()
        ? this._q.push(
            ["logEvent"].concat(Array.prototype.slice.call(arguments, 0))
          )
        : this.logEventWithTimestamp(e, t, null, n, i);
    }),
    (Ae.prototype.logEventWithTimestamp = function (e, t, n, i, o) {
      return this._shouldDeferCall()
        ? this._q.push(
            ["logEventWithTimestamp"].concat(
              Array.prototype.slice.call(arguments, 0)
            )
          )
        : this._apiKeySet("logEvent()")
        ? H(e, "eventType", "string")
          ? z(e)
            ? (Ke(i, o, 0, "No request sent", { reason: "Missing eventType" }),
              -1)
            : this._logEvent(e, t, null, null, null, null, n, i, o)
          : (Ke(i, o, 0, "No request sent", {
              reason: "Invalid type for eventType",
            }),
            -1)
        : (Ke(i, o, 0, "No request sent", { reason: "API key not set" }), -1);
    }),
    (Ae.prototype.logEventWithGroups = function (e, t, n, i, o) {
      return this._shouldDeferCall()
        ? this._q.push(
            ["logEventWithGroups"].concat(
              Array.prototype.slice.call(arguments, 0)
            )
          )
        : this._apiKeySet("logEventWithGroups()")
        ? H(e, "eventType", "string")
          ? this._logEvent(e, t, null, null, n, null, null, i, o)
          : (Ke(event.callback, event.errorCallback, 0, "No request sent", {
              reason: "Invalid type for eventType",
            }),
            -1)
        : (Ke(event.callback, event.errorCallback, 0, "No request sent", {
            reason: "API key not set",
          }),
          -1);
    });
  function Fe(e) {
    return !isNaN(parseFloat(e)) && isFinite(e);
  }
  var Ke = function (e, t, n, i, o) {
    "function" === b(e) && e(n, i, o), "function" === b(t) && t(n, i, o);
  };
  (Ae.prototype.logRevenueV2 = function (e) {
    if (this._shouldDeferCall())
      return this._q.push(
        ["logRevenueV2"].concat(Array.prototype.slice.call(arguments, 0))
      );
    if (this._apiKeySet("logRevenueV2()"))
      if (
        ("object" === b(e) &&
          Object.prototype.hasOwnProperty.call(e, "_q") &&
          (e = Ve(new Oe(), e)),
        e instanceof Oe)
      ) {
        if (e && e._isValidRevenue())
          return this.logEvent(y.REVENUE_EVENT, e._toJSONObject());
      } else
        B.error(
          "Invalid revenue input type. Expected Revenue object but saw " + b(e)
        );
  }),
    (Ae.prototype.logRevenue = function (e, t, n) {
      return this._shouldDeferCall()
        ? this._q.push(
            ["logRevenue"].concat(Array.prototype.slice.call(arguments, 0))
          )
        : this._apiKeySet("logRevenue()") && Fe(e) && (void 0 === t || Fe(t))
        ? this._logEvent(
            y.REVENUE_EVENT,
            {},
            {
              productId: n,
              special: "revenue_amount",
              quantity: t || 1,
              price: e,
            },
            null,
            null,
            null,
            null,
            null
          )
        : -1;
    }),
    (Ae.prototype._logErrorsOnEvents = function (e, t, n, i) {
      for (
        var o = ["_unsentEvents", "_unsentIdentifys"], r = 0;
        r < o.length;
        r++
      )
        for (
          var s = o[r], a = "_unsentEvents" === s ? e : t, u = 0;
          u < this[s].length;
          u++
        ) {
          var c = this[s][u];
          c.event.event_id <= a && c.errorCallback && c.errorCallback(n, i);
        }
    }),
    (Ae.prototype.removeEvents = function (e, t, n, i) {
      Be(this, "_unsentEvents", e, n, i), Be(this, "_unsentIdentifys", t, n, i);
    });
  var Be = function (e, t, n, i, o) {
    if (!(n < 0)) {
      for (var r = [], s = 0; s < e[t].length; s++) {
        var a = e[t][s];
        a.event.event_id > n ? r.push(a) : a.callback && a.callback(i, o);
      }
      e[t] = r;
    }
  };
  (Ae.prototype.sendEvents = function () {
    if (this._apiKeySet("sendEvents()")) {
      if (this.options.optOut)
        this.removeEvents(1 / 0, 1 / 0, 0, "No request sent", {
          reason: "Opt out is set to true",
        });
      else if (0 !== this._unsentCount()) {
        if (this.options.transport !== y.TRANSPORT_BEACON) {
          if (this._sending) return;
          this._sending = !0;
        }
        var n,
          e =
            (this.options.forceHttps || "https:" === window.location.protocol
              ? "https"
              : "http") +
            "://" +
            this.options.apiEndpoint,
          i = Math.min(this._unsentCount(), this.options.uploadBatchSize),
          t = this._mergeEventsAndIdentifys(i),
          o = t.maxEventId,
          r = t.maxIdentifyId,
          s = JSON.stringify(
            t.eventsToSend.map(function (e) {
              return e.event;
            })
          ),
          a = new Date().getTime(),
          u = {
            client: this.options.apiKey,
            e: s,
            v: y.API_VERSION,
            upload_time: a,
            checksum: _e(y.API_VERSION + this.options.apiKey + s + a),
          };
        this.options.transport !== y.TRANSPORT_BEACON
          ? new Te(e, u, (n = this).options.headers).send(function (e, t) {
              n._sending = !1;
              try {
                200 === e && "success" === t
                  ? (n.removeEvents(o, r, e, t),
                    n.options.saveEvents && n.saveEvents(),
                    n._sendEventsIfReady())
                  : (n._logErrorsOnEvents(o, r, e, t),
                    413 === e &&
                      (1 === n.options.uploadBatchSize &&
                        n.removeEvents(o, r, e, t),
                      (n.options.uploadBatchSize = Math.ceil(i / 2)),
                      n.sendEvents()));
              } catch (e) {}
            })
          : navigator.sendBeacon(e, new URLSearchParams(u))
          ? (this.removeEvents(o, r, 200, "success"),
            this.options.saveEvents && this.saveEvents())
          : this._logErrorsOnEvents(o, r, 0, "");
      }
    } else
      this.removeEvents(1 / 0, 1 / 0, 0, "No request sent", {
        reason: "API key not set",
      });
  }),
    (Ae.prototype._mergeEventsAndIdentifys = function (e) {
      for (var t = [], n = 0, i = -1, o = 0, r = -1; t.length < e; ) {
        var s = void 0,
          a = o >= this._unsentIdentifys.length,
          u = n >= this._unsentEvents.length;
        if (u && a) {
          B.error(
            "Merging Events and Identifys, less events and identifys than expected"
          );
          break;
        }
        a ||
        (!u &&
          (!("sequence_number" in this._unsentEvents[n].event) ||
            this._unsentEvents[n].event.sequence_number <
              this._unsentIdentifys[o].event.sequence_number))
          ? (i = (s = this._unsentEvents[n++]).event.event_id)
          : (r = (s = this._unsentIdentifys[o++]).event.event_id),
          t.push(s);
      }
      return { eventsToSend: t, maxEventId: i, maxIdentifyId: r };
    }),
    (Ae.prototype.setGlobalUserProperties = function (e) {
      this.setUserProperties(e);
    }),
    (Ae.prototype.__VERSION__ = Re),
    (Ae.prototype._shouldDeferCall = function () {
      return this._pendingReadStorage || this._initializationDeferred;
    }),
    (Ae.prototype._deferInitialization = function () {
      (this._initializationDeferred = !0),
        this._q.push(["init"].concat(Array.prototype.slice.call(arguments, 0)));
    }),
    (Ae.prototype.enableTracking = function () {
      (this._initializationDeferred = !1), qe(this), this.runQueuedFunctions();
    });
  function ze() {
    (this.options = _({}, Ce)), (this._q = []), (this._instances = {});
  }
  (ze.prototype.Identify = pe),
    (ze.prototype.Revenue = Oe),
    (ze.prototype.getInstance = function (e) {
      e = z(e) ? y.DEFAULT_INSTANCE : e.toLowerCase();
      var t = this._instances[e];
      return void 0 === t && ((t = new Ae(e)), (this._instances[e] = t)), t;
    }),
    (ze.prototype.runQueuedFunctions = function () {
      for (var e = 0; e < this._q.length; e++) {
        var t = this[this._q[e][0]];
        "function" === b(t) && t.apply(this, this._q[e].slice(1));
      }
      for (var n in ((this._q = []), this._instances))
        Object.prototype.hasOwnProperty.call(this._instances, n) &&
          this._instances[n].runQueuedFunctions();
    }),
    (ze.prototype.init = function (e, t, n, i) {
      this.getInstance().init(
        e,
        t,
        n,
        function (e) {
          (this.options = e.options), "function" === b(i) && i(e);
        }.bind(this)
      );
    }),
    (ze.prototype.isNewSession = function () {
      return this.getInstance().isNewSession();
    }),
    (ze.prototype.getSessionId = function () {
      return this.getInstance().getSessionId();
    }),
    (ze.prototype.nextEventId = function () {
      return this.getInstance().nextEventId();
    }),
    (ze.prototype.nextIdentifyId = function () {
      return this.getInstance().nextIdentifyId();
    }),
    (ze.prototype.nextSequenceNumber = function () {
      return this.getInstance().nextSequenceNumber();
    }),
    (ze.prototype.saveEvents = function () {
      this.getInstance().saveEvents();
    }),
    (ze.prototype.setDomain = function (e) {
      this.getInstance().setDomain(e);
    }),
    (ze.prototype.setUserId = function (e) {
      this.getInstance().setUserId(e);
    }),
    (ze.prototype.setGroup = function (e, t) {
      this.getInstance().setGroup(e, t);
    }),
    (ze.prototype.setOptOut = function (e) {
      this.getInstance().setOptOut(e);
    }),
    (ze.prototype.regenerateDeviceId = function () {
      this.getInstance().regenerateDeviceId();
    }),
    (ze.prototype.setDeviceId = function (e) {
      this.getInstance().setDeviceId(e);
    }),
    (ze.prototype.setUserProperties = function (e) {
      this.getInstance().setUserProperties(e);
    }),
    (ze.prototype.clearUserProperties = function () {
      this.getInstance().clearUserProperties();
    }),
    (ze.prototype.identify = function (e, t) {
      this.getInstance().identify(e, t);
    }),
    (ze.prototype.setVersionName = function (e) {
      this.getInstance().setVersionName(e);
    }),
    (ze.prototype.logEvent = function (e, t, n) {
      return this.getInstance().logEvent(e, t, n);
    }),
    (ze.prototype.logEventWithGroups = function (e, t, n, i) {
      return this.getInstance().logEventWithGroups(e, t, n, i);
    }),
    (ze.prototype.logRevenueV2 = function (e) {
      return this.getInstance().logRevenueV2(e);
    }),
    (ze.prototype.logRevenue = function (e, t, n) {
      return this.getInstance().logRevenue(e, t, n);
    }),
    (ze.prototype.removeEvents = function (e, t) {
      this.getInstance().removeEvents(e, t);
    }),
    (ze.prototype.sendEvents = function (e) {
      this.getInstance().sendEvents(e);
    }),
    (ze.prototype.setGlobalUserProperties = function (e) {
      this.getInstance().setUserProperties(e);
    }),
    (ze.prototype.__VERSION__ = Re);
  var Xe = window.amplitude || {},
    We = new ze();
  for (var $e in ((We._q = Xe._q || []), Xe._iq))
    Object.prototype.hasOwnProperty.call(Xe._iq, $e) &&
      (We.getInstance($e)._q = Xe._iq[$e]._q || []);
  return We.runQueuedFunctions(), We;
})();
