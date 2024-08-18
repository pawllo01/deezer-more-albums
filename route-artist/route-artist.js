"use strict";
(self.webpackJsonpDeezer = self.webpackJsonpDeezer || []).push([
  [1670],
  {
    U9ZG: (e, t, a) => {
      a.d(t, { A: () => B });
      a("ndNi");
      var n,
        r,
        i,
        l = a("k6Di"),
        o = a("79Ja"),
        c = a("UHbJ"),
        s = a("udpn"),
        u = a("5hh5"),
        d = (a("iUT5"), a("17r/"), a("q1tI")),
        m = a("Ty5D"),
        p = a("/MKj"),
        A = a("cXQW"),
        E = a("NSet"),
        y = a("HmE0"),
        v = a("6K8D"),
        f = a("EPmj"),
        h = a("ZUSG"),
        b = a("5Loq"),
        g = a("Wp0Y"),
        I = a("5G9X"),
        T = a("LjZa"),
        P = a("tZCQ"),
        _ = a("TqF5"),
        S = a("0oT0"),
        L = a("2EvD"),
        O = a("Jfek"),
        x = a("eerp"),
        N = a("g1Fm"),
        D = a("cFUB"),
        w = a("AfN5");
      function k(e, t, a) {
        return (t = (0, s.A)(t)), (0, c.A)(e, C() ? Reflect.construct(t, a || [], (0, s.A)(e).constructor) : t.apply(e, a));
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
        function t(e, a) {
          var n;
          return (0, l.A)(this, t), ((n = k(this, t, [e, a]))._onEdit = n._onEdit.bind(n)), (n._onShare = n._onShare.bind(n)), (n._onGoToAccount = n._onGoToAccount.bind(n)), n;
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
                  a = e.id,
                  n = e.type;
                return d.createElement(S.A, { id: a, type: n, action: D.Hj.FAVORITE, context: t });
              },
            },
            {
              key: "_renderPlay",
              value: function () {
                var e = this.props,
                  t = e.id,
                  a = e.type,
                  n = e.context,
                  r = a === I.Ay.Song ? { radio: !0, forceAsFirstTrack: !0 } : {};
                return d.createElement(S.A, { action: D.Hj.PLAY, color: D.cW.PRIMARY, context: n, dzPlayerOptions: r, id: t, type: a === I.Ay.Song ? w.Kk.TRACK_MIX : a, wordingType: D.Hn.FULL });
              },
            },
            {
              key: "_renderShuffle",
              value: function () {
                var e = this.props,
                  t = e.id,
                  a = e.type,
                  n = e.context;
                return d.createElement(S.A, { id: t, type: a, action: D.Hj.SHUFFLE, color: D.cW.PRIMARY, wordingType: D.Hn.FULL, context: n });
              },
            },
            {
              key: "_renderShare",
              value: function () {
                return d.createElement(y.K0, { icon: n || (n = d.createElement(f.l, null)), onClick: this._onShare, variant: "ghost", "aria-label": (0, g.AP)("Partager") });
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
                  a = e.data,
                  n = e.id,
                  r = e.type,
                  l = { anchor: d.createElement(y.K0, { "aria-haspopup": !0, "aria-label": (0, g.AP)("generic_action_viewmenu_web"), icon: i || (i = d.createElement(b.j, null)), variant: "ghost" }), context: t, id: String(n), data: a, placement: "right", type: r };
                return d.createElement(L.A, l);
              },
            },
            {
              key: "_onShare",
              value: function () {
                var e = this.props,
                  t = e.id,
                  a = e.data,
                  n = e.context,
                  r = e.type;
                this.props.openModal({ name: O.DN, props: { componentType: O.Wg.directShareMasthead, context: n, data: a, id: t, type: (0, x.A)(r) } });
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
    Q6dJ: (e, t, a) => {
      a.d(t, { A: () => m });
      a("dfIA");
      var n = a("q1tI"),
        r = a("juqV"),
        i = a("GkjM"),
        l = a("3JOg"),
        o = a("rYh+");
      const c = { element: "ZzbWE" };
      var s,
        u = a("+RX7"),
        d = a("NSet");
      const m = function (e) {
        var t = e.date,
          a = e.title,
          m = e.subtitle,
          p = e.concertId,
          A = e.onClick,
          E = e.calendarIconSize,
          y = void 0 === E ? "sm" : E,
          v = e.className,
          f = e.locationState,
          h = "/concert/".concat(p);
        return n.createElement(l.A, null, n.createElement(i.A, { role: "button", to: { pathname: h, state: f }, onClick: A, className: (0, r.A)(c.element, v) }, n.createElement(u.V, { date: new Date(t), size: y }), n.createElement(d.az, { className: c.cell, flex: "1", flexDirection: "column", px: "spacing.m" }, n.createElement(d.DZ, { variant: "heading.xs", noOfLines: 1, mb: "spacing.xs", width: "100%" }, a), m && n.createElement(d.EY, { variant: "body.s.default", color: "text.neutral.secondary.default", noOfLines: 1, pb: "spacing.xs", width: "100%" }, m)), s || (s = n.createElement(o.A, { size: "16" }))));
      };
    },
    wGgI: (e, t, a) => {
      a.d(t, { qT: () => b, VX: () => g, y8: () => h, Ay: () => T });
      a("ndNi");
      var n = a("k6Di"),
        r = a("79Ja"),
        i = a("UHbJ"),
        l = a("udpn"),
        o = a("5hh5"),
        c = (a("17r/"), a("q1tI")),
        s = a("juqV"),
        u = a("HmE0"),
        d = a("yCtO");
      function m(e, t, a) {
        return (t = (0, l.A)(t)), (0, i.A)(e, p() ? Reflect.construct(t, a || [], (0, l.A)(e).constructor) : t.apply(e, a));
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
          return (0, n.A)(this, t), m(this, t, arguments);
        }
        return (
          (0, o.A)(t, e),
          (0, r.A)(t, [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.children,
                  a = e.isDisabled,
                  n = e.isSelected,
                  r = (0, s.A)("dropdown-item", { hidden: a, "is-selected": n });
                return c.createElement("li", { className: r }, t);
              },
            },
          ])
        );
      })(c.Component);
      A.defaultProps = { isDisabled: !1, isSelected: !1 };
      const E = A;
      var y;
      function v(e, t, a) {
        return (t = (0, l.A)(t)), (0, i.A)(e, f() ? Reflect.construct(t, a || [], (0, l.A)(e).constructor) : t.apply(e, a));
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
            var a;
            return (0, n.A)(this, t), ((a = v(this, t, [e]))._onToggle = a._onToggle.bind(a)), (a._onClose = a._onClose.bind(a)), (a.state = { label: e.children[e.selected].props.label || e.label, isOpen: !1 }), a;
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
                      a = e.align,
                      n = e.size,
                      r = e.overflow,
                      i = e.isDisabled,
                      l = this.state,
                      o = l.label,
                      m = l.isOpen,
                      p = (0, s.A)("dropdown", { "dropdown-active": this.state.isOpen }),
                      A = (0, s.A)("dropdown-menu", { "is-right": a === g, "is-overflow": r });
                    return c.createElement(
                      "span",
                      { className: p },
                      c.createElement(u.$n, { "data-testid": "dropdown_".concat(o), size: n, rightIcon: y || (y = c.createElement(d.e, null)), onClick: this._onToggle, variant: "outline", isDisabled: i }, o),
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
    aEwM: (e, t, a) => {
      a.d(t, { A: () => c });
      var n,
        r = a("q1tI"),
        i = a("KVgY"),
        l = a("RGaU"),
        o = a("5xmB");
      const c = function (e) {
        var t = e.placeholder,
          a = e.hasMore,
          c = e.loadMore,
          s = e.children;
        return s ? ("function" == typeof c ? r.createElement(i.A, { hasMore: a, loadMore: c, loader: n || (n = r.createElement(l.k, { key: "loader" })) }, s) : r.createElement(r.Fragment, null, s)) : r.createElement(o.A, t);
      };
    },
    "JKL/": (e, t, a) => {
      a.d(t, { A: () => i });
      var n = a("q1tI"),
        r = a("NSet");
      const i = function (e) {
        var t = e.children,
          a = e.className,
          i = void 0 === a ? "" : a;
        return n.createElement(r.az, { mt: "spacing.xl", mb: "spacing.2xl", className: i }, t);
      };
    },
    Ozpl: (e, t, a) => {
      a.d(t, { A: () => l });
      var n = a("q1tI"),
        r = a("juqV"),
        i = a("sk1u");
      const l = function (e) {
        var t = e.children,
          a = e.className,
          l = void 0 === a ? "" : a,
          o = (0, r.A)(i.A.infoItem, l);
        return n.createElement("li", { className: o }, t);
      };
    },
    WY4A: (e, t, a) => {
      a.d(t, { A: () => i });
      var n = a("q1tI"),
        r = a("NSet");
      const i = function (e) {
        var t = e.children,
          a = e.className,
          i = void 0 === a ? "" : a;
        return n.createElement(r.so, { as: "ul", mt: "spacing.xs", color: "text.neutral.secondary.default", className: i }, t);
      };
    },
    "oq/a": (e, t, a) => {
      a.d(t, { A: () => i });
      var n = a("q1tI"),
        r = a("NSet");
      const i = function (e) {
        var t = e.children,
          a = e.className,
          i = void 0 === a ? "" : a;
        return n.createElement(r.so, { justifyContent: "center", direction: "column", flex: "1", className: i }, t);
      };
    },
    WQvr: (e, t, a) => {
      a.d(t, { A: () => i });
      var n = a("q1tI"),
        r = a("NSet");
      const i = function (e) {
        var t = e.children,
          a = e.className,
          i = void 0 === a ? "" : a;
        return n.createElement(r.so, { alignItems: "center", gap: "spacing.s", "data-testid": "masthead-subtitle", className: i }, t);
      };
    },
    wRgy: (e, t, a) => {
      a.d(t, { A: () => u });
      var n = a("BkpH"),
        r = a("q1tI"),
        i = a("juqV"),
        l = a("NSet"),
        o = a("9OcB"),
        c = a("sk1u"),
        s = ["className", "children"];
      const u = function (e) {
        var t = e.className,
          a = void 0 === t ? "" : t,
          u = e.children,
          d = (0, n.A)(e, s),
          m = (0, i.A)(c.A.thumbnail, a);
        return r.createElement(l.az, { className: m }, r.createElement(o.A, d, u));
      };
    },
    zJSK: (e, t, a) => {
      a.d(t, { A: () => i });
      var n = a("q1tI"),
        r = a("NSet");
      const i = function (e) {
        var t = e.children,
          a = e.className,
          i = void 0 === a ? "" : a;
        return n.createElement(r.DZ, { color: "text.neutral.primary.default", variant: "display.m", mb: "spacing.xl", noOfLines: 2, wordBreak: "break-word", className: i }, t);
      };
    },
    "2NhJ": (e, t, a) => {
      a.d(t, { Ay: () => i });
      var n = a("q1tI"),
        r = a("NSet");
      const i = function (e) {
        var t = e.children,
          a = e.className,
          i = void 0 === a ? "" : a;
        return n.createElement(r.so, { gap: "spacing.2xl", className: i, "data-testid": "masthead" }, t);
      };
    },
    sdUN: (e, t, a) => {
      a.d(t, { A: () => L });
      var n = a("q1tI"),
        r = a("zThL"),
        i = (a("mRbW"), a("5G9X"));
      function l(e) {
        var t = e.type,
          a = e.data,
          l = a.SNG_TITLE,
          o = a.ART_NAME,
          c = a.ALB_TITLE,
          s = a.TITLE,
          u = a.SUBTITLE,
          d = a.SHOW_NAME,
          m = a.EPISODE_TITLE,
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
        return p ? n.createElement("meta", { itemProp: "name", content: p() }) : null;
      }
      a("DhvS"), a("dfIA");
      var o = a("Wp0Y");
      function c(e) {
        var t = e.type,
          a = e.data,
          l = a.SHOW_DESCRIPTION,
          c = a.DESCRIPTION,
          s = a.EPISODE_DESCRIPTION,
          u = a.ALB_TITLE,
          d = a.ART_NAME,
          m = a.ORIGINAL_RELEASE_DATE,
          p = a.PHYSICAL_RELEASE_DATE,
          A = a.TITLE,
          E = a.SUBTITLE,
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
        return y ? n.createElement("p", { className: "hidden", itemProp: "description" }, y()) : null;
      }
      var s = a("hz5U");
      function u(e) {
        var t = e.type,
          a = e.data;
        return n.createElement("meta", { itemProp: "image", content: s.A.getImageSrcForData(t, a, 200, 200) });
      }
      var d = a("iooo");
      function m(e) {
        var t = e.type,
          a = e.data,
          l = a.SNG_ID,
          o = a.SHOW_ID,
          c = a.PLAYLIST_ID,
          s = a.ART_ID,
          u = a.ALB_ID,
          m = a.EPISODE_ID,
          p = a.SMARTTRACKLIST_ID,
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
        return A ? n.createElement("meta", { itemProp: "url", content: (0, d.jd)(A()) }) : null;
      }
      a("/RZc"), a("/F+/"), a("ZnLO");
      function p(e) {
        var t = e.type,
          a = e.data.EPISODE_PUBLISHED_TIMESTAMP,
          l = (0, r.A)({}, i.Ay.Episode, function () {
            return new Date(a.replace(" ", "T") + "Z").toISOString();
          })[t];
        return l ? n.createElement("meta", { itemProp: "datePublished", content: l() }) : null;
      }
      function A(e) {
        var t = e.type,
          a = e.data.DURATION,
          l = (0, r.A)(
            (0, r.A)({}, i.Ay.Track, function () {
              return "PT".concat(Math.floor(a / 60), "M").concat(a % 60, "S");
            }),
            i.Ay.Episode,
            function () {
              return "PT".concat(Math.floor(a / 60), "M").concat(a % 60, "S");
            }
          )[t];
        return l ? n.createElement("meta", { itemProp: "duration", content: l() }) : null;
      }
      function E(e) {
        var t = e.type,
          a = e.data,
          l = a.EPISODES,
          o = a.NB_SONG,
          c = (0, r.A)(
            (0, r.A)({}, i.Ay.Show, function () {
              return l.total;
            }),
            i.Ay.Smarttracklist,
            function () {
              return o;
            }
          )[t];
        return c ? n.createElement("meta", { itemProp: "numTracks", content: c() }) : null;
      }
      a("uuq2"), a("lM/j"), a("8kcB");
      function y(e) {
        var t = e.type,
          a = e.data.ARTISTS,
          l = (0, r.A)(
            (0, r.A)({}, i.Ay.Album, function () {
              return a || [];
            }),
            i.Ay.Track,
            function () {
              return a || [];
            }
          )[t];
        if (!l) return null;
        var o = l().find(function (e) {
          return 0 === Number(e.ROLE_ID) || 5 === Number(e.ROLE_ID);
        });
        return o ? n.createElement("div", { itemProp: "byArtist", itemScope: "itemscope", itemType: "http://schema.org/MusicGroup" }, n.createElement("meta", { itemProp: "url", content: "/artist/".concat(o.ART_ID) }), n.createElement("meta", { itemProp: "name", content: o.ART_NAME })) : null;
      }
      a("iUT5");
      var v,
        f,
        h,
        b,
        g,
        I,
        T = a("/MKj"),
        P = a("3WcA"),
        _ = a("xobL");
      const S = (0, T.Ng)(function (e) {
        var t = e.user;
        return { userLang: (0, _.Z0)(t) };
      })(function (e) {
        var t = e.type,
          a = e.data,
          l = a.SHOW_ID,
          o = a.ART_ID,
          c = a.ALB_ID,
          s = a.SMARTTRACKLIST_ID,
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
          ? n.createElement(
              "div",
              { key: "action", itemProp: "potentialAction", itemScope: !0, itemType: "http://schema.org/ListenAction" },
              n.createElement("div", { itemProp: "target", itemScope: !0, itemType: "http://schema.org/EntryPoint" }, n.createElement("meta", { itemProp: "urlTemplate", content: "https://".concat(P.default.get("host_website_ssl")).concat(d()) }), v || (v = n.createElement("meta", { itemProp: "actionPlatform", content: "http://schema.org/DesktopWebPlatform" })), f || (f = n.createElement("meta", { itemProp: "actionPlatform", content: "http://schema.org/IOSPlatform" })), h || (h = n.createElement("meta", { itemProp: "actionPlatform", content: "http://schema.org/AndroidPlatform" })), b || (b = n.createElement("meta", { itemProp: "actionPlatform", content: "http://schema.googleapis.com/GoogleAudioCast" })), g || (g = n.createElement("meta", { itemProp: "actionPlatform", content: "http://schema.googleapis.com/GoogleVideoCast" })), n.createElement("meta", { itemProp: "inLanguage", content: u })),
              n.createElement(
                "div",
                { itemProp: "expectsAcceptanceOf", itemScope: !0, itemType: "http://schema.org/Offer" },
                I || (I = n.createElement("meta", { itemProp: "category", content: "subscription" })),
                P.default.get("country_opened").map(function (e) {
                  return n.createElement("div", { key: e, itemProp: "eligibleRegion", itemScope: !0, itemType: "http://schema.org/Country" }, n.createElement("meta", { itemProp: "name", content: e }));
                })
              )
            )
          : null;
      });
      function L(e) {
        return n.createElement("div", null, n.createElement(l, e), n.createElement(c, e), n.createElement(u, e), n.createElement(m, e), n.createElement(p, e), n.createElement(A, e), n.createElement(E, e), n.createElement(y, e), n.createElement(S, e));
      }
    },
    "61mP": (e, t, a) => {
      a.d(t, { G: () => n });
      var n = (function (e) {
        return (e.BIOGRAPHY = "biography"), (e.DISCOGRAPHY = "discography"), (e.RELATED_ARTIST = "related_artist"), (e.RELATED_PLAYLIST = "related_playlist"), (e.TOP_TRACK = "top_track"), (e.ARTIST = "artists"), (e.TRACK = "tracks"), (e.CONCERT = "concert"), (e.CONCERTS = "concerts"), (e.FAVORITES = "me"), e;
      })({});
    },
    "5xmB": (e, t, a) => {
      a.d(t, { B: () => o, A: () => c });
      var n = a("q1tI"),
        r = a("juqV"),
        i = a("Wp0Y");
      const l = { img: "wPuzu", text: "sIMmz", nocontent: "k4rH3", private: "OXBI2", recommendation: "IMAtw" };
      var o = (function (e) {
        return (e.NO_CONTENT = "nocontent"), (e.PRIVATE = "private"), (e.RECOMMENDATION = "recommendation"), e;
      })({});
      const c = function (e) {
        var t = e.img,
          a = void 0 === t ? o.NO_CONTENT : t,
          c = e.wording,
          s = void 0 === c ? (0, i.AP)("Aucun rĂŠsultat.") : c,
          u = e.className;
        return n.createElement("div", { className: (0, r.A)(l.root, u) }, n.createElement("div", { className: (0, r.A)(l.img, l[a]) }), n.createElement("div", { className: l.text }, s));
      };
    },
    "/G5K": (e, t, a) => {
      a.d(t, { A: () => m });
      var n = a("4/LG"),
        r = a("q1tI"),
        i = a("juqV"),
        l = a("/MKj"),
        o = a("xobL"),
        c = a("x4+n"),
        s = a("BJtZ");
      const u = { root: "MaxOe", label: "xogtX", "is-active": "oSYze", isActive: "oSYze", "is-disabled": "nRbxm", isDisabled: "nRbxm", "is-restricted": "K50Uu", isRestricted: "K50Uu" };
      var d = a("iiSH");
      const m = function (e) {
        var t = e.date,
          a = e.dataTestId,
          m = (0, l.d4)(function (e) {
            return [(0, o.mI)({ SERVER_TIMESTAMP: (0, o.mS)(e.user), clientTimestampDelta: (0, o.gE)(e.user) })];
          }),
          p = (0, n.A)(m, 1)[0],
          A = (0, i.A)(u.label, (0, s.A)(u));
        return r.createElement("div", { className: u.root }, r.createElement("span", { className: A, "data-testid": a }, t > 0 ? (0, c.E)(t, p) : d.fs));
      };
    },
    xLtY: (e, t, a) => {
      a.d(t, { A: () => u });
      a("OPc6"), a("8kcB");
      var n = a("q1tI"),
        r = a("S6U4"),
        i = a("lXQd"),
        l = a("Wp0Y"),
        o = a("NSet"),
        c = a("Z9kq"),
        s = a("xCFc");
      const u = function (e) {
        var t = e.placeholder,
          a = void 0 === t ? (0, l.AP)("search_action_searchwithintracks_web") : t,
          u = n.useContext(s.Gt),
          d = u.manageItems,
          m = u.loadingStatus;
        if (!d || "function" != typeof d.action.filter) return null;
        var p = (0, r.A)(function (e) {
          d.action.filter((0, i.A)(e, "target.value", ""));
        }, 500);
        return n.createElement(o.so, { flex: "1", ms: "spacing.m", my: 0, w: { md: "375px", base: "320px" } }, n.createElement(c.D, { isDisabled: m.isLoadingAll, onChange: p, size: "medium", placeholder: a }));
      };
    },
    ZH8F: (e, t, a) => {
      a.d(t, { e: () => r, g: () => n });
      var n = (function (e) {
          return (e.FILTER = "table-filter"), (e.PLAY = "table-play"), e;
        })({}),
        r = function (e, t) {
          return new CustomEvent(e, { detail: t });
        };
    },
    dalA: (e, t, a) => {
      a.d(t, { A: () => r });
      var n = a("q1tI");
      const r = function (e, t, a) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : document,
          i = function (e) {
            var n = e.detail;
            n.context.ID === a.ID && n.context.TYPE === a.TYPE && t(n);
          };
        return (
          n.useEffect(function () {
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
    Eiyd: (e, t, a) => {
      a.d(t, { A: () => u });
      var n = a("q1tI"),
        r = a("H/eQ"),
        i = a("N67Q"),
        l = a("0oT0"),
        o = a("1h7S"),
        c = a("cFUB"),
        s = a("ZH8F");
      const u = function () {
        var e = n.useContext(o.PK),
          t = e.containerData,
          a = e.context,
          u = e.id,
          d = e.type,
          m = (0, n.useCallback)(
            function () {
              document.dispatchEvent((0, s.e)(s.g.PLAY, { context: a }));
            },
            [a]
          );
        return (
          (0, n.useEffect)(
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
          t.NB_SONG || t.NB_EPISODES ? n.createElement(i.A, { testId: "play" }, n.createElement(l.A, { id: u, items: t.items || void 0, type: d, onClick: m, context: a, action: c.Hj.PLAY_SMALL, color: c.cW.PRIMARY, wordingType: c.Hn.STANDARD })) : null
        );
      };
    },
    "1h7S": (e, t, a) => {
      a.d(t, { Ay: () => p, PK: () => d });
      a("U7DL"), a("OPc6"), a("Tjdq"), a("OeVk"), a("8z5Z"), a("VmXY"), a("nTc2"), a("9Y+k"), a("8kcB"), a("Y4Uu");
      var n = a("zThL"),
        r = a("4/LG"),
        i = a("pxHn"),
        l = a("Jfek");
      function o(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(a), !0).forEach(function (t) {
                (0, n.A)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : o(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
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
    N67Q: (e, t, a) => {
      a.d(t, { A: () => r });
      var n = a("q1tI");
      const r = function (e) {
        var t = e.children,
          a = e.testId;
        return a ? n.createElement("div", { "data-testid": a }, t) : n.createElement("div", null, t);
      };
    },
    Dteb: (e, t, a) => {
      a.r(t), a.d(t, { default: () => Ln });
      var n,
        r,
        i,
        l = a("zThL"),
        o = a("4/LG"),
        c = (a("aGIQ"), a("17r/"), a("lM/j"), a("/F+/"), a("U7DL"), a("OPc6"), a("Tjdq"), a("OeVk"), a("8z5Z"), a("VmXY"), a("nTc2"), a("9Y+k"), a("8kcB"), a("XFml"), a("Y4Uu"), a("q1tI")),
        s = a("/MKj"),
        u = a("X6oL"),
        d = a("H/eQ"),
        m = a("g1Ko"),
        p = a("gibH"),
        A = a("k6Di"),
        E = a("79Ja"),
        y = a("UHbJ"),
        v = a("udpn"),
        f = a("5hh5"),
        h = (a("p8tg"), a("GAJO"), a("ndNi"), a("/0S2"), a("Ty5D")),
        b = a("Wp0Y"),
        g = a("5G9X"),
        I = a("iooo"),
        T = a("p/gB"),
        P = a("AY3M"),
        _ = a("tZCQ"),
        S = a("0JBE"),
        L = (a("iUT5"), a("8m9I")),
        O = a("1Pdy"),
        x = a("AfN5"),
        N = a("STEc"),
        D = a("DjLa"),
        w = (D.WR.PLAYLIST, { TITLE: { SIZE: N.uq.Full }, PARENT: { BREAKPOINT: N.x1.md, SIZE: N.uq.PercentXs }, DURATION: { SIZE: N.uq.sm }, POPULARITY: { BREAKPOINT: N.x1.xl, SIZE: N.uq.sm }, SELECT: { ALIGN: N.uP.Right, SIZE: N.uq.sm } }),
        k = a("xCFc"),
        C = a("NSet"),
        R = a("xLtY"),
        B = a("BP9I"),
        G = a("1Uwb"),
        M = a("hIIJ"),
        j = (a("mRbW"), a("9D62")),
        F = a("lXQd"),
        H = a("o+h5"),
        Y = a("pQlO"),
        U = a("0oF4"),
        z = a("r4LN"),
        Z = a("wkd/"),
        K = a("LGn+"),
        q = a("tgyz"),
        V = a("CxZw"),
        X = a("SehT");
      function W(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function J(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? W(Object(a), !0).forEach(function (t) {
                (0, l.A)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : W(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
              });
        }
        return e;
      }
      var Q = function (e) {
        var t = e.data,
          a = e.index,
          l = e.style,
          o = (0, k.$A)(),
          s = o.context,
          u = o.container,
          d = o.shouldExplicitBeHidden,
          m = (0, q.A)(s, u, !0),
          p = m.playerStatus,
          A = m.play,
          E = m.isItemLoadedInPlayer,
          y = t.toDisplay[a],
          v = y.item.hasExplicitLyrics && d,
          f = (0, c.useCallback)(
            function (e, a) {
              A({ playIndex: a, playItems: t.toPlay, isTrackActive: e });
            },
            [t.toPlay, A]
          ),
          h = (0, c.useCallback)(
            function (e) {
              A({ notify: !1, playIndex: e, playItems: t.toPlay, playLyrics: !0 });
            },
            [t.toPlay, A]
          );
        return c.createElement(G.A.Row, { style: l, uuid: y.uuid, id: y.item.id, index: y.index, isActive: E(y.item) && p.isSameContext, isReadable: y.item.right === V.A.READABLE, isRestrictedByExplicit: v, type: y.item.type, isDraggable: !0 }, c.createElement(K.A, { size: w.TITLE.SIZE }, c.createElement(K.A.Play, { ariaLabel: (0, b.AP)("generic_action_playsongXbyartistX_web", { sprintf: [y.item.title, (0, F.A)(y, "item.artists[0].name", "")] }), hasExplicitCover: y.item.parent.hasExplicitCover, onPlayItems: f, pictureUrl: y.item.cover(H.r4).url }), n || (n = c.createElement(K.A.Download, null)), c.createElement(K.A.PlayableLabel, { hasExplicitLyrics: y.item.hasExplicitLyrics, label: "".concat(y.item.number || 0, ". ").concat(y.item.title), onPlayItems: f, tooltipText: (0, X.Y)(y.item, d) }), c.createElement(G.A.IconGroup, null, c.createElement(K.A.ShowLyrics, { item: y.item, lyricsId: y.item.lyricsId, onPlayLyrics: h }), r || (r = c.createElement(K.A.AddToFeedback, null)), c.createElement(K.A.OpenContextMenu, { item: y.item }))), c.createElement(G.A.CellBody, { breakpoint: w.PARENT.BREAKPOINT, size: w.PARENT.SIZE }, c.createElement(z.A, { links: [J(J({}, y.item.parent), {}, { type: g.Ay.Album })] })), c.createElement(G.A.CellBody, { size: w.DURATION.SIZE }, c.createElement(Y.A, { duration: y.item.duration })), c.createElement(G.A.CellBody, { breakpoint: w.POPULARITY.BREAKPOINT, size: w.POPULARITY.SIZE }, c.createElement(U.A, { rank: y.item.popularity })), c.createElement(G.A.CellBody, { align: w.SELECT.ALIGN, size: w.SELECT.SIZE }, i || (i = c.createElement(Z.A, null))));
      };
      const $ = (0, c.memo)(Q, j.t7);
      var ee,
        te,
        ae,
        ne = a("ZH8F"),
        re = a("dalA"),
        ie = a("ftFY"),
        le = a("7u2F");
      const oe = function (e) {
        var t = e.context,
          a = e.id,
          n = e.items,
          r = e.shouldExplicitBeHidden,
          i = void 0 !== r && r,
          l = { id: a, type: x.Kk.TOP_ARTIST },
          o = (0, ie.A)(a, n, t),
          s = o.manageItems,
          u = o.tableItems,
          d = (0, le.A)(u, t),
          m = (0, q.A)(t, l, !0),
          p = m.playerStatus,
          A = m.play;
        (0, re.A)(
          ne.g.PLAY,
          function () {
            A({ playItems: u.toPlay });
          },
          t
        );
        var E = (0, k.Ay)({ container: l, context: t, manageItems: s, playerStatus: p, select: d, shouldExplicitBeHidden: i });
        return c.createElement(
          k.ru,
          { value: E },
          c.createElement(C.so, { alignItems: "center", mb: "spacing.2xl" }, c.createElement(M.A, { title: (0, b.AP)("Top titres") }), ee || (ee = c.createElement(R.A, null))),
          c.createElement(
            G.A,
            { rowCount: u.toDisplay.length },
            c.createElement(G.A.Header, null, c.createElement(G.A.CellHead, { size: w.TITLE.SIZE, sortPath: "item.title" }, (0, b.AP)("datagrid_title_trackUPP_web")), c.createElement(G.A.CellHead, { breakpoint: w.PARENT.BREAKPOINT, size: w.PARENT.SIZE, sortPath: "item.parent.name" }, (0, b.AP)("datagrid_title_albumUPP_web")), c.createElement(G.A.CellHead, { ariaLabel: (0, b.AP)("sortingmenu_title_duration_web"), size: w.DURATION.SIZE, sortPath: "item.duration" }, te || (te = c.createElement(L.m, null))), c.createElement(G.A.CellHead, { breakpoint: w.POPULARITY.BREAKPOINT, size: w.POPULARITY.SIZE, sortPath: "item.popularity" }, (0, b.AP)("datagrid_title_popularityabbrevUPP_web")), c.createElement(G.A.CellHead, { align: w.SELECT.ALIGN, size: w.SELECT.SIZE }, ae || (ae = c.createElement(B.A, null)))),
            c.createElement(
              G.A.Body,
              null,
              u.toDisplay.map(function (e, t) {
                return c.createElement($, { data: u, key: e.uuid, index: t, style: { height: O.F4.md } });
              })
            )
          )
        );
      };
      a("WpbS"), D.WR.PLAYLIST;
      var ce,
        se,
        ue,
        de = { TITLE: { SIZE: N.uq.Full }, PARENT: { BREAKPOINT: N.x1.md, SIZE: N.uq.PercentXs }, DATE: { BREAKPOINT: N.x1.md, SIZE: N.uq.xl }, DURATION: { SIZE: N.uq.sm }, POPULARITY: { BREAKPOINT: N.x1.xl, SIZE: N.uq.sm }, SELECT: { ALIGN: N.uP.Right, SIZE: N.uq.sm } },
        me = a("FSqQ"),
        pe = (a("dfIA"), a("/G5K")),
        Ae = a("LOQS"),
        Ee = function (e) {
          Ae.A.log({ type: "cdp", eventName: "view_all_clicked", customAttributes: { screen_view_name: "artist", screen_view_id_type: "artist", screen_view_id: String(e), section_name: "artist_favorite_items" } });
        };
      function ye(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function ve(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ye(Object(a), !0).forEach(function (t) {
                (0, l.A)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : ye(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
              });
        }
        return e;
      }
      var fe = function (e) {
        var t = e.data,
          a = e.index,
          n = e.style,
          r = (0, k.$A)(),
          i = r.context,
          l = r.container,
          o = r.shouldExplicitBeHidden,
          s = (0, q.A)(i, l),
          u = s.playerStatus,
          d = s.play,
          m = s.isItemLoadedInPlayer,
          p = t.toDisplay[a],
          A = p.item.hasExplicitLyrics && o,
          E = function (e, n) {
            var r, i, l;
            (d({ playIndex: n, playItems: t.toPlay, isTrackActive: e, playSeveralTracks: !0 }), e) || ((i = null === (r = t.toPlay[a].artist) || void 0 === r ? void 0 : r.id), (l = t.toPlay[a].id), i && Ae.A.log({ type: "cdp", eventName: "play_clicked", eventVersion: 2, customAttributes: { screen_view_name: "artist_favorite_items", screen_view_id_type: "artist", screen_view_id: i, play_type: "direct_play", item_id: l, item_type: "track" } }));
          };
        return c.createElement(
          G.A.Row,
          { style: n, uuid: p.uuid, id: p.item.id, index: p.index, isActive: m(p.item) && u.isSameContext, isReadable: p.item.right === V.A.READABLE, isRestrictedByExplicit: A, type: p.item.type, isDraggable: !0 },
          c.createElement(
            K.A,
            { size: de.TITLE.SIZE },
            c.createElement(K.A.Play, { ariaLabel: (0, b.AP)("generic_action_playsongXbyartistX_web", { sprintf: [p.item.title, (0, F.A)(p, "item.artists[0].name", "")] }), hasExplicitCover: p.item.parent.hasExplicitCover, onPlayItems: E, pictureUrl: p.item.cover(H.r4).url }),
            ce || (ce = c.createElement(K.A.Download, null)),
            c.createElement(K.A.PlayableLabel, { hasExplicitLyrics: p.item.hasExplicitLyrics, label: p.item.title, onPlayItems: E, tooltipText: (0, X.Y)(p.item, o) }),
            c.createElement(
              G.A.IconGroup,
              null,
              c.createElement(K.A.ShowLyrics, {
                item: p.item,
                lyricsId: p.item.lyricsId,
                onPlayLyrics: function (e) {
                  d({ notify: !1, playIndex: e, playItems: t.toPlay, playLyrics: !0, playSeveralTracks: !0 });
                },
              }),
              se || (se = c.createElement(K.A.AddToFeedback, null)),
              c.createElement(K.A.OpenContextMenu, { item: p.item })
            )
          ),
          c.createElement(G.A.CellBody, { breakpoint: de.PARENT.BREAKPOINT, size: de.PARENT.SIZE }, c.createElement(z.A, { links: [ve(ve({}, p.item.parent), {}, { type: g.Ay.Album })] })),
          c.createElement(G.A.CellBody, { breakpoint: de.DATE.BREAKPOINT, size: de.DATE.SIZE }, c.createElement(pe.A, { date: new Date(p.item.date).getTime(), dataTestId: "added" })),
          c.createElement(G.A.CellBody, { size: de.DURATION.SIZE }, c.createElement(Y.A, { duration: p.item.duration })),
          c.createElement(G.A.CellBody, { breakpoint: de.POPULARITY.BREAKPOINT, size: de.POPULARITY.SIZE }, c.createElement(U.A, { rank: p.item.popularity })),
          c.createElement(G.A.CellBody, { align: de.SELECT.ALIGN, size: de.SELECT.SIZE }, ue || (ue = c.createElement(Z.A, null)))
        );
      };
      const he = (0, c.memo)(fe, j.t7);
      var be,
        ge,
        Ie,
        Te = a("A2sV");
      function Pe(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function _e(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Pe(Object(a), !0).forEach(function (t) {
                (0, l.A)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : Pe(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
              });
        }
        return e;
      }
      const Se = function (e) {
        var t,
          a,
          n,
          r = e.id,
          i = e.shouldExplicitBeHidden,
          l = void 0 !== i && i,
          o = (0, Te.gWG)({ variables: { artistId: r, first: 20, cursor: null }, fetchPolicy: "cache-and-network" }),
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
          [A, m, null == p || null === (a = p.me) || void 0 === a || null === (a = a.userFavorites.byArtist) || void 0 === a || null === (a = a.tracks) || void 0 === a ? void 0 : a.pageInfo.endCursor]
        ),
          c.useEffect(
            function () {
              !(function (e) {
                Ae.A.log({ type: "cdp", eventName: "screen_view", customAttributes: { screen_view_name: "artist_favorite_items", screen_view_id_type: "artist", screen_view_id: e } });
              })(r);
            },
            [r]
          );
        var E = { ID: r, TYPE: "artist_collected_tracks_page" },
          y = { id: r, type: x.Kk.TRACK },
          v = (0, q.A)(E, y).playerStatus,
          f =
            null != p && null !== (n = p.me) && void 0 !== n && null !== (n = n.userFavorites) && void 0 !== n && null !== (n = n.byArtist) && void 0 !== n && null !== (n = n.tracks) && void 0 !== n && n.edges
              ? (p.me.userFavorites.byArtist.tracks.edges || []).reduce(function (e, t) {
                  return t.node && e.push(_e(_e({}, t.node), {}, { date: t.favoritedAt })), e;
                }, [])
              : [],
          h = (0, ie.A)(r, f, E),
          g = h.manageItems,
          I = h.tableItems,
          T = (0, le.A)(I, E);
        if (d && !p) return be || (be = c.createElement(me.A, null));
        var P = (0, k.Ay)({ container: y, context: E, manageItems: g, select: T, shouldExplicitBeHidden: l, playerStatus: v });
        return c.createElement(
          k.ru,
          { value: P },
          c.createElement(
            G.A,
            { rowCount: I.toDisplay.length },
            c.createElement(G.A.Header, null, c.createElement(G.A.CellHead, { size: de.TITLE.SIZE, sortPath: "item.title" }, (0, b.AP)("datagrid_title_trackUPP_web")), c.createElement(G.A.CellHead, { breakpoint: de.PARENT.BREAKPOINT, size: de.PARENT.SIZE, sortPath: "item.parent.name" }, (0, b.AP)("datagrid_title_albumUPP_web")), c.createElement(G.A.CellHead, { breakpoint: de.DATE.BREAKPOINT, size: de.DATE.SIZE, sortPath: "item.date" }, (0, b.AP)("datagrid_title_addedtrackUPP_web")), c.createElement(G.A.CellHead, { ariaLabel: (0, b.AP)("sortingmenu_title_duration_web"), size: de.DURATION.SIZE, sortPath: "item.duration" }, ge || (ge = c.createElement(L.m, null))), c.createElement(G.A.CellHead, { breakpoint: de.POPULARITY.BREAKPOINT, size: de.POPULARITY.SIZE, sortPath: "item.popularity" }, c.createElement("span", null, (0, b.AP)("datagrid_title_popularityabbrevUPP_web"))), c.createElement(G.A.CellHead, { align: de.SELECT.ALIGN, size: de.SELECT.SIZE }, Ie || (Ie = c.createElement(B.A, null)))),
            c.createElement(
              G.A.Body,
              null,
              I.toDisplay.map(function (e, t) {
                return c.createElement(he, { data: I, key: e.uuid, index: t, style: { height: O.F4.md } });
              })
            )
          )
        );
      };
      var Le,
        Oe = a("1h7S"),
        xe = a("Eiyd"),
        Ne = a("cXQW");
      const De = function (e) {
        var t = e.id,
          a = e.context,
          n = (0, s.d4)(function (e) {
            return (0, m.MD)(e.entities, { id: t });
          }),
          r = (0, Oe.Ay)({ containerData: { items: n.data }, context: a, id: t, type: g.Ay.TopArtistFull });
        return c.createElement(Oe.PK.Provider, { value: r }, Le || (Le = c.createElement(Ne.e, { gap: "spacing.xs", spacing: 0, "data-testid": "toolbar" }, c.createElement(xe.A, null))));
      };
      a("Ojuz");
      var we = a("mk5l"),
        ke = a("Q6dJ"),
        Ce = a("5xmB"),
        Re = a("Z9kq");
      const Be = "Wktsb",
        Ge = "lvRs2",
        Me = "axvzv";
      var je = a("ailv");
      const Fe = function (e) {
        var t = e.artistId,
          a = e.concerts,
          n = (0, u.z1)(),
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
            if (!l || "" === l) return a;
            var t = e.filter(function (e) {
              var t;
              return !(!(0, we.A)(e.name.toLowerCase()).includes((0, we.A)(l.toLowerCase())) && !(0, we.A)(null === (t = e.location) || void 0 === t ? void 0 : t.toLowerCase()).includes((0, we.A)(l.toLowerCase())));
            });
            return t.length || n.trackEvent({ event: "click", eventaction: "search", eventcategory: "artist-concert", eventlabel: "no-result" }), t;
          })(a);
        return c.createElement(
          "div",
          { className: "catalog-tab-discography" },
          c.createElement(
            "div",
            { className: "container" },
            c.createElement(
              "div",
              { className: Be },
              c.createElement(M.A, { className: Ge }, (0, b.AP)("eventpage_action_alltourdates_web")),
              c.createElement(
                "div",
                { className: Me },
                c.createElement(Re.D, {
                  onChange: d,
                  size: "small",
                  placeholder: (0, b.AP)("eventsubpage_text_searchbycitycountryvenueorevent_web"),
                  onFocus: function () {
                    return n.trackEvent({ event: "click", eventaction: "search", eventcategory: "artist-concert", eventlabel: "click-to-search" });
                  },
                })
              )
            ),
            m.length
              ? m.map(function (e, a) {
                  return c.createElement(ke.A, {
                    concertId: e.id,
                    title: e.name,
                    date: e.date,
                    subtitle: e.location,
                    key: e.id,
                    onClick: function () {
                      return (function (e, a) {
                        (0, je.uV)({ action: je.rc.CLICK_CONCERT, screen_view_id_type: je.v5.ARTIST, screen_view_id: t, screen_view_name: je.Xw.ARTIST, item_type: (0, je.U$)(e.types), concert_ranking: a, item_id: e.id });
                      })(e, a);
                    },
                    locationState: { referringArtistId: t },
                  });
                })
              : c.createElement(Ce.A, { wording: (0, b.AP)("errormessage_text_sorryeventcouldnotbefound_web") })
          )
        );
      };
      var He;
      const Ye = function (e) {
        var t = e.artistId,
          a = (0, Te.AgB)({ variables: { artistId: t, liveEventsFirst: 70 } }),
          n = a.data,
          r = a.loading,
          i = a.error,
          l = a.fetchMore;
        if (
          ((0, c.useEffect)(
            function () {
              var e;
              n && n.artist && null !== (e = n.artist.liveEvents) && void 0 !== e && e.pageInfo.hasNextPage && l({ variables: { artistId: t, liveEventsAfter: n.artist.liveEvents.pageInfo.endCursor, liveEventsFirst: 70 } });
            },
            [n, l, t]
          ),
          i)
        )
          throw i;
        if (r) return He || (He = c.createElement(me.A, null));
        if (!n || !n.artist) {
          var o = new Error("missing data in artist concert graphql call");
          throw ((o.cause = JSON.stringify(n)), o);
        }
        if (!n.artist.liveEvents) throw new Error("This artist has no concert available");
        var s = n.artist.liveEvents.edges
          .map(function (e) {
            var t = e.node;
            return t ? { id: t.id, name: t.name, location: t.cityName && t.countryCode ? "".concat(t.cityName, ", ").concat(t.countryCode) : "", date: t.startDate, types: t.types } : null;
          })
          .filter(Boolean);
        return c.createElement(Fe, { artistId: t, concerts: s });
      };
      var Ue,
        ze = a("61mP"),
        Ze = a("MTsA"),
        Ke = a("YVUD"),
        qe = a("sdUN"),
        Ve = (a("fKLj"), a("uUhk"), a("juqV")),
        Xe = (a("O3J2"), a("xobL")),
        We = (a("aRRr"), { TITLE: { SIZE: N.uq.Full }, PARENT: { SIZE: N.uq.xxl } });
      function Je(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function Qe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Je(Object(a), !0).forEach(function (t) {
                (0, l.A)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : Je(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
              });
        }
        return e;
      }
      var $e = function (e) {
        var t = e.data,
          a = e.index,
          n = e.style,
          r = t.toDisplay[a],
          i = c.useContext(k.Gt),
          l = i.context,
          o = i.container,
          s = i.shouldExplicitBeHidden,
          u = (0, q.A)(l, o, !0),
          d = u.playerStatus,
          m = u.play,
          p = u.isItemLoadedInPlayer,
          A = r.item.hasExplicitLyrics && s,
          E = function (e, a) {
            m({ playIndex: a, playItems: t.toPlay, isTrackActive: e });
          };
        return c.createElement(G.A.Row, { style: n, uuid: r.uuid, id: r.item.id, index: r.index, isActive: p(r.item) && d.isSameContext, isReadable: r.item.right === V.A.READABLE, isRestrictedByExplicit: A, type: r.item.type }, c.createElement(K.A, { size: We.TITLE.SIZE }, c.createElement(K.A.Play, { ariaLabel: (0, b.AP)("generic_action_playsongXbyartistX_web", { sprintf: [r.item.title, r.item.parent.name] }), hasExplicitCover: r.item.parent.hasExplicitCover, onPlayItems: E, pictureUrl: r.item.cover(H.r8).url }), Ue || (Ue = c.createElement(K.A.Download, null)), c.createElement(K.A.PlayableLabel, { description: r.item.description, hasExplicitLyrics: r.item.hasExplicitLyrics, label: r.item.title, onPlayItems: E, tooltipText: (0, X.Y)(r.item, s) }), c.createElement(G.A.IconGroup, null, c.createElement(K.A.OpenContextMenu, { item: r.item }))), c.createElement(G.A.CellBody, { size: We.PARENT.SIZE }, c.createElement(z.A, { links: [Qe(Qe({}, r.item.parent), {}, { type: g.Ay.Show })] })));
      };
      const et = c.memo($e, j.t7);
      const tt = function (e) {
        var t = e.context,
          a = e.id,
          n = e.items,
          r = e.shouldExplicitBeHidden,
          i = void 0 !== r && r,
          l = { id: a, type: x.Kk.EPISODE },
          o = O.F4.lg,
          s = (0, ie.A)(a, n, t),
          u = s.manageItems,
          d = s.tableItems,
          m = (0, q.A)(t, l, !0).playerStatus,
          p = (0, k.Ay)({ container: l, context: t, hasBackground: !1, manageItems: u, playerStatus: m, rowHeight: o, shouldExplicitBeHidden: i });
        return c.createElement(
          k.ru,
          { value: p },
          c.createElement(
            G.A,
            { rowCount: d.toDisplay.length },
            c.createElement(
              G.A.Body,
              null,
              d.toDisplay.map(function (e, t) {
                return c.createElement(et, { data: d, key: e.uuid, index: t, style: { height: o } });
              })
            )
          )
        );
      };
      var at,
        nt,
        rt = { TITLE: { SIZE: N.uq.Full } },
        it = function (e) {
          var t = e.data,
            a = e.index,
            n = e.style,
            r = (0, k.$A)(),
            i = r.context,
            l = r.container,
            o = r.shouldExplicitBeHidden,
            s = (0, q.A)(i, l, !1),
            u = s.playerStatus,
            d = s.play,
            m = s.isItemLoadedInPlayer,
            p = t.toDisplay[a],
            A = p.item.hasExplicitLyrics && o,
            E = (0, c.useCallback)(
              function (e, a) {
                d({ playIndex: a, playItems: t.toPlay, isTrackActive: e });
              },
              [t.toPlay, d]
            ),
            y = (0, c.useCallback)(
              function (e) {
                d({ notify: !1, playIndex: e, playItems: t.toPlay, playLyrics: !0 });
              },
              [t.toPlay, d]
            );
          return c.createElement(G.A.Row, { style: n, uuid: p.uuid, id: p.item.id, index: p.index, isActive: m(p.item) && u.isSameContext, isReadable: p.item.right === V.A.READABLE, isRestrictedByExplicit: A, type: p.item.type, isDraggable: !0 }, c.createElement(K.A, { size: rt.TITLE.SIZE }, c.createElement(K.A.Play, { ariaLabel: (0, b.AP)("generic_action_playsongXbyartistX_web", { sprintf: [p.item.title, (0, F.A)(p, "item.artists[0].name", "")] }), hasExplicitCover: p.item.parent.hasExplicitCover, onPlayItems: E, pictureUrl: p.item.cover(H.r4).url }), at || (at = c.createElement(K.A.Download, null)), c.createElement(K.A.PlayableLabel, { hasExplicitLyrics: p.item.hasExplicitLyrics, label: "".concat(p.item.number || 0, ". ").concat(p.item.title), onPlayItems: E, tooltipText: (0, X.Y)(p.item, o) }), c.createElement(G.A.IconGroup, null, c.createElement(K.A.ShowLyrics, { item: p.item, lyricsId: p.item.lyricsId, onPlayLyrics: y }), nt || (nt = c.createElement(K.A.AddToFeedback, null)), c.createElement(K.A.OpenContextMenu, { item: p.item }))));
        };
      const lt = (0, c.memo)(it, j.t7);
      const ot = function (e) {
        var t = e.context,
          a = e.id,
          n = e.items,
          r = e.shouldExplicitBeHidden,
          i = void 0 !== r && r,
          l = { id: a, type: x.Kk.ALBUM },
          o = (0, ie.A)(a, n, t),
          s = o.manageItems,
          u = o.tableItems,
          d = (0, q.A)(t, l, !0).playerStatus,
          m = (0, k.Ay)({ container: l, context: t, hasBackground: !1, manageItems: s, playerStatus: d, shouldExplicitBeHidden: i });
        return c.createElement(
          k.ru,
          { value: m },
          c.createElement(
            G.A,
            { rowCount: u.toDisplay.length },
            c.createElement(
              G.A.Body,
              null,
              u.toDisplay.map(function (e, t) {
                return c.createElement(lt, { data: u, key: e.uuid, index: t, style: { height: O.F4.md } });
              })
            )
          )
        );
      };
      var ct,
        st,
        ut = { TITLE: { SIZE: N.uq.Full }, ARTIST: { SIZE: N.uq.PercentXs } };
      function dt(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function mt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? dt(Object(a), !0).forEach(function (t) {
                (0, l.A)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : dt(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
              });
        }
        return e;
      }
      var pt = function (e) {
        var t = e.data,
          a = e.index,
          n = e.style,
          r = (0, k.$A)(),
          i = r.context,
          l = r.container,
          o = r.shouldExplicitBeHidden,
          s = (0, q.A)(i, l, !1),
          u = s.playerStatus,
          d = s.play,
          m = s.isItemLoadedInPlayer,
          p = t.toDisplay[a],
          A = p.item.hasExplicitLyrics && o,
          E = (0, c.useCallback)(
            function (e, a) {
              d({ playIndex: a, playItems: t.toPlay, isTrackActive: e });
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
          G.A.Row,
          { style: n, uuid: p.uuid, id: p.item.id, index: p.index, isActive: m(p.item) && u.isSameContext, isReadable: p.item.right === V.A.READABLE, isRestrictedByExplicit: A, type: p.item.type, isDraggable: !0 },
          c.createElement(K.A, { size: ut.TITLE.SIZE }, c.createElement(K.A.Play, { ariaLabel: (0, b.AP)("generic_action_playsongXbyartistX_web", { sprintf: [p.item.title, (0, F.A)(p, "item.artists[0].name", "")] }), hasExplicitCover: p.item.parent.hasExplicitCover, onPlayItems: E, pictureUrl: p.item.cover(H.r4).url }), ct || (ct = c.createElement(K.A.Download, null)), c.createElement(K.A.PlayableLabel, { hasExplicitLyrics: p.item.hasExplicitLyrics, label: p.item.title, onPlayItems: E, tooltipText: (0, X.Y)(p.item, o) }), c.createElement(G.A.IconGroup, null, c.createElement(K.A.ShowLyrics, { item: p.item, lyricsId: p.item.lyricsId, onPlayLyrics: y }), st || (st = c.createElement(K.A.AddToFeedback, null)), c.createElement(K.A.OpenContextMenu, { item: p.item }))),
          c.createElement(
            G.A.CellBody,
            { size: ut.ARTIST.SIZE },
            c.createElement(z.A, {
              links: p.item.artists.map(function (e) {
                return mt(mt({}, e), {}, { type: g.Ay.Artist });
              }),
            })
          )
        );
      };
      const At = (0, c.memo)(pt, j.t7);
      const Et = function (e) {
        var t = e.context,
          a = e.id,
          n = e.items,
          r = e.shouldExplicitBeHidden,
          i = void 0 !== r && r,
          l = { id: a, type: x.Kk.PLAYLIST },
          o = (0, ie.A)(a, n, t),
          s = o.manageItems,
          u = o.tableItems,
          d = (0, q.A)(t, l, !0).playerStatus,
          m = (0, k.Ay)({ container: l, context: t, hasBackground: !1, manageItems: s, playerStatus: d, shouldExplicitBeHidden: i });
        return c.createElement(
          k.ru,
          { value: m },
          c.createElement(
            G.A,
            { rowCount: u.toDisplay.length },
            c.createElement(
              G.A.Body,
              null,
              u.toDisplay.map(function (e, t) {
                return c.createElement(At, { data: u, key: e.uuid, index: t, style: { height: O.F4.md } });
              })
            )
          )
        );
      };
      var yt,
        vt = { TITLE: { SIZE: N.uq.Full } },
        ft = function (e) {
          var t = e.data,
            a = e.index,
            n = e.style,
            r = t.toDisplay[a],
            i = c.useContext(k.Gt),
            l = i.context,
            o = i.container,
            s = i.shouldExplicitBeHidden,
            u = (0, q.A)(l, o, !1),
            d = u.playerStatus,
            m = u.play,
            p = u.isItemLoadedInPlayer,
            A = r.item.hasExplicitLyrics && s,
            E = function (e, a) {
              m({ playIndex: a, playItems: t.toPlay, isTrackActive: e });
            };
          return c.createElement(G.A.Row, { style: n, uuid: r.uuid, id: r.item.id, index: r.index, isActive: p(r.item) && d.isSameContext, isReadable: r.item.right === V.A.READABLE, isRestrictedByExplicit: A, type: r.item.type }, c.createElement(K.A, { size: vt.TITLE.SIZE }, c.createElement(K.A.Play, { ariaLabel: (0, b.AP)("generic_action_playsongXbyartistX_web", { sprintf: [r.item.title, r.item.parent.name] }), hasExplicitCover: r.item.parent.hasExplicitCover, onPlayItems: E, pictureUrl: r.item.cover(H.r8).url }), yt || (yt = c.createElement(K.A.Download, null)), c.createElement(K.A.PlayableLabel, { description: r.item.description, hasExplicitLyrics: r.item.hasExplicitLyrics, label: r.item.title, onPlayItems: E, tooltipText: (0, X.Y)(r.item, s) }), c.createElement(G.A.IconGroup, null, c.createElement(K.A.OpenContextMenu, { item: r.item }))));
        };
      const ht = c.memo(ft, j.t7);
      const bt = function (e) {
        var t = e.context,
          a = e.id,
          n = e.items,
          r = e.shouldExplicitBeHidden,
          i = void 0 !== r && r,
          l = { id: a, type: x.Kk.SHOW },
          o = O.F4.lg,
          s = (0, ie.A)(a, n, t),
          u = s.manageItems,
          d = s.tableItems,
          m = (0, q.A)(t, l, !0).playerStatus,
          p = (0, k.Ay)({ container: l, context: t, hasBackground: !1, manageItems: u, playerStatus: m, rowHeight: o, shouldExplicitBeHidden: i });
        return c.createElement(
          k.ru,
          { value: p },
          c.createElement(
            G.A,
            { rowCount: d.toDisplay.length },
            c.createElement(
              G.A.Body,
              null,
              d.toDisplay.map(function (e, t) {
                return c.createElement(ht, { data: d, key: e.uuid, index: t, style: { height: o } });
              })
            )
          )
        );
      };
      var gt,
        It = a("HmE0"),
        Tt = a("nrKQ"),
        Pt = a("GkjM"),
        _t = a("0CJU"),
        St = a("7E8A");
      function Lt(e, t, a) {
        return (t = (0, v.A)(t)), (0, y.A)(e, Ot() ? Reflect.construct(t, a || [], (0, v.A)(e).constructor) : t.apply(e, a));
      }
      function Ot() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (e) {}
        return (Ot = function () {
          return !!e;
        })();
      }
      var xt =
        (0, u.Ay)()(
          (gt = (function (e) {
            function t() {
              var e;
              (0, A.A)(this, t);
              for (var a = arguments.length, n = new Array(a), r = 0; r < a; r++) n[r] = arguments[r];
              return (
                ((e = Lt(this, t, [].concat(n))).getTrackingParams = function () {
                  return { type: "card" };
                }),
                (e.handleClick = function () {
                  Tt.A.call({ method: "log_central.log", data: { BATCH: [{ channel: "discography_click", params: e.getTrackingParams() }] } });
                }),
                (e.renderDescription = function () {
                  var t = e.props.description;
                  return t ? c.createElement("div", { className: "discography-description ellipsis" }, t) : null;
                }),
                (e.renderProducerLine = function () {
                  var t = e.props,
                    a = t.data,
                    n = t.type,
                    r = (0, F.A)(a, "PRODUCER_LINE");
                  return n === g.Ay.Album && r ? c.createElement("div", { className: "album-legal" }, r) : null;
                }),
                (e.renderViewMore = function () {
                  var t = e.props,
                    a = t.id,
                    n = t.index,
                    r = t.type,
                    i = t.viewMoreLabel;
                  return i ? c.createElement("div", { className: "view-more-container" }, c.createElement(It.$n, { as: Pt.A, onClick: e.handleClick, size: "sm", to: "/".concat(r, "/").concat(a), variant: "outline", "data-position": n || 0 }, i)) : null;
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
                      a = e.id,
                      n = e.index,
                      r = e.context,
                      i = e.data,
                      l = e.title,
                      o = e.type;
                    return c.createElement("div", { className: "catalog-tab-box discography-row" }, c.createElement("div", { className: "discography-thumbnail" }, c.createElement("div", { className: "thumbnail-container" }, c.createElement(_t.A, { type: o, width: 200, height: 200, bordered: !0, context: r, pageContext: St.CONTEXT_PAGE_ALBUM_DISCOGRAPHY, data: i, alt: l })), this.renderProducerLine()), c.createElement("div", { className: "discography-infos" }, c.createElement(C.DZ, { variant: "heading.m", className: "ellipsis", _hover: { textDecoration: "underline" } }, c.createElement(Pt.A, { to: "/".concat(o, "/").concat(a), onClick: this.handleClick, "data-position": n || 0 }, l)), this.renderDescription(), t, this.renderViewMore()));
                  },
                },
              ])
            );
          })(c.Component))
        ) || gt;
      const Nt = xt;
      var Dt = a("/sVC"),
        wt = a("3nMj"),
        kt = a("sAMA"),
        Ct = [g.Ay.Album, g.Ay.Episode, g.Ay.Playlist, g.Ay.Show],
        Rt = (function (e) {
          return (e.XXSMALL = "xxsmall"), (e.XSMALL = "xsmall"), (e.SMALL = "small"), (e.MEDIUM = "medium"), (e.DEFAULT = "default"), e;
        })({});
      const Bt = function (e) {
        var t = e.item,
          a = e.title,
          n = e.size,
          r = (0, F.A)(t, "__TYPE__");
        if (!r) throw new Error("Item without type was sent to Artist Highlight.");
        var i = r === g.Ay.Podcast ? g.Ay.Show : r;
        if (-1 === Ct.indexOf(i)) throw new Error('Item of type "'.concat(i, '" is not handled by the Artist Highlight.'));
        var l = String(t[g.vn[i]]),
          o = { ID: l, TYPE: (0, T.Sx)(i) },
          u = (0, s.d4)(function (e) {
            return (0, Xe.Uw)(e.user) === kt.g;
          }),
          d = function () {
            return i === g.Ay.Show;
          },
          m = function () {
            var e = (0, F.A)(t, "SONGS.data") || (0, F.A)(t, "SONGS") || (0, F.A)(t, "EPISODES", []),
              a = d() ? 5 : 6,
              n = { context: o, id: l, items: e.slice(0, a), shouldExplicitBeHidden: u };
            switch (i) {
              case g.Ay.Album:
                return c.createElement(ot, n);
              case g.Ay.Playlist:
                return c.createElement(Et, n);
              case g.Ay.Show:
                return c.createElement(bt, n);
            }
          },
          p = (0, Ve.A)("top-content content-bottom content-left last-release", n);
        return c.createElement(
          "div",
          { className: "top-cell top-cell-left" },
          c.createElement(M.A, { className: "catalog-section-title", title: a || (0, b.AP)("DerniĂ¨re sortie"), href: "/".concat(i, "/").concat(l) }),
          c.createElement(
            "div",
            { className: p },
            (function () {
              if (i === g.Ay.Episode) return c.createElement(tt, { context: o, id: l, items: [t], shouldExplicitBeHidden: u });
              var e,
                a = d() ? t.SHOW_DESCRIPTION : (0, wt.A)((0, Dt.A)(t));
              return c.createElement(Nt, { context: o, data: t, description: a, id: Number(l), title: t.ALB_TITLE || t.TITLE || t.SHOW_NAME || "", type: i, viewMoreLabel: ((e = Number((0, F.A)(t, "SONGS.total")) || Number(t.NB_SONG) || 0), d() || e <= 6 ? "" : i === g.Ay.Album ? (0, b.WI)("artistpage_action_accessalbumpageXtracks_web", "artistpage_action_accessalbumpageXtracks_web", { count: e, sprintf: [e] }) : (0, b.WI)("artistpage_action_accessplaylistpageXtracks_web", "artistpage_action_accessplaylistpageXtracks_web", { count: e, sprintf: [e] })) }, m());
            })()
          )
        );
      };
      var Gt,
        Mt,
        jt = { TITLE: { SIZE: N.uq.Full } },
        Ft = function (e) {
          var t = e.data,
            a = e.index,
            n = e.style,
            r = (0, k.$A)(),
            i = r.context,
            l = r.container,
            o = r.shouldExplicitBeHidden,
            s = (0, q.A)(i, l, !0),
            u = s.playerStatus,
            d = s.play,
            m = s.isItemLoadedInPlayer,
            p = t.toDisplay[a],
            A = p.item.hasExplicitLyrics && o,
            E = (0, c.useCallback)(
              function (e, a) {
                d({ playIndex: a, playItems: t.toPlay, isTrackActive: e });
              },
              [t.toPlay, d]
            ),
            y = (0, c.useCallback)(
              function (e) {
                d({ notify: !1, playIndex: e, playItems: t.toPlay, playLyrics: !0 });
              },
              [t.toPlay, d]
            );
          return c.createElement(G.A.Row, { style: n, uuid: p.uuid, id: p.item.id, index: p.index, isActive: m(p.item) && u.isSameContext, isReadable: p.item.right === V.A.READABLE, isRestrictedByExplicit: A, type: p.item.type, isDraggable: !0 }, c.createElement(K.A, { size: jt.TITLE.SIZE }, c.createElement(K.A.Play, { ariaLabel: (0, b.AP)("generic_action_playsongXbyartistX_web", { sprintf: [p.item.title, (0, F.A)(p, "item.artists[0].name", "")] }), hasExplicitCover: p.item.parent.hasExplicitCover, onPlayItems: E, pictureUrl: p.item.cover(H.r4).url }), Gt || (Gt = c.createElement(K.A.Download, null)), c.createElement(K.A.PlayableLabel, { hasExplicitLyrics: p.item.hasExplicitLyrics, label: "".concat(p.item.number || 0, ". ").concat(p.item.title), onPlayItems: E, tooltipText: (0, X.Y)(p.item, o) }), c.createElement(G.A.IconGroup, null, c.createElement(K.A.ShowLyrics, { item: p.item, lyricsId: p.item.lyricsId, onPlayLyrics: y }), Mt || (Mt = c.createElement(K.A.AddToFeedback, null)), c.createElement(K.A.OpenContextMenu, { item: p.item }))));
        };
      const Ht = (0, c.memo)(Ft, j.t7);
      const Yt = function (e) {
        var t = e.context,
          a = e.id,
          n = e.items,
          r = e.maxItemsToDisplay,
          i = e.shouldExplicitBeHidden,
          l = void 0 !== i && i,
          o = { id: a, type: x.Kk.TOP_ARTIST },
          s = (0, ie.A)(a, n, t),
          u = s.manageItems,
          d = s.tableItems,
          m = (0, q.A)(t, o, !0).playerStatus;
        r && (d.toDisplay = d.toDisplay.slice(0, r));
        var p = (0, k.Ay)({ container: o, context: t, hasBackground: !1, manageItems: u, playerStatus: m, shouldExplicitBeHidden: l });
        return c.createElement(
          k.ru,
          { value: p },
          c.createElement(
            G.A,
            { rowCount: d.toDisplay.length },
            c.createElement(
              G.A.Body,
              null,
              d.toDisplay.map(function (e, t) {
                return c.createElement(Ht, { data: d, key: e.uuid, index: t, style: { height: O.F4.md } });
              })
            )
          )
        );
      };
      var Ut = a("tGJS"),
        zt = a("KVgY"),
        Zt = a("wGgI");
      const Kt = function (e) {
        var t = e.onSort,
          a = e.sortType,
          n = e.sortTypes,
          r = 0,
          i = n.map(function (e, n) {
            var i = (0, o.A)(e, 2),
              l = i[0],
              s = i[1];
            return l === a && (r = n), c.createElement(Zt.Ay.Item, { key: l, label: s, isSelected: l === a }, c.createElement("a", { onClick: t.bind(undefined, l), role: "button" }, s));
          });
        return c.createElement(Zt.Ay, { selected: r }, i);
      };
      var qt,
        Vt,
        Xt = a("GxIe"),
        Wt = a("3ns7");
      function Jt(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function Qt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Jt(Object(a), !0).forEach(function (t) {
                (0, l.A)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : Jt(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
              });
        }
        return e;
      }
      function $t(e) {
        return (e || []).reduce(function (e, t) {
          return t.node && e.push(t.node), e;
        }, []);
      }
      const ea = function (e) {
        var t,
          a,
          n,
          r,
          i,
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
          f,
          h,
          g,
          I = e.artistId,
          T = (0, c.useState)(Te.sV3.RELEASE_DATE),
          P = (0, o.A)(T, 2),
          _ = P[0],
          L = P[1],
          O = (0, c.useTransition)(),
          x = (0, o.A)(O, 2)[1],
          N = { artistId: I, nb: 30, cursor: null, subType: null, roles: [Te.by3.MAIN], mode: Te.rb0.OFFICIAL, order: _ },
          D = (0, Te.JDV)({ variables: Qt(Qt({}, N), {}, { types: [Te.iqi.ALBUM], subType: Te.Mij.STUDIO }) }),
          w = D.data,
          k = D.fetchMore,
          R = (0, Te.JDV)({ variables: Qt(Qt({}, N), {}, { types: [Te.iqi.EP] }) }),
          B = R.data,
          G = R.fetchMore,
          M = (0, Te.JDV)({ variables: Qt(Qt({}, N), {}, { types: [Te.iqi.SINGLES] }) }),
          j = M.data,
          F = M.fetchMore,
          H = (0, Te.JDV)({ variables: Qt(Qt({}, N), {}, { types: [Te.iqi.ALBUM], subType: Te.Mij.LIVE }) }),
          Y = H.data,
          U = H.fetchMore,
          z = (0, Te.JDV)({ variables: Qt(Qt({}, N), {}, { types: [Te.iqi.ALBUM], subType: Te.Mij.COMPILATION }) }),
          Z = z.data,
          K = z.fetchMore,
          q = (0, Te.JDV)({ variables: Qt(Qt({}, N), {}, { roles: [Te.by3.FEATURED], types: [Te.iqi.ALBUM, Te.iqi.EP, Te.iqi.SINGLES], mode: Te.rb0.ALL }) }),
          V = q.data,
          X = q.fetchMore,
          W = $t(null == w || null === (t = w.artist) || void 0 === t ? void 0 : t.albums.edges),
          J = $t(null == B || null === (a = B.artist) || void 0 === a ? void 0 : a.albums.edges),
          Q = $t(null == j || null === (n = j.artist) || void 0 === n ? void 0 : n.albums.edges),
          $ = $t(null == Y || null === (r = Y.artist) || void 0 === r ? void 0 : r.albums.edges),
          ee = $t(null == Z || null === (i = Z.artist) || void 0 === i ? void 0 : i.albums.edges),
          te = $t(null == V || null === (l = V.artist) || void 0 === l ? void 0 : l.albums.edges),
          ae = null == w || null === (s = w.artist) || void 0 === s ? void 0 : s.albums.pageInfo.hasNextPage,
          ne = function () {
            var e;
            k({ variables: { cursor: null == w || null === (e = w.artist) || void 0 === e ? void 0 : e.albums.pageInfo.endCursor } });
          },
          re = [[W, (0, b.AP)("favoritessidebar_title_albums_web"), "albums"]];
        !1 === (null == w || null === (u = w.artist) || void 0 === u ? void 0 : u.albums.pageInfo.hasNextPage) &&
          (re.push([J, (0, b.AP)("discographytype_title_EPs_web"), "eps"]),
          (ae = null == B || null === (d = B.artist) || void 0 === d ? void 0 : d.albums.pageInfo.hasNextPage),
          (ne = function () {
            var e;
            G({ variables: { cursor: null == B || null === (e = B.artist) || void 0 === e ? void 0 : e.albums.pageInfo.endCursor } });
          }),
          !1 === (null == B || null === (m = B.artist) || void 0 === m ? void 0 : m.albums.pageInfo.hasNextPage) &&
            ((ae = null == j || null === (p = j.artist) || void 0 === p ? void 0 : p.albums.pageInfo.hasNextPage),
            re.push([Q, (0, b.AP)("discographytype_title_singles_web"), "singles"]),
            (ne = function () {
              var e;
              F({ variables: { cursor: null == j || null === (e = j.artist) || void 0 === e ? void 0 : e.albums.pageInfo.endCursor } });
            }),
            !1 === (null == j || null === (A = j.artist) || void 0 === A ? void 0 : A.albums.pageInfo.hasNextPage) &&
              ((ae = null == Y || null === (E = Y.artist) || void 0 === E ? void 0 : E.albums.pageInfo.hasNextPage),
              re.push([$, (0, b.AP)("discographytype_title_livealbums_web"), "live_albums"]),
              (ne = function () {
                var e;
                U({ variables: { cursor: null == Y || null === (e = Y.artist) || void 0 === e ? void 0 : e.albums.pageInfo.endCursor } });
              }),
              !1 === (null == Y || null === (y = Y.artist) || void 0 === y ? void 0 : y.albums.pageInfo.hasNextPage) &&
                ((ae = null == Z || null === (v = Z.artist) || void 0 === v ? void 0 : v.albums.pageInfo.hasNextPage),
                re.push([ee, (0, b.AP)("discographytype_title_compilations_web"), "compilations"]),
                (ne = function () {
                  var e;
                  K({ variables: { cursor: null == Y || null === (e = Y.artist) || void 0 === e ? void 0 : e.albums.pageInfo.endCursor } });
                }),
                !1 === (null == Z || null === (f = Z.artist) || void 0 === f ? void 0 : f.albums.pageInfo.hasNextPage) &&
                  ((ae = null == V || null === (h = V.artist) || void 0 === h ? void 0 : h.albums.pageInfo.hasNextPage),
                  re.push([te, (0, b.AP)("discography_title_featuredin_web"), "artist_featured_discography"]),
                  (ne = function () {
                    var e;
                    X({ variables: { cursor: null == V || null === (e = V.artist) || void 0 === e ? void 0 : e.albums.pageInfo.endCursor } });
                  }),
                  !1 === (null == V || null === (g = V.artist) || void 0 === g ? void 0 : g.albums.pageInfo.hasNextPage) && (ne = function () {}))))));
        var ie = !1;
        return c.createElement(
          zt.A,
          {
            hasMore: ae,
            loadMore: function () {
              return x(function () {
                return ne();
              });
            },
            loader: qt || (qt = c.createElement(me.A, { key: "loader" })),
          },
          re.map(function (e) {
            var t = (0, o.A)(e, 3),
              a = t[0],
              n = t[1],
              r = t[2];
            return (
              a.length > 0 &&
              c.createElement(
                S.OJ,
                { key: n, value: { section: r } },
                c.createElement(
                  "div",
                  { key: "heading", className: "heading" },
                  c.createElement("div", { className: "cell cell-title" }, c.createElement(C.DZ, { variant: "heading.m" }, n)),
                  Vt || (Vt = c.createElement("div", { className: "cell cell-line" }, c.createElement("div", { className: "line" }))),
                  !ie &&
                    (ie = !0) &&
                    c.createElement(
                      "div",
                      { className: "cell cell-sort" },
                      c.createElement(Kt, {
                        onSort: function (e) {
                          x(function () {
                            return L(e);
                          });
                        },
                        sortType: _,
                        sortTypes: [
                          [Te.sV3.RELEASE_DATE, (0, b.AP)("Date de sortie")],
                          [Te.sV3.ALPHA, (0, b.AP)("A - Z")],
                          [Te.sV3.RANK, (0, b.AP)("Les plus ĂŠcoutĂŠs")],
                        ],
                      })
                    )
                ),
                c.createElement(
                  Wt.kK,
                  null,
                  a.map(function (e) {
                    var t, a;
                    return c.createElement(S.OJ, { key: e.id, value: { legacyContext: { ID: e.id, CONTEXT_ID: I, TYPE: "album_discography" } } }, c.createElement(Xt.A, { id: e.id, albumName: e.displayTitle, picture: null === (t = e.cover) || void 0 === t ? void 0 : t.large[0], isExplicitAlbum: e.isExplicit || !1, hasExplicitCover: null === (a = e.cover) || void 0 === a ? void 0 : a.explicitStatus, releaseDate: (0, wt.A)(e.releaseDate), contributors: $t(e.contributors.edges) }));
                  })
                )
              )
            );
          })
        );
      };
      a("uuq2"), a("bVll");
      var ta,
        aa = a("23Qi"),
        na = a("Weh+"),
        ra = a("gXj/"),
        ia = a("FFW9"),
        la = a("A0BP"),
        oa = a("lD5d"),
        ca = a("5Loq"),
        sa = a("934x"),
        ua = a("xvdY"),
        da = a("9OcB"),
        ma = a("AZMZ"),
        pa = a("LpaV"),
        Aa = a("SrwL");
      const Ea = function (e) {
        var t,
          a = e.artistId,
          n = e.nbRelated,
          r = e.legacyData,
          i = (0, Te.ORW)({ variables: { artistId: a, relatedArtistFirst: 6, cursor: null } }),
          l = i.loading,
          o = i.data;
        if (l || null == o || null === (t = o.artist) || void 0 === t || null === (t = t.relatedArtists) || void 0 === t || !t.edges) return null;
        var s = o.artist.relatedArtists.edges.slice(0, n);
        return c.createElement(
          C.az,
          { as: "aside", className: "top-cell top-cell-right", position: "relative" },
          c.createElement(C.DZ, { variant: "heading.m", className: "catalog-section-title" }, c.createElement(sa.A, { href: "/artist/".concat(a, "/related_artist") }, c.createElement("span", { className: "label" }, (0, b.AP)("Artistes similaires")))),
          s.map(function (e) {
            var t;
            return e.node
              ? c.createElement(
                  na.Q,
                  { key: e.node.id, mt: "spacing.l", w: "100%" },
                  c.createElement(ra.h, null, c.createElement(da.A, { alt: e.node.name, borderRadius: "rounded", src: null === (t = e.node.picture) || void 0 === t ? void 0 : t.small[0], type: g.Ay.Artist })),
                  c.createElement(ia.f, { flex: 1 }, c.createElement(la.n, { _hover: { textDecoration: "underline" } }, c.createElement(Pt.A, { to: "/artist/".concat(e.node.id), "data-instance": "artist_name" }, e.node.name)), c.createElement(oa.P, null, (0, b.WI)("%s fan", "%s fans", { count: e.node.fansCount, sprintf: [(0, aa.A)(e.node.fansCount)] }))),
                  c.createElement(
                    ia.f,
                    { displayOnHover: !0 },
                    c.createElement(
                      pa.K.Provider,
                      { value: (0, Aa.uC)() },
                      c.createElement(ma.A, {
                        anchor: ta || (ta = c.createElement(It.K0, { variant: "ghost", size: "small", "aria-label": "artist_contextmenu" }, c.createElement(ca.j, null))),
                        context: { ID: Number(e.node.id), TYPE: (0, T.Pe)(g.Ay.Artist, P.Di) },
                        id: e.node.id,
                        data: r.find(function (t) {
                          var a;
                          return String(t.ART_ID) === (null === (a = e.node) || void 0 === a ? void 0 : a.id);
                        }),
                      })
                    )
                  ),
                  c.createElement(ia.f, null, c.createElement(ua.A, { type: g.Ay.Artist, id: e.node.id, context: { ID: e.node.id, TYPE: (0, T.Pe)(g.Ay.Artist, P.Di) } }))
                )
              : null;
          }),
          o.artist.relatedArtists.edges.length > 3 ? c.createElement(C.az, { mt: "spacing.l" }, c.createElement(It.$n, { as: Pt.A, variant: "outline", size: "small", to: "/artist/".concat(a, "/related_artist") }, (0, b.AP)("Voir plus d'artistes"))) : null
        );
      };
      a("F+C3");
      var ya,
        va = a("P1K6");
      const fa = function (e) {
        var t = e.artistId,
          a = e.data;
        return c.createElement(
          C.az,
          { position: "relative" },
          c.createElement(C.DZ, { variant: "heading.m", className: "catalog-section-title" }, c.createElement(sa.A, { href: "/artist/".concat(t, "/related_playlist") }, c.createElement("span", { className: "label" }, (0, b.AP)("Playlists")))),
          a.map(function (e) {
            var t = [(0, b.WI)("%s titre", "%s titres", { sprintf: [(0, aa.A)(e.NB_SONG)], count: e.NB_SONG })];
            return e.NB_FAN > 0 && t.push((0, b.WI)("%s fan", "%s fans", { count: e.NB_FAN, sprintf: [(0, aa.A)(e.NB_FAN)] })), c.createElement(na.Q, { key: e.PLAYLIST_ID, mt: "spacing.l", w: "100%" }, c.createElement(ra.h, null, c.createElement(da.A, { alt: e.TITLE, src: (0, va.AE)(g.Ay.Playlist, e.PLAYLIST_PICTURE, 100, 100), type: g.Ay.Playlist })), c.createElement(ia.f, { flex: 1 }, c.createElement(la.n, { _hover: { textDecoration: "underline" } }, c.createElement(Pt.A, { to: "/playlist/".concat(e.PLAYLIST_ID), "data-instance": "playlist_name" }, e.TITLE)), c.createElement(oa.P, null, t.join(" - "))), c.createElement(ia.f, { displayOnHover: !0 }, c.createElement(pa.K.Provider, { value: (0, Aa.uC)() }, c.createElement(ma.A, { anchor: c.createElement(It.K0, { variant: "ghost", size: "small", "aria-label": "playlist_contextmenu", _focus: { outline: "none" } }, ya || (ya = c.createElement(ca.j, null))), context: { ID: e.PLAYLIST_ID, TYPE: "artist_similar_playlist" }, id: e.PLAYLIST_ID, data: a }))), c.createElement(ia.f, null, c.createElement(ua.A, { type: g.Ay.Playlist, id: e.PLAYLIST_ID, context: { ID: e.PLAYLIST_ID, TYPE: (0, T.Pe)(g.Ay.Playlist, P.Di) } })));
          }),
          a.length > 3 ? c.createElement(C.az, { position: "absolute", bottom: "spacing.l" }, c.createElement(It.$n, { as: Pt.A, variant: "outline", size: "small", to: "/artist/".concat(t, "/related_playlist") }, (0, b.AP)("Voir plus de playlists"))) : null
        );
      };
      var ha = (function (e) {
        return (e.sm = "sm"), (e.md = "md"), (e.lg = "lg"), e;
      })({});
      const ba = "HBxbS",
        ga = "c9AV2";
      const Ia = function (e) {
        var t,
          a = e.artistId,
          n = (0, Te.KDJ)({ variables: { artistId: a } }),
          r = n.loading,
          i = n.data,
          l = n.error;
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
          { className: "catalog-container ".concat(ba), "data-testid": "last-concert-section" },
          c.createElement("div", { className: "heading" }, c.createElement("div", { className: "cell cell-title" }, c.createElement(M.A, { title: (0, b.AP)("artistpage_title_artistXontour_web", { sprintf: [i.artist.name] }), href: "/artist/".concat(i.artist.id, "/concerts"), ctaLabel: (0, b.AP)("eventpage_action_alltourdates_web") }))),
          c.createElement(ke.A, {
            title: u,
            concertId: s,
            date: d,
            subtitle: E,
            calendarIconSize: ha.md,
            className: ga,
            locationState: { referringArtistId: a },
            onClick: function () {
              return (0, je.uV)({ action: je.rc.CLICK_CONCERT, screen_view_name: je.Xw.ARTIST, screen_view_id_type: je.v5.ARTIST, screen_view_id: a, item_id: s, item_type: (0, je.U$)(A) });
            },
          })
        );
      };
      var Ta, Pa, _a;
      const Sa = function (e) {
        var t,
          a,
          n,
          r = e.artistId,
          i = (0, Te.TF)({ variables: { artistId: String(r) } }),
          l = i.data;
        if (i.loading) return Ta || (Ta = c.createElement(me.A, null));
        if (!l || !l.artist) {
          var o = new Error("missing data in artist personal favorite graphql call");
          throw ((o.cause = JSON.stringify(l)), o);
        }
        var s = null === (t = l.artist.picture) || void 0 === t ? void 0 : t.small[0],
          u = Boolean(null === (a = l.artist.picture) || void 0 === a ? void 0 : a.explicitStatus),
          d = (null == l || null === (n = l.me) || void 0 === n || null === (n = n.userFavorites.byArtist) || void 0 === n ? void 0 : n.estimatedTracksCount) || 0;
        return d
          ? c.createElement(
              C.so,
              {
                as: Pt.A,
                display: "inline-flex",
                direction: "row",
                align: "center",
                mb: "spacing.2xl",
                to: "/artist/".concat(r, "/").concat(ze.G.FAVORITES),
                "data-testid": "in_your_fav_section",
                onClick: function () {
                  return Ee(r);
                },
              },
              c.createElement(C.az, { position: "relative", "data-testid": "in_your_fav_thumbnail" }, c.createElement(C.az, { position: "relative", zIndex: 1, borderWidth: "border.m", borderStyle: "solid", borderColor: "background.neutral.primary.default" }, c.createElement(da.A, { size: "size.xl", src: s, isExplicitCover: u, border: "none" }), Pa || (Pa = c.createElement(C.az, { position: "absolute", top: 0, left: 0, zIndex: 1, width: "100%", height: "100%", bg: "background.accent.onLight.default", opacity: "0.4" }))), c.createElement(da.A, { position: "absolute", top: "50%", insetStart: "50%", transform: "translate(-50%, -50%)", variant: "favTracks", size: "size.s", borderRadius: "rounded", alt: (0, b.AP)("artistpageentrypoint_title_inyourfavorites_web"), zIndex: 3 }), _a || (_a = c.createElement(C.az, { position: "absolute", top: "50%", insetEnd: "-6px", transform: "translateY(-50%)", bg: "background.neutral.secondary.default", width: "size.l", height: "size.l", borderRadius: "2xs" }))),
              c.createElement(C.so, { direction: "column", ms: "spacing.l" }, c.createElement(C.EY, { variant: "body.l.default", color: "text.neutral.primary.default", "data-testid": "in_your_fav_title" }, (0, b.AP)("artistpageentrypoint_title_inyourfavorites_web")), c.createElement(C.EY, { variant: "body.s.default", color: "text.neutral.secondary.default", "data-testid": "in_your_fav_subtitle" }, (0, b.WI)("%s titre", "%s titres", { sprintf: [d], count: d })))
            )
          : null;
      };
      var La,
        Oa = a("fsGD"),
        xa = a("yiM3");
      function Na(e, t, a) {
        return (t = (0, v.A)(t)), (0, y.A)(e, Da() ? Reflect.construct(t, a || [], (0, v.A)(e).constructor) : t.apply(e, a));
      }
      function Da() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (e) {}
        return (Da = function () {
          return !!e;
        })();
      }
      var wa = (function (e) {
          return (e.SMALL = "small"), (e.BIG = "big"), e;
        })(wa || {}),
        ka = (function (e) {
          function t(e) {
            var a;
            return (0, A.A)(this, t), ((a = Na(this, t, [e])).state = { display: a._getDisplay(!1), hasAdsFull: !1 }), (a._toggleDisplay = a._toggleDisplay.bind(a)), (a._initAds = a._initAds.bind(a)), a;
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
                    a = this.props.data,
                    n = a.TOP,
                    r = a.VIDEO,
                    i = this.state.display;
                  return c.createElement("div", { className: "catalog-tab-discography" }, c.createElement("div", { className: "container" }, i === wa.SMALL ? this._renderPersonalFavorite() : null, c.createElement("div", { className: "catalog-container" }, this._renderTopTracks(), i === wa.BIG ? c.createElement(C.az, { as: "aside", verticalAlign: "top", className: (0, Ve.A)("top-cell", { "top-cell-right": n.data.length > 0 }) }, this._renderPersonalFavorite(), this._renderRelatedPlaylists()) : null), this._renderOwnerMessage(), n.data.length > 0 ? c.createElement("div", { className: "catalog-container" }, this._renderHighlight(), i === wa.BIG ? this._renderRelatedArtists() : null) : null, (null === (e = r.ITEMS) || void 0 === e ? void 0 : e.length) > 0 ? c.createElement("div", { className: "catalog-container", id: "videos" }, this._renderLivestream()) : null, i === wa.SMALL ? c.createElement("div", { className: "catalog-container visible-ads-full" }, this._renderRelatedPlaylists(), this._renderRelatedArtists()) : null, c.createElement(Ia, { artistId: String(t) })), c.createElement("div", { className: "container", "data-testid": "artist_discography" }, c.createElement(c.Suspense, { fallback: null }, c.createElement(ea, { artistId: this.props.id.toString() }))));
                },
              },
              {
                key: "_renderTopTracks",
                value: function () {
                  var e = this.props,
                    t = e.id,
                    a = e.shouldExplicitBeHidden,
                    n = this.props.data.TOP;
                  return 0 === n.data.length ? null : c.createElement("div", { className: "top-cell top-cell-left" }, c.createElement(M.A, { className: "catalog-section-title", title: (0, b.AP)("Top titres"), href: "/artist/".concat(t, "/top_track") }), c.createElement("div", { className: "top-content content-top content-left" }, c.createElement(Yt, { id: String(t), context: { ID: t, TYPE: (0, T.Pe)(g.Ay.Artist, P.sI) }, items: n.data, maxItemsToDisplay: 4, shouldExplicitBeHidden: a })));
                },
              },
              {
                key: "_renderRelatedPlaylists",
                value: function () {
                  var e = this.props.id,
                    t = this.props.data.PLAYLISTS;
                  return t.length ? c.createElement(fa, { artistId: String(e), data: t.slice(0, 3) }) : null;
                },
              },
              {
                key: "_renderPersonalFavorite",
                value: function () {
                  var e = this.props.id;
                  return _.A.isAllowed("artist_page_favorite_content") ? c.createElement(Sa, { artistId: e }) : null;
                },
              },
              {
                key: "_renderHighlight",
                value: function () {
                  var e = this.props.data,
                    t = (0, F.A)(e, "HIGHLIGHT.ITEM");
                  return t ? c.createElement(Bt, { item: t, title: (0, F.A)(e, "HIGHLIGHT.TITLE"), size: this._getSize() }) : null;
                },
              },
              {
                key: "_renderLivestream",
                value: function () {
                  var e,
                    t,
                    a = this.props.userIsConnected,
                    n = this.props.data.VIDEO;
                  if (0 === n.ITEMS.length) return null;
                  var r = n.ITEMS.map(function (e) {
                      var t, n, r, i, l, o;
                      return { type: "video-link", data: {}, target: a ? e.DEEPLINK : "", title: null !== (t = e.TITLE) && void 0 !== t ? t : "", subtitle: null !== (n = e.SUBTITLE) && void 0 !== n ? n : "", pictures: [{ md5: e.ASSET, type: "misc" }], theme: null !== (r = e.THEME) && void 0 !== r ? r : "dark", layout_parameters: { cta: { type: "watch", label: "WATCH" }, override: { title: null !== (i = e.TITLE) && void 0 !== i ? i : "", subtitle: null !== (l = e.SUBTITLE) && void 0 !== l ? l : "", theme: null !== (o = e.THEME) && void 0 !== o ? o : "dark" }, item_layout: "slide" } };
                    }),
                    i = c.createElement(Ut.A, { data: r, layoutType: Oa.Pl, pageContext: St.CONTEXT_PAGE_ARTIST_DISCOGRAPHY, alignment: "right", title: null !== (e = n.TITLE) && void 0 !== e ? e : void 0, subtitle: null !== (t = n.SUBTITLE) && void 0 !== t ? t : void 0 });
                  return a ? i : c.createElement("a", { href: (0, xa.t)({ route: "login", redirect: "/fr/5111084", query: { utm_campaign: "unloggedwebdesktop_FR-LomepalVOD-092022", utm_content: "LomepalTADV", utm_source: "webdesktop", utm_medium: "slideshow" } }) }, i);
                },
              },
              {
                key: "_renderRelatedArtists",
                value: function () {
                  var e = this.props.id,
                    t = this.props.data.RELATED_ARTISTS;
                  if (0 === t.data.length) return null;
                  var a = this._getNbRelated(this._getSize());
                  return c.createElement(Ea, { artistId: String(e), nbRelated: a, legacyData: t.data.slice(0, a) });
                },
              },
              {
                key: "_renderOwnerMessage",
                value: function () {
                  return this.props.data.DISABLE_CATALOG ? c.createElement("div", { className: "alert alert-info owner-message", role: "alert" }, La || (La = c.createElement("span", { className: "icon icon-before icon-info" })), (0, b.AP)("A la demande de l'artiste ou de ses reprĂŠsentants, une partie ou l'intĂŠgralitĂŠ de la discographie est actuellement exclue des services de streaming. Deezer continue de faire son maximum pour la rendre disponible le plus rapidement possible.")) : null;
                },
              },
              {
                key: "_toggleDisplay",
                value: function (e, t) {
                  var a = this.state,
                    n = a.hasAdsFull,
                    r = a.display;
                  if (!n) {
                    var i = t.client_width > 1200 ? wa.BIG : wa.SMALL;
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
                  if (!t.ITEM) return Rt.DEFAULT;
                  var a = this._getTotalTracks(t.ITEM, t.TYPE);
                  return a < 3 ? (t.ITEM.PRODUCER_LINE.length <= 60 ? Rt.XXSMALL : Rt.XSMALL) : a >= 3 && a <= 5 ? Rt.SMALL : 6 === a ? Rt.MEDIUM : Rt.DEFAULT;
                },
              },
              {
                key: "_getNbRelated",
                value: function (e) {
                  var t = (0, l.A)((0, l.A)((0, l.A)((0, l.A)((0, l.A)({}, Rt.XXSMALL, 3), Rt.XSMALL, 3), Rt.SMALL, 4), Rt.MEDIUM, 5), Rt.DEFAULT, 6);
                  return this.state.display === wa.SMALL ? 3 : t[e];
                },
              },
              {
                key: "_getDisplay",
                value: function (e) {
                  return window.innerWidth > 1200 && !e ? wa.BIG : wa.SMALL;
                },
              },
              {
                key: "_initAds",
                value: function (e, t) {
                  var a = t.display;
                  this.setState({ hasAdsFull: a, display: this._getDisplay(a) });
                },
              },
            ])
          );
        })(c.Component);
      const Ca = ka;
      var Ra = a("2NhJ"),
        Ba = a("oq/a"),
        Ga = a("zJSK"),
        Ma = a("wRgy"),
        ja = a("WY4A"),
        Fa = a("Ozpl"),
        Ha = a("WQvr"),
        Ya = a("JKL/"),
        Ua = a("6K8D"),
        za = a("U9ZG"),
        Za = a("2Av+"),
        Ka = a("/b/U");
      const qa = "qmFln",
        Va = "OptWm",
        Xa = "Q2ZWv";
      var Wa, Ja, Qa, $a;
      function en(e, t, a) {
        return (t = (0, v.A)(t)), (0, y.A)(e, tn() ? Reflect.construct(t, a || [], (0, v.A)(e).constructor) : t.apply(e, a));
      }
      function tn() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (e) {}
        return (tn = function () {
          return !!e;
        })();
      }
      const an = (function (e) {
        function t() {
          return (0, A.A)(this, t), en(this, t, arguments);
        }
        return (
          (0, f.A)(t, e),
          (0, E.A)(t, [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.picture,
                  a = e.name;
                return t ? c.createElement(C.az, { className: "container" }, c.createElement(Ra.Ay, null, this._renderThumbnail(), c.createElement(Ba.A, { className: qa }, c.createElement(Ga.A, null, a), this._renderFans(), this._renderStatus()), this._renderSocials()), this._renderActions()) : null;
              },
            },
            {
              key: "_renderThumbnail",
              value: function () {
                var e,
                  t = this.props,
                  a = t.name,
                  n = t.picture;
                return n ? c.createElement(Ma.A, { alt: a, borderRadius: "rounded", src: null === (e = n.urls) || void 0 === e || null === (e = e.large) || void 0 === e ? void 0 : e[0], type: g.Ay.Artist, "data-testid": "artist-cover" }) : null;
              },
            },
            {
              key: "_renderSubtitle",
              value: function () {
                var e = this.props,
                  t = e.fansCount,
                  a = e.status;
                return t || (a && a.length) ? c.createElement(c.Fragment, null, this._renderFans(), this._renderStatus()) : null;
              },
            },
            {
              key: "_renderFans",
              value: function () {
                var e = this.props.fansCount;
                return e ? c.createElement(ja.A, null, c.createElement(Fa.A, null, (0, b.WI)("%s fan", "%s fans", { sprintf: [(0, aa.A)(e)], count: e }))) : null;
              },
            },
            {
              key: "_renderStatus",
              value: function () {
                var e = this.props.status;
                return e && e.length ? c.createElement(Ha.A, null, e) : null;
              },
            },
            {
              key: "_renderActions",
              value: function () {
                var e,
                  t = this.props,
                  a = t.hasSmartRadio,
                  n = t.id,
                  r = t.name,
                  i = t.picture,
                  l = ["favorite", "options"];
                return a && !l.includes("play") && l.unshift("play"), c.createElement(Ya.A, null, c.createElement(za.A, { id: Number(n), type: g.Ay.Artist, data: { id: n, type: g.Ay.Artist, SMARTRADIO: a, name: r, picture: null == i || null === (e = i.urls) || void 0 === e || null === (e = e.large) || void 0 === e ? void 0 : e[0] }, action: l, context: { ID: n, TYPE: "artist_smartradio" } }));
              },
            },
            {
              key: "_renderSocials",
              value: function () {
                var e = this.props,
                  t = e.social,
                  a = e.onTour;
                return t && (t.facebook || t.twitter || a) ? c.createElement("ul", { className: Va }, this._renderFacebook(), this._renderTwitter()) : null;
              },
            },
            {
              key: "_renderFacebook",
              value: function () {
                var e = this.props.social;
                if (!e) return null;
                if (!e.facebook) return c.createElement("li", { className: "".concat(Xa, " disabled") }, c.createElement(Ua.m, { label: (0, b.AP)("Page Facebook indisponible") }, Wa || (Wa = c.createElement(Za.i, null))));
                var t = e.facebook.includes("http") ? e.facebook : "//".concat(e.facebook);
                return c.createElement("li", { className: Xa }, c.createElement(Ua.m, { label: (0, b.AP)("Page Facebook") }, c.createElement("a", { href: t, target: "_blank", rel: "noreferrer" }, Ja || (Ja = c.createElement(Za.i, null)))));
              },
            },
            {
              key: "_renderTwitter",
              value: function () {
                var e = this.props.social;
                if (!e) return null;
                if (!e.twitter) return c.createElement("li", { className: "".concat(Xa, " disabled") }, c.createElement(Ua.m, { label: (0, b.AP)("Page Twitter indisponible") }, Qa || (Qa = c.createElement(Ka.u, null))));
                var t = e.twitter.includes("http") ? e.twitter : "//".concat(e.twitter);
                return c.createElement("li", { className: Xa }, c.createElement(Ua.m, { label: (0, b.AP)("Page Twitter") }, c.createElement("a", { href: t, target: "_blank", rel: "noreferrer" }, $a || ($a = c.createElement(Ka.u, null)))));
              },
            },
          ])
        );
      })(c.Component);
      var nn,
        rn = a("aEwM"),
        ln = a("RGaU"),
        on = a("JbrT");
      const cn = function (e) {
          var t,
            a = e.id,
            n = (0, Te.ORW)({ variables: { artistId: a, relatedArtistFirst: 10, cursor: null } }),
            r = n.data,
            i = n.loading,
            l = n.fetchMore,
            o = (0, c.useCallback)(
              function () {
                return l({ query: Te.yRK, variables: { artistId: a, relatedArtistFirst: 10, cursor: r && r.artist && r.artist.relatedArtists && r.artist.relatedArtists.pageInfo.endCursor } });
              },
              [r, l, a]
            );
          if (i) return nn || (nn = c.createElement(ln.k, null));
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
                    var t, n;
                    return e ? c.createElement(S.OJ, { key: e.id, value: { legacyContext: { ID: e.id, TYPE: "artist_similar_artist", CONTEXT_ID: a } } }, c.createElement(on.A, { artistName: e.name, hasExplicitPicture: Boolean(null === (t = e.picture) || void 0 === t ? void 0 : t.explicitStatus), id: e.id, isFavorite: Boolean(e.isFavorite), nbOfFans: e.fansCount, picture: null === (n = e.picture) || void 0 === n ? void 0 : n.large[0] })) : null;
                  })
                : null;
          return c.createElement("div", { className: "container" }, c.createElement(C.az, { mb: "spacing.l" }, c.createElement(M.A, { title: (0, b.AP)("Artistes similaires") })), c.createElement(rn.A, { hasMore: !!r.artist.relatedArtists && r.artist.relatedArtists.pageInfo.hasNextPage, loadMore: o, placeholder: { img: Ce.B.RECOMMENDATION, wording: (0, b.AP)("Aucun artiste similaire n'est disponible") } }, c.createElement(Wt.kK, null, u)));
        },
        sn = "jbzvm",
        un = "_hESX",
        dn = "Pbkan",
        mn = "zbtBF";
      var pn;
      const An = function (e) {
        var t = e.id,
          a = (0, Te.Wyk)({ variables: { artistId: t } }),
          n = a.data,
          r = a.loading,
          i = a.error;
        if (r) return pn || (pn = c.createElement(me.A, null));
        if (i) throw i;
        if (!n || !n.artist || !n.artist.bio) return null;
        var l = (0, Ve.A)("heading-1", sn),
          o = (0, Ve.A)("heading-1", dn);
        return c.createElement("div", { className: "container" }, _.A.isAllowed("revamp2023") ? c.createElement(C.az, { mb: "spacing.l" }, c.createElement(M.A, { title: (0, b.AP)("Biographie") })) : c.createElement("div", { className: l }, (0, b.AP)("Biographie")), c.createElement("div", { className: un }, c.createElement("h2", { className: o }, n.artist.name), c.createElement("div", { className: mn, dangerouslySetInnerHTML: { __html: n.artist.bio.full } })));
      };
      var En,
        yn,
        vn = a("tCiE"),
        fn = a("kPsn");
      function hn(e, t, a) {
        return (t = (0, v.A)(t)), (0, y.A)(e, bn() ? Reflect.construct(t, a || [], (0, v.A)(e).constructor) : t.apply(e, a));
      }
      function bn() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (e) {}
        return (bn = function () {
          return !!e;
        })();
      }
      var gn =
        (0, u.Ay)()(
          ((yn = (function (e) {
            function t(e) {
              var a;
              return (0, A.A)(this, t), ((a = hn(this, t, [e]))._onTabSelect = a._onTabSelect.bind(a)), a;
            }
            return (
              (0, f.A)(t, e),
              (0, E.A)(t, [
                {
                  key: "render",
                  value: function () {
                    var e,
                      t = this.props,
                      a = t.dataFromStore,
                      n = t.dataFromGQL,
                      r = t.selectedTab,
                      i = r && ((e = r), Object.values(ze.G).includes(e)) ? r : ze.G.DISCOGRAPHY;
                    return c.createElement(
                      "div",
                      { className: "naboo-catalog", id: "page_naboo_artist", itemScope: !0, itemType: "http://schema.org/MusicGroup" },
                      c.createElement(
                        an,
                        (function (e, t) {
                          if (!(0, vn.B)(t)) throw new Error("Legacy artist has wrong format");
                          if (!e) throw new Error("GraphQL artist has wrong format");
                          return { id: e.id, name: e.name, bio: e.bio, picture: (0, fn.jg)(g.Ay.Artist, e.picture, t), fansCount: t.NB_FAN, social: e.social, onTour: e.onTour, status: e.status, hasSmartRadio: e.hasSmartRadio };
                        })(n.artist, a)
                      ),
                      c.createElement(Ze.A, { items: this._getTabList(), active: i }),
                      c.createElement("div", { className: "catalog-content", role: "tabpanel" }, this._renderTabContent(i)),
                      c.createElement(qe.A, { type: g.Ay.Artist, data: a })
                    );
                  },
                },
                {
                  key: "_renderTabContent",
                  value: function (e) {
                    var t,
                      a = this.props,
                      n = a.id,
                      r = a.dataFromStore,
                      i = a.shouldExplicitBeHidden,
                      l = a.userIsConnected;
                    switch (e) {
                      case ze.G.DISCOGRAPHY:
                        return c.createElement(S.OJ, { value: { page: "artist", entity: "artist", entityId: n } }, c.createElement(Ca, { id: Number(n), data: r, shouldExplicitBeHidden: i, userIsConnected: l }));
                      case ze.G.TOP_TRACK:
                        return c.createElement("div", { className: "container" }, c.createElement(De, { id: n, context: this._getContext((0, T.Pe)(g.Ay.Artist, P.sI)) }), c.createElement(oe, { id: n, context: this._getContext((0, T.Pe)(g.Ay.Artist, P.sI)), items: (0, p.A)((r && (null === (t = r.TOP) || void 0 === t ? void 0 : t.data)) || []), shouldExplicitBeHidden: i }));
                      case ze.G.RELATED_ARTIST:
                        return c.createElement(cn, { id: n });
                      case ze.G.RELATED_PLAYLIST:
                        return c.createElement(Ke.A, { type: g.Ay.Artist, title: this._getTabLabel(e), pageContext: St.CONTEXT_PAGE_ARTIST_TAB_RELATED_PLAYLIST, key: e, id: n, total: r.RELATED_PLAYLIST.total });
                      case ze.G.CONCERTS:
                        return c.createElement(Ye, { artistId: n });
                      case ze.G.BIOGRAPHY:
                        return c.createElement(An, { id: n });
                      case ze.G.FAVORITES:
                        return c.createElement("div", { className: "container" }, c.createElement(Se, { id: n, shouldExplicitBeHidden: i }));
                      default:
                        return null;
                    }
                  },
                },
                {
                  key: "_onTabSelect",
                  value: function (e) {
                    var t = this.props.id,
                      a = "/artist/".concat(this.props.id);
                    e.id !== ze.G.DISCOGRAPHY && (a += "/".concat(e.id)), e.id === ze.G.CONCERT && this.props.tracking && this.props.tracking.trackEvent({ event: "click", eventlabel: "concert", eventaction: "click-navbar", eventcategory: "artist" }), e.id === ze.G.FAVORITES && Ee(t), this.props.history.push((0, I.jd)(a));
                  },
                },
                {
                  key: "_getTabList",
                  value: function () {
                    var e,
                      t,
                      a,
                      n,
                      r,
                      i = this.props,
                      l = i.dataFromStore,
                      o = i.dataFromGQL;
                    return [
                      { id: ze.G.DISCOGRAPHY, label: this._getTabLabel(ze.G.DISCOGRAPHY), action: this._onTabSelect },
                      { id: ze.G.TOP_TRACK, label: this._getTabLabel(ze.G.TOP_TRACK), action: this._onTabSelect, disabled: !(null !== (e = l.TOP) && void 0 !== e && e.data.length) },
                      { id: ze.G.RELATED_ARTIST, label: this._getTabLabel(ze.G.RELATED_ARTIST), action: this._onTabSelect, disabled: !(null != o && null !== (t = o.artist) && void 0 !== t && null !== (t = t.relatedArtists) && void 0 !== t && t.edges.length) },
                      { id: ze.G.RELATED_PLAYLIST, label: this._getTabLabel(ze.G.RELATED_PLAYLIST), action: this._onTabSelect, disabled: !l.PLAYLISTS.length },
                      {
                        id: ze.G.CONCERTS,
                        label: this._getTabLabel(ze.G.CONCERTS),
                        action: this._onTabSelect,
                        isButton: !0,
                        disabled: !(
                          null != o &&
                          null !== (a = o.artist) &&
                          void 0 !== a &&
                          null !== (a = a.liveEvents) &&
                          void 0 !== a &&
                          a.edges.filter(function (e) {
                            return e.node;
                          }).length
                        ),
                      },
                      { id: ze.G.BIOGRAPHY, label: this._getTabLabel(ze.G.BIOGRAPHY), action: this._onTabSelect, disabled: !(null != o && null !== (n = o.artist) && void 0 !== n && null !== (n = n.bio) && void 0 !== n && n.full) },
                      { id: ze.G.FAVORITES, label: this._getTabLabel(ze.G.FAVORITES), action: this._onTabSelect, disabled: !_.A.isAllowed("artist_page_favorite_content") || !(null !== (r = o.me) && void 0 !== r && null !== (r = r.userFavorites.byArtist) && void 0 !== r && r.estimatedTracksCount) },
                    ];
                  },
                },
                {
                  key: "_getTabLabel",
                  value: function (e) {
                    switch (e) {
                      case ze.G.DISCOGRAPHY:
                        return (0, b.AP)("discographytype_title_discography_web");
                      case ze.G.TOP_TRACK:
                        return (0, b.AP)("Top titres");
                      case ze.G.RELATED_ARTIST:
                        return (0, b.AP)("Artistes similaires");
                      case ze.G.RELATED_PLAYLIST:
                        return (0, b.AP)("Playlists");
                      case ze.G.CONCERT:
                        return (0, b.AP)("artistpage_title_ontour_web");
                      case ze.G.CONCERTS:
                        return (0, b.AP)("generic_title_concerts_web");
                      case ze.G.BIOGRAPHY:
                        return (0, b.AP)("Bio");
                      case ze.G.FAVORITES:
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
          (yn.defaultProps = { selectedTab: ze.G.DISCOGRAPHY }),
          (En = yn))
        ) || En;
      const In = (0, h.y)(
        (0, s.Ng)(function (e) {
          var t = e.user;
          return { shouldExplicitBeHidden: (0, Xe.Uw)(t) === kt.g, userIsConnected: (0, Xe.UJ)(t) };
        })(gn)
      );
      var Tn;
      function Pn(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function _n(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Pn(Object(a), !0).forEach(function (t) {
                (0, l.A)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : Pn(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
              });
        }
        return e;
      }
      var Sn = function (e) {
        var t = e.appState,
          a = e.match.params,
          n = (0, c.useState)(null),
          r = (0, o.A)(n, 2),
          i = r[0],
          l = r[1],
          p = (0, u.z1)(),
          A = (0, s.wA)(),
          E = (0, s.Pj)(),
          y = (0, s.d4)(function (e) {
            return (0, m.UV)(e.entities, a);
          });
        (0, c.useEffect)(
          function () {
            A(function () {
              (0, m._7)({ id: a.id, rehydrateData: t ? _n(_n({}, t), {}, { partial: !1 }) : void 0 })
                .apply(void 0, arguments)
                .catch(function (e) {
                  l(e);
                });
            }),
              p.trackEvent({ event: "updatepage", pagename: "artist", pagecategory: "catalog" });
          },
          [t, A, a.id, E, p]
        );
        var v = (0, c.useCallback)(
          function (e, t) {
            if (y && Number(t.id) === Number(a.id)) {
              var n = "USER.addFavorite" === e.namespace ? (y.NB_FAN || 0) + 1 : (y.NB_FAN || 0) - 1;
              A((0, m.Zt)({ id: a.id, nbFan: n }));
            }
          },
          [y, A, a.id]
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
        var f = (0, Te.wgW)({ variables: { artistId: a.id, relatedArtistFirst: 6, liveEventsFirst: 6 } }),
          h = f.data,
          b = f.loading,
          g = f.error;
        if (i) throw i;
        if (String(a.id) !== String(y && y.ART_ID) || (y && y.partial) || b) return Tn || (Tn = c.createElement(me.A, null));
        if (g) throw g;
        if (!h || !h.artist) {
          var I = new Error("missing data in artist graphql call");
          throw ((I.cause = JSON.stringify(h)), I);
        }
        return c.createElement(c.Suspense, { fallback: null }, c.createElement(In, { dataFromStore: y, dataFromGQL: h, id: a.id, selectedTab: a.tab, fetchTopTracks: A.bind(null, m.Cn) }));
      };
      Sn.displayName = "artist";
      const Ln = Sn;
    },
    ailv: (e, t, a) => {
      a.d(t, { SP: () => r, U$: () => s, Xw: () => l, rc: () => i, uV: () => c, v5: () => o });
      var n = a("LOQS"),
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
          n.A.log({ type: "cdp", eventName: "concert_hub_used", customAttributes: e });
        },
        s = function (e) {
          return null != e && e.isConcert ? r.CONCERT : null != e && e.isFestival ? r.FESTIVAL : null != e && e.isLivestreamConcert ? r.CONCERT_WITH_LIVESTREAM : null != e && e.isLivestreamFestival ? r.FESTIVAL_WITH_LIVESTREAM : void 0;
        };
    },
    eerp: (e, t, a) => {
      a.d(t, { A: () => r });
      var n = { song: 0, track: 0, album: 1, artist: 2, playlist: 3, collaborativePlaylist: 3, radio: 4, smart_radio: 6, smartradio: 6, sradio: 6, show: 7, episode: 8 };
      function r(e) {
        return n[e];
      }
    },
    sk1u: (e, t, a) => {
      a.d(t, { A: () => n });
      const n = { thumbnail: "GryKF", "thumbnail-list": "U1nbu", thumbnailList: "U1nbu", "info-item": "dMJfv", infoItem: "dMJfv" };
    },
  },
]);
