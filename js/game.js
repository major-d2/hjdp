var GameConfig, console, GameLib, CreateGame, TransformUtil, loadRec, gameMap, GameMenu, GameHelp, GamePlay, GameOver,
        languageUI, languageData, GameSound;
(function () {
    function a(c, h, g) {
        return;

        if (!c) {
            return
        };
        var d = this.location.href.split("\x3A\x2F\x2F")[1].split("\x2F")[0].split("\x3A")[0];
        var a = c.split("\x3B");
        for (var f = 0; f < a.length; f++) {
            var b = a[f];
            if (b == d) {
                return
            };
            if (!h) {
                continue
            };
            b = d.split("\x2E" + b);
            if (b.length == 2 && !b[1]) {
                return
            }
        };
        throw (g || "\x65\x72\x72\x6F\x72")
    }
    function b(bn, o, bg) {
        var C = void(0),
            F = !0,
            I = null,
            Q = !1;
 
        function T(a) {
            return function () {
                return this[a]
            }
        }
        var c = this;
 
        function g(a, b) {
            var d = a.split("\x2E"),
                f = c;
            !(d[0] in f) && f.execScript && f.execScript("\x76\x61\x72\x20" + d[0]);
            for (var g; d.length && (g = d.shift());) {
                !d.length && b !== C ? f[g] = b : f = f[g] ? f[g] : f[g] = {}
            }
        }
        c.Ba = F;
 
        function j(a, b, c) {
            return a.call.apply(a.bind, arguments)
        }
        function m(a, b, c) {
            if (!a) {
                throw Error()
            };
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function () {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
                }
            };
            return function () {
                return a.apply(b, arguments)
            }
        }
        function X(a, b, c) {
            X = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf(
                "\x6E\x61\x74\x69\x76\x65\x20\x63\x6F\x64\x65") ? j : m;
            return X.apply(I, arguments)
        }
        var q = Date.now || function () {
                return +new Date
            };
 
        function t(a, b) {
            this.G = a;
            this.u = b || a;
            this.z = this.u.document;
            this.R = C
        }
        t.prototype.createElement = function (a, b, c) {
            a = this.z.createElement(a);
            if (b) {
                for (var d in b) {
                    if (b.hasOwnProperty(d)) {
                        if ("\x73\x74\x79\x6C\x65" == d) {
                            var f = a,
                                g = b[d];
                            w(this) ? f.setAttribute("\x73\x74\x79\x6C\x65", g) : f.style.cssText = g
                        } else {
                            a.setAttribute(d, b[d])
                        }
                    }
                }
            };
            c && a.appendChild(this.z.createTextNode(c));
            return a
        };
 
        function ba(a, b, c) {
            a = a.z.getElementsByTagName(b)[0];
            a || (a = o.documentElement);
            a && a.lastChild && a.insertBefore(c, a.lastChild)
        }
        function bd(a, b) {
            return a.createElement("\x6C\x69\x6E\x6B", {
                rel: "\x73\x74\x79\x6C\x65\x73\x68\x65\x65\x74",
                href: b
            })
        }
        function z(a, b) {
            return a.createElement("\x73\x63\x72\x69\x70\x74", {
                src: b
            })
        }
        function bh(a, b) {
            for (var c = a.className.split(/\s+/), d = 0, f = c.length; d < f; d++) {
                if (c[d] == b) {
                    return
                }
            };
            c.push(b);
            a.className = c.join("\x20").replace(/\s+/g, "\x20").replace(/^\s+|\s+$/, "")
        }
        function bk(a, b) {
            for (var c = a.className.split(/\s+/), d = [], f = 0, g = c.length; f < g; f++) {
                c[f] != b && d.push(c[f])
            };
            a.className = d.join("\x20").replace(/\s+/g, "\x20").replace(/^\s+|\s+$/, "")
        }
        function B(a, b) {
            for (var c = a.className.split(/\s+/), d = 0, f = c.length; d < f; d++) {
                if (c[d] == b) {
                    return F
                }
            };
            return Q
        }
        function w(a) {
            if (a.R === C) {
                var b = a.z.createElement("\x70");
                b.innerHTML =
                    "\x3C\x61\x20\x73\x74\x79\x6C\x65\x3D\x22\x74\x6F\x70\x3A\x31\x70\x78\x3B\x22\x3E\x77\x3C\x2F\x61\x3E";
                a.R = /top/.test(b.getElementsByTagName("\x61")[0].getAttribute("\x73\x74\x79\x6C\x65"))
            };
            return a.R
        }
        function bo(a) {
            var b = a.u.location.protocol;
            "\x61\x62\x6F\x75\x74\x3A" == b && (b = a.G.location.protocol);
            return "\x68\x74\x74\x70\x73\x3A" == b ? "\x68\x74\x74\x70\x73\x3A" : "\x68\x74\x74\x70\x3A"
        }
        function br(a, b, c) {
            this.w = a;
            this.T = b;
            this.Aa = c
        }
        g("\x77\x65\x62\x66\x6F\x6E\x74\x2E\x42\x72\x6F\x77\x73\x65\x72\x49\x6E\x66\x6F", br);
        br.prototype.qa = T("\x77");
        br.prototype.hasWebFontSupport = br.prototype.qa;
        br.prototype.ra = T("\x54");
        br.prototype.hasWebKitFallbackBug = br.prototype.ra;
        br.prototype.sa = T("\x41\x61");
        br.prototype.hasWebKitMetricsBug = br.prototype.sa;
 
        function bu(a, b, c, d) {
            this.e = a != I ? a : I;
            this.o = b != I ? b : I;
            this.ba = c != I ? c : I;
            this.f = d != I ? d : I
        }
        var E = /^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
        bu.prototype.toString = function () {
            return [this.e, this.o || "", this.ba || "", this.f || ""].join("")
        };
 
        function b(a) {
            a = E.exec(a);
            var b = I,
                c = I,
                d = I,
                f = I;
            a && (a[1] !== I && a[1] && (b = parseInt(a[1], 10)), a[2] !== I && a[2] && (c = parseInt(a[2], 10)), a[3] !==
                I && a[3] && (d = parseInt(a[3], 10)), a[4] !== I && a[4] && (f = /^[0-9]+$/.test(a[4]) ? parseInt(a[4],
                10) : a[4]));
            return new bu(b, c, d, f)
        }
        function f(a, b, c, d, f, g, h, i, k, j, l) {
            this.J = a;
            this.Ha = b;
            this.za = c;
            this.ga = d;
            this.Fa = f;
            this.fa = g;
            this.xa = h;
            this.Ga = i;
            this.wa = k;
            this.ea = j;
            this.k = l
        }
        g("\x77\x65\x62\x66\x6F\x6E\x74\x2E\x55\x73\x65\x72\x41\x67\x65\x6E\x74", f);
        f.prototype.getName = T("\x4A");
        f.prototype.getName = f.prototype.getName;
        f.prototype.pa = T("\x7A\x61");
        f.prototype.getVersion = f.prototype.pa;
        f.prototype.la = T("\x67\x61");
        f.prototype.getEngine = f.prototype.la;
        f.prototype.ma = T("\x66\x61");
        f.prototype.getEngineVersion = f.prototype.ma;
        f.prototype.na = T("\x78\x61");
        f.prototype.getPlatform = f.prototype.na;
        f.prototype.oa = T("\x77\x61");
        f.prototype.getPlatformVersion = f.prototype.oa;
        f.prototype.ka = T("\x65\x61");
        f.prototype.getDocumentMode = f.prototype.ka;
        f.prototype.ja = T("\x6B");
        f.prototype.getBrowserInfo = f.prototype.ja;
 
        function i(a, b) {
            this.a = a;
            this.H = b
        }
        var H = new f("\x55\x6E\x6B\x6E\x6F\x77\x6E", new bu, "\x55\x6E\x6B\x6E\x6F\x77\x6E",
            "\x55\x6E\x6B\x6E\x6F\x77\x6E", new bu, "\x55\x6E\x6B\x6E\x6F\x77\x6E", "\x55\x6E\x6B\x6E\x6F\x77\x6E", new bu,
            "\x55\x6E\x6B\x6E\x6F\x77\x6E", C, new br(Q, Q, Q));
        i.prototype.parse = function () {
            var a;
            if (-1 != this.a.indexOf("\x4D\x53\x49\x45")) {
                a = l(this);
                var c = p(this),
                    d = b(c),
                    h = s(this.a, /MSIE ([\d\w\.]+)/, 1),
                    i = b(h);
                a = new f("\x4D\x53\x49\x45", i, h, "\x4D\x53\x49\x45", i, h, a, d, c, v(this.H), new br(
                    "\x57\x69\x6E\x64\x6F\x77\x73" == a && 6 <= i.e ||
                    "\x57\x69\x6E\x64\x6F\x77\x73\x20\x50\x68\x6F\x6E\x65" == a && 8 <= d.e, Q, Q))
            } else {
                if (-1 != this.a.indexOf("\x4F\x70\x65\x72\x61")) {
                    a: {
                        a = "\x55\x6E\x6B\x6E\x6F\x77\x6E";
                        var c = s(this.a, /Presto\/([\d\w\.]+)/, 1),
                            d = b(c),
                            h = p(this),
                            i = b(h),
                            j = v(this.H);
                        d.e !== I ? a = "\x50\x72\x65\x73\x74\x6F" : (-1 != this.a.indexOf("\x47\x65\x63\x6B\x6F") && (
                            a = "\x47\x65\x63\x6B\x6F"), c = s(this.a, /rv:([^\)]+)/, 1), d = b(c));
                        if (-1 != this.a.indexOf("\x4F\x70\x65\x72\x61\x20\x4D\x69\x6E\x69\x2F")) {
                            var k = s(this.a, /Opera Mini\/([\d\.]+)/, 1),
                                m = b(k);
                            a = new f("\x4F\x70\x65\x72\x61\x4D\x69\x6E\x69", m, k, a, d, c, l(this), i, h, j, new br(Q,
                                Q, Q))
                        } else {
                            if (-1 != this.a.indexOf("\x56\x65\x72\x73\x69\x6F\x6E\x2F") && (k = s(this.a,
                                /Version\/([\d\.]+)/, 1), m = b(k), m.e !== I)) {
                                a = new f("\x4F\x70\x65\x72\x61", m, k, a, d, c, l(this), i, h, j, new br(10 <= m.e, Q,
                                    Q));
                                break a
                            };
                            k = s(this.a, /Opera[\/ ]([\d\.]+)/, 1);
                            m = b(k);
                            a = m.e !== I ? new f("\x4F\x70\x65\x72\x61", m, k, a, d, c, l(this), i, h, j, new br(10 <=
                                m.e, Q, Q)) : new f("\x4F\x70\x65\x72\x61", new bu, "\x55\x6E\x6B\x6E\x6F\x77\x6E", a,
                                d, c, l(this), i, h, j, new br(Q, Q, Q))
                        }
                    }
                } else {
                    if (/AppleWeb(K|k)it/.test(this.a)) {
                        a = l(this);
                        var c = p(this),
                            d = b(c),
                            h = s(this.a, /AppleWeb(?:K|k)it\/([\d\.\+]+)/, 1),
                            i = b(h),
                            j = "\x55\x6E\x6B\x6E\x6F\x77\x6E",
                            k = new bu,
                            m = "\x55\x6E\x6B\x6E\x6F\x77\x6E",
                            n = Q; - 1 != this.a.indexOf("\x43\x68\x72\x6F\x6D\x65") || -1 != this.a.indexOf(
                            "\x43\x72\x4D\x6F") || -1 != this.a.indexOf("\x43\x72\x69\x4F\x53") ? j =
                            "\x43\x68\x72\x6F\x6D\x65" : /Silk\/\d/.test(this.a) ? j = "\x53\x69\x6C\x6B" :
                            "\x42\x6C\x61\x63\x6B\x42\x65\x72\x72\x79" == a || "\x41\x6E\x64\x72\x6F\x69\x64" == a ? j =
                            "\x42\x75\x69\x6C\x74\x69\x6E\x42\x72\x6F\x77\x73\x65\x72" : -1 != this.a.indexOf(
                            "\x53\x61\x66\x61\x72\x69") ? j = "\x53\x61\x66\x61\x72\x69" : -1 != this.a.indexOf(
                            "\x41\x64\x6F\x62\x65\x41\x49\x52") && (j = "\x41\x64\x6F\x62\x65\x41\x49\x52");
                        "\x42\x75\x69\x6C\x74\x69\x6E\x42\x72\x6F\x77\x73\x65\x72" == j ? m =
                            "\x55\x6E\x6B\x6E\x6F\x77\x6E" : "\x53\x69\x6C\x6B" == j ? m = s(this.a, /Silk\/([\d\._]+)/,
                            1) : "\x43\x68\x72\x6F\x6D\x65" == j ? m = s(this.a, /(Chrome|CrMo|CriOS)\/([\d\.]+)/, 2) : -
                            1 != this.a.indexOf("\x56\x65\x72\x73\x69\x6F\x6E\x2F") ? m = s(this.a,
                            /Version\/([\d\.\w]+)/, 1) : "\x41\x64\x6F\x62\x65\x41\x49\x52" == j && (m = s(this.a,
                            /AdobeAIR\/([\d\.]+)/, 1));
                        k = b(m);
                        n = "\x41\x64\x6F\x62\x65\x41\x49\x52" == j ? 2 < k.e || 2 == k.e && 5 <= k.o :
                            "\x42\x6C\x61\x63\x6B\x42\x65\x72\x72\x79" == a ? 10 <= d.e :
                            "\x41\x6E\x64\x72\x6F\x69\x64" == a ? 2 < d.e || 2 == d.e && 1 < d.o : 526 <= i.e || 525 <=
                            i.e && 13 <= i.o;
                        a = new f(j, k, m, "\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74", i, h, a, d, c, v(this.H),
                            new br(n, 536 > i.e || 536 == i.e && 11 > i.o, "\x69\x50\x68\x6F\x6E\x65" == a ||
                            "\x69\x50\x61\x64" == a || "\x69\x50\x6F\x64" == a ||
                            "\x4D\x61\x63\x69\x6E\x74\x6F\x73\x68" == a))
                    } else {
                        -1 != this.a.indexOf("\x47\x65\x63\x6B\x6F") ? (a = "\x55\x6E\x6B\x6E\x6F\x77\x6E", c = new bu,
                            d = "\x55\x6E\x6B\x6E\x6F\x77\x6E", h = p(this), i = b(h), j = Q, -1 != this.a.indexOf(
                            "\x46\x69\x72\x65\x66\x6F\x78") ? (a = "\x46\x69\x72\x65\x66\x6F\x78", d = s(this.a,
                            /Firefox\/([\d\w\.]+)/, 1), c = b(d), j = 3 <= c.e && 5 <= c.o) : -1 != this.a.indexOf(
                            "\x4D\x6F\x7A\x69\x6C\x6C\x61") && (a = "\x4D\x6F\x7A\x69\x6C\x6C\x61"), k = s(this.a,
                            /rv:([^\)]+)/, 1), m = b(k), j || (j = 1 < m.e || 1 == m.e && 9 < m.o || 1 == m.e && 9 == m
                            .o && 2 <= m.ba || k.match(/1\.9\.1b[123]/) != I || k.match(/1\.9\.1\.[\d\.]+/) != I), a =
                            new f(a, c, d, "\x47\x65\x63\x6B\x6F", m, k, l(this), i, h, v(this.H), new br(j, Q, Q))) :
                            a = H
                    }
                }
            };
            return a
        };
 
        function l(a) {
            var b = s(a.a, /(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/, 1);
            if ("" != b) {
                return /BB\d{2}/.test(b) && (b = "\x42\x6C\x61\x63\x6B\x42\x65\x72\x72\x79"), b
            };
            a = s(a.a, /(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/, 1);
            return "" != a ? ("\x4D\x61\x63\x5F\x50\x6F\x77\x65\x72\x50\x43" == a && (a =
                "\x4D\x61\x63\x69\x6E\x74\x6F\x73\x68"), a) : "\x55\x6E\x6B\x6E\x6F\x77\x6E"
        }
        function p(a) {
            var b = s(a.a, /(OS X|Windows NT|Android) ([^;)]+)/, 2);
            if (b || (b = s(a.a, /Windows Phone( OS)? ([^;)]+)/, 2)) || (b = s(a.a, /(iPhone )?OS ([\d_]+)/, 2))) {
                return b
            };
            if (b = s(a.a, /(?:Linux|CrOS) ([^;)]+)/, 1)) {
                for (var b = b.split(/\s/), c = 0; c < b.length; c += 1) {
                    if (/^[\d\._]+$/.test(b[c])) {
                        return b[c]
                    }
                }
            };
            return (a = s(a.a, /(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/, 2)) ? a : "\x55\x6E\x6B\x6E\x6F\x77\x6E"
        }
        function s(a, b, c) {
            return (a = a.match(b)) && a[c] ? a[c] : ""
        }
        function v(a) {
            if (a.documentMode) {
                return a.documentMode
            }
        }
        function K(a) {
            this.va = a || "\x2D"
        }
        K.prototype.f = function (a) {
            for (var b = [], c = 0; c < arguments.length; c++) {
                b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase())
            };
            return b.join(this.va)
        };
 
        function y(a, b) {
            this.J = a;
            this.U = 4;
            this.K = "\x6E";
            var c = (b || "\x6E\x34").match(/^([nio])([1-9])$/i);
            c && (this.K = c[1], this.U = parseInt(c[2], 10))
        }
        y.prototype.getName = T("\x4A");
 
        function A(a) {
            return a.K + a.U
        }
        function M(a) {
            var b = 4,
                c = "\x6E",
                d = I;
            a && ((d = a.match(/(normal|oblique|italic)/i)) && d[1] && (c = d[1].substr(0, 1).toLowerCase()), (d = a.match(
                /([1-9]00|normal|bold)/i)) && d[1] && (/bold/i.test(d[1]) ? b = 7 : /[1-9]00/.test(d[1]) && (b =
                parseInt(d[1].substr(0, 1), 10))));
            return c + b
        }
        function O(a, b, c) {
            this.c = a;
            this.h = b;
            this.M = c;
            this.j = "\x77\x66";
            this.g = new K("\x2D")
        }
        function S(a) {
            bh(a.h, a.g.f(a.j, "\x6C\x6F\x61\x64\x69\x6E\x67"));
            D(a, "\x6C\x6F\x61\x64\x69\x6E\x67")
        }
        function G(a) {
            bk(a.h, a.g.f(a.j, "\x6C\x6F\x61\x64\x69\x6E\x67"));
            B(a.h, a.g.f(a.j, "\x61\x63\x74\x69\x76\x65")) || bh(a.h, a.g.f(a.j, "\x69\x6E\x61\x63\x74\x69\x76\x65"));
            D(a, "\x69\x6E\x61\x63\x74\x69\x76\x65")
        }
        function D(a, b, c) {
            if (a.M[b]) {
                if (c) {
                    a.M[b](c.getName(), A(c))
                } else {
                    a.M[b]()
                }
            }
        }
        function J(a, b) {
            this.c = a;
            this.C = b;
            this.s = this.c.createElement("\x73\x70\x61\x6E", {
                "\x61\x72\x69\x61\x2D\x68\x69\x64\x64\x65\x6E": "\x74\x72\x75\x65"
            }, this.C)
        }
        function L(a, b) {
            var c = a.s,
                d;
            d = [];
            for (var f = b.J.split(/,\s*/), g = 0; g < f.length; g++) {
                var h = f[g].replace(/['"]/g, ""); - 1 == h.indexOf("\x20") ? d.push(h) : d.push("\x27" + h + "\x27")
            };
            d = d.join("\x2C");
            f = "\x6E\x6F\x72\x6D\x61\x6C";
            g = b.U + "\x30\x30";
            "\x6F" === b.K ? f = "\x6F\x62\x6C\x69\x71\x75\x65" : "\x69" === b.K && (f = "\x69\x74\x61\x6C\x69\x63");
            d =
                "\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x61\x62\x73\x6F\x6C\x75\x74\x65\x3B\x74\x6F\x70\x3A\x2D\x39\x39\x39\x70\x78\x3B\x6C\x65\x66\x74\x3A\x2D\x39\x39\x39\x70\x78\x3B\x66\x6F\x6E\x74\x2D\x73\x69\x7A\x65\x3A\x33\x30\x30\x70\x78\x3B\x77\x69\x64\x74\x68\x3A\x61\x75\x74\x6F\x3B\x68\x65\x69\x67\x68\x74\x3A\x61\x75\x74\x6F\x3B\x6C\x69\x6E\x65\x2D\x68\x65\x69\x67\x68\x74\x3A\x6E\x6F\x72\x6D\x61\x6C\x3B\x6D\x61\x72\x67\x69\x6E\x3A\x30\x3B\x70\x61\x64\x64\x69\x6E\x67\x3A\x30\x3B\x66\x6F\x6E\x74\x2D\x76\x61\x72\x69\x61\x6E\x74\x3A\x6E\x6F\x72\x6D\x61\x6C\x3B\x77\x68\x69\x74\x65\x2D\x73\x70\x61\x63\x65\x3A\x6E\x6F\x77\x72\x61\x70\x3B\x66\x6F\x6E\x74\x2D\x66\x61\x6D\x69\x6C\x79\x3A" +
                d + "\x3B" + ("\x66\x6F\x6E\x74\x2D\x73\x74\x79\x6C\x65\x3A" + f +
                "\x3B\x66\x6F\x6E\x74\x2D\x77\x65\x69\x67\x68\x74\x3A" + g + "\x3B");
            w(a.c) ? c.setAttribute("\x73\x74\x79\x6C\x65", d) : c.style.cssText = d
        }
        function N(a) {
            ba(a.c, "\x62\x6F\x64\x79", a.s)
        }
        J.prototype.remove = function () {
            var a = this.s;
            a.parentNode && a.parentNode.removeChild(a)
        };
 
        function U(a, c, d, g, h, j, k, l) {
            this.V = a;
            this.ta = c;
            this.c = d;
            this.q = g;
            this.C = l || "\x42\x45\x53\x62\x73\x77\x79";
            this.k = h;
            this.F = {};
            this.S = j || 5E3;
            this.Z = k || I;
            this.B = this.A = I;
            a = new J(this.c, this.C);
            N(a);
            for (var m in P) {
                P.hasOwnProperty(m) && (L(a, new y(P[m], A(this.q))), this.F[P[m]] = a.s.offsetWidth)
            };
            a.remove()
        }
        var P = {
            Ea: "\x73\x65\x72\x69\x66",
            Da: "\x73\x61\x6E\x73\x2D\x73\x65\x72\x69\x66",
            Ca: "\x6D\x6F\x6E\x6F\x73\x70\x61\x63\x65"
        };
        U.prototype.start = function () {
            this.A = new J(this.c, this.C);
            N(this.A);
            this.B = new J(this.c, this.C);
            N(this.B);
            this.ya = q();
            L(this.A, new y(this.q.getName() + "\x2C\x73\x65\x72\x69\x66", A(this.q)));
            L(this.B, new y(this.q.getName() + "\x2C\x73\x61\x6E\x73\x2D\x73\x65\x72\x69\x66", A(this.q)));
            W(this)
        };
 
        function Z(a, b, c) {
            for (var d in P) {
                if (P.hasOwnProperty(d) && b === a.F[P[d]] && c === a.F[P[d]]) {
                    return F
                }
            };
            return Q
        }
        function W(a) {
            var c = a.A.s.offsetWidth,
                d = a.B.s.offsetWidth;
            c === a.F.serif && d === a.F["\x73\x61\x6E\x73\x2D\x73\x65\x72\x69\x66"] || a.k.T && Z(a, c, d) ? q() - a.ya >=
                a.S ? a.k.T && Z(a, c, d) && (a.Z === I || a.Z.hasOwnProperty(a.q.getName())) ? R(a, a.V) : R(a, a.ta) :
                setTimeout(X(function () {
                W(this)
            }, a), 25) : R(a, a.V)
        }
        function R(a, c) {
            a.A.remove();
            a.B.remove();
            c(a.q)
        }
        function V(a, b, c, d) {
            this.c = b;
            this.t = c;
            this.N = 0;
            this.ca = this.Y = Q;
            this.S = d;
            this.k = a.k
        }
        function bc(a, b, c, d, f) {
            if (0 === b.length && f) {
                G(a.t)
            } else {
                a.N += b.length;
                f && (a.Y = f);
                for (f = 0; f < b.length; f++) {
                    var g = b[f],
                        h = c[g.getName()],
                        i = a.t,
                        j = g;
                    bh(i.h, i.g.f(i.j, j.getName(), A(j).toString(), "\x6C\x6F\x61\x64\x69\x6E\x67"));
                    D(i, "\x66\x6F\x6E\x74\x6C\x6F\x61\x64\x69\x6E\x67", j);
                    (new U(X(a.ha, a), X(a.ia, a), a.c, g, a.k, a.S, d, h)).start()
                }
            }
        }
        V.prototype.ha = function (a) {
            var b = this.t;
            bk(b.h, b.g.f(b.j, a.getName(), A(a).toString(), "\x6C\x6F\x61\x64\x69\x6E\x67"));
            bk(b.h, b.g.f(b.j, a.getName(), A(a).toString(), "\x69\x6E\x61\x63\x74\x69\x76\x65"));
            bh(b.h, b.g.f(b.j, a.getName(), A(a).toString(), "\x61\x63\x74\x69\x76\x65"));
            D(b, "\x66\x6F\x6E\x74\x61\x63\x74\x69\x76\x65", a);
            this.ca = F;
            bf(this)
        };
        V.prototype.ia = function (a) {
            var b = this.t;
            bk(b.h, b.g.f(b.j, a.getName(), A(a).toString(), "\x6C\x6F\x61\x64\x69\x6E\x67"));
            B(b.h, b.g.f(b.j, a.getName(), A(a).toString(), "\x61\x63\x74\x69\x76\x65")) || bh(b.h, b.g.f(b.j, a.getName(),
                A(a).toString(), "\x69\x6E\x61\x63\x74\x69\x76\x65"));
            D(b, "\x66\x6F\x6E\x74\x69\x6E\x61\x63\x74\x69\x76\x65", a);
            bf(this)
        };
 
        function bf(a) {
            0 == --a.N && a.Y && (a.ca ? (a = a.t, bk(a.h, a.g.f(a.j, "\x6C\x6F\x61\x64\x69\x6E\x67")), bk(a.h, a.g.f(a
                .j, "\x69\x6E\x61\x63\x74\x69\x76\x65")), bh(a.h, a.g.f(a.j, "\x61\x63\x74\x69\x76\x65")), D(a,
                "\x61\x63\x74\x69\x76\x65")) : G(a.t))
        }
        function Y(a, b, c) {
            this.G = a;
            this.W = b;
            this.a = c;
            this.O = this.P = 0
        }
        function bb(b, c) {
            be.W.$[b] = c
        }
        Y.prototype.load = function (b) {
            var c = b.context || this.G;
            this.c = new t(this.G, c);
            c = new O(this.c, c.document.documentElement, b);
            if (this.a.k.w) {
                var d = this.W,
                    f = this.c,
                    g = [],
                    h;
                for (h in b) {
                    if (b.hasOwnProperty(h)) {
                        var i = d.$[h];
                        i && g.push(i(b[h], f))
                    }
                };
                b = b.timeout;
                this.O = this.P = g.length;
                b = new V(this.a, this.c, c, b);
                h = 0;
                for (d = g.length; h < d; h++) {
                    f = g[h], f.v(this.a, X(this.ua, this, f, c, b))
                }
            } else {
                G(c)
            }
        };
        Y.prototype.ua = function (a, b, c, d) {
            var f = this;
            d ? a.load(function (a, d, g) {
                var h = 0 == --f.P;
                h && S(b);
                setTimeout(function () {
                    bc(c, a, d || {}, g || I, h)
                }, 0)
            }) : (a = 0 == --this.P, this.O--, a && (0 == this.O ? G(b) : S(b)), bc(c, [], {}, I, a))
        };
        var bj = bn,
            bm = (new i(navigator.userAgent, o)).parse(),
            be = bj.WebFont = new Y(bn, new function () {
                this.$ = {}
            }, bm);
        be.load = be.load;
 
        function bi(a, b) {
            this.c = a;
            this.d = b
        }
        bi.prototype.load = function (a) {
            var b, c, d = this.d.urls || [],
                f = this.d.families || [];
            b = 0;
            for (c = d.length; b < c; b++) {
                ba(this.c, "\x68\x65\x61\x64", bd(this.c, d[b]))
            };
            d = [];
            b = 0;
            for (c = f.length; b < c; b++) {
                var g = f[b].split("\x3A");
                if (g[1]) {
                    for (var h = g[1].split("\x2C"), i = 0; i < h.length; i += 1) {
                        d.push(new y(g[0], h[i]))
                    }
                } else {
                    d.push(new y(g[0]))
                }
            };
            a(d)
        };
        bi.prototype.v = function (a, b) {
            return b(a.k.w)
        };
        bb("\x63\x75\x73\x74\x6F\x6D", function (a, b) {
            return new bi(b, a)
        });
 
        function bl(a, b) {
            this.c = a;
            this.d = b
        }
        var bq = {
            regular: "\x6E\x34",
            bold: "\x6E\x37",
            italic: "\x69\x34",
            bolditalic: "\x69\x37",
            r: "\x6E\x34",
            b: "\x6E\x37",
            i: "\x69\x34",
            bi: "\x69\x37"
        };
        bl.prototype.v = function (a, b) {
            return b(a.k.w)
        };
        bl.prototype.load = function (a) {
            ba(this.c, "\x68\x65\x61\x64", bd(this.c, bo(this.c) +
                "\x2F\x2F\x77\x65\x62\x66\x6F\x6E\x74\x73\x2E\x66\x6F\x6E\x74\x73\x6C\x69\x76\x65\x2E\x63\x6F\x6D\x2F\x63\x73\x73\x2F" +
                this.d.key + "\x2E\x63\x73\x73"));
            for (var b = this.d.families, c = [], d = 0, f = b.length; d < f; d++) {
                c.push.apply(c, bt(b[d]))
            };
            a(c)
        };
 
        function bt(a) {
            var b = a.split("\x3A");
            a = b[0];
            if (b[1]) {
                for (var c = b[1].split("\x2C"), b = [], d = 0, f = c.length; d < f; d++) {
                    var g = c[d];
                    if (g) {
                        var h = bq[g];
                        b.push(h ? h : g)
                    }
                };
                c = [];
                for (d = 0; d < b.length; d += 1) {
                    c.push(new y(a, b[d]))
                };
                return c
            };
            return [new y(a)]
        }
        bb("\x61\x73\x63\x65\x6E\x64\x65\x72", function (a, b) {
            return new bl(b, a)
        });
 
        function bp(a, b, c) {
            this.a = a;
            this.c = b;
            this.d = c;
            this.m = []
        }
        bp.prototype.v = function (a, b) {
            var c = this,
                d = c.d.projectId,
                f = c.d.version;
            if (d) {
                var g = c.c.u,
                    h = c.c.createElement("\x73\x63\x72\x69\x70\x74");
                h.id = "\x5F\x5F\x4D\x6F\x6E\x6F\x74\x79\x70\x65\x41\x50\x49\x53\x63\x72\x69\x70\x74\x5F\x5F" + d;
                var i = Q;
                h.onload = h.onreadystatechange = function () {
                    if (!i && (!this.readyState || "\x6C\x6F\x61\x64\x65\x64" === this.readyState ||
                        "\x63\x6F\x6D\x70\x6C\x65\x74\x65" === this.readyState)) {
                        i = F;
                        if (g["\x5F\x5F\x6D\x74\x69\x5F\x66\x6E\x74\x4C\x73\x74" + d]) {
                            var f = g["\x5F\x5F\x6D\x74\x69\x5F\x66\x6E\x74\x4C\x73\x74" + d]();
                            if (f) {
                                for (var j = 0; j < f.length; j++) {
                                    c.m.push(new y(f[j].fontfamily))
                                }
                            }
                        };
                        b(a.k.w);
                        h.onload = h.onreadystatechange = I
                    }
                };
                h.src = c.D(d, f);
                ba(this.c, "\x68\x65\x61\x64", h)
            } else {
                b(F)
            }
        };
        bp.prototype.D = function (a, b) {
            var c = bo(this.c),
                d = (this.d.api || "\x66\x61\x73\x74\x2E\x66\x6F\x6E\x74\x73\x2E\x63\x6F\x6D\x2F\x6A\x73\x61\x70\x69").replace(
                    /^.*http(s?):(\/\/)?/, "");
            return c + "\x2F\x2F" + d + "\x2F" + a + "\x2E\x6A\x73" + (b ? "\x3F\x76\x3D" + b : "")
        };
        bp.prototype.load = function (a) {
            a(this.m)
        };
        bb("\x6D\x6F\x6E\x6F\x74\x79\x70\x65", function (a, b) {
            var c = (new i(navigator.userAgent, o)).parse();
            return new bp(c, b, a)
        });
 
        function bs(a, b) {
            this.c = a;
            this.d = b;
            this.m = []
        }
        bs.prototype.D = function (a) {
            var b = bo(this.c);
            return (this.d.api || b + "\x2F\x2F\x75\x73\x65\x2E\x74\x79\x70\x65\x6B\x69\x74\x2E\x6E\x65\x74") + "\x2F" +
                a + "\x2E\x6A\x73"
        };
        bs.prototype.v = function (a, b) {
            var c = this.d.id,
                d = this.d,
                f = this.c.u,
                g = this;
            c ? (f.__webfonttypekitmodule__ || (f.__webfonttypekitmodule__ = {}), f.__webfonttypekitmodule__[c] = function (
                c) {
                c(a, d, function (a, c, d) {
                    for (var f = 0; f < c.length; f += 1) {
                        var h = d[c[f]];
                        if (h) {
                            for (var i = 0; i < h.length; i += 1) {
                                g.m.push(new y(c[f], h[i]))
                            }
                        } else {
                            g.m.push(new y(c[f]))
                        }
                    };
                    b(a)
                })
            }, c = z(this.c, this.D(c)), ba(this.c, "\x68\x65\x61\x64", c)) : b(F)
        };
        bs.prototype.load = function (a) {
            a(this.m)
        };
        bb("\x74\x79\x70\x65\x6B\x69\x74", function (a, b) {
            return new bs(b, a)
        });
 
        function bw(a, b, c) {
            this.L = a ? a : b + d;
            this.p = [];
            this.Q = [];
            this.da = c || ""
        }
        var d =
            "\x2F\x2F\x66\x6F\x6E\x74\x73\x2E\x67\x6F\x6F\x67\x6C\x65\x61\x70\x69\x73\x2E\x63\x6F\x6D\x2F\x63\x73\x73";
        bw.prototype.f = function () {
            if (0 == this.p.length) {
                throw Error("\x4E\x6F\x20\x66\x6F\x6E\x74\x73\x20\x74\x6F\x20\x6C\x6F\x61\x64\x20\x21")
            };
            if (-1 != this.L.indexOf("\x6B\x69\x74\x3D")) {
                return this.L
            };
            for (var a = this.p.length, b = [], c = 0; c < a; c++) {
                b.push(this.p[c].replace(/ /g, "\x2B"))
            };
            a = this.L + "\x3F\x66\x61\x6D\x69\x6C\x79\x3D" + b.join("\x25\x37\x43");
            0 < this.Q.length && (a += "\x26\x73\x75\x62\x73\x65\x74\x3D" + this.Q.join("\x2C"));
            0 < this.da.length && (a += "\x26\x74\x65\x78\x74\x3D" + encodeURIComponent(this.da));
            return a
        };
 
        function h(a) {
            this.p = a;
            this.aa = [];
            this.I = {}
        }
        var k = {
            latin: "\x42\x45\x53\x62\x73\x77\x79",
            cyrillic: "\x26\x23\x31\x30\x38\x31\x3B\x26\x23\x31\x31\x30\x33\x3B\x26\x23\x31\x30\x34\x36\x3B",
            greek: "\x26\x23\x39\x34\x35\x3B\x26\x23\x39\x34\x36\x3B\x26\x23\x39\x33\x31\x3B",
            khmer: "\x26\x23\x78\x31\x37\x38\x30\x3B\x26\x23\x78\x31\x37\x38\x31\x3B\x26\x23\x78\x31\x37\x38\x32\x3B",
            Hanuman: "\x26\x23\x78\x31\x37\x38\x30\x3B\x26\x23\x78\x31\x37\x38\x31\x3B\x26\x23\x78\x31\x37\x38\x32\x3B"
        }, n = {
                thin: "\x31",
                extralight: "\x32",
                "\x65\x78\x74\x72\x61\x2D\x6C\x69\x67\x68\x74": "\x32",
                ultralight: "\x32",
                "\x75\x6C\x74\x72\x61\x2D\x6C\x69\x67\x68\x74": "\x32",
                light: "\x33",
                regular: "\x34",
                book: "\x34",
                medium: "\x35",
                "\x73\x65\x6D\x69\x2D\x62\x6F\x6C\x64": "\x36",
                semibold: "\x36",
                "\x64\x65\x6D\x69\x2D\x62\x6F\x6C\x64": "\x36",
                demibold: "\x36",
                bold: "\x37",
                "\x65\x78\x74\x72\x61\x2D\x62\x6F\x6C\x64": "\x38",
                extrabold: "\x38",
                "\x75\x6C\x74\x72\x61\x2D\x62\x6F\x6C\x64": "\x38",
                ultrabold: "\x38",
                black: "\x39",
                heavy: "\x39",
                l: "\x33",
                r: "\x34",
                b: "\x37"
            }, r = {
                i: "\x69",
                italic: "\x69",
                n: "\x6E",
                normal: "\x6E"
            }, u = RegExp(
                "\x5E\x28\x74\x68\x69\x6E\x7C\x28\x3F\x3A\x28\x3F\x3A\x65\x78\x74\x72\x61\x7C\x75\x6C\x74\x72\x61\x29\x2D\x3F\x29\x3F\x6C\x69\x67\x68\x74\x7C\x72\x65\x67\x75\x6C\x61\x72\x7C\x62\x6F\x6F\x6B\x7C\x6D\x65\x64\x69\x75\x6D\x7C\x28\x3F\x3A\x28\x3F\x3A\x73\x65\x6D\x69\x7C\x64\x65\x6D\x69\x7C\x65\x78\x74\x72\x61\x7C\x75\x6C\x74\x72\x61\x29\x2D\x3F\x29\x3F\x62\x6F\x6C\x64\x7C\x62\x6C\x61\x63\x6B\x7C\x68\x65\x61\x76\x79\x7C\x6C\x7C\x72\x7C\x62\x7C\x5B\x31\x2D\x39\x5D\x30\x30\x29\x3F\x28\x6E\x7C\x69\x7C\x6E\x6F\x72\x6D\x61\x6C\x7C\x69\x74\x61\x6C\x69\x63\x29\x3F\x24");
        h.prototype.parse = function () {
            for (var a = this.p.length, b = 0; b < a; b++) {
                var d = this.p[b].split("\x3A"),
                    f = d[0].replace(/\+/g, "\x20"),
                    g = ["\x6E\x34"];
                if (2 <= d.length) {
                    var h;
                    var i = d[1];
                    h = [];
                    if (i) {
                        for (var i = i.split("\x2C"), j = i.length, m = 0; m < j; m++) {
                            var l;
                            l = i[m];
                            if (l.match(/^[\w]+$/)) {
                                l = u.exec(l.toLowerCase());
                                var p = C;
                                if (l == I) {
                                    p = ""
                                } else {
                                    p = C;
                                    p = l[1];
                                    if (p == I || "" == p) {
                                        p = "\x34"
                                    } else {
                                        var o = n[p],
                                            p = o ? o : isNaN(p) ? "\x34" : p.substr(0, 1)
                                    };
                                    p = [l[2] == I || "" == l[2] ? "\x6E" : r[l[2]], p].join("")
                                };
                                l = p
                            } else {
                                l = ""
                            };
                            l && h.push(l)
                        }
                    };
                    0 < h.length && (g = h);
                    3 == d.length && (d = d[2], h = [], d = !d ? h : d.split("\x2C"), 0 < d.length && (d = k[d[0]]) &&
                        (this.I[f] = d))
                };
                this.I[f] || (d = k[f]) && (this.I[f] = d);
                for (d = 0; d < g.length; d += 1) {
                    this.aa.push(new y(f, g[d]))
                }
            }
        };
 
        function bv(a, b, c) {
            this.a = a;
            this.c = b;
            this.d = c
        }
        var x = {
            Arimo: F,
            Cousine: F,
            Tinos: F
        };
        bv.prototype.v = function (a, b) {
            b(a.k.w)
        };
        bv.prototype.load = function (a) {
            var b = this.c;
            if ("\x4D\x53\x49\x45" == this.a.getName() && this.d.blocking != F) {
                var c = X(this.X, this, a),
                    d = function () {
                        b.z.body ? c() : setTimeout(d, 0)
                    };
                d()
            } else {
                this.X(a)
            }
        };
        bv.prototype.X = function (a) {
            for (var b = this.c, d = new bw(this.d.api, bo(b), this.d.text), f = this.d.families, g = f.length, i = 0; i <
                g; i++) {
                var j = f[i].split("\x3A");
                3 == j.length && d.Q.push(j.pop());
                var k = "";
                2 == j.length && "" != j[1] && (k = "\x3A");
                d.p.push(j.join(k))
            };
            f = new h(f);
            f.parse();
            ba(b, "\x68\x65\x61\x64", bd(b, d.f()));
            a(f.aa, f.I, x)
        };
        bb("\x67\x6F\x6F\x67\x6C\x65", function (a, b) {
            var c = (new i(navigator.userAgent, o)).parse();
            return new bv(c, b, a)
        });
 
        function $(a, b) {
            this.c = a;
            this.d = b;
            this.m = []
        }
        $.prototype.D = function (a) {
            return bo(this.c) + (this.d.api ||
                "\x2F\x2F\x66\x2E\x66\x6F\x6E\x74\x64\x65\x63\x6B\x2E\x63\x6F\x6D\x2F\x73\x2F\x63\x73\x73\x2F\x6A\x73\x2F") +
                (this.c.u.location.hostname || this.c.G.location.hostname) + "\x2F" + a + "\x2E\x6A\x73"
        };
        $.prototype.v = function (a, b) {
            var c = this.d.id,
                d = this.c.u,
                f = this;
            c ? (d.__webfontfontdeckmodule__ || (d.__webfontfontdeckmodule__ = {}), d.__webfontfontdeckmodule__[c] = function (
                a, c) {
                for (var d = 0, h = c.fonts.length; d < h; ++d) {
                    var g = c.fonts[d];
                    f.m.push(new y(g.name, M("\x66\x6F\x6E\x74\x2D\x77\x65\x69\x67\x68\x74\x3A" + g.weight +
                        "\x3B\x66\x6F\x6E\x74\x2D\x73\x74\x79\x6C\x65\x3A" + g.style)))
                };
                b(a)
            }, c = z(this.c, this.D(c)), ba(this.c, "\x68\x65\x61\x64", c)) : b(F)
        };
        $.prototype.load = function (a) {
            a(this.m)
        };
        bb("\x66\x6F\x6E\x74\x64\x65\x63\x6B", function (b, c) {
            return new $(c, b)
        });
        bn.WebFontConfig && be.load(bn.WebFontConfig)
    }
    function c() {}
    function d() {}
    function f() {}
    function g() {}
    function h() {}
    function i() {
        var c = 3,
            b = document.createElement("\x64\x69\x76"),
            a = b.getElementsByTagName("\x69");
        do {
            b.innerHTML = "\x3C\x21\x2D\x2D\x5B\x69\x66\x20\x67\x74\x20\x49\x45\x20" + (++c) +
                "\x5D\x3E\x3C\x69\x3E\x3C\x2F\x69\x3E\x3C\x21\x5B\x65\x6E\x64\x69\x66\x5D\x2D\x2D\x3E"
        } while (a[0]);;
        return c > 4 ? c : document.documentMode
    }
    function j() {
        if (/iP(hone|od|ad)/.test(navigator.platform)) {
            var a = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
            return [+a[1], +a[2], +(a[3] || 0)]
        };
        return false
    }
    function k() {
        // h5api.moreGame()
    }
    function l(b) {
        var a = new RegExp(b + "\x3D\x28\x5B\x5E\x26\x23\x3D\x5D\x2A\x29");
        a = a.exec(location.search);
        if (null === a) {
            return false
        };
        return decodeURIComponent(a[1])
    }
    function m() {
        var b =
            "\x2C\x7A\x68\x2C\x65\x6E\x2C\x6E\x6C\x2C\x65\x73\x2C\x70\x74\x2C\x66\x72\x2C\x69\x74\x2C\x64\x65\x2C\x72\x75\x2C\x69\x6E\x2C\x70\x6C\x2C\x74\x72\x2C",
            a = localStorage.getItem("\x6C\x61\x6E\x67");
        if (null === a) {
            a = GameLib.getStorage("\x6C\x61\x6E\x67");
            if (!a) {
                a = GameLib.$_GET("\x6C\x61\x6E\x67");
                if (!a || b.indexOf("\x2C" + a + "\x2C") == -1) {
                    a = null
                }
            }
        };
        if (null === a) {
            a = (navigator.language || navigator.userLanguage).substr(0, 2);
            return b.indexOf("\x2C" + a + "\x2C") == -1 ? "\x65\x6E" : a
        };
        return a
    }
    function n(b) {
        GameLib.lang = b;
        localStorage.setItem("\x6C\x61\x6E\x67", b);
        try {
            GameHiscore.set("\x6C\x61\x6E\x67", b)
        } catch (e) {};
        var a = document.getElementById("\x63\x6F\x6F\x6B\x69\x65\x42\x61\x72");
        if (a) {
            a.src =
                "\x2F\x2F\x63\x64\x6E\x2E\x34\x33\x39\x39\x2E\x63\x6F\x6D\x2F\x63\x6F\x6F\x6B\x69\x65\x2F\x3F\x6C\x61\x6E\x67\x3D" +
                escape(b)
        }
    }
    function o() {
        var a = location.hostname,
            b, c = (parent === window) ? null : document.referrer;
        if (c !== null) {
            a = c
        } else {
            if (document.referrer) {
                a = document.referrer
            }
        };
        a = a.replace(/^https?:\/\//i, "").replace(/^(www|dev)\./, "");
        b = a.indexOf("\x2F");
        if (b != -1) {
            a = a.substr(0, b)
        };
        return a
    }
    function p(l, m, n, g, j) {
        this.closePopup();
        n = n || 400;
        g = g || 300;
        if (typeof (j) == "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64") {
            j = true
        };
        var o = document.createElement("\x64\x69\x76"),
            f = document.createElement("\x64\x69\x76"),
            d = document.documentElement.clientWidth,
            a = document.documentElement.clientHeight,
            i = !GameLib.isTouch && (window.devicePixelRatio === undefined || window.devicePixelRatio === 1) && screen.width >
                1000,
            h = [],
            c = -15;
        if (!j && !i) {
            n = d - 32;
            g = a - 32;
            c = 0
        };
        f.className = "\x70\x6F\x70\x75\x70";
        o.className = "\x70\x6F\x70\x75\x70\x57\x72\x61\x70";
        o.onclick = function (a) {
            GameLib.closePopup();
            a.stopPropagation()
        };
        GameLib.popup = o;
        var k = "\x77\x69\x64\x74\x68\x3A" + n + "\x70\x78\x3B\x68\x65\x69\x67\x68\x74\x3A" + g +
            "\x70\x78\x3B\x6D\x61\x72\x67\x69\x6E\x2D\x6C\x65\x66\x74\x3A\x2D" + (n / 2) +
            "\x70\x78\x3B\x6D\x61\x72\x67\x69\x6E\x2D\x74\x6F\x70\x3A\x2D" + (g / 2) + "\x70\x78\x3B";
        if (j) {
            k += "\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D\x3A\x73\x63\x61\x6C\x65\x28" + GameLib.scale +
                "\x29\x3B\x2D\x77\x65\x62\x6B\x69\x74\x2D\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D\x3A\x73\x63\x61\x6C\x65\x28" +
                GameLib.scale +
                "\x29\x3B\x2D\x6D\x73\x2D\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D\x3A\x73\x63\x61\x6C\x65\x28" + GameLib.scale +
                "\x29"
        };
        f.setAttribute("\x73\x74\x79\x6C\x65", k);
        o.appendChild(f);
        if (l) {
            g -= 32;
            h.push("\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x74\x69\x74\x6C\x65\x22\x3E" + l +
                "\x3C\x2F\x64\x69\x76\x3E")
        };
        var b = /\.html$/.test(m) || /^https?:\/\//.test(m) ? "\x3C\x69\x66\x72\x61\x6D\x65\x20\x73\x72\x63\x3D\x22" +
            m +
            "\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x64\x69\x73\x70\x6C\x61\x79\x3A\x62\x6C\x6F\x63\x6B\x3B\x77\x69\x64\x74\x68\x3A" +
            n + "\x70\x78\x3B\x68\x65\x69\x67\x68\x74\x3A" + g +
            "\x70\x78\x22\x20\x66\x72\x61\x6D\x65\x62\x6F\x72\x64\x65\x72\x3D\x22\x30\x22\x3E\x3C\x2F\x69\x66\x72\x61\x6D\x65\x3E" :
            "\x3C\x64\x69\x76\x20\x73\x74\x79\x6C\x65\x3D\x22\x70\x61\x64\x64\x69\x6E\x67\x3A\x35\x70\x78\x20\x31\x30\x70\x78\x22\x3E" +
            m + "\x3C\x2F\x64\x69\x76\x3E";
        h.push(
            "\x3C\x64\x69\x76\x20\x73\x74\x79\x6C\x65\x3D\x22\x6F\x76\x65\x72\x66\x6C\x6F\x77\x3A\x61\x75\x74\x6F\x3B\x6F\x76\x65\x72\x66\x6C\x6F\x77\x2D\x78\x3A\x68\x69\x64\x64\x65\x6E\x3B\x2D\x77\x65\x62\x6B\x69\x74\x2D\x6F\x76\x65\x72\x66\x6C\x6F\x77\x2D\x73\x63\x72\x6F\x6C\x6C\x69\x6E\x67\x3A\x74\x6F\x75\x63\x68\x3B\x77\x69\x64\x74\x68\x3A" +
            n + "\x70\x78\x3B\x68\x65\x69\x67\x68\x74\x3A" + g + "\x70\x78\x22\x3E" + b + "\x3C\x2F\x64\x69\x76\x3E",
            "\x3C\x69\x6D\x67\x20\x73\x72\x63\x3D\x22\x69\x6D\x67\x2F\x63\x6C\x6F\x73\x65\x2E\x70\x6E\x67\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x63\x6C\x6F\x73\x65\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x72\x69\x67\x68\x74\x3A" +
            c + "\x70\x78\x3B\x74\x6F\x70\x3A" + c +
            "\x70\x78\x22\x20\x6F\x6E\x63\x6C\x69\x63\x6B\x3D\x22\x47\x61\x6D\x65\x4C\x69\x62\x2E\x63\x6C\x6F\x73\x65\x50\x6F\x70\x75\x70\x28\x29\x22\x3E");
        f.innerHTML = h.join("");
        document.body.appendChild(o);
        return false
    }
    function q() {
        if (this.popup) {
            this.popup.parentNode.removeChild(this.popup);
            this.popup = null
        }
    }
    function r(b, n, f) {
        var j = document.getElementById("\x72\x6F\x74\x61\x74\x65\x48\x69\x6E\x74"),
            m = Math.min(document.documentElement.clientWidth, window.innerWidth),
            l = Math.min(document.documentElement.clientHeight, window.innerHeight),
            g = m > l,
            d = n || m,
            c = f || l;
        if (GameLib.scalable) {
            GameLib.scale = Math.min(d / GameLib.gameWidth, c / GameLib.gameHeight);
            GameLib.containerDiv.style.webkitTransform = GameLib.containerDiv.style.msTransform = GameLib.containerDiv.style
                .transform = "\x73\x63\x61\x6C\x65\x28" + GameLib.scale + "\x29"
        } else {
            var k = document.querySelector(
                "\x6D\x65\x74\x61\x5B\x6E\x61\x6D\x65\x3D\x76\x69\x65\x77\x70\x6F\x72\x74\x5D"),
                a = "\x77\x69\x64\x74\x68\x3D" + GameLib.gameWidth;
            if (g && GameLib.gameHeight > window.innerHeight && GameLib.gameWidth <= m) {
                a = "\x68\x65\x69\x67\x68\x74\x3D" + GameLib.gameHeight
            };
            k.setAttribute("\x63\x6F\x6E\x74\x65\x6E\x74",
                "\x6D\x69\x6E\x69\x6D\x61\x6C\x2D\x75\x69\x2C\x75\x73\x65\x72\x2D\x73\x63\x61\x6C\x61\x62\x6C\x65\x3D\x30\x2C" +
                a)
        }; if (ThirdParty.showRotateHint) {
            var i = GameConfig.orientation || "\x6C\x61\x6E\x64\x73\x63\x61\x70\x65";
            j.style.display = GameLib.isTouch && ((i == "\x6C\x61\x6E\x64\x73\x63\x61\x70\x65" && !g) || (i ==
                "\x70\x6F\x72\x74\x72\x61\x69\x74" && g)) ? "\x62\x6C\x6F\x63\x6B" : "\x6E\x6F\x6E\x65"
        };
        if (ThirdParty.centerHorizontally) {
            var h = GameLib.scale * GameLib.gameWidth < m ? (m - GameLib.scale * GameLib.gameWidth) / 2 : 0;
            GameLib.containerDiv.style.marginLeft = h + "\x70\x78"
        };
        if (ThirdParty.centerVertically) {
            var h = GameLib.scale * GameLib.gameHeight <= l ? (l - GameLib.scale * GameLib.gameHeight) / 2 : 0;
            GameLib.containerDiv.style.marginTop = h + "\x70\x78"
        };
        if (GameLib.iOSversion) {
            window.scrollTo(0, -64)
        }
    }
    function s(a) {
        return this.storageJar[a] !== undefined ? this.storageJar[a] : false
    }
    function t(a, b) {
        if (typeof a === "\x6F\x62\x6A\x65\x63\x74") {
            for (var c in a) {
                if (null === a[c]) {
                    delete this.storageJar[c]
                } else {
                    this.storageJar[c] = a[c]
                }
            }
        } else {
            if (null === b) {
                delete this.storageJar[a]
            } else {
                this.storageJar[a] = b
            }
        };
        this.saveStorage()
    }
    function u() {
        localStorage.setItem(this.gameName, JSON.stringify(this.storageJar))
    }
    function v(d, k, f) {
        if (/debug/.test(location.search)) {
            window.onerror = function (b, c, a) {
                alert("\x45\x72\x72\x6F\x72\x20\x69\x6E\x20\x6C\x69\x6E\x65\x20" + a + "\x20\x6F\x66\x20" + c +
                    "\x3A\x0A" + b)
            }
        } else {
            document.addEventListener("\x63\x6F\x6E\x74\x65\x78\x74\x6D\x65\x6E\x75", function (a) {
                a.preventDefault()
            }, false)
        };
        GameLib.gameName = d;
        GameLib.gameWidth = k;
        GameLib.gameHeight = f;
        document.getElementById("\x72\x6F\x74\x61\x74\x65\x48\x69\x6E\x74").addEventListener("\x63\x6C\x69\x63\x6B", function () {
            this.style.display = "\x6E\x6F\x6E\x65"
        });
        var a = GameLib.$_GET("\x62\x67\x63\x6F\x6C\x6F\x72");
        if (false !== a) {
            document.documentElement.style.backgroundColor = a;
            document.documentElement.style.backgroundImage = "\x6E\x6F\x6E\x65"
        } else {
            if (ThirdParty.background) {
                document.documentElement.style.background = /([\.\/])/.test(ThirdParty.background) ? "\x75\x72\x6C\x28" +
                    ThirdParty.background + "\x29" : ThirdParty.background
            }
        };
        GameLib.containerDiv = document.getElementById("\x67\x61\x6D\x65\x43\x6F\x6E\x74\x61\x69\x6E\x65\x72");
        GameLib.containerDiv.style.width = k + "\x70\x78";
        GameLib.containerDiv.style.height = f + "\x70\x78";
        if (/noscale/.test(location.search)) {
            GameLib.scalable = false;
            if (GameLib.isIE) {
                var h = document.createElement("\x73\x74\x79\x6C\x65");
                h.appendChild(document.createTextNode(
                    "\x40\x2D\x6D\x73\x2D\x76\x69\x65\x77\x70\x6F\x72\x74\x7B\x77\x69\x64\x74\x68\x3A" + k +
                    "\x70\x78\x3B\x20\x68\x65\x69\x67\x68\x74\x3A" + f + "\x70\x78\x7D"));
                document.querySelector("\x68\x65\x61\x64").appendChild(h)
            }
        };
        try {
            var g = "\x74\x65\x73\x74";
            localStorage.setItem(g, g);
            localStorage.removeItem(g)
        } catch (e) {
            this.showPopup("\x50\x72\x69\x76\x61\x74\x65\x20\x42\x72\x6F\x77\x73\x69\x6E\x67",
                "\x59\x6F\x75\x20\x73\x65\x65\x6D\x20\x74\x6F\x20\x62\x65\x20\x62\x72\x6F\x77\x73\x69\x6E\x67\x20\x69\x6E\x20\x70\x72\x69\x76\x61\x74\x65\x20\x6D\x6F\x64\x65\x2E\x20\x54\x68\x69\x73\x20\x67\x61\x6D\x65\x20\x64\x6F\x65\x73\x20\x6E\x6F\x74\x20\x77\x6F\x72\x6B\x20\x69\x6E\x20\x70\x72\x69\x76\x61\x74\x65\x20\x6D\x6F\x64\x65\x2C\x20\x77\x68\x69\x6C\x65\x20\x77\x65\x20\x63\x61\x6E\x6E\x6F\x74\x20\x75\x73\x65\x20\x6C\x6F\x63\x61\x6C\x20\x73\x74\x6F\x72\x61\x67\x65\x20\x66\x6F\x72\x20\x73\x74\x6F\x72\x69\x6E\x67\x20\x79\x6F\x75\x72\x20\x73\x63\x6F\x72\x65\x2C\x20\x70\x72\x6F\x67\x72\x65\x73\x73\x20\x65\x74\x63\x2E\x3C\x62\x72\x3E\x50\x6C\x65\x61\x73\x65\x20\x72\x75\x6E\x20\x74\x68\x69\x73\x20\x67\x61\x6D\x65\x20\x69\x6E\x20\x61\x20\x72\x65\x67\x75\x6C\x61\x72\x20\x28\x6E\x6F\x6E\x2D\x70\x72\x69\x76\x61\x74\x65\x29\x20\x62\x72\x6F\x77\x73\x65\x72\x20\x77\x69\x6E\x64\x6F\x77\x2E",
                300, 200)
        };
        var j = localStorage.getItem(this.gameName);
        if (null !== j) {
            this.storageJar = JSON.parse(j)
        };
        this.setStorage("\x67\x61\x6D\x65\x4F\x76\x65\x72", null);
        if (this.iOSversion && this.iOSversion[0] >= 7 && this.iOSversion[1] >= 1) {
            document.addEventListener("\x74\x6F\x75\x63\x68\x6D\x6F\x76\x65", function (a) {
                a.preventDefault()
            }, false)
        };
        window.addEventListener("\x69\x64\x6C\x65", function () {
            GameSound.setIdle(true)
        }, false);
        window.addEventListener("\x77\x61\x6B\x65\x75\x70", function () {
            GameSound.setIdle(false)
        }, false);
        window.addEventListener(GameLib.iOSversion ?
            "\x6F\x72\x69\x65\x6E\x74\x61\x74\x69\x6F\x6E\x63\x68\x61\x6E\x67\x65" : "\x72\x65\x73\x69\x7A\x65",
            GameLib.scaleGame, false);
        var b = document.createEvent("\x45\x76\x65\x6E\x74");
        b.initEvent("\x67\x61\x6D\x65\x72\x65\x61\x64\x79", true, true);
        b.gameName = d;
        document.dispatchEvent(b);
        GameLib.scaleGame();
        orderInit(1);
        if (GameLib.IEversion && GameLib.IEversion < 10) {
            this.showPopup("\x4F\x6C\x64\x20\x49\x6E\x74\x65\x72\x6E\x65\x74\x20\x45\x78\x70\x6C\x6F\x72\x65\x72",
                "\x59\x6F\x75\x20\x61\x72\x65\x20\x75\x73\x69\x6E\x67\x20\x61\x20\x72\x61\x74\x68\x65\x72\x20\x6F\x6C\x64\x20\x76\x65\x72\x73\x69\x6F\x6E\x20\x6F\x66\x20\x49\x6E\x74\x65\x72\x6E\x65\x74\x20\x45\x78\x70\x6C\x6F\x72\x65\x72\x20\x28\x76\x65\x72\x73\x69\x6F\x6E\x20" +
                GameLib.IEversion +
                "\x29\x2E\x3C\x62\x72\x3E\x54\x68\x69\x73\x20\x67\x61\x6D\x65\x20\x6D\x69\x67\x68\x74\x20\x6F\x72\x20\x6D\x69\x67\x68\x74\x20\x6E\x6F\x74\x20\x77\x6F\x72\x6B\x2E\x20\x57\x65\x20\x73\x74\x72\x6F\x6E\x67\x6C\x79\x20\x61\x64\x76\x69\x73\x65\x20\x79\x6F\x75\x20\x74\x6F\x20\x75\x70\x67\x72\x61\x64\x65\x20\x74\x6F\x20\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x68\x74\x74\x70\x3A\x2F\x2F\x77\x69\x6E\x64\x6F\x77\x73\x2E\x6D\x69\x63\x72\x6F\x73\x6F\x66\x74\x2E\x63\x6F\x6D\x2F\x65\x6E\x2D\x75\x73\x2F\x69\x6E\x74\x65\x72\x6E\x65\x74\x2D\x65\x78\x70\x6C\x6F\x72\x65\x72\x2F\x69\x65\x2D\x31\x31\x2D\x77\x6F\x72\x6C\x64\x77\x69\x64\x65\x2D\x6C\x61\x6E\x67\x75\x61\x67\x65\x73\x22\x20\x74\x61\x72\x67\x65\x74\x3D\x22\x5F\x62\x6C\x61\x6E\x6B\x22\x3E\x49\x6E\x74\x65\x72\x6E\x65\x74\x20\x45\x78\x70\x6C\x6F\x72\x65\x72\x20\x31\x30\x3C\x2F\x61\x3E\x20\x6F\x72\x20\x62\x65\x74\x74\x65\x72\x2E\x3C\x62\x72\x3E\x41\x6C\x74\x65\x72\x6E\x61\x74\x69\x76\x65\x6C\x79\x2C\x20\x79\x6F\x75\x20\x63\x61\x6E\x20\x75\x73\x65\x20\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x68\x74\x74\x70\x3A\x2F\x2F\x67\x65\x74\x66\x69\x72\x65\x66\x6F\x78\x2E\x63\x6F\x6D\x2F\x22\x20\x74\x61\x72\x67\x65\x74\x3D\x22\x5F\x62\x6C\x61\x6E\x6B\x22\x3E\x46\x69\x72\x65\x66\x6F\x78\x3C\x2F\x61\x3E\x2C\x20\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x68\x74\x74\x70\x3A\x2F\x2F\x67\x6F\x6F\x67\x6C\x65\x2E\x63\x6F\x6D\x2F\x63\x68\x72\x6F\x6D\x65\x2F\x22\x20\x74\x61\x72\x67\x65\x74\x3D\x22\x5F\x62\x6C\x61\x6E\x6B\x22\x3E\x43\x68\x72\x6F\x6D\x65\x3C\x2F\x61\x3E\x2C\x20\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x68\x74\x74\x70\x3A\x2F\x2F\x61\x70\x70\x6C\x65\x2E\x63\x6F\x6D\x2F\x73\x61\x66\x61\x72\x69\x2F\x22\x20\x74\x61\x72\x67\x65\x74\x3D\x22\x5F\x62\x6C\x61\x6E\x6B\x22\x3E\x53\x61\x66\x61\x72\x69\x3C\x2F\x61\x3E\x20\x6F\x72\x20\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x68\x74\x74\x70\x3A\x2F\x2F\x6F\x70\x65\x72\x61\x2E\x63\x6F\x6D\x2F\x62\x72\x6F\x77\x73\x65\x72\x22\x20\x74\x61\x72\x67\x65\x74\x3D\x22\x5F\x62\x6C\x61\x6E\x6B\x22\x3E\x4F\x70\x65\x72\x61\x3C\x2F\x61\x3E\x2E",
                300, 200)
        };
        if (GameLib.iOSversion && GameLib.iOSversion[0] < 6) {
            alert(
                "\x54\x68\x69\x73\x20\x67\x61\x6D\x65\x20\x69\x73\x20\x69\x6E\x63\x6F\x6D\x70\x61\x74\x69\x62\x6C\x65\x20\x77\x69\x74\x68\x20\x79\x6F\x75\x72\x20\x64\x65\x76\x69\x63\x65\x2E\x20\x50\x6C\x65\x61\x73\x65\x20\x75\x70\x67\x72\x61\x64\x65\x20\x74\x6F\x20\x69\x4F\x53\x36\x20\x6F\x72\x20\x6E\x65\x77\x65\x72\x2E")
        };
        if (/iP(od|hone)/.test(navigator.userAgent) && !navigator.standalone) {
            GameLib.windowHeight = window.innerHeight;
            setInterval(function () {
                if (window.innerHeight != GameLib.windowHeight) {
                    GameLib.windowHeight = window.innerHeight;
                    GameLib.scaleGame()
                }
            }, 500)
        };
        var i = (ThirdParty.showCookieBar !== false);
        if (i && window.zygomatic && window.zygomatic.settings[
            "\x73\x6B\x69\x70\x43\x6F\x6F\x6B\x69\x65\x43\x6F\x6E\x73\x65\x6E\x74\x44\x6F\x6D\x61\x69\x6E\x73"]) {
            i = ("\x2C" + window.zygomatic.settings[
                "\x73\x6B\x69\x70\x43\x6F\x6F\x6B\x69\x65\x43\x6F\x6E\x73\x65\x6E\x74\x44\x6F\x6D\x61\x69\x6E\x73"].join(
                "\x2C") + "\x2C").indexOf("\x2C" + GameLib.getHostDomain() + "\x2C") === -1
        };
        if (i) {
            var c = document.createElement("\x69\x66\x72\x61\x6D\x65");
            c.setAttribute("\x66\x72\x61\x6D\x65\x62\x6F\x72\x64\x65\x72", 0);
            c.id = "\x63\x6F\x6F\x6B\x69\x65\x42\x61\x72";
            c.src =
                "\x2F\x2F\x63\x64\x6E\x2E\x34\x33\x39\x39\x2E\x63\x6F\x6D\x2F\x63\x6F\x6F\x6B\x69\x65\x2F\x3F\x6C\x61\x6E\x67\x3D" +
                escape(GameLib.getLang());
            document.body.appendChild(c);
            window.addEventListener("\x6D\x65\x73\x73\x61\x67\x65", function (a) {
                switch (a.data) {
                case "\x63\x6F\x6F\x6B\x69\x65\x63\x6F\x6E\x73\x65\x6E\x74\x3D\x66\x61\x6C\x73\x65":
                    c.style.display = "\x62\x6C\x6F\x63\x6B";
                    break;
                case "\x63\x6F\x6F\x6B\x69\x65\x63\x6F\x6E\x73\x65\x6E\x74\x3D\x74\x72\x75\x65":
                    c.style.display = "\x6E\x6F\x6E\x65";
                    break
                }
            })
        };
        window.focus()
    }
    function w(d, f, c, a) {
        var b = document.createElement("\x64\x69\x76");
        b.style.position = "\x72\x65\x6C\x61\x74\x69\x76\x65";
        b.style.display = "\x6E\x6F\x6E\x65";
        b.style.left = d + "\x70\x78";
        b.style.top = f + "\x70\x78";
        c.appendChild(b);
        a.push(b);
        return b
    }
    function x(g, h, f, b, d, a) {
        var c = document.createElement("\x43\x61\x6E\x76\x61\x73");
        a.push(c);
        c.style.position = "\x61\x62\x73\x6F\x6C\x75\x74\x65";
        c.style.left = g + "\x70\x78";
        c.style.top = h + "\x70\x78";
        c.width = f;
        c.height = b;
        c.draggable = false;
        d.appendChild(c);
        return c
    }
    function y(d, f, g, c, a) {
        var b = loadRec.resource[d];
        b.style.position = "\x61\x62\x73\x6F\x6C\x75\x74\x65";
        b.style.left = f + "\x70\x78";
        b.style.top = g + "\x70\x78";
        b.draggable = false;
        c.appendChild(b);
        a.push(b);
        return b
    }
    function z(g, h, f, c, d, a) {
        var b = document.createElement("\x64\x69\x76");
        b.className = "\x6E\x75\x6D\x62\x65\x72";
        b.style.left = g + "\x70\x78";
        b.style.top = h + "\x70\x78";
        b.style.width = f + "\x70\x78";
        b.style.height = c + "\x70\x78";
        d.appendChild(b);
        a.push(b);
        return b
    }
    function A(d, f, c, a) {
        var b = document.createElement("\x64\x69\x76");
        b.className = "\x72\x65\x6D\x44\x69\x76";
        b.style.backgroundImage = "\x75\x72\x6C\x28" + loadRec.resource["\x72\x65\x6D"].src + "\x29";
        b.style.left = d + "\x70\x78";
        b.style.top = f + "\x70\x78";
        c.appendChild(b);
        a.push(b);
        return b
    }
    function B(d, f, c, a) {
        var b = document.createElement("\x64\x69\x76");
        b.className = "\x72\x65\x6D\x44\x69\x76";
        b.style.backgroundImage = "\x75\x72\x6C\x28" + loadRec.resource["\x72\x65\x6D\x30"].src + "\x29";
        b.style.left = d + "\x70\x78";
        b.style.top = f + "\x70\x78";
        c.appendChild(b);
        a.push(b);
        return b
    }
    function C(d, f, b, a) {
        var c = document.createElement("\x64\x69\x76");
        c.style.left = d + "\x70\x78";
        c.style.top = f + "\x70\x78";
        c.className = "\x6E\x75\x6D\x62\x65\x72";
        b.appendChild(c);
        a.push(c);
        return c
    }
    function D(b) {
        Hammer(b).on("\x64\x72\x61\x67\x65\x6E\x64", c);
        Hammer(b).on("\x72\x65\x6C\x65\x61\x73\x65", c);
        Hammer(b).on("\x74\x6F\x75\x63\x68", a);
        b.xxxx563 = parseFloat(b.style.left);
        b.yyyy563 = parseFloat(b.style.top);
 
        function c() {
            b.style.left = b.xxxx563 + "\x70\x78";
            b.style.top = b.yyyy563 + "\x70\x78"
        }
        function a() {
            b.style.left = (b.xxxx563 + 1) + "\x70\x78";
            b.style.top = (b.yyyy563 + 1) + "\x70\x78"
        }
    }
    function E(f, g, h, d, a) {
        var c = loadRec.resource[f];
        var b = new Image();
        b.src = c.src;
        a.push(b);
        b.style.position = "\x61\x62\x73\x6F\x6C\x75\x74\x65";
        b.style.left = g + "\x70\x78";
        b.style.top = h + "\x70\x78";
        b.style.cursor = "\x70\x6F\x69\x6E\x74\x65\x72";
        b.draggable = false;
        d.appendChild(b);
        b.onmouseover = function (a) {
            b.style.top = (h - 1) + "\x70\x78"
        };
        b.onmouseout = function (a) {
            b.style.top = h + "\x70\x78"
        };
        return b
    }
    function F(g, i, j, h, d, a, k, f, b) {
        var c = document.createElement("\x64\x69\x76");
        c.className = "\x72\x65\x6D\x44\x69\x76";
        c.style.left = i + "\x70\x78";
        c.style.top = j + "\x70\x78";
        c.style.backgroundImage = "\x75\x72\x6C\x28" + loadRec.resource[g].src + "\x29";
        c.ww = h;
        c.style.width = h + "\x70\x78";
        c.style.height = d + "\x70\x78";
        c.style.backgroundSize = a * h + "\x70\x78\x20" + d + "\x70\x78";
        c.style.backgroundPosition = a * h + "\x70\x78\x20\x30\x70\x78";
        c.idid = a;
        c.idid_ = a;
        c.style.zIndex = k;
        f.appendChild(c);
        if (b) {
            b.push(c)
        };
        return c
    }
    function G(h, b, j, k, i, c, g, a, l) {
        var f;
        var d = loadRec.resource[h];
        if (b) {
            f = b
        } else {
            f = document.createElement("\x69\x6D\x67")
        };
        f.className = "\x6D\x61\x68\x6A\x6F\x6E\x67\x5F\x63\x73\x73";
        f.draggable = false;
        f.src = d.src;
        if (i > 0 && c > 0) {
            f.width = d.width;
            f.height = d.height;
            f.style.width = i + "\x70\x78";
            f.style.height = c + "\x70\x78"
        };
        f.style.left = j + "\x70\x78";
        f.style.top = k + "\x70\x78";
        if (l) {
            f.style.zIndex = l
        };
        if (g) {
            g.appendChild(f)
        };
        if (a) {
            a.push(f)
        };
        return f
    }
    function H(b) {
        var a = new Array;
        var c;
        while (b.length > 0) {
            c = Math.floor(b.length * Math.random());
            a.push(b[c]);
            b.splice(c, 1)
        };
        return a
    }
    function I(a, b) {
        if (a) {
            a.style.webkitTransform = "\x72\x6F\x74\x61\x74\x65\x28" + b + "\x64\x65\x67\x29";
            a.style.MozTransform = "\x72\x6F\x74\x61\x74\x65\x28" + b + "\x64\x65\x67\x29";
            a.style.OTransform = "\x72\x6F\x74\x61\x74\x65\x28" + b + "\x64\x65\x67\x29";
            a.style.msTransform = "\x72\x6F\x74\x61\x74\x65\x28" + b + "\x64\x65\x67\x29";
            a.style.transform = "\x72\x6F\x74\x61\x74\x65\x28" + b + "\x64\x65\x67\x29"
        }
    }
    function J(a, b, c) {
        if (a) {
            a.style.webkitTransform = "\x73\x63\x61\x6C\x65\x28" + b + "\x2C" + c + "\x29";
            a.style.MozTransform = "\x73\x63\x61\x6C\x65\x28" + b + "\x2C" + c + "\x29";
            a.style.OTransform = "\x73\x63\x61\x6C\x65\x28" + b + "\x2C" + c + "\x29";
            a.style.msTransform = "\x73\x63\x61\x6C\x65\x28" + b + "\x2C" + c + "\x29";
            a.style.transform = "\x73\x63\x61\x6C\x65\x28" + b + "\x2C" + c + "\x29"
        }
    }
    function K() {
        var a = new Image();
        if (typeof ThirdParty.splashScreen !== "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64") {
            a.src = ThirdParty.splashScreen
        } else {
            a.src = "\x69\x6D\x67\x2F\x6C\x6F\x61\x64\x69\x6E\x67\x2E\x6A\x70\x67"
        };
        a.className = "\x62\x61\x63\x6B\x50\x6F\x73";
        gameContainer.appendChild(a);
        this.data.push(a);
        a.onload = function () {
            var a = document.createElement("\x64\x69\x76");
            a.className = "\x70\x72\x6F\x67\x72\x65\x73\x73\x62\x61\x72";
            a.innerHTML =
                "\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x6C\x6F\x61\x64\x50\x65\x72\x63\x22\x3E\x3C\x2F\x64\x69\x76\x3E";
            gameContainer.appendChild(a);
            loadRec.data.push(a);
            loadRec.loadPerc = document.getElementById("\x6C\x6F\x61\x64\x50\x65\x72\x63");
            loadRec.preload(function () {
                orderInit(2);
                loadRec.remAll();
                ThirdParty.loadingComplete()
            })
        }
    }
    function L(b) {
        var a = 0,
            c = 0,
            h = 0,
            g = 0,
            i = 0;
        if (loadRec.images && loadRec.images.length > 0) {
            h = loadRec.images.length
        };
        if (loadRec.fonts && loadRec.fonts.length > 0) {
            g = loadRec.fonts.length
        };
        i = h + g;
 
        function d(b) {
            if (g == 0) {
                if (b) {
                    b()
                };
                return
            };
            WebFont.load({
                custom: {
                    families: loadRec.fonts
                },
                timeout: 1500,
                fontactive: function () {
                    loadRec.loadPerc.style.width = Math.floor(++a * 100 / i) + "\x25";
                    // h5api.progress(Math.floor(a * 100 / i), Math.floor(a * 100 / i) + "\x25")
                },
                fontinactive: function (a) {
                    alert(
                        "\x45\x52\x52\x4F\x52\x3A\x20\x46\x6F\x6E\x74\x20\x6E\x6F\x74\x20\x66\x6F\x75\x6E\x64\x3A\x20" +
                        a)
                },
                active: function () {
                    if (b) {
                        b()
                    }
                }
            })
        }
        function f(b) {
            var d = new Image();
            d.onload = function () {
                loadRec.loadPerc.style.width = Math.floor(++a * 100 / i) + "\x25";
                // h5api.progress(Math.floor(a * 100 / i), Math.floor(a * 100 / i) + "\x25");
                if (a < h) {
                    f(b)
                } else {
                    if (b) {
                        b()
                    }
                }
            };
            d.onerror = function (a) {
                alert(
                    "\x45\x52\x52\x4F\x52\x3A\x20\x49\x6D\x61\x67\x65\x20\x6E\x6F\x74\x20\x66\x6F\x75\x6E\x64\x3A\x20" +
                    a.target.src)
            };
            loadRec.resource[loadRec.images[c].id] = d;
            d.src = loadRec.images[c++].src
        }
        f(function () {
            d(b)
        })
    }
    function M() {
        while (this.data.length > 0) {
            var a = this.data.pop();
            if (a && a.parentNode) {
                a.parentNode.removeChild(a)
            }
        }
    }
    function N() {
        GameSound.stopMusic();
        CreateGame.CreatedImg("\x6D\x61\x70\x5F\x62\x61\x63\x6B", 0, 0, gameContainer, this.data);
        this.divSelect = CreateGame.CreatedDiv(0, 0, gameContainer, this.data);
        this.divSelect.style.display = "";
        var c = languageUI.getButton("\x64\x5F\x4D\x65\x6E\x75", 250, 52, 18, 412, 210, 38, 20, 7, true, gameContainer,
            this.data, "\x62\x75\x74\x74\x6F\x6E", "\x63\x65\x6E\x74\x65\x72", 22, "\x62\x74\x6E\x75\x6D\x62\x65\x72");
        Hammer(c).on("\x74\x61\x70", function (a) {
            orderInit(2);
            gameMap.remAll()
        });
        this.divSelect.menu = c;
        c = CreateGame.getImg("\x62\x74\x34", null, 702, 222, 45, 67, gameContainer, this.data, 10);
        c = CreateGame.getImg("\x62\x74\x32", null, 702, 222, 45, 67, gameContainer, this.data, 10);
        Hammer(c).on("\x74\x61\x70", function (a) {
            var b = GameConfig.dataArr.length;
            if (b % 10 == 0) {
                b--
            };
            if (gameMap.page < Math.floor((b - 1) / 10)) {
                gameMap.page++;
                gameMap.showPage()
            }
        });
        this.divSelect.next = c;
        c = CreateGame.getImg("\x62\x74\x33", null, 53, 222, 45, 67, gameContainer, this.data, 10);
        c = CreateGame.getImg("\x62\x74\x31", null, 53, 222, 45, 67, gameContainer, this.data, 10);
        Hammer(c).on("\x74\x61\x70", function (a) {
            if (gameMap.page > 0) {
                gameMap.page--;
                gameMap.showPage()
            }
        });
        this.divSelect.pre = c;
        this.txtSelect = CreateGame.CreatedShowNumber(360, 102, 80, 24, gameContainer, this.data);
        this.txtSelect.innerHTML = "\x32\x2F\x32";
        this.txtSelect.style.display = "\x6E\x6F\x6E\x65";
        this.txtPage = CreateGame.CreatedShowNumber(360, 102, 80, 24, gameContainer, this.data);
        this.txtPage.innerHTML = "\x2F";
        var f = 0;
        var d = GameLib.getStorage("\x6C\x65\x76\x65\x6C");
        var a = GameLib.getStorage("\x73\x63\x6F\x72\x65");
        if (false === d) {
            d = 1
        };
        if (d > 1 && a && a.length == GameConfig.dataArr.length) {
            for (var b = 0; b < a.length; b++) {
                f += a[b][0]
            }
        } else {
            d = 1;
            a = [];
            for (b = 0; b < GameConfig.dataArr.length; b++) {
                a.push([0, 100000])
            }
        }; if (d == 1) {
            this.page = 0
        };
        if (d % 10 == 1 && d > this.level_ && d > 10) {
            this.page++
        };
        if (this.level_ == -100) {
            this.page = Math.floor((d - 1) / 10)
        };
        if (GameConfig.dataArr.length % 10 == 0 && this.page >= Math.floor(GameConfig.dataArr.length / 10)) {
            this.page = Math.floor(GameConfig.dataArr.length / 10) - 1
        };
        this.level = d;
        this.level_ = d;
        languageUI.getButton("\x64\x5F\x54\x6F\x74\x61\x6C\x53\x63\x6F\x72\x65", 0, 0, 300, 404, 200, 40, 0, 0, false,
            gameContainer, this.data, "\x62\x75\x74\x74\x6F\x6E", "\x63\x65\x6E\x74\x65\x72", 28);
        var g = CreateGame.CreatedShowNumber(340, 448, 120, 30, gameContainer, this.data);
        g.innerHTML = "" + f;
        g.style.textAlign = "\x63\x65\x6E\x74\x65\x72";
        this.score = f;
        if (d <= GameConfig.dataArr.length) {
            c = languageUI.getButton("\x64\x5F\x50\x6C\x61\x79", 250, 52, 532, 412, 210, 38, 20, 7, true, gameContainer,
                this.data, "\x62\x75\x74\x74\x6F\x6E", "\x63\x65\x6E\x74\x65\x72", 22,
                "\x62\x74\x6E\x75\x6D\x62\x65\x72");
            Hammer(c).on("\x74\x61\x70", function (a) {
                GamePlay.showPlay(gameMap.level);
                gameMap.remAll()
            })
        } else {
            c = languageUI.getButton("\x64\x5F\x45\x6E\x64\x67\x61\x6D\x65", 250, 52, 532, 412, 210, 38, 20, 7, true,
                gameContainer, this.data, "\x62\x75\x74\x74\x6F\x6E", "\x63\x65\x6E\x74\x65\x72", 22,
                "\x62\x74\x6E\x75\x6D\x62\x65\x72");
            Hammer(c).on("\x74\x61\x70", function (a) {
                GameOver.showOver();
                gameMap.remAll()
            })
        };
        languageUI.scaleTexts();
        this.timeArr = a;
        this.div_all = CreateGame.CreatedDiv(165, 140, gameContainer, this.data);
        this.div_all.style.display = "";
        this.div_all.style.overflow = "\x68\x69\x64\x64\x65\x6E";
        this.div_all.style.width = "\x34\x36\x38\x70\x78";
        this.div_all.style.height = "\x32\x34\x30\x70\x78";
        this.div_all.style.position = "\x61\x62\x73\x6F\x6C\x75\x74\x65";
        this.div_all.style.zIndex = 1;
        Hammer(this.div_all).on("\x64\x72\x61\x67\x73\x74\x61\x72\x74", gameMap.dragDivEvent);
        Hammer(this.div_all).on("\x64\x72\x61\x67\x65\x6E\x64", gameMap.upDiv);
        Hammer(this.div_all).on("\x64\x72\x61\x67", gameMap.moveDiv);
        this.showPage();
        this.timeID = setInterval(this.onFrame, 2)
    }
    function O(c) {
        c.preventDefault();
        if (gameMap.isDown) {
            gameMap.clientX = c.gesture.center.clientX;
            var f = ((gameMap.clientX - gameMap.downX) / GameLib.scale);
            if (gameMap.page <= 0 && f > 0) {
                f = 0
            };
            d = GameConfig.dataArr.length;
            if (d % 10 == 0) {
                d--
            };
            if (gameMap.page >= Math.floor((d - 1) / 10) && f < 0) {
                f = 0
            };
            if (gameMap.divX < 0) {
                var a = 5 * 92
            } else {
                a = 0
            };
            for (var d = 0; d < gameMap.arrPage.length; d++) {
                var b = gameMap.arrPage[d];
                if (d % 10 < 5) {
                    b.style.left = (gameMap.divX + 92 * d + f + a) + "\x70\x78"
                } else {
                    b.style.left = (gameMap.divX + 92 * d + f - 92 * 5 + a) + "\x70\x78"
                }; if (d % 10 == 9) {
                    a -= 5 * 92
                }
            }
        }
    }
    function P(b) {
        b.preventDefault();
        if (gameMap.isDown) {
            gameMap.clientX = b.gesture.center.clientX;
            var d = ((gameMap.clientX - gameMap.downX) / GameLib.scale);
            if (gameMap.page <= 0 && d > 0) {
                d = 0
            };
            c = GameConfig.dataArr.length;
            if (c % 10 == 0) {
                c--
            };
            if (gameMap.page >= Math.floor((c - 1) / 10) && d < 0) {
                d = 0
            };
            if (d > 260) {
                for (c = 0; c < gameMap.arrPage.length; c++) {
                    a = gameMap.arrPage[c];
                    if (c % 10 < 5) {
                        a.style.left = (gameMap.divX + 92 * c + 92 * 10) + "\x70\x78"
                    } else {
                        a.style.left = (gameMap.divX + 92 * c + 92 * 5) + "\x70\x78"
                    }
                };
                gameMap.page--;
                gameMap.showPage()
            } else {
                if (d < -260) {
                    for (c = 0; c < gameMap.arrPage.length; c++) {
                        a = gameMap.arrPage[c];
                        if (c % 10 < 5) {
                            a.style.left = (gameMap.divX + 92 * c - 92 * 10) + "\x70\x78"
                        } else {
                            a.style.left = (gameMap.divX + 92 * c - 92 * 15) + "\x70\x78"
                        }
                    };
                    gameMap.page++;
                    gameMap.showPage()
                } else {
                    for (var c = 0; c < gameMap.arrPage.length; c++) {
                        var a = gameMap.arrPage[c];
                        if (c % 10 < 5) {
                            a.style.left = (gameMap.divX + 92 * c) + "\x70\x78"
                        } else {
                            a.style.left = (gameMap.divX + 92 * c - 92 * 5) + "\x70\x78"
                        }
                    }
                }
            }
        };
        gameMap.isDown = false
    }
    function Q(a) {
        a.preventDefault();
        if (gameMap.isDown == false && gameMap.xxxx >= 12) {
            gameMap.downX = a.gesture.center.clientX;
            gameMap.divX = parseInt(gameMap.arrPage[0].style.left);
            gameMap.isDown = true
        }
    }
    function R() {
        if (gameMap.mapSelect < gameMap.mapSelectAll && gameMap.xxxx < 10) {
            gameMap.showOnePage(gameMap.mapSelect + gameMap.page * 10)
        } else {
            if (gameMap.xxxx < 30) {
                if (gameMap.xxxx < 10) {
                    gameMap.showOnePage(10000)
                } else {
                    if (gameMap.xxxx < 20) {
                        if (gameMap.mapSelect + gameMap.page * 10 < GameConfig.dataArr.length) {
                            gameMap.showOnePage(gameMap.mapSelect + gameMap.page * 10)
                        } else {
                            gameMap.showOnePage(10000)
                        }; if (gameMap.xxxx == 19) {
                            gameMap.mapSelect = gameMap.mapSelect - 30
                        }
                    } else {
                        if (gameMap.mapSelect + gameMap.page * 10 >= 0) {
                            gameMap.showOnePage(gameMap.mapSelect + gameMap.page * 10)
                        } else {
                            gameMap.showOnePage(10000)
                        }
                    }
                }
            }
        };
        gameMap.xxxx++
    }
    function S() {
        while (gameMap.arrSelect.length > 0) {
            var a = gameMap.arrSelect.pop();
            if (a && a.parentNode) {
                a.parentNode.removeChild(a)
            }
        }
    }
    function T(b) {
        var d;
        var a, c, f;
        a = document.createElement("\x64\x69\x76");
        a.className = "\x6D\x61\x68\x6A\x6F\x6E\x67\x5F\x63\x73\x73";
        d = b % 10;
        if (gameMap.xxxx < 20) {
            a.style.left = (20 + 92 * gameMap.xxxx) + "\x70\x78";
            if (gameMap.xxxx % 10 < 5) {
                a.style.top = "\x31\x31\x70\x78"
            } else {
                a.style.left = (20 + 92 * gameMap.xxxx - 5 * 92 + "\x70\x78");
                a.style.top = "\x31\x32\x33\x70\x78"
            };
            c = this.arrPage[10 + gameMap.xxxx];
            if (c && c.parentNode) {
                c.parentNode.removeChild(c)
            };
            this.arrPage[10 + gameMap.xxxx] = a
        } else {
            a.style.left = (20 + 92 * gameMap.xxxx - 92 * 30) + "\x70\x78";
            if (gameMap.xxxx % 10 < 5) {
                a.style.top = "\x31\x31\x70\x78"
            } else {
                a.style.left = (20 + 92 * gameMap.xxxx - 92 * 35) + "\x70\x78";
                a.style.top = "\x31\x32\x33\x70\x78"
            };
            c = this.arrPage[gameMap.xxxx - 20];
            if (c && c.parentNode) {
                c.parentNode.removeChild(c)
            };
            this.arrPage[gameMap.xxxx - 20] = a
        }; if (b == 10000) {
            this.mapSelect++;
            return
        };
        if (b < this.level) {
            c = CreateGame.getImg("\x62\x74\x35", null, 0, 0, 66, 87, a, this.data);
            a.x_back = CreateGame.getImg("\x62\x74\x36", null, 0, 0, 66, 87, a, this.data);
            c = gameMap.getSelectDiv(b);
            a.appendChild(c);
            f = CreateGame.CreatedShowNumber(-10, 86, 80, 24, a, this.data);
            if (this.timeArr[b][0] == 0) {
                f.innerHTML = "\x2D\x2D"
            } else {
                f.innerHTML = this.timeArr[b][0]
            }; if (this.xxxx == 0) {
                this.willGo = b + 1;
                a.x_back.style.display = "";
                this.divShow = a
            } else {
                a.x_back.style.display = "\x6E\x6F\x6E\x65"
            };
            a.style.cursor = "\x70\x6F\x69\x6E\x74\x65\x72";
            f = CreateGame.CreatedShowNumber(10, 5, 40, 24, a, this.data)
        } else {
            c = CreateGame.getImg("\x62\x74\x37", null, 0, 0, 66, 87, a, this.data);
            f = CreateGame.CreatedShowNumber(10, 35, 40, 30, a, this.data)
        };
        f.innerHTML = (b + 1);
        a.idid = b + 1;
        this.arrSelect.push(a);
        this.div_all.appendChild(a);
        this.mapSelect++;
        this.txtSelect.innerHTML = this.mapSelect + "\x2F" + this.mapSelectAll;
        if (this.mapSelect == this.mapSelectAll) {
            this.showPageOk()
        };
        c = document.createElement("\x69\x6D\x67");
        c.className = "\x6D\x61\x68\x6A\x6F\x6E\x67\x5F\x63\x73\x73";
        c.src = loadRec.resource["\x6E\x6F\x6E\x6F"].src;
        c.draggable = false;
        c.idid = b + 1;
        c.style.width = "\x36\x30\x70\x78";
        c.style.height = "\x38\x37\x70\x78";
        c.x_back = a.x_back;
        a.appendChild(c);
        Hammer(c).on("\x74\x61\x70", function (a) {
            a.gesture.preventDefault();
            if (a.target && a.target.x_back) {
                if (a.target.x_back.style.display == "") {
                    GamePlay.showPlay(a.target.idid);
                    gameMap.remAll()
                } else {
                    gameMap.divShow.x_back.style.display = "\x6E\x6F\x6E\x65";
                    gameMap.divShow = a.target;
                    gameMap.willGo = a.target.idid;
                    a.target.x_back.style.display = ""
                }
            }
        })
    }
    function U() {
        var b, c;
        while (this.arrSelect.length > 0) {
            var a = this.arrSelect.pop()
        };
        this.txtSelect.style.display = "\x6E\x6F\x6E\x65";
        this.divSelect.next.style.display = "\x6E\x6F\x6E\x65";
        this.divSelect.pre.style.display = "\x6E\x6F\x6E\x65";
        this.mapSelect = 0;
        this.mapSelectAll = 0;
        for (b = this.page * 10; b < GameConfig.dataArr.length && b < this.page * 10 + 10; b++) {
            this.mapSelectAll++
        };
        this.txtSelect.innerHTML = this.mapSelect + "\x2F" + this.mapSelectAll;
        this.txtPage.innerHTML = "\x78\x2F" + Math.ceil(GameConfig.dataArr.length / 10);
        this.xxxx = 0
    }
    function V() {
        var b;
        for (b = 0; b < this.arrSelect.length; b++) {
            var a = this.arrSelect[b];
            a.style.display = ""
        };
        this.txtSelect.style.display = "\x6E\x6F\x6E\x65";
        this.divSelect.next.style.display = "";
        this.divSelect.pre.style.display = "";
        if (this.page == 0) {
            this.divSelect.pre.style.display = "\x6E\x6F\x6E\x65"
        } else {
            if (this.page == Math.floor((GameConfig.dataArr.length - 1) / 10)) {
                this.divSelect.next.style.display = "\x6E\x6F\x6E\x65"
            }
        };
        this.txtPage.innerHTML = (this.page + 1) + "\x2F" + Math.ceil(GameConfig.dataArr.length / 10)
    }
    function W(f) {
        var g = GameConfig.dataArr[f];
        var c = document.createElement("\x64\x69\x76");
        c.className = "\x6D\x61\x68\x6A\x6F\x6E\x67\x5F\x63\x73\x73";
        var b = g.split("\x62");
        b.pop();
        for (var d = 0; d < b.length; d++) {
            g = b[d];
            var a = g.split("\x61");
            CreateGame.getImg("\x61\x35\x33", null, 7 + (parseInt(a[0], 10) * 5 - 165) / 10, 35 + (parseInt(a[1], 10) *
                5 - 25) / 10, 6.6, 10.2, c)
        };
        return c
    }
    function X() {
        while (this.data.length > 0) {
            var a = this.data.pop();
            if (a && a.parentNode) {
                a.parentNode.removeChild(a)
            }
        };
        this.closePage();
        clearInterval(this.timeID)
    }
    function Y() {
        window.focus();
        ThirdParty.gameStart();
        orderInit(6);
        GameMenu.remAll()
    }
    function Z() {
        if (GameMenu.bt_4) {
            GameMenu.bt_1.idid++;
            GameMenu.bt_2.idid++;
            GameMenu.bt_3.idid++;
            GameMenu.bt_4.idid++;
            if (GameMenu.bt_1.idid == 15) {
                GameMenu.bt_1.style.display = ""
            };
            if (GameMenu.bt_2.idid == 18) {
                GameMenu.bt_2.style.display = ""
            };
            if (GameMenu.bt_3.idid == 21) {
                GameMenu.bt_3.style.display = ""
            };
            if (GameMenu.bt_4.idid == 24) {
                GameMenu.bt_4.style.display = "";
                GameMenu.bt_4 = null
            }
        };
        for (var b = 0; b < GameMenu.remCanvas.length; b++) {
            var a = GameMenu.remCanvas[b];
            a.style.backgroundPosition = a.ww * a.idid + "\x70\x78\x20\x30\x70\x78";
            a.idid--;
            if (a.idid < 1) {
                a.idid = a.idid_
            }
        }
    }
    function ba() {
        var a = this.data;
        GameSound.stopMusic();
        this.timeID = setInterval(GameMenu.onFrame, 33);
        ThirdParty.mainMenu();
        var b = CreateGame.CreatedImg("\x62\x61\x63\x6B\x5F\x6D\x65\x6E\x75", 0, 0, gameContainer, a);
        Hammer(b).on("\x74\x61\x70", function (a) {
            languageUI.closeUI()
        });
        b = CreateGame.getAnimation("\x6D\x65\x6E\x75\x5F\x72\x65\x6D\x31", 353, 166, 90, 171, 20, 1, gameContainer, a);
        this.remCanvas.push(b);
        b = CreateGame.getAnimation("\x6D\x65\x6E\x75\x5F\x72\x65\x6D\x32", 656, 300, 140, 162, 20, 1, gameContainer, a);
        this.remCanvas.push(b);
        b = CreateGame.getAnimation("\x6D\x65\x6E\x75\x5F\x72\x65\x6D\x33", 86, 344, 100, 90, 20, 1, gameContainer, a);
        this.remCanvas.push(b);
        b = languageUI.getButton("\x64\x5F\x50\x6C\x61\x79", 250, 52, 120, 341, 210, 38, 20, 7, true, gameContainer, a,
            "\x62\x75\x74\x74\x6F\x6E", "\x63\x65\x6E\x74\x65\x72", 22, "\x62\x74\x6E\x75\x6D\x62\x65\x72");
        Hammer(b).on("\x74\x61\x70", function (a) {
            GameMenu.aaaa = 4;
            if (typeof GameAds !== "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64" && GameAds.showAd()) {
                GameSound.ping();
                setTimeout(function () {
                    GameAds.requestAd(GameMenu.startGame)
                }, 0)
            } else {
                GameMenu.startGame()
            }
        });
        b.style.display = "\x6E\x6F\x6E\x65";
        this.bt_1 = b;
        b = languageUI.getButton("\x64\x5F\x48\x65\x6C\x70", 250, 52, 463, 341, 210, 38, 20, 7, true, gameContainer, a,
            "\x62\x75\x74\x74\x6F\x6E", "\x63\x65\x6E\x74\x65\x72", 22, "\x62\x74\x6E\x75\x6D\x62\x65\x72");
        Hammer(b).on("\x74\x61\x70", function (a) {
            orderInit(3);
            GameMenu.remAll()
        });
        b.style.display = "\x6E\x6F\x6E\x65";
        this.bt_2 = b;
        b = languageUI.getButton("\x64\x5F\x48\x69\x67\x68\x53\x63\x6F\x72\x65", 250, 52, 290, 396, 210, 38, 20, 7,
            true, gameContainer, a, "\x62\x75\x74\x74\x6F\x6E", "\x63\x65\x6E\x74\x65\x72", 22,
            "\x62\x74\x6E\x75\x6D\x62\x65\x72");
        Hammer(b).on("\x74\x61\x70", function (a) {
            ThirdParty.showLeaderboard()
        });
        b.style.display = "\x6E\x6F\x6E\x65";
        this.bt_3 = b;
        b = languageUI.getButton("\x64\x5F\x4D\x6F\x72\x65", 250, 52, 963, 396, 210, 38, 20, 7, true, gameContainer, a,
            "\x62\x75\x74\x74\x6F\x6E", "\x63\x65\x6E\x74\x65\x72", 22, "\x62\x74\x6E\x75\x6D\x62\x65\x72");
        b.onclick = function () {
            GameLib.moreGames()
        };
        b.style.display = "\x6E\x6F\x6E\x65";
        this.bt_4 = b;
        this.bt_1.style.zIndex = 10;
        this.bt_2.style.zIndex = 10;
        this.bt_3.style.zIndex = 10;
        this.bt_4.style.zIndex = 10;
        this.bt_1.idid = 0;
        this.bt_2.idid = 0;
        this.bt_3.idid = 0;
        this.bt_4.idid = 0;
        languageUI.init(gameContainer)
    }
    function bb() {
        if (GameMenu.sheZhiDiv && GameMenu.sheZhiDiv.parentNode) {
            GameMenu.sheZhiDiv.parentNode.removeChild(GameMenu.sheZhiDiv)
        };
        GameMenu.sheZhiDiv = CreateGame.CreatedDiv(0, 0, gameContainer, this.data);
        CreateGame.CreatedImg("\x73\x61\x76\x65\x62\x61\x63\x6B", 0, 0, GameMenu.sheZhiDiv, this.data);
        var b = languageUI.getButton("\x64\x5F\x52\x65\x73\x65\x74", 250, 52, 275, 298, 210, 38, 20, 7, true, GameMenu.sheZhiDiv,
            this.data, "\x62\x75\x74\x74\x6F\x6E", "\x63\x65\x6E\x74\x65\x72", 28);
        Hammer(b).on("\x74\x61\x70", function (a) {
            GameLib.setStorage({
                score: [],
                level: 1
            });
            GameMenu.sheZhiDiv.style.display = "\x6E\x6F\x6E\x65"
        });
        b = CreateGame.CreatedButton("\x63\x6C\x6F\x73\x65", 600, 102, GameMenu.sheZhiDiv, this.data);
        Hammer(b).on("\x74\x61\x70", function (a) {
            GameMenu.sheZhiDiv.style.display = "\x6E\x6F\x6E\x65"
        });
        var c = CreateGame.getImg("\x6D\x75\x73\x69\x63\x31", null, 292, 206, 75, 75, GameMenu.sheZhiDiv, this.data);
        var d = CreateGame.getImg("\x6D\x75\x73\x69\x63\x32", null, 292, 206, 75, 75, GameMenu.sheZhiDiv, this.data);
        var a = function (a) {
            c.style.display = "";
            d.style.display = "\x6E\x6F\x6E\x65";
            GameSound.muteSound(true)
        };
        Hammer(d).on("\x74\x61\x70", a);
        a = function (a) {
            c.style.display = "\x6E\x6F\x6E\x65";
            d.style.display = "";
            GameSound.muteSound(false)
        };
        Hammer(c).on("\x74\x61\x70", a);
        var f = CreateGame.getImg("\x73\x6F\x75\x6E\x64\x31", null, 433, 206, 75, 75, GameMenu.sheZhiDiv, this.data);
        var g = CreateGame.getImg("\x73\x6F\x75\x6E\x64\x32", null, 433, 206, 75, 75, GameMenu.sheZhiDiv, this.data);
        a = function () {
            f.style.display = "";
            g.style.display = "\x6E\x6F\x6E\x65";
            GameSound.muteMusic(true)
        };
        Hammer(g).on("\x74\x61\x70", a);
        a = function () {
            f.style.display = "\x6E\x6F\x6E\x65";
            g.style.display = "";
            GameSound.muteMusic(false)
        };
        Hammer(f).on("\x74\x61\x70", a);
        if (GameSound.musicMuted) {
            f.style.display = "";
            g.style.display = "\x6E\x6F\x6E\x65"
        } else {
            f.style.display = "\x6E\x6F\x6E\x65";
            g.style.display = ""
        }; if (GameSound.soundMuted) {
            c.style.display = "";
            d.style.display = "\x6E\x6F\x6E\x65"
        } else {
            c.style.display = "\x6E\x6F\x6E\x65";
            d.style.display = ""
        };
        languageUI.getText("\x64\x5F\x52\x65\x73\x65\x74\x43\x6C\x69\x63\x6B", 390, 120, 205, 133, GameMenu.sheZhiDiv,
            this.data, 21);
        GameMenu.sheZhiDiv.style.display = "";
        GameMenu.sheZhiDiv.style.zIndex = 1000
    }
    function bc() {
        while (this.data.length > 0) {
            var a = this.data.pop();
            if (a && a.parentNode) {
                a.parentNode.removeChild(a)
            }
        };
        clearInterval(GameMenu.timeID)
    }
    function bd() {
        var a = CreateGame.CreatedImg("\x62\x61\x63\x6B\x5F\x68\x65\x6C\x70", 0, 0, gameContainer, this.data);
        a = languageUI.getButton("\x64\x5F\x42\x61\x63\x6B", 250, 52, 275, 422, 210, 38, 20, 7, true, gameContainer,
            this.data, "\x62\x75\x74\x74\x6F\x6E", "\x63\x65\x6E\x74\x65\x72", 22, "\x62\x74\x6E\x75\x6D\x62\x65\x72");
        Hammer(a).on("\x74\x61\x70", function (a) {
            orderInit(2);
            GameHelp.remAll()
        });
        CreateGame.getImg("\x68\x65\x6C\x70", null, 50, 222, 700, 182, gameContainer, this.data);
        a = languageUI.getButton("\x64\x5F\x48\x6F\x77\x74\x6F\x70\x6C\x61\x79", 0, 0, 250, 35, 300, 50, 0, 0, true,
            gameContainer, this.data, "\x62\x75\x74\x74\x6F\x6E", "\x63\x65\x6E\x74\x65\x72", 33,
            "\x62\x74\x6E\x75\x6D\x62\x65\x72");
        a = languageUI.getText(
            "\x64\x5F\x48\x6F\x77\x74\x6F\x70\x6C\x61\x79\x54\x65\x78\x74\x5F\x4D\x61\x68\x6A\x6F\x6E\x67\x4D\x61\x69\x6E",
            700, 50, 50, 100, gameContainer, this.data);
        languageUI.scaleTexts()
    }
    function be() {
        while (this.data.length > 0) {
            var a = this.data.pop();
            if (a && a.parentNode) {
                a.parentNode.removeChild(a)
            }
        }
    }
    function bf() {
        while (this.data.length > 0) {
            var a = this.data.pop();
            if (a && a.parentNode) {
                a.parentNode.removeChild(a)
            }
        };
        clearInterval(GamePlay.timeID)
    }
    function bg() {
        var c = Math.floor(this.time / 30);
        var a = "" + Math.floor(c / 60);
        if (a.length == 1) {
            a = "\x30" + a
        };
        var b = "" + Math.floor(c % 60);
        if (b.length == 1) {
            b = "\x30" + b
        };
        this.txtTime.innerHTML = a + "\x3A" + b
    }
    function bh(a) {
        this.score += a;
        this.txtScore.innerHTML = "" + this.score
    }
    function bi() {
        var b = CreateGame.CreatedImg("\x66\x61\x63\x65\x5F\x70\x61\x75\x73\x65", 0, 0, this.pause, this.data);
        b = languageUI.getButton("\x64\x5F\x43\x6F\x6E\x74\x69\x6E\x75\x65", 250, 52, 275, 140, 210, 38, 20, 7, true,
            this.pause, this.data, "\x62\x75\x74\x74\x6F\x6E", "\x63\x65\x6E\x74\x65\x72", 22,
            "\x62\x74\x6E\x75\x6D\x62\x65\x72");
        Hammer(b).on("\x74\x61\x70", function (a) {
            GamePlay.pause.style.display = "\x6E\x6F\x6E\x65"
        });
        b = languageUI.getButton("\x64\x5F\x42\x61\x63\x6B", 250, 52, 275, 200, 210, 38, 20, 7, true, this.pause, this.data,
            "\x62\x75\x74\x74\x6F\x6E", "\x63\x65\x6E\x74\x65\x72", 22, "\x62\x74\x6E\x75\x6D\x62\x65\x72");
        Hammer(b).on("\x74\x61\x70", function (a) {
            gameMap.showMap();
            GamePlay.remAll()
        });
        var c = languageUI.getButton("\x64\x5F\x53\x6F\x75\x6E\x64\x6F\x6E", 250, 52, 275, 260, 210, 38, 20, 7, true,
            this.pause, this.data, "\x62\x75\x74\x74\x6F\x6E", "\x63\x65\x6E\x74\x65\x72", 22,
            "\x62\x74\x6E\x75\x6D\x62\x65\x72");
        var f = languageUI.getButton("\x64\x5F\x53\x6F\x75\x6E\x64\x6F\x66\x66", 250, 52, 275, 260, 210, 38, 20, 7,
            true, this.pause, this.data, "\x62\x75\x74\x74\x6F\x6E", "\x63\x65\x6E\x74\x65\x72", 22,
            "\x62\x74\x6E\x75\x6D\x62\x65\x72");
        var d = CreateGame.getImg("\x6D\x75\x73\x69\x63\x31", null, 720, 415, 60, 60, this.div888, this.data);
        var g = CreateGame.getImg("\x6D\x75\x73\x69\x63\x32", null, 720, 415, 60, 60, this.div888, this.data);
        CreateGame.setButton(d);
        CreateGame.setButton(g);
        this.pause.m1 = c;
        this.pause.m2 = f;
        this.pause.m1_ = d;
        this.pause.m2_ = g;
        var a = function (a) {
            c.style.display = "";
            f.style.display = "\x6E\x6F\x6E\x65";
            d.style.display = "";
            g.style.display = "\x6E\x6F\x6E\x65";
            GameSound.muteSound(true)
        };
        Hammer(f).on("\x74\x61\x70", a);
        Hammer(g).on("\x74\x61\x70", a);
        a = function (a) {
            c.style.display = "\x6E\x6F\x6E\x65";
            f.style.display = "";
            d.style.display = "\x6E\x6F\x6E\x65";
            g.style.display = "";
            GameSound.muteSound(false)
        };
        Hammer(c).on("\x74\x61\x70", a);
        Hammer(d).on("\x74\x61\x70", a);
        var h = languageUI.getButton("\x64\x5F\x4D\x75\x73\x69\x63\x6F\x6E", 250, 52, 275, 320, 210, 38, 20, 7, true,
            this.pause, this.data, "\x62\x75\x74\x74\x6F\x6E", "\x63\x65\x6E\x74\x65\x72", 22,
            "\x62\x74\x6E\x75\x6D\x62\x65\x72");
        var j = languageUI.getButton("\x64\x5F\x4D\x75\x73\x69\x63\x6F\x66\x66", 250, 52, 275, 320, 210, 38, 20, 7,
            true, this.pause, this.data, "\x62\x75\x74\x74\x6F\x6E", "\x63\x65\x6E\x74\x65\x72", 22,
            "\x62\x74\x6E\x75\x6D\x62\x65\x72");
        var i = CreateGame.getImg("\x73\x6F\x75\x6E\x64\x31", null, 650, 415, 60, 60, this.div888, this.data);
        var k = CreateGame.getImg("\x73\x6F\x75\x6E\x64\x32", null, 650, 415, 60, 60, this.div888, this.data);
        CreateGame.setButton(i);
        CreateGame.setButton(k);
        this.pause.s1 = h;
        this.pause.s2 = j;
        this.pause.s1_ = i;
        this.pause.s2_ = k;
        a = function () {
            h.style.display = "";
            j.style.display = "\x6E\x6F\x6E\x65";
            i.style.display = "";
            k.style.display = "\x6E\x6F\x6E\x65";
            GameSound.muteMusic(true)
        };
        Hammer(j).on("\x74\x61\x70", a);
        Hammer(k).on("\x74\x61\x70", a);
        a = function () {
            h.style.display = "\x6E\x6F\x6E\x65";
            j.style.display = "";
            i.style.display = "\x6E\x6F\x6E\x65";
            k.style.display = "";
            GameSound.muteMusic(false)
        };
        Hammer(h).on("\x74\x61\x70", a);
        Hammer(i).on("\x74\x61\x70", a);
        if (GameSound.musicMuted) {
            GamePlay.pause.s1_.style.display = "";
            GamePlay.pause.s2_.style.display = "\x6E\x6F\x6E\x65";
            GamePlay.pause.s1.style.display = "";
            GamePlay.pause.s2.style.display = "\x6E\x6F\x6E\x65"
        } else {
            GamePlay.pause.s1_.style.display = "\x6E\x6F\x6E\x65";
            GamePlay.pause.s2_.style.display = "";
            GamePlay.pause.s1.style.display = "\x6E\x6F\x6E\x65";
            GamePlay.pause.s2.style.display = ""
        }; if (GameSound.soundMuted) {
            GamePlay.pause.m1_.style.display = "";
            GamePlay.pause.m2_.style.display = "\x6E\x6F\x6E\x65";
            GamePlay.pause.m1.style.display = "";
            GamePlay.pause.m2.style.display = "\x6E\x6F\x6E\x65"
        } else {
            GamePlay.pause.m1_.style.display = "\x6E\x6F\x6E\x65";
            GamePlay.pause.m2_.style.display = "";
            GamePlay.pause.m1.style.display = "\x6E\x6F\x6E\x65";
            GamePlay.pause.m2.style.display = ""
        }
    }
    function bj() {
        var a = CreateGame.CreatedImg("\x65\x6E\x64\x5F\x62\x61\x63\x6B", 0, 0, this.timeOutDiv, this.data);
        a = languageUI.getButton("\x64\x5F\x45\x6E\x64\x67\x61\x6D\x65", 250, 52, 275, 288, 210, 38, 20, 7, true, this.timeOutDiv,
            this.data, "\x62\x75\x74\x74\x6F\x6E", "\x63\x65\x6E\x74\x65\x72", 22, "\x62\x74\x6E\x75\x6D\x62\x65\x72");
        Hammer(a).on("\x74\x61\x70", function (a) {
            GamePlay.timeOutDiv.style.display = "\x6E\x6F\x6E\x65";
            gameMap.showMap();
            GamePlay.remAll()
        });
        languageUI.getButton("\x64\x5F\x4C\x65\x76\x65\x6C\x46\x61\x69\x6C\x65\x64", 0, 0, 250, 188, 300, 60, 0, 0,
            true, this.timeOutDiv, this.data, "\x62\x75\x74\x74\x6F\x6E", "\x63\x65\x6E\x74\x65\x72", 40,
            "\x62\x74\x6E\x75\x6D\x62\x65\x72")
    }
    function bk() {
        var a = CreateGame.CreatedImg("\x66\x61\x63\x65\x5F\x6C\x65\x76\x65\x6C", 0, 0, this.levelDiv, this.data);
        a = languageUI.getButton("\x64\x5F\x45\x6E\x64\x67\x61\x6D\x65", 250, 52, 275, 324, 210, 38, 20, 7, true, this.levelDiv,
            this.data, "\x62\x75\x74\x74\x6F\x6E", "\x63\x65\x6E\x74\x65\x72", 22, "\x62\x74\x6E\x75\x6D\x62\x65\x72");
        Hammer(a).on("\x74\x61\x70", function (a) {
            GamePlay.levelDiv.style.display = "\x6E\x6F\x6E\x65";
            gameMap.showMap();
            GamePlay.remAll()
        });
        this.levelDiv.end = a;
        this.levelDiv.end.style.display = "\x6E\x6F\x6E\x65";
        a = languageUI.getButton("\x64\x5F\x4E\x65\x78\x74\x4C\x65\x76\x65\x6C", 250, 52, 275, 324, 210, 38, 20, 7,
            true, this.levelDiv, this.data, "\x62\x75\x74\x74\x6F\x6E", "\x63\x65\x6E\x74\x65\x72", 22,
            "\x62\x74\x6E\x75\x6D\x62\x65\x72");
        Hammer(a).on("\x74\x61\x70", function (a) {
            GamePlay.levelDiv.style.display = "\x6E\x6F\x6E\x65";
            gameMap.showMap();
            GamePlay.remAll()
        });
        this.levelDiv.next = a;
        this.levelDiv.next.style.display = "\x6E\x6F\x6E\x65";
        languageUI.getButton("\x64\x5F\x4C\x65\x76\x65\x6C\x43\x6F\x6D\x70\x6C\x65\x74\x65\x64", 0, 0, 250, 128, 300,
            60, 0, 0, true, this.levelDiv, this.data, "\x62\x75\x74\x74\x6F\x6E", "\x63\x65\x6E\x74\x65\x72", 50,
            "\x62\x74\x6E\x75\x6D\x62\x65\x72");
        languageUI.getButton("\x64\x5F\x42\x6F\x6E\x75\x73", 0, 0, 300, 192, 200, 40, 0, 0, true, this.levelDiv, this.data,
            "\x62\x75\x74\x74\x6F\x6E", "\x63\x65\x6E\x74\x65\x72", 28, "\x62\x74\x6E\x75\x6D\x62\x65\x72");
        languageUI.getButton("\x64\x5F\x54\x69\x6D\x65\x42\x6F\x6E\x75\x73", 0, 0, 300, 258, 200, 40, 0, 0, true, this.levelDiv,
            this.data, "\x62\x75\x74\x74\x6F\x6E", "\x63\x65\x6E\x74\x65\x72", 28, "\x62\x74\x6E\x75\x6D\x62\x65\x72");
        this.levelDiv.txtBonus = CreateGame.CreatedShowNumber(340, 233, 120, 24, this.levelDiv, this.data);
        this.levelDiv.txtTimeBonus = CreateGame.CreatedShowNumber(340, 299, 120, 24, this.levelDiv, this.data)
    }
    function bl() {
        if (this.levelDiv.style.display == "") {
            return
        };
        this.levelDiv.style.display = "";
        this.levelDiv.style.zIndex = 10000;
        ThirdParty.levelComplete(this.level);
        this.levelDiv.end.style.display = "\x6E\x6F\x6E\x65";
        this.levelDiv.next.style.display = "";
        this.levelDiv.txtBonus.innerHTML = this.dataArr[1].length * 200 + "";
        this.addScore(this.dataArr[1].length * 200);
        this.levelDiv.txtTimeBonus.innerHTML = Math.floor(this.time / 3) + "";
        this.addScore(Math.floor(this.time / 3));
        if (gameMap.timeArr[this.level - 1][0] < this.score) {
            gameMap.timeArr[this.level - 1][0] = this.score
        };
        this.level++;
        if (gameMap.level < this.level) {
            gameMap.level = this.level
        };
        GameLib.setStorage({
            level: gameMap.level,
            score: gameMap.timeArr
        });
        if (this.level > GameConfig.dataArr.length) {
            this.levelDiv.end.style.display = "";
            this.levelDiv.next.style.display = "\x6E\x6F\x6E\x65";
            ThirdParty.gameComplete()
        }
    }
    function bm() {
        if (screenfull.isFullscreen) {
            GamePlay.fullscreen_on.style.display = "\x6E\x6F\x6E\x65";
            GamePlay.fullscreen_off.style.display = ""
        } else {
            GamePlay.fullscreen_on.style.display = "";
            GamePlay.fullscreen_off.style.display = "\x6E\x6F\x6E\x65"
        }
    }
    function bn() {
        GamePlay.pause.style.display = "";
        GamePlay.pause.style.zIndex = 10001
    }
    function bo(b) {
        this.level = b;
        if (!this.idleListenerAdded) {
            window.addEventListener("\x69\x64\x6C\x65", function () {
                setTimeout(GamePlay.pauseGame, 300)
            }, false);
            this.idleListenerAdded = true
        };
        this.timeID = setInterval(this.onFrame, 33);
        var a = CreateGame.CreatedImg("\x67\x61\x6D\x65\x5F\x62\x61\x63\x6B" + Math.floor(b % 3 + 1), 0, 0,
            gameContainer, this.data);
        this.div_all = CreateGame.CreatedDiv(0, 0, gameContainer, this.data);
        this.div_all.style.display = "";
        this.div_all.style.overflow = "\x68\x69\x64\x64\x65\x6E";
        this.div_all.style.width = "\x36\x33\x36\x70\x78";
        this.div_all.style.height = "\x34\x38\x30\x70\x78";
        this.div_all.style.position = "\x61\x62\x73\x6F\x6C\x75\x74\x65";
        this.div_all.style.zIndex = 900;
        GameSound.playMusic();
        this.div888 = CreateGame.CreatedDiv(0, 0, gameContainer, this.data);
        this.div888.style.display = "";
        this.div888.style.zIndex = 901;
        if (ThirdParty.enableFullscreenToggle && screenfull.enabled) {
            this.fullscreen_on = CreateGame.getImg("\x66\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x5F\x6F\x6E", null, 720,
                347, 60, 60, this.div888, this.data);
            this.fullscreen_off = CreateGame.getImg("\x66\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x5F\x6F\x66\x66", null,
                720, 347, 60, 60, this.div888, this.data);
            this.fullscreen_on.onclick = function () {
                screenfull.toggle()
            };
            this.fullscreen_off.onclick = function () {
                screenfull.toggle()
            };
            document.addEventListener(screenfull.raw.fullscreenchange, GamePlay.fullscreenChange);
            this.fullscreenChange()
        };
        this.txtScore = CreateGame.CreatedShowNumber(655, 99, 120, 22, gameContainer, this.data);
        this.txtLevel = CreateGame.CreatedShowNumber(655, 195, 120, 22, gameContainer, this.data);
        this.txtTime = CreateGame.CreatedShowNumber(655, 291, 120, 22, gameContainer, this.data);
        this.txtNext = CreateGame.CreatedShowNumber(20, 40, 120, 22, gameContainer, this.data);
        languageUI.getButton("\x64\x5F\x53\x63\x6F\x72\x65", 0, 0, 655, 64, 120, 30, 0, 0, false, gameContainer, this.data,
            "\x62\x75\x74\x74\x6F\x6E", "\x63\x65\x6E\x74\x65\x72", 20, "\x62\x74\x6E\x75\x6D\x62\x65\x72");
        languageUI.getButton("\x64\x5F\x4C\x65\x76\x65\x6C", 0, 0, 655, 160, 120, 30, 0, 0, false, gameContainer, this.data,
            "\x62\x75\x74\x74\x6F\x6E", "\x63\x65\x6E\x74\x65\x72", 20, "\x62\x74\x6E\x75\x6D\x62\x65\x72");
        languageUI.getButton("\x64\x5F\x54\x69\x6D\x65", 0, 0, 655, 256, 120, 30, 0, 0, false, gameContainer, this.data,
            "\x62\x75\x74\x74\x6F\x6E", "\x63\x65\x6E\x74\x65\x72", 20, "\x62\x74\x6E\x75\x6D\x62\x65\x72");
        a = CreateGame.getImg("\x70\x31", null, 650, 347, 60, 60, this.div888, this.data);
        CreateGame.setButton(a);
        Hammer(a).on("\x74\x61\x70", function (a) {
            GamePlay.pauseGame()
        });
        a = CreateGame.getImg("\x70\x32", null, 46, 375, 75, 75, this.div888, this.data);
        CreateGame.setButton(a);
        Hammer(a).on("\x74\x61\x70", function (b) {
            if (GamePlay.dataArr[2].length > 1) {
                var a = GamePlay.dataArr[2].pop();
                if (a.aaaa == 1) {
                    a.style.zIndex = a.zzzz;
                    a.style.top = a.yyyy + "\x70\x78";
                    a.style.left = a.xxxx + "\x70\x78";
                    GamePlay.dataArr[0].push(a);
                    a.cardName = "\x63\x6C\x69\x63\x6B";
                    GamePlay.showClick();
                    GamePlay.addScore(-100)
                } else {
                    a.back.style.display = "";
                    a.style.zIndex = a.zzzz;
                    GamePlay.dataArr[1].push(a);
                    a.style.top = "\x31\x34\x30\x70\x78";
                    a.style.left = "\x38\x30\x70\x78";
                    a.cardName = "\x6E\x65\x78\x74";
                    GamePlay.showNext();
                    GamePlay.addScore(-50)
                };
                GameSound.playSound("\x62\x61\x63\x6B")
            } else {
                GameSound.playSound("\x6C\x6F\x73\x74")
            }
        });
        Hammer(this.div_all).on("\x74\x61\x70", GamePlay.clickDivEvent);
        this.pause = CreateGame.CreatedDiv(0, 0, gameContainer, this.data);
        this.levelDiv = CreateGame.CreatedDiv(0, 0, gameContainer, this.data);
        this.timeOutDiv = CreateGame.CreatedDiv(0, 0, gameContainer, this.data);
        this.createLevelDiv();
        this.createPause();
        this.createTimeOutDiv();
        languageUI.scaleTexts();
        this.addGame()
    }
    function bp(b) {
        var a = document.createElement("\x64\x69\x76");
        a.style.position = "\x61\x62\x73\x6F\x6C\x75\x74\x65";
        a.cardName = "\x50\x75\x4B\x65";
        a.idInt = b;
        a.numInt = Math.floor((a.idInt - 1) / 4) + 1;
        a.colorInt = Math.floor((a.idInt - 1) % 4) + 1;
        if (a.colorInt == 1 || a.colorInt == 3) {
            a.colorBlack = true
        } else {
            a.colorBlack = false
        };
        a.img = CreateGame.getImg("\x61" + b, null, -33, -51, 66, 102, a, null, 1);
        a.back = CreateGame.getImg("\x61\x35\x34", null, -33, -51, 66, 102, a, null, 2);
        this.playArr.push(a);
        this.div_all.appendChild(a);
        return a
    }
    function bq() {
        this.txtLevel.innerHTML = this.level + "";
        this.score = 0;
        this.addScore(0);
        this.time = 120 * 30;
        GamePlay.showTime();
        while (this.playArr.length > 0) {
            var f = this.playArr.pop();
            if (f && f.parentNode) {
                f.parentNode.removeChild(f)
            }
        };
        var b = [];
        for (var g = 1; g < 53; g++) {
            b.push(g)
        };
        b = CreateGame.disorder(b);
        this.dataArr = [[], [], []];
        var c = GameConfig.dataArr[this.level - 1].split("\x62");
        c.pop();
        for (g = 0; g < c.length; g++) {
            var a = c[g].split("\x61");
            var d = this.getPuKe(b.pop());
            d.style.zIndex = this.dataArr[0].length;
            d.style.top = parseInt(a[1], 10) * 5 + "\x70\x78";
            d.style.left = parseInt(a[0], 10) * 5 + "\x70\x78";
            d.cardName = "\x63\x6C\x69\x63\x6B";
            d.xxxx = parseInt(a[0], 10) * 5;
            d.yyyy = parseInt(a[1], 10) * 5;
            d.zzzz = d.style.zIndex;
            d.aaaa = 1;
            this.dataArr[0].push(d)
        };
        b.push(53);
        b.push(53);
        b = CreateGame.disorder(b);
        while (b.length > 0) {
            d = this.getPuKe(b.pop());
            d.style.zIndex = this.dataArr[1].length;
            d.style.top = "\x31\x34\x30\x70\x78";
            d.style.left = "\x38\x30\x70\x78";
            d.cardName = "\x6E\x65\x78\x74";
            d.aaaa = 2;
            d.zzzz = d.style.zIndex;
            this.dataArr[1].push(d)
        };
        this.goNext();
        this.showClick();
        GameSound.playSound("\x66\x61")
    }
    function br() {
        if (this.dataArr[0].length == 0) {
            this.levelUp();
            return
        };
        if (this.dataArr[1].length > 0) {
            return
        };
        var a = GamePlay.dataArr[2][GamePlay.dataArr[2].length - 1];
        for (var c = 0; c < this.dataArr[0].length; c++) {
            var b = this.dataArr[0][c];
            if (b.back.style.display == "\x6E\x6F\x6E\x65") {
                if (a.numInt == 14 || b.numInt == 14) {
                    return
                } else {
                    if (Math.abs(a.numInt - b.numInt) == 1 || Math.abs(a.numInt - b.numInt) == 12) {
                        return
                    }
                }
            }
        };
        this.timeOutDiv.style.display = "";
        this.timeOutDiv.style.zIndex = 10000
    }
    function bs() {
        for (var f = 0; f < this.dataArr[0].length; f++) {
            var b = this.dataArr[0][f];
            var a = false;
            for (var d = 0; d < this.dataArr[0].length; d++) {
                var c = this.dataArr[0][d];
                if (parseInt(c.zzzz, 10) > parseInt(b.zzzz, 10)) {
                    if (this.isHint(b, c)) {
                        a = true;
                        break
                    }
                }
            };
            if (a) {
                b.back.style.display = ""
            } else {
                b.back.style.display = "\x6E\x6F\x6E\x65"
            }
        }
    }
    function bt(a, b) {
        var c = parseInt(a.style.left, 10);
        var f = parseInt(a.style.top, 10);
        var d = parseInt(b.style.left, 10);
        var g = parseInt(b.style.top, 10);
        if (Math.abs(c - d) < 66 && Math.abs(f - g) < 102) {
            return true
        };
        return false
    }
    function bu() {
        this.txtNext.innerHTML = this.dataArr[1].length
    }
    function bv() {
        var a = this.dataArr[1].pop();
        this.dataArr[2].push(a);
        a.cardName = "\x6F\x6B";
        a.back.style.display = "\x6E\x6F\x6E\x65";
        a.style.zIndex = this.dataArr[2].length;
        a.xx1 = parseInt(a.style.left, 10);
        a.yy1 = parseInt(a.style.top, 10);
        a.xx2 = 80;
        a.yy2 = 290;
        a.style.zIndex = 100;
        a.zz = GamePlay.dataArr[2].length;
        a.idid = 0;
        GamePlay.flyArr.push(a);
        this.showNext();
        this.isMove()
    }
    function bw(d) {
        d.preventDefault();
        var c = d.target.parentNode;
        if (c.cardName && GamePlay.flyArr.length == 0) {
            if (c.cardName == "\x63\x6C\x69\x63\x6B") {
                if (c.back.style.display == "\x6E\x6F\x6E\x65") {
                    var b = GamePlay.dataArr[2][GamePlay.dataArr[2].length - 1];
                    var a = false;
                    if (b.numInt == 14 || c.numInt == 14) {
                        a = true
                    } else {
                        if (Math.abs(b.numInt - c.numInt) == 1 || Math.abs(b.numInt - c.numInt) == 12) {
                            a = true
                        }
                    }; if (a) {
                        GamePlay.dataArr[2].push(c);
                        c.cardName = "\x6F\x6B";
                        c.back.style.display = "\x6E\x6F\x6E\x65";
                        c.style.zIndex = 100;
                        c.xx1 = parseInt(c.style.left, 10);
                        c.yy1 = parseInt(c.style.top, 10);
                        c.xx2 = 80;
                        c.yy2 = 290;
                        c.style.zIndex = 100;
                        c.zz = GamePlay.dataArr[2].length;
                        c.idid = 0;
                        GamePlay.flyArr.push(c);
                        for (var f = 0; f < GamePlay.dataArr[0].length; f++) {
                            if (GamePlay.dataArr[0][f] == c) {
                                GamePlay.dataArr[0].splice(f, 1);
                                break
                            }
                        };
                        GamePlay.showClick();
                        GamePlay.isMove();
                        GamePlay.addScore(50);
                        GameSound.playSound("\x6F\x6B")
                    } else {
                        GameSound.playSound("\x6C\x6F\x73\x74")
                    }
                } else {
                    GameSound.playSound("\x6C\x6F\x73\x74")
                }
            } else {
                if (c.cardName == "\x6E\x65\x78\x74") {
                    GamePlay.goNext();
                    GameSound.playSound("\x66\x61")
                }
            }
        }
    }
    function bx() {
        var b, a;
        for (b = 0; b < GamePlay.flyArr.length; b++) {
            a = GamePlay.flyArr[b];
            a.idid++;
            if (a.idid >= 5) {
                a.style.left = a.xx2 + "\x70\x78";
                a.style.top = a.yy2 + "\x70\x78";
                a.style.zIndex = a.zz;
                GamePlay.flyArr.splice(b, 1);
                b--
            } else {
                a.style.left = (a.xx1 - (a.xx1 - a.xx2) * a.idid / 5) + "\x70\x78";
                a.style.top = (a.yy1 - (a.yy1 - a.yy2) * a.idid / 5) + "\x70\x78"
            }
        };
        if (GamePlay.pause.style.display == "" || GamePlay.levelDiv.style.display == "" || GamePlay.timeOutDiv.style.display ==
            "") {
            return
        };
        GamePlay.time--;
        if (GamePlay.time <= 0) {
            GamePlay.timeOutDiv.style.display = "";
            GamePlay.timeOutDiv.style.zIndex = 10000;
            return
        } else {
            if (GamePlay.time < 30 * 10 && GamePlay.time % 30 == 29) {
                GameSound.playSound("\x53\x54\x69\x63\x6B")
            }
        };
        GamePlay.showTime()
    }
    function by() {
        GameLib.setStorage({
            score: [],
            level: 1
        });
        var a = CreateGame.CreatedImg("\x62\x61\x63\x6B\x5F\x6F\x76\x65\x72", 0, 0, gameContainer, this.data);
        a = languageUI.getButton("\x64\x5F\x59\x6F\x75\x72\x53\x63\x6F\x72\x65", 0, 0, 250, 195, 300, 50, 0, 0, true,
            gameContainer, this.data, "\x62\x75\x74\x74\x6F\x6E", "\x63\x65\x6E\x74\x65\x72", 33,
            "\x62\x74\x6E\x75\x6D\x62\x65\x72");
        a = languageUI.getButton("\x64\x5F\x50\x6C\x61\x79\x41\x67\x61\x69\x6E", 250, 52, 275, 282, 210, 38, 20, 7,
            true, gameContainer, this.data, "\x62\x75\x74\x74\x6F\x6E", "\x63\x65\x6E\x74\x65\x72", 22,
            "\x62\x74\x6E\x75\x6D\x62\x65\x72");
        Hammer(a).on("\x74\x61\x70", function (a) {
            ThirdParty.restartGame();
            orderInit(2);
            GameOver.remAll()
        });
        a = languageUI.getButton("\x64\x5F\x53\x75\x62\x6D\x69\x74\x53\x63\x6F\x72\x65", 250, 52, 275, 338, 210, 38, 20,
            7, true, gameContainer, this.data, "\x62\x75\x74\x74\x6F\x6E", "\x63\x65\x6E\x74\x65\x72", 22,
            "\x62\x74\x6E\x75\x6D\x62\x65\x72");
        Hammer(a).on("\x74\x61\x70", function (a) {
            var b = GameLib.getStorage("\x6C\x65\x76\x65\x6C");
            ThirdParty.submitScore(gameMap.score, b)
        });
        var b = CreateGame.CreatedShowNumber(340, 250, 120, 24, gameContainer, this.data);
        b.innerHTML = "" + gameMap.score;
        languageUI.scaleTexts()
    }
    function bz() {
        while (this.data.length > 0) {
            var a = this.data.pop();
            if (a && a.parentNode) {
                a.parentNode.removeChild(a)
            }
        }
    }
    function bA(a, b) {
        var c;
        if (a.currentStyle) {
            c = a.currentStyle[b]
        } else {
            if (window.getComputedStyle) {
                c = window.getComputedStyle(a, null).getPropertyValue(b)
            }
        };
        return c
    }
    function bB(a) {
        this.setXuanZhe(2)
    }
    function bC() {}
    function bD(k, o, g, q, s, p, h, r, t, i, l, b, a, m, f, d) {
        var c = document.createElement("\x64\x69\x76");
        c.style.position = "\x61\x62\x73\x6F\x6C\x75\x74\x65";
        c.style.top = s + "\x70\x78";
        c.style.left = q + "\x70\x78";
        c.style.width = o + "\x70\x78";
        c.style.height = g + "\x70\x78";
        if (m == "\x6C\x65\x66\x74") {
            c.style.textAlign = "\x6C\x65\x66\x74"
        } else {
            if (m == "\x72\x69\x67\x68\x74") {
                c.style.textAlign = "\x72\x69\x67\x68\x74"
            } else {
                c.style.textAlign = "\x63\x65\x6E\x74\x65\x72"
            }
        }; if (i) {
            c.style.cursor = "\x70\x6F\x69\x6E\x74\x65\x72";
            CreateGame.setButton(c)
        } else {
            c.style.cursor = "\x64\x65\x66\x61\x75\x6C\x74"
        }; if (o != 0 && g != 0) {
            var j = document.createElement("\x69\x6D\x67");
            j.style.position = "\x61\x62\x73\x6F\x6C\x75\x74\x65";
            j.style.top = 0;
            j.style.left = 0;
            j.style.width = o + "\x70\x78";
            j.style.height = g + "\x70\x78";
            j.src = loadRec.resource[a].src;
            c.appendChild(j)
        };
        var n = document.createElement("\x64\x69\x76");
        n.style.top = t + "\x70\x78";
        n.style.left = r + "\x70\x78";
        n.style.width = p + "\x70\x78";
        n.style.height = h + "\x70\x78";
        if (d) {
            n.className = d + "\x20\x6C\x61\x6E\x67\x77\x6F\x72\x64"
        } else {
            n.className = "\x62\x74\x6E\x75\x6D\x62\x65\x72\x20\x6C\x61\x6E\x67\x77\x6F\x72\x64"
        };
        n.innerHTML = languageData[k][languageUI.languageInt];
        n.h2 = h;
        n.yy = t;
        c.appendChild(n);
        l.appendChild(c);
        if (f && f > 10) {
            n.fontSize = f
        } else {
            n.fontSize = languageUI.getStyle(n, "\x66\x6F\x6E\x74\x2D\x73\x69\x7A\x65").replace("\x70\x78", "")
        };
        n.langID = k;
        n.parentWidth = p;
        b.push(c);
        return c
    }
    function bE(f, h, c, i, j, d, a, b) {
        var g = document.createElement("\x64\x69\x76");
        g.className = "\x6C\x6F\x6F\x67\x54\x65\x78\x74";
        g.innerHTML = languageData[f][languageUI.languageInt];
        g.style.left = i + "\x70\x78";
        g.style.top = j + "\x70\x78";
        g.style.width = h + "\x70\x78";
        if (b && b > 10) {
            g.style.fontSize = b + "\x70\x78"
        };
        d.appendChild(g);
        a.push(g);
        return g
    }
    function bF() {
        var i = document.querySelectorAll("\x2E\x6C\x61\x6E\x67\x77\x6F\x72\x64"),
            d, h, g, a, f, b, c;
        if (i) {
            for (d = 0; d < i.length; d++) {
                h = languageData[i[d].langID][languageUI.languageInt];
                b = i[d].fontSize;
                while (b > 10) {
                    f = document.createElement("\x64\x69\x76");
                    f.className = i[d].className;
                    f.style.visibility = "\x68\x69\x64\x64\x65\x6E";
                    f.style.fontSize = b + "\x70\x78";
                    f.innerHTML = h;
                    document.body.appendChild(f);
                    g = f.clientWidth;
                    c = f.clientHeight;
                    a = i[d].parentWidth;
                    f.parentNode.removeChild(f);
                    if (g > a) {
                        b--
                    } else {
                        break
                    }
                };
                i[d].style.top = (i[d].yy + (i[d].h2 - c) / 2) + "\x70\x78";
                i[d].style.fontSize = b + "\x70\x78";
                i[d].innerHTML = h
            }
        }
    }
    function bG(a) {
        languageUI.languageInt = this.arr[this.showLanguage[a]][4] - 1;
        GameLib.setLang(this.arr[this.showLanguage[a]][3]);
        this.language = this.arr[this.showLanguage[a]][1];
        if (this.rulArr[this.language]) {
            this.rul = this.rulArr[this.language]
        };
        languageUI.scaleTexts()
    }
    function bH(bk, bh) {
        "\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74";
        var F = function F(a, b) {
            return new F.Instance(a, b || {})
        };
        F.VERSION = "\x31\x2E\x31\x2E\x33";
        F.defaults = {
            behavior: {
                userSelect: "\x6E\x6F\x6E\x65",
                touchAction: "\x70\x61\x6E\x2D\x79",
                touchCallout: "\x6E\x6F\x6E\x65",
                contentZooming: "\x6E\x6F\x6E\x65",
                userDrag: "\x6E\x6F\x6E\x65",
                tapHighlightColor: "\x72\x67\x62\x61\x28\x30\x2C\x30\x2C\x30\x2C\x30\x29"
            }
        };
        F.DOCUMENT = document;
        F.HAS_POINTEREVENTS = navigator.pointerEnabled || navigator.msPointerEnabled;
        F.HAS_TOUCHEVENTS = ("\x6F\x6E\x74\x6F\x75\x63\x68\x73\x74\x61\x72\x74" in bk);
        F.IS_MOBILE = /mobile|tablet|ip(ad|hone|od)|android|silk/i.test(navigator.userAgent);
        F.NO_MOUSEEVENTS = (F.HAS_TOUCHEVENTS && F.IS_MOBILE) || F.HAS_POINTEREVENTS;
        F.CALCULATE_INTERVAL = 25;
        var t = {};
        var f = F.DIRECTION_DOWN = "\x64\x6F\x77\x6E";
        var g = F.DIRECTION_LEFT = "\x6C\x65\x66\x74";
        var i = F.DIRECTION_UP = "\x75\x70";
        var h = F.DIRECTION_RIGHT = "\x72\x69\x67\x68\x74";
        var Q = F.POINTER_MOUSE = "\x6D\x6F\x75\x73\x65";
        var S = F.POINTER_TOUCH = "\x74\x6F\x75\x63\x68";
        var R = F.POINTER_PEN = "\x70\x65\x6E";
        var r = F.EVENT_START = "\x73\x74\x61\x72\x74";
        var p = F.EVENT_MOVE = "\x6D\x6F\x76\x65";
        var o = F.EVENT_END = "\x65\x6E\x64";
        var q = F.EVENT_RELEASE = "\x72\x65\x6C\x65\x61\x73\x65";
        var s = F.EVENT_TOUCH = "\x74\x6F\x75\x63\x68";
        F.READY = false;
        F.plugins = F.plugins || {};
        F.gestures = F.gestures || {};
 
        function Y() {
            if (F.READY) {
                return
            };
            n.determineEventTypes();
            bj.each(F.gestures, function (a) {
                c.register(a)
            });
            n.onTouch(F.DOCUMENT, p, c.detect);
            n.onTouch(F.DOCUMENT, o, c.detect);
            F.READY = true
        }
        var bj = F.utils = {
            extend: function u(a, d, c) {
                for (var b in d) {
                    if (!d.hasOwnProperty(b) || (a[b] !== bh && c)) {
                        continue
                    };
                    a[b] = d[b]
                };
                return a
            },
            on: function N(a, d, b) {
                a.addEventListener(d, b, false)
            },
            off: function L(a, d, b) {
                a.removeEventListener(d, b, false)
            },
            each: function l(f, c, a) {
                var b, d;
                if ("\x66\x6F\x72\x45\x61\x63\x68" in f) {
                    f.forEach(c, a)
                } else {
                    if (f.length !== bh) {
                        for (b = 0, d = f.length; b < d; b++) {
                            if (c.call(a, f[b], b, f) === false) {
                                return
                            }
                        }
                    } else {
                        for (b in f) {
                            if (f.hasOwnProperty(b) && c.call(a, f[b], b, f) === false) {
                                return
                            }
                        }
                    }
                }
            },
            inStr: function I(b, a) {
                return b.indexOf(a) > -1
            },
            inArray: function H(f, a) {
                if (f.indexOf) {
                    var c = f.indexOf(a);
                    return (c === -1) ? false : c
                } else {
                    for (var b = 0, d = f.length; b < d; b++) {
                        if (f[b] === a) {
                            return b
                        }
                    };
                    return false
                }
            },
            toArray: function bc(a) {
                return Array.prototype.slice.call(a, 0)
            },
            hasParent: function G(a, b) {
                while (a) {
                    if (a == b) {
                        return true
                    };
                    a = a.parentNode
                };
                return false
            },
            getCenter: function y(h) {
                var f = [],
                    g = [],
                    a = [],
                    b = [],
                    d = Math.min,
                    c = Math.max;
                if (h.length === 1) {
                    return {
                        pageX: h[0].pageX,
                        pageY: h[0].pageY,
                        clientX: h[0].clientX,
                        clientY: h[0].clientY
                    }
                };
                bj.each(h, function (c) {
                    f.push(c.pageX);
                    g.push(c.pageY);
                    a.push(c.clientX);
                    b.push(c.clientY)
                });
                return {
                    pageX: (d.apply(Math, f) + c.apply(Math, f)) / 2,
                    pageY: (d.apply(Math, g) + c.apply(Math, g)) / 2,
                    clientX: (d.apply(Math, a) + c.apply(Math, a)) / 2,
                    clientY: (d.apply(Math, b) + c.apply(Math, b)) / 2
                }
            },
            getVelocity: function E(a, b, c) {
                return {
                    x: Math.abs(b / a) || 0,
                    y: Math.abs(c / a) || 0
                }
            },
            getAngle: function w(a, b) {
                var c = b.clientX - a.clientX,
                    d = b.clientY - a.clientY;
                return Math.atan2(d, c) * 180 / Math.PI
            },
            getDirection: function z(a, b) {
                var c = Math.abs(a.clientX - b.clientX),
                    d = Math.abs(a.clientY - b.clientY);
                if (c >= d) {
                    return a.clientX - b.clientX > 0 ? g : h
                };
                return a.clientY - b.clientY > 0 ? i : f
            },
            getDistance: function A(a, b) {
                var c = b.clientX - a.clientX,
                    d = b.clientY - a.clientY;
                return Math.sqrt((c * c) + (d * d))
            },
            getScale: function C(b, a) {
                if (b.length >= 2 && a.length >= 2) {
                    return this.getDistance(a[0], a[1]) / this.getDistance(b[0], b[1])
                };
                return 1
            },
            getRotation: function B(b, a) {
                if (b.length >= 2 && a.length >= 2) {
                    return this.getAngle(a[1], a[0]) - this.getAngle(b[1], b[0])
                };
                return 0
            },
            isVertical: function J(a) {
                return a == i || a == f
            },
            setPrefixedCss: function X(a, f, h, g) {
                var d = ["", "\x57\x65\x62\x6B\x69\x74", "\x4D\x6F\x7A", "\x4F", "\x6D\x73"];
                f = bj.toCamelCase(f);
                for (var b = 0; b < d.length; b++) {
                    var c = f;
                    if (d[b]) {
                        c = d[b] + c.slice(0, 1).toUpperCase() + c.slice(1)
                    };
                    if (c in a.style) {
                        a.style[c] = (g == null || g) && h || "";
                        break
                    }
                }
            },
            toggleBehavior: function be(a, c, d) {
                if (!c || !a || !a.style) {
                    return
                };
                bj.each(c, function (c, b) {
                    bj.setPrefixedCss(a, b, c, d)
                });
                var b = d && function () {
                        return false
                    };
                if (c.userSelect == "\x6E\x6F\x6E\x65") {
                    a.onselectstart = b
                };
                if (c.userDrag == "\x6E\x6F\x6E\x65") {
                    a.ondragstart = b
                }
            },
            toCamelCase: function bd(a) {
                return a.replace(/[_-]([a-z])/g, function (a) {
                    return a[1].toUpperCase()
                })
            }
        };
        var n = F.event = {
            preventMouseEvents: false,
            started: false,
            shouldDetect: false,
            on: function N(a, d, b, c) {
                var f = d.split("\x20");
                bj.each(f, function (d) {
                    bj.on(a, d, b);
                    c && c(d)
                })
            },
            off: function L(a, d, b, c) {
                var f = d.split("\x20");
                bj.each(f, function (d) {
                    bj.off(a, d, b);
                    c && c(d)
                })
            },
            onTouch: function P(a, b, c) {
                var f = this;
                var d = function d(d) {
                    var i = d.type.toLowerCase(),
                        h = F.HAS_POINTEREVENTS,
                        g = bj.inStr(i, "\x6D\x6F\x75\x73\x65"),
                        j;
                    if (g && f.preventMouseEvents) {
                        return
                    } else {
                        if (g && b == r && d.button === 0) {
                            f.preventMouseEvents = false;
                            f.shouldDetect = true
                        } else {
                            if (h && b == r) {
                                f.shouldDetect = (d.buttons === 1 || T.matchType(S, d))
                            } else {
                                if (!g && b == r) {
                                    f.preventMouseEvents = true;
                                    f.shouldDetect = true
                                }
                            }
                        }
                    }; if (h && b != o) {
                        T.updatePointer(b, d)
                    };
                    if (f.shouldDetect) {
                        j = f.doDetect.call(f, d, b, a, c)
                    };
                    if (j == o) {
                        f.preventMouseEvents = false;
                        f.shouldDetect = false;
                        T.reset()
                    };
                    if (h && b == o) {
                        T.updatePointer(b, d)
                    }
                };
                this.on(a, t[b], d);
                return d
            },
            doDetect: function k(f, h, d, i) {
                var j = this.getTouchList(f, h);
                var k = j.length;
                var m = h;
                var l = j.trigger;
                var b = k;
                if (h == r) {
                    l = s
                } else {
                    if (h == o) {
                        l = q;
                        b = j.length - ((f.changedTouches) ? f.changedTouches.length : 1)
                    }
                }; if (b > 0 && this.started) {
                    m = p
                };
                this.started = true;
                var g = this.collectEventData(d, m, j, f);
                if (h != o) {
                    i.call(c, g)
                };
                if (l) {
                    g.changedLength = b;
                    g.eventType = l;
                    i.call(c, g);
                    g.eventType = m;
                    delete g.changedLength
                };
                if (m == o) {
                    i.call(c, g);
                    this.started = false
                };
                return m
            },
            determineEventTypes: function d() {
                var a;
                if (F.HAS_POINTEREVENTS) {
                    if (bk.PointerEvent) {
                        a = ["\x70\x6F\x69\x6E\x74\x65\x72\x64\x6F\x77\x6E",
                                "\x70\x6F\x69\x6E\x74\x65\x72\x6D\x6F\x76\x65",
                                "\x70\x6F\x69\x6E\x74\x65\x72\x75\x70\x20\x70\x6F\x69\x6E\x74\x65\x72\x63\x61\x6E\x63\x65\x6C\x20\x6C\x6F\x73\x74\x70\x6F\x69\x6E\x74\x65\x72\x63\x61\x70\x74\x75\x72\x65"]
                    } else {
                        a = ["\x4D\x53\x50\x6F\x69\x6E\x74\x65\x72\x44\x6F\x77\x6E",
                                "\x4D\x53\x50\x6F\x69\x6E\x74\x65\x72\x4D\x6F\x76\x65",
                                "\x4D\x53\x50\x6F\x69\x6E\x74\x65\x72\x55\x70\x20\x4D\x53\x50\x6F\x69\x6E\x74\x65\x72\x43\x61\x6E\x63\x65\x6C\x20\x4D\x53\x4C\x6F\x73\x74\x50\x6F\x69\x6E\x74\x65\x72\x43\x61\x70\x74\x75\x72\x65"]
                    }
                } else {
                    if (F.NO_MOUSEEVENTS) {
                        a = ["\x74\x6F\x75\x63\x68\x73\x74\x61\x72\x74", "\x74\x6F\x75\x63\x68\x6D\x6F\x76\x65",
                                "\x74\x6F\x75\x63\x68\x65\x6E\x64\x20\x74\x6F\x75\x63\x68\x63\x61\x6E\x63\x65\x6C"]
                    } else {
                        a = ["\x74\x6F\x75\x63\x68\x73\x74\x61\x72\x74\x20\x6D\x6F\x75\x73\x65\x64\x6F\x77\x6E",
                                "\x74\x6F\x75\x63\x68\x6D\x6F\x76\x65\x20\x6D\x6F\x75\x73\x65\x6D\x6F\x76\x65",
                                "\x74\x6F\x75\x63\x68\x65\x6E\x64\x20\x74\x6F\x75\x63\x68\x63\x61\x6E\x63\x65\x6C\x20\x6D\x6F\x75\x73\x65\x75\x70"]
                    }
                };
                t[r] = a[0];
                t[p] = a[1];
                t[o] = a[2];
                return t
            },
            getTouchList: function D(b, c) {
                if (F.HAS_POINTEREVENTS) {
                    return T.getTouchList()
                };
                if (b.touches) {
                    if (c == p) {
                        return b.touches
                    };
                    var d = [];
                    var a = [].concat(bj.toArray(b.touches), bj.toArray(b.changedTouches));
                    var g = [];
                    bj.each(a, function (a) {
                        if (bj.inArray(d, a.identifier) === false) {
                            g.push(a)
                        };
                        d.push(a.identifier)
                    });
                    return g
                };
                b.identifier = 1;
                return [b]
            },
            collectEventData: function a(a, d, g, b) {
                var f = S;
                if (bj.inStr(b.type, "\x6D\x6F\x75\x73\x65") || T.matchType(Q, b)) {
                    f = Q
                } else {
                    if (T.matchType(R, b)) {
                        f = R
                    }
                };
                return {
                    center: bj.getCenter(g),
                    timeStamp: Date.now(),
                    target: b.target,
                    touches: g,
                    eventType: d,
                    pointerType: f,
                    srcEvent: b,
                    preventDefault: function () {
                        var a = this.srcEvent;
                        a.preventManipulation && a.preventManipulation();
                        a.preventDefault && a.preventDefault()
                    },
                    stopPropagation: function () {
                        this.srcEvent.stopPropagation()
                    },
                    stopDetect: function () {
                        return c.stopDetect()
                    }
                }
            }
        };
        var T = F.PointerEvent = {
            pointers: {},
            getTouchList: function D() {
                var f = [];
                bj.each(this.pointers, function (a) {
                    f.push(a)
                });
                return f
            },
            updatePointer: function bi(a, b) {
                if (a == o) {
                    delete this.pointers[b.pointerId]
                } else {
                    b.identifier = b.pointerId;
                    this.pointers[b.pointerId] = b
                }
            },
            matchType: function K(b, a) {
                if (!a.pointerType) {
                    return false
                };
                var c = a.pointerType,
                    d = {};
                d[Q] = (c === (a.MSPOINTER_TYPE_MOUSE || Q));
                d[S] = (c === (a.MSPOINTER_TYPE_TOUCH || S));
                d[R] = (c === (a.MSPOINTER_TYPE_PEN || R));
                return d[b]
            },
            reset: function W() {
                this.pointers = {}
            }
        };
        var c = F.detection = {
            gestures: [],
            current: null,
            previous: null,
            stopped: false,
            startDetect: function Z(c, a) {
                if (this.current) {
                    return
                };
                this.stopped = false;
                this.current = {
                    inst: c,
                    startEvent: bj.extend({}, a),
                    lastEvent: false,
                    lastCalcEvent: false,
                    futureCalcEvent: false,
                    lastCalcData: {},
                    name: ""
                };
                this.detect(a)
            },
            detect: function b(a) {
                if (!this.current || this.stopped) {
                    return
                };
                a = this.extendEventData(a);
                var b = this.current.inst,
                    c = b.options;
                bj.each(this.gestures, function d(d) {
                    if (!this.stopped && b.enabled && c[d.name]) {
                        d.handler.call(d, a, b)
                    }
                }, this);
                if (this.current) {
                    this.current.lastEvent = a
                };
                if (a.eventType == o) {
                    this.stopDetect()
                };
                return a
            },
            stopDetect: function ba() {
                this.previous = bj.extend({}, this.current);
                this.current = null;
                this.stopped = true
            },
            getCalculatedData: function x(i, c, f, g, h) {
                var d = this.current,
                    j = false,
                    b = d.lastCalcEvent,
                    a = d.lastCalcData;
                if (b && i.timeStamp - b.timeStamp > F.CALCULATE_INTERVAL) {
                    c = b.center;
                    f = i.timeStamp - b.timeStamp;
                    g = i.center.clientX - b.center.clientX;
                    h = i.center.clientY - b.center.clientY;
                    j = true
                };
                if (i.eventType == s || i.eventType == q) {
                    d.futureCalcEvent = i
                };
                if (!d.lastCalcEvent || j) {
                    a.velocity = bj.getVelocity(f, g, h);
                    a.angle = bj.getAngle(c, i.center);
                    a.direction = bj.getDirection(c, i.center);
                    d.lastCalcEvent = d.futureCalcEvent || i;
                    d.futureCalcEvent = i
                };
                i.velocityX = a.velocity.x;
                i.velocityY = a.velocity.y;
                i.interimAngle = a.angle;
                i.interimDirection = a.direction
            },
            extendEventData: function v(f) {
                var a = this.current,
                    h = a.startEvent,
                    g = a.lastEvent || h;
                if (f.eventType == s || f.eventType == q) {
                    h.touches = [];
                    bj.each(f.touches, function (a) {
                        h.touches.push({
                            clientX: a.clientX,
                            clientY: a.clientY
                        })
                    })
                };
                var b = f.timeStamp - h.timeStamp,
                    c = f.center.clientX - h.center.clientX,
                    d = f.center.clientY - h.center.clientY;
                this.getCalculatedData(f, g.center, b, c, d);
                bj.extend(f, {
                    startEvent: h,
                    deltaTime: b,
                    deltaX: c,
                    deltaY: d,
                    distance: bj.getDistance(h.center, f.center),
                    angle: bj.getAngle(h.center, f.center),
                    direction: bj.getDirection(h.center, f.center),
                    scale: bj.getScale(h.touches, f.touches),
                    rotation: bj.getRotation(h.touches, f.touches)
                });
                return f
            },
            register: function U(a) {
                var b = a.defaults || {};
                if (b[a.name] === bh) {
                    b[a.name] = true
                };
                bj.extend(F.defaults, b, true);
                a.index = a.index || 1000;
                this.gestures.push(a);
                this.gestures.sort(function (a, b) {
                    if (a.index < b.index) {
                        return -1
                    };
                    if (a.index > b.index) {
                        return 1
                    };
                    return 0
                });
                return this.gestures
            }
        };
        F.Instance = function (a, d) {
            var f = this;
            Y();
            this.element = a;
            this.enabled = true;
            bj.each(d, function (b, a) {
                delete d[a];
                d[bj.toCamelCase(a)] = b
            });
            this.options = bj.extend(bj.extend({}, F.defaults), d || {});
            if (this.options.behavior) {
                bj.toggleBehavior(this.element, this.options.behavior, true)
            };
            this.eventStartHandler = n.onTouch(a, r, function (a) {
                if (f.enabled && a.eventType == r) {
                    c.startDetect(f, a)
                } else {
                    if (a.eventType == s) {
                        c.detect(a)
                    }
                }
            });
            this.eventHandlers = []
        };
        F.Instance.prototype = {
            on: function O(a, b) {
                var c = this;
                n.on(c.element, a, b, function (a) {
                    c.eventHandlers.push({
                        gesture: a,
                        handler: b
                    })
                });
                return c
            },
            off: function M(a, b) {
                var c = this;
                n.off(c.element, a, b, function (d) {
                    var a = bj.inArray({
                        gesture: d,
                        handler: b
                    });
                    if (a !== false) {
                        c.eventHandlers.splice(a, 1)
                    }
                });
                return c
            },
            trigger: function bg(d, c) {
                if (!c) {
                    c = {}
                };
                var b = F.DOCUMENT.createEvent("\x45\x76\x65\x6E\x74");
                b.initEvent(d, true, true);
                b.gesture = c;
                var a = this.element;
                if (bj.hasParent(c.target, a)) {
                    a = c.target
                };
                a.dispatchEvent(b);
                return this
            },
            enable: function m(a) {
                this.enabled = a;
                return this
            },
            dispose: function j() {
                var b, a;
                bj.toggleBehavior(this.element, this.options.behavior, false);
                for (b = -1;
                (a = this.eventHandlers[++b]);) {
                    bj.off(this.element, a.gesture, a.handler)
                };
                this.eventHandlers = [];
                n.off(this.element, t[r], this.eventStartHandler);
                return null
            }
        };
        (function (b) {
            var d = false;
 
            function a(j, l) {
                var a = c.current;
                if (l.options.dragMaxTouches > 0 && j.touches.length > l.options.dragMaxTouches) {
                    return
                };
                switch (j.eventType) {
                case r:
                    d = false;
                    break;
                case p:
                    if (j.distance < l.options.dragMinDistance && a.name != b) {
                        return
                    };
                    var s = a.startEvent.center;
                    if (a.name != b) {
                        a.name = b;
                        if (l.options.dragDistanceCorrection && j.distance > 0) {
                            var k = Math.abs(l.options.dragMinDistance / j.distance);
                            s.pageX += j.deltaX * k;
                            s.pageY += j.deltaY * k;
                            s.clientX += j.deltaX * k;
                            s.clientY += j.deltaY * k;
                            j = c.extendEventData(j)
                        }
                    };
                    if (a.lastEvent.dragLockToAxis || (l.options.dragLockToAxis && l.options.dragLockMinDistance <= j.distance)) {
                        j.dragLockToAxis = true
                    };
                    var n = a.lastEvent.direction;
                    if (j.dragLockToAxis && n !== j.direction) {
                        if (bj.isVertical(n)) {
                            j.direction = (j.deltaY < 0) ? i : f
                        } else {
                            j.direction = (j.deltaX < 0) ? g : h
                        }
                    };
                    if (!d) {
                        l.trigger(b + "\x73\x74\x61\x72\x74", j);
                        d = true
                    };
                    l.trigger(b, j);
                    l.trigger(b + j.direction, j);
                    var m = bj.isVertical(j.direction);
                    if ((l.options.dragBlockVertical && m) || (l.options.dragBlockHorizontal && !m)) {
                        j.preventDefault()
                    };
                    break;
                case q:
                    if (d && j.changedLength <= l.options.dragMaxTouches) {
                        l.trigger(b + "\x65\x6E\x64", j);
                        d = false
                    };
                    break;
                case o:
                    d = false;
                    break
                }
            }
            F.gestures.Drag = {
                name: b,
                index: 50,
                handler: a,
                defaults: {
                    dragMinDistance: 10,
                    dragDistanceCorrection: true,
                    dragMaxTouches: 1,
                    dragBlockHorizontal: false,
                    dragBlockVertical: false,
                    dragLockToAxis: false,
                    dragLockMinDistance: 25
                }
            }
        })("\x64\x72\x61\x67");
        F.gestures.Gesture = {
            name: "\x67\x65\x73\x74\x75\x72\x65",
            index: 1337,
            handler: function V(a, b) {
                b.trigger(this.name, a)
            }
        };
        (function (b) {
            var d;
 
            function a(f, g) {
                var h = g.options,
                    a = c.current;
                switch (f.eventType) {
                case r:
                    clearTimeout(d);
                    a.name = b;
                    d = setTimeout(function () {
                        if (a && a.name == b) {
                            g.trigger(b, f)
                        }
                    }, h.holdTimeout);
                    break;
                case p:
                    if (f.distance > h.holdThreshold) {
                        clearTimeout(d)
                    };
                    break;
                case q:
                    clearTimeout(d);
                    break
                }
            }
            F.gestures.Hold = {
                name: b,
                index: 10,
                defaults: {
                    holdTimeout: 500,
                    holdThreshold: 2
                },
                handler: a
            }
        })("\x68\x6F\x6C\x64");
        F.gestures.Release = {
            name: "\x72\x65\x6C\x65\x61\x73\x65",
            index: Infinity,
            handler: function V(a, b) {
                if (a.eventType == q) {
                    b.trigger(this.name, a)
                }
            }
        };
        F.gestures.Swipe = {
            name: "\x73\x77\x69\x70\x65",
            index: 40,
            defaults: {
                swipeMinTouches: 1,
                swipeMaxTouches: 1,
                swipeVelocityX: 0.6,
                swipeVelocityY: 0.6
            },
            handler: function bb(a, b) {
                if (a.eventType == q) {
                    var d = a.touches.length,
                        c = b.options;
                    if (d < c.swipeMinTouches || d > c.swipeMaxTouches) {
                        return
                    };
                    if (a.velocityX > c.swipeVelocityX || a.velocityY > c.swipeVelocityY) {
                        b.trigger(this.name, a);
                        b.trigger(this.name + a.direction, a)
                    }
                }
            }
        };
        (function (b) {
            var a = false;
 
            function d(g, h) {
                var i = h.options,
                    d = c.current,
                    j = c.previous,
                    k, f;
                switch (g.eventType) {
                case r:
                    a = false;
                    break;
                case p:
                    a = a || (g.distance > i.tapMaxDistance);
                    break;
                case o:
                    if (!bj.inStr(g.srcEvent.type, "\x63\x61\x6E\x63\x65\x6C") && g.deltaTime < i.tapMaxTime && !a) {
                        k = j && j.lastEvent && g.timeStamp - j.lastEvent.timeStamp;
                        f = false;
                        if (j && j.name == b && (k && k < i.doubleTapInterval) && g.distance < i.doubleTapDistance) {
                            h.trigger("\x64\x6F\x75\x62\x6C\x65\x74\x61\x70", g);
                            f = true
                        };
                        if (!f || i.tapAlways) {
                            d.name = b;
                            h.trigger(d.name, g)
                        }
                    };
                    break
                }
            }
            F.gestures.Tap = {
                name: b,
                index: 100,
                handler: d,
                defaults: {
                    tapMaxTime: 250,
                    tapMaxDistance: 10,
                    tapAlways: true,
                    doubleTapDistance: 20,
                    doubleTapInterval: 300
                }
            }
        })("\x74\x61\x70");
        F.gestures.Touch = {
            name: "\x74\x6F\x75\x63\x68",
            index: -Infinity,
            defaults: {
                preventDefault: true,
                preventMouse: false
            },
            handler: function bf(a, b) {
                if (b.options.preventMouse && a.pointerType == Q) {
                    a.stopDetect();
                    return
                };
                if (b.options.preventDefault) {
                    a.preventDefault()
                };
                if (a.eventType == s) {
                    b.trigger("\x74\x6F\x75\x63\x68", a)
                }
            }
        };
        (function (a) {
            var d = false;
 
            function b(b, f) {
                switch (b.eventType) {
                case r:
                    d = false;
                    break;
                case p:
                    if (b.touches.length < 2) {
                        return
                    };
                    var h = Math.abs(1 - b.scale);
                    var g = Math.abs(b.rotation);
                    if (h < f.options.transformMinScale && g < f.options.transformMinRotation) {
                        return
                    };
                    c.current.name = a;
                    if (!d) {
                        f.trigger(a + "\x73\x74\x61\x72\x74", b);
                        d = true
                    };
                    f.trigger(a, b);
                    if (g > f.options.transformMinRotation) {
                        f.trigger("\x72\x6F\x74\x61\x74\x65", b)
                    };
                    if (h > f.options.transformMinScale) {
                        f.trigger("\x70\x69\x6E\x63\x68", b);
                        f.trigger("\x70\x69\x6E\x63\x68" + (b.scale < 1 ? "\x69\x6E" : "\x6F\x75\x74"), b)
                    };
                    break;
                case q:
                    if (d && b.changedLength < 2) {
                        f.trigger(a + "\x65\x6E\x64", b);
                        d = false
                    };
                    break
                }
            }
            F.gestures.Transform = {
                name: a,
                index: 45,
                defaults: {
                    transformMinScale: 0.01,
                    transformMinRotation: 1
                },
                handler: b
            }
        })("\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D");
        if (typeof define == "\x66\x75\x6E\x63\x74\x69\x6F\x6E" && define.amd) {
            define(function () {
                return F
            })
        } else {
            if (typeof module !== "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64" && module.exports) {
                module.exports = F
            } else {
                bk.Hammer = F
            }
        }
    }
    function bI() {
        "\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74";
        var b = null;
        var o = true;
        var k = false;
        m();
        if (o) {
            var j = (typeof b.createGain === "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64") ? b.createGainNode() : b.createGain();
            j.gain.value = 1;
            j.connect(b.destination)
        };
        var g = function () {
            this.init()
        };
        g.prototype = {
            init: function () {
                var a = this || f;
                a._codecs = {};
                a._howls = [];
                a._muted = false;
                a._volume = 1;
                a.noAudio = k;
                a.usingWebAudio = o;
                a.ctx = b;
                if (!k) {
                    a._setupCodecs()
                };
                return a
            },
            volume: function (h) {
                var d = this || f;
                h = parseFloat(h);
                if (typeof h !== "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64" && h >= 0 && h <= 1) {
                    d._volume = h;
                    if (o) {
                        j.gain.value = h
                    };
                    for (var a = 0; a < d._howls.length; a++) {
                        if (!d._howls[a]._webAudio) {
                            var b = d._howls[a]._getSoundIds();
                            for (var c = 0; c < b.length; c++) {
                                var g = d._howls[a]._soundById(b[c]);
                                if (g && g._node) {
                                    g._node.volume = g._volume * h
                                }
                            }
                        }
                    };
                    return d
                };
                return d._volume
            },
            mute: function (d) {
                var g = this || f;
                g._muted = d;
                if (o) {
                    j.gain.value = d ? 0 : g._volume
                };
                for (var a = 0; a < g._howls.length; a++) {
                    if (!g._howls[a]._webAudio) {
                        var b = g._howls[a]._getSoundIds();
                        for (var c = 0; c < b.length; c++) {
                            var h = g._howls[a]._soundById(b[c]);
                            if (h && h._node) {
                                h._node.muted = (d) ? true : h._muted
                            }
                        }
                    }
                };
                return g
            },
            unload: function () {
                var b = this || f;
                for (var a = b._howls.length - 1; a >= 0; a--) {
                    b._howls[a].unload()
                };
                return b
            },
            codecs: function (a) {
                return (this || f)._codecs[a]
            },
            _setupCodecs: function () {
                var d = this || f;
                var a = new Audio();
                var c = a.canPlayType("\x61\x75\x64\x69\x6F\x2F\x6D\x70\x65\x67\x3B").replace(/^no$/, "");
                var b = /OPR\//.test(navigator.userAgent);
                d._codecs = {
                    mp3: !! (!b && (c || a.canPlayType("\x61\x75\x64\x69\x6F\x2F\x6D\x70\x33\x3B").replace(/^no$/, ""))),
                    mpeg: !! c,
                    opus: !! a.canPlayType(
                        "\x61\x75\x64\x69\x6F\x2F\x6F\x67\x67\x3B\x20\x63\x6F\x64\x65\x63\x73\x3D\x22\x6F\x70\x75\x73\x22")
                        .replace(/^no$/, ""),
                    ogg: !! a.canPlayType(
                        "\x61\x75\x64\x69\x6F\x2F\x6F\x67\x67\x3B\x20\x63\x6F\x64\x65\x63\x73\x3D\x22\x76\x6F\x72\x62\x69\x73\x22")
                        .replace(/^no$/, ""),
                    wav: !! a.canPlayType(
                        "\x61\x75\x64\x69\x6F\x2F\x77\x61\x76\x3B\x20\x63\x6F\x64\x65\x63\x73\x3D\x22\x31\x22").replace(
                        /^no$/, ""),
                    aac: !! a.canPlayType("\x61\x75\x64\x69\x6F\x2F\x61\x61\x63\x3B").replace(/^no$/, ""),
                    m4a: !! (a.canPlayType("\x61\x75\x64\x69\x6F\x2F\x78\x2D\x6D\x34\x61\x3B") || a.canPlayType(
                        "\x61\x75\x64\x69\x6F\x2F\x6D\x34\x61\x3B") || a.canPlayType(
                        "\x61\x75\x64\x69\x6F\x2F\x61\x61\x63\x3B")).replace(/^no$/, ""),
                    mp4: !! (a.canPlayType("\x61\x75\x64\x69\x6F\x2F\x78\x2D\x6D\x70\x34\x3B") || a.canPlayType(
                        "\x61\x75\x64\x69\x6F\x2F\x6D\x70\x34\x3B") || a.canPlayType(
                        "\x61\x75\x64\x69\x6F\x2F\x61\x61\x63\x3B")).replace(/^no$/, ""),
                    weba: !! a.canPlayType(
                        "\x61\x75\x64\x69\x6F\x2F\x77\x65\x62\x6D\x3B\x20\x63\x6F\x64\x65\x63\x73\x3D\x22\x76\x6F\x72\x62\x69\x73\x22")
                        .replace(/^no$/, ""),
                    webm: !! a.canPlayType(
                        "\x61\x75\x64\x69\x6F\x2F\x77\x65\x62\x6D\x3B\x20\x63\x6F\x64\x65\x63\x73\x3D\x22\x76\x6F\x72\x62\x69\x73\x22")
                        .replace(/^no$/, "")
                };
                return d
            }
        };
        var f = new g();
        var d = function (a) {
            var b = this;
            if (!a.src || a.src.length === 0) {
                console.error(
                    "\x41\x6E\x20\x61\x72\x72\x61\x79\x20\x6F\x66\x20\x73\x6F\x75\x72\x63\x65\x20\x66\x69\x6C\x65\x73\x20\x6D\x75\x73\x74\x20\x62\x65\x20\x70\x61\x73\x73\x65\x64\x20\x77\x69\x74\x68\x20\x61\x6E\x79\x20\x6E\x65\x77\x20\x48\x6F\x77\x6C\x2E");
                return
            };
            b.init(a)
        };
        d.prototype = {
            init: function (a) {
                var b = this;
                b._onends = [];
                b._autoplay = a.autoplay || false;
                b._ext = a.ext || null;
                b._html5 = a.html5 || false;
                b._muted = a.mute || false;
                b._loop = a.loop || false;
                b._pool = a.pool || 5;
                b._preload = (typeof a.preload === "\x62\x6F\x6F\x6C\x65\x61\x6E") ? a.preload : true;
                b._rate = a.rate || 1;
                b._sprite = a.sprite || {};
                b._src = (typeof a.src !== "\x73\x74\x72\x69\x6E\x67") ? a.src : [a.src];
                b._volume = a.volume !== undefined ? a.volume : 1;
                b._duration = a.duration || 0;
                b._loaded = false;
                b._sounds = [];
                b._endTimers = {};
                b._onend = a.onend ? [{
                        fn: a.onend
                    }] : [];
                b._onfaded = a.onfaded ? [{
                        fn: a.onfaded
                    }] : [];
                b._onload = a.onload ? [{
                        fn: a.onload
                    }] : [];
                b._onloaderror = a.onloaderror ? [{
                        fn: a.onloaderror
                    }] : [];
                b._onpause = a.onpause ? [{
                        fn: a.onpause
                    }] : [];
                b._onplay = a.onplay ? [{
                        fn: a.onplay
                    }] : [];
                b._onstop = a.onstop ? [{
                        fn: a.onstop
                    }] : [];
                b._webAudio = o && !b._html5;
                f._howls.push(b);
                if (b._preload) {
                    b.load()
                };
                return b
            },
            load: function () {
                var c = this;
                var g = null;
                if (k) {
                    c._emit("\x6C\x6F\x61\x64\x65\x72\x72\x6F\x72");
                    return
                };
                if (typeof c._src === "\x73\x74\x72\x69\x6E\x67") {
                    c._src = [c._src]
                };
                for (var b = 0; b < c._src.length; b++) {
                    var a, d;
                    if (c._ext && c._ext[b]) {
                        a = c._ext[b]
                    } else {
                        d = c._src[b];
                        a = /^data:audio\/([^;,]+);/i.exec(d);
                        if (!a) {
                            a = /\.([^.]+)$/.exec(d.split("\x3F", 1)[0])
                        };
                        if (a) {
                            a = a[1].toLowerCase()
                        }
                    }; if (f.codecs(a)) {
                        g = c._src[b];
                        break
                    }
                };
                if (!g) {
                    c._emit("\x6C\x6F\x61\x64\x65\x72\x72\x6F\x72");
                    return
                };
                c._src = g;
                new n(c);
                if (c._webAudio) {
                    h(c)
                };
                return c
            },
            play: function (q, k) {
                var o = this;
                var a = arguments;
                var g = null;
                if (typeof q === "\x6E\x75\x6D\x62\x65\x72") {
                    g = q;
                    q = null
                } else {
                    if (typeof q === "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64") {
                        q = "\x5F\x5F\x64\x65\x66\x61\x75\x6C\x74";
                        var j = 0;
                        for (var d = 0; d < o._sounds.length; d++) {
                            if (o._sounds[d]._paused && !o._sounds[d]._ended) {
                                j++;
                                g = o._sounds[d]._id
                            }
                        };
                        if (j === 1) {
                            q = null
                        } else {
                            g = null
                        }
                    }
                };
                var p = g ? o._soundById(g) : o._inactiveSound();
                if (!p) {
                    return null
                };
                if (g && !q) {
                    q = p._sprite || "\x5F\x5F\x64\x65\x66\x61\x75\x6C\x74"
                };
                if (q && k) {
                    o._onends[p._id] = k
                };
                if (!o._loaded && !o._sprite[q]) {
                    o.once("\x6C\x6F\x61\x64", function () {
                        o.play(o._soundById(p._id) ? p._id : undefined)
                    });
                    return p._id
                };
                if (g && !p._paused) {
                    return p._id
                };
                var n = p._seek > 0 ? p._seek : o._sprite[q][0] / 1000;
                var c = ((o._sprite[q][0] + o._sprite[q][1]) / 1000) - n;
                var r = (c * 1000) / Math.abs(p._rate);
                o._endTimers[p._id] = setTimeout(o._ended.bind(o, p), r);
                p._paused = false;
                p._ended = false;
                p._sprite = q;
                p._seek = n;
                p._start = o._sprite[q][0] / 1000;
                p._stop = (o._sprite[q][0] + o._sprite[q][1]) / 1000;
                p._loop = !! (p._loop || o._sprite[q][2]);
                var i = p._node;
                if (o._webAudio) {
                    var m = function () {
                        o._refreshBuffer(p);
                        var d = (p._muted || o._muted) ? 0 : p._volume * f.volume();
                        i.gain.setValueAtTime(d, b.currentTime);
                        p._playStart = b.currentTime;
                        if (typeof i.bufferSource.start === "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64") {
                            p._loop ? i.bufferSource.noteGrainOn(0, n, 86400) : i.bufferSource.noteGrainOn(0, n, c)
                        } else {
                            p._loop ? i.bufferSource.start(0, n, 86400) : i.bufferSource.start(0, n, c)
                        }; if (!o._endTimers[p._id]) {
                            o._endTimers[p._id] = setTimeout(o._ended.bind(o, p), r)
                        };
                        if (!a[1]) {
                            setTimeout(function () {
                                o._emit("\x70\x6C\x61\x79", p._id)
                            }, 0)
                        }
                    };
                    if (o._loaded) {
                        m()
                    } else {
                        o.once("\x6C\x6F\x61\x64", m);
                        o._clearTimer(p._id)
                    }
                } else {
                    var l = function () {
                        i.currentTime = n;
                        i.muted = p._muted || o._muted || f._muted || i.muted;
                        i.volume = p._volume * f.volume();
                        i.playbackRate = p._rate;
                        setTimeout(function () {
                            i.play();
                            if (!a[1]) {
                                o._emit("\x70\x6C\x61\x79", p._id)
                            }
                        }, 0)
                    };
                    if (i.readyState === 4 || !i.readyState && navigator.isCocoonJS) {
                        l()
                    } else {
                        var h = function () {
                            o._endTimers[p._id] = setTimeout(o._ended.bind(o, p), r);
                            l();
                            i.removeEventListener("\x63\x61\x6E\x70\x6C\x61\x79\x74\x68\x72\x6F\x75\x67\x68", h, false)
                        };
                        i.addEventListener("\x63\x61\x6E\x70\x6C\x61\x79\x74\x68\x72\x6F\x75\x67\x68", h, false);
                        o._clearTimer(p._id)
                    }
                };
                return p._id
            },
            pause: function (b) {
                var d = this;
                if (!d._loaded) {
                    d.once("\x70\x6C\x61\x79", function () {
                        d.pause(b)
                    });
                    return d
                };
                var c = d._getSoundIds(b);
                for (var a = 0; a < c.length; a++) {
                    d._clearTimer(c[a]);
                    var f = d._soundById(c[a]);
                    if (f && !f._paused) {
                        f._seek = d.seek(c[a]);
                        f._paused = true;
                        d._stopFade(c[a]);
                        if (d._webAudio) {
                            if (!f._node.bufferSource) {
                                return d
                            };
                            if (typeof f._node.bufferSource.stop === "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64") {
                                f._node.bufferSource.noteOff(0)
                            } else {
                                f._node.bufferSource.stop(0)
                            };
                            f._node.bufferSource = null
                        } else {
                            if (!isNaN(f._node.duration)) {
                                f._node.pause()
                            }
                        }; if (!arguments[1]) {
                            d._emit("\x70\x61\x75\x73\x65", f._id)
                        }
                    }
                };
                return d
            },
            stop: function (b) {
                var d = this;
                if (!d._loaded) {
                    if (typeof d._sounds[0]._sprite !== "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64") {
                        d.once("\x70\x6C\x61\x79", function () {
                            d.stop(b)
                        })
                    };
                    return d
                };
                var c = d._getSoundIds(b);
                for (var a = 0; a < c.length; a++) {
                    d._clearTimer(c[a]);
                    var f = d._soundById(c[a]);
                    if (f && !f._paused) {
                        f._seek = f._start || 0;
                        f._paused = true;
                        f._ended = true;
                        d._stopFade(c[a]);
                        if (d._webAudio && f._node) {
                            if (!f._node.bufferSource) {
                                return d
                            };
                            if (typeof f._node.bufferSource.stop === "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64") {
                                f._node.bufferSource.noteOff(0)
                            } else {
                                f._node.bufferSource.stop(0)
                            };
                            f._node.bufferSource = null
                        } else {
                            if (f._node && !isNaN(f._node.duration)) {
                                f._node.pause();
                                f._node.currentTime = f._start || 0
                            }
                        };
                        d._emit("\x73\x74\x6F\x70", f._id)
                    }
                };
                return d
            },
            mute: function (g, c) {
                var h = this;
                if (!h._loaded) {
                    h.once("\x70\x6C\x61\x79", function () {
                        h.mute(g, c)
                    });
                    return h
                };
                if (typeof c === "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64") {
                    if (typeof g === "\x62\x6F\x6F\x6C\x65\x61\x6E") {
                        h._muted = g
                    } else {
                        return h._muted
                    }
                };
                var d = h._getSoundIds(c);
                for (var a = 0; a < d.length; a++) {
                    var i = h._soundById(d[a]);
                    if (i) {
                        i._muted = g;
                        if (h._webAudio && i._node) {
                            i._node.gain.setValueAtTime(g ? 0 : i._volume * f.volume(), b.currentTime)
                        } else {
                            if (i._node) {
                                i._node.muted = f._muted ? true : g
                            }
                        }
                    }
                };
                return h
            },
            _stopFade: function (a) {
                var c = this;
                var d = c._soundById(a);
                if (d._interval) {
                    clearInterval(d._interval);
                    delete d._interval;
                    c._emit("\x66\x61\x64\x65\x64", a)
                } else {
                    if (d._timeout) {
                        clearTimeout(d._timeout);
                        delete d._timeout;
                        d._node.gain.cancelScheduledValues(b.currentTime);
                        c._emit("\x66\x61\x64\x65\x64", a)
                    }
                };
                return c
            },
            loop: function () {
                var g = this;
                var a = arguments;
                var f, c, h;
                if (a.length === 0) {
                    return g._loop
                } else {
                    if (a.length === 1) {
                        if (typeof a[0] === "\x62\x6F\x6F\x6C\x65\x61\x6E") {
                            f = a[0];
                            g._loop = f
                        } else {
                            h = g._soundById(parseInt(a[0], 10));
                            return h ? h._loop : false
                        }
                    } else {
                        if (a.length === 2) {
                            f = a[0];
                            c = parseInt(a[1], 10)
                        }
                    }
                };
                var d = g._getSoundIds(c);
                for (var b = 0; b < d.length; b++) {
                    h = g._soundById(d[b]);
                    if (h) {
                        h._loop = f;
                        if (g._webAudio && h._node && h._node.bufferSource) {
                            h._node.bufferSource.loop = f
                        }
                    }
                };
                return g
            },
            playing: function (a) {
                var b = this;
                var c = b._soundById(a) || b._sounds[0];
                return c ? !c._paused : false
            },
            duration: function () {
                return this._duration
            },
            unload: function () {
                var d = this;
                var g = d._sounds;
                for (var b = 0; b < g.length; b++) {
                    if (!g[b]._paused) {
                        d.stop(g[b]._id);
                        d._emit("\x65\x6E\x64", g[b]._id)
                    };
                    if (!d._webAudio) {
                        g[b]._node.src = "";
                        g[b]._node.removeEventListener("\x65\x72\x72\x6F\x72", g[b]._errorFn, false);
                        g[b]._node.removeEventListener("\x63\x61\x6E\x70\x6C\x61\x79\x74\x68\x72\x6F\x75\x67\x68", g[b]
                            ._loadFn, false)
                    };
                    delete g[b]._node;
                    d._clearTimer(g[b]._id);
                    var c = f._howls.indexOf(d);
                    if (c >= 0) {
                        f._howls.splice(c, 1)
                    }
                };
                if (a) {
                    delete a[d._src]
                };
                d = null;
                return null
            },
            on: function (a, c, d, f) {
                var g = this;
                var b = g["\x5F\x6F\x6E" + a];
                if (typeof c === "\x66\x75\x6E\x63\x74\x69\x6F\x6E") {
                    b.push(f ? {
                        id: d,
                        fn: c,
                        once: f
                    } : {
                        id: d,
                        fn: c
                    })
                };
                return g
            },
            off: function (a, c, f) {
                var g = this;
                var b = g["\x5F\x6F\x6E" + a];
                if (c) {
                    for (var d = 0; d < b.length; d++) {
                        if (c === b[d].fn && f === b[d].id) {
                            b.splice(d, 1);
                            break
                        }
                    }
                } else {
                    g["\x6F\x6E" + a] = []
                };
                return g
            },
            once: function (a, b, c) {
                var d = this;
                d.on(a, b, c, 1);
                return d
            },
            _emit: function (a, d, f) {
                var g = this;
                var b = g["\x5F\x6F\x6E" + a];
                for (var c = 0; c < b.length; c++) {
                    if (!b[c].id || b[c].id === d) {
                        setTimeout(function (a) {
                            a.call(this, d, f)
                        }.bind(g, b[c].fn), 0);
                        if (b[c].once) {
                            g.off(a, b[c].fn, d)
                        }
                    }
                };
                return g
            },
            _ended: function (d) {
                var c = this;
                var f = d._sprite;
                var a = !! (d._loop || c._sprite[f][2]);
                c._emit("\x65\x6E\x64", d._id);
                if (c._onends[d._id]) {
                    c._onends[d._id]();
                    delete c._onends[d._id]
                };
                if (!c._webAudio && a) {
                    c.stop(d._id).play(d._id)
                };
                if (c._webAudio && a) {
                    c._emit("\x70\x6C\x61\x79", d._id);
                    d._seek = d._start || 0;
                    d._playStart = b.currentTime;
                    var g = ((d._stop - d._start) * 1000) / Math.abs(d._rate);
                    c._endTimers[d._id] = setTimeout(c._ended.bind(c, d), g)
                };
                if (c._webAudio && !a) {
                    d._paused = true;
                    d._ended = true;
                    d._seek = d._start || 0;
                    c._clearTimer(d._id);
                    d._node.bufferSource = null
                };
                if (!c._webAudio && !a) {
                    c.stop(d._id)
                };
                return c
            },
            _clearTimer: function (a) {
                var b = this;
                if (b._endTimers[a]) {
                    clearTimeout(b._endTimers[a]);
                    delete b._endTimers[a]
                };
                return b
            },
            _soundById: function (b) {
                var c = this;
                for (var a = 0; a < c._sounds.length; a++) {
                    if (b === c._sounds[a]._id) {
                        return c._sounds[a]
                    }
                };
                return null
            },
            _inactiveSound: function () {
                var b = this;
                b._drain();
                for (var a = 0; a < b._sounds.length; a++) {
                    if (b._sounds[a]._ended) {
                        return b._sounds[a].reset()
                    }
                };
                return new n(b)
            },
            _drain: function () {
                var d = this;
                var c = d._pool;
                var a = 0;
                var b = 0;
                if (d._sounds.length < c) {
                    return
                };
                for (b = 0; b < d._sounds.length; b++) {
                    if (d._sounds[b]._ended) {
                        a++
                    }
                };
                for (b = d._sounds.length - 1; b >= 0; b--) {
                    if (a <= c) {
                        return
                    };
                    if (d._sounds[b]._ended) {
                        if (d._webAudio && d._sounds[b]._node) {
                            d._sounds[b]._node.disconnect(0)
                        };
                        d._sounds.splice(b, 1);
                        a--
                    }
                }
            },
            _getSoundIds: function (b) {
                var d = this;
                if (typeof b === "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64") {
                    var c = [];
                    for (var a = 0; a < d._sounds.length; a++) {
                        c.push(d._sounds[a]._id)
                    };
                    return c
                } else {
                    return [b]
                }
            },
            _refreshBuffer: function (d) {
                var c = this;
                d._node.bufferSource = b.createBufferSource();
                d._node.bufferSource.buffer = a[c._src];
                if (d._panner) {
                    d._node.bufferSource.connect(d._panner)
                } else {
                    d._node.bufferSource.connect(d._node)
                };
                d._node.bufferSource.loop = d._loop;
                if (d._loop) {
                    d._node.bufferSource.loopStart = d._start || 0;
                    d._node.bufferSource.loopEnd = d._stop
                };
                d._node.bufferSource.playbackRate.value = c._rate;
                return c
            }
        };
        var n = function (a) {
            this._parent = a;
            this.init()
        };
        n.prototype = {
            init: function () {
                var b = this;
                var a = b._parent;
                b._muted = a._muted;
                b._loop = a._loop;
                b._volume = a._volume;
                b._muted = a._muted;
                b._rate = a._rate;
                b._seek = 0;
                b._paused = true;
                b._ended = true;
                b._id = Math.round(Date.now() * Math.random());
                a._sounds.push(b);
                b.create();
                return b
            },
            create: function () {
                var c = this;
                var a = c._parent;
                var d = (f._muted || c._muted || c._parent._muted) ? 0 : c._volume * f.volume();
                if (a._webAudio) {
                    c._node = (typeof b.createGain === "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64") ? b.createGainNode() : b
                        .createGain();
                    c._node.gain.setValueAtTime(d, b.currentTime);
                    c._node.paused = true;
                    c._node.connect(j)
                } else {
                    c._node = new Audio();
                    c._errorFn = c._errorListener.bind(c);
                    c._node.addEventListener("\x65\x72\x72\x6F\x72", c._errorFn, false);
                    c._loadFn = c._loadListener.bind(c);
                    c._node.addEventListener("\x63\x61\x6E\x70\x6C\x61\x79\x74\x68\x72\x6F\x75\x67\x68", c._loadFn,
                        false);
                    c._node.src = a._src;
                    c._node.preload = "\x61\x75\x74\x6F";
                    c._node.volume = d;
                    c._node.load()
                };
                return c
            },
            reset: function () {
                var b = this;
                var a = b._parent;
                b._muted = a._muted;
                b._loop = a._loop;
                b._volume = a._volume;
                b._muted = a._muted;
                b._rate = a._rate;
                b._seek = 0;
                b._paused = true;
                b._ended = true;
                b._sprite = null;
                b._id = Math.round(Date.now() * Math.random());
                return b
            },
            _errorListener: function () {
                var a = this;
                if (a._node.error && a._node.error.code === 4) {
                    f.noAudio = true
                };
                a._parent._emit("\x6C\x6F\x61\x64\x65\x72\x72\x6F\x72", a._id, a._node.error ? a._node.error.code : 0);
                a._node.removeEventListener("\x65\x72\x72\x6F\x72", a._errorListener, false)
            },
            _loadListener: function () {
                var b = this;
                var a = b._parent;
                if (a._duration == 0) {
                    a._duration = Math.ceil(b._node.duration * 10) / 10
                };
                if (Object.keys(a._sprite).length === 0) {
                    a._sprite = {
                        __default: [0, a._duration * 1000]
                    }
                };
                if (!a._loaded) {
                    a._loaded = true;
                    a._emit("\x6C\x6F\x61\x64")
                };
                if (a._autoplay) {
                    a.play()
                };
                b._node.removeEventListener("\x63\x61\x6E\x70\x6C\x61\x79\x74\x68\x72\x6F\x75\x67\x68", b._loadFn,
                    false)
            }
        };
        if (o) {
            var a = {};
            var h = function (g) {
                var h = g._src;
                if (a[h]) {
                    g._duration = a[h].duration;
                    i(g);
                    return
                };
                if (/^data:[^;]+;base64,/.test(h)) {
                    window.atob = window.atob || function (g) {
                        var d =
                            "\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4A\x4B\x4C\x4D\x4E\x4F\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5A\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6A\x6B\x6C\x6D\x6E\x6F\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7A\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2B\x2F\x3D";
                        var i = String(g).replace(/=+$/, "");
                        for (var a = 0, b, c, f = 0, h = ""; c = i.charAt(f++);~ c && (b = a % 4 ? b * 64 + c : c, a++ %
                            4) ? h += String.fromCharCode(255 & b >> (-2 * a & 6)) : 0) {
                            c = d.indexOf(c)
                        };
                        return h
                    };
                    var b = atob(h.split("\x2C")[1]);
                    var d = new Uint8Array(b.length);
                    for (var f = 0; f < b.length; ++f) {
                        d[f] = b.charCodeAt(f)
                    };
                    c(d.buffer, g)
                } else {
                    var j = new XMLHttpRequest();
                    j.open("\x47\x45\x54", h, true);
                    j.responseType = "\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72";
                    j.onload = function () {
                        c(j.response, g)
                    };
                    j.onerror = function () {
                        if (g._webAudio) {
                            g._html5 = true;
                            g._webAudio = false;
                            g._sounds = [];
                            delete a[h];
                            g.load()
                        }
                    };
                    l(j)
                }
            };
            var l = function (a) {
                try {
                    a.send()
                } catch (e) {
                    a.onerror()
                }
            };
            var c = function (d, f) {
                b.decodeAudioData(d, function (b) {
                    if (b) {
                        a[f._src] = b;
                        i(f, b)
                    }
                }, function () {
                    f._emit("\x6C\x6F\x61\x64\x65\x72\x72\x6F\x72")
                })
            };
            var i = function (b, a) {
                if (a && !b._duration) {
                    b._duration = a.duration
                };
                if (Object.keys(b._sprite).length === 0) {
                    b._sprite = {
                        __default: [0, b._duration * 1000]
                    }
                };
                if (!b._loaded) {
                    b._loaded = true;
                    b._emit("\x6C\x6F\x61\x64")
                };
                if (b._autoplay) {
                    b.play()
                }
            }
        };
 
        function m() {
            try {
                if (typeof AudioContext !== "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64") {
                    b = new AudioContext()
                } else {
                    if (typeof webkitAudioContext !== "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64") {
                        b = new webkitAudioContext()
                    } else {
                        o = false
                    }
                }
            } catch (e) {
                o = false
            };
            if (!o) {
                if (typeof Audio !== "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64") {
                    try {
                        new Audio()
                    } catch (e) {
                        k = true
                    }
                } else {
                    k = true
                }
            };
            var a = new Audio();
            if (a.muted) {
                k = true
            }
        }
        if (typeof define === "\x66\x75\x6E\x63\x74\x69\x6F\x6E" && define.amd) {
            define("\x68\x6F\x77\x6C\x65\x72", function () {
                return {
                    Howler: f,
                    Howl: d
                }
            })
        };
        if (typeof exports !== "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64") {
            exports.Howler = f;
            exports.Howl = d
        };
        if (typeof window !== "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64") {
            window.HowlerGlobal = g;
            window.Howler = f;
            window.Howl = d;
            window.Sound = n
        }
    }
    function bJ(h, a) {
        var d = false,
            g, b, f = {
                hidden: "\x76\x69\x73\x69\x62\x69\x6C\x69\x74\x79\x63\x68\x61\x6E\x67\x65",
                webkitHidden: "\x77\x65\x62\x6B\x69\x74\x76\x69\x73\x69\x62\x69\x6C\x69\x74\x79\x63\x68\x61\x6E\x67\x65",
                mozHidden: "\x6D\x6F\x7A\x76\x69\x73\x69\x62\x69\x6C\x69\x74\x79\x63\x68\x61\x6E\x67\x65",
                msHidden: "\x6D\x73\x76\x69\x73\x69\x62\x69\x6C\x69\x74\x79\x63\x68\x61\x6E\x67\x65"
            };
        for (g in f) {
            if (g in a) {
                b = f[g];
                break
            }
        };
        a.addEventListener(b, function () {
            c(a[g] ? "\x69\x64\x6C\x65" : "\x77\x61\x6B\x65\x75\x70")
        });
        h.addEventListener("\x70\x61\x67\x65\x68\x69\x64\x65", function () {
            c("\x69\x64\x6C\x65")
        }, false);
        h.addEventListener("\x70\x61\x67\x65\x73\x68\x6F\x77", function () {
            c("\x77\x61\x6B\x65\x75\x70")
        }, false);
 
        function c(c, f) {
            if ((!d && c == "\x77\x61\x6B\x65\x75\x70") || (d && c == "\x69\x64\x6C\x65")) {
                return
            };
            d = c == "\x69\x64\x6C\x65";
            f = f || h;
            var b = a.createEvent("\x45\x76\x65\x6E\x74\x73");
            b.initEvent(c, true, true);
            f.dispatchEvent(b)
        }
    }
    function bK() {
        "\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74";
        var b = typeof module !== "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64" && module.exports;
        var c = typeof Element !== "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64" &&
            "\x41\x4C\x4C\x4F\x57\x5F\x4B\x45\x59\x42\x4F\x41\x52\x44\x5F\x49\x4E\x50\x55\x54" in Element;
        var a = (function () {
            var f;
            var g;
            var a = [["\x72\x65\x71\x75\x65\x73\x74\x46\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E",
                        "\x65\x78\x69\x74\x46\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E",
                        "\x66\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x45\x6C\x65\x6D\x65\x6E\x74",
                        "\x66\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x45\x6E\x61\x62\x6C\x65\x64",
                        "\x66\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x63\x68\x61\x6E\x67\x65",
                        "\x66\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x65\x72\x72\x6F\x72"], [
                        "\x77\x65\x62\x6B\x69\x74\x52\x65\x71\x75\x65\x73\x74\x46\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E",
                        "\x77\x65\x62\x6B\x69\x74\x45\x78\x69\x74\x46\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E",
                        "\x77\x65\x62\x6B\x69\x74\x46\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x45\x6C\x65\x6D\x65\x6E\x74",
                        "\x77\x65\x62\x6B\x69\x74\x46\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x45\x6E\x61\x62\x6C\x65\x64",
                        "\x77\x65\x62\x6B\x69\x74\x66\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x63\x68\x61\x6E\x67\x65",
                        "\x77\x65\x62\x6B\x69\x74\x66\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x65\x72\x72\x6F\x72"], [
                        "\x77\x65\x62\x6B\x69\x74\x52\x65\x71\x75\x65\x73\x74\x46\x75\x6C\x6C\x53\x63\x72\x65\x65\x6E",
                        "\x77\x65\x62\x6B\x69\x74\x43\x61\x6E\x63\x65\x6C\x46\x75\x6C\x6C\x53\x63\x72\x65\x65\x6E",
                        "\x77\x65\x62\x6B\x69\x74\x43\x75\x72\x72\x65\x6E\x74\x46\x75\x6C\x6C\x53\x63\x72\x65\x65\x6E\x45\x6C\x65\x6D\x65\x6E\x74",
                        "\x77\x65\x62\x6B\x69\x74\x43\x61\x6E\x63\x65\x6C\x46\x75\x6C\x6C\x53\x63\x72\x65\x65\x6E",
                        "\x77\x65\x62\x6B\x69\x74\x66\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x63\x68\x61\x6E\x67\x65",
                        "\x77\x65\x62\x6B\x69\x74\x66\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x65\x72\x72\x6F\x72"], [
                        "\x6D\x6F\x7A\x52\x65\x71\x75\x65\x73\x74\x46\x75\x6C\x6C\x53\x63\x72\x65\x65\x6E",
                        "\x6D\x6F\x7A\x43\x61\x6E\x63\x65\x6C\x46\x75\x6C\x6C\x53\x63\x72\x65\x65\x6E",
                        "\x6D\x6F\x7A\x46\x75\x6C\x6C\x53\x63\x72\x65\x65\x6E\x45\x6C\x65\x6D\x65\x6E\x74",
                        "\x6D\x6F\x7A\x46\x75\x6C\x6C\x53\x63\x72\x65\x65\x6E\x45\x6E\x61\x62\x6C\x65\x64",
                        "\x6D\x6F\x7A\x66\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x63\x68\x61\x6E\x67\x65",
                        "\x6D\x6F\x7A\x66\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x65\x72\x72\x6F\x72"], [
                        "\x6D\x73\x52\x65\x71\x75\x65\x73\x74\x46\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E",
                        "\x6D\x73\x45\x78\x69\x74\x46\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E",
                        "\x6D\x73\x46\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x45\x6C\x65\x6D\x65\x6E\x74",
                        "\x6D\x73\x46\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x45\x6E\x61\x62\x6C\x65\x64",
                        "\x4D\x53\x46\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x43\x68\x61\x6E\x67\x65",
                        "\x4D\x53\x46\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x45\x72\x72\x6F\x72"]];
            var b = 0;
            var c = a.length;
            var d = {};
            for (; b < c; b++) {
                f = a[b];
                if (f && f[1] in document) {
                    for (b = 0, g = f.length; b < g; b++) {
                        d[a[0][b]] = f[b]
                    };
                    return d
                }
            };
            return false
        })();
        var d = {
            request: function (b) {
                var d = a.requestFullscreen;
                b = b || document.documentElement;
                if (/5\.1[\.\d]* Safari/.test(navigator.userAgent)) {
                    b[d]()
                } else {
                    b[d](c && Element.ALLOW_KEYBOARD_INPUT)
                }
            },
            exit: function () {
                document[a.exitFullscreen]()
            },
            toggle: function (a) {
                if (this.isFullscreen) {
                    this.exit()
                } else {
                    this.request(a)
                }
            },
            onchange: function () {},
            onerror: function () {},
            raw: a
        };
        if (!a) {
            if (b) {
                module.exports = false
            } else {
                window.screenfull = false
            };
            return
        };
        Object.defineProperties(d, {
            isFullscreen: {
                get: function () {
                    return !!document[a.fullscreenElement]
                }
            },
            element: {
                enumerable: true,
                get: function () {
                    return document[a.fullscreenElement]
                }
            },
            enabled: {
                enumerable: true,
                get: function () {
                    var b = navigator.userAgent;
                    return !!document[a.fullscreenEnabled] && b.indexOf(
                        "\x53\x41\x4D\x53\x55\x4E\x47\x20\x47\x54\x2D\x49\x39\x35\x30\x35") == -1 && b.indexOf(
                        "\x53\x69\x6C\x6B\x2F") == -1
                }
            }
        });
        document.addEventListener(a.fullscreenchange, function (a) {
            d.onchange.call(d, a)
        });
        document.addEventListener(a.fullscreenerror, function (a) {
            d.onerror.call(d, a)
        });
        if (b) {
            module.exports = d
        } else {
            window.screenfull = d
        }
    }
    function bL(p, m) {
        var c = "\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72" in p;
        var b = false;
        if (m.readyState === "\x63\x6F\x6D\x70\x6C\x65\x74\x65") {
            b = true
        } else {
            if (c) {
                p.addEventListener("\x6C\x6F\x61\x64", o, false)
            }
        };
 
        function o() {
            p.removeEventListener("\x6C\x6F\x61\x64", o, false);
            b = true
        }
        var j = /\/ath(\/)?$/;
        var i = /([\?&]ath=[^&]*$|&ath=[^&]*(&))/;
        var f;
 
        function l(a) {
            f = f || new l.Class(a);
            return f
        }
        l.intl = {
            de_de: {
                ios: "\x55\x6D\x20\x64\x69\x65\x73\x65\x20\x57\x65\x62\x2D\x41\x70\x70\x20\x7A\x75\x6D\x20\x48\x6F\x6D\x65\x2D\x42\x69\x6C\x64\x73\x63\x68\x69\x72\x6D\x20\x68\x69\x6E\x7A\x75\x7A\x75\x66\xFC\x67\x65\x6E\x2C\x20\x74\x69\x70\x70\x65\x6E\x20\x53\x69\x65\x20\x61\x75\x66\x20\x25\x69\x63\x6F\x6E\x20\x75\x6E\x64\x20\x64\x61\x6E\x6E\x20\x3C\x73\x74\x72\x6F\x6E\x67\x3E\x5A\x75\x6D\x20\x48\x6F\x6D\x65\x2D\x42\x69\x6C\x64\x73\x63\x68\x69\x72\x6D\x3C\x2F\x73\x74\x72\x6F\x6E\x67\x3E\x2E",
                android: "\x54\x6F\x20\x61\x64\x64\x20\x74\x68\x69\x73\x20\x77\x65\x62\x20\x61\x70\x70\x20\x74\x6F\x20\x74\x68\x65\x20\x68\x6F\x6D\x65\x20\x73\x63\x72\x65\x65\x6E\x20\x6F\x70\x65\x6E\x20\x74\x68\x65\x20\x62\x72\x6F\x77\x73\x65\x72\x20\x6F\x70\x74\x69\x6F\x6E\x20\x6D\x65\x6E\x75\x20\x61\x6E\x64\x20\x74\x61\x70\x20\x6F\x6E\x20\x3C\x73\x74\x72\x6F\x6E\x67\x3E\x41\x64\x64\x20\x74\x6F\x20\x68\x6F\x6D\x65\x73\x63\x72\x65\x65\x6E\x3C\x2F\x73\x74\x72\x6F\x6E\x67\x3E\x2E\x20\x3C\x73\x6D\x61\x6C\x6C\x3E\x54\x68\x65\x20\x6D\x65\x6E\x75\x20\x63\x61\x6E\x20\x62\x65\x20\x61\x63\x63\x65\x73\x73\x65\x64\x20\x62\x79\x20\x70\x72\x65\x73\x73\x69\x6E\x67\x20\x74\x68\x65\x20\x6D\x65\x6E\x75\x20\x68\x61\x72\x64\x77\x61\x72\x65\x20\x62\x75\x74\x74\x6F\x6E\x20\x69\x66\x20\x79\x6F\x75\x72\x20\x64\x65\x76\x69\x63\x65\x20\x68\x61\x73\x20\x6F\x6E\x65\x2C\x20\x6F\x72\x20\x62\x79\x20\x74\x61\x70\x70\x69\x6E\x67\x20\x74\x68\x65\x20\x74\x6F\x70\x20\x72\x69\x67\x68\x74\x20\x6D\x65\x6E\x75\x20\x69\x63\x6F\x6E\x20\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x61\x74\x68\x2D\x61\x63\x74\x69\x6F\x6E\x2D\x69\x63\x6F\x6E\x22\x3E\x69\x63\x6F\x6E\x3C\x2F\x73\x70\x61\x6E\x3E\x2E\x3C\x2F\x73\x6D\x61\x6C\x6C\x3E"
            },
            en_us: {
                ios: "\x54\x6F\x20\x61\x64\x64\x20\x74\x68\x69\x73\x20\x77\x65\x62\x20\x61\x70\x70\x20\x74\x6F\x20\x74\x68\x65\x20\x68\x6F\x6D\x65\x20\x73\x63\x72\x65\x65\x6E\x3A\x20\x74\x61\x70\x20\x25\x69\x63\x6F\x6E\x20\x61\x6E\x64\x20\x74\x68\x65\x6E\x20\x3C\x73\x74\x72\x6F\x6E\x67\x3E\x41\x64\x64\x20\x74\x6F\x20\x48\x6F\x6D\x65\x20\x53\x63\x72\x65\x65\x6E\x3C\x2F\x73\x74\x72\x6F\x6E\x67\x3E\x2E",
                android: "\x54\x6F\x20\x61\x64\x64\x20\x74\x68\x69\x73\x20\x77\x65\x62\x20\x61\x70\x70\x20\x74\x6F\x20\x74\x68\x65\x20\x68\x6F\x6D\x65\x20\x73\x63\x72\x65\x65\x6E\x20\x6F\x70\x65\x6E\x20\x74\x68\x65\x20\x62\x72\x6F\x77\x73\x65\x72\x20\x6F\x70\x74\x69\x6F\x6E\x20\x6D\x65\x6E\x75\x20\x61\x6E\x64\x20\x74\x61\x70\x20\x6F\x6E\x20\x3C\x73\x74\x72\x6F\x6E\x67\x3E\x41\x64\x64\x20\x74\x6F\x20\x68\x6F\x6D\x65\x73\x63\x72\x65\x65\x6E\x3C\x2F\x73\x74\x72\x6F\x6E\x67\x3E\x2E\x20\x3C\x73\x6D\x61\x6C\x6C\x3E\x54\x68\x65\x20\x6D\x65\x6E\x75\x20\x63\x61\x6E\x20\x62\x65\x20\x61\x63\x63\x65\x73\x73\x65\x64\x20\x62\x79\x20\x70\x72\x65\x73\x73\x69\x6E\x67\x20\x74\x68\x65\x20\x6D\x65\x6E\x75\x20\x68\x61\x72\x64\x77\x61\x72\x65\x20\x62\x75\x74\x74\x6F\x6E\x20\x69\x66\x20\x79\x6F\x75\x72\x20\x64\x65\x76\x69\x63\x65\x20\x68\x61\x73\x20\x6F\x6E\x65\x2C\x20\x6F\x72\x20\x62\x79\x20\x74\x61\x70\x70\x69\x6E\x67\x20\x74\x68\x65\x20\x74\x6F\x70\x20\x72\x69\x67\x68\x74\x20\x6D\x65\x6E\x75\x20\x69\x63\x6F\x6E\x20\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x61\x74\x68\x2D\x61\x63\x74\x69\x6F\x6E\x2D\x69\x63\x6F\x6E\x22\x3E\x69\x63\x6F\x6E\x3C\x2F\x73\x70\x61\x6E\x3E\x2E\x3C\x2F\x73\x6D\x61\x6C\x6C\x3E"
            },
            es_es: {
                ios: "\x50\x61\x72\x61\x20\x61\xF1\x61\x64\x69\x72\x20\x65\x73\x74\x61\x20\x61\x70\x6C\x69\x63\x61\x63\x69\xF3\x6E\x20\x77\x65\x62\x20\x61\x20\x6C\x61\x20\x70\x61\x6E\x74\x61\x6C\x6C\x61\x20\x64\x65\x20\x69\x6E\x69\x63\x69\x6F\x3A\x20\x70\x75\x6C\x73\x61\x20\x25\x69\x63\x6F\x6E\x20\x79\x20\x73\x65\x6C\x65\x63\x63\x69\x6F\x6E\x61\x20\x3C\x73\x74\x72\x6F\x6E\x67\x3E\x41\xF1\x61\x64\x69\x72\x20\x61\x20\x70\x61\x6E\x74\x61\x6C\x6C\x61\x20\x64\x65\x20\x69\x6E\x69\x63\x69\x6F\x3C\x2F\x73\x74\x72\x6F\x6E\x67\x3E\x2E",
                android: "\x54\x6F\x20\x61\x64\x64\x20\x74\x68\x69\x73\x20\x77\x65\x62\x20\x61\x70\x70\x20\x74\x6F\x20\x74\x68\x65\x20\x68\x6F\x6D\x65\x20\x73\x63\x72\x65\x65\x6E\x20\x6F\x70\x65\x6E\x20\x74\x68\x65\x20\x62\x72\x6F\x77\x73\x65\x72\x20\x6F\x70\x74\x69\x6F\x6E\x20\x6D\x65\x6E\x75\x20\x61\x6E\x64\x20\x74\x61\x70\x20\x6F\x6E\x20\x3C\x73\x74\x72\x6F\x6E\x67\x3E\x41\x64\x64\x20\x74\x6F\x20\x68\x6F\x6D\x65\x73\x63\x72\x65\x65\x6E\x3C\x2F\x73\x74\x72\x6F\x6E\x67\x3E\x2E\x20\x3C\x73\x6D\x61\x6C\x6C\x3E\x54\x68\x65\x20\x6D\x65\x6E\x75\x20\x63\x61\x6E\x20\x62\x65\x20\x61\x63\x63\x65\x73\x73\x65\x64\x20\x62\x79\x20\x70\x72\x65\x73\x73\x69\x6E\x67\x20\x74\x68\x65\x20\x6D\x65\x6E\x75\x20\x68\x61\x72\x64\x77\x61\x72\x65\x20\x62\x75\x74\x74\x6F\x6E\x20\x69\x66\x20\x79\x6F\x75\x72\x20\x64\x65\x76\x69\x63\x65\x20\x68\x61\x73\x20\x6F\x6E\x65\x2C\x20\x6F\x72\x20\x62\x79\x20\x74\x61\x70\x70\x69\x6E\x67\x20\x74\x68\x65\x20\x74\x6F\x70\x20\x72\x69\x67\x68\x74\x20\x6D\x65\x6E\x75\x20\x69\x63\x6F\x6E\x20\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x61\x74\x68\x2D\x61\x63\x74\x69\x6F\x6E\x2D\x69\x63\x6F\x6E\x22\x3E\x69\x63\x6F\x6E\x3C\x2F\x73\x70\x61\x6E\x3E\x2E\x3C\x2F\x73\x6D\x61\x6C\x6C\x3E"
            },
            fr_fr: {
                ios: "\x50\x6F\x75\x72\x20\x61\x6A\x6F\x75\x74\x65\x72\x20\x63\x65\x74\x74\x65\x20\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x20\x77\x65\x62\x20\x73\x75\x72\x20\x6C\x27\xE9\x63\x72\x61\x6E\x20\x64\x27\x61\x63\x63\x75\x65\x69\x6C\x20\x3A\x20\x41\x70\x70\x75\x79\x65\x7A\x20\x25\x69\x63\x6F\x6E\x20\x65\x74\x20\x73\xE9\x6C\x65\x63\x74\x69\x6F\x6E\x6E\x65\x7A\x20\x3C\x73\x74\x72\x6F\x6E\x67\x3E\x41\x6A\x6F\x75\x74\x65\x72\x20\x73\x75\x72\x20\x6C\x27\xE9\x63\x72\x61\x6E\x20\x64\x27\x61\x63\x63\x75\x65\x69\x6C\x3C\x2F\x73\x74\x72\x6F\x6E\x67\x3E\x2E",
                android: "\x54\x6F\x20\x61\x64\x64\x20\x74\x68\x69\x73\x20\x77\x65\x62\x20\x61\x70\x70\x20\x74\x6F\x20\x74\x68\x65\x20\x68\x6F\x6D\x65\x20\x73\x63\x72\x65\x65\x6E\x20\x6F\x70\x65\x6E\x20\x74\x68\x65\x20\x62\x72\x6F\x77\x73\x65\x72\x20\x6F\x70\x74\x69\x6F\x6E\x20\x6D\x65\x6E\x75\x20\x61\x6E\x64\x20\x74\x61\x70\x20\x6F\x6E\x20\x3C\x73\x74\x72\x6F\x6E\x67\x3E\x41\x64\x64\x20\x74\x6F\x20\x68\x6F\x6D\x65\x73\x63\x72\x65\x65\x6E\x3C\x2F\x73\x74\x72\x6F\x6E\x67\x3E\x2E\x20\x3C\x73\x6D\x61\x6C\x6C\x3E\x54\x68\x65\x20\x6D\x65\x6E\x75\x20\x63\x61\x6E\x20\x62\x65\x20\x61\x63\x63\x65\x73\x73\x65\x64\x20\x62\x79\x20\x70\x72\x65\x73\x73\x69\x6E\x67\x20\x74\x68\x65\x20\x6D\x65\x6E\x75\x20\x68\x61\x72\x64\x77\x61\x72\x65\x20\x62\x75\x74\x74\x6F\x6E\x20\x69\x66\x20\x79\x6F\x75\x72\x20\x64\x65\x76\x69\x63\x65\x20\x68\x61\x73\x20\x6F\x6E\x65\x2C\x20\x6F\x72\x20\x62\x79\x20\x74\x61\x70\x70\x69\x6E\x67\x20\x74\x68\x65\x20\x74\x6F\x70\x20\x72\x69\x67\x68\x74\x20\x6D\x65\x6E\x75\x20\x69\x63\x6F\x6E\x20\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x61\x74\x68\x2D\x61\x63\x74\x69\x6F\x6E\x2D\x69\x63\x6F\x6E\x22\x3E\x69\x63\x6F\x6E\x3C\x2F\x73\x70\x61\x6E\x3E\x2E\x3C\x2F\x73\x6D\x61\x6C\x6C\x3E"
            },
            he_il: {
                ios: "\x3C\x73\x70\x61\x6E\x20\x64\x69\x72\x3D\x22\x72\x74\x6C\x22\x3E\u05DC\u05D4\u05D5\u05E1\u05E4\u05EA\x20\u05D4\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D4\x20\u05DC\u05DE\u05E1\u05DA\x20\u05D4\u05D1\u05D9\u05EA\x3A\x20\u05DC\u05DC\u05D7\u05D5\u05E5\x20\u05E2\u05DC\x20\x25\x69\x63\x6F\x6E\x20\u05D5\u05D0\u05D6\x20\x3C\x73\x74\x72\x6F\x6E\x67\x3E\u05D4\u05D5\u05E1\u05E3\x20\u05DC\u05DE\u05E1\u05DA\x20\u05D4\u05D1\u05D9\u05EA\x3C\x2F\x73\x74\x72\x6F\x6E\x67\x3E\x2E\x3C\x2F\x73\x70\x61\x6E\x3E",
                android: "\x54\x6F\x20\x61\x64\x64\x20\x74\x68\x69\x73\x20\x77\x65\x62\x20\x61\x70\x70\x20\x74\x6F\x20\x74\x68\x65\x20\x68\x6F\x6D\x65\x20\x73\x63\x72\x65\x65\x6E\x20\x6F\x70\x65\x6E\x20\x74\x68\x65\x20\x62\x72\x6F\x77\x73\x65\x72\x20\x6F\x70\x74\x69\x6F\x6E\x20\x6D\x65\x6E\x75\x20\x61\x6E\x64\x20\x74\x61\x70\x20\x6F\x6E\x20\x3C\x73\x74\x72\x6F\x6E\x67\x3E\x41\x64\x64\x20\x74\x6F\x20\x68\x6F\x6D\x65\x73\x63\x72\x65\x65\x6E\x3C\x2F\x73\x74\x72\x6F\x6E\x67\x3E\x2E\x20\x3C\x73\x6D\x61\x6C\x6C\x3E\x54\x68\x65\x20\x6D\x65\x6E\x75\x20\x63\x61\x6E\x20\x62\x65\x20\x61\x63\x63\x65\x73\x73\x65\x64\x20\x62\x79\x20\x70\x72\x65\x73\x73\x69\x6E\x67\x20\x74\x68\x65\x20\x6D\x65\x6E\x75\x20\x68\x61\x72\x64\x77\x61\x72\x65\x20\x62\x75\x74\x74\x6F\x6E\x20\x69\x66\x20\x79\x6F\x75\x72\x20\x64\x65\x76\x69\x63\x65\x20\x68\x61\x73\x20\x6F\x6E\x65\x2C\x20\x6F\x72\x20\x62\x79\x20\x74\x61\x70\x70\x69\x6E\x67\x20\x74\x68\x65\x20\x74\x6F\x70\x20\x72\x69\x67\x68\x74\x20\x6D\x65\x6E\x75\x20\x69\x63\x6F\x6E\x20\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x61\x74\x68\x2D\x61\x63\x74\x69\x6F\x6E\x2D\x69\x63\x6F\x6E\x22\x3E\x69\x63\x6F\x6E\x3C\x2F\x73\x70\x61\x6E\x3E\x2E\x3C\x2F\x73\x6D\x61\x6C\x6C\x3E"
            },
            it_it: {
                ios: "\x50\x65\x72\x20\x61\x67\x67\x69\x75\x6E\x67\x65\x72\x65\x20\x71\x75\x65\x73\x74\x61\x20\x77\x65\x62\x20\x61\x70\x70\x20\x61\x6C\x6C\x61\x20\x73\x63\x68\x65\x72\x6D\x61\x74\x61\x20\x69\x6E\x69\x7A\x69\x61\x6C\x65\x3A\x20\x70\x72\x65\x6D\x69\x20\x25\x69\x63\x6F\x6E\x20\x65\x20\x70\x6F\x69\x20\x3C\x73\x74\x72\x6F\x6E\x67\x3E\x41\x67\x67\x69\x75\x6E\x67\x69\x20\x61\x20\x48\x6F\x6D\x65\x3C\x2F\x73\x74\x72\x6F\x6E\x67\x3E\x2E",
                android: "\x50\x65\x72\x20\x61\x67\x67\x69\x75\x6E\x67\x65\x72\x65\x20\x71\x75\x65\x73\x74\x61\x20\x77\x65\x62\x20\x61\x70\x70\x20\x61\x6C\x6C\x61\x20\x73\x63\x68\x65\x72\x6D\x61\x74\x61\x20\x69\x6E\x69\x7A\x69\x61\x6C\x65\x2C\x20\x61\x70\x72\x69\x20\x69\x6C\x20\x6D\x65\x6E\x75\x20\x6F\x70\x7A\x69\x6F\x6E\x69\x20\x64\x65\x6C\x20\x62\x72\x6F\x77\x73\x65\x72\x20\x65\x20\x70\x72\x65\x6D\x69\x20\x73\x75\x20\x3C\x73\x74\x72\x6F\x6E\x67\x3E\x41\x67\x67\x69\x75\x6E\x67\x69\x20\x61\x6C\x6C\x61\x20\x68\x6F\x6D\x65\x73\x63\x72\x65\x65\x6E\x3C\x2F\x73\x74\x72\x6F\x6E\x67\x3E\x2E\x20\x3C\x73\x6D\x61\x6C\x6C\x3E\x50\x75\x6F\x69\x20\x61\x63\x63\x65\x64\x65\x72\x65\x20\x61\x6C\x20\x6D\x65\x6E\x75\x20\x70\x72\x65\x6D\x65\x6E\x64\x6F\x20\x69\x6C\x20\x70\x75\x6C\x73\x61\x6E\x74\x65\x20\x68\x61\x72\x64\x77\x61\x72\x65\x20\x64\x65\x6C\x6C\x65\x20\x6F\x70\x7A\x69\x6F\x6E\x69\x20\x73\x65\x20\x6C\x61\x20\x74\x75\x61\x20\x64\x65\x76\x69\x63\x65\x20\x6E\x65\x20\x68\x61\x20\x75\x6E\x6F\x2C\x20\x6F\x70\x70\x75\x72\x65\x20\x70\x72\x65\x6D\x65\x6E\x64\x6F\x20\x6C\x27\x69\x63\x6F\x6E\x61\x20\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x61\x74\x68\x2D\x61\x63\x74\x69\x6F\x6E\x2D\x69\x63\x6F\x6E\x22\x3E\x69\x63\x6F\x6E\x3C\x2F\x73\x70\x61\x6E\x3E\x20\x69\x6E\x20\x61\x6C\x74\x6F\x20\x61\x20\x64\x65\x73\x74\x72\x61\x2E\x3C\x2F\x73\x6D\x61\x6C\x6C\x3E"
            },
            nb_no: {
                ios: "\x46\x6F\x72\x20\xE5\x20\x69\x6E\x73\x74\x61\x6C\x6C\x65\x72\x65\x20\x64\x65\x6E\x6E\x65\x20\x61\x70\x70\x65\x6E\x20\x70\xE5\x20\x68\x6A\x65\x6D\x2D\x73\x6B\x6A\x65\x72\x6D\x65\x6E\x3A\x20\x74\x72\x79\x6B\x6B\x20\x70\xE5\x20\x25\x69\x63\x6F\x6E\x20\x6F\x67\x20\x64\x65\x72\x65\x74\x74\x65\x72\x20\x3C\x73\x74\x72\x6F\x6E\x67\x3E\x4C\x65\x67\x67\x20\x74\x69\x6C\x20\x70\xE5\x20\x48\x6A\x65\x6D\x2D\x73\x6B\x6A\x65\x72\x6D\x3C\x2F\x73\x74\x72\x6F\x6E\x67\x3E\x2E",
                android: "\x54\x6F\x20\x61\x64\x64\x20\x74\x68\x69\x73\x20\x77\x65\x62\x20\x61\x70\x70\x20\x74\x6F\x20\x74\x68\x65\x20\x68\x6F\x6D\x65\x20\x73\x63\x72\x65\x65\x6E\x20\x6F\x70\x65\x6E\x20\x74\x68\x65\x20\x62\x72\x6F\x77\x73\x65\x72\x20\x6F\x70\x74\x69\x6F\x6E\x20\x6D\x65\x6E\x75\x20\x61\x6E\x64\x20\x74\x61\x70\x20\x6F\x6E\x20\x3C\x73\x74\x72\x6F\x6E\x67\x3E\x41\x64\x64\x20\x74\x6F\x20\x68\x6F\x6D\x65\x73\x63\x72\x65\x65\x6E\x3C\x2F\x73\x74\x72\x6F\x6E\x67\x3E\x2E\x20\x3C\x73\x6D\x61\x6C\x6C\x3E\x54\x68\x65\x20\x6D\x65\x6E\x75\x20\x63\x61\x6E\x20\x62\x65\x20\x61\x63\x63\x65\x73\x73\x65\x64\x20\x62\x79\x20\x70\x72\x65\x73\x73\x69\x6E\x67\x20\x74\x68\x65\x20\x6D\x65\x6E\x75\x20\x68\x61\x72\x64\x77\x61\x72\x65\x20\x62\x75\x74\x74\x6F\x6E\x20\x69\x66\x20\x79\x6F\x75\x72\x20\x64\x65\x76\x69\x63\x65\x20\x68\x61\x73\x20\x6F\x6E\x65\x2C\x20\x6F\x72\x20\x62\x79\x20\x74\x61\x70\x70\x69\x6E\x67\x20\x74\x68\x65\x20\x74\x6F\x70\x20\x72\x69\x67\x68\x74\x20\x6D\x65\x6E\x75\x20\x69\x63\x6F\x6E\x20\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x61\x74\x68\x2D\x61\x63\x74\x69\x6F\x6E\x2D\x69\x63\x6F\x6E\x22\x3E\x69\x63\x6F\x6E\x3C\x2F\x73\x70\x61\x6E\x3E\x2E\x3C\x2F\x73\x6D\x61\x6C\x6C\x3E"
            },
            pt_br: {
                ios: "\x50\x61\x72\x61\x20\x61\x64\x69\x63\x69\x6F\x6E\x61\x72\x20\x65\x73\x74\x65\x20\x61\x70\x70\x20\xE0\x20\x74\x65\x6C\x61\x20\x64\x65\x20\x69\x6E\xED\x63\x69\x6F\x3A\x20\x63\x6C\x69\x71\x75\x65\x20\x25\x69\x63\x6F\x6E\x20\x65\x20\x65\x6E\x74\xE3\x6F\x20\x3C\x73\x74\x72\x6F\x6E\x67\x3E\x54\x65\x6C\x61\x20\x64\x65\x20\x69\x6E\xED\x63\x69\x6F\x3C\x2F\x73\x74\x72\x6F\x6E\x67\x3E\x2E",
                android: "\x54\x6F\x20\x61\x64\x64\x20\x74\x68\x69\x73\x20\x77\x65\x62\x20\x61\x70\x70\x20\x74\x6F\x20\x74\x68\x65\x20\x68\x6F\x6D\x65\x20\x73\x63\x72\x65\x65\x6E\x20\x6F\x70\x65\x6E\x20\x74\x68\x65\x20\x62\x72\x6F\x77\x73\x65\x72\x20\x6F\x70\x74\x69\x6F\x6E\x20\x6D\x65\x6E\x75\x20\x61\x6E\x64\x20\x74\x61\x70\x20\x6F\x6E\x20\x3C\x73\x74\x72\x6F\x6E\x67\x3E\x41\x64\x64\x20\x74\x6F\x20\x68\x6F\x6D\x65\x73\x63\x72\x65\x65\x6E\x3C\x2F\x73\x74\x72\x6F\x6E\x67\x3E\x2E\x20\x3C\x73\x6D\x61\x6C\x6C\x3E\x54\x68\x65\x20\x6D\x65\x6E\x75\x20\x63\x61\x6E\x20\x62\x65\x20\x61\x63\x63\x65\x73\x73\x65\x64\x20\x62\x79\x20\x70\x72\x65\x73\x73\x69\x6E\x67\x20\x74\x68\x65\x20\x6D\x65\x6E\x75\x20\x68\x61\x72\x64\x77\x61\x72\x65\x20\x62\x75\x74\x74\x6F\x6E\x20\x69\x66\x20\x79\x6F\x75\x72\x20\x64\x65\x76\x69\x63\x65\x20\x68\x61\x73\x20\x6F\x6E\x65\x2C\x20\x6F\x72\x20\x62\x79\x20\x74\x61\x70\x70\x69\x6E\x67\x20\x74\x68\x65\x20\x74\x6F\x70\x20\x72\x69\x67\x68\x74\x20\x6D\x65\x6E\x75\x20\x69\x63\x6F\x6E\x20\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x61\x74\x68\x2D\x61\x63\x74\x69\x6F\x6E\x2D\x69\x63\x6F\x6E\x22\x3E\x69\x63\x6F\x6E\x3C\x2F\x73\x70\x61\x6E\x3E\x2E\x3C\x2F\x73\x6D\x61\x6C\x6C\x3E"
            },
            pt_pt: {
                ios: "\x50\x61\x72\x61\x20\x61\x64\x69\x63\x69\x6F\x6E\x61\x72\x20\x65\x73\x74\x61\x20\x61\x70\x70\x20\x61\x6F\x20\x65\x63\x72\xE3\x20\x70\x72\x69\x6E\x63\x69\x70\x61\x6C\x3A\x20\x63\x6C\x69\x71\x75\x65\x20\x25\x69\x63\x6F\x6E\x20\x65\x20\x64\x65\x70\x6F\x69\x73\x20\x3C\x73\x74\x72\x6F\x6E\x67\x3E\x45\x63\x72\xE3\x20\x70\x72\x69\x6E\x63\x69\x70\x61\x6C\x3C\x2F\x73\x74\x72\x6F\x6E\x67\x3E\x2E",
                android: "\x54\x6F\x20\x61\x64\x64\x20\x74\x68\x69\x73\x20\x77\x65\x62\x20\x61\x70\x70\x20\x74\x6F\x20\x74\x68\x65\x20\x68\x6F\x6D\x65\x20\x73\x63\x72\x65\x65\x6E\x20\x6F\x70\x65\x6E\x20\x74\x68\x65\x20\x62\x72\x6F\x77\x73\x65\x72\x20\x6F\x70\x74\x69\x6F\x6E\x20\x6D\x65\x6E\x75\x20\x61\x6E\x64\x20\x74\x61\x70\x20\x6F\x6E\x20\x3C\x73\x74\x72\x6F\x6E\x67\x3E\x41\x64\x64\x20\x74\x6F\x20\x68\x6F\x6D\x65\x73\x63\x72\x65\x65\x6E\x3C\x2F\x73\x74\x72\x6F\x6E\x67\x3E\x2E\x20\x3C\x73\x6D\x61\x6C\x6C\x3E\x54\x68\x65\x20\x6D\x65\x6E\x75\x20\x63\x61\x6E\x20\x62\x65\x20\x61\x63\x63\x65\x73\x73\x65\x64\x20\x62\x79\x20\x70\x72\x65\x73\x73\x69\x6E\x67\x20\x74\x68\x65\x20\x6D\x65\x6E\x75\x20\x68\x61\x72\x64\x77\x61\x72\x65\x20\x62\x75\x74\x74\x6F\x6E\x20\x69\x66\x20\x79\x6F\x75\x72\x20\x64\x65\x76\x69\x63\x65\x20\x68\x61\x73\x20\x6F\x6E\x65\x2C\x20\x6F\x72\x20\x62\x79\x20\x74\x61\x70\x70\x69\x6E\x67\x20\x74\x68\x65\x20\x74\x6F\x70\x20\x72\x69\x67\x68\x74\x20\x6D\x65\x6E\x75\x20\x69\x63\x6F\x6E\x20\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x61\x74\x68\x2D\x61\x63\x74\x69\x6F\x6E\x2D\x69\x63\x6F\x6E\x22\x3E\x69\x63\x6F\x6E\x3C\x2F\x73\x70\x61\x6E\x3E\x2E\x3C\x2F\x73\x6D\x61\x6C\x6C\x3E"
            },
            nl_nl: {
                ios: "\x4F\x6D\x20\x64\x65\x7A\x65\x20\x77\x65\x62\x61\x70\x70\x20\x6F\x70\x20\x6A\x65\x20\x74\x65\x6C\x65\x66\x6F\x6F\x6E\x20\x74\x65\x20\x69\x6E\x73\x74\x61\x6C\x6C\x65\x72\x65\x6E\x2C\x20\x6B\x6C\x69\x6B\x20\x6F\x70\x20\x25\x69\x63\x6F\x6E\x20\x65\x6E\x20\x64\x61\x6E\x20\x3C\x73\x74\x72\x6F\x6E\x67\x3E\x5A\x65\x74\x20\x69\x6E\x20\x62\x65\x67\x69\x6E\x73\x63\x68\x65\x72\x6D\x3C\x2F\x73\x74\x72\x6F\x6E\x67\x3E\x2E",
                android: "\x54\x6F\x20\x61\x64\x64\x20\x74\x68\x69\x73\x20\x77\x65\x62\x20\x61\x70\x70\x20\x74\x6F\x20\x74\x68\x65\x20\x68\x6F\x6D\x65\x20\x73\x63\x72\x65\x65\x6E\x20\x6F\x70\x65\x6E\x20\x74\x68\x65\x20\x62\x72\x6F\x77\x73\x65\x72\x20\x6F\x70\x74\x69\x6F\x6E\x20\x6D\x65\x6E\x75\x20\x61\x6E\x64\x20\x74\x61\x70\x20\x6F\x6E\x20\x3C\x73\x74\x72\x6F\x6E\x67\x3E\x41\x64\x64\x20\x74\x6F\x20\x68\x6F\x6D\x65\x73\x63\x72\x65\x65\x6E\x3C\x2F\x73\x74\x72\x6F\x6E\x67\x3E\x2E\x20\x3C\x73\x6D\x61\x6C\x6C\x3E\x54\x68\x65\x20\x6D\x65\x6E\x75\x20\x63\x61\x6E\x20\x62\x65\x20\x61\x63\x63\x65\x73\x73\x65\x64\x20\x62\x79\x20\x70\x72\x65\x73\x73\x69\x6E\x67\x20\x74\x68\x65\x20\x6D\x65\x6E\x75\x20\x68\x61\x72\x64\x77\x61\x72\x65\x20\x62\x75\x74\x74\x6F\x6E\x20\x69\x66\x20\x79\x6F\x75\x72\x20\x64\x65\x76\x69\x63\x65\x20\x68\x61\x73\x20\x6F\x6E\x65\x2C\x20\x6F\x72\x20\x62\x79\x20\x74\x61\x70\x70\x69\x6E\x67\x20\x74\x68\x65\x20\x74\x6F\x70\x20\x72\x69\x67\x68\x74\x20\x6D\x65\x6E\x75\x20\x69\x63\x6F\x6E\x20\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x61\x74\x68\x2D\x61\x63\x74\x69\x6F\x6E\x2D\x69\x63\x6F\x6E\x22\x3E\x69\x63\x6F\x6E\x3C\x2F\x73\x70\x61\x6E\x3E\x2E\x3C\x2F\x73\x6D\x61\x6C\x6C\x3E"
            },
            sv_se: {
                ios: "\x46\xF6\x72\x20\x61\x74\x74\x20\x6C\xE4\x67\x67\x61\x20\x74\x69\x6C\x6C\x20\x64\x65\x6E\x6E\x61\x20\x77\x65\x62\x62\x61\x70\x70\x6C\x69\x6B\x61\x74\x69\x6F\x6E\x20\x70\xE5\x20\x68\x65\x6D\x73\x6B\xE4\x72\x6D\x65\x6E\x3A\x20\x74\x72\x79\x63\x6B\x20\x70\xE5\x20\x25\x69\x63\x6F\x6E\x20\x6F\x63\x68\x20\x64\xE4\x72\x65\x66\x74\x65\x72\x20\x3C\x73\x74\x72\x6F\x6E\x67\x3E\x4C\xE4\x67\x67\x20\x74\x69\x6C\x6C\x20\x70\xE5\x20\x68\x65\x6D\x73\x6B\xE4\x72\x6D\x65\x6E\x3C\x2F\x73\x74\x72\x6F\x6E\x67\x3E\x2E",
                android: "\x54\x6F\x20\x61\x64\x64\x20\x74\x68\x69\x73\x20\x77\x65\x62\x20\x61\x70\x70\x20\x74\x6F\x20\x74\x68\x65\x20\x68\x6F\x6D\x65\x20\x73\x63\x72\x65\x65\x6E\x20\x6F\x70\x65\x6E\x20\x74\x68\x65\x20\x62\x72\x6F\x77\x73\x65\x72\x20\x6F\x70\x74\x69\x6F\x6E\x20\x6D\x65\x6E\x75\x20\x61\x6E\x64\x20\x74\x61\x70\x20\x6F\x6E\x20\x3C\x73\x74\x72\x6F\x6E\x67\x3E\x41\x64\x64\x20\x74\x6F\x20\x68\x6F\x6D\x65\x73\x63\x72\x65\x65\x6E\x3C\x2F\x73\x74\x72\x6F\x6E\x67\x3E\x2E\x20\x3C\x73\x6D\x61\x6C\x6C\x3E\x54\x68\x65\x20\x6D\x65\x6E\x75\x20\x63\x61\x6E\x20\x62\x65\x20\x61\x63\x63\x65\x73\x73\x65\x64\x20\x62\x79\x20\x70\x72\x65\x73\x73\x69\x6E\x67\x20\x74\x68\x65\x20\x6D\x65\x6E\x75\x20\x68\x61\x72\x64\x77\x61\x72\x65\x20\x62\x75\x74\x74\x6F\x6E\x20\x69\x66\x20\x79\x6F\x75\x72\x20\x64\x65\x76\x69\x63\x65\x20\x68\x61\x73\x20\x6F\x6E\x65\x2C\x20\x6F\x72\x20\x62\x79\x20\x74\x61\x70\x70\x69\x6E\x67\x20\x74\x68\x65\x20\x74\x6F\x70\x20\x72\x69\x67\x68\x74\x20\x6D\x65\x6E\x75\x20\x69\x63\x6F\x6E\x20\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x61\x74\x68\x2D\x61\x63\x74\x69\x6F\x6E\x2D\x69\x63\x6F\x6E\x22\x3E\x69\x63\x6F\x6E\x3C\x2F\x73\x70\x61\x6E\x3E\x2E\x3C\x2F\x73\x6D\x61\x6C\x6C\x3E"
            },
            zh_cn: {
                ios: "\u5982\u8981\u628A\u5E94\u7528\u7A0B\u5F0F\u52A0\u81F3\u4E3B\u5C4F\u5E55\x2C\u8BF7\u70B9\u51FB\x25\x69\x63\x6F\x6E\x2C\x20\u7136\u540E\x3C\x73\x74\x72\x6F\x6E\x67\x3E\u52A0\u81F3\u4E3B\u5C4F\u5E55\x3C\x2F\x73\x74\x72\x6F\x6E\x67\x3E",
                android: "\x54\x6F\x20\x61\x64\x64\x20\x74\x68\x69\x73\x20\x77\x65\x62\x20\x61\x70\x70\x20\x74\x6F\x20\x74\x68\x65\x20\x68\x6F\x6D\x65\x20\x73\x63\x72\x65\x65\x6E\x20\x6F\x70\x65\x6E\x20\x74\x68\x65\x20\x62\x72\x6F\x77\x73\x65\x72\x20\x6F\x70\x74\x69\x6F\x6E\x20\x6D\x65\x6E\x75\x20\x61\x6E\x64\x20\x74\x61\x70\x20\x6F\x6E\x20\x3C\x73\x74\x72\x6F\x6E\x67\x3E\x41\x64\x64\x20\x74\x6F\x20\x68\x6F\x6D\x65\x73\x63\x72\x65\x65\x6E\x3C\x2F\x73\x74\x72\x6F\x6E\x67\x3E\x2E\x20\x3C\x73\x6D\x61\x6C\x6C\x3E\x54\x68\x65\x20\x6D\x65\x6E\x75\x20\x63\x61\x6E\x20\x62\x65\x20\x61\x63\x63\x65\x73\x73\x65\x64\x20\x62\x79\x20\x70\x72\x65\x73\x73\x69\x6E\x67\x20\x74\x68\x65\x20\x6D\x65\x6E\x75\x20\x68\x61\x72\x64\x77\x61\x72\x65\x20\x62\x75\x74\x74\x6F\x6E\x20\x69\x66\x20\x79\x6F\x75\x72\x20\x64\x65\x76\x69\x63\x65\x20\x68\x61\x73\x20\x6F\x6E\x65\x2C\x20\x6F\x72\x20\x62\x79\x20\x74\x61\x70\x70\x69\x6E\x67\x20\x74\x68\x65\x20\x74\x6F\x70\x20\x72\x69\x67\x68\x74\x20\x6D\x65\x6E\x75\x20\x69\x63\x6F\x6E\x20\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x61\x74\x68\x2D\x61\x63\x74\x69\x6F\x6E\x2D\x69\x63\x6F\x6E\x22\x3E\x69\x63\x6F\x6E\x3C\x2F\x73\x70\x61\x6E\x3E\x2E\x3C\x2F\x73\x6D\x61\x6C\x6C\x3E"
            },
            zh_tw: {
                ios: "\u5982\u8981\u628A\u61C9\u7528\u7A0B\u5F0F\u52A0\u81F3\u4E3B\u5C4F\u5E55\x2C\x20\u8ACB\u9EDE\u64CA\x25\x69\x63\x6F\x6E\x2C\x20\u7136\u5F8C\x3C\x73\x74\x72\x6F\x6E\x67\x3E\u52A0\u81F3\u4E3B\u5C4F\u5E55\x3C\x2F\x73\x74\x72\x6F\x6E\x67\x3E\x2E",
                android: "\x54\x6F\x20\x61\x64\x64\x20\x74\x68\x69\x73\x20\x77\x65\x62\x20\x61\x70\x70\x20\x74\x6F\x20\x74\x68\x65\x20\x68\x6F\x6D\x65\x20\x73\x63\x72\x65\x65\x6E\x20\x6F\x70\x65\x6E\x20\x74\x68\x65\x20\x62\x72\x6F\x77\x73\x65\x72\x20\x6F\x70\x74\x69\x6F\x6E\x20\x6D\x65\x6E\x75\x20\x61\x6E\x64\x20\x74\x61\x70\x20\x6F\x6E\x20\x3C\x73\x74\x72\x6F\x6E\x67\x3E\x41\x64\x64\x20\x74\x6F\x20\x68\x6F\x6D\x65\x73\x63\x72\x65\x65\x6E\x3C\x2F\x73\x74\x72\x6F\x6E\x67\x3E\x2E\x20\x3C\x73\x6D\x61\x6C\x6C\x3E\x54\x68\x65\x20\x6D\x65\x6E\x75\x20\x63\x61\x6E\x20\x62\x65\x20\x61\x63\x63\x65\x73\x73\x65\x64\x20\x62\x79\x20\x70\x72\x65\x73\x73\x69\x6E\x67\x20\x74\x68\x65\x20\x6D\x65\x6E\x75\x20\x68\x61\x72\x64\x77\x61\x72\x65\x20\x62\x75\x74\x74\x6F\x6E\x20\x69\x66\x20\x79\x6F\x75\x72\x20\x64\x65\x76\x69\x63\x65\x20\x68\x61\x73\x20\x6F\x6E\x65\x2C\x20\x6F\x72\x20\x62\x79\x20\x74\x61\x70\x70\x69\x6E\x67\x20\x74\x68\x65\x20\x74\x6F\x70\x20\x72\x69\x67\x68\x74\x20\x6D\x65\x6E\x75\x20\x69\x63\x6F\x6E\x20\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x61\x74\x68\x2D\x61\x63\x74\x69\x6F\x6E\x2D\x69\x63\x6F\x6E\x22\x3E\x69\x63\x6F\x6E\x3C\x2F\x73\x70\x61\x6E\x3E\x2E\x3C\x2F\x73\x6D\x61\x6C\x6C\x3E"
            }
        };
        for (var n in l.intl) {
            l.intl[n.substr(0, 2)] = l.intl[n]
        };
        l.defaults = {
            appID: "\x6F\x72\x67\x2E\x63\x75\x62\x69\x71\x2E\x61\x64\x64\x74\x6F\x68\x6F\x6D\x65",
            fontSize: 15,
            debug: false,
            modal: false,
            mandatory: false,
            autostart: true,
            skipFirstVisit: false,
            startDelay: 1,
            lifespan: 15,
            displayPace: 1440,
            maxDisplayCount: 0,
            icon: true,
            message: "",
            validLocation: [],
            onInit: null,
            onShow: null,
            onRemove: null,
            onAdd: null,
            onPrivate: null,
            privateModeOverride: false,
            detectHomescreen: false
        };
        var k = p.navigator.userAgent;
        var g = p.navigator;
        d(l, {
            hasToken: m.location.hash == "\x23\x61\x74\x68" || j.test(m.location.href) || i.test(m.location.search),
            isRetina: p.devicePixelRatio && p.devicePixelRatio > 1,
            isIDevice: /iphone|ipod|ipad/i.test(k),
            isMobileChrome: k.indexOf("\x41\x6E\x64\x72\x6F\x69\x64") > -1 && /Chrome\/[.0-9]*/.test(k),
            isMobileIE: k.indexOf("\x57\x69\x6E\x64\x6F\x77\x73\x20\x50\x68\x6F\x6E\x65") > -1,
            language: g.language && g.language.toLowerCase().replace("\x2D", "\x5F") || ""
        });
        l.language = l.language && l.language in l.intl ? l.language : "\x65\x6E\x5F\x75\x73";
        l.isMobileSafari = l.isIDevice && k.indexOf("\x53\x61\x66\x61\x72\x69") > -1 && k.indexOf(
            "\x43\x72\x69\x4F\x53") < 0;
        l.OS = l.isIDevice ? "\x69\x6F\x73" : l.isMobileChrome ? "\x61\x6E\x64\x72\x6F\x69\x64" : l.isMobileIE ?
            "\x77\x69\x6E\x64\x6F\x77\x73" : "\x75\x6E\x73\x75\x70\x70\x6F\x72\x74\x65\x64";
        l.OSVersion = k.match(/(OS|Android) (\d+[_\.]\d+)/);
        l.OSVersion = l.OSVersion && l.OSVersion[2] ? +l.OSVersion[2].replace("\x5F", "\x2E") : 0;
        l.isStandalone = p.navigator.standalone || l.isMobileChrome && screen.height - m.documentElement.clientHeight <
            40;
        l.isTablet = l.isMobileSafari && k.indexOf("\x69\x50\x61\x64") > -1 || l.isMobileChrome && k.indexOf(
            "\x4D\x6F\x62\x69\x6C\x65") < 0;
        l.isCompatible = l.isMobileSafari && l.OSVersion >= 6 || l.isMobileChrome;
        var a = {
            lastDisplayTime: 0,
            returningVisitor: false,
            displayCount: 0,
            optedout: false,
            added: false
        };
        l.removeSession = function (a) {
            try {
                localStorage.removeItem(a || l.defaults.appID)
            } catch (e) {}
        };
        l.Class = function (g) {
            this.options = d({}, l.defaults);
            d(this.options, g);
            if (!c) {
                return
            };
            this.options.mandatory = this.options.mandatory && ("\x73\x74\x61\x6E\x64\x61\x6C\x6F\x6E\x65" in p.navigator ||
                this.options.debug);
            this.options.modal = this.options.modal || this.options.mandatory;
            if (this.options.mandatory) {
                this.options.startDelay = -0.5
            };
            this.options.detectHomescreen = this.options.detectHomescreen === true ? "\x68\x61\x73\x68" : this.options.detectHomescreen;
            if (this.options.debug) {
                l.isCompatible = true;
                l.OS = typeof this.options.debug == "\x73\x74\x72\x69\x6E\x67" ? this.options.debug : l.OS ==
                    "\x75\x6E\x73\x75\x70\x70\x6F\x72\x74\x65\x64" ? "\x61\x6E\x64\x72\x6F\x69\x64" : l.OS;
                l.OSVersion = l.OS == "\x69\x6F\x73" ? "\x38" : "\x34"
            };
            this.container = m.documentElement;
            this.session = localStorage.getItem(this.options.appID);
            this.session = this.session ? JSON.parse(this.session) : undefined;
            if (l.hasToken && (!l.isCompatible || !this.session)) {
                l.hasToken = false;
                h()
            };
            if (!l.isCompatible) {
                return
            };
            this.session = this.session || a;
            try {
                localStorage.setItem(this.options.appID, JSON.stringify(this.session));
                l.hasLocalStorage = true
            } catch (e) {
                l.hasLocalStorage = false;
                if (this.options.onPrivate) {
                    this.options.onPrivate.call(this)
                }
            };
            var f = !this.options.validLocation.length;
            for (var b = this.options.validLocation.length; b--;) {
                if (this.options.validLocation[b].test(m.location.href)) {
                    f = true;
                    break
                }
            };
            if (localStorage.getItem("\x61\x64\x64\x54\x6F\x48\x6F\x6D\x65")) {
                this.optOut()
            };
            if (this.session.optedout || this.session.added || !f) {
                return
            };
            if (l.isStandalone) {
                if (!this.session.added) {
                    this.session.added = true;
                    this.updateSession();
                    if (this.options.onAdd && l.hasLocalStorage) {
                        this.options.onAdd.call(this)
                    }
                };
                return
            };
            if (this.options.detectHomescreen) {
                if (l.hasToken) {
                    h();
                    if (!this.session.added) {
                        this.session.added = true;
                        this.updateSession();
                        if (this.options.onAdd && l.hasLocalStorage) {
                            this.options.onAdd.call(this)
                        }
                    };
                    return
                };
                if (this.options.detectHomescreen == "\x68\x61\x73\x68") {
                    history.replaceState("", p.document.title, m.location.href + "\x23\x61\x74\x68")
                } else {
                    if (this.options.detectHomescreen == "\x73\x6D\x61\x72\x74\x55\x52\x4C") {
                        history.replaceState("", p.document.title, m.location.href.replace(/(\/)?$/,
                            "\x2F\x61\x74\x68\x24\x31"))
                    } else {
                        history.replaceState("", p.document.title, m.location.href + (m.location.search ? "\x26" :
                            "\x3F") + "\x61\x74\x68\x3D")
                    }
                }
            };
            if (!this.session.returningVisitor) {
                this.session.returningVisitor = true;
                this.updateSession();
                if (this.options.skipFirstVisit) {
                    return
                }
            };
            if (!this.options.privateModeOverride && !l.hasLocalStorage) {
                return
            };
            this.ready = true;
            if (this.options.onInit) {
                this.options.onInit.call(this)
            };
            if (this.options.autostart) {
                this.show()
            }
        };
        l.Class.prototype = {
            events: {
                load: "\x5F\x64\x65\x6C\x61\x79\x65\x64\x53\x68\x6F\x77",
                error: "\x5F\x64\x65\x6C\x61\x79\x65\x64\x53\x68\x6F\x77",
                orientationchange: "\x72\x65\x73\x69\x7A\x65",
                resize: "\x72\x65\x73\x69\x7A\x65",
                scroll: "\x72\x65\x73\x69\x7A\x65",
                click: "\x72\x65\x6D\x6F\x76\x65",
                touchmove: "\x5F\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74",
                transitionend: "\x5F\x72\x65\x6D\x6F\x76\x65\x45\x6C\x65\x6D\x65\x6E\x74\x73",
                webkitTransitionEnd: "\x5F\x72\x65\x6D\x6F\x76\x65\x45\x6C\x65\x6D\x65\x6E\x74\x73",
                MSTransitionEnd: "\x5F\x72\x65\x6D\x6F\x76\x65\x45\x6C\x65\x6D\x65\x6E\x74\x73"
            },
            handleEvent: function (a) {
                var b = this.events[a.type];
                if (b) {
                    this[b](a)
                }
            },
            show: function (a) {
                if (this.options.autostart && !b) {
                    setTimeout(this.show.bind(this), 50);
                    return
                };
                if (this.shown) {
                    return
                };
                var f = Date.now();
                var c = this.session.lastDisplayTime;
                if (a !== true) {
                    if (!this.ready) {
                        return
                    };
                    if (f - c < this.options.displayPace * 6e4) {
                        return
                    };
                    if (this.options.maxDisplayCount && this.session.displayCount >= this.options.maxDisplayCount) {
                        return
                    }
                };
                this.shown = true;
                this.session.lastDisplayTime = f;
                this.session.displayCount++;
                this.updateSession();
                if (!this.applicationIcon) {
                    if (l.OS == "\x69\x6F\x73") {
                        this.applicationIcon = m.querySelector(
                            "\x68\x65\x61\x64\x20\x6C\x69\x6E\x6B\x5B\x72\x65\x6C\x5E\x3D\x61\x70\x70\x6C\x65\x2D\x74\x6F\x75\x63\x68\x2D\x69\x63\x6F\x6E\x5D\x5B\x73\x69\x7A\x65\x73\x3D\x22\x31\x35\x32\x78\x31\x35\x32\x22\x5D\x2C\x68\x65\x61\x64\x20\x6C\x69\x6E\x6B\x5B\x72\x65\x6C\x5E\x3D\x61\x70\x70\x6C\x65\x2D\x74\x6F\x75\x63\x68\x2D\x69\x63\x6F\x6E\x5D\x5B\x73\x69\x7A\x65\x73\x3D\x22\x31\x34\x34\x78\x31\x34\x34\x22\x5D\x2C\x68\x65\x61\x64\x20\x6C\x69\x6E\x6B\x5B\x72\x65\x6C\x5E\x3D\x61\x70\x70\x6C\x65\x2D\x74\x6F\x75\x63\x68\x2D\x69\x63\x6F\x6E\x5D\x5B\x73\x69\x7A\x65\x73\x3D\x22\x31\x32\x30\x78\x31\x32\x30\x22\x5D\x2C\x68\x65\x61\x64\x20\x6C\x69\x6E\x6B\x5B\x72\x65\x6C\x5E\x3D\x61\x70\x70\x6C\x65\x2D\x74\x6F\x75\x63\x68\x2D\x69\x63\x6F\x6E\x5D\x5B\x73\x69\x7A\x65\x73\x3D\x22\x31\x31\x34\x78\x31\x31\x34\x22\x5D\x2C\x68\x65\x61\x64\x20\x6C\x69\x6E\x6B\x5B\x72\x65\x6C\x5E\x3D\x61\x70\x70\x6C\x65\x2D\x74\x6F\x75\x63\x68\x2D\x69\x63\x6F\x6E\x5D")
                    } else {
                        this.applicationIcon = m.querySelector(
                            "\x68\x65\x61\x64\x20\x6C\x69\x6E\x6B\x5B\x72\x65\x6C\x5E\x3D\x22\x73\x68\x6F\x72\x74\x63\x75\x74\x20\x69\x63\x6F\x6E\x22\x5D\x5B\x73\x69\x7A\x65\x73\x3D\x22\x31\x39\x36\x78\x31\x39\x36\x22\x5D\x2C\x68\x65\x61\x64\x20\x6C\x69\x6E\x6B\x5B\x72\x65\x6C\x5E\x3D\x61\x70\x70\x6C\x65\x2D\x74\x6F\x75\x63\x68\x2D\x69\x63\x6F\x6E\x5D")
                    }
                };
                var d = "";
                if (this.options.message in l.intl) {
                    d = l.intl[this.options.message][l.OS]
                } else {
                    if (this.options.message !== "") {
                        d = this.options.message
                    } else {
                        d = l.intl[l.language][l.OS]
                    }
                };
                d = "\x3C\x70\x3E" + d.replace("\x25\x69\x63\x6F\x6E",
                    "\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x61\x74\x68\x2D\x61\x63\x74\x69\x6F\x6E\x2D\x69\x63\x6F\x6E\x22\x3E\x69\x63\x6F\x6E\x3C\x2F\x73\x70\x61\x6E\x3E") +
                    "\x3C\x2F\x70\x3E";
                this.viewport = m.createElement("\x64\x69\x76");
                this.viewport.className = "\x61\x74\x68\x2D\x76\x69\x65\x77\x70\x6F\x72\x74";
                if (this.options.modal) {
                    this.viewport.className += "\x20\x61\x74\x68\x2D\x6D\x6F\x64\x61\x6C"
                };
                if (this.options.mandatory) {
                    this.viewport.className += "\x20\x61\x74\x68\x2D\x6D\x61\x6E\x64\x61\x74\x6F\x72\x79"
                };
                this.viewport.style.position = "\x61\x62\x73\x6F\x6C\x75\x74\x65";
                this.element = m.createElement("\x64\x69\x76");
                this.element.className = "\x61\x74\x68\x2D\x63\x6F\x6E\x74\x61\x69\x6E\x65\x72\x20\x61\x74\x68\x2D" + l
                    .OS + "\x20\x61\x74\x68\x2D" + l.OS + (l.OSVersion + "").substr(0, 1) + "\x20\x61\x74\x68\x2D" + (l
                    .isTablet ? "\x74\x61\x62\x6C\x65\x74" : "\x70\x68\x6F\x6E\x65");
                this.element.style.cssText =
                    "\x2D\x77\x65\x62\x6B\x69\x74\x2D\x74\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x2D\x70\x72\x6F\x70\x65\x72\x74\x79\x3A\x2D\x77\x65\x62\x6B\x69\x74\x2D\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D\x2C\x6F\x70\x61\x63\x69\x74\x79\x3B\x2D\x77\x65\x62\x6B\x69\x74\x2D\x74\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x2D\x64\x75\x72\x61\x74\x69\x6F\x6E\x3A\x30\x73\x3B\x2D\x77\x65\x62\x6B\x69\x74\x2D\x74\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x2D\x74\x69\x6D\x69\x6E\x67\x2D\x66\x75\x6E\x63\x74\x69\x6F\x6E\x3A\x65\x61\x73\x65\x2D\x6F\x75\x74\x3B\x74\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x2D\x70\x72\x6F\x70\x65\x72\x74\x79\x3A\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D\x2C\x6F\x70\x61\x63\x69\x74\x79\x3B\x74\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x2D\x64\x75\x72\x61\x74\x69\x6F\x6E\x3A\x30\x73\x3B\x74\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x2D\x74\x69\x6D\x69\x6E\x67\x2D\x66\x75\x6E\x63\x74\x69\x6F\x6E\x3A\x65\x61\x73\x65\x2D\x6F\x75\x74\x3B";
                this.element.style.webkitTransform = "\x74\x72\x61\x6E\x73\x6C\x61\x74\x65\x33\x64\x28\x30\x2C\x2D" + p
                    .innerHeight + "\x70\x78\x2C\x30\x29";
                this.element.style.transform = "\x74\x72\x61\x6E\x73\x6C\x61\x74\x65\x33\x64\x28\x30\x2C\x2D" + p.innerHeight +
                    "\x70\x78\x2C\x30\x29";
                if (this.options.icon && this.applicationIcon) {
                    this.element.className += "\x20\x61\x74\x68\x2D\x69\x63\x6F\x6E";
                    this.img = m.createElement("\x69\x6D\x67");
                    this.img.className =
                        "\x61\x74\x68\x2D\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2D\x69\x63\x6F\x6E";
                    this.img.addEventListener("\x6C\x6F\x61\x64", this, false);
                    this.img.addEventListener("\x65\x72\x72\x6F\x72", this, false);
                    this.img.src = this.applicationIcon.href;
                    this.element.appendChild(this.img)
                };
                this.element.innerHTML += d;
                this.viewport.style.left = "\x2D\x39\x39\x39\x39\x39\x65\x6D";
                this.viewport.appendChild(this.element);
                this.container.appendChild(this.viewport);
                if (!this.img) {
                    this._delayedShow()
                }
            },
            _delayedShow: function (a) {
                setTimeout(this._show.bind(this), this.options.startDelay * 1e3 + 500)
            },
            _show: function () {
                var a = this;
                this.updateViewport();
                p.addEventListener("\x72\x65\x73\x69\x7A\x65", this, false);
                p.addEventListener("\x73\x63\x72\x6F\x6C\x6C", this, false);
                p.addEventListener("\x6F\x72\x69\x65\x6E\x74\x61\x74\x69\x6F\x6E\x63\x68\x61\x6E\x67\x65", this, false);
                if (this.options.modal) {
                    m.addEventListener("\x74\x6F\x75\x63\x68\x6D\x6F\x76\x65", this, true)
                };
                if (!this.options.mandatory) {
                    setTimeout(function () {
                        a.element.addEventListener("\x63\x6C\x69\x63\x6B", a, true)
                    }, 1e3)
                };
                setTimeout(function () {
                    a.element.style.webkitTransitionDuration = "\x31\x2E\x32\x73";
                    a.element.style.transitionDuration = "\x31\x2E\x32\x73";
                    a.element.style.webkitTransform =
                        "\x74\x72\x61\x6E\x73\x6C\x61\x74\x65\x33\x64\x28\x30\x2C\x30\x2C\x30\x29";
                    a.element.style.transform =
                        "\x74\x72\x61\x6E\x73\x6C\x61\x74\x65\x33\x64\x28\x30\x2C\x30\x2C\x30\x29"
                }, 0);
                if (this.options.lifespan) {
                    this.removeTimer = setTimeout(this.remove.bind(this), this.options.lifespan * 1e3)
                };
                if (this.options.onShow) {
                    this.options.onShow.call(this)
                }
            },
            remove: function () {
                clearTimeout(this.removeTimer);
                if (this.img) {
                    this.img.removeEventListener("\x6C\x6F\x61\x64", this, false);
                    this.img.removeEventListener("\x65\x72\x72\x6F\x72", this, false)
                };
                p.removeEventListener("\x72\x65\x73\x69\x7A\x65", this, false);
                p.removeEventListener("\x73\x63\x72\x6F\x6C\x6C", this, false);
                p.removeEventListener("\x6F\x72\x69\x65\x6E\x74\x61\x74\x69\x6F\x6E\x63\x68\x61\x6E\x67\x65", this,
                    false);
                m.removeEventListener("\x74\x6F\x75\x63\x68\x6D\x6F\x76\x65", this, true);
                this.element.removeEventListener("\x63\x6C\x69\x63\x6B", this, true);
                this.element.addEventListener("\x74\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x65\x6E\x64", this, false);
                this.element.addEventListener(
                    "\x77\x65\x62\x6B\x69\x74\x54\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x45\x6E\x64", this, false);
                this.element.addEventListener("\x4D\x53\x54\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x45\x6E\x64", this,
                    false);
                this.element.style.webkitTransitionDuration = "\x30\x2E\x33\x73";
                this.element.style.opacity = "\x30"
            },
            _removeElements: function () {
                this.element.removeEventListener("\x74\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x65\x6E\x64", this, false);
                this.element.removeEventListener(
                    "\x77\x65\x62\x6B\x69\x74\x54\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x45\x6E\x64", this, false);
                this.element.removeEventListener("\x4D\x53\x54\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x45\x6E\x64", this,
                    false);
                this.container.removeChild(this.viewport);
                this.shown = false;
                if (this.options.onRemove) {
                    this.options.onRemove.call(this)
                }
            },
            updateViewport: function () {
                if (!this.shown) {
                    return
                };
                this.viewport.style.width = p.innerWidth + "\x70\x78";
                this.viewport.style.height = p.innerHeight + "\x70\x78";
                this.viewport.style.left = p.scrollX + "\x70\x78";
                this.viewport.style.top = p.scrollY + "\x70\x78";
                var a = m.documentElement.clientWidth;
                this.orientation = a > m.documentElement.clientHeight ? "\x6C\x61\x6E\x64\x73\x63\x61\x70\x65" :
                    "\x70\x6F\x72\x74\x72\x61\x69\x74";
                var b = l.OS == "\x69\x6F\x73" ? this.orientation == "\x70\x6F\x72\x74\x72\x61\x69\x74" ? screen.width :
                    screen.height : screen.width;
                this.scale = screen.width > a ? 1 : b / p.innerWidth;
                this.element.style.fontSize = this.options.fontSize / this.scale + "\x70\x78"
            },
            resize: function () {
                clearTimeout(this.resizeTimer);
                this.resizeTimer = setTimeout(this.updateViewport.bind(this), 100)
            },
            updateSession: function () {
                if (l.hasLocalStorage === false) {
                    return
                };
                localStorage.setItem(this.options.appID, JSON.stringify(this.session))
            },
            clearSession: function () {
                this.session = a;
                this.updateSession()
            },
            optOut: function () {
                this.session.optedout = true;
                this.updateSession()
            },
            optIn: function () {
                this.session.optedout = false;
                this.updateSession()
            },
            clearDisplayCount: function () {
                this.session.displayCount = 0;
                this.updateSession()
            },
            _preventDefault: function (a) {
                a.preventDefault();
                a.stopPropagation()
            }
        };
 
        function d(c, b) {
            for (var a in b) {
                c[a] = b[a]
            };
            return c
        }
        function h() {
            if (m.location.hash == "\x23\x61\x74\x68") {
                history.replaceState("", p.document.title, m.location.href.split("\x23")[0])
            };
            if (j.test(m.location.href)) {
                history.replaceState("", p.document.title, m.location.href.replace(j, "\x24\x31"))
            };
            if (i.test(m.location.search)) {
                history.replaceState("", p.document.title, m.location.href.replace(i, "\x24\x32"))
            }
        }
        p.addToHomescreen = l
    }
    function bM(a) {
        addToHomescreen({
            appID: "\x6E\x6C\x2E\x7A\x79\x67\x6F\x6D\x61\x74\x69\x63\x2E" + a.gameName,
            maxDisplayCount: 1,
            skipFirstVisit: true
        })
    }
    function bN(d, b) {
        var c, a = document.getElementsByTagName("\x73\x63\x72\x69\x70\x74")[0];
        c = document.createElement("\x73\x63\x72\x69\x70\x74");
        if (b) {
            c.addEventListener("\x6C\x6F\x61\x64", b, false)
        };
        c.src = d;
        a.parentNode.insertBefore(c, a)
    }
    function bO(b) {
        this.soundMuted = GameLib.getStorage("\x73\x6F\x75\x6E\x64\x4D\x75\x74\x65\x64") === true;
        this.musicMuted = GameLib.getStorage("\x6D\x75\x73\x69\x63\x4D\x75\x74\x65\x64") === true;
        this.sprite = b;
        var a = /http/.test(location.protocol);
        if (!a || /(Trident|MSIE|IEMobile|Silk)/.test(this.ua) || (/Android/.test(this.ua) && !/(Chrome|Firefox|Opera)/
            .test(this.ua))) {
            this.useWebAudioBGM = false
        };
        if (/Silk/.test(this.ua) || (/Android/.test(this.ua) && !/(Chrome|Firefox|Opera)/.test(this.ua))) {
            this.playSoundFX = false
        };
        this.musicHowl = new Howl({
            src: ["\x73\x6F\x75\x6E\x64\x73\x2F\x47\x61\x6D\x65\x2E\x6F\x67\x67",
                    "\x73\x6F\x75\x6E\x64\x73\x2F\x47\x61\x6D\x65\x2E\x6D\x34\x61"],
            loop: true,
            duration: GameConfig.BGMduration || 0
        });
        if (this.playSoundFX) {
            if (Howler.usingWebAudio) {
                GameSound.soundHowl = new Howl({
                    src: ["\x73\x6F\x75\x6E\x64\x73\x2F\x73\x70\x72\x69\x74\x65\x2E\x6F\x67\x67",
                            "\x73\x6F\x75\x6E\x64\x73\x2F\x73\x70\x72\x69\x74\x65\x2E\x6D\x34\x61"],
                    sprite: b
                })
            } else {
                this.loadScript("\x73\x6F\x75\x6E\x64\x73\x2F\x73\x70\x72\x69\x74\x65\x2E\x6A\x73", function () {
                    GameSound.soundHowl = new Howl({
                        src: [soundSprite, "\x73\x6F\x75\x6E\x64\x73\x2F\x73\x70\x72\x69\x74\x65\x2E\x6D\x34\x61",
                                "\x73\x6F\x75\x6E\x64\x73\x2F\x73\x70\x72\x69\x74\x65\x2E\x6F\x67\x67"],
                        sprite: b
                    })
                })
            }
        }
    }
    function bP() {
        if (!Howler.usingWebAudio) {
            return
        };
        var b = Howler.ctx,
            a = b.createBuffer(1, 1, 22050),
            c = b.createBufferSource();
        c.buffer = a;
        c.connect(b.destination);
        if (typeof c.start === "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64") {
            c.noteOn(0)
        } else {
            c.start(0)
        }
    }
    function bQ(f, a, b) {
        var c = this;
        if (a && this.loopPlaying) {
            this.soundHowl.stop(this.loopPlaying);
            this.loopPlaying = null
        };
        if (!this.sprite[f] || !this.playSoundFX || this.soundMuted) {
            if (!a && b) {
                b(false)
            };
            return
        };
        var d = this.soundHowl.play(f, b);
        if (a) {
            c.loopPlaying = d
        }
    }
    function bR() {
        if (this.musicPlaying) {
            return
        };
        this.musicHowl.play();
        if (this.musicMuted) {
            this.musicHowl.mute(true)
        };
        this.musicPlaying = true
    }
    function bS() {
        if (this.musicPlaying) {
            this.musicHowl.stop();
            this.musicPlaying = false
        }
    }
    function bT(a) {
        this.musicMuted = a;
        this.musicHowl.mute(a);
        GameLib.setStorage("\x6D\x75\x73\x69\x63\x4D\x75\x74\x65\x64", a)
    }
    function bU(a) {
        this.soundMuted = a;
        if (a) {
            this.soundHowl.mute(true)
        } else {
            this.soundHowl.mute(false)
        };
        GameLib.setStorage("\x73\x6F\x75\x6E\x64\x4D\x75\x74\x65\x64", a)
    }
    function bV(a) {
        Howler.mute(a)
    }
    function bW(a) {
        GameSound.init(GameConfig.soundSprite)
    }(a)(
        "\x34\x33\x39\x39\x2E\x63\x6F\x6D\x3B\x68\x2E\x34\x33\x39\x39\x2E\x63\x6F\x6D\x3B\x34\x33\x39\x39\x61\x70\x69\x2E\x63\x6F\x6D\x3B\x64\x65\x76\x68\x35\x2E\x63\x6F\x6D\x3B\x61\x76\x6F\x69\x64\x2E\x6F\x72\x67",
        1,
        "\x54\x68\x69\x73\x20\x67\x61\x6D\x65\x20\x69\x73\x20\x6E\x6F\x74\x20\x61\x6C\x6C\x6F\x77\x65\x64\x20\x74\x6F\x20\x72\x75\x6E\x20\x68\x65\x72\x65\x21");;;
    (b)(this, document);;;
    GameConfig = {
        debug: false,
        gaUA: "\x55\x41\x2D\x34\x36\x39\x32\x31\x31\x33\x37\x2D\x32\x30",
        ads: {
            adsense: {
                url: "\x68\x74\x74\x70\x3A\x2F\x2F\x67\x6F\x6F\x67\x6C\x65\x61\x64\x73\x2E\x67\x2E\x64\x6F\x75\x62\x6C\x65\x63\x6C\x69\x63\x6B\x2E\x6E\x65\x74\x2F\x70\x61\x67\x65\x61\x64\x2F\x61\x64\x73\x3F\x63\x6C\x69\x65\x6E\x74\x3D\x63\x61\x2D\x67\x61\x6D\x65\x73\x2D\x70\x75\x62\x2D\x35\x30\x32\x39\x32\x35\x37\x30\x31\x33\x35\x36\x30\x36\x39\x38\x26\x63\x68\x61\x6E\x6E\x65\x6C\x3D\x31\x35\x39\x34\x39\x32\x38\x36\x39\x38\x2B\x47\x61\x6D\x69\x6E\x67\x2B\x45\x6E\x74\x65\x72\x74\x61\x69\x6E\x6D\x65\x6E\x74\x26\x61\x64\x5F\x74\x79\x70\x65\x3D\x74\x65\x78\x74\x5F\x69\x6D\x61\x67\x65\x5F\x76\x69\x64\x65\x6F\x26\x6D\x61\x78\x5F\x61\x64\x5F\x64\x75\x72\x61\x74\x69\x6F\x6E\x3D\x33\x30\x30\x30\x30\x26\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x5F\x75\x72\x6C\x3D\x5B\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x5F\x75\x72\x6C\x5D"
            }
        },
        dataArr: [
                "\x39\x31\x61\x34\x32\x62\x37\x34\x61\x34\x32\x62\x37\x34\x61\x36\x35\x62\x39\x31\x61\x36\x35\x62\x38\x33\x61\x35\x32\x62\x35\x38\x61\x35\x33\x62\x31\x30\x37\x61\x35\x33\x62",
                "\x38\x30\x61\x34\x39\x62\x39\x31\x61\x33\x39\x62\x36\x39\x61\x33\x39\x62\x36\x39\x61\x36\x33\x62\x39\x31\x61\x36\x33\x62\x38\x30\x61\x32\x35\x62\x38\x30\x61\x37\x33\x62",
                "\x34\x39\x61\x33\x30\x62\x36\x35\x61\x33\x30\x62\x34\x39\x61\x35\x33\x62\x36\x35\x61\x35\x33\x62\x38\x31\x61\x35\x33\x62\x39\x37\x61\x35\x33\x62\x38\x32\x61\x37\x36\x62\x39\x38\x61\x37\x36\x62\x35\x37\x61\x34\x31\x62\x38\x39\x61\x36\x34\x62",
                "\x35\x38\x61\x37\x31\x62\x36\x35\x61\x35\x39\x62\x35\x31\x61\x35\x39\x62\x31\x30\x31\x61\x32\x38\x62\x39\x33\x61\x33\x38\x62\x31\x30\x37\x61\x33\x38\x62\x34\x34\x61\x34\x39\x62\x35\x38\x61\x34\x39\x62\x37\x32\x61\x34\x39\x62\x36\x35\x61\x33\x38\x62\x35\x31\x61\x33\x38\x62\x38\x36\x61\x34\x39\x62\x31\x30\x30\x61\x34\x39\x62\x31\x31\x34\x61\x34\x39\x62\x31\x30\x37\x61\x35\x39\x62\x39\x33\x61\x35\x39\x62",
                "\x39\x34\x61\x38\x30\x62\x31\x30\x39\x61\x38\x30\x62\x31\x30\x39\x61\x33\x32\x62\x34\x38\x61\x31\x38\x62\x36\x33\x61\x31\x38\x62\x36\x36\x61\x33\x30\x62\x34\x35\x61\x33\x30\x62\x39\x31\x61\x36\x38\x62\x31\x31\x32\x61\x36\x38\x62\x34\x38\x61\x36\x35\x62\x36\x33\x61\x36\x35\x62\x39\x34\x61\x33\x32\x62\x39\x31\x61\x34\x36\x62\x31\x31\x32\x61\x34\x36\x62\x38\x37\x61\x35\x37\x62\x36\x36\x61\x35\x32\x62\x34\x35\x61\x35\x32\x62\x35\x36\x61\x35\x38\x62\x34\x31\x61\x34\x31\x62\x35\x36\x61\x32\x34\x62\x37\x31\x61\x34\x31\x62\x31\x30\x32\x61\x34\x31\x62\x31\x30\x32\x61\x37\x32\x62\x31\x31\x36\x61\x35\x37\x62",
                "\x37\x37\x61\x34\x38\x62\x34\x30\x61\x31\x36\x62\x35\x35\x61\x31\x36\x62\x37\x30\x61\x31\x36\x62\x34\x30\x61\x33\x38\x62\x34\x39\x61\x32\x37\x62\x35\x34\x61\x34\x38\x62\x31\x31\x36\x61\x38\x30\x62\x31\x31\x36\x61\x35\x38\x62\x31\x30\x31\x61\x38\x30\x62\x31\x30\x37\x61\x36\x39\x62\x38\x36\x61\x38\x30\x62\x31\x30\x32\x61\x34\x38\x62\x37\x30\x61\x33\x37\x62\x38\x36\x61\x35\x38\x62\x38\x38\x61\x34\x38\x62\x39\x35\x61\x33\x37\x62\x36\x38\x61\x34\x38\x62\x36\x30\x61\x35\x38\x62",
                "\x39\x34\x61\x37\x34\x62\x38\x30\x61\x34\x37\x62\x31\x30\x38\x61\x37\x34\x62\x31\x30\x38\x61\x35\x32\x62\x31\x30\x38\x61\x33\x30\x62\x39\x34\x61\x33\x30\x62\x38\x36\x61\x36\x35\x62\x36\x36\x61\x36\x35\x62\x35\x32\x61\x36\x35\x62\x35\x32\x61\x34\x34\x62\x35\x32\x61\x32\x33\x62\x36\x36\x61\x32\x33\x62\x37\x34\x61\x33\x30\x62\x37\x31\x61\x35\x34\x62\x38\x39\x61\x34\x30\x62\x35\x39\x61\x33\x30\x62\x31\x30\x31\x61\x36\x35\x62\x38\x30\x61\x34\x37\x62",
                "\x34\x34\x61\x35\x34\x62\x31\x31\x34\x61\x34\x31\x62\x35\x35\x61\x36\x35\x62\x35\x35\x61\x34\x34\x62\x31\x30\x33\x61\x35\x32\x62\x31\x30\x33\x61\x33\x31\x62\x37\x39\x61\x32\x35\x62\x37\x39\x61\x34\x38\x62\x37\x39\x61\x37\x31\x62\x37\x32\x61\x34\x34\x62\x37\x32\x61\x36\x35\x62\x38\x36\x61\x35\x32\x62\x38\x36\x61\x33\x31\x62\x36\x33\x61\x35\x34\x62\x39\x35\x61\x34\x31\x62",
                "\x37\x38\x61\x34\x32\x62\x34\x36\x61\x34\x38\x62\x38\x39\x61\x32\x34\x62\x36\x37\x61\x32\x34\x62\x38\x39\x61\x37\x32\x62\x36\x37\x61\x37\x32\x62\x37\x38\x61\x32\x31\x62\x37\x38\x61\x37\x35\x62\x35\x37\x61\x33\x30\x62\x35\x37\x61\x36\x36\x62\x31\x31\x30\x61\x34\x39\x62\x39\x39\x61\x33\x31\x62\x39\x39\x61\x36\x37\x62\x34\x32\x61\x34\x38\x62\x31\x31\x35\x61\x34\x39\x62\x36\x38\x61\x33\x39\x62\x38\x38\x61\x33\x39\x62\x36\x38\x61\x36\x30\x62\x38\x38\x61\x36\x30\x62\x37\x38\x61\x36\x36\x62",
                "\x37\x37\x61\x34\x38\x62\x34\x31\x61\x31\x37\x62\x31\x31\x35\x61\x31\x37\x62\x37\x30\x61\x31\x37\x62\x38\x35\x61\x31\x37\x62\x34\x31\x61\x37\x39\x62\x36\x39\x61\x37\x39\x62\x38\x34\x61\x37\x39\x62\x31\x31\x35\x61\x37\x39\x62\x34\x37\x61\x33\x36\x62\x34\x37\x61\x36\x30\x62\x36\x35\x61\x33\x36\x62\x36\x35\x61\x36\x30\x62\x39\x30\x61\x33\x36\x62\x31\x30\x38\x61\x33\x36\x62\x31\x30\x38\x61\x36\x30\x62\x39\x30\x61\x36\x30\x62\x35\x31\x61\x34\x38\x62\x37\x30\x61\x34\x38\x62\x38\x35\x61\x34\x38\x62\x31\x30\x34\x61\x34\x38\x62",
                "\x31\x30\x33\x61\x37\x39\x62\x39\x37\x61\x37\x39\x62\x35\x34\x61\x37\x39\x62\x36\x31\x61\x37\x39\x62\x31\x30\x34\x61\x31\x36\x62\x39\x37\x61\x31\x36\x62\x35\x34\x61\x31\x36\x62\x36\x31\x61\x31\x36\x62\x36\x38\x61\x31\x36\x62\x39\x30\x61\x31\x36\x62\x36\x38\x61\x33\x37\x62\x39\x30\x61\x33\x37\x62\x36\x38\x61\x35\x38\x62\x39\x30\x61\x35\x38\x62\x36\x38\x61\x37\x39\x62\x39\x30\x61\x37\x39\x62\x37\x39\x61\x32\x36\x62\x37\x39\x61\x34\x38\x62\x37\x39\x61\x37\x30\x62",
                "\x38\x39\x61\x36\x30\x62\x36\x36\x61\x33\x38\x62\x37\x32\x61\x34\x39\x62\x38\x36\x61\x34\x39\x62\x35\x38\x61\x34\x39\x62\x31\x30\x30\x61\x34\x39\x62\x31\x31\x34\x61\x38\x30\x62\x31\x30\x30\x61\x37\x30\x62\x31\x31\x34\x61\x37\x30\x62\x35\x38\x61\x32\x38\x62\x34\x34\x61\x31\x38\x62\x34\x34\x61\x32\x38\x62\x35\x32\x61\x33\x39\x62\x31\x30\x36\x61\x36\x30\x62\x37\x39\x61\x34\x39\x62",
                "\x34\x33\x61\x31\x39\x62\x35\x30\x61\x32\x37\x62\x35\x37\x61\x33\x35\x62\x36\x34\x61\x34\x33\x62\x31\x31\x33\x61\x37\x38\x62\x31\x30\x36\x61\x37\x30\x62\x39\x39\x61\x36\x32\x62\x39\x32\x61\x35\x34\x62\x37\x38\x61\x34\x38\x62\x37\x30\x61\x34\x38\x62\x38\x36\x61\x34\x38\x62\x34\x32\x61\x34\x39\x62\x31\x31\x34\x61\x34\x38\x62\x34\x32\x61\x37\x30\x62\x31\x31\x34\x61\x32\x37\x62\x31\x30\x30\x61\x32\x37\x62\x35\x36\x61\x37\x30\x62\x34\x39\x61\x35\x39\x62\x31\x30\x38\x61\x33\x37\x62\x34\x39\x61\x37\x36\x62\x31\x30\x38\x61\x31\x39\x62",
                "\x38\x39\x61\x35\x36\x62\x36\x39\x61\x34\x30\x62\x37\x39\x61\x31\x36\x62\x37\x39\x61\x38\x30\x62\x36\x39\x61\x31\x39\x62\x38\x39\x61\x31\x39\x62\x36\x39\x61\x37\x37\x62\x38\x39\x61\x37\x37\x62\x35\x39\x61\x32\x32\x62\x39\x39\x61\x32\x32\x62\x35\x38\x61\x37\x34\x62\x39\x39\x61\x37\x34\x62\x37\x38\x61\x34\x38\x62\x34\x32\x61\x38\x30\x62\x34\x32\x61\x31\x36\x62\x34\x32\x61\x33\x37\x62\x34\x32\x61\x35\x39\x62\x34\x39\x61\x34\x38\x62\x31\x31\x35\x61\x31\x36\x62\x31\x31\x35\x61\x33\x37\x62\x31\x31\x35\x61\x38\x30\x62\x31\x31\x35\x61\x35\x39\x62\x31\x30\x38\x61\x34\x38\x62",
                "\x34\x31\x61\x31\x36\x62\x34\x31\x61\x33\x38\x62\x35\x36\x61\x31\x36\x62\x35\x36\x61\x33\x38\x62\x37\x31\x61\x31\x36\x62\x37\x31\x61\x33\x38\x62\x31\x31\x35\x61\x38\x30\x62\x31\x30\x30\x61\x38\x30\x62\x38\x35\x61\x38\x30\x62\x38\x35\x61\x35\x38\x62\x31\x30\x30\x61\x35\x38\x62\x31\x31\x35\x61\x35\x38\x62\x37\x38\x61\x34\x38\x62\x34\x38\x61\x32\x37\x62\x36\x34\x61\x32\x37\x62\x31\x30\x38\x61\x36\x39\x62\x39\x32\x61\x36\x39\x62\x36\x35\x61\x36\x38\x62\x37\x31\x61\x35\x39\x62\x39\x31\x61\x32\x38\x62\x38\x35\x61\x33\x37\x62",
                "\x34\x34\x61\x33\x33\x62\x34\x34\x61\x36\x31\x62\x34\x31\x61\x34\x37\x62\x35\x37\x61\x34\x37\x62\x37\x33\x61\x34\x37\x62\x38\x39\x61\x34\x37\x62\x31\x30\x35\x61\x34\x37\x62\x39\x37\x61\x33\x36\x62\x39\x37\x61\x35\x38\x62\x38\x39\x61\x32\x35\x62\x38\x39\x61\x36\x39\x62\x38\x32\x61\x31\x36\x62\x38\x32\x61\x37\x39\x62\x34\x38\x61\x34\x37\x62\x36\x35\x61\x34\x37\x62\x38\x31\x61\x34\x37\x62\x36\x38\x61\x31\x36\x62\x36\x38\x61\x37\x39\x62\x31\x31\x36\x61\x34\x37\x62",
                "\x38\x39\x61\x35\x36\x62\x36\x36\x61\x33\x39\x62\x34\x31\x61\x35\x37\x62\x35\x36\x61\x37\x39\x62\x31\x30\x30\x61\x31\x36\x62\x31\x31\x35\x61\x33\x38\x62\x34\x38\x61\x34\x38\x62\x36\x33\x61\x37\x30\x62\x35\x35\x61\x33\x39\x62\x37\x30\x61\x36\x31\x62\x39\x33\x61\x32\x35\x62\x31\x30\x38\x61\x34\x37\x62\x38\x36\x61\x33\x34\x62\x31\x30\x31\x61\x35\x36\x62\x37\x38\x61\x34\x38\x62\x39\x35\x61\x37\x33\x62\x36\x30\x61\x32\x32\x62\x34\x38\x61\x37\x30\x62\x31\x30\x38\x61\x32\x35\x62",
                "\x36\x37\x61\x31\x39\x62\x38\x33\x61\x31\x39\x62\x39\x39\x61\x31\x39\x62\x39\x31\x61\x34\x36\x62\x38\x33\x61\x37\x33\x62\x36\x37\x61\x37\x33\x62\x39\x39\x61\x37\x33\x62\x37\x35\x61\x34\x36\x62\x39\x31\x61\x33\x31\x62\x37\x35\x61\x36\x30\x62\x37\x35\x61\x33\x31\x62\x39\x31\x61\x36\x30\x62\x37\x35\x61\x34\x35\x62\x39\x31\x61\x34\x35\x62\x38\x33\x61\x34\x35\x62\x36\x37\x61\x34\x35\x62\x39\x39\x61\x34\x35\x62\x35\x39\x61\x32\x32\x62\x31\x30\x37\x61\x32\x32\x62\x35\x39\x61\x36\x39\x62\x31\x30\x37\x61\x36\x39\x62",
                "\x36\x39\x61\x37\x39\x62\x38\x35\x61\x37\x39\x62\x36\x39\x61\x31\x37\x62\x38\x35\x61\x31\x37\x62\x35\x33\x61\x31\x37\x62\x35\x33\x61\x37\x39\x62\x35\x33\x61\x32\x37\x62\x35\x33\x61\x36\x39\x62\x35\x33\x61\x33\x37\x62\x35\x33\x61\x35\x39\x62\x31\x30\x31\x61\x31\x37\x62\x31\x30\x31\x61\x37\x39\x62\x31\x30\x31\x61\x32\x37\x62\x31\x30\x31\x61\x36\x39\x62\x31\x30\x31\x61\x33\x37\x62\x31\x30\x31\x61\x35\x39\x62\x36\x31\x61\x34\x39\x62\x36\x39\x61\x34\x39\x62\x39\x33\x61\x34\x39\x62\x38\x35\x61\x34\x39\x62\x37\x37\x61\x31\x39\x62\x37\x37\x61\x37\x37\x62\x37\x37\x61\x32\x38\x62\x37\x37\x61\x37\x30\x62",
                "\x37\x39\x61\x34\x37\x62\x37\x31\x61\x34\x37\x62\x38\x37\x61\x34\x37\x62\x39\x35\x61\x34\x37\x62\x31\x30\x33\x61\x34\x37\x62\x31\x31\x31\x61\x34\x37\x62\x36\x33\x61\x34\x37\x62\x35\x35\x61\x34\x37\x62\x34\x37\x61\x34\x37\x62\x34\x37\x61\x32\x34\x62\x36\x33\x61\x32\x34\x62\x37\x39\x61\x32\x34\x62\x31\x31\x31\x61\x37\x30\x62\x39\x35\x61\x37\x30\x62\x34\x37\x61\x33\x35\x62\x31\x31\x31\x61\x35\x38\x62\x37\x39\x61\x37\x30\x62\x37\x31\x61\x31\x37\x62\x38\x37\x61\x37\x37\x62",
                "\x37\x38\x61\x35\x30\x62\x37\x31\x61\x34\x30\x62\x38\x35\x61\x34\x30\x62\x36\x34\x61\x33\x30\x62\x39\x32\x61\x33\x30\x62\x37\x31\x61\x36\x31\x62\x38\x35\x61\x36\x31\x62\x36\x34\x61\x37\x30\x62\x39\x32\x61\x37\x30\x62\x35\x30\x61\x34\x30\x62\x35\x30\x61\x33\x30\x62\x35\x37\x61\x32\x30\x62\x31\x30\x36\x61\x34\x30\x62\x31\x30\x36\x61\x33\x30\x62\x39\x39\x61\x32\x30\x62\x35\x30\x61\x36\x31\x62\x35\x30\x61\x37\x30\x62\x35\x37\x61\x37\x39\x62\x31\x30\x36\x61\x36\x31\x62\x31\x30\x36\x61\x37\x30\x62\x39\x39\x61\x37\x39\x62\x34\x33\x61\x33\x38\x62\x31\x31\x33\x61\x33\x38\x62\x31\x31\x33\x61\x36\x33\x62\x34\x33\x61\x36\x33\x62\x37\x38\x61\x32\x31\x62\x37\x38\x61\x37\x38\x62",
                "\x38\x31\x61\x35\x39\x62\x38\x31\x61\x33\x34\x62\x31\x30\x32\x61\x34\x39\x62\x31\x30\x39\x61\x37\x34\x62\x31\x30\x39\x61\x32\x34\x62\x36\x30\x61\x34\x39\x62\x35\x33\x61\x37\x34\x62\x35\x34\x61\x32\x35\x62\x36\x30\x61\x33\x30\x62\x36\x37\x61\x33\x34\x62\x36\x30\x61\x36\x39\x62\x36\x37\x61\x36\x34\x62\x37\x34\x61\x35\x39\x62\x37\x34\x61\x33\x38\x62\x31\x30\x32\x61\x32\x39\x62\x39\x35\x61\x33\x33\x62\x38\x38\x61\x33\x38\x62\x31\x30\x32\x61\x36\x39\x62\x39\x35\x61\x36\x34\x62\x38\x38\x61\x35\x39\x62\x38\x31\x61\x34\x38\x62",
                "\x38\x31\x61\x36\x34\x62\x31\x30\x32\x61\x32\x39\x62\x31\x30\x32\x61\x36\x39\x62\x36\x30\x61\x36\x39\x62\x36\x30\x61\x33\x30\x62\x38\x31\x61\x33\x34\x62\x31\x30\x39\x61\x37\x34\x62\x31\x30\x39\x61\x32\x34\x62\x35\x33\x61\x37\x34\x62\x36\x37\x61\x33\x34\x62\x36\x37\x61\x36\x34\x62\x39\x35\x61\x36\x34\x62\x35\x33\x61\x32\x35\x62\x34\x36\x61\x35\x30\x62\x31\x31\x36\x61\x34\x39\x62\x39\x35\x61\x33\x34\x62\x38\x38\x61\x31\x38\x62\x37\x34\x61\x31\x38\x62\x37\x34\x61\x37\x39\x62\x38\x38\x61\x37\x39\x62\x37\x34\x61\x34\x39\x62\x38\x38\x61\x34\x39\x62\x38\x31\x61\x34\x39\x62",
                "\x34\x33\x61\x37\x37\x62\x35\x38\x61\x37\x37\x62\x37\x33\x61\x37\x37\x62\x31\x31\x33\x61\x31\x39\x62\x39\x38\x61\x31\x39\x62\x38\x33\x61\x31\x39\x62\x39\x31\x61\x32\x31\x62\x36\x35\x61\x37\x35\x62\x38\x38\x61\x37\x37\x62\x36\x38\x61\x31\x39\x62\x37\x36\x61\x32\x31\x62\x38\x30\x61\x37\x34\x62\x36\x38\x61\x34\x32\x62\x38\x38\x61\x35\x33\x62\x36\x32\x61\x33\x31\x62\x39\x35\x61\x36\x35\x62\x37\x38\x61\x34\x37\x62\x37\x30\x61\x33\x37\x62\x38\x35\x61\x35\x38\x62\x34\x33\x61\x35\x34\x62\x31\x31\x33\x61\x34\x32\x62\x34\x39\x61\x36\x37\x62\x31\x30\x37\x61\x33\x30\x62",
                "\x31\x30\x36\x61\x35\x39\x62\x35\x30\x61\x33\x37\x62\x34\x32\x61\x34\x37\x62\x31\x31\x34\x61\x34\x38\x62\x35\x37\x61\x34\x37\x62\x39\x39\x61\x34\x38\x62\x37\x38\x61\x33\x37\x62\x37\x38\x61\x31\x36\x62\x37\x38\x61\x35\x38\x62\x37\x38\x61\x37\x39\x62\x36\x36\x61\x33\x37\x62\x39\x30\x61\x35\x38\x62\x37\x38\x61\x34\x37\x62\x35\x38\x61\x32\x36\x62\x39\x38\x61\x36\x39\x62\x36\x36\x61\x31\x36\x62\x39\x30\x61\x37\x39\x62\x35\x30\x61\x35\x39\x62\x35\x30\x61\x38\x30\x62\x31\x30\x36\x61\x31\x36\x62\x31\x30\x36\x61\x33\x37\x62\x36\x34\x61\x36\x39\x62\x39\x32\x61\x32\x36\x62",
                "\x35\x38\x61\x37\x37\x62\x37\x32\x61\x31\x37\x62\x35\x37\x61\x31\x37\x62\x34\x32\x61\x31\x37\x62\x34\x38\x61\x32\x37\x62\x36\x33\x61\x32\x37\x62\x37\x38\x61\x32\x37\x62\x37\x38\x61\x34\x39\x62\x36\x33\x61\x34\x39\x62\x39\x33\x61\x34\x39\x62\x37\x38\x61\x37\x31\x62\x39\x33\x61\x37\x31\x62\x31\x30\x38\x61\x37\x31\x62\x38\x39\x61\x33\x32\x62\x38\x39\x61\x35\x34\x62\x31\x30\x34\x61\x35\x34\x62\x37\x34\x61\x33\x32\x62\x35\x39\x61\x33\x32\x62\x37\x34\x61\x35\x34\x62\x38\x39\x61\x37\x36\x62\x31\x30\x34\x61\x37\x36\x62\x39\x37\x61\x38\x30\x62\x36\x37\x61\x34\x33\x62\x38\x32\x61\x34\x33\x62\x39\x37\x61\x34\x33\x62\x34\x33\x61\x34\x39\x62\x34\x33\x61\x36\x33\x62\x31\x30\x34\x61\x31\x37\x62\x31\x31\x32\x61\x32\x38\x62\x31\x31\x35\x61\x31\x37\x62\x35\x30\x61\x37\x37\x62\x34\x33\x61\x37\x37\x62",
                "\x37\x39\x61\x36\x39\x62\x34\x31\x61\x31\x36\x62\x34\x31\x61\x33\x37\x62\x34\x31\x61\x35\x38\x62\x34\x31\x61\x37\x39\x62\x34\x36\x61\x36\x39\x62\x34\x36\x61\x34\x38\x62\x34\x36\x61\x32\x37\x62\x35\x33\x61\x33\x37\x62\x35\x33\x61\x35\x38\x62\x36\x30\x61\x34\x36\x62\x31\x31\x35\x61\x31\x36\x62\x31\x31\x35\x61\x33\x37\x62\x31\x31\x35\x61\x35\x38\x62\x31\x31\x35\x61\x37\x39\x62\x31\x31\x31\x61\x32\x37\x62\x31\x31\x31\x61\x34\x38\x62\x31\x31\x31\x61\x36\x39\x62\x31\x30\x34\x61\x33\x37\x62\x31\x30\x34\x61\x35\x38\x62\x39\x37\x61\x34\x37\x62\x37\x32\x61\x31\x36\x62\x38\x36\x61\x31\x36\x62\x37\x39\x61\x32\x36\x62\x36\x38\x61\x33\x37\x62\x38\x39\x61\x33\x37\x62\x36\x38\x61\x35\x38\x62\x38\x39\x61\x35\x38\x62\x37\x32\x61\x37\x39\x62\x38\x36\x61\x37\x39\x62",
                "\x34\x31\x61\x31\x36\x62\x35\x36\x61\x31\x36\x62\x37\x31\x61\x31\x36\x62\x38\x36\x61\x31\x36\x62\x31\x30\x31\x61\x31\x36\x62\x31\x31\x36\x61\x31\x36\x62\x34\x31\x61\x38\x30\x62\x35\x36\x61\x38\x30\x62\x37\x31\x61\x38\x30\x62\x38\x36\x61\x38\x30\x62\x31\x30\x31\x61\x38\x30\x62\x31\x31\x36\x61\x38\x30\x62\x34\x39\x61\x36\x32\x62\x34\x39\x61\x33\x33\x62\x36\x34\x61\x33\x33\x62\x37\x39\x61\x33\x33\x62\x39\x34\x61\x33\x33\x62\x31\x30\x39\x61\x33\x33\x62\x36\x34\x61\x36\x32\x62\x37\x39\x61\x36\x32\x62\x39\x34\x61\x36\x32\x62\x31\x30\x39\x61\x36\x32\x62\x35\x36\x61\x34\x38\x62\x37\x32\x61\x34\x38\x62\x38\x37\x61\x34\x38\x62\x31\x30\x32\x61\x34\x38\x62",
                "\x37\x31\x61\x36\x33\x62\x37\x31\x61\x33\x32\x62\x38\x35\x61\x33\x32\x62\x38\x35\x61\x36\x33\x62\x35\x35\x61\x33\x32\x62\x35\x35\x61\x36\x35\x62\x31\x30\x32\x61\x36\x35\x62\x31\x30\x31\x61\x33\x32\x62\x37\x38\x61\x31\x36\x62\x37\x38\x61\x33\x37\x62\x37\x38\x61\x35\x38\x62\x37\x38\x61\x37\x39\x62\x36\x33\x61\x32\x36\x62\x39\x33\x61\x32\x36\x62\x36\x33\x61\x34\x38\x62\x39\x33\x61\x34\x38\x62\x36\x33\x61\x37\x30\x62\x39\x33\x61\x37\x30\x62\x34\x38\x61\x33\x38\x62\x34\x38\x61\x36\x30\x62\x31\x30\x38\x61\x36\x30\x62\x31\x30\x38\x61\x33\x38\x62\x35\x35\x61\x34\x38\x62\x31\x30\x31\x61\x34\x38\x62\x37\x31\x61\x34\x38\x62\x38\x35\x61\x34\x38\x62",
                "\x36\x35\x61\x32\x35\x62\x39\x39\x61\x32\x35\x62\x31\x30\x30\x61\x37\x34\x62\x36\x35\x61\x37\x35\x62\x35\x39\x61\x36\x32\x62\x31\x30\x35\x61\x36\x32\x62\x35\x39\x61\x33\x39\x62\x31\x30\x35\x61\x33\x39\x62\x38\x32\x61\x35\x30\x62\x37\x34\x61\x33\x39\x62\x39\x30\x61\x33\x39\x62\x39\x30\x61\x36\x31\x62\x38\x32\x61\x32\x39\x62\x37\x34\x61\x36\x31\x62\x38\x32\x61\x37\x31\x62\x36\x37\x61\x35\x30\x62\x39\x37\x61\x35\x30\x62\x34\x38\x61\x32\x31\x62\x34\x38\x61\x37\x39\x62\x31\x31\x36\x61\x32\x31\x62\x31\x31\x36\x61\x38\x30\x62\x36\x31\x61\x36\x31\x62\x36\x31\x61\x34\x30\x62\x31\x30\x33\x61\x34\x30\x62\x31\x30\x33\x61\x36\x31\x62\x37\x35\x61\x34\x30\x62\x38\x39\x61\x34\x30\x62\x37\x35\x61\x36\x31\x62\x38\x39\x61\x36\x31\x62\x36\x35\x61\x32\x37\x62\x38\x32\x61\x32\x32\x62\x39\x39\x61\x32\x37\x62\x36\x35\x61\x37\x33\x62\x38\x32\x61\x37\x31\x62\x31\x30\x30\x61\x37\x32\x62",
                "\x31\x30\x31\x61\x38\x30\x62\x35\x35\x61\x38\x30\x62\x31\x30\x31\x61\x31\x36\x62\x35\x35\x61\x31\x36\x62\x38\x36\x61\x38\x30\x62\x37\x30\x61\x38\x30\x62\x38\x36\x61\x31\x36\x62\x37\x30\x61\x31\x36\x62\x37\x30\x61\x35\x39\x62\x37\x30\x61\x33\x36\x62\x38\x36\x61\x33\x36\x62\x38\x36\x61\x35\x39\x62\x34\x31\x61\x31\x36\x62\x34\x31\x61\x38\x30\x62\x31\x31\x35\x61\x31\x36\x62\x31\x31\x35\x61\x38\x30\x62\x34\x36\x61\x35\x39\x62\x34\x36\x61\x33\x37\x62\x31\x31\x30\x61\x33\x37\x62\x31\x31\x30\x61\x35\x39\x62\x36\x30\x61\x34\x38\x62\x37\x38\x61\x34\x38\x62\x39\x36\x61\x34\x38\x62\x34\x38\x61\x32\x34\x62\x31\x30\x38\x61\x32\x34\x62\x34\x38\x61\x37\x32\x62\x31\x30\x38\x61\x37\x32\x62\x35\x35\x61\x33\x32\x62\x35\x35\x61\x36\x34\x62\x31\x30\x31\x61\x33\x32\x62\x31\x30\x31\x61\x36\x33\x62\x34\x31\x61\x34\x38\x62\x35\x35\x61\x34\x38\x62\x31\x30\x31\x61\x34\x38\x62\x37\x30\x61\x34\x38\x62\x38\x36\x61\x34\x38\x62\x37\x30\x61\x32\x36\x62\x38\x36\x61\x32\x36\x62\x37\x30\x61\x37\x30\x62\x38\x36\x61\x37\x30\x62\x31\x31\x35\x61\x34\x38\x62",
                "\x35\x35\x61\x35\x39\x62\x31\x30\x31\x61\x33\x37\x62\x37\x38\x61\x34\x38\x62\x34\x31\x61\x31\x37\x62\x31\x30\x31\x61\x31\x37\x62\x31\x31\x35\x61\x31\x37\x62\x35\x35\x61\x31\x37\x62\x36\x39\x61\x31\x37\x62\x38\x37\x61\x31\x37\x62\x34\x31\x61\x33\x38\x62\x35\x35\x61\x33\x38\x62\x36\x39\x61\x33\x38\x62\x31\x31\x35\x61\x37\x39\x62\x31\x30\x31\x61\x37\x39\x62\x38\x37\x61\x37\x39\x62\x38\x37\x61\x35\x38\x62\x31\x30\x31\x61\x35\x38\x62\x31\x31\x35\x61\x35\x38\x62\x34\x31\x61\x37\x39\x62\x35\x35\x61\x37\x39\x62\x36\x39\x61\x37\x39\x62\x34\x38\x61\x32\x38\x62\x36\x32\x61\x32\x38\x62\x39\x34\x61\x36\x39\x62\x31\x30\x38\x61\x36\x39\x62\x34\x33\x61\x31\x37\x62\x36\x37\x61\x31\x37\x62\x34\x33\x61\x33\x38\x62\x36\x37\x61\x33\x38\x62\x38\x39\x61\x35\x38\x62\x31\x31\x33\x61\x35\x38\x62\x38\x39\x61\x37\x39\x62\x31\x31\x33\x61\x37\x39\x62\x39\x34\x61\x32\x37\x62\x31\x30\x38\x61\x32\x37\x62\x34\x38\x61\x36\x39\x62\x36\x32\x61\x36\x39\x62\x37\x38\x61\x34\x38\x62\x34\x31\x61\x37\x37\x62\x35\x35\x61\x37\x37\x62\x36\x39\x61\x37\x37\x62\x38\x37\x61\x31\x39\x62\x31\x30\x31\x61\x31\x39\x62\x31\x31\x35\x61\x31\x39\x62\x35\x35\x61\x32\x38\x62\x31\x30\x31\x61\x36\x39\x62",
                "\x38\x30\x61\x37\x33\x62\x37\x32\x61\x36\x38\x62\x38\x38\x61\x36\x38\x62\x31\x31\x35\x61\x34\x33\x62\x34\x35\x61\x34\x33\x62\x39\x36\x61\x36\x33\x62\x38\x30\x61\x36\x33\x62\x36\x34\x61\x36\x33\x62\x31\x30\x34\x61\x35\x38\x62\x38\x38\x61\x35\x38\x62\x37\x32\x61\x35\x38\x62\x35\x36\x61\x35\x38\x62\x34\x38\x61\x35\x33\x62\x36\x34\x61\x35\x33\x62\x38\x30\x61\x35\x33\x62\x39\x36\x61\x35\x33\x62\x31\x31\x32\x61\x35\x33\x62\x38\x30\x61\x31\x36\x62\x37\x32\x61\x32\x30\x62\x38\x38\x61\x32\x30\x62\x38\x30\x61\x32\x33\x62\x36\x34\x61\x32\x33\x62\x35\x36\x61\x32\x37\x62\x37\x32\x61\x32\x37\x62\x36\x34\x61\x33\x32\x62\x39\x36\x61\x32\x33\x62\x38\x38\x61\x32\x37\x62\x31\x30\x34\x61\x32\x37\x62\x38\x30\x61\x33\x32\x62\x34\x38\x61\x33\x32\x62\x39\x36\x61\x33\x32\x62\x35\x36\x61\x34\x33\x62\x37\x32\x61\x34\x33\x62\x38\x38\x61\x34\x33\x62\x36\x34\x61\x33\x38\x62\x38\x31\x61\x34\x37\x62\x31\x31\x32\x61\x33\x32\x62\x31\x30\x34\x61\x34\x33\x62\x39\x36\x61\x33\x38\x62",
                "\x35\x36\x61\x31\x36\x62\x31\x30\x30\x61\x31\x36\x62\x38\x36\x61\x31\x36\x62\x37\x30\x61\x31\x36\x62\x34\x30\x61\x31\x36\x62\x31\x31\x36\x61\x31\x36\x62\x34\x30\x61\x38\x30\x62\x31\x31\x36\x61\x38\x30\x62\x35\x36\x61\x38\x30\x62\x37\x30\x61\x38\x30\x62\x38\x36\x61\x38\x30\x62\x31\x30\x30\x61\x38\x30\x62\x36\x33\x61\x31\x38\x62\x39\x33\x61\x31\x38\x62\x36\x33\x61\x37\x38\x62\x39\x33\x61\x37\x38\x62\x34\x31\x61\x32\x31\x62\x34\x31\x61\x37\x35\x62\x31\x31\x35\x61\x32\x31\x62\x31\x31\x35\x61\x37\x35\x62\x34\x32\x61\x32\x36\x62\x34\x32\x61\x37\x30\x62\x31\x31\x34\x61\x32\x36\x62\x31\x31\x34\x61\x37\x30\x62\x34\x33\x61\x33\x31\x62\x34\x33\x61\x36\x35\x62\x31\x31\x33\x61\x33\x31\x62\x31\x31\x33\x61\x36\x35\x62\x34\x34\x61\x33\x36\x62\x34\x34\x61\x36\x30\x62\x31\x31\x32\x61\x33\x36\x62\x31\x31\x32\x61\x36\x30\x62\x36\x34\x61\x32\x33\x62\x36\x35\x61\x32\x38\x62\x39\x32\x61\x32\x33\x62\x39\x31\x61\x32\x38\x62\x36\x34\x61\x37\x33\x62\x36\x35\x61\x36\x38\x62\x39\x32\x61\x37\x33\x62\x39\x31\x61\x36\x38\x62\x36\x36\x61\x33\x33\x62\x39\x30\x61\x33\x33\x62\x36\x36\x61\x36\x33\x62\x39\x30\x61\x36\x33\x62\x36\x37\x61\x33\x38\x62\x36\x37\x61\x35\x38\x62\x38\x39\x61\x33\x38\x62\x38\x39\x61\x35\x38\x62\x35\x35\x61\x34\x38\x62\x37\x39\x61\x34\x38\x62\x31\x30\x31\x61\x34\x38\x62",
                "\x31\x31\x33\x61\x37\x30\x62\x31\x31\x33\x61\x32\x37\x62\x34\x33\x61\x32\x36\x62\x34\x33\x61\x36\x39\x62\x31\x30\x39\x61\x31\x39\x62\x34\x37\x61\x37\x37\x62\x34\x37\x61\x32\x30\x62\x31\x30\x39\x61\x37\x36\x62\x34\x30\x61\x31\x36\x62\x34\x30\x61\x33\x37\x62\x35\x34\x61\x31\x36\x62\x35\x34\x61\x33\x37\x62\x31\x31\x36\x61\x31\x36\x62\x31\x30\x32\x61\x31\x36\x62\x31\x30\x32\x61\x33\x37\x62\x31\x31\x36\x61\x33\x37\x62\x34\x30\x61\x38\x30\x62\x34\x30\x61\x35\x39\x62\x35\x34\x61\x35\x39\x62\x35\x34\x61\x38\x30\x62\x31\x31\x36\x61\x38\x30\x62\x31\x31\x36\x61\x35\x39\x62\x31\x30\x32\x61\x35\x39\x62\x31\x30\x32\x61\x38\x30\x62\x39\x35\x61\x35\x38\x62\x36\x31\x61\x33\x38\x62\x36\x38\x61\x34\x33\x62\x38\x38\x61\x35\x33\x62\x34\x37\x61\x32\x36\x62\x34\x37\x61\x36\x39\x62\x31\x30\x39\x61\x32\x37\x62\x31\x30\x39\x61\x37\x30\x62\x35\x36\x61\x35\x39\x62\x37\x38\x61\x34\x36\x62\x36\x34\x61\x35\x30\x62\x31\x30\x30\x61\x33\x37\x62\x39\x32\x61\x34\x31\x62\x37\x32\x61\x34\x36\x62\x38\x35\x61\x34\x36\x62\x37\x38\x61\x31\x37\x62\x37\x38\x61\x32\x32\x62\x37\x38\x61\x37\x39\x62\x37\x38\x61\x37\x34\x62\x38\x35\x61\x38\x30\x62\x37\x31\x61\x38\x30\x62\x38\x35\x61\x31\x36\x62\x37\x31\x61\x31\x36\x62",
                "\x38\x38\x61\x35\x39\x62\x31\x30\x32\x61\x35\x39\x62\x31\x31\x36\x61\x35\x39\x62\x36\x38\x61\x33\x37\x62\x35\x34\x61\x33\x37\x62\x34\x30\x61\x33\x37\x62\x34\x30\x61\x31\x36\x62\x35\x34\x61\x31\x36\x62\x36\x38\x61\x31\x36\x62\x38\x32\x61\x31\x36\x62\x31\x31\x36\x61\x38\x30\x62\x31\x30\x32\x61\x38\x30\x62\x38\x38\x61\x38\x30\x62\x37\x34\x61\x38\x30\x62\x34\x37\x61\x31\x39\x62\x36\x31\x61\x31\x39\x62\x37\x35\x61\x31\x39\x62\x38\x31\x61\x37\x37\x62\x39\x35\x61\x37\x37\x62\x31\x30\x39\x61\x37\x37\x62\x34\x30\x61\x35\x38\x62\x35\x34\x61\x35\x38\x62\x34\x30\x61\x37\x39\x62\x31\x31\x36\x61\x33\x38\x62\x31\x30\x32\x61\x33\x38\x62\x31\x31\x36\x61\x31\x37\x62\x34\x37\x61\x34\x30\x62\x36\x31\x61\x34\x30\x62\x39\x35\x61\x35\x36\x62\x31\x30\x39\x61\x35\x36\x62\x34\x37\x61\x36\x31\x62\x31\x30\x39\x61\x33\x35\x62\x35\x34\x61\x32\x32\x62\x36\x38\x61\x32\x32\x62\x35\x34\x61\x34\x33\x62\x35\x34\x61\x36\x34\x62\x38\x38\x61\x37\x34\x62\x31\x30\x32\x61\x37\x34\x62\x31\x30\x32\x61\x35\x33\x62\x31\x30\x32\x61\x33\x32\x62\x36\x31\x61\x32\x35\x62\x36\x31\x61\x34\x36\x62\x36\x31\x61\x36\x37\x62\x39\x35\x61\x37\x31\x62\x39\x35\x61\x35\x30\x62\x39\x35\x61\x32\x39\x62",
                "\x31\x30\x39\x61\x37\x35\x62\x34\x37\x61\x37\x35\x62\x31\x30\x39\x61\x32\x31\x62\x34\x37\x61\x32\x31\x62\x37\x37\x61\x34\x38\x62\x34\x30\x61\x31\x36\x62\x35\x34\x61\x31\x36\x62\x31\x31\x36\x61\x31\x36\x62\x31\x30\x32\x61\x31\x36\x62\x34\x30\x61\x38\x30\x62\x35\x34\x61\x38\x30\x62\x31\x31\x36\x61\x38\x30\x62\x31\x30\x32\x61\x38\x30\x62\x34\x37\x61\x32\x31\x62\x34\x37\x61\x37\x35\x62\x36\x31\x61\x32\x31\x62\x31\x30\x39\x61\x32\x31\x62\x39\x35\x61\x32\x31\x62\x36\x31\x61\x37\x35\x62\x31\x30\x39\x61\x37\x35\x62\x39\x35\x61\x37\x35\x62\x35\x34\x61\x32\x36\x62\x36\x38\x61\x32\x36\x62\x31\x30\x32\x61\x32\x36\x62\x35\x34\x61\x37\x30\x62\x36\x38\x61\x37\x30\x62\x31\x30\x32\x61\x37\x30\x62\x38\x38\x61\x37\x30\x62\x36\x31\x61\x33\x31\x62\x38\x38\x61\x32\x36\x62\x39\x35\x61\x33\x31\x62\x36\x31\x61\x36\x35\x62\x39\x35\x61\x36\x35\x62\x36\x38\x61\x36\x30\x62\x36\x38\x61\x33\x36\x62\x38\x38\x61\x33\x36\x62\x38\x38\x61\x36\x30\x62\x34\x30\x61\x34\x38\x62\x34\x37\x61\x34\x38\x62\x35\x34\x61\x34\x38\x62\x36\x32\x61\x34\x38\x62\x37\x30\x61\x34\x38\x62\x31\x31\x36\x61\x34\x38\x62\x31\x30\x39\x61\x34\x38\x62\x31\x30\x31\x61\x34\x38\x62\x39\x33\x61\x34\x38\x62\x38\x35\x61\x34\x38\x62\x37\x37\x61\x34\x38\x62",
                "\x36\x32\x61\x38\x30\x62\x39\x34\x61\x31\x36\x62\x37\x38\x61\x34\x39\x62\x34\x30\x61\x31\x36\x62\x31\x31\x36\x61\x31\x36\x62\x34\x30\x61\x38\x30\x62\x31\x31\x36\x61\x38\x30\x62\x34\x38\x61\x31\x36\x62\x31\x31\x36\x61\x32\x31\x62\x31\x30\x38\x61\x38\x30\x62\x34\x30\x61\x37\x35\x62\x35\x36\x61\x31\x36\x62\x31\x31\x36\x61\x32\x36\x62\x31\x30\x30\x61\x38\x30\x62\x34\x30\x61\x37\x30\x62\x36\x34\x61\x31\x36\x62\x31\x31\x36\x61\x33\x31\x62\x39\x32\x61\x38\x30\x62\x34\x30\x61\x36\x35\x62\x37\x32\x61\x31\x36\x62\x31\x31\x36\x61\x33\x36\x62\x38\x34\x61\x38\x30\x62\x34\x30\x61\x36\x30\x62\x37\x32\x61\x33\x37\x62\x38\x34\x61\x35\x39\x62\x35\x34\x61\x36\x30\x62\x31\x30\x32\x61\x33\x36\x62\x38\x34\x61\x37\x30\x62\x31\x30\x39\x61\x33\x36\x62\x34\x37\x61\x36\x30\x62\x34\x30\x61\x33\x37\x62\x35\x36\x61\x33\x37\x62\x31\x30\x30\x61\x35\x39\x62\x37\x38\x61\x34\x39\x62\x34\x38\x61\x33\x37\x62\x31\x31\x36\x61\x35\x39\x62\x31\x30\x38\x61\x35\x39\x62\x38\x37\x61\x31\x36\x62\x36\x39\x61\x38\x30\x62\x36\x39\x61\x37\x32\x62\x38\x37\x61\x32\x36\x62\x37\x32\x61\x32\x38\x62",
                "\x37\x39\x61\x34\x38\x62\x34\x37\x61\x32\x31\x62\x34\x37\x61\x37\x35\x62\x36\x31\x61\x32\x31\x62\x36\x31\x61\x37\x35\x62\x37\x38\x61\x32\x31\x62\x37\x38\x61\x37\x35\x62\x31\x30\x39\x61\x32\x31\x62\x39\x35\x61\x32\x31\x62\x39\x35\x61\x37\x35\x62\x31\x30\x39\x61\x37\x35\x62\x35\x34\x61\x32\x36\x62\x36\x38\x61\x32\x36\x62\x31\x30\x32\x61\x32\x36\x62\x38\x38\x61\x32\x36\x62\x35\x34\x61\x37\x30\x62\x36\x38\x61\x37\x30\x62\x38\x38\x61\x37\x30\x62\x31\x30\x32\x61\x37\x30\x62\x36\x31\x61\x33\x31\x62\x39\x35\x61\x33\x31\x62\x36\x31\x61\x36\x35\x62\x39\x35\x61\x36\x35\x62\x37\x38\x61\x33\x31\x62\x37\x38\x61\x36\x35\x62\x31\x31\x36\x61\x31\x36\x62\x31\x30\x32\x61\x31\x36\x62\x38\x38\x61\x31\x36\x62\x36\x38\x61\x31\x36\x62\x35\x34\x61\x31\x36\x62\x34\x30\x61\x31\x36\x62\x34\x30\x61\x38\x30\x62\x35\x34\x61\x38\x30\x62\x36\x38\x61\x38\x30\x62\x38\x38\x61\x38\x30\x62\x31\x30\x32\x61\x38\x30\x62\x31\x31\x36\x61\x38\x30\x62\x38\x38\x61\x33\x37\x62\x36\x38\x61\x33\x37\x62\x36\x38\x61\x35\x39\x62\x38\x38\x61\x35\x39\x62\x31\x31\x36\x61\x34\x38\x62\x34\x31\x61\x34\x38\x62\x34\x35\x61\x34\x38\x62\x31\x31\x32\x61\x34\x38\x62",
                "\x34\x30\x61\x31\x36\x62\x34\x30\x61\x38\x30\x62\x31\x31\x36\x61\x31\x36\x62\x31\x31\x36\x61\x38\x30\x62\x35\x34\x61\x31\x36\x62\x35\x34\x61\x38\x30\x62\x31\x30\x32\x61\x31\x36\x62\x31\x30\x32\x61\x38\x30\x62\x36\x38\x61\x31\x36\x62\x38\x38\x61\x31\x36\x62\x36\x38\x61\x38\x30\x62\x38\x38\x61\x38\x30\x62\x34\x37\x61\x32\x31\x62\x34\x37\x61\x37\x35\x62\x36\x31\x61\x32\x31\x62\x36\x31\x61\x37\x35\x62\x37\x38\x61\x32\x31\x62\x37\x38\x61\x37\x35\x62\x31\x30\x39\x61\x32\x31\x62\x39\x35\x61\x32\x31\x62\x39\x35\x61\x37\x35\x62\x31\x30\x39\x61\x37\x35\x62\x35\x34\x61\x32\x36\x62\x36\x38\x61\x32\x36\x62\x31\x30\x32\x61\x32\x36\x62\x38\x38\x61\x32\x36\x62\x35\x34\x61\x37\x30\x62\x36\x38\x61\x37\x30\x62\x38\x38\x61\x37\x30\x62\x31\x30\x32\x61\x37\x30\x62\x36\x31\x61\x33\x31\x62\x39\x35\x61\x33\x31\x62\x36\x31\x61\x36\x35\x62\x39\x35\x61\x36\x35\x62\x37\x38\x61\x33\x31\x62\x37\x38\x61\x36\x35\x62\x36\x39\x61\x33\x36\x62\x36\x39\x61\x35\x39\x62\x38\x37\x61\x33\x36\x62\x38\x37\x61\x35\x39\x62\x37\x39\x61\x34\x38\x62"],
        soundSprite: {
            lost: [1474, 244],
            ok: [58, 996],
            STick: [1921, 629],
            back: [3217, 490],
            fa: [2764, 258]
        }
    };
    if (!(window.console && console.log)) {
        console = {
            log: c,
            debug: d,
            info: f,
            warn: g,
            error: h
        }
    };
    GameLib = {
        gameWidth: 800,
        gameHeight: 480,
        containerDiv: null,
        storageJar: {},
        scale: 1,
        scalable: true,
        gameName: "",
        lang: "\x65\x6E",
        isTouch: "\x6F\x6E\x74\x6F\x75\x63\x68\x73\x74\x61\x72\x74" in window || navigator.msMaxTouchPoints,
        isAndroid: /Android/.test(navigator.userAgent),
        isIE: /IEMobile/.test(navigator.userAgent),
        online: true,
        popup: null,
        IEversion: (i()),
        iOSversion: (j()),
        moreGames: k,
        $_GET: l,
        getLang: m,
        setLang: n,
        getHostDomain: o,
        showPopup: p,
        closePopup: q,
        scaleGame: r,
        getStorage: s,
        setStorage: t,
        saveStorage: u,
        init: v
    };;;
    CreateGame = {
        CreatedDiv: w,
        CreatedCanvas: x,
        CreatedImg: y,
        CreatedShowNumber: z,
        CreatedRemDiv: A,
        CreatedRem0Div: B,
        CreateText: C,
        setButton: D,
        CreatedButton: E,
        getAnimation: F,
        getImg: G,
        disorder: H
    };
    TransformUtil = {
        rotate: I,
        scale: J
    };
    loadRec = {
        images: [{
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x30\x31\x2E\x70\x6E\x67",
                id: "\x61\x31"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x30\x32\x2E\x70\x6E\x67",
                id: "\x61\x32"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x30\x33\x2E\x70\x6E\x67",
                id: "\x61\x33"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x30\x34\x2E\x70\x6E\x67",
                id: "\x61\x34"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x30\x35\x2E\x70\x6E\x67",
                id: "\x61\x35"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x30\x36\x2E\x70\x6E\x67",
                id: "\x61\x36"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x30\x37\x2E\x70\x6E\x67",
                id: "\x61\x37"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x30\x38\x2E\x70\x6E\x67",
                id: "\x61\x38"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x30\x39\x2E\x70\x6E\x67",
                id: "\x61\x39"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x31\x30\x2E\x70\x6E\x67",
                id: "\x61\x31\x30"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x31\x31\x2E\x70\x6E\x67",
                id: "\x61\x31\x31"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x31\x32\x2E\x70\x6E\x67",
                id: "\x61\x31\x32"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x31\x33\x2E\x70\x6E\x67",
                id: "\x61\x31\x33"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x31\x34\x2E\x70\x6E\x67",
                id: "\x61\x31\x34"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x31\x35\x2E\x70\x6E\x67",
                id: "\x61\x31\x35"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x31\x36\x2E\x70\x6E\x67",
                id: "\x61\x31\x36"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x31\x37\x2E\x70\x6E\x67",
                id: "\x61\x31\x37"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x31\x38\x2E\x70\x6E\x67",
                id: "\x61\x31\x38"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x31\x39\x2E\x70\x6E\x67",
                id: "\x61\x31\x39"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x32\x30\x2E\x70\x6E\x67",
                id: "\x61\x32\x30"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x32\x31\x2E\x70\x6E\x67",
                id: "\x61\x32\x31"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x32\x32\x2E\x70\x6E\x67",
                id: "\x61\x32\x32"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x32\x33\x2E\x70\x6E\x67",
                id: "\x61\x32\x33"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x32\x34\x2E\x70\x6E\x67",
                id: "\x61\x32\x34"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x32\x35\x2E\x70\x6E\x67",
                id: "\x61\x32\x35"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x32\x36\x2E\x70\x6E\x67",
                id: "\x61\x32\x36"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x32\x37\x2E\x70\x6E\x67",
                id: "\x61\x32\x37"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x32\x38\x2E\x70\x6E\x67",
                id: "\x61\x32\x38"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x32\x39\x2E\x70\x6E\x67",
                id: "\x61\x32\x39"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x33\x30\x2E\x70\x6E\x67",
                id: "\x61\x33\x30"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x33\x31\x2E\x70\x6E\x67",
                id: "\x61\x33\x31"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x33\x32\x2E\x70\x6E\x67",
                id: "\x61\x33\x32"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x33\x33\x2E\x70\x6E\x67",
                id: "\x61\x33\x33"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x33\x34\x2E\x70\x6E\x67",
                id: "\x61\x33\x34"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x33\x35\x2E\x70\x6E\x67",
                id: "\x61\x33\x35"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x33\x36\x2E\x70\x6E\x67",
                id: "\x61\x33\x36"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x33\x37\x2E\x70\x6E\x67",
                id: "\x61\x33\x37"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x33\x38\x2E\x70\x6E\x67",
                id: "\x61\x33\x38"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x33\x39\x2E\x70\x6E\x67",
                id: "\x61\x33\x39"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x34\x30\x2E\x70\x6E\x67",
                id: "\x61\x34\x30"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x34\x31\x2E\x70\x6E\x67",
                id: "\x61\x34\x31"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x34\x32\x2E\x70\x6E\x67",
                id: "\x61\x34\x32"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x34\x33\x2E\x70\x6E\x67",
                id: "\x61\x34\x33"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x34\x34\x2E\x70\x6E\x67",
                id: "\x61\x34\x34"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x34\x35\x2E\x70\x6E\x67",
                id: "\x61\x34\x35"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x34\x36\x2E\x70\x6E\x67",
                id: "\x61\x34\x36"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x34\x37\x2E\x70\x6E\x67",
                id: "\x61\x34\x37"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x34\x38\x2E\x70\x6E\x67",
                id: "\x61\x34\x38"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x34\x39\x2E\x70\x6E\x67",
                id: "\x61\x34\x39"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x35\x30\x2E\x70\x6E\x67",
                id: "\x61\x35\x30"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x35\x31\x2E\x70\x6E\x67",
                id: "\x61\x35\x31"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x35\x32\x2E\x70\x6E\x67",
                id: "\x61\x35\x32"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x35\x33\x2E\x70\x6E\x67",
                id: "\x61\x35\x33"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x35\x34\x2E\x70\x6E\x67",
                id: "\x61\x35\x34"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x61\x30\x30\x35\x35\x2E\x70\x6E\x67",
                id: "\x61\x35\x35"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x68\x6A\x6F\x6E\x67\x2F\x6E\x6F\x2E\x70\x6E\x67",
                id: "\x6E\x6F\x6E\x6F"
            }, {
                src: "\x69\x6D\x67\x2F\x67\x61\x6D\x65\x5F\x62\x61\x63\x6B\x31\x2E\x6A\x70\x67",
                id: "\x67\x61\x6D\x65\x5F\x62\x61\x63\x6B\x31"
            }, {
                src: "\x69\x6D\x67\x2F\x67\x61\x6D\x65\x5F\x62\x61\x63\x6B\x32\x2E\x6A\x70\x67",
                id: "\x67\x61\x6D\x65\x5F\x62\x61\x63\x6B\x32"
            }, {
                src: "\x69\x6D\x67\x2F\x67\x61\x6D\x65\x5F\x62\x61\x63\x6B\x33\x2E\x6A\x70\x67",
                id: "\x67\x61\x6D\x65\x5F\x62\x61\x63\x6B\x33"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x65\x6E\x75\x5F\x62\x61\x63\x6B\x2E\x6A\x70\x67",
                id: "\x62\x61\x63\x6B\x5F\x6D\x65\x6E\x75"
            }, {
                src: "\x69\x6D\x67\x2F\x6F\x76\x65\x72\x5F\x62\x61\x63\x6B\x2E\x6A\x70\x67",
                id: "\x62\x61\x63\x6B\x5F\x6F\x76\x65\x72"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x61\x70\x5F\x62\x61\x63\x6B\x2E\x6A\x70\x67",
                id: "\x6D\x61\x70\x5F\x62\x61\x63\x6B"
            }, {
                src: "\x69\x6D\x67\x2F\x68\x65\x6C\x70\x5F\x62\x61\x63\x6B\x2E\x6A\x70\x67",
                id: "\x62\x61\x63\x6B\x5F\x68\x65\x6C\x70"
            }, {
                src: "\x69\x6D\x67\x2F\x62\x61\x63\x6B\x2E\x70\x6E\x67",
                id: "\x65\x6E\x64\x5F\x62\x61\x63\x6B"
            }, {
                src: "\x69\x6D\x67\x2F\x62\x61\x63\x6B\x2E\x70\x6E\x67",
                id: "\x66\x61\x63\x65\x5F\x6C\x65\x76\x65\x6C"
            }, {
                src: "\x69\x6D\x67\x2F\x62\x61\x63\x6B\x2E\x70\x6E\x67",
                id: "\x66\x61\x63\x65\x5F\x70\x61\x75\x73\x65"
            }, {
                src: "\x69\x6D\x67\x2F\x73\x61\x76\x65\x5F\x62\x61\x63\x6B\x2E\x70\x6E\x67",
                id: "\x73\x61\x76\x65\x62\x61\x63\x6B"
            }, {
                src: "\x69\x6D\x67\x2F\x70\x31\x2E\x70\x6E\x67",
                id: "\x70\x31"
            }, {
                src: "\x69\x6D\x67\x2F\x70\x32\x2E\x70\x6E\x67",
                id: "\x70\x32"
            }, {
                src: "\x69\x6D\x67\x2F\x62\x74\x31\x2E\x70\x6E\x67",
                id: "\x62\x74\x31"
            }, {
                src: "\x69\x6D\x67\x2F\x62\x74\x32\x2E\x70\x6E\x67",
                id: "\x62\x74\x32"
            }, {
                src: "\x69\x6D\x67\x2F\x62\x74\x33\x2E\x70\x6E\x67",
                id: "\x62\x74\x33"
            }, {
                src: "\x69\x6D\x67\x2F\x62\x74\x34\x2E\x70\x6E\x67",
                id: "\x62\x74\x34"
            }, {
                src: "\x69\x6D\x67\x2F\x62\x74\x35\x2E\x70\x6E\x67",
                id: "\x62\x74\x35"
            }, {
                src: "\x69\x6D\x67\x2F\x62\x74\x36\x2E\x70\x6E\x67",
                id: "\x62\x74\x36"
            }, {
                src: "\x69\x6D\x67\x2F\x62\x74\x37\x2E\x70\x6E\x67",
                id: "\x62\x74\x37"
            }, {
                src: "\x69\x6D\x67\x2F\x63\x6C\x6F\x73\x65\x2E\x70\x6E\x67",
                id: "\x63\x6C\x6F\x73\x65"
            }, {
                src: "\x69\x6D\x67\x2F\x68\x65\x6C\x70\x2E\x70\x6E\x67",
                id: "\x68\x65\x6C\x70"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x65\x6E\x75\x5F\x72\x65\x6D\x31\x2E\x70\x6E\x67",
                id: "\x6D\x65\x6E\x75\x5F\x72\x65\x6D\x31"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x65\x6E\x75\x5F\x72\x65\x6D\x32\x2E\x70\x6E\x67",
                id: "\x6D\x65\x6E\x75\x5F\x72\x65\x6D\x32"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x65\x6E\x75\x5F\x72\x65\x6D\x33\x2E\x70\x6E\x67",
                id: "\x6D\x65\x6E\x75\x5F\x72\x65\x6D\x33"
            }, {
                src: "\x69\x6D\x67\x2F\x64\x65\x42\x75\x67\x2E\x70\x6E\x67",
                id: "\x64\x65\x42\x75\x67"
            }, {
                src: "\x69\x6D\x67\x2F\x66\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x2D\x6F\x66\x66\x2E\x70\x6E\x67",
                id: "\x66\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x5F\x6F\x66\x66"
            }, {
                src: "\x69\x6D\x67\x2F\x66\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x2D\x6F\x6E\x2E\x70\x6E\x67",
                id: "\x66\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x5F\x6F\x6E"
            }, {
                src: "\x69\x6D\x67\x2F\x62\x75\x74\x74\x6F\x6E\x2E\x70\x6E\x67",
                id: "\x62\x75\x74\x74\x6F\x6E"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x75\x73\x69\x63\x31\x2E\x70\x6E\x67",
                id: "\x6D\x75\x73\x69\x63\x32"
            }, {
                src: "\x69\x6D\x67\x2F\x6D\x75\x73\x69\x63\x32\x2E\x70\x6E\x67",
                id: "\x6D\x75\x73\x69\x63\x31"
            }, {
                src: "\x69\x6D\x67\x2F\x73\x6F\x75\x6E\x64\x31\x2E\x70\x6E\x67",
                id: "\x73\x6F\x75\x6E\x64\x32"
            }, {
                src: "\x69\x6D\x67\x2F\x73\x6F\x75\x6E\x64\x32\x2E\x70\x6E\x67",
                id: "\x73\x6F\x75\x6E\x64\x31"
            }],
        fonts: ["\x41\x6C\x61\x64\x69\x6E"],
        loadPerc: null,
        resource: {},
        data: [],
        creatloading: K,
        preload: L,
        remAll: M
    };
    gameMap = {
        showMap: N,
        score: 0,
        level: 0,
        level_: -100,
        moveDiv: O,
        xxxx: 0,
        divX: 0,
        downX: 0,
        isDown: false,
        upDiv: P,
        dragDivEvent: Q,
        isLLRR: 0,
        div_all: null,
        timeArr: null,
        timeID: 0,
        page: 0,
        arrSelect: [],
        txtSelect: null,
        txtPage: null,
        divSelect: null,
        mapSelect: 0,
        mapSelectAll: 0,
        willGo: 1,
        divShow: null,
        onFrame: R,
        closePage: S,
        arrPage: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                null, null, null],
        showOnePage: T,
        showPage: U,
        showPageOk: V,
        getSelectDiv: W,
        data: [],
        remAll: X
    };
    GameMenu = {
        aaaa: 0,
        startGame: Y,
        timeID: null,
        bt_1: null,
        bt_2: null,
        bt_3: null,
        bt_4: null,
        saveDiv: null,
        remCanvas: [],
        onFrame: Z,
        showMenu: ba,
        sheZhiDiv: null,
        showSheZhi: bb,
        data: [],
        remAll: bc
    };;;
    GameHelp = {
        showHelp: bd,
        data: [],
        remAll: be
    };
    GamePlay = {
        data: [],
        remAll: bf,
        score: 0,
        arrScore: [],
        level: 0,
        maxLevel: 0,
        txtScore: null,
        txtTime: null,
        txtMoves: null,
        txtTiles: null,
        time: 0,
        divTime: null,
        showTime: bg,
        addScore: bh,
        pause: null,
        createPause: bi,
        timeOutDiv: null,
        createTimeOutDiv: bj,
        levelDiv: null,
        createLevelDiv: bk,
        levelUp: bl,
        timeID: null,
        div_all: null,
        div_see: null,
        div888: null,
        txtUnDo: null,
        fullscreen_on: null,
        fullscreen_off: null,
        fullscreenChange: bm,
        pauseGame: bn,
        showPlay: bo,
        getPuKe: bp,
        playArr: [],
        dataArr: [],
        flyArr: [],
        addGame: bq,
        isMove: br,
        showClick: bs,
        isHint: bt,
        txtNext: null,
        showNext: bu,
        goNext: bv,
        clickDivEvent: bw,
        onFrame: bx
    };
    GameOver = {
        showOver: by,
        data: [],
        remAll: bz
    };;;
    languageUI = {
        uiDiv: null,
        buDiv: null,
        canGuoQi: null,
        canWenZi: null,
        showLanguage: [1, 2, 0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        arr: [["\x43\x4E", "\x7A\x68\x2D\x63\x6E", 3, "\x7A\x68", 5], ["\x55\x53", "\x65\x6E\x5F\x75\x73", 12,
                    "\x65\x6E", 1], ["\x4E\x4C", "\x6E\x6C", 2, "\x6E\x6C", 4], ["\x45\x4E", "\x65\x6E\x5F\x75\x73", 11,
                    "\x65\x6E", 2], ["\x45\x53", "\x65\x73\x5F\x73\x70\x61\x69\x6E", 5, "\x65\x73", 6], ["\x50\x54",
                    "\x70\x74\x5F\x70\x6F\x72\x74\x75\x67\x61\x6C", 9, "\x70\x74", 9], ["\x42\x52",
                    "\x62\x72\x5F\x70\x6F\x72\x74\x75\x67\x61\x6C", 1, "\x70\x74", 10], ["\x46\x52",
                    "\x66\x72\x5F\x66\x72\x61\x6E\x63\x65", 6, "\x66\x72", 11], ["\x49\x54",
                    "\x69\x74\x5F\x69\x74\x61\x6C\x79", 8, "\x69\x74", 12], ["\x44\x45",
                    "\x64\x65\x5F\x67\x65\x72\x6D\x61\x6E\x79", 4, "\x64\x65", 13], ["\x52\x55",
                    "\x72\x75\x5F\x72\x75\x73\x73\x69\x61\x6E", 10, "\x72\x75", 14], ["\x4D\x58",
                    "\x65\x73\x5F\x73\x70\x61\x69\x6E", 13, "\x65\x73", 7], ["\x41\x52\x47",
                    "\x65\x73\x5F\x73\x70\x61\x69\x6E", 14, "\x65\x73", 8], ["\x49\x4E",
                    "\x69\x6E\x5F\x69\x6E\x64\x69\x61", 7, "\x69\x6E", 3], ["\x50\x4F\x4C",
                    "\x70\x6F\x6C\x5F\x70\x6F\x6C\x69\x73\x68", 15, "\x70\x6C", 15], ["\x54\x55\x52",
                    "\x74\x75\x72\x5F\x74\x75\x72\x6B\x69\x73\x68", 16, "\x74\x72", 16]],
        remData: [],
        rulArr: {
            "\x65\x6E\x5F\x75\x73": "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x6D\x61\x68\x6A\x6F\x6E\x67\x67\x61\x6D\x65\x73\x2E\x63\x6F\x6D\x2F",
            "\x65\x6E\x5F\x65\x6E": "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x6D\x61\x68\x6A\x6F\x6E\x67\x67\x61\x6D\x65\x73\x2E\x63\x6F\x6D\x2F",
            "\x69\x6E\x5F\x69\x6E\x64\x69\x61": "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x6D\x61\x68\x6A\x6F\x6E\x67\x67\x61\x6D\x65\x73\x2E\x63\x6F\x6D\x2F",
            "\x6E\x6C": "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x6D\x61\x68\x6A\x6F\x6E\x67\x73\x70\x65\x6C\x65\x6E\x2E\x6E\x6C\x2F",
            "\x7A\x68\x2D\x63\x6E": "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x6D\x61\x68\x6A\x6F\x6E\x67\x67\x61\x6D\x65\x73\x2E\x63\x6F\x6D\x2F",
            "\x65\x73\x5F\x73\x70\x61\x69\x6E": "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x6A\x75\x65\x67\x6F\x73\x6D\x61\x68\x6A\x6F\x6E\x67\x2E\x63\x6F\x6D\x2F",
            "\x6D\x78\x5F\x6D\x65\x78\x69\x63\x6F": "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x6A\x75\x65\x67\x6F\x73\x6D\x61\x68\x6A\x6F\x6E\x67\x2E\x63\x6F\x6D\x2F",
            "\x61\x72\x67\x5F\x61\x72\x67\x65\x6E\x74\x69\x6E\x61": "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x6A\x75\x65\x67\x6F\x73\x6D\x61\x68\x6A\x6F\x6E\x67\x2E\x63\x6F\x6D",
            "\x70\x74\x5F\x70\x6F\x72\x74\x75\x67\x61\x6C": "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x6D\x61\x68\x6A\x6F\x6E\x67\x67\x61\x6D\x65\x73\x2E\x63\x6F\x6D",
            "\x62\x72\x5F\x70\x6F\x72\x74\x75\x67\x61\x6C": "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x6D\x61\x68\x6A\x6F\x6E\x67\x67\x61\x6D\x65\x73\x2E\x63\x6F\x6D\x2F",
            "\x66\x72\x5F\x66\x72\x61\x6E\x63\x65": "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x6D\x61\x68\x6A\x6F\x6E\x67\x6A\x65\x75\x78\x2E\x63\x6F\x6D\x2F",
            "\x69\x74\x5F\x69\x74\x61\x6C\x79": "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x6D\x61\x68\x6A\x6F\x6E\x67\x67\x61\x6D\x65\x73\x2E\x63\x6F\x6D",
            "\x64\x65\x5F\x67\x65\x72\x6D\x61\x6E\x79": "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x6D\x61\x68\x6A\x6F\x6E\x67\x73\x70\x69\x65\x6C\x65\x6E\x2E\x64\x65\x2F",
            "\x72\x75\x5F\x72\x75\x73\x73\x69\x61\x6E": "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x6D\x61\x68\x6A\x6F\x6E\x67\x67\x61\x6D\x65\x73\x2E\x63\x6F\x6D",
            "\x70\x6F\x6C\x5F\x70\x6F\x6C\x69\x73\x68": "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x6D\x61\x68\x6A\x6F\x6E\x67\x67\x61\x6D\x65\x73\x2E\x63\x6F\x6D",
            "\x74\x75\x72\x5F\x74\x75\x72\x6B\x69\x73\x68": "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x6D\x61\x68\x6A\x6F\x6E\x67\x67\x61\x6D\x65\x73\x2E\x63\x6F\x6D"
        },
        rul: "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6C\x69\x74\x61\x69\x72\x65\x6F\x6E\x6C\x69\x6E\x65\x2E\x63\x6F\x6D",
        getStyle: bA,
        init: bB,
        closeUI: bC,
        getButton: bD,
        getText: bE,
        scaleTexts: bF,
        setXuanZhe: bG,
        language: "\x7A\x68\x2D\x63\x6E",
        languageInt: 0
    };;;
    (bH)(window);;;
    (bI)();;;
    (bJ)(window, document);;;
    (bK)();;;
    (bL)(window, document);
    document.addEventListener("\x67\x61\x6D\x65\x72\x65\x61\x64\x79", bM, false);;;
    languageData = {
        d_ContinuePreviousGame: [
                "\x43\x6F\x6E\x74\x69\x6E\x75\x65\x20\x50\x72\x65\x76\x69\x6F\x75\x73\x20\x47\x61\x6D\x65",
                "\x43\x6F\x6E\x74\x69\x6E\x75\x65\x20\x50\x72\x65\x76\x69\x6F\x75\x73\x20\x47\x61\x6D\x65",
                "\x50\x69\x63\x68\x68\x61\x6C\x61\x20\x67\x61\x6D\x65\x20\x6A\x61\x72\x69",
                "\x47\x61\x20\x44\x6F\x6F\x72\x20\x4D\x65\x74\x20\x56\x6F\x72\x69\x67\x20\x53\x70\x65\x6C",
                "\u7EE7\u7EED\u73A9",
                "\x43\x6F\x6E\x74\x69\x6E\x75\x61\x72\x20\x6A\x75\x65\x67\x6F\x20\x61\x6E\x74\x65\x72\x69\x6F\x72",
                "\x43\x6F\x6E\x74\x69\x6E\x75\x61\x72\x20\x6A\x75\x65\x67\x6F\x20\x61\x6E\x74\x65\x72\x69\x6F\x72",
                "\x43\x6F\x6E\x74\x69\x6E\x75\x61\x72\x20\x6A\x75\x65\x67\x6F\x20\x61\x6E\x74\x65\x72\x69\x6F\x72",
                "\x43\x6F\x6E\x74\x69\x6E\x75\x61\x72\x20\x6F\x20\x6A\x6F\x67\x6F\x20\x61\x6E\x74\x65\x72\x69\x6F\x72",
                "\x43\x6F\x6E\x74\x69\x6E\x75\x61\x72\x20\x6F\x20\x6A\x6F\x67\x6F\x20\x61\x6E\x74\x65\x72\x69\x6F\x72",
                "\x43\x6F\x6E\x74\x69\x6E\x75\x65\x72\x20\x6C\x61\x20\x70\x61\x72\x74\x69\x65",
                "\x43\x6F\x6E\x74\x69\x6E\x75\x61\x20\x6C\x61\x20\x70\x61\x72\x74\x69\x74\x61\x20\x70\x72\x65\x63\x65\x64\x65\x6E\x74\x65",
                "\x56\x6F\x72\x68\x65\x72\x69\x67\x65\x73\x20\x53\x70\x69\x65\x6C\x20\x66\x6F\x72\x74\x73\x65\x74\x7A\x65\x6E",
                "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C\x20\u0438\u0433\u0440\u0443",
                "\x4B\x6F\x6E\x74\x79\x6E\x75\x75\x6A\x20\x70\x6F\x70\x72\x7A\x65\x64\x6E\x69\u0105\x20\x67\x72\u0119",
                "\xD6\x6E\x63\x65\x6B\x69\x20\x6F\x79\x75\x6E\x61\x20\x64\x65\x76\x61\x6D"],
        d_ResetClick: [
                "\x43\x6C\x69\x63\x6B\x20\x6F\x6E\x20\x74\x68\x65\x20\x72\x65\x73\x65\x74\x20\x62\x75\x74\x74\x6F\x6E\x20\x74\x6F\x20\x63\x6F\x6D\x70\x6C\x65\x74\x65\x6C\x79\x20\x72\x65\x73\x65\x74\x20\x79\x6F\x75\x72\x20\x70\x72\x6F\x67\x72\x65\x73\x73\x20\x69\x6E\x20\x74\x68\x65\x20\x67\x61\x6D\x65\x2E",
                "\x43\x6C\x69\x63\x6B\x20\x6F\x6E\x20\x74\x68\x65\x20\x72\x65\x73\x65\x74\x20\x62\x75\x74\x74\x6F\x6E\x20\x74\x6F\x20\x63\x6F\x6D\x70\x6C\x65\x74\x65\x6C\x79\x20\x72\x65\x73\x65\x74\x20\x79\x6F\x75\x72\x20\x70\x72\x6F\x67\x72\x65\x73\x73\x20\x69\x6E\x20\x74\x68\x65\x20\x67\x61\x6D\x65\x2E",
                "\x50\x75\x72\x69\x20\x74\x61\x72\x61\x68\x20\x73\x65\x20\x69\x73\x20\x6B\x68\x65\x6C\x20\x6D\x65\x20\x61\x70\x6E\x69\x20\x70\x72\x61\x67\x61\x74\x69\x20\x6B\x6F\x20\x70\x75\x6E\x72\x74\x68\x61\x70\x69\x74\x20\x6B\x61\x72\x6E\x65\x20\x6B\x65\x20\x6C\x69\x79\x65\x20\x72\x65\x73\x65\x74\x20\x62\x61\x74\x61\x6E\x20\x70\x65\x72\x20\x63\x6C\x69\x63\x6B\x20\x6B\x61\x72\x65\x2E",
                "\x4B\x6C\x69\x6B\x20\x6F\x70\x20\x64\x65\x20\x72\x65\x73\x65\x74\x2D\x6B\x6E\x6F\x70\x20\x6F\x6D\x20\x69\x6E\x20\x64\x69\x74\x20\x73\x70\x65\x6C\x20\x68\x65\x6C\x65\x6D\x61\x61\x6C\x20\x6F\x70\x6E\x69\x65\x75\x77\x20\x74\x65\x20\x62\x65\x67\x69\x6E\x6E\x65\x6E\x2E",
                "\u70B9\u51FB\u91CD\u7F6E\u6309\u94AE\u53EF\u5B8C\u5168\u91CD\u7F6E\u6E38\u620F\u8FDB\u5EA6\u3002",
                "\x48\x61\x7A\x20\x63\x6C\x69\x63\x20\x65\x6E\x20\x65\x6C\x20\x62\x6F\x74\xF3\x6E\x20\x52\x65\x69\x6E\x69\x63\x69\x61\x72\x20\x70\x61\x72\x61\x20\x72\x65\x69\x6E\x69\x63\x69\x61\x72\x20\x6C\x61\x20\x70\x61\x72\x74\x69\x64\x61\x2E",
                "\x48\x61\x7A\x20\x63\x6C\x69\x63\x20\x65\x6E\x20\x65\x6C\x20\x62\x6F\x74\xF3\x6E\x20\x52\x65\x69\x6E\x69\x63\x69\x61\x72\x20\x70\x61\x72\x61\x20\x72\x65\x69\x6E\x69\x63\x69\x61\x72\x20\x6C\x61\x20\x70\x61\x72\x74\x69\x64\x61\x2E",
                "\x48\x61\x7A\x20\x63\x6C\x69\x63\x20\x65\x6E\x20\x65\x6C\x20\x62\x6F\x74\xF3\x6E\x20\x52\x65\x69\x6E\x69\x63\x69\x61\x72\x20\x70\x61\x72\x61\x20\x72\x65\x69\x6E\x69\x63\x69\x61\x72\x20\x6C\x61\x20\x70\x61\x72\x74\x69\x64\x61\x2E",
                "\x43\x6C\x69\x63\x61\x20\x6E\x6F\x20\x62\x6F\x74\xE3\x6F\x20\x72\x65\x69\x6E\x69\x63\x69\x61\x72\x20\x70\x61\x72\x61\x20\x72\x65\x69\x6E\x69\x63\x69\x61\x72\x20\x70\x6F\x72\x20\x63\x6F\x6D\x70\x6C\x65\x74\x6F\x20\x6F\x20\x74\x65\x75\x20\x70\x72\x6F\x67\x72\x65\x73\x73\x6F\x20\x6E\x6F\x20\x6A\x6F\x67\x6F\x2E",
                "\x43\x6C\x69\x71\x75\x65\x20\x6E\x6F\x20\x62\x6F\x74\xE3\x6F\x20\x72\x65\x69\x6E\x69\x63\x69\x61\x72\x20\x70\x61\x72\x61\x20\x72\x65\x63\x6F\x6D\x65\xE7\x61\x72\x20\x64\x6F\x20\x7A\x65\x72\x6F\x20\x73\x65\x75\x20\x70\x72\x6F\x67\x72\x65\x73\x73\x6F\x20\x6E\x6F\x20\x6A\x6F\x67\x6F\x2E",
                "\x43\x6C\x69\x71\x75\x65\x7A\x20\x73\x75\x72\x20\x6C\x65\x20\x62\x6F\x75\x74\x6F\x6E\x20\x64\x65\x20\x72\xE9\x69\x6E\x69\x74\x69\x61\x6C\x69\x73\x61\x74\x69\x6F\x6E\x20\x70\x6F\x75\x72\x20\x72\xE9\x69\x6E\x69\x74\x69\x61\x6C\x69\x73\x65\x72\x20\x76\x6F\x74\x72\x65\x20\x70\x72\x6F\x67\x72\x65\x73\x73\x69\x6F\x6E\x20\x64\x61\x6E\x73\x20\x6C\x65\x20\x6A\x65\x75\x2E",
                "\x46\x61\x69\x20\x63\x6C\x69\x63\x20\x73\x75\x6C\x20\x70\x75\x6C\x73\x61\x6E\x74\x65\x20\x64\x69\x20\x72\x65\x73\x65\x74\x20\x70\x65\x72\x20\x61\x7A\x7A\x65\x72\x61\x72\x65\x20\x63\x6F\x6D\x70\x6C\x65\x74\x61\x6D\x65\x6E\x74\x65\x20\x69\x6C\x20\x74\x75\x6F\x20\x6C\x69\x76\x65\x6C\x6C\x6F\x20\x64\x69\x20\x70\x72\x6F\x67\x72\x65\x73\x73\x69\x6F\x6E\x65\x20\x6E\x65\x6C\x20\x67\x69\x6F\x63\x6F\x2E",
                "\x4B\x6C\x69\x63\x6B\x65\x20\x61\x75\x66\x20\x64\x69\x65\x20\x52\x65\x73\x65\x74\x2D\x54\x61\x73\x74\x65\x2C\x20\x75\x6D\x20\x64\x69\x65\x73\x65\x73\x20\x53\x70\x69\x65\x6C\x20\x77\x69\x65\x64\x65\x72\x20\x67\x61\x6E\x7A\x20\x76\x6F\x6E\x20\x76\x6F\x72\x6E\x65\x20\x7A\x75\x20\x62\x65\x67\x69\x6E\x6E\x65\x6E\x2E",
                "\u0429\u0435\u043B\u043A\u043D\u0438\x20\u043F\u043E\x20\u043A\u043D\u043E\u043F\u043A\u0435\x20\u0441\u0431\u0440\u043E\u0441\u0430\x2C\x20\u0447\u0442\u043E\u0431\u044B\x20\u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E\x20\u0441\u0431\u0440\u043E\u0441\u0438\u0442\u044C\x20\u043D\u0430\u0431\u0440\u0430\u043D\u043D\u043E\u0435\x20\u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E\x20\u043E\u0447\u043A\u043E\u0432\x2E",
                "\x4B\x6C\x69\x6B\x6E\x69\x6A\x20\x70\x72\x7A\x79\x63\x69\x73\x6B\x20\x52\x65\x73\x65\x74\x75\x6A\x2C\x20\x61\x62\x79\x20\x73\x6B\x61\x73\x6F\x77\x61\u0107\x20\x63\x61\u0142\x6B\x6F\x77\x69\x74\x79\x20\x70\x6F\x73\x74\u0119\x70\x20\x77\x20\x67\x72\x7A\x65\x2E",
                "\x4F\x79\x75\x6E\x64\x61\x6B\x69\x20\x69\x6C\x65\x72\x6C\x65\x79\x69\u015F\x69\x6E\x69\x20\x74\x61\x6D\x61\x6D\x65\x6E\x20\x73\u0131\x66\u0131\x72\x6C\x61\x6D\x61\x6B\x20\x69\xE7\x69\x6E\x20\x73\u0131\x66\u0131\x72\x6C\x61\x6D\x61\x20\x64\xFC\u011F\x6D\x65\x73\x69\x6E\x65\x20\x74\u0131\x6B\x6C\x61\x2E"],
        d_Reset: ["\x52\x65\x73\x65\x74", "\x52\x65\x73\x65\x74", "\x52\x65\x73\x65\x74\x20\x6B\x61\x72\x65",
                "\x52\x65\x73\x65\x74", "\u91CD\u7F6E", "\x52\x65\x73\x65\x74\x65\x61\x72",
                "\x52\x65\x73\x65\x74\x65\x61\x72", "\x52\x65\x73\x65\x74\x65\x61\x72",
                "\x52\x65\x69\x6E\x69\x63\x69\x61\x72", "\x52\x65\x69\x6E\x69\x63\x69\x61\x72",
                "\x52\xE9\x69\x6E\x69\x74\x69\x61\x6C\x69\x73\x65\x72", "\x52\x69\x70\x72\x69\x73\x74\x69\x6E\x61",
                "\x5A\x75\x72\xFC\x63\x6B\x73\x65\x74\x7A\x65\x6E", "\u0421\u0431\u0440\u043E\u0441",
                "\x52\x65\x73\x65\x74\x75\x6A", "\x53\u0131\x66\u0131\x72\x6C\x61"],
        d_Matches: ["\x4D\x61\x74\x63\x68\x65\x73\x3A", "\x4D\x61\x74\x63\x68\x65\x73\x3A",
                "\x4D\x61\x74\x63\x68\x65\x73\x3A", "\x4D\x61\x74\x63\x68\x65\x73\x3A",
                "\x4D\x61\x74\x63\x68\x65\x73\x3A", "\x4D\x61\x74\x63\x68\x65\x73\x3A",
                "\x4D\x61\x74\x63\x68\x65\x73\x3A", "\x4D\x61\x74\x63\x68\x65\x73\x3A",
                "\x4D\x61\x74\x63\x68\x65\x73\x3A", "\x4D\x61\x74\x63\x68\x65\x73\x3A",
                "\x4D\x61\x74\x63\x68\x65\x73\x3A", "\x4D\x61\x74\x63\x68\x65\x73\x3A",
                "\x4D\x61\x74\x63\x68\x65\x73\x3A", "\x4D\x61\x74\x63\x68\x65\x73\x3A",
                "\x4D\x61\x74\x63\x68\x65\x73\x3A", "\x4D\x61\x74\x63\x68\x65\x73\x3A"],
        d_Start: ["\x53\x74\x61\x72\x74", "\x53\x74\x61\x72\x74", "\x50\x72\x61\x72\x61\x6D\x62\x68",
                "\x53\x74\x61\x72\x74", "\u5F00\u59CB", "\x53\x74\x61\x72\x74", "\x53\x74\x61\x72\x74",
                "\x53\x74\x61\x72\x74", "\x53\x74\x61\x72\x74", "\x53\x74\x61\x72\x74", "\x53\x74\x61\x72\x74",
                "\x53\x74\x61\x72\x74", "\x53\x74\x61\x72\x74", "\x53\x74\x61\x72\x74", "\x53\x74\x61\x72\x74",
                "\x53\x74\x61\x72\x74"],
        d_StartNewGame: ["\x53\x74\x61\x72\x74\x20\x4E\x65\x77\x20\x47\x61\x6D\x65",
                "\x53\x74\x61\x72\x74\x20\x4E\x65\x77\x20\x47\x61\x6D\x65",
                "\x4E\x61\x79\x61\x20\x67\x61\x6D\x65\x20\x53\x68\x75\x72\x75",
                "\x53\x74\x61\x72\x74\x20\x4E\x69\x65\x75\x77\x20\x53\x70\x65\x6C", "\u91CD\u65B0\u5F00\u59CB",
                "\x49\x6E\x69\x63\x69\x61\x20\x6E\x75\x65\x76\x6F\x20\x6A\x75\x65\x67\x6F",
                "\x49\x6E\x69\x63\x69\x61\x20\x6E\x75\x65\x76\x6F\x20\x6A\x75\x65\x67\x6F",
                "\x49\x6E\x69\x63\x69\x61\x20\x6E\x75\x65\x76\x6F\x20\x6A\x75\x65\x67\x6F",
                "\x4E\x6F\x76\x6F\x20\x4A\x6F\x67\x6F", "\x4E\x6F\x76\x6F\x20\x4A\x6F\x67\x6F",
                "\x43\x6F\x6D\x6D\x65\x6E\x63\x65\x72\x20\x75\x6E\x65\x20\x6E\x6F\x75\x76\x65\x6C\x6C\x65",
                "\x49\x6E\x69\x7A\x69\x61\x20\x75\x6E\x61\x20\x6E\x75\x6F\x76\x61\x20\x70\x61\x72\x74\x69\x74\x61",
                "\x4E\x65\x75\x65\x73\x20\x53\x70\x69\x65\x6C\x20\x73\x74\x61\x72\x74\x65\x6E",
                "\u041D\u043E\u0432\u0430\u044F\x20\u0438\u0433\u0440\u0430",
                "\x52\x6F\x7A\x70\x6F\x63\x7A\x6E\x69\x6A\x20\x6E\x6F\x77\u0105\x20\x67\x72\u0119",
                "\x59\x65\x6E\x69\x20\x6F\x79\x75\x6E\x61\x20\x62\x61\u015F\x6C\x61"],
        d_Play: ["\x50\x6C\x61\x79", "\x50\x6C\x61\x79", "\x50\x6C\x61\x79", "\x53\x70\x65\x6C\x65\x6E",
                "\u5F00\u59CB\u6E38\u620F", "\x4A\x75\x67\x61\x72", "\x4A\x75\x67\x61\x72", "\x4A\x75\x67\x61\x72",
                "\x4A\x6F\x67\x61\x72", "\x4A\x6F\x67\x61\x72", "\x4A\x6F\x75\x65\x72", "\x47\x69\x6F\x63\x61",
                "\x53\x70\x69\x65\x6C\x65\x6E", "\u0418\u0433\u0440\u0430\u0442\u044C", "\x47\x72\x61\x6A",
                "\x4F\x79\x6E\x61"],
        d_Help: ["\x48\x65\x6C\x70", "\x48\x65\x6C\x70", "\x53\x61\x68\x61\x79\x61\x74\x61", "\x48\x65\x6C\x70",
                "\u5E2E\u52A9", "\x41\x79\x75\x64\x61", "\x41\x79\x75\x64\x61", "\x41\x79\x75\x64\x61",
                "\x41\x6A\x75\x64\x61", "\x41\x6A\x75\x64\x61", "\x41\x69\x64\x65", "\x47\x75\x69\x64\x61",
                "\x48\x69\x6C\x66\x65", "\u0421\u043F\u0440\u0430\u0432\u043A\u0430", "\x50\x6F\x6D\x6F\x63",
                "\x59\x61\x72\x64\u0131\x6D"],
        d_HighScore: ["\x48\x69\x67\x68\x20\x53\x63\x6F\x72\x65\x73", "\x48\x69\x67\x68\x20\x53\x63\x6F\x72\x65\x73",
                "\x55\x63\x68\x61\x20\x73\x63\x6F\x72\x65", "\x48\x69\x67\x68\x73\x63\x6F\x72\x65", "\u9AD8\u5206",
                "\x50\x75\x6E\x74\x75\x61\x63\x69\xF3\x6E\x20\x61\x6C\x74\x61",
                "\x50\x75\x6E\x74\x75\x61\x63\x69\xF3\x6E\x20\x61\x6C\x74\x61",
                "\x50\x75\x6E\x74\x75\x61\x63\x69\xF3\x6E\x20\x61\x6C\x74\x61",
                "\x50\x6F\x6E\x74\x75\x61\xE7\xE3\x6F\x20\x4D\xE1\x78\x2E",
                "\x50\x6F\x6E\x74\x75\x61\xE7\xE3\x6F\x20\x4D\xE1\x78\x2E", "\x48\x61\x75\x74\x20\x73\x63\x6F\x72\x65",
                "\x50\x75\x6E\x74\x65\x67\x67\x69\x6F", "\x42\x65\x73\x74\x65\x6E\x6C\x69\x73\x74\x65",
                "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B",
                "\x4E\x61\x6A\x77\x79\u017C\x73\x7A\x65\x20\x77\x79\x6E\x69\x6B\x69",
                "\x45\x6E\x20\x79\xFC\x6B\x73\x65\x6B\x20\x70\x75\x61\x6E"],
        d_More: ["\x4D\x6F\x72\x65\x20\x47\x61\x6D\x65\x73", "\x4D\x6F\x72\x65\x20\x47\x61\x6D\x65\x73",
                "\x41\x6E\x79\x61\x20\x67\x61\x6D\x65\x73", "\x4D\x65\x65\x72\x20\x73\x70\x65\x6C\x6C\x65\x6E",
                "\u66F4\u591A\u6E38\u620F", "\x4D\xE1\x73\x20\x6A\x75\x65\x67\x6F\x73",
                "\x4D\xE1\x73\x20\x6A\x75\x65\x67\x6F\x73", "\x4D\xE1\x73\x20\x6A\x75\x65\x67\x6F\x73",
                "\x4D\x61\x69\x73\x20\x4A\x6F\x67\x6F\x73", "\x4D\x61\x69\x73\x20\x4A\x6F\x67\x6F\x73",
                "\x50\x6C\x75\x73\x20\x64\x65\x20\x6A\x65\x75\x78", "\x41\x6C\x74\x72\x69\x20\x67\x69\x6F\x63\x68\x69",
                "\x4D\x65\x68\x72\x20\x53\x70\x69\x65\x6C\x65", "\u0415\u0449\u0435\x20\u0438\u0433\u0440\u044B",
                "\x57\x69\u0119\x63\x65\x6A\x20\x67\x69\x65\x72",
                "\x44\x61\x68\x61\x20\x46\x61\x7A\x6C\x61\x20\x4F\x79\x75\x6E"],
        d_Howtoplay: ["\x48\x6F\x77\x20\x54\x6F\x20\x50\x6C\x61\x79", "\x48\x6F\x77\x20\x54\x6F\x20\x50\x6C\x61\x79",
                "\x50\x6C\x61\x79\x20\x6B\x61\x69\x73\x65\x20\x6B\x61\x72\x65",
                "\x49\x6E\x73\x74\x72\x75\x63\x74\x69\x65\x73", "\u6E38\u620F\u8BF4\u660E",
                "\x43\xF3\x6D\x6F\x20\x6A\x75\x67\x61\x72", "\x43\xF3\x6D\x6F\x20\x6A\x75\x67\x61\x72",
                "\x43\xF3\x6D\x6F\x20\x6A\x75\x67\x61\x72", "\x43\x6F\x6D\x6F\x20\x6A\x6F\x67\x61\x72",
                "\x43\x6F\x6D\x6F\x20\x6A\x6F\x67\x61\x72", "\x43\x6F\x6D\x6D\x65\x6E\x74\x20\x6A\x6F\x75\x65\x72",
                "\x52\x65\x67\x6F\x6C\x65\x20\x64\x65\x6C\x20\x67\x69\x6F\x63\x6F",
                "\x41\x6E\x6C\x65\x69\x74\x75\x6E\x67", "\u0418\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F",
                "\x4A\x61\x6B\x20\x67\x72\x61\u0107", "\x4E\x61\x73\u0131\x6C\x20\x4F\x79\x6E\x61\x6E\u0131\x72"],
        d_HowtoplayText_MahjongMain: [
                "\x52\x65\x6D\x6F\x76\x65\x20\x61\x6C\x6C\x20\x63\x61\x72\x64\x73\x20\x66\x72\x6F\x6D\x20\x74\x68\x65\x20\x74\x61\x62\x6C\x65\x61\x75\x20\x62\x79\x20\x73\x65\x6C\x65\x63\x74\x69\x6E\x67\x20\x6F\x70\x65\x6E\x20\x63\x61\x72\x64\x73\x20\x74\x68\x61\x74\x20\x61\x72\x65\x20\x31\x20\x68\x69\x67\x68\x65\x72\x20\x6F\x72\x20\x31\x20\x6C\x6F\x77\x65\x72\x20\x69\x6E\x20\x76\x61\x6C\x75\x65\x20\x74\x68\x65\x6E\x20\x74\x68\x65\x20\x6F\x70\x65\x6E\x20\x63\x61\x72\x64\x2E\x20\x43\x6C\x69\x63\x6B\x20\x6F\x6E\x20\x74\x68\x65\x20\x73\x74\x6F\x63\x6B\x20\x74\x6F\x20\x67\x65\x74\x20\x61\x20\x6E\x65\x77\x20\x6F\x70\x65\x6E\x20\x63\x61\x72\x64\x2E",
                "\x52\x65\x6D\x6F\x76\x65\x20\x61\x6C\x6C\x20\x63\x61\x72\x64\x73\x20\x66\x72\x6F\x6D\x20\x74\x68\x65\x20\x74\x61\x62\x6C\x65\x61\x75\x20\x62\x79\x20\x73\x65\x6C\x65\x63\x74\x69\x6E\x67\x20\x6F\x70\x65\x6E\x20\x63\x61\x72\x64\x73\x20\x74\x68\x61\x74\x20\x61\x72\x65\x20\x31\x20\x68\x69\x67\x68\x65\x72\x20\x6F\x72\x20\x31\x20\x6C\x6F\x77\x65\x72\x20\x69\x6E\x20\x76\x61\x6C\x75\x65\x20\x74\x68\x65\x6E\x20\x74\x68\x65\x20\x6F\x70\x65\x6E\x20\x63\x61\x72\x64\x2E\x20\x43\x6C\x69\x63\x6B\x20\x6F\x6E\x20\x74\x68\x65\x20\x73\x74\x6F\x63\x6B\x20\x74\x6F\x20\x67\x65\x74\x20\x61\x20\x6E\x65\x77\x20\x6F\x70\x65\x6E\x20\x63\x61\x72\x64\x2E",
                "\x52\x65\x6D\x6F\x76\x65\x20\x61\x6C\x6C\x20\x63\x61\x72\x64\x73\x20\x66\x72\x6F\x6D\x20\x74\x68\x65\x20\x74\x61\x62\x6C\x65\x61\x75\x20\x62\x79\x20\x73\x65\x6C\x65\x63\x74\x69\x6E\x67\x20\x6F\x70\x65\x6E\x20\x63\x61\x72\x64\x73\x20\x74\x68\x61\x74\x20\x61\x72\x65\x20\x31\x20\x68\x69\x67\x68\x65\x72\x20\x6F\x72\x20\x31\x20\x6C\x6F\x77\x65\x72\x20\x69\x6E\x20\x76\x61\x6C\x75\x65\x20\x74\x68\x65\x6E\x20\x74\x68\x65\x20\x6F\x70\x65\x6E\x20\x63\x61\x72\x64\x2E\x20\x43\x6C\x69\x63\x6B\x20\x6F\x6E\x20\x74\x68\x65\x20\x73\x74\x6F\x63\x6B\x20\x74\x6F\x20\x67\x65\x74\x20\x61\x20\x6E\x65\x77\x20\x6F\x70\x65\x6E\x20\x63\x61\x72\x64\x2E",
                "\x53\x70\x65\x65\x6C\x20\x61\x6C\x6C\x65\x20\x6B\x61\x61\x72\x74\x65\x6E\x20\x77\x65\x67\x20\x64\x6F\x6F\x72\x20\x6F\x70\x65\x6E\x20\x6B\x61\x61\x72\x74\x65\x6E\x20\x74\x65\x20\x73\x65\x6C\x65\x63\x74\x65\x72\x65\x6E\x20\x64\x69\x65\x20\x31\x20\x68\x6F\x67\x65\x72\x20\x6F\x66\x20\x31\x20\x6C\x61\x67\x65\x72\x20\x69\x6E\x20\x77\x61\x61\x72\x64\x65\x20\x7A\x69\x6A\x6E\x20\x64\x61\x6E\x20\x64\x65\x20\x6F\x70\x65\x6E\x20\x6B\x61\x61\x72\x74\x2E\x20\x4B\x6C\x69\x6B\x20\x6F\x70\x20\x64\x65\x20\x76\x6F\x6F\x72\x72\x61\x61\x64\x20\x6F\x6D\x20\x65\x65\x6E\x20\x6E\x69\x65\x75\x77\x65\x20\x6F\x70\x65\x6E\x20\x6B\x61\x61\x72\x74\x20\x74\x65\x20\x6B\x72\x69\x6A\x67\x65\x6E\x2E",
                "\u79FB\u9664\u6E38\u620F\u753B\u9762\u4E0A\u65B9\u7684\u6240\u6709\u724C\uFF0C\u901A\u8FC7\u70B9\u51FB\u753B\u9762\u4E0A\u65B9\u7684\u6BD4\u4E0B\u9762\u7FFB\u5F00\u7684\u724C\u5927\x31\u6216\u8005\u5C0F\x31\u724C\u6D88\u9664\u4ED6\u4EEC\uFF0C\u70B9\u51FB\u724C\u53E0\u53EF\u7FFB\u5F00\u76D6\u7740\u7684\u724C\u3002",
                "\x52\x65\x74\x69\x72\x61\x20\x74\x6F\x64\x61\x73\x20\x6C\x61\x73\x20\x63\x61\x72\x74\x61\x73\x20\x64\x65\x20\x6C\x61\x20\x6D\x65\x73\x61\x20\x73\x65\x6C\x65\x63\x63\x69\x6F\x6E\x61\x6E\x64\x6F\x20\x63\x61\x72\x74\x61\x73\x20\x61\x62\x69\x65\x72\x74\x61\x73\x20\x71\x75\x65\x20\x73\x65\x61\x6E\x20\x75\x6E\x61\x20\x73\x75\x70\x65\x72\x69\x6F\x72\x20\x6F\x20\x75\x6E\x61\x20\x69\x6E\x66\x65\x72\x69\x6F\x72\x20\x65\x6E\x20\x76\x61\x6C\x6F\x72\x20\x61\x20\x6C\x61\x20\x63\x61\x72\x74\x61\x20\x61\x62\x69\x65\x72\x74\x61\x20\x65\x6E\x20\x65\x73\x65\x20\x6D\x6F\x6D\x65\x6E\x74\x6F\x2E\x20\x48\x61\x7A\x20\x63\x6C\x69\x63\x20\x65\x6E\x20\x65\x6C\x20\x6D\x61\x7A\x6F\x20\x70\x61\x72\x61\x20\x6F\x62\x74\x65\x6E\x65\x72\x20\x75\x6E\x61\x20\x6E\x75\x65\x76\x61\x20\x63\x61\x72\x74\x61\x20\x61\x62\x69\x65\x72\x74\x61\x2E",
                "\x52\x65\x74\x69\x72\x61\x20\x74\x6F\x64\x61\x73\x20\x6C\x61\x73\x20\x63\x61\x72\x74\x61\x73\x20\x64\x65\x20\x6C\x61\x20\x6D\x65\x73\x61\x20\x73\x65\x6C\x65\x63\x63\x69\x6F\x6E\x61\x6E\x64\x6F\x20\x63\x61\x72\x74\x61\x73\x20\x61\x62\x69\x65\x72\x74\x61\x73\x20\x71\x75\x65\x20\x73\x65\x61\x6E\x20\x75\x6E\x61\x20\x73\x75\x70\x65\x72\x69\x6F\x72\x20\x6F\x20\x75\x6E\x61\x20\x69\x6E\x66\x65\x72\x69\x6F\x72\x20\x65\x6E\x20\x76\x61\x6C\x6F\x72\x20\x61\x20\x6C\x61\x20\x63\x61\x72\x74\x61\x20\x61\x62\x69\x65\x72\x74\x61\x20\x65\x6E\x20\x65\x73\x65\x20\x6D\x6F\x6D\x65\x6E\x74\x6F\x2E\x20\x48\x61\x7A\x20\x63\x6C\x69\x63\x20\x65\x6E\x20\x65\x6C\x20\x6D\x61\x7A\x6F\x20\x70\x61\x72\x61\x20\x6F\x62\x74\x65\x6E\x65\x72\x20\x75\x6E\x61\x20\x6E\x75\x65\x76\x61\x20\x63\x61\x72\x74\x61\x20\x61\x62\x69\x65\x72\x74\x61\x2E",
                "\x52\x65\x74\x69\x72\x61\x20\x74\x6F\x64\x61\x73\x20\x6C\x61\x73\x20\x63\x61\x72\x74\x61\x73\x20\x64\x65\x20\x6C\x61\x20\x6D\x65\x73\x61\x20\x73\x65\x6C\x65\x63\x63\x69\x6F\x6E\x61\x6E\x64\x6F\x20\x63\x61\x72\x74\x61\x73\x20\x61\x62\x69\x65\x72\x74\x61\x73\x20\x71\x75\x65\x20\x73\x65\x61\x6E\x20\x75\x6E\x61\x20\x73\x75\x70\x65\x72\x69\x6F\x72\x20\x6F\x20\x75\x6E\x61\x20\x69\x6E\x66\x65\x72\x69\x6F\x72\x20\x65\x6E\x20\x76\x61\x6C\x6F\x72\x20\x61\x20\x6C\x61\x20\x63\x61\x72\x74\x61\x20\x61\x62\x69\x65\x72\x74\x61\x20\x65\x6E\x20\x65\x73\x65\x20\x6D\x6F\x6D\x65\x6E\x74\x6F\x2E\x20\x48\x61\x7A\x20\x63\x6C\x69\x63\x20\x65\x6E\x20\x65\x6C\x20\x6D\x61\x7A\x6F\x20\x70\x61\x72\x61\x20\x6F\x62\x74\x65\x6E\x65\x72\x20\x75\x6E\x61\x20\x6E\x75\x65\x76\x61\x20\x63\x61\x72\x74\x61\x20\x61\x62\x69\x65\x72\x74\x61\x2E",
                "\x52\x65\x6D\x6F\x76\x65\x20\x74\x6F\x64\x61\x73\x20\x61\x73\x20\x63\x61\x72\x74\x61\x73\x20\x64\x6F\x20\x74\x61\x62\x75\x6C\x65\x69\x72\x6F\x20\x73\x65\x6C\x65\x63\x69\x6F\x6E\x61\x6E\x64\x6F\x20\x61\x73\x20\x63\x61\x72\x74\x61\x73\x20\x71\x75\x65\x20\x76\xEA\x73\x20\x6D\x61\x69\x6F\x72\x65\x73\x20\x6F\x75\x20\x6D\x65\x6E\x6F\x72\x65\x73\x20\x64\x6F\x20\x71\x75\x65\x20\x31\x20\x65\x6D\x20\x76\x61\x6C\x6F\x72\x20\x65\x20\x64\x65\x70\x6F\x69\x73\x20\x76\xEA\x20\x61\x20\x63\x61\x72\x74\x61\x2E\x20\x43\x6C\x69\x63\x61\x20\x6E\x6F\x20\x73\x74\x6F\x63\x6B\x20\x70\x61\x72\x61\x20\x76\x65\x72\x65\x73\x20\x75\x6D\x61\x20\x6E\x6F\x76\x61\x20\x63\x61\x72\x74\x61\x2E",
                "\x52\x65\x6D\x6F\x76\x61\x20\x74\x6F\x64\x61\x73\x20\x61\x73\x20\x63\x61\x72\x74\x61\x73\x20\x64\x6F\x20\x74\x61\x62\x75\x6C\x65\x69\x72\x6F\x20\x73\x65\x6C\x65\x63\x69\x6F\x6E\x61\x6E\x64\x6F\x20\x61\x73\x20\x63\x61\x72\x74\x61\x73\x20\x6D\x61\x69\x6F\x72\x65\x73\x20\x6F\x75\x20\x6D\x65\x6E\x6F\x72\x65\x73\x20\x64\x6F\x20\x71\x75\x65\x20\x31\x20\x65\x20\x64\x65\x70\x6F\x69\x73\x20\x76\x69\x73\x75\x61\x6C\x69\x7A\x65\x20\x61\x20\x63\x61\x72\x74\x61\x2E\x20\x43\x6C\x69\x71\x75\x65\x20\x6E\x61\x20\x70\x69\x6C\x68\x61\x20\x70\x61\x72\x61\x20\x76\x65\x72\x20\x75\x6D\x61\x20\x6E\x6F\x76\x61\x20\x63\x61\x72\x74\x61\x2E",
                "\x46\x61\x69\x73\x20\x64\x69\x73\x70\x61\x72\x61\xEE\x74\x72\x65\x20\x74\x6F\x75\x74\x65\x73\x20\x6C\x65\x73\x20\x63\x61\x72\x74\x65\x73\x20\x64\x75\x20\x74\x61\x62\x6C\x65\x61\x75\x20\x65\x6E\x20\x73\xE9\x6C\x65\x63\x74\x69\x6F\x6E\x6E\x61\x6E\x74\x20\x64\x65\x73\x20\x63\x61\x72\x74\x65\x73\x20\x64\x27\x31\x20\x70\x6F\x69\x6E\x74\x20\x64\x65\x20\x76\x61\x6C\x65\x75\x72\x20\x73\x75\x70\xE9\x72\x69\x65\x75\x72\x20\x6F\x75\x20\x69\x6E\x66\xE9\x72\x69\x65\x75\x72\x20\xE0\x20\x6C\x61\x20\x63\x61\x72\x74\x65\x20\x76\x69\x73\x69\x62\x6C\x65\x2E\x20\x43\x6C\x69\x71\x75\x65\x20\x73\x75\x72\x20\x6C\x65\x20\x73\x74\x6F\x63\x6B\x20\x70\x6F\x75\x72\x20\x6F\x62\x74\x65\x6E\x69\x72\x20\x75\x6E\x65\x20\x6E\x6F\x75\x76\x65\x6C\x6C\x65\x20\x63\x61\x72\x74\x65\x20\x76\x69\x73\x69\x62\x6C\x65\x2E",
                "\x52\x69\x6D\x75\x6F\x76\x69\x20\x74\x75\x74\x74\x65\x20\x6C\x65\x20\x63\x61\x72\x74\x65\x20\x64\x61\x6C\x20\x74\x61\x76\x6F\x6C\x6F\x20\x73\x65\x6C\x65\x7A\x69\x6F\x6E\x61\x6E\x64\x6F\x20\x71\x75\x65\x6C\x6C\x65\x20\x61\x70\x65\x72\x74\x65\x20\x63\x6F\x6E\x20\x75\x6E\x20\x76\x61\x6C\x6F\x72\x65\x20\x70\x69\xF9\x20\x61\x6C\x74\x6F\x20\x6F\x20\x62\x61\x73\x73\x6F\x20\x64\x69\x20\x31\x20\x72\x69\x73\x70\x65\x74\x74\x6F\x20\x61\x6C\x6C\x61\x20\x63\x61\x72\x74\x61\x20\x61\x70\x65\x72\x74\x61\x2E\x20\x46\x61\x69\x20\x63\x6C\x69\x63\x20\x73\x75\x6C\x20\x6D\x61\x7A\x7A\x6F\x20\x70\x65\x72\x20\x61\x76\x65\x72\x65\x20\x75\x6E\x27\x61\x6C\x74\x72\x61\x20\x63\x61\x72\x74\x61\x2E",
                "\x53\x70\x69\x65\x6C\x65\x20\x61\x6C\x6C\x65\x20\x4B\x61\x72\x74\x65\x6E\x20\x76\x6F\x6D\x20\x53\x70\x69\x65\x6C\x66\x65\x6C\x64\x20\x69\x6E\x64\x65\x6D\x20\x64\x75\x20\x6F\x66\x66\x65\x6E\x65\x20\x4B\x61\x72\x74\x65\x6E\x20\x61\x75\x73\x77\xE4\x68\x6C\x73\x74\x2C\x20\x64\x69\x65\x20\x31\x20\x68\xF6\x68\x65\x72\x20\x6F\x64\x65\x72\x20\x31\x20\x6E\x69\x65\x64\x72\x69\x67\x65\x72\x20\x69\x6D\x20\x57\x65\x72\x74\x20\x73\x69\x6E\x64\x20\x61\x6C\x73\x20\x64\x69\x65\x20\x6F\x66\x66\x65\x6E\x65\x20\x4B\x61\x72\x74\x65\x2E\x20\x46\xFC\x72\x20\x6E\x65\x75\x65\x20\x6F\x66\x66\x65\x6E\x65\x20\x4B\x61\x72\x74\x65\x6E\x20\x6B\x6C\x69\x63\x6B\x65\x20\x61\x75\x66\x20\x64\x65\x6E\x20\x53\x74\x6F\xDF\x2E",
                "\u0423\u0431\u0435\u0440\u0438\x20\u0432\u0441\u0435\x20\u043A\u0430\u0440\u0442\u044B\x20\u0441\x20\u0442\u0430\u0431\u043B\u043E\x2C\x20\u0432\u044B\u0431\u0438\u0440\u0430\u044F\x20\u043E\u0442\u043A\u0440\u044B\u0442\u044B\u0435\x20\u043A\u0430\u0440\u0442\u044B\x2C\x20\u043A\u043E\u0442\u043E\u0440\u044B\u0435\x20\u0432\u044B\u0448\u0435\x20\u0438\u043B\u0438\x20\u043D\u0438\u0436\u0435\x20\u043D\u0430\x20\x31\x20\u043E\u0442\u043A\u0440\u044B\u0442\u043E\u0439\x20\u0437\u0430\u0442\u0435\u043C\x20\u043A\u0430\u0440\u0442\u044B\x2E\x20\u0429\u0435\u043B\u043A\u043D\u0438\x20\u043F\u043E\x20\u043A\u043E\u043B\u043E\u0434\u0435\x20\x28\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439\x20\u043A\u0430\u0440\u0442\u0435\x29\x2C\x20\u0447\u0442\u043E\u0431\u044B\x20\u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C\x20\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E\x20\u043E\u0442\u043A\u0440\u044B\u0442\u0443\u044E\x20\u043A\u0430\u0440\u0442\u0443\x2E",
                "\x55\x73\x75\u0144\x20\x77\x73\x7A\x79\x73\x74\x6B\x69\x65\x20\x6B\x61\x72\x74\x79\x2C\x20\x77\x79\x62\x69\x65\x72\x61\x6A\u0105\x63\x20\x6B\x61\x72\x74\x79\x20\x6F\x20\x31\x20\x77\x79\u017C\x73\x7A\x65\x20\x6C\x75\x62\x20\x6F\x20\x31\x20\x6E\x69\u017C\x73\x7A\x65\x20\x6F\x64\x20\x6F\x64\x6B\x72\x79\x74\x65\x6A\x20\x6B\x61\x72\x74\x79\x20\x28\x75\x20\x64\x6F\u0142\x75\x20\x70\x6F\x20\x70\x72\x61\x77\x65\x6A\x29\x2E\x20\x4D\x6F\u017C\x6E\x61\x20\x7A\x61\x67\x72\x79\x77\x61\u0107\x20\x6B\x72\xF3\x6C\x65\x6D\x20\x6C\x75\x62\x20\x32\x20\x6E\x61\x20\x61\x73\x61\x2E\x20\x4A\x6F\x6B\x65\x72\x20\x6D\x6F\u017C\x65\x20\x70\x72\x7A\x79\x62\x72\x61\u0107\x20\x66\x6F\x72\x6D\u0119\x20\x64\x6F\x77\x6F\x6C\x6E\x65\x6A\x20\x6B\x61\x72\x74\x79\x2E",
                "\x41\xE7\u0131\x6B\x20\x6B\x61\x72\x74\x74\x61\x6E\x20\x28\x73\x61\u011F\x20\x61\x6C\x74\x29\x20\x31\x20\x66\x61\x7A\x6C\x61\x20\x76\x65\x79\x61\x20\x31\x20\x61\x7A\x20\x6F\x6C\x61\x6E\x20\x73\x65\x72\x62\x65\x73\x74\x20\x6B\x61\x72\x74\x6C\x61\x72\u0131\x20\x73\x65\xE7\x65\x72\x65\x6B\x20\x74\xFC\x6D\x20\x6B\x61\x72\x74\x6C\x61\x72\u0131\x20\x6B\x61\x6C\x64\u0131\x72\u0131\x6E\x2E\x20\x42\x69\x72\x20\x50\x61\x70\x61\x7A\x20\x6F\x79\x6E\x61\x79\x61\x62\x69\x6C\x69\x72\x20\x76\x65\x79\x61\x20\x62\x69\x72\x20\x41\x73\x20\xFC\x7A\x65\x72\x69\x6E\x65\x20\x32\x20\x6F\x79\x6E\x61\x79\x61\x62\x69\x6C\x69\x72\x73\x69\x6E\x69\x7A\x2E\x20\x4A\x6F\x6B\x65\x72\x20\x74\xFC\x6D\x20\x6B\x61\x72\x74\x6C\x61\x72\u0131\x6E\x20\x79\x65\x72\x69\x6E\x65\x20\x6B\x75\x6C\x6C\x61\x6E\u0131\x6C\x61\x62\x69\x6C\x69\x72\x2E"],
        d_Back: ["\x42\x61\x63\x6B", "\x42\x61\x63\x6B", "\x57\x61\x70\x61\x73", "\x54\x65\x72\x75\x67", "\u8FD4\u56DE",
                "\x41\x74\x72\xE1\x73", "\x41\x74\x72\xE1\x73", "\x41\x74\x72\xE1\x73", "\x56\x6F\x6C\x74\x61\x72",
                "\x56\x6F\x6C\x74\x61\x72", "\x52\x65\x74\x6F\x75\x72", "\x49\x6E\x64\x69\x65\x74\x72\x6F",
                "\x5A\x75\x72\xFC\x63\x6B", "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F",
                "\x50\x6F\x77\x72\xF3\x74", "\x47\x65\x72\x69"],
        d_Endgame: ["\x45\x6E\x64\x20\x47\x61\x6D\x65", "\x45\x6E\x64\x20\x47\x61\x6D\x65",
                "\x47\x61\x6D\x65\x20\x53\x61\x6D\x61\x70\x74\x69", "\x53\x74\x6F\x70\x20\x73\x70\x65\x6C",
                "\u7ED3\u675F", "\x54\x65\x72\x6D\x69\x6E\x61\x72\x20\x65\x6C\x20\x6A\x75\x65\x67\x6F",
                "\x54\x65\x72\x6D\x69\x6E\x61\x72\x20\x65\x6C\x20\x6A\x75\x65\x67\x6F",
                "\x54\x65\x72\x6D\x69\x6E\x61\x72\x20\x65\x6C\x20\x6A\x75\x65\x67\x6F",
                "\x54\x65\x72\x6D\x69\x6E\x61\x72\x20\x6A\x6F\x67\x6F",
                "\x54\x65\x72\x6D\x69\x6E\x61\x72\x20\x6A\x6F\x67\x6F",
                "\x41\x72\x72\xEA\x74\x65\x72\x20\x6C\x65\x20\x6A\x65\x75",
                "\x54\x65\x72\x6D\x69\x6E\x61\x20\x67\x69\x6F\x63\x6F",
                "\x53\x70\x69\x65\x6C\x20\x62\x65\x65\x6E\x64\x65\x6E",
                "\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C",
                "\x5A\x61\x6B\x6F\u0144\x63\x7A\x20\x67\x72\u0119", "\x4F\x79\x75\x6E\x75\x20\x42\x69\x74\x69\x72"],
        d_Timeout: ["\x54\x69\x6D\x65\x20\x6F\x75\x74", "\x54\x69\x6D\x65\x20\x6F\x75\x74",
                "\x53\x61\x6D\x61\x79\x61\x20\x53\x61\x6D\x61\x70\x74\x61",
                "\x54\x69\x6A\x64\x20\x76\x6F\x6F\x72\x62\x69\x6A", "\u65F6\u95F4\u5230",
                "\x54\x69\x65\x6D\x70\x6F\x20\x61\x67\x6F\x74\x61\x64\x6F",
                "\x54\x69\x65\x6D\x70\x6F\x20\x61\x67\x6F\x74\x61\x64\x6F",
                "\x54\x69\x65\x6D\x70\x6F\x20\x61\x67\x6F\x74\x61\x64\x6F",
                "\x41\x63\x61\x62\x6F\x75\x20\x6F\x20\x74\x65\x6D\x70\x6F\x21",
                "\x41\x63\x61\x62\x6F\x75\x20\x6F\x20\x74\x65\x6D\x70\x6F\x21",
                "\x54\x65\x6D\x70\x73\x20\xE9\x63\x6F\x75\x6C\xE9",
                "\x54\x65\x6D\x70\x6F\x20\x73\x63\x61\x64\x75\x74\x6F",
                "\x5A\x65\x69\x74\x20\x7A\x75\x20\x45\x6E\x64\x65",
                "\u0412\u0440\u0435\u043C\u044F\x20\u0432\u044B\u0448\u043B\u043E",
                "\x4B\x6F\x6E\x69\x65\x63\x20\x63\x7A\x61\x73\x75", "\x53\xFC\x72\x65\x20\x62\x69\x74\x74\x69"],
        d_LevelFailed: ["\x4C\x65\x76\x65\x6C\x20\x46\x61\x69\x6C\x65\x64",
                "\x4C\x65\x76\x65\x6C\x20\x46\x61\x69\x6C\x65\x64",
                "\u0938\u094D\u0924\u0930\x20\u092E\u0947\u0902\x20\u0935\u093F\u092B\u0932",
                "\x4C\x65\x76\x65\x6C\x20\x6E\x69\x65\x74\x20\x67\x65\x68\x61\x61\x6C\x64", "\u95EF\u5173\u5931\u8D25",
                "\x4E\x69\x76\x65\x6C\x20\x6E\x6F\x20\x63\x6F\x6D\x70\x6C\x65\x74\x61\x64\x6F",
                "\x4E\x69\x76\x65\x6C\x20\x6E\x6F\x20\x63\x6F\x6D\x70\x6C\x65\x74\x61\x64\x6F",
                "\x4E\x69\x76\x65\x6C\x20\x6E\x6F\x20\x63\x6F\x6D\x70\x6C\x65\x74\x61\x64\x6F",
                "\x4E\xED\x76\x65\x6C\x20\x66\x61\x6C\x68\x61\x64\x6F", "\x4E\xED\x76\x65\x6C\x20\x66\x61\x6C\x68\x6F",
                "\xC9\x63\x68\x65\x63",
                "\x4C\x69\x76\x65\x6C\x6C\x6F\x20\x6E\x6F\x6E\x20\x73\x75\x70\x65\x72\x61\x74\x6F",
                "\x4C\x65\x76\x65\x6C\x20\x6E\x69\x63\x68\x74\x20\x62\x65\x73\x74\x61\x6E\x64\x65\x6E",
                "\u0423\u0440\u043E\u0432\u0435\u043D\u044C\x20\u043F\u0440\u043E\u0432\u0430\u043B\u0435\u043D",
                "\x50\x6F\x7A\x69\x6F\x6D", "\x53\x65\x76\x69\x79\x65\x20\x47\x65\xE7\x69\x6C\x65\x6D\x65\x64\x69"],
        d_LevelCompleted: ["\x4C\x65\x76\x65\x6C\x20\x43\x6F\x6D\x70\x6C\x65\x74\x65\x64",
                "\x4C\x65\x76\x65\x6C\x20\x43\x6F\x6D\x70\x6C\x65\x74\x65\x64",
                "\x53\x74\x61\x72\x61\x20\x43\x6F\x6D\x70\x6C\x65\x74\x65\x20\x48\x75\x61",
                "\x4C\x65\x76\x65\x6C\x20\x47\x65\x72\x65\x65\x64", "\u606D\u559C\u8FC7\u5173",
                "\x4E\x69\x76\x65\x6C\x20\x63\x6F\x6D\x70\x6C\x65\x74\x61\x64\x6F",
                "\x4E\x69\x76\x65\x6C\x20\x63\x6F\x6D\x70\x6C\x65\x74\x61\x64\x6F",
                "\x4E\x69\x76\x65\x6C\x20\x63\x6F\x6D\x70\x6C\x65\x74\x61\x64\x6F",
                "\x4E\xED\x76\x65\x6C\x20\x63\x6F\x6E\x63\x6C\x75\xED\x64\x6F",
                "\x4E\xED\x76\x65\x6C\x20\x63\x6F\x6E\x63\x6C\x75\xED\x64\x6F",
                "\x4E\x69\x76\x65\x61\x75\x20\x74\x65\x72\x6D\x69\x6E\xE9",
                "\x4C\x69\x76\x65\x6C\x6C\x6F\x20\x63\x6F\x6D\x70\x6C\x65\x74\x61\x74\x6F",
                "\x4C\x65\x76\x65\x6C\x20\x61\x62\x67\x65\x73\x63\x68\x6C\x6F\x73\x73\x65\x6E",
                "\u0423\u0440\u043E\u0432\u0435\u043D\u044C\x20\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D",
                "\x50\x6F\x7A\x69\x6F\x6D\x20\x75\x6B\x6F\u0144\x63\x7A\x6F\x6E\x79",
                "\x53\x65\x76\x69\x79\x65\x20\x54\x61\x6D\x61\x6D\x6C\x61\x6E\x64\u0131"],
        d_TimeBonus: ["\x54\x69\x6D\x65\x20\x42\x6F\x6E\x75\x73\x3A", "\x54\x69\x6D\x65\x20\x42\x6F\x6E\x75\x73\x3A",
                "\x53\x61\x6D\x61\x79\x61\x20\x42\x6F\x6E\x75\x73\x3A", "\x54\x69\x6A\x64\x62\x6F\x6E\x75\x73\x3A",
                "\u65F6\u95F4\u5956\u52B1\x3A", "\x42\x6F\x6E\x6F\x20\x64\x65\x20\x74\x69\x65\x6D\x70\x6F\x3A",
                "\x42\x6F\x6E\x6F\x20\x64\x65\x20\x74\x69\x65\x6D\x70\x6F\x3A",
                "\x42\x6F\x6E\x6F\x20\x64\x65\x20\x74\x69\x65\x6D\x70\x6F\x3A",
                "\x42\xF3\x6E\x75\x73\x20\x64\x65\x20\x74\x65\x6D\x70\x6F\x3A",
                "\x42\xF4\x6E\x75\x73\x20\x64\x65\x20\x74\x65\x6D\x70\x6F\x3A",
                "\x42\x6F\x6E\x75\x73\x20\x74\x65\x6D\x70\x73\x3A",
                "\x42\x6F\x6E\x75\x73\x20\x61\x20\x74\x65\x6D\x70\x6F\x3A", "\x5A\x65\x69\x74\x62\x6F\x6E\x75\x73\x3A",
                "\u0411\u043E\u043D\u0443\u0441\x20\u0437\u0430\x20\u0432\u0440\u0435\u043C\u044F\x3A",
                "\x50\x72\x65\x6D\x69\x61\x20\x7A\x61\x20\x63\x7A\x61\x73\x3A",
                "\x53\xFC\x72\x65\x20\x42\x6F\x6E\x75\x73\x75\x3A"],
        d_NextLevel: ["\x4E\x65\x78\x74\x20\x4C\x65\x76\x65\x6C", "\x4E\x65\x78\x74\x20\x4C\x65\x76\x65\x6C",
                "\x41\x67\x61\x6C\x61\x20\x53\x74\x61\x72\x61", "\x56\x6F\x6C\x67\x65\x6E\x64\x20\x4C\x65\x76\x65\x6C",
                "\u4E0B\u4E00\u5173", "\x53\x69\x67\x75\x69\x65\x6E\x74\x65\x20\x6E\x69\x76\x65\x6C",
                "\x53\x69\x67\x75\x69\x65\x6E\x74\x65\x20\x6E\x69\x76\x65\x6C",
                "\x53\x69\x67\x75\x69\x65\x6E\x74\x65\x20\x6E\x69\x76\x65\x6C",
                "\x4E\xED\x76\x65\x6C\x20\x73\x65\x67\x75\x69\x6E\x74\x65",
                "\x4E\xED\x76\x65\x6C\x20\x73\x65\x67\x75\x69\x6E\x74\x65",
                "\x4E\x69\x76\x65\x61\x75\x20\x73\x75\x69\x76\x61\x6E\x74",
                "\x4C\x69\x76\x65\x6C\x6C\x6F\x20\x73\x75\x63\x63\x65\x73\x73\x69\x76\x6F",
                "\x4E\xE4\x63\x68\x73\x74\x65\x72\x20\x4C\x65\x76\x65\x6C",
                "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439\x20\u0443\u0440\u043E\u0432\u0435\u043D\u044C",
                "\x4E\x61\x73\x74\u0119\x70\x6E\x79\x20\x70\x6F\x7A\x69\x6F\x6D",
                "\x53\x6F\x6E\x72\x61\x6B\x69\x20\x73\x65\x76\x69\x79\x65"],
        d_Score: ["\x53\x63\x6F\x72\x65\x3A", "\x53\x63\x6F\x72\x65\x3A", "\x53\x63\x6F\x72\x65\x3A",
                "\x53\x63\x6F\x72\x65\x3A", "\u5206\u6570\x3A", "\x50\x75\x6E\x74\x75\x61\x63\x69\xF3\x6E\x3A",
                "\x50\x75\x6E\x74\x75\x61\x63\x69\xF3\x6E\x3A", "\x50\x75\x6E\x74\x75\x61\x63\x69\xF3\x6E\x3A",
                "\x50\x6F\x6E\x74\x75\x61\xE7\xE3\x6F\x3A", "\x50\x6F\x6E\x74\x75\x61\xE7\xE3\x6F\x3A",
                "\x53\x63\x6F\x72\x65\x3A", "\x50\x75\x6E\x74\x65\x67\x67\x69\x6F\x3A",
                "\x53\x70\x69\x65\x6C\x73\x74\x61\x6E\x64\x3A", "\u041E\u0447\u043A\u0438\x3A",
                "\x50\x75\x6E\x6B\x74\x79\x3A", "\x50\x75\x61\x6E\x3A"],
        d_Time: ["\x54\x69\x6D\x65\x3A", "\x54\x69\x6D\x65\x3A", "\x53\x61\x6D\x61\x79\x61\x3A", "\x54\x69\x6A\x64\x3A",
                "\u65F6\u95F4\uFF1A", "\x54\x69\x65\x6D\x70\x6F\x3A", "\x54\x69\x65\x6D\x70\x6F\x3A",
                "\x54\x69\x65\x6D\x70\x6F\x3A", "\x54\x65\x6D\x70\x6F\x3A", "\x54\x65\x6D\x70\x6F\x3A",
                "\x54\x65\x6D\x70\x73\x3A", "\x54\x65\x6D\x70\x6F\x3A", "\x5A\x65\x69\x74\x3A",
                "\u0412\u0440\u0435\u043C\u044F\x3A", "\x43\x7A\x61\x73\x3A", "\x53\xFC\x72\x65\x3A"],
        d_Level: ["\x4C\x65\x76\x65\x6C\x3A", "\x4C\x65\x76\x65\x6C\x3A", "\x53\x74\x61\x72\x61\x3A",
                "\x4C\x65\x76\x65\x6C\x3A", "\u5173\uFF1A", "\x4E\x69\x76\x65\x6C\x3A", "\x4E\x69\x76\x65\x6C\x3A",
                "\x4E\x69\x76\x65\x6C\x3A", "\x4E\xED\x76\x65\x6C\x3A", "\x4E\xED\x76\x65\x6C\x3A",
                "\x4E\x69\x76\x65\x61\x75\x3A", "\x4C\x69\x76\x65\x6C\x6C\x6F\x3A", "\x4C\x65\x76\x65\x6C\x3A",
                "\u0423\u0440\u043E\u0432\u0435\u043D\u044C\x3A", "\x50\x6F\x7A\x69\x6F\x6D\x3A",
                "\x53\x65\x76\x69\x79\x65\x3A"],
        d_Hint: ["\x48\x69\x6E\x74", "\x48\x69\x6E\x74", "\x53\x61\x6E\x6B\x65\x74\x61", "\x48\x69\x6E\x74",
                "\u63D0\u793A", "\x53\x75\x67\x65\x72\x65\x6E\x63\x69\x61", "\x53\x75\x67\x65\x72\x65\x6E\x63\x69\x61",
                "\x53\x75\x67\x65\x72\x65\x6E\x63\x69\x61", "\x44\x69\x63\x61", "\x44\x69\x63\x61",
                "\x41\x73\x74\x75\x63\x65", "\x53\x75\x67\x67\x65\x72\x69\x6D\x65\x6E\x74\x6F", "\x54\x69\x70\x70",
                "\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430", "\x50\x6F\x64\x70\x6F\x77\x69\x65\x64\u017A",
                "\u0130\x70\x75\x63\x75"],
        d_Shuffle: ["\x53\x68\x75\x66\x66\x6C\x65", "\x53\x68\x75\x66\x66\x6C\x65",
                "\x47\x68\x61\x73\x69\x74\x61\x6E\x61", "\x53\x63\x68\x75\x64\x64\x65\x6E", "\u5237\u65B0",
                "\x42\x61\x72\x61\x6A\x61\x72", "\x42\x61\x72\x61\x6A\x61\x72", "\x42\x61\x72\x61\x6A\x61\x72",
                "\x42\x61\x72\x61\x6C\x68\x61\x72", "\x45\x6D\x62\x61\x72\x61\x6C\x68\x61\x72",
                "\x42\x61\x74\x74\x72\x65", "\x4D\x65\x73\x63\x6F\x6C\x61", "\x4D\x69\x73\x63\x68\x65\x6E",
                "\u041F\u0435\u0440\u0435\u043C\u0435\u0448\u0430\u0442\u044C", "\x54\x61\x73\x75\x6A",
                "\x4B\x61\x72\u0131\u015F\x74\u0131\x72"],
        d_Pause: ["\x50\x61\x75\x73\x65", "\x50\x61\x75\x73\x65", "\x56\x69\x61\x72\x61\x6D", "\x50\x61\x75\x7A\x65",
                "\u6682\u505C", "\x50\x61\x75\x73\x61", "\x50\x61\x75\x73\x61", "\x50\x61\x75\x73\x61",
                "\x50\x61\x75\x73\x61", "\x50\x61\x75\x73\x61", "\x50\x61\x75\x73\x65", "\x50\x61\x75\x73\x61",
                "\x50\x61\x75\x73\x65", "\u041F\u0430\u0443\u0437\u0430", "\x50\x61\x75\x7A\x61",
                "\x44\x75\x72\x61\x6B\x6C\x61\x74"],
        d_Continue: ["\x43\x6F\x6E\x74\x69\x6E\x75\x65", "\x43\x6F\x6E\x74\x69\x6E\x75\x65", "\x4A\x61\x72\x69",
                "\x47\x61\x20\x64\x6F\x6F\x72", "\u7EE7\u7EED", "\x43\x6F\x6E\x74\x69\x6E\x75\x61\x72",
                "\x43\x6F\x6E\x74\x69\x6E\x75\x61\x72", "\x43\x6F\x6E\x74\x69\x6E\x75\x61\x72",
                "\x43\x6F\x6E\x74\x69\x6E\x75\x61\x72", "\x43\x6F\x6E\x74\x69\x6E\x75\x61\x72",
                "\x43\x6F\x6E\x74\x69\x6E\x75\x65\x72", "\x43\x6F\x6E\x74\x69\x6E\x75\x61",
                "\x46\x6F\x72\x74\x66\x61\x68\x72\x65\x6E",
                "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C", "\x4B\x6F\x6E\x74\x79\x6E\x75\x75\x6A",
                "\x44\x65\x76\x61\x6D"],
        d_Menu: ["\x4D\x65\x6E\x75", "\x4D\x65\x6E\x75", "\x4D\x65\x6E\x75", "\x4D\x65\x6E\x75", "\u83DC\u5355",
                "\x4D\x65\x6E\xFA", "\x4D\x65\x6E\xFA", "\x4D\x65\x6E\xFA", "\x4D\x65\x6E\x75", "\x4D\x65\x6E\x75",
                "\x4D\x65\x6E\x75", "\x4D\x65\x6E\x75", "\x4D\x65\x6E\xFC", "\u041C\u0435\u043D\u044E",
                "\x4D\x65\x6E\x75", "\x4D\x65\x6E\xFC"],
        d_SubmitScore: ["\x53\x75\x62\x6D\x69\x74\x20\x53\x63\x6F\x72\x65",
                "\x53\x75\x62\x6D\x69\x74\x20\x53\x63\x6F\x72\x65",
                "\x53\x63\x6F\x72\x65\x20\x50\x72\x61\x73\x74\x75\x74\x61\x20\x4B\x61\x72\x65\x6E",
                "\x56\x65\x72\x73\x74\x75\x75\x72\x20\x73\x63\x6F\x72\x65", "\u63D0\u4EA4\u5206\u6570",
                "\x45\x6E\x76\x69\x61\x72\x20\x70\x75\x6E\x74\x75\x61\x63\x69\xF3\x6E",
                "\x45\x6E\x76\x69\x61\x72\x20\x70\x75\x6E\x74\x75\x61\x63\x69\xF3\x6E",
                "\x45\x6E\x76\x69\x61\x72\x20\x70\x75\x6E\x74\x75\x61\x63\x69\xF3\x6E",
                "\x53\x75\x62\x6D\x65\x74\x65\x72\x20\x70\x6F\x6E\x74\x75\x61\xE7\xE3\x6F",
                "\x45\x6E\x76\x69\x61\x72\x20\x70\x6F\x6E\x74\x75\x61\xE7\xE3\x6F",
                "\x53\x6F\x75\x6D\x65\x74\x74\x72\x65\x20\x73\x63\x6F\x72\x65",
                "\x49\x6E\x76\x69\x61\x20\x70\x75\x6E\x74\x65\x67\x67\x69\x6F",
                "\x53\x70\x69\x65\x6C\x73\x74\x61\x6E\x64\x20\xFC\x62\x65\x72\x6D\x69\x74\x74\x65\x6C\x6E",
                "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C\x20\u0441\u0447\u0435\u0442",
                "\x50\x6F\x64\x61\x6A\x20\x77\x79\x6E\x69\x6B", "\x50\x75\x61\x6E\u0131\x20\x47\xF6\x6E\x64\x65\x72"],
        d_PlayAgain: ["\x54\x72\x79\x20\x41\x67\x61\x69\x6E", "\x54\x72\x79\x20\x41\x67\x61\x69\x6E",
                "\x46\x69\x72\x20\x73\x65\x20\x6B\x68\x65\x6C\x65\x6E",
                "\x4E\x6F\x67\x20\x65\x65\x6E\x20\x6B\x65\x65\x72", "\u518D\u8BD5\u4E00\u6B21",
                "\x4A\x75\x67\x61\x72\x20\x6F\x74\x72\x61\x20\x76\x65\x7A",
                "\x4A\x75\x67\x61\x72\x20\x6F\x74\x72\x61\x20\x76\x65\x7A",
                "\x4A\x75\x67\x61\x72\x20\x6F\x74\x72\x61\x20\x76\x65\x7A",
                "\x4A\x6F\x67\x61\x72\x20\x64\x65\x20\x6E\x6F\x76\x6F",
                "\x4A\x6F\x67\x61\x72\x20\x64\x65\x20\x6E\x6F\x76\x6F",
                "\x4A\x6F\x75\x65\x72\x20\x65\x6E\x63\x6F\x72\x65",
                "\x47\x69\x6F\x63\x61\x20\x64\x69\x20\x6E\x75\x6F\x76\x6F",
                "\x4E\x6F\x63\x68\x20\x6D\x61\x6C\x20\x73\x70\x69\x65\x6C\x65\x6E",
                "\u0418\u0433\u0440\u0430\u0442\u044C\x20\u0441\u043D\u043E\u0432\u0430",
                "\x47\x72\x61\x6A\x20\x70\x6F\x6E\x6F\x77\x6E\x69\x65", "\x54\x65\x6B\x72\x61\x72\x20\x4F\x79\x6E\x61"],
        d_YourScore: ["\x59\x6F\x75\x72\x20\x53\x63\x6F\x72\x65", "\x59\x6F\x75\x72\x20\x53\x63\x6F\x72\x65",
                "\x41\x61\x70\x6B\x61\x20\x53\x63\x6F\x72\x65", "\x59\x6F\x75\x72\x20\x53\x63\x6F\x72\x65",
                "\u4F60\u7684\u5206\u6570\uFF1A", "\x54\x75\x20\x70\x75\x6E\x74\x75\x61\x63\x69\xF3\x6E",
                "\x54\x75\x20\x70\x75\x6E\x74\x75\x61\x63\x69\xF3\x6E",
                "\x54\x75\x20\x70\x75\x6E\x74\x75\x61\x63\x69\xF3\x6E",
                "\x41\x20\x73\x75\x61\x20\x70\x6F\x6E\x74\x75\x61\xE7\xE3\x6F",
                "\x53\x75\x61\x20\x70\x6F\x6E\x74\x75\x61\xE7\xE3\x6F", "\x56\x6F\x74\x72\x65\x20\x73\x63\x6F\x72\x65",
                "\x49\x6C\x20\x74\x75\x6F\x20\x70\x75\x6E\x74\x65\x67\x67\x69\x6F",
                "\x44\x65\x69\x6E\x20\x53\x70\x69\x65\x6C\x73\x74\x61\x6E\x64",
                "\u0422\u0432\u043E\u0438\x20\u043E\u0447\u043A\u0438", "\x54\x77\xF3\x6A\x20\x77\x79\x6E\x69\x6B",
                "\x50\x75\x61\x6E\u0131\x6E"],
        d_Musicon: ["\x4D\x75\x73\x69\x63\x20\x4F\x6E", "\x4D\x75\x73\x69\x63\x20\x4F\x6E",
                "\x53\x61\x6E\x67\x65\x65\x74\x20\x43\x61\x6C\x75", "\x4D\x75\x7A\x69\x65\x6B\x20\x41\x61\x6E",
                "\u97F3\u4E50\u5F00\u542F", "\x4D\xFA\x73\x69\x63\x61\x20\x45\x6E\x63\x65\x6E\x64\x69\x64\x6F",
                "\x4D\xFA\x73\x69\x63\x61\x20\x45\x6E\x63\x65\x6E\x64\x69\x64\x6F",
                "\x4D\xFA\x73\x69\x63\x61\x20\x45\x6E\x63\x65\x6E\x64\x69\x64\x6F",
                "\x4D\xFA\x73\x69\x63\x61\x20\x4C\x69\x67\x61\x72", "\x4D\xFA\x73\x69\x63\x61\x20\x4C\x69\x67\x61\x72",
                "\x4D\x75\x73\x69\x71\x75\x65\x20\x41\x63\x74\x69\x76\xE9",
                "\x4D\x75\x73\x69\x63\x61\x20\x41\x74\x74\x69\x76\x6F", "\x4D\x75\x73\x69\x6B\x20\x45\x69\x6E",
                "\u041C\u0443\u0437\u044B\u043A\u0430\x20\u0412\u043A\u043B",
                "\x4D\x75\x7A\x79\x6B\x61\x20\x57\u0142\u0105\x63\x7A", "\x4D\xFC\x7A\x69\x6B\x20\x41\xE7\u0131\x6B"],
        d_Musicoff: ["\x4D\x75\x73\x69\x63\x20\x4F\x66\x66", "\x4D\x75\x73\x69\x63\x20\x4F\x66\x66",
                "\x53\x61\x6E\x67\x65\x65\x74\x20\x42\x61\x6E\x64", "\x4D\x75\x7A\x69\x65\x6B\x20\x55\x69\x74",
                "\u97F3\u4E50\u5173\u95ED", "\x4D\xFA\x73\x69\x63\x61\x20\x41\x70\x61\x67\x61\x64\x6F",
                "\x4D\xFA\x73\x69\x63\x61\x20\x41\x70\x61\x67\x61\x64\x6F",
                "\x4D\xFA\x73\x69\x63\x61\x20\x41\x70\x61\x67\x61\x64\x6F",
                "\x4D\xFA\x73\x69\x63\x61\x20\x44\x65\x73\x6C\x69\x67\x61\x72",
                "\x4D\xFA\x73\x69\x63\x61\x20\x44\x65\x73\x6C\x69\x67\x61\x72",
                "\x4D\x75\x73\x69\x71\x75\x65\x20\x44\xE9\x73\x61\x63\x74\x69\x76\xE9",
                "\x4D\x75\x73\x69\x63\x61\x20\x44\x69\x73\x61\x74\x74\x69\x76\x6F",
                "\x4D\x75\x73\x69\x6B\x20\x41\x75\x73",
                "\u041C\u0443\u0437\u044B\u043A\u0430\x20\u0412\u044B\u043A\u043B",
                "\x4D\x75\x7A\x79\x6B\x61\x20\x57\x79\u0142\u0105\x63\x7A",
                "\x4D\xFC\x7A\x69\x6B\x20\x4B\x61\x70\x61\x6C\u0131"],
        d_Soundon: ["\x53\x6F\x75\x6E\x64\x20\x4F\x6E", "\x53\x6F\x75\x6E\x64\x20\x4F\x6E",
                "\x44\x68\x77\x61\x6E\x69\x20\x43\x61\x6C\x75", "\x47\x65\x6C\x75\x69\x64\x20\x41\x61\x6E",
                "\u97F3\u6548\u5F00\u542F", "\x53\x6F\x6E\x69\x64\x6F\x20\x45\x6E\x63\x65\x6E\x64\x69\x64\x6F",
                "\x53\x6F\x6E\x69\x64\x6F\x20\x45\x6E\x63\x65\x6E\x64\x69\x64\x6F",
                "\x53\x6F\x6E\x69\x64\x6F\x20\x45\x6E\x63\x65\x6E\x64\x69\x64\x6F",
                "\x53\x6F\x6D\x20\x4C\x69\x67\x61\x72", "\x53\x6F\x6D\x20\x4C\x69\x67\x61\x72",
                "\x53\x6F\x6E\x20\x41\x63\x74\x69\x76\xE9", "\x41\x75\x64\x69\x6F\x20\x41\x74\x74\x69\x76\x6F",
                "\x54\x6F\x6E\x20\x45\x69\x6E", "\u0417\u0432\u0443\u043A\x20\u0412\u043A\u043B",
                "\x44\u017A\x77\x69\u0119\x6B\x20\x57\u0142\u0105\x63\x7A", "\x53\x65\x73\x20\x41\xE7\u0131\x6B"],
        d_Soundoff: ["\x53\x6F\x75\x6E\x64\x20\x4F\x66\x66", "\x53\x6F\x75\x6E\x64\x20\x4F\x66\x66",
                "\x44\x68\x77\x61\x6E\x69\x20\x42\x61\x6E\x64", "\x47\x65\x6C\x75\x69\x64\x20\x55\x69\x74",
                "\u97F3\u6548\u5173\u95ED", "\x53\x6F\x6E\x69\x64\x6F\x20\x41\x70\x61\x67\x61\x64\x6F",
                "\x53\x6F\x6E\x69\x64\x6F\x20\x41\x70\x61\x67\x61\x64\x6F",
                "\x53\x6F\x6E\x69\x64\x6F\x20\x41\x70\x61\x67\x61\x64\x6F",
                "\x53\x6F\x6D\x20\x44\x65\x73\x6C\x69\x67\x61\x72", "\x53\x6F\x6D\x20\x44\x65\x73\x6C\x69\x67\x61\x72",
                "\x53\x6F\x6E\x20\x44\xE9\x73\x61\x63\x74\x69\x76\xE9",
                "\x41\x75\x64\x69\x6F\x20\x44\x69\x73\x61\x74\x74\x69\x76\x6F", "\x54\x6F\x6E\x20\x41\x75\x73",
                "\u0417\u0432\u0443\u043A\x20\u0412\u044B\u043A\u043B",
                "\x44\u017A\x77\x69\u0119\x6B\x20\x57\x79\u0142\u0105\x63\x7A",
                "\x53\x65\x73\x20\x4B\x61\x70\x61\x6C\u0131"],
        d_Undo: ["\x55\x6E\x64\x6F", "\x55\x6E\x64\x6F", "\x50\x75\x72\x76\x61\x76\x61\x74\x20\x6B\x61\x72\x65\x6E",
                "\x48\x65\x72\x73\x74\x65\x6C", "\u6094\u724C", "\x44\x65\x73\x68\x61\x63\x65\x72",
                "\x44\x65\x73\x68\x61\x63\x65\x72", "\x44\x65\x73\x68\x61\x63\x65\x72", "\x41\x6E\x75\x6C\x61\x72",
                "\x41\x6E\x75\x6C\x61\x72", "\x41\x6E\x6E\x75\x6C\x65\x72",
                "\x41\x6E\x6E\x75\x6C\x6C\x61\x20\x61\x7A\x69\x6F\x6E\x65", "\x52\xFC\x63\x6B\x67\xE4\x6E\x67\x69\x67",
                "\u041E\u0442\u043C\u0435\u043D\u0430", "\x43\x6F\x66\x6E\x69\x6A", "\x47\x65\x72\x69\x20\x61\x6C"],
        d_Submit: ["\x53\x75\x62\x6D\x69\x74", "\x53\x75\x62\x6D\x69\x74",
                "\x50\x72\x61\x73\x74\x75\x74\x61\x20\x6B\x61\x72\x61\x6E\x61", "\x56\x65\x72\x73\x74\x75\x75\x72",
                "\u63D0\u4EA4", "\x45\x6E\x76\x69\x61\x72", "\x45\x6E\x76\x69\x61\x72", "\x45\x6E\x76\x69\x61\x72",
                "\x53\x75\x62\x6D\x65\x74\x65\x72", "\x45\x6E\x76\x69\x61\x72", "\x53\x6F\x75\x6D\x65\x74\x74\x72\x65",
                "\x49\x6E\x76\x69\x61", "\xDC\x62\x65\x72\x6D\x69\x74\x74\x65\x6C\x6E",
                "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C", "\x50\x6F\x64\x61\x6A",
                "\x47\xF6\x6E\x64\x65\x72"],
        d_Clear: ["\x43\x6C\x65\x61\x72", "\x43\x6C\x65\x61\x72", "\x53\x61\x70\x68\x61", "\x4C\x65\x65\x67",
                "\u6E05\u9664", "\x4C\x69\x6D\x70\x69\x61\x72", "\x4C\x69\x6D\x70\x69\x61\x72",
                "\x4C\x69\x6D\x70\x69\x61\x72", "\x4C\x69\x6D\x70\x61\x72", "\x4C\x69\x6D\x70\x61\x72",
                "\x45\x66\x66\x61\x63\x65\x72", "\x53\x76\x75\x6F\x74\x61", "\x4C\xF6\x73\x63\x68\x65\x6E",
                "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C", "\x57\x79\x63\x7A\x79\u015B\u0107",
                "\x54\x65\x6D\x69\x7A\x6C\x65"],
        d_Restart: ["\x52\x65\x73\x74\x61\x72\x74", "\x52\x65\x73\x74\x61\x72\x74",
                "\x50\x75\x6E\x61\x68\x20\x73\x74\x61\x72\x74\x20\x6B\x61\x72\x65\x6E",
                "\x53\x74\x61\x72\x74\x20\x6F\x70\x6E\x69\x65\x75\x77", "\u91CD\u65B0\u5F00\u59CB",
                "\x52\x65\x69\x6E\x69\x63\x69\x61\x72", "\x52\x65\x69\x6E\x69\x63\x69\x61\x72",
                "\x52\x65\x69\x6E\x69\x63\x69\x61\x72", "\x52\x65\x69\x6E\x69\x63\x69\x61\x72",
                "\x52\x65\x69\x6E\x69\x63\x69\x61\x72", "\x52\x65\x64\xE9\x6D\x61\x72\x72\x65\x72",
                "\x52\x69\x63\x6F\x6D\x69\x6E\x63\x69\x61", "\x4E\x65\x75\x20\x73\x74\x61\x72\x74\x65\x6E",
                "\u0417\u0430\u043D\u043E\u0432\u043E",
                "\x5A\x61\x63\x7A\x6E\x69\x6A\x20\x70\x6F\x6E\x6F\x77\x6E\x69\x65",
                "\x59\x65\x6E\x69\x64\x65\x6E\x20\x42\x61\u015F\x6C\x61\x74"],
        d_Goal: ["\x47\x6F\x61\x6C\x3A", "\x47\x6F\x61\x6C\x3A", "\x4C\x61\x6B\u1E63\x79\x61", "\x44\x6F\x65\x6C\x3A",
                "\u76EE\u6807\x3A", "\x4D\x65\x74\x61\x3A", "\x4D\x65\x74\x61\x3A", "\x4D\x65\x74\x61\x3A",
                "\x4F\x62\x6A\x65\x74\x69\x76\x6F\x3A", "\x4F\x62\x6A\x65\x74\x69\x76\x6F\x3A", "\x42\x75\x74\x3A",
                "\x4F\x62\x69\x65\x74\x74\x69\x76\x6F\x3A", "\x5A\x69\x65\x6C\x3A", "\u0426\u0435\u043B\u044C\x3A",
                "\x43\x65\x6C\x3A", "\x41\x6D\x61\xE7\x3A"],
        d_Lives: ["\x4C\x69\x76\x65\x73\x3A", "\x4C\x69\x76\x65\x73\x3A", "\x4A\x69\x76\x61\x6E\x3A",
                "\x4C\x65\x76\x65\x6E\x73\x3A", "\u751F\u547D\x3A", "\x56\x69\x64\x61\x73\x3A",
                "\x56\x69\x64\x61\x73\x3A", "\x56\x69\x64\x61\x73\x3A", "\x56\x69\x64\x61\x73\x3A",
                "\x56\x69\x64\x61\x73\x3A", "\x56\x69\x65\x73\x3A", "\x56\x69\x74\x65\x3A", "\x4C\x65\x62\x65\x6E\x3A",
                "\u0416\u0438\u0437\u043D\u0438\x3A", "\u017B\x79\x63\x69\x61\x3A", "\x43\x61\x6E\x3A"],
        d_Bonus: ["\x42\x6F\x6E\x75\x73\x3A", "\x42\x6F\x6E\x75\x73\x3A", "\x42\x6F\x6E\x75\x73\x3A",
                "\x42\x6F\x6E\x75\x73\x3A", "\u5956\u52B1\uFF1A", "\x42\x6F\x6E\x6F\x3A", "\x42\x6F\x6E\x6F\x3A",
                "\x42\x6F\x6E\x6F\x3A", "\x42\xF3\x6E\x75\x73\x3A", "\x42\xF4\x6E\x75\x73\x3A",
                "\x42\x6F\x6E\x75\x73\x3A", "\x42\x6F\x6E\x75\x73\x3A", "\x42\x6F\x6E\x75\x73\x3A",
                "\u0411\u043E\u043D\u0443\u0441\x3A", "\x50\x72\x65\x6D\x69\x61\x3A", "\x42\x6F\x6E\x75\x73\x3A"],
        d_TotalScore: ["\x54\x6F\x74\x61\x6C\x20\x53\x63\x6F\x72\x65\x3A",
                "\x54\x6F\x74\x61\x6C\x20\x53\x63\x6F\x72\x65\x3A",
                "\u0915\u0941\u0932\x20\u0938\u094D\u0915\u094B\u0930\x3A",
                "\x54\x6F\x74\x61\x6C\x65\x20\x53\x63\x6F\x72\x65\x3A", "\u603B\u5206\uFF1A",
                "\x50\x75\x6E\x74\x75\x61\x63\x69\xF3\x6E\x20\x74\x6F\x74\x61\x6C\x3A",
                "\x50\x75\x6E\x74\x75\x61\x63\x69\xF3\x6E\x20\x74\x6F\x74\x61\x6C\x3A",
                "\x50\x75\x6E\x74\x75\x61\x63\x69\xF3\x6E\x20\x74\x6F\x74\x61\x6C\x3A",
                "\x50\x6F\x6E\x74\x75\x61\xE7\xE3\x6F\x20\x54\x6F\x74\x61\x6C\x3A",
                "\x50\x6F\x6E\x74\x75\x61\xE7\xE3\x6F\x20\x54\x6F\x74\x61\x6C\x3A",
                "\x53\x63\x6F\x72\x65\x20\x74\x6F\x74\x61\x6C\x3A",
                "\x50\x75\x6E\x74\x65\x67\x67\x69\x6F\x20\x74\x6F\x74\x61\x6C\x65\x3A",
                "\x47\x65\x73\x61\x6D\x74\x70\x75\x6E\x6B\x74\x7A\x61\x68\x6C\x3A",
                "\u041E\u0431\u0449\u0438\u0435\x20\u043E\u0447\u043A\u0438\x3A",
                "\x50\x75\x6E\x6B\x74\x61\x63\x6A\x61\x20\x6B\x6F\u0144\x63\x6F\x77\x61\x3A",
                "\x54\x6F\x70\x6C\x61\x6D\x20\x50\x75\x61\x6E\x3A"],
        d_Map: ["\x4D\x61\x70", "\x4D\x61\x70", "\x4E\x61\x6B\x73\x68\x61", "\x4B\x61\x61\x72\x74", "\u5730\u56FE",
                "\x4D\x61\x70\x61", "\x4D\x61\x70\x61", "\x4D\x61\x70\x61", "\x4D\x61\x70\x61", "\x4D\x61\x70\x61",
                "\x43\x61\x72\x74\x65", "\x4D\x61\x70\x70\x61", "\x4B\x61\x72\x74\x65",
                "\u041A\u0430\u0440\u0442\u0430", "\x4D\x61\x70\x61", "\x48\x61\x72\x69\x74\x61"],
        d_Next: ["\x4E\x65\x78\x74", "\x4E\x65\x78\x74", "\x41\x67\x61\x6C\x61", "\x56\x6F\x6C\x67\x65\x6E\x64\x65",
                "\u4E0B\u4E00\u4E2A", "\x53\x69\x67\x75\x69\x65\x6E\x74\x65", "\x53\x69\x67\x75\x69\x65\x6E\x74\x65",
                "\x53\x69\x67\x75\x69\x65\x6E\x74\x65", "\x53\x65\x67\x75\x69\x6E\x74\x65",
                "\x53\x65\x67\x75\x69\x6E\x74\x65", "\x53\x75\x69\x76\x61\x6E\x74", "\x41\x76\x61\x6E\x74\x69",
                "\x4E\xE4\x63\x68\x73\x74\x65", "\u0414\u0430\u043B\u0435\u0435", "\x4E\x61\x73\x74\u0119\x70\x6E\x61",
                "\x53\x6F\x6E\x72\x61\x6B\x69"],
        d_Previous: ["\x50\x72\x65\x76\x69\x6F\x75\x73", "\x50\x72\x65\x76\x69\x6F\x75\x73",
                "\x50\x69\x63\x68\x61\x6C\x61", "\x56\x6F\x72\x69\x67\x65", "\u4E0A\u4E00\u9875",
                "\x41\x6E\x74\x65\x72\x69\x6F\x72", "\x41\x6E\x74\x65\x72\x69\x6F\x72",
                "\x41\x6E\x74\x65\x72\x69\x6F\x72", "\x41\x6E\x74\x65\x72\x69\x6F\x72",
                "\x41\x6E\x74\x65\x72\x69\x6F\x72", "\x50\x72\xE9\x63\xE9\x64\x65\x6E\x74",
                "\x50\x72\x65\x63\x65\x64\x65\x6E\x74\x65", "\x56\x6F\x72\x68\x65\x72\x69\x67\x65",
                "\u041D\u0430\u0437\u0430\u0434", "\x50\x6F\x70\x72\x7A\x65\x64\x6E\x69\x61",
                "\xD6\x6E\x63\x65\x6B\x69"],
        d_Tiles: ["\x54\x69\x6C\x65\x73\x3A", "\x54\x69\x6C\x65\x73\x3A", "\x54\x69\x6C\x65\x73\x3A",
                "\x54\x69\x6C\x65\x73\x3A", "\x54\x69\x6C\x65\x73\x3A", "\x54\x69\x6C\x65\x73\x3A",
                "\x54\x69\x6C\x65\x73\x3A", "\x54\x69\x6C\x65\x73\x3A", "\x54\x69\x6C\x65\x73\x3A",
                "\x54\x69\x6C\x65\x73\x3A", "\x54\x69\x6C\x65\x73\x3A", "\x54\x69\x6C\x65\x73\x3A",
                "\x54\x69\x6C\x65\x73\x3A", "\x54\x69\x6C\x65\x73\x3A", "\x54\x69\x6C\x65\x73\x3A",
                "\x54\x69\x6C\x65\x73\x3A"],
        d_LevelSelect: ["\x4C\x65\x76\x65\x6C\x20\x53\x65\x6C\x65\x63\x74",
                "\x4C\x65\x76\x65\x6C\x20\x53\x65\x6C\x65\x63\x74",
                "\x53\x74\x61\x72\x61\x20\x6B\x61\x20\x63\x68\x61\x79\x61\x6E\x20\x6B\x61\x72\x65\x6E",
                "\x4B\x69\x65\x73\x20\x6C\x65\x76\x65\x6C", "\u5173\u5361\u9009\u62E9",
                "\x53\x65\x6C\x65\x63\x63\x69\x6F\x6E\x61\x72\x20\x6E\x69\x76\x65\x6C",
                "\x53\x65\x6C\x65\x63\x63\x69\x6F\x6E\x61\x72\x20\x6E\x69\x76\x65\x6C",
                "\x53\x65\x6C\x65\x63\x63\x69\x6F\x6E\x61\x72\x20\x6E\x69\x76\x65\x6C",
                "\x45\x73\x63\x6F\x6C\x68\x65\x72\x20\x6E\xED\x76\x65\x6C",
                "\x53\x65\x6C\x65\x63\x69\x6F\x6E\x61\x72\x20\x6E\xED\x76\x65\x6C",
                "\x53\xE9\x6C\x65\x63\x74\x69\x6F\x6E\x20\x64\x75\x20\x6E\x69\x76\x65\x61\x75",
                "\x53\x65\x6C\x65\x7A\x69\x6F\x6E\x65\x20\x6C\x69\x76\x65\x6C\x6C\x6F",
                "\x4C\x65\x76\x65\x6C\x20\x61\x75\x73\x77\xE4\x68\x6C\x65\x6E",
                "\u0412\u044B\u0431\u043E\u0440\x20\u0443\u0440\u043E\u0432\u043D\u044F",
                "\x57\x79\x62\x69\x65\x72\x7A\x20\x70\x6F\x7A\x69\x6F\x6D",
                "\x53\x65\x76\x69\x79\x65\x20\x73\x65\xE7\x69\x6D\x69"],
        d_Moves: ["\x4D\x6F\x76\x65\x73\x3A", "\x4D\x6F\x76\x65\x73\x3A", "\x43\x68\x61\x6C\x65\x6E\x3A",
                "\x5A\x65\x74\x74\x65\x6E\x3A", "\u8D70\u52A8\x3A", "\x4D\x6F\x76\x69\x6D\x69\x65\x6E\x74\x6F\x73\x3A",
                "\x4D\x6F\x76\x69\x6D\x69\x65\x6E\x74\x6F\x73\x3A", "\x4D\x6F\x76\x69\x6D\x69\x65\x6E\x74\x6F\x73\x3A",
                "\x4A\x6F\x67\x61\x64\x61\x73\x3A", "\x4A\x6F\x67\x61\x64\x61\x73\x3A",
                "\x44\xE9\x70\x6C\x61\x63\x65\x6D\x65\x6E\x74\x73\x3A",
                "\x53\x70\x6F\x73\x74\x61\x6D\x65\x6E\x74\x69\x3A",
                "\x4D\xF6\x67\x6C\x69\x63\x68\x65\x20\x53\x70\x69\x65\x6C\x7A\xFC\x67\x65\x3A",
                "\u0425\u043E\u0434\u044B\x3A", "\x52\x75\x63\x68\x79\x3A", "\x48\x61\x6D\x6C\x65\x3A"],
        d_gold: ["\x47\x6F\x6C\x64\x3A", "\x47\x6F\x6C\x64\x3A", "\x53\x6F\x6E\x61\x3A", "\x47\x6F\x75\x64\x3A",
                "\u91D1\u5E01\x3A", "\x4F\x72\x6F\x3A", "\x4F\x72\x6F\x3A", "\x4F\x72\x6F\x3A", "\x4F\x75\x72\x6F\x3A",
                "\x4F\x75\x72\x6F\x3A", "\x4F\x72\x3A", "\x4F\x72\x6F\x3A", "\x47\x6F\x6C\x64\x3A",
                "\u0417\u043E\u043B\u043E\u0442\u043E\x3A", "\x5A\u0142\x6F\x74\x6F\x3A", "\x41\x6C\x74\u0131\x6E\x3A"],
        d_Notenough: ["\x4E\x6F\x74\x20\x65\x6E\x6F\x75\x67\x68\x20\x47\x6F\x6C\x64",
                "\x4E\x6F\x74\x20\x65\x6E\x6F\x75\x67\x68\x20\x47\x6F\x6C\x64",
                "\x70\x72\x79\x61\x70\x74\x20\x6E\x61\x68\x69\x20\x53\x6F\x6E\x61",
                "\x4E\x69\x65\x74\x20\x67\x65\x6E\x6F\x65\x67\x20\x47\x6F\x75\x64", "\u91D1\u5E01\u4E0D\u591F",
                "\x4E\x6F\x20\x65\x73\x20\x73\x75\x66\x69\x63\x69\x65\x6E\x74\x65\x20\x4F\x72\x6F",
                "\x4E\x6F\x20\x65\x73\x20\x73\x75\x66\x69\x63\x69\x65\x6E\x74\x65\x20\x4F\x72\x6F",
                "\x4E\x6F\x20\x65\x73\x20\x73\x75\x66\x69\x63\x69\x65\x6E\x74\x65\x20\x4F\x72\x6F",
                "\x49\x6E\x73\x75\x66\x69\x63\x69\x65\x6E\x74\x65\x20\x4F\x75\x72\x6F",
                "\x49\x6E\x73\x75\x66\x69\x63\x69\x65\x6E\x74\x65\x20\x4F\x75\x72\x6F",
                "\x50\x61\x73\x20\x73\x75\x66\x66\x69\x73\x61\x6E\x74\x20\x4F\x72",
                "\x4F\x72\x6F\x20\x69\x6E\x73\x75\x66\x66\x69\x63\x69\x65\x6E\x74\x65\x20\x4F\x72\x6F",
                "\x4E\x69\x63\x68\x74\x20\x67\x65\x6E\x75\x67\x20\x47\x6F\x6C\x64",
                "\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E\x20\u0417\u043E\u043B\u043E\u0442\u043E",
                "\x5A\x61\x20\x6D\x61\u0142\x6F\x20\x5A\u0142\x6F\x74\x6F",
                "\x59\x65\x74\x65\x72\x6C\x69\x20\x64\x65\u011F\x69\x6C\x20\x41\x6C\x74\u0131\x6E"]
    };
    GameSound = {
        ua: navigator.userAgent,
        useWebAudioBGM: true,
        playSoundFX: true,
        soundHowl: null,
        musicHowl: null,
        musicMuted: false,
        soundMuted: false,
        loopSoundId: null,
        musicPlaying: false,
        loopPlaying: null,
        sprite: null,
        loadScript: bN,
        init: bO,
        ping: bP,
        playSound: bQ,
        playMusic: bR,
        stopMusic: bS,
        muteMusic: bT,
        muteSound: bU,
        setIdle: bV
    };
    document.addEventListener("\x67\x61\x6D\x65\x72\x65\x61\x64\x79", bW, false);;
})()