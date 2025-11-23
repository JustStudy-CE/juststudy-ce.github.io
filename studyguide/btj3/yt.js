(function () {
  "use strict";
  var aa =
    typeof Object.defineProperties == "function"
      ? Object.defineProperty
      : function (a, b, c) {
          if (a == Array.prototype || a == Object.prototype) return a;
          a[b] = c.value;
          return a;
        };
  function ba(a) {
    a = [
      "object" == typeof globalThis && globalThis,
      a,
      "object" == typeof window && window,
      "object" == typeof self && self,
      "object" == typeof global && global,
    ];
    for (var b = 0; b < a.length; ++b) {
      var c = a[b];
      if (c && c.Math == Math) return c;
    }
    throw Error("Cannot find global object");
  }
  var ca = ba(this);
  function da(a, b) {
    if (b)
      a: {
        var c = ca;
        a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
          var e = a[d];
          if (!(e in c)) break a;
          c = c[e];
        }
        a = a[a.length - 1];
        d = c[a];
        b = b(d);
        b != d &&
          b != null &&
          aa(c, a, { configurable: !0, writable: !0, value: b });
      }
  }
  function l(a) {
    function b(d) {
      return a.next(d);
    }
    function c(d) {
      return a.throw(d);
    }
    return new Promise(function (d, e) {
      function f(g) {
        g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e);
      }
      f(a.next());
    });
  }
  da("globalThis", function (a) {
    return a || ca;
  });
  da("Object.values", function (a) {
    return a
      ? a
      : function (b) {
          var c = [],
            d;
          for (d in b)
            Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d]);
          return c;
        };
  });
  da("Array.prototype.includes", function (a) {
    return a
      ? a
      : function (b, c) {
          var d = this;
          d instanceof String && (d = String(d));
          var e = d.length;
          c = c || 0;
          for (c < 0 && (c = Math.max(c + e, 0)); c < e; c++) {
            var f = d[c];
            if (f === b || Object.is(f, b)) return !0;
          }
          return !1;
        };
  });
  da("Object.entries", function (a) {
    return a
      ? a
      : function (b) {
          var c = [],
            d;
          for (d in b)
            Object.prototype.hasOwnProperty.call(b, d) && c.push([d, b[d]]);
          return c;
        };
  });
  function ea(a, b) {
    a instanceof String && (a += "");
    var c = 0,
      d = !1,
      e = {
        next: function () {
          if (!d && c < a.length) {
            var f = c++;
            return { value: b(f, a[f]), done: !1 };
          }
          d = !0;
          return { done: !0, value: void 0 };
        },
      };
    e[Symbol.iterator] = function () {
      return e;
    };
    return e;
  }
  da("Array.prototype.values", function (a) {
    return a
      ? a
      : function () {
          return ea(this, function (b, c) {
            return c;
          });
        };
  });
  const fa = () => {
    var a = window.getCurrentSdkUrl();
    if (a !== null) {
      a = new URL(
        a.origin + a.pathname + "?" + window.getLocationHash().substring(1)
      );
      if (a.searchParams.has("flags")) {
        let b;
        window.sdkFlags = (b = a.searchParams.get("flags")) != null ? b : "";
      }
      if (
        a.searchParams.has("environment") &&
        a.searchParams.has("bundle") &&
        a.searchParams.has("key") &&
        (a.searchParams.get("environment") !== "prod" ||
          a.searchParams.get("bundle") !== "public")
      )
        throw (
          (document.write('<script src="' + a.toString() + '">\x3c/script>'),
          Error(
            "Exiting SDK: Purposefully exiting to load a different SDK version."
          ))
        );
    }
  };
  if (!window.loadYTGame) {
    window.getLocationHash = () => window.location.hash;
    const a = document.currentScript.src;
    window.getCurrentSdkUrl = () => (a != "" ? new URL(a) : null);
    window.loadYTGame = fa;
    fa();
  }
  window.enableSendingResourceLoadedEvents = !0; /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var m = this || self;
  function ha(a) {
    var b = typeof a;
    return (b == "object" && a != null) || b == "function";
  }
  function n(a, b) {
    a = a.split(".");
    for (var c = m, d; a.length && (d = a.shift()); )
      a.length || b === void 0
        ? c[d] && c[d] !== Object.prototype[d]
          ? (c = c[d])
          : (c = c[d] = {})
        : (c[d] = b);
  }
  function ia(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.I = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    a.R = function (d, e, f) {
      for (
        var g = Array(arguments.length - 2), h = 2;
        h < arguments.length;
        h++
      )
        g[h - 2] = arguments[h];
      return b.prototype[e].apply(d, g);
    };
  }
  function ja(a) {
    m.setTimeout(() => {
      throw a;
    }, 0);
  }
  function p() {
    var a = m.navigator;
    return a && (a = a.userAgent) ? a : "";
  }
  const ka = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if (typeof a === "string")
          return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
  function na(a) {
    na[" "](a);
    return a;
  }
  na[" "] = function () {};
  var oa =
      p().indexOf("Gecko") != -1 &&
      !(
        p().toLowerCase().indexOf("webkit") != -1 && p().indexOf("Edge") == -1
      ) &&
      !(p().indexOf("Trident") != -1 || p().indexOf("MSIE") != -1) &&
      p().indexOf("Edge") == -1,
    pa = p().toLowerCase().indexOf("webkit") != -1 && p().indexOf("Edge") == -1;
  function qa(a, b) {
    a.__closure__error__context__984382 ||
      (a.__closure__error__context__984382 = {});
    a.__closure__error__context__984382.severity = b;
  }
  let ra = void 0;
  function sa(a) {
    a = Error(a);
    qa(a, "warning");
    return a;
  }
  var ta = typeof Symbol === "function" && typeof Symbol() === "symbol";
  function ua(a, b, c = !1) {
    return typeof Symbol === "function" && typeof Symbol() === "symbol"
      ? c && Symbol.for && a
        ? Symbol.for(a)
        : a != null
        ? Symbol(a)
        : Symbol()
      : b;
  }
  var va = ua("jas", void 0, !0),
    wa = ua(void 0, "0di"),
    xa = ua(void 0, "1oa"),
    ya = ua(void 0, "0actk"),
    za = ua("m_m", "V", !0);
  const Aa = {
      M: { value: 0, configurable: !0, writable: !0, enumerable: !1 },
    },
    Ba = Object.defineProperties,
    q = ta ? va : "M";
  var Ca;
  const Da = [];
  r(Da, 7);
  Ca = Object.freeze(Da);
  function Ea(a, b) {
    ta || q in a || Ba(a, Aa);
    a[q] |= b;
  }
  function r(a, b) {
    ta || q in a || Ba(a, Aa);
    a[q] = b;
  }
  function Fa(a) {
    Ea(a, 34);
    return a;
  }
  function Ga() {
    return typeof BigInt === "function";
  }
  var Ha = {};
  function t(a, b) {
    return b === void 0
      ? a.g !== Ia && !!(2 & (a.l[q] | 0))
      : !!(2 & b) && a.g !== Ia;
  }
  const Ia = {};
  class Ja {
    constructor(a, b, c) {
      this.g = a;
      this.h = b;
      this.i = c;
    }
    next() {
      const a = this.g.next();
      a.done || (a.value = this.h.call(this.i, a.value));
      return a;
    }
    [Symbol.iterator]() {
      return this;
    }
  }
  function Ka(a) {
    a.U = !0;
    return a;
  }
  var La = Ka((a) => typeof a === "number"),
    Ma = Ka((a) => typeof a === "string"),
    Na = Ka((a) => typeof a === "boolean");
  var Oa = typeof m.BigInt === "function" && typeof m.BigInt(0) === "bigint";
  var Ua = Ka((a) =>
    Oa ? a >= Pa && a <= Qa : a[0] === "-" ? Ra(a, Sa) : Ra(a, Ta)
  );
  const Sa = Number.MIN_SAFE_INTEGER.toString(),
    Pa = Oa ? BigInt(Number.MIN_SAFE_INTEGER) : void 0,
    Ta = Number.MAX_SAFE_INTEGER.toString(),
    Qa = Oa ? BigInt(Number.MAX_SAFE_INTEGER) : void 0;
  function Ra(a, b) {
    if (a.length > b.length) return !1;
    if (a.length < b.length || a === b) return !0;
    for (let c = 0; c < a.length; c++) {
      const d = a[c],
        e = b[c];
      if (d > e) return !1;
      if (d < e) return !0;
    }
  }
  let v = 0,
    w = 0;
  function Va(a) {
    const b = a >>> 0;
    v = b;
    w = ((a - b) / 4294967296) >>> 0;
  }
  function Wa(a) {
    if (a < 0) {
      Va(-a);
      const [b, c] = Xa(v, w);
      v = b >>> 0;
      w = c >>> 0;
    } else Va(a);
  }
  function Ya(a, b) {
    b >>>= 0;
    a >>>= 0;
    if (b <= 2097151) var c = "" + (4294967296 * b + a);
    else
      Ga()
        ? (c = "" + ((BigInt(b) << BigInt(32)) | BigInt(a)))
        : ((c = ((a >>> 24) | (b << 8)) & 16777215),
          (b = (b >> 16) & 65535),
          (a = (a & 16777215) + c * 6777216 + b * 6710656),
          (c += b * 8147497),
          (b *= 2),
          a >= 1e7 && ((c += (a / 1e7) >>> 0), (a %= 1e7)),
          c >= 1e7 && ((b += (c / 1e7) >>> 0), (c %= 1e7)),
          (c = b + Za(c) + Za(a)));
    return c;
  }
  function Za(a) {
    a = String(a);
    return "0000000".slice(a.length) + a;
  }
  function Xa(a, b) {
    b = ~b;
    a ? (a = ~a + 1) : (b += 1);
    return [a, b];
  }
  const $a = typeof BigInt === "function" ? BigInt.asIntN : void 0,
    ab = Number.isSafeInteger,
    bb = Number.isFinite,
    cb = Math.trunc;
  function db(a) {
    if (typeof a !== "number")
      throw Error(
        `Value of float/double field must be a number, found ${typeof a}: ${a}`
      );
    return a;
  }
  const eb = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
  function fb(a) {
    switch (typeof a) {
      case "bigint":
        return !0;
      case "number":
        return bb(a);
      case "string":
        return eb.test(a);
      default:
        return !1;
    }
  }
  function gb(a) {
    if (typeof a !== "number") throw sa("int32");
    if (!bb(a)) throw sa("int32");
    return a | 0;
  }
  function x(a) {
    return a == null ? a : gb(a);
  }
  function hb(a) {
    if (a == null) return a;
    if (typeof a === "string" && a) a = +a;
    else if (typeof a !== "number") return;
    return bb(a) ? a | 0 : void 0;
  }
  function y(a) {
    if (a != null)
      a: {
        if (!fb(a)) throw sa("int64");
        switch (typeof a) {
          case "string":
            var b = cb(Number(a));
            if (ab(b)) a = String(b);
            else if (
              ((b = a.indexOf(".")),
              b !== -1 && (a = a.substring(0, b)),
              (b = a.length),
              !(a[0] === "-"
                ? b < 20 || (b === 20 && Number(a.substring(0, 7)) > -922337)
                : b < 19 || (b === 19 && Number(a.substring(0, 6)) < 922337)))
            ) {
              if (a.length < 16) Wa(Number(a));
              else if (Ga())
                (a = BigInt(a)),
                  (v = Number(a & BigInt(4294967295)) >>> 0),
                  (w = Number((a >> BigInt(32)) & BigInt(4294967295)));
              else {
                b = +(a[0] === "-");
                w = v = 0;
                var c = a.length;
                for (let e = b, f = ((c - b) % 6) + b; f <= c; e = f, f += 6) {
                  var d = Number(a.slice(e, f));
                  w *= 1e6;
                  v = v * 1e6 + d;
                  v >= 4294967296 &&
                    ((w += Math.trunc(v / 4294967296)), (w >>>= 0), (v >>>= 0));
                }
                if (b) {
                  const [e, f] = Xa(v, w);
                  v = e;
                  w = f;
                }
              }
              a = v;
              b = w;
              if (b & 2147483648)
                if (Ga())
                  a = "" + ((BigInt(b | 0) << BigInt(32)) | BigInt(a >>> 0));
                else {
                  const [e, f] = Xa(a, b);
                  a = "-" + Ya(e, f);
                }
              else a = Ya(a, b);
            }
            break a;
          case "bigint":
            b = a = $a(64, a);
            if (Ma(b)) {
              if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b)) throw Error(String(b));
            } else if (La(b) && !Number.isSafeInteger(b))
              throw Error(String(b));
            Oa
              ? (a = BigInt(a))
              : (a = Na(a)
                  ? a
                    ? "1"
                    : "0"
                  : Ma(a)
                  ? a.trim() || "0"
                  : String(a));
            break a;
          default:
            if (((a = cb(a)), !ab(a))) {
              Wa(a);
              b = v;
              c = w;
              if ((a = c & 2147483648))
                (b = (~b + 1) >>> 0),
                  (c = ~c >>> 0),
                  b == 0 && (c = (c + 1) >>> 0);
              d = c * 4294967296 + (b >>> 0);
              b = Number.isSafeInteger(d) ? d : Ya(b, c);
              a = typeof b === "number" ? (a ? -b : b) : a ? "-" + b : b;
            }
        }
      }
    return a;
  }
  function z(a) {
    if (a != null && typeof a !== "string") throw Error();
    return a;
  }
  function ib(a) {
    return a == null || typeof a === "string" ? a : void 0;
  }
  function jb(a, b, c, d) {
    if (a != null && typeof a === "object" && a[za] === Ha) return a;
    if (!Array.isArray(a))
      return (
        c
          ? d & 2
            ? ((a = b[wa]) || ((a = new b()), Fa(a.l), (a = b[wa] = a)),
              (b = a))
            : (b = new b())
          : (b = void 0),
        b
      );
    c = a[q] | 0;
    d = c | (d & 32) | (d & 2);
    d !== c && r(a, d);
    return new b(a);
  }
  function kb(a, b, c) {
    a = b ? gb(a) : hb(a);
    return a == null ? (c ? 0 : void 0) : a | 0;
  }
  function lb(a) {
    return a;
  }
  const mb = {};
  let nb = (function () {
    try {
      return (
        na(
          new (class extends Map {
            constructor() {
              super();
            }
          })()
        ),
        !1
      );
    } catch (a) {
      return !0;
    }
  })();
  class ob {
    constructor() {
      this.g = new Map();
    }
    get(a) {
      return this.g.get(a);
    }
    set(a, b) {
      this.g.set(a, b);
      this.size = this.g.size;
      return this;
    }
    delete(a) {
      a = this.g.delete(a);
      this.size = this.g.size;
      return a;
    }
    clear() {
      this.g.clear();
      this.size = this.g.size;
    }
    has(a) {
      return this.g.has(a);
    }
    entries() {
      return this.g.entries();
    }
    keys() {
      return this.g.keys();
    }
    values() {
      return this.g.values();
    }
    forEach(a, b) {
      return this.g.forEach(a, b);
    }
    [Symbol.iterator]() {
      return this.entries();
    }
  }
  const pb = (() =>
    nb
      ? (Object.setPrototypeOf(ob.prototype, Map.prototype),
        Object.defineProperties(ob.prototype, {
          size: { value: 0, configurable: !0, enumerable: !0, writable: !0 },
        }),
        ob)
      : class extends Map {
          constructor() {
            super();
          }
        })();
  function qb(a) {
    return a;
  }
  function rb(a) {
    if (a.A & 2) throw Error("Cannot mutate an immutable Map");
  }
  var A = class extends pb {
    constructor(a, b, c = qb, d = qb) {
      super();
      this.A = a[q] | 0;
      this.C = b;
      this.D = c;
      this.K = this.C ? sb : d;
      for (let e = 0; e < a.length; e++) {
        const f = a[e],
          g = c(f[0], !1, !0);
        let h = f[1];
        b
          ? h === void 0 && (h = null)
          : (h = d(f[1], !1, !0, void 0, void 0, this.A));
        super.set(g, h);
      }
    }
    O() {
      var a = tb;
      if (this.size !== 0) return Array.from(super.entries(), a);
    }
    J() {
      return Array.from(super.entries());
    }
    clear() {
      rb(this);
      super.clear();
    }
    delete(a) {
      rb(this);
      return super.delete(this.D(a, !0, !1));
    }
    entries() {
      if (this.C) {
        var a = super.keys();
        a = new Ja(a, ub, this);
      } else a = super.entries();
      return a;
    }
    values() {
      if (this.C) {
        var a = super.keys();
        a = new Ja(a, A.prototype.get, this);
      } else a = super.values();
      return a;
    }
    forEach(a, b) {
      this.C
        ? super.forEach((c, d, e) => {
            a.call(b, e.get(d), d, e);
          })
        : super.forEach(a, b);
    }
    set(a, b) {
      rb(this);
      a = this.D(a, !0, !1);
      return a == null
        ? this
        : b == null
        ? (super.delete(a), this)
        : super.set(a, this.K(b, !0, !0, this.C, !1, this.A));
    }
    has(a) {
      return super.has(this.D(a, !1, !1));
    }
    get(a) {
      a = this.D(a, !1, !1);
      const b = super.get(a);
      if (b !== void 0) {
        var c = this.C;
        return c
          ? ((c = this.K(b, !1, !0, c, this.S, this.A)),
            c !== b && super.set(a, c),
            c)
          : b;
      }
    }
    [Symbol.iterator]() {
      return this.entries();
    }
  };
  A.prototype.toJSON = void 0;
  function sb(a, b, c, d, e, f) {
    a = jb(a, d, c, f);
    e && (a = vb(a));
    return a;
  }
  function ub(a) {
    return [a, this.get(a)];
  }
  let wb;
  function xb() {
    return wb || (wb = new A(Fa([]), void 0, void 0, void 0, mb));
  }
  function yb(a, b, c, d) {
    var e = d !== void 0;
    d = !!d;
    const f = [];
    var g = a.length;
    let h,
      k = 4294967295,
      u = !1;
    const K = !!(b & 64),
      D = K ? (b & 128 ? 0 : -1) : void 0;
    if (
      !(
        b & 1 ||
        ((h = g && a[g - 1]),
        h != null && typeof h === "object" && h.constructor === Object
          ? (g--, (k = g))
          : (h = void 0),
        !K || b & 128 || e)
      )
    ) {
      u = !0;
      var L;
      k = ((L = zb) != null ? L : lb)(k - D, D, a, h) + D;
    }
    b = void 0;
    for (e = 0; e < g; e++)
      if (((L = a[e]), L != null && (L = c(L, d)) != null))
        if (K && e >= k) {
          const la = e - D;
          let ma;
          ((ma = b) != null ? ma : (b = {}))[la] = L;
        } else f[e] = L;
    if (h)
      for (let la in h) {
        a = h[la];
        if (a == null || (a = c(a, d)) == null) continue;
        g = +la;
        let ma;
        if (K && !Number.isNaN(g) && (ma = g + D) < k) f[ma] = a;
        else {
          let Ob;
          ((Ob = b) != null ? Ob : (b = {}))[la] = a;
        }
      }
    b && (u ? f.push(b) : (f[k] = b));
    return f;
  }
  function tb(a) {
    a[0] = Ab(a[0]);
    a[1] = Ab(a[1]);
    return a;
  }
  function Ab(a) {
    switch (typeof a) {
      case "number":
        return Number.isFinite(a) ? a : "" + a;
      case "bigint":
        return Ua(a) ? Number(a) : "" + a;
      case "boolean":
        return a ? 1 : 0;
      case "object":
        if (Array.isArray(a)) {
          const b = a[q] | 0;
          return a.length === 0 && b & 1 ? void 0 : yb(a, b, Ab);
        }
        if (a[za] === Ha) return Bb(a);
        if (a instanceof A) return a.O();
        return;
    }
    return a;
  }
  let zb;
  function Bb(a) {
    a = a.l;
    return yb(a, a[q] | 0, Ab);
  }
  function Cb(a) {
    if (a == null) {
      var b = 32;
      a = [];
    } else {
      if (!Array.isArray(a)) throw Error("narr");
      b = a[q] | 0;
      4096 & b && !(2 & b) && Db();
      if (b & 256) throw Error("farr");
      if (b & 64) return b & 4096 || r(a, b | 4096), a;
      var c = a;
      b |= 64;
      var d = c.length;
      if (d) {
        var e = d - 1;
        d = c[e];
        if (d != null && typeof d === "object" && d.constructor === Object) {
          const f = b & 128 ? 0 : -1;
          e -= f;
          if (e >= 1024) throw Error("pvtlmt");
          for (const g in d) {
            const h = +g;
            h < e && ((c[h + f] = d[g]), delete d[g]);
          }
          b = (b & -16760833) | ((e & 1023) << 14);
        }
      }
    }
    r(a, b | 4160);
    return a;
  }
  function Db() {
    if (ya != null) {
      var a;
      var b = (a = ra) != null ? a : (ra = {});
      a = b[ya] || 0;
      a >= 5 || ((b[ya] = a + 1), (b = Error()), qa(b, "incident"), ja(b));
    }
  }
  function Eb(a, b) {
    if (typeof a !== "object") return a;
    if (Array.isArray(a)) {
      var c = a[q] | 0;
      return a.length === 0 && c & 1 ? void 0 : Fb(a, c, b);
    }
    if (a[za] === Ha) return Gb(a);
    if (a instanceof A) {
      c = a.A;
      if (c & 2) return a;
      if (a.size) {
        b = Fa(a.J());
        if (a.C)
          for (a = 0; a < b.length; a++) {
            const d = b[a];
            let e = d[1];
            e == null || typeof e !== "object"
              ? (e = void 0)
              : e[za] === Ha
              ? (e = Gb(e))
              : Array.isArray(e)
              ? (e = Fb(e, e[q] | 0, !!(c & 32)))
              : (e = void 0);
            d[1] = e;
          }
        return b;
      }
    }
  }
  function Fb(a, b, c) {
    if (b & 2) return a;
    !c || 8192 & b || 16 & b
      ? (a = Hb(a, b, !1, c && !(b & 16)))
      : (Ea(a, 34), b & 4 && Object.freeze(a));
    return a;
  }
  function Gb(a) {
    const b = a.l,
      c = b[q] | 0;
    return t(a, c) ? a : Hb(b, c);
  }
  function Hb(a, b, c, d) {
    d != null || (d = !!(34 & b));
    a = yb(a, b, Eb, d);
    d = 32;
    c || (d |= 2);
    b = (b & 16761025) | d;
    r(a, b);
    return a;
  }
  function vb(a) {
    const b = a.l,
      c = b[q] | 0;
    return t(a, c) ? new a.constructor(Hb(b, c, !0)) : a;
  }
  function Ib(a) {
    if (a.g !== Ia) return !1;
    let b = a.l;
    b = Hb(b, b[q] | 0, !0);
    a.l = b;
    a.g = void 0;
    a.h = void 0;
    return !0;
  }
  function Jb(a) {
    if (!Ib(a) && t(a, a.l[q] | 0)) throw Error();
  }
  function B(a, b) {
    a = Kb(a.l, b);
    if (a !== null) return a;
  }
  function Kb(a, b, c, d) {
    if (b === -1) return null;
    const e = b + (c ? 0 : -1),
      f = a.length - 1;
    let g, h;
    if (!(f < 1 + (c ? 0 : -1))) {
      if (e >= f)
        if (
          ((g = a[f]),
          g != null && typeof g === "object" && g.constructor === Object)
        )
          (c = g[b]), (h = !0);
        else if (e === f) c = g;
        else return;
      else c = a[e];
      if (d && c != null) {
        d = d(c);
        if (d == null) return d;
        if (!Object.is(d, c)) return h ? (g[b] = d) : (a[e] = d), d;
      }
      return c;
    }
  }
  function C(a, b, c) {
    Jb(a);
    const d = a.l;
    E(d, d[q] | 0, b, c);
    return a;
  }
  function E(a, b, c, d) {
    const e = c + -1;
    var f = a.length - 1;
    if (f >= 0 && e >= f) {
      const g = a[f];
      if (g != null && typeof g === "object" && g.constructor === Object)
        return (g[c] = d), b;
    }
    if (e <= f) return (a[e] = d), b;
    if (d !== void 0) {
      let g;
      f = (((g = b) != null ? g : (b = a[q] | 0)) >> 14) & 1023 || 536870912;
      c >= f ? d != null && (a[f + -1] = { [c]: d }) : (a[e] = d);
    }
    return b;
  }
  function Lb(a, b, c) {
    console.log("A is ", a, " B is ", b, " C is ", c)
    const d = a.l;
    return Mb(d, d[q] | 0, b, Nb(a, F, c)) !== void 0;
  }
  function Pb(a, b) {
    this.set(b, a);
  }
  function Qb(a, b, c, d) {
    Jb(a);
    const e = a.l;
    var f = e[q] | 0;
    if (d == null) {
      var g = Rb(e);
      if (Sb(g, e, f, c) === b) g.set(c, 0);
      else return a;
    } else {
      g = Rb(e);
      const h = Sb(g, e, f, c);
      h !== b && (h && (f = E(e, f, h)), g.set(c, b));
    }
    E(e, f, b, d);
    return a;
  }
  function Nb(a, b, c) {
    a = a.l;
    return Sb(Rb(a), a, void 0, b) === c ? c : -1;
  }
  function Rb(a) {
    if (ta) {
      var b;
      return (b = a[xa]) != null ? b : (a[xa] = new Map());
    }
    if (xa in a) return a[xa];
    b = new Map();
    Object.defineProperty(a, xa, { value: b });
    return b;
  }
  function Sb(a, b, c, d) {
    let e = a.get(d);
    if (e != null) return e;
    e = 0;
    for (let f = 0; f < d.length; f++) {
      const g = d[f];
      Kb(b, g) != null && (e !== 0 && (c = E(b, c, e)), (e = g));
    }
    a.set(d, e);
    return e;
  }
  function Mb(a, b, c, d) {
    a = Kb(a, d, void 0, (e) => jb(e, c, !1, b));
    if (a != null) return a;
  }
  function Tb(a) {
    a == null && (a = void 0);
    return a;
  }
  function G(a, b, c) {
    c = Tb(c);
    C(a, b, c);
    return a;
  }
  function H(a, b, c, d) {
    d = Tb(d);
    Qb(a, b, c, d);
    return a;
  }
  function Ub(a, b) {
    let c;
    return (c = ib(B(a, b))) != null ? c : "";
  }
  function Vb(a, b) {
    a = B(a, b);
    a = a == null ? a : bb(a) ? a | 0 : void 0;
    return a != null ? a : 0;
  }
  function I(a, b, c, d) {
    {
      c = Nb(a, d, c);
      d = a.l;
      let e = d[q] | 0;
      b = Mb(d, e, b, c);
      if (b != null && ((e = d[q] | 0), !t(a, e))) {
        const f = vb(b);
        f !== b &&
          (Ib(a) && ((d = a.l), (e = d[q] | 0)), (b = f), E(d, e, c, b));
      }
      a = b;
    }
    return a;
  }
  function J(a, b, c) {
    if (c != null) {
      if (!bb(c)) throw sa("enum");
      c |= 0;
    }
    return C(a, b, c);
  }
  function Wb(a, b, c) {
    Jb(a);
    var d = a.l,
      e = d[q] | 0,
      f = Kb(d, b);
    f instanceof A && !(f instanceof A && f.A & 2)
      ? f.clear()
      : f != null && E(d, e, b);
    if (c) {
      Jb(a);
      d = c.forEach;
      e = a.l;
      var g = e[q] | 0;
      a: {
        f = g;
        var h = t(a, g);
        !h && Ib(a) && ((e = a.l), (f = e[q] | 0));
        var k = Kb(e, b);
        g = !1;
        if (k == null) {
          if (h) {
            b = xb();
            break a;
          }
          k = [];
        } else if (k.constructor === A)
          if (k.A & 2 && !h) k = k.J();
          else {
            b = k;
            break a;
          }
        else Array.isArray(k) ? (g = !!((k[q] | 0) & 2)) : (k = []);
        if (h) {
          if (!k.length) {
            b = xb();
            break a;
          }
          g || ((g = !0), Fa(k));
        } else if (g) {
          g = !1;
          h = k;
          h = Array.prototype.slice.call(h);
          for (k = 0; k < h.length; k++) {
            const u = (h[k] = Array.prototype.slice.call(h[k]));
            Array.isArray(u[1]) && (u[1] = Fa(u[1]));
          }
          k = h;
        }
        !g && f & 32 && Ea(k, 32);
        g = new A(k, void 0, kb, kb);
        E(e, f, b, g);
        b = g;
      }
      d.call(c, Pb, b);
    }
    return a;
  }
  var M = class {
    constructor(a) {
      this.l = Cb(a);
    }
    toJSON() {
      return Bb(this);
    }
    clone() {
      const a = this.l;
      return new this.constructor(Hb(a, a[q] | 0, !0));
    }
  };
  M.prototype[za] = Ha;
  M.prototype.toString = function () {
    return this.l.toString();
  };
  class Xb {
    constructor(a, b) {
      this.data = a;
      this.channel = b;
    }
  }
  function Yb(a) {
    const b = new MessageChannel();
    Zb(b.port1, a);
    return b;
  }
  function $b(a, b) {
    Zb(a, b);
    return new ac(a);
  }
  class ac {
    constructor(a) {
      this.h = a;
    }
    g(a, b, c = []) {
      b = Yb(b);
      console.log("post message 1" + a);
      this.h.postMessage(a, [b.port2].concat(c));
    }
  }
  function Zb(a, b) {
    b &&
      (a.onmessage = (c) => {
        var d = c.data;
        c = $b(c.ports[0]);
        b(new Xb(d, c));
      });
  }
  var bc = (function () {
    if (!m.addEventListener || !Object.defineProperty) return !1;
    var a = !1,
      b = Object.defineProperty({}, "passive", {
        get: function () {
          a = !0;
        },
      });
    try {
      const c = () => {};
      m.addEventListener("test", c, b);
      m.removeEventListener("test", c, b);
    } catch (c) {}
    return a;
  })();
  var cc = ({
    destination: a,
    origin: b,
    W: c,
    L: d = "ZNWN1d",
    onMessage: e,
  }) => {
    if (b === "*") throw Error("Sending to wildcard origin not allowed.");
    const f = Yb(e);
    console.log("post message 2", a, b, c, d);
    a.postMessage(c ? { n: d, t: c } : d, b, [f.port2]);
    return $b(f.port1, e);
  };
  var dc = class {
      constructor(a) {
        this.h = a;
      }
      g(a, b, c) {
        this.h.g(Bb(a), b, c);
      }
    },
    fc = (a) => {
      var b = ec;
      return (c) => {
        const d = new b(c.data);
        return a(new Xb(d, c.channel));
      };
    },
    gc = (a) => (b) => a(new Xb(b.data, new dc(b.channel))); /*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
  let hc = globalThis.trustedTypes,
    ic;
  function jc() {
    let a = null;
    if (!hc) return a;
    try {
      const b = (c) => c;
      a = hc.createPolicy("goog#html", {
        createHTML: b,
        createScript: b,
        createScriptURL: b,
      });
    } catch (b) {}
    return a;
  }
  var kc = class {
    constructor(a) {
      this.g = a;
    }
    toString() {
      return this.g + "";
    }
  };
  function lc(a) {
    var b;
    ic === void 0 && (ic = jc());
    a = (b = ic) ? b.createScriptURL(a) : a;
    return new kc(a);
  }
  function mc(a, b) {
    var c = a.register;
    if (b instanceof kc) b = b.g;
    else throw Error("");
    return c.call(a, b, void 0);
  }
  function nc(a) {
    return String(a).replace(/\-([a-z])/g, function (b, c) {
      return c.toUpperCase();
    });
  }
  function oc(a) {
    return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function (b, c, d) {
      return c + d.toUpperCase();
    });
  }
  function pc(a, ...b) {
    if (b.length === 0) return lc(a[0]);
    let c = a[0];
    for (let d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
    return lc(c);
  }
  function qc(a, b) {
    this.type = a;
    this.target = b;
  }
  qc.prototype.g = function () {};
  function N(a, b) {
    qc.call(this, a ? a.type : "");
    this.relatedTarget = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = "";
    this.h = null;
    a && this.init(a, b);
  }
  ia(N, qc);
  N.prototype.init = function (a) {
    const b = (this.type = a.type),
      c =
        a.changedTouches && a.changedTouches.length
          ? a.changedTouches[0]
          : null;
    this.target = a.target || a.srcElement;
    let d = a.relatedTarget;
    d ||
      (b == "mouseover"
        ? (d = a.fromElement)
        : b == "mouseout" && (d = a.toElement));
    this.relatedTarget = d;
    c
      ? ((this.clientX = c.clientX !== void 0 ? c.clientX : c.pageX),
        (this.clientY = c.clientY !== void 0 ? c.clientY : c.pageY),
        (this.screenX = c.screenX || 0),
        (this.screenY = c.screenY || 0))
      : ((this.clientX = a.clientX !== void 0 ? a.clientX : a.pageX),
        (this.clientY = a.clientY !== void 0 ? a.clientY : a.pageY),
        (this.screenX = a.screenX || 0),
        (this.screenY = a.screenY || 0));
    this.button = a.button;
    this.key = a.key || "";
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.pointerId = a.pointerId || 0;
    this.pointerType = a.pointerType;
    this.state = a.state;
    this.h = a;
    a.defaultPrevented && N.I.g.call(this);
  };
  N.prototype.g = function () {
    N.I.g.call(this);
    const a = this.h;
    a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
  };
  var rc = "closure_listenable_" + ((Math.random() * 1e6) | 0);
  var sc = 0;
  function tc(a, b, c, d, e) {
    this.listener = a;
    this.proxy = null;
    this.src = b;
    this.type = c;
    this.capture = !!d;
    this.h = e;
    this.key = ++sc;
    this.g = this.F = !1;
  }
  function uc(a) {
    a.g = !0;
    a.listener = null;
    a.proxy = null;
    a.src = null;
    a.h = null;
  }
  function vc(a) {
    this.src = a;
    this.g = {};
    this.h = 0;
  }
  vc.prototype.add = function (a, b, c, d, e) {
    const f = a.toString();
    a = this.g[f];
    a || ((a = this.g[f] = []), this.h++);
    var g;
    a: {
      for (g = 0; g < a.length; ++g) {
        const h = a[g];
        if (!h.g && h.listener == b && h.capture == !!d && h.h == e) break a;
      }
      g = -1;
    }
    g > -1
      ? ((b = a[g]), c || (b.F = !1))
      : ((b = new tc(b, this.src, f, !!d, e)), (b.F = c), a.push(b));
    return b;
  };
  var wc = "closure_lm_" + ((Math.random() * 1e6) | 0),
    xc = {},
    yc = 0;
  function zc(a, b, c, d, e) {
    if (d && d.once) Ac(a, b, c, d, e);
    else if (Array.isArray(b))
      for (let f = 0; f < b.length; f++) zc(a, b[f], c, d, e);
    else
      (c = Bc(c)),
        a && a[rc]
          ? a.g(b, c, ha(d) ? !!d.capture : !!d, e)
          : Cc(a, b, c, !1, d, e);
  }
  function Cc(a, b, c, d, e, f) {
    if (!b) throw Error("Invalid event type");
    const g = ha(e) ? !!e.capture : !!e;
    let h = Dc(a);
    h || (a[wc] = h = new vc(a));
    c = h.add(b, c, d, g, f);
    if (!c.proxy) {
      d = Ec();
      c.proxy = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener)
        bc || (e = g),
          e === void 0 && (e = !1),
          a.addEventListener(b.toString(), d, e);
      else if (a.attachEvent) a.attachEvent(Fc(b.toString()), d);
      else if (a.addListener && a.removeListener) a.addListener(d);
      else throw Error("addEventListener and attachEvent are unavailable.");
      yc++;
    }
  }
  function Ec() {
    function a(c) {
      return b.call(a.src, a.listener, c);
    }
    const b = Gc;
    return a;
  }
  function Ac(a, b, c, d, e) {
    if (Array.isArray(b))
      for (let f = 0; f < b.length; f++) Ac(a, b[f], c, d, e);
    else
      (c = Bc(c)),
        a && a[rc]
          ? a.h(b, c, ha(d) ? !!d.capture : !!d, e)
          : Cc(a, b, c, !0, d, e);
  }
  function Fc(a) {
    return a in xc ? xc[a] : (xc[a] = "on" + a);
  }
  function Gc(a, b) {
    if (a.g) a = !0;
    else {
      b = new N(b, this);
      const g = a.listener,
        h = a.h || a.src;
      if (a.F && typeof a !== "number" && a && !a.g) {
        var c = a.src;
        if (c && c[rc]) c.i(a);
        else {
          var d = a.type,
            e = a.proxy;
          c.removeEventListener
            ? c.removeEventListener(d, e, a.capture)
            : c.detachEvent
            ? c.detachEvent(Fc(d), e)
            : c.addListener && c.removeListener && c.removeListener(e);
          yc--;
          if ((d = Dc(c))) {
            e = a.type;
            var f;
            if ((f = e in d.g)) {
              f = d.g[e];
              const k = ka(f, a);
              let u;
              (u = k >= 0) && Array.prototype.splice.call(f, k, 1);
              f = u;
            }
            f && (uc(a), d.g[e].length == 0 && (delete d.g[e], d.h--));
            d.h == 0 && ((d.src = null), (c[wc] = null));
          } else uc(a);
        }
      }
      a = g.call(h, b);
    }
    return a;
  }
  function Dc(a) {
    a = a[wc];
    return a instanceof vc ? a : null;
  }
  var Hc = "__closure_events_fn_" + ((Math.random() * 1e9) >>> 0);
  function Bc(a) {
    if (typeof a === "function") return a;
    a[Hc] ||
      (a[Hc] = function (b) {
        return a.handleEvent(b);
      });
    return a[Hc];
  }
  function O(a, b) {
    if (typeof b === "string") (b = Ic(a, b)) && (a.style[b] = "none");
    else
      for (const e in b) {
        var c = a,
          d = b[e];
        const f = Ic(c, e);
        f && (c.style[f] = d);
      }
  }
  var Jc = {};
  function Ic(a, b) {
    let c = Jc[b];
    if (!c) {
      var d = nc(b);
      c = d;
      a.style[d] === void 0 &&
        ((d = (pa ? "Webkit" : oa ? "Moz" : null) + oc(d)),
        a.style[d] !== void 0 && (c = d));
      Jc[b] = c;
    }
    return c;
  }
  var Kc = class extends M {};
  var Lc = class extends M {};
  var Mc = class extends M {};
  var Nc = class extends M {};
  var Oc = class extends M {},
    Pc = [3, 4];
  var Qc = class extends M {};
  function Rc(a, b) {
    {
      Jb(a);
      const u = a.l;
      let K = u[q] | 0;
      if (b == null) E(u, K, 1);
      else {
        var c = b === Ca ? 7 : b[q] | 0,
          d = c,
          e = (!!(2 & c) && !!(4 & c)) || !!(256 & c),
          f = e || Object.isFrozen(b),
          g = !0,
          h = !0;
        for (let D = 0; D < b.length; D++) {
          var k = b[D];
          e || ((k = t(k)), g && (g = !k), h && (h = k));
        }
        e || ((c = g ? 13 : 5), (c = h ? c & -8193 : c | 8192));
        (f && c === d) ||
          ((b = Array.prototype.slice.call(b)),
          (d = 0),
          (c = 2 & K ? c | 2 : c & -3),
          (c &= -273));
        c !== d && r(b, c);
        E(u, K, 1, b);
      }
    }
    return a;
  }
  var Sc = class extends M {};
  var Tc = class extends M {};
  function Uc(a) {
    var b = new Vc();
    if (a != null && typeof a !== "boolean")
      throw (
        ((b = typeof a),
        Error(
          `Expected boolean but got ${
            b != "object" ? b : a ? (Array.isArray(a) ? "array" : b) : "null"
          }: ${a}`
        ))
      );
    return C(b, 2, a);
  }
  var Vc = class extends M {};
  var Wc = class extends M {};
  var Xc = class extends M {};
  var Yc = class extends M {};
  function Zc(a) {
    var b = new $c();
    return J(b, 1, a);
  }
  function ad(a, b) {
    return G(a, 2, b);
  }
  function bd(a) {
    var b = cd();
    b = dd(b.s);
    return G(a, 4, b);
  }
  var $c = class extends M {},
    ed = [3];
  function fd(a, b) {
    return C(a, 1, b == null ? b : db(b));
  }
  function gd(a, b) {
    return C(a, 2, b == null ? b : db(b));
  }
  var hd = class extends M {};
  function id() {
    var a = new jd();
    return C(a, 1, y(performance.now()));
  }
  function kd(a, b) {
    return C(a, 2, z(b));
  }
  var jd = class extends M {};
  var ld = class extends M {};
  var md = class extends M {};
  var nd = class extends M {
    getInviteCode() {
      return Ub(this, 1);
    }
    hasInviteCode() {
      return ib(B(this, 1)) != null;
    }
  };
  var P = class extends M {
      getLanguage() {
        return Ub(this, Nb(this, od, 4));
      }
    },
    od = [3, 4, 5, 6];
  var ec = class extends M {},
    F = [2, 3, 4, 5];
  var pd = class extends M {};
  var qd = class extends M {};
  function rd(a, b) {
    return C(a, 1, y(b));
  }
  function sd(a) {
    return C(a, 2, y(performance.now()));
  }
  function td(a, b) {
    return C(a, 3, b == null ? b : db(b));
  }
  function ud(a, b) {
    return C(a, 4, b == null ? b : db(b));
  }
  function vd(a, b) {
    return G(a, 5, b);
  }
  function wd(a, b) {
    return G(a, 6, b);
  }
  function xd(a, b) {
    G(a, 7, b);
  }
  var yd = class extends M {};
  var zd = class extends M {};
  var Ad = class extends M {};
  function Q(a) {
    var b = new Bd();
    return J(b, 1, a);
  }
  function Cd(a, b) {
    return H(a, 2, R, b);
  }
  function Dd(a, b) {
    return H(a, 5, R, b);
  }
  function Ed(a) {
    var b = Q(12);
    return H(b, 10, R, a);
  }
  function Fd(a, b) {
    return H(a, 14, R, b);
  }
  var Bd = class extends M {
      getInviteCode() {
        return Ub(this, Nb(this, R, 11));
      }
      hasInviteCode() {
        var a = Nb(this, R, 11);
        return ib(B(this, a)) != null;
      }
    },
    R = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  var Gd = {
      UNKNOWN: 0,
      API_UNAVAILABLE: 1,
      INVALID_PARAMS: 2,
      SIZE_LIMIT_EXCEEDED: 3,
      0: "UNKNOWN",
      1: "API_UNAVAILABLE",
      2: "INVALID_PARAMS",
      3: "SIZE_LIMIT_EXCEEDED",
    },
    S = class extends Error {
      constructor(a, b) {
        super(b);
        this.errorType = a;
        this.name = `SDK_ERROR_${Gd[this.errorType]}`;
      }
    };
  function Hd(a) {
    switch (a) {
      case 1:
        return "SDK_API_FIRST_FRAME_READY";
      case 2:
        console.log("TRIED TO GET DATA")
        return "SDK_API_LOAD_DATA";
      case 3:
        console.log("TRIED TO GET DATA")
        return "SDK_API_SAVE_DATA";
      case 4:
        return "SDK_API_SEND_SCORE";
      case 5:
        return "SDK_API_ON_AUDIO_ENABLED_CHANGE";
      case 6:
        return "SDK_API_ON_PAUSE";
      case 7:
        return "SDK_API_ON_RESUME";
      case 8:
        return "SDK_API_GET_LANGUAGE";
      case 9:
        return "SDK_API_GAME_READY";
      case 10:
        return "SDK_API_IS_AUDIO_ENABLED";
      case 11:
        return "SDK_API_BENCHMARKING";
    }
    return "SDK_API_UNSPECIFIED";
  }
  var T = class extends S {
    constructor(a, b, c, d) {
      super(a.errorType, c != null ? c : a.message);
      this.v = a;
      this.g = b;
      this.data = d;
      this.name = `${this.name}_${Hd(b)}`;
    }
  };
  var Id = new S(0, "An unknown error occurred."),
    U = new S(2, "Invalid parameters entered, please fix and try again."),
    Jd = new S(
      1,
      "Unspecified network error. Check your internet connection and try again."
    ),
    Kd = new S(3, "Size limit exceeded."),
    Ld = new S(0, "Resource URL is malformed"),
    Md = new S(
      1,
      "The requested Ad failed to load. Check your network and try again."
    );
  function V(a, b) {
    let c = Id;
    if (Lb(a, P, 2))
      switch (((a = I(a, P, 2, F)), Vb(a, 2))) {
        case 1:
          return;
        case 2:
          c = U;
          break;
        case 3:
          if (b === 14) {
            c = Md;
            break;
          }
          c = Jd;
          break;
        case 4:
          console.warn(
            "The SDK is no-op, if you are trying to verify SDK integration please use the SDK Test Suite available at https://developers.google.com/youtube/gaming/playables/certification/sdktestsuite"
          );
          return;
        default:
          c = Id;
      }
    throw new T(c, b);
  }
  function Nd(a, b) {
    const c = (d) => {
      d instanceof Od && b(d.g);
    };
    a.g.addEventListener(a.type, c);
    a.h !== void 0 && a.dispatchEvent(a.h);
    return () => {
      a.g.removeEventListener(a.type, c);
    };
  }
  var Pd = class {
    constructor(a, b) {
      this.type = a;
      this.g = new EventTarget();
      let c;
      this.G = (c = b == null ? void 0 : b.G) != null ? c : !0;
      (b == null ? void 0 : b.H) !== void 0 &&
        this.dispatchEvent(b == null ? void 0 : b.H);
    }
    dispatchEvent(a) {
      this.g.dispatchEvent(new Od(this.type, a));
      this.G && (this.h = a);
    }
  };
  class Od extends Event {
    constructor(a, b) {
      super(a);
      this.g = b;
    }
  }
  var Qd,
    Rd,
    Sd = new ec();
  Rd = J(Sd, 1, 1);
  var Td,
    Ud = new P();
  Td = J(Ud, 2, 4);
  Qd = H(Rd, 2, F, Td);
  var Vd = new Xb(Qd, $b(new MessageChannel().port2));
  function W() {
    var a = window !== window.parent;
    Wd || (Wd = new Xd(a));
    if (Wd.g !== a)
      throw Error(`MessagingService is already created with isEmbedded=${!a}`);
    return Wd;
  }
  function Yd(a, b) {
    Nd(a.target, b);
  }
  function X(a, b, c = () => {}) {
    //a.g = true
    a.g ? a.channel.g(b, gc(fc(c))) : c(Vd);
  }
  function Y(a, b) {
    return new Promise((c) => {
      console.log("IN THE FUNCTION Y A is ", JSON.stringify(a), " B is ", JSON.stringify(b), " C is ", JSON.stringify(c));
      X(a, b, c);
    });
  }
  var Xd = class {
      constructor(a) {
        this.g = a;
        this.target = new Pd("HOST_EVENT", { G: !1 });
        a =
          new URLSearchParams(window.location.hash.substring(1)).get(
            "origin"
          ) || document.referrer;
        this.channel = new dc(
          cc({
            destination: window.parent,
            origin: this.g ? a : window.location.origin,
            L: "playableIframe",
            onMessage: gc(
              fc((b) => {
                this.target.dispatchEvent(b);
              })
            ),
          })
        );
      }
    },
    Wd;
  const Zd = {
    UNKNOWN: 0,
    SHOWED: 1,
    REJECTED: 3,
    DISMISSED: 2,
    0: "UNKNOWN",
    1: "SHOWED",
    3: "REJECTED",
    2: "DISMISSED",
  };
  var $d = class {
    constructor() {
      this.g = W();
      this.AdResult = Zd;
    }
    requestAd() {
      const a = this;
      return l(
        (function* () {
          try {
            yield a.requestInterstitialAd();
          } catch (b) {
            if (b instanceof T) throw b;
            return 3;
          }
          return 1;
        })()
      );
    }
    requestInterstitialAd() {
      const a = this;
      return l(
        (function* () {
          var b = a.g;
          var c = Q(14);
          var d = new Lc();
          d = J(d, 1, 1);
          c = H(c, 13, R, d);
          b = yield Y(b, c);
          V(b.data, 16);
          let e, f;
          if (
            ((e = I(b.data, P, 2, F)) == null
              ? void 0
              : (f = I(e, Kc, 6, od)) == null
              ? void 0
              : Vb(f, 1)) !== 4
          )
            return Promise.reject();
        })()
      );
    }
  };
  var ae = window !== window.parent,
    be = class {
      constructor() {
        this.SDK_VERSION = "1.20250505.0000";
        this.IN_PLAYABLES_ENV = ae;
        this.SdkError = S;
        this.SdkErrorType = Gd;
      }
    };
  var ce = class {
    constructor() {
      this.g = W();
    }
    sendScore(a) {
      const b = this;
      return l(
        (function* () {
          if (!Number.isInteger(a.value))
            throw new T(
              U,
              4,
              "Score value must be an integer and" +
                ` the value entered was: ${a.value}`
            );
          if (!Number.isSafeInteger(a.value))
            throw new T(
              U,
              4,
              `Score value must be less than the maximum safe integer in Javascript ${Number.MAX_SAFE_INTEGER} and the value entered was: ${a.value}`
            );
          var c = b.g,
            d = Q(2);
          var e = new zd();
          e = C(e, 1, y(a.value));
          d = H(d, 3, R, e);
          c = yield Y(c, d);
          V(c.data, 4);
        })()
      );
    }
    openYTContent(a) {
      const b = this;
      return l(
        (function* () {
          var c = a.id;
          if (
            c.length !== 11 ||
            !/^[-A-Za-z0-9_]+$/.test(c) ||
            !"AEIMQUYcgkosw048".includes(c[10]) ||
            c === "GU5U2spHI_4"
          )
            throw new T(U, 15, "Invalid format for content being passed");
          c = b.g;
          var d = Q(15);
          var e = new Nc();
          e = C(e, 1, z(a.id));
          d = H(d, 12, R, e);
          c = yield Y(c, d);
          V(c.data, 15);
        })()
      );
    }
  };
  const de = {
    disableConsoleLog: !1,
    enableNerdStats: !1,
    enableServiceWorker: !1,
    enableServiceWorkerKillswitch: !1,
    enableAudioCapture: !1,
  };
  function ee(a) {
    return typeof a === "boolean" ? a : !1;
  }
  let fe = null;
  function ge() {
    if (fe) return fe;
    fe = de;
    let a;
    const b = (a = window.sdkFlags) != null ? a : "";
    if (b) {
      let c;
      try {
        c = JSON.parse(b);
      } catch (d) {
        return (
          console.error("Failed to parse flags.", d, " Flags string: ", b), fe
        );
      }
      typeof c === "object" &&
        c &&
        Object.keys(c).length > 0 &&
        (fe = {
          disableConsoleLog: ee(c.disableConsoleLog),
          enableNerdStats: ee(c.enableNerdStats),
          enableServiceWorker: ee(c.enableServiceWorker),
          enableServiceWorkerKillswitch: ee(c.enableServiceWorkerKillswitch),
          enableAudioCapture: ee(c.enableAudioCapture),
        });
    }
    return fe;
  }
  function he(a) {
    a.h = 0;
    a.g = 0;
    a.i = a.index;
  }
  function ie(a, b) {
    a.index === a.i &&
      a.g > 0 &&
      ((a.h -= a.j[a.index]), a.g--, a.i++, a.i >= a.j.length && (a.i = 0));
    a.j[a.index] = b;
    a.h += b;
    a.g++;
    a.index++;
    a.index >= a.j.length && (a.index = 0);
  }
  function je(a) {
    return a.g === 0 ? 0 : a.h / a.g;
  }
  var ke = class {
    constructor(a) {
      this.index = this.i = this.g = this.h = 0;
      this.j = Array(a);
    }
  };
  function le() {
    let a;
    return (a = me.instance) != null ? a : new me();
  }
  function ne(a) {
     console.log("[ne] Skipping AudioContext hijack.");
    // Object.defineProperty(window, "AudioContext", {
    //   value: new Proxy(AudioContext, {
    //     construct() {
    //       return a;
    //     },
    //   }),
    //   writable: !0,
    // });
  }
  function oe(a, b) {
    console.log("[oe] Skipping AudioBufferSourceNode hijack.");
    // Object.defineProperty(window, "AudioBufferSourceNode", {
    //   value: new Proxy(AudioBufferSourceNode, {
    //     construct(c, d) {
    //       d[0] = a;
    //       c = new c(...d);
    //       c.connect(b);
    //       return c;
    //     },
    //   }),
    //   writable: !0,
    // });
  }
  function pe(a, b) {
    const c = a.createBufferSource.bind(a);
    a.createBufferSource = () => {
      const d = c();
      d.connect(b);
      return d;
    };
  }
  function qe(a, b) {
    l(
      (function* () {
        var c = b - a.h;
        c > 33.33 &&
          ((a.h = b - (c % 33.33)),
          a.i &&
            (X(a.j, Fd(Q(16), kd(id(), a.i.toDataURL("image/png")))),
            (c = performance.now()),
            ie(a.m, c - a.s),
            ie(a.o, c - b),
            (a.s = c)));
        requestAnimationFrame((d) => {
          qe(a, d);
        });
      })()
    );
  }
  function re(a) {
    requestAnimationFrame((b) => {
      qe(a, b);
    });
  }
  function se(a) {
    if (ge().enableAudioCapture) {
      var b = new MediaRecorder(a.g.stream);
      b.ondataavailable = (c) =>
        new Promise((d) => {
          const e = new FileReader();
          e.onload = () => {
            var f = e.result,
              g = a.j,
              h = Q(17),
              k = new Tc();
            f = C(k, 1, z(f));
            h = H(h, 15, R, f);
            X(g, h);
            d(null);
          };
          e.readAsDataURL(c.data);
        });
      b.start(33.33);
    }
  }
  var me = class {
    constructor() {
      var a = window.document;
      this.j = W();
      this.g = null;
      this.s = this.h = 0;
      this.m = new ke(1800);
      this.o = new ke(1800);
      this.i = a.getElementsByTagName("canvas")[0];
      ge().enableAudioCapture &&
        ((a = new AudioContext()),
        (this.g = a.createMediaStreamDestination()),
        ne(a),
        oe(a, this.g),
        pe(a, this.g));
    }
  };
  function te(a) {
    const b = performance.now();
    a.h > 0 ? ie(a.g, b - a.h) : a.j !== 0 && (ie(a.g, 0), clearTimeout(a.j));
    a.h = -1;
    a.j = setTimeout(() => {
      a.h = performance.now();
    }, 0);
    a.m > 0 && ie(a.i, b - a.m);
    a.m = b;
    requestAnimationFrame(() => {
      te(a);
    });
  }
  var ue = class {
    constructor() {
      this.h = this.m = -1;
      this.j = 0;
      this.i = new ke(3600);
      this.g = new ke(3600);
    }
    init() {
      requestAnimationFrame(() => {
        te(this);
      });
    }
  };
  function ve(a) {
    var b = new qd();
    return C(b, 1, y(je(a.g)));
  }
  var we = class {
    constructor() {
      this.g = new ke(12);
    }
    init() {
      setInterval(() => {
        const a = (window.performance && window.performance.memory) || null;
        a && ie(this.g, a.usedJSHeapSize);
      }, 5e3);
    }
  };
  function xe(a, b) {
    a.B = b;
  }
  function Z(a) {
    return a != null && typeof a === "number" && Number.isFinite(a)
      ? Math.floor(a)
      : 0;
  }
  function dd(a) {
    var b = new Xc();
    var c = Z(a.o);
    b = C(b, 1, x(c));
    c = Z(a.m);
    b = C(b, 2, x(c));
    c = Z(a.j);
    b = C(b, 3, x(c));
    b = Wb(b, 4, a.h);
    b = Wb(b, 5, a.g);
    c = new Wc();
    var d = Z(a.u);
    c = C(c, 1, y(d));
    d = Z(a.s);
    c = C(c, 2, y(d));
    a = Z(a.i);
    a = C(c, 3, y(a));
    return G(b, 6, a);
  }
  var ye = class {
    constructor() {
      this.navigator = window.navigator;
      this.h = new Map();
      this.g = new Map();
      this.i = this.s = this.u = this.j = this.m = this.o = 0;
      this.B = null;
    }
    init(a = window.navigator) {
      this.navigator = a;
      typeof performance.getEntriesByType === "function" &&
        "encodedBodySize" in PerformanceResourceTiming.prototype &&
        "decodedBodySize" in PerformanceResourceTiming.prototype &&
        "transferSize" in PerformanceResourceTiming.prototype &&
        (new PerformanceObserver((b) => {
          b.getEntries().forEach((c) => {
            if (
              c.entryType === "resource" &&
              !c.name.includes("https://www.youtube.com/game_api")
            ) {
              this.o++;
              this.j += c.encodedBodySize;
              c.transferSize === 0 && c.decodedBodySize > 0 && this.m++;
              const f = Z(c.responseStatus);
              if (!(f >= 100 && f < 200)) {
                try {
                  var d = new URL(c.name);
                } catch (g) {
                  throw Ld;
                }
                window.location.origin === d.origin
                  ? this.h.set(f, (this.h.get(f) || 0) + 1)
                  : this.g.set(f, (this.g.get(f) || 0) + 1);
              }
              var e;
              (e = this.B) == null || e.call(this, c);
            }
          });
        }).observe({ type: "resource", buffered: !0 }),
        this.navigator &&
          "serviceWorker" in this.navigator &&
          this.navigator.serviceWorker.addEventListener &&
          this.navigator.serviceWorker.addEventListener("message", (b) => {
            this.u++;
            b.data.cacheHit && (this.s++, (this.i += b.data.cachedBytes));
          }));
    }
  };
  function cd() {
    ze || (ze = new Ae());
    return ze;
  }
  function Be(a) {
    a.j !== 0 &&
      ((a.j = 0),
      Ce(a),
      (a.h = setTimeout(() => {
        De(a);
      }, 3e4)));
  }
  function Ce(a) {
    a.u = performance.now();
    var b = a.g;
    he(b.i);
    he(b.g);
    b = a.o;
    b.o = 0;
    b.m = 0;
    b.j = 0;
    b.u = 0;
    b.s = 0;
    b.i = 0;
    b.h.clear();
    b.g.clear();
    he(a.m.g);
  }
  function De(a) {
    const b = wd(
      vd(ud(td(sd(rd(new yd(), a.u)), je(a.g.i)), je(a.g.g)), dd(a.o)),
      ve(a.m)
    );
    a.i.h > 0 && xd(b, gd(fd(new hd(), je(a.i.m)), je(a.i.o)));
    X(W(), Ed(b));
    Ce(a);
    a.h = setTimeout(() => {
      De(a);
    }, 3e4);
  }
  var Ae = class {
      constructor() {
        this.u = this.h = 0;
        this.j = 1;
        this.B = W();
        this.i = le();
        this.g = new ue();
        this.s = new ye();
        this.o = new ye();
        this.m = new we();
      }
      init() {
        const a =
          new URLSearchParams(window.location.hash.substring(1)).get(
            "debug"
          ) !== null;
        (a || window.enableSendingResourceLoadedEvents === !0) &&
          xe(this.s, (b) => {
            var c = this.B,
              d = Q(1),
              e = Zc(3);
            var f = new Yc();
            f = C(f, 1, z(b.name));
            f = C(f, 2, x(b.decodedBodySize));
            f = C(f, 3, x(b.encodedBodySize));
            b = C(f, 4, x(b.transferSize));
            e = H(e, 3, ed, b);
            X(c, Cd(d, e));
          });
        this.g.init();
        this.s.init();
        this.o.init();
        a && this.m.init();
        Be(this);
      }
    },
    ze;
  function Ee() {
    Fe || (Fe = new Ge());
    return Fe;
  }
  function He(a) {
    a.navigator &&
      "serviceWorker" in a.navigator &&
      a.navigator.serviceWorker.addEventListener &&
      a.navigator.serviceWorker.addEventListener("message", (b) => {
        b.data.serviceWorkerMessageKind === "clientStatusRequest" && Ie(a);
      });
  }
  function Ie(a) {
    a.navigator &&
      "serviceWorker" in a.navigator &&
      a.navigator.serviceWorker.controller &&
      a.navigator.serviceWorker.controller.postMessage({
        serviceWorkerMessageKind: "clientStatus",
        shouldCacheResources: a.shouldCacheResources,
      });
  }
  var Ge = class {
      constructor() {
        this.navigator = window.navigator;
        this.shouldCacheResources = !0;
      }
      init() {
        He(this);
        Ie(this);
      }
    },
    Fe;
  var Je = class {
    constructor() {
      this.log = () => {};
    }
  };
  function Ke(a) {
    switch (a) {
      case 0:
        return 1;
      case 1:
        return 2;
      case 2:
        return 3;
      case 3:
        return 4;
      case 4:
        return 5;
      default:
        return 0;
    }
  }
  function Le(a) {
    switch (a.errorType) {
      case 2:
        return 2;
      case 1:
        return 1;
      case 3:
        return 3;
      default:
        return 0;
    }
  }
  function Me(a, b) {
    var c = Q(9),
      d = new Ad();
    b = J(d, 1, b);
    c = H(c, 8, R, b);
    X(a, c);
  }
  var Ne = class {
    constructor() {
      this.h = true; //ae
      this.i = new Pd("GAME_DATA_EVENT");
      this.g = W();
      this.j = Ee();
      Yd(this.g, (a) => {
        console.log("found this", a.data)
        switch (Vb(a.data, 1)) {
          case 7:
            Lb(a.data, nd, 5) && this.i.dispatchEvent(I(a.data, nd, 5, F));
        }
      });
    }
    saveData(a) {
      console.log("saving..");
      localStorage.setItem(window.location.pathname.split("/").filter(Boolean).slice(-2, -1)[0] + "_save", a)
      const b = this;
      return l(
        (function* () {
            try {
              encodeURIComponent(a);
            } catch (f) {
              throw new T(U, 3, "Failed to encode save data");
            }
            var c = new Blob([a]).size;
            if (c > 3145727) {
              var d = new Oc();
              c = Qb(d, 3, Pc, x(c));
              throw new T(Kd, 3, void 0, c);
            }
            c = b.g;
            d = Q(3);
            var e = new Mc();
            e = C(e, 1, z(a));
            d = H(d, 4, R, e);
            c = yield Y(c, d);
            V(c.data, 3);
        })()
      );
    }
    loadData() {
      const a = this;
      return(localStorage.getItem(window.location.pathname.split("/").filter(Boolean).slice(-2, -1)[0] + "_save"));
      // return l(
      //   (function* () {
      //     const b = yield Y(a.g, Q(4));
      //     console.log("b is ", JSON.stringify(b));
      //     console.log(b.data)
      //     // V(b.data, 2);
      //     b.data[1] = [1,[null,4,JSON.stringify(localStorage.getItem(window.location))]];
      //     console.log(b.data[1])
      //     let c, d;
      //     return (
      //       c = I(b.data, P, 2, F)
      //     );
      //   })()
      // );
    }

    firstFrameReady() {
      var a = Array.from(document.getElementsByTagName("script")).filter(
        (b) => !b.src.endsWith("/@vite/client")
      )[0];
      a =
        !!a &&
        a.src.startsWith("yt.js") &&
        a.attributes.getNamedItem("defer") === null &&
        a.attributes.getNamedItem("async") === null;
      X(this.g, Cd(Q(1), bd(ad(Zc(1), Uc(a)))));
    }
    gameReady() {
      X(this.g, Cd(Q(1), bd(Zc(2))));
      var a = this.j;
      const b = a.shouldCacheResources !== !1;
      a.shouldCacheResources = !1;
      b && Ie(a);
    }
    onGameDataAvailable(a) {
      Me(this.g, 13);
      return Nd(this.i, a);
    }
    shareInviteCode(a) {
      const b = this;
      return l(
        (function* () {
          if (a.length === 0) throw new T(U, 12, "Invite code cannot be empty");
          if (new TextEncoder().encode(a).length > 8)
            throw new T(U, 12, "Invite code provided exceeded 8 bytes");
          var c = b.g;
          var d = Q(13);
          d = Qb(d, 11, R, z(a));
          c = yield Y(c, d);
          V(c.data, 12);
        })()
      );
    }
  };
  function Oe(a, b) {
    const c = { level: 1, source: 1 };
    b && ((c.v = b), (c.source = 3), (c.message = b.message), (c.N = b.stack));
    a.h.log(c);
  }
  var Pe = class {
    constructor(a) {
      var b = window;
      this.h = a;
      this.g = b;
      this.i = !1;
      this.j = (c) => {
        Oe(this, c.reason instanceof S ? c.reason : void 0);
      };
      this.o = this.g.onerror;
      this.s = this.g.console.warn;
      this.m = this.g.console.error;
    }
    install() {
      this.i ||
        ((this.i = !0),
        (this.g.onerror = (a, b, c, d, e) => {
          let f;
          (f = this.o) == null || f.call(this.g, a, b, c, d, e);
          Oe(this, e instanceof S ? e : void 0);
        }),
        (this.g.console.warn = (...a) => {
          this.warn(...a);
        }),
        (this.g.console.error = (...a) => {
          this.error(...a);
        }),
        this.g.addEventListener("unhandledrejection", this.j));
    }
    error(...a) {
      this.h.log({ level: 1, source: 0 });
      this.m(...a);
    }
    warn(...a) {
      this.h.log({ level: 0, source: 0 });
      this.s(...a);
    }
  };
  function Qe(a, b) {
    X(
      a.h,
      Dd(
        Q(6),
        Rc(
          new Sc(),
          b.map((c, d) => {
            c = b[b.length - 1 - d];
            d = new Qc();
            a: switch (c.level) {
              case 0:
                var e = 1;
                break a;
              case 1:
                e = 2;
                break a;
              default:
                e = 0;
            }
            d = J(d, 2, e);
            d = J(d, 1, Ke(c.source));
            c.v &&
              ((e = J(d, 6, Le(c.v))),
              (e = C(e, 4, z(c.message))),
              C(e, 5, z(c.N)),
              c.v instanceof T &&
                c.v.g !== 0 &&
                (J(d, 7, c.v.g), c.v.data && G(d, 8, c.v.data)));
            return d;
          })
        )
      )
    );
  }
  var Re = class {
    constructor() {
      this.g = void 0;
      this.h = W();
      this.g = new Je();
      this.g.log = this.log.bind(this);
      this.i = new Pe(this.g);
      this.i.install();
    }
    logError() {
      this.log({ level: 1, source: 2 });
    }
    logWarning() {
      this.log({ level: 0, source: 2 });
    }
    log(a) {
      Qe(this, [a]);
    }
  };
  function Se() {
    l(
      (function* () {
        try {
          yield mc(navigator.serviceWorker, pc`/null_sw.js`);
        } catch (a) {
          console.error("Failed to register null service worker.", a);
        }
      })()
    );
  }
  function Te() {
    l(
      (function* () {
        try {
          yield mc(navigator.serviceWorker, pc`/sw.js`);
        } catch (a) {
          console.error("Failed to register service worker.", a);
        }
      })()
    );
  }
  function Ue(a) {
    l(
      (function* () {
        try {
          yield Ve();
        } catch (b) {
          console.error("Failed to unregister service worker.", b);
        }
        try {
          yield We(a);
        } catch (b) {
          console.error("Failed to delete cache entries.", b);
        }
      })()
    );
  }
  function Ve() {
    return l(
      (function* () {
        if (navigator && "serviceWorker" in navigator) {
          var a = yield navigator.serviceWorker.getRegistration("/");
          a && (yield a.unregister());
        }
      })()
    );
  }
  function We(a) {
    return l(
      (function* () {
        if (a && "keys" in a) {
          var b = yield a.keys();
          b && (yield Promise.all(b.map((c) => a.delete(c))));
        }
      })()
    );
  }
  var Xe = class {
    constructor() {
      var a = window.caches;
      ae &&
        (ge().enableServiceWorker
          ? ge().enableServiceWorkerKillswitch
            ? Se()
            : Te()
          : Ue(a));
    }
  };
  var Ye = class {
    constructor() {
      this.m = ae;
      this.o = new Pd("AUDIO_EVENT", { H: !1 });
      this.s = !1;
      this.g = W();
      this.i = cd();
      this.j = le();
      this.P = Ee();
      this.h = new Pd("LIFECYCLE_EVENT");
      this.B = 1e4;
      this.u = 0;
      Yd(this.g, (a) => {
        switch (Vb(a.data, 1)) {
          case 2:
            var b;
            (b = I(a.data, ld, 3, F)) == null
              ? (b = void 0)
              : ((b = B(b, 1)),
                (b =
                  b == null || typeof b === "boolean"
                    ? b
                    : typeof b === "number"
                    ? !!b
                    : void 0),
                (b = b != null ? b : !1));
            this.m && b !== void 0 && (this.o.dispatchEvent(b), (this.s = b));
            break;
          case 3:
            this.h.dispatchEvent(1);
            b = this.i;
            b.j = 1;
            clearTimeout(b.h);
            b.h = 0;
            break;
          case 4:
            this.h.dispatchEvent(0);
            Be(this.i);
            break;
          case 5:
            Lb(a.data, md, 4) &&
              ((a = I(a.data, md, 4, F)),
              (this.B = (b = hb(B(a, 1))) != null ? b : 0));
            b = this.g;
            a = Q(8);
            var c = new pd();
            c = C(c, 1, z("1.20250505.0000"));
            a = H(a, 7, R, c);
            X(b, a);
            break;
          case 9:
            re(this.j);
        }
      });
      zc(
        window,
        "pointerdown",
        (a) => {
          !a.h.isTrusted ||
            Date.now() - this.u < this.B ||
            ((this.u = Date.now()), X(this.g, Q(10)));
        },
        !0
      );
      this.i.init();
      this.P.init();
      se(this.j);
    }
    onAudioEnabledChange(a) {
      Me(this.g, 5);
      return Nd(this.o, a);
    }
    isAudioEnabled() {
      if (!this.m) return !0;
      Me(this.g, 10);
      return this.s;
    }
    onPause(a) {
      a.T || Me(this.g, 6);
      return Nd(this.h, (b) => {
        b === 1 && a();
      });
    }
    onResume(a) {
      Me(this.g, 7);
      return Nd(this.h, (b) => {
        b === 0 && a();
      });
    }
    getLanguage() {
      const a = this;
      return l(
        (function* () {
          const b = yield Y(a.g, Q(5));
          V(b.data, 8);
          let c;
          return (
            ((c = I(b.data, P, 2, F)) == null ? void 0 : c.getLanguage()) ||
            "en"
          );
        })()
      );
    }
  };
  const Ze = new (class {
    constructor(
      a = ae,
      b = new be(),
      c = new $d(),
      d = new ce(),
      e = new Ne(),
      f = new Re(),
      g = new Ye(),
      h = new Xe()
    ) {
      this.g = a;
      this.h = b;
      this.ads = c;
      this.engagement = d;
      this.game = e;
      this.health = f;
      this.system = g;
      document.addEventListener("DOMContentLoaded", () => {
        const k = document.body;
        O(k, "touch-action");
        O(k, "overscroll-behavior");
        O(k, "user-select");
        O(k, "-webkit-user-select");
        O(k, "-ms-user-select");
        O(k, "-moz-user-select");
        O(k, "-o-user-select");
      });
      this.g &&
        (Object.defineProperty(window, "localStorage", {
          value: null,
          writable: !1,
        }),
        Object.defineProperty(window, "sessionStorage", {
          value: null,
          writable: !1,
        }),
        Object.defineProperty(window, "indexedDB", {
          value: null,
          writable: !1,
        }),
        Object.defineProperty(window, "caches", { value: null, writable: !1 }),
        Object.defineProperty(document, "cookie", {
          value: null,
          writable: !1,
        }));
    }
  })();
  n("ytgame", Ze.h);
  n("ytgame.ads", Ze.ads);
  n("ytgame.engagement", Ze.engagement);
  n("ytgame.game", Ze.game);
  n("ytgame.health", Ze.health);
  n("ytgame.system", Ze.system);
}).call(this);
ytgame.system.o.G = true
ytgame.system.o.dispatchEvent(new Event("AUDIO_EVENT"));