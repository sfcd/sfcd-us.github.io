webpackJsonp([2], {
  0: function (e, t, n) {
    e.exports = n(89);
  },
  36: function (e, t, n) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function r(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function a(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function o() {
      var e = l.DOCUMENT.createElement("p");
      (e.style.width = "100%"), (e.style.height = "200px");
      var t = l.DOCUMENT.createElement("div");
      (t.style.position = "absolute"),
        (t.style.top = "0px"),
        (t.style.left = "0px"),
        (t.style.visibility = "hidden"),
        (t.style.width = "200px"),
        (t.style.height = "150px"),
        (t.style.overflow = "hidden"),
        t.appendChild(e),
        l.BODY.appendChild(t);
      var n = e.offsetWidth;
      t.style.overflow = "scroll";
      var i = e.offsetWidth;
      return n == i && (i = t.clientWidth), l.BODY.removeChild(t), n - i;
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = function (e, t, n) {
        for (var i = !0; i; ) {
          var r = e,
            a = t,
            o = n;
          (i = !1), null === r && (r = Function.prototype);
          var s = Object.getOwnPropertyDescriptor(r, a);
          if (void 0 !== s) {
            if ("value" in s) return s.value;
            var u = s.get;
            if (void 0 === u) return;
            return u.call(o);
          }
          var l = Object.getPrototypeOf(r);
          if (null === l) return;
          (e = l), (t = a), (n = o), (i = !0), (s = l = void 0);
        }
      },
      u = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })();
    t.getScrollBarWidth = o;
    var l = n(11),
      c = n(21),
      d = i(c),
      f = n(37),
      h = (function () {
        function e() {
          a(this, e), (this.savedParameters = {});
        }
        return (
          u(e, [
            { key: "apply", value: function (e) {} },
            { key: "restore", value: function () {} },
          ]),
          e
        );
      })();
    t.AScrollBarStrategy = h;
    var p = (function (e) {
      function t() {
        a(this, t),
          s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this),
          (this.pageElement = (0, l.querySelector)(".page")),
          (this.navElement = (0, l.querySelector)(".nav")),
          (this.contactsView = (0, l.querySelector)(".open-menu__contacts"));
      }
      return (
        r(t, e),
        u(t, [
          {
            key: "restore",
            value: function () {
              (this.pageElement.style.marginRight =
                this.savedParameters.pageElementMargin),
                (this.navElement.style.left =
                  this.savedParameters.navElementLeft),
                (this.contactsView.style.marginLeft =
                  this.savedParameters.contactElementMargin);
            },
          },
          {
            key: "apply",
            value: function (e) {
              (this.savedParameters.pageElementMargin =
                this.pageElement.style.marginRight),
                (this.savedParameters.navElementLeft =
                  this.navElement.style.left),
                (this.savedParameters.contactElementMargin =
                  this.contactsView.style.marginLeft),
                (this.pageElement.style.marginRight = e + "px"),
                (this.navElement.style.left = -1 * e + "px"),
                (this.contactsView.style.marginLeft = (-1 * e) / 2 + "px");
            },
          },
        ]),
        t
      );
    })(h);
    t.DefaultWideScreenScrollBarStrategy = p;
    var v = (function (e) {
      function t() {
        a(this, t),
          s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this),
          (this.pageElement = (0, l.querySelector)(".page")),
          (this.contactsView = (0, l.querySelector)(".open-menu__contacts")),
          (this.navElement = (0, l.querySelector)(".nav"));
      }
      return (
        r(t, e),
        u(t, [
          {
            key: "restore",
            value: function () {
              (this.pageElement.style.marginRight =
                this.savedParameters.pageElementMargin),
                (this.contactsView.style.marginLeft =
                  this.savedParameters.contactElementMargin),
                (this.navElement.style.right =
                  this.savedParameters.navElementRight);
            },
          },
          {
            key: "apply",
            value: function (e) {
              (this.savedParameters.pageElementMargin =
                this.pageElement.style.marginRight),
                (this.savedParameters.contactElementMargin =
                  this.contactsView.style.marginLeft),
                (this.savedParameters.navElementRight =
                  this.navElement.style.right),
                (this.pageElement.style.marginRight = e + "px"),
                (this.contactsView.style.marginLeft = (-1 * e) / 2 + "px"),
                (this.navElement.style.right = e + "px");
            },
          },
        ]),
        t
      );
    })(h);
    t.DefaultSmallScreenScrollBarStrategy = v;
    var y = (function () {
      function e(t, n) {
        a(this, e),
          console.assert(
            t instanceof h || !(n instanceof h),
            "Scrollbar strategy doesn't implement ScrollBarStrategyInterface"
          ),
          (this.smallScreenStrategy = t),
          (this.wideScreenStrategy = n),
          (this.SMALLSCREENBREAKPOINT = 1308),
          (this.isWideScreenSet = null),
          (this.inFixedMode = null),
          (this.context = new m()),
          d.default.on("update", this.onResize.bind(this)),
          this.onResize();
      }
      return (
        u(e, [
          {
            key: "fix",
            value: function () {
              this.context.fix(), (this.inFixedMode = !0);
            },
          },
          {
            key: "unfix",
            value: function () {
              this.context.unfix(), (this.inFixedMode = !1);
            },
          },
          {
            key: "onResize",
            value: function () {
              this.isScreenWide()
                ? this.isWideScreenSet !== !0 &&
                  (this.context.reset(),
                  this.context.setStrategy(this.wideScreenStrategy),
                  (this.isWideScreenSet = !0),
                  null !== this.inFixedMode && this.inFixedMode && this.fix())
                : this.isWideScreenSet !== !1 &&
                  (this.context.reset(),
                  this.context.setStrategy(this.smallScreenStrategy),
                  (this.isWideScreenSet = !1),
                  null !== this.inFixedMode && this.inFixedMode && this.fix());
            },
          },
          {
            key: "isScreenWide",
            value: function () {
              return (0, f.width)() > this.SMALLSCREENBREAKPOINT;
            },
          },
        ]),
        e
      );
    })();
    t.ScrollBarFixer = y;
    var m = (function () {
      function e() {
        a(this, e),
          (this.strategy = null),
          (this.scrollbarWidth = o()),
          (this.stackContextCounter = 0);
      }
      return (
        u(e, [
          {
            key: "setStrategy",
            value: function (e) {
              this.strategy = e;
            },
          },
          {
            key: "fix",
            value: function () {
              0 !== this.scrollbarWidth &&
                null !== this.strategy &&
                (this._increase(),
                this._canFix() && this.strategy.apply(this.scrollbarWidth));
            },
          },
          {
            key: "unfix",
            value: function () {
              0 !== this.scrollbarWidth &&
                null !== this.strategy &&
                (this._decrease(),
                this._canUnfix() && this.strategy.restore(this.scrollbarWidth));
            },
          },
          {
            key: "reset",
            value: function () {
              null !== this.strategy &&
                this.strategy.restore(this.scrollbarWidth),
                (this.stackContextCounter = 0);
            },
          },
          {
            key: "_canFix",
            value: function () {
              return 1 === this.stackContextCounter;
            },
          },
          {
            key: "_canUnfix",
            value: function () {
              return 0 === this.stackContextCounter;
            },
          },
          {
            key: "_increase",
            value: function () {
              this.stackContextCounter++;
            },
          },
          {
            key: "_decrease",
            value: function () {
              0 !== this.stackContextCounter && this.stackContextCounter--;
            },
          },
        ]),
        e
      );
    })();
    (t.ScrollBarFixerContext = m),
      (t.default = function () {
        return new y(new v(), new p());
      });
  },
  37: function (e, t, n) {
    "use strict";
    function i() {
      return Math.max(
        a.BODY.scrollHeight,
        a.BODY.offsetHeight,
        a.HTML.clientHeight,
        a.HTML.scrollHeight,
        a.HTML.offsetHeight
      );
    }
    function r() {
      return Math.max(
        a.BODY.scrollWidth,
        a.BODY.offsetWidth,
        a.HTML.clientWidth,
        a.HTML.scrollWidth,
        a.HTML.offsetWidth
      );
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.height = i),
      (t.width = r);
    var a = n(10);
  },
  54: function (e, t, n) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      o = n(55),
      s = i(o),
      u = n(11),
      l = (function () {
        function e() {
          r(this, e),
            this.init(),
            s.default.on("update", this.onUpdate.bind(this));
        }
        return (
          a(e, [
            {
              key: "init",
              value: function () {
                var e = (0, u.querySelectorAll)("video");
                this.videoStates = [];
                for (var t in e)
                  this.videoStates[t] = { video: e[t], state: !1 };
              },
            },
            {
              key: "onUpdate",
              value: function (e) {
                e.isHidden ? this.disactivate() : this.activate();
              },
            },
            {
              key: "disactivate",
              value: function () {
                for (var e in this.videoStates) {
                  var t = this.videoStates[e];
                  t.video.paused || ((t.state = !0), t.video.pause());
                }
              },
            },
            {
              key: "activate",
              value: function () {
                for (var e in this.videoStates) {
                  var t = this.videoStates[e];
                  t.state && (t.video.play(), (t.state = !1));
                }
              },
            },
          ]),
          e
        );
      })();
    (t.default = l), (e.exports = t.default);
  },
  55: function (e, t, n) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function a(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      s = function (e, t, n) {
        for (var i = !0; i; ) {
          var r = e,
            a = t,
            o = n;
          (i = !1), null === r && (r = Function.prototype);
          var s = Object.getOwnPropertyDescriptor(r, a);
          if (void 0 !== s) {
            if ("value" in s) return s.value;
            var u = s.get;
            if (void 0 === u) return;
            return u.call(o);
          }
          var l = Object.getPrototypeOf(r);
          if (null === l) return;
          (e = l), (t = a), (n = o), (i = !0), (s = l = void 0);
        }
      },
      u = n(11),
      l = n(9),
      c = n(19),
      d = i(c),
      f = (function (e) {
        function t() {
          r(this, t),
            s(Object.getPrototypeOf(t.prototype), "constructor", this).call(
              this
            ),
            (this.hiddenProperty = null);
          var e = void 0;
          "undefined" != typeof u.DOCUMENT.hidden
            ? ((this.hiddenProperty = "hidden"), (e = "visibilitychange"))
            : "undefined" != typeof u.DOCUMENT.mozHidden
            ? ((this.hiddenProperty = "mozHidden"), (e = "mozvisibilitychange"))
            : "undefined" != typeof u.DOCUMENT.msHidden
            ? ((this.hiddenProperty = "msHidden"), (e = "msvisibilitychange"))
            : "undefined" != typeof u.DOCUMENT.webkitHidden &&
              ((this.hiddenProperty = "webkitHidden"),
              (e = "webkitvisibilitychange")),
            null !== this.hiddenProperty &&
              ((0, l.addEventListener)(u.DOCUMENT, e, this.onUpdate.bind(this)),
              this.onUpdate());
        }
        return (
          a(t, e),
          o(t, [
            {
              key: "onUpdate",
              value: function () {
                this.emit("update", {
                  isHidden: u.DOCUMENT[this.hiddenProperty],
                });
              },
            },
          ]),
          t
        );
      })(d.default);
    (t.CurrentTab = f), (t.default = new f());
  },
  59: function (e, t, n) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function a(e, t) {
      return (0, d.canSplitFiles)() ? new y(e, t) : new v(e, t);
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = (function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      return function (t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t;
      };
    })();
    t.default = a;
    var s = n(11),
      u = n(9),
      l = n(4),
      c = i(l),
      d = n(60),
      f = n(61),
      h = i(f),
      p = s.WINDOW.URL || s.WINDOW.webkitURL,
      v = (function () {
        function e(t, n) {
          r(this, e), (this.el = t), (this.urls = (0, d.buildUrls)(n));
        }
        return (
          o(e, [
            {
              key: "load",
              value: function () {
                var e = c.default.defer();
                return (this.el.src = this.urls[0]), e.resolve(), e.promise;
              },
            },
          ]),
          e
        );
      })(),
      y = (function () {
        function e(t, n) {
          r(this, e), (this.el = t), (this.urls = (0, d.buildUrls)(n));
        }
        return (
          o(e, [
            {
              key: "load",
              value: function () {
                for (
                  var e = this,
                    t = c.default.defer(),
                    n = [],
                    i = 0,
                    r = function (r) {
                      var a = r,
                        o = new h.default(e.urls[r]);
                      o.load().then(function (r) {
                        if (((n[a] = r), i++, i == e.urls.length)) {
                          (0, u.once)(e.el, "load", function () {
                            p.revokeObjectURL(e.el.src);
                          });
                          var o = new Blob(n, { type: "video/mp4" });
                          (e.el.src = p.createObjectURL(o)), t.resolve();
                        }
                      });
                    },
                    a = 0;
                  a < this.urls.length;
                  a++
                )
                  r(a);
                return t.promise;
              },
            },
          ]),
          e
        );
      })();
    e.exports = t.default;
  },
  60: function (e, t, n) {
    "use strict";
    function i() {
      var e =
          arguments.length <= 0 || void 0 === arguments[0]
            ? null
            : arguments[0],
        t =
          "undefined" != typeof o.WINDOW.devicePixelRatio
            ? o.WINDOW.devicePixelRatio
            : 1;
      return t > 1 || (null !== e && o.WINDOW.outerWidth > e);
    }
    function r(e) {
      if (!e.baseUrl || "string" != typeof e.baseUrl) return [];
      var t = "undefined" != typeof e.minWidth ? e.minWidth : null,
        n = i(t),
        r = e.baseUrl,
        o = 0;
      if (
        (n
          ? "undefined" != typeof e.parts2x && null !== e.parts2x
            ? ((o = parseInt(e.parts2x, 10)), (r = e.baseUrl + s))
            : "undefined" != typeof e.parts && null !== e.parts2x
            ? (o = parseInt(e.parts, 10))
            : (r = e.baseUrl + s)
          : "undefined" != typeof e.parts && null !== e.parts
          ? (o = parseInt(e.parts, 10))
          : "undefined" != typeof e.parts2x &&
            null !== e.parts &&
            ((o = parseInt(e.parts2x, 10)), (r = e.baseUrl + s)),
        o > 0 && a())
      ) {
        for (var l = [], c = 1; c <= o; c++) l.push(r + (".part" + c) + u);
        return l;
      }
      return [r + u];
    }
    function a() {
      var e = o.WINDOW.URL || o.WINDOW.webkitURL;
      return "undefined" != typeof o.WINDOW.Blob || "undefined" != typeof e;
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.buildUrls = r),
      (t.canSplitFiles = a);
    var o = n(11),
      s = "@2x",
      u = ".mp4";
  },
  61: function (e, t, n) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      o = n(62),
      s = i(o),
      u = n(4),
      l = i(u),
      c = (function () {
        function e(t) {
          r(this, e), (this.url = t);
        }
        return (
          a(e, [
            {
              key: "load",
              value: function () {
                var e = this,
                  t = l.default.defer(),
                  n = new s.default(this.url, o.METHODS.GET, {
                    responseType: "arraybuffer",
                    async: !0,
                  });
                return (
                  n.send().then(
                    function (e) {
                      t.resolve(e);
                    },
                    function () {
                      t.reject(new Error("Error on load video " + e.url));
                    }
                  ),
                  t.promise
                );
              },
            },
          ]),
          e
        );
      })();
    (t.default = c), (e.exports = t.default);
  },
  62: function (e, t, n) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function r(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function a(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = function (e, t, n) {
        for (var i = !0; i; ) {
          var r = e,
            a = t,
            o = n;
          (i = !1), null === r && (r = Function.prototype);
          var s = Object.getOwnPropertyDescriptor(r, a);
          if (void 0 !== s) {
            if ("value" in s) return s.value;
            var u = s.get;
            if (void 0 === u) return;
            return u.call(o);
          }
          var l = Object.getPrototypeOf(r);
          if (null === l) return;
          (e = l), (t = a), (n = o), (i = !0), (s = l = void 0);
        }
      },
      s = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      u = n(4),
      l = i(u),
      c = { GET: "get", POST: "post" };
    t.METHODS = c;
    var d = (function () {
      function e(t, n, i) {
        a(this, e),
          (this.url = t),
          (this.method = n.toUpperCase()),
          (this.options = i),
          (this.headers = i.headers),
          (this.async = i.async),
          (this.data = i.data);
      }
      return (
        s(e, [
          {
            key: "send",
            value: function () {
              var e = l.default.defer(),
                t = new XMLHttpRequest();
              t.open(this.method, this.url, this.async);
              for (var n in this.options)
                "undefined" != typeof t[n] && (t[n] = this.options[n]);
              for (var i in this.headers) {
                var r = this.headers[h];
                t.setRequestHeader(r.key, r.value);
              }
              return (
                (t.onload = function () {
                  t.status >= 200 && t.status < 400
                    ? e.resolve(t.response)
                    : e.reject(new f("Can't XHR " + JSON.stringify(t.url), t));
                }),
                (t.onerror = function () {
                  e.reject(new f("Can't XHR " + JSON.stringify(t.url)));
                }),
                (t.onprogress = function (t) {
                  e.notify(t.loaded / t.total);
                }),
                "POST" == this.method ? t.send(this.data) : t.send(),
                e.promise
              );
            },
          },
        ]),
        e
      );
    })();
    t.default = d;
    var f = (function (e) {
      function t(e, n) {
        a(this, t),
          o(Object.getPrototypeOf(t.prototype), "constructor", this).call(this),
          (this.name = "RequestError"),
          (this.message = e || "Can't do XHR"),
          (this.xhrObject = n);
      }
      return r(t, e), t;
    })(Error);
  },
  89: function (e, t, n) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var r = n(90),
      a = n(28),
      o = i(a),
      s = void 0;
    (s = o.default.mobile ? new r.MobileLandingPage() : new r.LandingPage()),
      s.run();
  },
  90: function (e, t, n) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      o = n(3),
      s = n(29),
      u = i(s),
      l = n(28),
      c = (i(l), n(44)),
      d = n(45),
      f = i(d),
      h = n(54),
      p = i(h),
      v = n(38),
      y = i(v),
      m = n(14),
      g = i(m),
      b = n(35),
      w = i(b),
      S = n(36),
      E = i(S),
      _ = n(33),
      k = i(_),
      O = n(91),
      x = i(O),
      M = n(92),
      P = i(M),
      W = n(93),
      L = i(W),
      j = n(34),
      T = i(j),
      C = (function () {
        function e() {
          r(this, e), (this.videos = new L.default());
        }
        return (
          a(e, [
            {
              key: "run",
              value: function () {
                (0, o.domReady)().then(this.onReady.bind(this));
              },
            },
            {
              key: "onReady",
              value: function () {
                var e = new E.default();
                T.default.trackExternalLinks();
                var t = (0, g.default)();
                t.on("update", function (t) {
                  "opening" === t.state
                    ? (e.fix(), u.default.lock())
                    : "close" === t.state && (e.unfix(), u.default.unlock());
                }),
                  this.videos.load(),
                  new y.default(),
                  (0, k.default)();
                var n = new w.default();
                t.on("update", function (e) {
                  "opening" === e.state || "open" === e.state
                    ? n.underPageMenu()
                    : n.underPage();
                }),
                  (0, x.default)(),
                  new p.default(),
                  new P.default();
              },
            },
          ]),
          e
        );
      })();
    t.LandingPage = C;
    var D = (function () {
      function e() {
        r(this, e),
          (0, f.default)(),
          c.htmlClassAdder.flush(),
          (this.pageMenu = null);
      }
      return (
        a(e, [
          {
            key: "onDomReady",
            value: function () {
              new y.default(!1, "html.tablet ", ".home-disciplines__icon"),
                T.default.trackExternalLinks(),
                (this.pageMenu = (0, g.default)());
              var e = new w.default();
              this.pageMenu.on("update", function (t) {
                "opening" === t.state
                  ? u.default.lock()
                  : "closing" === t.state && u.default.unlock(),
                  "opening" === t.state || "open" === t.state
                    ? e.underPageMenu()
                    : e.underPage();
              }),
                (0, x.default)();
            },
          },
          {
            key: "run",
            value: function () {
              (0, o.domReady)().then(this.onDomReady.bind(this));
            },
          },
        ]),
        e
      );
    })();
    t.MobileLandingPage = D;
  },
  91: function (e, t, n) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      o = n(11),
      s = n(16),
      u = n(9),
      l = n(62),
      c = i(l),
      d = n(31),
      f = i(d),
      h = n(34),
      p = i(h),
      v = "/email/",
      y = (function () {
        return (
          a(e, [
            {
              key: "onClick",
              value: function (e) {
                return (
                  (0, u.stop)(e),
                  (this.hasTryToSend = !0),
                  this.isValid() && !this.didSend && this.send(),
                  !1
                );
              },
            },
            {
              key: "onKeyUp",
              value: function (e) {
                this.fieldResizer.onType(e.target.parentNode);
              },
            },
            {
              key: "onBlur",
              value: function (e) {
                this.hasTryToSend && this.validate(e.target);
              },
            },
            {
              key: "isValid",
              value: function () {
                var e = !1;
                for (var t in this.inputElements) {
                  var n = this.inputElements[t],
                    i = this.validate(n);
                  i && (e = !0);
                }
                return !e;
              },
            },
            {
              key: "validate",
              value: function (e) {
                var t = !1,
                  n = e.value,
                  i = e.parentNode.classList;
                return (
                  i.contains("j-required") &&
                    ("" === n.trim()
                      ? (i.add("error"), (t = !0))
                      : i.remove("error")),
                  "email" === e.type &&
                    (/\S+@\S+\.\S+/.test(n.trim())
                      ? i.remove("error")
                      : (i.add("error"), (t = !0)),
                    this.isWrongEmailDomain &&
                      this.email !== e.value.trim() &&
                      (i.remove("errorWithMessage"),
                      (this.isWrongEmailDomain = !1))),
                  t
                );
              },
            },
            {
              key: "showError",
              value: function () {
                this.button.classList.add("landing-form__button_failed"),
                  this.errorMessageElement.classList.add("j-visible");
              },
            },
            {
              key: "showSuccess",
              value: function () {
                (this.emailPlaceholderElement.innerHTML =
                  this.emailInputElement.value),
                  this.successMessageElement.classList.add("j-visible"),
                  this.button.classList.add("landing-form__button_sent");
              },
            },
            {
              key: "showWrongDomainError",
              value: function () {
                this.emailInputElement.parentNode.classList.add(
                  "errorWithMessage",
                  "error"
                );
              },
            },
            {
              key: "reset",
              value: function () {
                (this.emailPlaceholderElement.innerHTML = ""),
                  this.button.classList.remove(
                    "landing-form__button_sent",
                    "landing-form__button_failed"
                  ),
                  this.errorMessageElement.classList.remove("j-visible"),
                  this.successMessageElement.classList.remove("j-visible"),
                  this.emailInputElement.parentNode.classList.remove(
                    "errorWithMessage",
                    "error"
                  );
              },
            },
            {
              key: "send",
              value: function () {
                var e = this,
                  t = new c.default(v, l.METHODS.POST, {
                    data: new FormData(this.root),
                    async: !0,
                  });
                (this.isWrongEmailDomain = !1),
                  t.send().then(
                    function () {
                      e.reset(),
                        e.showSuccess(),
                        (e.button.disabled = !0),
                        (e.didSend = !0),
                        p.default.formSent();
                    },
                    function (t) {
                      e.reset(),
                        t.xhrObject &&
                        400 === t.xhrObject.status &&
                        "sfkit.wrongEmailDomain" ===
                          JSON.parse(t.xhrObject.response).code
                          ? (e.showWrongDomainError(),
                            (e.isWrongEmailDomain = !0))
                          : e.showError(),
                        (e.email = e.emailInputElement.value);
                    }
                  );
              },
            },
          ]),
          e
        );
      })();
    t.FormView = y;
    var m = (function () {
      function e(t) {
        r(this, e), (this.form = t), (this.canvas = null), (this.ctx = null);
      }
      return (
        a(e, [
          {
            key: "onType",
            value: function (e) {
              var t = this.getWidthModel(e);
              this.isTextLongerThanInput(t)
                ? this.makeInputLonger(e)
                : this.isTextShorterThenInput(t) && this.makeInputShorter(e),
                t.textWidth > t.initInputWidth
                  ? this.canHideLabel(t)
                    ? this.hideLabel(e)
                    : this.canShowLabel(t) && this.showLabel(e)
                  : this.showLabel(e);
            },
          },
          {
            key: "canHideLabel",
            value: function (e) {
              return (
                e.actualInputWidthWithPaddings - e.labelPadding <= e.textWidth
              );
            },
          },
          {
            key: "canShowLabel",
            value: function (e) {
              return (
                e.actualInputWidthWithPaddings - e.labelPadding > e.textWidth
              );
            },
          },
          {
            key: "isTextLongerThanInput",
            value: function (e) {
              return (
                e.textWidth > e.initInputWidth &&
                e.textWidth > e.actualInputWidth
              );
            },
          },
          {
            key: "isTextShorterThenInput",
            value: function (e) {
              return (
                e.actualInputWidth > e.initInputWidth &&
                e.textWidth < e.initInputWidth
              );
            },
          },
          {
            key: "makeInputLonger",
            value: function (e) {
              e.classList.add("j-long-string");
            },
          },
          {
            key: "makeInputShorter",
            value: function (e) {
              e.classList.remove("j-long-string");
            },
          },
          {
            key: "hideLabel",
            value: function (e) {
              e.classList.add("j-hidden-label");
            },
          },
          {
            key: "showLabel",
            value: function (e) {
              e.classList.remove("j-hidden-label");
            },
          },
          {
            key: "initCanvas",
            value: function () {
              (this.canvas = o.DOCUMENT.createElement("canvas")),
                (this.canvas.style.display = "none"),
                o.BODY.appendChild(this.canvas),
                (this.canvas.width = 0),
                (this.canvas.height = 0),
                (this.ctx = this.canvas.getContext("2d"));
              var e = getComputedStyle(this.form.inputElements[0]),
                t = void 0;
              (t =
                "" !== e.font
                  ? e.font
                  : e.fontStyle +
                    " " +
                    e.fontVariant +
                    " " +
                    e.fontWeight +
                    " " +
                    (e.fontSize + "/" + e.lineHeight + " " + e.fontFamily)),
                (this.ctx.font = t);
            },
          },
          {
            key: "getWidthModel",
            value: function (e) {
              var t = (0, o.querySelector)("input", e),
                n = (0, o.querySelector)("label", e),
                i = (0, f.default)(e),
                r = (0, s.width)(t),
                a = i.initInputWidth;
              return (
                "undefined" == typeof a &&
                  ((a = r), (0, d.setAttrs)(e, { initInputWidth: a })),
                {
                  initInputWidth: parseInt(a),
                  actualInputWidth: r,
                  actualInputWidthWithPaddings: (0, s.width)(t, !0),
                  textWidth: Math.round(this.measureStringLength(t)) - 3,
                  labelPadding: (0, s.width)(n) + 100,
                }
              );
            },
          },
          {
            key: "measureStringLength",
            value: function (e) {
              return (
                null === this.canvas && this.initCanvas(),
                this.ctx.measureText(e.value).width
              );
            },
          },
        ]),
        e
      );
    })();
    t.default = function () {
      return new y();
    };
  },
  92: function (e, t, n) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      o = n(29),
      s = i(o),
      u = n(11),
      l = (function () {
        function e() {
          r(this, e),
            (this.ARROW_HIDDEN_CLASS = "arrow-link_hidden"),
            (this.attractArrow = (0, u.querySelector)(".arrow-link")),
            this.attractArrow &&
              s.default.on("update", this.onScrollerUpdate.bind(this));
        }
        return (
          a(e, [
            {
              key: "onScrollerUpdate",
              value: function (e) {
                this.hideAttractArrow(),
                  s.default.removeListener("update", this.onScrollerUpdate);
              },
            },
            {
              key: "hideAttractArrow",
              value: function () {
                this.attractArrow.classList.add(this.ARROW_HIDDEN_CLASS);
              },
            },
          ]),
          e
        );
      })();
    (t.default = l), (e.exports = t.default);
  },
  93: function (e, t, n) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      o = n(11),
      s = n(31),
      u = i(s),
      l = n(59),
      c = i(l),
      d = (function () {
        function e() {
          r(this, e),
            (this.videosList = (0, o.querySelectorAll)(".j-autoloaded-video")),
            (this.videoElements = (0, o.querySelectorAll)("video"));
        }
        return (
          a(e, [
            {
              key: "load",
              value: function () {
                var e = this.videosList.slice();
                for (var t in e) {
                  var n = (0, c.default)(
                    e[t],
                    JSON.parse((0, u.default)(e[t], "options").options)
                  );
                  n.load();
                }
              },
            },
            {
              key: "stopAll",
              value: function () {
                var e = this.videoElements;
                for (var t in e) e[t].pause();
              },
            },
          ]),
          e
        );
      })();
    (t.default = d), (e.exports = t.default);
  },
});
