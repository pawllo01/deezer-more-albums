"use strict";
(self.webpackJsonpDeezer = self.webpackJsonpDeezer || []).push([
  [1670],
  {
    U9ZG: (e, t, n) => {
      n.d(t, { A: () => B });
      n("ndNi");
      var a,
        r,
        i,
        l = n("k6Di"),
        o = n("79Ja"),
        c = n("UHbJ"),
        s = n("udpn"),
        u = n("5hh5"),
        d = (n("iUT5"), n("17r/"), n("q1tI")),
        m = n("Ty5D"),
        p = n("/MKj"),
        A = n("cXQW"),
        E = n("NSet"),
        y = n("HmE0"),
        v = n("6K8D"),
        f = n("EPmj"),
        h = n("ZUSG"),
        b = n("5Loq"),
        g = n("Wp0Y"),
        I = n("5G9X"),
        T = n("LjZa"),
        P = n("tZCQ"),
        _ = n("TqF5"),
        S = n("0oT0"),
        L = n("2EvD"),
        O = n("Jfek"),
        x = n("eerp"),
        N = n("g1Fm"),
        D = n("cFUB"),
        w = n("AfN5");
      function k(e, t, n) {
        return (t = (0, s.A)(t)), (0, c.A)(e, C() ? Reflect.construct(t, n || [], (0, s.A)(e).constructor) : t.apply(e, n));
      }
      function C() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (e) {}
        return (C = function () {
          return !!e;
        })();
      }
      var R = (function (e) {
        function t(e, n) {
          var a;
          return (0, l.A)(this, t), ((a = k(this, t, [e, n]))._onEdit = a._onEdit.bind(a)), (a._onShare = a._onShare.bind(a)), (a._onGoToAccount = a._onGoToAccount.bind(a)), a;
        }
        return (
          (0, u.A)(t, e),
          (0, o.A)(t, [
            {
              key: "shouldComponentUpdate",
              value: function (e) {
                return this.props.id !== e.id || this.props.type !== e.type || this.props.action.length !== e.action.length;
              },
            },
            {
              key: "render",
              value: function () {
                var e = this;
                return P.A.isAllowed("revamp2023")
                  ? d.createElement(
                      A.e,
                      { as: "ul", size: "medium", gap: "spacing.xs", spacing: "0" },
                      this.props.action.map(function (t) {
                        return "function" == typeof e["_render" + (0, N.A)(t)] ? d.createElement(E.az, { as: "li", key: t }, e["_render" + (0, N.A)(t)]()) : null;
                      })
                    )
                  : d.createElement(
                      "ul",
                      { className: "list-actions" },
                      this.props.action.map(function (t) {
                        return "function" == typeof e["_render" + (0, N.A)(t)] ? d.createElement("li", { className: "list-actions-item", key: t }, e["_render" + (0, N.A)(t)]()) : null;
                      })
                    );
              },
            },
            {
              key: "_renderFavorite",
              value: function () {
                var e = this.props,
                  t = e.context,
                  n = e.id,
                  a = e.type;
                return d.createElement(S.A, { id: n, type: a, action: D.Hj.FAVORITE, context: t });
              },
            },
            {
              key: "_renderPlay",
              value: function () {
                var e = this.props,
                  t = e.id,
                  n = e.type,
                  a = e.context,
                  r = n === I.Ay.Song ? { radio: !0, forceAsFirstTrack: !0 } : {};
                return d.createElement(S.A, { action: D.Hj.PLAY, color: D.cW.PRIMARY, context: a, dzPlayerOptions: r, id: t, type: n === I.Ay.Song ? w.Kk.TRACK_MIX : n, wordingType: D.Hn.FULL });
              },
            },
            {
              key: "_renderShuffle",
              value: function () {
                var e = this.props,
                  t = e.id,
                  n = e.type,
                  a = e.context;
                return d.createElement(S.A, { id: t, type: n, action: D.Hj.SHUFFLE, color: D.cW.PRIMARY, wordingType: D.Hn.FULL, context: a });
              },
            },
            {
              key: "_renderShare",
              value: function () {
                return d.createElement(y.K0, { icon: a || (a = d.createElement(f.l, null)), onClick: this._onShare, variant: "ghost", "aria-label": (0, g.AP)("Partager") });
              },
            },
            {
              key: "_renderEdit",
              value: function () {
                return d.createElement(v.m, { label: (0, g.AP)("Editer") }, d.createElement(y.K0, { "aria-haspopup": !0, "aria-label": (0, g.AP)("generic_action_edit_web"), icon: r || (r = d.createElement(h.r, null)), onClick: this._onEdit, variant: "ghost" }));
              },
            },
            {
              key: "_renderOptions",
              value: function () {
                var e = this.props,
                  t = e.context,
                  n = e.data,
                  a = e.id,
                  r = e.type,
                  l = { anchor: d.createElement(y.K0, { "aria-haspopup": !0, "aria-label": (0, g.AP)("generic_action_viewmenu_web"), icon: i || (i = d.createElement(b.j, null)), variant: "ghost" }), context: t, id: String(a), data: n, placement: "right", type: r };
                return d.createElement(L.A, l);
              },
            },
            {
              key: "_onShare",
              value: function () {
                var e = this.props,
                  t = e.id,
                  n = e.data,
                  a = e.context,
                  r = e.type;
                this.props.openModal({ name: O.DN, props: { componentType: O.Wg.directShareMasthead, context: a, data: n, id: t, type: (0, x.A)(r) } });
              },
            },
            {
              key: "_onEdit",
              value: function () {
                this.props.edit();
              },
            },
            {
              key: "_onGoToAccount",
              value: function () {
                this.props.history.push("/account");
              },
            },
          ])
        );
      })(d.Component);
      R.defaultProps = { data: {}, action: ["favorite", "share", "options"], edit: T.A };
      const B = (0, m.y)((0, p.Ng)(null, { openModal: _.qf })(R));
    },
    Q6dJ: (e, t, n) => {
      n.d(t, { A: () => m });
      n("dfIA");
      var a = n("q1tI"),
        r = n("juqV"),
        i = n("GkjM"),
        l = n("3JOg"),
        o = n("rYh+");
      const c = { element: "ZzbWE" };
      var s,
        u = n("+RX7"),
        d = n("NSet");
      const m = function (e) {
        var t = e.date,
          n = e.title,
          m = e.subtitle,
          p = e.concertId,
          A = e.onClick,
          E = e.calendarIconSize,
          y = void 0 === E ? "sm" : E,
          v = e.className,
          f = e.locationState,
          h = "/concert/".concat(p);
        return a.createElement(l.A, null, a.createElement(i.A, { role: "button", to: { pathname: h, state: f }, onClick: A, className: (0, r.A)(c.element, v) }, a.createElement(u.V, { date: new Date(t), size: y }), a.createElement(d.az, { className: c.cell, flex: "1", flexDirection: "column", px: "spacing.m" }, a.createElement(d.DZ, { variant: "heading.xs", noOfLines: 1, mb: "spacing.xs", width: "100%" }, n), m && a.createElement(d.EY, { variant: "body.s.default", color: "text.neutral.secondary.default", noOfLines: 1, pb: "spacing.xs", width: "100%" }, m)), s || (s = a.createElement(o.A, { size: "16" }))));
      };
    },
    wGgI: (e, t, n) => {
      n.d(t, { qT: () => b, VX: () => g, y8: () => h, Ay: () => T });
      n("ndNi");
      var a = n("k6Di"),
        r = n("79Ja"),
        i = n("UHbJ"),
        l = n("udpn"),
        o = n("5hh5"),
        c = (n("17r/"), n("q1tI")),
        s = n("juqV"),
        u = n("HmE0"),
        d = n("yCtO");
      function m(e, t, n) {
        return (t = (0, l.A)(t)), (0, i.A)(e, p() ? Reflect.construct(t, n || [], (0, l.A)(e).constructor) : t.apply(e, n));
      }
      function p() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (e) {}
        return (p = function () {
          return !!e;
        })();
      }
      var A = (function (e) {
        function t() {
          return (0, a.A)(this, t), m(this, t, arguments);
        }
        return (
          (0, o.A)(t, e),
          (0, r.A)(t, [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.children,
                  n = e.isDisabled,
                  a = e.isSelected,
                  r = (0, s.A)("dropdown-item", { hidden: n, "is-selected": a });
                return c.createElement("li", { className: r }, t);
              },
            },
          ])
        );
      })(c.Component);
      A.defaultProps = { isDisabled: !1, isSelected: !1 };
      const E = A;
      var y;
      function v(e, t, n) {
        return (t = (0, l.A)(t)), (0, i.A)(e, f() ? Reflect.construct(t, n || [], (0, l.A)(e).constructor) : t.apply(e, n));
      }
      function f() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (e) {}
        return (f = function () {
          return !!e;
        })();
      }
      var h = "sm",
        b = "left",
        g = "right",
        I = (function (e) {
          function t(e) {
            var n;
            return (0, a.A)(this, t), ((n = v(this, t, [e]))._onToggle = n._onToggle.bind(n)), (n._onClose = n._onClose.bind(n)), (n.state = { label: e.children[e.selected].props.label || e.label, isOpen: !1 }), n;
          }
          return (
            (0, o.A)(t, e),
            (0, r.A)(
              t,
              [
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = e.children,
                      n = e.align,
                      a = e.size,
                      r = e.overflow,
                      i = e.isDisabled,
                      l = this.state,
                      o = l.label,
                      m = l.isOpen,
                      p = (0, s.A)("dropdown", { "dropdown-active": this.state.isOpen }),
                      A = (0, s.A)("dropdown-menu", { "is-right": n === g, "is-overflow": r });
                    return c.createElement(
                      "span",
                      { className: p },
                      c.createElement(u.$n, { "data-testid": "dropdown_".concat(o), size: a, rightIcon: y || (y = c.createElement(d.e, null)), onClick: this._onToggle, variant: "outline", isDisabled: i }, o),
                      c.createElement(
                        "ul",
                        {
                          className: A,
                          "aria-hidden": !m,
                          onClick: this._onClose,
                          onMouseDown: function (e) {
                            return e.stopPropagation();
                          },
                        },
                        m ? t : null
                      )
                    );
                  },
                },
                {
                  key: "_onClose",
                  value: function () {
                    var e = this;
                    this.setState({ isOpen: !1 }, function () {
                      document.removeEventListener("mousedown", e._onClose);
                    });
                  },
                },
                {
                  key: "_onToggle",
                  value: function () {
                    var e = this,
                      t = !this.state.isOpen;
                    this.setState({ isOpen: t }, function () {
                      t && document.addEventListener("mousedown", e._onClose);
                    });
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromProps",
                  value: function (e) {
                    return { label: e.children[e.selected].props.label || e.label };
                  },
                },
              ]
            )
          );
        })(c.Component);
      (I.defaultProps = { label: null, size: h, align: b, className: null, selected: 0, overflow: !1, isDisabled: !1 }), (I.Item = E);
      const T = I;
    },
    aEwM: (e, t, n) => {
      n.d(t, { A: () => c });
      var a,
        r = n("q1tI"),
        i = n("KVgY"),
        l = n("RGaU"),
        o = n("5xmB");
      const c = function (e) {
        var t = e.placeholder,
          n = e.hasMore,
          c = e.loadMore,
          s = e.children;
        return s ? ("function" == typeof c ? r.createElement(i.A, { hasMore: n, loadMore: c, loader: a || (a = r.createElement(l.k, { key: "loader" })) }, s) : r.createElement(r.Fragment, null, s)) : r.createElement(o.A, t);
      };
    },
    "JKL/": (e, t, n) => {
      n.d(t, { A: () => i });
      var a = n("q1tI"),
        r = n("NSet");
      const i = function (e) {
        var t = e.children,
          n = e.className,
          i = void 0 === n ? "" : n;
        return a.createElement(r.az, { mt: "spacing.xl", mb: "spacing.2xl", className: i }, t);
      };
    },
    Ozpl: (e, t, n) => {
      n.d(t, { A: () => l });
      var a = n("q1tI"),
        r = n("juqV"),
        i = n("sk1u");
      const l = function (e) {
        var t = e.children,
          n = e.className,
          l = void 0 === n ? "" : n,
          o = (0, r.A)(i.A.infoItem, l);
        return a.createElement("li", { className: o }, t);
      };
    },
    WY4A: (e, t, n) => {
      n.d(t, { A: () => i });
      var a = n("q1tI"),
        r = n("NSet");
      const i = function (e) {
        var t = e.children,
          n = e.className,
          i = void 0 === n ? "" : n;
        return a.createElement(r.so, { as: "ul", mt: "spacing.xs", color: "text.neutral.secondary.default", className: i }, t);
      };
    },
    "oq/a": (e, t, n) => {
      n.d(t, { A: () => i });
      var a = n("q1tI"),
        r = n("NSet");
      const i = function (e) {
        var t = e.children,
          n = e.className,
          i = void 0 === n ? "" : n;
        return a.createElement(r.so, { justifyContent: "center", direction: "column", flex: "1", className: i }, t);
      };
    },
    WQvr: (e, t, n) => {
      n.d(t, { A: () => i });
      var a = n("q1tI"),
        r = n("NSet");
      const i = function (e) {
        var t = e.children,
          n = e.className,
          i = void 0 === n ? "" : n;
        return a.createElement(r.so, { alignItems: "center", gap: "spacing.s", "data-testid": "masthead-subtitle", className: i }, t);
      };
    },
    wRgy: (e, t, n) => {
      n.d(t, { A: () => u });
      var a = n("BkpH"),
        r = n("q1tI"),
        i = n("juqV"),
        l = n("NSet"),
        o = n("9OcB"),
        c = n("sk1u"),
        s = ["className", "children"];
      const u = function (e) {
        var t = e.className,
          n = void 0 === t ? "" : t,
          u = e.children,
          d = (0, a.A)(e, s),
          m = (0, i.A)(c.A.thumbnail, n);
        return r.createElement(l.az, { className: m }, r.createElement(o.A, d, u));
      };
    },
    zJSK: (e, t, n) => {
      n.d(t, { A: () => i });
      var a = n("q1tI"),
        r = n("NSet");
      const i = function (e) {
        var t = e.children,
          n = e.className,
          i = void 0 === n ? "" : n;
        return a.createElement(r.DZ, { color: "text.neutral.primary.default", variant: "display.m", mb: "spacing.xl", noOfLines: 2, wordBreak: "break-word", className: i }, t);
      };
    },
    "2NhJ": (e, t, n) => {
      n.d(t, { Ay: () => i });
      var a = n("q1tI"),
        r = n("NSet");
      const i = function (e) {
        var t = e.children,
          n = e.className,
          i = void 0 === n ? "" : n;
        return a.createElement(r.so, { gap: "spacing.2xl", className: i, "data-testid": "masthead" }, t);
      };
    },
    sdUN: (e, t, n) => {
      n.d(t, { A: () => L });
      var a = n("q1tI"),
        r = n("zThL"),
        i = (n("mRbW"), n("5G9X"));
      function l(e) {
        var t = e.type,
          n = e.data,
          l = n.SNG_TITLE,
          o = n.ART_NAME,
          c = n.ALB_TITLE,
          s = n.TITLE,
          u = n.SUBTITLE,
          d = n.SHOW_NAME,
          m = n.EPISODE_TITLE,
          p = (0, r.A)(
            (0, r.A)(
              (0, r.A)(
                (0, r.A)(
                  (0, r.A)(
                    (0, r.A)(
                      (0, r.A)({}, i.Ay.Track, function () {
                        return l;
                      }),
                      i.Ay.Show,
                      function () {
                        return d;
                      }
                    ),
                    i.Ay.Playlist,
                    function () {
                      return s;
                    }
                  ),
                  i.Ay.Artist,
                  function () {
                    return o;
                  }
                ),
                i.Ay.Album,
                function () {
                  return c;
                }
              ),
              i.Ay.Episode,
              function () {
                return m;
              }
            ),
            i.Ay.Smarttracklist,
            function () {
              return "".concat(s, " ").concat(u);
            }
          )[t];
        return p ? a.createElement("meta", { itemProp: "name", content: p() }) : null;
      }
      n("DhvS"), n("dfIA");
      var o = n("Wp0Y");
      function c(e) {
        var t = e.type,
          n = e.data,
          l = n.SHOW_DESCRIPTION,
          c = n.DESCRIPTION,
          s = n.EPISODE_DESCRIPTION,
          u = n.ALB_TITLE,
          d = n.ART_NAME,
          m = n.ORIGINAL_RELEASE_DATE,
          p = n.PHYSICAL_RELEASE_DATE,
          A = n.TITLE,
          E = n.SUBTITLE,
          y = (0, r.A)(
            (0, r.A)(
              (0, r.A)(
                (0, r.A)(
                  (0, r.A)({}, i.Ay.Show, function () {
                    return l;
                  }),
                  i.Ay.Playlist,
                  function () {
                    return c;
                  }
                ),
                i.Ay.Album,
                function () {
                  return (0, o.AP)("%s de %s - AnnĂŠe de production %s", { sprintf: [u, d, new Date(m || p || Date.now()).getFullYear()] });
                }
              ),
              i.Ay.Episode,
              function () {
                return s;
              }
            ),
            i.Ay.Smarttracklist,
            function () {
              return c || "".concat(A, " ").concat(E);
            }
          )[t];
        return y ? a.createElement("p", { className: "hidden", itemProp: "description" }, y()) : null;
      }
      var s = n("hz5U");
      function u(e) {
        var t = e.type,
          n = e.data;
        return a.createElement("meta", { itemProp: "image", content: s.A.getImageSrcForData(t, n, 200, 200) });
      }
      var d = n("iooo");
      function m(e) {
        var t = e.type,
          n = e.data,
          l = n.SNG_ID,
          o = n.SHOW_ID,
          c = n.PLAYLIST_ID,
          s = n.ART_ID,
          u = n.ALB_ID,
          m = n.EPISODE_ID,
          p = n.SMARTTRACKLIST_ID,
          A = (0, r.A)(
            (0, r.A)(
              (0, r.A)(
                (0, r.A)(
                  (0, r.A)(
                    (0, r.A)(
                      (0, r.A)({}, i.Ay.Track, function () {
                        return "/track/".concat(l);
                      }),
                      i.Ay.Show,
                      function () {
                        return "/show/".concat(o);
                      }
                    ),
                    i.Ay.Playlist,
                    function () {
                      return "/playlist/".concat(c);
                    }
                  ),
                  i.Ay.Artist,
                  function () {
                    return "/artist/".concat(s);
                  }
                ),
                i.Ay.Album,
                function () {
                  return "/album/".concat(u);
                }
              ),
              i.Ay.Episode,
              function () {
                return "/episode/".concat(m);
              }
            ),
            i.Ay.Smarttracklist,
            function () {
              return "/smarttracklist/".concat(p);
            }
          )[t];
        return A ? a.createElement("meta", { itemProp: "url", content: (0, d.jd)(A()) }) : null;
      }
      n("/RZc"), n("/F+/"), n("ZnLO");
      function p(e) {
        var t = e.type,
          n = e.data.EPISODE_PUBLISHED_TIMESTAMP,
          l = (0, r.A)({}, i.Ay.Episode, function () {
            return new Date(n.replace(" ", "T") + "Z").toISOString();
          })[t];
        return l ? a.createElement("meta", { itemProp: "datePublished", content: l() }) : null;
      }
      function A(e) {
        var t = e.type,
          n = e.data.DURATION,
          l = (0, r.A)(
            (0, r.A)({}, i.Ay.Track, function () {
              return "PT".concat(Math.floor(n / 60), "M").concat(n % 60, "S");
            }),
            i.Ay.Episode,
            function () {
              return "PT".concat(Math.floor(n / 60), "M").concat(n % 60, "S");
            }
          )[t];
        return l ? a.createElement("meta", { itemProp: "duration", content: l() }) : null;
      }
      function E(e) {
        var t = e.type,
          n = e.data,
          l = n.EPISODES,
          o = n.NB_SONG,
          c = (0, r.A)(
            (0, r.A)({}, i.Ay.Show, function () {
              return l.total;
            }),
            i.Ay.Smarttracklist,
            function () {
              return o;
            }
          )[t];
        return c ? a.createElement("meta", { itemProp: "numTracks", content: c() }) : null;
      }
      n("uuq2"), n("lM/j"), n("8kcB");
      function y(e) {
        var t = e.type,
          n = e.data.ARTISTS,
          l = (0, r.A)(
            (0, r.A)({}, i.Ay.Album, function () {
              return n || [];
            }),
            i.Ay.Track,
            function () {
              return n || [];
            }
          )[t];
        if (!l) return null;
        var o = l().find(function (e) {
          return 0 === Number(e.ROLE_ID) || 5 === Number(e.ROLE_ID);
        });
        return o ? a.createElement("div", { itemProp: "byArtist", itemScope: "itemscope", itemType: "http://schema.org/MusicGroup" }, a.createElement("meta", { itemProp: "url", content: "/artist/".concat(o.ART_ID) }), a.createElement("meta", { itemProp: "name", content: o.ART_NAME })) : null;
      }
      n("iUT5");
      var v,
        f,
        h,
        b,
        g,
        I,
        T = n("/MKj"),
        P = n("3WcA"),
        _ = n("xobL");
      const S = (0, T.Ng)(function (e) {
        var t = e.user;
        return { userLang: (0, _.Z0)(t) };
      })(function (e) {
        var t = e.type,
          n = e.data,
          l = n.SHOW_ID,
          o = n.ART_ID,
          c = n.ALB_ID,
          s = n.SMARTTRACKLIST_ID,
          u = e.userLang,
          d = (0, r.A)(
            (0, r.A)(
              (0, r.A)(
                (0, r.A)({}, i.Ay.Show, function () {
                  return "/show/".concat(l, "?autoplay=true");
                }),
                i.Ay.Artist,
                function () {
                  return "/artist/".concat(o, "?autoplay=true");
                }
              ),
              i.Ay.Album,
              function () {
                return "/album/".concat(c, "?autoplay=true");
              }
            ),
            i.Ay.Smarttracklist,
            function () {
              return "/smarttracklist/".concat(s, "?autoplay=true");
            }
          )[t];
        return d
          ? a.createElement(
              "div",
              { key: "action", itemProp: "potentialAction", itemScope: !0, itemType: "http://schema.org/ListenAction" },
              a.createElement("div", { itemProp: "target", itemScope: !0, itemType: "http://schema.org/EntryPoint" }, a.createElement("meta", { itemProp: "urlTemplate", content: "https://".concat(P.default.get("host_website_ssl")).concat(d()) }), v || (v = a.createElement("meta", { itemProp: "actionPlatform", content: "http://schema.org/DesktopWebPlatform" })), f || (f = a.createElement("meta", { itemProp: "actionPlatform", content: "http://schema.org/IOSPlatform" })), h || (h = a.createElement("meta", { itemProp: "actionPlatform", content: "http://schema.org/AndroidPlatform" })), b || (b = a.createElement("meta", { itemProp: "actionPlatform", content: "http://schema.googleapis.com/GoogleAudioCast" })), g || (g = a.createElement("meta", { itemProp: "actionPlatform", content: "http://schema.googleapis.com/GoogleVideoCast" })), a.createElement("meta", { itemProp: "inLanguage", content: u })),
              a.createElement(
                "div",
                { itemProp: "expectsAcceptanceOf", itemScope: !0, itemType: "http://schema.org/Offer" },
                I || (I = a.createElement("meta", { itemProp: "category", content: "subscription" })),
                P.default.get("country_opened").map(function (e) {
                  return a.createElement("div", { key: e, itemProp: "eligibleRegion", itemScope: !0, itemType: "http://schema.org/Country" }, a.createElement("meta", { itemProp: "name", content: e }));
                })
              )
            )
          : null;
      });
      function L(e) {
        return a.createElement("div", null, a.createElement(l, e), a.createElement(c, e), a.createElement(u, e), a.createElement(m, e), a.createElement(p, e), a.createElement(A, e), a.createElement(E, e), a.createElement(y, e), a.createElement(S, e));
      }
    },
    "61mP": (e, t, n) => {
      n.d(t, { G: () => a });
      var a = (function (e) {
        return (e.BIOGRAPHY = "biography"), (e.DISCOGRAPHY = "discography"), (e.RELATED_ARTIST = "related_artist"), (e.RELATED_PLAYLIST = "related_playlist"), (e.TOP_TRACK = "top_track"), (e.ARTIST = "artists"), (e.TRACK = "tracks"), (e.CONCERT = "concert"), (e.CONCERTS = "concerts"), (e.FAVORITES = "me"), e;
      })({});
    },
    "5xmB": (e, t, n) => {
      n.d(t, { B: () => o, A: () => c });
      var a = n("q1tI"),
        r = n("juqV"),
        i = n("Wp0Y");
      const l = { img: "wPuzu", text: "sIMmz", nocontent: "k4rH3", private: "OXBI2", recommendation: "IMAtw" };
      var o = (function (e) {
        return (e.NO_CONTENT = "nocontent"), (e.PRIVATE = "private"), (e.RECOMMENDATION = "recommendation"), e;
      })({});
      const c = function (e) {
        var t = e.img,
          n = void 0 === t ? o.NO_CONTENT : t,
          c = e.wording,
          s = void 0 === c ? (0, i.AP)("Aucun rĂŠsultat.") : c,
          u = e.className;
        return a.createElement("div", { className: (0, r.A)(l.root, u) }, a.createElement("div", { className: (0, r.A)(l.img, l[n]) }), a.createElement("div", { className: l.text }, s));
      };
    },
    "/G5K": (e, t, n) => {
      n.d(t, { A: () => m });
      var a = n("4/LG"),
        r = n("q1tI"),
        i = n("juqV"),
        l = n("/MKj"),
        o = n("xobL"),
        c = n("x4+n"),
        s = n("BJtZ");
      const u = { root: "MaxOe", label: "xogtX", "is-active": "oSYze", isActive: "oSYze", "is-disabled": "nRbxm", isDisabled: "nRbxm", "is-restricted": "K50Uu", isRestricted: "K50Uu" };
      var d = n("iiSH");
      const m = function (e) {
        var t = e.date,
          n = e.dataTestId,
          m = (0, l.d4)(function (e) {
            return [(0, o.mI)({ SERVER_TIMESTAMP: (0, o.mS)(e.user), clientTimestampDelta: (0, o.gE)(e.user) })];
          }),
          p = (0, a.A)(m, 1)[0],
          A = (0, i.A)(u.label, (0, s.A)(u));
        return r.createElement("div", { className: u.root }, r.createElement("span", { className: A, "data-testid": n }, t > 0 ? (0, c.E)(t, p) : d.fs));
      };
    },
    xLtY: (e, t, n) => {
      n.d(t, { A: () => u });
      n("OPc6"), n("8kcB");
      var a = n("q1tI"),
        r = n("S6U4"),
        i = n("lXQd"),
        l = n("Wp0Y"),
        o = n("NSet"),
        c = n("Z9kq"),
        s = n("xCFc");
      const u = function (e) {
        var t = e.placeholder,
          n = void 0 === t ? (0, l.AP)("search_action_searchwithintracks_web") : t,
          u = a.useContext(s.Gt),
          d = u.manageItems,
          m = u.loadingStatus;
        if (!d || "function" != typeof d.action.filter) return null;
        var p = (0, r.A)(function (e) {
          d.action.filter((0, i.A)(e, "target.value", ""));
        }, 500);
        return a.createElement(o.so, { flex: "1", ms: "spacing.m", my: 0, w: { md: "375px", base: "320px" } }, a.createElement(c.D, { isDisabled: m.isLoadingAll, onChange: p, size: "medium", placeholder: n }));
      };
    },
    ZH8F: (e, t, n) => {
      n.d(t, { e: () => r, g: () => a });
      var a = (function (e) {
          return (e.FILTER = "table-filter"), (e.PLAY = "table-play"), e;
        })({}),
        r = function (e, t) {
          return new CustomEvent(e, { detail: t });
        };
    },
    dalA: (e, t, n) => {
      n.d(t, { A: () => r });
      var a = n("q1tI");
      const r = function (e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : document,
          i = function (e) {
            var a = e.detail;
            a.context.ID === n.ID && a.context.TYPE === n.TYPE && t(a);
          };
        return (
          a.useEffect(function () {
            return r && r.addEventListener
              ? (r.addEventListener(e, i),
                function () {
                  r.removeEventListener(e, i);
                })
              : function () {};
          }),
          { eventName: e, handleEvent: i }
        );
      };
    },
    Eiyd: (e, t, n) => {
      n.d(t, { A: () => u });
      var a = n("q1tI"),
        r = n("H/eQ"),
        i = n("N67Q"),
        l = n("0oT0"),
        o = n("1h7S"),
        c = n("cFUB"),
        s = n("ZH8F");
      const u = function () {
        var e = a.useContext(o.PK),
          t = e.containerData,
          n = e.context,
          u = e.id,
          d = e.type,
          m = (0, a.useCallback)(
            function () {
              document.dispatchEvent((0, s.e)(s.g.PLAY, { context: n }));
            },
            [n]
          );
        return (
          (0, a.useEffect)(
            function () {
              return (
                r.A.subscribe("EVENT.TRACKLIST.togglePlayAll", m),
                function () {
                  r.A.unsubscribe("EVENT.TRACKLIST.togglePlayAll", m);
                }
              );
            },
            [m]
          ),
          t.NB_SONG || t.NB_EPISODES ? a.createElement(i.A, { testId: "play" }, a.createElement(l.A, { id: u, items: t.items || void 0, type: d, onClick: m, context: n, action: c.Hj.PLAY_SMALL, color: c.cW.PRIMARY, wordingType: c.Hn.STANDARD })) : null
        );
      };
    },
    "1h7S": (e, t, n) => {
      n.d(t, { Ay: () => p, PK: () => d });
      n("U7DL"), n("OPc6"), n("Tjdq"), n("OeVk"), n("8z5Z"), n("VmXY"), n("nTc2"), n("9Y+k"), n("8kcB"), n("Y4Uu");
      var a = n("zThL"),
        r = n("4/LG"),
        i = n("pxHn"),
        l = n("Jfek");
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                (0, a.A)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var s = (0, i.q)({ name: "ToolbarContext" }),
        u = (0, r.A)(s, 3),
        d = (u[0], u[1], u[2]),
        m = { context: { ID: "", TYPE: "" }, id: "", isEditable: !1, isShareable: !1, isLoveable: !1, isDownloadable: !1, isSponsored: !1, shareType: l.Gb.song, type: "" };
      const p = function (e) {
        return c(c({}, m), e);
      };
    },
    N67Q: (e, t, n) => {
      n.d(t, { A: () => r });
      var a = n("q1tI");
      const r = function (e) {
        var t = e.children,
          n = e.testId;
        return n ? a.createElement("div", { "data-testid": n }, t) : a.createElement("div", null, t);
      };
    },
    Dteb: (e, t, n) => {
      n.r(t), n.d(t, { default: () => La });
      var a,
        r,
        i,
        l = n("zThL"),
        o = n("4/LG"),
        c = (n("aGIQ"), n("17r/"), n("lM/j"), n("/F+/"), n("U7DL"), n("OPc6"), n("Tjdq"), n("OeVk"), n("8z5Z"), n("VmXY"), n("nTc2"), n("9Y+k"), n("8kcB"), n("XFml"), n("Y4Uu"), n("q1tI")),
        s = n("/MKj"),
        u = n("X6oL"),
        d = n("H/eQ"),
        m = n("g1Ko"),
        p = n("gibH"),
        A = n("k6Di"),
        E = n("79Ja"),
        y = n("UHbJ"),
        v = n("udpn"),
        f = n("5hh5"),
        h = (n("p8tg"), n("GAJO"), n("ndNi"), n("/0S2"), n("Ty5D")),
        b = n("Wp0Y"),
        g = n("5G9X"),
        I = n("iooo"),
        T = n("p/gB"),
        P = n("AY3M"),
        _ = n("tZCQ"),
        S = (n("iUT5"), n("8m9I")),
        L = n("1Pdy"),
        O = n("AfN5"),
        x = n("STEc"),
        N = n("DjLa"),
        D = (N.WR.PLAYLIST, { TITLE: { SIZE: x.uq.Full }, PARENT: { BREAKPOINT: x.x1.md, SIZE: x.uq.PercentXs }, DURATION: { SIZE: x.uq.sm }, POPULARITY: { BREAKPOINT: x.x1.xl, SIZE: x.uq.sm }, SELECT: { ALIGN: x.uP.Right, SIZE: x.uq.sm } }),
        w = n("xCFc"),
        k = n("NSet"),
        C = n("xLtY"),
        R = n("BP9I"),
        B = n("1Uwb"),
        G = n("hIIJ"),
        M = (n("mRbW"), n("9D62")),
        j = n("lXQd"),
        F = n("o+h5"),
        H = n("pQlO"),
        Y = n("0oF4"),
        U = n("r4LN"),
        z = n("wkd/"),
        Z = n("LGn+"),
        K = n("tgyz"),
        q = n("CxZw"),
        V = n("SehT");
      function X(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function W(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? X(Object(n), !0).forEach(function (t) {
                (0, l.A)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : X(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var J = function (e) {
        var t = e.data,
          n = e.index,
          l = e.style,
          o = (0, w.$A)(),
          s = o.context,
          u = o.container,
          d = o.shouldExplicitBeHidden,
          m = (0, K.A)(s, u, !0),
          p = m.playerStatus,
          A = m.play,
          E = m.isItemLoadedInPlayer,
          y = t.toDisplay[n],
          v = y.item.hasExplicitLyrics && d,
          f = (0, c.useCallback)(
            function (e, n) {
              A({ playIndex: n, playItems: t.toPlay, isTrackActive: e });
            },
            [t.toPlay, A]
          ),
          h = (0, c.useCallback)(
            function (e) {
              A({ notify: !1, playIndex: e, playItems: t.toPlay, playLyrics: !0 });
            },
            [t.toPlay, A]
          );
        return c.createElement(B.A.Row, { style: l, uuid: y.uuid, id: y.item.id, index: y.index, isActive: E(y.item) && p.isSameContext, isReadable: y.item.right === q.A.READABLE, isRestrictedByExplicit: v, type: y.item.type, isDraggable: !0 }, c.createElement(Z.A, { size: D.TITLE.SIZE }, c.createElement(Z.A.Play, { ariaLabel: (0, b.AP)("generic_action_playsongXbyartistX_web", { sprintf: [y.item.title, (0, j.A)(y, "item.artists[0].name", "")] }), hasExplicitCover: y.item.parent.hasExplicitCover, onPlayItems: f, pictureUrl: y.item.cover(F.r4).url }), a || (a = c.createElement(Z.A.Download, null)), c.createElement(Z.A.PlayableLabel, { hasExplicitLyrics: y.item.hasExplicitLyrics, label: "".concat(y.item.number || 0, ". ").concat(y.item.title), onPlayItems: f, tooltipText: (0, V.Y)(y.item, d) }), c.createElement(B.A.IconGroup, null, c.createElement(Z.A.ShowLyrics, { item: y.item, lyricsId: y.item.lyricsId, onPlayLyrics: h }), r || (r = c.createElement(Z.A.AddToFeedback, null)), c.createElement(Z.A.OpenContextMenu, { item: y.item }))), c.createElement(B.A.CellBody, { breakpoint: D.PARENT.BREAKPOINT, size: D.PARENT.SIZE }, c.createElement(U.A, { links: [W(W({}, y.item.parent), {}, { type: g.Ay.Album })] })), c.createElement(B.A.CellBody, { size: D.DURATION.SIZE }, c.createElement(H.A, { duration: y.item.duration })), c.createElement(B.A.CellBody, { breakpoint: D.POPULARITY.BREAKPOINT, size: D.POPULARITY.SIZE }, c.createElement(Y.A, { rank: y.item.popularity })), c.createElement(B.A.CellBody, { align: D.SELECT.ALIGN, size: D.SELECT.SIZE }, i || (i = c.createElement(z.A, null))));
      };
      const Q = (0, c.memo)(J, M.t7);
      var $,
        ee,
        te,
        ne = n("ZH8F"),
        ae = n("dalA"),
        re = n("ftFY"),
        ie = n("7u2F");
      const le = function (e) {
        var t = e.context,
          n = e.id,
          a = e.items,
          r = e.shouldExplicitBeHidden,
          i = void 0 !== r && r,
          l = { id: n, type: O.Kk.TOP_ARTIST },
          o = (0, re.A)(n, a, t),
          s = o.manageItems,
          u = o.tableItems,
          d = (0, ie.A)(u, t),
          m = (0, K.A)(t, l, !0),
          p = m.playerStatus,
          A = m.play;
        (0, ae.A)(
          ne.g.PLAY,
          function () {
            A({ playItems: u.toPlay });
          },
          t
        );
        var E = (0, w.Ay)({ container: l, context: t, manageItems: s, playerStatus: p, select: d, shouldExplicitBeHidden: i });
        return c.createElement(
          w.ru,
          { value: E },
          c.createElement(k.so, { alignItems: "center", mb: "spacing.2xl" }, c.createElement(G.A, { title: (0, b.AP)("Top titres") }), $ || ($ = c.createElement(C.A, null))),
          c.createElement(
            B.A,
            { rowCount: u.toDisplay.length },
            c.createElement(B.A.Header, null, c.createElement(B.A.CellHead, { size: D.TITLE.SIZE, sortPath: "item.title" }, (0, b.AP)("datagrid_title_trackUPP_web")), c.createElement(B.A.CellHead, { breakpoint: D.PARENT.BREAKPOINT, size: D.PARENT.SIZE, sortPath: "item.parent.name" }, (0, b.AP)("datagrid_title_albumUPP_web")), c.createElement(B.A.CellHead, { ariaLabel: (0, b.AP)("sortingmenu_title_duration_web"), size: D.DURATION.SIZE, sortPath: "item.duration" }, ee || (ee = c.createElement(S.m, null))), c.createElement(B.A.CellHead, { breakpoint: D.POPULARITY.BREAKPOINT, size: D.POPULARITY.SIZE, sortPath: "item.popularity" }, (0, b.AP)("datagrid_title_popularityabbrevUPP_web")), c.createElement(B.A.CellHead, { align: D.SELECT.ALIGN, size: D.SELECT.SIZE }, te || (te = c.createElement(R.A, null)))),
            c.createElement(
              B.A.Body,
              null,
              u.toDisplay.map(function (e, t) {
                return c.createElement(Q, { data: u, key: e.uuid, index: t, style: { height: L.F4.md } });
              })
            )
          )
        );
      };
      n("WpbS"), N.WR.PLAYLIST;
      var oe,
        ce,
        se,
        ue = { TITLE: { SIZE: x.uq.Full }, PARENT: { BREAKPOINT: x.x1.md, SIZE: x.uq.PercentXs }, DATE: { BREAKPOINT: x.x1.md, SIZE: x.uq.xl }, DURATION: { SIZE: x.uq.sm }, POPULARITY: { BREAKPOINT: x.x1.xl, SIZE: x.uq.sm }, SELECT: { ALIGN: x.uP.Right, SIZE: x.uq.sm } },
        de = n("FSqQ"),
        me = (n("dfIA"), n("/G5K")),
        pe = n("LOQS"),
        Ae = function (e) {
          pe.A.log({ type: "cdp", eventName: "view_all_clicked", customAttributes: { screen_view_name: "artist", screen_view_id_type: "artist", screen_view_id: String(e), section_name: "artist_favorite_items" } });
        };
      function Ee(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function ye(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ee(Object(n), !0).forEach(function (t) {
                (0, l.A)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ee(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var ve = function (e) {
        var t = e.data,
          n = e.index,
          a = e.style,
          r = (0, w.$A)(),
          i = r.context,
          l = r.container,
          o = r.shouldExplicitBeHidden,
          s = (0, K.A)(i, l),
          u = s.playerStatus,
          d = s.play,
          m = s.isItemLoadedInPlayer,
          p = t.toDisplay[n],
          A = p.item.hasExplicitLyrics && o,
          E = function (e, a) {
            var r, i, l;
            (d({ playIndex: a, playItems: t.toPlay, isTrackActive: e, playSeveralTracks: !0 }), e) || ((i = null === (r = t.toPlay[n].artist) || void 0 === r ? void 0 : r.id), (l = t.toPlay[n].id), i && pe.A.log({ type: "cdp", eventName: "play_clicked", eventVersion: 2, customAttributes: { screen_view_name: "artist_favorite_items", screen_view_id_type: "artist", screen_view_id: i, play_type: "direct_play", item_id: l, item_type: "track" } }));
          };
        return c.createElement(
          B.A.Row,
          { style: a, uuid: p.uuid, id: p.item.id, index: p.index, isActive: m(p.item) && u.isSameContext, isReadable: p.item.right === q.A.READABLE, isRestrictedByExplicit: A, type: p.item.type, isDraggable: !0 },
          c.createElement(
            Z.A,
            { size: ue.TITLE.SIZE },
            c.createElement(Z.A.Play, { ariaLabel: (0, b.AP)("generic_action_playsongXbyartistX_web", { sprintf: [p.item.title, (0, j.A)(p, "item.artists[0].name", "")] }), hasExplicitCover: p.item.parent.hasExplicitCover, onPlayItems: E, pictureUrl: p.item.cover(F.r4).url }),
            oe || (oe = c.createElement(Z.A.Download, null)),
            c.createElement(Z.A.PlayableLabel, { hasExplicitLyrics: p.item.hasExplicitLyrics, label: p.item.title, onPlayItems: E, tooltipText: (0, V.Y)(p.item, o) }),
            c.createElement(
              B.A.IconGroup,
              null,
              c.createElement(Z.A.ShowLyrics, {
                item: p.item,
                lyricsId: p.item.lyricsId,
                onPlayLyrics: function (e) {
                  d({ notify: !1, playIndex: e, playItems: t.toPlay, playLyrics: !0, playSeveralTracks: !0 });
                },
              }),
              ce || (ce = c.createElement(Z.A.AddToFeedback, null)),
              c.createElement(Z.A.OpenContextMenu, { item: p.item })
            )
          ),
          c.createElement(B.A.CellBody, { breakpoint: ue.PARENT.BREAKPOINT, size: ue.PARENT.SIZE }, c.createElement(U.A, { links: [ye(ye({}, p.item.parent), {}, { type: g.Ay.Album })] })),
          c.createElement(B.A.CellBody, { breakpoint: ue.DATE.BREAKPOINT, size: ue.DATE.SIZE }, c.createElement(me.A, { date: new Date(p.item.date).getTime(), dataTestId: "added" })),
          c.createElement(B.A.CellBody, { size: ue.DURATION.SIZE }, c.createElement(H.A, { duration: p.item.duration })),
          c.createElement(B.A.CellBody, { breakpoint: ue.POPULARITY.BREAKPOINT, size: ue.POPULARITY.SIZE }, c.createElement(Y.A, { rank: p.item.popularity })),
          c.createElement(B.A.CellBody, { align: ue.SELECT.ALIGN, size: ue.SELECT.SIZE }, se || (se = c.createElement(z.A, null)))
        );
      };
      const fe = (0, c.memo)(ve, M.t7);
      var he,
        be,
        ge,
        Ie = n("A2sV");
      function Te(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function Pe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Te(Object(n), !0).forEach(function (t) {
                (0, l.A)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Te(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      const _e = function (e) {
        var t,
          n,
          a,
          r = e.id,
          i = e.shouldExplicitBeHidden,
          l = void 0 !== i && i,
          o = (0, Ie.gWG)({ variables: { artistId: r, first: 20, cursor: null }, fetchPolicy: "cache-and-network" }),
          s = o.previousData,
          u = o.data,
          d = o.loading,
          m = o.fetchMore,
          p = u || s,
          A = Boolean(null == p || null === (t = p.me) || void 0 === t || null === (t = t.userFavorites.byArtist) || void 0 === t || null === (t = t.tracks) || void 0 === t ? void 0 : t.pageInfo.hasNextPage);
        c.useEffect(
          function () {
            var e;
            A && m({ variables: { cursor: null == p || null === (e = p.me) || void 0 === e || null === (e = e.userFavorites.byArtist) || void 0 === e || null === (e = e.tracks) || void 0 === e ? void 0 : e.pageInfo.endCursor } });
          },
          [A, m, null == p || null === (n = p.me) || void 0 === n || null === (n = n.userFavorites.byArtist) || void 0 === n || null === (n = n.tracks) || void 0 === n ? void 0 : n.pageInfo.endCursor]
        ),
          c.useEffect(
            function () {
              !(function (e) {
                pe.A.log({ type: "cdp", eventName: "screen_view", customAttributes: { screen_view_name: "artist_favorite_items", screen_view_id_type: "artist", screen_view_id: e } });
              })(r);
            },
            [r]
          );
        var E = { ID: r, TYPE: "artist_collected_tracks_page" },
          y = { id: r, type: O.Kk.TRACK },
          v = (0, K.A)(E, y).playerStatus,
          f =
            null != p && null !== (a = p.me) && void 0 !== a && null !== (a = a.userFavorites) && void 0 !== a && null !== (a = a.byArtist) && void 0 !== a && null !== (a = a.tracks) && void 0 !== a && a.edges
              ? (p.me.userFavorites.byArtist.tracks.edges || []).reduce(function (e, t) {
                  return t.node && e.push(Pe(Pe({}, t.node), {}, { date: t.favoritedAt })), e;
                }, [])
              : [],
          h = (0, re.A)(r, f, E),
          g = h.manageItems,
          I = h.tableItems,
          T = (0, ie.A)(I, E);
        if (d && !p) return he || (he = c.createElement(de.A, null));
        var P = (0, w.Ay)({ container: y, context: E, manageItems: g, select: T, shouldExplicitBeHidden: l, playerStatus: v });
        return c.createElement(
          w.ru,
          { value: P },
          c.createElement(
            B.A,
            { rowCount: I.toDisplay.length },
            c.createElement(B.A.Header, null, c.createElement(B.A.CellHead, { size: ue.TITLE.SIZE, sortPath: "item.title" }, (0, b.AP)("datagrid_title_trackUPP_web")), c.createElement(B.A.CellHead, { breakpoint: ue.PARENT.BREAKPOINT, size: ue.PARENT.SIZE, sortPath: "item.parent.name" }, (0, b.AP)("datagrid_title_albumUPP_web")), c.createElement(B.A.CellHead, { breakpoint: ue.DATE.BREAKPOINT, size: ue.DATE.SIZE, sortPath: "item.date" }, (0, b.AP)("datagrid_title_addedtrackUPP_web")), c.createElement(B.A.CellHead, { ariaLabel: (0, b.AP)("sortingmenu_title_duration_web"), size: ue.DURATION.SIZE, sortPath: "item.duration" }, be || (be = c.createElement(S.m, null))), c.createElement(B.A.CellHead, { breakpoint: ue.POPULARITY.BREAKPOINT, size: ue.POPULARITY.SIZE, sortPath: "item.popularity" }, c.createElement("span", null, (0, b.AP)("datagrid_title_popularityabbrevUPP_web"))), c.createElement(B.A.CellHead, { align: ue.SELECT.ALIGN, size: ue.SELECT.SIZE }, ge || (ge = c.createElement(R.A, null)))),
            c.createElement(
              B.A.Body,
              null,
              I.toDisplay.map(function (e, t) {
                return c.createElement(fe, { data: I, key: e.uuid, index: t, style: { height: L.F4.md } });
              })
            )
          )
        );
      };
      var Se,
        Le = n("1h7S"),
        Oe = n("Eiyd"),
        xe = n("cXQW");
      const Ne = function (e) {
        var t = e.id,
          n = e.context,
          a = (0, s.d4)(function (e) {
            return (0, m.MD)(e.entities, { id: t });
          }),
          r = (0, Le.Ay)({ containerData: { items: a.data }, context: n, id: t, type: g.Ay.TopArtistFull });
        return c.createElement(Le.PK.Provider, { value: r }, Se || (Se = c.createElement(xe.e, { gap: "spacing.xs", spacing: 0, "data-testid": "toolbar" }, c.createElement(Oe.A, null))));
      };
      n("Ojuz");
      var De = n("mk5l"),
        we = n("Q6dJ"),
        ke = n("5xmB"),
        Ce = n("Z9kq");
      const Re = "Wktsb",
        Be = "lvRs2",
        Ge = "axvzv";
      var Me = n("ailv");
      const je = function (e) {
        var t = e.artistId,
          n = e.concerts,
          a = (0, u.z1)(),
          r = (0, c.useState)(""),
          i = (0, o.A)(r, 2),
          l = i[0],
          s = i[1],
          d = (0, c.useCallback)(
            function (e) {
              s(e.target.value);
            },
            [s]
          ),
          m = (function (e) {
            if (!l || "" === l) return n;
            var t = e.filter(function (e) {
              var t;
              return !(!(0, De.A)(e.name.toLowerCase()).includes((0, De.A)(l.toLowerCase())) && !(0, De.A)(null === (t = e.location) || void 0 === t ? void 0 : t.toLowerCase()).includes((0, De.A)(l.toLowerCase())));
            });
            return t.length || a.trackEvent({ event: "click", eventaction: "search", eventcategory: "artist-concert", eventlabel: "no-result" }), t;
          })(n);
        return c.createElement(
          "div",
          { className: "catalog-tab-discography" },
          c.createElement(
            "div",
            { className: "container" },
            c.createElement(
              "div",
              { className: Re },
              c.createElement(G.A, { className: Be }, (0, b.AP)("eventpage_action_alltourdates_web")),
              c.createElement(
                "div",
                { className: Ge },
                c.createElement(Ce.D, {
                  onChange: d,
                  size: "small",
                  placeholder: (0, b.AP)("eventsubpage_text_searchbycitycountryvenueorevent_web"),
                  onFocus: function () {
                    return a.trackEvent({ event: "click", eventaction: "search", eventcategory: "artist-concert", eventlabel: "click-to-search" });
                  },
                })
              )
            ),
            m.length
              ? m.map(function (e, n) {
                  return c.createElement(we.A, {
                    concertId: e.id,
                    title: e.name,
                    date: e.date,
                    subtitle: e.location,
                    key: e.id,
                    onClick: function () {
                      return (function (e, n) {
                        (0, Me.uV)({ action: Me.rc.CLICK_CONCERT, screen_view_id_type: Me.v5.ARTIST, screen_view_id: t, screen_view_name: Me.Xw.ARTIST, item_type: (0, Me.U$)(e.types), concert_ranking: n, item_id: e.id });
                      })(e, n);
                    },
                    locationState: { referringArtistId: t },
                  });
                })
              : c.createElement(ke.A, { wording: (0, b.AP)("errormessage_text_sorryeventcouldnotbefound_web") })
          )
        );
      };
      var Fe;
      const He = function (e) {
        var t = e.artistId,
          n = (0, Ie.AgB)({ variables: { artistId: t, liveEventsFirst: 70 } }),
          a = n.data,
          r = n.loading,
          i = n.error,
          l = n.fetchMore;
        if (
          ((0, c.useEffect)(
            function () {
              var e;
              a && a.artist && null !== (e = a.artist.liveEvents) && void 0 !== e && e.pageInfo.hasNextPage && l({ variables: { artistId: t, liveEventsAfter: a.artist.liveEvents.pageInfo.endCursor, liveEventsFirst: 70 } });
            },
            [a, l, t]
          ),
          i)
        )
          throw i;
        if (r) return Fe || (Fe = c.createElement(de.A, null));
        if (!a || !a.artist) {
          var o = new Error("missing data in artist concert graphql call");
          throw ((o.cause = JSON.stringify(a)), o);
        }
        if (!a.artist.liveEvents) throw new Error("This artist has no concert available");
        var s = a.artist.liveEvents.edges
          .map(function (e) {
            var t = e.node;
            return t ? { id: t.id, name: t.name, location: t.cityName && t.countryCode ? "".concat(t.cityName, ", ").concat(t.countryCode) : "", date: t.startDate, types: t.types } : null;
          })
          .filter(Boolean);
        return c.createElement(je, { artistId: t, concerts: s });
      };
      var Ye,
        Ue = n("61mP"),
        ze = n("MTsA"),
        Ze = n("YVUD"),
        Ke = n("sdUN"),
        qe = (n("fKLj"), n("uUhk"), n("juqV")),
        Ve = (n("O3J2"), n("xobL")),
        Xe = (n("aRRr"), { TITLE: { SIZE: x.uq.Full }, PARENT: { SIZE: x.uq.xxl } });
      function We(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function Je(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? We(Object(n), !0).forEach(function (t) {
                (0, l.A)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : We(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var Qe = function (e) {
        var t = e.data,
          n = e.index,
          a = e.style,
          r = t.toDisplay[n],
          i = c.useContext(w.Gt),
          l = i.context,
          o = i.container,
          s = i.shouldExplicitBeHidden,
          u = (0, K.A)(l, o, !0),
          d = u.playerStatus,
          m = u.play,
          p = u.isItemLoadedInPlayer,
          A = r.item.hasExplicitLyrics && s,
          E = function (e, n) {
            m({ playIndex: n, playItems: t.toPlay, isTrackActive: e });
          };
        return c.createElement(B.A.Row, { style: a, uuid: r.uuid, id: r.item.id, index: r.index, isActive: p(r.item) && d.isSameContext, isReadable: r.item.right === q.A.READABLE, isRestrictedByExplicit: A, type: r.item.type }, c.createElement(Z.A, { size: Xe.TITLE.SIZE }, c.createElement(Z.A.Play, { ariaLabel: (0, b.AP)("generic_action_playsongXbyartistX_web", { sprintf: [r.item.title, r.item.parent.name] }), hasExplicitCover: r.item.parent.hasExplicitCover, onPlayItems: E, pictureUrl: r.item.cover(F.r8).url }), Ye || (Ye = c.createElement(Z.A.Download, null)), c.createElement(Z.A.PlayableLabel, { description: r.item.description, hasExplicitLyrics: r.item.hasExplicitLyrics, label: r.item.title, onPlayItems: E, tooltipText: (0, V.Y)(r.item, s) }), c.createElement(B.A.IconGroup, null, c.createElement(Z.A.OpenContextMenu, { item: r.item }))), c.createElement(B.A.CellBody, { size: Xe.PARENT.SIZE }, c.createElement(U.A, { links: [Je(Je({}, r.item.parent), {}, { type: g.Ay.Show })] })));
      };
      const $e = c.memo(Qe, M.t7);
      const et = function (e) {
        var t = e.context,
          n = e.id,
          a = e.items,
          r = e.shouldExplicitBeHidden,
          i = void 0 !== r && r,
          l = { id: n, type: O.Kk.EPISODE },
          o = L.F4.lg,
          s = (0, re.A)(n, a, t),
          u = s.manageItems,
          d = s.tableItems,
          m = (0, K.A)(t, l, !0).playerStatus,
          p = (0, w.Ay)({ container: l, context: t, hasBackground: !1, manageItems: u, playerStatus: m, rowHeight: o, shouldExplicitBeHidden: i });
        return c.createElement(
          w.ru,
          { value: p },
          c.createElement(
            B.A,
            { rowCount: d.toDisplay.length },
            c.createElement(
              B.A.Body,
              null,
              d.toDisplay.map(function (e, t) {
                return c.createElement($e, { data: d, key: e.uuid, index: t, style: { height: o } });
              })
            )
          )
        );
      };
      var tt,
        nt,
        at = { TITLE: { SIZE: x.uq.Full } },
        rt = function (e) {
          var t = e.data,
            n = e.index,
            a = e.style,
            r = (0, w.$A)(),
            i = r.context,
            l = r.container,
            o = r.shouldExplicitBeHidden,
            s = (0, K.A)(i, l, !1),
            u = s.playerStatus,
            d = s.play,
            m = s.isItemLoadedInPlayer,
            p = t.toDisplay[n],
            A = p.item.hasExplicitLyrics && o,
            E = (0, c.useCallback)(
              function (e, n) {
                d({ playIndex: n, playItems: t.toPlay, isTrackActive: e });
              },
              [t.toPlay, d]
            ),
            y = (0, c.useCallback)(
              function (e) {
                d({ notify: !1, playIndex: e, playItems: t.toPlay, playLyrics: !0 });
              },
              [t.toPlay, d]
            );
          return c.createElement(B.A.Row, { style: a, uuid: p.uuid, id: p.item.id, index: p.index, isActive: m(p.item) && u.isSameContext, isReadable: p.item.right === q.A.READABLE, isRestrictedByExplicit: A, type: p.item.type, isDraggable: !0 }, c.createElement(Z.A, { size: at.TITLE.SIZE }, c.createElement(Z.A.Play, { ariaLabel: (0, b.AP)("generic_action_playsongXbyartistX_web", { sprintf: [p.item.title, (0, j.A)(p, "item.artists[0].name", "")] }), hasExplicitCover: p.item.parent.hasExplicitCover, onPlayItems: E, pictureUrl: p.item.cover(F.r4).url }), tt || (tt = c.createElement(Z.A.Download, null)), c.createElement(Z.A.PlayableLabel, { hasExplicitLyrics: p.item.hasExplicitLyrics, label: "".concat(p.item.number || 0, ". ").concat(p.item.title), onPlayItems: E, tooltipText: (0, V.Y)(p.item, o) }), c.createElement(B.A.IconGroup, null, c.createElement(Z.A.ShowLyrics, { item: p.item, lyricsId: p.item.lyricsId, onPlayLyrics: y }), nt || (nt = c.createElement(Z.A.AddToFeedback, null)), c.createElement(Z.A.OpenContextMenu, { item: p.item }))));
        };
      const it = (0, c.memo)(rt, M.t7);
      const lt = function (e) {
        var t = e.context,
          n = e.id,
          a = e.items,
          r = e.shouldExplicitBeHidden,
          i = void 0 !== r && r,
          l = { id: n, type: O.Kk.ALBUM },
          o = (0, re.A)(n, a, t),
          s = o.manageItems,
          u = o.tableItems,
          d = (0, K.A)(t, l, !0).playerStatus,
          m = (0, w.Ay)({ container: l, context: t, hasBackground: !1, manageItems: s, playerStatus: d, shouldExplicitBeHidden: i });
        return c.createElement(
          w.ru,
          { value: m },
          c.createElement(
            B.A,
            { rowCount: u.toDisplay.length },
            c.createElement(
              B.A.Body,
              null,
              u.toDisplay.map(function (e, t) {
                return c.createElement(it, { data: u, key: e.uuid, index: t, style: { height: L.F4.md } });
              })
            )
          )
        );
      };
      var ot,
        ct,
        st = { TITLE: { SIZE: x.uq.Full }, ARTIST: { SIZE: x.uq.PercentXs } };
      function ut(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function dt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ut(Object(n), !0).forEach(function (t) {
                (0, l.A)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ut(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var mt = function (e) {
        var t = e.data,
          n = e.index,
          a = e.style,
          r = (0, w.$A)(),
          i = r.context,
          l = r.container,
          o = r.shouldExplicitBeHidden,
          s = (0, K.A)(i, l, !1),
          u = s.playerStatus,
          d = s.play,
          m = s.isItemLoadedInPlayer,
          p = t.toDisplay[n],
          A = p.item.hasExplicitLyrics && o,
          E = (0, c.useCallback)(
            function (e, n) {
              d({ playIndex: n, playItems: t.toPlay, isTrackActive: e });
            },
            [t.toPlay, d]
          ),
          y = (0, c.useCallback)(
            function (e) {
              d({ notify: !1, playIndex: e, playItems: t.toPlay, playLyrics: !0 });
            },
            [t.toPlay, d]
          );
        return c.createElement(
          B.A.Row,
          { style: a, uuid: p.uuid, id: p.item.id, index: p.index, isActive: m(p.item) && u.isSameContext, isReadable: p.item.right === q.A.READABLE, isRestrictedByExplicit: A, type: p.item.type, isDraggable: !0 },
          c.createElement(Z.A, { size: st.TITLE.SIZE }, c.createElement(Z.A.Play, { ariaLabel: (0, b.AP)("generic_action_playsongXbyartistX_web", { sprintf: [p.item.title, (0, j.A)(p, "item.artists[0].name", "")] }), hasExplicitCover: p.item.parent.hasExplicitCover, onPlayItems: E, pictureUrl: p.item.cover(F.r4).url }), ot || (ot = c.createElement(Z.A.Download, null)), c.createElement(Z.A.PlayableLabel, { hasExplicitLyrics: p.item.hasExplicitLyrics, label: p.item.title, onPlayItems: E, tooltipText: (0, V.Y)(p.item, o) }), c.createElement(B.A.IconGroup, null, c.createElement(Z.A.ShowLyrics, { item: p.item, lyricsId: p.item.lyricsId, onPlayLyrics: y }), ct || (ct = c.createElement(Z.A.AddToFeedback, null)), c.createElement(Z.A.OpenContextMenu, { item: p.item }))),
          c.createElement(
            B.A.CellBody,
            { size: st.ARTIST.SIZE },
            c.createElement(U.A, {
              links: p.item.artists.map(function (e) {
                return dt(dt({}, e), {}, { type: g.Ay.Artist });
              }),
            })
          )
        );
      };
      const pt = (0, c.memo)(mt, M.t7);
      const At = function (e) {
        var t = e.context,
          n = e.id,
          a = e.items,
          r = e.shouldExplicitBeHidden,
          i = void 0 !== r && r,
          l = { id: n, type: O.Kk.PLAYLIST },
          o = (0, re.A)(n, a, t),
          s = o.manageItems,
          u = o.tableItems,
          d = (0, K.A)(t, l, !0).playerStatus,
          m = (0, w.Ay)({ container: l, context: t, hasBackground: !1, manageItems: s, playerStatus: d, shouldExplicitBeHidden: i });
        return c.createElement(
          w.ru,
          { value: m },
          c.createElement(
            B.A,
            { rowCount: u.toDisplay.length },
            c.createElement(
              B.A.Body,
              null,
              u.toDisplay.map(function (e, t) {
                return c.createElement(pt, { data: u, key: e.uuid, index: t, style: { height: L.F4.md } });
              })
            )
          )
        );
      };
      var Et,
        yt = { TITLE: { SIZE: x.uq.Full } },
        vt = function (e) {
          var t = e.data,
            n = e.index,
            a = e.style,
            r = t.toDisplay[n],
            i = c.useContext(w.Gt),
            l = i.context,
            o = i.container,
            s = i.shouldExplicitBeHidden,
            u = (0, K.A)(l, o, !1),
            d = u.playerStatus,
            m = u.play,
            p = u.isItemLoadedInPlayer,
            A = r.item.hasExplicitLyrics && s,
            E = function (e, n) {
              m({ playIndex: n, playItems: t.toPlay, isTrackActive: e });
            };
          return c.createElement(B.A.Row, { style: a, uuid: r.uuid, id: r.item.id, index: r.index, isActive: p(r.item) && d.isSameContext, isReadable: r.item.right === q.A.READABLE, isRestrictedByExplicit: A, type: r.item.type }, c.createElement(Z.A, { size: yt.TITLE.SIZE }, c.createElement(Z.A.Play, { ariaLabel: (0, b.AP)("generic_action_playsongXbyartistX_web", { sprintf: [r.item.title, r.item.parent.name] }), hasExplicitCover: r.item.parent.hasExplicitCover, onPlayItems: E, pictureUrl: r.item.cover(F.r8).url }), Et || (Et = c.createElement(Z.A.Download, null)), c.createElement(Z.A.PlayableLabel, { description: r.item.description, hasExplicitLyrics: r.item.hasExplicitLyrics, label: r.item.title, onPlayItems: E, tooltipText: (0, V.Y)(r.item, s) }), c.createElement(B.A.IconGroup, null, c.createElement(Z.A.OpenContextMenu, { item: r.item }))));
        };
      const ft = c.memo(vt, M.t7);
      const ht = function (e) {
        var t = e.context,
          n = e.id,
          a = e.items,
          r = e.shouldExplicitBeHidden,
          i = void 0 !== r && r,
          l = { id: n, type: O.Kk.SHOW },
          o = L.F4.lg,
          s = (0, re.A)(n, a, t),
          u = s.manageItems,
          d = s.tableItems,
          m = (0, K.A)(t, l, !0).playerStatus,
          p = (0, w.Ay)({ container: l, context: t, hasBackground: !1, manageItems: u, playerStatus: m, rowHeight: o, shouldExplicitBeHidden: i });
        return c.createElement(
          w.ru,
          { value: p },
          c.createElement(
            B.A,
            { rowCount: d.toDisplay.length },
            c.createElement(
              B.A.Body,
              null,
              d.toDisplay.map(function (e, t) {
                return c.createElement(ft, { data: d, key: e.uuid, index: t, style: { height: o } });
              })
            )
          )
        );
      };
      var bt,
        gt = n("HmE0"),
        It = n("nrKQ"),
        Tt = n("GkjM"),
        Pt = n("0CJU"),
        _t = n("7E8A");
      function St(e, t, n) {
        return (t = (0, v.A)(t)), (0, y.A)(e, Lt() ? Reflect.construct(t, n || [], (0, v.A)(e).constructor) : t.apply(e, n));
      }
      function Lt() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (e) {}
        return (Lt = function () {
          return !!e;
        })();
      }
      var Ot =
        (0, u.Ay)()(
          (bt = (function (e) {
            function t() {
              var e;
              (0, A.A)(this, t);
              for (var n = arguments.length, a = new Array(n), r = 0; r < n; r++) a[r] = arguments[r];
              return (
                ((e = St(this, t, [].concat(a))).getTrackingParams = function () {
                  return { type: "card" };
                }),
                (e.handleClick = function () {
                  It.A.call({ method: "log_central.log", data: { BATCH: [{ channel: "discography_click", params: e.getTrackingParams() }] } });
                }),
                (e.renderDescription = function () {
                  var t = e.props.description;
                  return t ? c.createElement("div", { className: "discography-description ellipsis" }, t) : null;
                }),
                (e.renderProducerLine = function () {
                  var t = e.props,
                    n = t.data,
                    a = t.type,
                    r = (0, j.A)(n, "PRODUCER_LINE");
                  return a === g.Ay.Album && r ? c.createElement("div", { className: "album-legal" }, r) : null;
                }),
                (e.renderViewMore = function () {
                  var t = e.props,
                    n = t.id,
                    a = t.index,
                    r = t.type,
                    i = t.viewMoreLabel;
                  return i ? c.createElement("div", { className: "view-more-container" }, c.createElement(gt.$n, { as: Tt.A, onClick: e.handleClick, size: "sm", to: "/".concat(r, "/").concat(n), variant: "outline", "data-position": a || 0 }, i)) : null;
                }),
                e
              );
            }
            return (
              (0, f.A)(t, e),
              (0, E.A)(t, [
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = e.children,
                      n = e.id,
                      a = e.index,
                      r = e.context,
                      i = e.data,
                      l = e.title,
                      o = e.type;
                    return c.createElement("div", { className: "catalog-tab-box discography-row" }, c.createElement("div", { className: "discography-thumbnail" }, c.createElement("div", { className: "thumbnail-container" }, c.createElement(Pt.A, { type: o, width: 200, height: 200, bordered: !0, context: r, pageContext: _t.CONTEXT_PAGE_ALBUM_DISCOGRAPHY, data: i, alt: l })), this.renderProducerLine()), c.createElement("div", { className: "discography-infos" }, c.createElement(k.DZ, { variant: "heading.m", className: "ellipsis", _hover: { textDecoration: "underline" } }, c.createElement(Tt.A, { to: "/".concat(o, "/").concat(n), onClick: this.handleClick, "data-position": a || 0 }, l)), this.renderDescription(), t, this.renderViewMore()));
                  },
                },
              ])
            );
          })(c.Component))
        ) || bt;
      const xt = Ot;
      var Nt = n("/sVC"),
        Dt = n("3nMj"),
        wt = n("sAMA"),
        kt = [g.Ay.Album, g.Ay.Episode, g.Ay.Playlist, g.Ay.Show],
        Ct = (function (e) {
          return (e.XXSMALL = "xxsmall"), (e.XSMALL = "xsmall"), (e.SMALL = "small"), (e.MEDIUM = "medium"), (e.DEFAULT = "default"), e;
        })({});
      const Rt = function (e) {
        var t = e.item,
          n = e.title,
          a = e.size,
          r = (0, j.A)(t, "__TYPE__");
        if (!r) throw new Error("Item without type was sent to Artist Highlight.");
        var i = r === g.Ay.Podcast ? g.Ay.Show : r;
        if (-1 === kt.indexOf(i)) throw new Error('Item of type "'.concat(i, '" is not handled by the Artist Highlight.'));
        var l = String(t[g.vn[i]]),
          o = { ID: l, TYPE: (0, T.Sx)(i) },
          u = (0, s.d4)(function (e) {
            return (0, Ve.Uw)(e.user) === wt.g;
          }),
          d = function () {
            return i === g.Ay.Show;
          },
          m = function () {
            var e = (0, j.A)(t, "SONGS.data") || (0, j.A)(t, "SONGS") || (0, j.A)(t, "EPISODES", []),
              n = d() ? 5 : 6,
              a = { context: o, id: l, items: e.slice(0, n), shouldExplicitBeHidden: u };
            switch (i) {
              case g.Ay.Album:
                return c.createElement(lt, a);
              case g.Ay.Playlist:
                return c.createElement(At, a);
              case g.Ay.Show:
                return c.createElement(ht, a);
            }
          },
          p = (0, qe.A)("top-content content-bottom content-left last-release", a);
        return c.createElement(
          "div",
          { className: "top-cell top-cell-left" },
          c.createElement(G.A, { className: "catalog-section-title", title: n || (0, b.AP)("DerniĂ¨re sortie"), href: "/".concat(i, "/").concat(l) }),
          c.createElement(
            "div",
            { className: p },
            (function () {
              if (i === g.Ay.Episode) return c.createElement(et, { context: o, id: l, items: [t], shouldExplicitBeHidden: u });
              var e,
                n = d() ? t.SHOW_DESCRIPTION : (0, Dt.A)((0, Nt.A)(t));
              return c.createElement(xt, { context: o, data: t, description: n, id: Number(l), title: t.ALB_TITLE || t.TITLE || t.SHOW_NAME || "", type: i, viewMoreLabel: ((e = Number((0, j.A)(t, "SONGS.total")) || Number(t.NB_SONG) || 0), d() || e <= 6 ? "" : i === g.Ay.Album ? (0, b.WI)("artistpage_action_accessalbumpageXtracks_web", "artistpage_action_accessalbumpageXtracks_web", { count: e, sprintf: [e] }) : (0, b.WI)("artistpage_action_accessplaylistpageXtracks_web", "artistpage_action_accessplaylistpageXtracks_web", { count: e, sprintf: [e] })) }, m());
            })()
          )
        );
      };
      var Bt,
        Gt,
        Mt = { TITLE: { SIZE: x.uq.Full } },
        jt = function (e) {
          var t = e.data,
            n = e.index,
            a = e.style,
            r = (0, w.$A)(),
            i = r.context,
            l = r.container,
            o = r.shouldExplicitBeHidden,
            s = (0, K.A)(i, l, !0),
            u = s.playerStatus,
            d = s.play,
            m = s.isItemLoadedInPlayer,
            p = t.toDisplay[n],
            A = p.item.hasExplicitLyrics && o,
            E = (0, c.useCallback)(
              function (e, n) {
                d({ playIndex: n, playItems: t.toPlay, isTrackActive: e });
              },
              [t.toPlay, d]
            ),
            y = (0, c.useCallback)(
              function (e) {
                d({ notify: !1, playIndex: e, playItems: t.toPlay, playLyrics: !0 });
              },
              [t.toPlay, d]
            );
          return c.createElement(B.A.Row, { style: a, uuid: p.uuid, id: p.item.id, index: p.index, isActive: m(p.item) && u.isSameContext, isReadable: p.item.right === q.A.READABLE, isRestrictedByExplicit: A, type: p.item.type, isDraggable: !0 }, c.createElement(Z.A, { size: Mt.TITLE.SIZE }, c.createElement(Z.A.Play, { ariaLabel: (0, b.AP)("generic_action_playsongXbyartistX_web", { sprintf: [p.item.title, (0, j.A)(p, "item.artists[0].name", "")] }), hasExplicitCover: p.item.parent.hasExplicitCover, onPlayItems: E, pictureUrl: p.item.cover(F.r4).url }), Bt || (Bt = c.createElement(Z.A.Download, null)), c.createElement(Z.A.PlayableLabel, { hasExplicitLyrics: p.item.hasExplicitLyrics, label: "".concat(p.item.number || 0, ". ").concat(p.item.title), onPlayItems: E, tooltipText: (0, V.Y)(p.item, o) }), c.createElement(B.A.IconGroup, null, c.createElement(Z.A.ShowLyrics, { item: p.item, lyricsId: p.item.lyricsId, onPlayLyrics: y }), Gt || (Gt = c.createElement(Z.A.AddToFeedback, null)), c.createElement(Z.A.OpenContextMenu, { item: p.item }))));
        };
      const Ft = (0, c.memo)(jt, M.t7);
      const Ht = function (e) {
        var t = e.context,
          n = e.id,
          a = e.items,
          r = e.maxItemsToDisplay,
          i = e.shouldExplicitBeHidden,
          l = void 0 !== i && i,
          o = { id: n, type: O.Kk.TOP_ARTIST },
          s = (0, re.A)(n, a, t),
          u = s.manageItems,
          d = s.tableItems,
          m = (0, K.A)(t, o, !0).playerStatus;
        r && (d.toDisplay = d.toDisplay.slice(0, r));
        var p = (0, w.Ay)({ container: o, context: t, hasBackground: !1, manageItems: u, playerStatus: m, shouldExplicitBeHidden: l });
        return c.createElement(
          w.ru,
          { value: p },
          c.createElement(
            B.A,
            { rowCount: d.toDisplay.length },
            c.createElement(
              B.A.Body,
              null,
              d.toDisplay.map(function (e, t) {
                return c.createElement(Ft, { data: d, key: e.uuid, index: t, style: { height: L.F4.md } });
              })
            )
          )
        );
      };
      var Yt = n("tGJS"),
        Ut = n("KVgY"),
        zt = n("wGgI");
      const Zt = function (e) {
        var t = e.onSort,
          n = e.sortType,
          a = e.sortTypes,
          r = 0,
          i = a.map(function (e, a) {
            var i = (0, o.A)(e, 2),
              l = i[0],
              s = i[1];
            return l === n && (r = a), c.createElement(zt.Ay.Item, { key: l, label: s, isSelected: l === n }, c.createElement("a", { onClick: t.bind(undefined, l), role: "button" }, s));
          });
        return c.createElement(zt.Ay, { selected: r }, i);
      };
      var Kt,
        qt,
        Vt = n("GxIe"),
        Xt = n("3ns7"),
        Wt = n("0JBE");
      function Jt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function Qt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Jt(Object(n), !0).forEach(function (t) {
                (0, l.A)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Jt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function $t(e) {
        return (e || []).reduce(function (e, t) {
          return t.node && e.push(t.node), e;
        }, []);
      }
      const en = function (e) {
        var t,
          n,
          a,
          r,
          i,
          i2,
          l,
          s,
          u,
          d,
          m,
          p,
          A,
          E,
          y,
          v,
          v2,
          f,
          f2,
          h,
          g,
          I = e.artistId,
          T = (0, c.useState)(Ie.sV3.RELEASE_DATE),
          P = (0, o.A)(T, 2),
          _ = P[0],
          S = P[1],
          L = (0, c.useTransition)(),
          O = (0, o.A)(L, 2)[1],
          x = { artistId: I, nb: 30, cursor: null, subType: null, roles: [Ie.by3.MAIN], mode: Ie.rb0.OFFICIAL, order: _ },
          N = (0, Ie.JDV)({ variables: Qt(Qt({}, x), {}, { types: [Ie.iqi.ALBUM], subType: Ie.Mij.STUDIO }) }),
          D = N.data,
          w = N.fetchMore,
          C = (0, Ie.JDV)({ variables: Qt(Qt({}, x), {}, { types: [Ie.iqi.EP] }) }),
          R = C.data,
          B = C.fetchMore,
          G = (0, Ie.JDV)({ variables: Qt(Qt({}, x), {}, { types: [Ie.iqi.SINGLES] }) }),
          M = G.data,
          j = G.fetchMore,
          F = (0, Ie.JDV)({ variables: Qt(Qt({}, x), {}, { types: [Ie.iqi.ALBUM], subType: Ie.Mij.LIVE }) }),
          H = F.data,
          Y = F.fetchMore,
          U = (0, Ie.JDV)({ variables: Qt(Qt({}, x), {}, { types: [Ie.iqi.ALBUM], subType: Ie.Mij.COMPILATION }) }),
          z = U.data,
          Z = U.fetchMore,
          U2 = (0, Ie.JDV)({ variables: Qt(Qt({}, x), {}, { roles: [Ie.by3.MAIN], types: [Ie.iqi.ALBUM, Ie.iqi.EP, Ie.iqi.SINGLES], mode: Ie.rb0.NON_OFFICIAL }) }),
          z2 = U2.data,
          Z2 = U2.fetchMore,
          K = (0, Ie.JDV)({ variables: Qt(Qt({}, x), {}, { roles: [Ie.by3.FEATURED], types: [Ie.iqi.ALBUM, Ie.iqi.EP, Ie.iqi.SINGLES], mode: Ie.rb0.OFFICIAL }) }),
          q = K.data,
          V = K.fetchMore,
          X = $t(null == D || null === (t = D.artist) || void 0 === t ? void 0 : t.albums.edges),
          W = $t(null == R || null === (n = R.artist) || void 0 === n ? void 0 : n.albums.edges),
          J = $t(null == M || null === (a = M.artist) || void 0 === a ? void 0 : a.albums.edges),
          Q = $t(null == H || null === (r = H.artist) || void 0 === r ? void 0 : r.albums.edges),
          $ = $t(null == z || null === (i = z.artist) || void 0 === i ? void 0 : i.albums.edges),
          $2 = $t(null == z2 || null === (i2 = z2.artist) || void 0 === i2 ? void 0 : i2.albums.edges),
          ee = $t(null == q || null === (l = q.artist) || void 0 === l ? void 0 : l.albums.edges),
          te = null == D || null === (s = D.artist) || void 0 === s ? void 0 : s.albums.pageInfo.hasNextPage,
          ne = function () {
            var e;
            w({ variables: { cursor: null == D || null === (e = D.artist) || void 0 === e ? void 0 : e.albums.pageInfo.endCursor } });
          },
          ae = [[X, (0, b.AP)("favoritessidebar_title_albums_web")]];
        !1 === (null == D || null === (u = D.artist) || void 0 === u ? void 0 : u.albums.pageInfo.hasNextPage) &&
          (ae.push([W, (0, b.AP)("discographytype_title_EPs_web")]),
          (te = null == R || null === (d = R.artist) || void 0 === d ? void 0 : d.albums.pageInfo.hasNextPage),
          (ne = function () {
            var e;
            B({ variables: { cursor: null == R || null === (e = R.artist) || void 0 === e ? void 0 : e.albums.pageInfo.endCursor } });
          }),
          !1 === (null == R || null === (m = R.artist) || void 0 === m ? void 0 : m.albums.pageInfo.hasNextPage) &&
            ((te = null == M || null === (p = M.artist) || void 0 === p ? void 0 : p.albums.pageInfo.hasNextPage),
            ae.push([J, (0, b.AP)("discographytype_title_singles_web")]),
            (ne = function () {
              var e;
              j({ variables: { cursor: null == M || null === (e = M.artist) || void 0 === e ? void 0 : e.albums.pageInfo.endCursor } });
            }),
            !1 === (null == M || null === (A = M.artist) || void 0 === A ? void 0 : A.albums.pageInfo.hasNextPage) &&
              ((te = null == H || null === (E = H.artist) || void 0 === E ? void 0 : E.albums.pageInfo.hasNextPage),
              ae.push([Q, (0, b.AP)("discographytype_title_livealbums_web")]),
              (ne = function () {
                var e;
                Y({ variables: { cursor: null == H || null === (e = H.artist) || void 0 === e ? void 0 : e.albums.pageInfo.endCursor } });
              }),
              !1 === (null == H || null === (y = H.artist) || void 0 === y ? void 0 : y.albums.pageInfo.hasNextPage) &&
                ((te = null == z || null === (v = z.artist) || void 0 === v ? void 0 : v.albums.pageInfo.hasNextPage),
                ae.push([$, (0, b.AP)("discographytype_title_compilations_web")]),
                (ne = function () {
                  var e;
                  Z({ variables: { cursor: null == z || null === (e = z.artist) || void 0 === e ? void 0 : e.albums.pageInfo.endCursor } });
                }),
                !1 === (null == z || null === (f = z.artist) || void 0 === f ? void 0 : f.albums.pageInfo.hasNextPage) &&
                  ((te = null == z2 || null === (v2 = z2.artist) || void 0 === v2 ? void 0 : v2.albums.pageInfo.hasNextPage),
                  ae.push([$2, (0, b.AP)("More albums")]),
                  (ne = function () {
                    var e;
                    Z2({ variables: { cursor: null == z2 || null === (e = z2.artist) || void 0 === e ? void 0 : e.albums.pageInfo.endCursor } });
                  }),
                  !1 === (null == z2 || null === (f2 = z2.artist) || void 0 === f2 ? void 0 : f2.albums.pageInfo.hasNextPage) &&
                    ((te = null == q || null === (h = q.artist) || void 0 === h ? void 0 : h.albums.pageInfo.hasNextPage),
                    ae.push([ee, (0, b.AP)("discography_title_featuredin_web")]),
                    (ne = function () {
                      var e;
                      V({ variables: { cursor: null == q || null === (e = q.artist) || void 0 === e ? void 0 : e.albums.pageInfo.endCursor } });
                    }),
                    !1 === (null == q || null === (g = q.artist) || void 0 === g ? void 0 : g.albums.pageInfo.hasNextPage) && (ne = function () {})))))));
        var re = !1;
        return c.createElement(
          Ut.A,
          {
            hasMore: te,
            loadMore: function () {
              return O(function () {
                return ne();
              });
            },
            loader: Kt || (Kt = c.createElement(de.A, { key: "loader" })),
          },
          ae.map(function (e) {
            var t = (0, o.A)(e, 2),
              n = t[0],
              a = t[1];
            return (
              n.length > 0 &&
              c.createElement(
                c.Fragment,
                { key: a },
                c.createElement(
                  "div",
                  { key: "heading", className: "heading" },
                  c.createElement("div", { className: "cell cell-title" }, c.createElement(k.DZ, { variant: "heading.m" }, a)),
                  qt || (qt = c.createElement("div", { className: "cell cell-line" }, c.createElement("div", { className: "line" }))),
                  !re &&
                    (re = !0) &&
                    c.createElement(
                      "div",
                      { className: "cell cell-sort" },
                      c.createElement(Zt, {
                        onSort: function (e) {
                          O(function () {
                            return S(e);
                          });
                        },
                        sortType: _,
                        sortTypes: [
                          [Ie.sV3.RELEASE_DATE, (0, b.AP)("Date de sortie")],
                          [Ie.sV3.ALPHA, (0, b.AP)("A - Z")],
                          [Ie.sV3.RANK, (0, b.AP)("Les plus ĂŠcoutĂŠs")],
                        ],
                      })
                    )
                ),
                c.createElement(
                  Xt.kK,
                  null,
                  n.map(function (e) {
                    var t, n;
                    return c.createElement(Wt.OJ, { key: e.id, value: { legacyContext: { ID: e.id, CONTEXT_ID: I, TYPE: "album_discography" } } }, c.createElement(Vt.A, { id: e.id, albumName: e.displayTitle, picture: null === (t = e.cover) || void 0 === t ? void 0 : t.large[0], isExplicitAlbum: e.isExplicit || !1, hasExplicitCover: null === (n = e.cover) || void 0 === n ? void 0 : n.explicitStatus, releaseDate: (0, Dt.A)(e.releaseDate), contributors: $t(e.contributors.edges) }));
                  })
                )
              )
            );
          })
        );
      };
      n("uuq2"), n("bVll");
      var tn,
        nn = n("23Qi"),
        an = n("Weh+"),
        rn = n("gXj/"),
        ln = n("FFW9"),
        on = n("A0BP"),
        cn = n("lD5d"),
        sn = n("5Loq"),
        un = n("934x"),
        dn = n("xvdY"),
        mn = n("9OcB"),
        pn = n("AZMZ"),
        An = n("LpaV"),
        En = n("SrwL");
      const yn = function (e) {
        var t,
          n = e.artistId,
          a = e.nbRelated,
          r = e.legacyData,
          i = (0, Ie.ORW)({ variables: { artistId: n, relatedArtistFirst: 6, cursor: null } }),
          l = i.loading,
          o = i.data;
        if (l || null == o || null === (t = o.artist) || void 0 === t || null === (t = t.relatedArtists) || void 0 === t || !t.edges) return null;
        var s = o.artist.relatedArtists.edges.slice(0, a);
        return c.createElement(
          k.az,
          { as: "aside", className: "top-cell top-cell-right", position: "relative" },
          c.createElement(k.DZ, { variant: "heading.m", className: "catalog-section-title" }, c.createElement(un.A, { href: "/artist/".concat(n, "/related_artist") }, c.createElement("span", { className: "label" }, (0, b.AP)("Artistes similaires")))),
          s.map(function (e) {
            var t;
            return e.node
              ? c.createElement(
                  an.Q,
                  { key: e.node.id, mt: "spacing.l", w: "100%" },
                  c.createElement(rn.h, null, c.createElement(mn.A, { alt: e.node.name, borderRadius: "rounded", src: null === (t = e.node.picture) || void 0 === t ? void 0 : t.small[0], type: g.Ay.Artist })),
                  c.createElement(ln.f, { flex: 1 }, c.createElement(on.n, { _hover: { textDecoration: "underline" } }, c.createElement(Tt.A, { to: "/artist/".concat(e.node.id), "data-instance": "artist_name" }, e.node.name)), c.createElement(cn.P, null, (0, b.WI)("%s fan", "%s fans", { count: e.node.fansCount, sprintf: [(0, nn.A)(e.node.fansCount)] }))),
                  c.createElement(
                    ln.f,
                    { displayOnHover: !0 },
                    c.createElement(
                      An.K.Provider,
                      { value: (0, En.uC)() },
                      c.createElement(pn.A, {
                        anchor: tn || (tn = c.createElement(gt.K0, { variant: "ghost", size: "small", "aria-label": "artist_contextmenu" }, c.createElement(sn.j, null))),
                        context: { ID: Number(e.node.id), TYPE: (0, T.Pe)(g.Ay.Artist, P.Di) },
                        id: e.node.id,
                        data: r.find(function (t) {
                          var n;
                          return String(t.ART_ID) === (null === (n = e.node) || void 0 === n ? void 0 : n.id);
                        }),
                      })
                    )
                  ),
                  c.createElement(ln.f, null, c.createElement(dn.A, { type: g.Ay.Artist, id: e.node.id, context: { ID: e.node.id, TYPE: (0, T.Pe)(g.Ay.Artist, P.Di) } }))
                )
              : null;
          }),
          o.artist.relatedArtists.edges.length > 3 ? c.createElement(k.az, { mt: "spacing.l" }, c.createElement(gt.$n, { as: Tt.A, variant: "outline", size: "small", to: "/artist/".concat(n, "/related_artist") }, (0, b.AP)("Voir plus d'artistes"))) : null
        );
      };
      n("F+C3");
      var vn,
        fn = n("P1K6");
      const hn = function (e) {
        var t = e.artistId,
          n = e.data;
        return c.createElement(
          k.az,
          { position: "relative" },
          c.createElement(k.DZ, { variant: "heading.m", className: "catalog-section-title" }, c.createElement(un.A, { href: "/artist/".concat(t, "/related_playlist") }, c.createElement("span", { className: "label" }, (0, b.AP)("Playlists")))),
          n.map(function (e) {
            var t = [(0, b.WI)("%s titre", "%s titres", { sprintf: [(0, nn.A)(e.NB_SONG)], count: e.NB_SONG })];
            return e.NB_FAN > 0 && t.push((0, b.WI)("%s fan", "%s fans", { count: e.NB_FAN, sprintf: [(0, nn.A)(e.NB_FAN)] })), c.createElement(an.Q, { key: e.PLAYLIST_ID, mt: "spacing.l", w: "100%" }, c.createElement(rn.h, null, c.createElement(mn.A, { alt: e.TITLE, src: (0, fn.AE)(g.Ay.Playlist, e.PLAYLIST_PICTURE, 100, 100), type: g.Ay.Playlist })), c.createElement(ln.f, { flex: 1 }, c.createElement(on.n, { _hover: { textDecoration: "underline" } }, c.createElement(Tt.A, { to: "/playlist/".concat(e.PLAYLIST_ID), "data-instance": "playlist_name" }, e.TITLE)), c.createElement(cn.P, null, t.join(" - "))), c.createElement(ln.f, { displayOnHover: !0 }, c.createElement(An.K.Provider, { value: (0, En.uC)() }, c.createElement(pn.A, { anchor: c.createElement(gt.K0, { variant: "ghost", size: "small", "aria-label": "playlist_contextmenu", _focus: { outline: "none" } }, vn || (vn = c.createElement(sn.j, null))), context: { ID: e.PLAYLIST_ID, TYPE: "artist_similar_playlist" }, id: e.PLAYLIST_ID, data: n }))), c.createElement(ln.f, null, c.createElement(dn.A, { type: g.Ay.Playlist, id: e.PLAYLIST_ID, context: { ID: e.PLAYLIST_ID, TYPE: (0, T.Pe)(g.Ay.Playlist, P.Di) } })));
          }),
          n.length > 3 ? c.createElement(k.az, { position: "absolute", bottom: "spacing.l" }, c.createElement(gt.$n, { as: Tt.A, variant: "outline", size: "small", to: "/artist/".concat(t, "/related_playlist") }, (0, b.AP)("Voir plus de playlists"))) : null
        );
      };
      var bn = (function (e) {
        return (e.sm = "sm"), (e.md = "md"), (e.lg = "lg"), e;
      })({});
      const gn = "HBxbS",
        In = "c9AV2";
      const Tn = function (e) {
        var t,
          n = e.artistId,
          a = (0, Ie.KDJ)({ variables: { artistId: n } }),
          r = a.loading,
          i = a.data,
          l = a.error;
        if (r || l || !i || null == i || null === (t = i.artist) || void 0 === t || null === (t = t.liveEventsByProximity) || void 0 === t || null === (t = t.edges) || void 0 === t || null === (t = t[0]) || void 0 === t || !t.node) return null;
        var o = i.artist.liveEventsByProximity.edges[0].node,
          s = o.id,
          u = o.name,
          d = o.startDate,
          m = o.countryCode,
          p = o.cityName,
          A = o.types,
          E = p && m ? "".concat(p, ", ").concat(m) : null;
        return c.createElement(
          "div",
          { className: "catalog-container ".concat(gn), "data-testid": "last-concert-section" },
          c.createElement("div", { className: "heading" }, c.createElement("div", { className: "cell cell-title" }, c.createElement(G.A, { title: (0, b.AP)("artistpage_title_artistXontour_web", { sprintf: [i.artist.name] }), href: "/artist/".concat(i.artist.id, "/concerts"), ctaLabel: (0, b.AP)("eventpage_action_alltourdates_web") }))),
          c.createElement(we.A, {
            title: u,
            concertId: s,
            date: d,
            subtitle: E,
            calendarIconSize: bn.md,
            className: In,
            locationState: { referringArtistId: n },
            onClick: function () {
              return (0, Me.uV)({ action: Me.rc.CLICK_CONCERT, screen_view_name: Me.Xw.ARTIST, screen_view_id_type: Me.v5.ARTIST, screen_view_id: n, item_id: s, item_type: (0, Me.U$)(A) });
            },
          })
        );
      };
      var Pn, _n, Sn;
      const Ln = function (e) {
        var t,
          n,
          a,
          r = e.artistId,
          i = (0, Ie.TF)({ variables: { artistId: String(r) } }),
          l = i.data;
        if (i.loading) return Pn || (Pn = c.createElement(de.A, null));
        if (!l || !l.artist) {
          var o = new Error("missing data in artist personal favorite graphql call");
          throw ((o.cause = JSON.stringify(l)), o);
        }
        var s = null === (t = l.artist.picture) || void 0 === t ? void 0 : t.small[0],
          u = Boolean(null === (n = l.artist.picture) || void 0 === n ? void 0 : n.explicitStatus),
          d = (null == l || null === (a = l.me) || void 0 === a || null === (a = a.userFavorites.byArtist) || void 0 === a ? void 0 : a.estimatedTracksCount) || 0;
        return d
          ? c.createElement(
              k.so,
              {
                as: Tt.A,
                display: "inline-flex",
                direction: "row",
                align: "center",
                mb: "spacing.2xl",
                to: "/artist/".concat(r, "/").concat(Ue.G.FAVORITES),
                "data-testid": "in_your_fav_section",
                onClick: function () {
                  return Ae(r);
                },
              },
              c.createElement(k.az, { position: "relative", "data-testid": "in_your_fav_thumbnail" }, c.createElement(k.az, { position: "relative", zIndex: 1, borderWidth: "border.m", borderStyle: "solid", borderColor: "background.neutral.primary.default" }, c.createElement(mn.A, { size: "size.xl", src: s, isExplicitCover: u, border: "none" }), _n || (_n = c.createElement(k.az, { position: "absolute", top: 0, left: 0, zIndex: 1, width: "100%", height: "100%", bg: "background.accent.onLight.default", opacity: "0.4" }))), c.createElement(mn.A, { position: "absolute", top: "50%", insetStart: "50%", transform: "translate(-50%, -50%)", variant: "favTracks", size: "size.s", borderRadius: "rounded", alt: (0, b.AP)("artistpageentrypoint_title_inyourfavorites_web"), zIndex: 3 }), Sn || (Sn = c.createElement(k.az, { position: "absolute", top: "50%", insetEnd: "-6px", transform: "translateY(-50%)", bg: "background.neutral.secondary.default", width: "size.l", height: "size.l", borderRadius: "2xs" }))),
              c.createElement(k.so, { direction: "column", ms: "spacing.l" }, c.createElement(k.EY, { variant: "body.l.default", color: "text.neutral.primary.default", "data-testid": "in_your_fav_title" }, (0, b.AP)("artistpageentrypoint_title_inyourfavorites_web")), c.createElement(k.EY, { variant: "body.s.default", color: "text.neutral.secondary.default", "data-testid": "in_your_fav_subtitle" }, (0, b.WI)("%s titre", "%s titres", { sprintf: [d], count: d })))
            )
          : null;
      };
      var On,
        xn = n("fsGD"),
        Nn = n("yiM3");
      function Dn(e, t, n) {
        return (t = (0, v.A)(t)), (0, y.A)(e, wn() ? Reflect.construct(t, n || [], (0, v.A)(e).constructor) : t.apply(e, n));
      }
      function wn() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (e) {}
        return (wn = function () {
          return !!e;
        })();
      }
      var kn = (function (e) {
          return (e.SMALL = "small"), (e.BIG = "big"), e;
        })(kn || {}),
        Cn = (function (e) {
          function t(e) {
            var n;
            return (0, A.A)(this, t), ((n = Dn(this, t, [e])).state = { display: n._getDisplay(!1), hasAdsFull: !1 }), (n._toggleDisplay = n._toggleDisplay.bind(n)), (n._initAds = n._initAds.bind(n)), n;
          }
          return (
            (0, f.A)(t, e),
            (0, E.A)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  d.A.subscribe(d.A.layout.resize, this._toggleDisplay), d.A.subscribe(d.A.layout.adsBackground, this._initAds);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  d.A.unsubscribe(d.A.layout.resize, this._toggleDisplay), d.A.unsubscribe(d.A.layout.adsBackground, this._initAds);
                },
              },
              {
                key: "render",
                value: function () {
                  var e,
                    t = this.props.id,
                    n = this.props.data,
                    a = n.TOP,
                    r = n.VIDEO,
                    i = this.state.display;
                  return c.createElement("div", { className: "catalog-tab-discography" }, c.createElement("div", { className: "container" }, i === kn.SMALL ? this._renderPersonalFavorite() : null, c.createElement("div", { className: "catalog-container" }, this._renderTopTracks(), i === kn.BIG ? c.createElement(k.az, { as: "aside", verticalAlign: "top", className: (0, qe.A)("top-cell", { "top-cell-right": a.data.length > 0 }) }, this._renderPersonalFavorite(), this._renderRelatedPlaylists()) : null), this._renderOwnerMessage(), a.data.length > 0 ? c.createElement("div", { className: "catalog-container" }, this._renderHighlight(), i === kn.BIG ? this._renderRelatedArtists() : null) : null, (null === (e = r.ITEMS) || void 0 === e ? void 0 : e.length) > 0 ? c.createElement("div", { className: "catalog-container", id: "videos" }, this._renderLivestream()) : null, i === kn.SMALL ? c.createElement("div", { className: "catalog-container visible-ads-full" }, this._renderRelatedPlaylists(), this._renderRelatedArtists()) : null, c.createElement(Tn, { artistId: String(t) })), c.createElement("div", { className: "container", "data-testid": "artist_discography" }, c.createElement(c.Suspense, { fallback: null }, c.createElement(en, { artistId: this.props.id.toString() }))));
                },
              },
              {
                key: "_renderTopTracks",
                value: function () {
                  var e = this.props,
                    t = e.id,
                    n = e.shouldExplicitBeHidden,
                    a = this.props.data.TOP;
                  return 0 === a.data.length ? null : c.createElement("div", { className: "top-cell top-cell-left" }, c.createElement(G.A, { className: "catalog-section-title", title: (0, b.AP)("Top titres"), href: "/artist/".concat(t, "/top_track") }), c.createElement("div", { className: "top-content content-top content-left" }, c.createElement(Ht, { id: String(t), context: { ID: t, TYPE: (0, T.Pe)(g.Ay.Artist, P.sI) }, items: a.data, maxItemsToDisplay: 4, shouldExplicitBeHidden: n })));
                },
              },
              {
                key: "_renderRelatedPlaylists",
                value: function () {
                  var e = this.props.id,
                    t = this.props.data.PLAYLISTS;
                  return t.length ? c.createElement(hn, { artistId: String(e), data: t.slice(0, 3) }) : null;
                },
              },
              {
                key: "_renderPersonalFavorite",
                value: function () {
                  var e = this.props.id;
                  return _.A.isAllowed("artist_page_favorite_content") ? c.createElement(Ln, { artistId: e }) : null;
                },
              },
              {
                key: "_renderHighlight",
                value: function () {
                  var e = this.props.data,
                    t = (0, j.A)(e, "HIGHLIGHT.ITEM");
                  return t ? c.createElement(Rt, { item: t, title: (0, j.A)(e, "HIGHLIGHT.TITLE"), size: this._getSize() }) : null;
                },
              },
              {
                key: "_renderLivestream",
                value: function () {
                  var e,
                    t,
                    n = this.props.userIsConnected,
                    a = this.props.data.VIDEO;
                  if (0 === a.ITEMS.length) return null;
                  var r = a.ITEMS.map(function (e) {
                      var t, a, r, i, l, o;
                      return { type: "video-link", data: {}, target: n ? e.DEEPLINK : "", title: null !== (t = e.TITLE) && void 0 !== t ? t : "", subtitle: null !== (a = e.SUBTITLE) && void 0 !== a ? a : "", pictures: [{ md5: e.ASSET, type: "misc" }], theme: null !== (r = e.THEME) && void 0 !== r ? r : "dark", layout_parameters: { cta: { type: "watch", label: "WATCH" }, override: { title: null !== (i = e.TITLE) && void 0 !== i ? i : "", subtitle: null !== (l = e.SUBTITLE) && void 0 !== l ? l : "", theme: null !== (o = e.THEME) && void 0 !== o ? o : "dark" }, item_layout: "slide" } };
                    }),
                    i = c.createElement(Yt.A, { data: r, layoutType: xn.Pl, pageContext: _t.CONTEXT_PAGE_ARTIST_DISCOGRAPHY, alignment: "right", title: null !== (e = a.TITLE) && void 0 !== e ? e : void 0, subtitle: null !== (t = a.SUBTITLE) && void 0 !== t ? t : void 0 });
                  return n ? i : c.createElement("a", { href: (0, Nn.t)({ route: "login", redirect: "/fr/5111084", query: { utm_campaign: "unloggedwebdesktop_FR-LomepalVOD-092022", utm_content: "LomepalTADV", utm_source: "webdesktop", utm_medium: "slideshow" } }) }, i);
                },
              },
              {
                key: "_renderRelatedArtists",
                value: function () {
                  var e = this.props.id,
                    t = this.props.data.RELATED_ARTISTS;
                  if (0 === t.data.length) return null;
                  var n = this._getNbRelated(this._getSize());
                  return c.createElement(yn, { artistId: String(e), nbRelated: n, legacyData: t.data.slice(0, n) });
                },
              },
              {
                key: "_renderOwnerMessage",
                value: function () {
                  return this.props.data.DISABLE_CATALOG ? c.createElement("div", { className: "alert alert-info owner-message", role: "alert" }, On || (On = c.createElement("span", { className: "icon icon-before icon-info" })), (0, b.AP)("A la demande de l'artiste ou de ses reprĂŠsentants, une partie ou l'intĂŠgralitĂŠ de la discographie est actuellement exclue des services de streaming. Deezer continue de faire son maximum pour la rendre disponible le plus rapidement possible.")) : null;
                },
              },
              {
                key: "_toggleDisplay",
                value: function (e, t) {
                  var n = this.state,
                    a = n.hasAdsFull,
                    r = n.display;
                  if (!a) {
                    var i = t.client_width > 1200 ? kn.BIG : kn.SMALL;
                    i !== r && this.setState({ display: i });
                  }
                },
              },
              {
                key: "_getTotalTracks",
                value: function (e, t) {
                  switch (t) {
                    case g.Ay.Playlist:
                      return e.SONGS.length;
                    case g.Ay.Podcast:
                      return e.EPISODES.length;
                    case g.Ay.Album:
                      return e.SONGS.count;
                    case g.Ay.Episode:
                      return 1;
                    default:
                      return 0;
                  }
                },
              },
              {
                key: "_getSize",
                value: function () {
                  var e = this.props.data.HIGHLIGHT,
                    t = void 0 === e ? {} : e;
                  if (!t.ITEM) return Ct.DEFAULT;
                  var n = this._getTotalTracks(t.ITEM, t.TYPE);
                  return n < 3 ? (t.ITEM.PRODUCER_LINE.length <= 60 ? Ct.XXSMALL : Ct.XSMALL) : n >= 3 && n <= 5 ? Ct.SMALL : 6 === n ? Ct.MEDIUM : Ct.DEFAULT;
                },
              },
              {
                key: "_getNbRelated",
                value: function (e) {
                  var t = (0, l.A)((0, l.A)((0, l.A)((0, l.A)((0, l.A)({}, Ct.XXSMALL, 3), Ct.XSMALL, 3), Ct.SMALL, 4), Ct.MEDIUM, 5), Ct.DEFAULT, 6);
                  return this.state.display === kn.SMALL ? 3 : t[e];
                },
              },
              {
                key: "_getDisplay",
                value: function (e) {
                  return window.innerWidth > 1200 && !e ? kn.BIG : kn.SMALL;
                },
              },
              {
                key: "_initAds",
                value: function (e, t) {
                  var n = t.display;
                  this.setState({ hasAdsFull: n, display: this._getDisplay(n) });
                },
              },
            ])
          );
        })(c.Component);
      const Rn = Cn;
      var Bn = n("2NhJ"),
        Gn = n("oq/a"),
        Mn = n("zJSK"),
        jn = n("wRgy"),
        Fn = n("WY4A"),
        Hn = n("Ozpl"),
        Yn = n("WQvr"),
        Un = n("JKL/"),
        zn = n("6K8D"),
        Zn = n("U9ZG"),
        Kn = n("2Av+"),
        qn = n("/b/U");
      const Vn = "qmFln",
        Xn = "OptWm",
        Wn = "Q2ZWv";
      var Jn, Qn, $n, ea;
      function ta(e, t, n) {
        return (t = (0, v.A)(t)), (0, y.A)(e, na() ? Reflect.construct(t, n || [], (0, v.A)(e).constructor) : t.apply(e, n));
      }
      function na() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (e) {}
        return (na = function () {
          return !!e;
        })();
      }
      const aa = (function (e) {
        function t() {
          return (0, A.A)(this, t), ta(this, t, arguments);
        }
        return (
          (0, f.A)(t, e),
          (0, E.A)(t, [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.picture,
                  n = e.name;
                return t ? c.createElement(k.az, { className: "container" }, c.createElement(Bn.Ay, null, this._renderThumbnail(), c.createElement(Gn.A, { className: Vn }, c.createElement(Mn.A, null, n), this._renderFans(), this._renderStatus()), this._renderSocials()), this._renderActions()) : null;
              },
            },
            {
              key: "_renderThumbnail",
              value: function () {
                var e,
                  t = this.props,
                  n = t.name,
                  a = t.picture;
                return a ? c.createElement(jn.A, { alt: n, borderRadius: "rounded", src: null === (e = a.urls) || void 0 === e || null === (e = e.large) || void 0 === e ? void 0 : e[0], type: g.Ay.Artist, "data-testid": "artist-cover" }) : null;
              },
            },
            {
              key: "_renderSubtitle",
              value: function () {
                var e = this.props,
                  t = e.fansCount,
                  n = e.status;
                return t || (n && n.length) ? c.createElement(c.Fragment, null, this._renderFans(), this._renderStatus()) : null;
              },
            },
            {
              key: "_renderFans",
              value: function () {
                var e = this.props.fansCount;
                return e ? c.createElement(Fn.A, null, c.createElement(Hn.A, null, (0, b.WI)("%s fan", "%s fans", { sprintf: [(0, nn.A)(e)], count: e }))) : null;
              },
            },
            {
              key: "_renderStatus",
              value: function () {
                var e = this.props.status;
                return e && e.length ? c.createElement(Yn.A, null, e) : null;
              },
            },
            {
              key: "_renderActions",
              value: function () {
                var e,
                  t = this.props,
                  n = t.hasSmartRadio,
                  a = t.id,
                  r = t.name,
                  i = t.picture,
                  l = ["favorite", "options"];
                return n && !l.includes("play") && l.unshift("play"), c.createElement(Un.A, null, c.createElement(Zn.A, { id: Number(a), type: g.Ay.Artist, data: { id: a, type: g.Ay.Artist, SMARTRADIO: n, name: r, picture: null == i || null === (e = i.urls) || void 0 === e || null === (e = e.large) || void 0 === e ? void 0 : e[0] }, action: l, context: { ID: a, TYPE: "artist_smartradio" } }));
              },
            },
            {
              key: "_renderSocials",
              value: function () {
                var e = this.props,
                  t = e.social,
                  n = e.onTour;
                return t && (t.facebook || t.twitter || n) ? c.createElement("ul", { className: Xn }, this._renderFacebook(), this._renderTwitter()) : null;
              },
            },
            {
              key: "_renderFacebook",
              value: function () {
                var e = this.props.social;
                if (!e) return null;
                if (!e.facebook) return c.createElement("li", { className: "".concat(Wn, " disabled") }, c.createElement(zn.m, { label: (0, b.AP)("Page Facebook indisponible") }, Jn || (Jn = c.createElement(Kn.i, null))));
                var t = e.facebook.includes("http") ? e.facebook : "//".concat(e.facebook);
                return c.createElement("li", { className: Wn }, c.createElement(zn.m, { label: (0, b.AP)("Page Facebook") }, c.createElement("a", { href: t, target: "_blank", rel: "noreferrer" }, Qn || (Qn = c.createElement(Kn.i, null)))));
              },
            },
            {
              key: "_renderTwitter",
              value: function () {
                var e = this.props.social;
                if (!e) return null;
                if (!e.twitter) return c.createElement("li", { className: "".concat(Wn, " disabled") }, c.createElement(zn.m, { label: (0, b.AP)("Page Twitter indisponible") }, $n || ($n = c.createElement(qn.u, null))));
                var t = e.twitter.includes("http") ? e.twitter : "//".concat(e.twitter);
                return c.createElement("li", { className: Wn }, c.createElement(zn.m, { label: (0, b.AP)("Page Twitter") }, c.createElement("a", { href: t, target: "_blank", rel: "noreferrer" }, ea || (ea = c.createElement(qn.u, null)))));
              },
            },
          ])
        );
      })(c.Component);
      var ra,
        ia = n("aEwM"),
        la = n("RGaU"),
        oa = n("JbrT");
      const ca = function (e) {
          var t,
            n = e.id,
            a = (0, Ie.ORW)({ variables: { artistId: n, relatedArtistFirst: 10, cursor: null } }),
            r = a.data,
            i = a.loading,
            l = a.fetchMore,
            o = (0, c.useCallback)(
              function () {
                return l({ query: Ie.yRK, variables: { artistId: n, relatedArtistFirst: 10, cursor: r && r.artist && r.artist.relatedArtists && r.artist.relatedArtists.pageInfo.endCursor } });
              },
              [r, l, n]
            );
          if (i) return ra || (ra = c.createElement(la.k, null));
          if (!r || !r.artist) return null;
          var s =
              null === (t = r.artist.relatedArtists) || void 0 === t
                ? void 0
                : t.edges.map(function (e) {
                    return e.node;
                  }),
            u =
              null != s && s.length
                ? s.map(function (e) {
                    var t, a;
                    return e ? c.createElement(Wt.OJ, { key: e.id, value: { legacyContext: { ID: e.id, TYPE: "artist_similar_artist", CONTEXT_ID: n } } }, c.createElement(oa.A, { artistName: e.name, hasExplicitPicture: Boolean(null === (t = e.picture) || void 0 === t ? void 0 : t.explicitStatus), id: e.id, isFavorite: Boolean(e.isFavorite), nbOfFans: e.fansCount, picture: null === (a = e.picture) || void 0 === a ? void 0 : a.large[0] })) : null;
                  })
                : null;
          return c.createElement("div", { className: "container" }, c.createElement(k.az, { mb: "spacing.l" }, c.createElement(G.A, { title: (0, b.AP)("Artistes similaires") })), c.createElement(ia.A, { hasMore: !!r.artist.relatedArtists && r.artist.relatedArtists.pageInfo.hasNextPage, loadMore: o, placeholder: { img: ke.B.RECOMMENDATION, wording: (0, b.AP)("Aucun artiste similaire n'est disponible") } }, c.createElement(Xt.kK, null, u)));
        },
        sa = "jbzvm",
        ua = "_hESX",
        da = "Pbkan",
        ma = "zbtBF";
      var pa;
      const Aa = function (e) {
        var t = e.id,
          n = (0, Ie.Wyk)({ variables: { artistId: t } }),
          a = n.data,
          r = n.loading,
          i = n.error;
        if (r) return pa || (pa = c.createElement(de.A, null));
        if (i) throw i;
        if (!a || !a.artist || !a.artist.bio) return null;
        var l = (0, qe.A)("heading-1", sa),
          o = (0, qe.A)("heading-1", da);
        return c.createElement("div", { className: "container" }, _.A.isAllowed("revamp2023") ? c.createElement(k.az, { mb: "spacing.l" }, c.createElement(G.A, { title: (0, b.AP)("Biographie") })) : c.createElement("div", { className: l }, (0, b.AP)("Biographie")), c.createElement("div", { className: ua }, c.createElement("h2", { className: o }, a.artist.name), c.createElement("div", { className: ma, dangerouslySetInnerHTML: { __html: a.artist.bio.full } })));
      };
      var Ea,
        ya,
        va = n("tCiE"),
        fa = n("kPsn");
      function ha(e, t, n) {
        return (t = (0, v.A)(t)), (0, y.A)(e, ba() ? Reflect.construct(t, n || [], (0, v.A)(e).constructor) : t.apply(e, n));
      }
      function ba() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (e) {}
        return (ba = function () {
          return !!e;
        })();
      }
      var ga =
        (0, u.Ay)()(
          ((ya = (function (e) {
            function t(e) {
              var n;
              return (0, A.A)(this, t), ((n = ha(this, t, [e]))._onTabSelect = n._onTabSelect.bind(n)), n;
            }
            return (
              (0, f.A)(t, e),
              (0, E.A)(t, [
                {
                  key: "render",
                  value: function () {
                    var e,
                      t = this.props,
                      n = t.dataFromStore,
                      a = t.dataFromGQL,
                      r = t.selectedTab,
                      i = r && ((e = r), Object.values(Ue.G).includes(e)) ? r : Ue.G.DISCOGRAPHY;
                    return c.createElement(
                      "div",
                      { className: "naboo-catalog", id: "page_naboo_artist", itemScope: !0, itemType: "http://schema.org/MusicGroup" },
                      c.createElement(
                        aa,
                        (function (e, t) {
                          if (!(0, va.B)(t)) throw new Error("Legacy artist has wrong format");
                          if (!e) throw new Error("GraphQL artist has wrong format");
                          return { id: e.id, name: e.name, bio: e.bio, picture: (0, fa.jg)(g.Ay.Artist, e.picture, t), fansCount: t.NB_FAN, social: e.social, onTour: e.onTour, status: e.status, hasSmartRadio: e.hasSmartRadio };
                        })(a.artist, n)
                      ),
                      c.createElement(ze.A, { items: this._getTabList(), active: i }),
                      c.createElement("div", { className: "catalog-content", role: "tabpanel" }, this._renderTabContent(i)),
                      c.createElement(Ke.A, { type: g.Ay.Artist, data: n })
                    );
                  },
                },
                {
                  key: "_renderTabContent",
                  value: function (e) {
                    var t,
                      n = this.props,
                      a = n.id,
                      r = n.dataFromStore,
                      i = n.shouldExplicitBeHidden,
                      l = n.userIsConnected;
                    switch (e) {
                      case Ue.G.DISCOGRAPHY:
                        return c.createElement(Rn, { id: Number(a), data: r, shouldExplicitBeHidden: i, userIsConnected: l });
                      case Ue.G.TOP_TRACK:
                        return c.createElement("div", { className: "container" }, c.createElement(Ne, { id: a, context: this._getContext((0, T.Pe)(g.Ay.Artist, P.sI)) }), c.createElement(le, { id: a, context: this._getContext((0, T.Pe)(g.Ay.Artist, P.sI)), items: (0, p.A)((r && (null === (t = r.TOP) || void 0 === t ? void 0 : t.data)) || []), shouldExplicitBeHidden: i }));
                      case Ue.G.RELATED_ARTIST:
                        return c.createElement(ca, { id: a });
                      case Ue.G.RELATED_PLAYLIST:
                        return c.createElement(Ze.A, { type: g.Ay.Artist, title: this._getTabLabel(e), pageContext: _t.CONTEXT_PAGE_ARTIST_TAB_RELATED_PLAYLIST, key: e, id: a, total: r.RELATED_PLAYLIST.total });
                      case Ue.G.CONCERTS:
                        return c.createElement(He, { artistId: a });
                      case Ue.G.BIOGRAPHY:
                        return c.createElement(Aa, { id: a });
                      case Ue.G.FAVORITES:
                        return c.createElement("div", { className: "container" }, c.createElement(_e, { id: a, shouldExplicitBeHidden: i }));
                      default:
                        return null;
                    }
                  },
                },
                {
                  key: "_onTabSelect",
                  value: function (e) {
                    var t = this.props.id,
                      n = "/artist/".concat(this.props.id);
                    e.id !== Ue.G.DISCOGRAPHY && (n += "/".concat(e.id)), e.id === Ue.G.CONCERT && this.props.tracking && this.props.tracking.trackEvent({ event: "click", eventlabel: "concert", eventaction: "click-navbar", eventcategory: "artist" }), e.id === Ue.G.FAVORITES && Ae(t), this.props.history.push((0, I.jd)(n));
                  },
                },
                {
                  key: "_getTabList",
                  value: function () {
                    var e,
                      t,
                      n,
                      a,
                      r,
                      i = this.props,
                      l = i.dataFromStore,
                      o = i.dataFromGQL;
                    return [
                      { id: Ue.G.DISCOGRAPHY, label: this._getTabLabel(Ue.G.DISCOGRAPHY), action: this._onTabSelect },
                      { id: Ue.G.TOP_TRACK, label: this._getTabLabel(Ue.G.TOP_TRACK), action: this._onTabSelect, disabled: !(null !== (e = l.TOP) && void 0 !== e && e.data.length) },
                      { id: Ue.G.RELATED_ARTIST, label: this._getTabLabel(Ue.G.RELATED_ARTIST), action: this._onTabSelect, disabled: !(null != o && null !== (t = o.artist) && void 0 !== t && null !== (t = t.relatedArtists) && void 0 !== t && t.edges.length) },
                      { id: Ue.G.RELATED_PLAYLIST, label: this._getTabLabel(Ue.G.RELATED_PLAYLIST), action: this._onTabSelect, disabled: !l.PLAYLISTS.length },
                      {
                        id: Ue.G.CONCERTS,
                        label: this._getTabLabel(Ue.G.CONCERTS),
                        action: this._onTabSelect,
                        isButton: !0,
                        disabled: !(
                          null != o &&
                          null !== (n = o.artist) &&
                          void 0 !== n &&
                          null !== (n = n.liveEvents) &&
                          void 0 !== n &&
                          n.edges.filter(function (e) {
                            return e.node;
                          }).length
                        ),
                      },
                      { id: Ue.G.BIOGRAPHY, label: this._getTabLabel(Ue.G.BIOGRAPHY), action: this._onTabSelect, disabled: !(null != o && null !== (a = o.artist) && void 0 !== a && null !== (a = a.bio) && void 0 !== a && a.full) },
                      { id: Ue.G.FAVORITES, label: this._getTabLabel(Ue.G.FAVORITES), action: this._onTabSelect, disabled: !_.A.isAllowed("artist_page_favorite_content") || !(null !== (r = o.me) && void 0 !== r && null !== (r = r.userFavorites.byArtist) && void 0 !== r && r.estimatedTracksCount) },
                    ];
                  },
                },
                {
                  key: "_getTabLabel",
                  value: function (e) {
                    switch (e) {
                      case Ue.G.DISCOGRAPHY:
                        return (0, b.AP)("discographytype_title_discography_web");
                      case Ue.G.TOP_TRACK:
                        return (0, b.AP)("Top titres");
                      case Ue.G.RELATED_ARTIST:
                        return (0, b.AP)("Artistes similaires");
                      case Ue.G.RELATED_PLAYLIST:
                        return (0, b.AP)("Playlists");
                      case Ue.G.CONCERT:
                        return (0, b.AP)("artistpage_title_ontour_web");
                      case Ue.G.CONCERTS:
                        return (0, b.AP)("generic_title_concerts_web");
                      case Ue.G.BIOGRAPHY:
                        return (0, b.AP)("Bio");
                      case Ue.G.FAVORITES:
                        return (0, b.AP)("artistpageentrypoint_title_inyourfavorites_web");
                      default:
                        return "";
                    }
                  },
                },
                {
                  key: "_getContext",
                  value: function (e) {
                    return { ID: this.props.id, TYPE: e };
                  },
                },
              ])
            );
          })(c.Component)),
          (ya.defaultProps = { selectedTab: Ue.G.DISCOGRAPHY }),
          (Ea = ya))
        ) || Ea;
      const Ia = (0, h.y)(
        (0, s.Ng)(function (e) {
          var t = e.user;
          return { shouldExplicitBeHidden: (0, Ve.Uw)(t) === wt.g, userIsConnected: (0, Ve.UJ)(t) };
        })(ga)
      );
      var Ta;
      function Pa(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function _a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Pa(Object(n), !0).forEach(function (t) {
                (0, l.A)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Pa(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var Sa = function (e) {
        var t = e.appState,
          n = e.match.params,
          a = (0, c.useState)(null),
          r = (0, o.A)(a, 2),
          i = r[0],
          l = r[1],
          p = (0, u.z1)(),
          A = (0, s.wA)(),
          E = (0, s.Pj)(),
          y = (0, s.d4)(function (e) {
            return (0, m.UV)(e.entities, n);
          });
        (0, c.useEffect)(
          function () {
            A(function () {
              (0, m._7)({ id: n.id, rehydrateData: t ? _a(_a({}, t), {}, { partial: !1 }) : void 0 })
                .apply(void 0, arguments)
                .catch(function (e) {
                  l(e);
                });
            }),
              p.trackEvent({ event: "updatepage", pagename: "artist", pagecategory: "catalog" });
          },
          [t, A, n.id, E, p]
        );
        var v = (0, c.useCallback)(
          function (e, t) {
            if (y && Number(t.id) === Number(n.id)) {
              var a = "USER.addFavorite" === e.namespace ? (y.NB_FAN || 0) + 1 : (y.NB_FAN || 0) - 1;
              A((0, m.Zt)({ id: n.id, nbFan: a }));
            }
          },
          [y, A, n.id]
        );
        (0, c.useEffect)(
          function () {
            return (
              d.A.subscribe(d.A.user.addFavorite, v),
              d.A.subscribe(d.A.user.deleteFavorite, v),
              function () {
                (0, m.w8)(), d.A.unsubscribe(d.A.user.addFavorite, v), d.A.unsubscribe(d.A.user.deleteFavorite, v);
              }
            );
          },
          [v]
        );
        var f = (0, Ie.wgW)({ variables: { artistId: n.id, relatedArtistFirst: 6, liveEventsFirst: 6 } }),
          h = f.data,
          b = f.loading,
          g = f.error;
        if (i) throw i;
        if (String(n.id) !== String(y && y.ART_ID) || (y && y.partial) || b) return Ta || (Ta = c.createElement(de.A, null));
        if (g) throw g;
        if (!h || !h.artist) {
          var I = new Error("missing data in artist graphql call");
          throw ((I.cause = JSON.stringify(h)), I);
        }
        return c.createElement(c.Suspense, { fallback: null }, c.createElement(Ia, { dataFromStore: y, dataFromGQL: h, id: n.id, selectedTab: n.tab, fetchTopTracks: A.bind(null, m.Cn) }));
      };
      Sa.displayName = "artist";
      const La = Sa;
    },
    ailv: (e, t, n) => {
      n.d(t, { SP: () => r, U$: () => s, Xw: () => l, rc: () => i, uV: () => c, v5: () => o });
      var a = n("LOQS"),
        r = (function (e) {
          return (e.CONCERT = "concert"), (e.CONCERT_WITH_LIVESTREAM = "concert_with_livestream"), (e.FESTIVAL = "festival"), (e.FESTIVAL_WITH_LIVESTREAM = "festival_with_livestream"), e;
        })({}),
        i = (function (e) {
          return (e.CLICK_CONCERT = "click_concert"), (e.BUY_TICKET = "buy_ticket"), (e.SEARCH = "search"), (e.REMINDER = "put_concert_reminder"), e;
        })({}),
        l = (function (e) {
          return (e.CONCERT_HUB_FOR_YOU = "concert_hub_for_you"), (e.CONCERT_DETAIL = "concert_detail"), (e.ARTIST = "artist"), (e.VIEW_ALL = "view_all_concerts"), (e.ALBUM = "album"), e;
        })({}),
        o = (function (e) {
          return (e.CITY = "city"), (e.CONCERT = "concert"), (e.ARTIST = "artist"), (e.ALBUM = "album"), e;
        })({}),
        c = function (e) {
          a.A.log({ type: "cdp", eventName: "concert_hub_used", customAttributes: e });
        },
        s = function (e) {
          return null != e && e.isConcert ? r.CONCERT : null != e && e.isFestival ? r.FESTIVAL : null != e && e.isLivestreamConcert ? r.CONCERT_WITH_LIVESTREAM : null != e && e.isLivestreamFestival ? r.FESTIVAL_WITH_LIVESTREAM : void 0;
        };
    },
    eerp: (e, t, n) => {
      n.d(t, { A: () => r });
      var a = { song: 0, track: 0, album: 1, artist: 2, playlist: 3, collaborativePlaylist: 3, radio: 4, smart_radio: 6, smartradio: 6, sradio: 6, show: 7, episode: 8 };
      function r(e) {
        return a[e];
      }
    },
    sk1u: (e, t, n) => {
      n.d(t, { A: () => a });
      const a = { thumbnail: "GryKF", "thumbnail-list": "U1nbu", thumbnailList: "U1nbu", "info-item": "dMJfv", infoItem: "dMJfv" };
    },
  },
]);
