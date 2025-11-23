/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  var e = {
      486: function (e, t, n) {
        var r;
        (e = n.nmd(e)),
          function () {
            var o,
              i = "Expected a function",
              a = "__lodash_hash_undefined__",
              u = "__lodash_placeholder__",
              s = 32,
              c = 128,
              l = 1 / 0,
              f = 9007199254740991,
              h = NaN,
              d = 4294967295,
              p = [
                ["ary", c],
                ["bind", 1],
                ["bindKey", 2],
                ["curry", 8],
                ["curryRight", 16],
                ["flip", 512],
                ["partial", s],
                ["partialRight", 64],
                ["rearg", 256],
              ],
              g = "[object Arguments]",
              v = "[object Array]",
              y = "[object Boolean]",
              _ = "[object Date]",
              b = "[object Error]",
              m = "[object Function]",
              w = "[object GeneratorFunction]",
              k = "[object Map]",
              I = "[object Number]",
              E = "[object Object]",
              S = "[object Promise]",
              A = "[object RegExp]",
              x = "[object Set]",
              P = "[object String]",
              O = "[object Symbol]",
              T = "[object WeakMap]",
              M = "[object ArrayBuffer]",
              D = "[object DataView]",
              j = "[object Float32Array]",
              R = "[object Float64Array]",
              C = "[object Int8Array]",
              L = "[object Int16Array]",
              B = "[object Int32Array]",
              U = "[object Uint8Array]",
              G = "[object Uint8ClampedArray]",
              N = "[object Uint16Array]",
              z = "[object Uint32Array]",
              q = /\b__p \+= '';/g,
              F = /\b(__p \+=) '' \+/g,
              W = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
              V = /&(?:amp|lt|gt|quot|#39);/g,
              Q = /[&<>"']/g,
              J = RegExp(V.source),
              H = RegExp(Q.source),
              X = /<%-([\s\S]+?)%>/g,
              Z = /<%([\s\S]+?)%>/g,
              K = /<%=([\s\S]+?)%>/g,
              Y = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
              $ = /^\w*$/,
              ee =
                /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
              te = /[\\^$.*+?()[\]{}|]/g,
              ne = RegExp(te.source),
              re = /^\s+/,
              oe = /\s/,
              ie = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
              ae = /\{\n\/\* \[wrapped with (.+)\] \*/,
              ue = /,? & /,
              se = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
              ce = /[()=,{}\[\]\/\s]/,
              le = /\\(\\)?/g,
              fe = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
              he = /\w*$/,
              de = /^[-+]0x[0-9a-f]+$/i,
              pe = /^0b[01]+$/i,
              ge = /^\[object .+?Constructor\]$/,
              ve = /^0o[0-7]+$/i,
              ye = /^(?:0|[1-9]\d*)$/,
              _e = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
              be = /($^)/,
              me = /['\n\r\u2028\u2029\\]/g,
              we = "\\ud800-\\udfff",
              ke = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
              Ie = "\\u2700-\\u27bf",
              Ee = "a-z\\xdf-\\xf6\\xf8-\\xff",
              Se = "A-Z\\xc0-\\xd6\\xd8-\\xde",
              Ae = "\\ufe0e\\ufe0f",
              xe =
                "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
              Pe = "[" + we + "]",
              Oe = "[" + xe + "]",
              Te = "[" + ke + "]",
              Me = "\\d+",
              De = "[" + Ie + "]",
              je = "[" + Ee + "]",
              Re = "[^" + we + xe + Me + Ie + Ee + Se + "]",
              Ce = "\\ud83c[\\udffb-\\udfff]",
              Le = "[^" + we + "]",
              Be = "(?:\\ud83c[\\udde6-\\uddff]){2}",
              Ue = "[\\ud800-\\udbff][\\udc00-\\udfff]",
              Ge = "[" + Se + "]",
              Ne = "\\u200d",
              ze = "(?:" + je + "|" + Re + ")",
              qe = "(?:" + Ge + "|" + Re + ")",
              Fe = "(?:['’](?:d|ll|m|re|s|t|ve))?",
              We = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
              Ve = "(?:" + Te + "|" + Ce + ")?",
              Qe = "[" + Ae + "]?",
              Je =
                Qe +
                Ve +
                "(?:" +
                Ne +
                "(?:" +
                [Le, Be, Ue].join("|") +
                ")" +
                Qe +
                Ve +
                ")*",
              He = "(?:" + [De, Be, Ue].join("|") + ")" + Je,
              Xe = "(?:" + [Le + Te + "?", Te, Be, Ue, Pe].join("|") + ")",
              Ze = RegExp("['’]", "g"),
              Ke = RegExp(Te, "g"),
              Ye = RegExp(Ce + "(?=" + Ce + ")|" + Xe + Je, "g"),
              $e = RegExp(
                [
                  Ge +
                    "?" +
                    je +
                    "+" +
                    Fe +
                    "(?=" +
                    [Oe, Ge, "$"].join("|") +
                    ")",
                  qe + "+" + We + "(?=" + [Oe, Ge + ze, "$"].join("|") + ")",
                  Ge + "?" + ze + "+" + Fe,
                  Ge + "+" + We,
                  "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                  "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                  Me,
                  He,
                ].join("|"),
                "g"
              ),
              et = RegExp("[" + Ne + we + ke + Ae + "]"),
              tt =
                /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
              nt = [
                "Array",
                "Buffer",
                "DataView",
                "Date",
                "Error",
                "Float32Array",
                "Float64Array",
                "Function",
                "Int8Array",
                "Int16Array",
                "Int32Array",
                "Map",
                "Math",
                "Object",
                "Promise",
                "RegExp",
                "Set",
                "String",
                "Symbol",
                "TypeError",
                "Uint8Array",
                "Uint8ClampedArray",
                "Uint16Array",
                "Uint32Array",
                "WeakMap",
                "_",
                "clearTimeout",
                "isFinite",
                "parseInt",
                "setTimeout",
              ],
              rt = -1,
              ot = {};
            (ot[j] =
              ot[R] =
              ot[C] =
              ot[L] =
              ot[B] =
              ot[U] =
              ot[G] =
              ot[N] =
              ot[z] =
                !0),
              (ot[g] =
                ot[v] =
                ot[M] =
                ot[y] =
                ot[D] =
                ot[_] =
                ot[b] =
                ot[m] =
                ot[k] =
                ot[I] =
                ot[E] =
                ot[A] =
                ot[x] =
                ot[P] =
                ot[T] =
                  !1);
            var it = {};
            (it[g] =
              it[v] =
              it[M] =
              it[D] =
              it[y] =
              it[_] =
              it[j] =
              it[R] =
              it[C] =
              it[L] =
              it[B] =
              it[k] =
              it[I] =
              it[E] =
              it[A] =
              it[x] =
              it[P] =
              it[O] =
              it[U] =
              it[G] =
              it[N] =
              it[z] =
                !0),
              (it[b] = it[m] = it[T] = !1);
            var at = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                "\u2028": "u2028",
                "\u2029": "u2029",
              },
              ut = parseFloat,
              st = parseInt,
              ct =
                "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
              lt =
                "object" == typeof self &&
                self &&
                self.Object === Object &&
                self,
              ft = ct || lt || Function("return this")(),
              ht = t && !t.nodeType && t,
              dt = ht && e && !e.nodeType && e,
              pt = dt && dt.exports === ht,
              gt = pt && ct.process,
              vt = (function () {
                try {
                  return (
                    (dt && dt.require && dt.require("util").types) ||
                    (gt && gt.binding && gt.binding("util"))
                  );
                } catch (e) {}
              })(),
              yt = vt && vt.isArrayBuffer,
              _t = vt && vt.isDate,
              bt = vt && vt.isMap,
              mt = vt && vt.isRegExp,
              wt = vt && vt.isSet,
              kt = vt && vt.isTypedArray;
            function It(e, t, n) {
              switch (n.length) {
                case 0:
                  return e.call(t);
                case 1:
                  return e.call(t, n[0]);
                case 2:
                  return e.call(t, n[0], n[1]);
                case 3:
                  return e.call(t, n[0], n[1], n[2]);
              }
              return e.apply(t, n);
            }
            function Et(e, t, n, r) {
              for (var o = -1, i = null == e ? 0 : e.length; ++o < i; ) {
                var a = e[o];
                t(r, a, n(a), e);
              }
              return r;
            }
            function St(e, t) {
              for (
                var n = -1, r = null == e ? 0 : e.length;
                ++n < r && !1 !== t(e[n], n, e);

              );
              return e;
            }
            function At(e, t) {
              for (
                var n = null == e ? 0 : e.length;
                n-- && !1 !== t(e[n], n, e);

              );
              return e;
            }
            function xt(e, t) {
              for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
                if (!t(e[n], n, e)) return !1;
              return !0;
            }
            function Pt(e, t) {
              for (
                var n = -1, r = null == e ? 0 : e.length, o = 0, i = [];
                ++n < r;

              ) {
                var a = e[n];
                t(a, n, e) && (i[o++] = a);
              }
              return i;
            }
            function Ot(e, t) {
              return !(null == e || !e.length) && Gt(e, t, 0) > -1;
            }
            function Tt(e, t, n) {
              for (var r = -1, o = null == e ? 0 : e.length; ++r < o; )
                if (n(t, e[r])) return !0;
              return !1;
            }
            function Mt(e, t) {
              for (
                var n = -1, r = null == e ? 0 : e.length, o = Array(r);
                ++n < r;

              )
                o[n] = t(e[n], n, e);
              return o;
            }
            function Dt(e, t) {
              for (var n = -1, r = t.length, o = e.length; ++n < r; )
                e[o + n] = t[n];
              return e;
            }
            function jt(e, t, n, r) {
              var o = -1,
                i = null == e ? 0 : e.length;
              for (r && i && (n = e[++o]); ++o < i; ) n = t(n, e[o], o, e);
              return n;
            }
            function Rt(e, t, n, r) {
              var o = null == e ? 0 : e.length;
              for (r && o && (n = e[--o]); o--; ) n = t(n, e[o], o, e);
              return n;
            }
            function Ct(e, t) {
              for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
                if (t(e[n], n, e)) return !0;
              return !1;
            }
            var Lt = Ft("length");
            function Bt(e, t, n) {
              var r;
              return (
                n(e, function (e, n, o) {
                  if (t(e, n, o)) return (r = n), !1;
                }),
                r
              );
            }
            function Ut(e, t, n, r) {
              for (var o = e.length, i = n + (r ? 1 : -1); r ? i-- : ++i < o; )
                if (t(e[i], i, e)) return i;
              return -1;
            }
            function Gt(e, t, n) {
              return t == t
                ? (function (e, t, n) {
                    for (var r = n - 1, o = e.length; ++r < o; )
                      if (e[r] === t) return r;
                    return -1;
                  })(e, t, n)
                : Ut(e, zt, n);
            }
            function Nt(e, t, n, r) {
              for (var o = n - 1, i = e.length; ++o < i; )
                if (r(e[o], t)) return o;
              return -1;
            }
            function zt(e) {
              return e != e;
            }
            function qt(e, t) {
              var n = null == e ? 0 : e.length;
              return n ? Qt(e, t) / n : h;
            }
            function Ft(e) {
              return function (t) {
                return null == t ? o : t[e];
              };
            }
            function Wt(e) {
              return function (t) {
                return null == e ? o : e[t];
              };
            }
            function Vt(e, t, n, r, o) {
              return (
                o(e, function (e, o, i) {
                  n = r ? ((r = !1), e) : t(n, e, o, i);
                }),
                n
              );
            }
            function Qt(e, t) {
              for (var n, r = -1, i = e.length; ++r < i; ) {
                var a = t(e[r]);
                a !== o && (n = n === o ? a : n + a);
              }
              return n;
            }
            function Jt(e, t) {
              for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
              return r;
            }
            function Ht(e) {
              return e ? e.slice(0, hn(e) + 1).replace(re, "") : e;
            }
            function Xt(e) {
              return function (t) {
                return e(t);
              };
            }
            function Zt(e, t) {
              return Mt(t, function (t) {
                return e[t];
              });
            }
            function Kt(e, t) {
              return e.has(t);
            }
            function Yt(e, t) {
              for (var n = -1, r = e.length; ++n < r && Gt(t, e[n], 0) > -1; );
              return n;
            }
            function $t(e, t) {
              for (var n = e.length; n-- && Gt(t, e[n], 0) > -1; );
              return n;
            }
            var en = Wt({
                À: "A",
                Á: "A",
                Â: "A",
                Ã: "A",
                Ä: "A",
                Å: "A",
                à: "a",
                á: "a",
                â: "a",
                ã: "a",
                ä: "a",
                å: "a",
                Ç: "C",
                ç: "c",
                Ð: "D",
                ð: "d",
                È: "E",
                É: "E",
                Ê: "E",
                Ë: "E",
                è: "e",
                é: "e",
                ê: "e",
                ë: "e",
                Ì: "I",
                Í: "I",
                Î: "I",
                Ï: "I",
                ì: "i",
                í: "i",
                î: "i",
                ï: "i",
                Ñ: "N",
                ñ: "n",
                Ò: "O",
                Ó: "O",
                Ô: "O",
                Õ: "O",
                Ö: "O",
                Ø: "O",
                ò: "o",
                ó: "o",
                ô: "o",
                õ: "o",
                ö: "o",
                ø: "o",
                Ù: "U",
                Ú: "U",
                Û: "U",
                Ü: "U",
                ù: "u",
                ú: "u",
                û: "u",
                ü: "u",
                Ý: "Y",
                ý: "y",
                ÿ: "y",
                Æ: "Ae",
                æ: "ae",
                Þ: "Th",
                þ: "th",
                ß: "ss",
                Ā: "A",
                Ă: "A",
                Ą: "A",
                ā: "a",
                ă: "a",
                ą: "a",
                Ć: "C",
                Ĉ: "C",
                Ċ: "C",
                Č: "C",
                ć: "c",
                ĉ: "c",
                ċ: "c",
                č: "c",
                Ď: "D",
                Đ: "D",
                ď: "d",
                đ: "d",
                Ē: "E",
                Ĕ: "E",
                Ė: "E",
                Ę: "E",
                Ě: "E",
                ē: "e",
                ĕ: "e",
                ė: "e",
                ę: "e",
                ě: "e",
                Ĝ: "G",
                Ğ: "G",
                Ġ: "G",
                Ģ: "G",
                ĝ: "g",
                ğ: "g",
                ġ: "g",
                ģ: "g",
                Ĥ: "H",
                Ħ: "H",
                ĥ: "h",
                ħ: "h",
                Ĩ: "I",
                Ī: "I",
                Ĭ: "I",
                Į: "I",
                İ: "I",
                ĩ: "i",
                ī: "i",
                ĭ: "i",
                į: "i",
                ı: "i",
                Ĵ: "J",
                ĵ: "j",
                Ķ: "K",
                ķ: "k",
                ĸ: "k",
                Ĺ: "L",
                Ļ: "L",
                Ľ: "L",
                Ŀ: "L",
                Ł: "L",
                ĺ: "l",
                ļ: "l",
                ľ: "l",
                ŀ: "l",
                ł: "l",
                Ń: "N",
                Ņ: "N",
                Ň: "N",
                Ŋ: "N",
                ń: "n",
                ņ: "n",
                ň: "n",
                ŋ: "n",
                Ō: "O",
                Ŏ: "O",
                Ő: "O",
                ō: "o",
                ŏ: "o",
                ő: "o",
                Ŕ: "R",
                Ŗ: "R",
                Ř: "R",
                ŕ: "r",
                ŗ: "r",
                ř: "r",
                Ś: "S",
                Ŝ: "S",
                Ş: "S",
                Š: "S",
                ś: "s",
                ŝ: "s",
                ş: "s",
                š: "s",
                Ţ: "T",
                Ť: "T",
                Ŧ: "T",
                ţ: "t",
                ť: "t",
                ŧ: "t",
                Ũ: "U",
                Ū: "U",
                Ŭ: "U",
                Ů: "U",
                Ű: "U",
                Ų: "U",
                ũ: "u",
                ū: "u",
                ŭ: "u",
                ů: "u",
                ű: "u",
                ų: "u",
                Ŵ: "W",
                ŵ: "w",
                Ŷ: "Y",
                ŷ: "y",
                Ÿ: "Y",
                Ź: "Z",
                Ż: "Z",
                Ž: "Z",
                ź: "z",
                ż: "z",
                ž: "z",
                Ĳ: "IJ",
                ĳ: "ij",
                Œ: "Oe",
                œ: "oe",
                ŉ: "'n",
                ſ: "s",
              }),
              tn = Wt({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
              });
            function nn(e) {
              return "\\" + at[e];
            }
            function rn(e) {
              return et.test(e);
            }
            function on(e) {
              var t = -1,
                n = Array(e.size);
              return (
                e.forEach(function (e, r) {
                  n[++t] = [r, e];
                }),
                n
              );
            }
            function an(e, t) {
              return function (n) {
                return e(t(n));
              };
            }
            function un(e, t) {
              for (var n = -1, r = e.length, o = 0, i = []; ++n < r; ) {
                var a = e[n];
                (a !== t && a !== u) || ((e[n] = u), (i[o++] = n));
              }
              return i;
            }
            function sn(e) {
              var t = -1,
                n = Array(e.size);
              return (
                e.forEach(function (e) {
                  n[++t] = e;
                }),
                n
              );
            }
            function cn(e) {
              var t = -1,
                n = Array(e.size);
              return (
                e.forEach(function (e) {
                  n[++t] = [e, e];
                }),
                n
              );
            }
            function ln(e) {
              return rn(e)
                ? (function (e) {
                    for (var t = (Ye.lastIndex = 0); Ye.test(e); ) ++t;
                    return t;
                  })(e)
                : Lt(e);
            }
            function fn(e) {
              return rn(e)
                ? (function (e) {
                    return e.match(Ye) || [];
                  })(e)
                : (function (e) {
                    return e.split("");
                  })(e);
            }
            function hn(e) {
              for (var t = e.length; t-- && oe.test(e.charAt(t)); );
              return t;
            }
            var dn = Wt({
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&#39;": "'",
              }),
              pn = (function e(t) {
                var n,
                  r = (t =
                    null == t
                      ? ft
                      : pn.defaults(ft.Object(), t, pn.pick(ft, nt))).Array,
                  oe = t.Date,
                  we = t.Error,
                  ke = t.Function,
                  Ie = t.Math,
                  Ee = t.Object,
                  Se = t.RegExp,
                  Ae = t.String,
                  xe = t.TypeError,
                  Pe = r.prototype,
                  Oe = ke.prototype,
                  Te = Ee.prototype,
                  Me = t["__core-js_shared__"],
                  De = Oe.toString,
                  je = Te.hasOwnProperty,
                  Re = 0,
                  Ce = (n = /[^.]+$/.exec(
                    (Me && Me.keys && Me.keys.IE_PROTO) || ""
                  ))
                    ? "Symbol(src)_1." + n
                    : "",
                  Le = Te.toString,
                  Be = De.call(Ee),
                  Ue = ft._,
                  Ge = Se(
                    "^" +
                      De.call(je)
                        .replace(te, "\\$&")
                        .replace(
                          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                          "$1.*?"
                        ) +
                      "$"
                  ),
                  Ne = pt ? t.Buffer : o,
                  ze = t.Symbol,
                  qe = t.Uint8Array,
                  Fe = Ne ? Ne.allocUnsafe : o,
                  We = an(Ee.getPrototypeOf, Ee),
                  Ve = Ee.create,
                  Qe = Te.propertyIsEnumerable,
                  Je = Pe.splice,
                  He = ze ? ze.isConcatSpreadable : o,
                  Xe = ze ? ze.iterator : o,
                  Ye = ze ? ze.toStringTag : o,
                  et = (function () {
                    try {
                      var e = ci(Ee, "defineProperty");
                      return e({}, "", {}), e;
                    } catch (e) {}
                  })(),
                  at = t.clearTimeout !== ft.clearTimeout && t.clearTimeout,
                  ct = oe && oe.now !== ft.Date.now && oe.now,
                  lt = t.setTimeout !== ft.setTimeout && t.setTimeout,
                  ht = Ie.ceil,
                  dt = Ie.floor,
                  gt = Ee.getOwnPropertySymbols,
                  vt = Ne ? Ne.isBuffer : o,
                  Lt = t.isFinite,
                  Wt = Pe.join,
                  gn = an(Ee.keys, Ee),
                  vn = Ie.max,
                  yn = Ie.min,
                  _n = oe.now,
                  bn = t.parseInt,
                  mn = Ie.random,
                  wn = Pe.reverse,
                  kn = ci(t, "DataView"),
                  In = ci(t, "Map"),
                  En = ci(t, "Promise"),
                  Sn = ci(t, "Set"),
                  An = ci(t, "WeakMap"),
                  xn = ci(Ee, "create"),
                  Pn = An && new An(),
                  On = {},
                  Tn = Bi(kn),
                  Mn = Bi(In),
                  Dn = Bi(En),
                  jn = Bi(Sn),
                  Rn = Bi(An),
                  Cn = ze ? ze.prototype : o,
                  Ln = Cn ? Cn.valueOf : o,
                  Bn = Cn ? Cn.toString : o;
                function Un(e) {
                  if (eu(e) && !Fa(e) && !(e instanceof qn)) {
                    if (e instanceof zn) return e;
                    if (je.call(e, "__wrapped__")) return Ui(e);
                  }
                  return new zn(e);
                }
                var Gn = (function () {
                  function e() {}
                  return function (t) {
                    if (!$a(t)) return {};
                    if (Ve) return Ve(t);
                    e.prototype = t;
                    var n = new e();
                    return (e.prototype = o), n;
                  };
                })();
                function Nn() {}
                function zn(e, t) {
                  (this.__wrapped__ = e),
                    (this.__actions__ = []),
                    (this.__chain__ = !!t),
                    (this.__index__ = 0),
                    (this.__values__ = o);
                }
                function qn(e) {
                  (this.__wrapped__ = e),
                    (this.__actions__ = []),
                    (this.__dir__ = 1),
                    (this.__filtered__ = !1),
                    (this.__iteratees__ = []),
                    (this.__takeCount__ = d),
                    (this.__views__ = []);
                }
                function Fn(e) {
                  var t = -1,
                    n = null == e ? 0 : e.length;
                  for (this.clear(); ++t < n; ) {
                    var r = e[t];
                    this.set(r[0], r[1]);
                  }
                }
                function Wn(e) {
                  var t = -1,
                    n = null == e ? 0 : e.length;
                  for (this.clear(); ++t < n; ) {
                    var r = e[t];
                    this.set(r[0], r[1]);
                  }
                }
                function Vn(e) {
                  var t = -1,
                    n = null == e ? 0 : e.length;
                  for (this.clear(); ++t < n; ) {
                    var r = e[t];
                    this.set(r[0], r[1]);
                  }
                }
                function Qn(e) {
                  var t = -1,
                    n = null == e ? 0 : e.length;
                  for (this.__data__ = new Vn(); ++t < n; ) this.add(e[t]);
                }
                function Jn(e) {
                  var t = (this.__data__ = new Wn(e));
                  this.size = t.size;
                }
                function Hn(e, t) {
                  var n = Fa(e),
                    r = !n && qa(e),
                    o = !n && !r && Ja(e),
                    i = !n && !r && !o && su(e),
                    a = n || r || o || i,
                    u = a ? Jt(e.length, Ae) : [],
                    s = u.length;
                  for (var c in e)
                    (!t && !je.call(e, c)) ||
                      (a &&
                        ("length" == c ||
                          (o && ("offset" == c || "parent" == c)) ||
                          (i &&
                            ("buffer" == c ||
                              "byteLength" == c ||
                              "byteOffset" == c)) ||
                          vi(c, s))) ||
                      u.push(c);
                  return u;
                }
                function Xn(e) {
                  var t = e.length;
                  return t ? e[Vr(0, t - 1)] : o;
                }
                function Zn(e, t) {
                  return Di(xo(e), ir(t, 0, e.length));
                }
                function Kn(e) {
                  return Di(xo(e));
                }
                function Yn(e, t, n) {
                  ((n !== o && !Ga(e[t], n)) || (n === o && !(t in e))) &&
                    rr(e, t, n);
                }
                function $n(e, t, n) {
                  var r = e[t];
                  (je.call(e, t) && Ga(r, n) && (n !== o || t in e)) ||
                    rr(e, t, n);
                }
                function er(e, t) {
                  for (var n = e.length; n--; ) if (Ga(e[n][0], t)) return n;
                  return -1;
                }
                function tr(e, t, n, r) {
                  return (
                    lr(e, function (e, o, i) {
                      t(r, e, n(e), i);
                    }),
                    r
                  );
                }
                function nr(e, t) {
                  return e && Po(t, Tu(t), e);
                }
                function rr(e, t, n) {
                  "__proto__" == t && et
                    ? et(e, t, {
                        configurable: !0,
                        enumerable: !0,
                        value: n,
                        writable: !0,
                      })
                    : (e[t] = n);
                }
                function or(e, t) {
                  for (
                    var n = -1, i = t.length, a = r(i), u = null == e;
                    ++n < i;

                  )
                    a[n] = u ? o : Su(e, t[n]);
                  return a;
                }
                function ir(e, t, n) {
                  return (
                    e == e &&
                      (n !== o && (e = e <= n ? e : n),
                      t !== o && (e = e >= t ? e : t)),
                    e
                  );
                }
                function ar(e, t, n, r, i, a) {
                  var u,
                    s = 1 & t,
                    c = 2 & t,
                    l = 4 & t;
                  if ((n && (u = i ? n(e, r, i, a) : n(e)), u !== o)) return u;
                  if (!$a(e)) return e;
                  var f = Fa(e);
                  if (f) {
                    if (
                      ((u = (function (e) {
                        var t = e.length,
                          n = new e.constructor(t);
                        return (
                          t &&
                            "string" == typeof e[0] &&
                            je.call(e, "index") &&
                            ((n.index = e.index), (n.input = e.input)),
                          n
                        );
                      })(e)),
                      !s)
                    )
                      return xo(e, u);
                  } else {
                    var h = hi(e),
                      d = h == m || h == w;
                    if (Ja(e)) return wo(e, s);
                    if (h == E || h == g || (d && !i)) {
                      if (((u = c || d ? {} : pi(e)), !s))
                        return c
                          ? (function (e, t) {
                              return Po(e, fi(e), t);
                            })(
                              e,
                              (function (e, t) {
                                return e && Po(t, Mu(t), e);
                              })(u, e)
                            )
                          : (function (e, t) {
                              return Po(e, li(e), t);
                            })(e, nr(u, e));
                    } else {
                      if (!it[h]) return i ? e : {};
                      u = (function (e, t, n) {
                        var r,
                          o = e.constructor;
                        switch (t) {
                          case M:
                            return ko(e);
                          case y:
                          case _:
                            return new o(+e);
                          case D:
                            return (function (e, t) {
                              var n = t ? ko(e.buffer) : e.buffer;
                              return new e.constructor(
                                n,
                                e.byteOffset,
                                e.byteLength
                              );
                            })(e, n);
                          case j:
                          case R:
                          case C:
                          case L:
                          case B:
                          case U:
                          case G:
                          case N:
                          case z:
                            return Io(e, n);
                          case k:
                            return new o();
                          case I:
                          case P:
                            return new o(e);
                          case A:
                            return (function (e) {
                              var t = new e.constructor(e.source, he.exec(e));
                              return (t.lastIndex = e.lastIndex), t;
                            })(e);
                          case x:
                            return new o();
                          case O:
                            return (r = e), Ln ? Ee(Ln.call(r)) : {};
                        }
                      })(e, h, s);
                    }
                  }
                  a || (a = new Jn());
                  var p = a.get(e);
                  if (p) return p;
                  a.set(e, u),
                    iu(e)
                      ? e.forEach(function (r) {
                          u.add(ar(r, t, n, r, e, a));
                        })
                      : tu(e) &&
                        e.forEach(function (r, o) {
                          u.set(o, ar(r, t, n, o, e, a));
                        });
                  var v = f ? o : (l ? (c ? ni : ti) : c ? Mu : Tu)(e);
                  return (
                    St(v || e, function (r, o) {
                      v && (r = e[(o = r)]), $n(u, o, ar(r, t, n, o, e, a));
                    }),
                    u
                  );
                }
                function ur(e, t, n) {
                  var r = n.length;
                  if (null == e) return !r;
                  for (e = Ee(e); r--; ) {
                    var i = n[r],
                      a = t[i],
                      u = e[i];
                    if ((u === o && !(i in e)) || !a(u)) return !1;
                  }
                  return !0;
                }
                function sr(e, t, n) {
                  if ("function" != typeof e) throw new xe(i);
                  return Pi(function () {
                    e.apply(o, n);
                  }, t);
                }
                function cr(e, t, n, r) {
                  var o = -1,
                    i = Ot,
                    a = !0,
                    u = e.length,
                    s = [],
                    c = t.length;
                  if (!u) return s;
                  n && (t = Mt(t, Xt(n))),
                    r
                      ? ((i = Tt), (a = !1))
                      : t.length >= 200 &&
                        ((i = Kt), (a = !1), (t = new Qn(t)));
                  e: for (; ++o < u; ) {
                    var l = e[o],
                      f = null == n ? l : n(l);
                    if (((l = r || 0 !== l ? l : 0), a && f == f)) {
                      for (var h = c; h--; ) if (t[h] === f) continue e;
                      s.push(l);
                    } else i(t, f, r) || s.push(l);
                  }
                  return s;
                }
                (Un.templateSettings = {
                  escape: X,
                  evaluate: Z,
                  interpolate: K,
                  variable: "",
                  imports: { _: Un },
                }),
                  (Un.prototype = Nn.prototype),
                  (Un.prototype.constructor = Un),
                  (zn.prototype = Gn(Nn.prototype)),
                  (zn.prototype.constructor = zn),
                  (qn.prototype = Gn(Nn.prototype)),
                  (qn.prototype.constructor = qn),
                  (Fn.prototype.clear = function () {
                    (this.__data__ = xn ? xn(null) : {}), (this.size = 0);
                  }),
                  (Fn.prototype.delete = function (e) {
                    var t = this.has(e) && delete this.__data__[e];
                    return (this.size -= t ? 1 : 0), t;
                  }),
                  (Fn.prototype.get = function (e) {
                    var t = this.__data__;
                    if (xn) {
                      var n = t[e];
                      return n === a ? o : n;
                    }
                    return je.call(t, e) ? t[e] : o;
                  }),
                  (Fn.prototype.has = function (e) {
                    var t = this.__data__;
                    return xn ? t[e] !== o : je.call(t, e);
                  }),
                  (Fn.prototype.set = function (e, t) {
                    var n = this.__data__;
                    return (
                      (this.size += this.has(e) ? 0 : 1),
                      (n[e] = xn && t === o ? a : t),
                      this
                    );
                  }),
                  (Wn.prototype.clear = function () {
                    (this.__data__ = []), (this.size = 0);
                  }),
                  (Wn.prototype.delete = function (e) {
                    var t = this.__data__,
                      n = er(t, e);
                    return !(
                      n < 0 ||
                      (n == t.length - 1 ? t.pop() : Je.call(t, n, 1),
                      --this.size,
                      0)
                    );
                  }),
                  (Wn.prototype.get = function (e) {
                    var t = this.__data__,
                      n = er(t, e);
                    return n < 0 ? o : t[n][1];
                  }),
                  (Wn.prototype.has = function (e) {
                    return er(this.__data__, e) > -1;
                  }),
                  (Wn.prototype.set = function (e, t) {
                    var n = this.__data__,
                      r = er(n, e);
                    return (
                      r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t),
                      this
                    );
                  }),
                  (Vn.prototype.clear = function () {
                    (this.size = 0),
                      (this.__data__ = {
                        hash: new Fn(),
                        map: new (In || Wn)(),
                        string: new Fn(),
                      });
                  }),
                  (Vn.prototype.delete = function (e) {
                    var t = ui(this, e).delete(e);
                    return (this.size -= t ? 1 : 0), t;
                  }),
                  (Vn.prototype.get = function (e) {
                    return ui(this, e).get(e);
                  }),
                  (Vn.prototype.has = function (e) {
                    return ui(this, e).has(e);
                  }),
                  (Vn.prototype.set = function (e, t) {
                    var n = ui(this, e),
                      r = n.size;
                    return (
                      n.set(e, t), (this.size += n.size == r ? 0 : 1), this
                    );
                  }),
                  (Qn.prototype.add = Qn.prototype.push =
                    function (e) {
                      return this.__data__.set(e, a), this;
                    }),
                  (Qn.prototype.has = function (e) {
                    return this.__data__.has(e);
                  }),
                  (Jn.prototype.clear = function () {
                    (this.__data__ = new Wn()), (this.size = 0);
                  }),
                  (Jn.prototype.delete = function (e) {
                    var t = this.__data__,
                      n = t.delete(e);
                    return (this.size = t.size), n;
                  }),
                  (Jn.prototype.get = function (e) {
                    return this.__data__.get(e);
                  }),
                  (Jn.prototype.has = function (e) {
                    return this.__data__.has(e);
                  }),
                  (Jn.prototype.set = function (e, t) {
                    var n = this.__data__;
                    if (n instanceof Wn) {
                      var r = n.__data__;
                      if (!In || r.length < 199)
                        return r.push([e, t]), (this.size = ++n.size), this;
                      n = this.__data__ = new Vn(r);
                    }
                    return n.set(e, t), (this.size = n.size), this;
                  });
                var lr = Mo(_r),
                  fr = Mo(br, !0);
                function hr(e, t) {
                  var n = !0;
                  return (
                    lr(e, function (e, r, o) {
                      return (n = !!t(e, r, o));
                    }),
                    n
                  );
                }
                function dr(e, t, n) {
                  for (var r = -1, i = e.length; ++r < i; ) {
                    var a = e[r],
                      u = t(a);
                    if (null != u && (s === o ? u == u && !uu(u) : n(u, s)))
                      var s = u,
                        c = a;
                  }
                  return c;
                }
                function pr(e, t) {
                  var n = [];
                  return (
                    lr(e, function (e, r, o) {
                      t(e, r, o) && n.push(e);
                    }),
                    n
                  );
                }
                function gr(e, t, n, r, o) {
                  var i = -1,
                    a = e.length;
                  for (n || (n = gi), o || (o = []); ++i < a; ) {
                    var u = e[i];
                    t > 0 && n(u)
                      ? t > 1
                        ? gr(u, t - 1, n, r, o)
                        : Dt(o, u)
                      : r || (o[o.length] = u);
                  }
                  return o;
                }
                var vr = Do(),
                  yr = Do(!0);
                function _r(e, t) {
                  return e && vr(e, t, Tu);
                }
                function br(e, t) {
                  return e && yr(e, t, Tu);
                }
                function mr(e, t) {
                  return Pt(t, function (t) {
                    return Za(e[t]);
                  });
                }
                function wr(e, t) {
                  for (
                    var n = 0, r = (t = yo(t, e)).length;
                    null != e && n < r;

                  )
                    e = e[Li(t[n++])];
                  return n && n == r ? e : o;
                }
                function kr(e, t, n) {
                  var r = t(e);
                  return Fa(e) ? r : Dt(r, n(e));
                }
                function Ir(e) {
                  return null == e
                    ? e === o
                      ? "[object Undefined]"
                      : "[object Null]"
                    : Ye && Ye in Ee(e)
                    ? (function (e) {
                        var t = je.call(e, Ye),
                          n = e[Ye];
                        try {
                          e[Ye] = o;
                          var r = !0;
                        } catch (e) {}
                        var i = Le.call(e);
                        return r && (t ? (e[Ye] = n) : delete e[Ye]), i;
                      })(e)
                    : (function (e) {
                        return Le.call(e);
                      })(e);
                }
                function Er(e, t) {
                  return e > t;
                }
                function Sr(e, t) {
                  return null != e && je.call(e, t);
                }
                function Ar(e, t) {
                  return null != e && t in Ee(e);
                }
                function xr(e, t, n) {
                  for (
                    var i = n ? Tt : Ot,
                      a = e[0].length,
                      u = e.length,
                      s = u,
                      c = r(u),
                      l = 1 / 0,
                      f = [];
                    s--;

                  ) {
                    var h = e[s];
                    s && t && (h = Mt(h, Xt(t))),
                      (l = yn(h.length, l)),
                      (c[s] =
                        !n && (t || (a >= 120 && h.length >= 120))
                          ? new Qn(s && h)
                          : o);
                  }
                  h = e[0];
                  var d = -1,
                    p = c[0];
                  e: for (; ++d < a && f.length < l; ) {
                    var g = h[d],
                      v = t ? t(g) : g;
                    if (
                      ((g = n || 0 !== g ? g : 0), !(p ? Kt(p, v) : i(f, v, n)))
                    ) {
                      for (s = u; --s; ) {
                        var y = c[s];
                        if (!(y ? Kt(y, v) : i(e[s], v, n))) continue e;
                      }
                      p && p.push(v), f.push(g);
                    }
                  }
                  return f;
                }
                function Pr(e, t, n) {
                  var r =
                    null == (e = Si(e, (t = yo(t, e)))) ? e : e[Li(Xi(t))];
                  return null == r ? o : It(r, e, n);
                }
                function Or(e) {
                  return eu(e) && Ir(e) == g;
                }
                function Tr(e, t, n, r, i) {
                  return (
                    e === t ||
                    (null == e || null == t || (!eu(e) && !eu(t))
                      ? e != e && t != t
                      : (function (e, t, n, r, i, a) {
                          var u = Fa(e),
                            s = Fa(t),
                            c = u ? v : hi(e),
                            l = s ? v : hi(t),
                            f = (c = c == g ? E : c) == E,
                            h = (l = l == g ? E : l) == E,
                            d = c == l;
                          if (d && Ja(e)) {
                            if (!Ja(t)) return !1;
                            (u = !0), (f = !1);
                          }
                          if (d && !f)
                            return (
                              a || (a = new Jn()),
                              u || su(e)
                                ? $o(e, t, n, r, i, a)
                                : (function (e, t, n, r, o, i, a) {
                                    switch (n) {
                                      case D:
                                        if (
                                          e.byteLength != t.byteLength ||
                                          e.byteOffset != t.byteOffset
                                        )
                                          return !1;
                                        (e = e.buffer), (t = t.buffer);
                                      case M:
                                        return !(
                                          e.byteLength != t.byteLength ||
                                          !i(new qe(e), new qe(t))
                                        );
                                      case y:
                                      case _:
                                      case I:
                                        return Ga(+e, +t);
                                      case b:
                                        return (
                                          e.name == t.name &&
                                          e.message == t.message
                                        );
                                      case A:
                                      case P:
                                        return e == t + "";
                                      case k:
                                        var u = on;
                                      case x:
                                        var s = 1 & r;
                                        if (
                                          (u || (u = sn),
                                          e.size != t.size && !s)
                                        )
                                          return !1;
                                        var c = a.get(e);
                                        if (c) return c == t;
                                        (r |= 2), a.set(e, t);
                                        var l = $o(u(e), u(t), r, o, i, a);
                                        return a.delete(e), l;
                                      case O:
                                        if (Ln) return Ln.call(e) == Ln.call(t);
                                    }
                                    return !1;
                                  })(e, t, c, n, r, i, a)
                            );
                          if (!(1 & n)) {
                            var p = f && je.call(e, "__wrapped__"),
                              m = h && je.call(t, "__wrapped__");
                            if (p || m) {
                              var w = p ? e.value() : e,
                                S = m ? t.value() : t;
                              return a || (a = new Jn()), i(w, S, n, r, a);
                            }
                          }
                          return (
                            !!d &&
                            (a || (a = new Jn()),
                            (function (e, t, n, r, i, a) {
                              var u = 1 & n,
                                s = ti(e),
                                c = s.length;
                              if (c != ti(t).length && !u) return !1;
                              for (var l = c; l--; ) {
                                var f = s[l];
                                if (!(u ? f in t : je.call(t, f))) return !1;
                              }
                              var h = a.get(e),
                                d = a.get(t);
                              if (h && d) return h == t && d == e;
                              var p = !0;
                              a.set(e, t), a.set(t, e);
                              for (var g = u; ++l < c; ) {
                                var v = e[(f = s[l])],
                                  y = t[f];
                                if (r)
                                  var _ = u
                                    ? r(y, v, f, t, e, a)
                                    : r(v, y, f, e, t, a);
                                if (
                                  !(_ === o ? v === y || i(v, y, n, r, a) : _)
                                ) {
                                  p = !1;
                                  break;
                                }
                                g || (g = "constructor" == f);
                              }
                              if (p && !g) {
                                var b = e.constructor,
                                  m = t.constructor;
                                b == m ||
                                  !("constructor" in e) ||
                                  !("constructor" in t) ||
                                  ("function" == typeof b &&
                                    b instanceof b &&
                                    "function" == typeof m &&
                                    m instanceof m) ||
                                  (p = !1);
                              }
                              return a.delete(e), a.delete(t), p;
                            })(e, t, n, r, i, a))
                          );
                        })(e, t, n, r, Tr, i))
                  );
                }
                function Mr(e, t, n, r) {
                  var i = n.length,
                    a = i,
                    u = !r;
                  if (null == e) return !a;
                  for (e = Ee(e); i--; ) {
                    var s = n[i];
                    if (u && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
                  }
                  for (; ++i < a; ) {
                    var c = (s = n[i])[0],
                      l = e[c],
                      f = s[1];
                    if (u && s[2]) {
                      if (l === o && !(c in e)) return !1;
                    } else {
                      var h = new Jn();
                      if (r) var d = r(l, f, c, e, t, h);
                      if (!(d === o ? Tr(f, l, 3, r, h) : d)) return !1;
                    }
                  }
                  return !0;
                }
                function Dr(e) {
                  return (
                    !(!$a(e) || ((t = e), Ce && Ce in t)) &&
                    (Za(e) ? Ge : ge).test(Bi(e))
                  );
                  var t;
                }
                function jr(e) {
                  return "function" == typeof e
                    ? e
                    : null == e
                    ? ns
                    : "object" == typeof e
                    ? Fa(e)
                      ? Ur(e[0], e[1])
                      : Br(e)
                    : fs(e);
                }
                function Rr(e) {
                  if (!wi(e)) return gn(e);
                  var t = [];
                  for (var n in Ee(e))
                    je.call(e, n) && "constructor" != n && t.push(n);
                  return t;
                }
                function Cr(e, t) {
                  return e < t;
                }
                function Lr(e, t) {
                  var n = -1,
                    o = Va(e) ? r(e.length) : [];
                  return (
                    lr(e, function (e, r, i) {
                      o[++n] = t(e, r, i);
                    }),
                    o
                  );
                }
                function Br(e) {
                  var t = si(e);
                  return 1 == t.length && t[0][2]
                    ? Ii(t[0][0], t[0][1])
                    : function (n) {
                        return n === e || Mr(n, e, t);
                      };
                }
                function Ur(e, t) {
                  return _i(e) && ki(t)
                    ? Ii(Li(e), t)
                    : function (n) {
                        var r = Su(n, e);
                        return r === o && r === t ? Au(n, e) : Tr(t, r, 3);
                      };
                }
                function Gr(e, t, n, r, i) {
                  e !== t &&
                    vr(
                      t,
                      function (a, u) {
                        if ((i || (i = new Jn()), $a(a)))
                          !(function (e, t, n, r, i, a, u) {
                            var s = Ai(e, n),
                              c = Ai(t, n),
                              l = u.get(c);
                            if (l) Yn(e, n, l);
                            else {
                              var f = a ? a(s, c, n + "", e, t, u) : o,
                                h = f === o;
                              if (h) {
                                var d = Fa(c),
                                  p = !d && Ja(c),
                                  g = !d && !p && su(c);
                                (f = c),
                                  d || p || g
                                    ? Fa(s)
                                      ? (f = s)
                                      : Qa(s)
                                      ? (f = xo(s))
                                      : p
                                      ? ((h = !1), (f = wo(c, !0)))
                                      : g
                                      ? ((h = !1), (f = Io(c, !0)))
                                      : (f = [])
                                    : ru(c) || qa(c)
                                    ? ((f = s),
                                      qa(s)
                                        ? (f = vu(s))
                                        : ($a(s) && !Za(s)) || (f = pi(c)))
                                    : (h = !1);
                              }
                              h && (u.set(c, f), i(f, c, r, a, u), u.delete(c)),
                                Yn(e, n, f);
                            }
                          })(e, t, u, n, Gr, r, i);
                        else {
                          var s = r ? r(Ai(e, u), a, u + "", e, t, i) : o;
                          s === o && (s = a), Yn(e, u, s);
                        }
                      },
                      Mu
                    );
                }
                function Nr(e, t) {
                  var n = e.length;
                  if (n) return vi((t += t < 0 ? n : 0), n) ? e[t] : o;
                }
                function zr(e, t, n) {
                  t = t.length
                    ? Mt(t, function (e) {
                        return Fa(e)
                          ? function (t) {
                              return wr(t, 1 === e.length ? e[0] : e);
                            }
                          : e;
                      })
                    : [ns];
                  var r = -1;
                  t = Mt(t, Xt(ai()));
                  var o = Lr(e, function (e, n, o) {
                    var i = Mt(t, function (t) {
                      return t(e);
                    });
                    return { criteria: i, index: ++r, value: e };
                  });
                  return (function (e, t) {
                    var r = e.length;
                    for (
                      e.sort(function (e, t) {
                        return (function (e, t, n) {
                          for (
                            var r = -1,
                              o = e.criteria,
                              i = t.criteria,
                              a = o.length,
                              u = n.length;
                            ++r < a;

                          ) {
                            var s = Eo(o[r], i[r]);
                            if (s)
                              return r >= u ? s : s * ("desc" == n[r] ? -1 : 1);
                          }
                          return e.index - t.index;
                        })(e, t, n);
                      });
                      r--;

                    )
                      e[r] = e[r].value;
                    return e;
                  })(o);
                }
                function qr(e, t, n) {
                  for (var r = -1, o = t.length, i = {}; ++r < o; ) {
                    var a = t[r],
                      u = wr(e, a);
                    n(u, a) && Zr(i, yo(a, e), u);
                  }
                  return i;
                }
                function Fr(e, t, n, r) {
                  var o = r ? Nt : Gt,
                    i = -1,
                    a = t.length,
                    u = e;
                  for (
                    e === t && (t = xo(t)), n && (u = Mt(e, Xt(n)));
                    ++i < a;

                  )
                    for (
                      var s = 0, c = t[i], l = n ? n(c) : c;
                      (s = o(u, l, s, r)) > -1;

                    )
                      u !== e && Je.call(u, s, 1), Je.call(e, s, 1);
                  return e;
                }
                function Wr(e, t) {
                  for (var n = e ? t.length : 0, r = n - 1; n--; ) {
                    var o = t[n];
                    if (n == r || o !== i) {
                      var i = o;
                      vi(o) ? Je.call(e, o, 1) : so(e, o);
                    }
                  }
                  return e;
                }
                function Vr(e, t) {
                  return e + dt(mn() * (t - e + 1));
                }
                function Qr(e, t) {
                  var n = "";
                  if (!e || t < 1 || t > f) return n;
                  do {
                    t % 2 && (n += e), (t = dt(t / 2)) && (e += e);
                  } while (t);
                  return n;
                }
                function Jr(e, t) {
                  return Oi(Ei(e, t, ns), e + "");
                }
                function Hr(e) {
                  return Xn(Gu(e));
                }
                function Xr(e, t) {
                  var n = Gu(e);
                  return Di(n, ir(t, 0, n.length));
                }
                function Zr(e, t, n, r) {
                  if (!$a(e)) return e;
                  for (
                    var i = -1, a = (t = yo(t, e)).length, u = a - 1, s = e;
                    null != s && ++i < a;

                  ) {
                    var c = Li(t[i]),
                      l = n;
                    if (
                      "__proto__" === c ||
                      "constructor" === c ||
                      "prototype" === c
                    )
                      return e;
                    if (i != u) {
                      var f = s[c];
                      (l = r ? r(f, c, s) : o) === o &&
                        (l = $a(f) ? f : vi(t[i + 1]) ? [] : {});
                    }
                    $n(s, c, l), (s = s[c]);
                  }
                  return e;
                }
                var Kr = Pn
                    ? function (e, t) {
                        return Pn.set(e, t), e;
                      }
                    : ns,
                  Yr = et
                    ? function (e, t) {
                        return et(e, "toString", {
                          configurable: !0,
                          enumerable: !1,
                          value: $u(t),
                          writable: !0,
                        });
                      }
                    : ns;
                function $r(e) {
                  return Di(Gu(e));
                }
                function eo(e, t, n) {
                  var o = -1,
                    i = e.length;
                  t < 0 && (t = -t > i ? 0 : i + t),
                    (n = n > i ? i : n) < 0 && (n += i),
                    (i = t > n ? 0 : (n - t) >>> 0),
                    (t >>>= 0);
                  for (var a = r(i); ++o < i; ) a[o] = e[o + t];
                  return a;
                }
                function to(e, t) {
                  var n;
                  return (
                    lr(e, function (e, r, o) {
                      return !(n = t(e, r, o));
                    }),
                    !!n
                  );
                }
                function no(e, t, n) {
                  var r = 0,
                    o = null == e ? r : e.length;
                  if ("number" == typeof t && t == t && o <= 2147483647) {
                    for (; r < o; ) {
                      var i = (r + o) >>> 1,
                        a = e[i];
                      null !== a && !uu(a) && (n ? a <= t : a < t)
                        ? (r = i + 1)
                        : (o = i);
                    }
                    return o;
                  }
                  return ro(e, t, ns, n);
                }
                function ro(e, t, n, r) {
                  var i = 0,
                    a = null == e ? 0 : e.length;
                  if (0 === a) return 0;
                  for (
                    var u = (t = n(t)) != t,
                      s = null === t,
                      c = uu(t),
                      l = t === o;
                    i < a;

                  ) {
                    var f = dt((i + a) / 2),
                      h = n(e[f]),
                      d = h !== o,
                      p = null === h,
                      g = h == h,
                      v = uu(h);
                    if (u) var y = r || g;
                    else
                      y = l
                        ? g && (r || d)
                        : s
                        ? g && d && (r || !p)
                        : c
                        ? g && d && !p && (r || !v)
                        : !p && !v && (r ? h <= t : h < t);
                    y ? (i = f + 1) : (a = f);
                  }
                  return yn(a, 4294967294);
                }
                function oo(e, t) {
                  for (var n = -1, r = e.length, o = 0, i = []; ++n < r; ) {
                    var a = e[n],
                      u = t ? t(a) : a;
                    if (!n || !Ga(u, s)) {
                      var s = u;
                      i[o++] = 0 === a ? 0 : a;
                    }
                  }
                  return i;
                }
                function io(e) {
                  return "number" == typeof e ? e : uu(e) ? h : +e;
                }
                function ao(e) {
                  if ("string" == typeof e) return e;
                  if (Fa(e)) return Mt(e, ao) + "";
                  if (uu(e)) return Bn ? Bn.call(e) : "";
                  var t = e + "";
                  return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
                }
                function uo(e, t, n) {
                  var r = -1,
                    o = Ot,
                    i = e.length,
                    a = !0,
                    u = [],
                    s = u;
                  if (n) (a = !1), (o = Tt);
                  else if (i >= 200) {
                    var c = t ? null : Jo(e);
                    if (c) return sn(c);
                    (a = !1), (o = Kt), (s = new Qn());
                  } else s = t ? [] : u;
                  e: for (; ++r < i; ) {
                    var l = e[r],
                      f = t ? t(l) : l;
                    if (((l = n || 0 !== l ? l : 0), a && f == f)) {
                      for (var h = s.length; h--; ) if (s[h] === f) continue e;
                      t && s.push(f), u.push(l);
                    } else o(s, f, n) || (s !== u && s.push(f), u.push(l));
                  }
                  return u;
                }
                function so(e, t) {
                  return (
                    null == (e = Si(e, (t = yo(t, e)))) || delete e[Li(Xi(t))]
                  );
                }
                function co(e, t, n, r) {
                  return Zr(e, t, n(wr(e, t)), r);
                }
                function lo(e, t, n, r) {
                  for (
                    var o = e.length, i = r ? o : -1;
                    (r ? i-- : ++i < o) && t(e[i], i, e);

                  );
                  return n
                    ? eo(e, r ? 0 : i, r ? i + 1 : o)
                    : eo(e, r ? i + 1 : 0, r ? o : i);
                }
                function fo(e, t) {
                  var n = e;
                  return (
                    n instanceof qn && (n = n.value()),
                    jt(
                      t,
                      function (e, t) {
                        return t.func.apply(t.thisArg, Dt([e], t.args));
                      },
                      n
                    )
                  );
                }
                function ho(e, t, n) {
                  var o = e.length;
                  if (o < 2) return o ? uo(e[0]) : [];
                  for (var i = -1, a = r(o); ++i < o; )
                    for (var u = e[i], s = -1; ++s < o; )
                      s != i && (a[i] = cr(a[i] || u, e[s], t, n));
                  return uo(gr(a, 1), t, n);
                }
                function po(e, t, n) {
                  for (
                    var r = -1, i = e.length, a = t.length, u = {};
                    ++r < i;

                  ) {
                    var s = r < a ? t[r] : o;
                    n(u, e[r], s);
                  }
                  return u;
                }
                function go(e) {
                  return Qa(e) ? e : [];
                }
                function vo(e) {
                  return "function" == typeof e ? e : ns;
                }
                function yo(e, t) {
                  return Fa(e) ? e : _i(e, t) ? [e] : Ci(yu(e));
                }
                var _o = Jr;
                function bo(e, t, n) {
                  var r = e.length;
                  return (n = n === o ? r : n), !t && n >= r ? e : eo(e, t, n);
                }
                var mo =
                  at ||
                  function (e) {
                    return ft.clearTimeout(e);
                  };
                function wo(e, t) {
                  if (t) return e.slice();
                  var n = e.length,
                    r = Fe ? Fe(n) : new e.constructor(n);
                  return e.copy(r), r;
                }
                function ko(e) {
                  var t = new e.constructor(e.byteLength);
                  return new qe(t).set(new qe(e)), t;
                }
                function Io(e, t) {
                  var n = t ? ko(e.buffer) : e.buffer;
                  return new e.constructor(n, e.byteOffset, e.length);
                }
                function Eo(e, t) {
                  if (e !== t) {
                    var n = e !== o,
                      r = null === e,
                      i = e == e,
                      a = uu(e),
                      u = t !== o,
                      s = null === t,
                      c = t == t,
                      l = uu(t);
                    if (
                      (!s && !l && !a && e > t) ||
                      (a && u && c && !s && !l) ||
                      (r && u && c) ||
                      (!n && c) ||
                      !i
                    )
                      return 1;
                    if (
                      (!r && !a && !l && e < t) ||
                      (l && n && i && !r && !a) ||
                      (s && n && i) ||
                      (!u && i) ||
                      !c
                    )
                      return -1;
                  }
                  return 0;
                }
                function So(e, t, n, o) {
                  for (
                    var i = -1,
                      a = e.length,
                      u = n.length,
                      s = -1,
                      c = t.length,
                      l = vn(a - u, 0),
                      f = r(c + l),
                      h = !o;
                    ++s < c;

                  )
                    f[s] = t[s];
                  for (; ++i < u; ) (h || i < a) && (f[n[i]] = e[i]);
                  for (; l--; ) f[s++] = e[i++];
                  return f;
                }
                function Ao(e, t, n, o) {
                  for (
                    var i = -1,
                      a = e.length,
                      u = -1,
                      s = n.length,
                      c = -1,
                      l = t.length,
                      f = vn(a - s, 0),
                      h = r(f + l),
                      d = !o;
                    ++i < f;

                  )
                    h[i] = e[i];
                  for (var p = i; ++c < l; ) h[p + c] = t[c];
                  for (; ++u < s; ) (d || i < a) && (h[p + n[u]] = e[i++]);
                  return h;
                }
                function xo(e, t) {
                  var n = -1,
                    o = e.length;
                  for (t || (t = r(o)); ++n < o; ) t[n] = e[n];
                  return t;
                }
                function Po(e, t, n, r) {
                  var i = !n;
                  n || (n = {});
                  for (var a = -1, u = t.length; ++a < u; ) {
                    var s = t[a],
                      c = r ? r(n[s], e[s], s, n, e) : o;
                    c === o && (c = e[s]), i ? rr(n, s, c) : $n(n, s, c);
                  }
                  return n;
                }
                function Oo(e, t) {
                  return function (n, r) {
                    var o = Fa(n) ? Et : tr,
                      i = t ? t() : {};
                    return o(n, e, ai(r, 2), i);
                  };
                }
                function To(e) {
                  return Jr(function (t, n) {
                    var r = -1,
                      i = n.length,
                      a = i > 1 ? n[i - 1] : o,
                      u = i > 2 ? n[2] : o;
                    for (
                      a = e.length > 3 && "function" == typeof a ? (i--, a) : o,
                        u &&
                          yi(n[0], n[1], u) &&
                          ((a = i < 3 ? o : a), (i = 1)),
                        t = Ee(t);
                      ++r < i;

                    ) {
                      var s = n[r];
                      s && e(t, s, r, a);
                    }
                    return t;
                  });
                }
                function Mo(e, t) {
                  return function (n, r) {
                    if (null == n) return n;
                    if (!Va(n)) return e(n, r);
                    for (
                      var o = n.length, i = t ? o : -1, a = Ee(n);
                      (t ? i-- : ++i < o) && !1 !== r(a[i], i, a);

                    );
                    return n;
                  };
                }
                function Do(e) {
                  return function (t, n, r) {
                    for (var o = -1, i = Ee(t), a = r(t), u = a.length; u--; ) {
                      var s = a[e ? u : ++o];
                      if (!1 === n(i[s], s, i)) break;
                    }
                    return t;
                  };
                }
                function jo(e) {
                  return function (t) {
                    var n = rn((t = yu(t))) ? fn(t) : o,
                      r = n ? n[0] : t.charAt(0),
                      i = n ? bo(n, 1).join("") : t.slice(1);
                    return r[e]() + i;
                  };
                }
                function Ro(e) {
                  return function (t) {
                    return jt(Zu(qu(t).replace(Ze, "")), e, "");
                  };
                }
                function Co(e) {
                  return function () {
                    var t = arguments;
                    switch (t.length) {
                      case 0:
                        return new e();
                      case 1:
                        return new e(t[0]);
                      case 2:
                        return new e(t[0], t[1]);
                      case 3:
                        return new e(t[0], t[1], t[2]);
                      case 4:
                        return new e(t[0], t[1], t[2], t[3]);
                      case 5:
                        return new e(t[0], t[1], t[2], t[3], t[4]);
                      case 6:
                        return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                      case 7:
                        return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
                    }
                    var n = Gn(e.prototype),
                      r = e.apply(n, t);
                    return $a(r) ? r : n;
                  };
                }
                function Lo(e) {
                  return function (t, n, r) {
                    var i = Ee(t);
                    if (!Va(t)) {
                      var a = ai(n, 3);
                      (t = Tu(t)),
                        (n = function (e) {
                          return a(i[e], e, i);
                        });
                    }
                    var u = e(t, n, r);
                    return u > -1 ? i[a ? t[u] : u] : o;
                  };
                }
                function Bo(e) {
                  return ei(function (t) {
                    var n = t.length,
                      r = n,
                      a = zn.prototype.thru;
                    for (e && t.reverse(); r--; ) {
                      var u = t[r];
                      if ("function" != typeof u) throw new xe(i);
                      if (a && !s && "wrapper" == oi(u)) var s = new zn([], !0);
                    }
                    for (r = s ? r : n; ++r < n; ) {
                      var c = oi((u = t[r])),
                        l = "wrapper" == c ? ri(u) : o;
                      s =
                        l &&
                        bi(l[0]) &&
                        424 == l[1] &&
                        !l[4].length &&
                        1 == l[9]
                          ? s[oi(l[0])].apply(s, l[3])
                          : 1 == u.length && bi(u)
                          ? s[c]()
                          : s.thru(u);
                    }
                    return function () {
                      var e = arguments,
                        r = e[0];
                      if (s && 1 == e.length && Fa(r))
                        return s.plant(r).value();
                      for (
                        var o = 0, i = n ? t[o].apply(this, e) : r;
                        ++o < n;

                      )
                        i = t[o].call(this, i);
                      return i;
                    };
                  });
                }
                function Uo(e, t, n, i, a, u, s, l, f, h) {
                  var d = t & c,
                    p = 1 & t,
                    g = 2 & t,
                    v = 24 & t,
                    y = 512 & t,
                    _ = g ? o : Co(e);
                  return function c() {
                    for (var b = arguments.length, m = r(b), w = b; w--; )
                      m[w] = arguments[w];
                    if (v)
                      var k = ii(c),
                        I = (function (e, t) {
                          for (var n = e.length, r = 0; n--; )
                            e[n] === t && ++r;
                          return r;
                        })(m, k);
                    if (
                      (i && (m = So(m, i, a, v)),
                      u && (m = Ao(m, u, s, v)),
                      (b -= I),
                      v && b < h)
                    ) {
                      var E = un(m, k);
                      return Vo(e, t, Uo, c.placeholder, n, m, E, l, f, h - b);
                    }
                    var S = p ? n : this,
                      A = g ? S[e] : e;
                    return (
                      (b = m.length),
                      l
                        ? (m = (function (e, t) {
                            for (
                              var n = e.length, r = yn(t.length, n), i = xo(e);
                              r--;

                            ) {
                              var a = t[r];
                              e[r] = vi(a, n) ? i[a] : o;
                            }
                            return e;
                          })(m, l))
                        : y && b > 1 && m.reverse(),
                      d && f < b && (m.length = f),
                      this &&
                        this !== ft &&
                        this instanceof c &&
                        (A = _ || Co(A)),
                      A.apply(S, m)
                    );
                  };
                }
                function Go(e, t) {
                  return function (n, r) {
                    return (function (e, t, n, r) {
                      return (
                        _r(e, function (e, o, i) {
                          t(r, n(e), o, i);
                        }),
                        r
                      );
                    })(n, e, t(r), {});
                  };
                }
                function No(e, t) {
                  return function (n, r) {
                    var i;
                    if (n === o && r === o) return t;
                    if ((n !== o && (i = n), r !== o)) {
                      if (i === o) return r;
                      "string" == typeof n || "string" == typeof r
                        ? ((n = ao(n)), (r = ao(r)))
                        : ((n = io(n)), (r = io(r))),
                        (i = e(n, r));
                    }
                    return i;
                  };
                }
                function zo(e) {
                  return ei(function (t) {
                    return (
                      (t = Mt(t, Xt(ai()))),
                      Jr(function (n) {
                        var r = this;
                        return e(t, function (e) {
                          return It(e, r, n);
                        });
                      })
                    );
                  });
                }
                function qo(e, t) {
                  var n = (t = t === o ? " " : ao(t)).length;
                  if (n < 2) return n ? Qr(t, e) : t;
                  var r = Qr(t, ht(e / ln(t)));
                  return rn(t) ? bo(fn(r), 0, e).join("") : r.slice(0, e);
                }
                function Fo(e) {
                  return function (t, n, i) {
                    return (
                      i && "number" != typeof i && yi(t, n, i) && (n = i = o),
                      (t = hu(t)),
                      n === o ? ((n = t), (t = 0)) : (n = hu(n)),
                      (function (e, t, n, o) {
                        for (
                          var i = -1,
                            a = vn(ht((t - e) / (n || 1)), 0),
                            u = r(a);
                          a--;

                        )
                          (u[o ? a : ++i] = e), (e += n);
                        return u;
                      })(t, n, (i = i === o ? (t < n ? 1 : -1) : hu(i)), e)
                    );
                  };
                }
                function Wo(e) {
                  return function (t, n) {
                    return (
                      ("string" == typeof t && "string" == typeof n) ||
                        ((t = gu(t)), (n = gu(n))),
                      e(t, n)
                    );
                  };
                }
                function Vo(e, t, n, r, i, a, u, c, l, f) {
                  var h = 8 & t;
                  (t |= h ? s : 64), 4 & (t &= ~(h ? 64 : s)) || (t &= -4);
                  var d = [
                      e,
                      t,
                      i,
                      h ? a : o,
                      h ? u : o,
                      h ? o : a,
                      h ? o : u,
                      c,
                      l,
                      f,
                    ],
                    p = n.apply(o, d);
                  return bi(e) && xi(p, d), (p.placeholder = r), Ti(p, e, t);
                }
                function Qo(e) {
                  var t = Ie[e];
                  return function (e, n) {
                    if (
                      ((e = gu(e)),
                      (n = null == n ? 0 : yn(du(n), 292)) && Lt(e))
                    ) {
                      var r = (yu(e) + "e").split("e");
                      return +(
                        (r = (yu(t(r[0] + "e" + (+r[1] + n))) + "e").split(
                          "e"
                        ))[0] +
                        "e" +
                        (+r[1] - n)
                      );
                    }
                    return t(e);
                  };
                }
                var Jo =
                  Sn && 1 / sn(new Sn([, -0]))[1] == l
                    ? function (e) {
                        return new Sn(e);
                      }
                    : us;
                function Ho(e) {
                  return function (t) {
                    var n = hi(t);
                    return n == k
                      ? on(t)
                      : n == x
                      ? cn(t)
                      : (function (e, t) {
                          return Mt(t, function (t) {
                            return [t, e[t]];
                          });
                        })(t, e(t));
                  };
                }
                function Xo(e, t, n, a, l, f, h, d) {
                  var p = 2 & t;
                  if (!p && "function" != typeof e) throw new xe(i);
                  var g = a ? a.length : 0;
                  if (
                    (g || ((t &= -97), (a = l = o)),
                    (h = h === o ? h : vn(du(h), 0)),
                    (d = d === o ? d : du(d)),
                    (g -= l ? l.length : 0),
                    64 & t)
                  ) {
                    var v = a,
                      y = l;
                    a = l = o;
                  }
                  var _ = p ? o : ri(e),
                    b = [e, t, n, a, l, v, y, f, h, d];
                  if (
                    (_ &&
                      (function (e, t) {
                        var n = e[1],
                          r = t[1],
                          o = n | r,
                          i = o < 131,
                          a =
                            (r == c && 8 == n) ||
                            (r == c && 256 == n && e[7].length <= t[8]) ||
                            (384 == r && t[7].length <= t[8] && 8 == n);
                        if (!i && !a) return e;
                        1 & r && ((e[2] = t[2]), (o |= 1 & n ? 0 : 4));
                        var s = t[3];
                        if (s) {
                          var l = e[3];
                          (e[3] = l ? So(l, s, t[4]) : s),
                            (e[4] = l ? un(e[3], u) : t[4]);
                        }
                        (s = t[5]) &&
                          ((l = e[5]),
                          (e[5] = l ? Ao(l, s, t[6]) : s),
                          (e[6] = l ? un(e[5], u) : t[6])),
                          (s = t[7]) && (e[7] = s),
                          r & c &&
                            (e[8] = null == e[8] ? t[8] : yn(e[8], t[8])),
                          null == e[9] && (e[9] = t[9]),
                          (e[0] = t[0]),
                          (e[1] = o);
                      })(b, _),
                    (e = b[0]),
                    (t = b[1]),
                    (n = b[2]),
                    (a = b[3]),
                    (l = b[4]),
                    !(d = b[9] =
                      b[9] === o ? (p ? 0 : e.length) : vn(b[9] - g, 0)) &&
                      24 & t &&
                      (t &= -25),
                    t && 1 != t)
                  )
                    m =
                      8 == t || 16 == t
                        ? (function (e, t, n) {
                            var i = Co(e);
                            return function a() {
                              for (
                                var u = arguments.length,
                                  s = r(u),
                                  c = u,
                                  l = ii(a);
                                c--;

                              )
                                s[c] = arguments[c];
                              var f =
                                u < 3 && s[0] !== l && s[u - 1] !== l
                                  ? []
                                  : un(s, l);
                              return (u -= f.length) < n
                                ? Vo(
                                    e,
                                    t,
                                    Uo,
                                    a.placeholder,
                                    o,
                                    s,
                                    f,
                                    o,
                                    o,
                                    n - u
                                  )
                                : It(
                                    this && this !== ft && this instanceof a
                                      ? i
                                      : e,
                                    this,
                                    s
                                  );
                            };
                          })(e, t, d)
                        : (t != s && 33 != t) || l.length
                        ? Uo.apply(o, b)
                        : (function (e, t, n, o) {
                            var i = 1 & t,
                              a = Co(e);
                            return function t() {
                              for (
                                var u = -1,
                                  s = arguments.length,
                                  c = -1,
                                  l = o.length,
                                  f = r(l + s),
                                  h =
                                    this && this !== ft && this instanceof t
                                      ? a
                                      : e;
                                ++c < l;

                              )
                                f[c] = o[c];
                              for (; s--; ) f[c++] = arguments[++u];
                              return It(h, i ? n : this, f);
                            };
                          })(e, t, n, a);
                  else
                    var m = (function (e, t, n) {
                      var r = 1 & t,
                        o = Co(e);
                      return function t() {
                        return (
                          this && this !== ft && this instanceof t ? o : e
                        ).apply(r ? n : this, arguments);
                      };
                    })(e, t, n);
                  return Ti((_ ? Kr : xi)(m, b), e, t);
                }
                function Zo(e, t, n, r) {
                  return e === o || (Ga(e, Te[n]) && !je.call(r, n)) ? t : e;
                }
                function Ko(e, t, n, r, i, a) {
                  return (
                    $a(e) &&
                      $a(t) &&
                      (a.set(t, e), Gr(e, t, o, Ko, a), a.delete(t)),
                    e
                  );
                }
                function Yo(e) {
                  return ru(e) ? o : e;
                }
                function $o(e, t, n, r, i, a) {
                  var u = 1 & n,
                    s = e.length,
                    c = t.length;
                  if (s != c && !(u && c > s)) return !1;
                  var l = a.get(e),
                    f = a.get(t);
                  if (l && f) return l == t && f == e;
                  var h = -1,
                    d = !0,
                    p = 2 & n ? new Qn() : o;
                  for (a.set(e, t), a.set(t, e); ++h < s; ) {
                    var g = e[h],
                      v = t[h];
                    if (r)
                      var y = u ? r(v, g, h, t, e, a) : r(g, v, h, e, t, a);
                    if (y !== o) {
                      if (y) continue;
                      d = !1;
                      break;
                    }
                    if (p) {
                      if (
                        !Ct(t, function (e, t) {
                          if (!Kt(p, t) && (g === e || i(g, e, n, r, a)))
                            return p.push(t);
                        })
                      ) {
                        d = !1;
                        break;
                      }
                    } else if (g !== v && !i(g, v, n, r, a)) {
                      d = !1;
                      break;
                    }
                  }
                  return a.delete(e), a.delete(t), d;
                }
                function ei(e) {
                  return Oi(Ei(e, o, Wi), e + "");
                }
                function ti(e) {
                  return kr(e, Tu, li);
                }
                function ni(e) {
                  return kr(e, Mu, fi);
                }
                var ri = Pn
                  ? function (e) {
                      return Pn.get(e);
                    }
                  : us;
                function oi(e) {
                  for (
                    var t = e.name + "",
                      n = On[t],
                      r = je.call(On, t) ? n.length : 0;
                    r--;

                  ) {
                    var o = n[r],
                      i = o.func;
                    if (null == i || i == e) return o.name;
                  }
                  return t;
                }
                function ii(e) {
                  return (je.call(Un, "placeholder") ? Un : e).placeholder;
                }
                function ai() {
                  var e = Un.iteratee || rs;
                  return (
                    (e = e === rs ? jr : e),
                    arguments.length ? e(arguments[0], arguments[1]) : e
                  );
                }
                function ui(e, t) {
                  var n,
                    r,
                    o = e.__data__;
                  return (
                    "string" == (r = typeof (n = t)) ||
                    "number" == r ||
                    "symbol" == r ||
                    "boolean" == r
                      ? "__proto__" !== n
                      : null === n
                  )
                    ? o["string" == typeof t ? "string" : "hash"]
                    : o.map;
                }
                function si(e) {
                  for (var t = Tu(e), n = t.length; n--; ) {
                    var r = t[n],
                      o = e[r];
                    t[n] = [r, o, ki(o)];
                  }
                  return t;
                }
                function ci(e, t) {
                  var n = (function (e, t) {
                    return null == e ? o : e[t];
                  })(e, t);
                  return Dr(n) ? n : o;
                }
                var li = gt
                    ? function (e) {
                        return null == e
                          ? []
                          : ((e = Ee(e)),
                            Pt(gt(e), function (t) {
                              return Qe.call(e, t);
                            }));
                      }
                    : ps,
                  fi = gt
                    ? function (e) {
                        for (var t = []; e; ) Dt(t, li(e)), (e = We(e));
                        return t;
                      }
                    : ps,
                  hi = Ir;
                function di(e, t, n) {
                  for (
                    var r = -1, o = (t = yo(t, e)).length, i = !1;
                    ++r < o;

                  ) {
                    var a = Li(t[r]);
                    if (!(i = null != e && n(e, a))) break;
                    e = e[a];
                  }
                  return i || ++r != o
                    ? i
                    : !!(o = null == e ? 0 : e.length) &&
                        Ya(o) &&
                        vi(a, o) &&
                        (Fa(e) || qa(e));
                }
                function pi(e) {
                  return "function" != typeof e.constructor || wi(e)
                    ? {}
                    : Gn(We(e));
                }
                function gi(e) {
                  return Fa(e) || qa(e) || !!(He && e && e[He]);
                }
                function vi(e, t) {
                  var n = typeof e;
                  return (
                    !!(t = null == t ? f : t) &&
                    ("number" == n || ("symbol" != n && ye.test(e))) &&
                    e > -1 &&
                    e % 1 == 0 &&
                    e < t
                  );
                }
                function yi(e, t, n) {
                  if (!$a(n)) return !1;
                  var r = typeof t;
                  return (
                    !!("number" == r
                      ? Va(n) && vi(t, n.length)
                      : "string" == r && t in n) && Ga(n[t], e)
                  );
                }
                function _i(e, t) {
                  if (Fa(e)) return !1;
                  var n = typeof e;
                  return (
                    !(
                      "number" != n &&
                      "symbol" != n &&
                      "boolean" != n &&
                      null != e &&
                      !uu(e)
                    ) ||
                    $.test(e) ||
                    !Y.test(e) ||
                    (null != t && e in Ee(t))
                  );
                }
                function bi(e) {
                  var t = oi(e),
                    n = Un[t];
                  if ("function" != typeof n || !(t in qn.prototype)) return !1;
                  if (e === n) return !0;
                  var r = ri(n);
                  return !!r && e === r[0];
                }
                ((kn && hi(new kn(new ArrayBuffer(1))) != D) ||
                  (In && hi(new In()) != k) ||
                  (En && hi(En.resolve()) != S) ||
                  (Sn && hi(new Sn()) != x) ||
                  (An && hi(new An()) != T)) &&
                  (hi = function (e) {
                    var t = Ir(e),
                      n = t == E ? e.constructor : o,
                      r = n ? Bi(n) : "";
                    if (r)
                      switch (r) {
                        case Tn:
                          return D;
                        case Mn:
                          return k;
                        case Dn:
                          return S;
                        case jn:
                          return x;
                        case Rn:
                          return T;
                      }
                    return t;
                  });
                var mi = Me ? Za : gs;
                function wi(e) {
                  var t = e && e.constructor;
                  return e === (("function" == typeof t && t.prototype) || Te);
                }
                function ki(e) {
                  return e == e && !$a(e);
                }
                function Ii(e, t) {
                  return function (n) {
                    return null != n && n[e] === t && (t !== o || e in Ee(n));
                  };
                }
                function Ei(e, t, n) {
                  return (
                    (t = vn(t === o ? e.length - 1 : t, 0)),
                    function () {
                      for (
                        var o = arguments,
                          i = -1,
                          a = vn(o.length - t, 0),
                          u = r(a);
                        ++i < a;

                      )
                        u[i] = o[t + i];
                      i = -1;
                      for (var s = r(t + 1); ++i < t; ) s[i] = o[i];
                      return (s[t] = n(u)), It(e, this, s);
                    }
                  );
                }
                function Si(e, t) {
                  return t.length < 2 ? e : wr(e, eo(t, 0, -1));
                }
                function Ai(e, t) {
                  if (
                    ("constructor" !== t || "function" != typeof e[t]) &&
                    "__proto__" != t
                  )
                    return e[t];
                }
                var xi = Mi(Kr),
                  Pi =
                    lt ||
                    function (e, t) {
                      return ft.setTimeout(e, t);
                    },
                  Oi = Mi(Yr);
                function Ti(e, t, n) {
                  var r = t + "";
                  return Oi(
                    e,
                    (function (e, t) {
                      var n = t.length;
                      if (!n) return e;
                      var r = n - 1;
                      return (
                        (t[r] = (n > 1 ? "& " : "") + t[r]),
                        (t = t.join(n > 2 ? ", " : " ")),
                        e.replace(ie, "{\n/* [wrapped with " + t + "] */\n")
                      );
                    })(
                      r,
                      (function (e, t) {
                        return (
                          St(p, function (n) {
                            var r = "_." + n[0];
                            t & n[1] && !Ot(e, r) && e.push(r);
                          }),
                          e.sort()
                        );
                      })(
                        (function (e) {
                          var t = e.match(ae);
                          return t ? t[1].split(ue) : [];
                        })(r),
                        n
                      )
                    )
                  );
                }
                function Mi(e) {
                  var t = 0,
                    n = 0;
                  return function () {
                    var r = _n(),
                      i = 16 - (r - n);
                    if (((n = r), i > 0)) {
                      if (++t >= 800) return arguments[0];
                    } else t = 0;
                    return e.apply(o, arguments);
                  };
                }
                function Di(e, t) {
                  var n = -1,
                    r = e.length,
                    i = r - 1;
                  for (t = t === o ? r : t; ++n < t; ) {
                    var a = Vr(n, i),
                      u = e[a];
                    (e[a] = e[n]), (e[n] = u);
                  }
                  return (e.length = t), e;
                }
                var ji,
                  Ri,
                  Ci =
                    ((ji = ja(
                      function (e) {
                        var t = [];
                        return (
                          46 === e.charCodeAt(0) && t.push(""),
                          e.replace(ee, function (e, n, r, o) {
                            t.push(r ? o.replace(le, "$1") : n || e);
                          }),
                          t
                        );
                      },
                      function (e) {
                        return 500 === Ri.size && Ri.clear(), e;
                      }
                    )),
                    (Ri = ji.cache),
                    ji);
                function Li(e) {
                  if ("string" == typeof e || uu(e)) return e;
                  var t = e + "";
                  return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
                }
                function Bi(e) {
                  if (null != e) {
                    try {
                      return De.call(e);
                    } catch (e) {}
                    try {
                      return e + "";
                    } catch (e) {}
                  }
                  return "";
                }
                function Ui(e) {
                  if (e instanceof qn) return e.clone();
                  var t = new zn(e.__wrapped__, e.__chain__);
                  return (
                    (t.__actions__ = xo(e.__actions__)),
                    (t.__index__ = e.__index__),
                    (t.__values__ = e.__values__),
                    t
                  );
                }
                var Gi = Jr(function (e, t) {
                    return Qa(e) ? cr(e, gr(t, 1, Qa, !0)) : [];
                  }),
                  Ni = Jr(function (e, t) {
                    var n = Xi(t);
                    return (
                      Qa(n) && (n = o),
                      Qa(e) ? cr(e, gr(t, 1, Qa, !0), ai(n, 2)) : []
                    );
                  }),
                  zi = Jr(function (e, t) {
                    var n = Xi(t);
                    return (
                      Qa(n) && (n = o),
                      Qa(e) ? cr(e, gr(t, 1, Qa, !0), o, n) : []
                    );
                  });
                function qi(e, t, n) {
                  var r = null == e ? 0 : e.length;
                  if (!r) return -1;
                  var o = null == n ? 0 : du(n);
                  return o < 0 && (o = vn(r + o, 0)), Ut(e, ai(t, 3), o);
                }
                function Fi(e, t, n) {
                  var r = null == e ? 0 : e.length;
                  if (!r) return -1;
                  var i = r - 1;
                  return (
                    n !== o &&
                      ((i = du(n)), (i = n < 0 ? vn(r + i, 0) : yn(i, r - 1))),
                    Ut(e, ai(t, 3), i, !0)
                  );
                }
                function Wi(e) {
                  return null != e && e.length ? gr(e, 1) : [];
                }
                function Vi(e) {
                  return e && e.length ? e[0] : o;
                }
                var Qi = Jr(function (e) {
                    var t = Mt(e, go);
                    return t.length && t[0] === e[0] ? xr(t) : [];
                  }),
                  Ji = Jr(function (e) {
                    var t = Xi(e),
                      n = Mt(e, go);
                    return (
                      t === Xi(n) ? (t = o) : n.pop(),
                      n.length && n[0] === e[0] ? xr(n, ai(t, 2)) : []
                    );
                  }),
                  Hi = Jr(function (e) {
                    var t = Xi(e),
                      n = Mt(e, go);
                    return (
                      (t = "function" == typeof t ? t : o) && n.pop(),
                      n.length && n[0] === e[0] ? xr(n, o, t) : []
                    );
                  });
                function Xi(e) {
                  var t = null == e ? 0 : e.length;
                  return t ? e[t - 1] : o;
                }
                var Zi = Jr(Ki);
                function Ki(e, t) {
                  return e && e.length && t && t.length ? Fr(e, t) : e;
                }
                var Yi = ei(function (e, t) {
                  var n = null == e ? 0 : e.length,
                    r = or(e, t);
                  return (
                    Wr(
                      e,
                      Mt(t, function (e) {
                        return vi(e, n) ? +e : e;
                      }).sort(Eo)
                    ),
                    r
                  );
                });
                function $i(e) {
                  return null == e ? e : wn.call(e);
                }
                var ea = Jr(function (e) {
                    return uo(gr(e, 1, Qa, !0));
                  }),
                  ta = Jr(function (e) {
                    var t = Xi(e);
                    return Qa(t) && (t = o), uo(gr(e, 1, Qa, !0), ai(t, 2));
                  }),
                  na = Jr(function (e) {
                    var t = Xi(e);
                    return (
                      (t = "function" == typeof t ? t : o),
                      uo(gr(e, 1, Qa, !0), o, t)
                    );
                  });
                function ra(e) {
                  if (!e || !e.length) return [];
                  var t = 0;
                  return (
                    (e = Pt(e, function (e) {
                      if (Qa(e)) return (t = vn(e.length, t)), !0;
                    })),
                    Jt(t, function (t) {
                      return Mt(e, Ft(t));
                    })
                  );
                }
                function oa(e, t) {
                  if (!e || !e.length) return [];
                  var n = ra(e);
                  return null == t
                    ? n
                    : Mt(n, function (e) {
                        return It(t, o, e);
                      });
                }
                var ia = Jr(function (e, t) {
                    return Qa(e) ? cr(e, t) : [];
                  }),
                  aa = Jr(function (e) {
                    return ho(Pt(e, Qa));
                  }),
                  ua = Jr(function (e) {
                    var t = Xi(e);
                    return Qa(t) && (t = o), ho(Pt(e, Qa), ai(t, 2));
                  }),
                  sa = Jr(function (e) {
                    var t = Xi(e);
                    return (
                      (t = "function" == typeof t ? t : o), ho(Pt(e, Qa), o, t)
                    );
                  }),
                  ca = Jr(ra),
                  la = Jr(function (e) {
                    var t = e.length,
                      n = t > 1 ? e[t - 1] : o;
                    return (
                      (n = "function" == typeof n ? (e.pop(), n) : o), oa(e, n)
                    );
                  });
                function fa(e) {
                  var t = Un(e);
                  return (t.__chain__ = !0), t;
                }
                function ha(e, t) {
                  return t(e);
                }
                var da = ei(function (e) {
                    var t = e.length,
                      n = t ? e[0] : 0,
                      r = this.__wrapped__,
                      i = function (t) {
                        return or(t, e);
                      };
                    return !(t > 1 || this.__actions__.length) &&
                      r instanceof qn &&
                      vi(n)
                      ? ((r = r.slice(n, +n + (t ? 1 : 0))).__actions__.push({
                          func: ha,
                          args: [i],
                          thisArg: o,
                        }),
                        new zn(r, this.__chain__).thru(function (e) {
                          return t && !e.length && e.push(o), e;
                        }))
                      : this.thru(i);
                  }),
                  pa = Oo(function (e, t, n) {
                    je.call(e, n) ? ++e[n] : rr(e, n, 1);
                  }),
                  ga = Lo(qi),
                  va = Lo(Fi);
                function ya(e, t) {
                  return (Fa(e) ? St : lr)(e, ai(t, 3));
                }
                function _a(e, t) {
                  return (Fa(e) ? At : fr)(e, ai(t, 3));
                }
                var ba = Oo(function (e, t, n) {
                    je.call(e, n) ? e[n].push(t) : rr(e, n, [t]);
                  }),
                  ma = Jr(function (e, t, n) {
                    var o = -1,
                      i = "function" == typeof t,
                      a = Va(e) ? r(e.length) : [];
                    return (
                      lr(e, function (e) {
                        a[++o] = i ? It(t, e, n) : Pr(e, t, n);
                      }),
                      a
                    );
                  }),
                  wa = Oo(function (e, t, n) {
                    rr(e, n, t);
                  });
                function ka(e, t) {
                  return (Fa(e) ? Mt : Lr)(e, ai(t, 3));
                }
                var Ia = Oo(
                    function (e, t, n) {
                      e[n ? 0 : 1].push(t);
                    },
                    function () {
                      return [[], []];
                    }
                  ),
                  Ea = Jr(function (e, t) {
                    if (null == e) return [];
                    var n = t.length;
                    return (
                      n > 1 && yi(e, t[0], t[1])
                        ? (t = [])
                        : n > 2 && yi(t[0], t[1], t[2]) && (t = [t[0]]),
                      zr(e, gr(t, 1), [])
                    );
                  }),
                  Sa =
                    ct ||
                    function () {
                      return ft.Date.now();
                    };
                function Aa(e, t, n) {
                  return (
                    (t = n ? o : t),
                    (t = e && null == t ? e.length : t),
                    Xo(e, c, o, o, o, o, t)
                  );
                }
                function xa(e, t) {
                  var n;
                  if ("function" != typeof t) throw new xe(i);
                  return (
                    (e = du(e)),
                    function () {
                      return (
                        --e > 0 && (n = t.apply(this, arguments)),
                        e <= 1 && (t = o),
                        n
                      );
                    }
                  );
                }
                var Pa = Jr(function (e, t, n) {
                    var r = 1;
                    if (n.length) {
                      var o = un(n, ii(Pa));
                      r |= s;
                    }
                    return Xo(e, r, t, n, o);
                  }),
                  Oa = Jr(function (e, t, n) {
                    var r = 3;
                    if (n.length) {
                      var o = un(n, ii(Oa));
                      r |= s;
                    }
                    return Xo(t, r, e, n, o);
                  });
                function Ta(e, t, n) {
                  var r,
                    a,
                    u,
                    s,
                    c,
                    l,
                    f = 0,
                    h = !1,
                    d = !1,
                    p = !0;
                  if ("function" != typeof e) throw new xe(i);
                  function g(t) {
                    var n = r,
                      i = a;
                    return (r = a = o), (f = t), (s = e.apply(i, n));
                  }
                  function v(e) {
                    var n = e - l;
                    return l === o || n >= t || n < 0 || (d && e - f >= u);
                  }
                  function y() {
                    var e = Sa();
                    if (v(e)) return _(e);
                    c = Pi(
                      y,
                      (function (e) {
                        var n = t - (e - l);
                        return d ? yn(n, u - (e - f)) : n;
                      })(e)
                    );
                  }
                  function _(e) {
                    return (c = o), p && r ? g(e) : ((r = a = o), s);
                  }
                  function b() {
                    var e = Sa(),
                      n = v(e);
                    if (((r = arguments), (a = this), (l = e), n)) {
                      if (c === o)
                        return (function (e) {
                          return (f = e), (c = Pi(y, t)), h ? g(e) : s;
                        })(l);
                      if (d) return mo(c), (c = Pi(y, t)), g(l);
                    }
                    return c === o && (c = Pi(y, t)), s;
                  }
                  return (
                    (t = gu(t) || 0),
                    $a(n) &&
                      ((h = !!n.leading),
                      (u = (d = "maxWait" in n)
                        ? vn(gu(n.maxWait) || 0, t)
                        : u),
                      (p = "trailing" in n ? !!n.trailing : p)),
                    (b.cancel = function () {
                      c !== o && mo(c), (f = 0), (r = l = a = c = o);
                    }),
                    (b.flush = function () {
                      return c === o ? s : _(Sa());
                    }),
                    b
                  );
                }
                var Ma = Jr(function (e, t) {
                    return sr(e, 1, t);
                  }),
                  Da = Jr(function (e, t, n) {
                    return sr(e, gu(t) || 0, n);
                  });
                function ja(e, t) {
                  if (
                    "function" != typeof e ||
                    (null != t && "function" != typeof t)
                  )
                    throw new xe(i);
                  var n = function () {
                    var r = arguments,
                      o = t ? t.apply(this, r) : r[0],
                      i = n.cache;
                    if (i.has(o)) return i.get(o);
                    var a = e.apply(this, r);
                    return (n.cache = i.set(o, a) || i), a;
                  };
                  return (n.cache = new (ja.Cache || Vn)()), n;
                }
                function Ra(e) {
                  if ("function" != typeof e) throw new xe(i);
                  return function () {
                    var t = arguments;
                    switch (t.length) {
                      case 0:
                        return !e.call(this);
                      case 1:
                        return !e.call(this, t[0]);
                      case 2:
                        return !e.call(this, t[0], t[1]);
                      case 3:
                        return !e.call(this, t[0], t[1], t[2]);
                    }
                    return !e.apply(this, t);
                  };
                }
                ja.Cache = Vn;
                var Ca = _o(function (e, t) {
                    var n = (t =
                      1 == t.length && Fa(t[0])
                        ? Mt(t[0], Xt(ai()))
                        : Mt(gr(t, 1), Xt(ai()))).length;
                    return Jr(function (r) {
                      for (var o = -1, i = yn(r.length, n); ++o < i; )
                        r[o] = t[o].call(this, r[o]);
                      return It(e, this, r);
                    });
                  }),
                  La = Jr(function (e, t) {
                    var n = un(t, ii(La));
                    return Xo(e, s, o, t, n);
                  }),
                  Ba = Jr(function (e, t) {
                    var n = un(t, ii(Ba));
                    return Xo(e, 64, o, t, n);
                  }),
                  Ua = ei(function (e, t) {
                    return Xo(e, 256, o, o, o, t);
                  });
                function Ga(e, t) {
                  return e === t || (e != e && t != t);
                }
                var Na = Wo(Er),
                  za = Wo(function (e, t) {
                    return e >= t;
                  }),
                  qa = Or(
                    (function () {
                      return arguments;
                    })()
                  )
                    ? Or
                    : function (e) {
                        return (
                          eu(e) && je.call(e, "callee") && !Qe.call(e, "callee")
                        );
                      },
                  Fa = r.isArray,
                  Wa = yt
                    ? Xt(yt)
                    : function (e) {
                        return eu(e) && Ir(e) == M;
                      };
                function Va(e) {
                  return null != e && Ya(e.length) && !Za(e);
                }
                function Qa(e) {
                  return eu(e) && Va(e);
                }
                var Ja = vt || gs,
                  Ha = _t
                    ? Xt(_t)
                    : function (e) {
                        return eu(e) && Ir(e) == _;
                      };
                function Xa(e) {
                  if (!eu(e)) return !1;
                  var t = Ir(e);
                  return (
                    t == b ||
                    "[object DOMException]" == t ||
                    ("string" == typeof e.message &&
                      "string" == typeof e.name &&
                      !ru(e))
                  );
                }
                function Za(e) {
                  if (!$a(e)) return !1;
                  var t = Ir(e);
                  return (
                    t == m ||
                    t == w ||
                    "[object AsyncFunction]" == t ||
                    "[object Proxy]" == t
                  );
                }
                function Ka(e) {
                  return "number" == typeof e && e == du(e);
                }
                function Ya(e) {
                  return "number" == typeof e && e > -1 && e % 1 == 0 && e <= f;
                }
                function $a(e) {
                  var t = typeof e;
                  return null != e && ("object" == t || "function" == t);
                }
                function eu(e) {
                  return null != e && "object" == typeof e;
                }
                var tu = bt
                  ? Xt(bt)
                  : function (e) {
                      return eu(e) && hi(e) == k;
                    };
                function nu(e) {
                  return "number" == typeof e || (eu(e) && Ir(e) == I);
                }
                function ru(e) {
                  if (!eu(e) || Ir(e) != E) return !1;
                  var t = We(e);
                  if (null === t) return !0;
                  var n = je.call(t, "constructor") && t.constructor;
                  return (
                    "function" == typeof n && n instanceof n && De.call(n) == Be
                  );
                }
                var ou = mt
                    ? Xt(mt)
                    : function (e) {
                        return eu(e) && Ir(e) == A;
                      },
                  iu = wt
                    ? Xt(wt)
                    : function (e) {
                        return eu(e) && hi(e) == x;
                      };
                function au(e) {
                  return (
                    "string" == typeof e || (!Fa(e) && eu(e) && Ir(e) == P)
                  );
                }
                function uu(e) {
                  return "symbol" == typeof e || (eu(e) && Ir(e) == O);
                }
                var su = kt
                    ? Xt(kt)
                    : function (e) {
                        return eu(e) && Ya(e.length) && !!ot[Ir(e)];
                      },
                  cu = Wo(Cr),
                  lu = Wo(function (e, t) {
                    return e <= t;
                  });
                function fu(e) {
                  if (!e) return [];
                  if (Va(e)) return au(e) ? fn(e) : xo(e);
                  if (Xe && e[Xe])
                    return (function (e) {
                      for (var t, n = []; !(t = e.next()).done; )
                        n.push(t.value);
                      return n;
                    })(e[Xe]());
                  var t = hi(e);
                  return (t == k ? on : t == x ? sn : Gu)(e);
                }
                function hu(e) {
                  return e
                    ? (e = gu(e)) === l || e === -1 / 0
                      ? 17976931348623157e292 * (e < 0 ? -1 : 1)
                      : e == e
                      ? e
                      : 0
                    : 0 === e
                    ? e
                    : 0;
                }
                function du(e) {
                  var t = hu(e),
                    n = t % 1;
                  return t == t ? (n ? t - n : t) : 0;
                }
                function pu(e) {
                  return e ? ir(du(e), 0, d) : 0;
                }
                function gu(e) {
                  if ("number" == typeof e) return e;
                  if (uu(e)) return h;
                  if ($a(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = $a(t) ? t + "" : t;
                  }
                  if ("string" != typeof e) return 0 === e ? e : +e;
                  e = Ht(e);
                  var n = pe.test(e);
                  return n || ve.test(e)
                    ? st(e.slice(2), n ? 2 : 8)
                    : de.test(e)
                    ? h
                    : +e;
                }
                function vu(e) {
                  return Po(e, Mu(e));
                }
                function yu(e) {
                  return null == e ? "" : ao(e);
                }
                var _u = To(function (e, t) {
                    if (wi(t) || Va(t)) Po(t, Tu(t), e);
                    else for (var n in t) je.call(t, n) && $n(e, n, t[n]);
                  }),
                  bu = To(function (e, t) {
                    Po(t, Mu(t), e);
                  }),
                  mu = To(function (e, t, n, r) {
                    Po(t, Mu(t), e, r);
                  }),
                  wu = To(function (e, t, n, r) {
                    Po(t, Tu(t), e, r);
                  }),
                  ku = ei(or),
                  Iu = Jr(function (e, t) {
                    e = Ee(e);
                    var n = -1,
                      r = t.length,
                      i = r > 2 ? t[2] : o;
                    for (i && yi(t[0], t[1], i) && (r = 1); ++n < r; )
                      for (
                        var a = t[n], u = Mu(a), s = -1, c = u.length;
                        ++s < c;

                      ) {
                        var l = u[s],
                          f = e[l];
                        (f === o || (Ga(f, Te[l]) && !je.call(e, l))) &&
                          (e[l] = a[l]);
                      }
                    return e;
                  }),
                  Eu = Jr(function (e) {
                    return e.push(o, Ko), It(ju, o, e);
                  });
                function Su(e, t, n) {
                  var r = null == e ? o : wr(e, t);
                  return r === o ? n : r;
                }
                function Au(e, t) {
                  return null != e && di(e, t, Ar);
                }
                var xu = Go(function (e, t, n) {
                    null != t &&
                      "function" != typeof t.toString &&
                      (t = Le.call(t)),
                      (e[t] = n);
                  }, $u(ns)),
                  Pu = Go(function (e, t, n) {
                    null != t &&
                      "function" != typeof t.toString &&
                      (t = Le.call(t)),
                      je.call(e, t) ? e[t].push(n) : (e[t] = [n]);
                  }, ai),
                  Ou = Jr(Pr);
                function Tu(e) {
                  return Va(e) ? Hn(e) : Rr(e);
                }
                function Mu(e) {
                  return Va(e)
                    ? Hn(e, !0)
                    : (function (e) {
                        if (!$a(e))
                          return (function (e) {
                            var t = [];
                            if (null != e) for (var n in Ee(e)) t.push(n);
                            return t;
                          })(e);
                        var t = wi(e),
                          n = [];
                        for (var r in e)
                          ("constructor" != r || (!t && je.call(e, r))) &&
                            n.push(r);
                        return n;
                      })(e);
                }
                var Du = To(function (e, t, n) {
                    Gr(e, t, n);
                  }),
                  ju = To(function (e, t, n, r) {
                    Gr(e, t, n, r);
                  }),
                  Ru = ei(function (e, t) {
                    var n = {};
                    if (null == e) return n;
                    var r = !1;
                    (t = Mt(t, function (t) {
                      return (t = yo(t, e)), r || (r = t.length > 1), t;
                    })),
                      Po(e, ni(e), n),
                      r && (n = ar(n, 7, Yo));
                    for (var o = t.length; o--; ) so(n, t[o]);
                    return n;
                  }),
                  Cu = ei(function (e, t) {
                    return null == e
                      ? {}
                      : (function (e, t) {
                          return qr(e, t, function (t, n) {
                            return Au(e, n);
                          });
                        })(e, t);
                  });
                function Lu(e, t) {
                  if (null == e) return {};
                  var n = Mt(ni(e), function (e) {
                    return [e];
                  });
                  return (
                    (t = ai(t)),
                    qr(e, n, function (e, n) {
                      return t(e, n[0]);
                    })
                  );
                }
                var Bu = Ho(Tu),
                  Uu = Ho(Mu);
                function Gu(e) {
                  return null == e ? [] : Zt(e, Tu(e));
                }
                var Nu = Ro(function (e, t, n) {
                  return (t = t.toLowerCase()), e + (n ? zu(t) : t);
                });
                function zu(e) {
                  return Xu(yu(e).toLowerCase());
                }
                function qu(e) {
                  return (e = yu(e)) && e.replace(_e, en).replace(Ke, "");
                }
                var Fu = Ro(function (e, t, n) {
                    return e + (n ? "-" : "") + t.toLowerCase();
                  }),
                  Wu = Ro(function (e, t, n) {
                    return e + (n ? " " : "") + t.toLowerCase();
                  }),
                  Vu = jo("toLowerCase"),
                  Qu = Ro(function (e, t, n) {
                    return e + (n ? "_" : "") + t.toLowerCase();
                  }),
                  Ju = Ro(function (e, t, n) {
                    return e + (n ? " " : "") + Xu(t);
                  }),
                  Hu = Ro(function (e, t, n) {
                    return e + (n ? " " : "") + t.toUpperCase();
                  }),
                  Xu = jo("toUpperCase");
                function Zu(e, t, n) {
                  return (
                    (e = yu(e)),
                    (t = n ? o : t) === o
                      ? (function (e) {
                          return tt.test(e);
                        })(e)
                        ? (function (e) {
                            return e.match($e) || [];
                          })(e)
                        : (function (e) {
                            return e.match(se) || [];
                          })(e)
                      : e.match(t) || []
                  );
                }
                var Ku = Jr(function (e, t) {
                    try {
                      return It(e, o, t);
                    } catch (e) {
                      return Xa(e) ? e : new we(e);
                    }
                  }),
                  Yu = ei(function (e, t) {
                    return (
                      St(t, function (t) {
                        (t = Li(t)), rr(e, t, Pa(e[t], e));
                      }),
                      e
                    );
                  });
                function $u(e) {
                  return function () {
                    return e;
                  };
                }
                var es = Bo(),
                  ts = Bo(!0);
                function ns(e) {
                  return e;
                }
                function rs(e) {
                  return jr("function" == typeof e ? e : ar(e, 1));
                }
                var os = Jr(function (e, t) {
                    return function (n) {
                      return Pr(n, e, t);
                    };
                  }),
                  is = Jr(function (e, t) {
                    return function (n) {
                      return Pr(e, n, t);
                    };
                  });
                function as(e, t, n) {
                  var r = Tu(t),
                    o = mr(t, r);
                  null != n ||
                    ($a(t) && (o.length || !r.length)) ||
                    ((n = t), (t = e), (e = this), (o = mr(t, Tu(t))));
                  var i = !($a(n) && "chain" in n && !n.chain),
                    a = Za(e);
                  return (
                    St(o, function (n) {
                      var r = t[n];
                      (e[n] = r),
                        a &&
                          (e.prototype[n] = function () {
                            var t = this.__chain__;
                            if (i || t) {
                              var n = e(this.__wrapped__);
                              return (
                                (n.__actions__ = xo(this.__actions__)).push({
                                  func: r,
                                  args: arguments,
                                  thisArg: e,
                                }),
                                (n.__chain__ = t),
                                n
                              );
                            }
                            return r.apply(e, Dt([this.value()], arguments));
                          });
                    }),
                    e
                  );
                }
                function us() {}
                var ss = zo(Mt),
                  cs = zo(xt),
                  ls = zo(Ct);
                function fs(e) {
                  return _i(e)
                    ? Ft(Li(e))
                    : (function (e) {
                        return function (t) {
                          return wr(t, e);
                        };
                      })(e);
                }
                var hs = Fo(),
                  ds = Fo(!0);
                function ps() {
                  return [];
                }
                function gs() {
                  return !1;
                }
                var vs,
                  ys = No(function (e, t) {
                    return e + t;
                  }, 0),
                  _s = Qo("ceil"),
                  bs = No(function (e, t) {
                    return e / t;
                  }, 1),
                  ms = Qo("floor"),
                  ws = No(function (e, t) {
                    return e * t;
                  }, 1),
                  ks = Qo("round"),
                  Is = No(function (e, t) {
                    return e - t;
                  }, 0);
                return (
                  (Un.after = function (e, t) {
                    if ("function" != typeof t) throw new xe(i);
                    return (
                      (e = du(e)),
                      function () {
                        if (--e < 1) return t.apply(this, arguments);
                      }
                    );
                  }),
                  (Un.ary = Aa),
                  (Un.assign = _u),
                  (Un.assignIn = bu),
                  (Un.assignInWith = mu),
                  (Un.assignWith = wu),
                  (Un.at = ku),
                  (Un.before = xa),
                  (Un.bind = Pa),
                  (Un.bindAll = Yu),
                  (Un.bindKey = Oa),
                  (Un.castArray = function () {
                    if (!arguments.length) return [];
                    var e = arguments[0];
                    return Fa(e) ? e : [e];
                  }),
                  (Un.chain = fa),
                  (Un.chunk = function (e, t, n) {
                    t = (n ? yi(e, t, n) : t === o) ? 1 : vn(du(t), 0);
                    var i = null == e ? 0 : e.length;
                    if (!i || t < 1) return [];
                    for (var a = 0, u = 0, s = r(ht(i / t)); a < i; )
                      s[u++] = eo(e, a, (a += t));
                    return s;
                  }),
                  (Un.compact = function (e) {
                    for (
                      var t = -1, n = null == e ? 0 : e.length, r = 0, o = [];
                      ++t < n;

                    ) {
                      var i = e[t];
                      i && (o[r++] = i);
                    }
                    return o;
                  }),
                  (Un.concat = function () {
                    var e = arguments.length;
                    if (!e) return [];
                    for (var t = r(e - 1), n = arguments[0], o = e; o--; )
                      t[o - 1] = arguments[o];
                    return Dt(Fa(n) ? xo(n) : [n], gr(t, 1));
                  }),
                  (Un.cond = function (e) {
                    var t = null == e ? 0 : e.length,
                      n = ai();
                    return (
                      (e = t
                        ? Mt(e, function (e) {
                            if ("function" != typeof e[1]) throw new xe(i);
                            return [n(e[0]), e[1]];
                          })
                        : []),
                      Jr(function (n) {
                        for (var r = -1; ++r < t; ) {
                          var o = e[r];
                          if (It(o[0], this, n)) return It(o[1], this, n);
                        }
                      })
                    );
                  }),
                  (Un.conforms = function (e) {
                    return (function (e) {
                      var t = Tu(e);
                      return function (n) {
                        return ur(n, e, t);
                      };
                    })(ar(e, 1));
                  }),
                  (Un.constant = $u),
                  (Un.countBy = pa),
                  (Un.create = function (e, t) {
                    var n = Gn(e);
                    return null == t ? n : nr(n, t);
                  }),
                  (Un.curry = function e(t, n, r) {
                    var i = Xo(t, 8, o, o, o, o, o, (n = r ? o : n));
                    return (i.placeholder = e.placeholder), i;
                  }),
                  (Un.curryRight = function e(t, n, r) {
                    var i = Xo(t, 16, o, o, o, o, o, (n = r ? o : n));
                    return (i.placeholder = e.placeholder), i;
                  }),
                  (Un.debounce = Ta),
                  (Un.defaults = Iu),
                  (Un.defaultsDeep = Eu),
                  (Un.defer = Ma),
                  (Un.delay = Da),
                  (Un.difference = Gi),
                  (Un.differenceBy = Ni),
                  (Un.differenceWith = zi),
                  (Un.drop = function (e, t, n) {
                    var r = null == e ? 0 : e.length;
                    return r
                      ? eo(e, (t = n || t === o ? 1 : du(t)) < 0 ? 0 : t, r)
                      : [];
                  }),
                  (Un.dropRight = function (e, t, n) {
                    var r = null == e ? 0 : e.length;
                    return r
                      ? eo(
                          e,
                          0,
                          (t = r - (t = n || t === o ? 1 : du(t))) < 0 ? 0 : t
                        )
                      : [];
                  }),
                  (Un.dropRightWhile = function (e, t) {
                    return e && e.length ? lo(e, ai(t, 3), !0, !0) : [];
                  }),
                  (Un.dropWhile = function (e, t) {
                    return e && e.length ? lo(e, ai(t, 3), !0) : [];
                  }),
                  (Un.fill = function (e, t, n, r) {
                    var i = null == e ? 0 : e.length;
                    return i
                      ? (n &&
                          "number" != typeof n &&
                          yi(e, t, n) &&
                          ((n = 0), (r = i)),
                        (function (e, t, n, r) {
                          var i = e.length;
                          for (
                            (n = du(n)) < 0 && (n = -n > i ? 0 : i + n),
                              (r = r === o || r > i ? i : du(r)) < 0 &&
                                (r += i),
                              r = n > r ? 0 : pu(r);
                            n < r;

                          )
                            e[n++] = t;
                          return e;
                        })(e, t, n, r))
                      : [];
                  }),
                  (Un.filter = function (e, t) {
                    return (Fa(e) ? Pt : pr)(e, ai(t, 3));
                  }),
                  (Un.flatMap = function (e, t) {
                    return gr(ka(e, t), 1);
                  }),
                  (Un.flatMapDeep = function (e, t) {
                    return gr(ka(e, t), l);
                  }),
                  (Un.flatMapDepth = function (e, t, n) {
                    return (n = n === o ? 1 : du(n)), gr(ka(e, t), n);
                  }),
                  (Un.flatten = Wi),
                  (Un.flattenDeep = function (e) {
                    return null != e && e.length ? gr(e, l) : [];
                  }),
                  (Un.flattenDepth = function (e, t) {
                    return null != e && e.length
                      ? gr(e, (t = t === o ? 1 : du(t)))
                      : [];
                  }),
                  (Un.flip = function (e) {
                    return Xo(e, 512);
                  }),
                  (Un.flow = es),
                  (Un.flowRight = ts),
                  (Un.fromPairs = function (e) {
                    for (
                      var t = -1, n = null == e ? 0 : e.length, r = {};
                      ++t < n;

                    ) {
                      var o = e[t];
                      r[o[0]] = o[1];
                    }
                    return r;
                  }),
                  (Un.functions = function (e) {
                    return null == e ? [] : mr(e, Tu(e));
                  }),
                  (Un.functionsIn = function (e) {
                    return null == e ? [] : mr(e, Mu(e));
                  }),
                  (Un.groupBy = ba),
                  (Un.initial = function (e) {
                    return null != e && e.length ? eo(e, 0, -1) : [];
                  }),
                  (Un.intersection = Qi),
                  (Un.intersectionBy = Ji),
                  (Un.intersectionWith = Hi),
                  (Un.invert = xu),
                  (Un.invertBy = Pu),
                  (Un.invokeMap = ma),
                  (Un.iteratee = rs),
                  (Un.keyBy = wa),
                  (Un.keys = Tu),
                  (Un.keysIn = Mu),
                  (Un.map = ka),
                  (Un.mapKeys = function (e, t) {
                    var n = {};
                    return (
                      (t = ai(t, 3)),
                      _r(e, function (e, r, o) {
                        rr(n, t(e, r, o), e);
                      }),
                      n
                    );
                  }),
                  (Un.mapValues = function (e, t) {
                    var n = {};
                    return (
                      (t = ai(t, 3)),
                      _r(e, function (e, r, o) {
                        rr(n, r, t(e, r, o));
                      }),
                      n
                    );
                  }),
                  (Un.matches = function (e) {
                    return Br(ar(e, 1));
                  }),
                  (Un.matchesProperty = function (e, t) {
                    return Ur(e, ar(t, 1));
                  }),
                  (Un.memoize = ja),
                  (Un.merge = Du),
                  (Un.mergeWith = ju),
                  (Un.method = os),
                  (Un.methodOf = is),
                  (Un.mixin = as),
                  (Un.negate = Ra),
                  (Un.nthArg = function (e) {
                    return (
                      (e = du(e)),
                      Jr(function (t) {
                        return Nr(t, e);
                      })
                    );
                  }),
                  (Un.omit = Ru),
                  (Un.omitBy = function (e, t) {
                    return Lu(e, Ra(ai(t)));
                  }),
                  (Un.once = function (e) {
                    return xa(2, e);
                  }),
                  (Un.orderBy = function (e, t, n, r) {
                    return null == e
                      ? []
                      : (Fa(t) || (t = null == t ? [] : [t]),
                        Fa((n = r ? o : n)) || (n = null == n ? [] : [n]),
                        zr(e, t, n));
                  }),
                  (Un.over = ss),
                  (Un.overArgs = Ca),
                  (Un.overEvery = cs),
                  (Un.overSome = ls),
                  (Un.partial = La),
                  (Un.partialRight = Ba),
                  (Un.partition = Ia),
                  (Un.pick = Cu),
                  (Un.pickBy = Lu),
                  (Un.property = fs),
                  (Un.propertyOf = function (e) {
                    return function (t) {
                      return null == e ? o : wr(e, t);
                    };
                  }),
                  (Un.pull = Zi),
                  (Un.pullAll = Ki),
                  (Un.pullAllBy = function (e, t, n) {
                    return e && e.length && t && t.length
                      ? Fr(e, t, ai(n, 2))
                      : e;
                  }),
                  (Un.pullAllWith = function (e, t, n) {
                    return e && e.length && t && t.length ? Fr(e, t, o, n) : e;
                  }),
                  (Un.pullAt = Yi),
                  (Un.range = hs),
                  (Un.rangeRight = ds),
                  (Un.rearg = Ua),
                  (Un.reject = function (e, t) {
                    return (Fa(e) ? Pt : pr)(e, Ra(ai(t, 3)));
                  }),
                  (Un.remove = function (e, t) {
                    var n = [];
                    if (!e || !e.length) return n;
                    var r = -1,
                      o = [],
                      i = e.length;
                    for (t = ai(t, 3); ++r < i; ) {
                      var a = e[r];
                      t(a, r, e) && (n.push(a), o.push(r));
                    }
                    return Wr(e, o), n;
                  }),
                  (Un.rest = function (e, t) {
                    if ("function" != typeof e) throw new xe(i);
                    return Jr(e, (t = t === o ? t : du(t)));
                  }),
                  (Un.reverse = $i),
                  (Un.sampleSize = function (e, t, n) {
                    return (
                      (t = (n ? yi(e, t, n) : t === o) ? 1 : du(t)),
                      (Fa(e) ? Zn : Xr)(e, t)
                    );
                  }),
                  (Un.set = function (e, t, n) {
                    return null == e ? e : Zr(e, t, n);
                  }),
                  (Un.setWith = function (e, t, n, r) {
                    return (
                      (r = "function" == typeof r ? r : o),
                      null == e ? e : Zr(e, t, n, r)
                    );
                  }),
                  (Un.shuffle = function (e) {
                    return (Fa(e) ? Kn : $r)(e);
                  }),
                  (Un.slice = function (e, t, n) {
                    var r = null == e ? 0 : e.length;
                    return r
                      ? (n && "number" != typeof n && yi(e, t, n)
                          ? ((t = 0), (n = r))
                          : ((t = null == t ? 0 : du(t)),
                            (n = n === o ? r : du(n))),
                        eo(e, t, n))
                      : [];
                  }),
                  (Un.sortBy = Ea),
                  (Un.sortedUniq = function (e) {
                    return e && e.length ? oo(e) : [];
                  }),
                  (Un.sortedUniqBy = function (e, t) {
                    return e && e.length ? oo(e, ai(t, 2)) : [];
                  }),
                  (Un.split = function (e, t, n) {
                    return (
                      n && "number" != typeof n && yi(e, t, n) && (t = n = o),
                      (n = n === o ? d : n >>> 0)
                        ? (e = yu(e)) &&
                          ("string" == typeof t || (null != t && !ou(t))) &&
                          !(t = ao(t)) &&
                          rn(e)
                          ? bo(fn(e), 0, n)
                          : e.split(t, n)
                        : []
                    );
                  }),
                  (Un.spread = function (e, t) {
                    if ("function" != typeof e) throw new xe(i);
                    return (
                      (t = null == t ? 0 : vn(du(t), 0)),
                      Jr(function (n) {
                        var r = n[t],
                          o = bo(n, 0, t);
                        return r && Dt(o, r), It(e, this, o);
                      })
                    );
                  }),
                  (Un.tail = function (e) {
                    var t = null == e ? 0 : e.length;
                    return t ? eo(e, 1, t) : [];
                  }),
                  (Un.take = function (e, t, n) {
                    return e && e.length
                      ? eo(e, 0, (t = n || t === o ? 1 : du(t)) < 0 ? 0 : t)
                      : [];
                  }),
                  (Un.takeRight = function (e, t, n) {
                    var r = null == e ? 0 : e.length;
                    return r
                      ? eo(
                          e,
                          (t = r - (t = n || t === o ? 1 : du(t))) < 0 ? 0 : t,
                          r
                        )
                      : [];
                  }),
                  (Un.takeRightWhile = function (e, t) {
                    return e && e.length ? lo(e, ai(t, 3), !1, !0) : [];
                  }),
                  (Un.takeWhile = function (e, t) {
                    return e && e.length ? lo(e, ai(t, 3)) : [];
                  }),
                  (Un.tap = function (e, t) {
                    return t(e), e;
                  }),
                  (Un.throttle = function (e, t, n) {
                    var r = !0,
                      o = !0;
                    if ("function" != typeof e) throw new xe(i);
                    return (
                      $a(n) &&
                        ((r = "leading" in n ? !!n.leading : r),
                        (o = "trailing" in n ? !!n.trailing : o)),
                      Ta(e, t, { leading: r, maxWait: t, trailing: o })
                    );
                  }),
                  (Un.thru = ha),
                  (Un.toArray = fu),
                  (Un.toPairs = Bu),
                  (Un.toPairsIn = Uu),
                  (Un.toPath = function (e) {
                    return Fa(e) ? Mt(e, Li) : uu(e) ? [e] : xo(Ci(yu(e)));
                  }),
                  (Un.toPlainObject = vu),
                  (Un.transform = function (e, t, n) {
                    var r = Fa(e),
                      o = r || Ja(e) || su(e);
                    if (((t = ai(t, 4)), null == n)) {
                      var i = e && e.constructor;
                      n = o
                        ? r
                          ? new i()
                          : []
                        : $a(e) && Za(i)
                        ? Gn(We(e))
                        : {};
                    }
                    return (
                      (o ? St : _r)(e, function (e, r, o) {
                        return t(n, e, r, o);
                      }),
                      n
                    );
                  }),
                  (Un.unary = function (e) {
                    return Aa(e, 1);
                  }),
                  (Un.union = ea),
                  (Un.unionBy = ta),
                  (Un.unionWith = na),
                  (Un.uniq = function (e) {
                    return e && e.length ? uo(e) : [];
                  }),
                  (Un.uniqBy = function (e, t) {
                    return e && e.length ? uo(e, ai(t, 2)) : [];
                  }),
                  (Un.uniqWith = function (e, t) {
                    return (
                      (t = "function" == typeof t ? t : o),
                      e && e.length ? uo(e, o, t) : []
                    );
                  }),
                  (Un.unset = function (e, t) {
                    return null == e || so(e, t);
                  }),
                  (Un.unzip = ra),
                  (Un.unzipWith = oa),
                  (Un.update = function (e, t, n) {
                    return null == e ? e : co(e, t, vo(n));
                  }),
                  (Un.updateWith = function (e, t, n, r) {
                    return (
                      (r = "function" == typeof r ? r : o),
                      null == e ? e : co(e, t, vo(n), r)
                    );
                  }),
                  (Un.values = Gu),
                  (Un.valuesIn = function (e) {
                    return null == e ? [] : Zt(e, Mu(e));
                  }),
                  (Un.without = ia),
                  (Un.words = Zu),
                  (Un.wrap = function (e, t) {
                    return La(vo(t), e);
                  }),
                  (Un.xor = aa),
                  (Un.xorBy = ua),
                  (Un.xorWith = sa),
                  (Un.zip = ca),
                  (Un.zipObject = function (e, t) {
                    return po(e || [], t || [], $n);
                  }),
                  (Un.zipObjectDeep = function (e, t) {
                    return po(e || [], t || [], Zr);
                  }),
                  (Un.zipWith = la),
                  (Un.entries = Bu),
                  (Un.entriesIn = Uu),
                  (Un.extend = bu),
                  (Un.extendWith = mu),
                  as(Un, Un),
                  (Un.add = ys),
                  (Un.attempt = Ku),
                  (Un.camelCase = Nu),
                  (Un.capitalize = zu),
                  (Un.ceil = _s),
                  (Un.clamp = function (e, t, n) {
                    return (
                      n === o && ((n = t), (t = o)),
                      n !== o && (n = (n = gu(n)) == n ? n : 0),
                      t !== o && (t = (t = gu(t)) == t ? t : 0),
                      ir(gu(e), t, n)
                    );
                  }),
                  (Un.clone = function (e) {
                    return ar(e, 4);
                  }),
                  (Un.cloneDeep = function (e) {
                    return ar(e, 5);
                  }),
                  (Un.cloneDeepWith = function (e, t) {
                    return ar(e, 5, (t = "function" == typeof t ? t : o));
                  }),
                  (Un.cloneWith = function (e, t) {
                    return ar(e, 4, (t = "function" == typeof t ? t : o));
                  }),
                  (Un.conformsTo = function (e, t) {
                    return null == t || ur(e, t, Tu(t));
                  }),
                  (Un.deburr = qu),
                  (Un.defaultTo = function (e, t) {
                    return null == e || e != e ? t : e;
                  }),
                  (Un.divide = bs),
                  (Un.endsWith = function (e, t, n) {
                    (e = yu(e)), (t = ao(t));
                    var r = e.length,
                      i = (n = n === o ? r : ir(du(n), 0, r));
                    return (n -= t.length) >= 0 && e.slice(n, i) == t;
                  }),
                  (Un.eq = Ga),
                  (Un.escape = function (e) {
                    return (e = yu(e)) && H.test(e) ? e.replace(Q, tn) : e;
                  }),
                  (Un.escapeRegExp = function (e) {
                    return (e = yu(e)) && ne.test(e)
                      ? e.replace(te, "\\$&")
                      : e;
                  }),
                  (Un.every = function (e, t, n) {
                    var r = Fa(e) ? xt : hr;
                    return n && yi(e, t, n) && (t = o), r(e, ai(t, 3));
                  }),
                  (Un.find = ga),
                  (Un.findIndex = qi),
                  (Un.findKey = function (e, t) {
                    return Bt(e, ai(t, 3), _r);
                  }),
                  (Un.findLast = va),
                  (Un.findLastIndex = Fi),
                  (Un.findLastKey = function (e, t) {
                    return Bt(e, ai(t, 3), br);
                  }),
                  (Un.floor = ms),
                  (Un.forEach = ya),
                  (Un.forEachRight = _a),
                  (Un.forIn = function (e, t) {
                    return null == e ? e : vr(e, ai(t, 3), Mu);
                  }),
                  (Un.forInRight = function (e, t) {
                    return null == e ? e : yr(e, ai(t, 3), Mu);
                  }),
                  (Un.forOwn = function (e, t) {
                    return e && _r(e, ai(t, 3));
                  }),
                  (Un.forOwnRight = function (e, t) {
                    return e && br(e, ai(t, 3));
                  }),
                  (Un.get = Su),
                  (Un.gt = Na),
                  (Un.gte = za),
                  (Un.has = function (e, t) {
                    return null != e && di(e, t, Sr);
                  }),
                  (Un.hasIn = Au),
                  (Un.head = Vi),
                  (Un.identity = ns),
                  (Un.includes = function (e, t, n, r) {
                    (e = Va(e) ? e : Gu(e)), (n = n && !r ? du(n) : 0);
                    var o = e.length;
                    return (
                      n < 0 && (n = vn(o + n, 0)),
                      au(e)
                        ? n <= o && e.indexOf(t, n) > -1
                        : !!o && Gt(e, t, n) > -1
                    );
                  }),
                  (Un.indexOf = function (e, t, n) {
                    var r = null == e ? 0 : e.length;
                    if (!r) return -1;
                    var o = null == n ? 0 : du(n);
                    return o < 0 && (o = vn(r + o, 0)), Gt(e, t, o);
                  }),
                  (Un.inRange = function (e, t, n) {
                    return (
                      (t = hu(t)),
                      n === o ? ((n = t), (t = 0)) : (n = hu(n)),
                      (function (e, t, n) {
                        return e >= yn(t, n) && e < vn(t, n);
                      })((e = gu(e)), t, n)
                    );
                  }),
                  (Un.invoke = Ou),
                  (Un.isArguments = qa),
                  (Un.isArray = Fa),
                  (Un.isArrayBuffer = Wa),
                  (Un.isArrayLike = Va),
                  (Un.isArrayLikeObject = Qa),
                  (Un.isBoolean = function (e) {
                    return !0 === e || !1 === e || (eu(e) && Ir(e) == y);
                  }),
                  (Un.isBuffer = Ja),
                  (Un.isDate = Ha),
                  (Un.isElement = function (e) {
                    return eu(e) && 1 === e.nodeType && !ru(e);
                  }),
                  (Un.isEmpty = function (e) {
                    if (null == e) return !0;
                    if (
                      Va(e) &&
                      (Fa(e) ||
                        "string" == typeof e ||
                        "function" == typeof e.splice ||
                        Ja(e) ||
                        su(e) ||
                        qa(e))
                    )
                      return !e.length;
                    var t = hi(e);
                    if (t == k || t == x) return !e.size;
                    if (wi(e)) return !Rr(e).length;
                    for (var n in e) if (je.call(e, n)) return !1;
                    return !0;
                  }),
                  (Un.isEqual = function (e, t) {
                    return Tr(e, t);
                  }),
                  (Un.isEqualWith = function (e, t, n) {
                    var r = (n = "function" == typeof n ? n : o) ? n(e, t) : o;
                    return r === o ? Tr(e, t, o, n) : !!r;
                  }),
                  (Un.isError = Xa),
                  (Un.isFinite = function (e) {
                    return "number" == typeof e && Lt(e);
                  }),
                  (Un.isFunction = Za),
                  (Un.isInteger = Ka),
                  (Un.isLength = Ya),
                  (Un.isMap = tu),
                  (Un.isMatch = function (e, t) {
                    return e === t || Mr(e, t, si(t));
                  }),
                  (Un.isMatchWith = function (e, t, n) {
                    return (
                      (n = "function" == typeof n ? n : o), Mr(e, t, si(t), n)
                    );
                  }),
                  (Un.isNaN = function (e) {
                    return nu(e) && e != +e;
                  }),
                  (Un.isNative = function (e) {
                    if (mi(e))
                      throw new we(
                        "Unsupported core-js use. Try https://npms.io/search?q=ponyfill."
                      );
                    return Dr(e);
                  }),
                  (Un.isNil = function (e) {
                    return null == e;
                  }),
                  (Un.isNull = function (e) {
                    return null === e;
                  }),
                  (Un.isNumber = nu),
                  (Un.isObject = $a),
                  (Un.isObjectLike = eu),
                  (Un.isPlainObject = ru),
                  (Un.isRegExp = ou),
                  (Un.isSafeInteger = function (e) {
                    return Ka(e) && e >= -9007199254740991 && e <= f;
                  }),
                  (Un.isSet = iu),
                  (Un.isString = au),
                  (Un.isSymbol = uu),
                  (Un.isTypedArray = su),
                  (Un.isUndefined = function (e) {
                    return e === o;
                  }),
                  (Un.isWeakMap = function (e) {
                    return eu(e) && hi(e) == T;
                  }),
                  (Un.isWeakSet = function (e) {
                    return eu(e) && "[object WeakSet]" == Ir(e);
                  }),
                  (Un.join = function (e, t) {
                    return null == e ? "" : Wt.call(e, t);
                  }),
                  (Un.kebabCase = Fu),
                  (Un.last = Xi),
                  (Un.lastIndexOf = function (e, t, n) {
                    var r = null == e ? 0 : e.length;
                    if (!r) return -1;
                    var i = r;
                    return (
                      n !== o &&
                        (i = (i = du(n)) < 0 ? vn(r + i, 0) : yn(i, r - 1)),
                      t == t
                        ? (function (e, t, n) {
                            for (var r = n + 1; r--; ) if (e[r] === t) return r;
                            return r;
                          })(e, t, i)
                        : Ut(e, zt, i, !0)
                    );
                  }),
                  (Un.lowerCase = Wu),
                  (Un.lowerFirst = Vu),
                  (Un.lt = cu),
                  (Un.lte = lu),
                  (Un.max = function (e) {
                    return e && e.length ? dr(e, ns, Er) : o;
                  }),
                  (Un.maxBy = function (e, t) {
                    return e && e.length ? dr(e, ai(t, 2), Er) : o;
                  }),
                  (Un.mean = function (e) {
                    return qt(e, ns);
                  }),
                  (Un.meanBy = function (e, t) {
                    return qt(e, ai(t, 2));
                  }),
                  (Un.min = function (e) {
                    return e && e.length ? dr(e, ns, Cr) : o;
                  }),
                  (Un.minBy = function (e, t) {
                    return e && e.length ? dr(e, ai(t, 2), Cr) : o;
                  }),
                  (Un.stubArray = ps),
                  (Un.stubFalse = gs),
                  (Un.stubObject = function () {
                    return {};
                  }),
                  (Un.stubString = function () {
                    return "";
                  }),
                  (Un.stubTrue = function () {
                    return !0;
                  }),
                  (Un.multiply = ws),
                  (Un.nth = function (e, t) {
                    return e && e.length ? Nr(e, du(t)) : o;
                  }),
                  (Un.noConflict = function () {
                    return ft._ === this && (ft._ = Ue), this;
                  }),
                  (Un.noop = us),
                  (Un.now = Sa),
                  (Un.pad = function (e, t, n) {
                    e = yu(e);
                    var r = (t = du(t)) ? ln(e) : 0;
                    if (!t || r >= t) return e;
                    var o = (t - r) / 2;
                    return qo(dt(o), n) + e + qo(ht(o), n);
                  }),
                  (Un.padEnd = function (e, t, n) {
                    e = yu(e);
                    var r = (t = du(t)) ? ln(e) : 0;
                    return t && r < t ? e + qo(t - r, n) : e;
                  }),
                  (Un.padStart = function (e, t, n) {
                    e = yu(e);
                    var r = (t = du(t)) ? ln(e) : 0;
                    return t && r < t ? qo(t - r, n) + e : e;
                  }),
                  (Un.parseInt = function (e, t, n) {
                    return (
                      n || null == t ? (t = 0) : t && (t = +t),
                      bn(yu(e).replace(re, ""), t || 0)
                    );
                  }),
                  (Un.random = function (e, t, n) {
                    if (
                      (n && "boolean" != typeof n && yi(e, t, n) && (t = n = o),
                      n === o &&
                        ("boolean" == typeof t
                          ? ((n = t), (t = o))
                          : "boolean" == typeof e && ((n = e), (e = o))),
                      e === o && t === o
                        ? ((e = 0), (t = 1))
                        : ((e = hu(e)),
                          t === o ? ((t = e), (e = 0)) : (t = hu(t))),
                      e > t)
                    ) {
                      var r = e;
                      (e = t), (t = r);
                    }
                    if (n || e % 1 || t % 1) {
                      var i = mn();
                      return yn(
                        e + i * (t - e + ut("1e-" + ((i + "").length - 1))),
                        t
                      );
                    }
                    return Vr(e, t);
                  }),
                  (Un.reduce = function (e, t, n) {
                    var r = Fa(e) ? jt : Vt,
                      o = arguments.length < 3;
                    return r(e, ai(t, 4), n, o, lr);
                  }),
                  (Un.reduceRight = function (e, t, n) {
                    var r = Fa(e) ? Rt : Vt,
                      o = arguments.length < 3;
                    return r(e, ai(t, 4), n, o, fr);
                  }),
                  (Un.repeat = function (e, t, n) {
                    return (
                      (t = (n ? yi(e, t, n) : t === o) ? 1 : du(t)),
                      Qr(yu(e), t)
                    );
                  }),
                  (Un.replace = function () {
                    var e = arguments,
                      t = yu(e[0]);
                    return e.length < 3 ? t : t.replace(e[1], e[2]);
                  }),
                  (Un.result = function (e, t, n) {
                    var r = -1,
                      i = (t = yo(t, e)).length;
                    for (i || ((i = 1), (e = o)); ++r < i; ) {
                      var a = null == e ? o : e[Li(t[r])];
                      a === o && ((r = i), (a = n)),
                        (e = Za(a) ? a.call(e) : a);
                    }
                    return e;
                  }),
                  (Un.round = ks),
                  (Un.runInContext = e),
                  (Un.sample = function (e) {
                    return (Fa(e) ? Xn : Hr)(e);
                  }),
                  (Un.size = function (e) {
                    if (null == e) return 0;
                    if (Va(e)) return au(e) ? ln(e) : e.length;
                    var t = hi(e);
                    return t == k || t == x ? e.size : Rr(e).length;
                  }),
                  (Un.snakeCase = Qu),
                  (Un.some = function (e, t, n) {
                    var r = Fa(e) ? Ct : to;
                    return n && yi(e, t, n) && (t = o), r(e, ai(t, 3));
                  }),
                  (Un.sortedIndex = function (e, t) {
                    return no(e, t);
                  }),
                  (Un.sortedIndexBy = function (e, t, n) {
                    return ro(e, t, ai(n, 2));
                  }),
                  (Un.sortedIndexOf = function (e, t) {
                    var n = null == e ? 0 : e.length;
                    if (n) {
                      var r = no(e, t);
                      if (r < n && Ga(e[r], t)) return r;
                    }
                    return -1;
                  }),
                  (Un.sortedLastIndex = function (e, t) {
                    return no(e, t, !0);
                  }),
                  (Un.sortedLastIndexBy = function (e, t, n) {
                    return ro(e, t, ai(n, 2), !0);
                  }),
                  (Un.sortedLastIndexOf = function (e, t) {
                    if (null != e && e.length) {
                      var n = no(e, t, !0) - 1;
                      if (Ga(e[n], t)) return n;
                    }
                    return -1;
                  }),
                  (Un.startCase = Ju),
                  (Un.startsWith = function (e, t, n) {
                    return (
                      (e = yu(e)),
                      (n = null == n ? 0 : ir(du(n), 0, e.length)),
                      (t = ao(t)),
                      e.slice(n, n + t.length) == t
                    );
                  }),
                  (Un.subtract = Is),
                  (Un.sum = function (e) {
                    return e && e.length ? Qt(e, ns) : 0;
                  }),
                  (Un.sumBy = function (e, t) {
                    return e && e.length ? Qt(e, ai(t, 2)) : 0;
                  }),
                  (Un.template = function (e, t, n) {
                    var r = Un.templateSettings;
                    n && yi(e, t, n) && (t = o),
                      (e = yu(e)),
                      (t = mu({}, t, r, Zo));
                    var i,
                      a,
                      u = mu({}, t.imports, r.imports, Zo),
                      s = Tu(u),
                      c = Zt(u, s),
                      l = 0,
                      f = t.interpolate || be,
                      h = "__p += '",
                      d = Se(
                        (t.escape || be).source +
                          "|" +
                          f.source +
                          "|" +
                          (f === K ? fe : be).source +
                          "|" +
                          (t.evaluate || be).source +
                          "|$",
                        "g"
                      ),
                      p =
                        "//# sourceURL=" +
                        (je.call(t, "sourceURL")
                          ? (t.sourceURL + "").replace(/\s/g, " ")
                          : "lodash.templateSources[" + ++rt + "]") +
                        "\n";
                    e.replace(d, function (t, n, r, o, u, s) {
                      return (
                        r || (r = o),
                        (h += e.slice(l, s).replace(me, nn)),
                        n && ((i = !0), (h += "' +\n__e(" + n + ") +\n'")),
                        u && ((a = !0), (h += "';\n" + u + ";\n__p += '")),
                        r &&
                          (h +=
                            "' +\n((__t = (" +
                            r +
                            ")) == null ? '' : __t) +\n'"),
                        (l = s + t.length),
                        t
                      );
                    }),
                      (h += "';\n");
                    var g = je.call(t, "variable") && t.variable;
                    if (g) {
                      if (ce.test(g))
                        throw new we(
                          "Invalid `variable` option passed into `_.template`"
                        );
                    } else h = "with (obj) {\n" + h + "\n}\n";
                    (h = (a ? h.replace(q, "") : h)
                      .replace(F, "$1")
                      .replace(W, "$1;")),
                      (h =
                        "function(" +
                        (g || "obj") +
                        ") {\n" +
                        (g ? "" : "obj || (obj = {});\n") +
                        "var __t, __p = ''" +
                        (i ? ", __e = _.escape" : "") +
                        (a
                          ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
                          : ";\n") +
                        h +
                        "return __p\n}");
                    var v = Ku(function () {
                      return ke(s, p + "return " + h).apply(o, c);
                    });
                    if (((v.source = h), Xa(v))) throw v;
                    return v;
                  }),
                  (Un.times = function (e, t) {
                    if ((e = du(e)) < 1 || e > f) return [];
                    var n = d,
                      r = yn(e, d);
                    (t = ai(t)), (e -= d);
                    for (var o = Jt(r, t); ++n < e; ) t(n);
                    return o;
                  }),
                  (Un.toFinite = hu),
                  (Un.toInteger = du),
                  (Un.toLength = pu),
                  (Un.toLower = function (e) {
                    return yu(e).toLowerCase();
                  }),
                  (Un.toNumber = gu),
                  (Un.toSafeInteger = function (e) {
                    return e
                      ? ir(du(e), -9007199254740991, f)
                      : 0 === e
                      ? e
                      : 0;
                  }),
                  (Un.toString = yu),
                  (Un.toUpper = function (e) {
                    return yu(e).toUpperCase();
                  }),
                  (Un.trim = function (e, t, n) {
                    if ((e = yu(e)) && (n || t === o)) return Ht(e);
                    if (!e || !(t = ao(t))) return e;
                    var r = fn(e),
                      i = fn(t);
                    return bo(r, Yt(r, i), $t(r, i) + 1).join("");
                  }),
                  (Un.trimEnd = function (e, t, n) {
                    if ((e = yu(e)) && (n || t === o))
                      return e.slice(0, hn(e) + 1);
                    if (!e || !(t = ao(t))) return e;
                    var r = fn(e);
                    return bo(r, 0, $t(r, fn(t)) + 1).join("");
                  }),
                  (Un.trimStart = function (e, t, n) {
                    if ((e = yu(e)) && (n || t === o)) return e.replace(re, "");
                    if (!e || !(t = ao(t))) return e;
                    var r = fn(e);
                    return bo(r, Yt(r, fn(t))).join("");
                  }),
                  (Un.truncate = function (e, t) {
                    var n = 30,
                      r = "...";
                    if ($a(t)) {
                      var i = "separator" in t ? t.separator : i;
                      (n = "length" in t ? du(t.length) : n),
                        (r = "omission" in t ? ao(t.omission) : r);
                    }
                    var a = (e = yu(e)).length;
                    if (rn(e)) {
                      var u = fn(e);
                      a = u.length;
                    }
                    if (n >= a) return e;
                    var s = n - ln(r);
                    if (s < 1) return r;
                    var c = u ? bo(u, 0, s).join("") : e.slice(0, s);
                    if (i === o) return c + r;
                    if ((u && (s += c.length - s), ou(i))) {
                      if (e.slice(s).search(i)) {
                        var l,
                          f = c;
                        for (
                          i.global || (i = Se(i.source, yu(he.exec(i)) + "g")),
                            i.lastIndex = 0;
                          (l = i.exec(f));

                        )
                          var h = l.index;
                        c = c.slice(0, h === o ? s : h);
                      }
                    } else if (e.indexOf(ao(i), s) != s) {
                      var d = c.lastIndexOf(i);
                      d > -1 && (c = c.slice(0, d));
                    }
                    return c + r;
                  }),
                  (Un.unescape = function (e) {
                    return (e = yu(e)) && J.test(e) ? e.replace(V, dn) : e;
                  }),
                  (Un.uniqueId = function (e) {
                    var t = ++Re;
                    return yu(e) + t;
                  }),
                  (Un.upperCase = Hu),
                  (Un.upperFirst = Xu),
                  (Un.each = ya),
                  (Un.eachRight = _a),
                  (Un.first = Vi),
                  as(
                    Un,
                    ((vs = {}),
                    _r(Un, function (e, t) {
                      je.call(Un.prototype, t) || (vs[t] = e);
                    }),
                    vs),
                    { chain: !1 }
                  ),
                  (Un.VERSION = "4.17.21"),
                  St(
                    [
                      "bind",
                      "bindKey",
                      "curry",
                      "curryRight",
                      "partial",
                      "partialRight",
                    ],
                    function (e) {
                      Un[e].placeholder = Un;
                    }
                  ),
                  St(["drop", "take"], function (e, t) {
                    (qn.prototype[e] = function (n) {
                      n = n === o ? 1 : vn(du(n), 0);
                      var r =
                        this.__filtered__ && !t ? new qn(this) : this.clone();
                      return (
                        r.__filtered__
                          ? (r.__takeCount__ = yn(n, r.__takeCount__))
                          : r.__views__.push({
                              size: yn(n, d),
                              type: e + (r.__dir__ < 0 ? "Right" : ""),
                            }),
                        r
                      );
                    }),
                      (qn.prototype[e + "Right"] = function (t) {
                        return this.reverse()[e](t).reverse();
                      });
                  }),
                  St(["filter", "map", "takeWhile"], function (e, t) {
                    var n = t + 1,
                      r = 1 == n || 3 == n;
                    qn.prototype[e] = function (e) {
                      var t = this.clone();
                      return (
                        t.__iteratees__.push({ iteratee: ai(e, 3), type: n }),
                        (t.__filtered__ = t.__filtered__ || r),
                        t
                      );
                    };
                  }),
                  St(["head", "last"], function (e, t) {
                    var n = "take" + (t ? "Right" : "");
                    qn.prototype[e] = function () {
                      return this[n](1).value()[0];
                    };
                  }),
                  St(["initial", "tail"], function (e, t) {
                    var n = "drop" + (t ? "" : "Right");
                    qn.prototype[e] = function () {
                      return this.__filtered__ ? new qn(this) : this[n](1);
                    };
                  }),
                  (qn.prototype.compact = function () {
                    return this.filter(ns);
                  }),
                  (qn.prototype.find = function (e) {
                    return this.filter(e).head();
                  }),
                  (qn.prototype.findLast = function (e) {
                    return this.reverse().find(e);
                  }),
                  (qn.prototype.invokeMap = Jr(function (e, t) {
                    return "function" == typeof e
                      ? new qn(this)
                      : this.map(function (n) {
                          return Pr(n, e, t);
                        });
                  })),
                  (qn.prototype.reject = function (e) {
                    return this.filter(Ra(ai(e)));
                  }),
                  (qn.prototype.slice = function (e, t) {
                    e = du(e);
                    var n = this;
                    return n.__filtered__ && (e > 0 || t < 0)
                      ? new qn(n)
                      : (e < 0 ? (n = n.takeRight(-e)) : e && (n = n.drop(e)),
                        t !== o &&
                          (n =
                            (t = du(t)) < 0 ? n.dropRight(-t) : n.take(t - e)),
                        n);
                  }),
                  (qn.prototype.takeRightWhile = function (e) {
                    return this.reverse().takeWhile(e).reverse();
                  }),
                  (qn.prototype.toArray = function () {
                    return this.take(d);
                  }),
                  _r(qn.prototype, function (e, t) {
                    var n = /^(?:filter|find|map|reject)|While$/.test(t),
                      r = /^(?:head|last)$/.test(t),
                      i = Un[r ? "take" + ("last" == t ? "Right" : "") : t],
                      a = r || /^find/.test(t);
                    i &&
                      (Un.prototype[t] = function () {
                        var t = this.__wrapped__,
                          u = r ? [1] : arguments,
                          s = t instanceof qn,
                          c = u[0],
                          l = s || Fa(t),
                          f = function (e) {
                            var t = i.apply(Un, Dt([e], u));
                            return r && h ? t[0] : t;
                          };
                        l &&
                          n &&
                          "function" == typeof c &&
                          1 != c.length &&
                          (s = l = !1);
                        var h = this.__chain__,
                          d = !!this.__actions__.length,
                          p = a && !h,
                          g = s && !d;
                        if (!a && l) {
                          t = g ? t : new qn(this);
                          var v = e.apply(t, u);
                          return (
                            v.__actions__.push({
                              func: ha,
                              args: [f],
                              thisArg: o,
                            }),
                            new zn(v, h)
                          );
                        }
                        return p && g
                          ? e.apply(this, u)
                          : ((v = this.thru(f)),
                            p ? (r ? v.value()[0] : v.value()) : v);
                      });
                  }),
                  St(
                    ["pop", "push", "shift", "sort", "splice", "unshift"],
                    function (e) {
                      var t = Pe[e],
                        n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                        r = /^(?:pop|shift)$/.test(e);
                      Un.prototype[e] = function () {
                        var e = arguments;
                        if (r && !this.__chain__) {
                          var o = this.value();
                          return t.apply(Fa(o) ? o : [], e);
                        }
                        return this[n](function (n) {
                          return t.apply(Fa(n) ? n : [], e);
                        });
                      };
                    }
                  ),
                  _r(qn.prototype, function (e, t) {
                    var n = Un[t];
                    if (n) {
                      var r = n.name + "";
                      je.call(On, r) || (On[r] = []),
                        On[r].push({ name: t, func: n });
                    }
                  }),
                  (On[Uo(o, 2).name] = [{ name: "wrapper", func: o }]),
                  (qn.prototype.clone = function () {
                    var e = new qn(this.__wrapped__);
                    return (
                      (e.__actions__ = xo(this.__actions__)),
                      (e.__dir__ = this.__dir__),
                      (e.__filtered__ = this.__filtered__),
                      (e.__iteratees__ = xo(this.__iteratees__)),
                      (e.__takeCount__ = this.__takeCount__),
                      (e.__views__ = xo(this.__views__)),
                      e
                    );
                  }),
                  (qn.prototype.reverse = function () {
                    if (this.__filtered__) {
                      var e = new qn(this);
                      (e.__dir__ = -1), (e.__filtered__ = !0);
                    } else (e = this.clone()).__dir__ *= -1;
                    return e;
                  }),
                  (qn.prototype.value = function () {
                    var e = this.__wrapped__.value(),
                      t = this.__dir__,
                      n = Fa(e),
                      r = t < 0,
                      o = n ? e.length : 0,
                      i = (function (e, t, n) {
                        for (var r = -1, o = n.length; ++r < o; ) {
                          var i = n[r],
                            a = i.size;
                          switch (i.type) {
                            case "drop":
                              e += a;
                              break;
                            case "dropRight":
                              t -= a;
                              break;
                            case "take":
                              t = yn(t, e + a);
                              break;
                            case "takeRight":
                              e = vn(e, t - a);
                          }
                        }
                        return { start: e, end: t };
                      })(0, o, this.__views__),
                      a = i.start,
                      u = i.end,
                      s = u - a,
                      c = r ? u : a - 1,
                      l = this.__iteratees__,
                      f = l.length,
                      h = 0,
                      d = yn(s, this.__takeCount__);
                    if (!n || (!r && o == s && d == s))
                      return fo(e, this.__actions__);
                    var p = [];
                    e: for (; s-- && h < d; ) {
                      for (var g = -1, v = e[(c += t)]; ++g < f; ) {
                        var y = l[g],
                          _ = y.iteratee,
                          b = y.type,
                          m = _(v);
                        if (2 == b) v = m;
                        else if (!m) {
                          if (1 == b) continue e;
                          break e;
                        }
                      }
                      p[h++] = v;
                    }
                    return p;
                  }),
                  (Un.prototype.at = da),
                  (Un.prototype.chain = function () {
                    return fa(this);
                  }),
                  (Un.prototype.commit = function () {
                    return new zn(this.value(), this.__chain__);
                  }),
                  (Un.prototype.next = function () {
                    this.__values__ === o &&
                      (this.__values__ = fu(this.value()));
                    var e = this.__index__ >= this.__values__.length;
                    return {
                      done: e,
                      value: e ? o : this.__values__[this.__index__++],
                    };
                  }),
                  (Un.prototype.plant = function (e) {
                    for (var t, n = this; n instanceof Nn; ) {
                      var r = Ui(n);
                      (r.__index__ = 0),
                        (r.__values__ = o),
                        t ? (i.__wrapped__ = r) : (t = r);
                      var i = r;
                      n = n.__wrapped__;
                    }
                    return (i.__wrapped__ = e), t;
                  }),
                  (Un.prototype.reverse = function () {
                    var e = this.__wrapped__;
                    if (e instanceof qn) {
                      var t = e;
                      return (
                        this.__actions__.length && (t = new qn(this)),
                        (t = t.reverse()).__actions__.push({
                          func: ha,
                          args: [$i],
                          thisArg: o,
                        }),
                        new zn(t, this.__chain__)
                      );
                    }
                    return this.thru($i);
                  }),
                  (Un.prototype.toJSON =
                    Un.prototype.valueOf =
                    Un.prototype.value =
                      function () {
                        return fo(this.__wrapped__, this.__actions__);
                      }),
                  (Un.prototype.first = Un.prototype.head),
                  Xe &&
                    (Un.prototype[Xe] = function () {
                      return this;
                    }),
                  Un
                );
              })();
            (ft._ = pn),
              (r = function () {
                return pn;
              }.call(t, n, t, e)) === o || (e.exports = r);
          }.call(this);
      },
      236: function (e, t, n) {
        "use strict";
        var r =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                  try {
                    s(r.next(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function u(e) {
                  try {
                    s(r.throw(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function s(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(a, u);
                }
                s((r = r.apply(e, t || [])).next());
              });
            },
          o =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                o,
                i,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: u(0), throw: u(1), return: u(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function u(u) {
                return function (s) {
                  return (function (u) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; i && ((i = 0), u[0] && (a = 0)), a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & u[0]
                                ? r.return
                                : u[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, u[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (u = [2 & u[0], o.value]), u[0])
                        ) {
                          case 0:
                          case 1:
                            o = u;
                            break;
                          case 4:
                            return a.label++, { value: u[1], done: !1 };
                          case 5:
                            a.label++, (r = u[1]), (u = [0]);
                            continue;
                          case 7:
                            (u = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = a.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== u[0] && 2 !== u[0])
                              )
                            ) {
                              a = 0;
                              continue;
                            }
                            if (
                              3 === u[0] &&
                              (!o || (u[1] > o[0] && u[1] < o[3]))
                            ) {
                              a.label = u[1];
                              break;
                            }
                            if (6 === u[0] && a.label < o[1]) {
                              (a.label = o[1]), (o = u);
                              break;
                            }
                            if (o && a.label < o[2]) {
                              (a.label = o[2]), a.ops.push(u);
                              break;
                            }
                            o[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        u = t.call(e, a);
                      } catch (e) {
                        (u = [6, e]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & u[0]) throw u[1];
                    return { value: u[0] ? u[1] : void 0, done: !0 };
                  })([u, s]);
                };
              }
            },
          i =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = n(823),
          u = i(n(767)),
          s = n(822),
          c = {
            adFinished: function () {},
            adError: function () {},
            adStarted: function () {},
          },
          l = (function () {
            function e(e) {
              var t = this;
              (this.sdk = e),
                (this.adCallbacks = c),
                (this.requestInProgress = !1),
                (this.adblockDetectionResolvers = []),
                (this.logger = new u.default("ad")),
                (this.adPlaying = !1),
                (this.adblockDetectionTimeout = window.setTimeout(function () {
                  t.logger.log(
                    "Adblock timeout executed since there wasn't an adblock event in ".concat(
                      5e3,
                      "ms"
                    )
                  ),
                    t.setAdblockDetectionResult(!1);
                }, 5e3));
            }
            return (
              (e.prototype.prefetchAd = function (e) {
                this.logger.log("Prefetching ".concat(e, " ad")),
                  this.sdk.postMessage("prefetchAd", { adType: e });
              }),
              (e.prototype.requestAd = function (e, t) {
                return r(this, void 0, void 0, function () {
                  var n;
                  return o(this, function (r) {
                    return (
                      this.logger.log("Requesting ".concat(e, " ad")),
                      (this.adCallbacks = {
                        adFinished:
                          (null == t ? void 0 : t.adFinished) || c.adFinished,
                        adError:
                          (null == t ? void 0 : t.adError) ||
                          (null == t ? void 0 : t.adFinished) ||
                          c.adFinished,
                        adStarted:
                          (null == t ? void 0 : t.adStarted) || c.adStarted,
                      }),
                      this.requestInProgress
                        ? (this.logger.log("Ad already requested"),
                          (n = new s.AdError(
                            "other",
                            "An ad request is already in progress"
                          )),
                          [2, (0, a.wrapUserFn)(this.adCallbacks.adError)(n)])
                        : ((this.requestInProgress = !0),
                          this.sdk.postMessage("requestAd", { adType: e }),
                          [2])
                    );
                  });
                });
              }),
              (e.prototype.hasAdblock = function () {
                return r(this, void 0, void 0, function () {
                  var e = this;
                  return o(this, function (t) {
                    return void 0 !== this.adblockDetectionResult
                      ? [2, this.adblockDetectionResult]
                      : (this.sdk.postMessage("hasAdblock", {}),
                        this.logger.log("Requesting adblock status"),
                        [
                          2,
                          new Promise(function (t) {
                            e.adblockDetectionResolvers.push(t);
                          }),
                        ]);
                  });
                });
              }),
              (e.prototype.handleEvent = function (e) {
                var t,
                  n,
                  r = e.data;
                switch (r.type) {
                  case "adblockDetectionExecuted":
                    return this.handleAdBlockDetectionExecutedEvent(r);
                  case "adError":
                    this.requestInProgress = !1;
                    var o = new s.AdError(
                      (null === (t = null == r ? void 0 : r.errorData) ||
                      void 0 === t
                        ? void 0
                        : t.reason) || "other",
                      (null === (n = null == r ? void 0 : r.errorData) ||
                      void 0 === n
                        ? void 0
                        : n.message) || "Unknown message"
                    );
                    return (
                      (this.adPlaying = !1),
                      (0, a.wrapUserFn)(this.adCallbacks.adError)(o)
                    );
                  case "adFinished":
                    return (
                      (this.adPlaying = !1),
                      (this.requestInProgress = !1),
                      (0, a.wrapUserFn)(this.adCallbacks.adFinished)()
                    );
                  case "adStarted":
                    return (
                      (this.adPlaying = !0),
                      this.sdk.banner.activeBannersCount > 0 &&
                        this.sdk.banner.clearAllBanners(),
                      (0, a.wrapUserFn)(this.adCallbacks.adStarted)()
                    );
                }
              }),
              (e.prototype.handleAdBlockDetectionExecutedEvent = function (e) {
                var t = !!e.hasAdblock;
                if (void 0 !== this.adblockDetectionResult)
                  return (
                    this.logger.log(
                      "Received update for adblock state: (".concat(t, ").")
                    ),
                    void (this.adblockDetectionResult = t)
                  );
                this.setAdblockDetectionResult(t),
                  clearTimeout(this.adblockDetectionTimeout);
              }),
              (e.prototype.setAdblockDetectionResult = function (e) {
                (this.adblockDetectionResult = e),
                  this.adblockDetectionResolvers.forEach(function (t) {
                    return t(e);
                  }),
                  (this.adblockDetectionResolvers = []);
              }),
              Object.defineProperty(e.prototype, "isAdPlaying", {
                get: function () {
                  return this.adPlaying;
                },
                enumerable: !1,
                configurable: !0,
              }),
              e
            );
          })();
        t.default = l;
      },
      16: function (e, t, n) {
        "use strict";
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o = r(n(767)),
          i = n(823),
          a = n(182),
          u = (function () {
            function e(e) {
              (this.sdk = e), (this.logger = new o.default("analytics"));
            }
            return (
              (e.prototype.trackOrder = function (e, t) {
                if (!(0, i.isXsollaOrderArgumentValid)(t))
                  throw new a.AnalyticsError(
                    "invalidArgument",
                    "Order must be a JSON object."
                  );
                if (!a.PAYMENT_PROVIDERS.includes(e))
                  throw new a.AnalyticsError(
                    "invalidArgument",
                    "Unsupported payment provider. Supported providers: ".concat(
                      a.PAYMENT_PROVIDERS.join(",")
                    )
                  );
                this.logger.log('Track "'.concat(e, '" order'), t),
                  this.sdk.postMessage("analyticsTrackIAPOrder", {
                    paymentProvider: e,
                    orderJson: JSON.stringify(t),
                  });
              }),
              e
            );
          })();
        t.default = u;
      },
      821: function (e, t, n) {
        "use strict";
        var r =
            (this && this.__assign) ||
            function () {
              return (
                (r =
                  Object.assign ||
                  function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                      for (var o in (t = arguments[n]))
                        Object.prototype.hasOwnProperty.call(t, o) &&
                          (e[o] = t[o]);
                    return e;
                  }),
                r.apply(this, arguments)
              );
            },
          o =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                  try {
                    s(r.next(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function u(e) {
                  try {
                    s(r.throw(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function s(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(a, u);
                }
                s((r = r.apply(e, t || [])).next());
              });
            },
          i =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                o,
                i,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: u(0), throw: u(1), return: u(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function u(u) {
                return function (s) {
                  return (function (u) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; i && ((i = 0), u[0] && (a = 0)), a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & u[0]
                                ? r.return
                                : u[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, u[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (u = [2 & u[0], o.value]), u[0])
                        ) {
                          case 0:
                          case 1:
                            o = u;
                            break;
                          case 4:
                            return a.label++, { value: u[1], done: !1 };
                          case 5:
                            a.label++, (r = u[1]), (u = [0]);
                            continue;
                          case 7:
                            (u = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = a.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== u[0] && 2 !== u[0])
                              )
                            ) {
                              a = 0;
                              continue;
                            }
                            if (
                              3 === u[0] &&
                              (!o || (u[1] > o[0] && u[1] < o[3]))
                            ) {
                              a.label = u[1];
                              break;
                            }
                            if (6 === u[0] && a.label < o[1]) {
                              (a.label = o[1]), (o = u);
                              break;
                            }
                            if (o && a.label < o[2]) {
                              (a.label = o[2]), a.ops.push(u);
                              break;
                            }
                            o[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        u = t.call(e, a);
                      } catch (e) {
                        (u = [6, e]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & u[0]) throw u[1];
                    return { value: u[0] ? u[1] : void 0, done: !0 };
                  })([u, s]);
                };
              }
            };
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = n(829),
          u = "https://cza.crazygames.com/event",
          s = (function () {
            function e() {
              (this.eventQueue = []), (this.initTimedOut = !1);
            }
            return (
              (e.getInstance = function () {
                return e.instance || (e.instance = new e()), e.instance;
              }),
              (e.prototype.init = function (e, t) {
                var n = this;
                (this.initInfo = t),
                  (this.sdk = e),
                  this.sdk.postMessage("requestAnalyticsInfoFromSDK", {}),
                  (this.initTimeoutId = window.setTimeout(function () {
                    n.instanceId ||
                      ((n.initTimedOut = !0), (n.eventQueue = []));
                  }, 1e4));
              }),
              (e.prototype.sendDebugEvent = function (e, t, n) {
                if (!this.initTimedOut) {
                  var r = {
                    time: Date.now(),
                    version: "3.6.0",
                    source: "sdk",
                    type: "debug",
                    sampling: 1,
                    userId: "",
                    page: "",
                    instanceId: "",
                    gameId: "",
                    name: e,
                    data: JSON.stringify(t),
                  };
                  this.sendEvent(r, n);
                }
              }),
              (e.prototype.handleEvent = function (e) {
                var t = this,
                  n = e.data;
                "analyticsInfoResponseFromGF" === n.type &&
                  (this.initTimeoutId &&
                    window.clearTimeout(this.initTimeoutId),
                  (this.instanceId = n.instanceId),
                  this.eventQueue.forEach(function (e) {
                    return t.sendEvent(e.event, e.filter);
                  }),
                  (this.eventQueue = []));
              }),
              (e.prototype.sendEvent = function (e, t) {
                var n = this;
                this.initInfo
                  ? this.safeIdleCallback(function () {
                      var o;
                      if (!n.initInfo.isQaTool && (!t || t(n.initInfo))) {
                        var i = r(r({}, e), {
                            instanceId: n.instanceId,
                            gameId:
                              null === (o = n.initInfo) || void 0 === o
                                ? void 0
                                : o.gameId,
                          }),
                          u = (0, a.ch)(i);
                        (i.__i = u), n.sendData(i);
                      }
                    })
                  : this.eventQueue.push({ event: e, filter: t });
              }),
              (e.prototype.sendData = function (e) {
                return o(this, void 0, void 0, function () {
                  var t,
                    n,
                    r,
                    a,
                    s = this;
                  return i(this, function (c) {
                    switch (c.label) {
                      case 0:
                        return (
                          (t = e),
                          (n = function () {
                            return o(s, void 0, void 0, function () {
                              return i(this, function (e) {
                                switch (e.label) {
                                  case 0:
                                    return [
                                      4,
                                      window.fetch(u, {
                                        method: "post",
                                        body: JSON.stringify(t),
                                        headers: {
                                          "Content-Type": "text/plain",
                                        },
                                      }),
                                    ];
                                  case 1:
                                    return e.sent(), [2];
                                }
                              });
                            });
                          }),
                          window.navigator
                            ? ((r = { type: "text/plain" }),
                              (a = new Blob([JSON.stringify(t)], r)),
                              window.navigator.sendBeacon(u, a)
                                ? [3, 2]
                                : [4, n()])
                            : [3, 4]
                        );
                      case 1:
                        return c.sent(), [3, 3];
                      case 2:
                        return [2, Promise.resolve()];
                      case 3:
                        return [3, 6];
                      case 4:
                        return [4, n()];
                      case 5:
                        c.sent(), (c.label = 6);
                      case 6:
                        return [2];
                    }
                  });
                });
              }),
              (e.prototype.safeIdleCallback = function (e) {
                window.requestIdleCallback
                  ? window.requestIdleCallback(e, { timeout: 2e3 })
                  : window.setTimeout(e, 0);
              }),
              e
            );
          })();
        t.default = s;
      },
      683: function (e, t, n) {
        "use strict";
        var r =
            (this && this.__assign) ||
            function () {
              return (
                (r =
                  Object.assign ||
                  function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                      for (var o in (t = arguments[n]))
                        Object.prototype.hasOwnProperty.call(t, o) &&
                          (e[o] = t[o]);
                    return e;
                  }),
                r.apply(this, arguments)
              );
            },
          o =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                  try {
                    s(r.next(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function u(e) {
                  try {
                    s(r.throw(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function s(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(a, u);
                }
                s((r = r.apply(e, t || [])).next());
              });
            },
          i =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                o,
                i,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: u(0), throw: u(1), return: u(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function u(u) {
                return function (s) {
                  return (function (u) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; i && ((i = 0), u[0] && (a = 0)), a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & u[0]
                                ? r.return
                                : u[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, u[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (u = [2 & u[0], o.value]), u[0])
                        ) {
                          case 0:
                          case 1:
                            o = u;
                            break;
                          case 4:
                            return a.label++, { value: u[1], done: !1 };
                          case 5:
                            a.label++, (r = u[1]), (u = [0]);
                            continue;
                          case 7:
                            (u = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = a.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== u[0] && 2 !== u[0])
                              )
                            ) {
                              a = 0;
                              continue;
                            }
                            if (
                              3 === u[0] &&
                              (!o || (u[1] > o[0] && u[1] < o[3]))
                            ) {
                              a.label = u[1];
                              break;
                            }
                            if (6 === u[0] && a.label < o[1]) {
                              (a.label = o[1]), (o = u);
                              break;
                            }
                            if (o && a.label < o[2]) {
                              (a.label = o[2]), a.ops.push(u);
                              break;
                            }
                            o[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        u = t.call(e, a);
                      } catch (e) {
                        (u = [6, e]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & u[0]) throw u[1];
                    return { value: u[0] ? u[1] : void 0, done: !0 };
                  })([u, s]);
                };
              }
            },
          a =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 });
        var u = n(414),
          s = n(314),
          c = a(n(767)),
          l = n(81),
          f = n(862),
          h = (function () {
            function e(e, t) {
              (this.sdk = e),
                (this.bannerQueue = {}),
                (this.overlayBanners = {}),
                (this.renderedBannerIds = new Set()),
                (this.logger = new c.default("banner")),
                (this.useTestAds = t.useTestAds || !1),
                (this.disableBannerCheck = t.disableBannerCheck || !1);
            }
            return (
              (e.prototype.requestBanner = function (e) {
                return o(this, void 0, void 0, function () {
                  var t;
                  return i(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          this.logger.log(
                            "Requesting banner with automatic rendering",
                            e
                          ),
                          this.ensureVideoAdNotPlaying(e.id),
                          [4, this.prefetchBanner(e)]
                        );
                      case 1:
                        return (
                          (t = n.sent()), [2, this.renderPrefetchedBanner(t)]
                        );
                    }
                  });
                });
              }),
              (e.prototype.requestResponsiveBanner = function (e) {
                return o(this, void 0, void 0, function () {
                  var t, n, r, o, a;
                  return i(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return (
                          this.logger.log(
                            "Requesting responsive banner with automatic rendering #".concat(
                              e
                            )
                          ),
                          this.ensureVideoAdNotPlaying(e),
                          [
                            4,
                            (0, l.getBannerContainer)(
                              e,
                              !this.disableBannerCheck
                            ),
                          ]
                        );
                      case 1:
                        return (
                          (t = i.sent()),
                          (n = t.containerInfo.size),
                          (r = n.width),
                          (o = n.height),
                          [
                            4,
                            this.prefetchResponsiveBanner({
                              id: e,
                              width: r,
                              height: o,
                            }),
                          ]
                        );
                      case 2:
                        return (
                          (a = i.sent()), [2, this.renderPrefetchedBanner(a)]
                        );
                    }
                  });
                });
              }),
              (e.prototype.prefetchBanner = function (e) {
                return o(this, void 0, void 0, function () {
                  var t,
                    n,
                    o = this;
                  return i(this, function (i) {
                    return (
                      this.logger.log("Prefetch banner", e),
                      (t = (0, l.ContainerIdToInnerId)(e.id)),
                      (n = r(r({}, e), { id: t })),
                      [
                        2,
                        new Promise(function (e, t) {
                          (o.bannerQueue[n.id] = {
                            banner: n,
                            resolve: e,
                            reject: t,
                          }),
                            o.sdk.postMessage("requestBanner", [
                              {
                                containerId: n.id,
                                size: (0, l.getBannerSizeAsText)(n),
                              },
                            ]);
                        }),
                      ]
                    );
                  });
                });
              }),
              (e.prototype.prefetchResponsiveBanner = function (e) {
                return o(this, void 0, void 0, function () {
                  var t,
                    n,
                    r,
                    o,
                    a = this;
                  return i(this, function (i) {
                    return (
                      this.logger.log(
                        "Prefetch responsive banner #".concat(e.id)
                      ),
                      (t = e.width),
                      (n = e.height),
                      (r = (0, l.ContainerIdToInnerId)(e.id)),
                      (o = { id: r, width: t, height: n, isResponsive: !0 }),
                      [
                        2,
                        new Promise(function (e, r) {
                          (a.bannerQueue[o.id] = {
                            banner: o,
                            resolve: e,
                            reject: r,
                          }),
                            a.sdk.postMessage("requestResponsiveBanner", [
                              { id: o.id, width: t, height: n },
                            ]);
                        }),
                      ]
                    );
                  });
                });
              }),
              (e.prototype.renderPrefetchedBanner = function (e) {
                return o(this, void 0, void 0, function () {
                  var t,
                    n = this;
                  return i(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return (
                          this.logger.log("Rendering prefetched banner", e),
                          (t = (0, l.InnerIdToContainerId)(e.id)),
                          this.ensureVideoAdNotPlaying(t),
                          [
                            4,
                            (0, l.getBannerContainer)(
                              t,
                              !this.disableBannerCheck
                            ),
                          ]
                        );
                      case 1:
                        return (
                          o.sent(),
                          this.renderedBannerIds.add(t),
                          [
                            2,
                            new Promise(function (t, o) {
                              var i = window.CrazygamesAds,
                                a = e.id,
                                u = e.banner;
                              i.render(
                                [a],
                                r(r({}, e.options), {
                                  banner: {
                                    callback: function (e) {
                                      if (
                                        (delete n.bannerQueue[e.code], !e.empty)
                                      )
                                        return (
                                          n.logger.log("Banner rendered", u),
                                          n.sdk.postMessage("bannerProcessed", {
                                            containerId: u.id,
                                            width: u.width,
                                            height: u.height,
                                          }),
                                          void t()
                                        );
                                      if (n.useTestAds)
                                        (0, s.renderFakeBanner)(u),
                                          n.logger.log(
                                            "Fake banner rendered",
                                            u
                                          ),
                                          t();
                                      else {
                                        n.logger.log("No banner available", u);
                                        var r =
                                          "Sorry, no banner is available for the moment, please retry";
                                        n.sdk.postMessage("bannerProcessed", {
                                          containerId: u.id,
                                          width: u.width,
                                          height: u.height,
                                          error: r,
                                        }),
                                          o(
                                            new f.BannerError("other", r, u.id)
                                          );
                                      }
                                    },
                                  },
                                })
                              );
                            }),
                          ]
                        );
                    }
                  });
                });
              }),
              (e.prototype.requestOverlayBanners = function (e, t) {
                var n = this,
                  r = e.map(function (e) {
                    return e.id;
                  });
                Object.keys(this.overlayBanners).forEach(function (e) {
                  r.includes(e) ||
                    (n.logger.log("Remove overlay banner " + e),
                    n.overlayBanners[e].destroy(),
                    delete n.overlayBanners[e]);
                }),
                  e.forEach(function (e) {
                    if (n.overlayBanners[e.id])
                      n.logger.log("Skip overlay banner update " + e.id);
                    else {
                      n.logger.log("Create overlay banner " + e.id);
                      var r = new u.OverlayBanner(
                        e,
                        n.disableBannerCheck,
                        n,
                        t
                      );
                      n.overlayBanners[e.id] = r;
                    }
                  });
              }),
              (e.prototype.handleEvent = function (e) {
                switch (e.data.type) {
                  case "bannerError":
                    return this.handleBannerErrorEvent(e.data);
                  case "requestBanner":
                    return this.handleRequestBannerEvent(e.data);
                }
              }),
              (e.prototype.handleBannerErrorEvent = function (e) {
                var t = e.error,
                  n = e.containerId;
                this.logger.log("Banner error happened", {
                  error: t,
                  containerId: n,
                });
                var r = this.popFromBannerQueue(e.containerId);
                r && (0, r.reject)(new f.BannerError("other", "".concat(t), n));
              }),
              (e.prototype.handleRequestBannerEvent = function (e) {
                return o(this, void 0, void 0, function () {
                  var t, n, r;
                  return i(this, function (o) {
                    switch (o.label) {
                      case 0:
                        if (
                          ((t = e.request),
                          this.logger.verbose(
                            "Received banner data from GF, will prefetch it now",
                            t
                          ),
                          (n = t.request.units[0].adUnit.code),
                          !(r = this.popFromBannerQueue(n)))
                        )
                          return (
                            this.logger.verbose(
                              "Banner ".concat(
                                n,
                                " missing in queue, not prefetching."
                              )
                            ),
                            [2]
                          );
                        o.label = 1;
                      case 1:
                        return (
                          o.trys.push([1, 3, , 4]),
                          [
                            4,
                            window.CrazygamesAds.requestOnly(
                              t.request,
                              t.options
                            ),
                          ]
                        );
                      case 2:
                        return (
                          o.sent(),
                          this.logger.verbose(
                            "Banner ".concat(n, " prefetched")
                          ),
                          r.resolve({
                            id: n,
                            banner: r.banner,
                            options: t.options,
                          }),
                          [3, 4]
                        );
                      case 3:
                        return (
                          o.sent(),
                          r.reject(
                            new f.BannerError(
                              "other",
                              "Failed to prefetch the banner",
                              n
                            )
                          ),
                          [3, 4]
                        );
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (e.prototype.popFromBannerQueue = function (e) {
                var t = this.bannerQueue[e];
                return t
                  ? (delete this.bannerQueue[e], t)
                  : (this.logger.log(
                      "Cannot retrieve element for id ".concat(
                        e,
                        " from the banner queue"
                      )
                    ),
                    null);
              }),
              (e.prototype.clearBanner = function (e) {
                this.sdk.postMessage("clearBanner", {});
                var t = document.getElementById((0, l.ContainerIdToInnerId)(e));
                if (t) {
                  t.remove(), this.renderedBannerIds.delete(e);
                  var n = Object.values(this.overlayBanners).find(function (t) {
                    return t.containerId === e;
                  });
                  n &&
                    (n.destroy(),
                    delete this.overlayBanners[n.bannerRequest.id]),
                    this.logger.log(
                      "Cleared the banner from container #"
                        .concat(e, " ")
                        .concat(n ? "(also overlay banner)" : "")
                    );
                } else
                  this.logger.log(
                    "There isn't a banner in container #".concat(
                      e,
                      ", not clearing anything."
                    )
                  );
              }),
              (e.prototype.clearAllBanners = function () {
                var e = this;
                this.sdk.postMessage("clearAllBanners", {});
                var t = Array.from(this.renderedBannerIds.values());
                this.logger.log(
                  "Clearing all banners, ids: ",
                  t
                    .map(function (e) {
                      return "#".concat(e);
                    })
                    .join(", ")
                ),
                  t.forEach(function (t) {
                    e.clearBanner(t);
                  });
              }),
              (e.prototype.ensureVideoAdNotPlaying = function (e) {
                if (this.sdk.ad.isAdPlaying)
                  throw new f.BannerError(
                    "videoAdPlaying",
                    "Banners cannot be rendered while a video ad is playing",
                    e
                  );
              }),
              Object.defineProperty(e.prototype, "activeBannersCount", {
                get: function () {
                  return this.renderedBannerIds.size;
                },
                enumerable: !1,
                configurable: !0,
              }),
              e
            );
          })();
        t.default = h;
      },
      385: function (e, t, n) {
        "use strict";
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o = n(930),
          i = r(n(767)),
          a = n(670),
          u = r(n(821)),
          s = n(752),
          c = n(825),
          l = (function () {
            function e(e, t) {
              if (
                ((this.sdk = e),
                (this.logger = new i.default("data")),
                (this.alreadySent = []),
                "local" === t.handler)
              )
                this.dataHandler = new c.LocalDataHandler(t.data, e.game.id);
              else if ("cloud" === t.handler)
                this.dataHandler = new a.CloudDataHandler(
                  e,
                  !!t.doNotSync,
                  t.data
                );
              else {
                if ("disabled" !== t.handler)
                  throw new o.GeneralError(
                    "unexpectedError",
                    "Unknown data handler ".concat(t.handler)
                  );
                this.dataHandler = new s.DisabledDataHandler();
              }
            }
            return (
              (e.prototype.clear = function () {
                this.dataHandler.clear(),
                  this.logger.log("Clear data"),
                  this.sdk.postMessage("useDataModule", { action: "clear" });
              }),
              (e.prototype.getItem = function (e) {
                var t = this.dataHandler.getItem(e);
                return (
                  this.logger.log('Get "'.concat(e, '", returning ').concat(t)),
                  this.debugEvent("getItem", e),
                  this.sdk.postMessage("useDataModule", { action: "getItem" }),
                  t
                );
              }),
              (e.prototype.removeItem = function (e) {
                this.dataHandler.removeItem(e),
                  this.logger.log('Remove "'.concat(e, '"')),
                  this.sdk.postMessage("useDataModule", {
                    action: "removeItem",
                  }),
                  this.debugEvent("removeItem", e);
              }),
              (e.prototype.setItem = function (e, t) {
                this.dataHandler.setItem(e, t),
                  this.logger.log('Set "'.concat(e, '" = ').concat(t)),
                  this.sdk.postMessage("useDataModule", { action: "setItem" }),
                  this.debugEvent("setItem", e, t);
              }),
              (e.prototype.syncUnityGameData = function () {
                this.logger.log("Requesting to sync unity game data"),
                  this.sdk.postMessage("syncUnityGameData", {});
              }),
              (e.prototype.debugEvent = function (e, t, n) {
                var r = "".concat(e, "-").concat(t);
                this.alreadySent.includes(r) ||
                  (this.alreadySent.push(r),
                  u.default
                    .getInstance()
                    .sendDebugEvent(
                      "dataEventWithoutSDKPS",
                      { method: e, key: t, value: n },
                      function (e) {
                        return (
                          !!e.dataModule &&
                          "sdk" !== e.dataModule.apsStorageType
                        );
                      }
                    ));
              }),
              e
            );
          })();
        t.default = l;
      },
      881: function (e, t, n) {
        "use strict";
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o = n(659),
          i = r(n(767)),
          a = n(514),
          u = (function () {
            function e(e, t) {
              var n = this;
              (this.sdk = e),
                (this.logger = new i.default("game")),
                (this.settings = { disableChat: !1 }),
                (this.isInstantJoin =
                  window.location.search.includes("instantJoin=true")),
                (this.isInstantMultiplayer =
                  window.location.search.includes("instantJoin=true")),
                (this.loadStatsSent = !1),
                (this.throttledHappyTime = (0, a.throttledMethod)(
                  function () {
                    n.logger.log("Requesting happytime"),
                      n.sdk.postMessage("happytime", {});
                  },
                  1e3,
                  "happytime"
                )),
                (this.throttledGameplayStart = (0, a.throttledMethod)(
                  function () {
                    n.logger.log("Requesting gameplay start"),
                      n.sdk.postMessage("gameplayStart", {});
                  },
                  1e3,
                  "gameplayStart"
                )),
                (this.throttledGameplayStop = (0, a.throttledMethod)(
                  function () {
                    n.logger.log("Requesting gameplay stop"),
                      n.sdk.postMessage("gameplayStop", {});
                  },
                  1e3,
                  "gameplayStop"
                )),
                (this.link = t.gameLink),
                (this.id = t.gameId);
            }
            return (
              (e.prototype.happytime = function () {
                this.throttledHappyTime();
              }),
              (e.prototype.gameplayStart = function () {
                if ((this.throttledGameplayStart(), !this.loadStatsSent)) {
                  this.loadStatsSent = !0;
                  var e = window.performance
                    .getEntriesByType("resource")
                    .map(function (e) {
                      return JSON.parse(JSON.stringify(e));
                    });
                  this.sdk.postMessage("sdkGameLoadStats", { resources: e });
                }
              }),
              (e.prototype.gameplayStop = function () {
                this.throttledGameplayStop();
              }),
              (e.prototype.loadingStart = function () {
                this.logger.log("Requesting game loading start"),
                  this.sdk.postMessage("sdkGameLoadingStart", {});
              }),
              (e.prototype.loadingStop = function () {
                this.logger.log("Requesting game loading stop"),
                  this.sdk.postMessage("sdkGameLoadingStop", {});
              }),
              (e.prototype.inviteLink = function (e) {
                this.logger.log("Requesting invite link");
                var t = (0, o.generateInviteLink)(e, this.link);
                return (
                  this.logger.log("Invite link is ".concat(t)),
                  this.sdk.postMessage("inviteUrl", { inviteUrl: t }),
                  t
                );
              }),
              (e.prototype.showInviteButton = function (e) {
                this.logger.log("Show invite button");
                var t = (0, o.generateInviteLink)(e, this.link);
                return (
                  this.logger.log("Invite button link ".concat(t)),
                  this.sdk.postMessage("showInviteButton", { inviteUrl: t }),
                  t
                );
              }),
              (e.prototype.hideInviteButton = function () {
                this.logger.log("Hide invite button"),
                  this.sdk.postMessage("hideInviteButton", {});
              }),
              (e.prototype.getInviteParam = function (e) {
                return new URLSearchParams(window.location.search).get(e);
              }),
              (e.prototype.handleEvent = function (e) {
                "focusStealAttempt" === e.data.type &&
                  this.restoreCanvasFocus();
              }),
              (e.prototype.restoreCanvasFocus = function () {
                try {
                  var e = document.getElementsByTagName("canvas");
                  1 !== e.length
                    ? this.logger.log(
                        "There are ".concat(
                          e.length,
                          " canvases, don't restore focus"
                        )
                      )
                    : (this.logger.log("Restore focus to canvas"),
                      (e[0].tabIndex = 1),
                      e[0].focus());
                } catch (e) {
                  this.logger.error("Failed to restore canvas focus");
                }
              }),
              e
            );
          })();
        t.default = u;
      },
      273: function (e, t, n) {
        "use strict";
        var r =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                  try {
                    s(r.next(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function u(e) {
                  try {
                    s(r.throw(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function s(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(a, u);
                }
                s((r = r.apply(e, t || [])).next());
              });
            },
          o =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                o,
                i,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: u(0), throw: u(1), return: u(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function u(u) {
                return function (s) {
                  return (function (u) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; i && ((i = 0), u[0] && (a = 0)), a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & u[0]
                                ? r.return
                                : u[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, u[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (u = [2 & u[0], o.value]), u[0])
                        ) {
                          case 0:
                          case 1:
                            o = u;
                            break;
                          case 4:
                            return a.label++, { value: u[1], done: !1 };
                          case 5:
                            a.label++, (r = u[1]), (u = [0]);
                            continue;
                          case 7:
                            (u = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = a.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== u[0] && 2 !== u[0])
                              )
                            ) {
                              a = 0;
                              continue;
                            }
                            if (
                              3 === u[0] &&
                              (!o || (u[1] > o[0] && u[1] < o[3]))
                            ) {
                              a.label = u[1];
                              break;
                            }
                            if (6 === u[0] && a.label < o[1]) {
                              (a.label = o[1]), (o = u);
                              break;
                            }
                            if (o && a.label < o[2]) {
                              (a.label = o[2]), a.ops.push(u);
                              break;
                            }
                            o[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        u = t.call(e, a);
                      } catch (e) {
                        (u = [6, e]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & u[0]) throw u[1];
                    return { value: u[0] ? u[1] : void 0, done: !0 };
                  })([u, s]);
                };
              }
            },
          i =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = i(n(683)),
          u = i(n(881)),
          s = i(n(236)),
          c = i(n(320)),
          l = i(n(767)),
          f = i(n(385)),
          h = i(n(821)),
          d = n(738),
          p = i(n(16)),
          g = (function () {
            function e(e, t, n) {
              var i = this;
              (this.logger = new l.default("none")),
                (this.receiveMessage = function (e) {
                  return r(i, void 0, void 0, function () {
                    var t, n;
                    return o(this, function (r) {
                      return "sdk" !== (t = e.data).messageTarget
                        ? [2]
                        : (n = t.type) && this.isValidCrazyEvent(n)
                        ? (this.logger.verbose("Received message from GF", t),
                          this.bannerModule.handleEvent(e),
                          this.adModule.handleEvent(e),
                          this.userModule.handleEvent(e),
                          this.gameModule.handleEvent(e),
                          h.default.getInstance().handleEvent(e),
                          [2])
                        : [2];
                    });
                  });
                }),
                !0 === e.debug && (l.default.forceEnable = !0),
                (this._isQaTool = e.isQaTool),
                (this.adModule = new s.default(this)),
                (this.bannerModule = new a.default(this, e)),
                (this.gameModule = new u.default(this, e)),
                (this.userModule = new c.default(
                  this,
                  e.systemInfo,
                  !!e.userAccountAvailable,
                  n
                )),
                (this.dataModule = new f.default(this, t)),
                (this.analyticsModule = new p.default(this)),
                window.addEventListener("message", this.receiveMessage, !1),
                h.default.getInstance().init(this, e);
            }
            return (
              Object.defineProperty(e.prototype, "environment", {
                get: function () {
                  return this.postMessage("getEnvironment", {}), "crazygames";
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "isQaTool", {
                get: function () {
                  return this.postMessage("isQATool", {}), this._isQaTool;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "banner", {
                get: function () {
                  return this.bannerModule;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "game", {
                get: function () {
                  return this.gameModule;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "user", {
                get: function () {
                  return this.userModule;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "ad", {
                get: function () {
                  return this.adModule;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "data", {
                get: function () {
                  return this.dataModule;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "analytics", {
                get: function () {
                  return this.analyticsModule;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.postMessage = function (e, t) {
                var n = { type: e, data: t };
                this.logger.verbose("Message to GF", n),
                  d.GF_WINDOW
                    ? d.GF_WINDOW.postMessage(n, "*")
                    : this.logger.log(
                        "Missing GF_WINDOW, message won't be sent"
                      );
              }),
              (e.prototype.isValidCrazyEvent = function (e) {
                switch (e) {
                  case "adStarted":
                  case "adFinished":
                  case "adError":
                  case "adblockDetectionExecuted":
                  case "bannerRendered":
                  case "bannerError":
                  case "requestBanner":
                  case "initialized":
                  case "requestGameDataResponse":
                  case "userLoggedIn":
                  case "showAuthPromptResponse":
                  case "requestUserTokenResponse":
                  case "requestXsollaUserTokenResponse":
                  case "linkAccountResponse":
                  case "initialUserSet":
                  case "focusStealAttempt":
                  case "analyticsInfoResponseFromGF":
                    return !0;
                  default:
                    return !1;
                }
              }),
              e
            );
          })();
        t.default = g;
      },
      320: function (e, t, n) {
        "use strict";
        var r =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                  try {
                    s(r.next(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function u(e) {
                  try {
                    s(r.throw(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function s(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(a, u);
                }
                s((r = r.apply(e, t || [])).next());
              });
            },
          o =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                o,
                i,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: u(0), throw: u(1), return: u(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function u(u) {
                return function (s) {
                  return (function (u) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; i && ((i = 0), u[0] && (a = 0)), a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & u[0]
                                ? r.return
                                : u[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, u[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (u = [2 & u[0], o.value]), u[0])
                        ) {
                          case 0:
                          case 1:
                            o = u;
                            break;
                          case 4:
                            return a.label++, { value: u[1], done: !1 };
                          case 5:
                            a.label++, (r = u[1]), (u = [0]);
                            continue;
                          case 7:
                            (u = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = a.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== u[0] && 2 !== u[0])
                              )
                            ) {
                              a = 0;
                              continue;
                            }
                            if (
                              3 === u[0] &&
                              (!o || (u[1] > o[0] && u[1] < o[3]))
                            ) {
                              a.label = u[1];
                              break;
                            }
                            if (6 === u[0] && a.label < o[1]) {
                              (a.label = o[1]), (o = u);
                              break;
                            }
                            if (o && a.label < o[2]) {
                              (a.label = o[2]), a.ops.push(u);
                              break;
                            }
                            o[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        u = t.call(e, a);
                      } catch (e) {
                        (u = [6, e]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & u[0]) throw u[1];
                    return { value: u[0] ? u[1] : void 0, done: !0 };
                  })([u, s]);
                };
              }
            },
          i =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = i(n(767)),
          u = n(759),
          s = (function () {
            function e(e, t, n, r) {
              (this.sdk = e),
                (this._systemInfo = t),
                (this._userAccountAvailable = n),
                (this.user = null),
                (this.authDeferredPromise = null),
                (this.accountLinkDeferredPromise = null),
                (this.authListeners = []),
                (this.userTokenResolvers = []),
                (this.userTokenRequestInProgress = !1),
                (this.xsollaUserTokenRequestInProgress = !1),
                (this.xsollaUserTokenResolvers = []),
                (this.logger = new a.default("user")),
                (this.user = r);
            }
            return (
              Object.defineProperty(e.prototype, "isUserAccountAvailable", {
                get: function () {
                  return (
                    this.sdk.postMessage("isUserAccountAvailable", {}),
                    !!this._userAccountAvailable
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "systemInfo", {
                get: function () {
                  return (
                    this.sdk.postMessage("getSystemInfo", {}), this._systemInfo
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.showAuthPrompt = function () {
                return r(this, void 0, void 0, function () {
                  var e = this;
                  return o(this, function (t) {
                    if (
                      (this.logger.log("Requesting auth prompt"),
                      this.authDeferredPromise)
                    )
                      throw new u.UserError(
                        "showAuthPromptInProgress",
                        "The auth prompt is already opened"
                      );
                    if (this.user)
                      throw new u.UserError(
                        "userAlreadySignedIn",
                        "The user is already signed in"
                      );
                    return [
                      2,
                      new Promise(function (t, n) {
                        (e.authDeferredPromise = { resolve: t, reject: n }),
                          e.sdk.postMessage("showAuthPrompt", {});
                      }),
                    ];
                  });
                });
              }),
              (e.prototype.handleAuthPromptResponse = function (e) {
                this.logger.log("Received auth prompt response", e);
                var t = e.error,
                  n = e.user;
                t
                  ? this.authDeferredPromise &&
                    this.authDeferredPromise.reject(
                      new u.UserError(t.code, t.message)
                    )
                  : ((this.user = null != n ? n : null),
                    this.callAuthChangeListeners(),
                    this.authDeferredPromise &&
                      this.authDeferredPromise.resolve(this.user)),
                  (this.authDeferredPromise = null);
              }),
              (e.prototype.showAccountLinkPrompt = function () {
                return r(this, void 0, void 0, function () {
                  var e = this;
                  return o(this, function (t) {
                    if (
                      (this.logger.log("Requesting link account prompt"),
                      this.accountLinkDeferredPromise)
                    )
                      throw new u.UserError(
                        "showAccountLinkPromptInProgress",
                        "The account link prompt is already displayed"
                      );
                    if (!this.user)
                      throw new u.UserError(
                        "userNotAuthenticated",
                        "The user is not signed in"
                      );
                    return [
                      2,
                      new Promise(function (t, n) {
                        return r(e, void 0, void 0, function () {
                          return o(this, function (e) {
                            return (
                              (this.accountLinkDeferredPromise = {
                                resolve: t,
                                reject: n,
                              }),
                              this.sdk.postMessage("showAccountLinkPrompt", {}),
                              [2]
                            );
                          });
                        });
                      }),
                    ];
                  });
                });
              }),
              (e.prototype.handleAccountLinkPromptResponse = function (e) {
                this.logger.log("Received account link prompt response", e);
                var t = e.response;
                this.accountLinkDeferredPromise &&
                  this.accountLinkDeferredPromise.resolve({ response: t }),
                  (this.accountLinkDeferredPromise = null);
              }),
              (e.prototype.getUser = function () {
                return r(this, void 0, void 0, function () {
                  return o(this, function (e) {
                    return (
                      this.logger.log("Requesting user object"),
                      this.sdk.postMessage("getUser", {}),
                      [2, this.user]
                    );
                  });
                });
              }),
              (e.prototype.getUserToken = function () {
                var e;
                return r(this, void 0, void 0, function () {
                  var t = this;
                  return o(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          this.logger.log("Requesting user token"),
                          this.tokenExpiresAtMs &&
                            this.tokenExpiresAtMs < Date.now() &&
                            (this.logger.log(
                              "User token expired, clean it so it is requested again"
                            ),
                            (this.userToken = null),
                            (this.tokenExpiresAtMs = null)),
                          this.tokenExpiresAtMs &&
                            !this.userTokenRequestInProgress &&
                            this.tokenExpiresAtMs - 3e4 < Date.now() &&
                            (this.logger.log(
                              "User token expires soon, request new one in background"
                            ),
                            this.requestNewUserToken()),
                          (
                            null === (e = this.userToken) || void 0 === e
                              ? void 0
                              : e.token
                          )
                            ? (this.logger.log("Returning cached user token"),
                              [2, this.userToken.token])
                            : (this.userTokenRequestInProgress
                                ? this.logger.log(
                                    "User token request to portal in progress"
                                  )
                                : (this.logger.log(
                                    "No user token present in the SDK, request one"
                                  ),
                                  this.requestNewUserToken()),
                              [
                                4,
                                new Promise(function (e) {
                                  t.userTokenResolvers.push(function () {
                                    return r(t, void 0, void 0, function () {
                                      return o(this, function (t) {
                                        return e(), [2];
                                      });
                                    });
                                  });
                                }),
                              ])
                        );
                      case 1:
                        if ((n.sent(), !this.userToken))
                          throw (
                            (this.logger.error(
                              "User token missing after portal request finished"
                            ),
                            new u.UserError(
                              "unexpectedError",
                              "User token missing after portal request finished"
                            ))
                          );
                        if (this.userToken.error)
                          throw new u.UserError(
                            this.userToken.error.code,
                            this.userToken.error.message
                          );
                        if (!this.userToken.token)
                          throw (
                            (this.logger.error(
                              "User token missing, even though there isn't any error"
                            ),
                            new u.UserError(
                              "unexpectedError",
                              "User token missing, even though there isn't any error"
                            ))
                          );
                        return [2, this.userToken.token];
                    }
                  });
                });
              }),
              (e.prototype.handleUserTokenResponse = function (e) {
                this.logger.log("Received token response from portal", e),
                  (this.userToken = e),
                  (this.userTokenRequestInProgress = !1),
                  e.expiresIn &&
                    (this.tokenExpiresAtMs = Date.now() + 1e3 * e.expiresIn),
                  this.userTokenResolvers.forEach(function (e) {
                    return e();
                  }),
                  (this.userTokenResolvers = []);
              }),
              (e.prototype.requestNewUserToken = function () {
                this.logger.log("Requesting user token from portal"),
                  this.sdk.postMessage("requestUserToken", {}),
                  (this.userTokenRequestInProgress = !0);
              }),
              (e.prototype.getXsollaUserToken = function () {
                var e;
                return r(this, void 0, void 0, function () {
                  var t = this;
                  return o(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          this.logger.log("Requesting Xsolla user token"),
                          this.xsollaUserTokenExpiresAtMs &&
                            this.xsollaUserTokenExpiresAtMs < Date.now() &&
                            (this.logger.log(
                              "Xsolla user token expired, clean it so it is requested again"
                            ),
                            (this.xsollaUserToken = null),
                            (this.xsollaUserTokenExpiresAtMs = null)),
                          this.xsollaUserTokenExpiresAtMs &&
                            !this.xsollaUserTokenRequestInProgress &&
                            this.xsollaUserTokenExpiresAtMs - 3e4 <
                              Date.now() &&
                            (this.logger.log(
                              "Xsolla user token expires soon, request new one in background"
                            ),
                            this.requestNewXsollaUserToken()),
                          (
                            null === (e = this.xsollaUserToken) || void 0 === e
                              ? void 0
                              : e.token
                          )
                            ? (this.logger.log(
                                "Returning cached Xsolla user token"
                              ),
                              [2, this.xsollaUserToken.token])
                            : (this.xsollaUserTokenRequestInProgress
                                ? this.logger.log(
                                    "Xsolla user token request to portal in progress"
                                  )
                                : (this.logger.log(
                                    "No Xsolla user token present in the SDK, request one"
                                  ),
                                  this.requestNewXsollaUserToken()),
                              [
                                4,
                                new Promise(function (e) {
                                  t.xsollaUserTokenResolvers.push(function () {
                                    return r(t, void 0, void 0, function () {
                                      return o(this, function (t) {
                                        return e(), [2];
                                      });
                                    });
                                  });
                                }),
                              ])
                        );
                      case 1:
                        if ((n.sent(), !this.xsollaUserToken))
                          throw (
                            (this.logger.error(
                              "Xsolla user token response missing after portal request finished"
                            ),
                            new u.UserError(
                              "unexpectedError",
                              "Xsolla user token missing after portal request finished"
                            ))
                          );
                        if (this.xsollaUserToken.error)
                          throw new u.UserError(
                            this.xsollaUserToken.error.code,
                            this.xsollaUserToken.error.message
                          );
                        if (!this.xsollaUserToken.token)
                          throw (
                            (this.logger.error(
                              "Xsolla user token missing, even though there isn't any error"
                            ),
                            new u.UserError(
                              "unexpectedError",
                              "Xsolla user token missing, even though there isn't any error"
                            ))
                          );
                        return [2, this.xsollaUserToken.token];
                    }
                  });
                });
              }),
              (e.prototype.handleXsollaUserTokenResponse = function (e) {
                this.logger.log(
                  "Received Xsolla user token response from portal",
                  e
                ),
                  (this.xsollaUserToken = e),
                  (this.xsollaUserTokenRequestInProgress = !1),
                  e.expiresIn &&
                    (this.xsollaUserTokenExpiresAtMs =
                      Date.now() + 1e3 * e.expiresIn),
                  this.xsollaUserTokenResolvers.forEach(function (e) {
                    return e();
                  }),
                  (this.xsollaUserTokenResolvers = []);
              }),
              (e.prototype.requestNewXsollaUserToken = function () {
                this.logger.log("Requesting Xsolla user token from portal"),
                  this.sdk.postMessage("requestXsollaUserToken", {}),
                  (this.xsollaUserTokenRequestInProgress = !0);
              }),
              (e.prototype.addScore = function (e) {
                this.logger.log("Requesting to add score", e),
                  console.warn("addScore is temporarily disabled");
              }),
              (e.prototype.addScoreEncrypted = function (e, t) {
                if (
                  (this.logger.log(
                    "Requesting to add score encrypted. Score: ",
                    e,
                    "Encrypted: ",
                    t
                  ),
                  "number" != typeof e || isNaN(e))
                )
                  throw (
                    (this.logger.error("Score input must be a number"),
                    new u.UserError(
                      "invalidScoreFormat",
                      "Score input must be a number"
                    ))
                  );
                if ("https:" !== window.location.protocol)
                  throw (
                    (this.logger.error("AddScore is only supported on https"),
                    new u.UserError(
                      "unexpectedError",
                      "AddScore is only supported on https"
                    ))
                  );
                this.sdk.postMessage("addScore", {
                  score: e,
                  encryptedScore: t,
                });
              }),
              (e.prototype.handleEvent = function (e) {
                var t = e.data;
                switch (t.type) {
                  case "showAuthPromptResponse":
                    this.handleAuthPromptResponse(t);
                    break;
                  case "linkAccountResponse":
                    this.handleAccountLinkPromptResponse(t.data);
                    break;
                  case "userLoggedIn":
                    this.handleUserLoggedIn(t.data);
                    break;
                  case "requestUserTokenResponse":
                    this.handleUserTokenResponse(t);
                    break;
                  case "requestXsollaUserTokenResponse":
                    this.handleXsollaUserTokenResponse(t);
                }
              }),
              (e.prototype.addAuthListener = function (e) {
                this.sdk.postMessage("addAuthListener", {}),
                  this.authListeners.push(e);
              }),
              (e.prototype.removeAuthListener = function (e) {
                this.sdk.postMessage("removeAuthListener", {}),
                  (this.authListeners = this.authListeners.filter(function (t) {
                    return t !== e;
                  }));
              }),
              (e.prototype.handleUserLoggedIn = function (e) {
                var t;
                (this.user = null !== (t = e.user) && void 0 !== t ? t : null),
                  this.callAuthChangeListeners();
              }),
              (e.prototype.callAuthChangeListeners = function () {
                var e = this;
                this.authListeners.forEach(function (t) {
                  return e.callAuthChangeListener(t);
                });
              }),
              (e.prototype.callAuthChangeListener = function (e) {
                try {
                  e(this.user);
                } catch (e) {
                  console.error(e);
                }
              }),
              e
            );
          })();
        t.default = s;
      },
      176: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        console.warn(n(930));
        var r = n(930),
          o = (function () {
            function e() {
            }
            return (
              Object.defineProperty(e.prototype, "ad", {
                get: function () {
                  throw new r.GeneralError(this.code, this.message);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "banner", {
                get: function () {
                  throw new r.GeneralError(this.code, this.message);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "game", {
                get: function () {
                  throw new r.GeneralError(this.code, this.message);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "user", {
                get: function () {
                  throw new r.GeneralError(this.code, this.message);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "data", {
                get: function () {
                  throw new r.GeneralError(this.code, this.message);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "analytics", {
                get: function () {
                  throw new r.GeneralError(this.code, this.message);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "environment", {
                get: function () {
                  return "disabled";
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "isQaTool", {
                get: function () {
                  return !1;
                },
                enumerable: !1,
                configurable: !0,
              }),
              e
            );
          })();
        t.default = o;
      },
      608: function (e, t, n) {
        "use strict";
        var r =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                  try {
                    s(r.next(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function u(e) {
                  try {
                    s(r.throw(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function s(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(a, u);
                }
                s((r = r.apply(e, t || [])).next());
              });
            },
          o =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                o,
                i,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: u(0), throw: u(1), return: u(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function u(u) {
                return function (s) {
                  return (function (u) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; i && ((i = 0), u[0] && (a = 0)), a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & u[0]
                                ? r.return
                                : u[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, u[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (u = [2 & u[0], o.value]), u[0])
                        ) {
                          case 0:
                          case 1:
                            o = u;
                            break;
                          case 4:
                            return a.label++, { value: u[1], done: !1 };
                          case 5:
                            a.label++, (r = u[1]), (u = [0]);
                            continue;
                          case 7:
                            (u = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = a.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== u[0] && 2 !== u[0])
                              )
                            ) {
                              a = 0;
                              continue;
                            }
                            if (
                              3 === u[0] &&
                              (!o || (u[1] > o[0] && u[1] < o[3]))
                            ) {
                              a.label = u[1];
                              break;
                            }
                            if (6 === u[0] && a.label < o[1]) {
                              (a.label = o[1]), (o = u);
                              break;
                            }
                            if (o && a.label < o[2]) {
                              (a.label = o[2]), a.ops.push(u);
                              break;
                            }
                            o[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        u = t.call(e, a);
                      } catch (e) {
                        (u = [6, e]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & u[0]) throw u[1];
                    return { value: u[0] ? u[1] : void 0, done: !0 };
                  })([u, s]);
                };
              }
            },
          i =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = n(822),
          u = n(823),
          s = i(n(767)),
          c = (function () {
            function e(e) {
              (this.sdk = e),
                (this.requestInProgress = !1),
                (this.overlay = null),
                (this.logger = new s.default("ad")),
                (this.adPlaying = !1);
            }
            return (
              (e.prototype.init = function () {
                (this.overlay = document.createElement("div")),
                  (this.overlay.id = "local-overlay"),
                  this.createOverlayStyle(),
                  document.body.appendChild(this.overlay);
              }),
              (e.prototype.prefetchAd = function (e) {
                this.logger.log("Prefetching ".concat(e, " ad"));
              }),
              (e.prototype.requestAd = function (e, t) {
                return r(this, void 0, void 0, function () {
                  return o(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return this.requestInProgress
                          ? ((null == t ? void 0 : t.adError)
                              ? (0, u.wrapUserFn)(t.adError)(
                                  new a.AdError(
                                    "other",
                                    "An ad request is already in progress"
                                  )
                                )
                              : (null == t ? void 0 : t.adFinished) &&
                                (0, u.wrapUserFn)(t.adFinished)(),
                            [2])
                          : ((this.adPlaying = !0),
                            (null == t ? void 0 : t.adStarted) &&
                              (0, u.wrapUserFn)(t.adStarted)(),
                            this.sdk.banner.activeBannersCount > 0 &&
                              this.sdk.banner.clearAllBanners(),
                            [4, this.renderFakeAd(e)]);
                      case 1:
                        return (
                          n.sent(),
                          (this.adPlaying = !1),
                          (null == t ? void 0 : t.adFinished) &&
                            (0, u.wrapUserFn)(t.adFinished)(),
                          [2]
                        );
                    }
                  });
                });
              }),
              (e.prototype.hasAdblock = function () {
                return r(this, void 0, void 0, function () {
                  return o(this, function (e) {
                    return (
                      this.logger.log(
                        "Requesting adblock status (always false) (local)"
                      ),
                      [2, !1]
                    );
                  });
                });
              }),
              (e.prototype.renderFakeAd = function (e) {
                return r(this, void 0, void 0, function () {
                  var t = this;
                  return o(this, function (n) {
                    return (
                      this.logger.log("Requesting ".concat(e, " ad")),
                      (this.requestInProgress = !0),
                      this.showOverlay(),
                      (this.overlay.innerHTML = "<h1>A ".concat(
                        e,
                        " ad would appear here</h1>"
                      )),
                      [
                        2,
                        new Promise(function (e) {
                          window.setTimeout(function () {
                            (t.requestInProgress = !1), t.hideOverlay(), e();
                          }, 5e3);
                        }),
                      ]
                    );
                  });
                });
              }),
              (e.prototype.showOverlay = function () {
                this.overlay.style.display = "flex";
              }),
              (e.prototype.hideOverlay = function () {
                (this.overlay.style.display = "none"),
                  (this.overlay.innerHTML = "");
              }),
              (e.prototype.createOverlayStyle = function () {
                var e = {
                  position: "fixed",
                  display: "none",
                  inset: 0,
                  "font-family": "Arial, Helvetica, sans-serif",
                  color: "white",
                  "align-items": "center",
                  "justify-content": "center",
                  "background-color": "rgba(0,0,0,0.75)",
                  "z-index": "10000",
                };
                for (var t in e) this.overlay.style[t] = e[t];
              }),
              Object.defineProperty(e.prototype, "isAdPlaying", {
                get: function () {
                  return this.adPlaying;
                },
                enumerable: !1,
                configurable: !0,
              }),
              e
            );
          })();
        t.default = c;
      },
      216: function (e, t, n) {
        "use strict";
        var r =
            (this && this.__assign) ||
            function () {
              return (
                (r =
                  Object.assign ||
                  function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                      for (var o in (t = arguments[n]))
                        Object.prototype.hasOwnProperty.call(t, o) &&
                          (e[o] = t[o]);
                    return e;
                  }),
                r.apply(this, arguments)
              );
            },
          o =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                  try {
                    s(r.next(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function u(e) {
                  try {
                    s(r.throw(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function s(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(a, u);
                }
                s((r = r.apply(e, t || [])).next());
              });
            },
          i =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                o,
                i,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: u(0), throw: u(1), return: u(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function u(u) {
                return function (s) {
                  return (function (u) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; i && ((i = 0), u[0] && (a = 0)), a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & u[0]
                                ? r.return
                                : u[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, u[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (u = [2 & u[0], o.value]), u[0])
                        ) {
                          case 0:
                          case 1:
                            o = u;
                            break;
                          case 4:
                            return a.label++, { value: u[1], done: !1 };
                          case 5:
                            a.label++, (r = u[1]), (u = [0]);
                            continue;
                          case 7:
                            (u = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = a.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== u[0] && 2 !== u[0])
                              )
                            ) {
                              a = 0;
                              continue;
                            }
                            if (
                              3 === u[0] &&
                              (!o || (u[1] > o[0] && u[1] < o[3]))
                            ) {
                              a.label = u[1];
                              break;
                            }
                            if (6 === u[0] && a.label < o[1]) {
                              (a.label = o[1]), (o = u);
                              break;
                            }
                            if (o && a.label < o[2]) {
                              (a.label = o[2]), a.ops.push(u);
                              break;
                            }
                            o[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        u = t.call(e, a);
                      } catch (e) {
                        (u = [6, e]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & u[0]) throw u[1];
                    return { value: u[0] ? u[1] : void 0, done: !0 };
                  })([u, s]);
                };
              }
            },
          a =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 });
        var u = n(414),
          s = n(314),
          c = a(n(767)),
          l = n(81),
          f = n(862),
          h = (function () {
            function e(e) {
              (this.sdk = e),
                (this.disableBannerCheck = !1),
                (this.overlayBanners = {}),
                (this.renderedBannerIds = new Set()),
                (this.logger = new c.default("banner"));
            }
            return (
              (e.prototype.requestBanner = function (e) {
                return o(this, void 0, void 0, function () {
                  var t;
                  return i(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          this.logger.log(
                            "Requesting banner with automatic rendering",
                            e
                          ),
                          this.ensureVideoAdNotPlaying(e.id),
                          [4, this.prefetchBanner(e)]
                        );
                      case 1:
                        return (
                          (t = n.sent()), [2, this.renderPrefetchedBanner(t)]
                        );
                    }
                  });
                });
              }),
              (e.prototype.requestResponsiveBanner = function (e) {
                return o(this, void 0, void 0, function () {
                  var t, n, r, o, a;
                  return i(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return (
                          this.logger.log(
                            "Requesting responsive banner with automatic rendering #".concat(
                              e
                            )
                          ),
                          this.ensureVideoAdNotPlaying(e),
                          [
                            4,
                            (0, l.getBannerContainer)(
                              e,
                              !this.disableBannerCheck
                            ),
                          ]
                        );
                      case 1:
                        return (
                          (t = i.sent()),
                          (n = t.containerInfo.size),
                          (r = n.width),
                          (o = n.height),
                          [
                            4,
                            this.prefetchResponsiveBanner({
                              id: e,
                              width: r,
                              height: o,
                            }),
                          ]
                        );
                      case 2:
                        return (
                          (a = i.sent()), [2, this.renderPrefetchedBanner(a)]
                        );
                    }
                  });
                });
              }),
              (e.prototype.prefetchBanner = function (e) {
                return o(this, void 0, void 0, function () {
                  var t, n;
                  return i(this, function (o) {
                    return (
                      this.logger.log("Prefetch banner", e),
                      (t = (0, l.ContainerIdToInnerId)(e.id)),
                      [
                        2,
                        {
                          id: (n = r(r({}, e), { id: t })).id,
                          banner: n,
                          options: {},
                        },
                      ]
                    );
                  });
                });
              }),
              (e.prototype.prefetchResponsiveBanner = function (e) {
                return o(this, void 0, void 0, function () {
                  var t, n, r, o;
                  return i(this, function (i) {
                    return (
                      this.logger.log(
                        "Prefetch responsive banner #".concat(e.id)
                      ),
                      (t = e.width),
                      (n = e.height),
                      (r = (0, l.ContainerIdToInnerId)(e.id)),
                      [
                        2,
                        {
                          id: (o = {
                            id: r,
                            width: t,
                            height: n,
                            isResponsive: !0,
                          }).id,
                          banner: o,
                          options: {},
                        },
                      ]
                    );
                  });
                });
              }),
              (e.prototype.renderPrefetchedBanner = function (e) {
                return o(this, void 0, void 0, function () {
                  var t;
                  return i(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          this.logger.log("Rendering prefetched banner", e),
                          (t = (0, l.InnerIdToContainerId)(e.id)),
                          this.ensureVideoAdNotPlaying(t),
                          [4, (0, l.getBannerContainer)(t, !0)]
                        );
                      case 1:
                        return (
                          n.sent(),
                          this.renderedBannerIds.add(t),
                          (0, s.renderFakeBanner)(e.banner),
                          [2]
                        );
                    }
                  });
                });
              }),
              (e.prototype.ensureVideoAdNotPlaying = function (e) {
                if (this.sdk.ad.isAdPlaying)
                  throw new f.BannerError(
                    "videoAdPlaying",
                    "Banners cannot be rendered while a video ad is playing",
                    e
                  );
              }),
              (e.prototype.requestOverlayBanners = function (e, t) {
                var n = this,
                  r = e.map(function (e) {
                    return e.id;
                  });
                Object.keys(this.overlayBanners).forEach(function (e) {
                  r.includes(e) ||
                    (n.logger.log("Remove overlay banner " + e),
                    n.overlayBanners[e].destroy(),
                    delete n.overlayBanners[e]);
                }),
                  e.forEach(function (e) {
                    if (n.overlayBanners[e.id])
                      n.logger.log("Skip overlay banner update " + e.id);
                    else {
                      n.logger.log("Create overlay banner " + e.id);
                      var r = new u.OverlayBanner(
                        e,
                        n.disableBannerCheck,
                        n,
                        t
                      );
                      n.overlayBanners[e.id] = r;
                    }
                  });
              }),
              (e.prototype.clearBanner = function (e) {
                var t = document.getElementById((0, l.ContainerIdToInnerId)(e));
                t
                  ? (t.remove(),
                    this.renderedBannerIds.delete(e),
                    this.logger.log(
                      "Cleared the banner from container #".concat(e)
                    ))
                  : this.logger.log(
                      "There isn't a banner in container #".concat(
                        e,
                        ", not clearing anything."
                      )
                    );
              }),
              (e.prototype.clearAllBanners = function () {
                var e = this,
                  t = Array.from(this.renderedBannerIds.values());
                this.logger.log(
                  "Clearing all banners, ids: ",
                  t
                    .map(function (e) {
                      return "#".concat(e);
                    })
                    .join(", ")
                ),
                  t.forEach(function (t) {
                    e.clearBanner(t);
                  });
              }),
              Object.defineProperty(e.prototype, "activeBannersCount", {
                get: function () {
                  return this.renderedBannerIds.size;
                },
                enumerable: !1,
                configurable: !0,
              }),
              e
            );
          })();
        t.default = h;
      },
      999: function (e, t, n) {
        "use strict";
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o = r(n(767)),
          i = n(873),
          a = n(825),
          u = (function () {
            function e(e) {
              this.logger = new o.default("data");
              var t = (0, i.loadGameDataFromLs)(e.game.id);
              this.localDataHandler = new a.LocalDataHandler(t, e.game.id);
            }
            return (
              (e.prototype.clear = function () {
                this.logger.log("Clear data"), this.localDataHandler.clear();
              }),
              (e.prototype.getItem = function (e) {
                var t = this.localDataHandler.getItem(e);
                return (
                  this.logger.log('Get "'.concat(e, '", returning ').concat(t)),
                  t
                );
              }),
              (e.prototype.removeItem = function (e) {
                this.logger.log('Remove "'.concat(e, '"')),
                  this.localDataHandler.removeItem(e);
              }),
              (e.prototype.setItem = function (e, t) {
                this.logger.log('Set "'.concat(e, '" = ').concat(t)),
                  this.localDataHandler.setItem(e, t);
              }),
              (e.prototype.syncUnityGameData = function () {
                this.logger.log("Requesting to sync unity PlayerPrefs (local)");
              }),
              e
            );
          })();
        t.default = u;
      },
      942: function (e, t, n) {
        "use strict";
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o = r(n(608)),
          i = r(n(216)),
          a = r(n(338)),
          u = n(823),
          s = n(659),
          c = r(n(767)),
          l = n(514),
          f = r(n(999)),
          h = n(182),
          d = (function () {
            function e() {
              var e = this;
              (this.adModule = new o.default(this)),
                (this.bannerModule = new i.default(this)),
                (this.userModule = new a.default()),
                (this.dataModule = new f.default(this)),
                (this.gameLogger = new c.default("game")),
                (this.analyticsLogger = new c.default("analytics")),
                (this.throttledHappyTime = (0, l.throttledMethod)(
                  function () {
                    return e.gameLogger.log("Requesting happytime (local)");
                  },
                  1e3,
                  "happytime"
                )),
                (this.throttledGameplayStart = (0, l.throttledMethod)(
                  function () {
                    return e.gameLogger.log(
                      "Requesting gameplay start (local)"
                    );
                  },
                  1e3,
                  "gameplayStart"
                )),
                (this.throttledGameplayStop = (0, l.throttledMethod)(
                  function () {
                    return e.gameLogger.log("Requesting gameplay stop (local)");
                  },
                  1e3,
                  "gameplayStop"
                )),
                (this.showInviteButton = function (t) {
                  e.gameLogger.log("Show invite button (local)");
                  var n = (0, s.generateInviteLink)(t, e.game.link);
                  return e.gameLogger.log("Invite button link ".concat(n)), n;
                }),
                (this.inviteLink = function (t) {
                  e.gameLogger.log("Requesting invite link (local)");
                  var n = (0, s.generateInviteLink)(t, e.game.link);
                  return e.gameLogger.log("Invite link is ".concat(n)), n;
                }),
                this.adModule.init(),
                (this.bannerModule.disableBannerCheck =
                  "true" ===
                  (0, u.getQueryStringValue)("disable_banner_check"));
            }
            return (
              Object.defineProperty(e.prototype, "ad", {
                get: function () {
                  return this.adModule;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "banner", {
                get: function () {
                  return this.bannerModule;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "user", {
                get: function () {
                  return this.userModule;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "data", {
                get: function () {
                  return this.dataModule;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "environment", {
                get: function () {
                  return "local";
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "isQaTool", {
                get: function () {
                  return !1;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "game", {
                get: function () {
                  var e = this;
                  return {
                    link: "https://www.crazygames.com/game/your-game-will-appear-here",
                    id: "local",
                    isInstantJoin:
                      window.location.search.includes("instantJoin=true"),
                    isInstantMultiplayer:
                      window.location.search.includes("instantJoin=true"),
                    happytime: function () {
                      return e.throttledHappyTime();
                    },
                    gameplayStart: function () {
                      return e.throttledGameplayStart();
                    },
                    gameplayStop: function () {
                      return e.throttledGameplayStop();
                    },
                    loadingStart: function () {
                      return e.gameLogger.log(
                        "Requesting game loading start (local)"
                      );
                    },
                    loadingStop: function () {
                      return e.gameLogger.log(
                        "Requesting game loading stop (local)"
                      );
                    },
                    inviteLink: this.inviteLink,
                    showInviteButton: this.showInviteButton,
                    hideInviteButton: function () {
                      return e.gameLogger.log("Hide invite button (local)");
                    },
                    getInviteParam: function (e) {
                      return new URLSearchParams(window.location.search).get(e);
                    },
                    settings: { disableChat: !1 },
                  };
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "analytics", {
                get: function () {
                  var e = this;
                  return {
                    trackOrder: function (t, n) {
                      if (!(0, u.isXsollaOrderArgumentValid)(n))
                        throw new h.AnalyticsError(
                          "invalidArgument",
                          "Order must be a JSON object."
                        );
                      if (!h.PAYMENT_PROVIDERS.includes(t))
                        throw new h.AnalyticsError(
                          "invalidArgument",
                          "Unsupported payment provider. Supported providers: ".concat(
                            h.PAYMENT_PROVIDERS.join(",")
                          )
                        );
                      e.analyticsLogger.log('Track "'.concat(t, '" order'), n);
                    },
                  };
                },
                enumerable: !1,
                configurable: !0,
              }),
              e
            );
          })();
        t.default = d;
      },
      338: function (e, t, n) {
        "use strict";
        var r =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                  try {
                    s(r.next(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function u(e) {
                  try {
                    s(r.throw(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function s(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(a, u);
                }
                s((r = r.apply(e, t || [])).next());
              });
            },
          o =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                o,
                i,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: u(0), throw: u(1), return: u(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function u(u) {
                return function (s) {
                  return (function (u) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; i && ((i = 0), u[0] && (a = 0)), a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & u[0]
                                ? r.return
                                : u[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, u[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (u = [2 & u[0], o.value]), u[0])
                        ) {
                          case 0:
                          case 1:
                            o = u;
                            break;
                          case 4:
                            return a.label++, { value: u[1], done: !1 };
                          case 5:
                            a.label++, (r = u[1]), (u = [0]);
                            continue;
                          case 7:
                            (u = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = a.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== u[0] && 2 !== u[0])
                              )
                            ) {
                              a = 0;
                              continue;
                            }
                            if (
                              3 === u[0] &&
                              (!o || (u[1] > o[0] && u[1] < o[3]))
                            ) {
                              a.label = u[1];
                              break;
                            }
                            if (6 === u[0] && a.label < o[1]) {
                              (a.label = o[1]), (o = u);
                              break;
                            }
                            if (o && a.label < o[2]) {
                              (a.label = o[2]), a.ops.push(u);
                              break;
                            }
                            o[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        u = t.call(e, a);
                      } catch (e) {
                        (u = [6, e]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & u[0]) throw u[1];
                    return { value: u[0] ? u[1] : void 0, done: !0 };
                  })([u, s]);
                };
              }
            },
          i =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = n(759),
          u = n(823),
          s = i(n(767)),
          c = (function () {
            function e() {
              var e, t, n;
              (this.systemInfo = {
                browser: { name: "demo", version: "demo" },
                countryCode: "US",
                os: { name: "demo", version: "demo" },
                device: {
                  type:
                    ((e = navigator.userAgent.toLowerCase()),
                    (t = /mobile/i.test(e)),
                    (n = /tablet/i.test(e) || (t && /ipad/i.test(e))),
                    t ? "mobile" : n ? "tablet" : "desktop"),
                },
              }),
                (this.isUserAccountAvailable = !0),
                (this.demoUser1 = {
                  username: "User1",
                  profilePictureUrl:
                    "https://images.crazygames.com/userportal/avatars/1.png",
                }),
                (this.demoUser2 = {
                  username: "User2",
                  profilePictureUrl:
                    "https://images.crazygames.com/userportal/avatars/2.png",
                }),
                (this.user1Token =
                  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJpZFVzZXIxIiwidXNlcm5hbWUiOiJVc2VyMSIsImdhbWVJZCI6InlvdXJHYW1lSWQiLCJwcm9maWxlUGljdHVyZVVybCI6Imh0dHBzOi8vaW1hZ2VzLmNyYXp5Z2FtZXMuY29tL3VzZXJwb3J0YWwvYXZhdGFycy8xLnBuZyIsImlhdCI6MTY2ODU5MzMxNCwiZXhwIjo0ODI0Mjg4NTE0fQ.u4N2DzCC6Vmo6Gys-XSl8rHQR0NUJAcWQWr29eLd54qMDPbCopPG0kye8TAidOU6dWAqNWO_kERbl75nTxNcJjbW4yqBS_bIPingIhuCCJsjvnQPkalfmVotmoZGQP21Q9MyZPfpjZNogioA3a0vm6APXAqzudTA9lTioztnT4YvgndISngOMQVNoDCJ_DgCbKy8GFQDcCN-AHFFb0WIVWiTYszv-9JZohUzULt-ueYL31pXVGHQ5C4rHESEg7LYzx1IaLKw1zcoYGxul0RxR35nm3yD_bGa6fQVzCfnKnhEBRifUZsIN1LfIHfNB23ZOh1llG7PEOdvtCSfIxP9ZK6t4gRkGn1VsqZFAMhq1LgJebO8hcm_Iqx0wF3WkdMysoQuWThTNKnwmphv9pguuALILYJluUP8UQll3qiF6gzoLPy1MfD_9l4TPZeP9Bv50B-Tm6Lk3OW248jyuFRKP_VgwZutTb5pJ7LggFcqWFXsBv5ZG3V2zsfVwpAPDhpmb4ykjoB2xLSuxjrvs1dzMhl02QAQjqTUgHj4fstgX-2jYowDyyPjj6JbT2ZC7vrrdmPvc8AcNvyCszamfRYjexElGaeJDDt6vtRuJw_JVwsCLaYHGif4UaKCoe6BECg3mRVUkH08Nm-qQPQw9slpYZmxckFEQQPCGkkPhgOBFkE"),
                (this.user2Token =
                  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJpZFVzZXIyIiwidXNlcm5hbWUiOiJVc2VyMiIsImdhbWVJZCI6InlvdXJHYW1lSWQiLCJwcm9maWxlUGljdHVyZVVybCI6Imh0dHBzOi8vaW1hZ2VzLmNyYXp5Z2FtZXMuY29tL3VzZXJwb3J0YWwvYXZhdGFycy8yLnBuZyIsImlhdCI6MTY2ODU5MzMxNCwiZXhwIjo0ODI0Mjg4NTE0fQ.kh60HYKR8txKvLoCB6dQ9hQG8Mu1UgtneTGs3Y15HvBWrZoLKp3x3pTf_Vhq8xzs7fQYJKr94zYAxxFRztHey7Tv7PBBmPESUFo8Le-_s2xDy982sFhpM6XDt84ohhvEuJEsOW8wIcCaCK6wzm6UWY6n1bpw1cO1KNASyZRSkDRhfyzDVJ5e167OLgGe3euodTHgClJPDv0ZYhle9KH86PepWamCm0429VrzyOu6QdbtFcRlRNZVnTtgNrCpyvss4AyDhnY5qV9yng7xHVt4zlocP_Z7btBL_kxrzYskhJi6KYuQAYmqLxqHSDnehlIvgO4cdEpJA_FOTeACTohhEu8zjXRrfdAFvEe0W6qqUo5HNFoElRoxYWf11WGSdrJCjpF4Qei9BPgprFaVH2Xi-ITAjKyElQxeKs5p6VmvaMAGwdqZgM4fm7OSex8QQGK0HFJ7wFoCTV5PLl-MBVvTSTfemJMWEwc8od124gwT_uGdDKrASovT2pijgBsAi3jxwgfEr1RPq8uCgZtksrTqaAM9TMv9Z6Zv35pdgTrWzTrOn-G-uc4EPZq7iQaEnglWEFj8Qsm_nMQMgtIM7MYG8KwPC4if3-Yc8KwaAL_taVvkqyMaV3W5j4MX9b1bbf_fw3jrGt74MACb7FtgzKudxoz2CXKZqTppadxS_IOnlMk"),
                (this.expiredToken =
                  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJpZFVzZXIxIiwidXNlcm5hbWUiOiJVc2VyMSIsImdhbWVJZCI6InlvdXJHYW1lSWQiLCJwcm9maWxlUGljdHVyZVVybCI6Imh0dHBzOi8vaW1hZ2VzLmNyYXp5Z2FtZXMuY29tL3VzZXJwb3J0YWwvYXZhdGFycy8xLnBuZyIsImlhdCI6MTY2ODU5MzQ5MSwiZXhwIjoxNjY4NTkzNDkyfQ.l_0cyeD-suEM7n9l-Vb2nP5vTJi-e3HwZQWLUESJMdVTX1zPDuQhwnSgHhcGVGFnhG5Wvtni-ElpM8HnVNvY7hRthbeP23n2ScAJBvAX10vrzPuLJRn_Nj_5GcRQpK4fH813Ij8ZWuOaS2hD4gKaEUessZs5n5hNBTQN9T5j4wkNvfhuw9vqtVOha2aPveqeVy1eA5XAWI7IirHi31-Dw60MSVgsp3r4tpYEHTlUPktzLsQvO9Sk9IE7iybg9ycoFoS6L1eAvxGWVF1BMHRerPwdOV9CN0rtrqrTM3pyb1fpmFfgQpoA8AgPuVrU58mwyeTpUQ4WSrPrltGjxxfiGQOATBDBrJk5V173BfUgBEgAEP0TifWAQt02iijJa9G6q-V8p0GWto1EYSdvEDmG0YhoRBVxnOQH3U1Fu0yxMWGMm9VmZVVhVN8PpLjitEhP4Gn33IafpS05d1-Q0NFMb9-FvQCdtXjTaGbaBVIeBN-aO0r4ERvoBE9R0AUrywd9Z2zK_qKRvp35NyryLjnedsYt5Xrc9TA2uDMR77TjByyqsdQ_qv4zhLfhuiMiweXyPfYzltAiNJmEUohxlP7OvH33B6xpT7Qz2ZyEeMHBrQRQGGlT6MowcMYx_2LFNSK8PwZJNlMs0Uw_uCIu-4TvqleVleIg7sLhWiijw1cxtmM"),
                (this.logger = new s.default("user"));
            }
            return (
              (e.prototype.showAuthPrompt = function () {
                return r(this, void 0, void 0, function () {
                  return o(this, function (e) {
                    switch (
                      (this.logger.log("Requesting auth prompt (local)"),
                      (0, u.getQueryStringValue)("show_auth_prompt_response"))
                    ) {
                      case "user1":
                      default:
                        return [2, this.demoUser1];
                      case "user2":
                        return [2, this.demoUser2];
                      case "user_cancelled":
                        throw new a.UserError(
                          "userCancelled",
                          "User cancelled the auth prompt"
                        );
                    }
                    return [2];
                  });
                });
              }),
              (e.prototype.showAccountLinkPrompt = function () {
                return r(this, void 0, void 0, function () {
                  return o(this, function (e) {
                    switch (
                      (this.logger.log(
                        "Requesting link account prompt (local)"
                      ),
                      (0, u.getQueryStringValue)("link_account_response"))
                    ) {
                      case "yes":
                      default:
                        return [2, { response: "yes" }];
                      case "no":
                        return [2, { response: "no" }];
                      case "logged_out":
                        throw new a.UserError(
                          "userNotAuthenticated",
                          "The user is not authenticated"
                        );
                    }
                    return [2];
                  });
                });
              }),
              (e.prototype.getUser = function () {
                return r(this, void 0, void 0, function () {
                  return o(this, function (e) {
                    switch (
                      (this.logger.log("Requesting user object (local)"),
                      (0, u.getQueryStringValue)("user_response"))
                    ) {
                      case "user1":
                      default:
                        return [2, this.demoUser1];
                      case "user2":
                        return [2, this.demoUser2];
                      case "logged_out":
                        return [2, null];
                    }
                    return [2];
                  });
                });
              }),
              (e.prototype.getUserToken = function () {
                return r(this, void 0, void 0, function () {
                  return o(this, function (e) {
                    switch (
                      (this.logger.log("Requesting user token (local)"),
                      (0, u.getQueryStringValue)("token_response"))
                    ) {
                      case "user1":
                      default:
                        return [2, this.user1Token];
                      case "user2":
                        return [2, this.user2Token];
                      case "expired_token":
                        return [2, this.expiredToken];
                      case "logged_out":
                        throw new a.UserError(
                          "userNotAuthenticated",
                          "The user is not authenticated"
                        );
                    }
                    return [2];
                  });
                });
              }),
              (e.prototype.getXsollaUserToken = function () {
                return r(this, void 0, void 0, function () {
                  return o(this, function (e) {
                    return (
                      this.logger.log(
                        "Requesting Xsolla user token (local). Xsolla token not supported locally."
                      ),
                      [2, "Xsolla token not supported locally"]
                    );
                  });
                });
              }),
              (e.prototype.addScore = function (e) {
                this.logger.log("Requesting to add score (local)", e);
              }),
              (e.prototype.addScoreEncrypted = function (e, t) {
                this.logger.log(
                  "Requesting to add score (local). Score: ",
                  e,
                  "Encrypted score: ",
                  t
                );
              }),
              (e.prototype.addAuthListener = function () {}),
              (e.prototype.removeAuthListener = function () {}),
              e
            );
          })();
        t.default = c;
      },
      245: function (e, t, n) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n);
                  var o = Object.getOwnPropertyDescriptor(t, n);
                  (o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n]);
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  });
                }
              : function (e, t) {
                  e.default = t;
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var n in e)
                  "default" !== n &&
                    Object.prototype.hasOwnProperty.call(e, n) &&
                    r(t, e, n);
              return o(t, e), t;
            },
          a =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                  try {
                    s(r.next(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function u(e) {
                  try {
                    s(r.throw(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function s(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(a, u);
                }
                s((r = r.apply(e, t || [])).next());
              });
            },
          u =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                o,
                i,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: u(0), throw: u(1), return: u(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function u(u) {
                return function (s) {
                  return (function (u) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; i && ((i = 0), u[0] && (a = 0)), a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & u[0]
                                ? r.return
                                : u[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, u[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (u = [2 & u[0], o.value]), u[0])
                        ) {
                          case 0:
                          case 1:
                            o = u;
                            break;
                          case 4:
                            return a.label++, { value: u[1], done: !1 };
                          case 5:
                            a.label++, (r = u[1]), (u = [0]);
                            continue;
                          case 7:
                            (u = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = a.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== u[0] && 2 !== u[0])
                              )
                            ) {
                              a = 0;
                              continue;
                            }
                            if (
                              3 === u[0] &&
                              (!o || (u[1] > o[0] && u[1] < o[3]))
                            ) {
                              a.label = u[1];
                              break;
                            }
                            if (6 === u[0] && a.label < o[1]) {
                              (a.label = o[1]), (o = u);
                              break;
                            }
                            if (o && a.label < o[2]) {
                              (a.label = o[2]), a.ops.push(u);
                              break;
                            }
                            o[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        u = t.call(e, a);
                      } catch (e) {
                        (u = [6, e]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & u[0]) throw u[1];
                    return { value: u[0] ? u[1] : void 0, done: !0 };
                  })([u, s]);
                };
              }
            },
          s =
            (this && this.__spreadArray) ||
            function (e, t, n) {
              if (n || 2 === arguments.length)
                for (var r, o = 0, i = t.length; o < i; o++)
                  (!r && o in t) ||
                    (r || (r = Array.prototype.slice.call(t, 0, o)),
                    (r[o] = t[o]));
              return e.concat(r || Array.prototype.slice.call(t));
            },
          c =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 });
        var l = n(930),
          f = i(n(767)),
          h = n(873),
          d = n(738),
          p = n(412),
          g = c(n(273)),
          v = c(n(176)),
          y = c(n(942)),
          _ = c(n(743)),
          b = (function () {
            function e() {
              (this.logger = new f.default("none")),
                (this.sdk = new _.default());
            }
            return (
              (e.prototype.init = function (e) {
                return a(this, void 0, void 0, function () {
                  var t = this;
                  return u(this, function (n) {
                    return (
                      this.initializingPromise ||
                        (this.initializingPromise = new Promise(function (
                          n,
                          r
                        ) {
                          return a(t, void 0, void 0, function () {
                            var t, o, i, a, c, _;
                            return u(this, function (u) {
                              switch (u.label) {
                                case 0:
                                  return (
                                    this.logger.log(
                                      "Request init, options: ",
                                      e
                                    ),
                                    [
                                      4,
                                      Promise.all([
                                        (0, d.checkIsCrazyGames)(),
                                        (0, d.checkIsLocalhost)(),
                                      ]),
                                    ]
                                  );
                                case 1:
                                  return (
                                    (t = u.sent()),
                                    (o = t[0]),
                                    t[1]
                                      ? ((f.default.forceEnable = !0),
                                        (this.sdk = new y.default()),
                                        [3, 6])
                                      : [3, 2]
                                  );
                                case 2:
                                  return o.isOnCrazyGames
                                    ? d.GF_WINDOW
                                      ? [
                                          4,
                                          Promise.all([
                                            (0, d.initSdk)(e),
                                            (0, d.fetchSdkUser)(),
                                          ]),
                                        ]
                                      : [
                                          2,
                                          r(
                                            new l.GeneralError(
                                              "unexpectedError",
                                              "Missing GF_WINDOW, even though running on CrazyGames"
                                            )
                                          ),
                                        ]
                                    : [3, 5];
                                case 3:
                                  if (
                                    ((i = u.sent()),
                                    (a = i[0]),
                                    (c = i[1]),
                                    null === a)
                                  )
                                    throw new l.GeneralError(
                                      "initFailed",
                                      "The SDK failed to initialize"
                                    );
                                  return (
                                    this.logger.log(
                                      "Init response received from GF",
                                      a
                                    ),
                                    [4, (0, h.prepareInitialGameData)(c, a)]
                                  );
                                case 4:
                                  return (
                                    (_ = u.sent()),
                                    (this.sdk = new g.default(a, _, c)),
                                    [3, 6]
                                  );
                                case 5:
                                  (this.sdk = new v.default()), (u.label = 6);
                                case 6:
                                  return (
                                    console.log.apply(
                                      console,
                                      s(
                                        s([], f.MAIN_BADGE, !1),
                                        [
                                          "CrazyGames HTML SDK initialized",
                                          {
                                            version: p.SDK_VERSION,
                                            environment: this.sdk.environment,
                                            initOptions: e,
                                          },
                                        ],
                                        !1
                                      )
                                    ),
                                    n(),
                                    [2]
                                  );
                              }
                            });
                          });
                        })),
                      [2, this.initializingPromise]
                    );
                  });
                });
              }),
              Object.defineProperty(e.prototype, "ad", {
                get: function () {
                  return this.sdk.ad;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "banner", {
                get: function () {
                  return this.sdk.banner;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "game", {
                get: function () {
                  return this.sdk.game;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "user", {
                get: function () {
                  return this.sdk.user;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "data", {
                get: function () {
                  return this.sdk.data;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "analytics", {
                get: function () {
                  return this.sdk.analytics;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "environment", {
                get: function () {
                  return this.sdk.environment;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "isQaTool", {
                get: function () {
                  return this.sdk.isQaTool;
                },
                enumerable: !1,
                configurable: !0,
              }),
              e
            );
          })();
        t.default = b;
      },
      743: function (e, t, n) {
        "use strict";
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o = n(930),
          i = r(n(767)),
          a = (function () {
            function e() {
              (this.logger = new i.default("none")),
                (this.code = "sdkNotInitialized"),
                (this.message =
                  "CrazySDK is not initialized yet. Check ".concat(
                    o.DOCS_URL,
                    " for more info."
                  ));
            }
            return (
              Object.defineProperty(e.prototype, "ad", {
                get: function () {
                  throw new o.GeneralError(this.code, this.message);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "banner", {
                get: function () {
                  throw new o.GeneralError(this.code, this.message);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "game", {
                get: function () {
                  throw new o.GeneralError(this.code, this.message);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "user", {
                get: function () {
                  throw new o.GeneralError(this.code, this.message);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "data", {
                get: function () {
                  throw new o.GeneralError(this.code, this.message);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "analytics", {
                get: function () {
                  throw new o.GeneralError(this.code, this.message);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "environment", {
                get: function () {
                  return "uninitialized";
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "isQaTool", {
                get: function () {
                  return !1;
                },
                enumerable: !1,
                configurable: !0,
              }),
              e
            );
          })();
        t.default = a;
      },
      81: function (e, t, n) {
        "use strict";
        var r =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                  try {
                    s(r.next(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function u(e) {
                  try {
                    s(r.throw(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function s(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(a, u);
                }
                s((r = r.apply(e, t || [])).next());
              });
            },
          o =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                o,
                i,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: u(0), throw: u(1), return: u(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function u(u) {
                return function (s) {
                  return (function (u) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; i && ((i = 0), u[0] && (a = 0)), a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & u[0]
                                ? r.return
                                : u[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, u[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (u = [2 & u[0], o.value]), u[0])
                        ) {
                          case 0:
                          case 1:
                            o = u;
                            break;
                          case 4:
                            return a.label++, { value: u[1], done: !1 };
                          case 5:
                            a.label++, (r = u[1]), (u = [0]);
                            continue;
                          case 7:
                            (u = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = a.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== u[0] && 2 !== u[0])
                              )
                            ) {
                              a = 0;
                              continue;
                            }
                            if (
                              3 === u[0] &&
                              (!o || (u[1] > o[0] && u[1] < o[3]))
                            ) {
                              a.label = u[1];
                              break;
                            }
                            if (6 === u[0] && a.label < o[1]) {
                              (a.label = o[1]), (o = u);
                              break;
                            }
                            if (o && a.label < o[2]) {
                              (a.label = o[2]), a.ops.push(u);
                              break;
                            }
                            o[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        u = t.call(e, a);
                      } catch (e) {
                        (u = [6, e]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & u[0]) throw u[1];
                    return { value: u[0] ? u[1] : void 0, done: !0 };
                  })([u, s]);
                };
              }
            },
          i =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getBannerSizeAsText =
            t.getBannerContainer =
            t.InnerIdToContainerId =
            t.ContainerIdToInnerId =
              void 0);
        var a = n(862),
          u = i(n(767)),
          s = n(492);
        new u.default("banner"),
          (t.ContainerIdToInnerId = function (e) {
            return "".concat(e, "-crazygames-inner");
          }),
          (t.InnerIdToContainerId = function (e) {
            return "".concat(e).replace("-crazygames-inner", "");
          }),
          (t.getBannerContainer = function (e, n) {
            var i;
            return r(this, void 0, void 0, function () {
              var r, u, c, l;
              return o(this, function (o) {
                switch (o.label) {
                  case 0:
                    if (!e)
                      throw new a.BannerError(
                        "missingId",
                        "Container id not specified",
                        e
                      );
                    return [4, (0, s.getContainerInfo)(e)];
                  case 1:
                    if (((r = o.sent()), (u = r.visibleState), n)) {
                      if ("notCreated" === u)
                        throw new a.BannerError(
                          "notCreated",
                          "Container is not present on the page",
                          e
                        );
                      if ("notVisible" === u)
                        throw new a.BannerError(
                          "notVisible",
                          "Container is not entirely visible on the page",
                          e
                        );
                    }
                    return (
                      (c = (0, t.ContainerIdToInnerId)(e)),
                      document.getElementById(c) ||
                        (((l = document.createElement("div")).id = c),
                        l.classList.add("crazygames-banner-container"),
                        null === (i = document.getElementById(e)) ||
                          void 0 === i ||
                          i.append(l)),
                      [
                        2,
                        {
                          mainContainerId: e,
                          innerContainerId: c,
                          containerInfo: r,
                        },
                      ]
                    );
                }
              });
            });
          }),
          (t.getBannerSizeAsText = function (e) {
            return "".concat(e.width, "x").concat(e.height);
          });
      },
      951: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadAdsIfNeeded = void 0);
        var r,
          o = n(823);
        t.loadAdsIfNeeded = function (e) {
          return window.CrazygamesAds
            ? Promise.resolve()
            : (function (e) {
                return (
                  r ||
                  (r = (0, o.loadScript)(e).then(function () {
                    window.CrazygamesAds.initAds();
                  }))
                );
              })(e);
        };
      },
      314: function (e, t, n) {
        "use strict";
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.renderFakeBanner = void 0);
        var o = r(n(767)),
          i = n(862),
          a = n(486),
          u = new o.default("banner"),
          s = [
            { width: 970, height: 90 },
            { width: 320, height: 50 },
            { width: 160, height: 600 },
            { width: 336, height: 280 },
            { width: 728, height: 90 },
            { width: 300, height: 600 },
            { width: 468, height: 60 },
            { width: 970, height: 250 },
            { width: 300, height: 250 },
            { width: 250, height: 250 },
            { width: 120, height: 600 },
          ];
        t.renderFakeBanner = function (e) {
          u.log("Rendering fake banner", e);
          var t = document.getElementById(e.id);
          if (t) {
            var n = e.width,
              r = e.height;
            if (e.isResponsive) {
              var o = (0, a.shuffle)(s).find(function (e) {
                return n >= e.width && r >= e.height;
              });
              if (!o)
                throw new i.BannerError(
                  "noAvailableSizes",
                  "No available banner size has been found",
                  t.id
                );
              (n = o.width), (r = o.height);
            }
            t.innerHTML = "";
            var c = document.createElement("img");
            c.setAttribute(
              "src",
              ""
                .concat("https://images.crazygames.com/crazygames-sdk/")
                .concat(n, "x")
                .concat(r, ".png")
            ),
              c.setAttribute("width", "".concat(n, "px")),
              c.setAttribute("height", "".concat(r, "px")),
              t.appendChild(c),
              (t.style.backgroundColor = "rgb(191, 173, 255, 0.25)");
          } else
            console.error(
              "Didn't find container #".concat(
                e.id,
                " for rendering fake banner"
              )
            );
        };
      },
      414: function (e, t, n) {
        "use strict";
        var r =
            (this && this.__assign) ||
            function () {
              return (
                (r =
                  Object.assign ||
                  function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                      for (var o in (t = arguments[n]))
                        Object.prototype.hasOwnProperty.call(t, o) &&
                          (e[o] = t[o]);
                    return e;
                  }),
                r.apply(this, arguments)
              );
            },
          o =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                  try {
                    s(r.next(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function u(e) {
                  try {
                    s(r.throw(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function s(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(a, u);
                }
                s((r = r.apply(e, t || [])).next());
              });
            },
          i =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                o,
                i,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: u(0), throw: u(1), return: u(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function u(u) {
                return function (s) {
                  return (function (u) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; i && ((i = 0), u[0] && (a = 0)), a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & u[0]
                                ? r.return
                                : u[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, u[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (u = [2 & u[0], o.value]), u[0])
                        ) {
                          case 0:
                          case 1:
                            o = u;
                            break;
                          case 4:
                            return a.label++, { value: u[1], done: !1 };
                          case 5:
                            a.label++, (r = u[1]), (u = [0]);
                            continue;
                          case 7:
                            (u = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = a.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== u[0] && 2 !== u[0])
                              )
                            ) {
                              a = 0;
                              continue;
                            }
                            if (
                              3 === u[0] &&
                              (!o || (u[1] > o[0] && u[1] < o[3]))
                            ) {
                              a.label = u[1];
                              break;
                            }
                            if (6 === u[0] && a.label < o[1]) {
                              (a.label = o[1]), (o = u);
                              break;
                            }
                            if (o && a.label < o[2]) {
                              (a.label = o[2]), a.ops.push(u);
                              break;
                            }
                            o[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        u = t.call(e, a);
                      } catch (e) {
                        (u = [6, e]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & u[0]) throw u[1];
                    return { value: u[0] ? u[1] : void 0, done: !0 };
                  })([u, s]);
                };
              }
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.OverlayBanner = void 0);
        var a = n(486),
          u = (function () {
            function e(e, t, n, r) {
              var o = this;
              (this.bannerRequest = e),
                (this.onWindowResize = function () {
                  o.setContainerPosition();
                }),
                (this.containerElement = document.createElement("div")),
                (this.containerId = "overlay-banner-" + e.id),
                (this.containerElement.id = this.containerId),
                (this.bannerRequest = e),
                (this.containerElement.style.position = "absolute"),
                (this.containerElement.style.transformOrigin = "top left"),
                (this.containerElement.style.userSelect = "none");
              var i = document.getElementById("gfMainContainer");
              i
                ? i.appendChild(this.containerElement)
                : document.body.appendChild(this.containerElement);
              var u = e.size.split("x");
              (this.onScreenSize = {
                width: parseInt(u[0]),
                height: parseInt(u[1]),
              }),
                (this.bannerModule = n),
                (this.callback = r),
                (this.disableBannerCheck = t),
                (this.debouncedWindowResize = (0, a.debounce)(
                  this.onWindowResize,
                  200
                )),
                window.addEventListener("resize", this.debouncedWindowResize),
                this.renderBanner();
            }
            return (
              (e.prototype.isVisible = function () {
                var e = this.computeOverlay();
                if (this.disableBannerCheck) return !0;
                var t = e.left + e.width * e.scale,
                  n = e.top + e.height * e.scale,
                  r = this.getGameContainerDimensions();
                return !(
                  e.top < -4 ||
                  e.left < -4 ||
                  t > window.innerWidth + 4 ||
                  n > r.height + 4
                );
              }),
              (e.prototype.computeOverlay = function () {
                var e = this.getScale(),
                  t = this.getOnScreenPosition();
                return {
                  width: this.onScreenSize.width,
                  height: this.onScreenSize.height,
                  top: t.y,
                  left: t.x,
                  scale: e,
                };
              }),
              (e.prototype.getGameContainerDimensions = function () {
                var e = document.getElementById("game-container");
                return e
                  ? { width: e.clientWidth, height: e.clientHeight }
                  : { width: window.innerWidth, height: window.innerHeight };
              }),
              (e.prototype.getScale = function () {
                return this.getGameContainerDimensions().width / 922;
              }),
              (e.prototype.getOnScreenPosition = function () {
                var e = this.getGameContainerDimensions(),
                  t = this.bannerRequest.anchor.x * e.width,
                  n = (1 - this.bannerRequest.anchor.y) * e.height,
                  r = this.getScale(),
                  o = this.onScreenSize,
                  i = o.width * r,
                  a = o.height * r,
                  u = this.bannerRequest.pivot || { x: 0.5, y: 0.5 };
                return {
                  x: t + this.bannerRequest.position.x * r - i * u.x,
                  y: n - this.bannerRequest.position.y * r - a * (1 - u.y),
                };
              }),
              (e.prototype.setContainerPosition = function () {
                var e = this.computeOverlay();
                (this.containerElement.style.width = "".concat(e.width, "px")),
                  (this.containerElement.style.height = "".concat(
                    e.height,
                    "px"
                  )),
                  (this.containerElement.style.top = "".concat(e.top, "px")),
                  (this.containerElement.style.left = "".concat(e.left, "px")),
                  (this.containerElement.style.transform = "scale(".concat(
                    e.scale,
                    ")"
                  )),
                  (this.containerElement.style.display = "block");
              }),
              (e.prototype.renderBanner = function () {
                return o(this, void 0, void 0, function () {
                  var e;
                  return i(this, function (t) {
                    switch (t.label) {
                      case 0:
                        if ((this.setContainerPosition(), !this.isVisible()))
                          return (
                            this.callback(
                              this.bannerRequest.id,
                              "bannerError",
                              "bannerNotEntirelyVisible"
                            ),
                            (this.containerElement.style.display = "none"),
                            [2]
                          );
                        t.label = 1;
                      case 1:
                        return (
                          t.trys.push([1, 3, , 4]),
                          [
                            4,
                            this.bannerModule.requestBanner(
                              r({ id: this.containerId }, this.onScreenSize)
                            ),
                          ]
                        );
                      case 2:
                        return (
                          t.sent(),
                          this.callback(
                            this.bannerRequest.id,
                            "bannerRendered"
                          ),
                          [3, 4]
                        );
                      case 3:
                        return (
                          (e = t.sent()),
                          this.callback(
                            this.bannerRequest.id,
                            "bannerError",
                            "".concat(e)
                          ),
                          [3, 4]
                        );
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (e.prototype.destroy = function () {
                this.containerElement && this.containerElement.remove(),
                  window.removeEventListener(
                    "resize",
                    this.debouncedWindowResize
                  );
              }),
              e
            );
          })();
        t.OverlayBanner = u;
      },
      607: function (e, t, n) {
        "use strict";
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o = n(823),
          i = r(n(245));
        (window.CrazyGames = { SDK: new i.default() }),
          (0, o.addStyle)(
            "\n.crazygames-banner-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n"
          );
      },
      822: function (e, t, n) {
        "use strict";
        var r,
          o =
            (this && this.__extends) ||
            ((r = function (e, t) {
              return (
                (r =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                r(e, t)
              );
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null"
                );
              function n() {
                this.constructor = e;
              }
              r(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()));
            });
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.AdError = void 0);
        var i = (function (e) {
          function t(t, n) {
            var r = e.call(this, t, n) || this;
            return (r.code = t), (r.message = n), r;
          }
          return o(t, e), t;
        })(n(930).GeneralError);
        t.AdError = i;
      },
      182: function (e, t, n) {
        "use strict";
        var r,
          o =
            (this && this.__extends) ||
            ((r = function (e, t) {
              return (
                (r =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                r(e, t)
              );
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null"
                );
              function n() {
                this.constructor = e;
              }
              r(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()));
            });
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.AnalyticsError = t.PAYMENT_PROVIDERS = void 0);
        var i = n(930);
        t.PAYMENT_PROVIDERS = ["xsolla"];
        var a = (function (e) {
          function t(t, n) {
            var r = e.call(this, t, n) || this;
            return (r.code = t), (r.message = n), r;
          }
          return o(t, e), t;
        })(i.GeneralError);
        t.AnalyticsError = a;
      },
      862: function (e, t, n) {
        "use strict";
        var r,
          o =
            (this && this.__extends) ||
            ((r = function (e, t) {
              return (
                (r =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                r(e, t)
              );
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null"
                );
              function n() {
                this.constructor = e;
              }
              r(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()));
            });
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.BannerError = void 0);
        var i = (function (e) {
          function t(t, n, r) {
            var o = e.call(this, t, n) || this;
            return (o.code = t), (o.message = n), (o.containerId = r), o;
          }
          return o(t, e), t;
        })(n(930).GeneralError);
        t.BannerError = i;
      },
      425: function (e, t, n) {
        "use strict";
        var r,
          o =
            (this && this.__extends) ||
            ((r = function (e, t) {
              return (
                (r =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                r(e, t)
              );
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null"
                );
              function n() {
                this.constructor = e;
              }
              r(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()));
            });
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.DEFAULT_SAVE_INTERVAL_MS =
            t.MAX_DATA_LENGTH =
            t.DataError =
              void 0);
        var i = (function (e) {
          function t(t, n) {
            var r = e.call(this, t, n) || this;
            return (r.code = t), (r.message = n), r;
          }
          return o(t, e), t;
        })(n(930).GeneralError);
        (t.DataError = i),
          (t.MAX_DATA_LENGTH = 1048576),
          (t.DEFAULT_SAVE_INTERVAL_MS = 1e3);
      },
      930: function (e, t) {
        "use strict";
        var n,
          r =
            (this && this.__extends) ||
            ((n = function (e, t) {
              return (
                (n =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                n(e, t)
              );
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((r.prototype = t.prototype), new r()));
            });
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.GeneralError = t.INIT_STATE = t.SDKError = t.DOCS_URL = void 0),
          (t.DOCS_URL = "docs.crazygames.com");
        var o,
          i = (function (e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return r(t, e), t;
          })(Error);
        (t.SDKError = i),
          ((o = t.INIT_STATE || (t.INIT_STATE = {}))[(o.UNINITIALIZED = 0)] =
            "UNINITIALIZED"),
          (o[(o.REQUESTED = 1)] = "REQUESTED"),
          (o[(o.INITIALIZED = 2)] = "INITIALIZED");
        t.GeneralError = function (e, t) {
          (this.code = e), (this.message = t);
        };
      },
      759: function (e, t, n) {
        "use strict";
        var r,
          o =
            (this && this.__extends) ||
            ((r = function (e, t) {
              return (
                (r =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                r(e, t)
              );
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null"
                );
              function n() {
                this.constructor = e;
              }
              r(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()));
            });
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UserError =
            t.DEFAULT_MIN_TIME_BETWEEN_REWARDED_MS =
            t.DEFAULT_MIN_TIME_BETWEEN_MIDROLL_MS =
              void 0);
        var i = n(930);
        (t.DEFAULT_MIN_TIME_BETWEEN_MIDROLL_MS = 18e4),
          (t.DEFAULT_MIN_TIME_BETWEEN_REWARDED_MS = 5e3);
        var a = (function (e) {
          function t(t, n) {
            var r = e.call(this, t, n) || this;
            return (r.code = t), (r.message = n), r;
          }
          return o(t, e), t;
        })(i.GeneralError);
        t.UserError = a;
      },
      767: function (e, t) {
        "use strict";
        var n =
          (this && this.__spreadArray) ||
          function (e, t, n) {
            if (n || 2 === arguments.length)
              for (var r, o = 0, i = t.length; o < i; o++)
                (!r && o in t) ||
                  (r || (r = Array.prototype.slice.call(t, 0, o)),
                  (r[o] = t[o]));
            return e.concat(r || Array.prototype.slice.call(t));
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.MAIN_BADGE = void 0);
        var r = "border-radius: 3px; padding: 0px 4px; color: white;";
        t.MAIN_BADGE = ["%cHTML5 SDK", "background-color: #6842FF; ".concat(r)];
        var o = (function () {
          function e(e) {
            (this.badge = e),
              (this.debugFlagPresent =
                window.location.href.includes("sdk_debug=true"));
          }
          return (
            (e.prototype.isEnabled = function () {
              return this.debugFlagPresent || e.forceEnable;
            }),
            (e.prototype.log = function (e) {
              for (var o = [], i = 1; i < arguments.length; i++)
                o[i - 1] = arguments[i];
              if (this.isEnabled()) {
                if ("none" === this.badge)
                  return console.log.apply(
                    console,
                    n(
                      n(n([], t.MAIN_BADGE, !1), [e], !1),
                      o.length > 0 ? o : [],
                      !1
                    )
                  );
                var a = [];
                switch (this.badge) {
                  case "game":
                    a = ["%cGAME", "background-color: #d48f06; ".concat(r)];
                    break;
                  case "user":
                    a = ["%cUSER", "background-color: #3498DB; ".concat(r)];
                    break;
                  case "ad":
                    a = ["%cAD", "background-color: #008A00; ".concat(r)];
                    break;
                  case "banner":
                    a = ["%cBANNER", "background-color: #00ABA9; ".concat(r)];
                    break;
                  case "data":
                    a = ["%cDATA", "background-color: #A21CAF; ".concat(r)];
                    break;
                  case "analytics":
                    a = [
                      "%cANALYTICS",
                      "background-color: #5c5c5c; ".concat(r),
                    ];
                }
                console.log.apply(
                  console,
                  n(
                    [
                      "".concat(t.MAIN_BADGE[0], "%c ").concat(a[0]),
                      t.MAIN_BADGE[1],
                      "",
                      a[1],
                      e,
                    ],
                    o.length > 0 ? o : [],
                    !1
                  )
                );
              }
            }),
            (e.prototype.verbose = function (e) {
              for (var r = [], o = 1; o < arguments.length; o++)
                r[o - 1] = arguments[o];
              this.isEnabled() &&
                console.debug.apply(
                  console,
                  n(
                    [
                      "".concat(t.MAIN_BADGE[0], "%c %c").concat(e),
                      t.MAIN_BADGE[1],
                      "",
                      "color: #3d7fff",
                    ],
                    r.length > 0 ? r : [],
                    !1
                  )
                );
            }),
            (e.prototype.warn = function (e) {
              for (var r = [], o = 1; o < arguments.length; o++)
                r[o - 1] = arguments[o];
              this.isEnabled() &&
                console.warn.apply(
                  console,
                  n(
                    n(n([], t.MAIN_BADGE, !1), [e], !1),
                    r.length > 0 ? r : [],
                    !1
                  )
                );
            }),
            (e.prototype.error = function (e) {
              for (var r = [], o = 1; o < arguments.length; o++)
                r[o - 1] = arguments[o];
              console.error.apply(
                console,
                n(
                  n(n([], t.MAIN_BADGE, !1), [e], !1),
                  r.length > 0 ? r : [],
                  !1
                )
              );
            }),
            (e.forceEnable = !1),
            e
          );
        })();
        t.default = o;
      },
      829: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ch = void 0),
          (t.ch = function (e) {
            for (
              var t = JSON.parse(JSON.stringify(e)),
                n = "",
                r = 0,
                o = Object.keys(t)
                  .filter(function (e) {
                    return void 0 !== t[e] && null !== t[e];
                  })
                  .sort();
              r < o.length;
              r++
            ) {
              var i = o[r];
              n += i + "_" + JSON.stringify(t[i]) + "_";
            }
            return (function (e) {
              var t = 0;
              if (0 === e.length) return t;
              for (var n = 0; n < e.length; n++)
                (t = (t << 5) - t + e.charCodeAt(n)), (t |= 0);
              return t;
            })(n);
          });
      },
      492: function (e, t) {
        "use strict";
        var n =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                  try {
                    s(r.next(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function u(e) {
                  try {
                    s(r.throw(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function s(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(a, u);
                }
                s((r = r.apply(e, t || [])).next());
              });
            },
          r =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                o,
                i,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: u(0), throw: u(1), return: u(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function u(u) {
                return function (s) {
                  return (function (u) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; i && ((i = 0), u[0] && (a = 0)), a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & u[0]
                                ? r.return
                                : u[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, u[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (u = [2 & u[0], o.value]), u[0])
                        ) {
                          case 0:
                          case 1:
                            o = u;
                            break;
                          case 4:
                            return a.label++, { value: u[1], done: !1 };
                          case 5:
                            a.label++, (r = u[1]), (u = [0]);
                            continue;
                          case 7:
                            (u = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = a.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== u[0] && 2 !== u[0])
                              )
                            ) {
                              a = 0;
                              continue;
                            }
                            if (
                              3 === u[0] &&
                              (!o || (u[1] > o[0] && u[1] < o[3]))
                            ) {
                              a.label = u[1];
                              break;
                            }
                            if (6 === u[0] && a.label < o[1]) {
                              (a.label = o[1]), (o = u);
                              break;
                            }
                            if (o && a.label < o[2]) {
                              (a.label = o[2]), a.ops.push(u);
                              break;
                            }
                            o[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        u = t.call(e, a);
                      } catch (e) {
                        (u = [6, e]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & u[0]) throw u[1];
                    return { value: u[0] ? u[1] : void 0, done: !0 };
                  })([u, s]);
                };
              }
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getContainerInfo = void 0);
        function o(e) {
          return n(this, void 0, void 0, function () {
            return r(this, function (t) {
              return [
                2,
                new Promise(function (t) {
                  var n = new IntersectionObserver(function (e) {
                    var r = e[0],
                      o = r.intersectionRatio > 0.95;
                    t({
                      visibleState: o ? "visible" : "notVisible",
                      size: {
                        width: Math.ceil(r.boundingClientRect.width),
                        height: Math.ceil(r.boundingClientRect.height),
                      },
                    }),
                      n.disconnect();
                  });
                  n.observe(e);
                }),
              ];
            });
          });
        }
        t.getContainerInfo = function (e) {
          return n(this, void 0, void 0, function () {
            var t;
            return r(this, function (n) {
              return (t = document.getElementById(e))
                ? [2, o(t)]
                : [
                    2,
                    {
                      visibleState: "notCreated",
                      size: { width: 0, height: 0 },
                    },
                  ];
            });
          });
        };
      },
      670: function (e, t, n) {
        "use strict";
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.generateCloudCacheLsGameDataKey = t.CloudDataHandler = void 0);
        var o = r(n(767)),
          i = n(873),
          a = n(234),
          u = (function () {
            function e(e, t, n) {
              (this.sdk = e),
                (this.doNotSync = t),
                (this.data = n),
                (this.logger = new o.default("data")),
                (this.cacheLsKey = s(e.game.id)),
                this.logger.log(
                  "Cloud data handler initialized. ".concat(
                    this.doNotSync
                      ? "Data will not be synced due to failed cloud load."
                      : ""
                  )
                ),
                this.logger.verbose("With this initial data: ", n);
            }
            return (
              (e.prototype.clear = function () {
                (this.data = {}), this.saveData();
              }),
              (e.prototype.getItem = function (e) {
                return this.data[e] || null;
              }),
              (e.prototype.removeItem = function (e) {
                delete this.data[e], this.saveData();
              }),
              (e.prototype.setItem = function (e, t) {
                (this.data[e] = "".concat(t)), this.saveData();
              }),
              (e.prototype.saveData = function () {
                var e = JSON.stringify(this.data);
                (0, i.checkDataLimits)(e),
                  this.doNotSync ||
                    this.sdk.postMessage("saveSdkGameData", { jsonData: e });
                var t = { data: this.data, metadata: { date: new Date() } };
                a.SafeLocalStorage.Instance.setItem(
                  this.cacheLsKey,
                  JSON.stringify(t)
                );
              }),
              e
            );
          })();
        function s(e) {
          return "SDK_DATA_CLOUD_CACHE_".concat(e);
        }
        (t.CloudDataHandler = u), (t.generateCloudCacheLsGameDataKey = s);
      },
      873: function (e, t, n) {
        "use strict";
        var r =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                  try {
                    s(r.next(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function u(e) {
                  try {
                    s(r.throw(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function s(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(a, u);
                }
                s((r = r.apply(e, t || [])).next());
              });
            },
          o =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                o,
                i,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: u(0), throw: u(1), return: u(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function u(u) {
                return function (s) {
                  return (function (u) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; i && ((i = 0), u[0] && (a = 0)), a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & u[0]
                                ? r.return
                                : u[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, u[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (u = [2 & u[0], o.value]), u[0])
                        ) {
                          case 0:
                          case 1:
                            o = u;
                            break;
                          case 4:
                            return a.label++, { value: u[1], done: !1 };
                          case 5:
                            a.label++, (r = u[1]), (u = [0]);
                            continue;
                          case 7:
                            (u = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = a.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== u[0] && 2 !== u[0])
                              )
                            ) {
                              a = 0;
                              continue;
                            }
                            if (
                              3 === u[0] &&
                              (!o || (u[1] > o[0] && u[1] < o[3]))
                            ) {
                              a.label = u[1];
                              break;
                            }
                            if (6 === u[0] && a.label < o[1]) {
                              (a.label = o[1]), (o = u);
                              break;
                            }
                            if (o && a.label < o[2]) {
                              (a.label = o[2]), a.ops.push(u);
                              break;
                            }
                            o[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        u = t.call(e, a);
                      } catch (e) {
                        (u = [6, e]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & u[0]) throw u[1];
                    return { value: u[0] ? u[1] : void 0, done: !0 };
                  })([u, s]);
                };
              }
            },
          i =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.prepareInitialGameData =
            t.checkDataLimits =
            t.loadCachedCloudGameDataFromLs =
            t.loadGameDataFromLs =
              void 0);
        var a = n(425),
          u = i(n(767)),
          s = n(823),
          c = n(738),
          l = n(234),
          f = n(670),
          h = n(825),
          d = 1e4,
          p = new u.default("data");
        function g(e) {
          var t = (0, h.generateLsGameDataKey)(e);
          try {
            var n = l.SafeLocalStorage.Instance.getItem(t);
            return (n && JSON.parse(n).data) || {};
          } catch (e) {
            return (
              p.error(
                "Failed to retrieve local game data ("
                  .concat(t, "), initializing empty data. Error ")
                  .concat(e)
              ),
              (0, s.sendErrorToGf)("load-ls-fail", "data"),
              {}
            );
          }
        }
        function v(e) {
          var t = (0, f.generateCloudCacheLsGameDataKey)(e);
          try {
            var n = l.SafeLocalStorage.Instance.getItem(t);
            return (n && JSON.parse(n).data) || {};
          } catch (e) {
            return (
              p.error(
                "Failed to retrieve cached cloud game data from localStorage ("
                  .concat(t, "), initializing empty data. Error ")
                  .concat(e)
              ),
              (0, s.sendErrorToGf)("load-cached-cloud-fail", "data"),
              {}
            );
          }
        }
        (t.loadGameDataFromLs = g),
          (t.loadCachedCloudGameDataFromLs = v),
          (t.checkDataLimits = function (e) {
            var t = new TextEncoder().encode(e);
            if (t.length > a.MAX_DATA_LENGTH)
              throw (
                ((0, s.sendErrorToGf)("size-exceeded", "data", {
                  maxSize: a.MAX_DATA_LENGTH,
                  dataSize: t.length,
                }),
                new a.DataError(
                  "dataLimitExcedeed",
                  "Game data when converted to a JSON string cannot exceed ".concat(
                    a.MAX_DATA_LENGTH,
                    " bytes. Data was not saved"
                  )
                ))
              );
            t.length > 0.9 * a.MAX_DATA_LENGTH &&
              p.warn(
                "You are approaching ".concat(
                  a.MAX_DATA_LENGTH,
                  " bytes data limit."
                )
              );
          }),
          (t.prepareInitialGameData = function (e, t) {
            return r(this, void 0, void 0, function () {
              var n = this;
              return o(this, function (i) {
                return t.isQaTool
                  ? (p.verbose(
                      "Running in QA tool, always using local data here"
                    ),
                    [2, { data: g(t.gameId), handler: "local" }])
                  : t.dataModule.isEnabled
                  ? e
                    ? [
                        2,
                        new Promise(function (e) {
                          var i,
                            a = function (u) {
                              return r(n, void 0, void 0, function () {
                                var n, r;
                                return o(this, function (o) {
                                  return (
                                    "sdkGameDataResponseNew" === u.data.type &&
                                      (p.verbose(
                                        "Received game data from GF",
                                        u.data
                                      ),
                                      window.removeEventListener(
                                        "message",
                                        a,
                                        !1
                                      ),
                                      window.clearTimeout(i),
                                      "loaded" === (n = u.data.data).status
                                        ? n.hasData
                                          ? e({
                                              data: n.data,
                                              handler: "cloud",
                                            })
                                          : (function () {
                                              var n = (0,
                                              h.generateLsGameDataKey)(
                                                t.gameId
                                              );
                                              if (
                                                l.SafeLocalStorage.Instance.getItem(
                                                  n
                                                )
                                              ) {
                                                p.verbose(
                                                  "Cloud data missing but has local data, initialize with local data"
                                                );
                                                var r = g(t.gameId);
                                                e({
                                                  data: r,
                                                  handler: "cloud",
                                                });
                                              } else
                                                p.verbose(
                                                  "Cloud data and local data missing, initialize with empty data"
                                                ),
                                                  e({
                                                    data: {},
                                                    handler: "cloud",
                                                  });
                                            })()
                                        : (p.error(
                                            "GF failed to load cloud game data, will load cached cloud data."
                                          ),
                                          (0, s.sendErrorToGf)(
                                            "gf-data-load-fail",
                                            "data"
                                          ),
                                          (r = v(t.gameId)),
                                          p.verbose(
                                            "Loaded cached cloud data, data will not be synced in this session",
                                            r
                                          ),
                                          e({
                                            data: r,
                                            handler: "cloud",
                                            doNotSync: !0,
                                          }))),
                                    [2]
                                  );
                                });
                              });
                            };
                          p.verbose("Requesting game data from GF"),
                            window.addEventListener("message", a, !1),
                            c.GF_WINDOW.postMessage(
                              { type: "requestSdkGameDataNew" },
                              "*"
                            ),
                            (i = window.setTimeout(function () {
                              p.error(
                                "Did not get game data reply from GF in ".concat(
                                  d,
                                  "ms. Using cached cloud data if present. Disable data sync for this session."
                                )
                              ),
                                (0, s.sendErrorToGf)(
                                  "gf-response-timeout",
                                  "data",
                                  { timeoutMs: d }
                                ),
                                window.removeEventListener("message", a, !1);
                              var n = v(t.gameId);
                              e({ data: n, handler: "cloud", doNotSync: !0 });
                            }, d));
                        }),
                      ]
                    : (p.verbose(
                        "User signed out, loading data from LocalStorage"
                      ),
                      [2, { data: g(t.gameId), handler: "local" }])
                  : [2, { handler: "disabled" }];
              });
            });
          });
      },
      752: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.DisabledDataHandler = void 0);
        var r = n(930),
          o = (function () {
            function e() {
              (this.errorCode = "dataModuleDisabled"),
                (this.errorMessage =
                  "The data module is disabled. To enabled it, please indicate on the Developer Portal that your game is using it.");
            }
            return (
              (e.prototype.clear = function () {
                throw new r.GeneralError(this.errorCode, this.errorMessage);
              }),
              (e.prototype.getItem = function (e) {
                throw new r.GeneralError(this.errorCode, this.errorMessage);
              }),
              (e.prototype.removeItem = function (e) {
                throw new r.GeneralError(this.errorCode, this.errorMessage);
              }),
              (e.prototype.setItem = function (e, t) {
                throw new r.GeneralError(this.errorCode, this.errorMessage);
              }),
              e
            );
          })();
        t.DisabledDataHandler = o;
      },
      825: function (e, t, n) {
        "use strict";
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.generateLsGameDataKey = t.LocalDataHandler = void 0);
        var o = r(n(767)),
          i = n(234),
          a = n(873),
          u = (function () {
            function e(e, t) {
              (this.logger = new o.default("data")),
                (this.data = e),
                (this.lsKey = s(t)),
                this.logger.log("Local data handler initialized"),
                this.logger.verbose("With this initial data: ", e);
            }
            return (
              (e.prototype.clear = function () {
                (this.data = {}), this.saveData();
              }),
              (e.prototype.getItem = function (e) {
                return this.data[e] || null;
              }),
              (e.prototype.removeItem = function (e) {
                delete this.data[e], this.saveData();
              }),
              (e.prototype.setItem = function (e, t) {
                (this.data[e] = "".concat(t)), this.saveData();
              }),
              (e.prototype.saveData = function () {
                (0, a.checkDataLimits)(JSON.stringify(this.data));
                var e = { data: this.data, metadata: { date: new Date() } };
                i.SafeLocalStorage.Instance.setItem(
                  this.lsKey,
                  JSON.stringify(e)
                );
              }),
              e
            );
          })();
        function s(e) {
          return "SDK_DATA_".concat(e);
        }
        (t.LocalDataHandler = u), (t.generateLsGameDataKey = s);
      },
      823: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.sendErrorToGf =
            t.isXsollaOrderArgumentValid =
            t.wrapUserFn =
            t.loadScript =
            t.addStyle =
            t.getQueryStringValue =
              void 0);
        var r = n(738);
        (t.getQueryStringValue = function (e) {
          return decodeURIComponent(
            window.location.search.replace(
              new RegExp(
                "^(?:.*[&\\?]" +
                  encodeURIComponent(e).replace(/[\.\+\*]/g, "\\$&") +
                  "(?:\\=([^&]*))?)?.*$",
                "i"
              ),
              "$1"
            )
          );
        }),
          (t.addStyle = function (e) {
            var t = document.createElement("style");
            (t.textContent = e), document.head.append(t);
          }),
          (t.loadScript = function (e) {
            return new Promise(function (t, n) {
              var r = document.createElement("script");
              (r.onload = function () {
                return t();
              }),
                (r.onerror = function (e) {
                  return n(e);
                }),
                (r.src = e),
                (r.async = !0),
                document.head.appendChild(r);
            });
          }),
          (t.wrapUserFn = function (e) {
            return function (t) {
              try {
                e(t);
              } catch (e) {
                console.error(e);
              }
            };
          }),
          (t.isXsollaOrderArgumentValid = function (e) {
            return !("object" != typeof e || null === e || Array.isArray(e));
          }),
          (t.sendErrorToGf = function (e, t, n) {
            if (r.GF_WINDOW) {
              var o = {
                type: "sdkError",
                data: { errorName: e, module: t, specificValues: n || {} },
              };
              r.GF_WINDOW.postMessage(o, "*");
            }
          });
      },
      738: function (e, t, n) {
        "use strict";
        var r =
            (this && this.__assign) ||
            function () {
              return (
                (r =
                  Object.assign ||
                  function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                      for (var o in (t = arguments[n]))
                        Object.prototype.hasOwnProperty.call(t, o) &&
                          (e[o] = t[o]);
                    return e;
                  }),
                r.apply(this, arguments)
              );
            },
          o =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                  try {
                    s(r.next(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function u(e) {
                  try {
                    s(r.throw(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function s(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(a, u);
                }
                s((r = r.apply(e, t || [])).next());
              });
            },
          i =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                o,
                i,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: u(0), throw: u(1), return: u(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function u(u) {
                return function (s) {
                  return (function (u) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; i && ((i = 0), u[0] && (a = 0)), a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & u[0]
                                ? r.return
                                : u[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, u[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (u = [2 & u[0], o.value]), u[0])
                        ) {
                          case 0:
                          case 1:
                            o = u;
                            break;
                          case 4:
                            return a.label++, { value: u[1], done: !1 };
                          case 5:
                            a.label++, (r = u[1]), (u = [0]);
                            continue;
                          case 7:
                            (u = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = a.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== u[0] && 2 !== u[0])
                              )
                            ) {
                              a = 0;
                              continue;
                            }
                            if (
                              3 === u[0] &&
                              (!o || (u[1] > o[0] && u[1] < o[3]))
                            ) {
                              a.label = u[1];
                              break;
                            }
                            if (6 === u[0] && a.label < o[1]) {
                              (a.label = o[1]), (o = u);
                              break;
                            }
                            if (o && a.label < o[2]) {
                              (a.label = o[2]), a.ops.push(u);
                              break;
                            }
                            o[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        u = t.call(e, a);
                      } catch (e) {
                        (u = [6, e]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & u[0]) throw u[1];
                    return { value: u[0] ? u[1] : void 0, done: !0 };
                  })([u, s]);
                };
              }
            },
          a =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.checkIsCrazyGames =
            t.checkIsLocalhost =
            t.fetchSdkUser =
            t.initSdk =
            t.GF_WINDOW =
              void 0);
        var u = n(951),
          s = n(412),
          c = a(n(767)),
          l = n(823),
          f = n(719),
          h = new c.default("user"),
          d = new c.default("none");
        t.GF_WINDOW = null;
        var p = 5e3;
        t.initSdk = function (e) {
          var n = this;
          return new Promise(function (a) {
            var c = window.setTimeout(function () {
                window.removeEventListener("message", f, !1),
                  (0, l.sendErrorToGf)("gf-init-response-timeout", null, {
                    timeoutMs: p,
                  }),
                  d.error("Gf Init response timeout ".concat(p, "ms")),
                  a(null);
              }, p),
              f = function (e) {
                return o(n, void 0, void 0, function () {
                  var t, n;
                  return i(this, function (r) {
                    switch (r.label) {
                      case 0:
                        if ("initialized" !== e.data.type) return [3, 5];
                        d.verbose("Received init from GF", e.data),
                          window.clearTimeout(c),
                          window.removeEventListener("message", f, !1),
                          (t = e.data.data),
                          (r.label = 1);
                      case 1:
                        return (
                          r.trys.push([1, 3, , 4]),
                          [4, (0, u.loadAdsIfNeeded)(t.rafvertizingUrl)]
                        );
                      case 2:
                        return r.sent(), [3, 4];
                      case 3:
                        return (
                          (n = r.sent()),
                          (0, l.sendErrorToGf)("ads-script-load-fail", null),
                          d.error("Failed to load ads", n),
                          [3, 4]
                        );
                      case 4:
                        a(t), (r.label = 5);
                      case 5:
                        return [2];
                    }
                  });
                });
              };
            window.addEventListener("message", f, !1),
              t.GF_WINDOW.postMessage(
                {
                  type: "init-js-sdk",
                  data: r({ version: s.SDK_VERSION, sdkType: "js" }, e),
                },
                "*"
              );
          });
        };
        var g = 5e3;
        (t.fetchSdkUser = function () {
          var e = this;
          return new Promise(function (t) {
            var n = window.setTimeout(function () {
                window.removeEventListener("message", r, !1),
                  (0, l.sendErrorToGf)("gf-user-response-timeout", null, {
                    timeoutMs: g,
                  }),
                  d.error(
                    "Gf user response timeout ".concat(
                      g,
                      'ms, continuing with "null" (signed out) user'
                    )
                  ),
                  t(null);
              }, g),
              r = function (a) {
                return o(e, void 0, void 0, function () {
                  var e, o;
                  return i(this, function (i) {
                    return (
                      "initialUserSet" === a.data.type &&
                        (h.verbose("Received initial user from GF", a.data),
                        window.clearTimeout(n),
                        window.removeEventListener("message", r, !1),
                        (e =
                          null !== (o = a.data.data.user) && void 0 !== o
                            ? o
                            : null),
                        t(e)),
                      [2]
                    );
                  });
                });
              };
            window.addEventListener("message", r, !1);
          });
        }),
          (t.checkIsLocalhost = function () {
            return o(this, void 0, void 0, function () {
              var e;
              return i(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [
                      "http://localhost:4000/gameframe-unity56-standalone/",
                      "http://localhost:4000/gameframe-unity56/",
                      "http://localhost:4000/gameframe-standalone/",
                      "http://localhost:4000/gameframe/",
                    ].some(function (e) {
                      return window.location.href.startsWith(e);
                    })
                      ? [2, !1]
                      : (e = true)
                      ? [4, (0, f.wait)(500)]
                      : [3, 2];
                  case 1:
                    t.sent(), (t.label = 2);
                  case 2:
                    return [2, e];
                }
              });
            });
          }),
          (t.checkIsCrazyGames = function () {
            return o(this, void 0, void 0, function () {
              var e,
                n,
                r,
                a,
                u,
                s,
                c = this;
              return i(this, function (l) {
                switch (l.label) {
                  case 0:
                    return (
                      (n = !1),
                      (r = new Promise(function (t) {
                        e = t;
                      })),
                      (a = function (r) {
                        var o;
                        "crazyGamesGFConfirmation" ===
                          (null === (o = null == r ? void 0 : r.data) ||
                          void 0 === o
                            ? void 0
                            : o.type) &&
                          ((t.GF_WINDOW = r.source), (n = !0), e());
                      }),
                      (u = new Promise(function (e) {
                        return o(c, void 0, void 0, function () {
                          return i(this, function (t) {
                            switch (t.label) {
                              case 0:
                                return [4, (0, f.wait)(3e3)];
                              case 1:
                                return t.sent(), e(), [2];
                            }
                          });
                        });
                      })),
                      window.addEventListener("message", a, !1),
                      (s = { type: "checkCrazyGamesGF" }),
                      window.postMessage(s, "*"),
                      window.parent.postMessage(s, "*"),
                      window.parent.parent.postMessage(s, "*"),
                      window.parent.parent.parent.postMessage(s, "*"),
                      [4, Promise.race([r, u])]
                    );
                  case 1:
                    return (
                      l.sent(),
                      window.removeEventListener("message", a),
                      [2, { isOnCrazyGames: n }]
                    );
                }
              });
            });
          });
      },
      659: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.generateInviteLink = void 0),
          (t.generateInviteLink = function (e, t) {
            if (!t) return "An error happened when generating invite link";
            var n = new URL(t),
              r = n.searchParams;
            return (
              r.set("czy_invite", "true"),
              r.set("utm_source", "invite"),
              Object.keys(e).forEach(function (t) {
                r.set(t, e[t]);
              }),
              n.toString()
            );
          });
      },
      234: function (e, t, n) {
        "use strict";
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SafeLocalStorage = t.InMemoryStorage = void 0);
        var o = r(n(767)),
          i = (function () {
            function e() {
              (this.data = {}), this.clear();
            }
            return (
              (e.prototype.setItem = function (e, t) {
                this.data[e] = String(t);
              }),
              (e.prototype.getItem = function (e) {
                return this.data.hasOwnProperty(e) ? this.data[e] : void 0;
              }),
              (e.prototype.removeItem = function (e) {
                delete this.data[e];
              }),
              (e.prototype.clear = function () {
                this.data = {};
              }),
              e
            );
          })();
        t.InMemoryStorage = i;
        var a = (function () {
          function e() {
            (this.logger = new o.default("none")),
              (this.storage = this.getAvailableStorage());
          }
          return (
            Object.defineProperty(e, "Instance", {
              get: function () {
                return this._instance
                  ? this._instance
                  : (this._instance = new this());
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.getItem = function (e) {
              return this.storage.getItem(e);
            }),
            (e.prototype.setItem = function (e, t) {
              this.storage.setItem(e, t);
            }),
            (e.prototype.removeItem = function (e) {
              this.storage.removeItem(e);
            }),
            (e.prototype.clear = function () {
              return this.storage.clear();
            }),
            (e.prototype.isFunctioningStorage = function (e) {
              try {
                var t = "__SafeLocalStorage__".concat(Date.now()),
                  n = "test";
                return (
                  e.setItem(t, n),
                  e.getItem(t) === n && (window.localStorage.removeItem(t), !0)
                );
              } catch (e) {
                return !1;
              }
            }),
            (e.prototype.getAvailableStorage = function () {
              try {
                return this.hasWorkingLocalStorage()
                  ? (this.logger.verbose(
                      "[SafeLocalStorage] using localStorage"
                    ),
                    window.localStorage)
                  : this.hasWorkingSessionStorage()
                  ? (this.logger.verbose(
                      "[SafeLocalStorage] fallback to sessionStorage"
                    ),
                    window.sessionStorage)
                  : (this.logger.verbose(
                      "[SafeLocalStorage] fallback to InMemoryStorage"
                    ),
                    new i());
              } catch (e) {
                return (
                  this.logger.verbose(
                    "[SafeLocalStorage] fallback to InMemoryStorage"
                  ),
                  new i()
                );
              }
            }),
            (e.prototype.hasWorkingLocalStorage = function () {
              try {
                if (!window.hasOwnProperty("localStorage")) return !1;
                var e = window.localStorage;
                return this.isFunctioningStorage(e);
              } catch (e) {
                return !1;
              }
            }),
            (e.prototype.hasWorkingSessionStorage = function () {
              try {
                if (!window.hasOwnProperty("sessionStorage")) return !1;
                var e = window.sessionStorage;
                return this.isFunctioningStorage(e);
              } catch (e) {
                return !1;
              }
            }),
            e
          );
        })();
        t.SafeLocalStorage = a;
      },
      514: function (e, t, n) {
        "use strict";
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.throttledMethod = void 0);
        var o = new (r(n(767)).default)("none");
        t.throttledMethod = function (e, t, n) {
          var r = 0;
          return function () {
            for (var i = [], a = 0; a < arguments.length; a++)
              i[a] = arguments[a];
            var u = new Date().getTime();
            return u - r > t
              ? ((r = u), e.apply(void 0, i))
              : void (
                  n &&
                  o.error("".concat(n, "() call throttled, delay ").concat(t))
                );
          };
        };
      },
      719: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.wait = void 0),
          (t.wait = function (e) {
            return new Promise(function (t) {
              return setTimeout(t, e);
            });
          });
      },
      412: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SDK_VERSION = void 0),
          (t.SDK_VERSION = "3.3.0");
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { id: r, loaded: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, n), (i.loaded = !0), i.exports;
  }
  (n.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == typeof window) return window;
    }
  })()),
    (n.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    n(607);
})();
