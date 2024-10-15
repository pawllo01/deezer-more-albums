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
        _ = n("LjZa"),
        T = n("tZCQ"),
        P = n("TqF5"),
        S = n("0oT0"),
        L = n("tbEd"),
        O = n("Jfek"),
        x = n("eerp"),
        N = n("g1Fm"),
        k = n("cFUB"),
        D = n("AfN5");
      function C(e, t, n) {
        return (t = (0, s.A)(t)), (0, c.A)(e, w() ? Reflect.construct(t, n || [], (0, s.A)(e).constructor) : t.apply(e, n));
      }
      function w() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (e) {}
        return (w = function () {
          return !!e;
        })();
      }
      var R = (function (e) {
        function t(e, n) {
          var a;
          return (0, l.A)(this, t), ((a = C(this, t, [e, n]))._onEdit = a._onEdit.bind(a)), (a._onShare = a._onShare.bind(a)), (a._onGoToAccount = a._onGoToAccount.bind(a)), a;
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
                return T.A.isAllowed("revamp2023")
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
                return d.createElement(S.A, { id: n, type: a, action: k.Hj.FAVORITE, context: t });
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
                return d.createElement(S.A, { action: k.Hj.PLAY, color: k.cW.PRIMARY, context: a, dzPlayerOptions: r, id: t, type: n === I.Ay.Song ? D.Kk.TRACK_MIX : n, wordingType: k.Hn.FULL });
              },
            },
            {
              key: "_renderShuffle",
              value: function () {
                var e = this.props,
                  t = e.id,
                  n = e.type,
                  a = e.context;
                return d.createElement(S.A, { id: t, type: n, action: k.Hj.SHUFFLE, color: k.cW.PRIMARY, wordingType: k.Hn.FULL, context: a });
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
      R.defaultProps = { data: {}, action: ["favorite", "share", "options"], edit: _.A };
      const B = (0, m.y)((0, p.Ng)(null, { openModal: P.qf })(R));
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
      n.d(t, { qT: () => b, VX: () => g, y8: () => h, Ay: () => _ });
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
      const _ = I;
    },
    xvdY: (e, t, n) => {
      n.d(t, { A: () => T });
      n("ndNi");
      var a,
        r,
        i = n("k6Di"),
        l = n("79Ja"),
        o = n("UHbJ"),
        c = n("udpn"),
        s = n("5hh5"),
        u = (n("17r/"), n("q1tI")),
        d = n("/MKj"),
        m = n("fJgm"),
        p = n("OPhi"),
        A = n("GkgI"),
        E = n("5G9X"),
        y = n("6K8D"),
        v = n("HmE0"),
        f = n("P4bz"),
        h = n("//u0"),
        b = n("gtRZ");
      function g(e, t, n) {
        return (t = (0, c.A)(t)), (0, o.A)(e, I() ? Reflect.construct(t, n || [], (0, c.A)(e).constructor) : t.apply(e, n));
      }
      function I() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (e) {}
        return (I = function () {
          return !!e;
        })();
      }
      var _ = (function (e) {
        function t(e) {
          var n;
          return (0, i.A)(this, t), ((n = g(this, t, [e]))._handleToggle = n._handleToggle.bind(n)), (n._handleDoubleClick = n._handleDoubleClick.bind(n)), n;
        }
        return (
          (0, s.A)(t, e),
          (0, l.A)(t, [
            {
              key: "shouldComponentUpdate",
              value: function (e) {
                return this.props.isFavorite !== e.isFavorite || this.props.id !== e.id;
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.className,
                  n = e.isFavorite,
                  i = e.type,
                  l = e.tooltip,
                  o = e.tooltipPosition,
                  c = e.isDisabled,
                  s = this._getTooltip(),
                  d = u.createElement(v.K0, { "data-testid": i !== E.Ay.User ? "add_to_favorite_button_".concat(n ? "on" : "off") : void 0, variant: "ghost", size: "small", isDisabled: c, onClick: this._handleToggle, onDoubleClick: this._handleDoubleClick, "aria-label": s, icon: u.createElement(u.Fragment, null, i === E.Ay.User && u.createElement(f.H, { color: n && "icon.accent.primary.default" }), i !== E.Ay.User && n && (a || (a = u.createElement(h.C, { color: "icon.accent.primary.default" }))), i !== E.Ay.User && !n && (r || (r = u.createElement(b.M, null)))), className: t });
                return l && !c ? u.createElement(y.m, { label: s, placement: o }, d) : d;
              },
            },
            {
              key: "_handleDoubleClick",
              value: function (e) {
                e.stopPropagation();
              },
            },
            {
              key: "_handleToggle",
              value: function (e) {
                e.stopPropagation();
                var t = this.props,
                  n = t.isFavorite,
                  a = t.type,
                  r = t.id,
                  i = t.context,
                  l = t.onAdd,
                  o = t.onRemove,
                  c = { type: a, id: r, context: i };
                if (n) {
                  if (o) return void o(m.A, c);
                  m.A.remove(c);
                } else {
                  if (l) return void l(m.A, c);
                  m.A.add(c);
                }
              },
            },
            {
              key: "_getTooltip",
              value: function () {
                var e = this.props,
                  t = e.isFavorite,
                  n = e.type;
                return "song" === n ? (0, A.b)({ type: n, action: "favorite" }, t ? "hover" : "add", "full") : "";
              },
            },
          ])
        );
      })(u.Component);
      _.defaultProps = { type: E.Ay.Album, tooltip: !1, tooltipPosition: "top", isDisabled: !1 };
      const T = (0, d.Ng)(function (e, t) {
        var n = e.feedbacks;
        return { isFavorite: (0, p.BA)(n, t.id, t.type) };
      })(_);
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
        return a.createElement(r.DZ, { color: "text.neutral.primary.default", variant: "display.m", mb: "spacing.xl", noOfLines: 2, wordBreak: "break-word", className: i, title: t }, t);
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
        _ = n("/MKj"),
        T = n("3WcA"),
        P = n("xobL");
      const S = (0, _.Ng)(function (e) {
        var t = e.user;
        return { userLang: (0, P.Z0)(t) };
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
              a.createElement("div", { itemProp: "target", itemScope: !0, itemType: "http://schema.org/EntryPoint" }, a.createElement("meta", { itemProp: "urlTemplate", content: "https://".concat(T.default.get("host_website_ssl")).concat(d()) }), v || (v = a.createElement("meta", { itemProp: "actionPlatform", content: "http://schema.org/DesktopWebPlatform" })), f || (f = a.createElement("meta", { itemProp: "actionPlatform", content: "http://schema.org/IOSPlatform" })), h || (h = a.createElement("meta", { itemProp: "actionPlatform", content: "http://schema.org/AndroidPlatform" })), b || (b = a.createElement("meta", { itemProp: "actionPlatform", content: "http://schema.googleapis.com/GoogleAudioCast" })), g || (g = a.createElement("meta", { itemProp: "actionPlatform", content: "http://schema.googleapis.com/GoogleVideoCast" })), a.createElement("meta", { itemProp: "inLanguage", content: u })),
              a.createElement(
                "div",
                { itemProp: "expectsAcceptanceOf", itemScope: !0, itemType: "http://schema.org/Offer" },
                I || (I = a.createElement("meta", { itemProp: "category", content: "subscription" })),
                T.default.get("country_opened").map(function (e) {
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
        _ = n("p/gB"),
        T = n("AY3M"),
        P = n("tZCQ"),
        S = (n("iUT5"), n("8m9I")),
        L = n("1Pdy"),
        O = n("AfN5"),
        x = n("STEc"),
        N = n("DjLa"),
        k = (N.WR.PLAYLIST, { TITLE: { SIZE: x.uq.Full }, PARENT: { BREAKPOINT: x.x1.md, SIZE: x.uq.PercentXs }, DURATION: { SIZE: x.uq.sm }, POPULARITY: { BREAKPOINT: x.x1.xl, SIZE: x.uq.sm }, SELECT: { ALIGN: x.uP.Right, SIZE: x.uq.sm } }),
        D = n("xCFc"),
        C = n("NSet"),
        w = n("xLtY"),
        R = n("BP9I"),
        B = n("1Uwb"),
        F = n("hIIJ"),
        G = (n("mRbW"), n("9D62")),
        M = n("lXQd"),
        j = n("o+h5"),
        H = n("0JBE"),
        U = n("pQlO"),
        Y = n("0oF4"),
        z = n("r4LN"),
        K = n("wkd/"),
        Z = n("LGn+"),
        q = n("tgyz"),
        V = n("CxZw"),
        X = n("SehT");
      function J(e, t) {
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
            ? J(Object(n), !0).forEach(function (t) {
                (0, l.A)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : J(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      const Q = (0, c.memo)(
        (0, H.S2)(
          function (e) {
            var t = e.data,
              n = e.index,
              l = e.style,
              o = (0, D.$A)(),
              s = o.context,
              u = o.container,
              d = o.shouldExplicitBeHidden,
              m = (0, q.A)(s, u, !0),
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
            return c.createElement(B.A.Row, { style: l, uuid: y.uuid, id: y.item.id, index: y.index, isActive: E(y.item) && p.isSameContext, isReadable: y.item.right === V.A.READABLE, isRestrictedByExplicit: v, type: y.item.type, isDraggable: !0 }, c.createElement(Z.A, { size: k.TITLE.SIZE }, c.createElement(Z.A.Play, { ariaLabel: (0, b.AP)("generic_action_playsongXbyartistX_web", { sprintf: [y.item.title, (0, M.A)(y, "item.artists[0].name", "")] }), hasExplicitCover: y.item.parent.hasExplicitCover, onPlayItems: f, pictureUrl: y.item.cover(j.r4).url }), a || (a = c.createElement(Z.A.Download, null)), c.createElement(Z.A.PlayableLabel, { hasExplicitLyrics: y.item.hasExplicitLyrics, label: "".concat(y.item.number || 0, ". ").concat(y.item.title), onPlayItems: f, tooltipText: (0, X.Y)(y.item, d) }), c.createElement(B.A.IconGroup, null, c.createElement(Z.A.ShowLyrics, { item: y.item, lyricsId: y.item.lyricsId, onPlayLyrics: h }), r || (r = c.createElement(Z.A.AddToFeedback, null)), c.createElement(Z.A.OpenContextMenu, { item: y.item }))), c.createElement(B.A.CellBody, { breakpoint: k.PARENT.BREAKPOINT, size: k.PARENT.SIZE }, c.createElement(z.A, { links: [W(W({}, y.item.parent), {}, { type: g.Ay.Album })] })), c.createElement(B.A.CellBody, { size: k.DURATION.SIZE }, c.createElement(U.A, { duration: y.item.duration })), c.createElement(B.A.CellBody, { breakpoint: k.POPULARITY.BREAKPOINT, size: k.POPULARITY.SIZE }, c.createElement(Y.A, { rank: y.item.popularity })), c.createElement(B.A.CellBody, { align: k.SELECT.ALIGN, size: k.SELECT.SIZE }, i || (i = c.createElement(K.A, null))));
          },
          function (e) {
            var t = e.index,
              n = e.data;
            return { item: g.Ay.Track, itemIndex: t, itemId: n.toDisplay[t].item.id };
          }
        ),
        G.t7
      );
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
          m = (0, q.A)(t, l, !0),
          p = m.playerStatus,
          A = m.play;
        (0, ae.A)(
          ne.g.PLAY,
          function () {
            A({ playItems: u.toPlay });
          },
          t
        );
        var E = (0, D.Ay)({ container: l, context: t, manageItems: s, playerStatus: p, select: d, shouldExplicitBeHidden: i });
        return c.createElement(
          D.ru,
          { value: E },
          c.createElement(C.so, { alignItems: "center", mb: "spacing.2xl" }, c.createElement(F.A, { title: (0, b.AP)("Top titres") }), $ || ($ = c.createElement(w.A, null))),
          c.createElement(
            B.A,
            { rowCount: u.toDisplay.length },
            c.createElement(B.A.Header, null, c.createElement(B.A.CellHead, { size: k.TITLE.SIZE, sortPath: "item.title" }, (0, b.AP)("datagrid_title_trackUPP_web")), c.createElement(B.A.CellHead, { breakpoint: k.PARENT.BREAKPOINT, size: k.PARENT.SIZE, sortPath: "item.parent.name" }, (0, b.AP)("datagrid_title_albumUPP_web")), c.createElement(B.A.CellHead, { ariaLabel: (0, b.AP)("sortingmenu_title_duration_web"), size: k.DURATION.SIZE, sortPath: "item.duration" }, ee || (ee = c.createElement(S.m, null))), c.createElement(B.A.CellHead, { breakpoint: k.POPULARITY.BREAKPOINT, size: k.POPULARITY.SIZE, sortPath: "item.popularity" }, (0, b.AP)("datagrid_title_popularityabbrevUPP_web")), c.createElement(B.A.CellHead, { align: k.SELECT.ALIGN, size: k.SELECT.SIZE }, te || (te = c.createElement(R.A, null)))),
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
        Ae = "artist_top_tracks",
        Ee = "artist_playlists",
        ye = "artist_similar_artists",
        ve = "highlight",
        fe = function (e) {
          pe.A.log({ type: "cdp", eventName: "view_all_clicked", customAttributes: { screen_view_name: "artist", screen_view_id_type: "artist", screen_view_id: String(e), section_name: "artist_favorite_items" } });
        };
      function he(e, t) {
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
      function be(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? he(Object(n), !0).forEach(function (t) {
                (0, l.A)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : he(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      const ge = (0, c.memo)(
        (0, H.S2)(
          function (e) {
            var t = e.data,
              n = e.index,
              a = e.style,
              r = (0, D.$A)(),
              i = r.context,
              l = r.container,
              o = r.shouldExplicitBeHidden,
              s = (0, q.A)(i, l),
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
              { style: a, uuid: p.uuid, id: p.item.id, index: p.index, isActive: m(p.item) && u.isSameContext, isReadable: p.item.right === V.A.READABLE, isRestrictedByExplicit: A, type: p.item.type, isDraggable: !0 },
              c.createElement(
                Z.A,
                { size: ue.TITLE.SIZE },
                c.createElement(Z.A.Play, { ariaLabel: (0, b.AP)("generic_action_playsongXbyartistX_web", { sprintf: [p.item.title, (0, M.A)(p, "item.artists[0].name", "")] }), hasExplicitCover: p.item.parent.hasExplicitCover, onPlayItems: E, pictureUrl: p.item.cover(j.r4).url }),
                oe || (oe = c.createElement(Z.A.Download, null)),
                c.createElement(Z.A.PlayableLabel, { hasExplicitLyrics: p.item.hasExplicitLyrics, label: p.item.title, onPlayItems: E, tooltipText: (0, X.Y)(p.item, o) }),
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
              c.createElement(B.A.CellBody, { breakpoint: ue.PARENT.BREAKPOINT, size: ue.PARENT.SIZE }, c.createElement(z.A, { links: [be(be({}, p.item.parent), {}, { type: g.Ay.Album })] })),
              c.createElement(B.A.CellBody, { breakpoint: ue.DATE.BREAKPOINT, size: ue.DATE.SIZE }, c.createElement(me.A, { date: new Date(p.item.date).getTime(), dataTestId: "added" })),
              c.createElement(B.A.CellBody, { size: ue.DURATION.SIZE }, c.createElement(U.A, { duration: p.item.duration })),
              c.createElement(B.A.CellBody, { breakpoint: ue.POPULARITY.BREAKPOINT, size: ue.POPULARITY.SIZE }, c.createElement(Y.A, { rank: p.item.popularity })),
              c.createElement(B.A.CellBody, { align: ue.SELECT.ALIGN, size: ue.SELECT.SIZE }, se || (se = c.createElement(K.A, null)))
            );
          },
          function (e) {
            var t = e.index,
              n = e.data;
            return { item: g.Ay.Track, itemIndex: t, itemId: n.toDisplay[t].item.id };
          }
        ),
        G.t7
      );
      var Ie,
        _e,
        Te,
        Pe = n("A2sV");
      function Se(e, t) {
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
      function Le(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Se(Object(n), !0).forEach(function (t) {
                (0, l.A)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Se(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      const Oe = (0, H.S2)(
        function (e) {
          var t,
            n,
            a,
            r = e.id,
            i = e.shouldExplicitBeHidden,
            l = void 0 !== i && i,
            o = (0, Pe.gWG)({ variables: { artistId: r, first: 20, cursor: null }, fetchPolicy: "cache-and-network" }),
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
            v = (0, q.A)(E, y).playerStatus,
            f =
              null != p && null !== (a = p.me) && void 0 !== a && null !== (a = a.userFavorites) && void 0 !== a && null !== (a = a.byArtist) && void 0 !== a && null !== (a = a.tracks) && void 0 !== a && a.edges
                ? (p.me.userFavorites.byArtist.tracks.edges || []).reduce(function (e, t) {
                    return t.node && e.push(Le(Le({}, t.node), {}, { date: t.favoritedAt })), e;
                  }, [])
                : [],
            h = (0, re.A)(r, f, E),
            g = h.manageItems,
            I = h.tableItems,
            _ = (0, ie.A)(I, E);
          if (d && !p) return Ie || (Ie = c.createElement(de.A, null));
          var T = (0, D.Ay)({ container: y, context: E, manageItems: g, select: _, shouldExplicitBeHidden: l, playerStatus: v });
          return c.createElement(
            D.ru,
            { value: T },
            c.createElement(
              B.A,
              { rowCount: I.toDisplay.length },
              c.createElement(B.A.Header, null, c.createElement(B.A.CellHead, { size: ue.TITLE.SIZE, sortPath: "item.title" }, (0, b.AP)("datagrid_title_trackUPP_web")), c.createElement(B.A.CellHead, { breakpoint: ue.PARENT.BREAKPOINT, size: ue.PARENT.SIZE, sortPath: "item.parent.name" }, (0, b.AP)("datagrid_title_albumUPP_web")), c.createElement(B.A.CellHead, { breakpoint: ue.DATE.BREAKPOINT, size: ue.DATE.SIZE, sortPath: "item.date" }, (0, b.AP)("datagrid_title_addedtrackUPP_web")), c.createElement(B.A.CellHead, { ariaLabel: (0, b.AP)("sortingmenu_title_duration_web"), size: ue.DURATION.SIZE, sortPath: "item.duration" }, _e || (_e = c.createElement(S.m, null))), c.createElement(B.A.CellHead, { breakpoint: ue.POPULARITY.BREAKPOINT, size: ue.POPULARITY.SIZE, sortPath: "item.popularity" }, c.createElement("span", null, (0, b.AP)("datagrid_title_popularityabbrevUPP_web"))), c.createElement(B.A.CellHead, { align: ue.SELECT.ALIGN, size: ue.SELECT.SIZE }, Te || (Te = c.createElement(R.A, null)))),
              c.createElement(
                B.A.Body,
                null,
                I.toDisplay.map(function (e, t) {
                  return c.createElement(ge, { data: I, key: e.uuid, index: t, style: { height: L.F4.md } });
                })
              )
            )
          );
        },
        function () {
          return { page: "artist_favorite_items" };
        }
      );
      var xe,
        Ne = n("1h7S"),
        ke = n("Eiyd"),
        De = n("cXQW");
      const Ce = function (e) {
        var t = e.id,
          n = e.context,
          a = (0, s.d4)(function (e) {
            return (0, m.MD)(e.entities, { id: t });
          }),
          r = (0, Ne.Ay)({ containerData: { items: a.data }, context: n, id: t, type: g.Ay.TopArtistFull });
        return c.createElement(Ne.PK.Provider, { value: r }, xe || (xe = c.createElement(De.e, { gap: "spacing.xs", spacing: 0, "data-testid": "toolbar" }, c.createElement(ke.A, null))));
      };
      n("Ojuz");
      var we = n("mk5l"),
        Re = n("Q6dJ"),
        Be = n("5xmB"),
        Fe = n("Z9kq");
      const Ge = "Wktsb",
        Me = "lvRs2",
        je = "axvzv";
      var He = n("ailv");
      const Ue = function (e) {
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
              return !(!(0, we.A)(e.name.toLowerCase()).includes((0, we.A)(l.toLowerCase())) && !(0, we.A)(null === (t = e.location) || void 0 === t ? void 0 : t.toLowerCase()).includes((0, we.A)(l.toLowerCase())));
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
              { className: Ge },
              c.createElement(F.A, { className: Me }, (0, b.AP)("eventpage_action_alltourdates_web")),
              c.createElement(
                "div",
                { className: je },
                c.createElement(Fe.D, {
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
                  return c.createElement(Re.A, {
                    concertId: e.id,
                    title: e.name,
                    date: e.date,
                    subtitle: e.location,
                    key: e.id,
                    onClick: function () {
                      return (function (e, n) {
                        (0, He.uV)({ action: He.rc.CLICK_CONCERT, screen_view_id_type: He.v5.ARTIST, screen_view_id: t, screen_view_name: He.Xw.ARTIST, item_type: (0, He.U$)(e.types), concert_ranking: n, item_id: e.id });
                      })(e, n);
                    },
                    locationState: { referringArtistId: t },
                  });
                })
              : c.createElement(Be.A, { wording: (0, b.AP)("errormessage_text_sorryeventcouldnotbefound_web") })
          )
        );
      };
      var Ye;
      const ze = function (e) {
        var t = e.artistId,
          n = (0, Pe.AgB)({ variables: { artistId: t, liveEventsFirst: 70 } }),
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
        if (r) return Ye || (Ye = c.createElement(de.A, null));
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
        return c.createElement(Ue, { artistId: t, concerts: s });
      };
      var Ke,
        Ze = n("61mP"),
        qe = n("MTsA"),
        Ve = n("YVUD"),
        Xe = n("sdUN"),
        Je = (n("fKLj"), n("uUhk"), n("juqV")),
        We = (n("O3J2"), n("xobL")),
        Qe = (n("aRRr"), { TITLE: { SIZE: x.uq.Full }, PARENT: { SIZE: x.uq.xxl } });
      function $e(e, t) {
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
      function et(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? $e(Object(n), !0).forEach(function (t) {
                (0, l.A)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : $e(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var tt = function (e) {
        var t = e.data,
          n = e.index,
          a = e.style,
          r = t.toDisplay[n],
          i = c.useContext(D.Gt),
          l = i.context,
          o = i.container,
          s = i.shouldExplicitBeHidden,
          u = (0, q.A)(l, o, !0),
          d = u.playerStatus,
          m = u.play,
          p = u.isItemLoadedInPlayer,
          A = r.item.hasExplicitLyrics && s,
          E = function (e, n) {
            m({ playIndex: n, playItems: t.toPlay, isTrackActive: e });
          };
        return c.createElement(B.A.Row, { style: a, uuid: r.uuid, id: r.item.id, index: r.index, isActive: p(r.item) && d.isSameContext, isReadable: r.item.right === V.A.READABLE, isRestrictedByExplicit: A, type: r.item.type }, c.createElement(Z.A, { size: Qe.TITLE.SIZE }, c.createElement(Z.A.Play, { ariaLabel: (0, b.AP)("generic_action_playsongXbyartistX_web", { sprintf: [r.item.title, r.item.parent.name] }), hasExplicitCover: r.item.parent.hasExplicitCover, onPlayItems: E, pictureUrl: r.item.cover(j.r8).url }), Ke || (Ke = c.createElement(Z.A.Download, null)), c.createElement(Z.A.PlayableLabel, { description: r.item.description, hasExplicitLyrics: r.item.hasExplicitLyrics, label: r.item.title, onPlayItems: E, tooltipText: (0, X.Y)(r.item, s) }), c.createElement(B.A.IconGroup, null, c.createElement(Z.A.OpenContextMenu, { item: r.item }))), c.createElement(B.A.CellBody, { size: Qe.PARENT.SIZE }, c.createElement(z.A, { links: [et(et({}, r.item.parent), {}, { type: g.Ay.Show })] })));
      };
      const nt = c.memo(tt, G.t7);
      const at = function (e) {
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
          m = (0, q.A)(t, l, !0).playerStatus,
          p = (0, D.Ay)({ container: l, context: t, hasBackground: !1, manageItems: u, playerStatus: m, rowHeight: o, shouldExplicitBeHidden: i });
        return c.createElement(
          D.ru,
          { value: p },
          c.createElement(
            B.A,
            { rowCount: d.toDisplay.length },
            c.createElement(
              B.A.Body,
              null,
              d.toDisplay.map(function (e, t) {
                return c.createElement(nt, { data: d, key: e.uuid, index: t, style: { height: o } });
              })
            )
          )
        );
      };
      var rt,
        it,
        lt = { TITLE: { SIZE: x.uq.Full } },
        ot = function (e) {
          var t = e.data,
            n = e.index,
            a = e.style,
            r = (0, D.$A)(),
            i = r.context,
            l = r.container,
            o = r.shouldExplicitBeHidden,
            s = (0, q.A)(i, l, !1),
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
          return c.createElement(H.OJ, { value: { item: g.Ay.Track, itemIndex: n, itemId: t.toDisplay[n].item.id } }, c.createElement(B.A.Row, { style: a, uuid: p.uuid, id: p.item.id, index: p.index, isActive: m(p.item) && u.isSameContext, isReadable: p.item.right === V.A.READABLE, isRestrictedByExplicit: A, type: p.item.type, isDraggable: !0 }, c.createElement(Z.A, { size: lt.TITLE.SIZE }, c.createElement(Z.A.Play, { ariaLabel: (0, b.AP)("generic_action_playsongXbyartistX_web", { sprintf: [p.item.title, (0, M.A)(p, "item.artists[0].name", "")] }), hasExplicitCover: p.item.parent.hasExplicitCover, onPlayItems: E, pictureUrl: p.item.cover(j.r4).url }), rt || (rt = c.createElement(Z.A.Download, null)), c.createElement(Z.A.PlayableLabel, { hasExplicitLyrics: p.item.hasExplicitLyrics, label: "".concat(p.item.number || 0, ". ").concat(p.item.title), onPlayItems: E, tooltipText: (0, X.Y)(p.item, o) }), c.createElement(B.A.IconGroup, null, c.createElement(Z.A.ShowLyrics, { item: p.item, lyricsId: p.item.lyricsId, onPlayLyrics: y }), it || (it = c.createElement(Z.A.AddToFeedback, null)), c.createElement(Z.A.OpenContextMenu, { item: p.item })))));
        };
      const ct = (0, c.memo)(ot, G.t7);
      const st = function (e) {
        var t = e.context,
          n = e.id,
          a = e.items,
          r = e.shouldExplicitBeHidden,
          i = void 0 !== r && r,
          l = { id: n, type: O.Kk.ALBUM },
          o = (0, re.A)(n, a, t),
          s = o.manageItems,
          u = o.tableItems,
          d = (0, q.A)(t, l, !0).playerStatus,
          m = (0, D.Ay)({ container: l, context: t, hasBackground: !1, manageItems: s, playerStatus: d, shouldExplicitBeHidden: i });
        return c.createElement(
          D.ru,
          { value: m },
          c.createElement(
            B.A,
            { rowCount: u.toDisplay.length },
            c.createElement(
              B.A.Body,
              null,
              u.toDisplay.map(function (e, t) {
                return c.createElement(ct, { data: u, key: e.uuid, index: t, style: { height: L.F4.md } });
              })
            )
          )
        );
      };
      var ut,
        dt,
        mt = { TITLE: { SIZE: x.uq.Full }, ARTIST: { SIZE: x.uq.PercentXs } };
      function pt(e, t) {
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
      function At(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? pt(Object(n), !0).forEach(function (t) {
                (0, l.A)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : pt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      const Et = (0, c.memo)(
        (0, H.S2)(
          function (e) {
            var t = e.data,
              n = e.index,
              a = e.style,
              r = (0, D.$A)(),
              i = r.context,
              l = r.container,
              o = r.shouldExplicitBeHidden,
              s = (0, q.A)(i, l, !1),
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
              { style: a, uuid: p.uuid, id: p.item.id, index: p.index, isActive: m(p.item) && u.isSameContext, isReadable: p.item.right === V.A.READABLE, isRestrictedByExplicit: A, type: p.item.type, isDraggable: !0 },
              c.createElement(Z.A, { size: mt.TITLE.SIZE }, c.createElement(Z.A.Play, { ariaLabel: (0, b.AP)("generic_action_playsongXbyartistX_web", { sprintf: [p.item.title, (0, M.A)(p, "item.artists[0].name", "")] }), hasExplicitCover: p.item.parent.hasExplicitCover, onPlayItems: E, pictureUrl: p.item.cover(j.r4).url }), ut || (ut = c.createElement(Z.A.Download, null)), c.createElement(Z.A.PlayableLabel, { hasExplicitLyrics: p.item.hasExplicitLyrics, label: p.item.title, onPlayItems: E, tooltipText: (0, X.Y)(p.item, o) }), c.createElement(B.A.IconGroup, null, c.createElement(Z.A.ShowLyrics, { item: p.item, lyricsId: p.item.lyricsId, onPlayLyrics: y }), dt || (dt = c.createElement(Z.A.AddToFeedback, null)), c.createElement(Z.A.OpenContextMenu, { item: p.item }))),
              c.createElement(
                B.A.CellBody,
                { size: mt.ARTIST.SIZE },
                c.createElement(z.A, {
                  links: p.item.artists.map(function (e) {
                    return At(At({}, e), {}, { type: g.Ay.Artist });
                  }),
                })
              )
            );
          },
          function (e) {
            var t = e.index,
              n = e.data;
            return { item: g.Ay.Track, itemIndex: t, itemId: n.toDisplay[t].item.id };
          }
        ),
        G.t7
      );
      const yt = function (e) {
        var t = e.context,
          n = e.id,
          a = e.items,
          r = e.shouldExplicitBeHidden,
          i = void 0 !== r && r,
          l = { id: n, type: O.Kk.PLAYLIST },
          o = (0, re.A)(n, a, t),
          s = o.manageItems,
          u = o.tableItems,
          d = (0, q.A)(t, l, !0).playerStatus,
          m = (0, D.Ay)({ container: l, context: t, hasBackground: !1, manageItems: s, playerStatus: d, shouldExplicitBeHidden: i });
        return c.createElement(
          D.ru,
          { value: m },
          c.createElement(
            B.A,
            { rowCount: u.toDisplay.length },
            c.createElement(
              B.A.Body,
              null,
              u.toDisplay.map(function (e, t) {
                return c.createElement(Et, { data: u, key: e.uuid, index: t, style: { height: L.F4.md } });
              })
            )
          )
        );
      };
      var vt,
        ft = { TITLE: { SIZE: x.uq.Full } },
        ht = function (e) {
          var t = e.data,
            n = e.index,
            a = e.style,
            r = t.toDisplay[n],
            i = c.useContext(D.Gt),
            l = i.context,
            o = i.container,
            s = i.shouldExplicitBeHidden,
            u = (0, q.A)(l, o, !1),
            d = u.playerStatus,
            m = u.play,
            p = u.isItemLoadedInPlayer,
            A = r.item.hasExplicitLyrics && s,
            E = function (e, n) {
              m({ playIndex: n, playItems: t.toPlay, isTrackActive: e });
            };
          return c.createElement(B.A.Row, { style: a, uuid: r.uuid, id: r.item.id, index: r.index, isActive: p(r.item) && d.isSameContext, isReadable: r.item.right === V.A.READABLE, isRestrictedByExplicit: A, type: r.item.type }, c.createElement(Z.A, { size: ft.TITLE.SIZE }, c.createElement(Z.A.Play, { ariaLabel: (0, b.AP)("generic_action_playsongXbyartistX_web", { sprintf: [r.item.title, r.item.parent.name] }), hasExplicitCover: r.item.parent.hasExplicitCover, onPlayItems: E, pictureUrl: r.item.cover(j.r8).url }), vt || (vt = c.createElement(Z.A.Download, null)), c.createElement(Z.A.PlayableLabel, { description: r.item.description, hasExplicitLyrics: r.item.hasExplicitLyrics, label: r.item.title, onPlayItems: E, tooltipText: (0, X.Y)(r.item, s) }), c.createElement(B.A.IconGroup, null, c.createElement(Z.A.OpenContextMenu, { item: r.item }))));
        };
      const bt = c.memo(ht, G.t7);
      const gt = function (e) {
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
          m = (0, q.A)(t, l, !0).playerStatus,
          p = (0, D.Ay)({ container: l, context: t, hasBackground: !1, manageItems: u, playerStatus: m, rowHeight: o, shouldExplicitBeHidden: i });
        return c.createElement(
          D.ru,
          { value: p },
          c.createElement(
            B.A,
            { rowCount: d.toDisplay.length },
            c.createElement(
              B.A.Body,
              null,
              d.toDisplay.map(function (e, t) {
                return c.createElement(bt, { data: d, key: e.uuid, index: t, style: { height: o } });
              })
            )
          )
        );
      };
      var It,
        _t = n("HmE0"),
        Tt = n("nrKQ"),
        Pt = n("GkjM"),
        St = n("0CJU"),
        Lt = n("7E8A");
      function Ot(e, t, n) {
        return (t = (0, v.A)(t)), (0, y.A)(e, xt() ? Reflect.construct(t, n || [], (0, v.A)(e).constructor) : t.apply(e, n));
      }
      function xt() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (e) {}
        return (xt = function () {
          return !!e;
        })();
      }
      var Nt =
        (0, u.Ay)()(
          (It = (function (e) {
            function t() {
              var e;
              (0, A.A)(this, t);
              for (var n = arguments.length, a = new Array(n), r = 0; r < n; r++) a[r] = arguments[r];
              return (
                ((e = Ot(this, t, [].concat(a))).getTrackingParams = function () {
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
                    n = t.data,
                    a = t.type,
                    r = (0, M.A)(n, "PRODUCER_LINE");
                  return a === g.Ay.Album && r ? c.createElement("div", { className: "album-legal" }, r) : null;
                }),
                (e.renderViewMore = function () {
                  var t = e.props,
                    n = t.id,
                    a = t.index,
                    r = t.type,
                    i = t.viewMoreLabel;
                  return i ? c.createElement("div", { className: "view-more-container" }, c.createElement(_t.$n, { as: Pt.A, onClick: e.handleClick, size: "sm", to: "/".concat(r, "/").concat(n), variant: "outline", "data-position": a || 0 }, i)) : null;
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
                    return c.createElement("div", { className: "catalog-tab-box discography-row" }, c.createElement("div", { className: "discography-thumbnail" }, c.createElement(H.OJ, { value: { item: o === g.Ay.Album || o === g.Ay.Playlist ? o : void 0, itemId: String(n) } }, c.createElement("div", { className: "thumbnail-container" }, c.createElement(St.A, { type: o, width: 200, height: 200, bordered: !0, context: r, pageContext: Lt.CONTEXT_PAGE_ALBUM_DISCOGRAPHY, data: i, alt: l }))), this.renderProducerLine()), c.createElement("div", { className: "discography-infos" }, c.createElement(C.DZ, { variant: "heading.m", className: "ellipsis", _hover: { textDecoration: "underline" } }, c.createElement(Pt.A, { to: "/".concat(o, "/").concat(n), onClick: this.handleClick, "data-position": a || 0 }, l)), this.renderDescription(), t, this.renderViewMore()));
                  },
                },
              ])
            );
          })(c.Component))
        ) || It;
      const kt = Nt;
      var Dt = n("/sVC"),
        Ct = n("3nMj"),
        wt = n("sAMA"),
        Rt = [g.Ay.Album, g.Ay.Episode, g.Ay.Playlist, g.Ay.Show],
        Bt = (function (e) {
          return (e.XXSMALL = "xxsmall"), (e.XSMALL = "xsmall"), (e.SMALL = "small"), (e.MEDIUM = "medium"), (e.DEFAULT = "default"), e;
        })({});
      const Ft = function (e) {
        var t = e.item,
          n = e.title,
          a = e.size,
          r = (0, M.A)(t, "__TYPE__");
        if (!r) throw new Error("Item without type was sent to Artist Highlight.");
        var i = r === g.Ay.Podcast ? g.Ay.Show : r;
        if (-1 === Rt.indexOf(i)) throw new Error('Item of type "'.concat(i, '" is not handled by the Artist Highlight.'));
        var l = String(t[g.vn[i]]),
          o = { ID: l, TYPE: (0, _.Sx)(i) },
          u = (0, s.d4)(function (e) {
            return (0, We.Uw)(e.user) === wt.g;
          }),
          d = function () {
            return i === g.Ay.Show;
          },
          m = function () {
            var e = (0, M.A)(t, "SONGS.data") || (0, M.A)(t, "SONGS") || (0, M.A)(t, "EPISODES", []),
              n = d() ? 5 : 6,
              a = { context: o, id: l, items: e.slice(0, n), shouldExplicitBeHidden: u };
            switch (i) {
              case g.Ay.Album:
                return c.createElement(st, a);
              case g.Ay.Playlist:
                return c.createElement(yt, a);
              case g.Ay.Show:
                return c.createElement(gt, a);
            }
          },
          p = (0, Je.A)("top-content content-bottom content-left last-release", a);
        return c.createElement(
          H.OJ,
          { value: { section: ve } },
          c.createElement(
            "div",
            { className: "top-cell top-cell-left" },
            c.createElement(F.A, { className: "catalog-section-title", title: n || (0, b.AP)("DerniĂ¨re sortie"), href: "/".concat(i, "/").concat(l) }),
            c.createElement(
              "div",
              { className: p },
              (function () {
                if (i === g.Ay.Episode) return c.createElement(at, { context: o, id: l, items: [t], shouldExplicitBeHidden: u });
                var e,
                  n = d() ? t.SHOW_DESCRIPTION : (0, Ct.A)((0, Dt.A)(t));
                return c.createElement(kt, { context: o, data: t, description: n, id: Number(l), title: t.ALB_TITLE || t.TITLE || t.SHOW_NAME || "", type: i, viewMoreLabel: ((e = Number((0, M.A)(t, "SONGS.total")) || Number(t.NB_SONG) || 0), d() || e <= 6 ? "" : i === g.Ay.Album ? (0, b.WI)("artistpage_action_accessalbumpageXtracks_web", "artistpage_action_accessalbumpageXtracks_web", { count: e, sprintf: [e] }) : (0, b.WI)("artistpage_action_accessplaylistpageXtracks_web", "artistpage_action_accessplaylistpageXtracks_web", { count: e, sprintf: [e] })) }, m());
              })()
            )
          )
        );
      };
      var Gt,
        Mt,
        jt = { TITLE: { SIZE: x.uq.Full } },
        Ht = function (e) {
          var t = e.data,
            n = e.index,
            a = e.style,
            r = (0, D.$A)(),
            i = r.context,
            l = r.container,
            o = r.shouldExplicitBeHidden,
            s = (0, q.A)(i, l, !0),
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
          return c.createElement(H.OJ, { value: { item: g.Ay.Track, itemId: p.item.id, itemIndex: n } }, c.createElement(B.A.Row, { style: a, uuid: p.uuid, id: p.item.id, index: p.index, isActive: m(p.item) && u.isSameContext, isReadable: p.item.right === V.A.READABLE, isRestrictedByExplicit: A, type: p.item.type, isDraggable: !0 }, c.createElement(Z.A, { size: jt.TITLE.SIZE }, c.createElement(Z.A.Play, { ariaLabel: (0, b.AP)("generic_action_playsongXbyartistX_web", { sprintf: [p.item.title, (0, M.A)(p, "item.artists[0].name", "")] }), hasExplicitCover: p.item.parent.hasExplicitCover, onPlayItems: E, pictureUrl: p.item.cover(j.r4).url }), Gt || (Gt = c.createElement(Z.A.Download, null)), c.createElement(Z.A.PlayableLabel, { hasExplicitLyrics: p.item.hasExplicitLyrics, label: "".concat(p.item.number || 0, ". ").concat(p.item.title), onPlayItems: E, tooltipText: (0, X.Y)(p.item, o) }), c.createElement(B.A.IconGroup, null, c.createElement(Z.A.ShowLyrics, { item: p.item, lyricsId: p.item.lyricsId, onPlayLyrics: y }), Mt || (Mt = c.createElement(Z.A.AddToFeedback, null)), c.createElement(Z.A.OpenContextMenu, { item: p.item })))));
        };
      const Ut = (0, c.memo)(Ht, G.t7);
      const Yt = function (e) {
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
          m = (0, q.A)(t, o, !0).playerStatus;
        r && (d.toDisplay = d.toDisplay.slice(0, r));
        var p = (0, D.Ay)({ container: o, context: t, hasBackground: !1, manageItems: u, playerStatus: m, shouldExplicitBeHidden: l });
        return c.createElement(
          H.OJ,
          { value: { section: Ae } },
          c.createElement(
            D.ru,
            { value: p },
            c.createElement(
              B.A,
              { rowCount: d.toDisplay.length },
              c.createElement(
                B.A.Body,
                null,
                d.toDisplay.map(function (e, t) {
                  return c.createElement(Ut, { data: d, key: e.uuid, index: t, style: { height: L.F4.md } });
                })
              )
            )
          )
        );
      };
      var zt = n("aFHr"),
        Kt = n("KVgY"),
        Zt = n("wGgI");
      const qt = function (e) {
        var t = e.onSort,
          n = e.sortType,
          a = e.sortTypes,
          r = 0,
          i = a.map(function (e, a) {
            var i = (0, o.A)(e, 2),
              l = i[0],
              s = i[1];
            return l === n && (r = a), c.createElement(Zt.Ay.Item, { key: l, label: s, isSelected: l === n }, c.createElement("a", { onClick: t.bind(undefined, l), role: "button" }, s));
          });
        return c.createElement(Zt.Ay, { selected: r }, i);
      };
      var Vt,
        Xt,
        Jt = n("GxIe"),
        Wt = n("3ns7");
      function Qt(e, t) {
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
      function $t(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Qt(Object(n), !0).forEach(function (t) {
                (0, l.A)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Qt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function en(e) {
        return (e || []).reduce(function (e, t) {
          return t.node && e.push(t.node), e;
        }, []);
      }
      const tn = function (e) {
        var t,
          n,
          a,
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
          _ = P.A.isAllowed("artist_page_albums_sorted_by_rank") ? Pe.sV3.RANK : Pe.sV3.RELEASE_DATE,
          T = (0, c.useState)(_),
          S = (0, o.A)(T, 2),
          L = S[0],
          O = S[1],
          x = (0, c.useTransition)(),
          N = (0, o.A)(x, 2)[1],
          k = { artistId: I, nb: 30, cursor: null, subType: null, roles: [Pe.by3.MAIN], mode: Pe.rb0.OFFICIAL, order: L },
          D = (0, Pe.JDV)({ variables: $t($t({}, k), {}, { types: [Pe.iqi.ALBUM], subType: Pe.Mij.STUDIO }) }),
          w = D.data,
          R = D.fetchMore,
          B = (0, Pe.JDV)({ variables: $t($t({}, k), {}, { types: [Pe.iqi.EP] }) }),
          F = B.data,
          G = B.fetchMore,
          M = (0, Pe.JDV)({ variables: $t($t({}, k), {}, { types: [Pe.iqi.SINGLES] }) }),
          j = M.data,
          U = M.fetchMore,
          Y = (0, Pe.JDV)({ variables: $t($t({}, k), {}, { types: [Pe.iqi.ALBUM], subType: Pe.Mij.LIVE }) }),
          z = Y.data,
          K = Y.fetchMore,
          Z = (0, Pe.JDV)({ variables: $t($t({}, k), {}, { types: [Pe.iqi.ALBUM], subType: Pe.Mij.COMPILATION }) }),
          q = Z.data,
          V = Z.fetchMore,
          X = (0, Pe.JDV)({ variables: $t($t({}, k), {}, { roles: [Pe.by3.FEATURED], types: [Pe.iqi.ALBUM, Pe.iqi.EP, Pe.iqi.SINGLES], mode: Pe.rb0.ALL }) }),
          J = X.data,
          W = X.fetchMore,
          Q = en(null == w || null === (t = w.artist) || void 0 === t ? void 0 : t.albums.edges),
          $ = en(null == F || null === (n = F.artist) || void 0 === n ? void 0 : n.albums.edges),
          ee = en(null == j || null === (a = j.artist) || void 0 === a ? void 0 : a.albums.edges),
          te = en(null == z || null === (r = z.artist) || void 0 === r ? void 0 : r.albums.edges),
          ne = en(null == q || null === (i = q.artist) || void 0 === i ? void 0 : i.albums.edges),
          ae = en(null == J || null === (l = J.artist) || void 0 === l ? void 0 : l.albums.edges),
          re = null == w || null === (s = w.artist) || void 0 === s ? void 0 : s.albums.pageInfo.hasNextPage,
          ie = function () {
            var e;
            R({ variables: { cursor: null == w || null === (e = w.artist) || void 0 === e ? void 0 : e.albums.pageInfo.endCursor } });
          },
          le = [[Q, (0, b.AP)("favoritessidebar_title_albums_web"), "albums"]];
        !1 === (null == w || null === (u = w.artist) || void 0 === u ? void 0 : u.albums.pageInfo.hasNextPage) &&
          (le.push([$, (0, b.AP)("discographytype_title_EPs_web"), "eps"]),
          (re = null == F || null === (d = F.artist) || void 0 === d ? void 0 : d.albums.pageInfo.hasNextPage),
          (ie = function () {
            var e;
            G({ variables: { cursor: null == F || null === (e = F.artist) || void 0 === e ? void 0 : e.albums.pageInfo.endCursor } });
          }),
          !1 === (null == F || null === (m = F.artist) || void 0 === m ? void 0 : m.albums.pageInfo.hasNextPage) &&
            ((re = null == j || null === (p = j.artist) || void 0 === p ? void 0 : p.albums.pageInfo.hasNextPage),
            le.push([ee, (0, b.AP)("discographytype_title_singles_web"), "singles"]),
            (ie = function () {
              var e;
              U({ variables: { cursor: null == j || null === (e = j.artist) || void 0 === e ? void 0 : e.albums.pageInfo.endCursor } });
            }),
            !1 === (null == j || null === (A = j.artist) || void 0 === A ? void 0 : A.albums.pageInfo.hasNextPage) &&
              ((re = null == z || null === (E = z.artist) || void 0 === E ? void 0 : E.albums.pageInfo.hasNextPage),
              le.push([te, (0, b.AP)("discographytype_title_livealbums_web"), "live_albums"]),
              (ie = function () {
                var e;
                K({ variables: { cursor: null == z || null === (e = z.artist) || void 0 === e ? void 0 : e.albums.pageInfo.endCursor } });
              }),
              !1 === (null == z || null === (y = z.artist) || void 0 === y ? void 0 : y.albums.pageInfo.hasNextPage) &&
                ((re = null == q || null === (v = q.artist) || void 0 === v ? void 0 : v.albums.pageInfo.hasNextPage),
                le.push([ne, (0, b.AP)("discographytype_title_compilations_web"), "compilations"]),
                (ie = function () {
                  var e;
                  V({ variables: { cursor: null == q || null === (e = q.artist) || void 0 === e ? void 0 : e.albums.pageInfo.endCursor } });
                }),
                !1 === (null == q || null === (f = q.artist) || void 0 === f ? void 0 : f.albums.pageInfo.hasNextPage) &&
                  ((re = null == J || null === (h = J.artist) || void 0 === h ? void 0 : h.albums.pageInfo.hasNextPage),
                  le.push([ae, (0, b.AP)("discography_title_featuredin_web"), "artist_featured_discography"]),
                  (ie = function () {
                    var e;
                    W({ variables: { cursor: null == J || null === (e = J.artist) || void 0 === e ? void 0 : e.albums.pageInfo.endCursor } });
                  }),
                  !1 === (null == J || null === (g = J.artist) || void 0 === g ? void 0 : g.albums.pageInfo.hasNextPage) && (ie = function () {}))))));
        var oe = !1;
        return c.createElement(
          Kt.A,
          {
            hasMore: re,
            loadMore: function () {
              return N(function () {
                return ie();
              });
            },
            loader: Vt || (Vt = c.createElement(de.A, { key: "loader" })),
          },
          le.map(function (e) {
            var t = (0, o.A)(e, 3),
              n = t[0],
              a = t[1],
              r = t[2];
            return (
              n.length > 0 &&
              c.createElement(
                H.OJ,
                { key: a, value: { section: r } },
                c.createElement(
                  "div",
                  { key: "heading", className: "heading" },
                  c.createElement("div", { className: "cell cell-title" }, c.createElement(C.DZ, { variant: "heading.m" }, a)),
                  Xt || (Xt = c.createElement("div", { className: "cell cell-line" }, c.createElement("div", { className: "line" }))),
                  !oe &&
                    (oe = !0) &&
                    c.createElement(
                      "div",
                      { className: "cell cell-sort" },
                      c.createElement(qt, {
                        onSort: function (e) {
                          N(function () {
                            return O(e);
                          });
                        },
                        sortType: L,
                        sortTypes: [
                          [Pe.sV3.RELEASE_DATE, (0, b.AP)("Date de sortie")],
                          [Pe.sV3.ALPHA, (0, b.AP)("A - Z")],
                          [Pe.sV3.RANK, (0, b.AP)("Les plus ĂŠcoutĂŠs")],
                        ],
                      })
                    )
                ),
                c.createElement(
                  Wt.kK,
                  null,
                  n.map(function (e) {
                    var t, n;
                    return c.createElement(H.OJ, { key: e.id, value: { legacyContext: { ID: e.id, CONTEXT_ID: I, TYPE: "album_discography" } } }, c.createElement(Jt.A, { id: e.id, albumName: e.displayTitle, picture: null === (t = e.cover) || void 0 === t ? void 0 : t.large[0], isExplicitAlbum: e.isExplicit || !1, hasExplicitCover: null === (n = e.cover) || void 0 === n ? void 0 : n.explicitStatus, releaseDate: (0, Ct.A)(e.releaseDate), contributors: en(e.contributors.edges) }));
                  })
                )
              )
            );
          })
        );
      };
      n("uuq2"), n("bVll");
      var nn,
        an = n("23Qi"),
        rn = n("Weh+"),
        ln = n("gXj/"),
        on = n("FFW9"),
        cn = n("A0BP"),
        sn = n("lD5d"),
        un = n("5Loq"),
        dn = n("934x"),
        mn = n("xvdY"),
        pn = n("9OcB"),
        An = n("AZMZ"),
        En = n("LpaV"),
        yn = n("SrwL");
      const vn = function (e) {
        var t,
          n = e.artistId,
          a = e.nbRelated,
          r = e.legacyData,
          i = (0, Pe.ORW)({ variables: { artistId: n, relatedArtistFirst: 6, cursor: null } }),
          l = i.loading,
          o = i.data;
        if (l || null == o || null === (t = o.artist) || void 0 === t || null === (t = t.relatedArtists) || void 0 === t || !t.edges) return null;
        var s = o.artist.relatedArtists.edges.slice(0, a);
        return c.createElement(
          C.az,
          { as: "aside", className: "top-cell top-cell-right", position: "relative" },
          c.createElement(C.DZ, { variant: "heading.m", className: "catalog-section-title" }, c.createElement(dn.A, { href: "/artist/".concat(n, "/related_artist") }, c.createElement("span", { className: "label" }, (0, b.AP)("Artistes similaires")))),
          s.map(function (e) {
            var t;
            return e.node
              ? c.createElement(
                  H.OJ,
                  { key: e.node.id, value: { item: g.Ay.Artist, itemId: e.node.id, section: ye } },
                  c.createElement(
                    rn.Q,
                    { mt: "spacing.l", w: "100%" },
                    c.createElement(ln.h, null, c.createElement(pn.A, { alt: e.node.name, borderRadius: "rounded", src: null === (t = e.node.picture) || void 0 === t ? void 0 : t.small[0], type: g.Ay.Artist })),
                    c.createElement(on.f, { flex: 1 }, c.createElement(cn.n, { _hover: { textDecoration: "underline" } }, c.createElement(Pt.A, { to: "/artist/".concat(e.node.id), "data-instance": "artist_name" }, e.node.name)), c.createElement(sn.P, null, (0, b.WI)("%s fan", "%s fans", { count: e.node.fansCount, sprintf: [(0, an.A)(e.node.fansCount)] }))),
                    c.createElement(
                      on.f,
                      { displayOnHover: !0 },
                      c.createElement(
                        En.K.Provider,
                        { value: (0, yn.uC)() },
                        c.createElement(An.A, {
                          anchor: nn || (nn = c.createElement(_t.K0, { variant: "ghost", size: "small", "aria-label": "artist_contextmenu" }, c.createElement(un.j, null))),
                          context: { ID: Number(e.node.id), TYPE: (0, _.Pe)(g.Ay.Artist, T.Di) },
                          id: e.node.id,
                          data: r.find(function (t) {
                            var n;
                            return String(t.ART_ID) === (null === (n = e.node) || void 0 === n ? void 0 : n.id);
                          }),
                        })
                      )
                    ),
                    c.createElement(on.f, null, c.createElement(mn.A, { type: g.Ay.Artist, id: e.node.id, context: { ID: Number(e.node.id), TYPE: (0, _.Pe)(g.Ay.Artist, T.Di) } }))
                  )
                )
              : null;
          }),
          o.artist.relatedArtists.edges.length > 3 ? c.createElement(C.az, { mt: "spacing.l" }, c.createElement(_t.$n, { as: Pt.A, variant: "outline", size: "small", to: "/artist/".concat(n, "/related_artist") }, (0, b.AP)("Voir plus d'artistes"))) : null
        );
      };
      n("F+C3");
      var fn,
        hn = n("P1K6");
      const bn = function (e) {
        var t = e.artistId,
          n = e.data;
        return c.createElement(
          C.az,
          { position: "relative" },
          c.createElement(C.DZ, { variant: "heading.m", className: "catalog-section-title" }, c.createElement(dn.A, { href: "/artist/".concat(t, "/related_playlist") }, c.createElement("span", { className: "label" }, (0, b.AP)("Playlists")))),
          n.map(function (e) {
            var t = [(0, b.WI)("%s titre", "%s titres", { sprintf: [(0, an.A)(e.NB_SONG)], count: e.NB_SONG })];
            return e.NB_FAN > 0 && t.push((0, b.WI)("%s fan", "%s fans", { count: e.NB_FAN, sprintf: [(0, an.A)(e.NB_FAN)] })), c.createElement(H.OJ, { key: e.PLAYLIST_ID, value: { item: g.Ay.Playlist, itemId: e.PLAYLIST_ID, section: Ee } }, c.createElement(rn.Q, { mt: "spacing.l", w: "100%" }, c.createElement(ln.h, null, c.createElement(pn.A, { alt: e.TITLE, src: (0, hn.AE)(g.Ay.Playlist, e.PLAYLIST_PICTURE, 100, 100), type: g.Ay.Playlist })), c.createElement(on.f, { flex: 1 }, c.createElement(cn.n, { _hover: { textDecoration: "underline" } }, c.createElement(Pt.A, { to: "/playlist/".concat(e.PLAYLIST_ID), "data-instance": "playlist_name" }, e.TITLE)), c.createElement(sn.P, null, t.join(" - "))), c.createElement(on.f, { displayOnHover: !0 }, c.createElement(En.K.Provider, { value: (0, yn.uC)() }, c.createElement(An.A, { anchor: c.createElement(_t.K0, { variant: "ghost", size: "small", "aria-label": "playlist_contextmenu", _focus: { outline: "none" } }, fn || (fn = c.createElement(un.j, null))), context: { ID: e.PLAYLIST_ID, TYPE: "artist_similar_playlist" }, id: e.PLAYLIST_ID, data: n }))), c.createElement(on.f, null, c.createElement(mn.A, { type: g.Ay.Playlist, id: e.PLAYLIST_ID, context: { ID: e.PLAYLIST_ID, TYPE: "artist_similar_playlist" } }))));
          }),
          n.length > 3 ? c.createElement(C.az, { position: "absolute", bottom: "spacing.l" }, c.createElement(_t.$n, { as: Pt.A, variant: "outline", size: "small", to: "/artist/".concat(t, "/related_playlist") }, (0, b.AP)("Voir plus de playlists"))) : null
        );
      };
      var gn = (function (e) {
        return (e.sm = "sm"), (e.md = "md"), (e.lg = "lg"), e;
      })({});
      const In = "HBxbS",
        _n = "c9AV2";
      const Tn = function (e) {
        var t,
          n = e.artistId,
          a = (0, Pe.KDJ)({ variables: { artistId: n } }),
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
          { className: "catalog-container ".concat(In), "data-testid": "last-concert-section" },
          c.createElement("div", { className: "heading" }, c.createElement("div", { className: "cell cell-title" }, c.createElement(F.A, { title: (0, b.AP)("artistpage_title_artistXontour_web", { sprintf: [i.artist.name] }), href: "/artist/".concat(i.artist.id, "/concerts"), ctaLabel: (0, b.AP)("eventpage_action_alltourdates_web") }))),
          c.createElement(Re.A, {
            title: u,
            concertId: s,
            date: d,
            subtitle: E,
            calendarIconSize: gn.md,
            className: _n,
            locationState: { referringArtistId: n },
            onClick: function () {
              return (0, He.uV)({ action: He.rc.CLICK_CONCERT, screen_view_name: He.Xw.ARTIST, screen_view_id_type: He.v5.ARTIST, screen_view_id: n, item_id: s, item_type: (0, He.U$)(A) });
            },
          })
        );
      };
      var Pn, Sn;
      const Ln = function (e) {
        var t,
          n,
          a,
          r = e.artistId,
          i = (0, Pe.TF)({ variables: { artistId: String(r) } }),
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
              rn.Q,
              {
                as: Pt.A,
                mb: "spacing.2xl",
                w: "100%",
                to: "/artist/".concat(r, "/").concat(Ze.G.FAVORITES),
                "data-testid": "in_your_fav_section",
                onClick: function () {
                  return fe(r);
                },
              },
              c.createElement(ln.h, { position: "relative", "data-testid": "in_your_fav_thumbnail" }, c.createElement(pn.A, { size: "size.xl", src: s, isExplicitCover: u }), Sn || (Sn = c.createElement(C.az, { position: "absolute", top: 0, left: 0, zIndex: 1, width: "100%", height: "100%", bg: "background.accent.onLight.default", opacity: "0.4" })), c.createElement(pn.A, { position: "absolute", top: "50%", insetStart: "50%", transform: "translate(-50%, -50%)", variant: "favTracks", size: "size.s", borderRadius: "rounded", alt: (0, b.AP)("artistpageentrypoint_title_inyourfavorites_web"), zIndex: 3 })),
              c.createElement(on.f, { flex: 1 }, c.createElement(cn.n, { _hover: { textDecoration: "underline" }, _groupHover: { textDecoration: "underline" }, "data-testid": "in_your_fav_title" }, c.createElement(Pt.A, { to: "/artist/".concat(r, "/").concat(Ze.G.FAVORITES) }, (0, b.AP)("artistpageentrypoint_title_inyourfavorites_web"))), c.createElement(sn.P, { "data-testid": "in_your_fav_subtitle" }, (0, b.WI)("%s titre", "%s titres", { sprintf: [d], count: d })))
            )
          : null;
      };
      var On,
        xn = n("fsGD"),
        Nn = n("yiM3");
      function kn(e, t, n) {
        return (t = (0, v.A)(t)), (0, y.A)(e, Dn() ? Reflect.construct(t, n || [], (0, v.A)(e).constructor) : t.apply(e, n));
      }
      function Dn() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (e) {}
        return (Dn = function () {
          return !!e;
        })();
      }
      var Cn = (function (e) {
          return (e.SMALL = "small"), (e.BIG = "big"), e;
        })(Cn || {}),
        wn = (function (e) {
          function t(e) {
            var n;
            return (0, A.A)(this, t), ((n = kn(this, t, [e])).state = { display: n._getDisplay(!1), hasAdsFull: !1 }), (n._toggleDisplay = n._toggleDisplay.bind(n)), (n._initAds = n._initAds.bind(n)), n;
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
                  return c.createElement("div", { className: "catalog-tab-discography" }, c.createElement("div", { className: "container" }, i === Cn.SMALL ? this._renderPersonalFavorite() : null, c.createElement("div", { className: "catalog-container" }, this._renderTopTracks(), i === Cn.BIG ? c.createElement(C.az, { as: "aside", verticalAlign: "top", className: (0, Je.A)("top-cell", { "top-cell-right": a.data.length > 0 }) }, this._renderPersonalFavorite(), this._renderRelatedPlaylists()) : null), this._renderOwnerMessage(), a.data.length > 0 ? c.createElement("div", { className: "catalog-container" }, this._renderHighlight(), i === Cn.BIG ? this._renderRelatedArtists() : null) : null, (null === (e = r.ITEMS) || void 0 === e ? void 0 : e.length) > 0 ? c.createElement("div", { className: "catalog-container", id: "videos" }, this._renderLivestream()) : null, i === Cn.SMALL ? c.createElement("div", { className: "catalog-container visible-ads-full" }, this._renderRelatedPlaylists(), this._renderRelatedArtists()) : null, c.createElement(Tn, { artistId: String(t) })), c.createElement("div", { className: "container", "data-testid": "artist_discography" }, c.createElement(c.Suspense, { fallback: null }, c.createElement(tn, { artistId: this.props.id.toString() }))));
                },
              },
              {
                key: "_renderTopTracks",
                value: function () {
                  var e = this.props,
                    t = e.id,
                    n = e.shouldExplicitBeHidden,
                    a = this.props.data.TOP;
                  return 0 === a.data.length ? null : c.createElement("div", { className: "top-cell top-cell-left" }, c.createElement(F.A, { className: "catalog-section-title", title: (0, b.AP)("Top titres"), href: "/artist/".concat(t, "/top_track") }), c.createElement("div", { className: "top-content content-top content-left" }, c.createElement(Yt, { id: String(t), context: { ID: t, TYPE: (0, _.Pe)(g.Ay.Artist, T.sI) }, items: a.data, maxItemsToDisplay: 4, shouldExplicitBeHidden: n })));
                },
              },
              {
                key: "_renderRelatedPlaylists",
                value: function () {
                  var e = this.props.id,
                    t = this.props.data.PLAYLISTS;
                  return t.length ? c.createElement(bn, { artistId: String(e), data: t.slice(0, 3) }) : null;
                },
              },
              {
                key: "_renderPersonalFavorite",
                value: function () {
                  var e = this.props.id;
                  return P.A.isAllowed("artist_page_favorite_content") ? c.createElement(Ln, { artistId: e }) : null;
                },
              },
              {
                key: "_renderHighlight",
                value: function () {
                  var e = this.props.data,
                    t = (0, M.A)(e, "HIGHLIGHT.ITEM");
                  return t ? c.createElement(Ft, { item: t, title: (0, M.A)(e, "HIGHLIGHT.TITLE"), size: this._getSize() }) : null;
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
                    i = c.createElement(zt.A, { data: r, layoutType: xn.Pl, pageContext: Lt.CONTEXT_PAGE_ARTIST_DISCOGRAPHY, alignment: "right", title: null !== (e = a.TITLE) && void 0 !== e ? e : void 0, subtitle: null !== (t = a.SUBTITLE) && void 0 !== t ? t : void 0 });
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
                  return c.createElement(vn, { artistId: String(e), nbRelated: n, legacyData: t.data.slice(0, n) });
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
                    var i = t.client_width > 1200 ? Cn.BIG : Cn.SMALL;
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
                  if (!t.ITEM) return Bt.DEFAULT;
                  var n = this._getTotalTracks(t.ITEM, t.TYPE);
                  return n < 3 ? (t.ITEM.PRODUCER_LINE.length <= 60 ? Bt.XXSMALL : Bt.XSMALL) : n >= 3 && n <= 5 ? Bt.SMALL : 6 === n ? Bt.MEDIUM : Bt.DEFAULT;
                },
              },
              {
                key: "_getNbRelated",
                value: function (e) {
                  var t = (0, l.A)((0, l.A)((0, l.A)((0, l.A)((0, l.A)({}, Bt.XXSMALL, 3), Bt.XSMALL, 3), Bt.SMALL, 4), Bt.MEDIUM, 5), Bt.DEFAULT, 6);
                  return this.state.display === Cn.SMALL ? 3 : t[e];
                },
              },
              {
                key: "_getDisplay",
                value: function (e) {
                  return window.innerWidth > 1200 && !e ? Cn.BIG : Cn.SMALL;
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
      const Rn = wn;
      var Bn = n("2NhJ"),
        Fn = n("oq/a"),
        Gn = n("zJSK"),
        Mn = n("wRgy"),
        jn = n("WY4A"),
        Hn = n("Ozpl"),
        Un = n("WQvr"),
        Yn = n("JKL/"),
        zn = n("6K8D"),
        Kn = n("U9ZG"),
        Zn = n("2Av+"),
        qn = n("/b/U");
      const Vn = "qmFln",
        Xn = "OptWm",
        Jn = "Q2ZWv";
      var Wn, Qn, $n, ea;
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
                  n = e.name,
                  a = e.id;
                return t ? c.createElement(H.OJ, { value: { item: g.Ay.Artist, itemId: a } }, c.createElement(C.az, { className: "container" }, c.createElement(Bn.Ay, null, this._renderThumbnail(), c.createElement(Fn.A, { className: Vn }, c.createElement(Gn.A, null, n), this._renderFans(), this._renderStatus()), this._renderSocials()), this._renderActions())) : null;
              },
            },
            {
              key: "_renderThumbnail",
              value: function () {
                var e,
                  t = this.props,
                  n = t.name,
                  a = t.picture;
                return a ? c.createElement(Mn.A, { alt: n, borderRadius: "rounded", src: null === (e = a.urls) || void 0 === e || null === (e = e.large) || void 0 === e ? void 0 : e[0], type: g.Ay.Artist, "data-testid": "artist-cover" }) : null;
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
                return e ? c.createElement(jn.A, null, c.createElement(Hn.A, null, (0, b.WI)("%s fan", "%s fans", { sprintf: [(0, an.A)(e)], count: e }))) : null;
              },
            },
            {
              key: "_renderStatus",
              value: function () {
                var e = this.props.status;
                return e && e.length ? c.createElement(Un.A, null, e) : null;
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
                return n && !l.includes("play") && l.unshift("play"), c.createElement(Yn.A, null, c.createElement(Kn.A, { id: Number(a), type: g.Ay.Artist, data: { id: a, type: g.Ay.Artist, SMARTRADIO: n, name: r, picture: null == i || null === (e = i.urls) || void 0 === e || null === (e = e.large) || void 0 === e ? void 0 : e[0] }, action: l, context: { ID: a, TYPE: "artist_smartradio" } }));
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
                if (!e.facebook) return c.createElement("li", { className: "".concat(Jn, " disabled") }, c.createElement(zn.m, { label: (0, b.AP)("Page Facebook indisponible") }, Wn || (Wn = c.createElement(Zn.i, null))));
                var t = e.facebook.includes("http") ? e.facebook : "//".concat(e.facebook);
                return c.createElement("li", { className: Jn }, c.createElement(zn.m, { label: (0, b.AP)("Page Facebook") }, c.createElement("a", { href: t, target: "_blank", rel: "noreferrer" }, Qn || (Qn = c.createElement(Zn.i, null)))));
              },
            },
            {
              key: "_renderTwitter",
              value: function () {
                var e = this.props.social;
                if (!e) return null;
                if (!e.twitter) return c.createElement("li", { className: "".concat(Jn, " disabled") }, c.createElement(zn.m, { label: (0, b.AP)("Page Twitter indisponible") }, $n || ($n = c.createElement(qn.u, null))));
                var t = e.twitter.includes("http") ? e.twitter : "//".concat(e.twitter);
                return c.createElement("li", { className: Jn }, c.createElement(zn.m, { label: (0, b.AP)("Page Twitter") }, c.createElement("a", { href: t, target: "_blank", rel: "noreferrer" }, ea || (ea = c.createElement(qn.u, null)))));
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
            a = (0, Pe.ORW)({ variables: { artistId: n, relatedArtistFirst: 10, cursor: null } }),
            r = a.data,
            i = a.loading,
            l = a.fetchMore,
            o = (0, c.useCallback)(
              function () {
                return l({ query: Pe.yRK, variables: { artistId: n, relatedArtistFirst: 10, cursor: r && r.artist && r.artist.relatedArtists && r.artist.relatedArtists.pageInfo.endCursor } });
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
                    return e ? c.createElement(H.OJ, { key: e.id, value: { legacyContext: { ID: e.id, TYPE: "artist_similar_artist", CONTEXT_ID: n } } }, c.createElement(oa.A, { artistName: e.name, hasExplicitPicture: Boolean(null === (t = e.picture) || void 0 === t ? void 0 : t.explicitStatus), id: e.id, isFavorite: Boolean(e.isFavorite), nbOfFans: e.fansCount, picture: null === (a = e.picture) || void 0 === a ? void 0 : a.large[0] })) : null;
                  })
                : null;
          return c.createElement("div", { className: "container" }, c.createElement(C.az, { mb: "spacing.l" }, c.createElement(F.A, { title: (0, b.AP)("Artistes similaires") })), c.createElement(ia.A, { hasMore: !!r.artist.relatedArtists && r.artist.relatedArtists.pageInfo.hasNextPage, loadMore: o, placeholder: { img: Be.B.RECOMMENDATION, wording: (0, b.AP)("Aucun artiste similaire n'est disponible") } }, c.createElement(Wt.kK, null, u)));
        },
        sa = "jbzvm",
        ua = "_hESX",
        da = "Pbkan",
        ma = "zbtBF";
      var pa;
      const Aa = function (e) {
        var t = e.id,
          n = (0, Pe.Wyk)({ variables: { artistId: t } }),
          a = n.data,
          r = n.loading,
          i = n.error;
        if (r) return pa || (pa = c.createElement(de.A, null));
        if (i) throw i;
        if (!a || !a.artist || !a.artist.bio) return null;
        var l = (0, Je.A)("heading-1", sa),
          o = (0, Je.A)("heading-1", da);
        return c.createElement("div", { className: "container" }, P.A.isAllowed("revamp2023") ? c.createElement(C.az, { mb: "spacing.l" }, c.createElement(F.A, { title: (0, b.AP)("Biographie") })) : c.createElement("div", { className: l }, (0, b.AP)("Biographie")), c.createElement("div", { className: ua }, c.createElement("h2", { className: o }, a.artist.name), c.createElement("div", { className: ma, dangerouslySetInnerHTML: { __html: a.artist.bio.full } })));
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
                      i = r && ((e = r), Object.values(Ze.G).includes(e)) ? r : Ze.G.DISCOGRAPHY;
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
                      c.createElement(qe.A, { items: this._getTabList(), active: i }),
                      c.createElement("div", { className: "catalog-content", role: "tabpanel" }, this._renderTabContent(i)),
                      c.createElement(Xe.A, { type: g.Ay.Artist, data: n })
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
                      case Ze.G.DISCOGRAPHY:
                        return c.createElement(Rn, { id: Number(a), data: r, shouldExplicitBeHidden: i, userIsConnected: l });
                      case Ze.G.TOP_TRACK:
                        return c.createElement(H.OJ, { value: { page: "artist_top_tracks" } }, c.createElement("div", { className: "container" }, c.createElement(Ce, { id: a, context: this._getContext((0, _.Pe)(g.Ay.Artist, T.sI)) }), c.createElement(le, { id: a, context: this._getContext((0, _.Pe)(g.Ay.Artist, T.sI)), items: (0, p.A)((r && (null === (t = r.TOP) || void 0 === t ? void 0 : t.data)) || []), shouldExplicitBeHidden: i })));
                      case Ze.G.RELATED_ARTIST:
                        return c.createElement(ca, { id: a });
                      case Ze.G.RELATED_PLAYLIST:
                        return c.createElement(Ve.A, { type: g.Ay.Artist, title: this._getTabLabel(e), pageContext: Lt.CONTEXT_PAGE_ARTIST_TAB_RELATED_PLAYLIST, key: e, id: a, total: r.RELATED_PLAYLIST.total });
                      case Ze.G.CONCERTS:
                        return c.createElement(ze, { artistId: a });
                      case Ze.G.BIOGRAPHY:
                        return c.createElement(Aa, { id: a });
                      case Ze.G.FAVORITES:
                        return c.createElement("div", { className: "container" }, c.createElement(Oe, { id: a, shouldExplicitBeHidden: i }));
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
                    e.id !== Ze.G.DISCOGRAPHY && (n += "/".concat(e.id)), e.id === Ze.G.CONCERT && this.props.tracking && this.props.tracking.trackEvent({ event: "click", eventlabel: "concert", eventaction: "click-navbar", eventcategory: "artist" }), e.id === Ze.G.FAVORITES && fe(t), this.props.history.push((0, I.jd)(n));
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
                      { id: Ze.G.DISCOGRAPHY, label: this._getTabLabel(Ze.G.DISCOGRAPHY), action: this._onTabSelect },
                      { id: Ze.G.TOP_TRACK, label: this._getTabLabel(Ze.G.TOP_TRACK), action: this._onTabSelect, disabled: !(null !== (e = l.TOP) && void 0 !== e && e.data.length) },
                      { id: Ze.G.RELATED_ARTIST, label: this._getTabLabel(Ze.G.RELATED_ARTIST), action: this._onTabSelect, disabled: !(null != o && null !== (t = o.artist) && void 0 !== t && null !== (t = t.relatedArtists) && void 0 !== t && t.edges.length) },
                      { id: Ze.G.RELATED_PLAYLIST, label: this._getTabLabel(Ze.G.RELATED_PLAYLIST), action: this._onTabSelect, disabled: !l.PLAYLISTS.length },
                      {
                        id: Ze.G.CONCERTS,
                        label: this._getTabLabel(Ze.G.CONCERTS),
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
                      { id: Ze.G.BIOGRAPHY, label: this._getTabLabel(Ze.G.BIOGRAPHY), action: this._onTabSelect, disabled: !(null != o && null !== (a = o.artist) && void 0 !== a && null !== (a = a.bio) && void 0 !== a && a.full) },
                      { id: Ze.G.FAVORITES, label: this._getTabLabel(Ze.G.FAVORITES), action: this._onTabSelect, disabled: !P.A.isAllowed("artist_page_favorite_content") || !(null !== (r = o.me) && void 0 !== r && null !== (r = r.userFavorites.byArtist) && void 0 !== r && r.estimatedTracksCount) },
                    ];
                  },
                },
                {
                  key: "_getTabLabel",
                  value: function (e) {
                    switch (e) {
                      case Ze.G.DISCOGRAPHY:
                        return (0, b.AP)("discographytype_title_discography_web");
                      case Ze.G.TOP_TRACK:
                        return (0, b.AP)("Top titres");
                      case Ze.G.RELATED_ARTIST:
                        return (0, b.AP)("Artistes similaires");
                      case Ze.G.RELATED_PLAYLIST:
                        return (0, b.AP)("Playlists");
                      case Ze.G.CONCERT:
                        return (0, b.AP)("artistpage_title_ontour_web");
                      case Ze.G.CONCERTS:
                        return (0, b.AP)("generic_title_concerts_web");
                      case Ze.G.BIOGRAPHY:
                        return (0, b.AP)("Bio");
                      case Ze.G.FAVORITES:
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
          (ya.defaultProps = { selectedTab: Ze.G.DISCOGRAPHY }),
          (Ea = ya))
        ) || Ea;
      const Ia = (0, h.y)(
        (0, s.Ng)(function (e) {
          var t = e.user;
          return { shouldExplicitBeHidden: (0, We.Uw)(t) === wt.g, userIsConnected: (0, We.UJ)(t) };
        })(ga)
      );
      var _a;
      function Ta(e, t) {
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
      function Pa(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ta(Object(n), !0).forEach(function (t) {
                (0, l.A)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ta(Object(n)).forEach(function (t) {
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
              (0, m._7)({ id: n.id, rehydrateData: t ? Pa(Pa({}, t), {}, { partial: !1 }) : void 0 })
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
        var f = (0, Pe.wgW)({ variables: { artistId: n.id, relatedArtistFirst: 6, liveEventsFirst: 6 } }),
          h = f.data,
          b = f.loading,
          g = f.error;
        if (i) throw i;
        if (String(n.id) !== String(y && y.ART_ID) || (y && y.partial) || b) return _a || (_a = c.createElement(de.A, null));
        if (g) throw g;
        if (!h || !h.artist) {
          var I = new Error("missing data in artist graphql call");
          throw ((I.cause = JSON.stringify(h)), I);
        }
        return c.createElement(c.Suspense, { fallback: null }, c.createElement(H.OJ, { value: { page: "artist", entity: "artist", entityId: n.id } }, c.createElement(Ia, { dataFromStore: y, dataFromGQL: h, id: n.id, selectedTab: n.tab, fetchTopTracks: A.bind(null, m.Cn) })));
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
