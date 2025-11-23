(function(sttc) {
    var window = this;
    if (window.googletag && googletag.evalScripts) {
        googletag.evalScripts();
    }
    if (window.googletag && googletag._loaded_) return;
    var n, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ba = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        ca = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            throw Error("Cannot find global object");
        },
        da = ca(this),
        ea = typeof Symbol === "function" && typeof Symbol("x") === "symbol",
        t = {},
        fa = {},
        u = function(a, b, c) {
            if (!c || a != null) {
                c = fa[b];
                if (c == null) return a[b];
                c = a[c];
                return c !== void 0 ? c : a[b]
            }
        },
        w = function(a, b, c) {
            if (b) a: {
                var d = a.split(".");a = d.length === 1;
                var e = d[0],
                    f;!a && e in t ? f = t : f = da;
                for (e = 0; e < d.length - 1; e++) {
                    var g = d[e];
                    if (!(g in f)) break a;
                    f = f[g]
                }
                d = d[d.length - 1];c = ea && c === "es6" ? f[d] : null;b = b(c);b != null && (a ? ba(t, d, {
                    configurable: !0,
                    writable: !0,
                    value: b
                }) : b !== c && (fa[d] === void 0 && (a = Math.random() * 1E9 >>> 0, fa[d] = ea ? da.Symbol(d) : "$jscp$" + a + "$" + d), ba(f, fa[d], {
                    configurable: !0,
                    writable: !0,
                    value: b
                })))
            }
        };
    w("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.g = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.g
        };
        var c = "jscomp_symbol_" + (Math.random() * 1E9 >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    }, "es6");
    w("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, t.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = da[b[c]];
            typeof d === "function" && typeof d.prototype[a] != "function" && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ha(aa(this))
                }
            })
        }
        return a
    }, "es6");
    var ha = function(a) {
            a = {
                next: a
            };
            a[u(t.Symbol, "iterator")] = function() {
                return this
            };
            return a
        },
        ia = typeof Object.create == "function" ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ja;
    if (ea && typeof Object.setPrototypeOf == "function") ja = Object.setPrototypeOf;
    else {
        var ka;
        a: {
            var la = {
                    a: !0
                },
                ma = {};
            try {
                ma.__proto__ = la;
                ka = ma.a;
                break a
            } catch (a) {}
            ka = !1
        }
        ja = ka ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var na = ja,
        x = function(a, b) {
            a.prototype = ia(b.prototype);
            a.prototype.constructor = a;
            if (na) na(a, b);
            else
                for (var c in b)
                    if (c != "prototype")
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Ib = b.prototype
        },
        z = function(a) {
            var b = typeof t.Symbol != "undefined" && u(t.Symbol, "iterator") && a[u(t.Symbol, "iterator")];
            if (b) return b.call(a);
            if (typeof a.length == "number") return {
                next: aa(a)
            };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        },
        A = function(a) {
            if (!(a instanceof Array)) {
                a = z(a);
                for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
                a = c
            }
            return a
        },
        pa = function(a) {
            return oa(a, a)
        },
        oa = function(a, b) {
            a.raw = b;
            Object.freeze && (Object.freeze(a), Object.freeze(b));
            return a
        },
        qa = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        sa = ea && typeof u(Object, "assign") == "function" ? u(Object, "assign") : function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d) qa(d, e) && (a[e] = d[e])
            }
            return a
        };
    w("Object.assign", function(a) {
        return a || sa
    }, "es6");
    var ta = function() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    };
    w("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    }, "es6");
    w("WeakMap", function(a) {
        function b() {}

        function c(g) {
            var h = typeof g;
            return h === "object" && g !== null || h === "function"
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var g = Object.seal({}),
                        h = Object.seal({}),
                        k = new a([
                            [g, 2],
                            [h, 3]
                        ]);
                    if (k.get(g) != 2 || k.get(h) != 3) return !1;
                    k.delete(g);
                    k.set(h, 4);
                    return !k.has(g) && k.get(h) == 4
                } catch (l) {
                    return !1
                }
            }()) return a;
        var d = "$jscomp_hidden_" + Math.random(),
            e = 0,
            f = function(g) {
                this.g = (e += Math.random() + 1).toString();
                if (g) {
                    g = z(g);
                    for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
                }
            };
        f.prototype.set = function(g, h) {
            if (!c(g)) throw Error("Invalid WeakMap key");
            if (!qa(g, d)) {
                var k = new b;
                ba(g, d, {
                    value: k
                })
            }
            if (!qa(g, d)) throw Error("WeakMap key fail: " + g);
            g[d][this.g] = h;
            return this
        };
        f.prototype.get = function(g) {
            return c(g) && qa(g, d) ? g[d][this.g] : void 0
        };
        f.prototype.has = function(g) {
            return c(g) && qa(g, d) && qa(g[d], this.g)
        };
        f.prototype.delete = function(g) {
            return c(g) && qa(g, d) && qa(g[d], this.g) ? delete g[d][this.g] : !1
        };
        return f
    }, "es6");
    w("Map", function(a) {
        if (function() {
                if (!a || typeof a != "function" || !u(a.prototype, "entries") || typeof Object.seal != "function") return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(z([
                            [h, "s"]
                        ]));
                    if (k.get(h) != "s" || k.size != 1 || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || k.size != 2) return !1;
                    var l = u(k, "entries").call(k),
                        p = l.next();
                    if (p.done || p.value[0] != h || p.value[1] != "s") return !1;
                    p = l.next();
                    return p.done || p.value[0].x != 4 || p.value[1] != "t" || !l.next().done ? !1 : !0
                } catch (r) {
                    return !1
                }
            }()) return a;
        var b = new t.WeakMap,
            c = function(h) {
                this[0] = {};
                this[1] = f();
                this.size = 0;
                if (h) {
                    h = z(h);
                    for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
                }
            };
        c.prototype.set = function(h, k) {
            h = h === 0 ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this[0][l.id] = []);
            l.u ? l.u.value = k : (l.u = {
                next: this[1],
                H: this[1].H,
                head: this[1],
                key: h,
                value: k
            }, l.list.push(l.u), this[1].H.next = l.u, this[1].H = l.u, this.size++);
            return this
        };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.u && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this[0][h.id], h.u.H.next = h.u.next, h.u.next.H = h.u.H, h.u.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this[0] = {};
            this[1] = this[1].H = f();
            this.size = 0
        };
        c.prototype.has = function(h) {
            return !!d(this, h).u
        };
        c.prototype.get = function(h) {
            return (h = d(this, h).u) && h.value
        };
        c.prototype.entries = function() {
            return e(this, function(h) {
                return [h.key, h.value]
            })
        };
        c.prototype.keys = function() {
            return e(this, function(h) {
                return h.key
            })
        };
        c.prototype.values = function() {
            return e(this, function(h) {
                return h.value
            })
        };
        c.prototype.forEach = function(h, k) {
            for (var l = u(this, "entries").call(this), p; !(p = l.next()).done;) p = p.value, h.call(k, p[1], p[0], this)
        };
        c.prototype[u(t.Symbol, "iterator")] = u(c.prototype, "entries");
        var d = function(h, k) {
                var l = k && typeof k;
                l == "object" || l == "function" ? b.has(k) ? l = b.get(k) : (l = "" + ++g, b.set(k, l)) : l = "p_" + k;
                var p = h[0][l];
                if (p && qa(h[0], l))
                    for (h = 0; h < p.length; h++) {
                        var r = p[h];
                        if (k !== k && r.key !== r.key || k === r.key) return {
                            id: l,
                            list: p,
                            index: h,
                            u: r
                        }
                    }
                return {
                    id: l,
                    list: p,
                    index: -1,
                    u: void 0
                }
            },
            e = function(h, k) {
                var l = h[1];
                return ha(function() {
                    if (l) {
                        for (; l.head != h[1];) l = l.H;
                        for (; l.next != l.head;) return l = l.next, {
                            done: !1,
                            value: k(l)
                        };
                        l = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            f = function() {
                var h = {};
                return h.H = h.next = h.head = h
            },
            g = 0;
        return c
    }, "es6");
    w("Set", function(a) {
        if (function() {
                if (!a || typeof a != "function" || !u(a.prototype, "entries") || typeof Object.seal != "function") return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(z([c]));
                    if (!d.has(c) || d.size != 1 || d.add(c) != d || d.size != 1 || d.add({
                            x: 4
                        }) != d || d.size != 2) return !1;
                    var e = u(d, "entries").call(d),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || f.value[0].x != 4 || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        var b = function(c) {
            this.g = new t.Map;
            if (c) {
                c = z(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.g.size
        };
        b.prototype.add = function(c) {
            c = c === 0 ? 0 : c;
            this.g.set(c, c);
            this.size = this.g.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.g.delete(c);
            this.size = this.g.size;
            return c
        };
        b.prototype.clear = function() {
            this.g.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.g.has(c)
        };
        b.prototype.entries = function() {
            return u(this.g, "entries").call(this.g)
        };
        b.prototype.values = function() {
            return u(this.g, "values").call(this.g)
        };
        b.prototype.keys = u(b.prototype, "values");
        b.prototype[u(t.Symbol, "iterator")] = u(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.g.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");
    w("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) qa(b, d) && c.push(b[d]);
            return c
        }
    }, "es8");
    w("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? b !== 0 || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    w("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (c < 0 && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || u(Object, "is").call(Object, f, b)) return !0
            }
            return !1
        }
    }, "es7");
    var ua = function(a, b, c) {
        if (a == null) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    w("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return ua(this, b, "includes").indexOf(b, c || 0) !== -1
        }
    }, "es6");
    w("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = c != null ? c : function(h) {
                return h
            };
            var e = [],
                f = typeof t.Symbol != "undefined" && u(t.Symbol, "iterator") && b[u(t.Symbol, "iterator")];
            if (typeof f == "function") {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    }, "es6");
    w("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) qa(b, d) && c.push([d, b[d]]);
            return c
        }
    }, "es8");
    w("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return typeof b !== "number" ? !1 : !isNaN(b) && b !== Infinity && b !== -Infinity
        }
    }, "es6");
    w("Number.MAX_SAFE_INTEGER", function() {
        return 9007199254740991
    }, "es6");
    w("Number.MIN_SAFE_INTEGER", function() {
        return -9007199254740991
    }, "es6");
    w("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return u(Number, "isFinite").call(Number, b) ? b === Math.floor(b) : !1
        }
    }, "es6");
    w("Number.isSafeInteger", function(a) {
        return a ? a : function(b) {
            return u(Number, "isInteger").call(Number, b) && Math.abs(b) <= u(Number, "MAX_SAFE_INTEGER")
        }
    }, "es6");
    w("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = ua(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    }, "es6");
    var va = function(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[u(t.Symbol, "iterator")] = function() {
            return e
        };
        return e
    };
    w("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return va(this, function(b, c) {
                return [b, c]
            })
        }
    }, "es6");
    w("globalThis", function(a) {
        return a || da
    }, "es_2020");
    w("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || b === Infinity || b === -Infinity || b === 0) return b;
            var c = Math.floor(Math.abs(b));
            return b < 0 ? -c : c
        }
    }, "es6");
    w("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return va(this, function(b) {
                return b
            })
        }
    }, "es6");
    w("Array.prototype.values", function(a) {
        return a ? a : function() {
            return va(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    w("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = ua(this, null, "repeat");
            if (b < 0 || b > 1342177279) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    }, "es6");
    w("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = ua(this, null, "padStart");
            b -= d.length;
            c = c !== void 0 ? String(c) : " ";
            return (b > 0 && c ? u(c, "repeat").call(c, Math.ceil(b / c.length)).substring(0, b) : "") + d
        }
    }, "es8");
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var B = this || self,
        xa = function(a, b) {
            var c = wa("CLOSURE_FLAGS");
            a = c && c[a];
            return a != null ? a : b
        },
        wa = function(a) {
            a = a.split(".");
            for (var b = B, c = 0; c < a.length; c++)
                if (b = b[a[c]], b == null) return null;
            return b
        },
        ya = function(a) {
            var b = typeof a;
            return b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null"
        },
        za = function(a, b, c) {
            a = a.split(".");
            c = c || B;
            a[0] in c || typeof c.execScript == "undefined" || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) a.length || b === void 0 ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
        };

    function Aa(a) {
        B.setTimeout(function() {
            throw a;
        }, 0)
    };
    var Ba = function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        Da = function(a, b) {
            var c = 0;
            a = Ba(String(a)).split(".");
            b = Ba(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; c == 0 && e < d; e++) {
                var f = a[e] || "",
                    g = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (f[0].length == 0 && g[0].length == 0) break;
                    c = Ca(f[1].length == 0 ? 0 : parseInt(f[1], 10), g[1].length == 0 ? 0 : parseInt(g[1], 10)) || Ca(f[2].length == 0, g[2].length == 0) || Ca(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (c == 0)
            }
            return c
        },
        Ca = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var Ea = xa(610401301, !1),
        Fa = xa(653718497, xa(1, !0));
    var Ga, Ha = B.navigator;
    Ga = Ha ? Ha.userAgentData || null : null;

    function Ia(a) {
        return Ea ? Ga ? Ga.brands.some(function(b) {
            return (b = b.brand) && b.indexOf(a) != -1
        }) : !1 : !1
    }

    function C(a) {
        var b;
        a: {
            if (b = B.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return b.indexOf(a) != -1
    };

    function Ja() {
        return Ea ? !!Ga && Ga.brands.length > 0 : !1
    }

    function Ka() {
        return Ja() ? !1 : C("Opera")
    }

    function La() {
        return Ja() ? !1 : C("Trident") || C("MSIE")
    }

    function Ma() {
        return C("Firefox") || C("FxiOS")
    }

    function Na() {
        return C("Safari") && !(Oa() || (Ja() ? 0 : C("Coast")) || Ka() || (Ja() ? 0 : C("Edge")) || (Ja() ? Ia("Microsoft Edge") : C("Edg/")) || (Ja() ? Ia("Opera") : C("OPR")) || Ma() || C("Silk") || C("Android"))
    }

    function Oa() {
        return Ja() ? Ia("Chromium") : (C("Chrome") || C("CriOS")) && !(Ja() ? 0 : C("Edge")) || C("Silk")
    }

    function Pa() {
        return C("Android") && !(Oa() || Ma() || Ka() || C("Silk"))
    };
    var Qa = function(a, b) {
        return Array.prototype.map.call(a, b, void 0)
    };

    function Ra(a, b) {
        a: {
            for (var c = typeof a === "string" ? a.split("") : a, d = a.length - 1; d >= 0; d--)
                if (d in c && b.call(void 0, c[d], d, a)) {
                    b = d;
                    break a
                } b = -1
        }
        return b < 0 ? null : typeof a === "string" ? a.charAt(b) : a[b]
    };
    var Sa = function(a) {
        Sa[" "](a);
        return a
    };
    Sa[" "] = function() {};
    var Ta = La();
    Pa();
    Oa();
    Na();
    var Ua = {},
        Va = null,
        Xa = function(a) {
            var b = [];
            Wa(a, function(c) {
                b.push(c)
            });
            return b
        },
        Wa = function(a, b) {
            function c(k) {
                for (; d < a.length;) {
                    var l = a.charAt(d++),
                        p = Va[l];
                    if (p != null) return p;
                    if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
                }
                return k
            }
            Ya();
            for (var d = 0;;) {
                var e = c(-1),
                    f = c(0),
                    g = c(64),
                    h = c(64);
                if (h === 64 && e === -1) break;
                b(e << 2 | f >> 4);
                g != 64 && (b(f << 4 & 240 | g >> 2), h != 64 && b(g << 6 & 192 | h))
            }
        },
        Ya = function() {
            if (!Va) {
                Va = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; c < 5; c++) {
                    var d = a.concat(b[c].split(""));
                    Ua[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        Va[f] === void 0 && (Va[f] = e)
                    }
                }
            }
        };
    var Za = typeof Uint8Array !== "undefined",
        $a = !Ta && typeof btoa === "function";
    var ab = function(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };
    var bb, cb;

    function db(a) {
        if (cb) throw Error("");
        cb = function(b) {
            B.setTimeout(function() {
                a(b)
            }, 0)
        }
    }

    function eb(a) {
        if (cb) try {
            cb(a)
        } catch (b) {
            throw b.cause = a, b;
        }
    }

    function fb() {
        var a = Error();
        ab(a, "incident");
        cb ? eb(a) : Aa(a)
    }

    function gb(a) {
        a = Error(a);
        ab(a, "warning");
        eb(a);
        return a
    };

    function hb() {
        return typeof BigInt === "function"
    };

    function ib(a) {
        return Array.prototype.slice.call(a)
    };
    var jb = typeof t.Symbol === "function" && typeof(0, t.Symbol)() === "symbol";

    function kb(a) {
        return typeof t.Symbol === "function" && typeof(0, t.Symbol)() === "symbol" ? (0, t.Symbol)() : a
    }
    var lb = kb(),
        mb = kb("0di"),
        nb = kb("2ex"),
        ob = kb("1oa");
    var pb = jb ? function(a, b) {
            a[lb] |= b
        } : function(a, b) {
            a.D !== void 0 ? a.D |= b : Object.defineProperties(a, {
                D: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            })
        },
        qb = jb ? function(a, b) {
            a[lb] &= ~b
        } : function(a, b) {
            a.D !== void 0 && (a.D &= ~b)
        },
        E = jb ? function(a) {
            return a[lb] | 0
        } : function(a) {
            return a.D | 0
        },
        F = jb ? function(a) {
            return a[lb]
        } : function(a) {
            return a.D
        },
        G = jb ? function(a, b) {
            a[lb] = b
        } : function(a, b) {
            a.D !== void 0 ? a.D = b : Object.defineProperties(a, {
                D: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            })
        };

    function rb(a) {
        if (4 & a) return 4096 & a ? 4096 : 8192 & a ? 8192 : 0
    }

    function sb(a) {
        pb(a, 32);
        return a
    }

    function tb(a, b) {
        G(b, (a | 0) & -30975)
    }

    function wb(a, b) {
        G(b, (a | 34) & -30941)
    };
    var xb = {},
        yb = {};

    function zb(a) {
        return !(!a || typeof a !== "object" || a.g !== yb)
    }

    function Ab(a) {
        return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
    }

    function Bb(a) {
        return !Array.isArray(a) || a.length ? !1 : E(a) & 1 ? !0 : !1
    }
    var Cb, Db = [];
    G(Db, 55);
    Cb = Object.freeze(Db);

    function Eb(a) {
        if (a & 2) throw Error();
    }
    var Fb = Object.freeze({});

    function Gb() {
        var a = !H(Hb).g,
            b = Ib;
        if (!a) throw Error((typeof b === "function" ? b() : b) || String(a));
    }

    function Jb(a) {
        a.Fb = !0;
        return a
    }
    var Ib = void 0;
    var Kb = Jb(function(a) {
            return typeof a === "number"
        }),
        Lb = Jb(function(a) {
            return typeof a === "string"
        }),
        Mb = Jb(function(a) {
            return typeof a === "boolean"
        });
    var Nb = typeof B.BigInt === "function" && typeof B.BigInt(0) === "bigint";

    function Ob(a) {
        var b = a;
        if (Lb(b)) {
            if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b)) throw Error(String(b));
        } else if (Kb(b) && !u(Number, "isSafeInteger").call(Number, b)) throw Error(String(b));
        return Nb ? BigInt(a) : a = Mb(a) ? a ? "1" : "0" : Lb(a) ? a.trim() || "0" : String(a)
    }
    var Ub = Jb(function(a) {
            return Nb ? a >= Pb && a <= Qb : a[0] === "-" ? Rb(a, Sb) : Rb(a, Tb)
        }),
        Sb = u(Number, "MIN_SAFE_INTEGER").toString(),
        Pb = Nb ? BigInt(u(Number, "MIN_SAFE_INTEGER")) : void 0,
        Tb = u(Number, "MAX_SAFE_INTEGER").toString(),
        Qb = Nb ? BigInt(u(Number, "MAX_SAFE_INTEGER")) : void 0;

    function Rb(a, b) {
        if (a.length > b.length) return !1;
        if (a.length < b.length || a === b) return !0;
        for (var c = 0; c < a.length; c++) {
            var d = a[c],
                e = b[c];
            if (d > e) return !1;
            if (d < e) return !0
        }
    };
    var I = 0,
        J = 0;

    function Vb(a) {
        var b = a >>> 0;
        I = b;
        J = (a - b) / 4294967296 >>> 0
    }

    function Wb(a) {
        if (a < 0) {
            Vb(-a);
            var b = z(Xb(I, J));
            a = b.next().value;
            b = b.next().value;
            I = a >>> 0;
            J = b >>> 0
        } else Vb(a)
    }

    function Yb(a, b) {
        b >>>= 0;
        a >>>= 0;
        if (b <= 2097151) var c = "" + (4294967296 * b + a);
        else hb() ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215, b = b >> 16 & 65535, a = (a & 16777215) + c * 6777216 + b * 6710656, c += b * 8147497, b *= 2, a >= 1E7 && (c += a / 1E7 >>> 0, a %= 1E7), c >= 1E7 && (b += c / 1E7 >>> 0, c %= 1E7), c = b + Zb(c) + Zb(a));
        return c
    }

    function Zb(a) {
        a = String(a);
        return "0000000".slice(a.length) + a
    }

    function $b() {
        var a = I,
            b = J;
        b & 2147483648 ? hb() ? a = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : (b = z(Xb(a, b)), a = b.next().value, b = b.next().value, a = "-" + Yb(a, b)) : a = Yb(a, b);
        return a
    }

    function Xb(a, b) {
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    };

    function ac(a, b) {
        throw Error(b === void 0 ? "unexpected value " + a + "!" : b);
    };

    function bc(a) {
        if (typeof a !== "boolean") throw Error("Expected boolean but got " + ya(a) + ": " + a);
        return a
    }
    var cc = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

    function dc(a) {
        var b = typeof a;
        switch (b) {
            case "bigint":
                return !0;
            case "number":
                return u(Number, "isFinite").call(Number, a)
        }
        return b !== "string" ? !1 : cc.test(a)
    }

    function K(a) {
        if (a != null) {
            if (!u(Number, "isFinite").call(Number, a)) throw gb("enum");
            a |= 0
        }
        return a
    }

    function ec(a) {
        if (typeof a !== "number") throw gb("int32");
        if (!u(Number, "isFinite").call(Number, a)) throw gb("int32");
        return a | 0
    }

    function fc(a) {
        return a == null ? a : ec(a)
    }

    function gc(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return u(Number, "isFinite").call(Number, a) ? a | 0 : void 0
    }

    function hc(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return u(Number, "isFinite").call(Number, a) ? a >>> 0 : void 0
    }

    function ic(a) {
        var b = 0;
        b = b === void 0 ? 0 : b;
        if (!dc(a)) throw gb("int64");
        var c = typeof a;
        switch (b) {
            case 4096:
                switch (c) {
                    case "string":
                        return jc(a);
                    case "bigint":
                        return String(BigInt.asIntN(64, a));
                    default:
                        return kc(a)
                }
            case 8192:
                switch (c) {
                    case "string":
                        return lc(a);
                    case "bigint":
                        return Ob(BigInt.asIntN(64, a));
                    default:
                        return mc(a)
                }
            case 0:
                switch (c) {
                    case "string":
                        return jc(a);
                    case "bigint":
                        return Ob(BigInt.asIntN(64, a));
                    default:
                        return nc(a)
                }
            default:
                return ac(b, "Unknown format requested type for int64")
        }
    }

    function oc(a) {
        return a == null ? a : ic(a)
    }

    function pc(a) {
        return a[0] === "-" ? a.length < 20 ? !0 : a.length === 20 && Number(a.substring(0, 7)) > -922337 : a.length < 19 ? !0 : a.length === 19 && Number(a.substring(0, 6)) < 922337
    }

    function qc(a) {
        if (pc(a)) return a;
        if (a.length < 16) Wb(Number(a));
        else if (hb()) a = BigInt(a), I = Number(a & BigInt(4294967295)) >>> 0, J = Number(a >> BigInt(32) & BigInt(4294967295));
        else {
            var b = +(a[0] === "-");
            J = I = 0;
            for (var c = a.length, d = b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) d = Number(a.slice(d, e)), J *= 1E6, I = I * 1E6 + d, I >= 4294967296 && (J += u(Math, "trunc").call(Math, I / 4294967296), J >>>= 0, I >>>= 0);
            b && (b = z(Xb(I, J)), a = b.next().value, b = b.next().value, I = a, J = b)
        }
        return $b()
    }

    function nc(a) {
        a = u(Math, "trunc").call(Math, a);
        if (!u(Number, "isSafeInteger").call(Number, a)) {
            Wb(a);
            var b = I,
                c = J;
            if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, b == 0 && (c = c + 1 >>> 0);
            var d = c * 4294967296 + (b >>> 0);
            b = u(Number, "isSafeInteger").call(Number, d) ? d : Yb(b, c);
            a = typeof b === "number" ? a ? -b : b : a ? "-" + b : b
        }
        return a
    }

    function kc(a) {
        a = u(Math, "trunc").call(Math, a);
        if (u(Number, "isSafeInteger").call(Number, a)) a = String(a);
        else {
            var b = String(a);
            pc(b) ? a = b : (Wb(a), a = $b())
        }
        return a
    }

    function jc(a) {
        var b = u(Math, "trunc").call(Math, Number(a));
        if (u(Number, "isSafeInteger").call(Number, b)) return String(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        return qc(a)
    }

    function lc(a) {
        var b = u(Math, "trunc").call(Math, Number(a));
        if (u(Number, "isSafeInteger").call(Number, b)) return Ob(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        return hb() ? Ob(BigInt.asIntN(64, BigInt(a))) : Ob(qc(a))
    }

    function mc(a) {
        return u(Number, "isSafeInteger").call(Number, a) ? Ob(nc(a)) : Ob(kc(a))
    }

    function rc(a) {
        if (typeof a !== "string") throw Error();
        return a
    }

    function sc(a) {
        if (a != null && typeof a !== "string") throw Error();
        return a
    }

    function tc(a) {
        return a == null || typeof a === "string" ? a : void 0
    }

    function uc(a, b, c, d) {
        if (a != null && typeof a === "object" && a.aa === xb) return a;
        if (!Array.isArray(a)) return c ? d & 2 ? vc(b) : new b : void 0;
        var e = c = E(a);
        e === 0 && (e |= d & 32);
        e |= d & 2;
        e !== c && G(a, e);
        return new b(a)
    }

    function vc(a) {
        var b = a[mb];
        if (b) return b;
        b = new a;
        pb(b.i, 34);
        return a[mb] = b
    };
    var Dc = function(a) {
        wc === void 0 && (wc = typeof Proxy === "function" ? xc(Proxy) : null);
        var b;
        (b = !wc) || (yc === void 0 && (yc = typeof t.WeakMap === "function" ? xc(t.WeakMap) : null), b = !yc);
        if (b) return a;
        if (b = zc(a)) return b;
        if (Math.random() > .01) return a;
        Ac(a);
        b = new wc(a, {
            set: function(c, d, e) {
                Bc();
                c[d] = e;
                return !0
            }
        });
        Cc(a, b);
        return b
    };

    function Bc() {
        fb()
    }
    var Ec = void 0,
        Fc = void 0,
        zc = function(a) {
            var b;
            return (b = Ec) == null ? void 0 : b.get(a)
        },
        Gc = function(a) {
            var b;
            return ((b = Fc) == null ? void 0 : b.get(a)) || a
        };

    function Cc(a, b) {
        (Ec || (Ec = new yc)).set(a, b);
        (Fc || (Fc = new yc)).set(b, a)
    }
    var wc = void 0,
        yc = void 0;

    function xc(a) {
        try {
            return a.toString().indexOf("[native code]") !== -1 ? a : null
        } catch (b) {
            return null
        }
    }
    var Hc = void 0;

    function Ac(a) {
        if (Hc === void 0) {
            var b = new wc([], {});
            Hc = Array.prototype.concat.call([], b).length === 1
        }
        Hc && typeof t.Symbol === "function" && t.Symbol.isConcatSpreadable && (a[t.Symbol.isConcatSpreadable] = !0)
    };
    var Ic;

    function Jc(a, b) {
        Ic = b;
        a = new a(b);
        Ic = void 0;
        return a
    }

    function L(a, b, c) {
        var d = d != null ? d : 0;
        a == null && (a = Ic);
        Ic = void 0;
        if (a == null) {
            var e = 96;
            c ? (a = [c], e |= 512) : a = [];
            b && (e = e & -33521665 | (b & 1023) << 15)
        } else {
            if (!Array.isArray(a)) throw Error("narr");
            e = E(a);
            if (e & 2048) throw Error("farr");
            if (e & 64) return a;
            d === 1 || d === 2 || (e |= 64);
            if (c && (e |= 512, c !== a[0])) throw Error("mid");
            a: {
                c = a;
                if (d = c.length) {
                    var f = d - 1;
                    if (Ab(c[f])) {
                        e |= 256;
                        b = f - (+!!(e & 512) - 1);
                        if (b >= 1024) throw Error("pvtlmt");
                        e = e & -33521665 | (b & 1023) << 15;
                        break a
                    }
                }
                if (b) {
                    b = Math.max(b, d - (+!!(e & 512) - 1));
                    if (b > 1024) throw Error("spvt");
                    e = e & -33521665 | (b & 1023) << 15
                }
            }
        }
        G(a, e);
        return a
    };

    function Kc(a, b) {
        return Lc(b)
    }

    function Lc(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "bigint":
                return Ub(a) ? Number(a) : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (Bb(a)) return
                    } else if (Za && a != null && a instanceof Uint8Array) {
                    if ($a) {
                        for (var b = "", c = 0, d = a.length - 10240; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                        a = btoa(b)
                    } else {
                        b === void 0 && (b = 0);
                        Ya();
                        b = Ua[b];
                        c = Array(Math.floor(a.length / 3));
                        d = b[64] || "";
                        for (var e = 0, f = 0; e < a.length - 2; e += 3) {
                            var g = a[e],
                                h = a[e + 1],
                                k = a[e + 2],
                                l = b[g >> 2];
                            g = b[(g & 3) << 4 | h >> 4];
                            h = b[(h & 15) << 2 | k >> 6];
                            k = b[k & 63];
                            c[f++] = l + g + h + k
                        }
                        l = 0;
                        k = d;
                        switch (a.length - e) {
                            case 2:
                                l = a[e + 1], k = b[(l & 15) << 2] || d;
                            case 1:
                                a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
                        }
                        a = c.join("")
                    }
                    return a
                }
        }
        return a
    };

    function Mc(a, b, c) {
        a = ib(a);
        var d = a.length,
            e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (var f in e) Object.prototype.hasOwnProperty.call(e, f) && (b[f] = c(e[f]))
        }
        return a
    }

    function Nc(a, b, c, d, e) {
        if (a != null) {
            if (Array.isArray(a)) a = Bb(a) ? void 0 : e && E(a) & 2 ? a : Oc(a, b, c, d !== void 0, e);
            else if (Ab(a)) {
                var f = {},
                    g;
                for (g in a) Object.prototype.hasOwnProperty.call(a, g) && (f[g] = Nc(a[g], b, c, d, e));
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function Oc(a, b, c, d, e) {
        var f = d || c ? E(a) : 0;
        d = d ? !!(f & 32) : void 0;
        a = ib(a);
        for (var g = 0; g < a.length; g++) a[g] = Nc(a[g], b, c, d, e);
        c && c(f, a);
        return a
    }

    function Pc(a) {
        return a.aa === xb ? a.toJSON() : Za && a != null && a instanceof Uint8Array ? new Uint8Array(a) : a
    }

    function Qc(a) {
        return a.aa === xb ? a.toJSON() : Lc(a)
    }
    var Rc = typeof structuredClone != "undefined" ? structuredClone : function(a) {
        return Oc(a, Pc, void 0, void 0, !1)
    };

    function Sc(a, b, c) {
        c = c === void 0 ? wb : c;
        if (a != null) {
            if (Za && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = E(a);
                if (d & 2) return a;
                b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (G(a, (d | 34) & -12293), a) : Oc(a, Sc, d & 4 ? wb : c, !0, !0)
            }
            a.aa === xb && (c = a.i, d = F(c), a = d & 2 ? a : Jc(a.constructor, Tc(c, d, !0)));
            return a
        }
    }

    function Tc(a, b, c) {
        var d = c || b & 2 ? wb : tb,
            e = !!(b & 32);
        a = Mc(a, b, function(f) {
            return Sc(f, e, d)
        });
        pb(a, 32 | (c ? 2 : 0));
        return a
    }

    function Uc(a) {
        var b = a.i,
            c = F(b);
        return c & 2 ? Jc(a.constructor, Tc(b, c, !1)) : a
    }

    function Vc(a) {
        var b = a.i,
            c = F(b);
        return c & 2 ? a : Jc(a.constructor, Tc(b, c, !0))
    };
    var Wc = Ob(0),
        M = function(a, b) {
            a = a.i;
            return Xc(a, F(a), b)
        };

    function Yc(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(b < 0 || b >= a.length || b >= c)) return a[b]
    }
    var Xc = function(a, b, c, d) {
            if (c === -1) return null;
            var e = b >> 15 & 1023 || 536870912;
            if (c >= e) {
                if (b & 256) return a[a.length - 1][c]
            } else {
                var f = a.length;
                if (d && b & 256 && (d = a[f - 1][c], d != null)) {
                    if (Yc(a, b, e, c) && nb != null) {
                        var g;
                        a = (g = bb) != null ? g : bb = {};
                        g = a[nb] || 0;
                        g >= 4 || (a[nb] = g + 1, fb())
                    }
                    return d
                }
                return Yc(a, b, e, c)
            }
        },
        O = function(a, b, c) {
            var d = a.i,
                e = F(d);
            Eb(e);
            N(d, e, b, c);
            return a
        };

    function N(a, b, c, d) {
        var e = b >> 15 & 1023 || 536870912;
        if (c >= e) {
            var f = b;
            if (b & 256) var g = a[a.length - 1];
            else {
                if (d == null) return f;
                g = a[e + (+!!(b & 512) - 1)] = {};
                f |= 256
            }
            g[c] = d;
            c < e && (a[c + (+!!(b & 512) - 1)] = void 0);
            f !== b && G(a, f);
            return f
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    }
    var P = function(a) {
        return a === Fb ? 2 : Fa ? 4 : 5
    };

    function Zc(a, b, c, d, e) {
        var f = a.i;
        a = F(f);
        var g = 2 & a ? 1 : d;
        e = !!e;
        d = $c(f, a, b);
        var h = E(d);
        if (!(4 & h)) {
            4 & h && (d = ib(d), h = ad(h, a), a = N(f, a, b, d));
            for (var k = 0, l = 0; k < d.length; k++) {
                var p = c(d[k]);
                p != null && (d[l++] = p)
            }
            l < k && (d.length = l);
            h = bd(h, a);
            h = (h | 20) & -4097;
            h &= -8193;
            G(d, h);
            2 & h && Object.freeze(d)
        }
        if (g === 1 || g === 4 && 32 & h) cd(h) || (e = h, h |= 2, h !== e && G(d, h), Object.freeze(d));
        else if (c = g !== 5 ? !1 : !!(32 & h) || cd(h) || !!zc(d), (g === 2 || c) && cd(h) && (d = ib(d), h = ad(h, a), h = dd(h, a, e), G(d, h), a = N(f, a, b, d)), cd(h) || (b = h, h = dd(h, a, e), h !== b && G(d, h)), c) var r = Dc(d);
        else if (g === 2 && !e) {
            var m;
            (m = Ec) == null || m.delete(d)
        }
        return r || d
    }

    function $c(a, b, c) {
        a = Xc(a, b, c);
        return Array.isArray(a) ? a : Cb
    }

    function bd(a, b) {
        a === 0 && (a = ad(a, b));
        return a | 1
    }

    function cd(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }

    function ed(a, b, c, d) {
        var e = a.i,
            f = F(e);
        Eb(f);
        if (c == null) return N(e, f, b), a;
        c = Gc(c);
        var g = E(c),
            h = g,
            k = !!(4 & g),
            l = cd(g),
            p = l || Object.isFrozen(c);
        l || (g = 0);
        p || (c = ib(c), h = 0, g = ad(g, f), g = dd(g, f, !0), p = !1);
        g |= 21;
        var r;
        l = (r = rb(g)) != null ? r : 0;
        if (!k)
            for (k = 0; k < c.length; k++) {
                r = c[k];
                var m = d(r, l);
                u(Object, "is").call(Object, r, m) || (p && (c = ib(c), h = 0, g = ad(g, f), g = dd(g, f, !0), p = !1), c[k] = m)
            }
        g !== h && (p && (c = ib(c), g = ad(g, f), g = dd(g, f, !0)), G(c, g));
        N(e, f, b, c);
        return a
    }

    function Q(a, b, c, d) {
        var e = a.i,
            f = F(e);
        Eb(f);
        N(e, f, b, (d === "0" ? Number(c) === 0 : c === d) ? void 0 : c);
        return a
    }
    var R = function(a, b, c, d) {
            var e = a.i,
                f = F(e);
            Eb(f);
            if (d == null) {
                var g = fd(e);
                if (gd(g, e, f, c) === b) g.set(c, 0);
                else return a
            } else {
                g = fd(e);
                var h = gd(g, e, f, c);
                h !== b && (h && (f = N(e, f, h)), g.set(c, b))
            }
            N(e, f, b, d);
            return a
        },
        id = function(a, b, c) {
            return hd(a, b) === c ? c : -1
        },
        hd = function(a, b) {
            a = a.i;
            return gd(fd(a), a, F(a), b)
        };

    function fd(a) {
        if (jb) {
            var b;
            return (b = a[ob]) != null ? b : a[ob] = new t.Map
        }
        if (ob in a) return a[ob];
        b = new t.Map;
        Object.defineProperty(a, ob, {
            value: b
        });
        return b
    }

    function gd(a, b, c, d) {
        var e = a.get(d);
        if (e != null) return e;
        for (var f = e = 0; f < d.length; f++) {
            var g = d[f];
            Xc(b, c, g) != null && (e !== 0 && (c = N(b, c, e)), e = g)
        }
        a.set(d, e);
        return e
    }
    var kd = function(a) {
        var b = jd;
        a = a.i;
        var c = F(a);
        Eb(c);
        var d = Xc(a, c, 4);
        b = Uc(uc(d, b, !0, c));
        d !== b && N(a, c, 4, b);
        return b
    };

    function ld(a, b, c) {
        a = a.i;
        var d = F(a),
            e = Xc(a, d, c, !1);
        b = uc(e, b, !1, d);
        b !== e && b != null && N(a, d, c, b);
        return b
    }
    var md = function(a, b, c) {
            return (a = ld(a, b, c)) ? a : vc(b)
        },
        S = function(a, b, c) {
            b = ld(a, b, c);
            if (b == null) return b;
            a = a.i;
            var d = F(a);
            if (!(d & 2)) {
                var e = Uc(b);
                e !== b && (b = e, N(a, d, c, b))
            }
            return b
        };

    function nd(a, b, c, d, e, f, g) {
        a = a.i;
        var h = !!(2 & b);
        e = h ? 1 : e;
        f = !!f;
        g && (g = !h);
        h = $c(a, b, d);
        var k = E(h),
            l = !!(4 & k);
        if (!l) {
            k = bd(k, b);
            var p = h,
                r = b,
                m = !!(2 & k);
            m && (r |= 2);
            for (var q = !m, v = !0, y = 0, D = 0; y < p.length; y++) {
                var ra = uc(p[y], c, !1, r);
                if (ra instanceof c) {
                    if (!m) {
                        var ub = !!(E(ra.i) & 2);
                        q && (q = !ub);
                        v && (v = ub)
                    }
                    p[D++] = ra
                }
            }
            D < y && (p.length = D);
            k |= 4;
            k = v ? k | 16 : k & -17;
            k = q ? k | 8 : k & -9;
            G(p, k);
            m && Object.freeze(p)
        }
        if (g && !(8 & k || !h.length && (e === 1 || e === 4 && 32 & k))) {
            cd(k) && (h = ib(h), k = ad(k, b), b = N(a, b, d, h));
            c = h;
            g = k;
            for (p = 0; p < c.length; p++) k = c[p], r = Uc(k), k !== r && (c[p] = r);
            g |= 8;
            g = c.length ? g & -17 : g | 16;
            G(c, g);
            k = g
        }
        if (e === 1 || e === 4 && 32 & k) cd(k) || (b = k, k |= !h.length || 16 & k && (!l || 32 & k) ? 2 : 2048, k !== b && G(h, k), Object.freeze(h));
        else if (l = e !== 5 ? !1 : !!(32 & k) || cd(k) || !!zc(h), (e === 2 || l) && cd(k) && (h = ib(h), k = ad(k, b), k = dd(k, b, f), G(h, k), b = N(a, b, d, h)), cd(k) || (d = k, k = dd(k, b, f), k !== d && G(h, k)), l) var vb = Dc(h);
        else if (e === 2 && !f) {
            var Qe;
            (Qe = Ec) == null || Qe.delete(h)
        }
        return vb || h
    }
    var T = function(a, b, c, d) {
            var e = F(a.i);
            return nd(a, e, b, c, d, !1, !(2 & e))
        },
        od = function(a, b, c) {
            c == null && (c = void 0);
            return O(a, b, c)
        },
        pd = function(a, b, c, d) {
            d == null && (d = void 0);
            return R(a, b, c, d)
        },
        qd = function(a, b, c) {
            var d = a.i,
                e = F(d);
            Eb(e);
            if (c == null) return N(d, e, b), a;
            c = Gc(c);
            for (var f = E(c), g = f, h = cd(f), k = h || Object.isFrozen(c), l = !0, p = !0, r = 0; r < c.length; r++) {
                var m = c[r];
                h || (m = !!(E(m.i) & 2), l && (l = !m), p && (p = m))
            }
            h || (f = l ? 13 : 5, f = p ? f | 16 : f & -17);
            if (!k || k && f !== g) c = ib(c), g = 0, f = ad(f, e), f = dd(f, e, !0);
            f !== g && G(c, f);
            N(d, e, b, c);
            return a
        };

    function ad(a, b) {
        a = (2 & b ? a | 2 : a & -3) | 32;
        return a &= -2049
    }

    function dd(a, b, c) {
        32 & b && c || (a &= -33);
        return a
    }

    function rd(a, b) {
        Eb(F(a.i));
        a = Zc(a, 4, tc, 2, !0);
        var c, d = (c = rb(E(a))) != null ? c : 0;
        if (Array.isArray(b)) {
            b = Gc(b);
            c = b.length;
            for (var e = 0; e < c; e++) a.push(rc(b[e], d))
        } else
            for (b = z(b), c = b.next(); !c.done; c = b.next()) a.push(rc(c.value, d))
    }

    function sd(a, b) {
        return a != null ? a : b
    }
    var td = function(a, b) {
            a = M(a, b);
            return a == null ? a : u(Number, "isFinite").call(Number, a) ? a | 0 : void 0
        },
        ud = function(a, b) {
            var c = c === void 0 ? !1 : c;
            a = M(a, b);
            return sd(a == null || typeof a === "boolean" ? a : typeof a === "number" ? !!a : void 0, c)
        },
        vd = function(a, b) {
            var c = c === void 0 ? 0 : c;
            return sd(gc(M(a, b)), c)
        },
        wd = function(a, b) {
            var c = c === void 0 ? 0 : c;
            return sd(hc(M(a, b)), c)
        },
        xd = function(a, b) {
            var c = c === void 0 ? 0 : c;
            a = M(a, b);
            a != null && (typeof a === "bigint" ? Ub(a) ? a = Number(a) : (a = BigInt.asIntN(64, a), a = Ub(a) ? Number(a) : String(a)) : a = dc(a) ? typeof a === "number" ? nc(a) : jc(a) : void 0);
            return sd(a, c)
        },
        yd = function(a, b) {
            var c = c === void 0 ? Wc : c;
            a = M(a, b);
            b = typeof a;
            a = a == null ? a : b === "bigint" ? Ob(BigInt.asIntN(64, a)) : dc(a) ? b === "string" ? lc(a) : mc(a) : void 0;
            return sd(a, c)
        },
        zd = function(a, b) {
            var c = c === void 0 ? 0 : c;
            a = a.i;
            var d = F(a),
                e = Xc(a, d, b);
            var f = e == null || typeof e === "number" ? e : e === "NaN" || e === "Infinity" || e === "-Infinity" ? Number(e) : void 0;
            f != null && f !== e && N(a, d, b, f);
            return sd(f, c)
        },
        U = function(a, b) {
            var c = c === void 0 ? "" : c;
            return sd(tc(M(a, b)), c)
        },
        V = function(a, b) {
            var c = 0;
            c = c === void 0 ? 0 : c;
            return sd(td(a, b), c)
        },
        Ad = function(a, b, c) {
            a = Zc(a, b, gc, 3, !0);
            if (typeof c !== "number" || c < 0 || c >= a.length) throw Error();
            return a[c]
        },
        Bd = function(a, b) {
            return Zc(a, b, tc, P())
        },
        Cd = function(a, b, c) {
            return V(a, id(a, c, b))
        },
        Dd = function(a, b, c) {
            return Q(a, b, oc(c), "0")
        },
        Ed = function(a, b, c) {
            return Q(a, b, sc(c), "")
        };
    var Fd, W = function(a, b, c) {
        this.i = L(a, b, c)
    };
    W.prototype.toJSON = function() {
        return Gd(this)
    };
    var Hd = function(a) {
        try {
            return Fd = !0, JSON.stringify(Gd(a), Kc)
        } finally {
            Fd = !1
        }
    };
    W.prototype.aa = xb;

    function Gd(a) {
        a = a.i;
        a = Fd ? a : Oc(a, Qc, void 0, void 0, !1);
        var b = !Fd,
            c = a.length;
        if (c) {
            var d = a[c - 1],
                e = Ab(d);
            e ? c-- : d = void 0;
            var f = a;
            if (e) {
                b: {
                    var g = d;
                    var h;
                    var k = !1;
                    if (g)
                        for (var l in g)
                            if (Object.prototype.hasOwnProperty.call(g, l))
                                if (isNaN(+l)) e = void 0, ((e = h) != null ? e : h = {})[l] = g[l];
                                else if (e = g[l], Array.isArray(e) && (Bb(e) || zb(e) && e.size === 0) && (e = null), e == null && (k = !0), e != null) {
                        var p = void 0;
                        ((p = h) != null ? p : h = {})[l] = e
                    }
                    k || (h = g);
                    if (h)
                        for (var r in h) {
                            k = h;
                            break b
                        }
                    k = null
                }
                g = k == null ? d != null : k !== d
            }
            for (; c > 0; c--) {
                h = f[c - 1];
                if (!(h == null || Bb(h) || zb(h) && h.size === 0)) break;
                var m = !0
            }
            if (f !== a || g || m) {
                if (!b) f = Array.prototype.slice.call(f, 0, c);
                else if (m || g || k) f.length = c;
                k && f.push(k)
            }
            m = f
        } else m = a;
        return m
    }

    function Id(a, b) {
        if (b == null) return new a;
        if (!Array.isArray(b)) throw Error("must be an array");
        if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b)) throw Error("arrays passed to jspb constructors must be mutable");
        pb(b, 128);
        return Jc(a, sb(b))
    };

    function Jd(a) {
        return function(b) {
            if (b == null || b == "") b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("dnarr");
                b = Jc(a, sb(b))
            }
            return b
        }
    };
    var Kd = function(a) {
        this.i = L(a)
    };
    x(Kd, W);
    var Ld = function(a) {
        this.i = L(a)
    };
    x(Ld, W);
    var Md = Jd(Ld);
    var Nd = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var Od = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };
    var Pd = function() {
        return Ea && Ga ? !Ga.mobile && (C("iPad") || C("Android") || C("Silk")) : C("iPad") || C("Android") && !C("Mobile") || C("Silk")
    };

    function Qd(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    };
    /* 
     
     Copyright Google LLC 
     SPDX-License-Identifier: Apache-2.0 
    */
    var Rd;

    function Sd() {
        Rd === void 0 && (Rd = null);
        return Rd
    };
    var Td = function(a) {
        this.g = a
    };
    Td.prototype.toString = function() {
        return this.g + ""
    };

    function Ud(a) {
        var b = Sd();
        return new Td(b ? b.createScriptURL(a) : a)
    }

    function Vd(a) {
        if (a instanceof Td) return a.g;
        throw Error("");
    };
    var Wd = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
    var Xd = function(a) {
        this.g = a
    };
    Xd.prototype.toString = function() {
        return this.g + ""
    };
    var Yd = "alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");

    function Zd(a) {
        a = a === void 0 ? document : a;
        var b, c;
        a = (c = (b = "document" in a ? a.document : a).querySelector) == null ? void 0 : c.call(b, "script[nonce]");
        return a == null ? "" : a.nonce || a.getAttribute("nonce") || ""
    };

    function $d(a, b) {
        a.src = Vd(b);
        (b = Zd(a.ownerDocument && a.ownerDocument.defaultView || window)) && a.setAttribute("nonce", b)
    };

    function ae(a, b) {
        var c = a.write;
        if (b instanceof Xd) b = b.g;
        else throw Error("");
        c.call(a, b)
    };
    var be = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        ce = function(a) {
            return a ? decodeURI(a) : a
        },
        de = /#|$/,
        ee = function(a, b) {
            var c = a.search(de);
            a: {
                var d = 0;
                for (var e = b.length;
                    (d = a.indexOf(b, d)) >= 0 && d < c;) {
                    var f = a.charCodeAt(d - 1);
                    if (f == 38 || f == 63)
                        if (f = a.charCodeAt(d + e), !f || f == 61 || f == 38 || f == 35) break a;
                    d += e + 1
                }
                d = -1
            }
            if (d < 0) return null;
            e = a.indexOf("&", d);
            if (e < 0 || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " "))
        };

    function fe(a, b) {
        a = Vd(a).toString();
        a = '<script src="' + ge(a) + '"';
        if (b == null ? 0 : b.async) a += " async";
        (b == null ? void 0 : b.attributionSrc) !== void 0 && (a += ' attributionsrc="' + ge(b.attributionSrc) + '"');
        if (b == null ? 0 : b.Va) a += ' custom-element="' + ge(b.Va) + '"';
        if (b == null ? 0 : b.defer) a += " defer";
        if (b == null ? 0 : b.id) a += ' id="' + ge(b.id) + '"';
        if (b == null ? 0 : b.nonce) a += ' nonce="' + ge(b.nonce) + '"';
        if (b == null ? 0 : b.type) a += ' type="' + ge(b.type) + '"';
        if (b == null ? 0 : b.Ga) a += ' crossorigin="' + ge(b.Ga) + '"';
        b = a + ">\x3c/script>";
        a = Sd();
        return new Xd(a ? a.createHTML(b) : b)
    }

    function ge(a) {
        return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    };

    function he(a) {
        var b = ta.apply(1, arguments);
        if (b.length === 0) return Ud(a[0]);
        for (var c = a[0], d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return Ud(c)
    }

    function ie(a, b) {
        a = Vd(a).toString();
        var c = a.split(/[?#]/),
            d = /[?]/.test(a) ? "?" + c[1] : "";
        return je(c[0], d, /[#]/.test(a) ? "#" + (d ? c[2] : c[1]) : "", b)
    }

    function je(a, b, c, d) {
        function e(g, h) {
            g != null && (Array.isArray(g) ? g.forEach(function(k) {
                return e(k, h)
            }) : (b += f + encodeURIComponent(h) + "=" + encodeURIComponent(g), f = "&"))
        }
        var f = b.length ? "&" : "?";
        d.constructor === Object && (d = u(Object, "entries").call(Object, d));
        Array.isArray(d) ? d.forEach(function(g) {
            return e(g[1], g[0])
        }) : d.forEach(e);
        return Ud(a + b + c)
    };
    var ke = function(a) {
            try {
                var b;
                if (b = !!a && a.location.href != null) a: {
                    try {
                        Sa(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
                return b
            } catch (c) {
                return !1
            }
        },
        le = function(a) {
            var b = b === void 0 ? !1 : b;
            var c = c === void 0 ? B : c;
            for (var d = 0; c && d++ < 40 && (!b && !ke(c) || !a(c));) a: {
                try {
                    var e = c.parent;
                    if (e && e != c) {
                        c = e;
                        break a
                    }
                } catch (f) {}
                c = null
            }
        },
        me = function(a) {
            var b = a;
            le(function(c) {
                b = c;
                return !1
            });
            return b
        },
        ne = function(a) {
            return ke(a.top) ? a.top : null
        },
        oe = function() {
            if (!t.globalThis.crypto) return Math.random();
            try {
                var a = new Uint32Array(1);
                t.globalThis.crypto.getRandomValues(a);
                return a[0] / 65536 / 65536
            } catch (b) {
                return Math.random()
            }
        },
        pe = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        },
        qe = function(a) {
            var b = a.length;
            if (b == 0) return 0;
            for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
            return c > 0 ? c : 4294967296 + c
        },
        re = Nd(function() {
            return (Ea && Ga ? Ga.mobile : !Pd() && (C("iPod") || C("iPhone") || C("Android") || C("IEMobile"))) ? 2 : Pd() ? 1 : 0
        });

    function se(a, b) {
        if (a.length && b.head) {
            a = z(a);
            for (var c = a.next(); !c.done; c = a.next())
                if ((c = c.value) && b.head) {
                    var d = te("META");
                    b.head.appendChild(d);
                    d.httpEquiv = "origin-trial";
                    d.content = c
                }
        }
    }
    var ue = function(a) {
            if (typeof a.goog_pvsid !== "number") try {
                var b = Object,
                    c = b.defineProperty,
                    d = void 0;
                d = d === void 0 ? Math.random : d;
                var e = Math.floor(d() * 4503599627370496);
                c.call(b, a, "goog_pvsid", {
                    value: e,
                    configurable: !1
                })
            } catch (f) {}
            return Number(a.goog_pvsid) || -1
        },
        te = function(a, b) {
            b = b === void 0 ? document : b;
            return b.createElement(String(a).toLowerCase())
        };
    var xe = function(a, b) {
        this.g = a === ve && b || "";
        this.j = we
    };
    xe.prototype.toString = function() {
        return this.g
    };
    var we = {},
        ve = {};
    var ye = {
        zb: 0,
        yb: 1,
        vb: 2,
        qb: 3,
        wb: 4,
        rb: 5,
        xb: 6,
        tb: 7,
        ub: 8,
        pb: 9,
        sb: 10,
        Ab: 11
    };
    var ze = {
        Cb: 0,
        Db: 1,
        Bb: 2
    };
    var Ae = function(a) {
        this.i = L(a)
    };
    x(Ae, W);
    Ae.prototype.getVersion = function() {
        return vd(this, 2)
    };

    function Be(a) {
        return Xa(a.length % 4 !== 0 ? a + "A" : a).map(function(b) {
            return (n = b.toString(2), u(n, "padStart")).call(n, 8, "0")
        }).join("")
    }

    function Ce(a) {
        if (!/^[0-1]+$/.test(a)) throw Error("Invalid input [" + a + "] not a bit string.");
        return parseInt(a, 2)
    }

    function De(a) {
        if (!/^[0-1]+$/.test(a)) throw Error("Invalid input [" + a + "] not a bit string.");
        for (var b = [1, 2, 3, 5], c = 0, d = 0; d < a.length - 1; d++) b.length <= d && b.push(b[d - 1] + b[d - 2]), c += parseInt(a[d], 2) * b[d];
        return c
    };

    function Ee(a) {
        var b = Be(a),
            c = Ce(b.slice(0, 6));
        a = Ce(b.slice(6, 12));
        var d = new Ae;
        c = Q(d, 1, fc(c), 0);
        a = Q(c, 2, fc(a), 0);
        b = b.slice(12);
        c = Ce(b.slice(0, 12));
        d = [];
        for (var e = b.slice(12).replace(/0+$/, ""), f = 0; f < c; f++) {
            if (e.length === 0) throw Error("Found " + f + " of " + c + " sections [" + d + "] but reached end of input [" + b + "]");
            var g = Ce(e[0]) === 0;
            e = e.slice(1);
            var h = Fe(e, b),
                k = d.length === 0 ? 0 : d[d.length - 1];
            k = De(h) + k;
            e = e.slice(h.length);
            if (g) d.push(k);
            else {
                g = Fe(e, b);
                h = De(g);
                for (var l = 0; l <= h; l++) d.push(k + l);
                e = e.slice(g.length)
            }
        }
        if (e.length > 0) throw Error("Found " + c + " sections [" + d + "] but has remaining input [" + e + "], entire input [" + b + "]");
        return ed(a, 3, d, ec)
    }

    function Fe(a, b) {
        var c = a.indexOf("11");
        if (c === -1) throw Error("Expected section bitstring but not found in [" + a + "] part of [" + b + "]");
        return a.slice(0, c + 2)
    };
    var Ge = "a".charCodeAt(),
        He = Qd(ye),
        Ie = Qd(ze);
    var Je = function(a) {
        this.i = L(a)
    };
    x(Je, W);
    var Ke = function() {
            var a = new Je;
            return Dd(a, 1, 0)
        },
        Le = function(a) {
            var b = Number;
            var c = c === void 0 ? "0" : c;
            var d = M(a, 1);
            var e = !0;
            e = e === void 0 ? !1 : e;
            var f = typeof d;
            d = d == null ? d : f === "bigint" ? String(BigInt.asIntN(64, d)) : dc(d) ? f === "string" ? jc(d) : e ? kc(d) : nc(d) : void 0;
            b = b(sd(d, c));
            a = vd(a, 2);
            return new Date(b * 1E3 + a / 1E6)
        };
    var Me = function(a) {
            if (/[^01]/.test(a)) throw Error("Input bitstring " + a + " is malformed!");
            this.j = a;
            this.g = 0
        },
        Pe = function(a) {
            var b = X(a, 16);
            return !!X(a, 1) === !0 ? (a = Ne(a), a.forEach(function(c) {
                if (c > b) throw Error("ID " + c + " is past MaxVendorId " + b + "!");
            }), a) : Oe(a, b)
        },
        Ne = function(a) {
            for (var b = X(a, 12), c = []; b--;) {
                var d = !!X(a, 1) === !0,
                    e = X(a, 16);
                if (d)
                    for (d = X(a, 16); e <= d; e++) c.push(e);
                else c.push(e)
            }
            c.sort(function(f, g) {
                return f - g
            });
            return c
        },
        Oe = function(a, b, c) {
            for (var d = [], e = 0; e < b; e++)
                if (X(a, 1)) {
                    var f = e + 1;
                    if (c && c.indexOf(f) === -1) throw Error("ID: " + f + " is outside of allowed values!");
                    d.push(f)
                } return d
        },
        X = function(a, b) {
            if (a.g + b > a.j.length) throw Error("Requested length " + b + " is past end of string.");
            var c = a.j.substring(a.g, a.g + b);
            a.g += b;
            return parseInt(c, 2)
        };
    Me.prototype.skip = function(a) {
        this.g += a
    };
    var Se = function(a) {
            try {
                var b = Xa(a.split(".")[0]).map(function(d) {
                        return (n = d.toString(2), u(n, "padStart")).call(n, 8, "0")
                    }).join(""),
                    c = new Me(b);
                b = {};
                b.tcString = a;
                b.gdprApplies = !0;
                c.skip(78);
                b.cmpId = X(c, 12);
                b.cmpVersion = X(c, 12);
                c.skip(30);
                b.tcfPolicyVersion = X(c, 6);
                b.isServiceSpecific = !!X(c, 1);
                b.useNonStandardStacks = !!X(c, 1);
                b.specialFeatureOptins = Re(Oe(c, 12, Ie), Ie);
                b.purpose = {
                    consents: Re(Oe(c, 24, He), He),
                    legitimateInterests: Re(Oe(c, 24, He), He)
                };
                b.purposeOneTreatment = !!X(c, 1);
                b.publisherCC = String.fromCharCode(Ge + X(c, 6)) + String.fromCharCode(Ge + X(c, 6));
                b.vendor = {
                    consents: Re(Pe(c), null),
                    legitimateInterests: Re(Pe(c), null)
                };
                return b
            } catch (d) {
                return null
            }
        },
        Re = function(a, b) {
            var c = {};
            if (Array.isArray(b) && b.length !== 0) {
                b = z(b);
                for (var d = b.next(); !d.done; d = b.next()) d = d.value, c[d] = a.indexOf(d) !== -1
            } else
                for (a = z(a), b = a.next(); !b.done; b = a.next()) c[b.value] = !0;
            delete c[0];
            return c
        };
    var Te = function(a) {
        this.i = L(a)
    };
    x(Te, W);
    var Ue = function(a, b) {
        var c = c === void 0 ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    };

    function Ve(a, b, c, d) {
        d = d === void 0 ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = te("IMG", a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var g = a.google_image_requests,
                        h = Array.prototype.indexOf.call(g, e, void 0);
                    h >= 0 && Array.prototype.splice.call(g, h, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, !1);
                e.removeEventListener && e.removeEventListener("error", f, !1)
            };
            Od(e, "load", f);
            Od(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var Xe = function(a) {
            var b = b === void 0 ? !1 : b;
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=rcs_internal";
            pe(a, function(d, e) {
                if (d || d === 0) c += "&" + e + "=" + encodeURIComponent("" + d)
            });
            We(c, b)
        },
        We = function(a, b) {
            var c = window;
            b = b === void 0 ? !1 : b;
            var d = d === void 0 ? !1 : d;
            c.fetch ? (b = {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }, d && (b.mode = "cors", "setAttributionReporting" in XMLHttpRequest.prototype ? b.attributionReporting = {
                eventSourceEligible: "true",
                triggerEligible: "false"
            } : b.headers = {
                "Attribution-Reporting-Eligible": "event-source"
            }), c.fetch(a, b)) : Ve(c, a, b === void 0 ? !1 : b, d === void 0 ? !1 : d)
        };

    function Ye(a, b) {
        try {
            var c = function(d) {
                var e = {};
                return [(e[d.da] = d.Z, e)]
            };
            return JSON.stringify([a.filter(function(d) {
                return d.T
            }).map(c), Gd(b), a.filter(function(d) {
                return !d.T
            }).map(c)])
        } catch (d) {
            return Ze(d, b), ""
        }
    }

    function Ze(a, b) {
        try {
            var c = a instanceof Error ? a : Error(String(a)),
                d = c.toString();
            c.name && d.indexOf(c.name) == -1 && (d += ": " + c.name);
            c.message && d.indexOf(c.message) == -1 && (d += ": " + c.message);
            if (c.stack) a: {
                var e = c.stack;a = d;
                try {
                    e.indexOf(a) == -1 && (e = a + "\n" + e);
                    for (var f; e != f;) f = e, e = e.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                    d = e.replace(RegExp("\n *", "g"), "\n");
                    break a
                } catch (g) {
                    d = a;
                    break a
                }
                d = void 0
            }
            Xe({
                m: d,
                b: V(b, 1) || null,
                v: U(b, 2) || null
            })
        } catch (g) {}
    }
    var $e = function(a, b) {
        var c = new Te;
        a = Q(c, 1, K(a), 0);
        b = Ed(a, 2, b);
        this.o = Vc(b)
    };
    var af = function(a) {
        this.i = L(a)
    };
    x(af, W);
    var cf = function(a, b) {
            return R(a, 3, bf, b == null ? b : bc(b))
        },
        bf = [1, 2, 3];
    var df = function(a) {
        this.i = L(a)
    };
    x(df, W);
    var ff = function(a, b) {
            return R(a, 2, ef, oc(b))
        },
        ef = [2, 4];
    var gf = function(a) {
        this.i = L(a)
    };
    x(gf, W);
    var hf = function(a) {
            var b = new gf;
            return Ed(b, 1, a)
        },
        jf = function(a, b) {
            return od(a, 3, b)
        },
        kf = function(a, b) {
            var c = F(a.i);
            Eb(c);
            c = nd(a, c, af, 4, 2, !0);
            b = b != null ? b : new af;
            c.push(b);
            E(b.i) & 2 ? qb(c, 8) : qb(c, 16);
            return a
        };
    var lf = function(a) {
        this.i = L(a)
    };
    x(lf, W);
    var mf = function(a) {
        this.i = L(a)
    };
    x(mf, W);
    var nf = function(a, b) {
            return Q(a, 1, K(b), 0)
        },
        of = function(a, b) {
            return Q(a, 2, K(b), 0)
        };
    var pf = function(a) {
        this.i = L(a)
    };
    x(pf, W);
    var qf = [1, 2];
    var rf = function(a) {
        this.i = L(a)
    };
    x(rf, W);
    var sf = function(a, b) {
            return od(a, 1, b)
        },
        tf = function(a, b) {
            return qd(a, 2, b)
        },
        uf = function(a, b) {
            return ed(a, 4, b, ec)
        },
        vf = function(a, b) {
            return qd(a, 5, b)
        },
        wf = function(a, b) {
            return Q(a, 6, K(b), 0)
        };
    var xf = function(a) {
        this.i = L(a)
    };
    x(xf, W);
    var yf = [1, 2, 3, 4, 6];
    var zf = function(a) {
        this.i = L(a)
    };
    x(zf, W);
    var Af = function(a) {
        this.i = L(a)
    };
    x(Af, W);
    var Bf = [2, 3, 4];
    var Cf = function(a) {
        this.i = L(a)
    };
    x(Cf, W);
    var Df = [3, 4, 5],
        Ef = [6, 7];
    var Ff = function(a) {
        this.i = L(a)
    };
    x(Ff, W);
    var Gf = [4, 5];
    var Hf = function(a) {
        this.i = L(a)
    };
    x(Hf, W);
    Hf.prototype.getTagSessionCorrelator = function() {
        return yd(this, 2)
    };
    var Jf = function(a) {
            var b = new Hf;
            return pd(b, 4, If, a)
        },
        If = [4, 5, 7, 8, 9];
    var Kf = function(a) {
        this.i = L(a)
    };
    x(Kf, W);
    var Lf = function(a) {
        this.i = L(a)
    };
    x(Lf, W);
    var Mf = [1, 2, 4, 5, 6, 8, 9, 10];
    var Nf = function(a) {
        this.i = L(a)
    };
    x(Nf, W);
    Nf.prototype.getTagSessionCorrelator = function() {
        return yd(this, 2)
    };
    Nf.prototype.ia = function(a) {
        return Ad(this, 4, a)
    };
    var Of = function(a) {
        this.i = L(a)
    };
    x(Of, W);
    var Pf = function(a) {
        this.i = L(a)
    };
    x(Pf, W);
    var Qf = function(a) {
        this.i = L(a)
    };
    x(Qf, W);
    Qf.prototype.getTagSessionCorrelator = function() {
        return yd(this, 1)
    };
    Qf.prototype.ia = function(a) {
        return Ad(this, 2, a)
    };
    var Rf = function(a) {
        this.i = L(a)
    };
    x(Rf, W);
    var Sf = [1, 7],
        Tf = [4, 6, 8];
    var Vf = function(a) {
            this.g = a;
            this.Qa = new Uf(this.g)
        },
        Uf = function(a) {
            this.g = a;
            this.Ia = new Wf(this.g)
        },
        Wf = function(a) {
            this.g = a;
            this.outstream = new Xf;
            this.request = new Yf;
            this.threadYield = new Zf;
            this.bb = new $f(this.g);
            this.eb = new ag(this.g);
            this.lb = new bg(this.g)
        },
        $f = function(a) {
            this.g = a
        };
    $f.prototype.S = function(a) {
        this.g.A(jf(kf(kf(hf("JwITQ"), cf(new af, a.ka)), cf(new af, a.ma)), ff(new df, Math.round(a.W))))
    };
    var ag = function(a) {
        this.g = a
    };
    ag.prototype.S = function(a) {
        this.g.A(jf(kf(kf(hf("Pn3Upd"), cf(new af, a.ka)), cf(new af, a.ma)), ff(new df, Math.round(a.W))))
    };
    var bg = function(a) {
        this.g = a
    };
    bg.prototype.S = function(a) {
        var b = this.g,
            c = b.A,
            d = hf("rkgGzc");
        var e = new af;
        e = R(e, 2, bf, oc(a.source));
        d = kf(d, e);
        e = new af;
        e = R(e, 2, bf, oc(a.Ua));
        c.call(b, jf(kf(d, e), ff(new df, Math.round(a.W))))
    };
    var Xf = function() {},
        Yf = function() {},
        Zf = function() {},
        cg = function() {
            $e.apply(this, arguments);
            this.La = new Vf(this)
        };
    x(cg, $e);
    var dg = function() {
        cg.apply(this, arguments)
    };
    x(dg, cg);
    dg.prototype.nb = function() {
        this.l.apply(this, A(ta.apply(0, arguments).map(function(a) {
            return {
                T: !0,
                da: 2,
                Z: Gd(a)
            }
        })))
    };
    dg.prototype.ba = function() {
        this.l.apply(this, A(ta.apply(0, arguments).map(function(a) {
            return {
                T: !0,
                da: 4,
                Z: Gd(a)
            }
        })))
    };
    dg.prototype.ob = function() {
        this.l.apply(this, A(ta.apply(0, arguments).map(function(a) {
            return {
                T: !0,
                da: 15,
                Z: Gd(a)
            }
        })))
    };
    dg.prototype.A = function() {
        this.l.apply(this, A(ta.apply(0, arguments).map(function(a) {
            return {
                T: !1,
                da: 1,
                Z: Gd(a)
            }
        })))
    };
    var eg = function(a, b) {
        if (t.globalThis.fetch) t.globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: b.length < 65536,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(function() {});
        else {
            var c = new XMLHttpRequest;
            c.open("POST", a, !0);
            c.send(b)
        }
    };
    var fg = function(a, b, c, d, e, f, g, h) {
        dg.call(this, a, b);
        this.P = c;
        this.O = d;
        this.R = e;
        this.M = f;
        this.N = g;
        this.I = h;
        this.g = [];
        this.j = null;
        this.J = !1
    };
    x(fg, dg);
    var gg = function(a) {
        a.j !== null && (clearTimeout(a.j), a.j = null);
        if (a.g.length) {
            var b = Ye(a.g, a.o);
            a.O(a.P + "?e=1", b);
            a.g = []
        }
    };
    fg.prototype.l = function() {
        var a = ta.apply(0, arguments),
            b = this;
        try {
            this.N && Ye(this.g.concat(a), this.o).length >= 65536 && gg(this), this.I && !this.J && (this.J = !0, this.I.g(function() {
                gg(b)
            })), this.g.push.apply(this.g, A(a)), this.g.length >= this.M && gg(this), this.g.length && this.j === null && (this.j = setTimeout(function() {
                gg(b)
            }, this.R))
        } catch (c) {
            Ze(c, this.o)
        }
    };
    var hg = function(a, b, c, d, e, f) {
        fg.call(this, a, b, "https://pagead2.googlesyndication.com/pagead/ping", eg, c === void 0 ? 1E3 : c, d === void 0 ? 100 : d, (e === void 0 ? !1 : e) && !!t.globalThis.fetch, f)
    };
    x(hg, fg);
    var ig = function(a, b) {
            this.g = a;
            this.defaultValue = b === void 0 ? !1 : b
        },
        jg = function(a, b) {
            this.g = a;
            this.defaultValue = b === void 0 ? 0 : b
        };
    var kg = new ig(501898423),
        lg = new ig(657763206, !0),
        mg = new ig(665538976, !0),
        ng = new ig(45624259),
        og = new jg(635239304, 100),
        pg = new ig(662101539),
        qg = new ig(698033687),
        rg = new ig(690790009),
        sg = new jg(682056200, 100),
        tg = new jg(24),
        ug = new function(a, b) {
            b = b === void 0 ? [] : b;
            this.g = a;
            this.defaultValue = b
        }(1934, ["AlK2UR5SkAlj8jjdEc9p3F3xuFYlF6LYjAML3EOqw1g26eCwWPjdmecULvBH5MVPoqKYrOfPhYVL71xAXI1IBQoAAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==", "Amm8/NmvvQfhwCib6I7ZsmUxiSCfOxWxHayJwyU1r3gRIItzr7bNQid6O8ZYaE1GSQTa69WwhPC9flq/oYkRBwsAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==", "A9wSqI5i0iwGdf6L1CERNdmsTPgVu44ewj8QxTBYgsv1LCPUVF7YmWOvTappqB1139jAymxUW/RO8zmMqo4zlAAAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MzY4MTI4MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A+d7vJfYtay4OUbdtRPZA3y7bKQLsxaMEPmxgfhBGqKXNrdkCQeJlUwqa6EBbSfjwFtJWTrWIioXeMW+y8bWAgQAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MzY4MTI4MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"]);
    var vg = function(a) {
        this.i = L(a)
    };
    x(vg, W);
    var wg = function(a) {
        this.i = L(a)
    };
    x(wg, W);
    var xg = function(a) {
        this.i = L(a)
    };
    x(xg, W);
    var yg = function(a) {
        this.i = L(a)
    };
    x(yg, W);
    var zg = Jd(yg);
    var Ag = function(a) {
        this.g = a || {
            cookie: ""
        }
    };
    Ag.prototype.set = function(a, b, c) {
        var d = !1;
        if (typeof c === "object") {
            var e = c.Gb;
            d = c.Hb || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.hb
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        h === void 0 && (h = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (h < 0 ? "" : h == 0 ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + h * 1E3)).toUTCString()) + (d ? ";secure" : "") + (e != null ? ";samesite=" + e : "")
    };
    Ag.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Ba(d[e]);
            if (f.lastIndexOf(c, 0) == 0) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    Ag.prototype.isEmpty = function() {
        return !this.g.cookie
    };
    Ag.prototype.clear = function() {
        for (var a = (this.g.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = Ba(a[f]), d = e.indexOf("="), d == -1 ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; a >= 0; a--) c = b[a], this.get(c), this.set(c, "", {
            hb: 0,
            path: void 0,
            domain: void 0
        })
    };

    function Bg(a) {
        a = Cg(a);
        try {
            var b = a ? zg(a) : null
        } catch (c) {
            b = null
        }
        return b ? S(b, xg, 4) || null : null
    }

    function Cg(a) {
        a = (new Ag(a)).get("FCCDCF", "");
        if (a)
            if (u(a, "startsWith").call(a, "%")) try {
                var b = decodeURIComponent(a)
            } catch (c) {
                b = null
            } else b = a;
            else b = null;
        return b
    };
    Qd(ye).map(function(a) {
        return Number(a)
    });
    Qd(ze).map(function(a) {
        return Number(a)
    });
    var Dg = function(a) {
            this.g = a
        },
        Fg = function(a) {
            a.__tcfapiPostMessageReady || Eg(new Dg(a))
        },
        Eg = function(a) {
            a.j = function(b) {
                var c = typeof b.data === "string";
                try {
                    var d = c ? JSON.parse(b.data) : b.data
                } catch (f) {
                    return
                }
                var e = d.__tcfapiCall;
                e && (e.command === "ping" || e.command === "addEventListener" || e.command === "removeEventListener") && (0, a.g.__tcfapi)(e.command, e.version, function(f, g) {
                    var h = {};
                    h.__tcfapiReturn = e.command === "removeEventListener" ? {
                        success: f,
                        callId: e.callId
                    } : {
                        returnValue: f,
                        success: g,
                        callId: e.callId
                    };
                    f = c ? JSON.stringify(h) : h;
                    b.source && typeof b.source.postMessage === "function" && b.source.postMessage(f, b.origin);
                    return f
                }, e.parameter)
            };
            a.g.addEventListener("message", a.j);
            a.g.__tcfapiPostMessageReady = !0
        };
    var Gg = function(a) {
            this.g = a;
            this.j = null
        },
        Ig = function(a) {
            a.__uspapiPostMessageReady || Hg(new Gg(a))
        },
        Hg = function(a) {
            a.j = function(b) {
                var c = typeof b.data === "string";
                try {
                    var d = c ? JSON.parse(b.data) : b.data
                } catch (f) {
                    return
                }
                var e = d.__uspapiCall;
                e && e.command === "getUSPData" && a.g.__uspapi(e.command, e.version, function(f, g) {
                    var h = {};
                    h.__uspapiReturn = {
                        returnValue: f,
                        success: g,
                        callId: e.callId
                    };
                    f = c ? JSON.stringify(h) : h;
                    b.source && typeof b.source.postMessage === "function" && b.source.postMessage(f, b.origin);
                    return f
                })
            };
            a.g.addEventListener("message", a.j);
            a.g.__uspapiPostMessageReady = !0
        };
    var Jg = function(a) {
        this.i = L(a)
    };
    x(Jg, W);
    var Kg = function(a) {
        this.i = L(a)
    };
    x(Kg, W);
    var Lg = Jd(Kg);

    function Mg(a, b, c) {
        function d(m) {
            if (m.length < 10) return null;
            var q = k(m.slice(0, 4));
            q = l(q);
            m = k(m.slice(6, 10));
            m = p(m);
            return "1" + q + m + "N"
        }

        function e(m) {
            if (m.length < 10) return null;
            var q = k(m.slice(0, 6));
            q = l(q);
            m = k(m.slice(6, 10));
            m = p(m);
            return "1" + q + m + "N"
        }

        function f(m) {
            if (m.length < 12) return null;
            var q = k(m.slice(0, 6));
            q = l(q);
            m = k(m.slice(8, 12));
            m = p(m);
            return "1" + q + m + "N"
        }

        function g(m) {
            if (m.length < 18) return null;
            var q = k(m.slice(0, 8));
            q = l(q);
            m = k(m.slice(12, 18));
            m = p(m);
            return "1" + q + m + "N"
        }

        function h(m) {
            if (m.length < 10) return null;
            var q = k(m.slice(0, 6));
            q = l(q);
            m = k(m.slice(6, 10));
            m = p(m);
            return "1" + q + m + "N"
        }

        function k(m) {
            for (var q = [], v = 0, y = 0; y < m.length / 2; y++) q.push(Ce(m.slice(v, v + 2))), v += 2;
            return q
        }

        function l(m) {
            return m.every(function(q) {
                return q === 1
            }) ? "Y" : "N"
        }

        function p(m) {
            return m.some(function(q) {
                return q === 1
            }) ? "Y" : "N"
        }
        if (a.length === 0) return null;
        a = a.split(".");
        if (a.length > 2) return null;
        a = Be(a[0]);
        var r = Ce(a.slice(0, 6));
        a = a.slice(6);
        if (r !== 1) return null;
        switch (b) {
            case 8:
                return d(a);
            case 10:
            case 12:
            case 9:
                return e(a);
            case 11:
                return f(a);
            case 7:
                return g(a);
            case 13:
                return c ? h(a) : null;
            default:
                return null
        }
    };

    function Ng(a, b) {
        var c = a.document,
            d = function() {
                if (!a.frames[b])
                    if (c.body) {
                        var e = te("IFRAME", c);
                        e.style.display = "none";
                        e.style.width = "0px";
                        e.style.height = "0px";
                        e.style.border = "none";
                        e.style.zIndex = "-1000";
                        e.style.left = "-1000px";
                        e.style.top = "-1000px";
                        e.name = b;
                        c.body.appendChild(e)
                    } else a.setTimeout(d, 5)
            };
        d()
    };
    var Qg = function(a, b) {
            this.g = a;
            this.o = b;
            b = Cg(this.g.document);
            try {
                var c = b ? zg(b) : null
            } catch (e) {
                c = null
            }(b = c) ? (c = S(b, wg, 5) || null, b = T(b, vg, 7, P()), b = Og(b != null ? b : []), c = {
                Da: c,
                Ha: b
            }) : c = {
                Da: null,
                Ha: null
            };
            b = c;
            c = Pg(this, b.Ha);
            b = b.Da;
            if (b != null && tc(M(b, 2)) != null && U(b, 2).length !== 0) {
                var d = ld(b, Je, 1) !== void 0 ? S(b, Je, 1) : Ke();
                b = {
                    uspString: U(b, 2),
                    ga: Le(d)
                }
            } else b = null;
            this.l = b && c ? c.ga > b.ga ? c.uspString : b.uspString : b ? b.uspString : c ? c.uspString : null;
            this.tcString = (c = Bg(a.document)) && tc(M(c, 1)) != null ? U(c, 1) : null;
            this.j = (a = Bg(a.document)) && tc(M(a, 2)) != null ? U(a, 2) : null
        },
        Ug = function(a) {
            var b = Rg(mg);
            a !== a.top || a.__uspapi || a.frames.__uspapiLocator || (a = new Qg(a, b), Sg(a), Tg(a))
        },
        Sg = function(a) {
            !a.l || a.g.__uspapi || a.g.frames.__uspapiLocator || (a.g.__uspapiManager = "fc", Ng(a.g, "__uspapiLocator"), za("__uspapi", function(b, c, d) {
                typeof d === "function" && b === "getUSPData" && d({
                    version: 1,
                    uspString: a.l
                }, !0)
            }, a.g), Ig(a.g))
        },
        Og = function(a) {
            a = u(a, "find").call(a, function(b) {
                return b && V(b, 1) === 13
            });
            if (a == null ? 0 : tc(M(a, 2)) != null) try {
                return Lg(U(a, 2))
            } catch (b) {}
            return null
        },
        Pg = function(a, b) {
            if (b == null || tc(M(b, 1)) == null || U(b, 1).length === 0 || T(b, Jg, 2, P()).length === 0) return null;
            var c = U(b, 1);
            try {
                var d = Ee(c.split("~")[0]);
                var e = u(c, "includes").call(c, "~") ? c.split("~").slice(1) : []
            } catch (f) {
                return null
            }
            b = T(b, Jg, 2, P()).reduce(function(f, g) {
                return xd(Vg(f), 1) > xd(Vg(g), 1) ? f : g
            });
            d = Zc(d, 3, gc, P()).indexOf(vd(b, 1));
            return d === -1 || d >= e.length ? null : {
                uspString: Mg(e[d], vd(b, 1), a.o),
                ga: Le(Vg(b))
            }
        },
        Vg = function(a) {
            return ld(a, Je, 2) !== void 0 ? S(a, Je, 2) : Ke()
        },
        Tg = function(a) {
            !a.tcString || a.g.__tcfapi || a.g.frames.__tcfapiLocator || (a.g.__tcfapiManager = "fc", Ng(a.g, "__tcfapiLocator"), a.g.__tcfapiEventListeners = a.g.__tcfapiEventListeners || [], za("__tcfapi", function(b, c, d, e) {
                if (typeof d === "function")
                    if (c && (c > 2.2 || c <= 1)) d(null, !1);
                    else switch (c = a.g.__tcfapiEventListeners, b) {
                        case "ping":
                            d({
                                gdprApplies: !0,
                                cmpLoaded: !0,
                                cmpStatus: "loaded",
                                displayStatus: "disabled",
                                apiVersion: "2.2",
                                cmpVersion: 2,
                                cmpId: 300
                            });
                            break;
                        case "addEventListener":
                            b = c.push(d) - 1;
                            a.tcString ? (e = Se(a.tcString), e.addtlConsent = a.j != null ? a.j : void 0, e.cmpStatus = "loaded", e.eventStatus = "tcloaded", b != null && (e.listenerId = b), b = e) : b = null;
                            d(b, !0);
                            break;
                        case "removeEventListener":
                            e !== void 0 && c[e] ? (c[e] = null, d(!0)) : d(!1);
                            break;
                        case "getInAppTCData":
                        case "getVendorList":
                            d(null, !1);
                            break;
                        case "getTCData":
                            d(null, !1)
                    }
            }, a.g), Fg(a.g))
        };

    function Wg(a, b) {
        var c = T(a, Cf, 2, P());
        if (!c.length) return Xg(a, b);
        a = V(a, 1);
        if (a === 1) {
            var d = Wg(c[0], b);
            return d.success ? {
                success: !0,
                value: !d.value
            } : d
        }
        c = Qa(c, function(h) {
            return Wg(h, b)
        });
        switch (a) {
            case 2:
                var e;
                return (e = (d = u(c, "find").call(c, function(h) {
                    return h.success && !h.value
                })) != null ? d : u(c, "find").call(c, function(h) {
                    return !h.success
                })) != null ? e : {
                    success: !0,
                    value: !0
                };
            case 3:
                var f, g;
                return (g = (f = u(c, "find").call(c, function(h) {
                    return h.success && h.value
                })) != null ? f : u(c, "find").call(c, function(h) {
                    return !h.success
                })) != null ? g : {
                    success: !0,
                    value: !1
                };
            default:
                return {
                    success: !1, errorType: 3
                }
        }
    }

    function Xg(a, b) {
        var c = hd(a, Df);
        a: {
            switch (c) {
                case 3:
                    var d = Cd(a, 3, Df);
                    break a;
                case 4:
                    d = Cd(a, 4, Df);
                    break a;
                case 5:
                    d = Cd(a, 5, Df);
                    break a
            }
            d = void 0
        }
        if (!d) return {
            success: !1,
            errorType: 2
        };
        b = (b = b[c]) && b[d];
        if (!b) return {
            success: !1,
            L: d,
            U: c,
            errorType: 1
        };
        try {
            var e = b.apply;
            var f = Bd(a, 8);
            var g = e.call(b, null, A(f))
        } catch (h) {
            return {
                success: !1,
                L: d,
                U: c,
                errorType: 2
            }
        }
        e = V(a, 1);
        if (e === 4) return {
            success: !0,
            value: !!g
        };
        if (e === 5) return {
            success: !0,
            value: g != null
        };
        if (e === 12) a = U(a, id(a, Ef, 7));
        else a: {
            switch (c) {
                case 4:
                    a = zd(a, id(a, Ef, 6));
                    break a;
                case 5:
                    a = U(a, id(a, Ef, 7));
                    break a
            }
            a = void 0
        }
        if (a == null) return {
            success: !1,
            L: d,
            U: c,
            errorType: 3
        };
        if (e === 6) return {
            success: !0,
            value: g === a
        };
        if (e === 9) return {
            success: !0,
            value: g != null && Da(String(g), a) === 0
        };
        if (g == null) return {
            success: !1,
            L: d,
            U: c,
            errorType: 4
        };
        switch (e) {
            case 7:
                c = g < a;
                break;
            case 8:
                c = g > a;
                break;
            case 12:
                c = Lb(a) && Lb(g) && (new RegExp(a)).test(g);
                break;
            case 10:
                c = g != null && Da(String(g), a) === -1;
                break;
            case 11:
                c = g != null && Da(String(g), a) === 1;
                break;
            default:
                return {
                    success: !1, errorType: 3
                }
        }
        return {
            success: !0,
            value: c
        }
    }

    function Yg(a, b) {
        return a ? b ? Wg(a, b) : {
            success: !1,
            errorType: 1
        } : {
            success: !0,
            value: !0
        }
    };
    var jd = function(a) {
        this.i = L(a)
    };
    x(jd, W);
    var Zg = function(a) {
        this.i = L(a)
    };
    x(Zg, W);
    Zg.prototype.getValue = function() {
        return S(this, jd, 2)
    };
    var $g = function(a) {
        this.i = L(a)
    };
    x($g, W);
    var ah = Jd($g),
        bh = [1, 2, 3, 6, 7, 8];
    var ch = function(a, b, c) {
            var d = d === void 0 ? new hg(6, "unknown", b) : d;
            this.A = a;
            this.o = c;
            this.j = d;
            this.g = [];
            this.l = a > 0 && oe() < 1 / a
        },
        eh = function(a, b, c, d, e, f) {
            if (a.l) {
                var g = of(nf(new mf, b), c);
                b = wf(tf(sf(vf(uf(new rf, d), e), g), a.g.slice()), f);
                b = Jf(b);
                a.j.ba(dh(a, b));
                if (f === 1 || f === 3 || f === 4 && !a.g.some(function(h) {
                        return V(h, 1) === V(g, 1) && V(h, 2) === c
                    })) a.g.push(g), a.g.length > 100 && a.g.shift()
            }
        },
        fh = function(a, b, c, d) {
            if (a.l) {
                var e = new lf;
                b = O(e, 1, fc(b));
                c = O(b, 2, fc(c));
                d = O(c, 3, K(d));
                c = new Hf;
                d = pd(c, 8, If, d);
                a.j.ba(dh(a, d))
            }
        },
        gh = function(a, b, c, d, e) {
            if (a.l) {
                var f = new Ff;
                b = od(f, 1, b);
                c = O(b, 2, K(c));
                d = O(c, 3, fc(d));
                if (e.U === void 0) R(d, 4, Gf, K(e.errorType));
                else switch (e.U) {
                    case 3:
                        c = new Af;
                        c = R(c, 2, Bf, K(e.L));
                        e = O(c, 1, K(e.errorType));
                        pd(d, 5, Gf, e);
                        break;
                    case 4:
                        c = new Af;
                        c = R(c, 3, Bf, K(e.L));
                        e = O(c, 1, K(e.errorType));
                        pd(d, 5, Gf, e);
                        break;
                    case 5:
                        c = new Af, c = R(c, 4, Bf, K(e.L)), e = O(c, 1, K(e.errorType)), pd(d, 5, Gf, e)
                }
                e = new Hf;
                e = pd(e, 9, If, d);
                a.j.ba(dh(a, e))
            }
        },
        dh = function(a, b) {
            var c = Date.now();
            c = u(Number, "isFinite").call(Number, c) ? Math.round(c) : 0;
            b = Dd(b, 1, c);
            c = ue(window);
            b = Dd(b, 2, c);
            return Dd(b, 6, a.A)
        };
    var H = function(a) {
        var b = "ja";
        if (a.ja && a.hasOwnProperty(b)) return a.ja;
        b = new a;
        return a.ja = b
    };
    var hh = function() {
        var a = {};
        this.C = (a[3] = {}, a[4] = {}, a[5] = {}, a)
    };
    var ih = /^true$/.test("false");

    function jh(a, b) {
        switch (b) {
            case 1:
                return Cd(a, 1, bh);
            case 2:
                return Cd(a, 2, bh);
            case 3:
                return Cd(a, 3, bh);
            case 6:
                return Cd(a, 6, bh);
            case 8:
                return Cd(a, 8, bh);
            default:
                return null
        }
    }

    function kh(a, b) {
        if (!a) return null;
        switch (b) {
            case 1:
                return ud(a, 1);
            case 7:
                return U(a, 3);
            case 2:
                return zd(a, 2);
            case 3:
                return U(a, 3);
            case 6:
                return Bd(a, 4);
            case 8:
                return Bd(a, 4);
            default:
                return null
        }
    }
    var lh = Nd(function() {
        if (!ih) return {};
        try {
            var a = a === void 0 ? window : a;
            try {
                var b = a.sessionStorage.getItem("GGDFSSK")
            } catch (c) {
                b = null
            }
            if (b) return JSON.parse(b)
        } catch (c) {}
        return {}
    });

    function mh(a, b, c, d) {
        var e = d = d === void 0 ? 0 : d,
            f, g;
        H(nh).l[e] = (g = (f = H(nh).l[e]) == null ? void 0 : f.add(b)) != null ? g : (new t.Set).add(b);
        e = lh();
        if (e[b] != null) return e[b];
        b = oh(d)[b];
        if (!b) return c;
        b = ah(JSON.stringify(b));
        b = ph(b);
        a = kh(b, a);
        return a != null ? a : c
    }

    function ph(a) {
        var b = H(hh).C;
        if (b && hd(a, bh) !== 8) {
            var c = Ra(T(a, Zg, 5, P()), function(f) {
                f = Yg(S(f, Cf, 1), b);
                return f.success && f.value
            });
            if (c) {
                var d;
                return (d = c.getValue()) != null ? d : null
            }
        }
        var e;
        return (e = S(a, jd, 4)) != null ? e : null
    }
    var nh = function() {
        this.j = {};
        this.o = [];
        this.l = {};
        this.g = new t.Map
    };

    function qh(a, b, c) {
        return !!mh(1, a, b === void 0 ? !1 : b, c)
    }

    function rh(a, b, c) {
        b = b === void 0 ? 0 : b;
        a = Number(mh(2, a, b, c));
        return isNaN(a) ? b : a
    }

    function sh(a, b, c) {
        b = b === void 0 ? "" : b;
        a = mh(3, a, b, c);
        return typeof a === "string" ? a : b
    }

    function th(a, b, c) {
        b = b === void 0 ? [] : b;
        a = mh(6, a, b, c);
        return Array.isArray(a) ? a : b
    }

    function uh(a, b, c) {
        b = b === void 0 ? [] : b;
        a = mh(8, a, b, c);
        return Array.isArray(a) ? a : b
    }

    function oh(a) {
        return H(nh).j[a] || (H(nh).j[a] = {})
    }

    function vh(a, b) {
        var c = oh(b);
        pe(a, function(d, e) {
            if (c[e]) {
                d = ah(JSON.stringify(d));
                if (td(d, id(d, bh, 8)) != null) {
                    var f = ah(JSON.stringify(c[e])),
                        g = kd(d);
                    f = Bd(md(f, jd, 4), 4);
                    rd(g, f)
                }
                c[e] = Gd(d)
            } else c[e] = d
        })
    }

    function wh(a, b, c, d, e) {
        e = e === void 0 ? !1 : e;
        var f = [],
            g = [];
        b = z(b);
        for (var h = b.next(); !h.done; h = b.next()) {
            h = h.value;
            for (var k = oh(h), l = z(a), p = l.next(); !p.done; p = l.next()) {
                p = p.value;
                var r = hd(p, bh),
                    m = jh(p, r);
                if (m) {
                    var q = void 0,
                        v = void 0,
                        y = void 0;
                    var D = (q = (y = H(nh).g.get(h)) == null ? void 0 : (v = y.get(m)) == null ? void 0 : v.slice(0)) != null ? q : [];
                    a: {
                        q = m;v = r;y = new xf;
                        switch (v) {
                            case 1:
                                R(y, 1, yf, K(q));
                                break;
                            case 2:
                                R(y, 2, yf, K(q));
                                break;
                            case 3:
                                R(y, 3, yf, K(q));
                                break;
                            case 6:
                                R(y, 4, yf, K(q));
                                break;
                            case 8:
                                R(y, 6, yf, K(q));
                                break;
                            default:
                                D = void 0;
                                break a
                        }
                        ed(y, 5, D, ec);D = y
                    }
                    if (q = D) v = void 0, q = !((v = H(nh).l[h]) == null || !v.has(m));
                    q && f.push(D);
                    if (r === 8 && k[m]) D = ah(JSON.stringify(k[m])), r = kd(p), D = Bd(md(D, jd, 4), 4), rd(r, D);
                    else {
                        if (r = D) q = void 0, r = !((q = H(nh).g.get(h)) == null || !q.has(m));
                        r && g.push(D)
                    }
                    e || (r = m, D = h, q = d, v = H(nh), v.g.has(D) || v.g.set(D, new t.Map), v.g.get(D).has(r) || v.g.get(D).set(r, []), q && v.g.get(D).get(r).push(q));
                    k[m] = Gd(p)
                }
            }
        }
        if (f.length || g.length) a = d != null ? d : void 0, c.l && c.o && (d = new zf, f = qd(d, 2, f), g = qd(f, 3, g), a && Q(g, 1, fc(a), 0), f = new Hf, g = pd(f, 7, If, g), c.j.ba(dh(c, g)))
    }

    function xh(a, b) {
        b = oh(b);
        a = z(a);
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            var d = ah(JSON.stringify(c)),
                e = hd(d, bh);
            (d = jh(d, e)) && (b[d] || (b[d] = c))
        }
    }

    function yh() {
        return u(Object, "keys").call(Object, H(nh).j).map(function(a) {
            return Number(a)
        })
    }

    function zh(a) {
        (n = H(nh).o, u(n, "includes")).call(n, a) || vh(oh(4), a)
    };

    function Y(a, b, c) {
        c.hasOwnProperty(a) || Object.defineProperty(c, String(a), {
            value: b
        })
    }

    function Z(a, b, c) {
        return b[a] || c
    }

    function Ah(a) {
        Y(5, qh, a);
        Y(6, rh, a);
        Y(7, sh, a);
        Y(8, th, a);
        Y(17, uh, a);
        Y(13, xh, a);
        Y(15, zh, a)
    }

    function Bh(a) {
        Y(4, function(b) {
            H(hh).C = b
        }, a);
        Y(9, function(b, c) {
            var d = H(hh);
            d.C[3][b] == null && (d.C[3][b] = c)
        }, a);
        Y(10, function(b, c) {
            var d = H(hh);
            d.C[4][b] == null && (d.C[4][b] = c)
        }, a);
        Y(11, function(b, c) {
            var d = H(hh);
            d.C[5][b] == null && (d.C[5][b] = c)
        }, a);
        Y(14, function(b) {
            for (var c = H(hh), d = z([3, 4, 5]), e = d.next(); !e.done; e = d.next()) e = e.value, u(Object, "assign").call(Object, c.C[e], b[e])
        }, a)
    }

    function Ch(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    };
    var Dh = function() {};
    Dh.prototype.l = function() {};
    Dh.prototype.g = function() {};
    Dh.prototype.j = function() {
        return []
    };
    var Eh = function(a, b, c) {
        a.g = function(d, e) {
            Z(2, b, function() {
                return []
            })(d, c, e)
        };
        a.j = function() {
            return Z(3, b, function() {
                return []
            })(c)
        };
        a.l = function(d) {
            Z(16, b, function() {})(d, c)
        }
    };

    function Fh(a) {
        H(Dh).l(a)
    }

    function Gh() {
        return H(Dh).j()
    };
    var Hh = null;

    function Ih(a, b) {
        try {
            var c = a.split(".");
            a = B;
            for (var d = 0, e; a != null && d < c.length; d++) e = a, a = a[c[d]], typeof a === "function" && (a = e[c[d]]());
            var f = a;
            if (typeof f === b) return f
        } catch (g) {}
    }
    var Jh = {},
        Kh = {},
        Lh = {},
        Mh = {},
        Nh = (Mh[3] = (Jh[8] = function(a) {
            try {
                return wa(a) != null
            } catch (b) {}
        }, Jh[9] = function(a) {
            try {
                var b = wa(a)
            } catch (c) {
                return
            }
            if (a = typeof b === "function") b = b && b.toString && b.toString(), a = typeof b === "string" && b.indexOf("[native code]") != -1;
            return a
        }, Jh[10] = function() {
            return window === window.top
        }, Jh[6] = function(a) {
            var b = Gh();
            return Array.prototype.indexOf.call(b, Number(a), void 0) >= 0
        }, Jh[27] = function(a) {
            a = Ih(a, "boolean");
            return a !== void 0 ? a : void 0
        }, Jh[60] = function(a) {
            try {
                return !!B.document.querySelector(a)
            } catch (b) {}
        }, Jh[80] = function(a) {
            try {
                return !!B.matchMedia(a).matches
            } catch (b) {}
        }, Jh[69] = function(a) {
            var b = B.document;
            b = b === void 0 ? document : b;
            var c;
            return !((c = b.featurePolicy) == null || !(n = c.features(), u(n, "includes")).call(n, a))
        }, Jh[70] = function(a) {
            var b = B.document;
            b = b === void 0 ? document : b;
            var c;
            return !((c = b.featurePolicy) == null || !(n = c.allowedFeatures(), u(n, "includes")).call(n, a))
        }, Jh[79] = function(a) {
            var b = B.navigator;
            b = b === void 0 ? navigator : b;
            try {
                var c, d;
                var e = !!((c = b.protectedAudience) == null ? 0 : (d = c.queryFeatureSupport) == null ? 0 : d.call(c, a))
            } catch (f) {
                e = !1
            }
            return e
        }, Jh), Mh[4] = (Kh[3] = function() {
            return re()
        }, Kh[6] = function(a) {
            a = Ih(a, "number");
            return a !== void 0 ? a : void 0
        }, Kh), Mh[5] = (Lh[2] = function() {
            return window.location.href
        }, Lh[3] = function() {
            try {
                return window.top.location.hash
            } catch (a) {
                return ""
            }
        }, Lh[4] = function(a) {
            a = Ih(a, "string");
            return a !== void 0 ? a : void 0
        }, Lh[12] = function(a) {
            try {
                var b = Ih(a, "string");
                if (b !== void 0) return atob(b)
            } catch (c) {}
        }, Lh), Mh);

    function Oh() {
        var a = a === void 0 ? B : a;
        return a.ggeac || (a.ggeac = {})
    };
    var Ph = function(a) {
        this.i = L(a)
    };
    x(Ph, W);
    Ph.prototype.getId = function() {
        return vd(this, 1)
    };
    var Qh = function(a) {
        this.i = L(a)
    };
    x(Qh, W);
    var Rh = function(a) {
        return T(a, Ph, 2, P())
    };
    var Sh = function(a) {
        this.i = L(a)
    };
    x(Sh, W);
    var Th = function(a) {
        this.i = L(a)
    };
    x(Th, W);
    var Uh = function(a) {
        this.i = L(a)
    };
    x(Uh, W);

    function Vh(a) {
        var b = {};
        return Wh((b[0] = new t.Map, b[1] = new t.Map, b[2] = new t.Map, b), a)
    }

    function Wh(a, b) {
        for (var c = new t.Map, d = z(u(a[1], "entries").call(a[1])), e = d.next(); !e.done; e = d.next()) {
            var f = z(e.value);
            e = f.next().value;
            f = f.next().value;
            f = f[f.length - 1];
            c.set(e, f.Pa + f.Ma * f.Na)
        }
        b = z(b);
        for (d = b.next(); !d.done; d = b.next())
            for (d = d.value, e = T(d, Qh, 2, P()), e = z(e), f = e.next(); !f.done; f = e.next())
                if (f = f.value, Rh(f).length !== 0) {
                    var g = wd(f, 8);
                    if (V(f, 4) && !V(f, 13) && !V(f, 14)) {
                        var h = void 0;
                        g = (h = c.get(V(f, 4))) != null ? h : 0;
                        h = wd(f, 1) * Rh(f).length;
                        c.set(V(f, 4), g + h)
                    }
                    h = [];
                    for (var k = 0; k < Rh(f).length; k++) {
                        var l = {
                            Pa: g,
                            Ma: wd(f, 1),
                            Na: Rh(f).length,
                            ib: k,
                            Y: V(d, 1),
                            ca: f,
                            G: Rh(f)[k]
                        };
                        h.push(l)
                    }
                    Xh(a[2], V(f, 10), h) || Xh(a[1], V(f, 4), h) || Xh(a[0], Rh(f)[0].getId(), h)
                } return a
    }

    function Xh(a, b, c) {
        if (!b) return !1;
        a.has(b) || a.set(b, []);
        var d;
        (d = a.get(b)).push.apply(d, A(c));
        return !0
    };

    function Yh(a) {
        a = a === void 0 ? oe() : a;
        return function(b) {
            return qe(b + " + " + a) % 1E3
        }
    };
    var Zh = [12, 13, 20],
        $h = function(a, b, c, d) {
            d = d === void 0 ? {} : d;
            var e = d.ha === void 0 ? !1 : d.ha;
            d = d.mb === void 0 ? [] : d.mb;
            this.K = a;
            this.B = c;
            this.o = {};
            this.ha = e;
            a = {};
            this.g = (a[b] = [], a[4] = [], a);
            this.j = {};
            this.l = {};
            var f;
            if (Hh === null) {
                Hh = "";
                try {
                    b = "";
                    try {
                        b = B.top.location.hash
                    } catch (g) {
                        b = B.location.hash
                    }
                    b && (Hh = (f = b.match(/\bdeid=([\d,]+)/)) ? f[1] : "")
                } catch (g) {}
            }
            if (f = Hh)
                for (f = z(f.split(",") || []), b = f.next(); !b.done; b = f.next())(b = Number(b.value)) && (this.j[b] = !0);
            d = z(d);
            for (f = d.next(); !f.done; f = d.next()) this.j[f.value] = !0
        },
        ci = function(a, b, c, d) {
            var e = [],
                f;
            if (f = b !== 9) a.o[b] ? f = !0 : (a.o[b] = !0, f = !1);
            if (f) return eh(a.B, b, c, e, [], 4), e;
            f = u(Zh, "includes").call(Zh, b);
            for (var g = [], h = [], k = z([0, 1, 2]), l = k.next(); !l.done; l = k.next()) {
                l = l.value;
                for (var p = z(u(a.K[l], "entries").call(a.K[l])), r = p.next(); !r.done; r = p.next()) {
                    var m = z(r.value);
                    r = m.next().value;
                    m = m.next().value;
                    var q = r,
                        v = m;
                    r = new pf;
                    m = v.filter(function(vb) {
                        return vb.Y === b && a.j[vb.G.getId()] && ai(a, vb)
                    });
                    if (m.length)
                        for (r = z(m), m = r.next(); !m.done; m = r.next()) h.push(m.value.G);
                    else if (!a.ha) {
                        m = void 0;
                        l === 2 ? (m = d[1], R(r, 2, qf, K(q))) : m = d[0];
                        var y = void 0,
                            D = void 0;
                        m = (D = (y = m) == null ? void 0 : y(String(q))) != null ? D : l === 2 && V(v[0].ca, 11) === 1 ? void 0 : d[0](String(q));
                        if (m !== void 0) {
                            q = z(v);
                            for (v = q.next(); !v.done; v = q.next())
                                if (v = v.value, v.Y === b) {
                                    y = m - v.Pa;
                                    var ra = v;
                                    D = ra.Ma;
                                    var ub = ra.Na;
                                    ra = ra.ib;
                                    y < 0 || y >= D * ub || y % ub !== ra || !ai(a, v) || (y = V(v.ca, 13), y !== 0 && y !== void 0 && (D = a.l[String(y)], D !== void 0 && D !== v.G.getId() ? fh(a.B, a.l[String(y)], v.G.getId(), y) : a.l[String(y)] = v.G.getId()), h.push(v.G))
                                } hd(r, qf) !== 0 && (Q(r, 3, fc(m), 0), g.push(r))
                        }
                    }
                }
            }
            d = z(h);
            for (h = d.next(); !h.done; h = d.next()) h = h.value, k = h.getId(), e.push(k), bi(a, k, f ? 4 : c), wh(T(h, $g, 2, P()), f ? yh() : [c], a.B, k);
            eh(a.B, b, c, e, g, 1);
            return e
        },
        bi = function(a, b, c) {
            a.g[c] || (a.g[c] = []);
            a = a.g[c];
            u(a, "includes").call(a, b) || a.push(b)
        },
        ai = function(a, b) {
            var c = H(hh).C,
                d = Yg(S(b.ca, Cf, 3), c);
            if (!d.success) return gh(a.B, S(b.ca, Cf, 3), b.Y, b.G.getId(), d), !1;
            if (!d.value) return !1;
            c = Yg(S(b.G, Cf, 3), c);
            return c.success ? c.value ? !0 : !1 : (gh(a.B, S(b.G, Cf, 3), b.Y, b.G.getId(), c), !1)
        },
        di = function(a, b) {
            b = b.map(function(c) {
                return new Sh(c)
            }).filter(function(c) {
                return !u(Zh, "includes").call(Zh, V(c, 1))
            });
            a.K = Wh(a.K, b)
        },
        ei = function(a, b) {
            Y(1, function(c) {
                a.j[c] = !0
            }, b);
            Y(2, function(c, d, e) {
                return ci(a, c, d, e)
            }, b);
            Y(3, function(c) {
                return (a.g[c] || []).concat(a.g[4])
            }, b);
            Y(12, function(c) {
                return void di(a, c)
            }, b);
            Y(16, function(c, d) {
                return void bi(a, c, d)
            }, b)
        };
    var fi = function() {
        var a = {};
        this.g = function(b, c) {
            return a[b] != null ? a[b] : c
        };
        this.j = function(b, c) {
            return a[b] != null ? a[b] : c
        };
        this.I = function(b, c) {
            return a[b] != null ? a[b] : c
        };
        this.l = function(b, c) {
            return a[b] != null ? a[b] : c
        };
        this.A = function(b, c) {
            return a[b] != null ? c.concat(a[b]) : c
        };
        this.o = function() {}
    };

    function Rg(a) {
        return H(fi).g(a.g, a.defaultValue)
    }

    function gi(a) {
        return H(fi).j(a.g, a.defaultValue)
    };
    var hi = function() {
            this.g = function() {}
        },
        ii = function(a, b) {
            a.g = Z(14, b, function() {})
        };

    function ji(a) {
        H(hi).g(a)
    };
    var ki, li, mi, ni, oi, pi;

    function qi(a) {
        var b = a.Ya;
        var c = a.C;
        var d = a.config;
        var e = a.Ta === void 0 ? Oh() : a.Ta;
        var f = a.Ca === void 0 ? 0 : a.Ca;
        var g = a.B === void 0 ? new ch((ni = (ki = S(b, Th, 5)) == null ? void 0 : xd(ki, 2)) != null ? ni : 0, (oi = (li = S(b, Th, 5)) == null ? void 0 : xd(li, 4)) != null ? oi : 0, (pi = (mi = S(b, Th, 5)) == null ? void 0 : ud(mi, 3)) != null ? pi : !1) : a.B;
        a = a.K === void 0 ? Vh(T(b, Sh, 2, P(Fb))) : a.K;
        e.hasOwnProperty("init-done") ? (Z(12, e, function() {})(T(b, Sh, 2, P()).map(function(h) {
            return Gd(h)
        })), Z(13, e, function() {})(T(b, $g, 1, P()).map(function(h) {
            return Gd(h)
        }), f), c && Z(14, e, function() {})(c), ri(f, e)) : (ei(new $h(a, f, g, d), e), Ah(e), Bh(e), Ch(e), ri(f, e), wh(T(b, $g, 1, P(Fb)), [f], g, void 0, !0), ih = ih || !(!d || !d.la), ji(Nh), c && ji(c))
    }

    function ri(a, b) {
        var c = b = b === void 0 ? Oh() : b;
        Eh(H(Dh), c, a);
        si(b, a);
        a = b;
        ii(H(hi), a);
        H(fi).o()
    }

    function si(a, b) {
        var c = H(fi);
        c.g = function(d, e) {
            return Z(5, a, function() {
                return !1
            })(d, e, b)
        };
        c.j = function(d, e) {
            return Z(6, a, function() {
                return 0
            })(d, e, b)
        };
        c.I = function(d, e) {
            return Z(7, a, function() {
                return ""
            })(d, e, b)
        };
        c.l = function(d, e) {
            return Z(8, a, function() {
                return []
            })(d, e, b)
        };
        c.A = function(d, e) {
            return Z(17, a, function() {
                return []
            })(d, e, b)
        };
        c.o = function() {
            Z(15, a, function() {})(b)
        }
    };
    var ti = pa(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]),
        ui = function() {
            var a = a === void 0 ? "jserror" : a;
            var b = b === void 0 ? .01 : b;
            var c = c === void 0 ? he(ti) : c;
            this.j = a;
            this.o = b;
            this.l = c
        };
    ui.prototype.g = function(a, b) {
        var c = c === void 0 ? this.o : c;
        var d = d === void 0 ? this.j : d;
        Math.random() > c || (b.error && b.meta && b.id || (b = new Ue(b, {
            context: a,
            id: d
        })), B.google_js_errors = B.google_js_errors || [], B.google_js_errors.push(b), B.error_rep_loaded || (b = B.document, a = te("SCRIPT", b), $d(a, this.l), (b = b.getElementsByTagName("script")[0]) && b.parentNode && b.parentNode.insertBefore(a, b), B.error_rep_loaded = !0))
    };

    function vi() {
        try {
            return crypto.getRandomValues(new Uint32Array(1))[0]
        } catch (a) {
            return Math.floor(Math.random() * 4294967296)
        }
    };
    var wi = function() {
        var a;
        this.X = a = a === void 0 ? {
            jb: vi() + (vi() & 2097151) * 4294967296,
            Wa: u(Number, "MAX_SAFE_INTEGER")
        } : a
    };

    function xi(a, b) {
        return b > 0 && a.jb * b <= a.Wa
    };
    var yi = function(a) {
        this.i = L(a)
    };
    x(yi, W);

    function zi(a) {
        a = a === void 0 ? B : a;
        return (a = a.performance) && a.now ? a.now() : null
    };
    var Ai = function(a, b) {
            b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
            b.length < 2048 && b.push(a)
        },
        Bi = function(a, b) {
            var c = zi(b);
            c && Ai({
                label: a,
                type: 9,
                value: c
            }, b)
        },
        Ci = function(a, b, c) {
            var d = !1;
            d = d === void 0 ? !1 : d;
            var e = window,
                f = typeof queueMicrotask !== "undefined";
            return function() {
                d && f && queueMicrotask(function() {
                    e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
                    e.google_rum_task_id_counter += 1
                });
                var g = zi(),
                    h = 3;
                try {
                    var k = b.apply(this, arguments)
                } catch (l) {
                    h = 13;
                    if (!c) throw l;
                    c(a, l)
                } finally {
                    e.google_measure_js_timing && g && Ai(u(Object, "assign").call(Object, {}, {
                        label: a.toString(),
                        value: g,
                        duration: (zi() || 0) - g,
                        type: h
                    }, d && f && {
                        taskId: e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1
                    }), e)
                }
                return k
            }
        },
        Di = function(a, b) {
            return Ci(a, b, function(c, d) {
                (new ui).g(c, d)
            })
        };

    function Ei(a, b) {
        return b == null ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b)
    }

    function Fi(a, b) {
        return "&" + a + "=" + b.toFixed(3)
    }

    function Gi() {
        var a = new t.Set;
        var b = window.googletag;
        b = (b == null ? 0 : b.apiReady) ? b : void 0;
        try {
            if (!b) return a;
            for (var c = b.pubads(), d = z(c.getSlots()), e = d.next(); !e.done; e = d.next()) a.add(e.value.getSlotId().getDomId())
        } catch (f) {}
        return a
    }

    function Hi(a) {
        a = a.id;
        return a != null && (Gi().has(a) || u(a, "startsWith").call(a, "google_ads_iframe_") || u(a, "startsWith").call(a, "aswift"))
    }

    function Ii(a, b, c) {
        if (!a.sources) return !1;
        switch (Ji(a)) {
            case 2:
                var d = Ki(a);
                if (d) return c.some(function(f) {
                    return Li(d, f)
                });
                break;
            case 1:
                var e = Mi(a);
                if (e) return b.some(function(f) {
                    return Li(e, f)
                })
        }
        return !1
    }

    function Ji(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(function(b) {
            return b.previousRect && b.currentRect
        });
        if (a.length >= 1) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function Mi(a) {
        return Ni(a, function(b) {
            return b.currentRect
        })
    }

    function Ki(a) {
        return Ni(a, function(b) {
            return b.previousRect
        })
    }

    function Ni(a, b) {
        return a.sources.reduce(function(c, d) {
            d = b(d);
            return c ? d && d.width * d.height !== 0 ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function Li(a, b) {
        var c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return c <= 0 || a <= 0 ? !1 : c * a * 100 / ((b.right - b.left) * (b.bottom - b.top)) >= 50
    }
    var Oi = function() {
            var a = {
                Ea: !0
            };
            a = a === void 0 ? {
                Ea: !1
            } : a;
            this.l = this.j = this.R = this.O = this.J = 0;
            this.ya = this.va = Number.NEGATIVE_INFINITY;
            this.g = [];
            this.M = {};
            this.sa = 0;
            this.P = Infinity;
            this.qa = this.ta = this.ua = this.wa = this.Ba = this.A = this.Aa = this.fa = this.o = 0;
            this.ra = !1;
            this.ea = this.N = this.I = 0;
            this.B = null;
            this.xa = !1;
            this.pa = function() {};
            var b = document.querySelector("[data-google-query-id]");
            this.za = b ? b.getAttribute("data-google-query-id") : null;
            this.Sa = a
        },
        Pi, Qi, Ti = function() {
            var a = new Oi;
            if (Rg(pg)) {
                var b = window;
                if (!b.google_plmetrics && window.PerformanceObserver) {
                    b.google_plmetrics = !0;
                    b = ["layout-shift", "largest-contentful-paint", "first-input", "longtask"];
                    a.Sa.Ea && b.push("event");
                    b = z(b);
                    for (var c = b.next(); !c.done; c = b.next()) {
                        c = c.value;
                        var d = {
                            type: c,
                            buffered: !0
                        };
                        c === "event" && (d.durationThreshold = 40);
                        Ri(a).observe(d)
                    }
                    Si(a)
                }
            }
        },
        Ri = function(a) {
            a.B || (a.B = new PerformanceObserver(Di(640, function(b) {
                Ui(a, b)
            })));
            return a.B
        },
        Si = function(a) {
            var b = Di(641, function() {
                    var d = document;
                    (d.prerendering ? 3 : {
                        visible: 1,
                        hidden: 2,
                        prerender: 3,
                        preview: 4,
                        unloaded: 5
                    } [d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) === 2 && Vi(a)
                }),
                c = Di(641, function() {
                    return void Vi(a)
                });
            document.addEventListener("visibilitychange", b);
            document.addEventListener("pagehide", c);
            a.pa = function() {
                document.removeEventListener("visibilitychange", b);
                document.removeEventListener("pagehide", c);
                Ri(a).disconnect()
            }
        },
        Vi = function(a) {
            if (!a.xa) {
                a.xa = !0;
                Ri(a).takeRecords();
                var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
                window.LayoutShift && (b += Fi("cls", a.J), b += Fi("mls", a.O), b += Ei("nls", a.R), window.LayoutShiftAttribution && (b += Fi("cas", a.A), b += Ei("nas", a.wa), b += Fi("was", a.Ba)), b += Fi("wls", a.fa), b += Fi("tls", a.Aa));
                window.LargestContentfulPaint && (b += Ei("lcp", a.ua), b += Ei("lcps", a.ta));
                window.PerformanceEventTiming && a.ra && (b += Ei("fid", a.qa));
                window.PerformanceLongTaskTiming && (b += Ei("cbt", a.I), b += Ei("mbt", a.N), b += Ei("nlt", a.ea));
                for (var c = 0, d = z(document.getElementsByTagName("iframe")), e = d.next(); !e.done; e = d.next()) Hi(e.value) && c++;
                b += Ei("nif", c);
                c = window.google_unique_id;
                b += Ei("ifi", typeof c === "number" ? c : 0);
                c = Gh();
                b += "&eid=" + encodeURIComponent(c.join());
                b += "&top=" + (B === B.top ? 1 : 0);
                b += a.za ? "&qqid=" + encodeURIComponent(a.za) : Ei("pvsid", ue(B));
                window.googletag && (b += "&gpt=1");
                c = Math.min(a.g.length - 1, Math.floor((a.B ? a.sa : performance.interactionCount || 0) / 50));
                c >= 0 && (c = a.g[c].latency, c >= 0 && (b += Ei("inp", c)));
                window.fetch(b, {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                });
                a.pa()
            }
        },
        Wi = function(a, b, c, d) {
            if (!b.hadRecentInput) {
                a.J += Number(b.value);
                Number(b.value) > a.O && (a.O = Number(b.value));
                a.R += 1;
                if (c = Ii(b, c, d)) a.A += b.value, a.wa++;
                if (b.startTime - a.va > 5E3 || b.startTime - a.ya > 1E3) a.va = b.startTime, a.j = 0, a.l = 0;
                a.ya = b.startTime;
                a.j += b.value;
                c && (a.l += b.value);
                a.j > a.fa && (a.fa = a.j, a.Ba = a.l, a.Aa = b.startTime + b.duration)
            }
        },
        Ui = function(a, b) {
            var c = Pi !== window.scrollX || Qi !== window.scrollY ? [] : Xi,
                d = Yi();
            b = z(b.getEntries());
            for (var e = b.next(), f = {}; !e.done; f = {
                    F: void 0
                }, e = b.next()) switch (f.F = e.value, e = f.F.entryType, e) {
                case "layout-shift":
                    Wi(a, f.F, c, d);
                    break;
                case "largest-contentful-paint":
                    f = f.F;
                    a.ua = Math.floor(f.renderTime || f.loadTime);
                    a.ta = f.size;
                    break;
                case "first-input":
                    e = f.F;
                    a.qa = Number((e.processingStart - e.startTime).toFixed(3));
                    a.ra = !0;
                    a.g.some(function(g) {
                        return function(h) {
                            return u(h, "entries").some(function(k) {
                                return g.F.duration === k.duration && g.F.startTime === k.startTime
                            })
                        }
                    }(f)) || Zi(a, f.F);
                    break;
                case "longtask":
                    f = Math.max(0, f.F.duration - 50);
                    a.I += f;
                    a.N = Math.max(a.N, f);
                    a.ea += 1;
                    break;
                case "event":
                    Zi(a, f.F);
                    break;
                default:
                    ac(e)
            }
        },
        Zi = function(a, b) {
            $i(a, b);
            var c = a.g[a.g.length - 1],
                d = a.M[b.interactionId];
            if (d || a.g.length < 10 || b.duration > c.latency) d ? (u(d, "entries").push(b), d.latency = Math.max(d.latency, b.duration)) : (b = {
                id: b.interactionId,
                latency: b.duration,
                entries: [b]
            }, a.M[b.id] = b, a.g.push(b)), a.g.sort(function(e, f) {
                return f.latency - e.latency
            }), a.g.splice(10).forEach(function(e) {
                delete a.M[e.id]
            })
        },
        $i = function(a, b) {
            b.interactionId && (a.P = Math.min(a.P, b.interactionId), a.o = Math.max(a.o, b.interactionId), a.sa = a.o ? (a.o - a.P) / 7 + 1 : 0)
        },
        Yi = function() {
            var a = u(Array, "from").call(Array, document.getElementsByTagName("iframe")).filter(Hi),
                b = [].concat(A(Gi())).map(function(c) {
                    return document.getElementById(c)
                }).filter(function(c) {
                    return c !== null
                });
            Pi = window.scrollX;
            Qi = window.scrollY;
            return Xi = [].concat(A(a), A(b)).map(function(c) {
                return c.getBoundingClientRect()
            })
        },
        Xi = [];
    var aj = function(a) {
        this.i = L(a)
    };
    x(aj, W);
    aj.prototype.getVersion = function() {
        return U(this, 2)
    };
    var bj = function(a) {
        this.i = L(a)
    };
    x(bj, W);
    var cj = function(a, b) {
            return O(a, 2, sc(b))
        },
        dj = function(a, b) {
            return O(a, 3, sc(b))
        },
        ej = function(a, b) {
            return O(a, 4, sc(b))
        },
        fj = function(a, b) {
            return O(a, 5, sc(b))
        },
        gj = function(a, b) {
            return O(a, 9, sc(b))
        },
        hj = function(a, b) {
            return qd(a, 10, b)
        },
        ij = function(a, b) {
            return O(a, 11, b == null ? b : bc(b))
        },
        jj = function(a, b) {
            return O(a, 1, sc(b))
        },
        kj = function(a, b) {
            return O(a, 7, b == null ? b : bc(b))
        };
    var lj = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function mj(a) {
        var b;
        return (b = a.google_tag_data) != null ? b : a.google_tag_data = {}
    }

    function nj(a) {
        var b, c;
        return typeof((b = a.navigator) == null ? void 0 : (c = b.userAgentData) == null ? void 0 : c.getHighEntropyValues) === "function"
    }

    function oj(a) {
        if (!nj(a)) return null;
        var b = mj(a);
        if (b.uach_promise) return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(lj).then(function(c) {
            b.uach != null || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }

    function pj(a) {
        var b;
        return ij(hj(fj(cj(jj(ej(kj(gj(dj(new bj, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), ((b = a.fullVersionList) == null ? void 0 : b.map(function(c) {
            var d = new aj;
            d = O(d, 1, sc(c.brand));
            return O(d, 2, sc(c.version))
        })) || []), a.wow64 || !1)
    }

    function qj(a) {
        var b, c;
        return (c = (b = oj(a)) == null ? void 0 : b.then(function(d) {
            return pj(d)
        })) != null ? c : null
    };
    var sj = function() {
            return [].concat(A(u(rj, "values").call(rj))).reduce(function(a, b) {
                return a + b
            }, 0)
        },
        rj = new t.Map;

    function tj(a, b, c) {
        (new uj(a)).g(b, c)
    }
    var uj = function(a) {
        this.context = a
    };
    uj.prototype.g = function(a, b) {
        var c = this.context,
            d = c.oa;
        if (xi(c.V.X, 1E3)) {
            b = b.error && b.meta && b.id ? b.error : b;
            c = new Rf;
            var e = new Qf;
            try {
                var f = ue(window);
                Dd(e, 1, f)
            } catch (m) {}
            try {
                var g = Gh();
                ed(e, 2, g, ec)
            } catch (m) {}
            try {
                Ed(e, 3, window.document.URL)
            } catch (m) {}
            f = od(c, 2, e);
            g = new Pf;
            a = Q(g, 1, K(a), 0);
            try {
                var h = Lb(b == null ? void 0 : b.name) ? b.name : "Unknown error";
                Ed(a, 2, h)
            } catch (m) {}
            try {
                var k = Lb(b == null ? void 0 : b.message) ? b.message : "Caught " + b;
                Ed(a, 3, k)
            } catch (m) {}
            try {
                var l = Lb(b == null ? void 0 : b.stack) ? b.stack : Error().stack;
                l && ed(a, 4, l.split(/\n\s*/), rc)
            } catch (m) {}
            h = pd(f, 1, Sf, a);
            k = this.context;
            l = new Of;
            try {
                Ed(l, 1, k.Ka)
            } catch (m) {}
            try {
                var p = sj();
                Q(l, 2, fc(p), 0)
            } catch (m) {}
            try {
                var r = [].concat(A(u(rj, "keys").call(rj)));
                ed(l, 3, r, rc)
            } catch (m) {}
            pd(h, 4, Tf, l);
            Dd(h, 5, 1E3);
            d.nb(h)
        }
    };
    var vj = function(a, b, c) {
        this.Ra = a;
        this.V = b;
        this.Fa = c
    };

    function wj(a, b) {
        var c = {};
        b = (c[0] = Yh(b.na), c);
        H(Dh).g(a, b)
    };
    var xj = {},
        yj = (xj[253] = !1, xj[246] = [], xj[150] = "", xj[221] = !1, xj[263] = !1, xj[36] = /^true$/.test("false"), xj[264] = !1, xj[172] = null, xj[260] = void 0, xj[251] = null, xj),
        Hb = function() {
            this.g = !1
        };

    function zj(a) {
        H(Hb).g = !0;
        return yj[a]
    }

    function Aj(a, b) {
        H(Hb).g = !0;
        yj[a] = b
    };
    var Bj = /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))(\/tag\/js\/gpt(?:_[a-z]+)*\.js)/;

    function Cj(a) {
        var b = a.Ja;
        var c = a.gb;
        var d = a.Oa;
        var e = a.cb;
        var f = a.Xa;
        var g = a.Za;
        var h = b ? !Bj.test(b.src) : !0;
        a = {};
        b = {};
        var k = {};
        return k[3] = (a[3] = function() {
            return !h
        }, a[59] = function() {
            var l = ta.apply(0, arguments),
                p = u(l, "includes"),
                r = String,
                m;
            var q = q === void 0 ? window : q;
            var v;
            q = (v = (m = ce(q.location.href.match(be)[3] || null)) == null ? void 0 : m.split(".")) != null ? v : [];
            q.length < 2 ? m = null : (m = q[q.length - 1], m = m === "uk" || m === "br" || m === "nz" ? q.length < 3 ? null : qe(q.splice(q.length - 3).join(".")) : qe(q.splice(q.length - 2).join(".")));
            return p.call(l, r(m))
        }, a[74] = function() {
            return u(ta.apply(0, arguments), "includes").call(ta.apply(0, arguments), String(qe(window.location.href)))
        }, a[61] = function() {
            return e
        }, a[63] = function() {
            return e || g === ".google.ch"
        }, a[73] = function(l) {
            return u(d, "includes").call(d, Number(l))
        }, a), k[4] = (b[1] = function() {
            return f
        }, b[13] = function() {
            return c || 0
        }, b), k[5] = {}, k
    };
    var Dj = pa(["https://pagead2.googlesyndication.com/pagead/managed/dict/", "/gpt"]),
        Ej = pa(["https://securepubads.g.doubleclick.net/pagead/managed/dict/", "/gpt"]);

    function Fj(a, b, c, d) {
        try {
            if (Oa() && d.length) {
                var e = b.createElement("link"),
                    f;
                if ((f = e.relList) != null && f.supports("compression-dictionary")) {
                    var g = c ? he(Dj, d) : he(Ej, d);
                    if (g instanceof Td) e.href = Vd(g).toString(), e.rel = "compression-dictionary";
                    else {
                        if (Yd.indexOf("compression-dictionary") === -1) throw Error('TrustedResourceUrl href attribute required with rel="compression-dictionary"');
                        var h = Wd.test(g) ? g : void 0;
                        h !== void 0 && (e.href = h, e.rel = "compression-dictionary")
                    }
                    b.head.appendChild(e)
                }
            }
        } catch (k) {
            tj(a, 1296, k)
        }
    };

    function Gj(a, b) {
        var c = zj(246);
        c = Rc(c);
        c = Id(Uh, c);
        if (!T(c, $g, 1, P()).length && T(a, $g, 1, P()).length) {
            var d = T(a, $g, 1, P());
            qd(c, 1, d)
        }!T(c, Sh, 2, P()).length && T(a, Sh, 2, P()).length && (d = T(a, Sh, 2, P()), qd(c, 2, d));
        ld(c, Th, 5) === void 0 && ld(a, Th, 5) !== void 0 && (a = S(a, Th, 5), od(c, 5, a));
        Aj(246, Gd(c));
        qi({
            Ya: c,
            C: Cj(b),
            Ca: 2,
            config: {
                la: b.la
            }
        });
        b.Oa.forEach(Fh)
    };
    var Hj = function(a, b, c) {
        vj.call(this, a, b, c);
        this.Fa = c
    };
    x(Hj, vj);

    function Ij(a, b, c, d, e) {
        a = a.location.host;
        var f = ee(b.src, "domain");
        b = ee(b.src, "network-code");
        if (a || f || b) {
            var g = {};
            a && (g.ippd = a);
            f && (g.pppd = f);
            b && (g.pppnc = b);
            a = g
        } else a = void 0;
        if (a) {
            c = [c ? new xe(ve, "https://pagead2.googlesyndication.com") : new xe(ve, "https://securepubads.g.doubleclick.net"), new xe(ve, "/pagead/ppub_config")];
            f = "";
            for (b = 0; b < c.length; b++) g = c[b], f += g instanceof xe && g.constructor === xe && g.j === we ? g.g : "type_error:Const";
            c = Ud(f);
            c = ie(c, new t.Map(u(Object, "entries").call(Object, a)));
            Jj(c, d, e)
        } else e(new t.globalThis.Error("no provided or inferred data"))
    }

    function Jj(a, b, c) {
        var d = new t.globalThis.XMLHttpRequest;
        d.open("GET", a.toString(), !0);
        d.withCredentials = !1;
        d.onload = function() {
            d.status < 300 ? (Bi("13", window), b(d.status === 204 ? "" : d.responseText)) : c(new t.globalThis.Error("resp:" + d.status))
        };
        d.onerror = function() {
            return void c(new t.globalThis.Error("s:" + d.status + " rs:" + d.readyState))
        };
        d.send()
    };
    var Kj = function(a) {
            this.context = a;
            this.o = [];
            this.l = []
        },
        Oj = function(a, b, c, d, e) {
            if (Rg(rg) || me(b) === ne(b)) {
                var f = e == null ? void 0 : U(md(e, Kd, 1), 1);
                (f == null ? 0 : f.length) && u(b.location.hostname, "includes").call(b.location.hostname, f) ? (Lj(a), Mj(a, void 0, e)) : (n = ["http:", "https:"], u(n, "includes")).call(n, b.location.protocol) ? c ? (Lj(a), Ij(Rg(rg) ? me(b) : b.top, c, d, function(g) {
                    return void Mj(a, g)
                }, function(g) {
                    Mj(a, void 0, void 0, g)
                })) : Nj(a, 5) : Nj(a, 4)
            } else Nj(a, 1)
        },
        Lj = function(a) {
            zj(260);
            Aj(260, function(b) {
                a.g !== void 0 || a.j ? b(a.g, a.j) : a.o.push(b)
            })
        },
        Mj = function(a, b, c, d) {
            a.g = b != null ? b : c == null ? void 0 : Hd(c);
            a.A = c;
            !a.A && a.g && a.l.length && (a.A = Md(a.g));
            a.j = d;
            c = z(a.o);
            for (var e = c.next(); !e.done; e = c.next()) e = e.value, e(a.g, a.j);
            c = z(a.l);
            for (e = c.next(); !e.done; e = c.next()) e = e.value, e(a.A, a.j);
            a.o.length = 0;
            a.l.length = 0;
            Nj(a, d ? 6 : b ? 3 : 2)
        },
        Nj = function(a, b) {
            var c = gi(sg),
                d = a.context,
                e = d.oa.La;
            a = d.fb;
            xi(d.V.X, c) && e.Qa.Ia.lb.S({
                W: c,
                source: b,
                Ua: Pa() ? 1 : Oa() ? 2 : (Ja() ? 0 : C("Edge")) ? 3 : Ma() ? 4 : La() ? 5 : !C("iPad") && !C("iPhone") || Na() || Oa() || (Ja() ? 0 : C("Coast")) || Ma() || !C("AppleWebKit") ? Ka() ? 6 : Na() ? 7 : C("Silk") ? 8 : 0 : 9
            });
            d = gi(sg);
            if (xi(a.V.X, d) && Rg(qg)) {
                var f = a.Fa,
                    g = f.ab;
                e = f.ia;
                c = f.kb;
                f = f.na;
                var h = new Nf;
                f = Dd(h, 2, f);
                g = Ed(f, 3, g);
                f = Math;
                h = f.trunc;
                a: {
                    if (t.globalThis.performance) {
                        var k = performance.timeOrigin + performance.now();
                        if (u(Number, "isFinite").call(Number, k) && k > 0) break a
                    }
                    k = Date.now();k = u(Number, "isFinite").call(Number, k) && k > 0 ? k : 0
                }
                g = Dd(g, 1, h.call(f, k));
                e = e();
                e = ed(g, 4, e, ec);
                d = Dd(e, 5, d);
                c = Ed(d, 6, c);
                d = new Lf;
                e = new Kf;
                b = O(e, 1, K(b));
                b = Vc(b);
                b = pd(d, 10, Mf, b);
                b = Vc(b);
                b = od(c, 7, b);
                b = Vc(b);
                a.Ra.ob(b)
            }
        };
    var Pj = function(a) {
        this.i = L(a)
    };
    x(Pj, W);
    var Qj = function(a) {
            return function(b) {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("Expected jspb data to be an array, got " + ya(b) + ": " + b);
                pb(b, 34);
                return new a(b)
            }
        }(Pj),
        Rj = function(a) {
            return function() {
                return vc(a)
            }
        }(Pj);

    function Sj(a, b) {
        try {
            var c = Ib;
            if (!Lb(a)) {
                var d, e, f = (e = (d = typeof c === "function" ? c() : c) == null ? void 0 : d.concat("\n")) != null ? e : "";
                throw Error(f + String(a));
            }
            return Qj(a)
        } catch (g) {
            return tj(b, 838, g), Rj()
        }
    };

    function Tj() {
        var a;
        return (a = B.googletag) != null ? a : B.googletag = {
            cmd: []
        }
    }

    function Uj(a, b) {
        var c = Tj();
        c.hasOwnProperty(a) || (c[a] = b)
    };
    var Vj = pa(["https://pagead2.googlesyndication.com/pagead/managed/js/gpt/", "/pubads_impl.js"]),
        Wj = pa(["https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/", "/pubads_impl.js"]);

    function Xj() {
        var a = sttc,
            b = Yj();
        db(function(y) {
            tj(b, 1189, y)
        });
        var c = Tj();
        a = Sj(a, b);
        Gb();
        u(Object, "assign").call(Object, yj, c._vars_);
        c._vars_ = yj;
        a && (ud(a, 3) && Aj(36, !0), ud(a, 5) && Aj(221, !0), U(a, 6) && Aj(150, U(a, 6)), ud(a, 12) && Aj(263, !0));
        var d = md(a, Uh, 1),
            e = {
                cb: ud(a, 5),
                gb: vd(a, 2),
                Oa: Zc(a, 10, gc, P()),
                Xa: vd(a, 7),
                Za: U(a, 6),
                la: ud(a, 4)
            },
            f = S(a, Ld, 9),
            g, h = (g = c.fifWin) != null ? g : window,
            k = h.document;
        g = c.fifWin ? window : h;
        Uj("_loaded_", !0);
        Uj("cmd", []);
        var l, p = (l = Zj(k)) != null ? l : ak(k);
        bk(d, h, u(Object, "assign").call(Object, {}, {
            Ja: p
        }, e), b);
        try {
            Ti()
        } catch (y) {}
        Bi("1", h);
        l = ck(b, p);
        d = (p == null ? void 0 : p.crossOrigin) === "anonymous";
        e = gi(og);
        xi(b.V.X, e) && (h = b.oa.La.Qa.Ia, h.eb.S({
            W: e,
            ka: (p == null ? void 0 : p.crossOrigin) === "anonymous",
            ma: dk(p)
        }), h.bb.S({
            W: e,
            ka: d,
            ma: ce(l.toString().match(be)[3] || null) === "pagead2.googlesyndication.com"
        }));
        e = !1;
        if (!ek(k)) {
            h = "gpt-impl-" + Math.random();
            try {
                ae(k, fe(l, {
                    id: h,
                    nonce: Zd(window),
                    Ga: d ? "anonymous" : void 0
                }))
            } catch (y) {}
            k.getElementById(h) && (Rg(kg) ? e = !0 : c._loadStarted_ = !0)
        }
        if (Rg(kg) ? !e : !c._loadStarted_) {
            var r = te("SCRIPT");
            $d(r, l);
            r.async = !0;
            d && (r.crossOrigin = "anonymous");
            k = c.fifWin ? g.document : k;
            l = k.body;
            d = k.documentElement;
            var m, q, v = (q = (m = k.head) != null ? m : l) != null ? q : d;
            g.document.readyState !== "complete" && c.fifWin ? Od(g, "load", function() {
                return void v.appendChild(r)
            }) : v.appendChild(r);
            Rg(kg) || (c._loadStarted_ = !0)
        }
        if (g === g.top) try {
            Ug(g, md(a, yi, 13))
        } catch (y) {
            tj(b, 1209, y)
        }
        Oj(new Kj(b), g, p, dk(p), f);
        Rg(ng) && fk(g);
        Rg(lg) && Fj(b, g.document, dk(p), U(a, 14))
    }

    function fk(a) {
        var b = function(c) {
            c.data != null && c.data !== "" || c.origin.indexOf("android-app://") !== 0 || (Aj(264, !0), a.removeEventListener("message", b))
        };
        a.addEventListener("message", b)
    }

    function Yj() {
        var a = ue(window),
            b = new wi,
            c = new hg(11, "m202412090101", 1E3);
        return {
            Ka: "m202412090101",
            Eb: "202412090101",
            na: a,
            oa: c,
            V: b,
            fb: new Hj(c, b, {
                na: a,
                kb: window.document.URL,
                ab: "m202412090101",
                ia: Gh
            })
        }
    }

    function Zj(a) {
        return (a = a.currentScript) ? a : null
    }

    function ak(a) {
        var b;
        a = z((b = a.scripts) != null ? b : []);
        for (b = a.next(); !b.done; b = a.next())
            if (b = b.value, u(b.src, "includes").call(b.src, "/tag/js/gpt")) return b;
        return null
    }

    function ck(a, b) {
        a = a.Ka;
        b = dk(b) ? he(Vj, a) : he(Wj, a);
        return (a = gi(tg)) ? ie(b, new t.Map([
            ["cb", a]
        ])) : b
    }

    function bk(a, b, c, d) {
        Aj(172, c.Ja);
        Gj(a, c);
        wj(12, d);
        wj(5, d);
        (a = qj(b)) && a.then(function(e) {
            return void Aj(251, Hd(e))
        });
        se(H(fi).l(ug.g, ug.defaultValue), b.document)
    }

    function ek(a) {
        var b = Zj(a);
        return a.readyState === "complete" || a.readyState === "loaded" || !(b == null || !b.async)
    }

    function dk(a) {
        return !(a == null || !a.src) && ce(a.src.match(be)[3] || null) === "pagead2.googlesyndication.com"
    };
    try {
        Xj()
    } catch (a) {
        try {
            tj(Yj(), 420, a)
        } catch (b) {}
    };
}).call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this, "[[[[null,7,null,[null,0.1]],[null,null,null,[],[[[4,null,83],[null,null,null,[\"1 bidderRequests.bids bidder userIdAsEids.source\",\"2 bidderRequests.bids.userIdAsEids source provider\",\"3 bidderRequests.bids bidder ortb2Imp.ext.tid?\",\"5 bidderRequests.bids bidder mediaTypes.banner\",\"6 bidderRequests.bids bidder mediaTypes.native?\",\"7 bidderRequests.bids bidder mediaTypes.video\",\"8 bidderRequests.bids bidder ortb2Imp.ext.gpid?\",\"9 bidderRequests.bids bidder ortb2.site.content.data.ext.segment?\",\"10 bidderRequests.bids bidder ortb2.site.page\",\"11 bidderRequests.bids bidder ortb2.user.data.segment?\",\"12 bidderRequests.bids bidder ortb2.user.data.ext.segtax?\"]]]],657770675],[null,659575329,null,null,[[[4,null,83],[null,1]]]],[null,612427114,null,null,[[[4,null,83],[null,100]]]],[null,663827948,null,[null,-1]],[null,659579380,null,[null,-1],[[[4,null,83],[null,5000]]]],[null,659579379,null,[null,-1],[[[4,null,83],[null,60000]]]],[null,null,null,[null,null,null,[\"1 dbm\/(ad|clkk)\"]],[[[4,null,83],[null,null,null,[\"1 dbm\/(ad|clkk)\",\"2 (adsrvr|adserver)\\\\.org\/bid\/\",\"3 criteo.com\/(delivery|[a-z]+\/auction)\",\"4 yahoo.com\/bw\/[a-z]+\/imp\/\",\"5 (adnxs|adnxs-simple).com\/it\",\"6 amazon-adsystem.com\/[a-z\/]+\/impb\"]]]],655300591],[null,643045660,null,null,[[[4,null,83],[null,1]]]],[665511636,null,null,[1]],[null,612427113,null,null,[[[4,null,83],[null,100]]]],[null,699982590,null,null,[[[4,null,83],[null,100]]]],[null,578655462,null,[null,1000]],[691188989,null,null,[1]],[657763206,null,null,[1]],[null,632270607,null,[null,1000]],[null,680683506,null,[null,1000]],[null,625028672,null,[null,50]],[null,629733890,null,[null,1000]],[null,null,null,[],null,489560439],[null,null,null,[],null,505762507],[null,1921,null,[null,72]],[null,1920,null,[null,12]],[null,426169222,null,[null,1000]],[null,377289019,null,[null,10000]],[null,529,null,[null,20]],[null,573282293,null,[null,0.01]],[null,684553008,null,[null,100]],[665538976,null,null,[1]],[45624259,null,null,[]],[45627954,null,null,[1]],[45646888,null,null,[]],[45622305,null,null,[]],[null,447000223,null,[null,0.01]],[360245597,null,null,[1]],[629201869,null,null,[1]],[null,550718589,null,[null,250],[[[3,[[4,null,15,null,null,null,null,[\"22814497764\"]],[4,null,15,null,null,null,null,[\"6581\"]],[4,null,15,null,null,null,null,[\"18190176\"]],[4,null,15,null,null,null,null,[\"21881754602\"]],[4,null,15,null,null,null,null,[\"6782\"]],[4,null,15,null,null,null,null,[\"309565630\"]],[4,null,15,null,null,null,null,[\"22306534072\"]],[4,null,15,null,null,null,null,[\"7229\"]],[4,null,15,null,null,null,null,[\"28253241\"]],[4,null,15,null,null,null,null,[\"1254144\"]],[4,null,15,null,null,null,null,[\"21732118914\"]],[4,null,15,null,null,null,null,[\"5441\"]],[4,null,15,null,null,null,null,[\"162717810\"]],[4,null,15,null,null,null,null,[\"51912183\"]],[4,null,15,null,null,null,null,[\"23202586\"]],[4,null,15,null,null,null,null,[\"44520695\"]],[4,null,15,null,null,null,null,[\"1030006\"]],[4,null,15,null,null,null,null,[\"21830601346\"]],[4,null,15,null,null,null,null,[\"23081961\"]],[4,null,15,null,null,null,null,[\"21880406607\"]],[4,null,15,null,null,null,null,[\"93656639\"]],[4,null,15,null,null,null,null,[\"1020351\"]],[4,null,15,null,null,null,null,[\"5931321\"]],[4,null,15,null,null,null,null,[\"3355436\"]],[4,null,15,null,null,null,null,[\"22106840220\"]],[4,null,15,null,null,null,null,[\"22875833199\"]],[4,null,15,null,null,null,null,[\"32866417\"]],[4,null,15,null,null,null,null,[\"8095840\"]],[4,null,15,null,null,null,null,[\"71161633\"]],[4,null,15,null,null,null,null,[\"22668755367\"]],[4,null,15,null,null,null,null,[\"6177\"]],[4,null,15,null,null,null,null,[\"147246189\"]],[4,null,15,null,null,null,null,[\"22152718\"]],[4,null,15,null,null,null,null,[\"21751243814\"]],[4,null,15,null,null,null,null,[\"22013536576\"]],[4,null,15,null,null,null,null,[\"4444\"]],[4,null,15,null,null,null,null,[\"44890869\"]],[4,null,15,null,null,null,null,[\"248415179\"]],[4,null,15,null,null,null,null,[\"5293\"]],[4,null,15,null,null,null,null,[\"21675937462\"]],[4,null,15,null,null,null,null,[\"21726375739\"]],[4,null,15,null,null,null,null,[\"1002212\"]],[4,null,15,null,null,null,null,[\"6718395\"]]]],[null,500]]]],[null,575880738,null,[null,10]],[null,586681283,null,[null,100]],[null,635239304,null,[null,100]],[698925796,null,null,[1]],[null,618260805,null,[null,10]],[624264747,null,null,[1]],[624264746,null,null,[1]],[null,532520346,null,[null,120]],[null,630428304,null,[null,100]],[null,624264750,null,[null,-1]],[607106222,null,null,[1]],[null,398776877,null,[null,60000]],[null,374201269,null,[null,60000]],[698033687,null,null,[1]],[null,371364213,null,[null,60000]],[null,682056200,null,[null,100]],[null,376149757,null,[null,0.0025]],[570764855,null,null,[1]],[null,null,579921177,[null,null,\"control_1\\\\.\\\\d\"]],[null,570764854,null,[null,50]],[578725095,null,null,[1]],[671083854,null,null,[1]],[684149381,null,null,[1]],[377936516,null,null,[1]],[null,599575765,null,[null,1000]],[null,null,2,[null,null,\"1-0-40\"]],[null,626653285,null,[null,1000]],[null,626653286,null,[null,2]],[null,642407444,null,[null,10]],[686634849,null,null,[1]],[673564232,null,null,[1]],[null,506394061,null,[null,100]],[null,null,null,[null,null,null,[\"95335247\"]],null,631604025],[null,694630217,null,[null,670]],[null,null,null,[],null,489],[392065905,null,null,null,[[[3,[[4,null,68],[4,null,83]]],[1]]]],[null,360245595,null,[null,500]],[null,681088477,null,[null,100]],[676934885,null,null,[1],[[[4,null,59,null,null,null,null,[\"4214592683\",\"3186860772\",\"2930824068\",\"4127372480\",\"3985777170\",\"2998550476\",\"1946945953\",\"2901923877\",\"1931583037\",\"733037847\",\"287365726\",\"396735883\",\"2445204049\"]],[]]]],[697035653,null,null,[1]],[563462360,null,null,[1]],[555237688,null,null,[],[[[2,[[4,null,70,null,null,null,null,[\"browsing-topics\"]],[1,[[4,null,27,null,null,null,null,[\"isSecureContext\"]]]]]],[1]]]],[555237686,null,null,[]],[507033477,null,null,[1]],[null,638742197,null,[null,500]],[null,514795754,null,[null,2]],[638770075,null,null,[1]],[null,null,null,[null,null,null,[\"679602798\",\"965728666\",\"3786422334\",\"4071951799\"]],null,603422363],[590730356,null,null,null,[[[12,null,null,null,4,null,\"Chrome\\\\\/((?!1[0-1]\\\\d)(?!12[0-3])\\\\d{3,})\",[\"navigator.userAgent\"]],[1]]]],[564724551,null,null,null,[[[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)(?!11[0-6])\\\\d{3,})\",[\"navigator.userAgent\"]],[1]]]],[null,596918936,null,[null,500]],[null,607730666,null,[null,10]],[647262744,null,null,[1]],[616896918,null,null,[1]],[638632925,null,null,[1]],[647331452,null,null,[1]],[647331451,null,null,[1]],[null,null,null,[null,null,null,[\"AlK2UR5SkAlj8jjdEc9p3F3xuFYlF6LYjAML3EOqw1g26eCwWPjdmecULvBH5MVPoqKYrOfPhYVL71xAXI1IBQoAAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"Amm8\/NmvvQfhwCib6I7ZsmUxiSCfOxWxHayJwyU1r3gRIItzr7bNQid6O8ZYaE1GSQTa69WwhPC9flq\/oYkRBwsAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"A9wSqI5i0iwGdf6L1CERNdmsTPgVu44ewj8QxTBYgsv1LCPUVF7YmWOvTappqB1139jAymxUW\/RO8zmMqo4zlAAAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MzY4MTI4MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A+d7vJfYtay4OUbdtRPZA3y7bKQLsxaMEPmxgfhBGqKXNrdkCQeJlUwqa6EBbSfjwFtJWTrWIioXeMW+y8bWAgQAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MzY4MTI4MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\"]],null,1934],[485990406,null,null,[]]],[[3,[[null,[[1337,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]],[84,null,null,[1]],[188,null,null,[1]]]]]],[1000,[[31072561]],[2,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]],[12,null,null,null,4,null,\"FLEDGE_GAM_EXTERNAL_TESTER\",[\"navigator.userAgent\"]]]]],[1,[[31075124,[[null,514795754,null,[null,4]]]]],[4,null,74,null,null,null,null,[\"1585821863\",\"3976716532\"]],59],[1,[[31080344],[95328403,[[null,607730666,null,[null,1]]]],[95339697,[[null,514795754,null,[null,4]],[null,607730666,null,[null,1]],[null,641937776,null,[null,38912]]]],[95346223,[[null,514795754,null,[null,4]],[null,607730666,null,[null,1]],[null,641937776,null,[null,38912]]]],[95347233]],[2,[[4,null,9,null,null,null,null,[\"fetch\"]],[4,null,9,null,null,null,null,[\"navigator.getInterestGroupAdAuctionData\"]],[1,[[4,null,63]]],[1,[[4,null,74,null,null,null,null,[\"1585821863\",\"3976716532\"]]]],[1,[[12,null,null,null,4,null,\".* Edg\/.*\",[\"navigator.userAgent\"]]]]]],59],[10,[[31088080],[31088081]]],[50,[[31088251],[31088252]],null,122,null,null,null,null,null,null,null,null,null,4],[2,[[31089135],[31089136],[31089137,[[null,514795754,null,[null,4]]]]],[2,[[4,null,9,null,null,null,null,[\"fetch\"]],[4,null,9,null,null,null,null,[\"navigator.getInterestGroupAdAuctionData\"]],[1,[[4,null,63]]],[1,[[4,null,74,null,null,null,null,[\"1585821863\",\"3976716532\"]]]],[1,[[12,null,null,null,4,null,\".* Edg\/.*\",[\"navigator.userAgent\"]]]]]],59],[1000,[[31089153,null,[4,null,6,null,null,null,null,[\"31089200\"]]]],[4,null,59,null,null,null,null,[\"4214498631\"]],135,null,null,null,null,null,null,null,null,30],[1000,[[31089154,null,[4,null,6,null,null,null,null,[\"31089201\"]]]],[4,null,59,null,null,null,null,[\"4214498631\"]],135,null,null,null,null,null,null,null,null,30],[null,[[44798283,[[null,514795754,null,[null,4]]]]],[2,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]],[1,[[4,null,63]]]]],59],[90,[[83321072],[83321073,[[null,612427113,null,[null,100]]]]],null,136],[10,[[83321074],[83321075,[[null,612427113,null,[null,100]]]]],null,136],[null,[[95331143],[95331207],[95333497]],[2,[[4,null,9,null,null,null,null,[\"fetch\"]],[4,null,9,null,null,null,null,[\"navigator.getInterestGroupAdAuctionData\"]],[1,[[4,null,63]]],[1,[[4,null,74,null,null,null,null,[\"1585821863\",\"3976716532\"]]]],[1,[[12,null,null,null,4,null,\".* Edg\/.*\",[\"navigator.userAgent\"]]]]]],59],[10,[[95332149],[95332150,[[616896918,null,null,[]]]]],null,59],[null,[[95335986],[95345212,[[null,514795754,null,[null,4]],[null,607730666,null,[null,1]],[null,641937776,null,[null,38912]]]]],[2,[[4,null,9,null,null,null,null,[\"fetch\"]],[4,null,9,null,null,null,null,[\"navigator.getInterestGroupAdAuctionData\"]],[1,[[4,null,63]]],[1,[[4,null,74,null,null,null,null,[\"1585821863\",\"3976716532\"]]]],[1,[[12,null,null,null,4,null,\".* Edg\/.*\",[\"navigator.userAgent\"]]]]]],59],[1,[[95345325],[95345326,[[45646888,null,null,[1]]]]]],[10,[[95347484],[95347486,[[null,682021787,null,[null,5]]]],[95347487],[95347488,[[null,682021787,null,[null,2]]]],[95347489,[[null,682021787,null,[null,5]]]],[95347490,[[null,682021787,null,[null,10]]]]],null,116],[1000,[[95347588,null,[2,[[12,null,null,null,12,null,\".*318515657.*\",[\"window.gmaSdk.as.eid\"]],[1,[[12,null,null,null,12,null,\".*318515661.*\",[\"window.gmaSdk.as.eid\"]]]]]]]],null,137,null,null,null,null,null,null,null,null,31],[1000,[[95347589,null,[2,[[12,null,null,null,12,null,\".*318515661.*\",[\"window.gmaSdk.as.eid\"]],[1,[[12,null,null,null,12,null,\".*318515657.*\",[\"window.gmaSdk.as.eid\"]]]]]]]],null,137,null,null,null,null,null,null,null,null,31],[1,[[95348047,[[null,514795754,null,[null,4]],[null,641937776,null,[null,38912]]]]],[2,[[4,null,9,null,null,null,null,[\"fetch\"]],[4,null,9,null,null,null,null,[\"navigator.getInterestGroupAdAuctionData\"]],[1,[[4,null,63]]],[1,[[4,null,74,null,null,null,null,[\"1585821863\",\"3976716532\"]]]],[1,[[12,null,null,null,4,null,\".* Edg\/.*\",[\"navigator.userAgent\"]]]]]],59],[null,[[676982960],[676982998]]]]],[12,[[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,59],[40,[[95340252],[95340253,[[662101537,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]],71,null,null,null,800,null,null,null,null,null,5],[40,[[95340254],[95340255,[[662101539,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]],71,null,null,null,800,null,null,null,null,null,5]]],[13,[[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]]]],[5,[[50,[[31067420],[31067421,[[360245597,null,null,[]]]],[31077191]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[10,[[31081683],[31081684,[[608664189,null,null,[1]]]]]],[10,[[31083345],[31083346,[[null,624264750,null,[null,5]]]],[31086416,[[null,624264750,null,[null,10]]]]]],[1000,[[31084129,null,[2,[[2,[[8,null,null,1,null,-1],[7,null,null,1,null,10]]],[4,null,3]]]]],null,80,null,null,null,null,null,null,null,null,4],[1000,[[31084130,null,[2,[[2,[[8,null,null,1,null,9],[7,null,null,1,null,20]]],[4,null,3]]]]],null,80,null,null,null,null,null,null,null,null,4],[10,[[31084401],[31084402,[[624264748,null,null,[1]]]]]],[50,[[31085776],[31085777,[[45624259,null,null,[1]]]]],null,114],[50,[[31085778,[[45624259,null,null,[1]]]]],[4,null,74,null,null,null,null,[\"1361264289\",\"592241938\",\"3780447416\"]],114],[100,[[31086814],[31086815,[[null,665058368,null,[null,1]]]]]],[1,[[31087707]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[1,[[31087708]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[null,[[31087882],[31087883],[31087884]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[10,[[31088845],[31088846,[[667794963,null,null,[1]]]]]],[10,[[31089194],[31089195,[[700092636,null,null,[1]]]]]],[10,[[31089196],[31089197,[[700061889,null,null,[1]]]]]],[10,[[31089198],[31089199,[[700494715,null,null,[1]],[690790009,null,null,[1]]]]],null,134],[50,[[31089200],[31089201,[[700494715,null,null,[],[[[4,null,59,null,null,null,null,[\"4214498631\"]],[1]]]],[690790009,null,null,[],[[[4,null,59,null,null,null,null,[\"4214498631\"]],[1]]]]]]],null,134],[100,[[31089309],[31089310,[[703102329,null,null,[1]]]]]],[82,[[31089311],[31089312,[[703102335,null,null,[1]]]]]],[60,[[31089315],[31089316,[[703102334,null,null,[1]]]]]],[40,[[31089317],[31089318,[[703102333,null,null,[1]]]]]],[46,[[31089319],[31089320,[[703102330,null,null,[1]]]]]],[71,[[31089321],[31089322,[[703102332,null,null,[1]]]]]],[100,[[31089341],[31089342,[[673692256,null,null,[1]]]]]],[10,[[31089343],[31089344,[[697841467,null,null,[1]]]]]],[100,[[31089347],[31089348,[[696192462,null,null,[1]]]]]],[100,[[31089351],[31089352,[[698403966,null,null,[1]]]]]],[50,[[95344999],[95345000,[[45622305,null,null,[1]]]]],null,133],[10,[[95347779],[95347780,[[676934885,null,null,[1]]]]]],[50,[[95349034],[95349035,[[695480816,null,null,[1]],[695981775,null,null,[1]]]]]],[50,[[95349328],[95349329,[[null,625028672,null,[null,100]]]]],null,118]]],[9,[[1000,[[31083577]],[4,null,13,null,null,null,null,[\"cxbbhbxm\"]]]]],[2,[[10,[[31084489],[31084490]],null,null,null,null,32,null,null,142,1],[null,[[31084528],[31084529]],null,null,null,null,36,900,null,166,1],[1000,[[31084739,[[null,612427114,null,[null,100]]]]],[4,null,6,null,null,null,null,[\"31065645\"]]],[10,[[31084865],[31084866]],null,null,null,null,35,null,null,166,1],[1000,[[31087377,null,[2,[[4,null,8,null,null,null,null,[\"pbjs\"]],[4,null,6,null,null,null,null,[\"31065644\"]]]]]],null,131,null,null,null,null,null,null,null,null,28],[1000,[[31087378,null,[2,[[4,null,8,null,null,null,null,[\"pbjs\"]],[4,null,6,null,null,null,null,[\"31065645\"]]]]]],null,131,null,null,null,null,null,null,null,null,28],[1000,[[31087490,null,[2,[[1,[[4,null,8,null,null,null,null,[\"pbjs\"]]]],[4,null,6,null,null,null,null,[\"31065644\"]]]]]],null,131,null,null,null,null,null,null,null,null,28],[1000,[[31087491,null,[2,[[1,[[4,null,8,null,null,null,null,[\"pbjs\"]]]],[4,null,6,null,null,null,null,[\"31065645\"]]]]]],null,131,null,null,null,null,null,null,null,null,28],[1000,[[31089253,null,[2,[[4,null,8,null,null,null,null,[\"pbjs\"]],[12,null,null,null,4,null,\".*userId.*\",[\"pbjs.installedModules.join\"]]]]]]],[10,[[95341989],[95341990,[[null,null,null,[],null,655300591]]]],[4,null,83],129],[10,[[95342027],[95342028]],[4,null,83],129],[10,[[95343342],[95343343]],[4,null,83],129]]],[4,[[null,[[44714449,[[null,7,null,[null,1]]]],[676982961,[[null,7,null,[null,0.4]],[212,null,null,[1]]]],[676982996,[[null,7,null,[null,1]]]]],null,78]]]],null,null,[null,1000,1,1000]],null,null,null,1,\".google.co.uk\",805,null,null,null,null,null,[1,0,0],\"m202412050101\"]")