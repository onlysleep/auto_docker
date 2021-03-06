"object" == typeof navigator && function() {
    "use strict";
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function t(e, t) {
        return e(t = {
            exports: {}
        }, t.exports),
        t.exports
    }
    var n = function(e) {
        return e && e.Math == Math && e
    }
      , r = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof e && e) || Function("return this")()
      , i = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
      , o = !i((function() {
        return 7 != Object.defineProperty({}, 1, {
            get: function() {
                return 7
            }
        })[1]
    }
    ))
      , a = {}.propertyIsEnumerable
      , s = Object.getOwnPropertyDescriptor
      , c = {
        f: s && !a.call({
            1: 2
        }, 1) ? function(e) {
            var t = s(this, e);
            return !!t && t.enumerable
        }
        : a
    }
      , l = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
      , u = {}.toString
      , f = function(e) {
        return u.call(e).slice(8, -1)
    }
      , h = "".split
      , d = i((function() {
        return !Object("z").propertyIsEnumerable(0)
    }
    )) ? function(e) {
        return "String" == f(e) ? h.call(e, "") : Object(e)
    }
    : Object
      , p = function(e) {
        if (null == e)
            throw TypeError("Can't call method on " + e);
        return e
    }
      , g = function(e) {
        return d(p(e))
    }
      , m = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
      , v = function(e, t) {
        if (!m(e))
            return e;
        var n, r;
        if (t && "function" == typeof (n = e.toString) && !m(r = n.call(e)))
            return r;
        if ("function" == typeof (n = e.valueOf) && !m(r = n.call(e)))
            return r;
        if (!t && "function" == typeof (n = e.toString) && !m(r = n.call(e)))
            return r;
        throw TypeError("Can't convert object to primitive value")
    }
      , y = {}.hasOwnProperty
      , b = function(e, t) {
        return y.call(e, t)
    }
      , w = r.document
      , k = m(w) && m(w.createElement)
      , E = function(e) {
        return k ? w.createElement(e) : {}
    }
      , S = !o && !i((function() {
        return 7 != Object.defineProperty(E("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }
    ))
      , _ = Object.getOwnPropertyDescriptor
      , T = {
        f: o ? _ : function(e, t) {
            if (e = g(e),
            t = v(t, !0),
            S)
                try {
                    return _(e, t)
                } catch (e) {}
            if (b(e, t))
                return l(!c.f.call(e, t), e[t])
        }
    }
      , A = function(e) {
        if (!m(e))
            throw TypeError(String(e) + " is not an object");
        return e
    }
      , x = Object.defineProperty
      , O = {
        f: o ? x : function(e, t, n) {
            if (A(e),
            t = v(t, !0),
            A(n),
            S)
                try {
                    return x(e, t, n)
                } catch (e) {}
            if ("get"in n || "set"in n)
                throw TypeError("Accessors not supported");
            return "value"in n && (e[t] = n.value),
            e
        }
    }
      , C = o ? function(e, t, n) {
        return O.f(e, t, l(1, n))
    }
    : function(e, t, n) {
        return e[t] = n,
        e
    }
      , P = function(e, t) {
        try {
            C(r, e, t)
        } catch (n) {
            r[e] = t
        }
        return t
    }
      , I = r["__core-js_shared__"] || P("__core-js_shared__", {})
      , R = Function.toString;
    "function" != typeof I.inspectSource && (I.inspectSource = function(e) {
        return R.call(e)
    }
    );
    var j, L, M, N = I.inspectSource, U = r.WeakMap, F = "function" == typeof U && /native code/.test(N(U)), D = t((function(e) {
        (e.exports = function(e, t) {
            return I[e] || (I[e] = void 0 !== t ? t : {})
        }
        )("versions", []).push({
            version: "3.6.4",
            mode: "global",
            copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
        })
    }
    )), B = 0, q = Math.random(), H = function(e) {
        return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++B + q).toString(36)
    }, V = D("keys"), z = function(e) {
        return V[e] || (V[e] = H(e))
    }, W = {}, $ = r.WeakMap;
    if (F) {
        var K = new $
          , Y = K.get
          , G = K.has
          , X = K.set;
        j = function(e, t) {
            return X.call(K, e, t),
            t
        }
        ,
        L = function(e) {
            return Y.call(K, e) || {}
        }
        ,
        M = function(e) {
            return G.call(K, e)
        }
    } else {
        var J = z("state");
        W[J] = !0,
        j = function(e, t) {
            return C(e, J, t),
            t
        }
        ,
        L = function(e) {
            return b(e, J) ? e[J] : {}
        }
        ,
        M = function(e) {
            return b(e, J)
        }
    }
    var Q = {
        set: j,
        get: L,
        has: M,
        enforce: function(e) {
            return M(e) ? L(e) : j(e, {})
        },
        getterFor: function(e) {
            return function(t) {
                var n;
                if (!m(t) || (n = L(t)).type !== e)
                    throw TypeError("Incompatible receiver, " + e + " required");
                return n
            }
        }
    }
      , Z = t((function(e) {
        var t = Q.get
          , n = Q.enforce
          , i = String(String).split("String");
        (e.exports = function(e, t, o, a) {
            var s = !!a && !!a.unsafe
              , c = !!a && !!a.enumerable
              , l = !!a && !!a.noTargetGet;
            "function" == typeof o && ("string" != typeof t || b(o, "name") || C(o, "name", t),
            n(o).source = i.join("string" == typeof t ? t : "")),
            e !== r ? (s ? !l && e[t] && (c = !0) : delete e[t],
            c ? e[t] = o : C(e, t, o)) : c ? e[t] = o : P(t, o)
        }
        )(Function.prototype, "toString", (function() {
            return "function" == typeof this && t(this).source || N(this)
        }
        ))
    }
    ))
      , ee = r
      , te = function(e) {
        return "function" == typeof e ? e : void 0
    }
      , ne = function(e, t) {
        return arguments.length < 2 ? te(ee[e]) || te(r[e]) : ee[e] && ee[e][t] || r[e] && r[e][t]
    }
      , re = Math.ceil
      , ie = Math.floor
      , oe = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? ie : re)(e)
    }
      , ae = Math.min
      , se = function(e) {
        return e > 0 ? ae(oe(e), 9007199254740991) : 0
    }
      , ce = Math.max
      , le = Math.min
      , ue = function(e, t) {
        var n = oe(e);
        return n < 0 ? ce(n + t, 0) : le(n, t)
    }
      , fe = function(e) {
        return function(t, n, r) {
            var i, o = g(t), a = se(o.length), s = ue(r, a);
            if (e && n != n) {
                for (; a > s; )
                    if ((i = o[s++]) != i)
                        return !0
            } else
                for (; a > s; s++)
                    if ((e || s in o) && o[s] === n)
                        return e || s || 0;
            return !e && -1
        }
    }
      , he = {
        includes: fe(!0),
        indexOf: fe(!1)
    }
      , de = he.indexOf
      , pe = function(e, t) {
        var n, r = g(e), i = 0, o = [];
        for (n in r)
            !b(W, n) && b(r, n) && o.push(n);
        for (; t.length > i; )
            b(r, n = t[i++]) && (~de(o, n) || o.push(n));
        return o
    }
      , ge = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
      , me = ge.concat("length", "prototype")
      , ve = {
        f: Object.getOwnPropertyNames || function(e) {
            return pe(e, me)
        }
    }
      , ye = {
        f: Object.getOwnPropertySymbols
    }
      , be = ne("Reflect", "ownKeys") || function(e) {
        var t = ve.f(A(e))
          , n = ye.f;
        return n ? t.concat(n(e)) : t
    }
      , we = function(e, t) {
        for (var n = be(t), r = O.f, i = T.f, o = 0; o < n.length; o++) {
            var a = n[o];
            b(e, a) || r(e, a, i(t, a))
        }
    }
      , ke = /#|\.prototype\./
      , Ee = function(e, t) {
        var n = _e[Se(e)];
        return n == Ae || n != Te && ("function" == typeof t ? i(t) : !!t)
    }
      , Se = Ee.normalize = function(e) {
        return String(e).replace(ke, ".").toLowerCase()
    }
      , _e = Ee.data = {}
      , Te = Ee.NATIVE = "N"
      , Ae = Ee.POLYFILL = "P"
      , xe = Ee
      , Oe = T.f
      , Ce = function(e, t) {
        var n, i, o, a, s, c = e.target, l = e.global, u = e.stat;
        if (n = l ? r : u ? r[c] || P(c, {}) : (r[c] || {}).prototype)
            for (i in t) {
                if (a = t[i],
                o = e.noTargetGet ? (s = Oe(n, i)) && s.value : n[i],
                !xe(l ? i : c + (u ? "." : "#") + i, e.forced) && void 0 !== o) {
                    if (typeof a == typeof o)
                        continue;
                    we(a, o)
                }
                (e.sham || o && o.sham) && C(a, "sham", !0),
                Z(n, i, a, e)
            }
    }
      , Pe = function(e) {
        if ("function" != typeof e)
            throw TypeError(String(e) + " is not a function");
        return e
    }
      , Ie = function(e, t, n) {
        if (Pe(e),
        void 0 === t)
            return e;
        switch (n) {
        case 0:
            return function() {
                return e.call(t)
            }
            ;
        case 1:
            return function(n) {
                return e.call(t, n)
            }
            ;
        case 2:
            return function(n, r) {
                return e.call(t, n, r)
            }
            ;
        case 3:
            return function(n, r, i) {
                return e.call(t, n, r, i)
            }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
      , Re = function(e) {
        return Object(p(e))
    }
      , je = Array.isArray || function(e) {
        return "Array" == f(e)
    }
      , Le = !!Object.getOwnPropertySymbols && !i((function() {
        return !String(Symbol())
    }
    ))
      , Me = Le && !Symbol.sham && "symbol" == typeof Symbol.iterator
      , Ne = D("wks")
      , Ue = r.Symbol
      , Fe = Me ? Ue : Ue && Ue.withoutSetter || H
      , De = function(e) {
        return b(Ne, e) || (Le && b(Ue, e) ? Ne[e] = Ue[e] : Ne[e] = Fe("Symbol." + e)),
        Ne[e]
    }
      , Be = De("species")
      , qe = function(e, t) {
        var n;
        return je(e) && ("function" != typeof (n = e.constructor) || n !== Array && !je(n.prototype) ? m(n) && null === (n = n[Be]) && (n = void 0) : n = void 0),
        new (void 0 === n ? Array : n)(0 === t ? 0 : t)
    }
      , He = [].push
      , Ve = function(e) {
        var t = 1 == e
          , n = 2 == e
          , r = 3 == e
          , i = 4 == e
          , o = 6 == e
          , a = 5 == e || o;
        return function(s, c, l, u) {
            for (var f, h, p = Re(s), g = d(p), m = Ie(c, l, 3), v = se(g.length), y = 0, b = u || qe, w = t ? b(s, v) : n ? b(s, 0) : void 0; v > y; y++)
                if ((a || y in g) && (h = m(f = g[y], y, p),
                e))
                    if (t)
                        w[y] = h;
                    else if (h)
                        switch (e) {
                        case 3:
                            return !0;
                        case 5:
                            return f;
                        case 6:
                            return y;
                        case 2:
                            He.call(w, f)
                        }
                    else if (i)
                        return !1;
            return o ? -1 : r || i ? i : w
        }
    }
      , ze = {
        forEach: Ve(0),
        map: Ve(1),
        filter: Ve(2),
        some: Ve(3),
        every: Ve(4),
        find: Ve(5),
        findIndex: Ve(6)
    }
      , We = function(e, t) {
        var n = [][e];
        return !!n && i((function() {
            n.call(null, t || function() {
                throw 1
            }
            , 1)
        }
        ))
    }
      , $e = Object.defineProperty
      , Ke = {}
      , Ye = function(e) {
        throw e
    }
      , Ge = function(e, t) {
        if (b(Ke, e))
            return Ke[e];
        t || (t = {});
        var n = [][e]
          , r = !!b(t, "ACCESSORS") && t.ACCESSORS
          , a = b(t, 0) ? t[0] : Ye
          , s = b(t, 1) ? t[1] : void 0;
        return Ke[e] = !!n && !i((function() {
            if (r && !o)
                return !0;
            var e = {
                length: -1
            };
            r ? $e(e, 1, {
                enumerable: !0,
                get: Ye
            }) : e[1] = 1,
            n.call(e, a, s)
        }
        ))
    }
      , Xe = ze.forEach
      , Je = We("forEach")
      , Qe = Ge("forEach")
      , Ze = Je && Qe ? [].forEach : function(e) {
        return Xe(this, e, arguments.length > 1 ? arguments[1] : void 0)
    }
    ;
    Ce({
        target: "Array",
        proto: !0,
        forced: [].forEach != Ze
    }, {
        forEach: Ze
    });
    var et = function(e, t, n, r) {
        try {
            return r ? t(A(n)[0], n[1]) : t(n)
        } catch (t) {
            var i = e.return;
            throw void 0 !== i && A(i.call(e)),
            t
        }
    }
      , tt = {}
      , nt = De("iterator")
      , rt = Array.prototype
      , it = function(e) {
        return void 0 !== e && (tt.Array === e || rt[nt] === e)
    }
      , ot = function(e, t, n) {
        var r = v(t);
        r in e ? O.f(e, r, l(0, n)) : e[r] = n
    }
      , at = {};
    at[De("toStringTag")] = "z";
    var st = "[object z]" === String(at)
      , ct = De("toStringTag")
      , lt = "Arguments" == f(function() {
        return arguments
    }())
      , ut = st ? f : function(e) {
        var t, n, r;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function(e, t) {
            try {
                return e[t]
            } catch (e) {}
        }(t = Object(e), ct)) ? n : lt ? f(t) : "Object" == (r = f(t)) && "function" == typeof t.callee ? "Arguments" : r
    }
      , ft = De("iterator")
      , ht = function(e) {
        if (null != e)
            return e[ft] || e["@@iterator"] || tt[ut(e)]
    }
      , dt = function(e) {
        var t, n, r, i, o, a, s = Re(e), c = "function" == typeof this ? this : Array, l = arguments.length, u = l > 1 ? arguments[1] : void 0, f = void 0 !== u, h = ht(s), d = 0;
        if (f && (u = Ie(u, l > 2 ? arguments[2] : void 0, 2)),
        null == h || c == Array && it(h))
            for (n = new c(t = se(s.length)); t > d; d++)
                a = f ? u(s[d], d) : s[d],
                ot(n, d, a);
        else
            for (o = (i = h.call(s)).next,
            n = new c; !(r = o.call(i)).done; d++)
                a = f ? et(i, u, [r.value, d], !0) : r.value,
                ot(n, d, a);
        return n.length = d,
        n
    }
      , pt = De("iterator")
      , gt = !1;
    try {
        var mt = 0
          , vt = {
            next: function() {
                return {
                    done: !!mt++
                }
            },
            return: function() {
                gt = !0
            }
        };
        vt[pt] = function() {
            return this
        }
        ,
        Array.from(vt, (function() {
            throw 2
        }
        ))
    } catch (e) {}
    var yt = function(e, t) {
        if (!t && !gt)
            return !1;
        var n = !1;
        try {
            var r = {};
            r[pt] = function() {
                return {
                    next: function() {
                        return {
                            done: n = !0
                        }
                    }
                }
            }
            ,
            e(r)
        } catch (e) {}
        return n
    }
      , bt = !yt((function(e) {
        Array.from(e)
    }
    ));
    Ce({
        target: "Array",
        stat: !0,
        forced: bt
    }, {
        from: dt
    });
    var wt, kt = Object.keys || function(e) {
        return pe(e, ge)
    }
    , Et = o ? Object.defineProperties : function(e, t) {
        A(e);
        for (var n, r = kt(t), i = r.length, o = 0; i > o; )
            O.f(e, n = r[o++], t[n]);
        return e
    }
    , St = ne("document", "documentElement"), _t = z("IE_PROTO"), Tt = function() {}, At = function(e) {
        return "<script>" + e + "<\/script>"
    }, xt = function() {
        try {
            wt = document.domain && new ActiveXObject("htmlfile")
        } catch (e) {}
        var e, t;
        xt = wt ? function(e) {
            e.write(At("")),
            e.close();
            var t = e.parentWindow.Object;
            return e = null,
            t
        }(wt) : ((t = E("iframe")).style.display = "none",
        St.appendChild(t),
        t.src = String("javascript:"),
        (e = t.contentWindow.document).open(),
        e.write(At("document.F=Object")),
        e.close(),
        e.F);
        for (var n = ge.length; n--; )
            delete xt.prototype[ge[n]];
        return xt()
    };
    W[_t] = !0;
    var Ot = Object.create || function(e, t) {
        var n;
        return null !== e ? (Tt.prototype = A(e),
        n = new Tt,
        Tt.prototype = null,
        n[_t] = e) : n = xt(),
        void 0 === t ? n : Et(n, t)
    }
      , Ct = De("unscopables")
      , Pt = Array.prototype;
    null == Pt[Ct] && O.f(Pt, Ct, {
        configurable: !0,
        value: Ot(null)
    });
    var It = function(e) {
        Pt[Ct][e] = !0
    }
      , Rt = he.includes
      , jt = Ge("indexOf", {
        ACCESSORS: !0,
        1: 0
    });
    Ce({
        target: "Array",
        proto: !0,
        forced: !jt
    }, {
        includes: function(e) {
            return Rt(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }),
    It("includes");
    var Lt = i((function() {
        kt(1)
    }
    ));
    Ce({
        target: "Object",
        stat: !0,
        forced: Lt
    }, {
        keys: function(e) {
            return kt(Re(e))
        }
    });
    var Mt = De("match")
      , Nt = function(e) {
        var t;
        return m(e) && (void 0 !== (t = e[Mt]) ? !!t : "RegExp" == f(e))
    }
      , Ut = function(e) {
        if (Nt(e))
            throw TypeError("The method doesn't accept regular expressions");
        return e
    }
      , Ft = De("match");
    Ce({
        target: "String",
        proto: !0,
        forced: !function(e) {
            var t = /./;
            try {
                "/./"[e](t)
            } catch (n) {
                try {
                    return t[Ft] = !1,
                    "/./"[e](t)
                } catch (e) {}
            }
            return !1
        }("includes")
    }, {
        includes: function(e) {
            return !!~String(p(this)).indexOf(Ut(e), arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Dt, Bt, qt, Ht = function(e) {
        return function(t, n) {
            var r, i, o = String(p(t)), a = oe(n), s = o.length;
            return a < 0 || a >= s ? e ? "" : void 0 : (r = o.charCodeAt(a)) < 55296 || r > 56319 || a + 1 === s || (i = o.charCodeAt(a + 1)) < 56320 || i > 57343 ? e ? o.charAt(a) : r : e ? o.slice(a, a + 2) : i - 56320 + (r - 55296 << 10) + 65536
        }
    }, Vt = {
        codeAt: Ht(!1),
        charAt: Ht(!0)
    }, zt = !i((function() {
        function e() {}
        return e.prototype.constructor = null,
        Object.getPrototypeOf(new e) !== e.prototype
    }
    )), Wt = z("IE_PROTO"), $t = Object.prototype, Kt = zt ? Object.getPrototypeOf : function(e) {
        return e = Re(e),
        b(e, Wt) ? e[Wt] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? $t : null
    }
    , Yt = De("iterator"), Gt = !1;
    [].keys && ("next"in (qt = [].keys()) ? (Bt = Kt(Kt(qt))) !== Object.prototype && (Dt = Bt) : Gt = !0),
    null == Dt && (Dt = {}),
    b(Dt, Yt) || C(Dt, Yt, (function() {
        return this
    }
    ));
    var Xt = {
        IteratorPrototype: Dt,
        BUGGY_SAFARI_ITERATORS: Gt
    }
      , Jt = O.f
      , Qt = De("toStringTag")
      , Zt = function(e, t, n) {
        e && !b(e = n ? e : e.prototype, Qt) && Jt(e, Qt, {
            configurable: !0,
            value: t
        })
    }
      , en = Xt.IteratorPrototype
      , tn = function() {
        return this
    }
      , nn = function(e, t, n) {
        var r = t + " Iterator";
        return e.prototype = Ot(en, {
            next: l(1, n)
        }),
        Zt(e, r, !1),
        tt[r] = tn,
        e
    }
      , rn = Object.setPrototypeOf || ("__proto__"in {} ? function() {
        var e, t = !1, n = {};
        try {
            (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []),
            t = n instanceof Array
        } catch (e) {}
        return function(n, r) {
            return A(n),
            function(e) {
                if (!m(e) && null !== e)
                    throw TypeError("Can't set " + String(e) + " as a prototype")
            }(r),
            t ? e.call(n, r) : n.__proto__ = r,
            n
        }
    }() : void 0)
      , on = Xt.IteratorPrototype
      , an = Xt.BUGGY_SAFARI_ITERATORS
      , sn = De("iterator")
      , cn = function() {
        return this
    }
      , ln = function(e, t, n, r, i, o, a) {
        nn(n, t, r);
        var s, c, l, u = function(e) {
            if (e === i && g)
                return g;
            if (!an && e in d)
                return d[e];
            switch (e) {
            case "keys":
            case "values":
            case "entries":
                return function() {
                    return new n(this,e)
                }
            }
            return function() {
                return new n(this)
            }
        }, f = t + " Iterator", h = !1, d = e.prototype, p = d[sn] || d["@@iterator"] || i && d[i], g = !an && p || u(i), m = "Array" == t && d.entries || p;
        if (m && (s = Kt(m.call(new e)),
        on !== Object.prototype && s.next && (Kt(s) !== on && (rn ? rn(s, on) : "function" != typeof s[sn] && C(s, sn, cn)),
        Zt(s, f, !0))),
        "values" == i && p && "values" !== p.name && (h = !0,
        g = function() {
            return p.call(this)
        }
        ),
        d[sn] !== g && C(d, sn, g),
        tt[t] = g,
        i)
            if (c = {
                values: u("values"),
                keys: o ? g : u("keys"),
                entries: u("entries")
            },
            a)
                for (l in c)
                    !an && !h && l in d || Z(d, l, c[l]);
            else
                Ce({
                    target: t,
                    proto: !0,
                    forced: an || h
                }, c);
        return c
    }
      , un = Vt.charAt
      , fn = Q.set
      , hn = Q.getterFor("String Iterator");
    ln(String, "String", (function(e) {
        fn(this, {
            type: "String Iterator",
            string: String(e),
            index: 0
        })
    }
    ), (function() {
        var e, t = hn(this), n = t.string, r = t.index;
        return r >= n.length ? {
            value: void 0,
            done: !0
        } : (e = un(n, r),
        t.index += e.length,
        {
            value: e,
            done: !1
        })
    }
    ));
    var dn = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    };
    for (var pn in dn) {
        var gn = r[pn]
          , mn = gn && gn.prototype;
        if (mn && mn.forEach !== Ze)
            try {
                C(mn, "forEach", Ze)
            } catch (e) {
                mn.forEach = Ze
            }
    }
    var vn = document.getElementById("container");
    document.addEventListener("focusout", (function(e) {
        e.target.classList && !vn.contains(e.target) && e.target.classList.remove("tab-focus")
    }
    )),
    document.addEventListener("keydown", (function(e) {
        9 === e.keyCode && setTimeout((function() {
            var e = document.activeElement;
            e && e.classList && !vn.contains(e) && e.classList.add("tab-focus")
        }
        ), 10)
    }
    )),
    function() {
        if ("undefined" != typeof window)
            try {
                var e = new window.CustomEvent("test",{
                    cancelable: !0
                });
                if (e.preventDefault(),
                !0 !== e.defaultPrevented)
                    throw new Error("Could not prevent default")
            } catch (e) {
                var t = function(e, t) {
                    var n, r;
                    return (t = t || {}).bubbles = !!t.bubbles,
                    t.cancelable = !!t.cancelable,
                    (n = document.createEvent("CustomEvent")).initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
                    r = n.preventDefault,
                    n.preventDefault = function() {
                        r.call(this);
                        try {
                            Object.defineProperty(this, "defaultPrevented", {
                                get: function() {
                                    return !0
                                }
                            })
                        } catch (e) {
                            this.defaultPrevented = !0
                        }
                    }
                    ,
                    n
                };
                t.prototype = window.Event.prototype,
                window.CustomEvent = t
            }
    }();
    var yn = ve.f
      , bn = {}.toString
      , wn = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : []
      , kn = {
        f: function(e) {
            return wn && "[object Window]" == bn.call(e) ? function(e) {
                try {
                    return yn(e)
                } catch (e) {
                    return wn.slice()
                }
            }(e) : yn(g(e))
        }
    }
      , En = {
        f: De
    }
      , Sn = O.f
      , _n = function(e) {
        var t = ee.Symbol || (ee.Symbol = {});
        b(t, e) || Sn(t, e, {
            value: En.f(e)
        })
    }
      , Tn = ze.forEach
      , An = z("hidden")
      , xn = De("toPrimitive")
      , On = Q.set
      , Cn = Q.getterFor("Symbol")
      , Pn = Object.prototype
      , In = r.Symbol
      , Rn = ne("JSON", "stringify")
      , jn = T.f
      , Ln = O.f
      , Mn = kn.f
      , Nn = c.f
      , Un = D("symbols")
      , Fn = D("op-symbols")
      , Dn = D("string-to-symbol-registry")
      , Bn = D("symbol-to-string-registry")
      , qn = D("wks")
      , Hn = r.QObject
      , Vn = !Hn || !Hn.prototype || !Hn.prototype.findChild
      , zn = o && i((function() {
        return 7 != Ot(Ln({}, "a", {
            get: function() {
                return Ln(this, "a", {
                    value: 7
                }).a
            }
        })).a
    }
    )) ? function(e, t, n) {
        var r = jn(Pn, t);
        r && delete Pn[t],
        Ln(e, t, n),
        r && e !== Pn && Ln(Pn, t, r)
    }
    : Ln
      , Wn = function(e, t) {
        var n = Un[e] = Ot(In.prototype);
        return On(n, {
            type: "Symbol",
            tag: e,
            description: t
        }),
        o || (n.description = t),
        n
    }
      , $n = Me ? function(e) {
        return "symbol" == typeof e
    }
    : function(e) {
        return Object(e)instanceof In
    }
      , Kn = function(e, t, n) {
        e === Pn && Kn(Fn, t, n),
        A(e);
        var r = v(t, !0);
        return A(n),
        b(Un, r) ? (n.enumerable ? (b(e, An) && e[An][r] && (e[An][r] = !1),
        n = Ot(n, {
            enumerable: l(0, !1)
        })) : (b(e, An) || Ln(e, An, l(1, {})),
        e[An][r] = !0),
        zn(e, r, n)) : Ln(e, r, n)
    }
      , Yn = function(e, t) {
        A(e);
        var n = g(t)
          , r = kt(n).concat(Qn(n));
        return Tn(r, (function(t) {
            o && !Gn.call(n, t) || Kn(e, t, n[t])
        }
        )),
        e
    }
      , Gn = function(e) {
        var t = v(e, !0)
          , n = Nn.call(this, t);
        return !(this === Pn && b(Un, t) && !b(Fn, t)) && (!(n || !b(this, t) || !b(Un, t) || b(this, An) && this[An][t]) || n)
    }
      , Xn = function(e, t) {
        var n = g(e)
          , r = v(t, !0);
        if (n !== Pn || !b(Un, r) || b(Fn, r)) {
            var i = jn(n, r);
            return !i || !b(Un, r) || b(n, An) && n[An][r] || (i.enumerable = !0),
            i
        }
    }
      , Jn = function(e) {
        var t = Mn(g(e))
          , n = [];
        return Tn(t, (function(e) {
            b(Un, e) || b(W, e) || n.push(e)
        }
        )),
        n
    }
      , Qn = function(e) {
        var t = e === Pn
          , n = Mn(t ? Fn : g(e))
          , r = [];
        return Tn(n, (function(e) {
            !b(Un, e) || t && !b(Pn, e) || r.push(Un[e])
        }
        )),
        r
    };
    if (Le || (Z((In = function() {
        if (this instanceof In)
            throw TypeError("Symbol is not a constructor");
        var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0
          , t = H(e)
          , n = function(e) {
            this === Pn && n.call(Fn, e),
            b(this, An) && b(this[An], t) && (this[An][t] = !1),
            zn(this, t, l(1, e))
        };
        return o && Vn && zn(Pn, t, {
            configurable: !0,
            set: n
        }),
        Wn(t, e)
    }
    ).prototype, "toString", (function() {
        return Cn(this).tag
    }
    )),
    Z(In, "withoutSetter", (function(e) {
        return Wn(H(e), e)
    }
    )),
    c.f = Gn,
    O.f = Kn,
    T.f = Xn,
    ve.f = kn.f = Jn,
    ye.f = Qn,
    En.f = function(e) {
        return Wn(De(e), e)
    }
    ,
    o && (Ln(In.prototype, "description", {
        configurable: !0,
        get: function() {
            return Cn(this).description
        }
    }),
    Z(Pn, "propertyIsEnumerable", Gn, {
        unsafe: !0
    }))),
    Ce({
        global: !0,
        wrap: !0,
        forced: !Le,
        sham: !Le
    }, {
        Symbol: In
    }),
    Tn(kt(qn), (function(e) {
        _n(e)
    }
    )),
    Ce({
        target: "Symbol",
        stat: !0,
        forced: !Le
    }, {
        for: function(e) {
            var t = String(e);
            if (b(Dn, t))
                return Dn[t];
            var n = In(t);
            return Dn[t] = n,
            Bn[n] = t,
            n
        },
        keyFor: function(e) {
            if (!$n(e))
                throw TypeError(e + " is not a symbol");
            if (b(Bn, e))
                return Bn[e]
        },
        useSetter: function() {
            Vn = !0
        },
        useSimple: function() {
            Vn = !1
        }
    }),
    Ce({
        target: "Object",
        stat: !0,
        forced: !Le,
        sham: !o
    }, {
        create: function(e, t) {
            return void 0 === t ? Ot(e) : Yn(Ot(e), t)
        },
        defineProperty: Kn,
        defineProperties: Yn,
        getOwnPropertyDescriptor: Xn
    }),
    Ce({
        target: "Object",
        stat: !0,
        forced: !Le
    }, {
        getOwnPropertyNames: Jn,
        getOwnPropertySymbols: Qn
    }),
    Ce({
        target: "Object",
        stat: !0,
        forced: i((function() {
            ye.f(1)
        }
        ))
    }, {
        getOwnPropertySymbols: function(e) {
            return ye.f(Re(e))
        }
    }),
    Rn) {
        var Zn = !Le || i((function() {
            var e = In();
            return "[null]" != Rn([e]) || "{}" != Rn({
                a: e
            }) || "{}" != Rn(Object(e))
        }
        ));
        Ce({
            target: "JSON",
            stat: !0,
            forced: Zn
        }, {
            stringify: function(e, t, n) {
                for (var r, i = [e], o = 1; arguments.length > o; )
                    i.push(arguments[o++]);
                if (r = t,
                (m(t) || void 0 !== e) && !$n(e))
                    return je(t) || (t = function(e, t) {
                        if ("function" == typeof r && (t = r.call(this, e, t)),
                        !$n(t))
                            return t
                    }
                    ),
                    i[1] = t,
                    Rn.apply(null, i)
            }
        })
    }
    In.prototype[xn] || C(In.prototype, xn, In.prototype.valueOf),
    Zt(In, "Symbol"),
    W[An] = !0;
    var er = O.f
      , tr = r.Symbol;
    if (o && "function" == typeof tr && (!("description"in tr.prototype) || void 0 !== tr().description)) {
        var nr = {}
          , rr = function() {
            var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0])
              , t = this instanceof rr ? new tr(e) : void 0 === e ? tr() : tr(e);
            return "" === e && (nr[t] = !0),
            t
        };
        we(rr, tr);
        var ir = rr.prototype = tr.prototype;
        ir.constructor = rr;
        var or = ir.toString
          , ar = "Symbol(test)" == String(tr("test"))
          , sr = /^Symbol\((.*)\)[^)]+$/;
        er(ir, "description", {
            configurable: !0,
            get: function() {
                var e = m(this) ? this.valueOf() : this
                  , t = or.call(e);
                if (b(nr, e))
                    return "";
                var n = ar ? t.slice(7, -1) : t.replace(sr, "$1");
                return "" === n ? void 0 : n
            }
        }),
        Ce({
            global: !0,
            forced: !0
        }, {
            Symbol: rr
        })
    }
    _n("iterator");
    var cr = he.indexOf
      , lr = [].indexOf
      , ur = !!lr && 1 / [1].indexOf(1, -0) < 0
      , fr = We("indexOf")
      , hr = Ge("indexOf", {
        ACCESSORS: !0,
        1: 0
    });
    Ce({
        target: "Array",
        proto: !0,
        forced: ur || !fr || !hr
    }, {
        indexOf: function(e) {
            return ur ? lr.apply(this, arguments) || 0 : cr(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var dr = Q.set
      , pr = Q.getterFor("Array Iterator")
      , gr = ln(Array, "Array", (function(e, t) {
        dr(this, {
            type: "Array Iterator",
            target: g(e),
            index: 0,
            kind: t
        })
    }
    ), (function() {
        var e = pr(this)
          , t = e.target
          , n = e.kind
          , r = e.index++;
        return !t || r >= t.length ? (e.target = void 0,
        {
            value: void 0,
            done: !0
        }) : "keys" == n ? {
            value: r,
            done: !1
        } : "values" == n ? {
            value: t[r],
            done: !1
        } : {
            value: [r, t[r]],
            done: !1
        }
    }
    ), "values");
    tt.Arguments = tt.Array,
    It("keys"),
    It("values"),
    It("entries");
    var mr = [].join
      , vr = d != Object
      , yr = We("join", ",");
    Ce({
        target: "Array",
        proto: !0,
        forced: vr || !yr
    }, {
        join: function(e) {
            return mr.call(g(this), void 0 === e ? "," : e)
        }
    });
    var br, wr, kr = ne("navigator", "userAgent") || "", Er = r.process, Sr = Er && Er.versions, _r = Sr && Sr.v8;
    _r ? wr = (br = _r.split("."))[0] + br[1] : kr && (!(br = kr.match(/Edge\/(\d+)/)) || br[1] >= 74) && (br = kr.match(/Chrome\/(\d+)/)) && (wr = br[1]);
    var Tr = wr && +wr
      , Ar = De("species")
      , xr = function(e) {
        return Tr >= 51 || !i((function() {
            var t = [];
            return (t.constructor = {})[Ar] = function() {
                return {
                    foo: 1
                }
            }
            ,
            1 !== t[e](Boolean).foo
        }
        ))
    }
      , Or = xr("slice")
      , Cr = Ge("slice", {
        ACCESSORS: !0,
        0: 0,
        1: 2
    })
      , Pr = De("species")
      , Ir = [].slice
      , Rr = Math.max;
    Ce({
        target: "Array",
        proto: !0,
        forced: !Or || !Cr
    }, {
        slice: function(e, t) {
            var n, r, i, o = g(this), a = se(o.length), s = ue(e, a), c = ue(void 0 === t ? a : t, a);
            if (je(o) && ("function" != typeof (n = o.constructor) || n !== Array && !je(n.prototype) ? m(n) && null === (n = n[Pr]) && (n = void 0) : n = void 0,
            n === Array || void 0 === n))
                return Ir.call(o, s, c);
            for (r = new (void 0 === n ? Array : n)(Rr(c - s, 0)),
            i = 0; s < c; s++,
            i++)
                s in o && ot(r, i, o[s]);
            return r.length = i,
            r
        }
    });
    var jr = st ? {}.toString : function() {
        return "[object " + ut(this) + "]"
    }
    ;
    st || Z(Object.prototype, "toString", jr, {
        unsafe: !0
    });
    var Lr = function() {
        var e = A(this)
          , t = "";
        return e.global && (t += "g"),
        e.ignoreCase && (t += "i"),
        e.multiline && (t += "m"),
        e.dotAll && (t += "s"),
        e.unicode && (t += "u"),
        e.sticky && (t += "y"),
        t
    };
    function Mr(e, t) {
        return RegExp(e, t)
    }
    var Nr = {
        UNSUPPORTED_Y: i((function() {
            var e = Mr("a", "y");
            return e.lastIndex = 2,
            null != e.exec("abcd")
        }
        )),
        BROKEN_CARET: i((function() {
            var e = Mr("^r", "gy");
            return e.lastIndex = 2,
            null != e.exec("str")
        }
        ))
    }
      , Ur = RegExp.prototype.exec
      , Fr = String.prototype.replace
      , Dr = Ur
      , Br = function() {
        var e = /a/
          , t = /b*/g;
        return Ur.call(e, "a"),
        Ur.call(t, "a"),
        0 !== e.lastIndex || 0 !== t.lastIndex
    }()
      , qr = Nr.UNSUPPORTED_Y || Nr.BROKEN_CARET
      , Hr = void 0 !== /()??/.exec("")[1];
    (Br || Hr || qr) && (Dr = function(e) {
        var t, n, r, i, o = this, a = qr && o.sticky, s = Lr.call(o), c = o.source, l = 0, u = e;
        return a && (-1 === (s = s.replace("y", "")).indexOf("g") && (s += "g"),
        u = String(e).slice(o.lastIndex),
        o.lastIndex > 0 && (!o.multiline || o.multiline && "\n" !== e[o.lastIndex - 1]) && (c = "(?: " + c + ")",
        u = " " + u,
        l++),
        n = new RegExp("^(?:" + c + ")",s)),
        Hr && (n = new RegExp("^" + c + "$(?!\\s)",s)),
        Br && (t = o.lastIndex),
        r = Ur.call(a ? n : o, u),
        a ? r ? (r.input = r.input.slice(l),
        r[0] = r[0].slice(l),
        r.index = o.lastIndex,
        o.lastIndex += r[0].length) : o.lastIndex = 0 : Br && r && (o.lastIndex = o.global ? r.index + r[0].length : t),
        Hr && r && r.length > 1 && Fr.call(r[0], n, (function() {
            for (i = 1; i < arguments.length - 2; i++)
                void 0 === arguments[i] && (r[i] = void 0)
        }
        )),
        r
    }
    );
    var Vr = Dr;
    Ce({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== Vr
    }, {
        exec: Vr
    });
    var zr = RegExp.prototype
      , Wr = zr.toString
      , $r = i((function() {
        return "/a/b" != Wr.call({
            source: "a",
            flags: "b"
        })
    }
    ))
      , Kr = "toString" != Wr.name;
    ($r || Kr) && Z(RegExp.prototype, "toString", (function() {
        var e = A(this)
          , t = String(e.source)
          , n = e.flags;
        return "/" + t + "/" + String(void 0 === n && e instanceof RegExp && !("flags"in zr) ? Lr.call(e) : n)
    }
    ), {
        unsafe: !0
    });
    var Yr = De("species")
      , Gr = !i((function() {
        var e = /./;
        return e.exec = function() {
            var e = [];
            return e.groups = {
                a: "7"
            },
            e
        }
        ,
        "7" !== "".replace(e, "$<a>")
    }
    ))
      , Xr = "$0" === "a".replace(/./, "$0")
      , Jr = De("replace")
      , Qr = !!/./[Jr] && "" === /./[Jr]("a", "$0")
      , Zr = !i((function() {
        var e = /(?:)/
          , t = e.exec;
        e.exec = function() {
            return t.apply(this, arguments)
        }
        ;
        var n = "ab".split(e);
        return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
    }
    ))
      , ei = function(e, t, n, r) {
        var o = De(e)
          , a = !i((function() {
            var t = {};
            return t[o] = function() {
                return 7
            }
            ,
            7 != ""[e](t)
        }
        ))
          , s = a && !i((function() {
            var t = !1
              , n = /a/;
            return "split" === e && ((n = {}).constructor = {},
            n.constructor[Yr] = function() {
                return n
            }
            ,
            n.flags = "",
            n[o] = /./[o]),
            n.exec = function() {
                return t = !0,
                null
            }
            ,
            n[o](""),
            !t
        }
        ));
        if (!a || !s || "replace" === e && (!Gr || !Xr || Qr) || "split" === e && !Zr) {
            var c = /./[o]
              , l = n(o, ""[e], (function(e, t, n, r, i) {
                return t.exec === Vr ? a && !i ? {
                    done: !0,
                    value: c.call(t, n, r)
                } : {
                    done: !0,
                    value: e.call(n, t, r)
                } : {
                    done: !1
                }
            }
            ), {
                REPLACE_KEEPS_$0: Xr,
                REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Qr
            })
              , u = l[0]
              , f = l[1];
            Z(String.prototype, e, u),
            Z(RegExp.prototype, o, 2 == t ? function(e, t) {
                return f.call(e, this, t)
            }
            : function(e) {
                return f.call(e, this)
            }
            )
        }
        r && C(RegExp.prototype[o], "sham", !0)
    }
      , ti = Vt.charAt
      , ni = function(e, t, n) {
        return t + (n ? ti(e, t).length : 1)
    }
      , ri = function(e, t) {
        var n = e.exec;
        if ("function" == typeof n) {
            var r = n.call(e, t);
            if ("object" != typeof r)
                throw TypeError("RegExp exec method returned something other than an Object or null");
            return r
        }
        if ("RegExp" !== f(e))
            throw TypeError("RegExp#exec called on incompatible receiver");
        return Vr.call(e, t)
    }
      , ii = Math.max
      , oi = Math.min
      , ai = Math.floor
      , si = /\$([$&'`]|\d\d?|<[^>]*>)/g
      , ci = /\$([$&'`]|\d\d?)/g;
    ei("replace", 2, (function(e, t, n, r) {
        var i = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
          , o = r.REPLACE_KEEPS_$0
          , a = i ? "$" : "$0";
        return [function(n, r) {
            var i = p(this)
              , o = null == n ? void 0 : n[e];
            return void 0 !== o ? o.call(n, i, r) : t.call(String(i), n, r)
        }
        , function(e, r) {
            if (!i && o || "string" == typeof r && -1 === r.indexOf(a)) {
                var c = n(t, e, this, r);
                if (c.done)
                    return c.value
            }
            var l = A(e)
              , u = String(this)
              , f = "function" == typeof r;
            f || (r = String(r));
            var h = l.global;
            if (h) {
                var d = l.unicode;
                l.lastIndex = 0
            }
            for (var p = []; ; ) {
                var g = ri(l, u);
                if (null === g)
                    break;
                if (p.push(g),
                !h)
                    break;
                "" === String(g[0]) && (l.lastIndex = ni(u, se(l.lastIndex), d))
            }
            for (var m, v = "", y = 0, b = 0; b < p.length; b++) {
                g = p[b];
                for (var w = String(g[0]), k = ii(oi(oe(g.index), u.length), 0), E = [], S = 1; S < g.length; S++)
                    E.push(void 0 === (m = g[S]) ? m : String(m));
                var _ = g.groups;
                if (f) {
                    var T = [w].concat(E, k, u);
                    void 0 !== _ && T.push(_);
                    var x = String(r.apply(void 0, T))
                } else
                    x = s(w, u, k, E, _, r);
                k >= y && (v += u.slice(y, k) + x,
                y = k + w.length)
            }
            return v + u.slice(y)
        }
        ];
        function s(e, n, r, i, o, a) {
            var s = r + e.length
              , c = i.length
              , l = ci;
            return void 0 !== o && (o = Re(o),
            l = si),
            t.call(a, l, (function(t, a) {
                var l;
                switch (a.charAt(0)) {
                case "$":
                    return "$";
                case "&":
                    return e;
                case "`":
                    return n.slice(0, r);
                case "'":
                    return n.slice(s);
                case "<":
                    l = o[a.slice(1, -1)];
                    break;
                default:
                    var u = +a;
                    if (0 === u)
                        return t;
                    if (u > c) {
                        var f = ai(u / 10);
                        return 0 === f ? t : f <= c ? void 0 === i[f - 1] ? a.charAt(1) : i[f - 1] + a.charAt(1) : t
                    }
                    l = i[u - 1]
                }
                return void 0 === l ? "" : l
            }
            ))
        }
    }
    ));
    var li = Object.is || function(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
    }
    ;
    ei("search", 1, (function(e, t, n) {
        return [function(t) {
            var n = p(this)
              , r = null == t ? void 0 : t[e];
            return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n))
        }
        , function(e) {
            var r = n(t, e, this);
            if (r.done)
                return r.value;
            var i = A(e)
              , o = String(this)
              , a = i.lastIndex;
            li(a, 0) || (i.lastIndex = 0);
            var s = ri(i, o);
            return li(i.lastIndex, a) || (i.lastIndex = a),
            null === s ? -1 : s.index
        }
        ]
    }
    ));
    var ui = De("species")
      , fi = function(e, t) {
        var n, r = A(e).constructor;
        return void 0 === r || null == (n = A(r)[ui]) ? t : Pe(n)
    }
      , hi = [].push
      , di = Math.min
      , pi = !i((function() {
        return !RegExp(4294967295, "y")
    }
    ));
    ei("split", 2, (function(e, t, n) {
        var r;
        return r = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(e, n) {
            var r = String(p(this))
              , i = void 0 === n ? 4294967295 : n >>> 0;
            if (0 === i)
                return [];
            if (void 0 === e)
                return [r];
            if (!Nt(e))
                return t.call(r, e, i);
            for (var o, a, s, c = [], l = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), u = 0, f = new RegExp(e.source,l + "g"); (o = Vr.call(f, r)) && !((a = f.lastIndex) > u && (c.push(r.slice(u, o.index)),
            o.length > 1 && o.index < r.length && hi.apply(c, o.slice(1)),
            s = o[0].length,
            u = a,
            c.length >= i)); )
                f.lastIndex === o.index && f.lastIndex++;
            return u === r.length ? !s && f.test("") || c.push("") : c.push(r.slice(u)),
            c.length > i ? c.slice(0, i) : c
        }
        : "0".split(void 0, 0).length ? function(e, n) {
            return void 0 === e && 0 === n ? [] : t.call(this, e, n)
        }
        : t,
        [function(t, n) {
            var i = p(this)
              , o = null == t ? void 0 : t[e];
            return void 0 !== o ? o.call(t, i, n) : r.call(String(i), t, n)
        }
        , function(e, i) {
            var o = n(r, e, this, i, r !== t);
            if (o.done)
                return o.value;
            var a = A(e)
              , s = String(this)
              , c = fi(a, RegExp)
              , l = a.unicode
              , u = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "") + (pi ? "y" : "g")
              , f = new c(pi ? a : "^(?:" + a.source + ")",u)
              , h = void 0 === i ? 4294967295 : i >>> 0;
            if (0 === h)
                return [];
            if (0 === s.length)
                return null === ri(f, s) ? [s] : [];
            for (var d = 0, p = 0, g = []; p < s.length; ) {
                f.lastIndex = pi ? p : 0;
                var m, v = ri(f, pi ? s : s.slice(p));
                if (null === v || (m = di(se(f.lastIndex + (pi ? 0 : p)), s.length)) === d)
                    p = ni(s, p, l);
                else {
                    if (g.push(s.slice(d, p)),
                    g.length === h)
                        return g;
                    for (var y = 1; y <= v.length - 1; y++)
                        if (g.push(v[y]),
                        g.length === h)
                            return g;
                    p = d = m
                }
            }
            return g.push(s.slice(d)),
            g
        }
        ]
    }
    ), !pi);
    var gi = De("iterator")
      , mi = De("toStringTag")
      , vi = gr.values;
    for (var yi in dn) {
        var bi = r[yi]
          , wi = bi && bi.prototype;
        if (wi) {
            if (wi[gi] !== vi)
                try {
                    C(wi, gi, vi)
                } catch (e) {
                    wi[gi] = vi
                }
            if (wi[mi] || C(wi, mi, yi),
            dn[yi])
                for (var ki in gr)
                    if (wi[ki] !== gr[ki])
                        try {
                            C(wi, ki, gr[ki])
                        } catch (e) {
                            wi[ki] = gr[ki]
                        }
        }
    }
    var Ei = De("iterator")
      , Si = !i((function() {
        var e = new URL("b?a=1&b=2&c=3","http://a")
          , t = e.searchParams
          , n = "";
        return e.pathname = "c%20d",
        t.forEach((function(e, r) {
            t.delete("b"),
            n += r + e
        }
        )),
        !t.sort || "http://a/c%20d?a=1&c=3" !== e.href || "3" !== t.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !t[Ei] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== n || "x" !== new URL("http://x",void 0).host
    }
    ))
      , _i = function(e, t, n) {
        if (!(e instanceof t))
            throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
        return e
    }
      , Ti = Object.assign
      , Ai = Object.defineProperty
      , xi = !Ti || i((function() {
        if (o && 1 !== Ti({
            b: 1
        }, Ti(Ai({}, "a", {
            enumerable: !0,
            get: function() {
                Ai(this, "b", {
                    value: 3,
                    enumerable: !1
                })
            }
        }), {
            b: 2
        })).b)
            return !0;
        var e = {}
          , t = {}
          , n = Symbol();
        return e[n] = 7,
        "abcdefghijklmnopqrst".split("").forEach((function(e) {
            t[e] = e
        }
        )),
        7 != Ti({}, e)[n] || "abcdefghijklmnopqrst" != kt(Ti({}, t)).join("")
    }
    )) ? function(e, t) {
        for (var n = Re(e), r = arguments.length, i = 1, a = ye.f, s = c.f; r > i; )
            for (var l, u = d(arguments[i++]), f = a ? kt(u).concat(a(u)) : kt(u), h = f.length, p = 0; h > p; )
                l = f[p++],
                o && !s.call(u, l) || (n[l] = u[l]);
        return n
    }
    : Ti
      , Oi = /[^\0-\u007E]/
      , Ci = /[.\u3002\uFF0E\uFF61]/g
      , Pi = "Overflow: input needs wider integers to process"
      , Ii = Math.floor
      , Ri = String.fromCharCode
      , ji = function(e) {
        return e + 22 + 75 * (e < 26)
    }
      , Li = function(e, t, n) {
        var r = 0;
        for (e = n ? Ii(e / 700) : e >> 1,
        e += Ii(e / t); e > 455; r += 36)
            e = Ii(e / 35);
        return Ii(r + 36 * e / (e + 38))
    }
      , Mi = function(e) {
        var t, n, r = [], i = (e = function(e) {
            for (var t = [], n = 0, r = e.length; n < r; ) {
                var i = e.charCodeAt(n++);
                if (i >= 55296 && i <= 56319 && n < r) {
                    var o = e.charCodeAt(n++);
                    56320 == (64512 & o) ? t.push(((1023 & i) << 10) + (1023 & o) + 65536) : (t.push(i),
                    n--)
                } else
                    t.push(i)
            }
            return t
        }(e)).length, o = 128, a = 0, s = 72;
        for (t = 0; t < e.length; t++)
            (n = e[t]) < 128 && r.push(Ri(n));
        var c = r.length
          , l = c;
        for (c && r.push("-"); l < i; ) {
            var u = 2147483647;
            for (t = 0; t < e.length; t++)
                (n = e[t]) >= o && n < u && (u = n);
            var f = l + 1;
            if (u - o > Ii((2147483647 - a) / f))
                throw RangeError(Pi);
            for (a += (u - o) * f,
            o = u,
            t = 0; t < e.length; t++) {
                if ((n = e[t]) < o && ++a > 2147483647)
                    throw RangeError(Pi);
                if (n == o) {
                    for (var h = a, d = 36; ; d += 36) {
                        var p = d <= s ? 1 : d >= s + 26 ? 26 : d - s;
                        if (h < p)
                            break;
                        var g = h - p
                          , m = 36 - p;
                        r.push(Ri(ji(p + g % m))),
                        h = Ii(g / m)
                    }
                    r.push(Ri(ji(h))),
                    s = Li(a, f, l == c),
                    a = 0,
                    ++l
                }
            }
            ++a,
            ++o
        }
        return r.join("")
    }
      , Ni = function(e, t, n) {
        for (var r in t)
            Z(e, r, t[r], n);
        return e
    }
      , Ui = function(e) {
        var t = ht(e);
        if ("function" != typeof t)
            throw TypeError(String(e) + " is not iterable");
        return A(t.call(e))
    }
      , Fi = ne("fetch")
      , Di = ne("Headers")
      , Bi = De("iterator")
      , qi = Q.set
      , Hi = Q.getterFor("URLSearchParams")
      , Vi = Q.getterFor("URLSearchParamsIterator")
      , zi = /\+/g
      , Wi = Array(4)
      , $i = function(e) {
        return Wi[e - 1] || (Wi[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"))
    }
      , Ki = function(e) {
        try {
            return decodeURIComponent(e)
        } catch (t) {
            return e
        }
    }
      , Yi = function(e) {
        var t = e.replace(zi, " ")
          , n = 4;
        try {
            return decodeURIComponent(t)
        } catch (e) {
            for (; n; )
                t = t.replace($i(n--), Ki);
            return t
        }
    }
      , Gi = /[!'()~]|%20/g
      , Xi = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+"
    }
      , Ji = function(e) {
        return Xi[e]
    }
      , Qi = function(e) {
        return encodeURIComponent(e).replace(Gi, Ji)
    }
      , Zi = function(e, t) {
        if (t)
            for (var n, r, i = t.split("&"), o = 0; o < i.length; )
                (n = i[o++]).length && (r = n.split("="),
                e.push({
                    key: Yi(r.shift()),
                    value: Yi(r.join("="))
                }))
    }
      , eo = function(e) {
        this.entries.length = 0,
        Zi(this.entries, e)
    }
      , to = function(e, t) {
        if (e < t)
            throw TypeError("Not enough arguments")
    }
      , no = nn((function(e, t) {
        qi(this, {
            type: "URLSearchParamsIterator",
            iterator: Ui(Hi(e).entries),
            kind: t
        })
    }
    ), "Iterator", (function() {
        var e = Vi(this)
          , t = e.kind
          , n = e.iterator.next()
          , r = n.value;
        return n.done || (n.value = "keys" === t ? r.key : "values" === t ? r.value : [r.key, r.value]),
        n
    }
    ))
      , ro = function() {
        _i(this, ro, "URLSearchParams");
        var e, t, n, r, i, o, a, s, c, l = arguments.length > 0 ? arguments[0] : void 0, u = this, f = [];
        if (qi(u, {
            type: "URLSearchParams",
            entries: f,
            updateURL: function() {},
            updateSearchParams: eo
        }),
        void 0 !== l)
            if (m(l))
                if ("function" == typeof (e = ht(l)))
                    for (n = (t = e.call(l)).next; !(r = n.call(t)).done; ) {
                        if ((a = (o = (i = Ui(A(r.value))).next).call(i)).done || (s = o.call(i)).done || !o.call(i).done)
                            throw TypeError("Expected sequence with length 2");
                        f.push({
                            key: a.value + "",
                            value: s.value + ""
                        })
                    }
                else
                    for (c in l)
                        b(l, c) && f.push({
                            key: c,
                            value: l[c] + ""
                        });
            else
                Zi(f, "string" == typeof l ? "?" === l.charAt(0) ? l.slice(1) : l : l + "")
    }
      , io = ro.prototype;
    Ni(io, {
        append: function(e, t) {
            to(arguments.length, 2);
            var n = Hi(this);
            n.entries.push({
                key: e + "",
                value: t + ""
            }),
            n.updateURL()
        },
        delete: function(e) {
            to(arguments.length, 1);
            for (var t = Hi(this), n = t.entries, r = e + "", i = 0; i < n.length; )
                n[i].key === r ? n.splice(i, 1) : i++;
            t.updateURL()
        },
        get: function(e) {
            to(arguments.length, 1);
            for (var t = Hi(this).entries, n = e + "", r = 0; r < t.length; r++)
                if (t[r].key === n)
                    return t[r].value;
            return null
        },
        getAll: function(e) {
            to(arguments.length, 1);
            for (var t = Hi(this).entries, n = e + "", r = [], i = 0; i < t.length; i++)
                t[i].key === n && r.push(t[i].value);
            return r
        },
        has: function(e) {
            to(arguments.length, 1);
            for (var t = Hi(this).entries, n = e + "", r = 0; r < t.length; )
                if (t[r++].key === n)
                    return !0;
            return !1
        },
        set: function(e, t) {
            to(arguments.length, 1);
            for (var n, r = Hi(this), i = r.entries, o = !1, a = e + "", s = t + "", c = 0; c < i.length; c++)
                (n = i[c]).key === a && (o ? i.splice(c--, 1) : (o = !0,
                n.value = s));
            o || i.push({
                key: a,
                value: s
            }),
            r.updateURL()
        },
        sort: function() {
            var e, t, n, r = Hi(this), i = r.entries, o = i.slice();
            for (i.length = 0,
            n = 0; n < o.length; n++) {
                for (e = o[n],
                t = 0; t < n; t++)
                    if (i[t].key > e.key) {
                        i.splice(t, 0, e);
                        break
                    }
                t === n && i.push(e)
            }
            r.updateURL()
        },
        forEach: function(e) {
            for (var t, n = Hi(this).entries, r = Ie(e, arguments.length > 1 ? arguments[1] : void 0, 3), i = 0; i < n.length; )
                r((t = n[i++]).value, t.key, this)
        },
        keys: function() {
            return new no(this,"keys")
        },
        values: function() {
            return new no(this,"values")
        },
        entries: function() {
            return new no(this,"entries")
        }
    }, {
        enumerable: !0
    }),
    Z(io, Bi, io.entries),
    Z(io, "toString", (function() {
        for (var e, t = Hi(this).entries, n = [], r = 0; r < t.length; )
            e = t[r++],
            n.push(Qi(e.key) + "=" + Qi(e.value));
        return n.join("&")
    }
    ), {
        enumerable: !0
    }),
    Zt(ro, "URLSearchParams"),
    Ce({
        global: !0,
        forced: !Si
    }, {
        URLSearchParams: ro
    }),
    Si || "function" != typeof Fi || "function" != typeof Di || Ce({
        global: !0,
        enumerable: !0,
        forced: !0
    }, {
        fetch: function(e) {
            var t, n, r, i = [e];
            return arguments.length > 1 && (t = arguments[1],
            m(t) && (n = t.body,
            "URLSearchParams" === ut(n) && ((r = t.headers ? new Di(t.headers) : new Di).has("content-type") || r.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"),
            t = Ot(t, {
                body: l(0, String(n)),
                headers: l(0, r)
            }))),
            i.push(t)),
            Fi.apply(this, i)
        }
    });
    var oo, ao = {
        URLSearchParams: ro,
        getState: Hi
    }, so = Vt.codeAt, co = r.URL, lo = ao.URLSearchParams, uo = ao.getState, fo = Q.set, ho = Q.getterFor("URL"), po = Math.floor, go = Math.pow, mo = /[A-Za-z]/, vo = /[\d+\-.A-Za-z]/, yo = /\d/, bo = /^(0x|0X)/, wo = /^[0-7]+$/, ko = /^\d+$/, Eo = /^[\dA-Fa-f]+$/, So = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/, _o = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/, To = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g, Ao = /[\u0009\u000A\u000D]/g, xo = function(e, t) {
        var n, r, i;
        if ("[" == t.charAt(0)) {
            if ("]" != t.charAt(t.length - 1))
                return "Invalid host";
            if (!(n = Co(t.slice(1, -1))))
                return "Invalid host";
            e.host = n
        } else if (Uo(e)) {
            if (t = function(e) {
                var t, n, r = [], i = e.toLowerCase().replace(Ci, ".").split(".");
                for (t = 0; t < i.length; t++)
                    n = i[t],
                    r.push(Oi.test(n) ? "xn--" + Mi(n) : n);
                return r.join(".")
            }(t),
            So.test(t))
                return "Invalid host";
            if (null === (n = Oo(t)))
                return "Invalid host";
            e.host = n
        } else {
            if (_o.test(t))
                return "Invalid host";
            for (n = "",
            r = dt(t),
            i = 0; i < r.length; i++)
                n += Mo(r[i], Io);
            e.host = n
        }
    }, Oo = function(e) {
        var t, n, r, i, o, a, s, c = e.split(".");
        if (c.length && "" == c[c.length - 1] && c.pop(),
        (t = c.length) > 4)
            return e;
        for (n = [],
        r = 0; r < t; r++) {
            if ("" == (i = c[r]))
                return e;
            if (o = 10,
            i.length > 1 && "0" == i.charAt(0) && (o = bo.test(i) ? 16 : 8,
            i = i.slice(8 == o ? 1 : 2)),
            "" === i)
                a = 0;
            else {
                if (!(10 == o ? ko : 8 == o ? wo : Eo).test(i))
                    return e;
                a = parseInt(i, o)
            }
            n.push(a)
        }
        for (r = 0; r < t; r++)
            if (a = n[r],
            r == t - 1) {
                if (a >= go(256, 5 - t))
                    return null
            } else if (a > 255)
                return null;
        for (s = n.pop(),
        r = 0; r < n.length; r++)
            s += n[r] * go(256, 3 - r);
        return s
    }, Co = function(e) {
        var t, n, r, i, o, a, s, c = [0, 0, 0, 0, 0, 0, 0, 0], l = 0, u = null, f = 0, h = function() {
            return e.charAt(f)
        };
        if (":" == h()) {
            if (":" != e.charAt(1))
                return;
            f += 2,
            u = ++l
        }
        for (; h(); ) {
            if (8 == l)
                return;
            if (":" != h()) {
                for (t = n = 0; n < 4 && Eo.test(h()); )
                    t = 16 * t + parseInt(h(), 16),
                    f++,
                    n++;
                if ("." == h()) {
                    if (0 == n)
                        return;
                    if (f -= n,
                    l > 6)
                        return;
                    for (r = 0; h(); ) {
                        if (i = null,
                        r > 0) {
                            if (!("." == h() && r < 4))
                                return;
                            f++
                        }
                        if (!yo.test(h()))
                            return;
                        for (; yo.test(h()); ) {
                            if (o = parseInt(h(), 10),
                            null === i)
                                i = o;
                            else {
                                if (0 == i)
                                    return;
                                i = 10 * i + o
                            }
                            if (i > 255)
                                return;
                            f++
                        }
                        c[l] = 256 * c[l] + i,
                        2 != ++r && 4 != r || l++
                    }
                    if (4 != r)
                        return;
                    break
                }
                if (":" == h()) {
                    if (f++,
                    !h())
                        return
                } else if (h())
                    return;
                c[l++] = t
            } else {
                if (null !== u)
                    return;
                f++,
                u = ++l
            }
        }
        if (null !== u)
            for (a = l - u,
            l = 7; 0 != l && a > 0; )
                s = c[l],
                c[l--] = c[u + a - 1],
                c[u + --a] = s;
        else if (8 != l)
            return;
        return c
    }, Po = function(e) {
        var t, n, r, i;
        if ("number" == typeof e) {
            for (t = [],
            n = 0; n < 4; n++)
                t.unshift(e % 256),
                e = po(e / 256);
            return t.join(".")
        }
        if ("object" == typeof e) {
            for (t = "",
            r = function(e) {
                for (var t = null, n = 1, r = null, i = 0, o = 0; o < 8; o++)
                    0 !== e[o] ? (i > n && (t = r,
                    n = i),
                    r = null,
                    i = 0) : (null === r && (r = o),
                    ++i);
                return i > n && (t = r,
                n = i),
                t
            }(e),
            n = 0; n < 8; n++)
                i && 0 === e[n] || (i && (i = !1),
                r === n ? (t += n ? ":" : "::",
                i = !0) : (t += e[n].toString(16),
                n < 7 && (t += ":")));
            return "[" + t + "]"
        }
        return e
    }, Io = {}, Ro = xi({}, Io, {
        " ": 1,
        '"': 1,
        "<": 1,
        ">": 1,
        "`": 1
    }), jo = xi({}, Ro, {
        "#": 1,
        "?": 1,
        "{": 1,
        "}": 1
    }), Lo = xi({}, jo, {
        "/": 1,
        ":": 1,
        ";": 1,
        "=": 1,
        "@": 1,
        "[": 1,
        "\\": 1,
        "]": 1,
        "^": 1,
        "|": 1
    }), Mo = function(e, t) {
        var n = so(e, 0);
        return n > 32 && n < 127 && !b(t, e) ? e : encodeURIComponent(e)
    }, No = {
        ftp: 21,
        file: null,
        http: 80,
        https: 443,
        ws: 80,
        wss: 443
    }, Uo = function(e) {
        return b(No, e.scheme)
    }, Fo = function(e) {
        return "" != e.username || "" != e.password
    }, Do = function(e) {
        return !e.host || e.cannotBeABaseURL || "file" == e.scheme
    }, Bo = function(e, t) {
        var n;
        return 2 == e.length && mo.test(e.charAt(0)) && (":" == (n = e.charAt(1)) || !t && "|" == n)
    }, qo = function(e) {
        var t;
        return e.length > 1 && Bo(e.slice(0, 2)) && (2 == e.length || "/" === (t = e.charAt(2)) || "\\" === t || "?" === t || "#" === t)
    }, Ho = function(e) {
        var t = e.path
          , n = t.length;
        !n || "file" == e.scheme && 1 == n && Bo(t[0], !0) || t.pop()
    }, Vo = function(e) {
        return "." === e || "%2e" === e.toLowerCase()
    }, zo = {}, Wo = {}, $o = {}, Ko = {}, Yo = {}, Go = {}, Xo = {}, Jo = {}, Qo = {}, Zo = {}, ea = {}, ta = {}, na = {}, ra = {}, ia = {}, oa = {}, aa = {}, sa = {}, ca = {}, la = {}, ua = {}, fa = function(e, t, n, r) {
        var i, o, a, s, c, l = n || zo, u = 0, f = "", h = !1, d = !1, p = !1;
        for (n || (e.scheme = "",
        e.username = "",
        e.password = "",
        e.host = null,
        e.port = null,
        e.path = [],
        e.query = null,
        e.fragment = null,
        e.cannotBeABaseURL = !1,
        t = t.replace(To, "")),
        t = t.replace(Ao, ""),
        i = dt(t); u <= i.length; ) {
            switch (o = i[u],
            l) {
            case zo:
                if (!o || !mo.test(o)) {
                    if (n)
                        return "Invalid scheme";
                    l = $o;
                    continue
                }
                f += o.toLowerCase(),
                l = Wo;
                break;
            case Wo:
                if (o && (vo.test(o) || "+" == o || "-" == o || "." == o))
                    f += o.toLowerCase();
                else {
                    if (":" != o) {
                        if (n)
                            return "Invalid scheme";
                        f = "",
                        l = $o,
                        u = 0;
                        continue
                    }
                    if (n && (Uo(e) != b(No, f) || "file" == f && (Fo(e) || null !== e.port) || "file" == e.scheme && !e.host))
                        return;
                    if (e.scheme = f,
                    n)
                        return void (Uo(e) && No[e.scheme] == e.port && (e.port = null));
                    f = "",
                    "file" == e.scheme ? l = ra : Uo(e) && r && r.scheme == e.scheme ? l = Ko : Uo(e) ? l = Jo : "/" == i[u + 1] ? (l = Yo,
                    u++) : (e.cannotBeABaseURL = !0,
                    e.path.push(""),
                    l = ca)
                }
                break;
            case $o:
                if (!r || r.cannotBeABaseURL && "#" != o)
                    return "Invalid scheme";
                if (r.cannotBeABaseURL && "#" == o) {
                    e.scheme = r.scheme,
                    e.path = r.path.slice(),
                    e.query = r.query,
                    e.fragment = "",
                    e.cannotBeABaseURL = !0,
                    l = ua;
                    break
                }
                l = "file" == r.scheme ? ra : Go;
                continue;
            case Ko:
                if ("/" != o || "/" != i[u + 1]) {
                    l = Go;
                    continue
                }
                l = Qo,
                u++;
                break;
            case Yo:
                if ("/" == o) {
                    l = Zo;
                    break
                }
                l = sa;
                continue;
            case Go:
                if (e.scheme = r.scheme,
                o == oo)
                    e.username = r.username,
                    e.password = r.password,
                    e.host = r.host,
                    e.port = r.port,
                    e.path = r.path.slice(),
                    e.query = r.query;
                else if ("/" == o || "\\" == o && Uo(e))
                    l = Xo;
                else if ("?" == o)
                    e.username = r.username,
                    e.password = r.password,
                    e.host = r.host,
                    e.port = r.port,
                    e.path = r.path.slice(),
                    e.query = "",
                    l = la;
                else {
                    if ("#" != o) {
                        e.username = r.username,
                        e.password = r.password,
                        e.host = r.host,
                        e.port = r.port,
                        e.path = r.path.slice(),
                        e.path.pop(),
                        l = sa;
                        continue
                    }
                    e.username = r.username,
                    e.password = r.password,
                    e.host = r.host,
                    e.port = r.port,
                    e.path = r.path.slice(),
                    e.query = r.query,
                    e.fragment = "",
                    l = ua
                }
                break;
            case Xo:
                if (!Uo(e) || "/" != o && "\\" != o) {
                    if ("/" != o) {
                        e.username = r.username,
                        e.password = r.password,
                        e.host = r.host,
                        e.port = r.port,
                        l = sa;
                        continue
                    }
                    l = Zo
                } else
                    l = Qo;
                break;
            case Jo:
                if (l = Qo,
                "/" != o || "/" != f.charAt(u + 1))
                    continue;
                u++;
                break;
            case Qo:
                if ("/" != o && "\\" != o) {
                    l = Zo;
                    continue
                }
                break;
            case Zo:
                if ("@" == o) {
                    h && (f = "%40" + f),
                    h = !0,
                    a = dt(f);
                    for (var g = 0; g < a.length; g++) {
                        var m = a[g];
                        if (":" != m || p) {
                            var v = Mo(m, Lo);
                            p ? e.password += v : e.username += v
                        } else
                            p = !0
                    }
                    f = ""
                } else if (o == oo || "/" == o || "?" == o || "#" == o || "\\" == o && Uo(e)) {
                    if (h && "" == f)
                        return "Invalid authority";
                    u -= dt(f).length + 1,
                    f = "",
                    l = ea
                } else
                    f += o;
                break;
            case ea:
            case ta:
                if (n && "file" == e.scheme) {
                    l = oa;
                    continue
                }
                if (":" != o || d) {
                    if (o == oo || "/" == o || "?" == o || "#" == o || "\\" == o && Uo(e)) {
                        if (Uo(e) && "" == f)
                            return "Invalid host";
                        if (n && "" == f && (Fo(e) || null !== e.port))
                            return;
                        if (s = xo(e, f))
                            return s;
                        if (f = "",
                        l = aa,
                        n)
                            return;
                        continue
                    }
                    "[" == o ? d = !0 : "]" == o && (d = !1),
                    f += o
                } else {
                    if ("" == f)
                        return "Invalid host";
                    if (s = xo(e, f))
                        return s;
                    if (f = "",
                    l = na,
                    n == ta)
                        return
                }
                break;
            case na:
                if (!yo.test(o)) {
                    if (o == oo || "/" == o || "?" == o || "#" == o || "\\" == o && Uo(e) || n) {
                        if ("" != f) {
                            var y = parseInt(f, 10);
                            if (y > 65535)
                                return "Invalid port";
                            e.port = Uo(e) && y === No[e.scheme] ? null : y,
                            f = ""
                        }
                        if (n)
                            return;
                        l = aa;
                        continue
                    }
                    return "Invalid port"
                }
                f += o;
                break;
            case ra:
                if (e.scheme = "file",
                "/" == o || "\\" == o)
                    l = ia;
                else {
                    if (!r || "file" != r.scheme) {
                        l = sa;
                        continue
                    }
                    if (o == oo)
                        e.host = r.host,
                        e.path = r.path.slice(),
                        e.query = r.query;
                    else if ("?" == o)
                        e.host = r.host,
                        e.path = r.path.slice(),
                        e.query = "",
                        l = la;
                    else {
                        if ("#" != o) {
                            qo(i.slice(u).join("")) || (e.host = r.host,
                            e.path = r.path.slice(),
                            Ho(e)),
                            l = sa;
                            continue
                        }
                        e.host = r.host,
                        e.path = r.path.slice(),
                        e.query = r.query,
                        e.fragment = "",
                        l = ua
                    }
                }
                break;
            case ia:
                if ("/" == o || "\\" == o) {
                    l = oa;
                    break
                }
                r && "file" == r.scheme && !qo(i.slice(u).join("")) && (Bo(r.path[0], !0) ? e.path.push(r.path[0]) : e.host = r.host),
                l = sa;
                continue;
            case oa:
                if (o == oo || "/" == o || "\\" == o || "?" == o || "#" == o) {
                    if (!n && Bo(f))
                        l = sa;
                    else if ("" == f) {
                        if (e.host = "",
                        n)
                            return;
                        l = aa
                    } else {
                        if (s = xo(e, f))
                            return s;
                        if ("localhost" == e.host && (e.host = ""),
                        n)
                            return;
                        f = "",
                        l = aa
                    }
                    continue
                }
                f += o;
                break;
            case aa:
                if (Uo(e)) {
                    if (l = sa,
                    "/" != o && "\\" != o)
                        continue
                } else if (n || "?" != o)
                    if (n || "#" != o) {
                        if (o != oo && (l = sa,
                        "/" != o))
                            continue
                    } else
                        e.fragment = "",
                        l = ua;
                else
                    e.query = "",
                    l = la;
                break;
            case sa:
                if (o == oo || "/" == o || "\\" == o && Uo(e) || !n && ("?" == o || "#" == o)) {
                    if (".." === (c = (c = f).toLowerCase()) || "%2e." === c || ".%2e" === c || "%2e%2e" === c ? (Ho(e),
                    "/" == o || "\\" == o && Uo(e) || e.path.push("")) : Vo(f) ? "/" == o || "\\" == o && Uo(e) || e.path.push("") : ("file" == e.scheme && !e.path.length && Bo(f) && (e.host && (e.host = ""),
                    f = f.charAt(0) + ":"),
                    e.path.push(f)),
                    f = "",
                    "file" == e.scheme && (o == oo || "?" == o || "#" == o))
                        for (; e.path.length > 1 && "" === e.path[0]; )
                            e.path.shift();
                    "?" == o ? (e.query = "",
                    l = la) : "#" == o && (e.fragment = "",
                    l = ua)
                } else
                    f += Mo(o, jo);
                break;
            case ca:
                "?" == o ? (e.query = "",
                l = la) : "#" == o ? (e.fragment = "",
                l = ua) : o != oo && (e.path[0] += Mo(o, Io));
                break;
            case la:
                n || "#" != o ? o != oo && ("'" == o && Uo(e) ? e.query += "%27" : e.query += "#" == o ? "%23" : Mo(o, Io)) : (e.fragment = "",
                l = ua);
                break;
            case ua:
                o != oo && (e.fragment += Mo(o, Ro))
            }
            u++
        }
    }, ha = function(e) {
        var t, n, r = _i(this, ha, "URL"), i = arguments.length > 1 ? arguments[1] : void 0, a = String(e), s = fo(r, {
            type: "URL"
        });
        if (void 0 !== i)
            if (i instanceof ha)
                t = ho(i);
            else if (n = fa(t = {}, String(i)))
                throw TypeError(n);
        if (n = fa(s, a, null, t))
            throw TypeError(n);
        var c = s.searchParams = new lo
          , l = uo(c);
        l.updateSearchParams(s.query),
        l.updateURL = function() {
            s.query = String(c) || null
        }
        ,
        o || (r.href = pa.call(r),
        r.origin = ga.call(r),
        r.protocol = ma.call(r),
        r.username = va.call(r),
        r.password = ya.call(r),
        r.host = ba.call(r),
        r.hostname = wa.call(r),
        r.port = ka.call(r),
        r.pathname = Ea.call(r),
        r.search = Sa.call(r),
        r.searchParams = _a.call(r),
        r.hash = Ta.call(r))
    }, da = ha.prototype, pa = function() {
        var e = ho(this)
          , t = e.scheme
          , n = e.username
          , r = e.password
          , i = e.host
          , o = e.port
          , a = e.path
          , s = e.query
          , c = e.fragment
          , l = t + ":";
        return null !== i ? (l += "//",
        Fo(e) && (l += n + (r ? ":" + r : "") + "@"),
        l += Po(i),
        null !== o && (l += ":" + o)) : "file" == t && (l += "//"),
        l += e.cannotBeABaseURL ? a[0] : a.length ? "/" + a.join("/") : "",
        null !== s && (l += "?" + s),
        null !== c && (l += "#" + c),
        l
    }, ga = function() {
        var e = ho(this)
          , t = e.scheme
          , n = e.port;
        if ("blob" == t)
            try {
                return new URL(t.path[0]).origin
            } catch (e) {
                return "null"
            }
        return "file" != t && Uo(e) ? t + "://" + Po(e.host) + (null !== n ? ":" + n : "") : "null"
    }, ma = function() {
        return ho(this).scheme + ":"
    }, va = function() {
        return ho(this).username
    }, ya = function() {
        return ho(this).password
    }, ba = function() {
        var e = ho(this)
          , t = e.host
          , n = e.port;
        return null === t ? "" : null === n ? Po(t) : Po(t) + ":" + n
    }, wa = function() {
        var e = ho(this).host;
        return null === e ? "" : Po(e)
    }, ka = function() {
        var e = ho(this).port;
        return null === e ? "" : String(e)
    }, Ea = function() {
        var e = ho(this)
          , t = e.path;
        return e.cannotBeABaseURL ? t[0] : t.length ? "/" + t.join("/") : ""
    }, Sa = function() {
        var e = ho(this).query;
        return e ? "?" + e : ""
    }, _a = function() {
        return ho(this).searchParams
    }, Ta = function() {
        var e = ho(this).fragment;
        return e ? "#" + e : ""
    }, Aa = function(e, t) {
        return {
            get: e,
            set: t,
            configurable: !0,
            enumerable: !0
        }
    };
    if (o && Et(da, {
        href: Aa(pa, (function(e) {
            var t = ho(this)
              , n = String(e)
              , r = fa(t, n);
            if (r)
                throw TypeError(r);
            uo(t.searchParams).updateSearchParams(t.query)
        }
        )),
        origin: Aa(ga),
        protocol: Aa(ma, (function(e) {
            var t = ho(this);
            fa(t, String(e) + ":", zo)
        }
        )),
        username: Aa(va, (function(e) {
            var t = ho(this)
              , n = dt(String(e));
            if (!Do(t)) {
                t.username = "";
                for (var r = 0; r < n.length; r++)
                    t.username += Mo(n[r], Lo)
            }
        }
        )),
        password: Aa(ya, (function(e) {
            var t = ho(this)
              , n = dt(String(e));
            if (!Do(t)) {
                t.password = "";
                for (var r = 0; r < n.length; r++)
                    t.password += Mo(n[r], Lo)
            }
        }
        )),
        host: Aa(ba, (function(e) {
            var t = ho(this);
            t.cannotBeABaseURL || fa(t, String(e), ea)
        }
        )),
        hostname: Aa(wa, (function(e) {
            var t = ho(this);
            t.cannotBeABaseURL || fa(t, String(e), ta)
        }
        )),
        port: Aa(ka, (function(e) {
            var t = ho(this);
            Do(t) || ("" == (e = String(e)) ? t.port = null : fa(t, e, na))
        }
        )),
        pathname: Aa(Ea, (function(e) {
            var t = ho(this);
            t.cannotBeABaseURL || (t.path = [],
            fa(t, e + "", aa))
        }
        )),
        search: Aa(Sa, (function(e) {
            var t = ho(this);
            "" == (e = String(e)) ? t.query = null : ("?" == e.charAt(0) && (e = e.slice(1)),
            t.query = "",
            fa(t, e, la)),
            uo(t.searchParams).updateSearchParams(t.query)
        }
        )),
        searchParams: Aa(_a),
        hash: Aa(Ta, (function(e) {
            var t = ho(this);
            "" != (e = String(e)) ? ("#" == e.charAt(0) && (e = e.slice(1)),
            t.fragment = "",
            fa(t, e, ua)) : t.fragment = null
        }
        ))
    }),
    Z(da, "toJSON", (function() {
        return pa.call(this)
    }
    ), {
        enumerable: !0
    }),
    Z(da, "toString", (function() {
        return pa.call(this)
    }
    ), {
        enumerable: !0
    }),
    co) {
        var xa = co.createObjectURL
          , Oa = co.revokeObjectURL;
        xa && Z(ha, "createObjectURL", (function(e) {
            return xa.apply(co, arguments)
        }
        )),
        Oa && Z(ha, "revokeObjectURL", (function(e) {
            return Oa.apply(co, arguments)
        }
        ))
    }
    function Ca(e) {
        return (Ca = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function Pa(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function Ia(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    function Ra(e, t, n) {
        return t && Ia(e.prototype, t),
        n && Ia(e, n),
        e
    }
    function ja(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function La(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function Ma(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? La(Object(n), !0).forEach((function(t) {
                ja(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : La(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function Na(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)))
                return;
            var n = []
              , r = !0
              , i = !1
              , o = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value),
                !t || n.length !== t); r = !0)
                    ;
            } catch (e) {
                i = !0,
                o = e
            } finally {
                try {
                    r || null == s.return || s.return()
                } finally {
                    if (i)
                        throw o
                }
            }
            return n
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }
    function Ua(e) {
        return function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++)
                    n[t] = e[t];
                return n
            }
        }(e) || function(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))
                return Array.from(e)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }
    Zt(ha, "URL"),
    Ce({
        global: !0,
        forced: !Si,
        sham: !o
    }, {
        URL: ha
    }),
    function(e) {
        var t = function() {
            try {
                return !!Symbol.iterator
            } catch (e) {
                return !1
            }
        }()
          , n = function(e) {
            var n = {
                next: function() {
                    var t = e.shift();
                    return {
                        done: void 0 === t,
                        value: t
                    }
                }
            };
            return t && (n[Symbol.iterator] = function() {
                return n
            }
            ),
            n
        }
          , r = function(e) {
            return encodeURIComponent(e).replace(/%20/g, "+")
        }
          , i = function(e) {
            return decodeURIComponent(String(e).replace(/\+/g, " "))
        };
        (function() {
            try {
                var t = e.URLSearchParams;
                return "a=1" === new t("?a=1").toString() && "function" == typeof t.prototype.set
            } catch (e) {
                return !1
            }
        }
        )() || function() {
            var i = function e(t) {
                Object.defineProperty(this, "_entries", {
                    writable: !0,
                    value: {}
                });
                var n = Ca(t);
                if ("undefined" === n)
                    ;
                else if ("string" === n)
                    "" !== t && this._fromString(t);
                else if (t instanceof e) {
                    var r = this;
                    t.forEach((function(e, t) {
                        r.append(t, e)
                    }
                    ))
                } else {
                    if (null === t || "object" !== n)
                        throw new TypeError("Unsupported input's type for URLSearchParams");
                    if ("[object Array]" === Object.prototype.toString.call(t))
                        for (var i = 0; i < t.length; i++) {
                            var o = t[i];
                            if ("[object Array]" !== Object.prototype.toString.call(o) && 2 === o.length)
                                throw new TypeError("Expected [string, any] as entry at index " + i + " of URLSearchParams's input");
                            this.append(o[0], o[1])
                        }
                    else
                        for (var a in t)
                            t.hasOwnProperty(a) && this.append(a, t[a])
                }
            }
              , o = i.prototype;
            o.append = function(e, t) {
                e in this._entries ? this._entries[e].push(String(t)) : this._entries[e] = [String(t)]
            }
            ,
            o.delete = function(e) {
                delete this._entries[e]
            }
            ,
            o.get = function(e) {
                return e in this._entries ? this._entries[e][0] : null
            }
            ,
            o.getAll = function(e) {
                return e in this._entries ? this._entries[e].slice(0) : []
            }
            ,
            o.has = function(e) {
                return e in this._entries
            }
            ,
            o.set = function(e, t) {
                this._entries[e] = [String(t)]
            }
            ,
            o.forEach = function(e, t) {
                var n;
                for (var r in this._entries)
                    if (this._entries.hasOwnProperty(r)) {
                        n = this._entries[r];
                        for (var i = 0; i < n.length; i++)
                            e.call(t, n[i], r, this)
                    }
            }
            ,
            o.keys = function() {
                var e = [];
                return this.forEach((function(t, n) {
                    e.push(n)
                }
                )),
                n(e)
            }
            ,
            o.values = function() {
                var e = [];
                return this.forEach((function(t) {
                    e.push(t)
                }
                )),
                n(e)
            }
            ,
            o.entries = function() {
                var e = [];
                return this.forEach((function(t, n) {
                    e.push([n, t])
                }
                )),
                n(e)
            }
            ,
            t && (o[Symbol.iterator] = o.entries),
            o.toString = function() {
                var e = [];
                return this.forEach((function(t, n) {
                    e.push(r(n) + "=" + r(t))
                }
                )),
                e.join("&")
            }
            ,
            e.URLSearchParams = i
        }();
        var o = e.URLSearchParams.prototype;
        "function" != typeof o.sort && (o.sort = function() {
            var e = this
              , t = [];
            this.forEach((function(n, r) {
                t.push([r, n]),
                e._entries || e.delete(r)
            }
            )),
            t.sort((function(e, t) {
                return e[0] < t[0] ? -1 : e[0] > t[0] ? 1 : 0
            }
            )),
            e._entries && (e._entries = {});
            for (var n = 0; n < t.length; n++)
                this.append(t[n][0], t[n][1])
        }
        ),
        "function" != typeof o._fromString && Object.defineProperty(o, "_fromString", {
            enumerable: !1,
            configurable: !1,
            writable: !1,
            value: function(e) {
                if (this._entries)
                    this._entries = {};
                else {
                    var t = [];
                    this.forEach((function(e, n) {
                        t.push(n)
                    }
                    ));
                    for (var n = 0; n < t.length; n++)
                        this.delete(t[n])
                }
                var r, o = (e = e.replace(/^\?/, "")).split("&");
                for (n = 0; n < o.length; n++)
                    r = o[n].split("="),
                    this.append(i(r[0]), r.length > 1 ? i(r[1]) : "")
            }
        })
    }(void 0 !== e ? e : "undefined" != typeof window ? window : "undefined" != typeof self ? self : e),
    function(e) {
        if (function() {
            try {
                var t = new e.URL("b","http://a");
                return t.pathname = "c d",
                "http://a/c%20d" === t.href && t.searchParams
            } catch (e) {
                return !1
            }
        }() || function() {
            var t = e.URL
              , n = function(t, n) {
                "string" != typeof t && (t = String(t));
                var r, i = document;
                if (n && (void 0 === e.location || n !== e.location.href)) {
                    (r = (i = document.implementation.createHTMLDocument("")).createElement("base")).href = n,
                    i.head.appendChild(r);
                    try {
                        if (0 !== r.href.indexOf(n))
                            throw new Error(r.href)
                    } catch (e) {
                        throw new Error("URL unable to set base " + n + " due to " + e)
                    }
                }
                var o = i.createElement("a");
                if (o.href = t,
                r && (i.body.appendChild(o),
                o.href = o.href),
                ":" === o.protocol || !/:/.test(o.href))
                    throw new TypeError("Invalid URL");
                Object.defineProperty(this, "_anchorElement", {
                    value: o
                });
                var a = new e.URLSearchParams(this.search)
                  , s = !0
                  , c = !0
                  , l = this;
                ["append", "delete", "set"].forEach((function(e) {
                    var t = a[e];
                    a[e] = function() {
                        t.apply(a, arguments),
                        s && (c = !1,
                        l.search = a.toString(),
                        c = !0)
                    }
                }
                )),
                Object.defineProperty(this, "searchParams", {
                    value: a,
                    enumerable: !0
                });
                var u = void 0;
                Object.defineProperty(this, "_updateSearchParams", {
                    enumerable: !1,
                    configurable: !1,
                    writable: !1,
                    value: function() {
                        this.search !== u && (u = this.search,
                        c && (s = !1,
                        this.searchParams._fromString(this.search),
                        s = !0))
                    }
                })
            }
              , r = n.prototype;
            ["hash", "host", "hostname", "port", "protocol"].forEach((function(e) {
                !function(e) {
                    Object.defineProperty(r, e, {
                        get: function() {
                            return this._anchorElement[e]
                        },
                        set: function(t) {
                            this._anchorElement[e] = t
                        },
                        enumerable: !0
                    })
                }(e)
            }
            )),
            Object.defineProperty(r, "search", {
                get: function() {
                    return this._anchorElement.search
                },
                set: function(e) {
                    this._anchorElement.search = e,
                    this._updateSearchParams()
                },
                enumerable: !0
            }),
            Object.defineProperties(r, {
                toString: {
                    get: function() {
                        var e = this;
                        return function() {
                            return e.href
                        }
                    }
                },
                href: {
                    get: function() {
                        return this._anchorElement.href.replace(/\?$/, "")
                    },
                    set: function(e) {
                        this._anchorElement.href = e,
                        this._updateSearchParams()
                    },
                    enumerable: !0
                },
                pathname: {
                    get: function() {
                        return this._anchorElement.pathname.replace(/(^\/?)/, "/")
                    },
                    set: function(e) {
                        this._anchorElement.pathname = e
                    },
                    enumerable: !0
                },
                origin: {
                    get: function() {
                        var e = {
                            "http:": 80,
                            "https:": 443,
                            "ftp:": 21
                        }[this._anchorElement.protocol]
                          , t = this._anchorElement.port != e && "" !== this._anchorElement.port;
                        return this._anchorElement.protocol + "//" + this._anchorElement.hostname + (t ? ":" + this._anchorElement.port : "")
                    },
                    enumerable: !0
                },
                password: {
                    get: function() {
                        return ""
                    },
                    set: function(e) {},
                    enumerable: !0
                },
                username: {
                    get: function() {
                        return ""
                    },
                    set: function(e) {},
                    enumerable: !0
                }
            }),
            n.createObjectURL = function(e) {
                return t.createObjectURL.apply(t, arguments)
            }
            ,
            n.revokeObjectURL = function(e) {
                return t.revokeObjectURL.apply(t, arguments)
            }
            ,
            e.URL = n
        }(),
        void 0 !== e.location && !("origin"in e.location)) {
            var t = function() {
                return e.location.protocol + "//" + e.location.hostname + (e.location.port ? ":" + e.location.port : "")
            };
            try {
                Object.defineProperty(e.location, "origin", {
                    get: t,
                    enumerable: !0
                })
            } catch (n) {
                setInterval((function() {
                    e.location.origin = t()
                }
                ), 100)
            }
        }
    }(void 0 !== e ? e : "undefined" != typeof window ? window : "undefined" != typeof self ? self : e);
    var Fa = De("isConcatSpreadable")
      , Da = Tr >= 51 || !i((function() {
        var e = [];
        return e[Fa] = !1,
        e.concat()[0] !== e
    }
    ))
      , Ba = xr("concat")
      , qa = function(e) {
        if (!m(e))
            return !1;
        var t = e[Fa];
        return void 0 !== t ? !!t : je(e)
    };
    Ce({
        target: "Array",
        proto: !0,
        forced: !Da || !Ba
    }, {
        concat: function(e) {
            var t, n, r, i, o, a = Re(this), s = qe(a, 0), c = 0;
            for (t = -1,
            r = arguments.length; t < r; t++)
                if (o = -1 === t ? a : arguments[t],
                qa(o)) {
                    if (c + (i = se(o.length)) > 9007199254740991)
                        throw TypeError("Maximum allowed index exceeded");
                    for (n = 0; n < i; n++,
                    c++)
                        n in o && ot(s, c, o[n])
                } else {
                    if (c >= 9007199254740991)
                        throw TypeError("Maximum allowed index exceeded");
                    ot(s, c++, o)
                }
            return s.length = c,
            s
        }
    });
    var Ha = function(e) {
        for (var t = Re(this), n = se(t.length), r = arguments.length, i = ue(r > 1 ? arguments[1] : void 0, n), o = r > 2 ? arguments[2] : void 0, a = void 0 === o ? n : ue(o, n); a > i; )
            t[i++] = e;
        return t
    };
    Ce({
        target: "Array",
        proto: !0
    }, {
        fill: Ha
    }),
    It("fill");
    var Va = Math.min
      , za = [].lastIndexOf
      , Wa = !!za && 1 / [1].lastIndexOf(1, -0) < 0
      , $a = We("lastIndexOf")
      , Ka = Ge("indexOf", {
        ACCESSORS: !0,
        1: 0
    })
      , Ya = Wa || !$a || !Ka ? function(e) {
        if (Wa)
            return za.apply(this, arguments) || 0;
        var t = g(this)
          , n = se(t.length)
          , r = n - 1;
        for (arguments.length > 1 && (r = Va(r, oe(arguments[1]))),
        r < 0 && (r = n + r); r >= 0; r--)
            if (r in t && t[r] === e)
                return r || 0;
        return -1
    }
    : za;
    Ce({
        target: "Array",
        proto: !0,
        forced: Ya !== [].lastIndexOf
    }, {
        lastIndexOf: Ya
    });
    var Ga = O.f
      , Xa = Function.prototype
      , Ja = Xa.toString
      , Qa = /^\s*function ([^ (]*)/;
    !o || "name"in Xa || Ga(Xa, "name", {
        configurable: !0,
        get: function() {
            try {
                return Ja.call(this).match(Qa)[1]
            } catch (e) {
                return ""
            }
        }
    });
    var Za, es, ts, ns = r.Promise, rs = De("species"), is = function(e) {
        var t = ne(e)
          , n = O.f;
        o && t && !t[rs] && n(t, rs, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }, os = t((function(e) {
        var t = function(e, t) {
            this.stopped = e,
            this.result = t
        };
        (e.exports = function(e, n, r, i, o) {
            var a, s, c, l, u, f, h, d = Ie(n, r, i ? 2 : 1);
            if (o)
                a = e;
            else {
                if ("function" != typeof (s = ht(e)))
                    throw TypeError("Target is not iterable");
                if (it(s)) {
                    for (c = 0,
                    l = se(e.length); l > c; c++)
                        if ((u = i ? d(A(h = e[c])[0], h[1]) : d(e[c])) && u instanceof t)
                            return u;
                    return new t(!1)
                }
                a = s.call(e)
            }
            for (f = a.next; !(h = f.call(a)).done; )
                if ("object" == typeof (u = et(a, d, h.value, i)) && u && u instanceof t)
                    return u;
            return new t(!1)
        }
        ).stop = function(e) {
            return new t(!0,e)
        }
    }
    )), as = /(iphone|ipod|ipad).*applewebkit/i.test(kr), ss = r.location, cs = r.setImmediate, ls = r.clearImmediate, us = r.process, fs = r.MessageChannel, hs = r.Dispatch, ds = 0, ps = {}, gs = function(e) {
        if (ps.hasOwnProperty(e)) {
            var t = ps[e];
            delete ps[e],
            t()
        }
    }, ms = function(e) {
        return function() {
            gs(e)
        }
    }, vs = function(e) {
        gs(e.data)
    }, ys = function(e) {
        r.postMessage(e + "", ss.protocol + "//" + ss.host)
    };
    cs && ls || (cs = function(e) {
        for (var t = [], n = 1; arguments.length > n; )
            t.push(arguments[n++]);
        return ps[++ds] = function() {
            ("function" == typeof e ? e : Function(e)).apply(void 0, t)
        }
        ,
        Za(ds),
        ds
    }
    ,
    ls = function(e) {
        delete ps[e]
    }
    ,
    "process" == f(us) ? Za = function(e) {
        us.nextTick(ms(e))
    }
    : hs && hs.now ? Za = function(e) {
        hs.now(ms(e))
    }
    : fs && !as ? (ts = (es = new fs).port2,
    es.port1.onmessage = vs,
    Za = Ie(ts.postMessage, ts, 1)) : !r.addEventListener || "function" != typeof postMessage || r.importScripts || i(ys) ? Za = "onreadystatechange"in E("script") ? function(e) {
        St.appendChild(E("script")).onreadystatechange = function() {
            St.removeChild(this),
            gs(e)
        }
    }
    : function(e) {
        setTimeout(ms(e), 0)
    }
    : (Za = ys,
    r.addEventListener("message", vs, !1)));
    var bs, ws, ks, Es, Ss, _s, Ts, As, xs = {
        set: cs,
        clear: ls
    }, Os = T.f, Cs = xs.set, Ps = r.MutationObserver || r.WebKitMutationObserver, Is = r.process, Rs = r.Promise, js = "process" == f(Is), Ls = Os(r, "queueMicrotask"), Ms = Ls && Ls.value;
    Ms || (bs = function() {
        var e, t;
        for (js && (e = Is.domain) && e.exit(); ws; ) {
            t = ws.fn,
            ws = ws.next;
            try {
                t()
            } catch (e) {
                throw ws ? Es() : ks = void 0,
                e
            }
        }
        ks = void 0,
        e && e.enter()
    }
    ,
    js ? Es = function() {
        Is.nextTick(bs)
    }
    : Ps && !as ? (Ss = !0,
    _s = document.createTextNode(""),
    new Ps(bs).observe(_s, {
        characterData: !0
    }),
    Es = function() {
        _s.data = Ss = !Ss
    }
    ) : Rs && Rs.resolve ? (Ts = Rs.resolve(void 0),
    As = Ts.then,
    Es = function() {
        As.call(Ts, bs)
    }
    ) : Es = function() {
        Cs.call(r, bs)
    }
    );
    var Ns, Us, Fs, Ds, Bs = Ms || function(e) {
        var t = {
            fn: e,
            next: void 0
        };
        ks && (ks.next = t),
        ws || (ws = t,
        Es()),
        ks = t
    }
    , qs = function(e) {
        var t, n;
        this.promise = new e((function(e, r) {
            if (void 0 !== t || void 0 !== n)
                throw TypeError("Bad Promise constructor");
            t = e,
            n = r
        }
        )),
        this.resolve = Pe(t),
        this.reject = Pe(n)
    }, Hs = {
        f: function(e) {
            return new qs(e)
        }
    }, Vs = function(e, t) {
        if (A(e),
        m(t) && t.constructor === e)
            return t;
        var n = Hs.f(e);
        return (0,
        n.resolve)(t),
        n.promise
    }, zs = function(e) {
        try {
            return {
                error: !1,
                value: e()
            }
        } catch (e) {
            return {
                error: !0,
                value: e
            }
        }
    }, Ws = xs.set, $s = De("species"), Ks = "Promise", Ys = Q.get, Gs = Q.set, Xs = Q.getterFor(Ks), Js = ns, Qs = r.TypeError, Zs = r.document, ec = r.process, tc = ne("fetch"), nc = Hs.f, rc = nc, ic = "process" == f(ec), oc = !!(Zs && Zs.createEvent && r.dispatchEvent), ac = xe(Ks, (function() {
        if (!(N(Js) !== String(Js))) {
            if (66 === Tr)
                return !0;
            if (!ic && "function" != typeof PromiseRejectionEvent)
                return !0
        }
        if (Tr >= 51 && /native code/.test(Js))
            return !1;
        var e = Js.resolve(1)
          , t = function(e) {
            e((function() {}
            ), (function() {}
            ))
        };
        return (e.constructor = {})[$s] = t,
        !(e.then((function() {}
        ))instanceof t)
    }
    )), sc = ac || !yt((function(e) {
        Js.all(e).catch((function() {}
        ))
    }
    )), cc = function(e) {
        var t;
        return !(!m(e) || "function" != typeof (t = e.then)) && t
    }, lc = function(e, t, n) {
        if (!t.notified) {
            t.notified = !0;
            var r = t.reactions;
            Bs((function() {
                for (var i = t.value, o = 1 == t.state, a = 0; r.length > a; ) {
                    var s, c, l, u = r[a++], f = o ? u.ok : u.fail, h = u.resolve, d = u.reject, p = u.domain;
                    try {
                        f ? (o || (2 === t.rejection && dc(e, t),
                        t.rejection = 1),
                        !0 === f ? s = i : (p && p.enter(),
                        s = f(i),
                        p && (p.exit(),
                        l = !0)),
                        s === u.promise ? d(Qs("Promise-chain cycle")) : (c = cc(s)) ? c.call(s, h, d) : h(s)) : d(i)
                    } catch (e) {
                        p && !l && p.exit(),
                        d(e)
                    }
                }
                t.reactions = [],
                t.notified = !1,
                n && !t.rejection && fc(e, t)
            }
            ))
        }
    }, uc = function(e, t, n) {
        var i, o;
        oc ? ((i = Zs.createEvent("Event")).promise = t,
        i.reason = n,
        i.initEvent(e, !1, !0),
        r.dispatchEvent(i)) : i = {
            promise: t,
            reason: n
        },
        (o = r["on" + e]) ? o(i) : "unhandledrejection" === e && function(e, t) {
            var n = r.console;
            n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t))
        }("Unhandled promise rejection", n)
    }, fc = function(e, t) {
        Ws.call(r, (function() {
            var n, r = t.value;
            if (hc(t) && (n = zs((function() {
                ic ? ec.emit("unhandledRejection", r, e) : uc("unhandledrejection", e, r)
            }
            )),
            t.rejection = ic || hc(t) ? 2 : 1,
            n.error))
                throw n.value
        }
        ))
    }, hc = function(e) {
        return 1 !== e.rejection && !e.parent
    }, dc = function(e, t) {
        Ws.call(r, (function() {
            ic ? ec.emit("rejectionHandled", e) : uc("rejectionhandled", e, t.value)
        }
        ))
    }, pc = function(e, t, n, r) {
        return function(i) {
            e(t, n, i, r)
        }
    }, gc = function(e, t, n, r) {
        t.done || (t.done = !0,
        r && (t = r),
        t.value = n,
        t.state = 2,
        lc(e, t, !0))
    }, mc = function(e, t, n, r) {
        if (!t.done) {
            t.done = !0,
            r && (t = r);
            try {
                if (e === n)
                    throw Qs("Promise can't be resolved itself");
                var i = cc(n);
                i ? Bs((function() {
                    var r = {
                        done: !1
                    };
                    try {
                        i.call(n, pc(mc, e, r, t), pc(gc, e, r, t))
                    } catch (n) {
                        gc(e, r, n, t)
                    }
                }
                )) : (t.value = n,
                t.state = 1,
                lc(e, t, !1))
            } catch (n) {
                gc(e, {
                    done: !1
                }, n, t)
            }
        }
    };
    ac && (Js = function(e) {
        _i(this, Js, Ks),
        Pe(e),
        Ns.call(this);
        var t = Ys(this);
        try {
            e(pc(mc, this, t), pc(gc, this, t))
        } catch (e) {
            gc(this, t, e)
        }
    }
    ,
    (Ns = function(e) {
        Gs(this, {
            type: Ks,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: 0,
            value: void 0
        })
    }
    ).prototype = Ni(Js.prototype, {
        then: function(e, t) {
            var n = Xs(this)
              , r = nc(fi(this, Js));
            return r.ok = "function" != typeof e || e,
            r.fail = "function" == typeof t && t,
            r.domain = ic ? ec.domain : void 0,
            n.parent = !0,
            n.reactions.push(r),
            0 != n.state && lc(this, n, !1),
            r.promise
        },
        catch: function(e) {
            return this.then(void 0, e)
        }
    }),
    Us = function() {
        var e = new Ns
          , t = Ys(e);
        this.promise = e,
        this.resolve = pc(mc, e, t),
        this.reject = pc(gc, e, t)
    }
    ,
    Hs.f = nc = function(e) {
        return e === Js || e === Fs ? new Us(e) : rc(e)
    }
    ,
    "function" == typeof ns && (Ds = ns.prototype.then,
    Z(ns.prototype, "then", (function(e, t) {
        var n = this;
        return new Js((function(e, t) {
            Ds.call(n, e, t)
        }
        )).then(e, t)
    }
    ), {
        unsafe: !0
    }),
    "function" == typeof tc && Ce({
        global: !0,
        enumerable: !0,
        forced: !0
    }, {
        fetch: function(e) {
            return Vs(Js, tc.apply(r, arguments))
        }
    }))),
    Ce({
        global: !0,
        wrap: !0,
        forced: ac
    }, {
        Promise: Js
    }),
    Zt(Js, Ks, !1),
    is(Ks),
    Fs = ne(Ks),
    Ce({
        target: Ks,
        stat: !0,
        forced: ac
    }, {
        reject: function(e) {
            var t = nc(this);
            return t.reject.call(void 0, e),
            t.promise
        }
    }),
    Ce({
        target: Ks,
        stat: !0,
        forced: ac
    }, {
        resolve: function(e) {
            return Vs(this, e)
        }
    }),
    Ce({
        target: Ks,
        stat: !0,
        forced: sc
    }, {
        all: function(e) {
            var t = this
              , n = nc(t)
              , r = n.resolve
              , i = n.reject
              , o = zs((function() {
                var n = Pe(t.resolve)
                  , o = []
                  , a = 0
                  , s = 1;
                os(e, (function(e) {
                    var c = a++
                      , l = !1;
                    o.push(void 0),
                    s++,
                    n.call(t, e).then((function(e) {
                        l || (l = !0,
                        o[c] = e,
                        --s || r(o))
                    }
                    ), i)
                }
                )),
                --s || r(o)
            }
            ));
            return o.error && i(o.value),
            n.promise
        },
        race: function(e) {
            var t = this
              , n = nc(t)
              , r = n.reject
              , i = zs((function() {
                var i = Pe(t.resolve);
                os(e, (function(e) {
                    i.call(t, e).then(n.resolve, r)
                }
                ))
            }
            ));
            return i.error && r(i.value),
            n.promise
        }
    });
    var vc = xr("splice")
      , yc = Ge("splice", {
        ACCESSORS: !0,
        0: 0,
        1: 2
    })
      , bc = Math.max
      , wc = Math.min;
    Ce({
        target: "Array",
        proto: !0,
        forced: !vc || !yc
    }, {
        splice: function(e, t) {
            var n, r, i, o, a, s, c = Re(this), l = se(c.length), u = ue(e, l), f = arguments.length;
            if (0 === f ? n = r = 0 : 1 === f ? (n = 0,
            r = l - u) : (n = f - 2,
            r = wc(bc(oe(t), 0), l - u)),
            l + n - r > 9007199254740991)
                throw TypeError("Maximum allowed length exceeded");
            for (i = qe(c, r),
            o = 0; o < r; o++)
                (a = u + o)in c && ot(i, o, c[a]);
            if (i.length = r,
            n < r) {
                for (o = u; o < l - r; o++)
                    s = o + n,
                    (a = o + r)in c ? c[s] = c[a] : delete c[s];
                for (o = l; o > l - r + n; o--)
                    delete c[o - 1]
            } else if (n > r)
                for (o = l - r; o > u; o--)
                    s = o + n - 1,
                    (a = o + r - 1)in c ? c[s] = c[a] : delete c[s];
            for (o = 0; o < n; o++)
                c[o + u] = arguments[o + 2];
            return c.length = l - r + n,
            i
        }
    }),
    ei("match", 1, (function(e, t, n) {
        return [function(t) {
            var n = p(this)
              , r = null == t ? void 0 : t[e];
            return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n))
        }
        , function(e) {
            var r = n(t, e, this);
            if (r.done)
                return r.value;
            var i = A(e)
              , o = String(this);
            if (!i.global)
                return ri(i, o);
            var a = i.unicode;
            i.lastIndex = 0;
            for (var s, c = [], l = 0; null !== (s = ri(i, o)); ) {
                var u = String(s[0]);
                c[l] = u,
                "" === u && (i.lastIndex = ni(o, se(i.lastIndex), a)),
                l++
            }
            return 0 === l ? null : c
        }
        ]
    }
    ));
    var kc = ze.filter
      , Ec = xr("filter")
      , Sc = Ge("filter");
    Ce({
        target: "Array",
        proto: !0,
        forced: !Ec || !Sc
    }, {
        filter: function(e) {
            return kc(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var _c = ze.map
      , Tc = xr("map")
      , Ac = Ge("map");
    Ce({
        target: "Array",
        proto: !0,
        forced: !Tc || !Ac
    }, {
        map: function(e) {
            return _c(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var xc = function(e) {
        return function(t, n, r, i) {
            Pe(n);
            var o = Re(t)
              , a = d(o)
              , s = se(o.length)
              , c = e ? s - 1 : 0
              , l = e ? -1 : 1;
            if (r < 2)
                for (; ; ) {
                    if (c in a) {
                        i = a[c],
                        c += l;
                        break
                    }
                    if (c += l,
                    e ? c < 0 : s <= c)
                        throw TypeError("Reduce of empty array with no initial value")
                }
            for (; e ? c >= 0 : s > c; c += l)
                c in a && (i = n(i, a[c], c, o));
            return i
        }
    }
      , Oc = {
        left: xc(!1),
        right: xc(!0)
    }
      , Cc = Oc.left
      , Pc = We("reduce")
      , Ic = Ge("reduce", {
        1: 0
    });
    Ce({
        target: "Array",
        proto: !0,
        forced: !Pc || !Ic
    }, {
        reduce: function(e) {
            return Cc(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Rc = Object.isFrozen
      , jc = i((function() {
        Rc(1)
    }
    ));
    Ce({
        target: "Object",
        stat: !0,
        forced: jc
    }, {
        isFrozen: function(e) {
            return !m(e) || !!Rc && Rc(e)
        }
    });
    var Lc = function(e, t, n) {
        var r, i;
        return rn && "function" == typeof (r = t.constructor) && r !== n && m(i = r.prototype) && i !== n.prototype && rn(e, i),
        e
    }
      , Mc = O.f
      , Nc = ve.f
      , Uc = Q.set
      , Fc = De("match")
      , Dc = r.RegExp
      , Bc = Dc.prototype
      , qc = /a/g
      , Hc = /a/g
      , Vc = new Dc(qc) !== qc
      , zc = Nr.UNSUPPORTED_Y;
    if (o && xe("RegExp", !Vc || zc || i((function() {
        return Hc[Fc] = !1,
        Dc(qc) != qc || Dc(Hc) == Hc || "/a/i" != Dc(qc, "i")
    }
    )))) {
        for (var Wc = function(e, t) {
            var n, r = this instanceof Wc, i = Nt(e), o = void 0 === t;
            if (!r && i && e.constructor === Wc && o)
                return e;
            Vc ? i && !o && (e = e.source) : e instanceof Wc && (o && (t = Lr.call(e)),
            e = e.source),
            zc && (n = !!t && t.indexOf("y") > -1) && (t = t.replace(/y/g, ""));
            var a = Lc(Vc ? new Dc(e,t) : Dc(e, t), r ? this : Bc, Wc);
            return zc && n && Uc(a, {
                sticky: n
            }),
            a
        }, $c = function(e) {
            e in Wc || Mc(Wc, e, {
                configurable: !0,
                get: function() {
                    return Dc[e]
                },
                set: function(t) {
                    Dc[e] = t
                }
            })
        }, Kc = Nc(Dc), Yc = 0; Kc.length > Yc; )
            $c(Kc[Yc++]);
        Bc.constructor = Wc,
        Wc.prototype = Bc,
        Z(r, "RegExp", Wc)
    }
    is("RegExp");
    var Gc, Xc = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView, Jc = O.f, Qc = r.Int8Array, Zc = Qc && Qc.prototype, el = r.Uint8ClampedArray, tl = el && el.prototype, nl = Qc && Kt(Qc), rl = Zc && Kt(Zc), il = Object.prototype, ol = il.isPrototypeOf, al = De("toStringTag"), sl = H("TYPED_ARRAY_TAG"), cl = Xc && !!rn && "Opera" !== ut(r.opera), ll = !1, ul = {
        Int8Array: 1,
        Uint8Array: 1,
        Uint8ClampedArray: 1,
        Int16Array: 2,
        Uint16Array: 2,
        Int32Array: 4,
        Uint32Array: 4,
        Float32Array: 4,
        Float64Array: 8
    }, fl = function(e) {
        return m(e) && b(ul, ut(e))
    };
    for (Gc in ul)
        r[Gc] || (cl = !1);
    if ((!cl || "function" != typeof nl || nl === Function.prototype) && (nl = function() {
        throw TypeError("Incorrect invocation")
    }
    ,
    cl))
        for (Gc in ul)
            r[Gc] && rn(r[Gc], nl);
    if ((!cl || !rl || rl === il) && (rl = nl.prototype,
    cl))
        for (Gc in ul)
            r[Gc] && rn(r[Gc].prototype, rl);
    if (cl && Kt(tl) !== rl && rn(tl, rl),
    o && !b(rl, al))
        for (Gc in ll = !0,
        Jc(rl, al, {
            get: function() {
                return m(this) ? this[sl] : void 0
            }
        }),
        ul)
            r[Gc] && C(r[Gc], sl, Gc);
    var hl = {
        NATIVE_ARRAY_BUFFER_VIEWS: cl,
        TYPED_ARRAY_TAG: ll && sl,
        aTypedArray: function(e) {
            if (fl(e))
                return e;
            throw TypeError("Target is not a typed array")
        },
        aTypedArrayConstructor: function(e) {
            if (rn) {
                if (ol.call(nl, e))
                    return e
            } else
                for (var t in ul)
                    if (b(ul, Gc)) {
                        var n = r[t];
                        if (n && (e === n || ol.call(n, e)))
                            return e
                    }
            throw TypeError("Target is not a typed array constructor")
        },
        exportTypedArrayMethod: function(e, t, n) {
            if (o) {
                if (n)
                    for (var i in ul) {
                        var a = r[i];
                        a && b(a.prototype, e) && delete a.prototype[e]
                    }
                rl[e] && !n || Z(rl, e, n ? t : cl && Zc[e] || t)
            }
        },
        exportTypedArrayStaticMethod: function(e, t, n) {
            var i, a;
            if (o) {
                if (rn) {
                    if (n)
                        for (i in ul)
                            (a = r[i]) && b(a, e) && delete a[e];
                    if (nl[e] && !n)
                        return;
                    try {
                        return Z(nl, e, n ? t : cl && Qc[e] || t)
                    } catch (e) {}
                }
                for (i in ul)
                    !(a = r[i]) || a[e] && !n || Z(a, e, t)
            }
        },
        isView: function(e) {
            var t = ut(e);
            return "DataView" === t || b(ul, t)
        },
        isTypedArray: fl,
        TypedArray: nl,
        TypedArrayPrototype: rl
    }
      , dl = hl.NATIVE_ARRAY_BUFFER_VIEWS
      , pl = r.ArrayBuffer
      , gl = r.Int8Array
      , ml = !dl || !i((function() {
        gl(1)
    }
    )) || !i((function() {
        new gl(-1)
    }
    )) || !yt((function(e) {
        new gl,
        new gl(null),
        new gl(1.5),
        new gl(e)
    }
    ), !0) || i((function() {
        return 1 !== new gl(new pl(2),1,void 0).length
    }
    ))
      , vl = function(e) {
        if (void 0 === e)
            return 0;
        var t = oe(e)
          , n = se(t);
        if (t !== n)
            throw RangeError("Wrong length or index");
        return n
    }
      , yl = Math.abs
      , bl = Math.pow
      , wl = Math.floor
      , kl = Math.log
      , El = Math.LN2
      , Sl = function(e, t, n) {
        var r, i, o, a = new Array(n), s = 8 * n - t - 1, c = (1 << s) - 1, l = c >> 1, u = 23 === t ? bl(2, -24) - bl(2, -77) : 0, f = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0, h = 0;
        for ((e = yl(e)) != e || e === 1 / 0 ? (i = e != e ? 1 : 0,
        r = c) : (r = wl(kl(e) / El),
        e * (o = bl(2, -r)) < 1 && (r--,
        o *= 2),
        (e += r + l >= 1 ? u / o : u * bl(2, 1 - l)) * o >= 2 && (r++,
        o /= 2),
        r + l >= c ? (i = 0,
        r = c) : r + l >= 1 ? (i = (e * o - 1) * bl(2, t),
        r += l) : (i = e * bl(2, l - 1) * bl(2, t),
        r = 0)); t >= 8; a[h++] = 255 & i,
        i /= 256,
        t -= 8)
            ;
        for (r = r << t | i,
        s += t; s > 0; a[h++] = 255 & r,
        r /= 256,
        s -= 8)
            ;
        return a[--h] |= 128 * f,
        a
    }
      , _l = function(e, t) {
        var n, r = e.length, i = 8 * r - t - 1, o = (1 << i) - 1, a = o >> 1, s = i - 7, c = r - 1, l = e[c--], u = 127 & l;
        for (l >>= 7; s > 0; u = 256 * u + e[c],
        c--,
        s -= 8)
            ;
        for (n = u & (1 << -s) - 1,
        u >>= -s,
        s += t; s > 0; n = 256 * n + e[c],
        c--,
        s -= 8)
            ;
        if (0 === u)
            u = 1 - a;
        else {
            if (u === o)
                return n ? NaN : l ? -1 / 0 : 1 / 0;
            n += bl(2, t),
            u -= a
        }
        return (l ? -1 : 1) * n * bl(2, u - t)
    }
      , Tl = ve.f
      , Al = O.f
      , xl = Q.get
      , Ol = Q.set
      , Cl = r.ArrayBuffer
      , Pl = Cl
      , Il = r.DataView
      , Rl = Il && Il.prototype
      , jl = Object.prototype
      , Ll = r.RangeError
      , Ml = Sl
      , Nl = _l
      , Ul = function(e) {
        return [255 & e]
    }
      , Fl = function(e) {
        return [255 & e, e >> 8 & 255]
    }
      , Dl = function(e) {
        return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
    }
      , Bl = function(e) {
        return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
    }
      , ql = function(e) {
        return Ml(e, 23, 4)
    }
      , Hl = function(e) {
        return Ml(e, 52, 8)
    }
      , Vl = function(e, t) {
        Al(e.prototype, t, {
            get: function() {
                return xl(this)[t]
            }
        })
    }
      , zl = function(e, t, n, r) {
        var i = vl(n)
          , o = xl(e);
        if (i + t > o.byteLength)
            throw Ll("Wrong index");
        var a = xl(o.buffer).bytes
          , s = i + o.byteOffset
          , c = a.slice(s, s + t);
        return r ? c : c.reverse()
    }
      , Wl = function(e, t, n, r, i, o) {
        var a = vl(n)
          , s = xl(e);
        if (a + t > s.byteLength)
            throw Ll("Wrong index");
        for (var c = xl(s.buffer).bytes, l = a + s.byteOffset, u = r(+i), f = 0; f < t; f++)
            c[l + f] = u[o ? f : t - f - 1]
    };
    if (Xc) {
        if (!i((function() {
            Cl(1)
        }
        )) || !i((function() {
            new Cl(-1)
        }
        )) || i((function() {
            return new Cl,
            new Cl(1.5),
            new Cl(NaN),
            "ArrayBuffer" != Cl.name
        }
        ))) {
            for (var $l, Kl = (Pl = function(e) {
                return _i(this, Pl),
                new Cl(vl(e))
            }
            ).prototype = Cl.prototype, Yl = Tl(Cl), Gl = 0; Yl.length > Gl; )
                ($l = Yl[Gl++])in Pl || C(Pl, $l, Cl[$l]);
            Kl.constructor = Pl
        }
        rn && Kt(Rl) !== jl && rn(Rl, jl);
        var Xl = new Il(new Pl(2))
          , Jl = Rl.setInt8;
        Xl.setInt8(0, 2147483648),
        Xl.setInt8(1, 2147483649),
        !Xl.getInt8(0) && Xl.getInt8(1) || Ni(Rl, {
            setInt8: function(e, t) {
                Jl.call(this, e, t << 24 >> 24)
            },
            setUint8: function(e, t) {
                Jl.call(this, e, t << 24 >> 24)
            }
        }, {
            unsafe: !0
        })
    } else
        Pl = function(e) {
            _i(this, Pl, "ArrayBuffer");
            var t = vl(e);
            Ol(this, {
                bytes: Ha.call(new Array(t), 0),
                byteLength: t
            }),
            o || (this.byteLength = t)
        }
        ,
        Il = function(e, t, n) {
            _i(this, Il, "DataView"),
            _i(e, Pl, "DataView");
            var r = xl(e).byteLength
              , i = oe(t);
            if (i < 0 || i > r)
                throw Ll("Wrong offset");
            if (i + (n = void 0 === n ? r - i : se(n)) > r)
                throw Ll("Wrong length");
            Ol(this, {
                buffer: e,
                byteLength: n,
                byteOffset: i
            }),
            o || (this.buffer = e,
            this.byteLength = n,
            this.byteOffset = i)
        }
        ,
        o && (Vl(Pl, "byteLength"),
        Vl(Il, "buffer"),
        Vl(Il, "byteLength"),
        Vl(Il, "byteOffset")),
        Ni(Il.prototype, {
            getInt8: function(e) {
                return zl(this, 1, e)[0] << 24 >> 24
            },
            getUint8: function(e) {
                return zl(this, 1, e)[0]
            },
            getInt16: function(e) {
                var t = zl(this, 2, e, arguments.length > 1 ? arguments[1] : void 0);
                return (t[1] << 8 | t[0]) << 16 >> 16
            },
            getUint16: function(e) {
                var t = zl(this, 2, e, arguments.length > 1 ? arguments[1] : void 0);
                return t[1] << 8 | t[0]
            },
            getInt32: function(e) {
                return Bl(zl(this, 4, e, arguments.length > 1 ? arguments[1] : void 0))
            },
            getUint32: function(e) {
                return Bl(zl(this, 4, e, arguments.length > 1 ? arguments[1] : void 0)) >>> 0
            },
            getFloat32: function(e) {
                return Nl(zl(this, 4, e, arguments.length > 1 ? arguments[1] : void 0), 23)
            },
            getFloat64: function(e) {
                return Nl(zl(this, 8, e, arguments.length > 1 ? arguments[1] : void 0), 52)
            },
            setInt8: function(e, t) {
                Wl(this, 1, e, Ul, t)
            },
            setUint8: function(e, t) {
                Wl(this, 1, e, Ul, t)
            },
            setInt16: function(e, t) {
                Wl(this, 2, e, Fl, t, arguments.length > 2 ? arguments[2] : void 0)
            },
            setUint16: function(e, t) {
                Wl(this, 2, e, Fl, t, arguments.length > 2 ? arguments[2] : void 0)
            },
            setInt32: function(e, t) {
                Wl(this, 4, e, Dl, t, arguments.length > 2 ? arguments[2] : void 0)
            },
            setUint32: function(e, t) {
                Wl(this, 4, e, Dl, t, arguments.length > 2 ? arguments[2] : void 0)
            },
            setFloat32: function(e, t) {
                Wl(this, 4, e, ql, t, arguments.length > 2 ? arguments[2] : void 0)
            },
            setFloat64: function(e, t) {
                Wl(this, 8, e, Hl, t, arguments.length > 2 ? arguments[2] : void 0)
            }
        });
    Zt(Pl, "ArrayBuffer"),
    Zt(Il, "DataView");
    var Ql = {
        ArrayBuffer: Pl,
        DataView: Il
    }
      , Zl = function(e, t) {
        var n = function(e) {
            var t = oe(e);
            if (t < 0)
                throw RangeError("The argument can't be less than 0");
            return t
        }(e);
        if (n % t)
            throw RangeError("Wrong offset");
        return n
    }
      , eu = hl.aTypedArrayConstructor
      , tu = function(e) {
        var t, n, r, i, o, a, s = Re(e), c = arguments.length, l = c > 1 ? arguments[1] : void 0, u = void 0 !== l, f = ht(s);
        if (null != f && !it(f))
            for (a = (o = f.call(s)).next,
            s = []; !(i = a.call(o)).done; )
                s.push(i.value);
        for (u && c > 2 && (l = Ie(l, arguments[2], 2)),
        n = se(s.length),
        r = new (eu(this))(n),
        t = 0; n > t; t++)
            r[t] = u ? l(s[t], t) : s[t];
        return r
    };
    t((function(e) {
        var t = ve.f
          , n = ze.forEach
          , i = Q.get
          , a = Q.set
          , s = O.f
          , c = T.f
          , u = Math.round
          , f = r.RangeError
          , h = Ql.ArrayBuffer
          , d = Ql.DataView
          , p = hl.NATIVE_ARRAY_BUFFER_VIEWS
          , g = hl.TYPED_ARRAY_TAG
          , y = hl.TypedArray
          , w = hl.TypedArrayPrototype
          , k = hl.aTypedArrayConstructor
          , E = hl.isTypedArray
          , S = function(e, t) {
            for (var n = 0, r = t.length, i = new (k(e))(r); r > n; )
                i[n] = t[n++];
            return i
        }
          , _ = function(e, t) {
            s(e, t, {
                get: function() {
                    return i(this)[t]
                }
            })
        }
          , A = function(e) {
            var t;
            return e instanceof h || "ArrayBuffer" == (t = ut(e)) || "SharedArrayBuffer" == t
        }
          , x = function(e, t) {
            return E(e) && "symbol" != typeof t && t in e && String(+t) == String(t)
        }
          , P = function(e, t) {
            return x(e, t = v(t, !0)) ? l(2, e[t]) : c(e, t)
        }
          , I = function(e, t, n) {
            return !(x(e, t = v(t, !0)) && m(n) && b(n, "value")) || b(n, "get") || b(n, "set") || n.configurable || b(n, "writable") && !n.writable || b(n, "enumerable") && !n.enumerable ? s(e, t, n) : (e[t] = n.value,
            e)
        };
        o ? (p || (T.f = P,
        O.f = I,
        _(w, "buffer"),
        _(w, "byteOffset"),
        _(w, "byteLength"),
        _(w, "length")),
        Ce({
            target: "Object",
            stat: !0,
            forced: !p
        }, {
            getOwnPropertyDescriptor: P,
            defineProperty: I
        }),
        e.exports = function(e, o, c) {
            var l = e.match(/\d+$/)[0] / 8
              , v = e + (c ? "Clamped" : "") + "Array"
              , b = "get" + e
              , k = "set" + e
              , _ = r[v]
              , T = _
              , x = T && T.prototype
              , O = {}
              , P = function(e, t) {
                s(e, t, {
                    get: function() {
                        return function(e, t) {
                            var n = i(e);
                            return n.view[b](t * l + n.byteOffset, !0)
                        }(this, t)
                    },
                    set: function(e) {
                        return function(e, t, n) {
                            var r = i(e);
                            c && (n = (n = u(n)) < 0 ? 0 : n > 255 ? 255 : 255 & n),
                            r.view[k](t * l + r.byteOffset, n, !0)
                        }(this, t, e)
                    },
                    enumerable: !0
                })
            };
            p ? ml && (T = o((function(e, t, n, r) {
                return _i(e, T, v),
                Lc(m(t) ? A(t) ? void 0 !== r ? new _(t,Zl(n, l),r) : void 0 !== n ? new _(t,Zl(n, l)) : new _(t) : E(t) ? S(T, t) : tu.call(T, t) : new _(vl(t)), e, T)
            }
            )),
            rn && rn(T, y),
            n(t(_), (function(e) {
                e in T || C(T, e, _[e])
            }
            )),
            T.prototype = x) : (T = o((function(e, t, n, r) {
                _i(e, T, v);
                var i, o, s, c = 0, u = 0;
                if (m(t)) {
                    if (!A(t))
                        return E(t) ? S(T, t) : tu.call(T, t);
                    i = t,
                    u = Zl(n, l);
                    var p = t.byteLength;
                    if (void 0 === r) {
                        if (p % l)
                            throw f("Wrong length");
                        if ((o = p - u) < 0)
                            throw f("Wrong length")
                    } else if ((o = se(r) * l) + u > p)
                        throw f("Wrong length");
                    s = o / l
                } else
                    s = vl(t),
                    i = new h(o = s * l);
                for (a(e, {
                    buffer: i,
                    byteOffset: u,
                    byteLength: o,
                    length: s,
                    view: new d(i)
                }); c < s; )
                    P(e, c++)
            }
            )),
            rn && rn(T, y),
            x = T.prototype = Ot(w)),
            x.constructor !== T && C(x, "constructor", T),
            g && C(x, g, v),
            O[v] = T,
            Ce({
                global: !0,
                forced: T != _,
                sham: !p
            }, O),
            "BYTES_PER_ELEMENT"in T || C(T, "BYTES_PER_ELEMENT", l),
            "BYTES_PER_ELEMENT"in x || C(x, "BYTES_PER_ELEMENT", l),
            is(v)
        }
        ) : e.exports = function() {}
    }
    ))("Uint16", (function(e) {
        return function(t, n, r) {
            return e(this, t, n, r)
        }
    }
    ));
    var nu = Math.min
      , ru = [].copyWithin || function(e, t) {
        var n = Re(this)
          , r = se(n.length)
          , i = ue(e, r)
          , o = ue(t, r)
          , a = arguments.length > 2 ? arguments[2] : void 0
          , s = nu((void 0 === a ? r : ue(a, r)) - o, r - i)
          , c = 1;
        for (o < i && i < o + s && (c = -1,
        o += s - 1,
        i += s - 1); s-- > 0; )
            o in n ? n[i] = n[o] : delete n[i],
            i += c,
            o += c;
        return n
    }
      , iu = hl.aTypedArray;
    (0,
    hl.exportTypedArrayMethod)("copyWithin", (function(e, t) {
        return ru.call(iu(this), e, t, arguments.length > 2 ? arguments[2] : void 0)
    }
    ));
    var ou = ze.every
      , au = hl.aTypedArray;
    (0,
    hl.exportTypedArrayMethod)("every", (function(e) {
        return ou(au(this), e, arguments.length > 1 ? arguments[1] : void 0)
    }
    ));
    var su = hl.aTypedArray;
    (0,
    hl.exportTypedArrayMethod)("fill", (function(e) {
        return Ha.apply(su(this), arguments)
    }
    ));
    var cu = ze.filter
      , lu = hl.aTypedArray
      , uu = hl.aTypedArrayConstructor;
    (0,
    hl.exportTypedArrayMethod)("filter", (function(e) {
        for (var t = cu(lu(this), e, arguments.length > 1 ? arguments[1] : void 0), n = fi(this, this.constructor), r = 0, i = t.length, o = new (uu(n))(i); i > r; )
            o[r] = t[r++];
        return o
    }
    ));
    var fu = ze.find
      , hu = hl.aTypedArray;
    (0,
    hl.exportTypedArrayMethod)("find", (function(e) {
        return fu(hu(this), e, arguments.length > 1 ? arguments[1] : void 0)
    }
    ));
    var du = ze.findIndex
      , pu = hl.aTypedArray;
    (0,
    hl.exportTypedArrayMethod)("findIndex", (function(e) {
        return du(pu(this), e, arguments.length > 1 ? arguments[1] : void 0)
    }
    ));
    var gu = ze.forEach
      , mu = hl.aTypedArray;
    (0,
    hl.exportTypedArrayMethod)("forEach", (function(e) {
        gu(mu(this), e, arguments.length > 1 ? arguments[1] : void 0)
    }
    ));
    var vu = he.includes
      , yu = hl.aTypedArray;
    (0,
    hl.exportTypedArrayMethod)("includes", (function(e) {
        return vu(yu(this), e, arguments.length > 1 ? arguments[1] : void 0)
    }
    ));
    var bu = he.indexOf
      , wu = hl.aTypedArray;
    (0,
    hl.exportTypedArrayMethod)("indexOf", (function(e) {
        return bu(wu(this), e, arguments.length > 1 ? arguments[1] : void 0)
    }
    ));
    var ku = De("iterator")
      , Eu = r.Uint8Array
      , Su = gr.values
      , _u = gr.keys
      , Tu = gr.entries
      , Au = hl.aTypedArray
      , xu = hl.exportTypedArrayMethod
      , Ou = Eu && Eu.prototype[ku]
      , Cu = !!Ou && ("values" == Ou.name || null == Ou.name)
      , Pu = function() {
        return Su.call(Au(this))
    };
    xu("entries", (function() {
        return Tu.call(Au(this))
    }
    )),
    xu("keys", (function() {
        return _u.call(Au(this))
    }
    )),
    xu("values", Pu, !Cu),
    xu(ku, Pu, !Cu);
    var Iu = hl.aTypedArray
      , Ru = [].join;
    (0,
    hl.exportTypedArrayMethod)("join", (function(e) {
        return Ru.apply(Iu(this), arguments)
    }
    ));
    var ju = hl.aTypedArray;
    (0,
    hl.exportTypedArrayMethod)("lastIndexOf", (function(e) {
        return Ya.apply(ju(this), arguments)
    }
    ));
    var Lu = ze.map
      , Mu = hl.aTypedArray
      , Nu = hl.aTypedArrayConstructor;
    (0,
    hl.exportTypedArrayMethod)("map", (function(e) {
        return Lu(Mu(this), e, arguments.length > 1 ? arguments[1] : void 0, (function(e, t) {
            return new (Nu(fi(e, e.constructor)))(t)
        }
        ))
    }
    ));
    var Uu = Oc.left
      , Fu = hl.aTypedArray;
    (0,
    hl.exportTypedArrayMethod)("reduce", (function(e) {
        return Uu(Fu(this), e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
    }
    ));
    var Du = Oc.right
      , Bu = hl.aTypedArray;
    (0,
    hl.exportTypedArrayMethod)("reduceRight", (function(e) {
        return Du(Bu(this), e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
    }
    ));
    var qu = hl.aTypedArray
      , Hu = hl.exportTypedArrayMethod
      , Vu = Math.floor;
    Hu("reverse", (function() {
        for (var e, t = qu(this).length, n = Vu(t / 2), r = 0; r < n; )
            e = this[r],
            this[r++] = this[--t],
            this[t] = e;
        return this
    }
    ));
    var zu = hl.aTypedArray;
    (0,
    hl.exportTypedArrayMethod)("set", (function(e) {
        zu(this);
        var t = Zl(arguments.length > 1 ? arguments[1] : void 0, 1)
          , n = this.length
          , r = Re(e)
          , i = se(r.length)
          , o = 0;
        if (i + t > n)
            throw RangeError("Wrong length");
        for (; o < i; )
            this[t + o] = r[o++]
    }
    ), i((function() {
        new Int8Array(1).set({})
    }
    )));
    var Wu = hl.aTypedArray
      , $u = hl.aTypedArrayConstructor
      , Ku = [].slice;
    (0,
    hl.exportTypedArrayMethod)("slice", (function(e, t) {
        for (var n = Ku.call(Wu(this), e, t), r = fi(this, this.constructor), i = 0, o = n.length, a = new ($u(r))(o); o > i; )
            a[i] = n[i++];
        return a
    }
    ), i((function() {
        new Int8Array(1).slice()
    }
    )));
    var Yu = ze.some
      , Gu = hl.aTypedArray;
    (0,
    hl.exportTypedArrayMethod)("some", (function(e) {
        return Yu(Gu(this), e, arguments.length > 1 ? arguments[1] : void 0)
    }
    ));
    var Xu = hl.aTypedArray
      , Ju = [].sort;
    (0,
    hl.exportTypedArrayMethod)("sort", (function(e) {
        return Ju.call(Xu(this), e)
    }
    ));
    var Qu = hl.aTypedArray;
    (0,
    hl.exportTypedArrayMethod)("subarray", (function(e, t) {
        var n = Qu(this)
          , r = n.length
          , i = ue(e, r);
        return new (fi(n, n.constructor))(n.buffer,n.byteOffset + i * n.BYTES_PER_ELEMENT,se((void 0 === t ? r : ue(t, r)) - i))
    }
    ));
    var Zu = r.Int8Array
      , ef = hl.aTypedArray
      , tf = hl.exportTypedArrayMethod
      , nf = [].toLocaleString
      , rf = [].slice
      , of = !!Zu && i((function() {
        nf.call(new Zu(1))
    }
    ));
    tf("toLocaleString", (function() {
        return nf.apply(of ? rf.call(ef(this)) : ef(this), arguments)
    }
    ), i((function() {
        return [1, 2].toLocaleString() != new Zu([1, 2]).toLocaleString()
    }
    )) || !i((function() {
        Zu.prototype.toLocaleString.call([1, 2])
    }
    )));
    var af = hl.exportTypedArrayMethod
      , sf = r.Uint8Array
      , cf = sf && sf.prototype || {}
      , lf = [].toString
      , uf = [].join;
    i((function() {
        lf.call({})
    }
    )) && (lf = function() {
        return uf.call(this)
    }
    );
    var ff = cf.toString != lf;
    af("toString", lf, ff);
    var hf = t((function(e, t) {
        function n(e, t) {
            for (var n = 0; n < e.length; ++n)
                if (e[n] === t)
                    return n;
            return -1
        }
        function r(e, t) {
            var r = []
              , i = [];
            return null == t && (t = function(e, t) {
                return r[0] === t ? "[Circular ~]" : "[Circular ~." + i.slice(0, n(r, t)).join(".") + "]"
            }
            ),
            function(o, a) {
                if (r.length > 0) {
                    var s = n(r, this);
                    ~s ? r.splice(s + 1) : r.push(this),
                    ~s ? i.splice(s, 1 / 0, o) : i.push(o),
                    ~n(r, a) && (a = t.call(this, o, a))
                } else
                    r.push(a);
                return null == e ? a instanceof Error ? function(e) {
                    var t = {
                        stack: e.stack,
                        message: e.message,
                        name: e.name
                    };
                    for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t
                }(a) : a : e.call(this, o, a)
            }
        }
        (e.exports = function(e, t, n, i) {
            return JSON.stringify(e, r(t, i), n)
        }
        ).getSerialize = r
    }
    ))
      , df = (hf.getSerialize,
    "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {});
    function pf(e) {
        return void 0 === e
    }
    function gf(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
    }
    function mf(e) {
        return "[object String]" === Object.prototype.toString.call(e)
    }
    function vf(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }
    function yf() {
        if (!("fetch"in df))
            return !1;
        try {
            return new Headers,
            new Request(""),
            new Response,
            !0
        } catch (e) {
            return !1
        }
    }
    function bf(e, t) {
        var n, r;
        if (pf(e.length))
            for (n in e)
                kf(e, n) && t.call(null, n, e[n]);
        else if (r = e.length)
            for (n = 0; n < r; n++)
                t.call(null, n, e[n])
    }
    function wf(e, t) {
        if ("number" != typeof t)
            throw new Error("2nd argument to `truncate` function should be a number");
        return "string" != typeof e || 0 === t ? e : e.length <= t ? e : e.substr(0, t) + "…"
    }
    function kf(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    function Ef(e) {
        for (var t, n = [], r = 0, i = e.length; r < i; r++)
            mf(t = e[r]) ? n.push(t.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")) : t && t.source && n.push(t.source);
        return new RegExp(n.join("|"),"i")
    }
    function Sf(e) {
        var t, n, r, i, o, a = [];
        if (!e || !e.tagName)
            return "";
        if (a.push(e.tagName.toLowerCase()),
        e.id && a.push("#" + e.id),
        (t = e.className) && mf(t))
            for (n = t.split(/\s+/),
            o = 0; o < n.length; o++)
                a.push("." + n[o]);
        var s = ["type", "name", "title", "alt"];
        for (o = 0; o < s.length; o++)
            r = s[o],
            (i = e.getAttribute(r)) && a.push("[" + r + '="' + i + '"]');
        return a.join("")
    }
    function _f(e, t) {
        return !!(!!e ^ !!t)
    }
    function Tf(e, t) {
        if (_f(e, t))
            return !1;
        var n, r, i = e.frames, o = t.frames;
        if (void 0 === i || void 0 === o)
            return !1;
        if (i.length !== o.length)
            return !1;
        for (var a = 0; a < i.length; a++)
            if (n = i[a],
            r = o[a],
            n.filename !== r.filename || n.lineno !== r.lineno || n.colno !== r.colno || n.function !== r.function)
                return !1;
        return !0
    }
    function Af(e) {
        return function(e) {
            return ~-encodeURI(e).split(/%..|./).length
        }(JSON.stringify(e))
    }
    function xf(e) {
        if ("string" == typeof e) {
            return wf(e, 40)
        }
        if ("number" == typeof e || "boolean" == typeof e || void 0 === e)
            return e;
        var t = Object.prototype.toString.call(e);
        return "[object Object]" === t ? "[Object]" : "[object Array]" === t ? "[Array]" : "[object Function]" === t ? e.name ? "[Function: " + e.name + "]" : "[Function]" : e
    }
    var Of = {
        isObject: function(e) {
            return "object" === Ca(e) && null !== e
        },
        isError: function(e) {
            switch (Object.prototype.toString.call(e)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return e instanceof Error
            }
        },
        isErrorEvent: function(e) {
            return "[object ErrorEvent]" === Object.prototype.toString.call(e)
        },
        isDOMError: function(e) {
            return "[object DOMError]" === Object.prototype.toString.call(e)
        },
        isDOMException: function(e) {
            return "[object DOMException]" === Object.prototype.toString.call(e)
        },
        isUndefined: pf,
        isFunction: function(e) {
            return "function" == typeof e
        },
        isPlainObject: gf,
        isString: mf,
        isArray: vf,
        isEmptyObject: function(e) {
            if (!gf(e))
                return !1;
            for (var t in e)
                if (e.hasOwnProperty(t))
                    return !1;
            return !0
        },
        supportsErrorEvent: function() {
            try {
                return new ErrorEvent(""),
                !0
            } catch (e) {
                return !1
            }
        },
        supportsDOMError: function() {
            try {
                return new DOMError(""),
                !0
            } catch (e) {
                return !1
            }
        },
        supportsDOMException: function() {
            try {
                return new DOMException(""),
                !0
            } catch (e) {
                return !1
            }
        },
        supportsFetch: yf,
        supportsReferrerPolicy: function() {
            if (!yf())
                return !1;
            try {
                return new Request("pickleRick",{
                    referrerPolicy: "origin"
                }),
                !0
            } catch (e) {
                return !1
            }
        },
        supportsPromiseRejectionEvent: function() {
            return "function" == typeof PromiseRejectionEvent
        },
        wrappedCallback: function(e) {
            return function(t, n) {
                var r = e(t) || t;
                return n && n(r) || r
            }
        },
        each: bf,
        objectMerge: function(e, t) {
            return t ? (bf(t, (function(t, n) {
                e[t] = n
            }
            )),
            e) : e
        },
        truncate: wf,
        objectFrozen: function(e) {
            return !!Object.isFrozen && Object.isFrozen(e)
        },
        hasKey: kf,
        joinRegExp: Ef,
        urlencode: function(e) {
            var t = [];
            return bf(e, (function(e, n) {
                t.push(encodeURIComponent(e) + "=" + encodeURIComponent(n))
            }
            )),
            t.join("&")
        },
        uuid4: function() {
            var e = df.crypto || df.msCrypto;
            if (!pf(e) && e.getRandomValues) {
                var t = new Uint16Array(8);
                e.getRandomValues(t),
                t[3] = 4095 & t[3] | 16384,
                t[4] = 16383 & t[4] | 32768;
                var n = function(e) {
                    for (var t = e.toString(16); t.length < 4; )
                        t = "0" + t;
                    return t
                };
                return n(t[0]) + n(t[1]) + n(t[2]) + n(t[3]) + n(t[4]) + n(t[5]) + n(t[6]) + n(t[7])
            }
            return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                var t = 16 * Math.random() | 0;
                return ("x" === e ? t : 3 & t | 8).toString(16)
            }
            ))
        },
        htmlTreeAsString: function(e) {
            for (var t, n = [], r = 0, i = 0, o = " > ".length; e && r++ < 5 && !("html" === (t = Sf(e)) || r > 1 && i + n.length * o + t.length >= 80); )
                n.push(t),
                i += t.length,
                e = e.parentNode;
            return n.reverse().join(" > ")
        },
        htmlElementAsString: Sf,
        isSameException: function(e, t) {
            return !_f(e, t) && (e = e.values[0],
            t = t.values[0],
            e.type === t.type && e.value === t.value && (n = e.stacktrace,
            r = t.stacktrace,
            (!pf(n) || !pf(r)) && Tf(e.stacktrace, t.stacktrace)));
            var n, r
        },
        isSameStacktrace: Tf,
        parseUrl: function(e) {
            if ("string" != typeof e)
                return {};
            var t = e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/)
              , n = t[6] || ""
              , r = t[8] || "";
            return {
                protocol: t[2],
                host: t[4],
                path: t[5],
                relative: t[5] + n + r
            }
        },
        fill: function(e, t, n, r) {
            if (null != e) {
                var i = e[t];
                e[t] = n(i),
                e[t].__raven__ = !0,
                e[t].__orig__ = i,
                r && r.push([e, t, i])
            }
        },
        safeJoin: function(e, t) {
            if (!vf(e))
                return "";
            for (var n = [], r = 0; r < e.length; r++)
                try {
                    n.push(String(e[r]))
                } catch (e) {
                    n.push("[value cannot be serialized]")
                }
            return n.join(t)
        },
        serializeException: function e(t, n, r) {
            if (!gf(t))
                return t;
            r = "number" != typeof (n = "number" != typeof n ? 3 : n) ? 51200 : r;
            var i = function e(t, n) {
                return 0 === n ? xf(t) : gf(t) ? Object.keys(t).reduce((function(r, i) {
                    return r[i] = e(t[i], n - 1),
                    r
                }
                ), {}) : Array.isArray(t) ? t.map((function(t) {
                    return e(t, n - 1)
                }
                )) : xf(t)
            }(t, n);
            return Af(hf(i)) > r ? e(t, n - 1) : i
        },
        serializeKeysForMessage: function(e, t) {
            if ("number" == typeof e || "string" == typeof e)
                return e.toString();
            if (!Array.isArray(e))
                return "";
            if (0 === (e = e.filter((function(e) {
                return "string" == typeof e
            }
            ))).length)
                return "[object has no keys]";
            if (t = "number" != typeof t ? 40 : t,
            e[0].length >= t)
                return e[0];
            for (var n = e.length; n > 0; n--) {
                var r = e.slice(0, n).join(", ");
                if (!(r.length > t))
                    return n === e.length ? r : r + "…"
            }
            return ""
        },
        sanitize: function(e, t) {
            if (!vf(t) || vf(t) && 0 === t.length)
                return e;
            var n, r = Ef(t);
            try {
                n = JSON.parse(hf(e))
            } catch (t) {
                return e
            }
            return function e(t) {
                return vf(t) ? t.map((function(t) {
                    return e(t)
                }
                )) : gf(t) ? Object.keys(t).reduce((function(n, i) {
                    return r.test(i) ? n[i] = "********" : n[i] = e(t[i]),
                    n
                }
                ), {}) : t
            }(n)
        }
    }
      , Cf = {
        collectWindowErrors: !0,
        debug: !1
    }
      , Pf = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}
      , If = [].slice
      , Rf = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;
    function jf() {
        return "undefined" == typeof document || null == document.location ? "" : document.location.href
    }
    Cf.report = function() {
        var e, t, n = [], r = null, i = null, o = null;
        function a(e, t) {
            var r = null;
            if (!t || Cf.collectWindowErrors) {
                for (var i in n)
                    if (n.hasOwnProperty(i))
                        try {
                            n[i].apply(null, [e].concat(If.call(arguments, 2)))
                        } catch (e) {
                            r = e
                        }
                if (r)
                    throw r
            }
        }
        function s(t, n, r, i, s) {
            var l = Of.isErrorEvent(s) ? s.error : s
              , u = Of.isErrorEvent(t) ? t.message : t;
            if (o)
                Cf.computeStackTrace.augmentStackTraceWithInitialElement(o, n, r, u),
                c();
            else if (l && Of.isError(l))
                a(Cf.computeStackTrace(l), !0);
            else {
                var f, h = {
                    url: n,
                    line: r,
                    column: i
                }, d = void 0;
                if ("[object String]" === {}.toString.call(u))
                    (f = u.match(Rf)) && (d = f[1],
                    u = f[2]);
                h.func = "?",
                a({
                    name: d,
                    message: u,
                    url: jf(),
                    stack: [h]
                }, !0)
            }
            return !!e && e.apply(this, arguments)
        }
        function c() {
            var e = o
              , t = r;
            r = null,
            o = null,
            i = null,
            a.apply(null, [e, !1].concat(t))
        }
        function l(e, t) {
            var n = If.call(arguments, 1);
            if (o) {
                if (i === e)
                    return;
                c()
            }
            var a = Cf.computeStackTrace(e);
            if (o = a,
            i = e,
            r = n,
            setTimeout((function() {
                i === e && c()
            }
            ), a.incomplete ? 2e3 : 0),
            !1 !== t)
                throw e
        }
        return l.subscribe = function(r) {
            !function() {
                if (t)
                    return;
                e = Pf.onerror,
                Pf.onerror = s,
                t = !0
            }(),
            n.push(r)
        }
        ,
        l.unsubscribe = function(e) {
            for (var t = n.length - 1; t >= 0; --t)
                n[t] === e && n.splice(t, 1)
        }
        ,
        l.uninstall = function() {
            !function() {
                if (!t)
                    return;
                Pf.onerror = e,
                t = !1,
                e = void 0
            }(),
            n = []
        }
        ,
        l
    }(),
    Cf.computeStackTrace = function() {
        function e(e) {
            if (void 0 !== e.stack && e.stack) {
                for (var t, n, r, i = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, o = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx(?:-web)|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, a = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i, s = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, c = /\((\S*)(?::(\d+))(?::(\d+))\)/, l = e.stack.split("\n"), u = [], f = (/^(.*) is undefined$/.exec(e.message),
                0), h = l.length; f < h; ++f) {
                    if (n = i.exec(l[f])) {
                        var d = n[2] && 0 === n[2].indexOf("native");
                        n[2] && 0 === n[2].indexOf("eval") && (t = c.exec(n[2])) && (n[2] = t[1],
                        n[3] = t[2],
                        n[4] = t[3]),
                        r = {
                            url: d ? null : n[2],
                            func: n[1] || "?",
                            args: d ? [n[2]] : [],
                            line: n[3] ? +n[3] : null,
                            column: n[4] ? +n[4] : null
                        }
                    } else if (n = o.exec(l[f]))
                        r = {
                            url: n[2],
                            func: n[1] || "?",
                            args: [],
                            line: +n[3],
                            column: n[4] ? +n[4] : null
                        };
                    else {
                        if (!(n = a.exec(l[f])))
                            continue;
                        n[3] && n[3].indexOf(" > eval") > -1 && (t = s.exec(n[3])) ? (n[3] = t[1],
                        n[4] = t[2],
                        n[5] = null) : 0 !== f || n[5] || void 0 === e.columnNumber || (u[0].column = e.columnNumber + 1),
                        r = {
                            url: n[3],
                            func: n[1] || "?",
                            args: n[2] ? n[2].split(",") : [],
                            line: n[4] ? +n[4] : null,
                            column: n[5] ? +n[5] : null
                        }
                    }
                    if (!r.func && r.line && (r.func = "?"),
                    r.url && "blob:" === r.url.substr(0, 5)) {
                        var p = new XMLHttpRequest;
                        if (p.open("GET", r.url, !1),
                        p.send(null),
                        200 === p.status) {
                            var g = p.responseText || ""
                              , m = (g = g.slice(-300)).match(/\/\/# sourceMappingURL=(.*)$/);
                            if (m) {
                                var v = m[1];
                                "~" === v.charAt(0) && (v = ("undefined" == typeof document || null == document.location ? "" : document.location.origin ? document.location.origin : document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "")) + v.slice(1)),
                                r.url = v.slice(0, -4)
                            }
                        }
                    }
                    u.push(r)
                }
                return u.length ? {
                    name: e.name,
                    message: e.message,
                    url: jf(),
                    stack: u
                } : null
            }
        }
        function t(e, t, n, r) {
            var i = {
                url: t,
                line: n
            };
            if (i.url && i.line) {
                if (e.incomplete = !1,
                i.func || (i.func = "?"),
                e.stack.length > 0 && e.stack[0].url === i.url) {
                    if (e.stack[0].line === i.line)
                        return !1;
                    if (!e.stack[0].line && e.stack[0].func === i.func)
                        return e.stack[0].line = i.line,
                        !1
                }
                return e.stack.unshift(i),
                e.partial = !0,
                !0
            }
            return e.incomplete = !0,
            !1
        }
        function n(e, i) {
            for (var o, a, s = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, c = [], l = {}, u = !1, f = n.caller; f && !u; f = f.caller)
                if (f !== r && f !== Cf.report) {
                    if (a = {
                        url: null,
                        func: "?",
                        line: null,
                        column: null
                    },
                    f.name ? a.func = f.name : (o = s.exec(f.toString())) && (a.func = o[1]),
                    void 0 === a.func)
                        try {
                            a.func = o.input.substring(0, o.input.indexOf("{"))
                        } catch (e) {}
                    l["" + f] ? u = !0 : l["" + f] = !0,
                    c.push(a)
                }
            i && c.splice(0, i);
            var h = {
                name: e.name,
                message: e.message,
                url: jf(),
                stack: c
            };
            return t(h, e.sourceURL || e.fileName, e.line || e.lineNumber, e.message || e.description),
            h
        }
        function r(t, r) {
            var i = null;
            r = null == r ? 0 : +r;
            try {
                if (i = e(t))
                    return i
            } catch (e) {
                if (Cf.debug)
                    throw e
            }
            try {
                if (i = n(t, r + 1))
                    return i
            } catch (e) {
                if (Cf.debug)
                    throw e
            }
            return {
                name: t.name,
                message: t.message,
                url: jf()
            }
        }
        return r.augmentStackTraceWithInitialElement = t,
        r.computeStackTraceFromStackProp = e,
        r
    }();
    var Lf = Cf;
    function Mf(e, t) {
        var n = (65535 & e) + (65535 & t);
        return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
    }
    function Nf(e, t, n, r, i, o) {
        return Mf((a = Mf(Mf(t, e), Mf(r, o))) << (s = i) | a >>> 32 - s, n);
        var a, s
    }
    function Uf(e, t, n, r, i, o, a) {
        return Nf(t & n | ~t & r, e, t, i, o, a)
    }
    function Ff(e, t, n, r, i, o, a) {
        return Nf(t & r | n & ~r, e, t, i, o, a)
    }
    function Df(e, t, n, r, i, o, a) {
        return Nf(t ^ n ^ r, e, t, i, o, a)
    }
    function Bf(e, t, n, r, i, o, a) {
        return Nf(n ^ (t | ~r), e, t, i, o, a)
    }
    function qf(e, t) {
        var n, r, i, o, a;
        e[t >> 5] |= 128 << t % 32,
        e[14 + (t + 64 >>> 9 << 4)] = t;
        var s = 1732584193
          , c = -271733879
          , l = -1732584194
          , u = 271733878;
        for (n = 0; n < e.length; n += 16)
            r = s,
            i = c,
            o = l,
            a = u,
            s = Uf(s, c, l, u, e[n], 7, -680876936),
            u = Uf(u, s, c, l, e[n + 1], 12, -389564586),
            l = Uf(l, u, s, c, e[n + 2], 17, 606105819),
            c = Uf(c, l, u, s, e[n + 3], 22, -1044525330),
            s = Uf(s, c, l, u, e[n + 4], 7, -176418897),
            u = Uf(u, s, c, l, e[n + 5], 12, 1200080426),
            l = Uf(l, u, s, c, e[n + 6], 17, -1473231341),
            c = Uf(c, l, u, s, e[n + 7], 22, -45705983),
            s = Uf(s, c, l, u, e[n + 8], 7, 1770035416),
            u = Uf(u, s, c, l, e[n + 9], 12, -1958414417),
            l = Uf(l, u, s, c, e[n + 10], 17, -42063),
            c = Uf(c, l, u, s, e[n + 11], 22, -1990404162),
            s = Uf(s, c, l, u, e[n + 12], 7, 1804603682),
            u = Uf(u, s, c, l, e[n + 13], 12, -40341101),
            l = Uf(l, u, s, c, e[n + 14], 17, -1502002290),
            s = Ff(s, c = Uf(c, l, u, s, e[n + 15], 22, 1236535329), l, u, e[n + 1], 5, -165796510),
            u = Ff(u, s, c, l, e[n + 6], 9, -1069501632),
            l = Ff(l, u, s, c, e[n + 11], 14, 643717713),
            c = Ff(c, l, u, s, e[n], 20, -373897302),
            s = Ff(s, c, l, u, e[n + 5], 5, -701558691),
            u = Ff(u, s, c, l, e[n + 10], 9, 38016083),
            l = Ff(l, u, s, c, e[n + 15], 14, -660478335),
            c = Ff(c, l, u, s, e[n + 4], 20, -405537848),
            s = Ff(s, c, l, u, e[n + 9], 5, 568446438),
            u = Ff(u, s, c, l, e[n + 14], 9, -1019803690),
            l = Ff(l, u, s, c, e[n + 3], 14, -187363961),
            c = Ff(c, l, u, s, e[n + 8], 20, 1163531501),
            s = Ff(s, c, l, u, e[n + 13], 5, -1444681467),
            u = Ff(u, s, c, l, e[n + 2], 9, -51403784),
            l = Ff(l, u, s, c, e[n + 7], 14, 1735328473),
            s = Df(s, c = Ff(c, l, u, s, e[n + 12], 20, -1926607734), l, u, e[n + 5], 4, -378558),
            u = Df(u, s, c, l, e[n + 8], 11, -2022574463),
            l = Df(l, u, s, c, e[n + 11], 16, 1839030562),
            c = Df(c, l, u, s, e[n + 14], 23, -35309556),
            s = Df(s, c, l, u, e[n + 1], 4, -1530992060),
            u = Df(u, s, c, l, e[n + 4], 11, 1272893353),
            l = Df(l, u, s, c, e[n + 7], 16, -155497632),
            c = Df(c, l, u, s, e[n + 10], 23, -1094730640),
            s = Df(s, c, l, u, e[n + 13], 4, 681279174),
            u = Df(u, s, c, l, e[n], 11, -358537222),
            l = Df(l, u, s, c, e[n + 3], 16, -722521979),
            c = Df(c, l, u, s, e[n + 6], 23, 76029189),
            s = Df(s, c, l, u, e[n + 9], 4, -640364487),
            u = Df(u, s, c, l, e[n + 12], 11, -421815835),
            l = Df(l, u, s, c, e[n + 15], 16, 530742520),
            s = Bf(s, c = Df(c, l, u, s, e[n + 2], 23, -995338651), l, u, e[n], 6, -198630844),
            u = Bf(u, s, c, l, e[n + 7], 10, 1126891415),
            l = Bf(l, u, s, c, e[n + 14], 15, -1416354905),
            c = Bf(c, l, u, s, e[n + 5], 21, -57434055),
            s = Bf(s, c, l, u, e[n + 12], 6, 1700485571),
            u = Bf(u, s, c, l, e[n + 3], 10, -1894986606),
            l = Bf(l, u, s, c, e[n + 10], 15, -1051523),
            c = Bf(c, l, u, s, e[n + 1], 21, -2054922799),
            s = Bf(s, c, l, u, e[n + 8], 6, 1873313359),
            u = Bf(u, s, c, l, e[n + 15], 10, -30611744),
            l = Bf(l, u, s, c, e[n + 6], 15, -1560198380),
            c = Bf(c, l, u, s, e[n + 13], 21, 1309151649),
            s = Bf(s, c, l, u, e[n + 4], 6, -145523070),
            u = Bf(u, s, c, l, e[n + 11], 10, -1120210379),
            l = Bf(l, u, s, c, e[n + 2], 15, 718787259),
            c = Bf(c, l, u, s, e[n + 9], 21, -343485551),
            s = Mf(s, r),
            c = Mf(c, i),
            l = Mf(l, o),
            u = Mf(u, a);
        return [s, c, l, u]
    }
    function Hf(e) {
        var t, n = "", r = 32 * e.length;
        for (t = 0; t < r; t += 8)
            n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
        return n
    }
    function Vf(e) {
        var t, n = [];
        for (n[(e.length >> 2) - 1] = void 0,
        t = 0; t < n.length; t += 1)
            n[t] = 0;
        var r = 8 * e.length;
        for (t = 0; t < r; t += 8)
            n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
        return n
    }
    function zf(e) {
        var t, n, r = "";
        for (n = 0; n < e.length; n += 1)
            t = e.charCodeAt(n),
            r += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t);
        return r
    }
    function Wf(e) {
        return unescape(encodeURIComponent(e))
    }
    function $f(e) {
        return function(e) {
            return Hf(qf(Vf(e), 8 * e.length))
        }(Wf(e))
    }
    function Kf(e, t) {
        return function(e, t) {
            var n, r, i = Vf(e), o = [], a = [];
            for (o[15] = a[15] = void 0,
            i.length > 16 && (i = qf(i, 8 * e.length)),
            n = 0; n < 16; n += 1)
                o[n] = 909522486 ^ i[n],
                a[n] = 1549556828 ^ i[n];
            return r = qf(o.concat(Vf(t)), 512 + 8 * t.length),
            Hf(qf(a.concat(r), 640))
        }(Wf(e), Wf(t))
    }
    var Yf = function(e, t, n) {
        return t ? n ? Kf(t, e) : zf(Kf(t, e)) : n ? $f(e) : zf($f(e))
    };
    function Gf(e) {
        this.name = "RavenConfigError",
        this.message = e
    }
    Gf.prototype = new Error,
    Gf.prototype.constructor = Gf;
    var Xf = Gf
      , Jf = function(e, t, n) {
        var r = e[t]
          , i = e;
        if (t in e) {
            var o = "warn" === t ? "warning" : t;
            e[t] = function() {
                var e = [].slice.call(arguments)
                  , a = Of.safeJoin(e, " ")
                  , s = {
                    level: o,
                    logger: "console",
                    extra: {
                        arguments: e
                    }
                };
                "assert" === t ? !1 === e[0] && (a = "Assertion failed: " + (Of.safeJoin(e.slice(1), " ") || "console.assert"),
                s.extra.arguments = e.slice(1),
                n && n(a, s)) : n && n(a, s),
                r && Function.prototype.apply.call(r, i, e)
            }
        }
    }
      , Qf = Of.isErrorEvent
      , Zf = Of.isDOMError
      , eh = Of.isDOMException
      , th = Of.isError
      , nh = Of.isObject
      , rh = Of.isPlainObject
      , ih = Of.isUndefined
      , oh = Of.isFunction
      , ah = Of.isString
      , sh = Of.isArray
      , ch = Of.isEmptyObject
      , lh = Of.each
      , uh = Of.objectMerge
      , fh = Of.truncate
      , hh = Of.objectFrozen
      , dh = Of.hasKey
      , ph = Of.joinRegExp
      , gh = Of.urlencode
      , mh = Of.uuid4
      , vh = Of.htmlTreeAsString
      , yh = Of.isSameException
      , bh = Of.isSameStacktrace
      , wh = Of.parseUrl
      , kh = Of.fill
      , Eh = Of.supportsFetch
      , Sh = Of.supportsReferrerPolicy
      , _h = Of.serializeKeysForMessage
      , Th = Of.serializeException
      , Ah = Of.sanitize
      , xh = Jf
      , Oh = "source protocol user pass host port path".split(" ")
      , Ch = /^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/;
    function Ph() {
        return +new Date
    }
    var Ih = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}
      , Rh = Ih.document
      , jh = Ih.navigator;
    function Lh(e, t) {
        return oh(t) ? function(n) {
            return t(n, e)
        }
        : t
    }
    function Mh() {
        for (var e in this._hasJSON = !("object" !== ("undefined" == typeof JSON ? "undefined" : Ca(JSON)) || !JSON.stringify),
        this._hasDocument = !ih(Rh),
        this._hasNavigator = !ih(jh),
        this._lastCapturedException = null,
        this._lastData = null,
        this._lastEventId = null,
        this._globalServer = null,
        this._globalKey = null,
        this._globalProject = null,
        this._globalContext = {},
        this._globalOptions = {
            release: Ih.SENTRY_RELEASE && Ih.SENTRY_RELEASE.id,
            logger: "javascript",
            ignoreErrors: [],
            ignoreUrls: [],
            whitelistUrls: [],
            includePaths: [],
            headers: null,
            collectWindowErrors: !0,
            captureUnhandledRejections: !0,
            maxMessageLength: 0,
            maxUrlLength: 250,
            stackTraceLimit: 50,
            autoBreadcrumbs: !0,
            instrument: !0,
            sampleRate: 1,
            sanitizeKeys: []
        },
        this._fetchDefaults = {
            method: "POST",
            referrerPolicy: Sh() ? "origin" : ""
        },
        this._ignoreOnError = 0,
        this._isRavenInstalled = !1,
        this._originalErrorStackTraceLimit = Error.stackTraceLimit,
        this._originalConsole = Ih.console || {},
        this._originalConsoleMethods = {},
        this._plugins = [],
        this._startTime = Ph(),
        this._wrappedBuiltIns = [],
        this._breadcrumbs = [],
        this._lastCapturedEvent = null,
        this._keypressTimeout,
        this._location = Ih.location,
        this._lastHref = this._location && this._location.href,
        this._resetBackoff(),
        this._originalConsole)
            this._originalConsoleMethods[e] = this._originalConsole[e]
    }
    Mh.prototype = {
        VERSION: "3.27.2",
        debug: !1,
        TraceKit: Lf,
        config: function(e, t) {
            var n = this;
            if (n._globalServer)
                return this._logDebug("error", "Error: Raven has already been configured"),
                n;
            if (!e)
                return n;
            var r = n._globalOptions;
            t && lh(t, (function(e, t) {
                "tags" === e || "extra" === e || "user" === e ? n._globalContext[e] = t : r[e] = t
            }
            )),
            n.setDSN(e),
            r.ignoreErrors.push(/^Script error\.?$/),
            r.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/),
            r.ignoreErrors = ph(r.ignoreErrors),
            r.ignoreUrls = !!r.ignoreUrls.length && ph(r.ignoreUrls),
            r.whitelistUrls = !!r.whitelistUrls.length && ph(r.whitelistUrls),
            r.includePaths = ph(r.includePaths),
            r.maxBreadcrumbs = Math.max(0, Math.min(r.maxBreadcrumbs || 100, 100));
            var i = {
                xhr: !0,
                console: !0,
                dom: !0,
                location: !0,
                sentry: !0
            }
              , o = r.autoBreadcrumbs;
            "[object Object]" === {}.toString.call(o) ? o = uh(i, o) : !1 !== o && (o = i),
            r.autoBreadcrumbs = o;
            var a = {
                tryCatch: !0
            }
              , s = r.instrument;
            return "[object Object]" === {}.toString.call(s) ? s = uh(a, s) : !1 !== s && (s = a),
            r.instrument = s,
            Lf.collectWindowErrors = !!r.collectWindowErrors,
            n
        },
        install: function() {
            var e = this;
            return e.isSetup() && !e._isRavenInstalled && (Lf.report.subscribe((function() {
                e._handleOnErrorStackInfo.apply(e, arguments)
            }
            )),
            e._globalOptions.captureUnhandledRejections && e._attachPromiseRejectionHandler(),
            e._patchFunctionToString(),
            e._globalOptions.instrument && e._globalOptions.instrument.tryCatch && e._instrumentTryCatch(),
            e._globalOptions.autoBreadcrumbs && e._instrumentBreadcrumbs(),
            e._drainPlugins(),
            e._isRavenInstalled = !0),
            Error.stackTraceLimit = e._globalOptions.stackTraceLimit,
            this
        },
        setDSN: function(e) {
            var t = this._parseDSN(e)
              , n = t.path.lastIndexOf("/")
              , r = t.path.substr(1, n);
            this._dsn = e,
            this._globalKey = t.user,
            this._globalSecret = t.pass && t.pass.substr(1),
            this._globalProject = t.path.substr(n + 1),
            this._globalServer = this._getGlobalServer(t),
            this._globalEndpoint = this._globalServer + "/" + r + "api/" + this._globalProject + "/store/",
            this._resetBackoff()
        },
        context: function(e, t, n) {
            return oh(e) && (n = t || [],
            t = e,
            e = {}),
            this.wrap(e, t).apply(this, n)
        },
        wrap: function(e, t, n) {
            var r = this;
            if (ih(t) && !oh(e))
                return e;
            if (oh(e) && (t = e,
            e = void 0),
            !oh(t))
                return t;
            try {
                if (t.__raven__)
                    return t;
                if (t.__raven_wrapper__)
                    return t.__raven_wrapper__
            } catch (e) {
                return t
            }
            function i() {
                var i = []
                  , o = arguments.length
                  , a = !e || e && !1 !== e.deep;
                for (n && oh(n) && n.apply(this, arguments); o--; )
                    i[o] = a ? r.wrap(e, arguments[o]) : arguments[o];
                try {
                    return t.apply(this, i)
                } catch (t) {
                    throw r._ignoreNextOnError(),
                    r.captureException(t, e),
                    t
                }
            }
            for (var o in t)
                dh(t, o) && (i[o] = t[o]);
            return i.prototype = t.prototype,
            t.__raven_wrapper__ = i,
            i.__raven__ = !0,
            i.__orig__ = t,
            i
        },
        uninstall: function() {
            return Lf.report.uninstall(),
            this._detachPromiseRejectionHandler(),
            this._unpatchFunctionToString(),
            this._restoreBuiltIns(),
            this._restoreConsole(),
            Error.stackTraceLimit = this._originalErrorStackTraceLimit,
            this._isRavenInstalled = !1,
            this
        },
        _promiseRejectionHandler: function(e) {
            this._logDebug("debug", "Raven caught unhandled promise rejection:", e),
            this.captureException(e.reason, {
                mechanism: {
                    type: "onunhandledrejection",
                    handled: !1
                }
            })
        },
        _attachPromiseRejectionHandler: function() {
            return this._promiseRejectionHandler = this._promiseRejectionHandler.bind(this),
            Ih.addEventListener && Ih.addEventListener("unhandledrejection", this._promiseRejectionHandler),
            this
        },
        _detachPromiseRejectionHandler: function() {
            return Ih.removeEventListener && Ih.removeEventListener("unhandledrejection", this._promiseRejectionHandler),
            this
        },
        captureException: function(e, t) {
            if (t = uh({
                trimHeadFrames: 0
            }, t || {}),
            Qf(e) && e.error)
                e = e.error;
            else {
                if (Zf(e) || eh(e)) {
                    var n = e.name || (Zf(e) ? "DOMError" : "DOMException")
                      , r = e.message ? n + ": " + e.message : n;
                    return this.captureMessage(r, uh(t, {
                        stacktrace: !0,
                        trimHeadFrames: t.trimHeadFrames + 1
                    }))
                }
                if (th(e))
                    e = e;
                else {
                    if (!rh(e))
                        return this.captureMessage(e, uh(t, {
                            stacktrace: !0,
                            trimHeadFrames: t.trimHeadFrames + 1
                        }));
                    t = this._getCaptureExceptionOptionsFromPlainObject(t, e),
                    e = new Error(t.message)
                }
            }
            this._lastCapturedException = e;
            try {
                var i = Lf.computeStackTrace(e);
                this._handleStackInfo(i, t)
            } catch (t) {
                if (e !== t)
                    throw t
            }
            return this
        },
        _getCaptureExceptionOptionsFromPlainObject: function(e, t) {
            var n = Object.keys(t).sort()
              , r = uh(e, {
                message: "Non-Error exception captured with keys: " + _h(n),
                fingerprint: [Yf(n)],
                extra: e.extra || {}
            });
            return r.extra.__serialized__ = Th(t),
            r
        },
        captureMessage: function(e, t) {
            if (!this._globalOptions.ignoreErrors.test || !this._globalOptions.ignoreErrors.test(e)) {
                var n, r = uh({
                    message: e += ""
                }, t = t || {});
                try {
                    throw new Error(e)
                } catch (e) {
                    n = e
                }
                n.name = null;
                var i = Lf.computeStackTrace(n)
                  , o = sh(i.stack) && i.stack[1];
                o && "Raven.captureException" === o.func && (o = i.stack[2]);
                var a = o && o.url || "";
                if ((!this._globalOptions.ignoreUrls.test || !this._globalOptions.ignoreUrls.test(a)) && (!this._globalOptions.whitelistUrls.test || this._globalOptions.whitelistUrls.test(a))) {
                    if (this._globalOptions.stacktrace || t.stacktrace || "" === r.message) {
                        r.fingerprint = null == r.fingerprint ? e : r.fingerprint,
                        (t = uh({
                            trimHeadFrames: 0
                        }, t)).trimHeadFrames += 1;
                        var s = this._prepareFrames(i, t);
                        r.stacktrace = {
                            frames: s.reverse()
                        }
                    }
                    return r.fingerprint && (r.fingerprint = sh(r.fingerprint) ? r.fingerprint : [r.fingerprint]),
                    this._send(r),
                    this
                }
            }
        },
        captureBreadcrumb: function(e) {
            var t = uh({
                timestamp: Ph() / 1e3
            }, e);
            if (oh(this._globalOptions.breadcrumbCallback)) {
                var n = this._globalOptions.breadcrumbCallback(t);
                if (nh(n) && !ch(n))
                    t = n;
                else if (!1 === n)
                    return this
            }
            return this._breadcrumbs.push(t),
            this._breadcrumbs.length > this._globalOptions.maxBreadcrumbs && this._breadcrumbs.shift(),
            this
        },
        addPlugin: function(e) {
            var t = [].slice.call(arguments, 1);
            return this._plugins.push([e, t]),
            this._isRavenInstalled && this._drainPlugins(),
            this
        },
        setUserContext: function(e) {
            return this._globalContext.user = e,
            this
        },
        setExtraContext: function(e) {
            return this._mergeContext("extra", e),
            this
        },
        setTagsContext: function(e) {
            return this._mergeContext("tags", e),
            this
        },
        clearContext: function() {
            return this._globalContext = {},
            this
        },
        getContext: function() {
            return JSON.parse(hf(this._globalContext))
        },
        setEnvironment: function(e) {
            return this._globalOptions.environment = e,
            this
        },
        setRelease: function(e) {
            return this._globalOptions.release = e,
            this
        },
        setDataCallback: function(e) {
            var t = this._globalOptions.dataCallback;
            return this._globalOptions.dataCallback = Lh(t, e),
            this
        },
        setBreadcrumbCallback: function(e) {
            var t = this._globalOptions.breadcrumbCallback;
            return this._globalOptions.breadcrumbCallback = Lh(t, e),
            this
        },
        setShouldSendCallback: function(e) {
            var t = this._globalOptions.shouldSendCallback;
            return this._globalOptions.shouldSendCallback = Lh(t, e),
            this
        },
        setTransport: function(e) {
            return this._globalOptions.transport = e,
            this
        },
        lastException: function() {
            return this._lastCapturedException
        },
        lastEventId: function() {
            return this._lastEventId
        },
        isSetup: function() {
            return !!this._hasJSON && (!!this._globalServer || (this.ravenNotConfiguredError || (this.ravenNotConfiguredError = !0,
            this._logDebug("error", "Error: Raven has not been configured.")),
            !1))
        },
        afterLoad: function() {
            var e = Ih.RavenConfig;
            e && this.config(e.dsn, e.config).install()
        },
        showReportDialog: function(e) {
            if (Rh) {
                if (!(e = uh({
                    eventId: this.lastEventId(),
                    dsn: this._dsn,
                    user: this._globalContext.user || {}
                }, e)).eventId)
                    throw new Xf("Missing eventId");
                if (!e.dsn)
                    throw new Xf("Missing DSN");
                var t = encodeURIComponent
                  , n = [];
                for (var r in e)
                    if ("user" === r) {
                        var i = e.user;
                        i.name && n.push("name=" + t(i.name)),
                        i.email && n.push("email=" + t(i.email))
                    } else
                        n.push(t(r) + "=" + t(e[r]));
                var o = this._getGlobalServer(this._parseDSN(e.dsn))
                  , a = Rh.createElement("script");
                a.async = !0,
                a.src = o + "/api/embed/error-page/?" + n.join("&"),
                (Rh.head || Rh.body).appendChild(a)
            }
        },
        _ignoreNextOnError: function() {
            var e = this;
            this._ignoreOnError += 1,
            setTimeout((function() {
                e._ignoreOnError -= 1
            }
            ))
        },
        _triggerEvent: function(e, t) {
            var n, r;
            if (this._hasDocument) {
                for (r in t = t || {},
                e = "raven" + e.substr(0, 1).toUpperCase() + e.substr(1),
                Rh.createEvent ? (n = Rh.createEvent("HTMLEvents")).initEvent(e, !0, !0) : (n = Rh.createEventObject()).eventType = e,
                t)
                    dh(t, r) && (n[r] = t[r]);
                if (Rh.createEvent)
                    Rh.dispatchEvent(n);
                else
                    try {
                        Rh.fireEvent("on" + n.eventType.toLowerCase(), n)
                    } catch (e) {}
            }
        },
        _breadcrumbEventHandler: function(e) {
            var t = this;
            return function(n) {
                if (t._keypressTimeout = null,
                t._lastCapturedEvent !== n) {
                    var r;
                    t._lastCapturedEvent = n;
                    try {
                        r = vh(n.target)
                    } catch (e) {
                        r = "<unknown>"
                    }
                    t.captureBreadcrumb({
                        category: "ui." + e,
                        message: r
                    })
                }
            }
        },
        _keypressEventHandler: function() {
            var e = this;
            return function(t) {
                var n;
                try {
                    n = t.target
                } catch (e) {
                    return
                }
                var r = n && n.tagName;
                if (r && ("INPUT" === r || "TEXTAREA" === r || n.isContentEditable)) {
                    var i = e._keypressTimeout;
                    i || e._breadcrumbEventHandler("input")(t),
                    clearTimeout(i),
                    e._keypressTimeout = setTimeout((function() {
                        e._keypressTimeout = null
                    }
                    ), 1e3)
                }
            }
        },
        _captureUrlChange: function(e, t) {
            var n = wh(this._location.href)
              , r = wh(t)
              , i = wh(e);
            this._lastHref = t,
            n.protocol === r.protocol && n.host === r.host && (t = r.relative),
            n.protocol === i.protocol && n.host === i.host && (e = i.relative),
            this.captureBreadcrumb({
                category: "navigation",
                data: {
                    to: t,
                    from: e
                }
            })
        },
        _patchFunctionToString: function() {
            var e = this;
            e._originalFunctionToString = Function.prototype.toString,
            Function.prototype.toString = function() {
                return "function" == typeof this && this.__raven__ ? e._originalFunctionToString.apply(this.__orig__, arguments) : e._originalFunctionToString.apply(this, arguments)
            }
        },
        _unpatchFunctionToString: function() {
            this._originalFunctionToString && (Function.prototype.toString = this._originalFunctionToString)
        },
        _instrumentTryCatch: function() {
            var e = this
              , t = e._wrappedBuiltIns;
            function n(t) {
                return function(n, r) {
                    for (var i = new Array(arguments.length), o = 0; o < i.length; ++o)
                        i[o] = arguments[o];
                    var a = i[0];
                    return oh(a) && (i[0] = e.wrap({
                        mechanism: {
                            type: "instrument",
                            data: {
                                function: t.name || "<anonymous>"
                            }
                        }
                    }, a)),
                    t.apply ? t.apply(this, i) : t(i[0], i[1])
                }
            }
            var r = this._globalOptions.autoBreadcrumbs;
            function i(n) {
                var i = Ih[n] && Ih[n].prototype;
                i && i.hasOwnProperty && i.hasOwnProperty("addEventListener") && (kh(i, "addEventListener", (function(t) {
                    return function(i, o, a, s) {
                        try {
                            o && o.handleEvent && (o.handleEvent = e.wrap({
                                mechanism: {
                                    type: "instrument",
                                    data: {
                                        target: n,
                                        function: "handleEvent",
                                        handler: o && o.name || "<anonymous>"
                                    }
                                }
                            }, o.handleEvent))
                        } catch (e) {}
                        var c, l, u;
                        return r && r.dom && ("EventTarget" === n || "Node" === n) && (l = e._breadcrumbEventHandler("click"),
                        u = e._keypressEventHandler(),
                        c = function(e) {
                            if (e) {
                                var t;
                                try {
                                    t = e.type
                                } catch (e) {
                                    return
                                }
                                return "click" === t ? l(e) : "keypress" === t ? u(e) : void 0
                            }
                        }
                        ),
                        t.call(this, i, e.wrap({
                            mechanism: {
                                type: "instrument",
                                data: {
                                    target: n,
                                    function: "addEventListener",
                                    handler: o && o.name || "<anonymous>"
                                }
                            }
                        }, o, c), a, s)
                    }
                }
                ), t),
                kh(i, "removeEventListener", (function(e) {
                    return function(t, n, r, i) {
                        try {
                            n = n && (n.__raven_wrapper__ ? n.__raven_wrapper__ : n)
                        } catch (e) {}
                        return e.call(this, t, n, r, i)
                    }
                }
                ), t))
            }
            kh(Ih, "setTimeout", n, t),
            kh(Ih, "setInterval", n, t),
            Ih.requestAnimationFrame && kh(Ih, "requestAnimationFrame", (function(t) {
                return function(n) {
                    return t(e.wrap({
                        mechanism: {
                            type: "instrument",
                            data: {
                                function: "requestAnimationFrame",
                                handler: t && t.name || "<anonymous>"
                            }
                        }
                    }, n))
                }
            }
            ), t);
            for (var o = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"], a = 0; a < o.length; a++)
                i(o[a])
        },
        _instrumentBreadcrumbs: function() {
            var e = this
              , t = this._globalOptions.autoBreadcrumbs
              , n = e._wrappedBuiltIns;
            function r(t, n) {
                t in n && oh(n[t]) && kh(n, t, (function(n) {
                    return e.wrap({
                        mechanism: {
                            type: "instrument",
                            data: {
                                function: t,
                                handler: n && n.name || "<anonymous>"
                            }
                        }
                    }, n)
                }
                ))
            }
            if (t.xhr && "XMLHttpRequest"in Ih) {
                var i = Ih.XMLHttpRequest && Ih.XMLHttpRequest.prototype;
                kh(i, "open", (function(t) {
                    return function(n, r) {
                        return ah(r) && -1 === r.indexOf(e._globalKey) && (this.__raven_xhr = {
                            method: n,
                            url: r,
                            status_code: null
                        }),
                        t.apply(this, arguments)
                    }
                }
                ), n),
                kh(i, "send", (function(t) {
                    return function() {
                        var n = this;
                        function i() {
                            if (n.__raven_xhr && 4 === n.readyState) {
                                try {
                                    n.__raven_xhr.status_code = n.status
                                } catch (e) {}
                                e.captureBreadcrumb({
                                    type: "http",
                                    category: "xhr",
                                    data: n.__raven_xhr
                                })
                            }
                        }
                        for (var o = ["onload", "onerror", "onprogress"], a = 0; a < o.length; a++)
                            r(o[a], n);
                        return "onreadystatechange"in n && oh(n.onreadystatechange) ? kh(n, "onreadystatechange", (function(t) {
                            return e.wrap({
                                mechanism: {
                                    type: "instrument",
                                    data: {
                                        function: "onreadystatechange",
                                        handler: t && t.name || "<anonymous>"
                                    }
                                }
                            }, t, i)
                        }
                        )) : n.onreadystatechange = i,
                        t.apply(this, arguments)
                    }
                }
                ), n)
            }
            t.xhr && Eh() && kh(Ih, "fetch", (function(t) {
                return function() {
                    for (var n = new Array(arguments.length), r = 0; r < n.length; ++r)
                        n[r] = arguments[r];
                    var i, o = n[0], a = "GET";
                    if ("string" == typeof o ? i = o : "Request"in Ih && o instanceof Ih.Request ? (i = o.url,
                    o.method && (a = o.method)) : i = "" + o,
                    -1 !== i.indexOf(e._globalKey))
                        return t.apply(this, n);
                    n[1] && n[1].method && (a = n[1].method);
                    var s = {
                        method: a,
                        url: i,
                        status_code: null
                    };
                    return t.apply(this, n).then((function(t) {
                        return s.status_code = t.status,
                        e.captureBreadcrumb({
                            type: "http",
                            category: "fetch",
                            data: s
                        }),
                        t
                    }
                    )).catch((function(t) {
                        throw e.captureBreadcrumb({
                            type: "http",
                            category: "fetch",
                            data: s,
                            level: "error"
                        }),
                        t
                    }
                    ))
                }
            }
            ), n),
            t.dom && this._hasDocument && (Rh.addEventListener ? (Rh.addEventListener("click", e._breadcrumbEventHandler("click"), !1),
            Rh.addEventListener("keypress", e._keypressEventHandler(), !1)) : Rh.attachEvent && (Rh.attachEvent("onclick", e._breadcrumbEventHandler("click")),
            Rh.attachEvent("onkeypress", e._keypressEventHandler())));
            var o = Ih.chrome
              , a = !(o && o.app && o.app.runtime) && Ih.history && Ih.history.pushState && Ih.history.replaceState;
            if (t.location && a) {
                var s = Ih.onpopstate;
                Ih.onpopstate = function() {
                    var t = e._location.href;
                    if (e._captureUrlChange(e._lastHref, t),
                    s)
                        return s.apply(this, arguments)
                }
                ;
                var c = function(t) {
                    return function() {
                        var n = arguments.length > 2 ? arguments[2] : void 0;
                        return n && e._captureUrlChange(e._lastHref, n + ""),
                        t.apply(this, arguments)
                    }
                };
                kh(Ih.history, "pushState", c, n),
                kh(Ih.history, "replaceState", c, n)
            }
            if (t.console && "console"in Ih && console.log) {
                var l = function(t, n) {
                    e.captureBreadcrumb({
                        message: t,
                        level: n.level,
                        category: "console"
                    })
                };
                lh(["debug", "info", "warn", "error", "log"], (function(e, t) {
                    xh(console, t, l)
                }
                ))
            }
        },
        _restoreBuiltIns: function() {
            for (var e; this._wrappedBuiltIns.length; ) {
                var t = (e = this._wrappedBuiltIns.shift())[0]
                  , n = e[1]
                  , r = e[2];
                t[n] = r
            }
        },
        _restoreConsole: function() {
            for (var e in this._originalConsoleMethods)
                this._originalConsole[e] = this._originalConsoleMethods[e]
        },
        _drainPlugins: function() {
            var e = this;
            lh(this._plugins, (function(t, n) {
                var r = n[0]
                  , i = n[1];
                r.apply(e, [e].concat(i))
            }
            ))
        },
        _parseDSN: function(e) {
            var t = Ch.exec(e)
              , n = {}
              , r = 7;
            try {
                for (; r--; )
                    n[Oh[r]] = t[r] || ""
            } catch (t) {
                throw new Xf("Invalid DSN: " + e)
            }
            if (n.pass && !this._globalOptions.allowSecretKey)
                throw new Xf("Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key");
            return n
        },
        _getGlobalServer: function(e) {
            var t = "//" + e.host + (e.port ? ":" + e.port : "");
            return e.protocol && (t = e.protocol + ":" + t),
            t
        },
        _handleOnErrorStackInfo: function(e, t) {
            (t = t || {}).mechanism = t.mechanism || {
                type: "onerror",
                handled: !1
            },
            this._ignoreOnError || this._handleStackInfo(e, t)
        },
        _handleStackInfo: function(e, t) {
            var n = this._prepareFrames(e, t);
            this._triggerEvent("handle", {
                stackInfo: e,
                options: t
            }),
            this._processException(e.name, e.message, e.url, e.lineno, n, t)
        },
        _prepareFrames: function(e, t) {
            var n = this
              , r = [];
            if (e.stack && e.stack.length && (lh(e.stack, (function(t, i) {
                var o = n._normalizeFrame(i, e.url);
                o && r.push(o)
            }
            )),
            t && t.trimHeadFrames))
                for (var i = 0; i < t.trimHeadFrames && i < r.length; i++)
                    r[i].in_app = !1;
            return r = r.slice(0, this._globalOptions.stackTraceLimit)
        },
        _normalizeFrame: function(e, t) {
            var n = {
                filename: e.url,
                lineno: e.line,
                colno: e.column,
                function: e.func || "?"
            };
            return e.url || (n.filename = t),
            n.in_app = !(this._globalOptions.includePaths.test && !this._globalOptions.includePaths.test(n.filename) || /(Raven|TraceKit)\./.test(n.function) || /raven\.(min\.)?js$/.test(n.filename)),
            n
        },
        _processException: function(e, t, n, r, i, o) {
            var a, s = (e ? e + ": " : "") + (t || "");
            if ((!this._globalOptions.ignoreErrors.test || !this._globalOptions.ignoreErrors.test(t) && !this._globalOptions.ignoreErrors.test(s)) && (i && i.length ? (n = i[0].filename || n,
            i.reverse(),
            a = {
                frames: i
            }) : n && (a = {
                frames: [{
                    filename: n,
                    lineno: r,
                    in_app: !0
                }]
            }),
            (!this._globalOptions.ignoreUrls.test || !this._globalOptions.ignoreUrls.test(n)) && (!this._globalOptions.whitelistUrls.test || this._globalOptions.whitelistUrls.test(n)))) {
                var c = uh({
                    exception: {
                        values: [{
                            type: e,
                            value: t,
                            stacktrace: a
                        }]
                    },
                    transaction: n
                }, o)
                  , l = c.exception.values[0];
                null == l.type && "" === l.value && (l.value = "Unrecoverable error caught"),
                !c.exception.mechanism && c.mechanism && (c.exception.mechanism = c.mechanism,
                delete c.mechanism),
                c.exception.mechanism = uh({
                    type: "generic",
                    handled: !0
                }, c.exception.mechanism || {}),
                this._send(c)
            }
        },
        _trimPacket: function(e) {
            var t = this._globalOptions.maxMessageLength;
            if (e.message && (e.message = fh(e.message, t)),
            e.exception) {
                var n = e.exception.values[0];
                n.value = fh(n.value, t)
            }
            var r = e.request;
            return r && (r.url && (r.url = fh(r.url, this._globalOptions.maxUrlLength)),
            r.Referer && (r.Referer = fh(r.Referer, this._globalOptions.maxUrlLength))),
            e.breadcrumbs && e.breadcrumbs.values && this._trimBreadcrumbs(e.breadcrumbs),
            e
        },
        _trimBreadcrumbs: function(e) {
            for (var t, n, r, i = ["to", "from", "url"], o = 0; o < e.values.length; ++o)
                if ((n = e.values[o]).hasOwnProperty("data") && nh(n.data) && !hh(n.data)) {
                    r = uh({}, n.data);
                    for (var a = 0; a < i.length; ++a)
                        t = i[a],
                        r.hasOwnProperty(t) && r[t] && (r[t] = fh(r[t], this._globalOptions.maxUrlLength));
                    e.values[o].data = r
                }
        },
        _getHttpData: function() {
            if (this._hasNavigator || this._hasDocument) {
                var e = {};
                return this._hasNavigator && jh.userAgent && (e.headers = {
                    "User-Agent": jh.userAgent
                }),
                Ih.location && Ih.location.href && (e.url = Ih.location.href),
                this._hasDocument && Rh.referrer && (e.headers || (e.headers = {}),
                e.headers.Referer = Rh.referrer),
                e
            }
        },
        _resetBackoff: function() {
            this._backoffDuration = 0,
            this._backoffStart = null
        },
        _shouldBackoff: function() {
            return this._backoffDuration && Ph() - this._backoffStart < this._backoffDuration
        },
        _isRepeatData: function(e) {
            var t = this._lastData;
            return !(!t || e.message !== t.message || e.transaction !== t.transaction) && (e.stacktrace || t.stacktrace ? bh(e.stacktrace, t.stacktrace) : e.exception || t.exception ? yh(e.exception, t.exception) : !e.fingerprint && !t.fingerprint || Boolean(e.fingerprint && t.fingerprint) && JSON.stringify(e.fingerprint) === JSON.stringify(t.fingerprint))
        },
        _setBackoffState: function(e) {
            if (!this._shouldBackoff()) {
                var t = e.status;
                if (400 === t || 401 === t || 429 === t) {
                    var n;
                    try {
                        n = Eh() ? e.headers.get("Retry-After") : e.getResponseHeader("Retry-After"),
                        n = 1e3 * parseInt(n, 10)
                    } catch (e) {}
                    this._backoffDuration = n || (2 * this._backoffDuration || 1e3),
                    this._backoffStart = Ph()
                }
            }
        },
        _send: function(e) {
            var t = this._globalOptions
              , n = {
                project: this._globalProject,
                logger: t.logger,
                platform: "javascript"
            }
              , r = this._getHttpData();
            r && (n.request = r),
            e.trimHeadFrames && delete e.trimHeadFrames,
            (e = uh(n, e)).tags = uh(uh({}, this._globalContext.tags), e.tags),
            e.extra = uh(uh({}, this._globalContext.extra), e.extra),
            e.extra["session:duration"] = Ph() - this._startTime,
            this._breadcrumbs && this._breadcrumbs.length > 0 && (e.breadcrumbs = {
                values: [].slice.call(this._breadcrumbs, 0)
            }),
            this._globalContext.user && (e.user = this._globalContext.user),
            t.environment && (e.environment = t.environment),
            t.release && (e.release = t.release),
            t.serverName && (e.server_name = t.serverName),
            e = this._sanitizeData(e),
            Object.keys(e).forEach((function(t) {
                (null == e[t] || "" === e[t] || ch(e[t])) && delete e[t]
            }
            )),
            oh(t.dataCallback) && (e = t.dataCallback(e) || e),
            e && !ch(e) && (oh(t.shouldSendCallback) && !t.shouldSendCallback(e) || (this._shouldBackoff() ? this._logDebug("warn", "Raven dropped error due to backoff: ", e) : "number" == typeof t.sampleRate ? Math.random() < t.sampleRate && this._sendProcessedPayload(e) : this._sendProcessedPayload(e)))
        },
        _sanitizeData: function(e) {
            return Ah(e, this._globalOptions.sanitizeKeys)
        },
        _getUuid: function() {
            return mh()
        },
        _sendProcessedPayload: function(e, t) {
            var n = this
              , r = this._globalOptions;
            if (this.isSetup())
                if (e = this._trimPacket(e),
                this._globalOptions.allowDuplicates || !this._isRepeatData(e)) {
                    this._lastEventId = e.event_id || (e.event_id = this._getUuid()),
                    this._lastData = e,
                    this._logDebug("debug", "Raven about to send:", e);
                    var i = {
                        sentry_version: "7",
                        sentry_client: "raven-js/" + this.VERSION,
                        sentry_key: this._globalKey
                    };
                    this._globalSecret && (i.sentry_secret = this._globalSecret);
                    var o = e.exception && e.exception.values[0];
                    this._globalOptions.autoBreadcrumbs && this._globalOptions.autoBreadcrumbs.sentry && this.captureBreadcrumb({
                        category: "sentry",
                        message: o ? (o.type ? o.type + ": " : "") + o.value : e.message,
                        event_id: e.event_id,
                        level: e.level || "error"
                    });
                    var a = this._globalEndpoint;
                    (r.transport || this._makeRequest).call(this, {
                        url: a,
                        auth: i,
                        data: e,
                        options: r,
                        onSuccess: function() {
                            n._resetBackoff(),
                            n._triggerEvent("success", {
                                data: e,
                                src: a
                            }),
                            t && t()
                        },
                        onError: function(r) {
                            n._logDebug("error", "Raven transport failed to send: ", r),
                            r.request && n._setBackoffState(r.request),
                            n._triggerEvent("failure", {
                                data: e,
                                src: a
                            }),
                            r = r || new Error("Raven send failed (no additional details provided)"),
                            t && t(r)
                        }
                    })
                } else
                    this._logDebug("warn", "Raven dropped repeat event: ", e)
        },
        _makeRequest: function(e) {
            var t = e.url + "?" + gh(e.auth)
              , n = null
              , r = {};
            if (e.options.headers && (n = this._evaluateHash(e.options.headers)),
            e.options.fetchParameters && (r = this._evaluateHash(e.options.fetchParameters)),
            Eh()) {
                r.body = hf(e.data);
                var i = uh({}, this._fetchDefaults)
                  , o = uh(i, r);
                return n && (o.headers = n),
                Ih.fetch(t, o).then((function(t) {
                    if (t.ok)
                        e.onSuccess && e.onSuccess();
                    else {
                        var n = new Error("Sentry error code: " + t.status);
                        n.request = t,
                        e.onError && e.onError(n)
                    }
                }
                )).catch((function() {
                    e.onError && e.onError(new Error("Sentry error code: network unavailable"))
                }
                ))
            }
            var a = Ih.XMLHttpRequest && new Ih.XMLHttpRequest;
            a && (("withCredentials"in a || "undefined" != typeof XDomainRequest) && ("withCredentials"in a ? a.onreadystatechange = function() {
                if (4 === a.readyState)
                    if (200 === a.status)
                        e.onSuccess && e.onSuccess();
                    else if (e.onError) {
                        var t = new Error("Sentry error code: " + a.status);
                        t.request = a,
                        e.onError(t)
                    }
            }
            : (a = new XDomainRequest,
            t = t.replace(/^https?:/, ""),
            e.onSuccess && (a.onload = e.onSuccess),
            e.onError && (a.onerror = function() {
                var t = new Error("Sentry error code: XDomainRequest");
                t.request = a,
                e.onError(t)
            }
            )),
            a.open("POST", t),
            n && lh(n, (function(e, t) {
                a.setRequestHeader(e, t)
            }
            )),
            a.send(hf(e.data))))
        },
        _evaluateHash: function(e) {
            var t = {};
            for (var n in e)
                if (e.hasOwnProperty(n)) {
                    var r = e[n];
                    t[n] = "function" == typeof r ? r() : r
                }
            return t
        },
        _logDebug: function(e) {
            this._originalConsoleMethods[e] && (this.debug || this._globalOptions.debug) && Function.prototype.apply.call(this._originalConsoleMethods[e], this._originalConsole, [].slice.call(arguments, 1))
        },
        _mergeContext: function(e, t) {
            ih(t) ? delete this._globalContext[e] : this._globalContext[e] = uh(this._globalContext[e] || {}, t)
        }
    },
    Mh.prototype.setUser = Mh.prototype.setUserContext,
    Mh.prototype.setReleaseContext = Mh.prototype.setRelease;
    var Nh = Mh
      , Uh = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}
      , Fh = Uh.Raven
      , Dh = new Nh;
    Dh.noConflict = function() {
        return Uh.Raven = Fh,
        Dh
    }
    ,
    Dh.afterLoad();
    var Bh = Dh
      , qh = Nh;
    Bh.Client = qh;
    var Hh = ze.find
      , Vh = !0
      , zh = Ge("find");
    "find"in [] && Array(1).find((function() {
        Vh = !1
    }
    )),
    Ce({
        target: "Array",
        proto: !0,
        forced: Vh || !zh
    }, {
        find: function(e) {
            return Hh(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }),
    It("find");
    var Wh = "[\t\n\v\f\r                　\u2028\u2029\ufeff]"
      , $h = RegExp("^" + Wh + Wh + "*")
      , Kh = RegExp(Wh + Wh + "*$")
      , Yh = function(e) {
        return function(t) {
            var n = String(p(t));
            return 1 & e && (n = n.replace($h, "")),
            2 & e && (n = n.replace(Kh, "")),
            n
        }
    }
      , Gh = {
        start: Yh(1),
        end: Yh(2),
        trim: Yh(3)
    }
      , Xh = ve.f
      , Jh = T.f
      , Qh = O.f
      , Zh = Gh.trim
      , ed = r.Number
      , td = ed.prototype
      , nd = "Number" == f(Ot(td))
      , rd = function(e) {
        var t, n, r, i, o, a, s, c, l = v(e, !1);
        if ("string" == typeof l && l.length > 2)
            if (43 === (t = (l = Zh(l)).charCodeAt(0)) || 45 === t) {
                if (88 === (n = l.charCodeAt(2)) || 120 === n)
                    return NaN
            } else if (48 === t) {
                switch (l.charCodeAt(1)) {
                case 66:
                case 98:
                    r = 2,
                    i = 49;
                    break;
                case 79:
                case 111:
                    r = 8,
                    i = 55;
                    break;
                default:
                    return +l
                }
                for (a = (o = l.slice(2)).length,
                s = 0; s < a; s++)
                    if ((c = o.charCodeAt(s)) < 48 || c > i)
                        return NaN;
                return parseInt(o, r)
            }
        return +l
    };
    if (xe("Number", !ed(" 0o1") || !ed("0b1") || ed("+0x1"))) {
        for (var id, od = function(e) {
            var t = arguments.length < 1 ? 0 : e
              , n = this;
            return n instanceof od && (nd ? i((function() {
                td.valueOf.call(n)
            }
            )) : "Number" != f(n)) ? Lc(new ed(rd(t)), n, od) : rd(t)
        }, ad = o ? Xh(ed) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), sd = 0; ad.length > sd; sd++)
            b(ed, id = ad[sd]) && !b(od, id) && Qh(od, id, Jh(ed, id));
        od.prototype = td,
        td.constructor = od,
        Z(r, "Number", od)
    }
    Ce({
        target: "Number",
        stat: !0
    }, {
        isNaN: function(e) {
            return e != e
        }
    }),
    Ce({
        target: "Object",
        stat: !0,
        forced: Object.assign !== xi
    }, {
        assign: xi
    });
    var cd = c.f
      , ld = function(e) {
        return function(t) {
            for (var n, r = g(t), i = kt(r), a = i.length, s = 0, c = []; a > s; )
                n = i[s++],
                o && !cd.call(r, n) || c.push(e ? [n, r[n]] : r[n]);
            return c
        }
    }
      , ud = {
        entries: ld(!0),
        values: ld(!1)
    }.entries;
    function fd(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function hd(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    function dd(e, t, n) {
        return t && hd(e.prototype, t),
        n && hd(e, n),
        e
    }
    function pd(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function gd(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            var n = []
              , r = !0
              , i = !1
              , o = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value),
                !t || n.length !== t); r = !0)
                    ;
            } catch (e) {
                i = !0,
                o = e
            } finally {
                try {
                    r || null == s.return || s.return()
                } finally {
                    if (i)
                        throw o
                }
            }
            return n
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }
    Ce({
        target: "Object",
        stat: !0
    }, {
        entries: function(e) {
            return ud(e)
        }
    });
    var md = function(e) {
        return null != e ? e.constructor : null
    }
      , vd = function(e, t) {
        return !!(e && t && e instanceof t)
    }
      , yd = function(e) {
        return null == e
    }
      , bd = function(e) {
        return md(e) === Object
    }
      , wd = function(e) {
        return md(e) === String
    }
      , kd = function(e) {
        return Array.isArray(e)
    }
      , Ed = function(e) {
        return vd(e, NodeList)
    }
      , Sd = yd
      , _d = bd
      , Td = function(e) {
        return md(e) === Number && !Number.isNaN(e)
    }
      , Ad = wd
      , xd = function(e) {
        return md(e) === Boolean
    }
      , Od = kd
      , Cd = Ed
      , Pd = function(e) {
        return vd(e, Element)
    }
      , Id = function(e) {
        return vd(e, Event)
    }
      , Rd = function(e) {
        return yd(e) || (wd(e) || kd(e) || Ed(e)) && !e.length || bd(e) && !Object.keys(e).length
    }
      , jd = {
        facebook: {
            domain: "facebook.com",
            url: function(e) {
                return "https://graph.facebook.com/?id=".concat(e, "&fields=og_object{engagement}")
            },
            shareCount: function(e) {
                return e.og_object.engagement.count
            },
            popup: {
                width: 640,
                height: 360
            }
        },
        twitter: {
            domain: "twitter.com",
            url: function() {
                return null
            },
            shareCount: function() {
                return null
            },
            popup: {
                width: 640,
                height: 240
            }
        },
        pinterest: {
            domain: "pinterest.com",
            url: function(e) {
                return "https://widgets.pinterest.com/v1/urls/count.json?url=".concat(e)
            },
            shareCount: function(e) {
                return e.count
            },
            popup: {
                width: 830,
                height: 700
            }
        },
        github: {
            domain: "github.com",
            url: function(e, t) {
                return "https://api.github.com/repos/".concat(e).concat(Ad(t) ? "?access_token=".concat(t) : "")
            },
            shareCount: function(e) {
                return e.data.stargazers_count
            }
        },
        youtube: {
            domain: "youtube.com",
            url: function(e, t) {
                return "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=".concat(e, "&key=").concat(t)
            },
            shareCount: function(e) {
                if (!Rd(e.error))
                    return null;
                var t = gd(e.items, 1)[0];
                return Rd(t) ? null : t.statistics.subscriberCount
            }
        }
    }
      , Ld = {
        debug: !1,
        wrapper: {
            className: "shr"
        },
        count: {
            className: "shr__count",
            displayZero: !1,
            format: !0,
            position: "after",
            increment: !0
        },
        tokens: {
            github: "",
            youtube: ""
        },
        storage: {
            enabled: !0,
            key: "shr",
            ttl: 3e5
        }
    };
    function Md(e) {
        return new Promise((function(t, n) {
            var r = "jsonp_callback_".concat(Math.round(1e5 * Math.random()))
              , i = document.createElement("script");
            i.addEventListener("error", (function(e) {
                return n(e)
            }
            )),
            window[r] = function(e) {
                delete window[r],
                document.body.removeChild(i),
                t(e)
            }
            ;
            var o = new URL(e);
            o.searchParams.set("callback", r),
            i.setAttribute("src", o.toString()),
            document.body.appendChild(i)
        }
        ))
    }
    var Nd = function() {}
      , Ud = function() {
        function e() {
            var t = !!(0 < arguments.length && void 0 !== arguments[0]) && arguments[0];
            fd(this, e),
            this.enabled = window.console && t,
            this.enabled && this.log("Debugging enabled")
        }
        return dd(e, [{
            key: "log",
            get: function() {
                return this.enabled ? Function.prototype.bind.call(console.log, console) : Nd
            }
        }, {
            key: "warn",
            get: function() {
                return this.enabled ? Function.prototype.bind.call(console.warn, console) : Nd
            }
        }, {
            key: "error",
            get: function() {
                return this.enabled ? Function.prototype.bind.call(console.error, console) : Nd
            }
        }]),
        e
    }();
    function Fd(e, t) {
        return function() {
            return Array.from(document.querySelectorAll(t)).includes(this)
        }
        .call(e, t)
    }
    function Dd(e, t) {
        var n = e.length ? e : [e];
        Array.from(n).reverse().forEach((function(e, n) {
            var r = 0 < n ? t.cloneNode(!0) : t
              , i = e.parentNode
              , o = e.nextSibling;
            r.appendChild(e),
            o ? i.insertBefore(r, o) : i.appendChild(r)
        }
        ))
    }
    function Bd(e, t, n) {
        var r = document.createElement(e);
        return _d(t) && function(e, t) {
            !Pd(e) || Rd(t) || Object.entries(t).filter((function(e) {
                var t = gd(e, 2)[1];
                return !Sd(t)
            }
            )).forEach((function(t) {
                var n = gd(t, 2)
                  , r = n[0]
                  , i = n[1];
                return e.setAttribute(r, i)
            }
            ))
        }(r, t),
        Ad(n) && (r.innerText = n),
        r
    }
    function qd(e) {
        var t = /\./.test(1.1.toLocaleString()) ? "." : ","
          , n = new RegExp("\\".concat(t, "\\d+$"));
        return Math.round(e).toLocaleString().replace(n, "")
    }
    function Hd() {
        for (var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, n = Array(1 < t ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r];
        if (!n.length)
            return e;
        var i = n.shift();
        return _d(i) ? (Object.keys(i).forEach((function(t) {
            _d(i[t]) ? (!Object.keys(e).includes(t) && Object.assign(e, pd({}, t, {})),
            Hd(e[t], i[t])) : Object.assign(e, pd({}, t, i[t]))
        }
        )),
        Hd.apply(void 0, [e].concat(n))) : e
    }
    var Vd = function() {
        function e(t, n) {
            var r = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2];
            fd(this, e),
            this.enabled = r && e.supported,
            this.key = t,
            this.ttl = n
        }
        return dd(e, [{
            key: "get",
            value: function(t) {
                if (!e.supported || !this.enabled)
                    return null;
                var n = window.localStorage.getItem(this.key);
                if (Rd(n))
                    return null;
                var r = window.localStorage.getItem("".concat(this.key, "_ttl"));
                if (Rd(r) || r < Date.now())
                    return null;
                var i = JSON.parse(n);
                return Ad(t) && t.length ? i[t] : i
            }
        }, {
            key: "set",
            value: function(t) {
                if (e.supported && this.enabled && _d(t)) {
                    var n = this.get();
                    Rd(n) && (n = {}),
                    Hd(n, t),
                    window.localStorage.setItem(this.key, JSON.stringify(n)),
                    window.localStorage.setItem("".concat(this.key, "_ttl"), Date.now() + this.ttl)
                }
            }
        }], [{
            key: "supported",
            get: function() {
                try {
                    return "localStorage"in window && (window.localStorage.setItem("___test", "___test"),
                    window.localStorage.removeItem("___test"),
                    !0)
                } catch (e) {
                    return !1
                }
            }
        }]),
        e
    }();
    var zd = function() {
        function e(t, n) {
            var r = this;
            fd(this, e),
            this.elements = {
                count: null,
                trigger: null,
                popup: null
            },
            Pd(t) ? this.elements.trigger = t : Ad(t) && (this.elements.trigger = document.querySelector(t)),
            Pd(this.elements.trigger) && Rd(this.elements.trigger.shr) && (this.config = Hd({}, Ld, n, {
                networks: jd
            }),
            this.console = new Ud(this.config.debug),
            this.storage = new Vd(this.config.storage.key,this.config.storage.ttl,this.config.storage.enabled),
            this.getCount().then((function(e) {
                return r.updateDisplay(e)
            }
            )).catch((function() {}
            )),
            this.listeners(!0),
            this.elements.trigger.shr = this)
        }
        return dd(e, [{
            key: "destroy",
            value: function() {
                this.listeners(!1)
            }
        }, {
            key: "listeners",
            value: function() {
                var e = this
                  , t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0] ? "addEventListener" : "removeEventListener";
                this.elements.trigger[t]("click", (function(t) {
                    return e.share(t)
                }
                ), !1)
            }
        }, {
            key: "share",
            value: function(e) {
                var t = this;
                this.openPopup(e);
                var n = this.config.count.increment;
                this.getCount().then((function(e) {
                    return t.updateDisplay(e, n)
                }
                )).catch((function() {}
                ))
            }
        }, {
            key: "openPopup",
            value: function(e) {
                if (!Rd(this.network) && this.networkConfig.popup) {
                    Id(e) && e.preventDefault();
                    var t = this.networkConfig.popup
                      , n = t.width
                      , r = t.height
                      , i = "shr-popup--".concat(this.network);
                    if (this.popup && !this.popup.closed)
                        this.popup.focus(),
                        this.console.log("Popup re-focused.");
                    else {
                        var o = void 0 === window.screenLeft ? window.screen.left : window.screenLeft
                          , a = void 0 === window.screenTop ? window.screen.top : window.screenTop
                          , s = window.screen.width / 2 - n / 2 + o
                          , c = window.screen.height / 2 - r / 2 + a;
                        this.popup = window.open(this.href, i, "top=".concat(c, ",left=").concat(s, ",width=").concat(n, ",height=").concat(r)),
                        this.popup && !this.popup.closed && xd(this.popup.closed) ? (this.popup.focus(),
                        this.console.log("Popup opened.")) : this.console.error("Popup blocked.")
                    }
                }
            }
        }, {
            key: "getCount",
            value: function() {
                var e = this
                  , t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                return new Promise((function(n, r) {
                    var i = e.apiUrl;
                    if (Rd(i))
                        r(new Error("No URL available for ".concat(e.network, ".")));
                    else {
                        if (t) {
                            var o = e.storage.get(e.target);
                            if (!Rd(o) && Object.keys(o).includes(e.network)) {
                                var a = o[e.network];
                                return n(Td(a) ? a : 0),
                                void e.console.log("getCount for '".concat(e.target, "' for '").concat(e.network, "' resolved from cache."))
                            }
                        }
                        Md(i).then((function(t) {
                            var r = 0
                              , i = e.elements.trigger.getAttribute("data-shr-display");
                            r = Rd(i) ? e.networkConfig.shareCount(t) : t[i],
                            Rd(r) ? r = 0 : (r = parseInt(r, 10),
                            !Td(r) && (r = 0)),
                            e.storage.set(pd({}, e.target, pd({}, e.network, r))),
                            n(r)
                        }
                        )).catch(r)
                    }
                }
                ))
            }
        }, {
            key: "updateDisplay",
            value: function(e) {
                var t = !!(1 < arguments.length && void 0 !== arguments[1]) && arguments[1]
                  , n = this.config
                  , r = n.count
                  , i = n.wrapper
                  , o = t ? e + 1 : e
                  , a = r.position.toLowerCase();
                if (0 < o || r.displayZero) {
                    var s = function(e) {
                        return Math.round(o / e * 10) / 10
                    }
                      , c = qd(o);
                    r.format && (1e6 < o ? c = "".concat(s(1e6), "M") : 1e3 < o && (c = "".concat(s(1e3), "K"))),
                    Pd(this.elements.count) ? this.elements.count.textContent = c : (Dd(this.elements.trigger, Bd("span", {
                        class: i.className
                    })),
                    this.elements.count = Bd("span", {
                        class: "".concat(r.className, " ").concat(r.className, "--").concat(a)
                    }, c),
                    this.elements.trigger.insertAdjacentElement("after" === a ? "afterend" : "beforebegin", this.elements.count))
                }
            }
        }, {
            key: "href",
            get: function() {
                return Pd(this.elements.trigger) ? this.elements.trigger.href : null
            }
        }, {
            key: "network",
            get: function() {
                var e = this;
                if (!Pd(this.elements.trigger))
                    return null;
                var t = this.config.networks;
                return Object.keys(t).find((function(n) {
                    return function(e) {
                        var t = new URL(e).hostname
                          , n = t.split(".")
                          , r = n.length;
                        return 2 < r && (t = "".concat(n[r - 2], ".").concat(n[r - 1]),
                        2 === n[r - 2].length && 2 === n[r - 1].length && (t = "".concat(n[r - 3], ".").concat(t))),
                        t
                    }(e.href) === t[n].domain
                }
                ))
            }
        }, {
            key: "networkConfig",
            get: function() {
                return Rd(this.network) ? null : this.config.networks[this.network]
            }
        }, {
            key: "target",
            get: function() {
                if (Rd(this.network))
                    return null;
                var e = new URL(this.href);
                switch (this.network) {
                case "facebook":
                    return e.searchParams.get("u");
                case "github":
                    return e.pathname.substring(1);
                case "youtube":
                    return e.pathname.split("/").pop();
                default:
                    return e.searchParams.get("url")
                }
            }
        }, {
            key: "apiUrl",
            get: function() {
                if (Rd(this.network))
                    return null;
                var e = this.config.tokens;
                switch (this.network) {
                case "github":
                    return this.networkConfig.url(this.target, e.github);
                case "youtube":
                    return this.networkConfig.url(this.target, e.youtube);
                default:
                    return this.networkConfig.url(encodeURIComponent(this.target))
                }
            }
        }], [{
            key: "setup",
            value: function(t) {
                var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
                  , r = null;
                if (Ad(t) ? r = Array.from(document.querySelectorAll(t)) : Pd(t) ? r = [t] : Cd(t) ? r = Array.from(t) : Od(t) && (r = t.filter(Pd)),
                Rd(r))
                    return null;
                var i = Object.assign({}, Ld, n);
                return Ad(t) && i.watch && new MutationObserver((function(n) {
                    Array.from(n).forEach((function(n) {
                        Array.from(n.addedNodes).forEach((function(n) {
                            Pd(n) && Fd(n, t) && new e(n,i)
                        }
                        ))
                    }
                    ))
                }
                )).observe(document.body, {
                    childList: !0,
                    subtree: !0
                }),
                r.map((function(t) {
                    return new e(t,n)
                }
                ))
            }
        }]),
        e
    }()
      , Wd = function(e) {
        return e && e.Math == Math && e
    }
      , $d = Wd("object" == typeof globalThis && globalThis) || Wd("object" == typeof window && window) || Wd("object" == typeof self && self) || Wd("object" == typeof e && e) || Function("return this")()
      , Kd = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
      , Yd = !Kd((function() {
        return 7 != Object.defineProperty({}, 1, {
            get: function() {
                return 7
            }
        })[1]
    }
    ))
      , Gd = {}.propertyIsEnumerable
      , Xd = Object.getOwnPropertyDescriptor
      , Jd = {
        f: Xd && !Gd.call({
            1: 2
        }, 1) ? function(e) {
            var t = Xd(this, e);
            return !!t && t.enumerable
        }
        : Gd
    }
      , Qd = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
      , Zd = {}.toString
      , ep = function(e) {
        return Zd.call(e).slice(8, -1)
    }
      , tp = "".split
      , np = Kd((function() {
        return !Object("z").propertyIsEnumerable(0)
    }
    )) ? function(e) {
        return "String" == ep(e) ? tp.call(e, "") : Object(e)
    }
    : Object
      , rp = function(e) {
        if (null == e)
            throw TypeError("Can't call method on " + e);
        return e
    }
      , ip = function(e) {
        return np(rp(e))
    }
      , op = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
      , ap = function(e, t) {
        if (!op(e))
            return e;
        var n, r;
        if (t && "function" == typeof (n = e.toString) && !op(r = n.call(e)))
            return r;
        if ("function" == typeof (n = e.valueOf) && !op(r = n.call(e)))
            return r;
        if (!t && "function" == typeof (n = e.toString) && !op(r = n.call(e)))
            return r;
        throw TypeError("Can't convert object to primitive value")
    }
      , sp = {}.hasOwnProperty
      , cp = function(e, t) {
        return sp.call(e, t)
    }
      , lp = $d.document
      , up = op(lp) && op(lp.createElement)
      , fp = function(e) {
        return up ? lp.createElement(e) : {}
    }
      , hp = !Yd && !Kd((function() {
        return 7 != Object.defineProperty(fp("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }
    ))
      , dp = Object.getOwnPropertyDescriptor
      , pp = {
        f: Yd ? dp : function(e, t) {
            if (e = ip(e),
            t = ap(t, !0),
            hp)
                try {
                    return dp(e, t)
                } catch (e) {}
            if (cp(e, t))
                return Qd(!Jd.f.call(e, t), e[t])
        }
    }
      , gp = function(e) {
        if (!op(e))
            throw TypeError(String(e) + " is not an object");
        return e
    }
      , mp = Object.defineProperty
      , vp = {
        f: Yd ? mp : function(e, t, n) {
            if (gp(e),
            t = ap(t, !0),
            gp(n),
            hp)
                try {
                    return mp(e, t, n)
                } catch (e) {}
            if ("get"in n || "set"in n)
                throw TypeError("Accessors not supported");
            return "value"in n && (e[t] = n.value),
            e
        }
    }
      , yp = Yd ? function(e, t, n) {
        return vp.f(e, t, Qd(1, n))
    }
    : function(e, t, n) {
        return e[t] = n,
        e
    }
      , bp = function(e, t) {
        try {
            yp($d, e, t)
        } catch (n) {
            $d[e] = t
        }
        return t
    }
      , wp = $d["__core-js_shared__"] || bp("__core-js_shared__", {})
      , kp = Function.toString;
    "function" != typeof wp.inspectSource && (wp.inspectSource = function(e) {
        return kp.call(e)
    }
    );
    var Ep, Sp, _p, Tp = wp.inspectSource, Ap = $d.WeakMap, xp = "function" == typeof Ap && /native code/.test(Tp(Ap)), Op = t((function(e) {
        (e.exports = function(e, t) {
            return wp[e] || (wp[e] = void 0 !== t ? t : {})
        }
        )("versions", []).push({
            version: "3.6.4",
            mode: "global",
            copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
        })
    }
    )), Cp = 0, Pp = Math.random(), Ip = function(e) {
        return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++Cp + Pp).toString(36)
    }, Rp = Op("keys"), jp = function(e) {
        return Rp[e] || (Rp[e] = Ip(e))
    }, Lp = {}, Mp = $d.WeakMap;
    if (xp) {
        var Np = new Mp
          , Up = Np.get
          , Fp = Np.has
          , Dp = Np.set;
        Ep = function(e, t) {
            return Dp.call(Np, e, t),
            t
        }
        ,
        Sp = function(e) {
            return Up.call(Np, e) || {}
        }
        ,
        _p = function(e) {
            return Fp.call(Np, e)
        }
    } else {
        var Bp = jp("state");
        Lp[Bp] = !0,
        Ep = function(e, t) {
            return yp(e, Bp, t),
            t
        }
        ,
        Sp = function(e) {
            return cp(e, Bp) ? e[Bp] : {}
        }
        ,
        _p = function(e) {
            return cp(e, Bp)
        }
    }
    var qp, Hp, Vp = {
        set: Ep,
        get: Sp,
        has: _p,
        enforce: function(e) {
            return _p(e) ? Sp(e) : Ep(e, {})
        },
        getterFor: function(e) {
            return function(t) {
                var n;
                if (!op(t) || (n = Sp(t)).type !== e)
                    throw TypeError("Incompatible receiver, " + e + " required");
                return n
            }
        }
    }, zp = t((function(e) {
        var t = Vp.get
          , n = Vp.enforce
          , r = String(String).split("String");
        (e.exports = function(e, t, i, o) {
            var a = !!o && !!o.unsafe
              , s = !!o && !!o.enumerable
              , c = !!o && !!o.noTargetGet;
            "function" == typeof i && ("string" != typeof t || cp(i, "name") || yp(i, "name", t),
            n(i).source = r.join("string" == typeof t ? t : "")),
            e !== $d ? (a ? !c && e[t] && (s = !0) : delete e[t],
            s ? e[t] = i : yp(e, t, i)) : s ? e[t] = i : bp(t, i)
        }
        )(Function.prototype, "toString", (function() {
            return "function" == typeof this && t(this).source || Tp(this)
        }
        ))
    }
    )), Wp = $d, $p = function(e) {
        return "function" == typeof e ? e : void 0
    }, Kp = function(e, t) {
        return arguments.length < 2 ? $p(Wp[e]) || $p($d[e]) : Wp[e] && Wp[e][t] || $d[e] && $d[e][t]
    }, Yp = Math.ceil, Gp = Math.floor, Xp = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? Gp : Yp)(e)
    }, Jp = Math.min, Qp = function(e) {
        return e > 0 ? Jp(Xp(e), 9007199254740991) : 0
    }, Zp = Math.max, eg = Math.min, tg = function(e, t) {
        var n = Xp(e);
        return n < 0 ? Zp(n + t, 0) : eg(n, t)
    }, ng = function(e) {
        return function(t, n, r) {
            var i, o = ip(t), a = Qp(o.length), s = tg(r, a);
            if (e && n != n) {
                for (; a > s; )
                    if ((i = o[s++]) != i)
                        return !0
            } else
                for (; a > s; s++)
                    if ((e || s in o) && o[s] === n)
                        return e || s || 0;
            return !e && -1
        }
    }, rg = {
        includes: ng(!0),
        indexOf: ng(!1)
    }, ig = rg.indexOf, og = function(e, t) {
        var n, r = ip(e), i = 0, o = [];
        for (n in r)
            !cp(Lp, n) && cp(r, n) && o.push(n);
        for (; t.length > i; )
            cp(r, n = t[i++]) && (~ig(o, n) || o.push(n));
        return o
    }, ag = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], sg = ag.concat("length", "prototype"), cg = {
        f: Object.getOwnPropertyNames || function(e) {
            return og(e, sg)
        }
    }, lg = {
        f: Object.getOwnPropertySymbols
    }, ug = Kp("Reflect", "ownKeys") || function(e) {
        var t = cg.f(gp(e))
          , n = lg.f;
        return n ? t.concat(n(e)) : t
    }
    , fg = function(e, t) {
        for (var n = ug(t), r = vp.f, i = pp.f, o = 0; o < n.length; o++) {
            var a = n[o];
            cp(e, a) || r(e, a, i(t, a))
        }
    }, hg = /#|\.prototype\./, dg = function(e, t) {
        var n = gg[pg(e)];
        return n == vg || n != mg && ("function" == typeof t ? Kd(t) : !!t)
    }, pg = dg.normalize = function(e) {
        return String(e).replace(hg, ".").toLowerCase()
    }
    , gg = dg.data = {}, mg = dg.NATIVE = "N", vg = dg.POLYFILL = "P", yg = dg, bg = pp.f, wg = function(e, t) {
        var n, r, i, o, a, s = e.target, c = e.global, l = e.stat;
        if (n = c ? $d : l ? $d[s] || bp(s, {}) : ($d[s] || {}).prototype)
            for (r in t) {
                if (o = t[r],
                i = e.noTargetGet ? (a = bg(n, r)) && a.value : n[r],
                !yg(c ? r : s + (l ? "." : "#") + r, e.forced) && void 0 !== i) {
                    if (typeof o == typeof i)
                        continue;
                    fg(o, i)
                }
                (e.sham || i && i.sham) && yp(o, "sham", !0),
                zp(n, r, o, e)
            }
    }, kg = Array.isArray || function(e) {
        return "Array" == ep(e)
    }
    , Eg = function(e) {
        return Object(rp(e))
    }, Sg = function(e, t, n) {
        var r = ap(t);
        r in e ? vp.f(e, r, Qd(0, n)) : e[r] = n
    }, _g = !!Object.getOwnPropertySymbols && !Kd((function() {
        return !String(Symbol())
    }
    )), Tg = _g && !Symbol.sham && "symbol" == typeof Symbol.iterator, Ag = Op("wks"), xg = $d.Symbol, Og = Tg ? xg : xg && xg.withoutSetter || Ip, Cg = function(e) {
        return cp(Ag, e) || (_g && cp(xg, e) ? Ag[e] = xg[e] : Ag[e] = Og("Symbol." + e)),
        Ag[e]
    }, Pg = Cg("species"), Ig = function(e, t) {
        var n;
        return kg(e) && ("function" != typeof (n = e.constructor) || n !== Array && !kg(n.prototype) ? op(n) && null === (n = n[Pg]) && (n = void 0) : n = void 0),
        new (void 0 === n ? Array : n)(0 === t ? 0 : t)
    }, Rg = Kp("navigator", "userAgent") || "", jg = $d.process, Lg = jg && jg.versions, Mg = Lg && Lg.v8;
    Mg ? Hp = (qp = Mg.split("."))[0] + qp[1] : Rg && (!(qp = Rg.match(/Edge\/(\d+)/)) || qp[1] >= 74) && (qp = Rg.match(/Chrome\/(\d+)/)) && (Hp = qp[1]);
    var Ng = Hp && +Hp
      , Ug = Cg("species")
      , Fg = function(e) {
        return Ng >= 51 || !Kd((function() {
            var t = [];
            return (t.constructor = {})[Ug] = function() {
                return {
                    foo: 1
                }
            }
            ,
            1 !== t[e](Boolean).foo
        }
        ))
    }
      , Dg = Cg("isConcatSpreadable")
      , Bg = Ng >= 51 || !Kd((function() {
        var e = [];
        return e[Dg] = !1,
        e.concat()[0] !== e
    }
    ))
      , qg = Fg("concat")
      , Hg = function(e) {
        if (!op(e))
            return !1;
        var t = e[Dg];
        return void 0 !== t ? !!t : kg(e)
    };
    wg({
        target: "Array",
        proto: !0,
        forced: !Bg || !qg
    }, {
        concat: function(e) {
            var t, n, r, i, o, a = Eg(this), s = Ig(a, 0), c = 0;
            for (t = -1,
            r = arguments.length; t < r; t++)
                if (o = -1 === t ? a : arguments[t],
                Hg(o)) {
                    if (c + (i = Qp(o.length)) > 9007199254740991)
                        throw TypeError("Maximum allowed index exceeded");
                    for (n = 0; n < i; n++,
                    c++)
                        n in o && Sg(s, c, o[n])
                } else {
                    if (c >= 9007199254740991)
                        throw TypeError("Maximum allowed index exceeded");
                    Sg(s, c++, o)
                }
            return s.length = c,
            s
        }
    });
    var Vg = function(e) {
        if ("function" != typeof e)
            throw TypeError(String(e) + " is not a function");
        return e
    }
      , zg = function(e, t, n) {
        if (Vg(e),
        void 0 === t)
            return e;
        switch (n) {
        case 0:
            return function() {
                return e.call(t)
            }
            ;
        case 1:
            return function(n) {
                return e.call(t, n)
            }
            ;
        case 2:
            return function(n, r) {
                return e.call(t, n, r)
            }
            ;
        case 3:
            return function(n, r, i) {
                return e.call(t, n, r, i)
            }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
      , Wg = [].push
      , $g = function(e) {
        var t = 1 == e
          , n = 2 == e
          , r = 3 == e
          , i = 4 == e
          , o = 6 == e
          , a = 5 == e || o;
        return function(s, c, l, u) {
            for (var f, h, d = Eg(s), p = np(d), g = zg(c, l, 3), m = Qp(p.length), v = 0, y = u || Ig, b = t ? y(s, m) : n ? y(s, 0) : void 0; m > v; v++)
                if ((a || v in p) && (h = g(f = p[v], v, d),
                e))
                    if (t)
                        b[v] = h;
                    else if (h)
                        switch (e) {
                        case 3:
                            return !0;
                        case 5:
                            return f;
                        case 6:
                            return v;
                        case 2:
                            Wg.call(b, f)
                        }
                    else if (i)
                        return !1;
            return o ? -1 : r || i ? i : b
        }
    }
      , Kg = {
        forEach: $g(0),
        map: $g(1),
        filter: $g(2),
        some: $g(3),
        every: $g(4),
        find: $g(5),
        findIndex: $g(6)
    }
      , Yg = Object.defineProperty
      , Gg = {}
      , Xg = function(e) {
        throw e
    }
      , Jg = function(e, t) {
        if (cp(Gg, e))
            return Gg[e];
        t || (t = {});
        var n = [][e]
          , r = !!cp(t, "ACCESSORS") && t.ACCESSORS
          , i = cp(t, 0) ? t[0] : Xg
          , o = cp(t, 1) ? t[1] : void 0;
        return Gg[e] = !!n && !Kd((function() {
            if (r && !Yd)
                return !0;
            var e = {
                length: -1
            };
            r ? Yg(e, 1, {
                enumerable: !0,
                get: Xg
            }) : e[1] = 1,
            n.call(e, i, o)
        }
        ))
    }
      , Qg = Kg.filter
      , Zg = Fg("filter")
      , em = Jg("filter");
    wg({
        target: "Array",
        proto: !0,
        forced: !Zg || !em
    }, {
        filter: function(e) {
            return Qg(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var tm, nm = Object.keys || function(e) {
        return og(e, ag)
    }
    , rm = Yd ? Object.defineProperties : function(e, t) {
        gp(e);
        for (var n, r = nm(t), i = r.length, o = 0; i > o; )
            vp.f(e, n = r[o++], t[n]);
        return e
    }
    , im = Kp("document", "documentElement"), om = jp("IE_PROTO"), am = function() {}, sm = function(e) {
        return "<script>" + e + "<\/script>"
    }, cm = function() {
        try {
            tm = document.domain && new ActiveXObject("htmlfile")
        } catch (e) {}
        var e, t;
        cm = tm ? function(e) {
            e.write(sm("")),
            e.close();
            var t = e.parentWindow.Object;
            return e = null,
            t
        }(tm) : ((t = fp("iframe")).style.display = "none",
        im.appendChild(t),
        t.src = String("javascript:"),
        (e = t.contentWindow.document).open(),
        e.write(sm("document.F=Object")),
        e.close(),
        e.F);
        for (var n = ag.length; n--; )
            delete cm.prototype[ag[n]];
        return cm()
    };
    Lp[om] = !0;
    var lm = Object.create || function(e, t) {
        var n;
        return null !== e ? (am.prototype = gp(e),
        n = new am,
        am.prototype = null,
        n[om] = e) : n = cm(),
        void 0 === t ? n : rm(n, t)
    }
      , um = Cg("unscopables")
      , fm = Array.prototype;
    null == fm[um] && vp.f(fm, um, {
        configurable: !0,
        value: lm(null)
    });
    var hm = function(e) {
        fm[um][e] = !0
    }
      , dm = Kg.find
      , pm = !0
      , gm = Jg("find");
    "find"in [] && Array(1).find((function() {
        pm = !1
    }
    )),
    wg({
        target: "Array",
        proto: !0,
        forced: pm || !gm
    }, {
        find: function(e) {
            return dm(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }),
    hm("find");
    var mm = function(e, t, n, r) {
        try {
            return r ? t(gp(n)[0], n[1]) : t(n)
        } catch (t) {
            var i = e.return;
            throw void 0 !== i && gp(i.call(e)),
            t
        }
    }
      , vm = {}
      , ym = Cg("iterator")
      , bm = Array.prototype
      , wm = function(e) {
        return void 0 !== e && (vm.Array === e || bm[ym] === e)
    }
      , km = {};
    km[Cg("toStringTag")] = "z";
    var Em = "[object z]" === String(km)
      , Sm = Cg("toStringTag")
      , _m = "Arguments" == ep(function() {
        return arguments
    }())
      , Tm = Em ? ep : function(e) {
        var t, n, r;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function(e, t) {
            try {
                return e[t]
            } catch (e) {}
        }(t = Object(e), Sm)) ? n : _m ? ep(t) : "Object" == (r = ep(t)) && "function" == typeof t.callee ? "Arguments" : r
    }
      , Am = Cg("iterator")
      , xm = function(e) {
        if (null != e)
            return e[Am] || e["@@iterator"] || vm[Tm(e)]
    }
      , Om = function(e) {
        var t, n, r, i, o, a, s = Eg(e), c = "function" == typeof this ? this : Array, l = arguments.length, u = l > 1 ? arguments[1] : void 0, f = void 0 !== u, h = xm(s), d = 0;
        if (f && (u = zg(u, l > 2 ? arguments[2] : void 0, 2)),
        null == h || c == Array && wm(h))
            for (n = new c(t = Qp(s.length)); t > d; d++)
                a = f ? u(s[d], d) : s[d],
                Sg(n, d, a);
        else
            for (o = (i = h.call(s)).next,
            n = new c; !(r = o.call(i)).done; d++)
                a = f ? mm(i, u, [r.value, d], !0) : r.value,
                Sg(n, d, a);
        return n.length = d,
        n
    }
      , Cm = Cg("iterator")
      , Pm = !1;
    try {
        var Im = 0
          , Rm = {
            next: function() {
                return {
                    done: !!Im++
                }
            },
            return: function() {
                Pm = !0
            }
        };
        Rm[Cm] = function() {
            return this
        }
        ,
        Array.from(Rm, (function() {
            throw 2
        }
        ))
    } catch (e) {}
    var jm = function(e, t) {
        if (!t && !Pm)
            return !1;
        var n = !1;
        try {
            var r = {};
            r[Cm] = function() {
                return {
                    next: function() {
                        return {
                            done: n = !0
                        }
                    }
                }
            }
            ,
            e(r)
        } catch (e) {}
        return n
    }
      , Lm = !jm((function(e) {
        Array.from(e)
    }
    ));
    wg({
        target: "Array",
        stat: !0,
        forced: Lm
    }, {
        from: Om
    });
    var Mm = rg.includes
      , Nm = Jg("indexOf", {
        ACCESSORS: !0,
        1: 0
    });
    wg({
        target: "Array",
        proto: !0,
        forced: !Nm
    }, {
        includes: function(e) {
            return Mm(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }),
    hm("includes");
    var Um, Fm, Dm, Bm = !Kd((function() {
        function e() {}
        return e.prototype.constructor = null,
        Object.getPrototypeOf(new e) !== e.prototype
    }
    )), qm = jp("IE_PROTO"), Hm = Object.prototype, Vm = Bm ? Object.getPrototypeOf : function(e) {
        return e = Eg(e),
        cp(e, qm) ? e[qm] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? Hm : null
    }
    , zm = Cg("iterator"), Wm = !1;
    [].keys && ("next"in (Dm = [].keys()) ? (Fm = Vm(Vm(Dm))) !== Object.prototype && (Um = Fm) : Wm = !0),
    null == Um && (Um = {}),
    cp(Um, zm) || yp(Um, zm, (function() {
        return this
    }
    ));
    var $m = {
        IteratorPrototype: Um,
        BUGGY_SAFARI_ITERATORS: Wm
    }
      , Km = vp.f
      , Ym = Cg("toStringTag")
      , Gm = function(e, t, n) {
        e && !cp(e = n ? e : e.prototype, Ym) && Km(e, Ym, {
            configurable: !0,
            value: t
        })
    }
      , Xm = $m.IteratorPrototype
      , Jm = function() {
        return this
    }
      , Qm = function(e, t, n) {
        var r = t + " Iterator";
        return e.prototype = lm(Xm, {
            next: Qd(1, n)
        }),
        Gm(e, r, !1),
        vm[r] = Jm,
        e
    }
      , Zm = Object.setPrototypeOf || ("__proto__"in {} ? function() {
        var e, t = !1, n = {};
        try {
            (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []),
            t = n instanceof Array
        } catch (e) {}
        return function(n, r) {
            return gp(n),
            function(e) {
                if (!op(e) && null !== e)
                    throw TypeError("Can't set " + String(e) + " as a prototype")
            }(r),
            t ? e.call(n, r) : n.__proto__ = r,
            n
        }
    }() : void 0)
      , ev = $m.IteratorPrototype
      , tv = $m.BUGGY_SAFARI_ITERATORS
      , nv = Cg("iterator")
      , rv = function() {
        return this
    }
      , iv = function(e, t, n, r, i, o, a) {
        Qm(n, t, r);
        var s, c, l, u = function(e) {
            if (e === i && g)
                return g;
            if (!tv && e in d)
                return d[e];
            switch (e) {
            case "keys":
            case "values":
            case "entries":
                return function() {
                    return new n(this,e)
                }
            }
            return function() {
                return new n(this)
            }
        }, f = t + " Iterator", h = !1, d = e.prototype, p = d[nv] || d["@@iterator"] || i && d[i], g = !tv && p || u(i), m = "Array" == t && d.entries || p;
        if (m && (s = Vm(m.call(new e)),
        ev !== Object.prototype && s.next && (Vm(s) !== ev && (Zm ? Zm(s, ev) : "function" != typeof s[nv] && yp(s, nv, rv)),
        Gm(s, f, !0))),
        "values" == i && p && "values" !== p.name && (h = !0,
        g = function() {
            return p.call(this)
        }
        ),
        d[nv] !== g && yp(d, nv, g),
        vm[t] = g,
        i)
            if (c = {
                values: u("values"),
                keys: o ? g : u("keys"),
                entries: u("entries")
            },
            a)
                for (l in c)
                    !tv && !h && l in d || zp(d, l, c[l]);
            else
                wg({
                    target: t,
                    proto: !0,
                    forced: tv || h
                }, c);
        return c
    }
      , ov = Vp.set
      , av = Vp.getterFor("Array Iterator")
      , sv = iv(Array, "Array", (function(e, t) {
        ov(this, {
            type: "Array Iterator",
            target: ip(e),
            index: 0,
            kind: t
        })
    }
    ), (function() {
        var e = av(this)
          , t = e.target
          , n = e.kind
          , r = e.index++;
        return !t || r >= t.length ? (e.target = void 0,
        {
            value: void 0,
            done: !0
        }) : "keys" == n ? {
            value: r,
            done: !1
        } : "values" == n ? {
            value: t[r],
            done: !1
        } : {
            value: [r, t[r]],
            done: !1
        }
    }
    ), "values");
    vm.Arguments = vm.Array,
    hm("keys"),
    hm("values"),
    hm("entries");
    var cv = function(e, t) {
        var n = [][e];
        return !!n && Kd((function() {
            n.call(null, t || function() {
                throw 1
            }
            , 1)
        }
        ))
    }
      , lv = [].join
      , uv = np != Object
      , fv = cv("join", ",");
    wg({
        target: "Array",
        proto: !0,
        forced: uv || !fv
    }, {
        join: function(e) {
            return lv.call(ip(this), void 0 === e ? "," : e)
        }
    });
    var hv = Kg.map
      , dv = Fg("map")
      , pv = Jg("map");
    wg({
        target: "Array",
        proto: !0,
        forced: !dv || !pv
    }, {
        map: function(e) {
            return hv(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var gv = function(e, t, n) {
        var r, i;
        return Zm && "function" == typeof (r = t.constructor) && r !== n && op(i = r.prototype) && i !== n.prototype && Zm(e, i),
        e
    }
      , mv = "\t\n\v\f\r                　\u2028\u2029\ufeff"
      , vv = "[" + mv + "]"
      , yv = RegExp("^" + vv + vv + "*")
      , bv = RegExp(vv + vv + "*$")
      , wv = function(e) {
        return function(t) {
            var n = String(rp(t));
            return 1 & e && (n = n.replace(yv, "")),
            2 & e && (n = n.replace(bv, "")),
            n
        }
    }
      , kv = {
        start: wv(1),
        end: wv(2),
        trim: wv(3)
    }
      , Ev = cg.f
      , Sv = pp.f
      , _v = vp.f
      , Tv = kv.trim
      , Av = $d.Number
      , xv = Av.prototype
      , Ov = "Number" == ep(lm(xv))
      , Cv = function(e) {
        var t, n, r, i, o, a, s, c, l = ap(e, !1);
        if ("string" == typeof l && l.length > 2)
            if (43 === (t = (l = Tv(l)).charCodeAt(0)) || 45 === t) {
                if (88 === (n = l.charCodeAt(2)) || 120 === n)
                    return NaN
            } else if (48 === t) {
                switch (l.charCodeAt(1)) {
                case 66:
                case 98:
                    r = 2,
                    i = 49;
                    break;
                case 79:
                case 111:
                    r = 8,
                    i = 55;
                    break;
                default:
                    return +l
                }
                for (a = (o = l.slice(2)).length,
                s = 0; s < a; s++)
                    if ((c = o.charCodeAt(s)) < 48 || c > i)
                        return NaN;
                return parseInt(o, r)
            }
        return +l
    };
    if (yg("Number", !Av(" 0o1") || !Av("0b1") || Av("+0x1"))) {
        for (var Pv, Iv = function(e) {
            var t = arguments.length < 1 ? 0 : e
              , n = this;
            return n instanceof Iv && (Ov ? Kd((function() {
                xv.valueOf.call(n)
            }
            )) : "Number" != ep(n)) ? gv(new Av(Cv(t)), n, Iv) : Cv(t)
        }, Rv = Yd ? Ev(Av) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), jv = 0; Rv.length > jv; jv++)
            cp(Av, Pv = Rv[jv]) && !cp(Iv, Pv) && _v(Iv, Pv, Sv(Av, Pv));
        Iv.prototype = xv,
        xv.constructor = Iv,
        zp($d, "Number", Iv)
    }
    var Lv = Kd((function() {
        nm(1)
    }
    ));
    wg({
        target: "Object",
        stat: !0,
        forced: Lv
    }, {
        keys: function(e) {
            return nm(Eg(e))
        }
    });
    var Mv = Em ? {}.toString : function() {
        return "[object " + Tm(this) + "]"
    }
    ;
    Em || zp(Object.prototype, "toString", Mv, {
        unsafe: !0
    });
    var Nv = function() {
        var e = gp(this)
          , t = "";
        return e.global && (t += "g"),
        e.ignoreCase && (t += "i"),
        e.multiline && (t += "m"),
        e.dotAll && (t += "s"),
        e.unicode && (t += "u"),
        e.sticky && (t += "y"),
        t
    };
    function Uv(e, t) {
        return RegExp(e, t)
    }
    var Fv = {
        UNSUPPORTED_Y: Kd((function() {
            var e = Uv("a", "y");
            return e.lastIndex = 2,
            null != e.exec("abcd")
        }
        )),
        BROKEN_CARET: Kd((function() {
            var e = Uv("^r", "gy");
            return e.lastIndex = 2,
            null != e.exec("str")
        }
        ))
    }
      , Dv = RegExp.prototype.exec
      , Bv = String.prototype.replace
      , qv = Dv
      , Hv = function() {
        var e = /a/
          , t = /b*/g;
        return Dv.call(e, "a"),
        Dv.call(t, "a"),
        0 !== e.lastIndex || 0 !== t.lastIndex
    }()
      , Vv = Fv.UNSUPPORTED_Y || Fv.BROKEN_CARET
      , zv = void 0 !== /()??/.exec("")[1];
    (Hv || zv || Vv) && (qv = function(e) {
        var t, n, r, i, o = this, a = Vv && o.sticky, s = Nv.call(o), c = o.source, l = 0, u = e;
        return a && (-1 === (s = s.replace("y", "")).indexOf("g") && (s += "g"),
        u = String(e).slice(o.lastIndex),
        o.lastIndex > 0 && (!o.multiline || o.multiline && "\n" !== e[o.lastIndex - 1]) && (c = "(?: " + c + ")",
        u = " " + u,
        l++),
        n = new RegExp("^(?:" + c + ")",s)),
        zv && (n = new RegExp("^" + c + "$(?!\\s)",s)),
        Hv && (t = o.lastIndex),
        r = Dv.call(a ? n : o, u),
        a ? r ? (r.input = r.input.slice(l),
        r[0] = r[0].slice(l),
        r.index = o.lastIndex,
        o.lastIndex += r[0].length) : o.lastIndex = 0 : Hv && r && (o.lastIndex = o.global ? r.index + r[0].length : t),
        zv && r && r.length > 1 && Bv.call(r[0], n, (function() {
            for (i = 1; i < arguments.length - 2; i++)
                void 0 === arguments[i] && (r[i] = void 0)
        }
        )),
        r
    }
    );
    var Wv = qv;
    wg({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== Wv
    }, {
        exec: Wv
    });
    var $v = RegExp.prototype
      , Kv = $v.toString
      , Yv = Kd((function() {
        return "/a/b" != Kv.call({
            source: "a",
            flags: "b"
        })
    }
    ))
      , Gv = "toString" != Kv.name;
    (Yv || Gv) && zp(RegExp.prototype, "toString", (function() {
        var e = gp(this)
          , t = String(e.source)
          , n = e.flags;
        return "/" + t + "/" + String(void 0 === n && e instanceof RegExp && !("flags"in $v) ? Nv.call(e) : n)
    }
    ), {
        unsafe: !0
    });
    var Xv = Cg("match")
      , Jv = function(e) {
        var t;
        return op(e) && (void 0 !== (t = e[Xv]) ? !!t : "RegExp" == ep(e))
    }
      , Qv = function(e) {
        if (Jv(e))
            throw TypeError("The method doesn't accept regular expressions");
        return e
    }
      , Zv = Cg("match")
      , ey = function(e) {
        var t = /./;
        try {
            "/./"[e](t)
        } catch (n) {
            try {
                return t[Zv] = !1,
                "/./"[e](t)
            } catch (e) {}
        }
        return !1
    };
    wg({
        target: "String",
        proto: !0,
        forced: !ey("includes")
    }, {
        includes: function(e) {
            return !!~String(rp(this)).indexOf(Qv(e), arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var ty = function(e) {
        return function(t, n) {
            var r, i, o = String(rp(t)), a = Xp(n), s = o.length;
            return a < 0 || a >= s ? e ? "" : void 0 : (r = o.charCodeAt(a)) < 55296 || r > 56319 || a + 1 === s || (i = o.charCodeAt(a + 1)) < 56320 || i > 57343 ? e ? o.charAt(a) : r : e ? o.slice(a, a + 2) : i - 56320 + (r - 55296 << 10) + 65536
        }
    }
      , ny = {
        codeAt: ty(!1),
        charAt: ty(!0)
    }
      , ry = ny.charAt
      , iy = Vp.set
      , oy = Vp.getterFor("String Iterator");
    iv(String, "String", (function(e) {
        iy(this, {
            type: "String Iterator",
            string: String(e),
            index: 0
        })
    }
    ), (function() {
        var e, t = oy(this), n = t.string, r = t.index;
        return r >= n.length ? {
            value: void 0,
            done: !0
        } : (e = ry(n, r),
        t.index += e.length,
        {
            value: e,
            done: !1
        })
    }
    ));
    var ay = Cg("species")
      , sy = !Kd((function() {
        var e = /./;
        return e.exec = function() {
            var e = [];
            return e.groups = {
                a: "7"
            },
            e
        }
        ,
        "7" !== "".replace(e, "$<a>")
    }
    ))
      , cy = "$0" === "a".replace(/./, "$0")
      , ly = Cg("replace")
      , uy = !!/./[ly] && "" === /./[ly]("a", "$0")
      , fy = !Kd((function() {
        var e = /(?:)/
          , t = e.exec;
        e.exec = function() {
            return t.apply(this, arguments)
        }
        ;
        var n = "ab".split(e);
        return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
    }
    ))
      , hy = function(e, t, n, r) {
        var i = Cg(e)
          , o = !Kd((function() {
            var t = {};
            return t[i] = function() {
                return 7
            }
            ,
            7 != ""[e](t)
        }
        ))
          , a = o && !Kd((function() {
            var t = !1
              , n = /a/;
            return "split" === e && ((n = {}).constructor = {},
            n.constructor[ay] = function() {
                return n
            }
            ,
            n.flags = "",
            n[i] = /./[i]),
            n.exec = function() {
                return t = !0,
                null
            }
            ,
            n[i](""),
            !t
        }
        ));
        if (!o || !a || "replace" === e && (!sy || !cy || uy) || "split" === e && !fy) {
            var s = /./[i]
              , c = n(i, ""[e], (function(e, t, n, r, i) {
                return t.exec === Wv ? o && !i ? {
                    done: !0,
                    value: s.call(t, n, r)
                } : {
                    done: !0,
                    value: e.call(n, t, r)
                } : {
                    done: !1
                }
            }
            ), {
                REPLACE_KEEPS_$0: cy,
                REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: uy
            })
              , l = c[0]
              , u = c[1];
            zp(String.prototype, e, l),
            zp(RegExp.prototype, i, 2 == t ? function(e, t) {
                return u.call(e, this, t)
            }
            : function(e) {
                return u.call(e, this)
            }
            )
        }
        r && yp(RegExp.prototype[i], "sham", !0)
    }
      , dy = Object.is || function(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
    }
      , py = function(e, t) {
        var n = e.exec;
        if ("function" == typeof n) {
            var r = n.call(e, t);
            if ("object" != typeof r)
                throw TypeError("RegExp exec method returned something other than an Object or null");
            return r
        }
        if ("RegExp" !== ep(e))
            throw TypeError("RegExp#exec called on incompatible receiver");
        return Wv.call(e, t)
    };
    hy("search", 1, (function(e, t, n) {
        return [function(t) {
            var n = rp(this)
              , r = null == t ? void 0 : t[e];
            return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n))
        }
        , function(e) {
            var r = n(t, e, this);
            if (r.done)
                return r.value;
            var i = gp(e)
              , o = String(this)
              , a = i.lastIndex;
            dy(a, 0) || (i.lastIndex = 0);
            var s = py(i, o);
            return dy(i.lastIndex, a) || (i.lastIndex = a),
            null === s ? -1 : s.index
        }
        ]
    }
    ));
    var gy = function(e, t, n) {
        for (var r in t)
            zp(e, r, t[r], n);
        return e
    }
      , my = !Kd((function() {
        return Object.isExtensible(Object.preventExtensions({}))
    }
    ))
      , vy = t((function(e) {
        var t = vp.f
          , n = Ip("meta")
          , r = 0
          , i = Object.isExtensible || function() {
            return !0
        }
          , o = function(e) {
            t(e, n, {
                value: {
                    objectID: "O" + ++r,
                    weakData: {}
                }
            })
        }
          , a = e.exports = {
            REQUIRED: !1,
            fastKey: function(e, t) {
                if (!op(e))
                    return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                if (!cp(e, n)) {
                    if (!i(e))
                        return "F";
                    if (!t)
                        return "E";
                    o(e)
                }
                return e[n].objectID
            },
            getWeakData: function(e, t) {
                if (!cp(e, n)) {
                    if (!i(e))
                        return !0;
                    if (!t)
                        return !1;
                    o(e)
                }
                return e[n].weakData
            },
            onFreeze: function(e) {
                return my && a.REQUIRED && i(e) && !cp(e, n) && o(e),
                e
            }
        };
        Lp[n] = !0
    }
    ))
      , yy = (vy.REQUIRED,
    vy.fastKey,
    vy.getWeakData,
    vy.onFreeze,
    t((function(e) {
        var t = function(e, t) {
            this.stopped = e,
            this.result = t
        };
        (e.exports = function(e, n, r, i, o) {
            var a, s, c, l, u, f, h, d = zg(n, r, i ? 2 : 1);
            if (o)
                a = e;
            else {
                if ("function" != typeof (s = xm(e)))
                    throw TypeError("Target is not iterable");
                if (wm(s)) {
                    for (c = 0,
                    l = Qp(e.length); l > c; c++)
                        if ((u = i ? d(gp(h = e[c])[0], h[1]) : d(e[c])) && u instanceof t)
                            return u;
                    return new t(!1)
                }
                a = s.call(e)
            }
            for (f = a.next; !(h = f.call(a)).done; )
                if ("object" == typeof (u = mm(a, d, h.value, i)) && u && u instanceof t)
                    return u;
            return new t(!1)
        }
        ).stop = function(e) {
            return new t(!0,e)
        }
    }
    )))
      , by = function(e, t, n) {
        if (!(e instanceof t))
            throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
        return e
    }
      , wy = vy.getWeakData
      , ky = Vp.set
      , Ey = Vp.getterFor
      , Sy = Kg.find
      , _y = Kg.findIndex
      , Ty = 0
      , Ay = function(e) {
        return e.frozen || (e.frozen = new xy)
    }
      , xy = function() {
        this.entries = []
    }
      , Oy = function(e, t) {
        return Sy(e.entries, (function(e) {
            return e[0] === t
        }
        ))
    };
    xy.prototype = {
        get: function(e) {
            var t = Oy(this, e);
            if (t)
                return t[1]
        },
        has: function(e) {
            return !!Oy(this, e)
        },
        set: function(e, t) {
            var n = Oy(this, e);
            n ? n[1] = t : this.entries.push([e, t])
        },
        delete: function(e) {
            var t = _y(this.entries, (function(t) {
                return t[0] === e
            }
            ));
            return ~t && this.entries.splice(t, 1),
            !!~t
        }
    };
    var Cy = {
        getConstructor: function(e, t, n, r) {
            var i = e((function(e, o) {
                by(e, i, t),
                ky(e, {
                    type: t,
                    id: Ty++,
                    frozen: void 0
                }),
                null != o && yy(o, e[r], e, n)
            }
            ))
              , o = Ey(t)
              , a = function(e, t, n) {
                var r = o(e)
                  , i = wy(gp(t), !0);
                return !0 === i ? Ay(r).set(t, n) : i[r.id] = n,
                e
            };
            return gy(i.prototype, {
                delete: function(e) {
                    var t = o(this);
                    if (!op(e))
                        return !1;
                    var n = wy(e);
                    return !0 === n ? Ay(t).delete(e) : n && cp(n, t.id) && delete n[t.id]
                },
                has: function(e) {
                    var t = o(this);
                    if (!op(e))
                        return !1;
                    var n = wy(e);
                    return !0 === n ? Ay(t).has(e) : n && cp(n, t.id)
                }
            }),
            gy(i.prototype, n ? {
                get: function(e) {
                    var t = o(this);
                    if (op(e)) {
                        var n = wy(e);
                        return !0 === n ? Ay(t).get(e) : n ? n[t.id] : void 0
                    }
                },
                set: function(e, t) {
                    return a(this, e, t)
                }
            } : {
                add: function(e) {
                    return a(this, e, !0)
                }
            }),
            i
        }
    }
      , Py = (t((function(e) {
        var t, n = Vp.enforce, r = !$d.ActiveXObject && "ActiveXObject"in $d, i = Object.isExtensible, o = function(e) {
            return function() {
                return e(this, arguments.length ? arguments[0] : void 0)
            }
        }, a = e.exports = function(e, t, n) {
            var r = -1 !== e.indexOf("Map")
              , i = -1 !== e.indexOf("Weak")
              , o = r ? "set" : "add"
              , a = $d[e]
              , s = a && a.prototype
              , c = a
              , l = {}
              , u = function(e) {
                var t = s[e];
                zp(s, e, "add" == e ? function(e) {
                    return t.call(this, 0 === e ? 0 : e),
                    this
                }
                : "delete" == e ? function(e) {
                    return !(i && !op(e)) && t.call(this, 0 === e ? 0 : e)
                }
                : "get" == e ? function(e) {
                    return i && !op(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
                }
                : "has" == e ? function(e) {
                    return !(i && !op(e)) && t.call(this, 0 === e ? 0 : e)
                }
                : function(e, n) {
                    return t.call(this, 0 === e ? 0 : e, n),
                    this
                }
                )
            };
            if (yg(e, "function" != typeof a || !(i || s.forEach && !Kd((function() {
                (new a).entries().next()
            }
            )))))
                c = n.getConstructor(t, e, r, o),
                vy.REQUIRED = !0;
            else if (yg(e, !0)) {
                var f = new c
                  , h = f[o](i ? {} : -0, 1) != f
                  , d = Kd((function() {
                    f.has(1)
                }
                ))
                  , p = jm((function(e) {
                    new a(e)
                }
                ))
                  , g = !i && Kd((function() {
                    for (var e = new a, t = 5; t--; )
                        e[o](t, t);
                    return !e.has(-0)
                }
                ));
                p || ((c = t((function(t, n) {
                    by(t, c, e);
                    var i = gv(new a, t, c);
                    return null != n && yy(n, i[o], i, r),
                    i
                }
                ))).prototype = s,
                s.constructor = c),
                (d || g) && (u("delete"),
                u("has"),
                r && u("get")),
                (g || h) && u(o),
                i && s.clear && delete s.clear
            }
            return l[e] = c,
            wg({
                global: !0,
                forced: c != a
            }, l),
            Gm(c, e),
            i || n.setStrong(c, e, r),
            c
        }("WeakMap", o, Cy);
        if (xp && r) {
            t = Cy.getConstructor(o, "WeakMap", !0),
            vy.REQUIRED = !0;
            var s = a.prototype
              , c = s.delete
              , l = s.has
              , u = s.get
              , f = s.set;
            gy(s, {
                delete: function(e) {
                    if (op(e) && !i(e)) {
                        var r = n(this);
                        return r.frozen || (r.frozen = new t),
                        c.call(this, e) || r.frozen.delete(e)
                    }
                    return c.call(this, e)
                },
                has: function(e) {
                    if (op(e) && !i(e)) {
                        var r = n(this);
                        return r.frozen || (r.frozen = new t),
                        l.call(this, e) || r.frozen.has(e)
                    }
                    return l.call(this, e)
                },
                get: function(e) {
                    if (op(e) && !i(e)) {
                        var r = n(this);
                        return r.frozen || (r.frozen = new t),
                        l.call(this, e) ? u.call(this, e) : r.frozen.get(e)
                    }
                    return u.call(this, e)
                },
                set: function(e, r) {
                    if (op(e) && !i(e)) {
                        var o = n(this);
                        o.frozen || (o.frozen = new t),
                        l.call(this, e) ? f.call(this, e, r) : o.frozen.set(e, r)
                    } else
                        f.call(this, e, r);
                    return this
                }
            })
        }
    }
    )),
    {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    })
      , Iy = Cg("iterator")
      , Ry = Cg("toStringTag")
      , jy = sv.values;
    for (var Ly in Py) {
        var My = $d[Ly]
          , Ny = My && My.prototype;
        if (Ny) {
            if (Ny[Iy] !== jy)
                try {
                    yp(Ny, Iy, jy)
                } catch (e) {
                    Ny[Iy] = jy
                }
            if (Ny[Ry] || yp(Ny, Ry, Ly),
            Py[Ly])
                for (var Uy in sv)
                    if (Ny[Uy] !== sv[Uy])
                        try {
                            yp(Ny, Uy, sv[Uy])
                        } catch (e) {
                            Ny[Uy] = sv[Uy]
                        }
        }
    }
    var Fy = Kg.every
      , Dy = cv("every")
      , By = Jg("every");
    wg({
        target: "Array",
        proto: !0,
        forced: !Dy || !By
    }, {
        every: function(e) {
            return Fy(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var qy = Kg.forEach
      , Hy = cv("forEach")
      , Vy = Jg("forEach")
      , zy = Hy && Vy ? [].forEach : function(e) {
        return qy(this, e, arguments.length > 1 ? arguments[1] : void 0)
    }
    ;
    wg({
        target: "Array",
        proto: !0,
        forced: [].forEach != zy
    }, {
        forEach: zy
    });
    var Wy = rg.indexOf
      , $y = [].indexOf
      , Ky = !!$y && 1 / [1].indexOf(1, -0) < 0
      , Yy = cv("indexOf")
      , Gy = Jg("indexOf", {
        ACCESSORS: !0,
        1: 0
    });
    wg({
        target: "Array",
        proto: !0,
        forced: Ky || !Yy || !Gy
    }, {
        indexOf: function(e) {
            return Ky ? $y.apply(this, arguments) || 0 : Wy(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Xy = Object.assign
      , Jy = Object.defineProperty
      , Qy = !Xy || Kd((function() {
        if (Yd && 1 !== Xy({
            b: 1
        }, Xy(Jy({}, "a", {
            enumerable: !0,
            get: function() {
                Jy(this, "b", {
                    value: 3,
                    enumerable: !1
                })
            }
        }), {
            b: 2
        })).b)
            return !0;
        var e = {}
          , t = {}
          , n = Symbol();
        return e[n] = 7,
        "abcdefghijklmnopqrst".split("").forEach((function(e) {
            t[e] = e
        }
        )),
        7 != Xy({}, e)[n] || "abcdefghijklmnopqrst" != nm(Xy({}, t)).join("")
    }
    )) ? function(e, t) {
        for (var n = Eg(e), r = arguments.length, i = 1, o = lg.f, a = Jd.f; r > i; )
            for (var s, c = np(arguments[i++]), l = o ? nm(c).concat(o(c)) : nm(c), u = l.length, f = 0; u > f; )
                s = l[f++],
                Yd && !a.call(c, s) || (n[s] = c[s]);
        return n
    }
    : Xy;
    wg({
        target: "Object",
        stat: !0,
        forced: Object.assign !== Qy
    }, {
        assign: Qy
    });
    var Zy = Cg("species")
      , eb = function(e, t) {
        var n, r = gp(e).constructor;
        return void 0 === r || null == (n = gp(r)[Zy]) ? t : Vg(n)
    }
      , tb = ny.charAt
      , nb = function(e, t, n) {
        return t + (n ? tb(e, t).length : 1)
    }
      , rb = [].push
      , ib = Math.min
      , ob = !Kd((function() {
        return !RegExp(4294967295, "y")
    }
    ));
    hy("split", 2, (function(e, t, n) {
        var r;
        return r = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(e, n) {
            var r = String(rp(this))
              , i = void 0 === n ? 4294967295 : n >>> 0;
            if (0 === i)
                return [];
            if (void 0 === e)
                return [r];
            if (!Jv(e))
                return t.call(r, e, i);
            for (var o, a, s, c = [], l = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), u = 0, f = new RegExp(e.source,l + "g"); (o = Wv.call(f, r)) && !((a = f.lastIndex) > u && (c.push(r.slice(u, o.index)),
            o.length > 1 && o.index < r.length && rb.apply(c, o.slice(1)),
            s = o[0].length,
            u = a,
            c.length >= i)); )
                f.lastIndex === o.index && f.lastIndex++;
            return u === r.length ? !s && f.test("") || c.push("") : c.push(r.slice(u)),
            c.length > i ? c.slice(0, i) : c
        }
        : "0".split(void 0, 0).length ? function(e, n) {
            return void 0 === e && 0 === n ? [] : t.call(this, e, n)
        }
        : t,
        [function(t, n) {
            var i = rp(this)
              , o = null == t ? void 0 : t[e];
            return void 0 !== o ? o.call(t, i, n) : r.call(String(i), t, n)
        }
        , function(e, i) {
            var o = n(r, e, this, i, r !== t);
            if (o.done)
                return o.value;
            var a = gp(e)
              , s = String(this)
              , c = eb(a, RegExp)
              , l = a.unicode
              , u = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "") + (ob ? "y" : "g")
              , f = new c(ob ? a : "^(?:" + a.source + ")",u)
              , h = void 0 === i ? 4294967295 : i >>> 0;
            if (0 === h)
                return [];
            if (0 === s.length)
                return null === py(f, s) ? [s] : [];
            for (var d = 0, p = 0, g = []; p < s.length; ) {
                f.lastIndex = ob ? p : 0;
                var m, v = py(f, ob ? s : s.slice(p));
                if (null === v || (m = ib(Qp(f.lastIndex + (ob ? 0 : p)), s.length)) === d)
                    p = nb(s, p, l);
                else {
                    if (g.push(s.slice(d, p)),
                    g.length === h)
                        return g;
                    for (var y = 1; y <= v.length - 1; y++)
                        if (g.push(v[y]),
                        g.length === h)
                            return g;
                    p = d = m
                }
            }
            return g.push(s.slice(d)),
            g
        }
        ]
    }
    ), !ob);
    var ab = kv.trim;
    for (var sb in wg({
        target: "String",
        proto: !0,
        forced: function(e) {
            return Kd((function() {
                return !!mv[e]() || "​᠎" != "​᠎"[e]() || mv[e].name !== e
            }
            ))
        }("trim")
    }, {
        trim: function() {
            return ab(this)
        }
    }),
    Py) {
        var cb = $d[sb]
          , lb = cb && cb.prototype;
        if (lb && lb.forEach !== zy)
            try {
                yp(lb, "forEach", zy)
            } catch (e) {
                lb.forEach = zy
            }
    }
    var ub = Cg("iterator")
      , fb = !Kd((function() {
        var e = new URL("b?a=1&b=2&c=3","http://a")
          , t = e.searchParams
          , n = "";
        return e.pathname = "c%20d",
        t.forEach((function(e, r) {
            t.delete("b"),
            n += r + e
        }
        )),
        !t.sort || "http://a/c%20d?a=1&c=3" !== e.href || "3" !== t.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !t[ub] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== n || "x" !== new URL("http://x",void 0).host
    }
    ))
      , hb = /[^\0-\u007E]/
      , db = /[.\u3002\uFF0E\uFF61]/g
      , pb = Math.floor
      , gb = String.fromCharCode
      , mb = function(e) {
        return e + 22 + 75 * (e < 26)
    }
      , vb = function(e, t, n) {
        var r = 0;
        for (e = n ? pb(e / 700) : e >> 1,
        e += pb(e / t); e > 455; r += 36)
            e = pb(e / 35);
        return pb(r + 36 * e / (e + 38))
    }
      , yb = function(e) {
        var t, n, r = [], i = (e = function(e) {
            for (var t = [], n = 0, r = e.length; n < r; ) {
                var i = e.charCodeAt(n++);
                if (i >= 55296 && i <= 56319 && n < r) {
                    var o = e.charCodeAt(n++);
                    56320 == (64512 & o) ? t.push(((1023 & i) << 10) + (1023 & o) + 65536) : (t.push(i),
                    n--)
                } else
                    t.push(i)
            }
            return t
        }(e)).length, o = 128, a = 0, s = 72;
        for (t = 0; t < e.length; t++)
            (n = e[t]) < 128 && r.push(gb(n));
        var c = r.length
          , l = c;
        for (c && r.push("-"); l < i; ) {
            var u = 2147483647;
            for (t = 0; t < e.length; t++)
                (n = e[t]) >= o && n < u && (u = n);
            var f = l + 1;
            if (u - o > pb((2147483647 - a) / f))
                throw RangeError("Overflow: input needs wider integers to process");
            for (a += (u - o) * f,
            o = u,
            t = 0; t < e.length; t++) {
                if ((n = e[t]) < o && ++a > 2147483647)
                    throw RangeError("Overflow: input needs wider integers to process");
                if (n == o) {
                    for (var h = a, d = 36; ; d += 36) {
                        var p = d <= s ? 1 : d >= s + 26 ? 26 : d - s;
                        if (h < p)
                            break;
                        var g = h - p
                          , m = 36 - p;
                        r.push(gb(mb(p + g % m))),
                        h = pb(g / m)
                    }
                    r.push(gb(mb(h))),
                    s = vb(a, f, l == c),
                    a = 0,
                    ++l
                }
            }
            ++a,
            ++o
        }
        return r.join("")
    }
      , bb = function(e) {
        var t = xm(e);
        if ("function" != typeof t)
            throw TypeError(String(e) + " is not iterable");
        return gp(t.call(e))
    }
      , wb = Kp("fetch")
      , kb = Kp("Headers")
      , Eb = Cg("iterator")
      , Sb = Vp.set
      , _b = Vp.getterFor("URLSearchParams")
      , Tb = Vp.getterFor("URLSearchParamsIterator")
      , Ab = /\+/g
      , xb = Array(4)
      , Ob = function(e) {
        return xb[e - 1] || (xb[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"))
    }
      , Cb = function(e) {
        try {
            return decodeURIComponent(e)
        } catch (t) {
            return e
        }
    }
      , Pb = function(e) {
        var t = e.replace(Ab, " ")
          , n = 4;
        try {
            return decodeURIComponent(t)
        } catch (e) {
            for (; n; )
                t = t.replace(Ob(n--), Cb);
            return t
        }
    }
      , Ib = /[!'()~]|%20/g
      , Rb = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+"
    }
      , jb = function(e) {
        return Rb[e]
    }
      , Lb = function(e) {
        return encodeURIComponent(e).replace(Ib, jb)
    }
      , Mb = function(e, t) {
        if (t)
            for (var n, r, i = t.split("&"), o = 0; o < i.length; )
                (n = i[o++]).length && (r = n.split("="),
                e.push({
                    key: Pb(r.shift()),
                    value: Pb(r.join("="))
                }))
    }
      , Nb = function(e) {
        this.entries.length = 0,
        Mb(this.entries, e)
    }
      , Ub = function(e, t) {
        if (e < t)
            throw TypeError("Not enough arguments")
    }
      , Fb = Qm((function(e, t) {
        Sb(this, {
            type: "URLSearchParamsIterator",
            iterator: bb(_b(e).entries),
            kind: t
        })
    }
    ), "Iterator", (function() {
        var e = Tb(this)
          , t = e.kind
          , n = e.iterator.next()
          , r = n.value;
        return n.done || (n.value = "keys" === t ? r.key : "values" === t ? r.value : [r.key, r.value]),
        n
    }
    ))
      , Db = function() {
        by(this, Db, "URLSearchParams");
        var e, t, n, r, i, o, a, s, c, l = arguments.length > 0 ? arguments[0] : void 0, u = this, f = [];
        if (Sb(u, {
            type: "URLSearchParams",
            entries: f,
            updateURL: function() {},
            updateSearchParams: Nb
        }),
        void 0 !== l)
            if (op(l))
                if ("function" == typeof (e = xm(l)))
                    for (n = (t = e.call(l)).next; !(r = n.call(t)).done; ) {
                        if ((a = (o = (i = bb(gp(r.value))).next).call(i)).done || (s = o.call(i)).done || !o.call(i).done)
                            throw TypeError("Expected sequence with length 2");
                        f.push({
                            key: a.value + "",
                            value: s.value + ""
                        })
                    }
                else
                    for (c in l)
                        cp(l, c) && f.push({
                            key: c,
                            value: l[c] + ""
                        });
            else
                Mb(f, "string" == typeof l ? "?" === l.charAt(0) ? l.slice(1) : l : l + "")
    }
      , Bb = Db.prototype;
    gy(Bb, {
        append: function(e, t) {
            Ub(arguments.length, 2);
            var n = _b(this);
            n.entries.push({
                key: e + "",
                value: t + ""
            }),
            n.updateURL()
        },
        delete: function(e) {
            Ub(arguments.length, 1);
            for (var t = _b(this), n = t.entries, r = e + "", i = 0; i < n.length; )
                n[i].key === r ? n.splice(i, 1) : i++;
            t.updateURL()
        },
        get: function(e) {
            Ub(arguments.length, 1);
            for (var t = _b(this).entries, n = e + "", r = 0; r < t.length; r++)
                if (t[r].key === n)
                    return t[r].value;
            return null
        },
        getAll: function(e) {
            Ub(arguments.length, 1);
            for (var t = _b(this).entries, n = e + "", r = [], i = 0; i < t.length; i++)
                t[i].key === n && r.push(t[i].value);
            return r
        },
        has: function(e) {
            Ub(arguments.length, 1);
            for (var t = _b(this).entries, n = e + "", r = 0; r < t.length; )
                if (t[r++].key === n)
                    return !0;
            return !1
        },
        set: function(e, t) {
            Ub(arguments.length, 1);
            for (var n, r = _b(this), i = r.entries, o = !1, a = e + "", s = t + "", c = 0; c < i.length; c++)
                (n = i[c]).key === a && (o ? i.splice(c--, 1) : (o = !0,
                n.value = s));
            o || i.push({
                key: a,
                value: s
            }),
            r.updateURL()
        },
        sort: function() {
            var e, t, n, r = _b(this), i = r.entries, o = i.slice();
            for (i.length = 0,
            n = 0; n < o.length; n++) {
                for (e = o[n],
                t = 0; t < n; t++)
                    if (i[t].key > e.key) {
                        i.splice(t, 0, e);
                        break
                    }
                t === n && i.push(e)
            }
            r.updateURL()
        },
        forEach: function(e) {
            for (var t, n = _b(this).entries, r = zg(e, arguments.length > 1 ? arguments[1] : void 0, 3), i = 0; i < n.length; )
                r((t = n[i++]).value, t.key, this)
        },
        keys: function() {
            return new Fb(this,"keys")
        },
        values: function() {
            return new Fb(this,"values")
        },
        entries: function() {
            return new Fb(this,"entries")
        }
    }, {
        enumerable: !0
    }),
    zp(Bb, Eb, Bb.entries),
    zp(Bb, "toString", (function() {
        for (var e, t = _b(this).entries, n = [], r = 0; r < t.length; )
            e = t[r++],
            n.push(Lb(e.key) + "=" + Lb(e.value));
        return n.join("&")
    }
    ), {
        enumerable: !0
    }),
    Gm(Db, "URLSearchParams"),
    wg({
        global: !0,
        forced: !fb
    }, {
        URLSearchParams: Db
    }),
    fb || "function" != typeof wb || "function" != typeof kb || wg({
        global: !0,
        enumerable: !0,
        forced: !0
    }, {
        fetch: function(e) {
            var t, n, r, i = [e];
            return arguments.length > 1 && (t = arguments[1],
            op(t) && (n = t.body,
            "URLSearchParams" === Tm(n) && ((r = t.headers ? new kb(t.headers) : new kb).has("content-type") || r.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"),
            t = lm(t, {
                body: Qd(0, String(n)),
                headers: Qd(0, r)
            }))),
            i.push(t)),
            wb.apply(this, i)
        }
    });
    var qb = {
        URLSearchParams: Db,
        getState: _b
    }
      , Hb = ny.codeAt
      , Vb = $d.URL
      , zb = qb.URLSearchParams
      , Wb = qb.getState
      , $b = Vp.set
      , Kb = Vp.getterFor("URL")
      , Yb = Math.floor
      , Gb = Math.pow
      , Xb = /[A-Za-z]/
      , Jb = /[\d+\-.A-Za-z]/
      , Qb = /\d/
      , Zb = /^(0x|0X)/
      , ew = /^[0-7]+$/
      , tw = /^\d+$/
      , nw = /^[\dA-Fa-f]+$/
      , rw = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/
      , iw = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/
      , ow = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g
      , aw = /[\u0009\u000A\u000D]/g
      , sw = function(e, t) {
        var n, r, i;
        if ("[" == t.charAt(0)) {
            if ("]" != t.charAt(t.length - 1))
                return "Invalid host";
            if (!(n = lw(t.slice(1, -1))))
                return "Invalid host";
            e.host = n
        } else if (vw(e)) {
            if (t = function(e) {
                var t, n, r = [], i = e.toLowerCase().replace(db, ".").split(".");
                for (t = 0; t < i.length; t++)
                    n = i[t],
                    r.push(hb.test(n) ? "xn--" + yb(n) : n);
                return r.join(".")
            }(t),
            rw.test(t))
                return "Invalid host";
            if (null === (n = cw(t)))
                return "Invalid host";
            e.host = n
        } else {
            if (iw.test(t))
                return "Invalid host";
            for (n = "",
            r = Om(t),
            i = 0; i < r.length; i++)
                n += gw(r[i], fw);
            e.host = n
        }
    }
      , cw = function(e) {
        var t, n, r, i, o, a, s, c = e.split(".");
        if (c.length && "" == c[c.length - 1] && c.pop(),
        (t = c.length) > 4)
            return e;
        for (n = [],
        r = 0; r < t; r++) {
            if ("" == (i = c[r]))
                return e;
            if (o = 10,
            i.length > 1 && "0" == i.charAt(0) && (o = Zb.test(i) ? 16 : 8,
            i = i.slice(8 == o ? 1 : 2)),
            "" === i)
                a = 0;
            else {
                if (!(10 == o ? tw : 8 == o ? ew : nw).test(i))
                    return e;
                a = parseInt(i, o)
            }
            n.push(a)
        }
        for (r = 0; r < t; r++)
            if (a = n[r],
            r == t - 1) {
                if (a >= Gb(256, 5 - t))
                    return null
            } else if (a > 255)
                return null;
        for (s = n.pop(),
        r = 0; r < n.length; r++)
            s += n[r] * Gb(256, 3 - r);
        return s
    }
      , lw = function(e) {
        var t, n, r, i, o, a, s, c = [0, 0, 0, 0, 0, 0, 0, 0], l = 0, u = null, f = 0, h = function() {
            return e.charAt(f)
        };
        if (":" == h()) {
            if (":" != e.charAt(1))
                return;
            f += 2,
            u = ++l
        }
        for (; h(); ) {
            if (8 == l)
                return;
            if (":" != h()) {
                for (t = n = 0; n < 4 && nw.test(h()); )
                    t = 16 * t + parseInt(h(), 16),
                    f++,
                    n++;
                if ("." == h()) {
                    if (0 == n)
                        return;
                    if (f -= n,
                    l > 6)
                        return;
                    for (r = 0; h(); ) {
                        if (i = null,
                        r > 0) {
                            if (!("." == h() && r < 4))
                                return;
                            f++
                        }
                        if (!Qb.test(h()))
                            return;
                        for (; Qb.test(h()); ) {
                            if (o = parseInt(h(), 10),
                            null === i)
                                i = o;
                            else {
                                if (0 == i)
                                    return;
                                i = 10 * i + o
                            }
                            if (i > 255)
                                return;
                            f++
                        }
                        c[l] = 256 * c[l] + i,
                        2 != ++r && 4 != r || l++
                    }
                    if (4 != r)
                        return;
                    break
                }
                if (":" == h()) {
                    if (f++,
                    !h())
                        return
                } else if (h())
                    return;
                c[l++] = t
            } else {
                if (null !== u)
                    return;
                f++,
                u = ++l
            }
        }
        if (null !== u)
            for (a = l - u,
            l = 7; 0 != l && a > 0; )
                s = c[l],
                c[l--] = c[u + a - 1],
                c[u + --a] = s;
        else if (8 != l)
            return;
        return c
    }
      , uw = function(e) {
        var t, n, r, i;
        if ("number" == typeof e) {
            for (t = [],
            n = 0; n < 4; n++)
                t.unshift(e % 256),
                e = Yb(e / 256);
            return t.join(".")
        }
        if ("object" == typeof e) {
            for (t = "",
            r = function(e) {
                for (var t = null, n = 1, r = null, i = 0, o = 0; o < 8; o++)
                    0 !== e[o] ? (i > n && (t = r,
                    n = i),
                    r = null,
                    i = 0) : (null === r && (r = o),
                    ++i);
                return i > n && (t = r,
                n = i),
                t
            }(e),
            n = 0; n < 8; n++)
                i && 0 === e[n] || (i && (i = !1),
                r === n ? (t += n ? ":" : "::",
                i = !0) : (t += e[n].toString(16),
                n < 7 && (t += ":")));
            return "[" + t + "]"
        }
        return e
    }
      , fw = {}
      , hw = Qy({}, fw, {
        " ": 1,
        '"': 1,
        "<": 1,
        ">": 1,
        "`": 1
    })
      , dw = Qy({}, hw, {
        "#": 1,
        "?": 1,
        "{": 1,
        "}": 1
    })
      , pw = Qy({}, dw, {
        "/": 1,
        ":": 1,
        ";": 1,
        "=": 1,
        "@": 1,
        "[": 1,
        "\\": 1,
        "]": 1,
        "^": 1,
        "|": 1
    })
      , gw = function(e, t) {
        var n = Hb(e, 0);
        return n > 32 && n < 127 && !cp(t, e) ? e : encodeURIComponent(e)
    }
      , mw = {
        ftp: 21,
        file: null,
        http: 80,
        https: 443,
        ws: 80,
        wss: 443
    }
      , vw = function(e) {
        return cp(mw, e.scheme)
    }
      , yw = function(e) {
        return "" != e.username || "" != e.password
    }
      , bw = function(e) {
        return !e.host || e.cannotBeABaseURL || "file" == e.scheme
    }
      , ww = function(e, t) {
        var n;
        return 2 == e.length && Xb.test(e.charAt(0)) && (":" == (n = e.charAt(1)) || !t && "|" == n)
    }
      , kw = function(e) {
        var t;
        return e.length > 1 && ww(e.slice(0, 2)) && (2 == e.length || "/" === (t = e.charAt(2)) || "\\" === t || "?" === t || "#" === t)
    }
      , Ew = function(e) {
        var t = e.path
          , n = t.length;
        !n || "file" == e.scheme && 1 == n && ww(t[0], !0) || t.pop()
    }
      , Sw = function(e) {
        return "." === e || "%2e" === e.toLowerCase()
    }
      , _w = {}
      , Tw = {}
      , Aw = {}
      , xw = {}
      , Ow = {}
      , Cw = {}
      , Pw = {}
      , Iw = {}
      , Rw = {}
      , jw = {}
      , Lw = {}
      , Mw = {}
      , Nw = {}
      , Uw = {}
      , Fw = {}
      , Dw = {}
      , Bw = {}
      , qw = {}
      , Hw = {}
      , Vw = {}
      , zw = {}
      , Ww = function(e, t, n, r) {
        var i, o, a, s, c, l = n || _w, u = 0, f = "", h = !1, d = !1, p = !1;
        for (n || (e.scheme = "",
        e.username = "",
        e.password = "",
        e.host = null,
        e.port = null,
        e.path = [],
        e.query = null,
        e.fragment = null,
        e.cannotBeABaseURL = !1,
        t = t.replace(ow, "")),
        t = t.replace(aw, ""),
        i = Om(t); u <= i.length; ) {
            switch (o = i[u],
            l) {
            case _w:
                if (!o || !Xb.test(o)) {
                    if (n)
                        return "Invalid scheme";
                    l = Aw;
                    continue
                }
                f += o.toLowerCase(),
                l = Tw;
                break;
            case Tw:
                if (o && (Jb.test(o) || "+" == o || "-" == o || "." == o))
                    f += o.toLowerCase();
                else {
                    if (":" != o) {
                        if (n)
                            return "Invalid scheme";
                        f = "",
                        l = Aw,
                        u = 0;
                        continue
                    }
                    if (n && (vw(e) != cp(mw, f) || "file" == f && (yw(e) || null !== e.port) || "file" == e.scheme && !e.host))
                        return;
                    if (e.scheme = f,
                    n)
                        return void (vw(e) && mw[e.scheme] == e.port && (e.port = null));
                    f = "",
                    "file" == e.scheme ? l = Uw : vw(e) && r && r.scheme == e.scheme ? l = xw : vw(e) ? l = Iw : "/" == i[u + 1] ? (l = Ow,
                    u++) : (e.cannotBeABaseURL = !0,
                    e.path.push(""),
                    l = Hw)
                }
                break;
            case Aw:
                if (!r || r.cannotBeABaseURL && "#" != o)
                    return "Invalid scheme";
                if (r.cannotBeABaseURL && "#" == o) {
                    e.scheme = r.scheme,
                    e.path = r.path.slice(),
                    e.query = r.query,
                    e.fragment = "",
                    e.cannotBeABaseURL = !0,
                    l = zw;
                    break
                }
                l = "file" == r.scheme ? Uw : Cw;
                continue;
            case xw:
                if ("/" != o || "/" != i[u + 1]) {
                    l = Cw;
                    continue
                }
                l = Rw,
                u++;
                break;
            case Ow:
                if ("/" == o) {
                    l = jw;
                    break
                }
                l = qw;
                continue;
            case Cw:
                if (e.scheme = r.scheme,
                null == o)
                    e.username = r.username,
                    e.password = r.password,
                    e.host = r.host,
                    e.port = r.port,
                    e.path = r.path.slice(),
                    e.query = r.query;
                else if ("/" == o || "\\" == o && vw(e))
                    l = Pw;
                else if ("?" == o)
                    e.username = r.username,
                    e.password = r.password,
                    e.host = r.host,
                    e.port = r.port,
                    e.path = r.path.slice(),
                    e.query = "",
                    l = Vw;
                else {
                    if ("#" != o) {
                        e.username = r.username,
                        e.password = r.password,
                        e.host = r.host,
                        e.port = r.port,
                        e.path = r.path.slice(),
                        e.path.pop(),
                        l = qw;
                        continue
                    }
                    e.username = r.username,
                    e.password = r.password,
                    e.host = r.host,
                    e.port = r.port,
                    e.path = r.path.slice(),
                    e.query = r.query,
                    e.fragment = "",
                    l = zw
                }
                break;
            case Pw:
                if (!vw(e) || "/" != o && "\\" != o) {
                    if ("/" != o) {
                        e.username = r.username,
                        e.password = r.password,
                        e.host = r.host,
                        e.port = r.port,
                        l = qw;
                        continue
                    }
                    l = jw
                } else
                    l = Rw;
                break;
            case Iw:
                if (l = Rw,
                "/" != o || "/" != f.charAt(u + 1))
                    continue;
                u++;
                break;
            case Rw:
                if ("/" != o && "\\" != o) {
                    l = jw;
                    continue
                }
                break;
            case jw:
                if ("@" == o) {
                    h && (f = "%40" + f),
                    h = !0,
                    a = Om(f);
                    for (var g = 0; g < a.length; g++) {
                        var m = a[g];
                        if (":" != m || p) {
                            var v = gw(m, pw);
                            p ? e.password += v : e.username += v
                        } else
                            p = !0
                    }
                    f = ""
                } else if (null == o || "/" == o || "?" == o || "#" == o || "\\" == o && vw(e)) {
                    if (h && "" == f)
                        return "Invalid authority";
                    u -= Om(f).length + 1,
                    f = "",
                    l = Lw
                } else
                    f += o;
                break;
            case Lw:
            case Mw:
                if (n && "file" == e.scheme) {
                    l = Dw;
                    continue
                }
                if (":" != o || d) {
                    if (null == o || "/" == o || "?" == o || "#" == o || "\\" == o && vw(e)) {
                        if (vw(e) && "" == f)
                            return "Invalid host";
                        if (n && "" == f && (yw(e) || null !== e.port))
                            return;
                        if (s = sw(e, f))
                            return s;
                        if (f = "",
                        l = Bw,
                        n)
                            return;
                        continue
                    }
                    "[" == o ? d = !0 : "]" == o && (d = !1),
                    f += o
                } else {
                    if ("" == f)
                        return "Invalid host";
                    if (s = sw(e, f))
                        return s;
                    if (f = "",
                    l = Nw,
                    n == Mw)
                        return
                }
                break;
            case Nw:
                if (!Qb.test(o)) {
                    if (null == o || "/" == o || "?" == o || "#" == o || "\\" == o && vw(e) || n) {
                        if ("" != f) {
                            var y = parseInt(f, 10);
                            if (y > 65535)
                                return "Invalid port";
                            e.port = vw(e) && y === mw[e.scheme] ? null : y,
                            f = ""
                        }
                        if (n)
                            return;
                        l = Bw;
                        continue
                    }
                    return "Invalid port"
                }
                f += o;
                break;
            case Uw:
                if (e.scheme = "file",
                "/" == o || "\\" == o)
                    l = Fw;
                else {
                    if (!r || "file" != r.scheme) {
                        l = qw;
                        continue
                    }
                    if (null == o)
                        e.host = r.host,
                        e.path = r.path.slice(),
                        e.query = r.query;
                    else if ("?" == o)
                        e.host = r.host,
                        e.path = r.path.slice(),
                        e.query = "",
                        l = Vw;
                    else {
                        if ("#" != o) {
                            kw(i.slice(u).join("")) || (e.host = r.host,
                            e.path = r.path.slice(),
                            Ew(e)),
                            l = qw;
                            continue
                        }
                        e.host = r.host,
                        e.path = r.path.slice(),
                        e.query = r.query,
                        e.fragment = "",
                        l = zw
                    }
                }
                break;
            case Fw:
                if ("/" == o || "\\" == o) {
                    l = Dw;
                    break
                }
                r && "file" == r.scheme && !kw(i.slice(u).join("")) && (ww(r.path[0], !0) ? e.path.push(r.path[0]) : e.host = r.host),
                l = qw;
                continue;
            case Dw:
                if (null == o || "/" == o || "\\" == o || "?" == o || "#" == o) {
                    if (!n && ww(f))
                        l = qw;
                    else if ("" == f) {
                        if (e.host = "",
                        n)
                            return;
                        l = Bw
                    } else {
                        if (s = sw(e, f))
                            return s;
                        if ("localhost" == e.host && (e.host = ""),
                        n)
                            return;
                        f = "",
                        l = Bw
                    }
                    continue
                }
                f += o;
                break;
            case Bw:
                if (vw(e)) {
                    if (l = qw,
                    "/" != o && "\\" != o)
                        continue
                } else if (n || "?" != o)
                    if (n || "#" != o) {
                        if (null != o && (l = qw,
                        "/" != o))
                            continue
                    } else
                        e.fragment = "",
                        l = zw;
                else
                    e.query = "",
                    l = Vw;
                break;
            case qw:
                if (null == o || "/" == o || "\\" == o && vw(e) || !n && ("?" == o || "#" == o)) {
                    if (".." === (c = (c = f).toLowerCase()) || "%2e." === c || ".%2e" === c || "%2e%2e" === c ? (Ew(e),
                    "/" == o || "\\" == o && vw(e) || e.path.push("")) : Sw(f) ? "/" == o || "\\" == o && vw(e) || e.path.push("") : ("file" == e.scheme && !e.path.length && ww(f) && (e.host && (e.host = ""),
                    f = f.charAt(0) + ":"),
                    e.path.push(f)),
                    f = "",
                    "file" == e.scheme && (null == o || "?" == o || "#" == o))
                        for (; e.path.length > 1 && "" === e.path[0]; )
                            e.path.shift();
                    "?" == o ? (e.query = "",
                    l = Vw) : "#" == o && (e.fragment = "",
                    l = zw)
                } else
                    f += gw(o, dw);
                break;
            case Hw:
                "?" == o ? (e.query = "",
                l = Vw) : "#" == o ? (e.fragment = "",
                l = zw) : null != o && (e.path[0] += gw(o, fw));
                break;
            case Vw:
                n || "#" != o ? null != o && ("'" == o && vw(e) ? e.query += "%27" : e.query += "#" == o ? "%23" : gw(o, fw)) : (e.fragment = "",
                l = zw);
                break;
            case zw:
                null != o && (e.fragment += gw(o, hw))
            }
            u++
        }
    }
      , $w = function(e) {
        var t, n, r = by(this, $w, "URL"), i = arguments.length > 1 ? arguments[1] : void 0, o = String(e), a = $b(r, {
            type: "URL"
        });
        if (void 0 !== i)
            if (i instanceof $w)
                t = Kb(i);
            else if (n = Ww(t = {}, String(i)))
                throw TypeError(n);
        if (n = Ww(a, o, null, t))
            throw TypeError(n);
        var s = a.searchParams = new zb
          , c = Wb(s);
        c.updateSearchParams(a.query),
        c.updateURL = function() {
            a.query = String(s) || null
        }
        ,
        Yd || (r.href = Yw.call(r),
        r.origin = Gw.call(r),
        r.protocol = Xw.call(r),
        r.username = Jw.call(r),
        r.password = Qw.call(r),
        r.host = Zw.call(r),
        r.hostname = ek.call(r),
        r.port = tk.call(r),
        r.pathname = nk.call(r),
        r.search = rk.call(r),
        r.searchParams = ik.call(r),
        r.hash = ok.call(r))
    }
      , Kw = $w.prototype
      , Yw = function() {
        var e = Kb(this)
          , t = e.scheme
          , n = e.username
          , r = e.password
          , i = e.host
          , o = e.port
          , a = e.path
          , s = e.query
          , c = e.fragment
          , l = t + ":";
        return null !== i ? (l += "//",
        yw(e) && (l += n + (r ? ":" + r : "") + "@"),
        l += uw(i),
        null !== o && (l += ":" + o)) : "file" == t && (l += "//"),
        l += e.cannotBeABaseURL ? a[0] : a.length ? "/" + a.join("/") : "",
        null !== s && (l += "?" + s),
        null !== c && (l += "#" + c),
        l
    }
      , Gw = function() {
        var e = Kb(this)
          , t = e.scheme
          , n = e.port;
        if ("blob" == t)
            try {
                return new URL(t.path[0]).origin
            } catch (e) {
                return "null"
            }
        return "file" != t && vw(e) ? t + "://" + uw(e.host) + (null !== n ? ":" + n : "") : "null"
    }
      , Xw = function() {
        return Kb(this).scheme + ":"
    }
      , Jw = function() {
        return Kb(this).username
    }
      , Qw = function() {
        return Kb(this).password
    }
      , Zw = function() {
        var e = Kb(this)
          , t = e.host
          , n = e.port;
        return null === t ? "" : null === n ? uw(t) : uw(t) + ":" + n
    }
      , ek = function() {
        var e = Kb(this).host;
        return null === e ? "" : uw(e)
    }
      , tk = function() {
        var e = Kb(this).port;
        return null === e ? "" : String(e)
    }
      , nk = function() {
        var e = Kb(this)
          , t = e.path;
        return e.cannotBeABaseURL ? t[0] : t.length ? "/" + t.join("/") : ""
    }
      , rk = function() {
        var e = Kb(this).query;
        return e ? "?" + e : ""
    }
      , ik = function() {
        return Kb(this).searchParams
    }
      , ok = function() {
        var e = Kb(this).fragment;
        return e ? "#" + e : ""
    }
      , ak = function(e, t) {
        return {
            get: e,
            set: t,
            configurable: !0,
            enumerable: !0
        }
    };
    if (Yd && rm(Kw, {
        href: ak(Yw, (function(e) {
            var t = Kb(this)
              , n = String(e)
              , r = Ww(t, n);
            if (r)
                throw TypeError(r);
            Wb(t.searchParams).updateSearchParams(t.query)
        }
        )),
        origin: ak(Gw),
        protocol: ak(Xw, (function(e) {
            var t = Kb(this);
            Ww(t, String(e) + ":", _w)
        }
        )),
        username: ak(Jw, (function(e) {
            var t = Kb(this)
              , n = Om(String(e));
            if (!bw(t)) {
                t.username = "";
                for (var r = 0; r < n.length; r++)
                    t.username += gw(n[r], pw)
            }
        }
        )),
        password: ak(Qw, (function(e) {
            var t = Kb(this)
              , n = Om(String(e));
            if (!bw(t)) {
                t.password = "";
                for (var r = 0; r < n.length; r++)
                    t.password += gw(n[r], pw)
            }
        }
        )),
        host: ak(Zw, (function(e) {
            var t = Kb(this);
            t.cannotBeABaseURL || Ww(t, String(e), Lw)
        }
        )),
        hostname: ak(ek, (function(e) {
            var t = Kb(this);
            t.cannotBeABaseURL || Ww(t, String(e), Mw)
        }
        )),
        port: ak(tk, (function(e) {
            var t = Kb(this);
            bw(t) || ("" == (e = String(e)) ? t.port = null : Ww(t, e, Nw))
        }
        )),
        pathname: ak(nk, (function(e) {
            var t = Kb(this);
            t.cannotBeABaseURL || (t.path = [],
            Ww(t, e + "", Bw))
        }
        )),
        search: ak(rk, (function(e) {
            var t = Kb(this);
            "" == (e = String(e)) ? t.query = null : ("?" == e.charAt(0) && (e = e.slice(1)),
            t.query = "",
            Ww(t, e, Vw)),
            Wb(t.searchParams).updateSearchParams(t.query)
        }
        )),
        searchParams: ak(ik),
        hash: ak(ok, (function(e) {
            var t = Kb(this);
            "" != (e = String(e)) ? ("#" == e.charAt(0) && (e = e.slice(1)),
            t.fragment = "",
            Ww(t, e, zw)) : t.fragment = null
        }
        ))
    }),
    zp(Kw, "toJSON", (function() {
        return Yw.call(this)
    }
    ), {
        enumerable: !0
    }),
    zp(Kw, "toString", (function() {
        return Yw.call(this)
    }
    ), {
        enumerable: !0
    }),
    Vb) {
        var sk = Vb.createObjectURL
          , ck = Vb.revokeObjectURL;
        sk && zp($w, "createObjectURL", (function(e) {
            return sk.apply(Vb, arguments)
        }
        )),
        ck && zp($w, "revokeObjectURL", (function(e) {
            return ck.apply(Vb, arguments)
        }
        ))
    }
    Gm($w, "URL"),
    wg({
        global: !0,
        forced: !fb,
        sham: !Yd
    }, {
        URL: $w
    });
    var lk = Kg.some
      , uk = cv("some")
      , fk = Jg("some");
    wg({
        target: "Array",
        proto: !0,
        forced: !uk || !fk
    }, {
        some: function(e) {
            return lk(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var hk = "".repeat || function(e) {
        var t = String(rp(this))
          , n = ""
          , r = Xp(e);
        if (r < 0 || r == 1 / 0)
            throw RangeError("Wrong number of repetitions");
        for (; r > 0; (r >>>= 1) && (t += t))
            1 & r && (n += t);
        return n
    }
      , dk = 1..toFixed
      , pk = Math.floor
      , gk = function(e, t, n) {
        return 0 === t ? n : t % 2 == 1 ? gk(e, t - 1, n * e) : gk(e * e, t / 2, n)
    }
      , mk = dk && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !Kd((function() {
        dk.call({})
    }
    ));
    wg({
        target: "Number",
        proto: !0,
        forced: mk
    }, {
        toFixed: function(e) {
            var t, n, r, i, o = function(e) {
                if ("number" != typeof e && "Number" != ep(e))
                    throw TypeError("Incorrect invocation");
                return +e
            }(this), a = Xp(e), s = [0, 0, 0, 0, 0, 0], c = "", l = "0", u = function(e, t) {
                for (var n = -1, r = t; ++n < 6; )
                    r += e * s[n],
                    s[n] = r % 1e7,
                    r = pk(r / 1e7)
            }, f = function(e) {
                for (var t = 6, n = 0; --t >= 0; )
                    n += s[t],
                    s[t] = pk(n / e),
                    n = n % e * 1e7
            }, h = function() {
                for (var e = 6, t = ""; --e >= 0; )
                    if ("" !== t || 0 === e || 0 !== s[e]) {
                        var n = String(s[e]);
                        t = "" === t ? n : t + hk.call("0", 7 - n.length) + n
                    }
                return t
            };
            if (a < 0 || a > 20)
                throw RangeError("Incorrect fraction digits");
            if (o != o)
                return "NaN";
            if (o <= -1e21 || o >= 1e21)
                return String(o);
            if (o < 0 && (c = "-",
            o = -o),
            o > 1e-21)
                if (n = (t = function(e) {
                    for (var t = 0, n = e; n >= 4096; )
                        t += 12,
                        n /= 4096;
                    for (; n >= 2; )
                        t += 1,
                        n /= 2;
                    return t
                }(o * gk(2, 69, 1)) - 69) < 0 ? o * gk(2, -t, 1) : o / gk(2, t, 1),
                n *= 4503599627370496,
                (t = 52 - t) > 0) {
                    for (u(0, n),
                    r = a; r >= 7; )
                        u(1e7, 0),
                        r -= 7;
                    for (u(gk(10, r, 1), 0),
                    r = t - 1; r >= 23; )
                        f(1 << 23),
                        r -= 23;
                    f(1 << r),
                    u(1, 1),
                    f(2),
                    l = h()
                } else
                    u(0, n),
                    u(1 << -t, 0),
                    l = h() + hk.call("0", a);
            return l = a > 0 ? c + ((i = l.length) <= a ? "0." + hk.call("0", a - i) + l : l.slice(0, i - a) + "." + l.slice(i - a)) : c + l
        }
    });
    var vk = Jd.f
      , yk = function(e) {
        return function(t) {
            for (var n, r = ip(t), i = nm(r), o = i.length, a = 0, s = []; o > a; )
                n = i[a++],
                Yd && !vk.call(r, n) || s.push(e ? [n, r[n]] : r[n]);
            return s
        }
    }
      , bk = {
        entries: yk(!0),
        values: yk(!1)
    }
      , wk = bk.entries;
    wg({
        target: "Object",
        stat: !0
    }, {
        entries: function(e) {
            return wk(e)
        }
    });
    var kk = bk.values;
    wg({
        target: "Object",
        stat: !0
    }, {
        values: function(e) {
            return kk(e)
        }
    });
    var Ek = Math.max
      , Sk = Math.min
      , _k = Math.floor
      , Tk = /\$([$&'`]|\d\d?|<[^>]*>)/g
      , Ak = /\$([$&'`]|\d\d?)/g;
    hy("replace", 2, (function(e, t, n, r) {
        var i = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
          , o = r.REPLACE_KEEPS_$0
          , a = i ? "$" : "$0";
        return [function(n, r) {
            var i = rp(this)
              , o = null == n ? void 0 : n[e];
            return void 0 !== o ? o.call(n, i, r) : t.call(String(i), n, r)
        }
        , function(e, r) {
            if (!i && o || "string" == typeof r && -1 === r.indexOf(a)) {
                var c = n(t, e, this, r);
                if (c.done)
                    return c.value
            }
            var l = gp(e)
              , u = String(this)
              , f = "function" == typeof r;
            f || (r = String(r));
            var h = l.global;
            if (h) {
                var d = l.unicode;
                l.lastIndex = 0
            }
            for (var p = []; ; ) {
                var g = py(l, u);
                if (null === g)
                    break;
                if (p.push(g),
                !h)
                    break;
                "" === String(g[0]) && (l.lastIndex = nb(u, Qp(l.lastIndex), d))
            }
            for (var m, v = "", y = 0, b = 0; b < p.length; b++) {
                g = p[b];
                for (var w = String(g[0]), k = Ek(Sk(Xp(g.index), u.length), 0), E = [], S = 1; S < g.length; S++)
                    E.push(void 0 === (m = g[S]) ? m : String(m));
                var _ = g.groups;
                if (f) {
                    var T = [w].concat(E, k, u);
                    void 0 !== _ && T.push(_);
                    var A = String(r.apply(void 0, T))
                } else
                    A = s(w, u, k, E, _, r);
                k >= y && (v += u.slice(y, k) + A,
                y = k + w.length)
            }
            return v + u.slice(y)
        }
        ];
        function s(e, n, r, i, o, a) {
            var s = r + e.length
              , c = i.length
              , l = Ak;
            return void 0 !== o && (o = Eg(o),
            l = Tk),
            t.call(a, l, (function(t, a) {
                var l;
                switch (a.charAt(0)) {
                case "$":
                    return "$";
                case "&":
                    return e;
                case "`":
                    return n.slice(0, r);
                case "'":
                    return n.slice(s);
                case "<":
                    l = o[a.slice(1, -1)];
                    break;
                default:
                    var u = +a;
                    if (0 === u)
                        return t;
                    if (u > c) {
                        var f = _k(u / 10);
                        return 0 === f ? t : f <= c ? void 0 === i[f - 1] ? a.charAt(1) : i[f - 1] + a.charAt(1) : t
                    }
                    l = i[u - 1]
                }
                return void 0 === l ? "" : l
            }
            ))
        }
    }
    ));
    var xk = {
        addCSS: !0,
        thumbWidth: 15,
        watch: !0
    };
    function Ok(e, t) {
        return function() {
            return Array.from(document.querySelectorAll(t)).includes(this)
        }
        .call(e, t)
    }
    wg({
        target: "Number",
        stat: !0
    }, {
        isNaN: function(e) {
            return e != e
        }
    });
    var Ck = function(e) {
        return null != e ? e.constructor : null
    }
      , Pk = function(e, t) {
        return Boolean(e && t && e instanceof t)
    }
      , Ik = function(e) {
        return null == e
    }
      , Rk = function(e) {
        return Ck(e) === Object
    }
      , jk = function(e) {
        return Ck(e) === String
    }
      , Lk = function(e) {
        return Array.isArray(e)
    }
      , Mk = function(e) {
        return Pk(e, NodeList)
    }
      , Nk = jk
      , Uk = Lk
      , Fk = Mk
      , Dk = function(e) {
        return Pk(e, Element)
    }
      , Bk = function(e) {
        return Pk(e, Event)
    }
      , qk = function(e) {
        return Ik(e) || (jk(e) || Lk(e) || Mk(e)) && !e.length || Rk(e) && !Object.keys(e).length
    };
    function Hk(e, t) {
        if (t < 1) {
            var n = function(e) {
                var t = "".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0
            }(t);
            return parseFloat(e.toFixed(n))
        }
        return Math.round(e / t) * t
    }
    hy("match", 1, (function(e, t, n) {
        return [function(t) {
            var n = rp(this)
              , r = null == t ? void 0 : t[e];
            return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n))
        }
        , function(e) {
            var r = n(t, e, this);
            if (r.done)
                return r.value;
            var i = gp(e)
              , o = String(this);
            if (!i.global)
                return py(i, o);
            var a = i.unicode;
            i.lastIndex = 0;
            for (var s, c = [], l = 0; null !== (s = py(i, o)); ) {
                var u = String(s[0]);
                c[l] = u,
                "" === u && (i.lastIndex = nb(o, Qp(i.lastIndex), a)),
                l++
            }
            return 0 === l ? null : c
        }
        ]
    }
    ));
    var Vk, zk, Wk, $k = function() {
        function e(t, n) {
            Pa(this, e),
            Dk(t) ? this.element = t : Nk(t) && (this.element = document.querySelector(t)),
            Dk(this.element) && qk(this.element.rangeTouch) && (this.config = Object.assign({}, xk, n),
            this.init())
        }
        return Ra(e, [{
            key: "init",
            value: function() {
                e.enabled && (this.config.addCSS && (this.element.style.userSelect = "none",
                this.element.style.webKitUserSelect = "none",
                this.element.style.touchAction = "manipulation"),
                this.listeners(!0),
                this.element.rangeTouch = this)
            }
        }, {
            key: "destroy",
            value: function() {
                e.enabled && (this.listeners(!1),
                this.element.rangeTouch = null)
            }
        }, {
            key: "listeners",
            value: function(e) {
                var t = this
                  , n = e ? "addEventListener" : "removeEventListener";
                ["touchstart", "touchmove", "touchend"].forEach((function(e) {
                    t.element[n](e, (function(e) {
                        return t.set(e)
                    }
                    ), !1)
                }
                ))
            }
        }, {
            key: "get",
            value: function(t) {
                if (!e.enabled || !Bk(t))
                    return null;
                var n, r = t.target, i = t.changedTouches[0], o = parseFloat(r.getAttribute("min")) || 0, a = parseFloat(r.getAttribute("max")) || 100, s = parseFloat(r.getAttribute("step")) || 1, c = a - o, l = r.getBoundingClientRect(), u = 100 / l.width * (this.config.thumbWidth / 2) / 100;
                return (n = 100 / l.width * (i.clientX - l.left)) < 0 ? n = 0 : n > 100 && (n = 100),
                n < 50 ? n -= (100 - 2 * n) * u : n > 50 && (n += 2 * (n - 50) * u),
                o + Hk(c * (n / 100), s)
            }
        }, {
            key: "set",
            value: function(t) {
                e.enabled && Bk(t) && !t.target.disabled && (t.preventDefault(),
                t.target.value = this.get(t),
                function(e, t) {
                    if (e && t) {
                        var n = new Event(t);
                        e.dispatchEvent(n)
                    }
                }(t.target, "touchend" === t.type ? "change" : "input"))
            }
        }], [{
            key: "setup",
            value: function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , r = null;
                if (qk(t) || Nk(t) ? r = Array.from(document.querySelectorAll(Nk(t) ? t : 'input[type="range"]')) : Dk(t) ? r = [t] : Fk(t) ? r = Array.from(t) : Uk(t) && (r = t.filter(Dk)),
                qk(r))
                    return null;
                var i = Object.assign({}, xk, n);
                if (Nk(t) && i.watch) {
                    var o = new MutationObserver((function(n) {
                        Array.from(n).forEach((function(n) {
                            Array.from(n.addedNodes).forEach((function(n) {
                                if (Dk(n) && Ok(n, t))
                                    new e(n,i)
                            }
                            ))
                        }
                        ))
                    }
                    ));
                    o.observe(document.body, {
                        childList: !0,
                        subtree: !0
                    })
                }
                return r.map((function(t) {
                    return new e(t,n)
                }
                ))
            }
        }, {
            key: "enabled",
            get: function() {
                return "ontouchstart"in document.documentElement
            }
        }]),
        e
    }(), Kk = $d.Promise, Yk = Cg("species"), Gk = function(e) {
        var t = Kp(e)
          , n = vp.f;
        Yd && t && !t[Yk] && n(t, Yk, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }, Xk = /(iphone|ipod|ipad).*applewebkit/i.test(Rg), Jk = $d.location, Qk = $d.setImmediate, Zk = $d.clearImmediate, eE = $d.process, tE = $d.MessageChannel, nE = $d.Dispatch, rE = 0, iE = {}, oE = function(e) {
        if (iE.hasOwnProperty(e)) {
            var t = iE[e];
            delete iE[e],
            t()
        }
    }, aE = function(e) {
        return function() {
            oE(e)
        }
    }, sE = function(e) {
        oE(e.data)
    }, cE = function(e) {
        $d.postMessage(e + "", Jk.protocol + "//" + Jk.host)
    };
    Qk && Zk || (Qk = function(e) {
        for (var t = [], n = 1; arguments.length > n; )
            t.push(arguments[n++]);
        return iE[++rE] = function() {
            ("function" == typeof e ? e : Function(e)).apply(void 0, t)
        }
        ,
        Vk(rE),
        rE
    }
    ,
    Zk = function(e) {
        delete iE[e]
    }
    ,
    "process" == ep(eE) ? Vk = function(e) {
        eE.nextTick(aE(e))
    }
    : nE && nE.now ? Vk = function(e) {
        nE.now(aE(e))
    }
    : tE && !Xk ? (Wk = (zk = new tE).port2,
    zk.port1.onmessage = sE,
    Vk = zg(Wk.postMessage, Wk, 1)) : !$d.addEventListener || "function" != typeof postMessage || $d.importScripts || Kd(cE) ? Vk = "onreadystatechange"in fp("script") ? function(e) {
        im.appendChild(fp("script")).onreadystatechange = function() {
            im.removeChild(this),
            oE(e)
        }
    }
    : function(e) {
        setTimeout(aE(e), 0)
    }
    : (Vk = cE,
    $d.addEventListener("message", sE, !1)));
    var lE, uE, fE, hE, dE, pE, gE, mE, vE = {
        set: Qk,
        clear: Zk
    }, yE = pp.f, bE = vE.set, wE = $d.MutationObserver || $d.WebKitMutationObserver, kE = $d.process, EE = $d.Promise, SE = "process" == ep(kE), _E = yE($d, "queueMicrotask"), TE = _E && _E.value;
    TE || (lE = function() {
        var e, t;
        for (SE && (e = kE.domain) && e.exit(); uE; ) {
            t = uE.fn,
            uE = uE.next;
            try {
                t()
            } catch (e) {
                throw uE ? hE() : fE = void 0,
                e
            }
        }
        fE = void 0,
        e && e.enter()
    }
    ,
    SE ? hE = function() {
        kE.nextTick(lE)
    }
    : wE && !Xk ? (dE = !0,
    pE = document.createTextNode(""),
    new wE(lE).observe(pE, {
        characterData: !0
    }),
    hE = function() {
        pE.data = dE = !dE
    }
    ) : EE && EE.resolve ? (gE = EE.resolve(void 0),
    mE = gE.then,
    hE = function() {
        mE.call(gE, lE)
    }
    ) : hE = function() {
        bE.call($d, lE)
    }
    );
    var AE, xE, OE, CE, PE = TE || function(e) {
        var t = {
            fn: e,
            next: void 0
        };
        fE && (fE.next = t),
        uE || (uE = t,
        hE()),
        fE = t
    }
    , IE = function(e) {
        var t, n;
        this.promise = new e((function(e, r) {
            if (void 0 !== t || void 0 !== n)
                throw TypeError("Bad Promise constructor");
            t = e,
            n = r
        }
        )),
        this.resolve = Vg(t),
        this.reject = Vg(n)
    }, RE = {
        f: function(e) {
            return new IE(e)
        }
    }, jE = function(e, t) {
        if (gp(e),
        op(t) && t.constructor === e)
            return t;
        var n = RE.f(e);
        return (0,
        n.resolve)(t),
        n.promise
    }, LE = function(e) {
        try {
            return {
                error: !1,
                value: e()
            }
        } catch (e) {
            return {
                error: !0,
                value: e
            }
        }
    }, ME = vE.set, NE = Cg("species"), UE = Vp.get, FE = Vp.set, DE = Vp.getterFor("Promise"), BE = Kk, qE = $d.TypeError, HE = $d.document, VE = $d.process, zE = Kp("fetch"), WE = RE.f, $E = WE, KE = "process" == ep(VE), YE = !!(HE && HE.createEvent && $d.dispatchEvent), GE = yg("Promise", (function() {
        if (!(Tp(BE) !== String(BE))) {
            if (66 === Ng)
                return !0;
            if (!KE && "function" != typeof PromiseRejectionEvent)
                return !0
        }
        if (Ng >= 51 && /native code/.test(BE))
            return !1;
        var e = BE.resolve(1)
          , t = function(e) {
            e((function() {}
            ), (function() {}
            ))
        };
        return (e.constructor = {})[NE] = t,
        !(e.then((function() {}
        ))instanceof t)
    }
    )), XE = GE || !jm((function(e) {
        BE.all(e).catch((function() {}
        ))
    }
    )), JE = function(e) {
        var t;
        return !(!op(e) || "function" != typeof (t = e.then)) && t
    }, QE = function(e, t, n) {
        if (!t.notified) {
            t.notified = !0;
            var r = t.reactions;
            PE((function() {
                for (var i = t.value, o = 1 == t.state, a = 0; r.length > a; ) {
                    var s, c, l, u = r[a++], f = o ? u.ok : u.fail, h = u.resolve, d = u.reject, p = u.domain;
                    try {
                        f ? (o || (2 === t.rejection && nS(e, t),
                        t.rejection = 1),
                        !0 === f ? s = i : (p && p.enter(),
                        s = f(i),
                        p && (p.exit(),
                        l = !0)),
                        s === u.promise ? d(qE("Promise-chain cycle")) : (c = JE(s)) ? c.call(s, h, d) : h(s)) : d(i)
                    } catch (e) {
                        p && !l && p.exit(),
                        d(e)
                    }
                }
                t.reactions = [],
                t.notified = !1,
                n && !t.rejection && eS(e, t)
            }
            ))
        }
    }, ZE = function(e, t, n) {
        var r, i;
        YE ? ((r = HE.createEvent("Event")).promise = t,
        r.reason = n,
        r.initEvent(e, !1, !0),
        $d.dispatchEvent(r)) : r = {
            promise: t,
            reason: n
        },
        (i = $d["on" + e]) ? i(r) : "unhandledrejection" === e && function(e, t) {
            var n = $d.console;
            n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t))
        }("Unhandled promise rejection", n)
    }, eS = function(e, t) {
        ME.call($d, (function() {
            var n, r = t.value;
            if (tS(t) && (n = LE((function() {
                KE ? VE.emit("unhandledRejection", r, e) : ZE("unhandledrejection", e, r)
            }
            )),
            t.rejection = KE || tS(t) ? 2 : 1,
            n.error))
                throw n.value
        }
        ))
    }, tS = function(e) {
        return 1 !== e.rejection && !e.parent
    }, nS = function(e, t) {
        ME.call($d, (function() {
            KE ? VE.emit("rejectionHandled", e) : ZE("rejectionhandled", e, t.value)
        }
        ))
    }, rS = function(e, t, n, r) {
        return function(i) {
            e(t, n, i, r)
        }
    }, iS = function(e, t, n, r) {
        t.done || (t.done = !0,
        r && (t = r),
        t.value = n,
        t.state = 2,
        QE(e, t, !0))
    }, oS = function(e, t, n, r) {
        if (!t.done) {
            t.done = !0,
            r && (t = r);
            try {
                if (e === n)
                    throw qE("Promise can't be resolved itself");
                var i = JE(n);
                i ? PE((function() {
                    var r = {
                        done: !1
                    };
                    try {
                        i.call(n, rS(oS, e, r, t), rS(iS, e, r, t))
                    } catch (n) {
                        iS(e, r, n, t)
                    }
                }
                )) : (t.value = n,
                t.state = 1,
                QE(e, t, !1))
            } catch (n) {
                iS(e, {
                    done: !1
                }, n, t)
            }
        }
    };
    GE && (BE = function(e) {
        by(this, BE, "Promise"),
        Vg(e),
        AE.call(this);
        var t = UE(this);
        try {
            e(rS(oS, this, t), rS(iS, this, t))
        } catch (e) {
            iS(this, t, e)
        }
    }
    ,
    (AE = function(e) {
        FE(this, {
            type: "Promise",
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: 0,
            value: void 0
        })
    }
    ).prototype = gy(BE.prototype, {
        then: function(e, t) {
            var n = DE(this)
              , r = WE(eb(this, BE));
            return r.ok = "function" != typeof e || e,
            r.fail = "function" == typeof t && t,
            r.domain = KE ? VE.domain : void 0,
            n.parent = !0,
            n.reactions.push(r),
            0 != n.state && QE(this, n, !1),
            r.promise
        },
        catch: function(e) {
            return this.then(void 0, e)
        }
    }),
    xE = function() {
        var e = new AE
          , t = UE(e);
        this.promise = e,
        this.resolve = rS(oS, e, t),
        this.reject = rS(iS, e, t)
    }
    ,
    RE.f = WE = function(e) {
        return e === BE || e === OE ? new xE(e) : $E(e)
    }
    ,
    "function" == typeof Kk && (CE = Kk.prototype.then,
    zp(Kk.prototype, "then", (function(e, t) {
        var n = this;
        return new BE((function(e, t) {
            CE.call(n, e, t)
        }
        )).then(e, t)
    }
    ), {
        unsafe: !0
    }),
    "function" == typeof zE && wg({
        global: !0,
        enumerable: !0,
        forced: !0
    }, {
        fetch: function(e) {
            return jE(BE, zE.apply($d, arguments))
        }
    }))),
    wg({
        global: !0,
        wrap: !0,
        forced: GE
    }, {
        Promise: BE
    }),
    Gm(BE, "Promise", !1),
    Gk("Promise"),
    OE = Kp("Promise"),
    wg({
        target: "Promise",
        stat: !0,
        forced: GE
    }, {
        reject: function(e) {
            var t = WE(this);
            return t.reject.call(void 0, e),
            t.promise
        }
    }),
    wg({
        target: "Promise",
        stat: !0,
        forced: GE
    }, {
        resolve: function(e) {
            return jE(this, e)
        }
    }),
    wg({
        target: "Promise",
        stat: !0,
        forced: XE
    }, {
        all: function(e) {
            var t = this
              , n = WE(t)
              , r = n.resolve
              , i = n.reject
              , o = LE((function() {
                var n = Vg(t.resolve)
                  , o = []
                  , a = 0
                  , s = 1;
                yy(e, (function(e) {
                    var c = a++
                      , l = !1;
                    o.push(void 0),
                    s++,
                    n.call(t, e).then((function(e) {
                        l || (l = !0,
                        o[c] = e,
                        --s || r(o))
                    }
                    ), i)
                }
                )),
                --s || r(o)
            }
            ));
            return o.error && i(o.value),
            n.promise
        },
        race: function(e) {
            var t = this
              , n = WE(t)
              , r = n.reject
              , i = LE((function() {
                var i = Vg(t.resolve);
                yy(e, (function(e) {
                    i.call(t, e).then(n.resolve, r)
                }
                ))
            }
            ));
            return i.error && r(i.value),
            n.promise
        }
    });
    var aS, sS = pp.f, cS = "".startsWith, lS = Math.min, uS = ey("startsWith"), fS = !(uS || (aS = sS(String.prototype, "startsWith"),
    !aS || aS.writable));
    wg({
        target: "String",
        proto: !0,
        forced: !fS && !uS
    }, {
        startsWith: function(e) {
            var t = String(rp(this));
            Qv(e);
            var n = Qp(lS(arguments.length > 1 ? arguments[1] : void 0, t.length))
              , r = String(e);
            return cS ? cS.call(t, r, n) : t.slice(n, n + r.length) === r
        }
    });
    var hS, dS, pS, gS = function(e) {
        return null != e ? e.constructor : null
    }, mS = function(e, t) {
        return Boolean(e && t && e instanceof t)
    }, vS = function(e) {
        return null == e
    }, yS = function(e) {
        return gS(e) === Object
    }, bS = function(e) {
        return gS(e) === String
    }, wS = function(e) {
        return Array.isArray(e)
    }, kS = function(e) {
        return mS(e, NodeList)
    }, ES = function(e) {
        return vS(e) || (bS(e) || wS(e) || kS(e)) && !e.length || yS(e) && !Object.keys(e).length
    }, SS = vS, _S = yS, TS = function(e) {
        return gS(e) === Number && !Number.isNaN(e)
    }, AS = bS, xS = function(e) {
        return gS(e) === Boolean
    }, OS = function(e) {
        return gS(e) === Function
    }, CS = wS, PS = kS, IS = function(e) {
        return mS(e, Element)
    }, RS = function(e) {
        return mS(e, Event)
    }, jS = function(e) {
        return mS(e, KeyboardEvent)
    }, LS = function(e) {
        return mS(e, TextTrack) || !vS(e) && bS(e.kind)
    }, MS = function(e) {
        if (mS(e, window.URL))
            return !0;
        if (!bS(e))
            return !1;
        var t = e;
        e.startsWith("http://") && e.startsWith("https://") || (t = "http://".concat(e));
        try {
            return !ES(new URL(t).hostname)
        } catch (e) {
            return !1
        }
    }, NS = ES, US = (hS = document.createElement("span"),
    dS = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend"
    },
    pS = Object.keys(dS).find((function(e) {
        return void 0 !== hS.style[e]
    }
    )),
    !!AS(pS) && dS[pS]);
    function FS(e, t) {
        setTimeout((function() {
            try {
                e.hidden = !0,
                e.offsetHeight,
                e.hidden = !1
            } catch (e) {}
        }
        ), t)
    }
    var DS = {
        isIE: /* @cc_on!@ */
        !!document.documentMode,
        isEdge: window.navigator.userAgent.includes("Edge"),
        isWebkit: "WebkitAppearance"in document.documentElement.style && !/Edge/.test(navigator.userAgent),
        isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
        isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform)
    }
      , BS = function(e) {
        return function(t, n, r, i) {
            Vg(n);
            var o = Eg(t)
              , a = np(o)
              , s = Qp(o.length)
              , c = e ? s - 1 : 0
              , l = e ? -1 : 1;
            if (r < 2)
                for (; ; ) {
                    if (c in a) {
                        i = a[c],
                        c += l;
                        break
                    }
                    if (c += l,
                    e ? c < 0 : s <= c)
                        throw TypeError("Reduce of empty array with no initial value")
                }
            for (; e ? c >= 0 : s > c; c += l)
                c in a && (i = n(i, a[c], c, o));
            return i
        }
    }
      , qS = {
        left: BS(!1),
        right: BS(!0)
    }.left
      , HS = cv("reduce")
      , VS = Jg("reduce", {
        1: 0
    });
    function zS(e, t) {
        return t.split(".").reduce((function(e, t) {
            return e && e[t]
        }
        ), e)
    }
    function WS() {
        for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r];
        if (!n.length)
            return e;
        var i = n.shift();
        return _S(i) ? (Object.keys(i).forEach((function(t) {
            _S(i[t]) ? (Object.keys(e).includes(t) || Object.assign(e, ja({}, t, {})),
            WS(e[t], i[t])) : Object.assign(e, ja({}, t, i[t]))
        }
        )),
        WS.apply(void 0, [e].concat(n))) : e
    }
    function $S(e, t) {
        var n = e.length ? e : [e];
        Array.from(n).reverse().forEach((function(e, n) {
            var r = n > 0 ? t.cloneNode(!0) : t
              , i = e.parentNode
              , o = e.nextSibling;
            r.appendChild(e),
            o ? i.insertBefore(r, o) : i.appendChild(r)
        }
        ))
    }
    function KS(e, t) {
        IS(e) && !NS(t) && Object.entries(t).filter((function(e) {
            var t = Na(e, 2)[1];
            return !SS(t)
        }
        )).forEach((function(t) {
            var n = Na(t, 2)
              , r = n[0]
              , i = n[1];
            return e.setAttribute(r, i)
        }
        ))
    }
    function YS(e, t, n) {
        var r = document.createElement(e);
        return _S(t) && KS(r, t),
        AS(n) && (r.innerText = n),
        r
    }
    function GS(e, t, n, r) {
        IS(t) && t.appendChild(YS(e, n, r))
    }
    function XS(e) {
        PS(e) || CS(e) ? Array.from(e).forEach(XS) : IS(e) && IS(e.parentNode) && e.parentNode.removeChild(e)
    }
    function JS(e) {
        if (IS(e))
            for (var t = e.childNodes.length; t > 0; )
                e.removeChild(e.lastChild),
                t -= 1
    }
    function QS(e, t) {
        return IS(t) && IS(t.parentNode) && IS(e) ? (t.parentNode.replaceChild(e, t),
        e) : null
    }
    function ZS(e, t) {
        if (!AS(e) || NS(e))
            return {};
        var n = {}
          , r = WS({}, t);
        return e.split(",").forEach((function(e) {
            var t = e.trim()
              , i = t.replace(".", "")
              , o = t.replace(/[[\]]/g, "").split("=")
              , a = Na(o, 1)[0]
              , s = o.length > 1 ? o[1].replace(/["']/g, "") : "";
            switch (t.charAt(0)) {
            case ".":
                AS(r.class) ? n.class = "".concat(r.class, " ").concat(i) : n.class = i;
                break;
            case "#":
                n.id = t.replace("#", "");
                break;
            case "[":
                n[a] = s
            }
        }
        )),
        WS(r, n)
    }
    function e_(e, t) {
        if (IS(e)) {
            var n = t;
            xS(n) || (n = !e.hidden),
            e.hidden = n
        }
    }
    function t_(e, t, n) {
        if (PS(e))
            return Array.from(e).map((function(e) {
                return t_(e, t, n)
            }
            ));
        if (IS(e)) {
            var r = "toggle";
            return void 0 !== n && (r = n ? "add" : "remove"),
            e.classList[r](t),
            e.classList.contains(t)
        }
        return !1
    }
    function n_(e, t) {
        return IS(e) && e.classList.contains(t)
    }
    function r_(e, t) {
        return function() {
            return Array.from(document.querySelectorAll(t)).includes(this)
        }
        .call(e, t)
    }
    function i_(e) {
        return this.elements.container.querySelectorAll(e)
    }
    function o_(e) {
        return this.elements.container.querySelector(e)
    }
    function a_() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
          , t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        IS(e) && (e.focus({
            preventScroll: !0
        }),
        t && t_(e, this.config.classNames.tabFocus))
    }
    wg({
        target: "Array",
        proto: !0,
        forced: !HS || !VS
    }, {
        reduce: function(e) {
            return qS(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var s_, c_ = {
        "audio/ogg": "vorbis",
        "audio/wav": "1",
        "video/webm": "vp8, vorbis",
        "video/mp4": "avc1.42E01E, mp4a.40.2",
        "video/ogg": "theora"
    }, l_ = {
        audio: "canPlayType"in document.createElement("audio"),
        video: "canPlayType"in document.createElement("video"),
        check: function(e, t, n) {
            var r = DS.isIPhone && n && l_.playsinline
              , i = l_[e] || "html5" !== t;
            return {
                api: i,
                ui: i && l_.rangeInput && ("video" !== e || !DS.isIPhone || r)
            }
        },
        pip: !(DS.isIPhone || !OS(YS("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || YS("video").disablePictureInPicture)),
        airplay: OS(window.WebKitPlaybackTargetAvailabilityEvent),
        playsinline: "playsInline"in document.createElement("video"),
        mime: function(e) {
            if (NS(e))
                return !1;
            var t = Na(e.split("/"), 1)[0]
              , n = e;
            if (!this.isHTML5 || t !== this.type)
                return !1;
            Object.keys(c_).includes(n) && (n += '; codecs="'.concat(c_[e], '"'));
            try {
                return Boolean(n && this.media.canPlayType(n).replace(/no/, ""))
            } catch (e) {
                return !1
            }
        },
        textTracks: "textTracks"in document.createElement("video"),
        rangeInput: (s_ = document.createElement("input"),
        s_.type = "range",
        "range" === s_.type),
        touch: "ontouchstart"in document.documentElement,
        transitions: !1 !== US,
        reducedMotion: "matchMedia"in window && window.matchMedia("(prefers-reduced-motion)").matches
    }, u_ = function() {
        var e = !1;
        try {
            var t = Object.defineProperty({}, "passive", {
                get: function() {
                    return e = !0,
                    null
                }
            });
            window.addEventListener("test", null, t),
            window.removeEventListener("test", null, t)
        } catch (e) {}
        return e
    }();
    function f_(e, t, n) {
        var r = this
          , i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
          , o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]
          , a = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (e && "addEventListener"in e && !NS(t) && OS(n)) {
            var s = t.split(" ")
              , c = a;
            u_ && (c = {
                passive: o,
                capture: a
            }),
            s.forEach((function(t) {
                r && r.eventListeners && i && r.eventListeners.push({
                    element: e,
                    type: t,
                    callback: n,
                    options: c
                }),
                e[i ? "addEventListener" : "removeEventListener"](t, n, c)
            }
            ))
        }
    }
    function h_(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
          , n = arguments.length > 2 ? arguments[2] : void 0
          , r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]
          , i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        f_.call(this, e, t, n, !0, r, i)
    }
    function d_(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
          , n = arguments.length > 2 ? arguments[2] : void 0
          , r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]
          , i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        f_.call(this, e, t, n, !1, r, i)
    }
    function p_(e) {
        var t = this
          , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
          , r = arguments.length > 2 ? arguments[2] : void 0
          , i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]
          , o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]
          , a = function a() {
            d_(e, n, a, i, o);
            for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++)
                c[l] = arguments[l];
            r.apply(t, c)
        };
        f_.call(this, e, n, a, !0, i, o)
    }
    function g_(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
          , n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (IS(e) && !NS(t)) {
            var i = new CustomEvent(t,{
                bubbles: n,
                detail: Ma({}, r, {
                    plyr: this
                })
            });
            e.dispatchEvent(i)
        }
    }
    function m_() {
        this && this.eventListeners && (this.eventListeners.forEach((function(e) {
            var t = e.element
              , n = e.type
              , r = e.callback
              , i = e.options;
            t.removeEventListener(n, r, i)
        }
        )),
        this.eventListeners = [])
    }
    function v_() {
        var e = this;
        return new Promise((function(t) {
            return e.ready ? setTimeout(t, 0) : h_.call(e, e.elements.container, "ready", t)
        }
        )).then((function() {}
        ))
    }
    function y_(e) {
        return !!(CS(e) || AS(e) && e.includes(":")) && (CS(e) ? e : e.split(":")).map(Number).every(TS)
    }
    function b_(e) {
        if (!CS(e) || !e.every(TS))
            return null;
        var t = Na(e, 2)
          , n = t[0]
          , r = t[1]
          , i = function e(t, n) {
            return 0 === n ? t : e(n, t % n)
        }(n, r);
        return [n / i, r / i]
    }
    function w_(e) {
        var t = function(e) {
            return y_(e) ? e.split(":").map(Number) : null
        }
          , n = t(e);
        if (null === n && (n = t(this.config.ratio)),
        null === n && !NS(this.embed) && CS(this.embed.ratio) && (n = this.embed.ratio),
        null === n && this.isHTML5) {
            var r = this.media;
            n = b_([r.videoWidth, r.videoHeight])
        }
        return n
    }
    function k_(e) {
        if (!this.isVideo)
            return {};
        var t = this.elements.wrapper
          , n = w_.call(this, e)
          , r = Na(CS(n) ? n : [0, 0], 2)
          , i = 100 / r[0] * r[1];
        if (t.style.paddingBottom = "".concat(i, "%"),
        this.isVimeo && this.supported.ui) {
            var o = (240 - i) / 4.8;
            this.media.style.transform = "translateY(-".concat(o, "%)")
        } else
            this.isHTML5 && t.classList.toggle(this.config.classNames.videoFixedRatio, null !== n);
        return {
            padding: i,
            ratio: n
        }
    }
    var E_ = {
        getSources: function() {
            var e = this;
            return this.isHTML5 ? Array.from(this.media.querySelectorAll("source")).filter((function(t) {
                var n = t.getAttribute("type");
                return !!NS(n) || l_.mime.call(e, n)
            }
            )) : []
        },
        getQualityOptions: function() {
            return this.config.quality.forced ? this.config.quality.options : E_.getSources.call(this).map((function(e) {
                return Number(e.getAttribute("size"))
            }
            )).filter(Boolean)
        },
        setup: function() {
            if (this.isHTML5) {
                var e = this;
                e.options.speed = e.config.speed.options,
                NS(this.config.ratio) || k_.call(e),
                Object.defineProperty(e.media, "quality", {
                    get: function() {
                        var t = E_.getSources.call(e).find((function(t) {
                            return t.getAttribute("src") === e.source
                        }
                        ));
                        return t && Number(t.getAttribute("size"))
                    },
                    set: function(t) {
                        if (e.quality !== t) {
                            if (e.config.quality.forced && OS(e.config.quality.onChange))
                                e.config.quality.onChange(t);
                            else {
                                var n = E_.getSources.call(e).find((function(e) {
                                    return Number(e.getAttribute("size")) === t
                                }
                                ));
                                if (!n)
                                    return;
                                var r = e.media
                                  , i = r.currentTime
                                  , o = r.paused
                                  , a = r.preload
                                  , s = r.readyState
                                  , c = r.playbackRate;
                                e.media.src = n.getAttribute("src"),
                                ("none" !== a || s) && (e.once("loadedmetadata", (function() {
                                    e.speed = c,
                                    e.currentTime = i,
                                    o || e.play()
                                }
                                )),
                                e.media.load())
                            }
                            g_.call(e, e.media, "qualitychange", !1, {
                                quality: t
                            })
                        }
                    }
                })
            }
        },
        cancelRequests: function() {
            this.isHTML5 && (XS(E_.getSources.call(this)),
            this.media.setAttribute("src", this.config.blankVideo),
            this.media.load(),
            this.debug.log("Cancelled network requests"))
        }
    };
    function S_(e) {
        return CS(e) ? e.filter((function(t, n) {
            return e.indexOf(t) === n
        }
        )) : e
    }
    var __ = Fg("slice")
      , T_ = Jg("slice", {
        ACCESSORS: !0,
        0: 0,
        1: 2
    })
      , A_ = Cg("species")
      , x_ = [].slice
      , O_ = Math.max;
    wg({
        target: "Array",
        proto: !0,
        forced: !__ || !T_
    }, {
        slice: function(e, t) {
            var n, r, i, o = ip(this), a = Qp(o.length), s = tg(e, a), c = tg(void 0 === t ? a : t, a);
            if (kg(o) && ("function" != typeof (n = o.constructor) || n !== Array && !kg(n.prototype) ? op(n) && null === (n = n[A_]) && (n = void 0) : n = void 0,
            n === Array || void 0 === n))
                return x_.call(o, s, c);
            for (r = new (void 0 === n ? Array : n)(O_(c - s, 0)),
            i = 0; s < c; s++,
            i++)
                s in o && Sg(r, i, o[s]);
            return r.length = i,
            r
        }
    });
    var C_ = vp.f
      , P_ = cg.f
      , I_ = Vp.set
      , R_ = Cg("match")
      , j_ = $d.RegExp
      , L_ = j_.prototype
      , M_ = /a/g
      , N_ = /a/g
      , U_ = new j_(M_) !== M_
      , F_ = Fv.UNSUPPORTED_Y;
    if (Yd && yg("RegExp", !U_ || F_ || Kd((function() {
        return N_[R_] = !1,
        j_(M_) != M_ || j_(N_) == N_ || "/a/i" != j_(M_, "i")
    }
    )))) {
        for (var D_ = function(e, t) {
            var n, r = this instanceof D_, i = Jv(e), o = void 0 === t;
            if (!r && i && e.constructor === D_ && o)
                return e;
            U_ ? i && !o && (e = e.source) : e instanceof D_ && (o && (t = Nv.call(e)),
            e = e.source),
            F_ && (n = !!t && t.indexOf("y") > -1) && (t = t.replace(/y/g, ""));
            var a = gv(U_ ? new j_(e,t) : j_(e, t), r ? this : L_, D_);
            return F_ && n && I_(a, {
                sticky: n
            }),
            a
        }, B_ = function(e) {
            e in D_ || C_(D_, e, {
                configurable: !0,
                get: function() {
                    return j_[e]
                },
                set: function(t) {
                    j_[e] = t
                }
            })
        }, q_ = P_(j_), H_ = 0; q_.length > H_; )
            B_(q_[H_++]);
        L_.constructor = D_,
        D_.prototype = L_,
        zp($d, "RegExp", D_)
    }
    function V_(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r];
        return NS(e) ? e : e.toString().replace(/{(\d+)}/g, (function(e, t) {
            return n[t].toString()
        }
        ))
    }
    function z_() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
          , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
          , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"),"g"), n.toString())
    }
    function W_() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return e.toString().replace(/\w\S*/g, (function(e) {
            return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
        }
        ))
    }
    function $_() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
          , t = e.toString();
        return t = z_(t, "-", " "),
        t = z_(t, "_", " "),
        z_(t = W_(t), " ", "")
    }
    function K_(e) {
        var t = document.createElement("div");
        return t.appendChild(e),
        t.innerHTML
    }
    Gk("RegExp");
    var Y_ = {
        pip: "PIP",
        airplay: "AirPlay",
        html5: "HTML5",
        vimeo: "Vimeo",
        youtube: "YouTube"
    }
      , G_ = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
          , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (NS(e) || NS(t))
            return "";
        var n = zS(t.i18n, e);
        if (NS(n))
            return Object.keys(Y_).includes(e) ? Y_[e] : "";
        var r = {
            "{seektime}": t.seekTime,
            "{title}": t.title
        };
        return Object.entries(r).forEach((function(e) {
            var t = Na(e, 2)
              , r = t[0]
              , i = t[1];
            n = z_(n, r, i)
        }
        )),
        n
    }
      , X_ = function() {
        function e(t) {
            Pa(this, e),
            this.enabled = t.config.storage.enabled,
            this.key = t.config.storage.key
        }
        return Ra(e, [{
            key: "get",
            value: function(t) {
                if (!e.supported || !this.enabled)
                    return null;
                var n = window.localStorage.getItem(this.key);
                if (NS(n))
                    return null;
                var r = JSON.parse(n);
                return AS(t) && t.length ? r[t] : r
            }
        }, {
            key: "set",
            value: function(t) {
                if (e.supported && this.enabled && _S(t)) {
                    var n = this.get();
                    NS(n) && (n = {}),
                    WS(n, t),
                    window.localStorage.setItem(this.key, JSON.stringify(n))
                }
            }
        }], [{
            key: "supported",
            get: function() {
                try {
                    if (!("localStorage"in window))
                        return !1;
                    return window.localStorage.setItem("___test", "___test"),
                    window.localStorage.removeItem("___test"),
                    !0
                } catch (e) {
                    return !1
                }
            }
        }]),
        e
    }();
    function J_(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text";
        return new Promise((function(n, r) {
            try {
                var i = new XMLHttpRequest;
                if (!("withCredentials"in i))
                    return;
                i.addEventListener("load", (function() {
                    if ("text" === t)
                        try {
                            n(JSON.parse(i.responseText))
                        } catch (e) {
                            n(i.responseText)
                        }
                    else
                        n(i.response)
                }
                )),
                i.addEventListener("error", (function() {
                    throw new Error(i.status)
                }
                )),
                i.open("GET", e, !0),
                i.responseType = t,
                i.send()
            } catch (e) {
                r(e)
            }
        }
        ))
    }
    function Q_(e, t) {
        if (AS(e)) {
            var n = AS(t)
              , r = function() {
                return null !== document.getElementById(t)
            }
              , i = function(e, t) {
                e.innerHTML = t,
                n && r() || document.body.insertAdjacentElement("afterbegin", e)
            };
            if (!n || !r()) {
                var o = X_.supported
                  , a = document.createElement("div");
                if (a.setAttribute("hidden", ""),
                n && a.setAttribute("id", t),
                o) {
                    var s = window.localStorage.getItem("".concat("cache", "-").concat(t));
                    if (null !== s) {
                        var c = JSON.parse(s);
                        i(a, c.content)
                    }
                }
                J_(e).then((function(e) {
                    NS(e) || (o && window.localStorage.setItem("".concat("cache", "-").concat(t), JSON.stringify({
                        content: e
                    })),
                    i(a, e))
                }
                )).catch((function() {}
                ))
            }
        }
    }
    var Z_ = Math.ceil
      , eT = Math.floor;
    wg({
        target: "Math",
        stat: !0
    }, {
        trunc: function(e) {
            return (e > 0 ? eT : Z_)(e)
        }
    });
    var tT = function(e) {
        return Math.trunc(e / 60 / 60 % 60, 10)
    }
      , nT = function(e) {
        return Math.trunc(e / 60 % 60, 10)
    }
      , rT = function(e) {
        return Math.trunc(e % 60, 10)
    };
    function iT() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
          , t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          , n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!TS(e))
            return iT(void 0, t, n);
        var r = function(e) {
            return "0".concat(e).slice(-2)
        }
          , i = tT(e)
          , o = nT(e)
          , a = rT(e);
        return i = t || i > 0 ? "".concat(i, ":") : "",
        "".concat(n && e > 0 ? "-" : "").concat(i).concat(r(o), ":").concat(r(a))
    }
    var oT = {
        getIconUrl: function() {
            var e = new URL(this.config.iconUrl,window.location).host !== window.location.host || DS.isIE && !window.svg4everybody;
            return {
                url: this.config.iconUrl,
                cors: e
            }
        },
        findElements: function() {
            try {
                return this.elements.controls = o_.call(this, this.config.selectors.controls.wrapper),
                this.elements.buttons = {
                    play: i_.call(this, this.config.selectors.buttons.play),
                    pause: o_.call(this, this.config.selectors.buttons.pause),
                    restart: o_.call(this, this.config.selectors.buttons.restart),
                    rewind: o_.call(this, this.config.selectors.buttons.rewind),
                    fastForward: o_.call(this, this.config.selectors.buttons.fastForward),
                    mute: o_.call(this, this.config.selectors.buttons.mute),
                    pip: o_.call(this, this.config.selectors.buttons.pip),
                    airplay: o_.call(this, this.config.selectors.buttons.airplay),
                    settings: o_.call(this, this.config.selectors.buttons.settings),
                    captions: o_.call(this, this.config.selectors.buttons.captions),
                    fullscreen: o_.call(this, this.config.selectors.buttons.fullscreen)
                },
                this.elements.progress = o_.call(this, this.config.selectors.progress),
                this.elements.inputs = {
                    seek: o_.call(this, this.config.selectors.inputs.seek),
                    volume: o_.call(this, this.config.selectors.inputs.volume)
                },
                this.elements.display = {
                    buffer: o_.call(this, this.config.selectors.display.buffer),
                    currentTime: o_.call(this, this.config.selectors.display.currentTime),
                    duration: o_.call(this, this.config.selectors.display.duration)
                },
                IS(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip))),
                !0
            } catch (e) {
                return this.debug.warn("It looks like there is a problem with your custom controls HTML", e),
                this.toggleNativeControls(!0),
                !1
            }
        },
        createIcon: function(e, t) {
            var n = oT.getIconUrl.call(this)
              , r = "".concat(n.cors ? "" : n.url, "#").concat(this.config.iconPrefix)
              , i = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            KS(i, WS(t, {
                role: "presentation",
                focusable: "false"
            }));
            var o = document.createElementNS("http://www.w3.org/2000/svg", "use")
              , a = "".concat(r, "-").concat(e);
            return "href"in o && o.setAttributeNS("http://www.w3.org/1999/xlink", "href", a),
            o.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a),
            i.appendChild(o),
            i
        },
        createLabel: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = G_(e, this.config)
              , r = Ma({}, t, {
                class: [t.class, this.config.classNames.hidden].filter(Boolean).join(" ")
            });
            return YS("span", r, n)
        },
        createBadge: function(e) {
            if (NS(e))
                return null;
            var t = YS("span", {
                class: this.config.classNames.menu.value
            });
            return t.appendChild(YS("span", {
                class: this.config.classNames.menu.badge
            }, e)),
            t
        },
        createButton: function(e, t) {
            var n = this
              , r = WS({}, t)
              , i = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , t = e.toString();
                return (t = $_(t)).charAt(0).toLowerCase() + t.slice(1)
            }(e)
              , o = {
                element: "button",
                toggle: !1,
                label: null,
                icon: null,
                labelPressed: null,
                iconPressed: null
            };
            switch (["element", "icon", "label"].forEach((function(e) {
                Object.keys(r).includes(e) && (o[e] = r[e],
                delete r[e])
            }
            )),
            "button" !== o.element || Object.keys(r).includes("type") || (r.type = "button"),
            Object.keys(r).includes("class") ? r.class.split(" ").some((function(e) {
                return e === n.config.classNames.control
            }
            )) || WS(r, {
                class: "".concat(r.class, " ").concat(this.config.classNames.control)
            }) : r.class = this.config.classNames.control,
            e) {
            case "play":
                o.toggle = !0,
                o.label = "play",
                o.labelPressed = "pause",
                o.icon = "play",
                o.iconPressed = "pause";
                break;
            case "mute":
                o.toggle = !0,
                o.label = "mute",
                o.labelPressed = "unmute",
                o.icon = "volume",
                o.iconPressed = "muted";
                break;
            case "captions":
                o.toggle = !0,
                o.label = "enableCaptions",
                o.labelPressed = "disableCaptions",
                o.icon = "captions-off",
                o.iconPressed = "captions-on";
                break;
            case "fullscreen":
                o.toggle = !0,
                o.label = "enterFullscreen",
                o.labelPressed = "exitFullscreen",
                o.icon = "enter-fullscreen",
                o.iconPressed = "exit-fullscreen";
                break;
            case "play-large":
                r.class += " ".concat(this.config.classNames.control, "--overlaid"),
                i = "play",
                o.label = "play",
                o.icon = "play";
                break;
            default:
                NS(o.label) && (o.label = i),
                NS(o.icon) && (o.icon = e)
            }
            var a = YS(o.element);
            return o.toggle ? (a.appendChild(oT.createIcon.call(this, o.iconPressed, {
                class: "icon--pressed"
            })),
            a.appendChild(oT.createIcon.call(this, o.icon, {
                class: "icon--not-pressed"
            })),
            a.appendChild(oT.createLabel.call(this, o.labelPressed, {
                class: "label--pressed"
            })),
            a.appendChild(oT.createLabel.call(this, o.label, {
                class: "label--not-pressed"
            }))) : (a.appendChild(oT.createIcon.call(this, o.icon)),
            a.appendChild(oT.createLabel.call(this, o.label))),
            WS(r, ZS(this.config.selectors.buttons[i], r)),
            KS(a, r),
            "play" === i ? (CS(this.elements.buttons[i]) || (this.elements.buttons[i] = []),
            this.elements.buttons[i].push(a)) : this.elements.buttons[i] = a,
            a
        },
        createRange: function(e, t) {
            var n = YS("input", WS(ZS(this.config.selectors.inputs[e]), {
                type: "range",
                min: 0,
                max: 100,
                step: .01,
                value: 0,
                autocomplete: "off",
                role: "slider",
                "aria-label": G_(e, this.config),
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-valuenow": 0
            }, t));
            return this.elements.inputs[e] = n,
            oT.updateRangeFill.call(this, n),
            $k.setup(n),
            n
        },
        createProgress: function(e, t) {
            var n = YS("progress", WS(ZS(this.config.selectors.display[e]), {
                min: 0,
                max: 100,
                value: 0,
                role: "progressbar",
                "aria-hidden": !0
            }, t));
            if ("volume" !== e) {
                n.appendChild(YS("span", null, "0"));
                var r = {
                    played: "played",
                    buffer: "buffered"
                }[e]
                  , i = r ? G_(r, this.config) : "";
                n.innerText = "% ".concat(i.toLowerCase())
            }
            return this.elements.display[e] = n,
            n
        },
        createTime: function(e, t) {
            var n = ZS(this.config.selectors.display[e], t)
              , r = YS("div", WS(n, {
                class: "".concat(n.class ? n.class : "", " ").concat(this.config.classNames.display.time, " ").trim(),
                "aria-label": G_(e, this.config)
            }), "00:00");
            return this.elements.display[e] = r,
            r
        },
        bindMenuItemShortcuts: function(e, t) {
            var n = this;
            h_.call(this, e, "keydown keyup", (function(r) {
                if ([32, 38, 39, 40].includes(r.which) && (r.preventDefault(),
                r.stopPropagation(),
                "keydown" !== r.type)) {
                    var i, o = r_(e, '[role="menuitemradio"]');
                    if (!o && [32, 39].includes(r.which))
                        oT.showMenuPanel.call(n, t, !0);
                    else
                        32 !== r.which && (40 === r.which || o && 39 === r.which ? (i = e.nextElementSibling,
                        IS(i) || (i = e.parentNode.firstElementChild)) : (i = e.previousElementSibling,
                        IS(i) || (i = e.parentNode.lastElementChild)),
                        a_.call(n, i, !0))
                }
            }
            ), !1),
            h_.call(this, e, "keyup", (function(e) {
                13 === e.which && oT.focusFirstMenuItem.call(n, null, !0)
            }
            ))
        },
        createMenuItem: function(e) {
            var t = this
              , n = e.value
              , r = e.list
              , i = e.type
              , o = e.title
              , a = e.badge
              , s = void 0 === a ? null : a
              , c = e.checked
              , l = void 0 !== c && c
              , u = ZS(this.config.selectors.inputs[i])
              , f = YS("button", WS(u, {
                type: "button",
                role: "menuitemradio",
                class: "".concat(this.config.classNames.control, " ").concat(u.class ? u.class : "").trim(),
                "aria-checked": l,
                value: n
            }))
              , h = YS("span");
            h.innerHTML = o,
            IS(s) && h.appendChild(s),
            f.appendChild(h),
            Object.defineProperty(f, "checked", {
                enumerable: !0,
                get: function() {
                    return "true" === f.getAttribute("aria-checked")
                },
                set: function(e) {
                    e && Array.from(f.parentNode.children).filter((function(e) {
                        return r_(e, '[role="menuitemradio"]')
                    }
                    )).forEach((function(e) {
                        return e.setAttribute("aria-checked", "false")
                    }
                    )),
                    f.setAttribute("aria-checked", e ? "true" : "false")
                }
            }),
            this.listeners.bind(f, "click keyup", (function(e) {
                if (!jS(e) || 32 === e.which) {
                    switch (e.preventDefault(),
                    e.stopPropagation(),
                    f.checked = !0,
                    i) {
                    case "language":
                        t.currentTrack = Number(n);
                        break;
                    case "quality":
                        t.quality = n;
                        break;
                    case "speed":
                        t.speed = parseFloat(n)
                    }
                    oT.showMenuPanel.call(t, "home", jS(e))
                }
            }
            ), i, !1),
            oT.bindMenuItemShortcuts.call(this, f, i),
            r.appendChild(f)
        },
        formatTime: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
              , t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!TS(e))
                return e;
            var n = tT(this.duration) > 0;
            return iT(e, n, t)
        },
        updateTimeDisplay: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
              , n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            IS(e) && TS(t) && (e.innerText = oT.formatTime(t, n))
        },
        updateVolume: function() {
            this.supported.ui && (IS(this.elements.inputs.volume) && oT.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume),
            IS(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume))
        },
        setRange: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            IS(e) && (e.value = t,
            oT.updateRangeFill.call(this, e))
        },
        updateProgress: function(e) {
            var t = this;
            if (this.supported.ui && RS(e)) {
                var n = 0;
                if (e)
                    switch (e.type) {
                    case "timeupdate":
                    case "seeking":
                    case "seeked":
                        n = function(e, t) {
                            return 0 === e || 0 === t || Number.isNaN(e) || Number.isNaN(t) ? 0 : (e / t * 100).toFixed(2)
                        }(this.currentTime, this.duration),
                        "timeupdate" === e.type && oT.setRange.call(this, this.elements.inputs.seek, n);
                        break;
                    case "playing":
                    case "progress":
                        !function(e, n) {
                            var r = TS(n) ? n : 0
                              , i = IS(e) ? e : t.elements.display.buffer;
                            if (IS(i)) {
                                i.value = r;
                                var o = i.getElementsByTagName("span")[0];
                                IS(o) && (o.childNodes[0].nodeValue = r)
                            }
                        }(this.elements.display.buffer, 100 * this.buffered)
                    }
            }
        },
        updateRangeFill: function(e) {
            var t = RS(e) ? e.target : e;
            if (IS(t) && "range" === t.getAttribute("type")) {
                if (r_(t, this.config.selectors.inputs.seek)) {
                    t.setAttribute("aria-valuenow", this.currentTime);
                    var n = oT.formatTime(this.currentTime)
                      , r = oT.formatTime(this.duration)
                      , i = G_("seekLabel", this.config);
                    t.setAttribute("aria-valuetext", i.replace("{currentTime}", n).replace("{duration}", r))
                } else if (r_(t, this.config.selectors.inputs.volume)) {
                    var o = 100 * t.value;
                    t.setAttribute("aria-valuenow", o),
                    t.setAttribute("aria-valuetext", "".concat(o.toFixed(1), "%"))
                } else
                    t.setAttribute("aria-valuenow", t.value);
                DS.isWebkit && t.style.setProperty("--value", "".concat(t.value / t.max * 100, "%"))
            }
        },
        updateSeekTooltip: function(e) {
            var t = this;
            if (this.config.tooltips.seek && IS(this.elements.inputs.seek) && IS(this.elements.display.seekTooltip) && 0 !== this.duration) {
                var n = "".concat(this.config.classNames.tooltip, "--visible")
                  , r = function(e) {
                    return t_(t.elements.display.seekTooltip, n, e)
                };
                if (this.touch)
                    r(!1);
                else {
                    var i = 0
                      , o = this.elements.progress.getBoundingClientRect();
                    if (RS(e))
                        i = 100 / o.width * (e.pageX - o.left);
                    else {
                        if (!n_(this.elements.display.seekTooltip, n))
                            return;
                        i = parseFloat(this.elements.display.seekTooltip.style.left, 10)
                    }
                    i < 0 ? i = 0 : i > 100 && (i = 100),
                    oT.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * i),
                    this.elements.display.seekTooltip.style.left = "".concat(i, "%"),
                    RS(e) && ["mouseenter", "mouseleave"].includes(e.type) && r("mouseenter" === e.type)
                }
            }
        },
        timeUpdate: function(e) {
            var t = !IS(this.elements.display.duration) && this.config.invertTime;
            oT.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t),
            e && "timeupdate" === e.type && this.media.seeking || oT.updateProgress.call(this, e)
        },
        durationUpdate: function() {
            if (this.supported.ui && (this.config.invertTime || !this.currentTime)) {
                if (this.duration >= Math.pow(2, 32))
                    return e_(this.elements.display.currentTime, !0),
                    void e_(this.elements.progress, !0);
                IS(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
                var e = IS(this.elements.display.duration);
                !e && this.config.displayDuration && this.paused && oT.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration),
                e && oT.updateTimeDisplay.call(this, this.elements.display.duration, this.duration),
                oT.updateSeekTooltip.call(this)
            }
        },
        toggleMenuButton: function(e, t) {
            e_(this.elements.settings.buttons[e], !t)
        },
        updateSetting: function(e, t, n) {
            var r = this.elements.settings.panels[e]
              , i = null
              , o = t;
            if ("captions" === e)
                i = this.currentTrack;
            else {
                if (i = NS(n) ? this[e] : n,
                NS(i) && (i = this.config[e].default),
                !NS(this.options[e]) && !this.options[e].includes(i))
                    return void this.debug.warn("Unsupported value of '".concat(i, "' for ").concat(e));
                if (!this.config[e].options.includes(i))
                    return void this.debug.warn("Disabled value of '".concat(i, "' for ").concat(e))
            }
            if (IS(o) || (o = r && r.querySelector('[role="menu"]')),
            IS(o)) {
                this.elements.settings.buttons[e].querySelector(".".concat(this.config.classNames.menu.value)).innerHTML = oT.getLabel.call(this, e, i);
                var a = o && o.querySelector('[value="'.concat(i, '"]'));
                IS(a) && (a.checked = !0)
            }
        },
        getLabel: function(e, t) {
            switch (e) {
            case "speed":
                return 1 === t ? G_("normal", this.config) : "".concat(t, "&times;");
            case "quality":
                if (TS(t)) {
                    var n = G_("qualityLabel.".concat(t), this.config);
                    return n.length ? n : "".concat(t, "p")
                }
                return W_(t);
            case "captions":
                return cT.getLabel.call(this);
            default:
                return null
            }
        },
        setQualityMenu: function(e) {
            var t = this;
            if (IS(this.elements.settings.panels.quality)) {
                var n = this.elements.settings.panels.quality.querySelector('[role="menu"]');
                CS(e) && (this.options.quality = S_(e).filter((function(e) {
                    return t.config.quality.options.includes(e)
                }
                )));
                var r = !NS(this.options.quality) && this.options.quality.length > 1;
                if (oT.toggleMenuButton.call(this, "quality", r),
                JS(n),
                oT.checkMenu.call(this),
                r) {
                    var i = function(e) {
                        var n = G_("qualityBadge.".concat(e), t.config);
                        return n.length ? oT.createBadge.call(t, n) : null
                    };
                    this.options.quality.sort((function(e, n) {
                        var r = t.config.quality.options;
                        return r.indexOf(e) > r.indexOf(n) ? 1 : -1
                    }
                    )).forEach((function(e) {
                        oT.createMenuItem.call(t, {
                            value: e,
                            list: n,
                            type: "quality",
                            title: oT.getLabel.call(t, "quality", e),
                            badge: i(e)
                        })
                    }
                    )),
                    oT.updateSetting.call(this, "quality", n)
                }
            }
        },
        setCaptionsMenu: function() {
            var e = this;
            if (IS(this.elements.settings.panels.captions)) {
                var t = this.elements.settings.panels.captions.querySelector('[role="menu"]')
                  , n = cT.getTracks.call(this)
                  , r = Boolean(n.length);
                if (oT.toggleMenuButton.call(this, "captions", r),
                JS(t),
                oT.checkMenu.call(this),
                r) {
                    var i = n.map((function(n, r) {
                        return {
                            value: r,
                            checked: e.captions.toggled && e.currentTrack === r,
                            title: cT.getLabel.call(e, n),
                            badge: n.language && oT.createBadge.call(e, n.language.toUpperCase()),
                            list: t,
                            type: "language"
                        }
                    }
                    ));
                    i.unshift({
                        value: -1,
                        checked: !this.captions.toggled,
                        title: G_("disabled", this.config),
                        list: t,
                        type: "language"
                    }),
                    i.forEach(oT.createMenuItem.bind(this)),
                    oT.updateSetting.call(this, "captions", t)
                }
            }
        },
        setSpeedMenu: function() {
            var e = this;
            if (IS(this.elements.settings.panels.speed)) {
                var t = this.elements.settings.panels.speed.querySelector('[role="menu"]');
                this.options.speed = this.options.speed.filter((function(t) {
                    return t >= e.minimumSpeed && t <= e.maximumSpeed
                }
                ));
                var n = !NS(this.options.speed) && this.options.speed.length > 1;
                oT.toggleMenuButton.call(this, "speed", n),
                JS(t),
                oT.checkMenu.call(this),
                n && (this.options.speed.forEach((function(n) {
                    oT.createMenuItem.call(e, {
                        value: n,
                        list: t,
                        type: "speed",
                        title: oT.getLabel.call(e, "speed", n)
                    })
                }
                )),
                oT.updateSetting.call(this, "speed", t))
            }
        },
        checkMenu: function() {
            var e = this.elements.settings.buttons
              , t = !NS(e) && Object.values(e).some((function(e) {
                return !e.hidden
            }
            ));
            e_(this.elements.settings.menu, !t)
        },
        focusFirstMenuItem: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this.elements.settings.popup.hidden) {
                var n = e;
                IS(n) || (n = Object.values(this.elements.settings.panels).find((function(e) {
                    return !e.hidden
                }
                )));
                var r = n.querySelector('[role^="menuitem"]');
                a_.call(this, r, t)
            }
        },
        toggleMenu: function(e) {
            var t = this.elements.settings.popup
              , n = this.elements.buttons.settings;
            if (IS(t) && IS(n)) {
                var r = t.hidden
                  , i = r;
                if (xS(e))
                    i = e;
                else if (jS(e) && 27 === e.which)
                    i = !1;
                else if (RS(e)) {
                    var o = OS(e.composedPath) ? e.composedPath()[0] : e.target
                      , a = t.contains(o);
                    if (a || !a && e.target !== n && i)
                        return
                }
                n.setAttribute("aria-expanded", i),
                e_(t, !i),
                t_(this.elements.container, this.config.classNames.menu.open, i),
                i && jS(e) ? oT.focusFirstMenuItem.call(this, null, !0) : i || r || a_.call(this, n, jS(e))
            }
        },
        getMenuSize: function(e) {
            var t = e.cloneNode(!0);
            t.style.position = "absolute",
            t.style.opacity = 0,
            t.removeAttribute("hidden"),
            e.parentNode.appendChild(t);
            var n = t.scrollWidth
              , r = t.scrollHeight;
            return XS(t),
            {
                width: n,
                height: r
            }
        },
        showMenuPanel: function() {
            var e = this
              , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
              , n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , r = this.elements.container.querySelector("#plyr-settings-".concat(this.id, "-").concat(t));
            if (IS(r)) {
                var i = r.parentNode
                  , o = Array.from(i.children).find((function(e) {
                    return !e.hidden
                }
                ));
                if (l_.transitions && !l_.reducedMotion) {
                    i.style.width = "".concat(o.scrollWidth, "px"),
                    i.style.height = "".concat(o.scrollHeight, "px");
                    var a = oT.getMenuSize.call(this, r)
                      , s = function t(n) {
                        n.target === i && ["width", "height"].includes(n.propertyName) && (i.style.width = "",
                        i.style.height = "",
                        d_.call(e, i, US, t))
                    };
                    h_.call(this, i, US, s),
                    i.style.width = "".concat(a.width, "px"),
                    i.style.height = "".concat(a.height, "px")
                }
                e_(o, !0),
                e_(r, !1),
                oT.focusFirstMenuItem.call(this, r, n)
            }
        },
        setDownloadUrl: function() {
            var e = this.elements.buttons.download;
            IS(e) && e.setAttribute("href", this.download)
        },
        create: function(e) {
            var t = this
              , n = oT.bindMenuItemShortcuts
              , r = oT.createButton
              , i = oT.createProgress
              , o = oT.createRange
              , a = oT.createTime
              , s = oT.setQualityMenu
              , c = oT.setSpeedMenu
              , l = oT.showMenuPanel;
            this.elements.controls = null,
            this.config.controls.includes("play-large") && this.elements.container.appendChild(r.call(this, "play-large"));
            var u = YS("div", ZS(this.config.selectors.controls.wrapper));
            this.elements.controls = u;
            var f = {
                class: "plyr__controls__item"
            };
            return S_(this.config.controls).forEach((function(s) {
                if ("restart" === s && u.appendChild(r.call(t, "restart", f)),
                "rewind" === s && u.appendChild(r.call(t, "rewind", f)),
                "play" === s && u.appendChild(r.call(t, "play", f)),
                "fast-forward" === s && u.appendChild(r.call(t, "fast-forward", f)),
                "progress" === s) {
                    var c = YS("div", {
                        class: "".concat(f.class, " plyr__progress__container")
                    })
                      , h = YS("div", ZS(t.config.selectors.progress));
                    if (h.appendChild(o.call(t, "seek", {
                        id: "plyr-seek-".concat(e.id)
                    })),
                    h.appendChild(i.call(t, "buffer")),
                    t.config.tooltips.seek) {
                        var d = YS("span", {
                            class: t.config.classNames.tooltip
                        }, "00:00");
                        h.appendChild(d),
                        t.elements.display.seekTooltip = d
                    }
                    t.elements.progress = h,
                    c.appendChild(t.elements.progress),
                    u.appendChild(c)
                }
                if ("current-time" === s && u.appendChild(a.call(t, "currentTime", f)),
                "duration" === s && u.appendChild(a.call(t, "duration", f)),
                "mute" === s || "volume" === s) {
                    var p = t.elements.volume;
                    if (IS(p) && u.contains(p) || (p = YS("div", WS({}, f, {
                        class: "".concat(f.class, " plyr__volume").trim()
                    })),
                    t.elements.volume = p,
                    u.appendChild(p)),
                    "mute" === s && p.appendChild(r.call(t, "mute")),
                    "volume" === s && !DS.isIos) {
                        var g = {
                            max: 1,
                            step: .05,
                            value: t.config.volume
                        };
                        p.appendChild(o.call(t, "volume", WS(g, {
                            id: "plyr-volume-".concat(e.id)
                        })))
                    }
                }
                if ("captions" === s && u.appendChild(r.call(t, "captions", f)),
                "settings" === s && !NS(t.config.settings)) {
                    var m = YS("div", WS({}, f, {
                        class: "".concat(f.class, " plyr__menu").trim(),
                        hidden: ""
                    }));
                    m.appendChild(r.call(t, "settings", {
                        "aria-haspopup": !0,
                        "aria-controls": "plyr-settings-".concat(e.id),
                        "aria-expanded": !1
                    }));
                    var v = YS("div", {
                        class: "plyr__menu__container",
                        id: "plyr-settings-".concat(e.id),
                        hidden: ""
                    })
                      , y = YS("div")
                      , b = YS("div", {
                        id: "plyr-settings-".concat(e.id, "-home")
                    })
                      , w = YS("div", {
                        role: "menu"
                    });
                    b.appendChild(w),
                    y.appendChild(b),
                    t.elements.settings.panels.home = b,
                    t.config.settings.forEach((function(r) {
                        var i = YS("button", WS(ZS(t.config.selectors.buttons.settings), {
                            type: "button",
                            class: "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--forward"),
                            role: "menuitem",
                            "aria-haspopup": !0,
                            hidden: ""
                        }));
                        n.call(t, i, r),
                        h_.call(t, i, "click", (function() {
                            l.call(t, r, !1)
                        }
                        ));
                        var o = YS("span", null, G_(r, t.config))
                          , a = YS("span", {
                            class: t.config.classNames.menu.value
                        });
                        a.innerHTML = e[r],
                        o.appendChild(a),
                        i.appendChild(o),
                        w.appendChild(i);
                        var s = YS("div", {
                            id: "plyr-settings-".concat(e.id, "-").concat(r),
                            hidden: ""
                        })
                          , c = YS("button", {
                            type: "button",
                            class: "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--back")
                        });
                        c.appendChild(YS("span", {
                            "aria-hidden": !0
                        }, G_(r, t.config))),
                        c.appendChild(YS("span", {
                            class: t.config.classNames.hidden
                        }, G_("menuBack", t.config))),
                        h_.call(t, s, "keydown", (function(e) {
                            37 === e.which && (e.preventDefault(),
                            e.stopPropagation(),
                            l.call(t, "home", !0))
                        }
                        ), !1),
                        h_.call(t, c, "click", (function() {
                            l.call(t, "home", !1)
                        }
                        )),
                        s.appendChild(c),
                        s.appendChild(YS("div", {
                            role: "menu"
                        })),
                        y.appendChild(s),
                        t.elements.settings.buttons[r] = i,
                        t.elements.settings.panels[r] = s
                    }
                    )),
                    v.appendChild(y),
                    m.appendChild(v),
                    u.appendChild(m),
                    t.elements.settings.popup = v,
                    t.elements.settings.menu = m
                }
                if ("pip" === s && l_.pip && u.appendChild(r.call(t, "pip", f)),
                "airplay" === s && l_.airplay && u.appendChild(r.call(t, "airplay", f)),
                "download" === s) {
                    var k = WS({}, f, {
                        element: "a",
                        href: t.download,
                        target: "_blank"
                    });
                    t.isHTML5 && (k.download = "");
                    var E = t.config.urls.download;
                    !MS(E) && t.isEmbed && WS(k, {
                        icon: "logo-".concat(t.provider),
                        label: t.provider
                    }),
                    u.appendChild(r.call(t, "download", k))
                }
                "fullscreen" === s && u.appendChild(r.call(t, "fullscreen", f))
            }
            )),
            this.isHTML5 && s.call(this, E_.getQualityOptions.call(this)),
            c.call(this),
            u
        },
        inject: function() {
            var e = this;
            if (this.config.loadSprite) {
                var t = oT.getIconUrl.call(this);
                t.cors && Q_(t.url, "sprite-plyr")
            }
            this.id = Math.floor(1e4 * Math.random());
            var n = null;
            this.elements.controls = null;
            var r = {
                id: this.id,
                seektime: this.config.seekTime,
                title: this.config.title
            }
              , i = !0;
            OS(this.config.controls) && (this.config.controls = this.config.controls.call(this, r)),
            this.config.controls || (this.config.controls = []),
            IS(this.config.controls) || AS(this.config.controls) ? n = this.config.controls : (n = oT.create.call(this, {
                id: this.id,
                seektime: this.config.seekTime,
                speed: this.speed,
                quality: this.quality,
                captions: cT.getLabel.call(this)
            }),
            i = !1);
            var o, a = function(e) {
                var t = e;
                return Object.entries(r).forEach((function(e) {
                    var n = Na(e, 2)
                      , r = n[0]
                      , i = n[1];
                    t = z_(t, "{".concat(r, "}"), i)
                }
                )),
                t
            };
            if (i && (AS(this.config.controls) ? n = a(n) : IS(n) && (n.innerHTML = a(n.innerHTML))),
            AS(this.config.selectors.controls.container) && (o = document.querySelector(this.config.selectors.controls.container)),
            IS(o) || (o = this.elements.container),
            o[IS(n) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", n),
            IS(this.elements.controls) || oT.findElements.call(this),
            !NS(this.elements.buttons)) {
                var s = function(t) {
                    var n = e.config.classNames.controlPressed;
                    Object.defineProperty(t, "pressed", {
                        enumerable: !0,
                        get: function() {
                            return n_(t, n)
                        },
                        set: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            t_(t, n, e)
                        }
                    })
                };
                Object.values(this.elements.buttons).filter(Boolean).forEach((function(e) {
                    CS(e) || PS(e) ? Array.from(e).filter(Boolean).forEach(s) : s(e)
                }
                ))
            }
            if (DS.isEdge && FS(o),
            this.config.tooltips.controls) {
                var c = this.config
                  , l = c.classNames
                  , u = c.selectors
                  , f = "".concat(u.controls.wrapper, " ").concat(u.labels, " .").concat(l.hidden)
                  , h = i_.call(this, f);
                Array.from(h).forEach((function(t) {
                    t_(t, e.config.classNames.hidden, !1),
                    t_(t, e.config.classNames.tooltip, !0)
                }
                ))
            }
        }
    };
    function aT(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
          , n = e;
        if (t) {
            var r = document.createElement("a");
            r.href = n,
            n = r.href
        }
        try {
            return new URL(n)
        } catch (e) {
            return null
        }
    }
    function sT(e) {
        var t = new URLSearchParams;
        return _S(e) && Object.entries(e).forEach((function(e) {
            var n = Na(e, 2)
              , r = n[0]
              , i = n[1];
            t.set(r, i)
        }
        )),
        t
    }
    var cT = {
        setup: function() {
            if (this.supported.ui)
                if (!this.isVideo || this.isYouTube || this.isHTML5 && !l_.textTracks)
                    CS(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && oT.setCaptionsMenu.call(this);
                else {
                    if (IS(this.elements.captions) || (this.elements.captions = YS("div", ZS(this.config.selectors.captions)),
                    function(e, t) {
                        IS(e) && IS(t) && t.parentNode.insertBefore(e, t.nextSibling)
                    }(this.elements.captions, this.elements.wrapper)),
                    DS.isIE && window.URL) {
                        var e = this.media.querySelectorAll("track");
                        Array.from(e).forEach((function(e) {
                            var t = e.getAttribute("src")
                              , n = aT(t);
                            null !== n && n.hostname !== window.location.href.hostname && ["http:", "https:"].includes(n.protocol) && J_(t, "blob").then((function(t) {
                                e.setAttribute("src", window.URL.createObjectURL(t))
                            }
                            )).catch((function() {
                                XS(e)
                            }
                            ))
                        }
                        ))
                    }
                    var t = S_((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map((function(e) {
                        return e.split("-")[0]
                    }
                    )))
                      , n = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
                    if ("auto" === n)
                        n = Na(t, 1)[0];
                    var r = this.storage.get("captions");
                    if (xS(r) || (r = this.config.captions.active),
                    Object.assign(this.captions, {
                        toggled: !1,
                        active: r,
                        language: n,
                        languages: t
                    }),
                    this.isHTML5) {
                        var i = this.config.captions.update ? "addtrack removetrack" : "removetrack";
                        h_.call(this, this.media.textTracks, i, cT.update.bind(this))
                    }
                    setTimeout(cT.update.bind(this), 0)
                }
        },
        update: function() {
            var e = this
              , t = cT.getTracks.call(this, !0)
              , n = this.captions
              , r = n.active
              , i = n.language
              , o = n.meta
              , a = n.currentTrackNode
              , s = Boolean(t.find((function(e) {
                return e.language === i
            }
            )));
            this.isHTML5 && this.isVideo && t.filter((function(e) {
                return !o.get(e)
            }
            )).forEach((function(t) {
                e.debug.log("Track added", t),
                o.set(t, {
                    default: "showing" === t.mode
                }),
                t.mode = "hidden",
                h_.call(e, t, "cuechange", (function() {
                    return cT.updateCues.call(e)
                }
                ))
            }
            )),
            (s && this.language !== i || !t.includes(a)) && (cT.setLanguage.call(this, i),
            cT.toggle.call(this, r && s)),
            t_(this.elements.container, this.config.classNames.captions.enabled, !NS(t)),
            (this.config.controls || []).includes("settings") && this.config.settings.includes("captions") && oT.setCaptionsMenu.call(this)
        },
        toggle: function(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.supported.ui) {
                var n = this.captions.toggled
                  , r = this.config.classNames.captions.active
                  , i = SS(e) ? !n : e;
                if (i !== n) {
                    if (t || (this.captions.active = i,
                    this.storage.set({
                        captions: i
                    })),
                    !this.language && i && !t) {
                        var o = cT.getTracks.call(this)
                          , a = cT.findTrack.call(this, [this.captions.language].concat(Ua(this.captions.languages)), !0);
                        return this.captions.language = a.language,
                        void cT.set.call(this, o.indexOf(a))
                    }
                    this.elements.buttons.captions && (this.elements.buttons.captions.pressed = i),
                    t_(this.elements.container, r, i),
                    this.captions.toggled = i,
                    oT.updateSetting.call(this, "captions"),
                    g_.call(this, this.media, i ? "captionsenabled" : "captionsdisabled")
                }
            }
        },
        set: function(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
              , n = cT.getTracks.call(this);
            if (-1 !== e)
                if (TS(e))
                    if (e in n) {
                        if (this.captions.currentTrack !== e) {
                            this.captions.currentTrack = e;
                            var r = n[e]
                              , i = r || {}
                              , o = i.language;
                            this.captions.currentTrackNode = r,
                            oT.updateSetting.call(this, "captions"),
                            t || (this.captions.language = o,
                            this.storage.set({
                                language: o
                            })),
                            this.isVimeo && this.embed.enableTextTrack(o),
                            g_.call(this, this.media, "languagechange")
                        }
                        cT.toggle.call(this, !0, t),
                        this.isHTML5 && this.isVideo && cT.updateCues.call(this)
                    } else
                        this.debug.warn("Track not found", e);
                else
                    this.debug.warn("Invalid caption argument", e);
            else
                cT.toggle.call(this, !1, t)
        },
        setLanguage: function(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (AS(e)) {
                var n = e.toLowerCase();
                this.captions.language = n;
                var r = cT.getTracks.call(this)
                  , i = cT.findTrack.call(this, [n]);
                cT.set.call(this, r.indexOf(i), t)
            } else
                this.debug.warn("Invalid language argument", e)
        },
        getTracks: function() {
            var e = this
              , t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              , n = Array.from((this.media || {}).textTracks || []);
            return n.filter((function(n) {
                return !e.isHTML5 || t || e.captions.meta.has(n)
            }
            )).filter((function(e) {
                return ["captions", "subtitles"].includes(e.kind)
            }
            ))
        },
        findTrack: function(e) {
            var t, n = this, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], i = cT.getTracks.call(this), o = function(e) {
                return Number((n.captions.meta.get(e) || {}).default)
            }, a = Array.from(i).sort((function(e, t) {
                return o(t) - o(e)
            }
            ));
            return e.every((function(e) {
                return !(t = a.find((function(t) {
                    return t.language === e
                }
                )))
            }
            )),
            t || (r ? a[0] : void 0)
        },
        getCurrentTrack: function() {
            return cT.getTracks.call(this)[this.currentTrack]
        },
        getLabel: function(e) {
            var t = e;
            return !LS(t) && l_.textTracks && this.captions.toggled && (t = cT.getCurrentTrack.call(this)),
            LS(t) ? NS(t.label) ? NS(t.language) ? G_("enabled", this.config) : e.language.toUpperCase() : t.label : G_("disabled", this.config)
        },
        updateCues: function(e) {
            if (this.supported.ui)
                if (IS(this.elements.captions))
                    if (SS(e) || Array.isArray(e)) {
                        var t = e;
                        if (!t) {
                            var n = cT.getCurrentTrack.call(this);
                            t = Array.from((n || {}).activeCues || []).map((function(e) {
                                return e.getCueAsHTML()
                            }
                            )).map(K_)
                        }
                        var r = t.map((function(e) {
                            return e.trim()
                        }
                        )).join("\n");
                        if (r !== this.elements.captions.innerHTML) {
                            JS(this.elements.captions);
                            var i = YS("span", ZS(this.config.selectors.caption));
                            i.innerHTML = r,
                            this.elements.captions.appendChild(i),
                            g_.call(this, this.media, "cuechange")
                        }
                    } else
                        this.debug.warn("updateCues: Invalid input", e);
                else
                    this.debug.warn("No captions element to render to")
        }
    }
      , lT = {
        enabled: !0,
        title: "",
        debug: !1,
        autoplay: !1,
        autopause: !0,
        playsinline: !0,
        seekTime: 5,
        volume: 1,
        muted: !1,
        duration: null,
        displayDuration: !0,
        invertTime: !0,
        toggleInvert: !0,
        ratio: null,
        clickToPlay: !0,
        hideControls: !0,
        resetOnEnd: !1,
        disableContextMenu: !0,
        loadSprite: !0,
        iconPrefix: "plyr",
        iconUrl: "static/plyr.svg",
        blankVideo: "",
        quality: {
            default: 4320,
            options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
            forced: !1,
            onChange: null
        },
        loop: {
            active: !1
        },
        speed: {
            selected: 1,
            options: [.5, .75, 1, 1.25, 1.5, 1.75, 2, 4]
        },
        keyboard: {
            focused: !0,
            global: !1
        },
        tooltips: {
            controls: !1,
            seek: !0
        },
        captions: {
            active: !1,
            language: "auto",
            update: !1
        },
        fullscreen: {
            enabled: !0,
            fallback: !0,
            iosNative: !1
        },
        storage: {
            enabled: !0,
            key: "plyr"
        },
        controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
        settings: ["captions", "quality", "speed"],
        i18n: {
            restart: "Restart",
            rewind: "Rewind {seektime}s",
            play: "Play",
            pause: "Pause",
            fastForward: "Forward {seektime}s",
            seek: "Seek",
            seekLabel: "{currentTime} of {duration}",
            played: "Played",
            buffered: "Buffered",
            currentTime: "Current time",
            duration: "Duration",
            volume: "Volume",
            mute: "Mute",
            unmute: "Unmute",
            enableCaptions: "Enable captions",
            disableCaptions: "Disable captions",
            download: "Download",
            enterFullscreen: "Enter fullscreen",
            exitFullscreen: "Exit fullscreen",
            frameTitle: "Player for {title}",
            captions: "Captions",
            settings: "Settings",
            pip: "PIP",
            menuBack: "Go back to previous menu",
            speed: "Speed",
            normal: "Normal",
            quality: "Quality",
            loop: "Loop",
            start: "Start",
            end: "End",
            all: "All",
            reset: "Reset",
            disabled: "Disabled",
            enabled: "Enabled",
            advertisement: "Ad",
            qualityBadge: {
                2160: "4K",
                1440: "HD",
                1080: "HD",
                720: "HD",
                576: "SD",
                480: "SD"
            }
        },
        urls: {
            download: null,
            vimeo: {
                sdk: "https://player.vimeo.com/api/player.js",
                iframe: "https://player.vimeo.com/video/{0}?{1}",
                api: "https://vimeo.com/api/v2/video/{0}.json"
            },
            youtube: {
                sdk: "https://www.youtube.com/iframe_api",
                api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"
            },
            googleIMA: {
                sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
            }
        },
        listeners: {
            seek: null,
            play: null,
            pause: null,
            restart: null,
            rewind: null,
            fastForward: null,
            mute: null,
            volume: null,
            captions: null,
            download: null,
            fullscreen: null,
            pip: null,
            airplay: null,
            speed: null,
            quality: null,
            loop: null,
            language: null
        },
        events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
        selectors: {
            editable: "input, textarea, select, [contenteditable]",
            container: ".plyr",
            controls: {
                container: null,
                wrapper: ".plyr__controls"
            },
            labels: "[data-plyr]",
            buttons: {
                play: '[data-plyr="play"]',
                pause: '[data-plyr="pause"]',
                restart: '[data-plyr="restart"]',
                rewind: '[data-plyr="rewind"]',
                fastForward: '[data-plyr="fast-forward"]',
                mute: '[data-plyr="mute"]',
                captions: '[data-plyr="captions"]',
                download: '[data-plyr="download"]',
                fullscreen: '[data-plyr="fullscreen"]',
                pip: '[data-plyr="pip"]',
                airplay: '[data-plyr="airplay"]',
                settings: '[data-plyr="settings"]',
                loop: '[data-plyr="loop"]'
            },
            inputs: {
                seek: '[data-plyr="seek"]',
                volume: '[data-plyr="volume"]',
                speed: '[data-plyr="speed"]',
                language: '[data-plyr="language"]',
                quality: '[data-plyr="quality"]'
            },
            display: {
                currentTime: ".plyr__time--current",
                duration: ".plyr__time--duration",
                buffer: ".plyr__progress__buffer",
                loop: ".plyr__progress__loop",
                volume: ".plyr__volume--display"
            },
            progress: ".plyr__progress",
            captions: ".plyr__captions",
            caption: ".plyr__caption"
        },
        classNames: {
            type: "plyr--{0}",
            provider: "plyr--{0}",
            video: "plyr__video-wrapper",
            embed: "plyr__video-embed",
            videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
            embedContainer: "plyr__video-embed__container",
            poster: "plyr__poster",
            posterEnabled: "plyr__poster-enabled",
            ads: "plyr__ads",
            control: "plyr__control",
            controlPressed: "plyr__control--pressed",
            playing: "plyr--playing",
            paused: "plyr--paused",
            stopped: "plyr--stopped",
            loading: "plyr--loading",
            hover: "plyr--hover",
            tooltip: "plyr__tooltip",
            cues: "plyr__cues",
            hidden: "plyr__sr-only",
            hideControls: "plyr--hide-controls",
            isIos: "plyr--is-ios",
            isTouch: "plyr--is-touch",
            uiSupported: "plyr--full-ui",
            noTransition: "plyr--no-transition",
            display: {
                time: "plyr__time"
            },
            menu: {
                value: "plyr__menu__value",
                badge: "plyr__badge",
                open: "plyr--menu-open"
            },
            captions: {
                enabled: "plyr--captions-enabled",
                active: "plyr--captions-active"
            },
            fullscreen: {
                enabled: "plyr--fullscreen-enabled",
                fallback: "plyr--fullscreen-fallback"
            },
            pip: {
                supported: "plyr--pip-supported",
                active: "plyr--pip-active"
            },
            airplay: {
                supported: "plyr--airplay-supported",
                active: "plyr--airplay-active"
            },
            tabFocus: "plyr__tab-focus",
            previewThumbnails: {
                thumbContainer: "plyr__preview-thumb",
                thumbContainerShown: "plyr__preview-thumb--is-shown",
                imageContainer: "plyr__preview-thumb__image-container",
                timeContainer: "plyr__preview-thumb__time-container",
                scrubbingContainer: "plyr__preview-scrubbing",
                scrubbingContainerShown: "plyr__preview-scrubbing--is-shown"
            }
        },
        attributes: {
            embed: {
                provider: "data-plyr-provider",
                id: "data-plyr-embed-id"
            }
        },
        ads: {
            enabled: !1,
            publisherId: "",
            tagUrl: ""
        },
        previewThumbnails: {
            enabled: !1,
            src: ""
        },
        vimeo: {
            byline: !1,
            portrait: !1,
            title: !1,
            speed: !0,
            transparent: !1,
            sidedock: !1,
            controls: !1,
            referrerPolicy: null
        },
        youtube: {
            noCookie: !1,
            rel: 0,
            showinfo: 0,
            iv_load_policy: 3,
            modestbranding: 1
        }
    }
      , uT = "picture-in-picture"
      , fT = "inline"
      , hT = {
        html5: "html5",
        youtube: "youtube",
        vimeo: "vimeo"
    }
      , dT = "audio"
      , pT = "video";
    var gT = function() {}
      , mT = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            Pa(this, e),
            this.enabled = window.console && t,
            this.enabled && this.log("Debugging enabled")
        }
        return Ra(e, [{
            key: "log",
            get: function() {
                return this.enabled ? Function.prototype.bind.call(console.log, console) : gT
            }
        }, {
            key: "warn",
            get: function() {
                return this.enabled ? Function.prototype.bind.call(console.warn, console) : gT
            }
        }, {
            key: "error",
            get: function() {
                return this.enabled ? Function.prototype.bind.call(console.error, console) : gT
            }
        }]),
        e
    }()
      , vT = function() {
        function e(t) {
            var n = this;
            Pa(this, e),
            this.player = t,
            this.prefix = e.prefix,
            this.property = e.property,
            this.scrollPosition = {
                x: 0,
                y: 0
            },
            this.forceFallback = "force" === t.config.fullscreen.fallback,
            h_.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : "".concat(this.prefix, "fullscreenchange"), (function() {
                n.onChange()
            }
            )),
            h_.call(this.player, this.player.elements.container, "dblclick", (function(e) {
                IS(n.player.elements.controls) && n.player.elements.controls.contains(e.target) || n.toggle()
            }
            )),
            h_.call(this, this.player.elements.container, "keydown", (function(e) {
                return n.trapFocus(e)
            }
            )),
            this.update()
        }
        return Ra(e, [{
            key: "onChange",
            value: function() {
                if (this.enabled) {
                    var e = this.player.elements.buttons.fullscreen;
                    IS(e) && (e.pressed = this.active),
                    g_.call(this.player, this.target, this.active ? "enterfullscreen" : "exitfullscreen", !0)
                }
            }
        }, {
            key: "toggleFallback",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (e ? this.scrollPosition = {
                    x: window.scrollX || 0,
                    y: window.scrollY || 0
                } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y),
                document.body.style.overflow = e ? "hidden" : "",
                t_(this.target, this.player.config.classNames.fullscreen.fallback, e),
                DS.isIos) {
                    var t = document.head.querySelector('meta[name="viewport"]')
                      , n = "viewport-fit=cover";
                    t || (t = document.createElement("meta")).setAttribute("name", "viewport");
                    var r = AS(t.content) && t.content.includes(n);
                    e ? (this.cleanupViewport = !r,
                    r || (t.content += ",".concat(n))) : this.cleanupViewport && (t.content = t.content.split(",").filter((function(e) {
                        return e.trim() !== n
                    }
                    )).join(","))
                }
                this.onChange()
            }
        }, {
            key: "trapFocus",
            value: function(e) {
                if (!DS.isIos && this.active && "Tab" === e.key && 9 === e.keyCode) {
                    var t = document.activeElement
                      , n = i_.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]")
                      , r = Na(n, 1)[0]
                      , i = n[n.length - 1];
                    t !== i || e.shiftKey ? t === r && e.shiftKey && (i.focus(),
                    e.preventDefault()) : (r.focus(),
                    e.preventDefault())
                }
            }
        }, {
            key: "update",
            value: function() {
                var t;
                this.enabled ? (t = this.forceFallback ? "Fallback (forced)" : e.native ? "Native" : "Fallback",
                this.player.debug.log("".concat(t, " fullscreen enabled"))) : this.player.debug.log("Fullscreen not supported and fallback disabled");
                t_(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled)
            }
        }, {
            key: "enter",
            value: function() {
                this.enabled && (DS.isIos && this.player.config.fullscreen.iosNative ? this.target.webkitEnterFullscreen() : !e.native || this.forceFallback ? this.toggleFallback(!0) : this.prefix ? NS(this.prefix) || this.target["".concat(this.prefix, "Request").concat(this.property)]() : this.target.requestFullscreen({
                    navigationUI: "hide"
                }))
            }
        }, {
            key: "exit",
            value: function() {
                if (this.enabled)
                    if (DS.isIos && this.player.config.fullscreen.iosNative)
                        this.target.webkitExitFullscreen(),
                        this.player.play();
                    else if (!e.native || this.forceFallback)
                        this.toggleFallback(!1);
                    else if (this.prefix) {
                        if (!NS(this.prefix)) {
                            var t = "moz" === this.prefix ? "Cancel" : "Exit";
                            document["".concat(this.prefix).concat(t).concat(this.property)]()
                        }
                    } else
                        (document.cancelFullScreen || document.exitFullscreen).call(document)
            }
        }, {
            key: "toggle",
            value: function() {
                this.active ? this.exit() : this.enter()
            }
        }, {
            key: "usingNative",
            get: function() {
                return e.native && !this.forceFallback
            }
        }, {
            key: "enabled",
            get: function() {
                return (e.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo
            }
        }, {
            key: "active",
            get: function() {
                return !!this.enabled && (!e.native || this.forceFallback ? n_(this.target, this.player.config.classNames.fullscreen.fallback) : (this.prefix ? document["".concat(this.prefix).concat(this.property, "Element")] : document.fullscreenElement) === this.target)
            }
        }, {
            key: "target",
            get: function() {
                return DS.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.container
            }
        }], [{
            key: "native",
            get: function() {
                return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
            }
        }, {
            key: "prefix",
            get: function() {
                if (OS(document.exitFullscreen))
                    return "";
                var e = "";
                return ["webkit", "moz", "ms"].some((function(t) {
                    return !(!OS(document["".concat(t, "ExitFullscreen")]) && !OS(document["".concat(t, "CancelFullScreen")])) && (e = t,
                    !0)
                }
                )),
                e
            }
        }, {
            key: "property",
            get: function() {
                return "moz" === this.prefix ? "FullScreen" : "Fullscreen"
            }
        }]),
        e
    }()
      , yT = Math.sign || function(e) {
        return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1
    }
    ;
    function bT(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Promise((function(n, r) {
            var i = new Image
              , o = function() {
                delete i.onload,
                delete i.onerror,
                (i.naturalWidth >= t ? n : r)(i)
            };
            Object.assign(i, {
                onload: o,
                onerror: o,
                src: e
            })
        }
        ))
    }
    wg({
        target: "Math",
        stat: !0
    }, {
        sign: yT
    });
    var wT = {
        addStyleHook: function() {
            t_(this.elements.container, this.config.selectors.container.replace(".", ""), !0),
            t_(this.elements.container, this.config.classNames.uiSupported, this.supported.ui)
        },
        toggleNativeControls: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            e && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls")
        },
        build: function() {
            var e = this;
            if (this.listeners.media(),
            !this.supported.ui)
                return this.debug.warn("Basic support only for ".concat(this.provider, " ").concat(this.type)),
                void wT.toggleNativeControls.call(this, !0);
            IS(this.elements.controls) || (oT.inject.call(this),
            this.listeners.controls()),
            wT.toggleNativeControls.call(this),
            this.isHTML5 && cT.setup.call(this),
            this.volume = null,
            this.muted = null,
            this.loop = null,
            this.quality = null,
            this.speed = null,
            oT.updateVolume.call(this),
            oT.timeUpdate.call(this),
            wT.checkPlaying.call(this),
            t_(this.elements.container, this.config.classNames.pip.supported, l_.pip && this.isHTML5 && this.isVideo),
            t_(this.elements.container, this.config.classNames.airplay.supported, l_.airplay && this.isHTML5),
            t_(this.elements.container, this.config.classNames.isIos, DS.isIos),
            t_(this.elements.container, this.config.classNames.isTouch, this.touch),
            this.ready = !0,
            setTimeout((function() {
                g_.call(e, e.media, "ready")
            }
            ), 0),
            wT.setTitle.call(this),
            this.poster && wT.setPoster.call(this, this.poster, !1).catch((function() {}
            )),
            this.config.duration && oT.durationUpdate.call(this)
        },
        setTitle: function() {
            var e = G_("play", this.config);
            if (AS(this.config.title) && !NS(this.config.title) && (e += ", ".concat(this.config.title)),
            Array.from(this.elements.buttons.play || []).forEach((function(t) {
                t.setAttribute("aria-label", e)
            }
            )),
            this.isEmbed) {
                var t = o_.call(this, "iframe");
                if (!IS(t))
                    return;
                var n = NS(this.config.title) ? "video" : this.config.title
                  , r = G_("frameTitle", this.config);
                t.setAttribute("title", r.replace("{title}", n))
            }
        },
        togglePoster: function(e) {
            t_(this.elements.container, this.config.classNames.posterEnabled, e)
        },
        setPoster: function(e) {
            var t = this
              , n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            return n && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("poster", e),
            v_.call(this).then((function() {
                return bT(e)
            }
            )).catch((function(n) {
                throw e === t.poster && wT.togglePoster.call(t, !1),
                n
            }
            )).then((function() {
                if (e !== t.poster)
                    throw new Error("setPoster cancelled by later call to setPoster")
            }
            )).then((function() {
                return Object.assign(t.elements.poster.style, {
                    backgroundImage: "url('".concat(e, "')"),
                    backgroundSize: ""
                }),
                wT.togglePoster.call(t, !0),
                e
            }
            )))
        },
        checkPlaying: function(e) {
            var t = this;
            t_(this.elements.container, this.config.classNames.playing, this.playing),
            t_(this.elements.container, this.config.classNames.paused, this.paused),
            t_(this.elements.container, this.config.classNames.stopped, this.stopped),
            Array.from(this.elements.buttons.play || []).forEach((function(e) {
                Object.assign(e, {
                    pressed: t.playing
                }),
                e.setAttribute("aria-label", G_(t.playing ? "pause" : "play", t.config))
            }
            )),
            RS(e) && "timeupdate" === e.type || wT.toggleControls.call(this)
        },
        checkLoading: function(e) {
            var t = this;
            this.loading = ["stalled", "waiting"].includes(e.type),
            clearTimeout(this.timers.loading),
            this.timers.loading = setTimeout((function() {
                t_(t.elements.container, t.config.classNames.loading, t.loading),
                wT.toggleControls.call(t)
            }
            ), this.loading ? 250 : 0)
        },
        toggleControls: function(e) {
            var t = this.elements.controls;
            if (t && this.config.hideControls) {
                var n = this.touch && this.lastSeekTime + 2e3 > Date.now();
                this.toggleControls(Boolean(e || this.loading || this.paused || t.pressed || t.hover || n))
            }
        }
    }
      , kT = function() {
        function e(t) {
            Pa(this, e),
            this.player = t,
            this.lastKey = null,
            this.focusTimer = null,
            this.lastKeyDown = null,
            this.handleKey = this.handleKey.bind(this),
            this.toggleMenu = this.toggleMenu.bind(this),
            this.setTabFocus = this.setTabFocus.bind(this),
            this.firstTouch = this.firstTouch.bind(this)
        }
        return Ra(e, [{
            key: "handleKey",
            value: function(e) {
                var t = this.player
                  , n = t.elements
                  , r = e.keyCode ? e.keyCode : e.which
                  , i = "keydown" === e.type
                  , o = i && r === this.lastKey;
                if (!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) && TS(r)) {
                    if (i) {
                        var a = document.activeElement;
                        if (IS(a)) {
                            var s = t.config.selectors.editable;
                            if (a !== n.inputs.seek && r_(a, s))
                                return;
                            if (32 === e.which && r_(a, 'button, [role^="menuitem"]'))
                                return
                        }
                        switch ([32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70, 73, 75, 76, 77, 79].includes(r) && (e.preventDefault(),
                        e.stopPropagation()),
                        r) {
                        case 48:
                        case 49:
                        case 50:
                        case 51:
                        case 52:
                        case 53:
                        case 54:
                        case 55:
                        case 56:
                        case 57:
                            o || (t.currentTime = t.duration / 10 * (r - 48));
                            break;
                        case 32:
                        case 75:
                            o || t.togglePlay();
                            break;
                        case 38:
                            t.increaseVolume(.1);
                            break;
                        case 40:
                            t.decreaseVolume(.1);
                            break;
                        case 77:
                            o || (t.muted = !t.muted);
                            break;
                        case 39:
                            t.forward();
                            break;
                        case 37:
                            t.rewind();
                            break;
                        case 70:
                            t.fullscreen.toggle();
                            break;
                        case 67:
                            o || t.toggleCaptions();
                            break;
                        case 76:
                            t.loop = !t.loop
                        }
                        27 === r && !t.fullscreen.usingNative && t.fullscreen.active && t.fullscreen.toggle(),
                        this.lastKey = r
                    } else
                        this.lastKey = null
                }
            }
        }, {
            key: "toggleMenu",
            value: function(e) {
                oT.toggleMenu.call(this.player, e)
            }
        }, {
            key: "firstTouch",
            value: function() {
                var e = this.player
                  , t = e.elements;
                e.touch = !0,
                t_(t.container, e.config.classNames.isTouch, !0)
            }
        }, {
            key: "setTabFocus",
            value: function(e) {
                var t = this.player
                  , n = t.elements;
                if (clearTimeout(this.focusTimer),
                "keydown" !== e.type || 9 === e.which) {
                    "keydown" === e.type && (this.lastKeyDown = e.timeStamp);
                    var r, i = e.timeStamp - this.lastKeyDown <= 20;
                    if ("focus" !== e.type || i)
                        r = t.config.classNames.tabFocus,
                        t_(i_.call(t, ".".concat(r)), r, !1),
                        this.focusTimer = setTimeout((function() {
                            var e = document.activeElement;
                            n.container.contains(e) && t_(document.activeElement, t.config.classNames.tabFocus, !0)
                        }
                        ), 10)
                }
            }
        }, {
            key: "global",
            value: function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
                  , t = this.player;
                t.config.keyboard.global && f_.call(t, window, "keydown keyup", this.handleKey, e, !1),
                f_.call(t, document.body, "click", this.toggleMenu, e),
                p_.call(t, document.body, "touchstart", this.firstTouch),
                f_.call(t, document.body, "keydown focus blur", this.setTabFocus, e, !1, !0)
            }
        }, {
            key: "container",
            value: function() {
                var e = this.player
                  , t = e.config
                  , n = e.elements
                  , r = e.timers;
                !t.keyboard.global && t.keyboard.focused && h_.call(e, n.container, "keydown keyup", this.handleKey, !1),
                h_.call(e, n.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", (function(t) {
                    var i = n.controls;
                    i && "enterfullscreen" === t.type && (i.pressed = !1,
                    i.hover = !1);
                    var o = 0;
                    ["touchstart", "touchmove", "mousemove"].includes(t.type) && (wT.toggleControls.call(e, !0),
                    o = e.touch ? 3e3 : 2e3),
                    clearTimeout(r.controls),
                    r.controls = setTimeout((function() {
                        return wT.toggleControls.call(e, !1)
                    }
                    ), o)
                }
                ));
                var i = function(t) {
                    if (!t)
                        return k_.call(e);
                    var r = n.container.getBoundingClientRect()
                      , i = r.width
                      , o = r.height;
                    return k_.call(e, "".concat(i, ":").concat(o))
                }
                  , o = function() {
                    clearTimeout(r.resized),
                    r.resized = setTimeout(i, 50)
                };
                h_.call(e, n.container, "enterfullscreen exitfullscreen", (function(t) {
                    var r = e.fullscreen
                      , a = r.target
                      , s = r.usingNative;
                    if (a === n.container && (e.isEmbed || !NS(e.config.ratio))) {
                        var c = "enterfullscreen" === t.type
                          , l = i(c);
                        l.padding;
                        !function(t, n, r) {
                            if (e.isVimeo) {
                                var i = e.elements.wrapper.firstChild
                                  , o = Na(t, 2)[1]
                                  , a = Na(w_.call(e), 2)
                                  , s = a[0]
                                  , c = a[1];
                                i.style.maxWidth = r ? "".concat(o / c * s, "px") : null,
                                i.style.margin = r ? "0 auto" : null
                            }
                        }(l.ratio, 0, c),
                        s || (c ? h_.call(e, window, "resize", o) : d_.call(e, window, "resize", o))
                    }
                }
                ))
            }
        }, {
            key: "media",
            value: function() {
                var e = this
                  , t = this.player
                  , n = t.elements;
                if (h_.call(t, t.media, "timeupdate seeking seeked", (function(e) {
                    return oT.timeUpdate.call(t, e)
                }
                )),
                h_.call(t, t.media, "durationchange loadeddata loadedmetadata", (function(e) {
                    return oT.durationUpdate.call(t, e)
                }
                )),
                h_.call(t, t.media, "ended", (function() {
                    t.isHTML5 && t.isVideo && t.config.resetOnEnd && (t.restart(),
                    t.pause())
                }
                )),
                h_.call(t, t.media, "progress playing seeking seeked", (function(e) {
                    return oT.updateProgress.call(t, e)
                }
                )),
                h_.call(t, t.media, "volumechange", (function(e) {
                    return oT.updateVolume.call(t, e)
                }
                )),
                h_.call(t, t.media, "playing play pause ended emptied timeupdate", (function(e) {
                    return wT.checkPlaying.call(t, e)
                }
                )),
                h_.call(t, t.media, "waiting canplay seeked playing", (function(e) {
                    return wT.checkLoading.call(t, e)
                }
                )),
                t.supported.ui && t.config.clickToPlay && !t.isAudio) {
                    var r = o_.call(t, ".".concat(t.config.classNames.video));
                    if (!IS(r))
                        return;
                    h_.call(t, n.container, "click", (function(i) {
                        ([n.container, r].includes(i.target) || r.contains(i.target)) && (t.touch && t.config.hideControls || (t.ended ? (e.proxy(i, t.restart, "restart"),
                        e.proxy(i, t.play, "play")) : e.proxy(i, t.togglePlay, "play")))
                    }
                    ))
                }
                t.supported.ui && t.config.disableContextMenu && h_.call(t, n.wrapper, "contextmenu", (function(e) {
                    e.preventDefault()
                }
                ), !1),
                h_.call(t, t.media, "volumechange", (function() {
                    t.storage.set({
                        volume: t.volume,
                        muted: t.muted
                    })
                }
                )),
                h_.call(t, t.media, "ratechange", (function() {
                    oT.updateSetting.call(t, "speed"),
                    t.storage.set({
                        speed: t.speed
                    })
                }
                )),
                h_.call(t, t.media, "qualitychange", (function(e) {
                    oT.updateSetting.call(t, "quality", null, e.detail.quality)
                }
                )),
                h_.call(t, t.media, "ready qualitychange", (function() {
                    oT.setDownloadUrl.call(t)
                }
                ));
                var i = t.config.events.concat(["keyup", "keydown"]).join(" ");
                h_.call(t, t.media, i, (function(e) {
                    var r = e.detail
                      , i = void 0 === r ? {} : r;
                    "error" === e.type && (i = t.media.error),
                    g_.call(t, n.container, e.type, !0, i)
                }
                ))
            }
        }, {
            key: "proxy",
            value: function(e, t, n) {
                var r = this.player
                  , i = r.config.listeners[n]
                  , o = !0;
                OS(i) && (o = i.call(r, e)),
                !1 !== o && OS(t) && t.call(r, e)
            }
        }, {
            key: "bind",
            value: function(e, t, n, r) {
                var i = this
                  , o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]
                  , a = this.player
                  , s = a.config.listeners[r]
                  , c = OS(s);
                h_.call(a, e, t, (function(e) {
                    return i.proxy(e, n, r)
                }
                ), o && !c)
            }
        }, {
            key: "controls",
            value: function() {
                var e = this
                  , t = this.player
                  , n = t.elements
                  , r = DS.isIE ? "change" : "input";
                if (n.buttons.play && Array.from(n.buttons.play).forEach((function(n) {
                    e.bind(n, "click", t.togglePlay, "play")
                }
                )),
                this.bind(n.buttons.restart, "click", t.restart, "restart"),
                this.bind(n.buttons.rewind, "click", t.rewind, "rewind"),
                this.bind(n.buttons.fastForward, "click", t.forward, "fastForward"),
                this.bind(n.buttons.mute, "click", (function() {
                    t.muted = !t.muted
                }
                ), "mute"),
                this.bind(n.buttons.captions, "click", (function() {
                    return t.toggleCaptions()
                }
                )),
                this.bind(n.buttons.download, "click", (function() {
                    g_.call(t, t.media, "download")
                }
                ), "download"),
                this.bind(n.buttons.fullscreen, "click", (function() {
                    t.fullscreen.toggle()
                }
                ), "fullscreen"),
                this.bind(n.buttons.pip, "click", (function() {
                    t.pip = "toggle"
                }
                ), "pip"),
                this.bind(n.buttons.airplay, "click", t.airplay, "airplay"),
                this.bind(n.buttons.settings, "click", (function(e) {
                    e.stopPropagation(),
                    e.preventDefault(),
                    oT.toggleMenu.call(t, e)
                }
                ), null, !1),
                this.bind(n.buttons.settings, "keyup", (function(e) {
                    var n = e.which;
                    [13, 32].includes(n) && (13 !== n ? (e.preventDefault(),
                    e.stopPropagation(),
                    oT.toggleMenu.call(t, e)) : oT.focusFirstMenuItem.call(t, null, !0))
                }
                ), null, !1),
                this.bind(n.settings.menu, "keydown", (function(e) {
                    27 === e.which && oT.toggleMenu.call(t, e)
                }
                )),
                this.bind(n.inputs.seek, "mousedown mousemove", (function(e) {
                    var t = n.progress.getBoundingClientRect()
                      , r = 100 / t.width * (e.pageX - t.left);
                    e.currentTarget.setAttribute("seek-value", r)
                }
                )),
                this.bind(n.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", (function(e) {
                    var n = e.currentTarget
                      , r = e.keyCode ? e.keyCode : e.which;
                    if (!jS(e) || 39 === r || 37 === r) {
                        t.lastSeekTime = Date.now();
                        var i = n.hasAttribute("play-on-seeked")
                          , o = ["mouseup", "touchend", "keyup"].includes(e.type);
                        i && o ? (n.removeAttribute("play-on-seeked"),
                        t.play()) : !o && t.playing && (n.setAttribute("play-on-seeked", ""),
                        t.pause())
                    }
                }
                )),
                DS.isIos) {
                    var i = i_.call(t, 'input[type="range"]');
                    Array.from(i).forEach((function(t) {
                        return e.bind(t, r, (function(e) {
                            return FS(e.target)
                        }
                        ))
                    }
                    ))
                }
                this.bind(n.inputs.seek, r, (function(e) {
                    var n = e.currentTarget
                      , r = n.getAttribute("seek-value");
                    NS(r) && (r = n.value),
                    n.removeAttribute("seek-value"),
                    t.currentTime = r / n.max * t.duration
                }
                ), "seek"),
                this.bind(n.progress, "mouseenter mouseleave mousemove", (function(e) {
                    return oT.updateSeekTooltip.call(t, e)
                }
                )),
                this.bind(n.progress, "mousemove touchmove", (function(e) {
                    var n = t.previewThumbnails;
                    n && n.loaded && n.startMove(e)
                }
                )),
                this.bind(n.progress, "mouseleave touchend click", (function() {
                    var e = t.previewThumbnails;
                    e && e.loaded && e.endMove(!1, !0)
                }
                )),
                this.bind(n.progress, "mousedown touchstart", (function(e) {
                    var n = t.previewThumbnails;
                    n && n.loaded && n.startScrubbing(e)
                }
                )),
                this.bind(n.progress, "mouseup touchend", (function(e) {
                    var n = t.previewThumbnails;
                    n && n.loaded && n.endScrubbing(e)
                }
                )),
                DS.isWebkit && Array.from(i_.call(t, 'input[type="range"]')).forEach((function(n) {
                    e.bind(n, "input", (function(e) {
                        return oT.updateRangeFill.call(t, e.target)
                    }
                    ))
                }
                )),
                t.config.toggleInvert && !IS(n.display.duration) && this.bind(n.display.currentTime, "click", (function() {
                    0 !== t.currentTime && (t.config.invertTime = !t.config.invertTime,
                    oT.timeUpdate.call(t))
                }
                )),
                this.bind(n.inputs.volume, r, (function(e) {
                    t.volume = e.target.value
                }
                ), "volume"),
                this.bind(n.controls, "mouseenter mouseleave", (function(e) {
                    n.controls.hover = !t.touch && "mouseenter" === e.type
                }
                )),
                this.bind(n.controls, "mousedown mouseup touchstart touchend touchcancel", (function(e) {
                    n.controls.pressed = ["mousedown", "touchstart"].includes(e.type)
                }
                )),
                this.bind(n.controls, "focusin", (function() {
                    var r = t.config
                      , i = t.timers;
                    t_(n.controls, r.classNames.noTransition, !0),
                    wT.toggleControls.call(t, !0),
                    setTimeout((function() {
                        t_(n.controls, r.classNames.noTransition, !1)
                    }
                    ), 0);
                    var o = e.touch ? 3e3 : 4e3;
                    clearTimeout(i.controls),
                    i.controls = setTimeout((function() {
                        return wT.toggleControls.call(t, !1)
                    }
                    ), o)
                }
                )),
                this.bind(n.inputs.volume, "wheel", (function(e) {
                    var n = e.webkitDirectionInvertedFromDevice
                      , r = Na([e.deltaX, -e.deltaY].map((function(e) {
                        return n ? -e : e
                    }
                    )), 2)
                      , i = r[0]
                      , o = r[1]
                      , a = Math.sign(Math.abs(i) > Math.abs(o) ? i : o);
                    t.increaseVolume(a / 50);
                    var s = t.media.volume;
                    (1 === a && s < 1 || -1 === a && s > 0) && e.preventDefault()
                }
                ), "volume", !1)
            }
        }]),
        e
    }()
      , ET = Fg("splice")
      , ST = Jg("splice", {
        ACCESSORS: !0,
        0: 0,
        1: 2
    })
      , _T = Math.max
      , TT = Math.min;
    wg({
        target: "Array",
        proto: !0,
        forced: !ET || !ST
    }, {
        splice: function(e, t) {
            var n, r, i, o, a, s, c = Eg(this), l = Qp(c.length), u = tg(e, l), f = arguments.length;
            if (0 === f ? n = r = 0 : 1 === f ? (n = 0,
            r = l - u) : (n = f - 2,
            r = TT(_T(Xp(t), 0), l - u)),
            l + n - r > 9007199254740991)
                throw TypeError("Maximum allowed length exceeded");
            for (i = Ig(c, r),
            o = 0; o < r; o++)
                (a = u + o)in c && Sg(i, o, c[a]);
            if (i.length = r,
            n < r) {
                for (o = u; o < l - r; o++)
                    s = o + n,
                    (a = o + r)in c ? c[s] = c[a] : delete c[s];
                for (o = l; o > l - r + n; o--)
                    delete c[o - 1]
            } else if (n > r)
                for (o = l - r; o > u; o--)
                    s = o + n - 1,
                    (a = o + r - 1)in c ? c[s] = c[a] : delete c[s];
            for (o = 0; o < n; o++)
                c[o + u] = arguments[o + 2];
            return c.length = l - r + n,
            i
        }
    });
    var AT = t((function(e, t) {
        e.exports = function() {
            var e = function() {}
              , t = {}
              , n = {}
              , r = {};
            function i(e, t) {
                if (e) {
                    var i = r[e];
                    if (n[e] = t,
                    i)
                        for (; i.length; )
                            i[0](e, t),
                            i.splice(0, 1)
                }
            }
            function o(t, n) {
                t.call && (t = {
                    success: t
                }),
                n.length ? (t.error || e)(n) : (t.success || e)(t)
            }
            function a(t, n, r, i) {
                var o, s, c = document, l = r.async, u = (r.numRetries || 0) + 1, f = r.before || e, h = t.replace(/[\?|#].*$/, ""), d = t.replace(/^(css|img)!/, "");
                i = i || 0,
                /(^css!|\.css$)/.test(h) ? ((s = c.createElement("link")).rel = "stylesheet",
                s.href = d,
                (o = "hideFocus"in s) && s.relList && (o = 0,
                s.rel = "preload",
                s.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(h) ? (s = c.createElement("img")).src = d : ((s = c.createElement("script")).src = t,
                s.async = void 0 === l || l),
                s.onload = s.onerror = s.onbeforeload = function(e) {
                    var c = e.type[0];
                    if (o)
                        try {
                            s.sheet.cssText.length || (c = "e")
                        } catch (e) {
                            18 != e.code && (c = "e")
                        }
                    if ("e" == c) {
                        if ((i += 1) < u)
                            return a(t, n, r, i)
                    } else if ("preload" == s.rel && "style" == s.as)
                        return s.rel = "stylesheet";
                    n(t, c, e.defaultPrevented)
                }
                ,
                !1 !== f(t, s) && c.head.appendChild(s)
            }
            function s(e, n, r) {
                var s, c;
                if (n && n.trim && (s = n),
                c = (s ? r : n) || {},
                s) {
                    if (s in t)
                        throw "LoadJS";
                    t[s] = !0
                }
                function l(t, n) {
                    !function(e, t, n) {
                        var r, i, o = (e = e.push ? e : [e]).length, s = o, c = [];
                        for (r = function(e, n, r) {
                            if ("e" == n && c.push(e),
                            "b" == n) {
                                if (!r)
                                    return;
                                c.push(e)
                            }
                            --o || t(c)
                        }
                        ,
                        i = 0; i < s; i++)
                            a(e[i], r, n)
                    }(e, (function(e) {
                        o(c, e),
                        t && o({
                            success: t,
                            error: n
                        }, e),
                        i(s, e)
                    }
                    ), c)
                }
                if (c.returnPromise)
                    return new Promise(l);
                l()
            }
            return s.ready = function(e, t) {
                return function(e, t) {
                    e = e.push ? e : [e];
                    var i, o, a, s = [], c = e.length, l = c;
                    for (i = function(e, n) {
                        n.length && s.push(e),
                        --l || t(s)
                    }
                    ; c--; )
                        o = e[c],
                        (a = n[o]) ? i(o, a) : (r[o] = r[o] || []).push(i)
                }(e, (function(e) {
                    o(t, e)
                }
                )),
                s
            }
            ,
            s.done = function(e) {
                i(e, [])
            }
            ,
            s.reset = function() {
                t = {},
                n = {},
                r = {}
            }
            ,
            s.isDefined = function(e) {
                return e in t
            }
            ,
            s
        }()
    }
    ));
    function xT(e) {
        return new Promise((function(t, n) {
            AT(e, {
                success: t,
                error: n
            })
        }
        ))
    }
    function OT(e) {
        e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
        this.media.paused === e && (this.media.paused = !e,
        g_.call(this, this.media, e ? "play" : "pause"))
    }
    var CT = {
        setup: function() {
            var e = this;
            t_(e.elements.wrapper, e.config.classNames.embed, !0),
            e.options.speed = e.config.speed.options,
            k_.call(e),
            _S(window.Vimeo) ? CT.ready.call(e) : xT(e.config.urls.vimeo.sdk).then((function() {
                CT.ready.call(e)
            }
            )).catch((function(t) {
                e.debug.warn("Vimeo SDK (player.js) failed to load", t)
            }
            ))
        },
        ready: function() {
            var e = this
              , t = this
              , n = t.config.vimeo
              , r = sT(WS({}, {
                loop: t.config.loop.active,
                autoplay: t.autoplay,
                muted: t.muted,
                gesture: "media",
                playsinline: !this.config.fullscreen.iosNative
            }, n))
              , i = t.media.getAttribute("src");
            NS(i) && (i = t.media.getAttribute(t.config.attributes.embed.id));
            var o, a = NS(o = i) ? null : TS(Number(o)) ? o : o.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : o, s = YS("iframe"), c = V_(t.config.urls.vimeo.iframe, a, r);
            s.setAttribute("src", c),
            s.setAttribute("allowfullscreen", ""),
            s.setAttribute("allowtransparency", ""),
            s.setAttribute("allow", "autoplay"),
            NS(n.referrerPolicy) || s.setAttribute("referrerPolicy", n.referrerPolicy);
            var l = YS("div", {
                poster: t.poster,
                class: t.config.classNames.embedContainer
            });
            l.appendChild(s),
            t.media = QS(l, t.media),
            J_(V_(t.config.urls.vimeo.api, a), "json").then((function(e) {
                if (!NS(e)) {
                    var n = new URL(e[0].thumbnail_large);
                    n.pathname = "".concat(n.pathname.split("_")[0], ".jpg"),
                    wT.setPoster.call(t, n.href).catch((function() {}
                    ))
                }
            }
            )),
            t.embed = new window.Vimeo.Player(s,{
                autopause: t.config.autopause,
                muted: t.muted
            }),
            t.media.paused = !0,
            t.media.currentTime = 0,
            t.supported.ui && t.embed.disableTextTrack(),
            t.media.play = function() {
                return OT.call(t, !0),
                t.embed.play()
            }
            ,
            t.media.pause = function() {
                return OT.call(t, !1),
                t.embed.pause()
            }
            ,
            t.media.stop = function() {
                t.pause(),
                t.currentTime = 0
            }
            ;
            var u = t.media.currentTime;
            Object.defineProperty(t.media, "currentTime", {
                get: function() {
                    return u
                },
                set: function(e) {
                    var n = t.embed
                      , r = t.media
                      , i = t.paused
                      , o = t.volume
                      , a = i && !n.hasPlayed;
                    r.seeking = !0,
                    g_.call(t, r, "seeking"),
                    Promise.resolve(a && n.setVolume(0)).then((function() {
                        return n.setCurrentTime(e)
                    }
                    )).then((function() {
                        return a && n.pause()
                    }
                    )).then((function() {
                        return a && n.setVolume(o)
                    }
                    )).catch((function() {}
                    ))
                }
            });
            var f = t.config.speed.selected;
            Object.defineProperty(t.media, "playbackRate", {
                get: function() {
                    return f
                },
                set: function(e) {
                    t.embed.setPlaybackRate(e).then((function() {
                        f = e,
                        g_.call(t, t.media, "ratechange")
                    }
                    ))
                }
            });
            var h = t.config.volume;
            Object.defineProperty(t.media, "volume", {
                get: function() {
                    return h
                },
                set: function(e) {
                    t.embed.setVolume(e).then((function() {
                        h = e,
                        g_.call(t, t.media, "volumechange")
                    }
                    ))
                }
            });
            var d = t.config.muted;
            Object.defineProperty(t.media, "muted", {
                get: function() {
                    return d
                },
                set: function(e) {
                    var n = !!xS(e) && e;
                    t.embed.setVolume(n ? 0 : t.config.volume).then((function() {
                        d = n,
                        g_.call(t, t.media, "volumechange")
                    }
                    ))
                }
            });
            var p, g = t.config.loop;
            Object.defineProperty(t.media, "loop", {
                get: function() {
                    return g
                },
                set: function(e) {
                    var n = xS(e) ? e : t.config.loop.active;
                    t.embed.setLoop(n).then((function() {
                        g = n
                    }
                    ))
                }
            }),
            t.embed.getVideoUrl().then((function(e) {
                p = e,
                oT.setDownloadUrl.call(t)
            }
            )).catch((function(t) {
                e.debug.warn(t)
            }
            )),
            Object.defineProperty(t.media, "currentSrc", {
                get: function() {
                    return p
                }
            }),
            Object.defineProperty(t.media, "ended", {
                get: function() {
                    return t.currentTime === t.duration
                }
            }),
            Promise.all([t.embed.getVideoWidth(), t.embed.getVideoHeight()]).then((function(n) {
                var r = Na(n, 2)
                  , i = r[0]
                  , o = r[1];
                t.embed.ratio = [i, o],
                k_.call(e)
            }
            )),
            t.embed.setAutopause(t.config.autopause).then((function(e) {
                t.config.autopause = e
            }
            )),
            t.embed.getVideoTitle().then((function(n) {
                t.config.title = n,
                wT.setTitle.call(e)
            }
            )),
            t.embed.getCurrentTime().then((function(e) {
                u = e,
                g_.call(t, t.media, "timeupdate")
            }
            )),
            t.embed.getDuration().then((function(e) {
                t.media.duration = e,
                g_.call(t, t.media, "durationchange")
            }
            )),
            t.embed.getTextTracks().then((function(e) {
                t.media.textTracks = e,
                cT.setup.call(t)
            }
            )),
            t.embed.on("cuechange", (function(e) {
                var n = e.cues
                  , r = (void 0 === n ? [] : n).map((function(e) {
                    return function(e) {
                        var t = document.createDocumentFragment()
                          , n = document.createElement("div");
                        return t.appendChild(n),
                        n.innerHTML = e,
                        t.firstChild.innerText
                    }(e.text)
                }
                ));
                cT.updateCues.call(t, r)
            }
            )),
            t.embed.on("loaded", (function() {
                (t.embed.getPaused().then((function(e) {
                    OT.call(t, !e),
                    e || g_.call(t, t.media, "playing")
                }
                )),
                IS(t.embed.element) && t.supported.ui) && t.embed.element.setAttribute("tabindex", -1)
            }
            )),
            t.embed.on("bufferstart", (function() {
                g_.call(t, t.media, "waiting")
            }
            )),
            t.embed.on("bufferend", (function() {
                g_.call(t, t.media, "playing")
            }
            )),
            t.embed.on("play", (function() {
                OT.call(t, !0),
                g_.call(t, t.media, "playing")
            }
            )),
            t.embed.on("pause", (function() {
                OT.call(t, !1)
            }
            )),
            t.embed.on("timeupdate", (function(e) {
                t.media.seeking = !1,
                u = e.seconds,
                g_.call(t, t.media, "timeupdate")
            }
            )),
            t.embed.on("progress", (function(e) {
                t.media.buffered = e.percent,
                g_.call(t, t.media, "progress"),
                1 === parseInt(e.percent, 10) && g_.call(t, t.media, "canplaythrough"),
                t.embed.getDuration().then((function(e) {
                    e !== t.media.duration && (t.media.duration = e,
                    g_.call(t, t.media, "durationchange"))
                }
                ))
            }
            )),
            t.embed.on("seeked", (function() {
                t.media.seeking = !1,
                g_.call(t, t.media, "seeked")
            }
            )),
            t.embed.on("ended", (function() {
                t.media.paused = !0,
                g_.call(t, t.media, "ended")
            }
            )),
            t.embed.on("error", (function(e) {
                t.media.error = e,
                g_.call(t, t.media, "error")
            }
            )),
            setTimeout((function() {
                return wT.build.call(t)
            }
            ), 0)
        }
    };
    function PT(e) {
        e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
        this.media.paused === e && (this.media.paused = !e,
        g_.call(this, this.media, e ? "play" : "pause"))
    }
    function IT(e) {
        return e.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0
    }
    var RT = {
        setup: function() {
            var e = this;
            if (t_(this.elements.wrapper, this.config.classNames.embed, !0),
            _S(window.YT) && OS(window.YT.Player))
                RT.ready.call(this);
            else {
                var t = window.onYouTubeIframeAPIReady;
                window.onYouTubeIframeAPIReady = function() {
                    OS(t) && t(),
                    RT.ready.call(e)
                }
                ,
                xT(this.config.urls.youtube.sdk).catch((function(t) {
                    e.debug.warn("YouTube API failed to load", t)
                }
                ))
            }
        },
        getTitle: function(e) {
            var t = this;
            J_(V_(this.config.urls.youtube.api, e)).then((function(e) {
                if (_S(e)) {
                    var n = e.title
                      , r = e.height
                      , i = e.width;
                    t.config.title = n,
                    wT.setTitle.call(t),
                    t.embed.ratio = [i, r]
                }
                k_.call(t)
            }
            )).catch((function() {
                k_.call(t)
            }
            ))
        },
        ready: function() {
            var e = this
              , t = e.media && e.media.getAttribute("id");
            if (NS(t) || !t.startsWith("youtube-")) {
                var n = e.media.getAttribute("src");
                NS(n) && (n = e.media.getAttribute(this.config.attributes.embed.id));
                var r, i, o = NS(r = n) ? null : r.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : r, a = (i = e.provider,
                "".concat(i, "-").concat(Math.floor(1e4 * Math.random()))), s = YS("div", {
                    id: a,
                    poster: e.poster
                });
                e.media = QS(s, e.media);
                var c = function(e) {
                    return "https://i.ytimg.com/vi/".concat(o, "/").concat(e, "default.jpg")
                };
                bT(c("maxres"), 121).catch((function() {
                    return bT(c("sd"), 121)
                }
                )).catch((function() {
                    return bT(c("hq"))
                }
                )).then((function(t) {
                    return wT.setPoster.call(e, t.src)
                }
                )).then((function(t) {
                    t.includes("maxres") || (e.elements.poster.style.backgroundSize = "cover")
                }
                )).catch((function() {}
                ));
                var l = e.config.youtube;
                e.embed = new window.YT.Player(a,{
                    videoId: o,
                    host: IT(l),
                    playerVars: WS({}, {
                        autoplay: e.config.autoplay ? 1 : 0,
                        hl: e.config.hl,
                        controls: e.supported.ui ? 0 : 1,
                        disablekb: 1,
                        playsinline: e.config.fullscreen.iosNative ? 0 : 1,
                        cc_load_policy: e.captions.active ? 1 : 0,
                        cc_lang_pref: e.config.captions.language,
                        widget_referrer: window ? window.location.href : null
                    }, l),
                    events: {
                        onError: function(t) {
                            if (!e.media.error) {
                                var n = t.data
                                  , r = {
                                    2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                                    5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                                    100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                                    101: "The owner of the requested video does not allow it to be played in embedded players.",
                                    150: "The owner of the requested video does not allow it to be played in embedded players."
                                }[n] || "An unknown error occured";
                                e.media.error = {
                                    code: n,
                                    message: r
                                },
                                g_.call(e, e.media, "error")
                            }
                        },
                        onPlaybackRateChange: function(t) {
                            var n = t.target;
                            e.media.playbackRate = n.getPlaybackRate(),
                            g_.call(e, e.media, "ratechange")
                        },
                        onReady: function(t) {
                            if (!OS(e.media.play)) {
                                var n = t.target;
                                RT.getTitle.call(e, o),
                                e.media.play = function() {
                                    PT.call(e, !0),
                                    n.playVideo()
                                }
                                ,
                                e.media.pause = function() {
                                    PT.call(e, !1),
                                    n.pauseVideo()
                                }
                                ,
                                e.media.stop = function() {
                                    n.stopVideo()
                                }
                                ,
                                e.media.duration = n.getDuration(),
                                e.media.paused = !0,
                                e.media.currentTime = 0,
                                Object.defineProperty(e.media, "currentTime", {
                                    get: function() {
                                        return Number(n.getCurrentTime())
                                    },
                                    set: function(t) {
                                        e.paused && !e.embed.hasPlayed && e.embed.mute(),
                                        e.media.seeking = !0,
                                        g_.call(e, e.media, "seeking"),
                                        n.seekTo(t)
                                    }
                                }),
                                Object.defineProperty(e.media, "playbackRate", {
                                    get: function() {
                                        return n.getPlaybackRate()
                                    },
                                    set: function(e) {
                                        n.setPlaybackRate(e)
                                    }
                                });
                                var r = e.config.volume;
                                Object.defineProperty(e.media, "volume", {
                                    get: function() {
                                        return r
                                    },
                                    set: function(t) {
                                        r = t,
                                        n.setVolume(100 * r),
                                        g_.call(e, e.media, "volumechange")
                                    }
                                });
                                var i = e.config.muted;
                                Object.defineProperty(e.media, "muted", {
                                    get: function() {
                                        return i
                                    },
                                    set: function(t) {
                                        var r = xS(t) ? t : i;
                                        i = r,
                                        n[r ? "mute" : "unMute"](),
                                        g_.call(e, e.media, "volumechange")
                                    }
                                }),
                                Object.defineProperty(e.media, "currentSrc", {
                                    get: function() {
                                        return n.getVideoUrl()
                                    }
                                }),
                                Object.defineProperty(e.media, "ended", {
                                    get: function() {
                                        return e.currentTime === e.duration
                                    }
                                });
                                var a = n.getAvailablePlaybackRates();
                                e.options.speed = a.filter((function(t) {
                                    return e.config.speed.options.includes(t)
                                }
                                )),
                                e.supported.ui && e.media.setAttribute("tabindex", -1),
                                g_.call(e, e.media, "timeupdate"),
                                g_.call(e, e.media, "durationchange"),
                                clearInterval(e.timers.buffering),
                                e.timers.buffering = setInterval((function() {
                                    e.media.buffered = n.getVideoLoadedFraction(),
                                    (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && g_.call(e, e.media, "progress"),
                                    e.media.lastBuffered = e.media.buffered,
                                    1 === e.media.buffered && (clearInterval(e.timers.buffering),
                                    g_.call(e, e.media, "canplaythrough"))
                                }
                                ), 200),
                                setTimeout((function() {
                                    return wT.build.call(e)
                                }
                                ), 50)
                            }
                        },
                        onStateChange: function(t) {
                            var n = t.target;
                            switch (clearInterval(e.timers.playing),
                            e.media.seeking && [1, 2].includes(t.data) && (e.media.seeking = !1,
                            g_.call(e, e.media, "seeked")),
                            t.data) {
                            case -1:
                                g_.call(e, e.media, "timeupdate"),
                                e.media.buffered = n.getVideoLoadedFraction(),
                                g_.call(e, e.media, "progress");
                                break;
                            case 0:
                                PT.call(e, !1),
                                e.media.loop ? (n.stopVideo(),
                                n.playVideo()) : g_.call(e, e.media, "ended");
                                break;
                            case 1:
                                e.config.autoplay || !e.media.paused || e.embed.hasPlayed ? (PT.call(e, !0),
                                g_.call(e, e.media, "playing"),
                                e.timers.playing = setInterval((function() {
                                    g_.call(e, e.media, "timeupdate")
                                }
                                ), 50),
                                e.media.duration !== n.getDuration() && (e.media.duration = n.getDuration(),
                                g_.call(e, e.media, "durationchange"))) : e.media.pause();
                                break;
                            case 2:
                                e.muted || e.embed.unMute(),
                                PT.call(e, !1);
                                break;
                            case 3:
                                g_.call(e, e.media, "waiting")
                            }
                            g_.call(e, e.elements.container, "statechange", !1, {
                                code: t.data
                            })
                        }
                    }
                })
            }
        }
    }
      , jT = {
        setup: function() {
            this.media ? (t_(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0),
            t_(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0),
            this.isEmbed && t_(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0),
            this.isVideo && (this.elements.wrapper = YS("div", {
                class: this.config.classNames.video
            }),
            $S(this.media, this.elements.wrapper),
            this.isEmbed && (this.elements.poster = YS("div", {
                class: this.config.classNames.poster
            }),
            this.elements.wrapper.appendChild(this.elements.poster))),
            this.isHTML5 ? E_.setup.call(this) : this.isYouTube ? RT.setup.call(this) : this.isVimeo && CT.setup.call(this)) : this.debug.warn("No media element found!")
        }
    }
      , LT = function() {
        function e(t) {
            var n = this;
            Pa(this, e),
            this.player = t,
            this.config = t.config.ads,
            this.playing = !1,
            this.initialized = !1,
            this.elements = {
                container: null,
                displayContainer: null
            },
            this.manager = null,
            this.loader = null,
            this.cuePoints = null,
            this.events = {},
            this.safetyTimer = null,
            this.countdownTimer = null,
            this.managerPromise = new Promise((function(e, t) {
                n.on("loaded", e),
                n.on("error", t)
            }
            )),
            this.load()
        }
        return Ra(e, [{
            key: "load",
            value: function() {
                var e = this;
                this.enabled && (_S(window.google) && _S(window.google.ima) ? this.ready() : xT(this.player.config.urls.googleIMA.sdk).then((function() {
                    e.ready()
                }
                )).catch((function() {
                    e.trigger("error", new Error("Google IMA SDK failed to load"))
                }
                )))
            }
        }, {
            key: "ready",
            value: function() {
                var e, t = this;
                this.enabled || ((e = this).manager && e.manager.destroy(),
                e.elements.displayContainer && e.elements.displayContainer.destroy(),
                e.elements.container.remove()),
                this.startSafetyTimer(12e3, "ready()"),
                this.managerPromise.then((function() {
                    t.clearSafetyTimer("onAdsManagerLoaded()")
                }
                )),
                this.listeners(),
                this.setupIMA()
            }
        }, {
            key: "setupIMA",
            value: function() {
                this.elements.container = YS("div", {
                    class: this.player.config.classNames.ads
                }),
                this.player.elements.container.appendChild(this.elements.container),
                google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED),
                google.ima.settings.setLocale(this.player.config.ads.language),
                google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline),
                this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container,this.player.media),
                this.requestAds()
            }
        }, {
            key: "requestAds",
            value: function() {
                var e = this
                  , t = this.player.elements.container;
                try {
                    this.loader = new google.ima.AdsLoader(this.elements.displayContainer),
                    this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, (function(t) {
                        return e.onAdsManagerLoaded(t)
                    }
                    ), !1),
                    this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (function(t) {
                        return e.onAdError(t)
                    }
                    ), !1);
                    var n = new google.ima.AdsRequest;
                    n.adTagUrl = this.tagUrl,
                    n.linearAdSlotWidth = t.offsetWidth,
                    n.linearAdSlotHeight = t.offsetHeight,
                    n.nonLinearAdSlotWidth = t.offsetWidth,
                    n.nonLinearAdSlotHeight = t.offsetHeight,
                    n.forceNonLinearFullSlot = !1,
                    n.setAdWillPlayMuted(!this.player.muted),
                    this.loader.requestAds(n)
                } catch (e) {
                    this.onAdError(e)
                }
            }
        }, {
            key: "pollCountdown",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (!t)
                    return clearInterval(this.countdownTimer),
                    void this.elements.container.removeAttribute("data-badge-text");
                var n = function() {
                    var t = iT(Math.max(e.manager.getRemainingTime(), 0))
                      , n = "".concat(G_("advertisement", e.player.config), " - ").concat(t);
                    e.elements.container.setAttribute("data-badge-text", n)
                };
                this.countdownTimer = setInterval(n, 100)
            }
        }, {
            key: "onAdsManagerLoaded",
            value: function(e) {
                var t = this;
                if (this.enabled) {
                    var n = new google.ima.AdsRenderingSettings;
                    n.restoreCustomPlaybackStateOnAdBreakComplete = !0,
                    n.enablePreloading = !0,
                    this.manager = e.getAdsManager(this.player, n),
                    this.cuePoints = this.manager.getCuePoints(),
                    this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (function(e) {
                        return t.onAdError(e)
                    }
                    )),
                    Object.keys(google.ima.AdEvent.Type).forEach((function(e) {
                        t.manager.addEventListener(google.ima.AdEvent.Type[e], (function(e) {
                            return t.onAdEvent(e)
                        }
                        ))
                    }
                    )),
                    this.trigger("loaded")
                }
            }
        }, {
            key: "addCuePoints",
            value: function() {
                var e = this;
                NS(this.cuePoints) || this.cuePoints.forEach((function(t) {
                    if (0 !== t && -1 !== t && t < e.player.duration) {
                        var n = e.player.elements.progress;
                        if (IS(n)) {
                            var r = 100 / e.player.duration * t
                              , i = YS("span", {
                                class: e.player.config.classNames.cues
                            });
                            i.style.left = "".concat(r.toString(), "%"),
                            n.appendChild(i)
                        }
                    }
                }
                ))
            }
        }, {
            key: "onAdEvent",
            value: function(e) {
                var t = this
                  , n = this.player.elements.container
                  , r = e.getAd()
                  , i = e.getAdData();
                switch (function(e) {
                    g_.call(t.player, t.player.media, "ads".concat(e.replace(/_/g, "").toLowerCase()))
                }(e.type),
                e.type) {
                case google.ima.AdEvent.Type.LOADED:
                    this.trigger("loaded"),
                    this.pollCountdown(!0),
                    r.isLinear() || (r.width = n.offsetWidth,
                    r.height = n.offsetHeight);
                    break;
                case google.ima.AdEvent.Type.STARTED:
                    this.manager.setVolume(this.player.volume);
                    break;
                case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                    this.loadAds();
                    break;
                case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                    this.pauseContent();
                    break;
                case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                    this.pollCountdown(),
                    this.resumeContent();
                    break;
                case google.ima.AdEvent.Type.LOG:
                    i.adError && this.player.debug.warn("Non-fatal ad error: ".concat(i.adError.getMessage()))
                }
            }
        }, {
            key: "onAdError",
            value: function(e) {
                this.cancel(),
                this.player.debug.warn("Ads error", e)
            }
        }, {
            key: "listeners",
            value: function() {
                var e, t = this, n = this.player.elements.container;
                this.player.on("canplay", (function() {
                    t.addCuePoints()
                }
                )),
                this.player.on("ended", (function() {
                    t.loader.contentComplete()
                }
                )),
                this.player.on("timeupdate", (function() {
                    e = t.player.currentTime
                }
                )),
                this.player.on("seeked", (function() {
                    var n = t.player.currentTime;
                    NS(t.cuePoints) || t.cuePoints.forEach((function(r, i) {
                        e < r && r < n && (t.manager.discardAdBreak(),
                        t.cuePoints.splice(i, 1))
                    }
                    ))
                }
                )),
                window.addEventListener("resize", (function() {
                    t.manager && t.manager.resize(n.offsetWidth, n.offsetHeight, google.ima.ViewMode.NORMAL)
                }
                ))
            }
        }, {
            key: "play",
            value: function() {
                var e = this
                  , t = this.player.elements.container;
                this.managerPromise || this.resumeContent(),
                this.managerPromise.then((function() {
                    e.manager.setVolume(e.player.volume),
                    e.elements.displayContainer.initialize();
                    try {
                        e.initialized || (e.manager.init(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL),
                        e.manager.start()),
                        e.initialized = !0
                    } catch (t) {
                        e.onAdError(t)
                    }
                }
                )).catch((function() {}
                ))
            }
        }, {
            key: "resumeContent",
            value: function() {
                this.elements.container.style.zIndex = "",
                this.playing = !1,
                this.player.media.play()
            }
        }, {
            key: "pauseContent",
            value: function() {
                this.elements.container.style.zIndex = 3,
                this.playing = !0,
                this.player.media.pause()
            }
        }, {
            key: "cancel",
            value: function() {
                this.initialized && this.resumeContent(),
                this.trigger("error"),
                this.loadAds()
            }
        }, {
            key: "loadAds",
            value: function() {
                var e = this;
                this.managerPromise.then((function() {
                    e.manager && e.manager.destroy(),
                    e.managerPromise = new Promise((function(t) {
                        e.on("loaded", t),
                        e.player.debug.log(e.manager)
                    }
                    )),
                    e.requestAds()
                }
                )).catch((function() {}
                ))
            }
        }, {
            key: "trigger",
            value: function(e) {
                for (var t = this, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
                    r[i - 1] = arguments[i];
                var o = this.events[e];
                CS(o) && o.forEach((function(e) {
                    OS(e) && e.apply(t, r)
                }
                ))
            }
        }, {
            key: "on",
            value: function(e, t) {
                return CS(this.events[e]) || (this.events[e] = []),
                this.events[e].push(t),
                this
            }
        }, {
            key: "startSafetyTimer",
            value: function(e, t) {
                var n = this;
                this.player.debug.log("Safety timer invoked from: ".concat(t)),
                this.safetyTimer = setTimeout((function() {
                    n.cancel(),
                    n.clearSafetyTimer("startSafetyTimer()")
                }
                ), e)
            }
        }, {
            key: "clearSafetyTimer",
            value: function(e) {
                SS(this.safetyTimer) || (this.player.debug.log("Safety timer cleared from: ".concat(e)),
                clearTimeout(this.safetyTimer),
                this.safetyTimer = null)
            }
        }, {
            key: "enabled",
            get: function() {
                var e = this.config;
                return this.player.isHTML5 && this.player.isVideo && e.enabled && (!NS(e.publisherId) || MS(e.tagUrl))
            }
        }, {
            key: "tagUrl",
            get: function() {
                var e = this.config;
                if (MS(e.tagUrl))
                    return e.tagUrl;
                var t = {
                    AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
                    AV_CHANNELID: "5a0458dc28a06145e4519d21",
                    AV_URL: window.location.hostname,
                    cb: Date.now(),
                    AV_WIDTH: 640,
                    AV_HEIGHT: 480,
                    AV_CDIM2: e.publisherId
                };
                return "".concat("https://go.aniview.com/api/adserver6/vast/", "?").concat(sT(t))
            }
        }]),
        e
    }()
      , MT = Kg.findIndex
      , NT = !0
      , UT = Jg("findIndex");
    "findIndex"in [] && Array(1).findIndex((function() {
        NT = !1
    }
    )),
    wg({
        target: "Array",
        proto: !0,
        forced: NT || !UT
    }, {
        findIndex: function(e) {
            return MT(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }),
    hm("findIndex");
    var FT = Math.min
      , DT = [].lastIndexOf
      , BT = !!DT && 1 / [1].lastIndexOf(1, -0) < 0
      , qT = cv("lastIndexOf")
      , HT = Jg("indexOf", {
        ACCESSORS: !0,
        1: 0
    })
      , VT = BT || !qT || !HT ? function(e) {
        if (BT)
            return DT.apply(this, arguments) || 0;
        var t = ip(this)
          , n = Qp(t.length)
          , r = n - 1;
        for (arguments.length > 1 && (r = FT(r, Xp(arguments[1]))),
        r < 0 && (r = n + r); r >= 0; r--)
            if (r in t && t[r] === e)
                return r || 0;
        return -1
    }
    : DT;
    wg({
        target: "Array",
        proto: !0,
        forced: VT !== [].lastIndexOf
    }, {
        lastIndexOf: VT
    });
    var zT = function(e, t) {
        var n = {};
        return e > t.width / t.height ? (n.width = t.width,
        n.height = 1 / e * t.width) : (n.height = t.height,
        n.width = e * t.height),
        n
    }
      , WT = function() {
        function e(t) {
            Pa(this, e),
            this.player = t,
            this.thumbnails = [],
            this.loaded = !1,
            this.lastMouseMoveTime = Date.now(),
            this.mouseDown = !1,
            this.loadedImages = [],
            this.elements = {
                thumb: {},
                scrubbing: {}
            },
            this.load()
        }
        return Ra(e, [{
            key: "load",
            value: function() {
                var e = this;
                this.player.elements.display.seekTooltip && (this.player.elements.display.seekTooltip.hidden = this.enabled),
                this.enabled && this.getThumbnails().then((function() {
                    e.enabled && (e.render(),
                    e.determineContainerAutoSizing(),
                    e.loaded = !0)
                }
                ))
            }
        }, {
            key: "getThumbnails",
            value: function() {
                var e = this;
                return new Promise((function(t) {
                    var n = e.player.config.previewThumbnails.src;
                    if (NS(n))
                        throw new Error("Missing previewThumbnails.src config attribute");
                    var r = (AS(n) ? [n] : n).map((function(t) {
                        return e.getThumbnail(t)
                    }
                    ));
                    Promise.all(r).then((function() {
                        e.thumbnails.sort((function(e, t) {
                            return e.height - t.height
                        }
                        )),
                        e.player.debug.log("Preview thumbnails", e.thumbnails),
                        t()
                    }
                    ))
                }
                ))
            }
        }, {
            key: "getThumbnail",
            value: function(e) {
                var t = this;
                return new Promise((function(n) {
                    J_(e).then((function(r) {
                        var i, o, a = {
                            frames: (i = r,
                            o = [],
                            i.split(/\r\n\r\n|\n\n|\r\r/).forEach((function(e) {
                                var t = {};
                                e.split(/\r\n|\n|\r/).forEach((function(e) {
                                    if (TS(t.startTime)) {
                                        if (!NS(e.trim()) && NS(t.text)) {
                                            var n = e.trim().split("#xywh=")
                                              , r = Na(n, 1);
                                            if (t.text = r[0],
                                            n[1]) {
                                                var i = Na(n[1].split(","), 4);
                                                t.x = i[0],
                                                t.y = i[1],
                                                t.w = i[2],
                                                t.h = i[3]
                                            }
                                        }
                                    } else {
                                        var o = e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                                        o && (t.startTime = 60 * Number(o[1] || 0) * 60 + 60 * Number(o[2]) + Number(o[3]) + Number("0.".concat(o[4])),
                                        t.endTime = 60 * Number(o[6] || 0) * 60 + 60 * Number(o[7]) + Number(o[8]) + Number("0.".concat(o[9])))
                                    }
                                }
                                )),
                                t.text && o.push(t)
                            }
                            )),
                            o),
                            height: null,
                            urlPrefix: ""
                        };
                        a.frames[0].text.startsWith("/") || a.frames[0].text.startsWith("http://") || a.frames[0].text.startsWith("https://") || (a.urlPrefix = e.substring(0, e.lastIndexOf("/") + 1));
                        var s = new Image;
                        s.onload = function() {
                            a.height = s.naturalHeight,
                            a.width = s.naturalWidth,
                            t.thumbnails.push(a),
                            n()
                        }
                        ,
                        s.src = a.urlPrefix + a.frames[0].text
                    }
                    ))
                }
                ))
            }
        }, {
            key: "startMove",
            value: function(e) {
                if (this.loaded && RS(e) && ["touchmove", "mousemove"].includes(e.type) && this.player.media.duration) {
                    if ("touchmove" === e.type)
                        this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100);
                    else {
                        var t = this.player.elements.progress.getBoundingClientRect()
                          , n = 100 / t.width * (e.pageX - t.left);
                        this.seekTime = this.player.media.duration * (n / 100),
                        this.seekTime < 0 && (this.seekTime = 0),
                        this.seekTime > this.player.media.duration - 1 && (this.seekTime = this.player.media.duration - 1),
                        this.mousePosX = e.pageX,
                        this.elements.thumb.time.innerText = iT(this.seekTime)
                    }
                    this.showImageAtCurrentTime()
                }
            }
        }, {
            key: "endMove",
            value: function() {
                this.toggleThumbContainer(!1, !0)
            }
        }, {
            key: "startScrubbing",
            value: function(e) {
                (SS(e.button) || !1 === e.button || 0 === e.button) && (this.mouseDown = !0,
                this.player.media.duration && (this.toggleScrubbingContainer(!0),
                this.toggleThumbContainer(!1, !0),
                this.showImageAtCurrentTime()))
            }
        }, {
            key: "endScrubbing",
            value: function() {
                var e = this;
                this.mouseDown = !1,
                Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime) ? this.toggleScrubbingContainer(!1) : p_.call(this.player, this.player.media, "timeupdate", (function() {
                    e.mouseDown || e.toggleScrubbingContainer(!1)
                }
                ))
            }
        }, {
            key: "listeners",
            value: function() {
                var e = this;
                this.player.on("play", (function() {
                    e.toggleThumbContainer(!1, !0)
                }
                )),
                this.player.on("seeked", (function() {
                    e.toggleThumbContainer(!1)
                }
                )),
                this.player.on("timeupdate", (function() {
                    e.lastTime = e.player.media.currentTime
                }
                ))
            }
        }, {
            key: "render",
            value: function() {
                this.elements.thumb.container = YS("div", {
                    class: this.player.config.classNames.previewThumbnails.thumbContainer
                }),
                this.elements.thumb.imageContainer = YS("div", {
                    class: this.player.config.classNames.previewThumbnails.imageContainer
                }),
                this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
                var e = YS("div", {
                    class: this.player.config.classNames.previewThumbnails.timeContainer
                });
                this.elements.thumb.time = YS("span", {}, "00:00"),
                e.appendChild(this.elements.thumb.time),
                this.elements.thumb.container.appendChild(e),
                IS(this.player.elements.progress) && this.player.elements.progress.appendChild(this.elements.thumb.container),
                this.elements.scrubbing.container = YS("div", {
                    class: this.player.config.classNames.previewThumbnails.scrubbingContainer
                }),
                this.player.elements.wrapper.appendChild(this.elements.scrubbing.container)
            }
        }, {
            key: "destroy",
            value: function() {
                this.elements.thumb.container && this.elements.thumb.container.remove(),
                this.elements.scrubbing.container && this.elements.scrubbing.container.remove()
            }
        }, {
            key: "showImageAtCurrentTime",
            value: function() {
                var e = this;
                this.mouseDown ? this.setScrubbingContainerSize() : this.setThumbContainerSizeAndPos();
                var t = this.thumbnails[0].frames.findIndex((function(t) {
                    return e.seekTime >= t.startTime && e.seekTime <= t.endTime
                }
                ))
                  , n = t >= 0
                  , r = 0;
                this.mouseDown || this.toggleThumbContainer(n),
                n && (this.thumbnails.forEach((function(n, i) {
                    e.loadedImages.includes(n.frames[t].text) && (r = i)
                }
                )),
                t !== this.showingThumb && (this.showingThumb = t,
                this.loadImage(r)))
            }
        }, {
            key: "loadImage",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , n = this.showingThumb
                  , r = this.thumbnails[t]
                  , i = r.urlPrefix
                  , o = r.frames[n]
                  , a = r.frames[n].text
                  , s = i + a;
                if (this.currentImageElement && this.currentImageElement.dataset.filename === a)
                    this.showImage(this.currentImageElement, o, t, n, a, !1),
                    this.currentImageElement.dataset.index = n,
                    this.removeOldImages(this.currentImageElement);
                else {
                    this.loadingImage && this.usingSprites && (this.loadingImage.onload = null);
                    var c = new Image;
                    c.src = s,
                    c.dataset.index = n,
                    c.dataset.filename = a,
                    this.showingThumbFilename = a,
                    this.player.debug.log("Loading image: ".concat(s)),
                    c.onload = function() {
                        return e.showImage(c, o, t, n, a, !0)
                    }
                    ,
                    this.loadingImage = c,
                    this.removeOldImages(c)
                }
            }
        }, {
            key: "showImage",
            value: function(e, t, n, r, i) {
                var o = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
                this.player.debug.log("Showing thumb: ".concat(i, ". num: ").concat(r, ". qual: ").concat(n, ". newimg: ").concat(o)),
                this.setImageSizeAndOffset(e, t),
                o && (this.currentImageContainer.appendChild(e),
                this.currentImageElement = e,
                this.loadedImages.includes(i) || this.loadedImages.push(i)),
                this.preloadNearby(r, !0).then(this.preloadNearby(r, !1)).then(this.getHigherQuality(n, e, t, i))
            }
        }, {
            key: "removeOldImages",
            value: function(e) {
                var t = this;
                Array.from(this.currentImageContainer.children).forEach((function(n) {
                    if ("img" === n.tagName.toLowerCase()) {
                        var r = t.usingSprites ? 500 : 1e3;
                        if (n.dataset.index !== e.dataset.index && !n.dataset.deleting) {
                            n.dataset.deleting = !0;
                            var i = t.currentImageContainer;
                            setTimeout((function() {
                                i.removeChild(n),
                                t.player.debug.log("Removing thumb: ".concat(n.dataset.filename))
                            }
                            ), r)
                        }
                    }
                }
                ))
            }
        }, {
            key: "preloadNearby",
            value: function(e) {
                var t = this
                  , n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return new Promise((function(r) {
                    setTimeout((function() {
                        var i = t.thumbnails[0].frames[e].text;
                        if (t.showingThumbFilename === i) {
                            var o;
                            o = n ? t.thumbnails[0].frames.slice(e) : t.thumbnails[0].frames.slice(0, e).reverse();
                            var a = !1;
                            o.forEach((function(e) {
                                var n = e.text;
                                if (n !== i && !t.loadedImages.includes(n)) {
                                    a = !0,
                                    t.player.debug.log("Preloading thumb filename: ".concat(n));
                                    var o = t.thumbnails[0].urlPrefix + n
                                      , s = new Image;
                                    s.src = o,
                                    s.onload = function() {
                                        t.player.debug.log("Preloaded thumb filename: ".concat(n)),
                                        t.loadedImages.includes(n) || t.loadedImages.push(n),
                                        r()
                                    }
                                }
                            }
                            )),
                            a || r()
                        }
                    }
                    ), 300)
                }
                ))
            }
        }, {
            key: "getHigherQuality",
            value: function(e, t, n, r) {
                var i = this;
                if (e < this.thumbnails.length - 1) {
                    var o = t.naturalHeight;
                    this.usingSprites && (o = n.h),
                    o < this.thumbContainerHeight && setTimeout((function() {
                        i.showingThumbFilename === r && (i.player.debug.log("Showing higher quality thumb for: ".concat(r)),
                        i.loadImage(e + 1))
                    }
                    ), 300)
                }
            }
        }, {
            key: "toggleThumbContainer",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  , t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , n = this.player.config.classNames.previewThumbnails.thumbContainerShown;
                this.elements.thumb.container.classList.toggle(n, e),
                !e && t && (this.showingThumb = null,
                this.showingThumbFilename = null)
            }
        }, {
            key: "toggleScrubbingContainer",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  , t = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
                this.elements.scrubbing.container.classList.toggle(t, e),
                e || (this.showingThumb = null,
                this.showingThumbFilename = null)
            }
        }, {
            key: "determineContainerAutoSizing",
            value: function() {
                (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) && (this.sizeSpecifiedInCSS = !0)
            }
        }, {
            key: "setThumbContainerSizeAndPos",
            value: function() {
                if (this.sizeSpecifiedInCSS) {
                    if (this.elements.thumb.imageContainer.clientHeight > 20 && this.elements.thumb.imageContainer.clientWidth < 20) {
                        var e = Math.floor(this.elements.thumb.imageContainer.clientHeight * this.thumbAspectRatio);
                        this.elements.thumb.imageContainer.style.width = "".concat(e, "px")
                    } else if (this.elements.thumb.imageContainer.clientHeight < 20 && this.elements.thumb.imageContainer.clientWidth > 20) {
                        var t = Math.floor(this.elements.thumb.imageContainer.clientWidth / this.thumbAspectRatio);
                        this.elements.thumb.imageContainer.style.height = "".concat(t, "px")
                    }
                } else {
                    var n = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
                    this.elements.thumb.imageContainer.style.height = "".concat(this.thumbContainerHeight, "px"),
                    this.elements.thumb.imageContainer.style.width = "".concat(n, "px")
                }
                this.setThumbContainerPos()
            }
        }, {
            key: "setThumbContainerPos",
            value: function() {
                var e = this.player.elements.progress.getBoundingClientRect()
                  , t = this.player.elements.container.getBoundingClientRect()
                  , n = this.elements.thumb.container
                  , r = t.left - e.left + 10
                  , i = t.right - e.left - n.clientWidth - 10
                  , o = this.mousePosX - e.left - n.clientWidth / 2;
                o < r && (o = r),
                o > i && (o = i),
                n.style.left = "".concat(o, "px")
            }
        }, {
            key: "setScrubbingContainerSize",
            value: function() {
                var e = zT(this.thumbAspectRatio, {
                    width: this.player.media.clientWidth,
                    height: this.player.media.clientHeight
                })
                  , t = e.width
                  , n = e.height;
                this.elements.scrubbing.container.style.width = "".concat(t, "px"),
                this.elements.scrubbing.container.style.height = "".concat(n, "px")
            }
        }, {
            key: "setImageSizeAndOffset",
            value: function(e, t) {
                if (this.usingSprites) {
                    var n = this.thumbContainerHeight / t.h;
                    e.style.height = "".concat(e.naturalHeight * n, "px"),
                    e.style.width = "".concat(e.naturalWidth * n, "px"),
                    e.style.left = "-".concat(t.x * n, "px"),
                    e.style.top = "-".concat(t.y * n, "px")
                }
            }
        }, {
            key: "enabled",
            get: function() {
                return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled
            }
        }, {
            key: "currentImageContainer",
            get: function() {
                return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer
            }
        }, {
            key: "usingSprites",
            get: function() {
                return Object.keys(this.thumbnails[0].frames[0]).includes("w")
            }
        }, {
            key: "thumbAspectRatio",
            get: function() {
                return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height
            }
        }, {
            key: "thumbContainerHeight",
            get: function() {
                return this.mouseDown ? zT(this.thumbAspectRatio, {
                    width: this.player.media.clientWidth,
                    height: this.player.media.clientHeight
                }).height : this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4)
            }
        }, {
            key: "currentImageElement",
            get: function() {
                return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement
            },
            set: function(e) {
                this.mouseDown ? this.currentScrubbingImageElement = e : this.currentThumbnailImageElement = e
            }
        }]),
        e
    }()
      , $T = {
        insertElements: function(e, t) {
            var n = this;
            AS(t) ? GS(e, this.media, {
                src: t
            }) : CS(t) && t.forEach((function(t) {
                GS(e, n.media, t)
            }
            ))
        },
        change: function(e) {
            var t = this;
            zS(e, "sources.length") ? (E_.cancelRequests.call(this),
            this.destroy.call(this, (function() {
                t.options.quality = [],
                XS(t.media),
                t.media = null,
                IS(t.elements.container) && t.elements.container.removeAttribute("class");
                var n = e.sources
                  , r = e.type
                  , i = Na(n, 1)[0]
                  , o = i.provider
                  , a = void 0 === o ? hT.html5 : o
                  , s = i.src
                  , c = "html5" === a ? r : "div"
                  , l = "html5" === a ? {} : {
                    src: s
                };
                Object.assign(t, {
                    provider: a,
                    type: r,
                    supported: l_.check(r, a, t.config.playsinline),
                    media: YS(c, l)
                }),
                t.elements.container.appendChild(t.media),
                xS(e.autoplay) && (t.config.autoplay = e.autoplay),
                t.isHTML5 && (t.config.crossorigin && t.media.setAttribute("crossorigin", ""),
                t.config.autoplay && t.media.setAttribute("autoplay", ""),
                NS(e.poster) || (t.poster = e.poster),
                t.config.loop.active && t.media.setAttribute("loop", ""),
                t.config.muted && t.media.setAttribute("muted", ""),
                t.config.playsinline && t.media.setAttribute("playsinline", "")),
                wT.addStyleHook.call(t),
                t.isHTML5 && $T.insertElements.call(t, "source", n),
                t.config.title = e.title,
                jT.setup.call(t),
                t.isHTML5 && Object.keys(e).includes("tracks") && $T.insertElements.call(t, "track", e.tracks),
                (t.isHTML5 || t.isEmbed && !t.supported.ui) && wT.build.call(t),
                t.isHTML5 && t.media.load(),
                NS(e.previewThumbnails) || (Object.assign(t.config.previewThumbnails, e.previewThumbnails),
                t.previewThumbnails && t.previewThumbnails.loaded && (t.previewThumbnails.destroy(),
                t.previewThumbnails = null),
                t.config.previewThumbnails.enabled && (t.previewThumbnails = new WT(t))),
                t.fullscreen.update()
            }
            ), !0)) : this.debug.warn("Invalid source format")
        }
    };
    var KT, YT = function() {
        function e(t, n) {
            var r = this;
            if (Pa(this, e),
            this.timers = {},
            this.ready = !1,
            this.loading = !1,
            this.failed = !1,
            this.touch = l_.touch,
            this.media = t,
            AS(this.media) && (this.media = document.querySelectorAll(this.media)),
            (window.jQuery && this.media instanceof jQuery || PS(this.media) || CS(this.media)) && (this.media = this.media[0]),
            this.config = WS({}, lT, e.defaults, n || {}, function() {
                try {
                    return JSON.parse(r.media.getAttribute("data-plyr-config"))
                } catch (e) {
                    return {}
                }
            }()),
            this.elements = {
                container: null,
                captions: null,
                buttons: {},
                display: {},
                progress: {},
                inputs: {},
                settings: {
                    popup: null,
                    menu: null,
                    panels: {},
                    buttons: {}
                }
            },
            this.captions = {
                active: null,
                currentTrack: -1,
                meta: new WeakMap
            },
            this.fullscreen = {
                active: !1
            },
            this.options = {
                speed: [],
                quality: []
            },
            this.debug = new mT(this.config.debug),
            this.debug.log("Config", this.config),
            this.debug.log("Support", l_),
            !SS(this.media) && IS(this.media))
                if (this.media.plyr)
                    this.debug.warn("Target already setup");
                else if (this.config.enabled)
                    if (l_.check().api) {
                        var i = this.media.cloneNode(!0);
                        i.autoplay = !1,
                        this.elements.original = i;
                        var o = this.media.tagName.toLowerCase()
                          , a = null
                          , s = null;
                        switch (o) {
                        case "div":
                            if (a = this.media.querySelector("iframe"),
                            IS(a)) {
                                if (s = aT(a.getAttribute("src")),
                                this.provider = function(e) {
                                    return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e) ? hT.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? hT.vimeo : null
                                }(s.toString()),
                                this.elements.container = this.media,
                                this.media = a,
                                this.elements.container.className = "",
                                s.search.length) {
                                    var c = ["1", "true"];
                                    c.includes(s.searchParams.get("autoplay")) && (this.config.autoplay = !0),
                                    c.includes(s.searchParams.get("loop")) && (this.config.loop.active = !0),
                                    this.isYouTube ? (this.config.playsinline = c.includes(s.searchParams.get("playsinline")),
                                    this.config.youtube.hl = s.searchParams.get("hl")) : this.config.playsinline = !0
                                }
                            } else
                                this.provider = this.media.getAttribute(this.config.attributes.embed.provider),
                                this.media.removeAttribute(this.config.attributes.embed.provider);
                            if (NS(this.provider) || !Object.keys(hT).includes(this.provider))
                                return void this.debug.error("Setup failed: Invalid provider");
                            this.type = pT;
                            break;
                        case "video":
                        case "audio":
                            this.type = o,
                            this.provider = hT.html5,
                            this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0),
                            this.media.hasAttribute("autoplay") && (this.config.autoplay = !0),
                            (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0),
                            this.media.hasAttribute("muted") && (this.config.muted = !0),
                            this.media.hasAttribute("loop") && (this.config.loop.active = !0);
                            break;
                        default:
                            return void this.debug.error("Setup failed: unsupported type")
                        }
                        this.supported = l_.check(this.type, this.provider, this.config.playsinline),
                        this.supported.api ? (this.eventListeners = [],
                        this.listeners = new kT(this),
                        this.storage = new X_(this),
                        this.media.plyr = this,
                        IS(this.elements.container) || (this.elements.container = YS("div", {
                            tabindex: 0
                        }),
                        $S(this.media, this.elements.container)),
                        wT.addStyleHook.call(this),
                        jT.setup.call(this),
                        this.config.debug && h_.call(this, this.elements.container, this.config.events.join(" "), (function(e) {
                            r.debug.log("event: ".concat(e.type))
                        }
                        )),
                        (this.isHTML5 || this.isEmbed && !this.supported.ui) && wT.build.call(this),
                        this.listeners.container(),
                        this.listeners.global(),
                        this.fullscreen = new vT(this),
                        this.config.ads.enabled && (this.ads = new LT(this)),
                        this.isHTML5 && this.config.autoplay && setTimeout((function() {
                            return r.play()
                        }
                        ), 10),
                        this.lastSeekTime = 0,
                        this.config.previewThumbnails.enabled && (this.previewThumbnails = new WT(this))) : this.debug.error("Setup failed: no support")
                    } else
                        this.debug.error("Setup failed: no support");
                else
                    this.debug.error("Setup failed: disabled by config");
            else
                this.debug.error("Setup failed: no suitable element passed")
        }
        return Ra(e, [{
            key: "play",
            value: function() {
                var e = this;
                return OS(this.media.play) ? (this.ads && this.ads.enabled && this.ads.managerPromise.then((function() {
                    return e.ads.play()
                }
                )).catch((function() {
                    return e.media.play()
                }
                )),
                this.media.play()) : null
            }
        }, {
            key: "pause",
            value: function() {
                return this.playing && OS(this.media.pause) ? this.media.pause() : null
            }
        }, {
            key: "togglePlay",
            value: function(e) {
                return (xS(e) ? e : !this.playing) ? this.play() : this.pause()
            }
        }, {
            key: "stop",
            value: function() {
                this.isHTML5 ? (this.pause(),
                this.restart()) : OS(this.media.stop) && this.media.stop()
            }
        }, {
            key: "restart",
            value: function() {
                this.currentTime = 0
            }
        }, {
            key: "rewind",
            value: function(e) {
                this.currentTime -= TS(e) ? e : this.config.seekTime
            }
        }, {
            key: "forward",
            value: function(e) {

                this.currentTime += TS(e) ? e : this.config.seekTime
            }
        }, {
            key: "increaseVolume",
            value: function(e) {
                var t = this.media.muted ? 0 : this.volume;
                this.volume = t + (TS(e) ? e : 0)
            }
        }, {
            key: "decreaseVolume",
            value: function(e) {
                this.increaseVolume(-e)
            }
        }, {
            key: "toggleCaptions",
            value: function(e) {
                cT.toggle.call(this, e, !1)
            }
        }, {
            key: "airplay",
            value: function() {
                l_.airplay && this.media.webkitShowPlaybackTargetPicker()
            }
        }, {
            key: "toggleControls",
            value: function(e) {
                if (this.supported.ui && !this.isAudio) {
                    var t = n_(this.elements.container, this.config.classNames.hideControls)
                      , n = void 0 === e ? void 0 : !e
                      , r = t_(this.elements.container, this.config.classNames.hideControls, n);
                    if (r && this.config.controls.includes("settings") && !NS(this.config.settings) && oT.toggleMenu.call(this, !1),
                    r !== t) {
                        var i = r ? "controlshidden" : "controlsshown";
                        g_.call(this, this.media, i)
                    }
                    return !r
                }
                return !1
            }
        }, {
            key: "on",
            value: function(e, t) {
                h_.call(this, this.elements.container, e, t)
            }
        }, {
            key: "once",
            value: function(e, t) {
                p_.call(this, this.elements.container, e, t)
            }
        }, {
            key: "off",
            value: function(e, t) {
                d_(this.elements.container, e, t)
            }
        }, {
            key: "destroy",
            value: function(e) {
                var t = this
                  , n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (this.ready) {
                    var r = function() {
                        document.body.style.overflow = "",
                        t.embed = null,
                        n ? (Object.keys(t.elements).length && (XS(t.elements.buttons.play),
                        XS(t.elements.captions),
                        XS(t.elements.controls),
                        XS(t.elements.wrapper),
                        t.elements.buttons.play = null,
                        t.elements.captions = null,
                        t.elements.controls = null,
                        t.elements.wrapper = null),
                        OS(e) && e()) : (m_.call(t),
                        QS(t.elements.original, t.elements.container),
                        g_.call(t, t.elements.original, "destroyed", !0),
                        OS(e) && e.call(t.elements.original),
                        t.ready = !1,
                        setTimeout((function() {
                            t.elements = null,
                            t.media = null
                        }
                        ), 200))
                    };
                    this.stop(),
                    clearTimeout(this.timers.loading),
                    clearTimeout(this.timers.controls),
                    clearTimeout(this.timers.resized),
                    this.isHTML5 ? (wT.toggleNativeControls.call(this, !0),
                    r()) : this.isYouTube ? (clearInterval(this.timers.buffering),
                    clearInterval(this.timers.playing),
                    null !== this.embed && OS(this.embed.destroy) && this.embed.destroy(),
                    r()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(r),
                    setTimeout(r, 200))
                }
            }
        }, {
            key: "supports",
            value: function(e) {
                return l_.mime.call(this, e)
            }
        }, {
            key: "isHTML5",
            get: function() {
                return this.provider === hT.html5
            }
        }, {
            key: "isEmbed",
            get: function() {
                return this.isYouTube || this.isVimeo
            }
        }, {
            key: "isYouTube",
            get: function() {
                return this.provider === hT.youtube
            }
        }, {
            key: "isVimeo",
            get: function() {
                return this.provider === hT.vimeo
            }
        }, {
            key: "isVideo",
            get: function() {
                return this.type === pT
            }
        }, {
            key: "isAudio",
            get: function() {
                return this.type === dT
            }
        }, {
            key: "playing",
            get: function() {
                return Boolean(this.ready && !this.paused && !this.ended)
            }
        }, {
            key: "paused",
            get: function() {
                return Boolean(this.media.paused)
            }
        }, {
            key: "stopped",
            get: function() {
                return Boolean(this.paused && 0 === this.currentTime)
            }
        }, {
            key: "ended",
            get: function() {
                return Boolean(this.media.ended)
            }
        }, {
            key: "currentTime",
            set: function(e) {
                if (this.duration) {
                    var t = TS(e) && e > 0;
                    this.media.currentTime = t ? Math.min(e, this.duration) : 0,
                    this.debug.log("Seeking to ".concat(this.currentTime, " seconds"))
                }
            },
            get: function() {
                return Number(this.media.currentTime)
            }
        }, {
            key: "buffered",
            get: function() {
                var e = this.media.buffered;
                return TS(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0
            }
        }, {
            key: "seeking",
            get: function() {
                return Boolean(this.media.seeking)
            }
        }, {
            key: "duration",
            get: function() {
                var e = parseFloat(this.config.duration)
                  , t = (this.media || {}).duration
                  , n = TS(t) && t !== 1 / 0 ? t : 0;
                return e || n
            }
        }, {
            key: "volume",
            set: function(e) {
                var t = e;
                AS(t) && (t = Number(t)),
                TS(t) || (t = this.storage.get("volume")),
                TS(t) || (t = this.config.volume),
                t > 1 && (t = 1),
                t < 0 && (t = 0),
                this.config.volume = t,
                this.media.volume = t,
                !NS(e) && this.muted && t > 0 && (this.muted = !1)
            },
            get: function() {
                return Number(this.media.volume)
            }
        }, {
            key: "muted",
            set: function(e) {
                var t = e;
                xS(t) || (t = this.storage.get("muted")),
                xS(t) || (t = this.config.muted),
                this.config.muted = t,
                this.media.muted = t
            },
            get: function() {
                return Boolean(this.media.muted)
            }
        }, {
            key: "hasAudio",
            get: function() {
                return !this.isHTML5 || (!!this.isAudio || (Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)))
            }
        }, {
            key: "speed",
            set: function(e) {
                var t = this
                  , n = null;
                TS(e) && (n = e),
                TS(n) || (n = this.storage.get("speed")),
                TS(n) || (n = this.config.speed.selected);
                var r = this.minimumSpeed
                  , i = this.maximumSpeed;
                n = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                      , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 255;
                    return Math.min(Math.max(e, t), n)
                }(n, r, i),
                this.config.speed.selected = n,
                setTimeout((function() {
                    t.media.playbackRate = n
                }
                ), 0)
            },
            get: function() {
                return Number(this.media.playbackRate)
            }
        }, {
            key: "minimumSpeed",
            get: function() {
                return this.isYouTube ? Math.min.apply(Math, Ua(this.options.speed)) : this.isVimeo ? .5 : .0625
            }
        }, {
            key: "maximumSpeed",
            get: function() {
                return this.isYouTube ? Math.max.apply(Math, Ua(this.options.speed)) : this.isVimeo ? 2 : 16
            }
        }, {
            key: "quality",
            set: function(e) {
                var t = this.config.quality
                  , n = this.options.quality;
                if (n.length) {
                    var r = [!NS(e) && Number(e), this.storage.get("quality"), t.selected, t.default].find(TS)
                      , i = !0;
                    if (!n.includes(r)) {
                        var o = function(e, t) {
                            return CS(e) && e.length ? e.reduce((function(e, n) {
                                return Math.abs(n - t) < Math.abs(e - t) ? n : e
                            }
                            )) : null
                        }(n, r);
                        this.debug.warn("Unsupported quality option: ".concat(r, ", using ").concat(o, " instead")),
                        r = o,
                        i = !1
                    }
                    t.selected = r,
                    this.media.quality = r,
                    i && this.storage.set({
                        quality: r
                    })
                }
            },
            get: function() {
                return this.media.quality
            }
        }, {
            key: "loop",
            set: function(e) {
                var t = xS(e) ? e : this.config.loop.active;
                this.config.loop.active = t,
                this.media.loop = t
            },
            get: function() {
                return Boolean(this.media.loop)
            }
        }, {
            key: "source",
            set: function(e) {
                $T.change.call(this, e)
            },
            get: function() {
                return this.media.currentSrc
            }
        }, {
            key: "download",
            get: function() {
                var e = this.config.urls.download;
                return MS(e) ? e : this.source
            },
            set: function(e) {
                MS(e) && (this.config.urls.download = e,
                oT.setDownloadUrl.call(this))
            }
        }, {
            key: "poster",
            set: function(e) {
                this.isVideo ? wT.setPoster.call(this, e, !1).catch((function() {}
                )) : this.debug.warn("Poster can only be set for video")
            },
            get: function() {
                return this.isVideo ? this.media.getAttribute("poster") : null
            }
        }, {
            key: "ratio",
            get: function() {
                if (!this.isVideo)
                    return null;
                var e = b_(w_.call(this));
                return CS(e) ? e.join(":") : e
            },
            set: function(e) {
                this.isVideo ? AS(e) && y_(e) ? (this.config.ratio = e,
                k_.call(this)) : this.debug.error("Invalid aspect ratio specified (".concat(e, ")")) : this.debug.warn("Aspect ratio can only be set for video")
            }
        }, {
            key: "autoplay",
            set: function(e) {
                var t = xS(e) ? e : this.config.autoplay;
                this.config.autoplay = t
            },
            get: function() {
                return Boolean(this.config.autoplay)
            }
        }, {
            key: "currentTrack",
            set: function(e) {
                cT.set.call(this, e, !1)
            },
            get: function() {
                var e = this.captions
                  , t = e.toggled
                  , n = e.currentTrack;
                return t ? n : -1
            }
        }, {
            key: "language",
            set: function(e) {
                cT.setLanguage.call(this, e, !1)
            },
            get: function() {
                return (cT.getCurrentTrack.call(this) || {}).language
            }
        }, {
            key: "pip",
            set: function(e) {
                if (l_.pip) {
                    var t = xS(e) ? e : !this.pip;
                    OS(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t ? uT : fT),
                    OS(this.media.requestPictureInPicture) && (!this.pip && t ? this.media.requestPictureInPicture() : this.pip && !t && document.exitPictureInPicture())
                }
            },
            get: function() {
                return l_.pip ? NS(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === uT : null
            }
        }], [{
            key: "supported",
            value: function(e, t, n) {
                return l_.check(e, t, n)
            }
        }, {
            key: "loadSprite",
            value: function(e, t) {
                return Q_(e, t)
            }
        }, {
            key: "setup",
            value: function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , r = null;
                return AS(t) ? r = Array.from(document.querySelectorAll(t)) : PS(t) ? r = Array.from(t) : CS(t) && (r = t.filter(IS)),
                NS(r) ? null : r.map((function(t) {
                    return new e(t,n)
                }
                ))
            }
        }]),
        e
    }();
    YT.defaults = (KT = lT,
    JSON.parse(JSON.stringify(KT)));
    var GT, XT, JT = {
        
    }, QT = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
          , n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return e && e.classList[n ? "add" : "remove"](t)
    };
    GT = window.location.host,
    XT = {
        prod: "plyr.io" === GT,
        dev: "dev.plyr.io" === GT
    },
    document.addEventListener("DOMContentLoaded", (function() {
        Bh.context((function() {
            zd.setup(".js-shr", {
                count: {
                    className: "button__count"
                },
                wrapper: {
                    className: "button--with-count"
                }
            });
            var e = new YT("#player",{
                debug: !0,
                title: "View From A Blue Moon",
                //iconUrl: "https://cdn.plyr.io/3.5.8/demo.svg",
                keyboard: {
                    global: !0
                },
                tooltips: {
                    controls: !0
                },
                captions: {
                    active: !0
                },
                // keys: {
                //     google: "AIzaSyDrNwtN3nLH_8rjCmu5Wq3ZCm4MNAVdc0c"
                // },
                // ads: {
                //     enabled: XT.prod || XT.dev,
                //     publisherId: "918848828995742"
                // },
                // previewThumbnails: {
                //     enabled: !0,
                //     src: ["https://cdn.plyr.io/static/demo/thumbs/100p.vtt", "https://cdn.plyr.io/static/demo/thumbs/240p.vtt"]
                // },
                vimeo: {
                    referrerPolicy: "no-referrer"
                }
            });
            window.player = e;
            var t = document.querySelectorAll("[data-source]")
              , n = Object.keys(JT)
              , r = Boolean(window.history && window.history.pushState)
              , i = window.location.hash.substring(1)
              , o = !i.length;
            function a(e) {
                Array.from(t).forEach((function(e) {
                    return QT(e.parentElement, "active", !1)
                }
                )),
                QT(document.querySelector('[data-source="'.concat(e, '"]')), "active", !0),
                Array.from(document.querySelectorAll(".plyr__cite")).forEach((function(e) {
                    e.hidden = !0
                }
                )),
                document.querySelector(".plyr__cite--".concat(e)).hidden = !1
            }
            function s(t, r) {
                !n.includes(t) || !r && t === i || !i.length && "video" === t || (e.source = JT[t],
                i = t,
                a(t))
            }
            Array.from(t).forEach((function(e) {
                e.addEventListener("click", (function() {
                    var t = e.getAttribute("data-source");
                    s(t),
                    r && window.history.pushState({
                        type: t
                    }, "", "#".concat(t))
                }
                ))
            }
            )),
            window.addEventListener("popstate", (function(e) {
                e.state && Object.keys(e.state).includes("type") && s(e.state.type)
            }
            )),
            o && (i = "video"),
            r && n.includes(i) && window.history.replaceState({
                type: i
            }, "", o ? "" : "#".concat(i)),
            "video" !== i && s(i, !0),
            a(i)
        }
        ))
    }
    )),
    XT.prod && Bh.config("").install()
}();
//# sourceMappingURL=demo.js.map
