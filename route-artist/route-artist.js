"use strict";
(self.webpackJsonpDeezer = self.webpackJsonpDeezer || []).push([
  [1670],
  {
    U9ZG: (e, t, a) => {
      a.d(t, { A: () => C });
      var i,
        l,
        n,
        r = a("q1tI"),
        s = a("Ty5D"),
        o = a("/MKj"),
        c = a("9MQu"),
        d = a("TDRX"),
        m = a("HmE0"),
        u = a("6K8D"),
        p = a("EPmj"),
        E = a("ZUSG"),
        A = a("5Loq"),
        y = a("Wp0Y"),
        h = a("5G9X"),
        v = a("LjZa"),
        g = a("tZCQ"),
        I = a("TqF5"),
        _ = a("0oT0"),
        b = a("2EvD"),
        T = a("Jfek"),
        P = a("eerp"),
        S = a("g1Fm"),
        L = a("cFUB"),
        x = a("AfN5");
      class f extends r.Component {
        constructor(e, t) {
          super(e, t), (this._onEdit = this._onEdit.bind(this)), (this._onShare = this._onShare.bind(this)), (this._onGoToAccount = this._onGoToAccount.bind(this));
        }
        shouldComponentUpdate(e) {
          return this.props.id !== e.id || this.props.type !== e.type || this.props.action.length !== e.action.length;
        }
        render() {
          return g.A.isAllowed("revamp2023")
            ? r.createElement(
                c.e,
                { as: "ul", size: "medium", gap: "spacing.xs", spacing: "0" },
                this.props.action.map((e) => ("function" == typeof this["_render" + (0, S.A)(e)] ? r.createElement(d.a, { as: "li", key: e }, this["_render" + (0, S.A)(e)]()) : null))
              )
            : r.createElement(
                "ul",
                { className: "list-actions" },
                this.props.action.map((e) => ("function" == typeof this["_render" + (0, S.A)(e)] ? r.createElement("li", { className: "list-actions-item", key: e }, this["_render" + (0, S.A)(e)]()) : null))
              );
        }
        _renderFavorite() {
          const { context: e, id: t, type: a } = this.props;
          return r.createElement(_.A, { id: t, type: a, action: L.Hj.FAVORITE, context: e });
        }
        _renderPlay() {
          const { id: e, type: t, context: a } = this.props,
            i = t === h.Ay.Song ? { radio: !0, forceAsFirstTrack: !0 } : {};
          return r.createElement(_.A, { action: L.Hj.PLAY, color: L.cW.PRIMARY, context: a, dzPlayerOptions: i, id: e, type: t === h.Ay.Song ? x.Kk.TRACK_MIX : t, wordingType: L.Hn.FULL });
        }
        _renderShuffle() {
          const { id: e, type: t, context: a } = this.props;
          return r.createElement(_.A, { id: e, type: t, action: L.Hj.SHUFFLE, color: L.cW.PRIMARY, wordingType: L.Hn.FULL, context: a });
        }
        _renderShare() {
          return r.createElement(m.K0, { icon: i || (i = r.createElement(p.l, null)), onClick: this._onShare, variant: "ghost", "aria-label": (0, y.AP)("Partager") });
        }
        _renderEdit() {
          return r.createElement(u.m, { label: (0, y.AP)("Editer") }, r.createElement(m.K0, { "aria-haspopup": !0, "aria-label": (0, y.AP)("generic_action_edit_web"), icon: l || (l = r.createElement(E.r, null)), onClick: this._onEdit, variant: "ghost" }));
        }
        _renderOptions() {
          const { context: e, data: t, id: a, type: i } = this.props,
            l = { anchor: r.createElement(m.K0, { "aria-haspopup": !0, "aria-label": (0, y.AP)("generic_action_viewmenu_web"), icon: n || (n = r.createElement(A.j, null)), variant: "ghost" }), context: e, id: String(a), data: t, placement: "right", type: i };
          return r.createElement(b.A, l);
        }
        _onShare() {
          const { id: e, data: t, context: a, type: i } = this.props;
          this.props.openModal({ name: T.DN, props: { componentType: T.Wg.directShareMasthead, context: a, data: t, id: e, type: (0, P.A)(i) } });
        }
        _onEdit() {
          this.props.edit();
        }
        _onGoToAccount() {
          this.props.history.push("/account");
        }
      }
      f.defaultProps = { data: {}, action: ["favorite", "share", "options"], edit: v.A };
      const C = (0, s.y)((0, o.Ng)(null, { openModal: I.qf })(f));
    },
    Q6dJ: (e, t, a) => {
      a.d(t, { A: () => E });
      var i = a("q1tI"),
        l = a("juqV"),
        n = a("GkjM"),
        r = a("3JOg"),
        s = a("rYh+");
      const o = { element: "ZzbWE" };
      var c,
        d = a("+RX7"),
        m = a("TDRX"),
        u = a("y7xR"),
        p = a("pVdW");
      const E = (e) => {
        let { date: t, title: a, subtitle: E, concertId: A, onClick: y, calendarIconSize: h = "sm", className: v, locationState: g } = e;
        const I = "/concert/".concat(A);
        return i.createElement(r.A, null, i.createElement(n.A, { role: "button", to: { pathname: I, state: g }, onClick: y, className: (0, l.A)(o.element, v) }, i.createElement(d.V, { date: new Date(t), size: h }), i.createElement(m.a, { className: o.cell, flex: "1", flexDirection: "column", px: "spacing.m" }, i.createElement(u.D, { variant: "heading.xs", noOfLines: 1, mb: "spacing.xs", width: "100%" }, a), E && i.createElement(p.E, { variant: "body.s.default", color: "text.neutral.secondary.default", noOfLines: 1, pb: "spacing.xs", width: "100%" }, E)), c || (c = i.createElement(s.A, { size: "16" }))));
      };
    },
    wGgI: (e, t, a) => {
      a.d(t, { qT: () => m, VX: () => u, y8: () => d, Ay: () => E });
      var i = a("q1tI"),
        l = a("juqV"),
        n = a("HmE0"),
        r = a("yCtO");
      class s extends i.Component {
        render() {
          const { children: e, isDisabled: t, isSelected: a } = this.props,
            n = (0, l.A)("dropdown-item", { hidden: t, "is-selected": a });
          return i.createElement("li", { className: n }, e);
        }
      }
      s.defaultProps = { isDisabled: !1, isSelected: !1 };
      const o = s;
      var c;
      const d = "sm",
        m = "left",
        u = "right";
      class p extends i.Component {
        constructor(e) {
          super(e), (this._onToggle = this._onToggle.bind(this)), (this._onClose = this._onClose.bind(this)), (this.state = { label: e.children[e.selected].props.label || e.label, isOpen: !1 });
        }
        static getDerivedStateFromProps(e) {
          return { label: e.children[e.selected].props.label || e.label };
        }
        render() {
          const { children: e, align: t, size: a, overflow: s, isDisabled: o } = this.props,
            { label: d, isOpen: m } = this.state,
            p = (0, l.A)("dropdown", { "dropdown-active": this.state.isOpen }),
            E = (0, l.A)("dropdown-menu", { "is-right": t === u, "is-overflow": s });
          return i.createElement("span", { className: p }, i.createElement(n.$n, { "data-testid": "dropdown_".concat(d), size: a, rightIcon: c || (c = i.createElement(r.e, null)), onClick: this._onToggle, variant: "outline", isDisabled: o }, d), i.createElement("ul", { className: E, "aria-hidden": !m, onClick: this._onClose, onMouseDown: (e) => e.stopPropagation() }, m ? e : null));
        }
        _onClose() {
          this.setState({ isOpen: !1 }, () => {
            document.removeEventListener("mousedown", this._onClose);
          });
        }
        _onToggle() {
          const e = !this.state.isOpen;
          this.setState({ isOpen: e }, () => {
            e && document.addEventListener("mousedown", this._onClose);
          });
        }
      }
      (p.defaultProps = { label: null, size: d, align: m, className: null, selected: 0, overflow: !1, isDisabled: !1 }), (p.Item = o);
      const E = p;
    },
    xvdY: (e, t, a) => {
      a.d(t, { A: () => h });
      var i,
        l,
        n = a("q1tI"),
        r = a("/MKj"),
        s = a("fJgm"),
        o = a("OPhi"),
        c = a("GkgI"),
        d = a("5G9X"),
        m = a("6K8D"),
        u = a("HmE0"),
        p = a("P4bz"),
        E = a("//u0"),
        A = a("gtRZ");
      class y extends n.Component {
        constructor(e) {
          super(e), (this._handleToggle = this._handleToggle.bind(this)), (this._handleDoubleClick = this._handleDoubleClick.bind(this));
        }
        shouldComponentUpdate(e) {
          return this.props.isFavorite !== e.isFavorite || this.props.id !== e.id;
        }
        render() {
          const { className: e, isFavorite: t, type: a, tooltip: r, tooltipPosition: s, isDisabled: o } = this.props,
            c = this._getTooltip(),
            y = n.createElement(u.K0, { "data-testid": a !== d.Ay.User ? "add_to_favorite_button_".concat(t ? "on" : "off") : void 0, variant: "ghost", size: "small", isDisabled: o, onClick: this._handleToggle, onDoubleClick: this._handleDoubleClick, "aria-label": c, icon: n.createElement(n.Fragment, null, a === d.Ay.User && n.createElement(p.H, { color: t && "icon.accent.primary.default" }), a !== d.Ay.User && t && (i || (i = n.createElement(E.C, { color: "icon.accent.primary.default" }))), a !== d.Ay.User && !t && (l || (l = n.createElement(A.M, null)))), className: e });
          return r && !o ? n.createElement(m.m, { label: c, placement: s }, y) : y;
        }
        _handleDoubleClick(e) {
          e.stopPropagation();
        }
        _handleToggle(e) {
          e.stopPropagation();
          const { isFavorite: t, type: a, id: i, context: l, onAdd: n, onRemove: r } = this.props,
            o = { type: a, id: i, context: l };
          if (t) {
            if (r) return void r(s.A, o);
            s.A.remove(o);
          } else {
            if (n) return void n(s.A, o);
            s.A.add(o);
          }
        }
        _getTooltip() {
          const { isFavorite: e, type: t } = this.props;
          return "song" === t ? (0, c.b)({ type: t, action: "favorite" }, e ? "hover" : "add", "full") : "";
        }
      }
      y.defaultProps = { type: d.Ay.Album, tooltip: !1, tooltipPosition: "top", isDisabled: !1 };
      const h = (0, r.Ng)((e, t) => {
        let { feedbacks: a } = e;
        return { isFavorite: (0, o.BA)(a, t.id, t.type) };
      })(y);
    },
    aEwM: (e, t, a) => {
      a.d(t, { A: () => o });
      var i,
        l = a("q1tI"),
        n = a("KVgY"),
        r = a("RGaU"),
        s = a("5xmB");
      const o = (e) => {
        let { placeholder: t, hasMore: a, loadMore: o, children: c } = e;
        return c ? ("function" == typeof o ? l.createElement(n.A, { hasMore: a, loadMore: o, loader: i || (i = l.createElement(r.k, { key: "loader" })) }, c) : l.createElement(l.Fragment, null, c)) : l.createElement(s.A, t);
      };
    },
    "JKL/": (e, t, a) => {
      a.d(t, { A: () => n });
      var i = a("q1tI"),
        l = a("TDRX");
      const n = (e) => {
        let { children: t, className: a = "" } = e;
        return i.createElement(l.a, { mt: "spacing.xl", mb: "spacing.2xl", className: a }, t);
      };
    },
    Ozpl: (e, t, a) => {
      a.d(t, { A: () => r });
      var i = a("q1tI"),
        l = a("juqV"),
        n = a("sk1u");
      const r = (e) => {
        let { children: t, className: a = "" } = e;
        const r = (0, l.A)(n.A.infoItem, a);
        return i.createElement("li", { className: r }, t);
      };
    },
    WY4A: (e, t, a) => {
      a.d(t, { A: () => n });
      var i = a("q1tI"),
        l = a("CdHq");
      const n = (e) => {
        let { children: t, className: a = "" } = e;
        return i.createElement(l.s, { as: "ul", mt: "spacing.xs", color: "text.neutral.secondary.default", className: a }, t);
      };
    },
    "oq/a": (e, t, a) => {
      a.d(t, { A: () => n });
      var i = a("q1tI"),
        l = a("CdHq");
      const n = (e) => {
        let { children: t, className: a = "" } = e;
        return i.createElement(l.s, { justifyContent: "center", direction: "column", flex: "1", className: a }, t);
      };
    },
    WQvr: (e, t, a) => {
      a.d(t, { A: () => n });
      var i = a("q1tI"),
        l = a("CdHq");
      const n = (e) => {
        let { children: t, className: a = "" } = e;
        return i.createElement(l.s, { alignItems: "center", gap: "spacing.s", "data-testid": "masthead-subtitle", className: a }, t);
      };
    },
    wRgy: (e, t, a) => {
      a.d(t, { A: () => o });
      var i = a("q1tI"),
        l = a("juqV"),
        n = a("TDRX"),
        r = a("9OcB"),
        s = a("sk1u");
      const o = (e) => {
        let { className: t = "", children: a, ...o } = e;
        const c = (0, l.A)(s.A.thumbnail, t);
        return i.createElement(n.a, { className: c }, i.createElement(r.A, o, a));
      };
    },
    zJSK: (e, t, a) => {
      a.d(t, { A: () => n });
      var i = a("q1tI"),
        l = a("y7xR");
      const n = (e) => {
        let { children: t, className: a = "" } = e;
        return i.createElement(l.D, { color: "text.neutral.primary.default", variant: "display.m", mb: "spacing.xl", noOfLines: 2, wordBreak: "break-word", className: a, title: t }, t);
      };
    },
    "2NhJ": (e, t, a) => {
      a.d(t, { Ay: () => n });
      var i = a("q1tI"),
        l = a("CdHq");
      const n = (e) => {
        let { children: t, className: a = "" } = e;
        return i.createElement(l.s, { gap: "spacing.2xl", className: a, "data-testid": "masthead" }, t);
      };
    },
    sdUN: (e, t, a) => {
      a.d(t, { A: () => L });
      var i = a("q1tI"),
        l = a("5G9X");
      function n(e) {
        let {
          type: t,
          data: { SNG_TITLE: a, ART_NAME: n, ALB_TITLE: r, TITLE: s, SUBTITLE: o, SHOW_NAME: c, EPISODE_TITLE: d },
        } = e;
        const m = { [l.Ay.Track]: () => a, [l.Ay.Show]: () => c, [l.Ay.Playlist]: () => s, [l.Ay.Artist]: () => n, [l.Ay.Album]: () => r, [l.Ay.Episode]: () => d, [l.Ay.Smarttracklist]: () => "".concat(s, " ").concat(o) }[t];
        return m ? i.createElement("meta", { itemProp: "name", content: m() }) : null;
      }
      var r = a("Wp0Y");
      function s(e) {
        let {
          type: t,
          data: { SHOW_DESCRIPTION: a, DESCRIPTION: n, EPISODE_DESCRIPTION: s, ALB_TITLE: o, ART_NAME: c, ORIGINAL_RELEASE_DATE: d, PHYSICAL_RELEASE_DATE: m, TITLE: u, SUBTITLE: p },
        } = e;
        const E = { [l.Ay.Show]: () => a, [l.Ay.Playlist]: () => n, [l.Ay.Album]: () => (0, r.AP)("%s de %s - AnnĂŠe de production %s", { sprintf: [o, c, new Date(d || m || Date.now()).getFullYear()] }), [l.Ay.Episode]: () => s, [l.Ay.Smarttracklist]: () => n || "".concat(u, " ").concat(p) }[t];
        return E ? i.createElement("p", { className: "hidden", itemProp: "description" }, E()) : null;
      }
      var o = a("hz5U");
      function c(e) {
        let { type: t, data: a } = e;
        return i.createElement("meta", { itemProp: "image", content: o.A.getImageSrcForData(t, a, 200, 200) });
      }
      var d = a("iooo");
      function m(e) {
        let {
          type: t,
          data: { SNG_ID: a, SHOW_ID: n, PLAYLIST_ID: r, ART_ID: s, ALB_ID: o, EPISODE_ID: c, SMARTTRACKLIST_ID: m },
        } = e;
        const u = { [l.Ay.Track]: () => "/track/".concat(a), [l.Ay.Show]: () => "/show/".concat(n), [l.Ay.Playlist]: () => "/playlist/".concat(r), [l.Ay.Artist]: () => "/artist/".concat(s), [l.Ay.Album]: () => "/album/".concat(o), [l.Ay.Episode]: () => "/episode/".concat(c), [l.Ay.Smarttracklist]: () => "/smarttracklist/".concat(m) }[t];
        return u ? i.createElement("meta", { itemProp: "url", content: (0, d.jd)(u()) }) : null;
      }
      a("/F+/"), a("ZnLO");
      function u(e) {
        let {
          type: t,
          data: { EPISODE_PUBLISHED_TIMESTAMP: a },
        } = e;
        const n = { [l.Ay.Episode]: () => new Date(a.replace(" ", "T") + "Z").toISOString() }[t];
        return n ? i.createElement("meta", { itemProp: "datePublished", content: n() }) : null;
      }
      function p(e) {
        let {
          type: t,
          data: { DURATION: a },
        } = e;
        const n = { [l.Ay.Track]: () => "PT".concat(Math.floor(a / 60), "M").concat(a % 60, "S"), [l.Ay.Episode]: () => "PT".concat(Math.floor(a / 60), "M").concat(a % 60, "S") }[t];
        return n ? i.createElement("meta", { itemProp: "duration", content: n() }) : null;
      }
      function E(e) {
        let {
          type: t,
          data: { EPISODES: a, NB_SONG: n },
        } = e;
        const r = { [l.Ay.Show]: () => a.total, [l.Ay.Smarttracklist]: () => n }[t];
        return r ? i.createElement("meta", { itemProp: "numTracks", content: r() }) : null;
      }
      function A(e) {
        let {
          type: t,
          data: { ARTISTS: a },
        } = e;
        const n = { [l.Ay.Album]: () => a || [], [l.Ay.Track]: () => a || [] }[t];
        if (!n) return null;
        const r = n().find((e) => 0 === Number(e.ROLE_ID) || 5 === Number(e.ROLE_ID));
        return r ? i.createElement("div", { itemProp: "byArtist", itemScope: "itemscope", itemType: "http://schema.org/MusicGroup" }, i.createElement("meta", { itemProp: "url", content: "/artist/".concat(r.ART_ID) }), i.createElement("meta", { itemProp: "name", content: r.ART_NAME })) : null;
      }
      var y,
        h,
        v,
        g,
        I,
        _,
        b = a("/MKj"),
        T = a("3WcA"),
        P = a("xobL");
      const S = (0, b.Ng)((e) => {
        let { user: t } = e;
        return { userLang: (0, P.Z0)(t) };
      })(function (e) {
        let {
          type: t,
          data: { SHOW_ID: a, ART_ID: n, ALB_ID: r, SMARTTRACKLIST_ID: s },
          userLang: o,
        } = e;
        const c = { [l.Ay.Show]: () => "/show/".concat(a, "?autoplay=true"), [l.Ay.Artist]: () => "/artist/".concat(n, "?autoplay=true"), [l.Ay.Album]: () => "/album/".concat(r, "?autoplay=true"), [l.Ay.Smarttracklist]: () => "/smarttracklist/".concat(s, "?autoplay=true") }[t];
        return c
          ? i.createElement(
              "div",
              { key: "action", itemProp: "potentialAction", itemScope: !0, itemType: "http://schema.org/ListenAction" },
              i.createElement("div", { itemProp: "target", itemScope: !0, itemType: "http://schema.org/EntryPoint" }, i.createElement("meta", { itemProp: "urlTemplate", content: "https://".concat(T.default.get("host_website_ssl")).concat(c()) }), y || (y = i.createElement("meta", { itemProp: "actionPlatform", content: "http://schema.org/DesktopWebPlatform" })), h || (h = i.createElement("meta", { itemProp: "actionPlatform", content: "http://schema.org/IOSPlatform" })), v || (v = i.createElement("meta", { itemProp: "actionPlatform", content: "http://schema.org/AndroidPlatform" })), g || (g = i.createElement("meta", { itemProp: "actionPlatform", content: "http://schema.googleapis.com/GoogleAudioCast" })), I || (I = i.createElement("meta", { itemProp: "actionPlatform", content: "http://schema.googleapis.com/GoogleVideoCast" })), i.createElement("meta", { itemProp: "inLanguage", content: o })),
              i.createElement(
                "div",
                { itemProp: "expectsAcceptanceOf", itemScope: !0, itemType: "http://schema.org/Offer" },
                _ || (_ = i.createElement("meta", { itemProp: "category", content: "subscription" })),
                T.default.get("country_opened").map((e) => i.createElement("div", { key: e, itemProp: "eligibleRegion", itemScope: !0, itemType: "http://schema.org/Country" }, i.createElement("meta", { itemProp: "name", content: e })))
              )
            )
          : null;
      });
      function L(e) {
        return i.createElement("div", null, i.createElement(n, e), i.createElement(s, e), i.createElement(c, e), i.createElement(m, e), i.createElement(u, e), i.createElement(p, e), i.createElement(E, e), i.createElement(A, e), i.createElement(S, e));
      }
    },
    "61mP": (e, t, a) => {
      a.d(t, { G: () => i });
      let i = (function (e) {
        return (e.BIOGRAPHY = "biography"), (e.DISCOGRAPHY = "discography"), (e.RELATED_ARTIST = "related_artist"), (e.RELATED_PLAYLIST = "related_playlist"), (e.TOP_TRACK = "top_track"), (e.ARTIST = "artists"), (e.TRACK = "tracks"), (e.CONCERT = "concert"), (e.CONCERTS = "concerts"), (e.FAVORITES = "me"), e;
      })({});
    },
    "5xmB": (e, t, a) => {
      a.d(t, { B: () => s, A: () => o });
      var i = a("q1tI"),
        l = a("juqV"),
        n = a("Wp0Y");
      const r = { img: "wPuzu", text: "sIMmz", nocontent: "k4rH3", private: "OXBI2", recommendation: "IMAtw" };
      let s = (function (e) {
        return (e.NO_CONTENT = "nocontent"), (e.PRIVATE = "private"), (e.RECOMMENDATION = "recommendation"), e;
      })({});
      const o = (e) => {
        let { img: t = s.NO_CONTENT, wording: a = (0, n.AP)("Aucun rĂŠsultat."), className: o } = e;
        return i.createElement("div", { className: (0, l.A)(r.root, o) }, i.createElement("div", { className: (0, l.A)(r.img, r[t]) }), i.createElement("div", { className: r.text }, a));
      };
    },
    "/G5K": (e, t, a) => {
      a.d(t, { A: () => m });
      a("PHi8"), a("N/s9");
      var i = a("q1tI"),
        l = a("juqV"),
        n = a("/MKj"),
        r = a("xobL"),
        s = a("x4+n"),
        o = a("BJtZ");
      const c = { root: "MaxOe", label: "xogtX", "is-active": "oSYze", isActive: "oSYze", "is-disabled": "nRbxm", isDisabled: "nRbxm", "is-restricted": "K50Uu", isRestricted: "K50Uu" };
      var d = a("iiSH");
      const m = (e) => {
        let { date: t, dataTestId: a } = e;
        const [m] = (0, n.d4)((e) => [(0, r.mI)({ SERVER_TIMESTAMP: (0, r.mS)(e.user), clientTimestampDelta: (0, r.gE)(e.user) })]),
          u = (0, l.A)(c.label, (0, o.A)(c));
        return i.createElement("div", { className: c.root }, i.createElement("span", { className: u, "data-testid": a }, t > 0 ? (0, s.E)(t, m) : d.fs));
      };
    },
    xLtY: (e, t, a) => {
      a.d(t, { A: () => d });
      var i = a("q1tI"),
        l = a("S6U4"),
        n = a("lXQd"),
        r = a("Wp0Y"),
        s = a("CdHq"),
        o = a("Z9kq"),
        c = a("xCFc");
      const d = (e) => {
        let { placeholder: t = (0, r.AP)("search_action_searchwithintracks_web") } = e;
        const { manageItems: a, loadingStatus: d } = i.useContext(c.Gt);
        if (!a || "function" != typeof a.action.filter) return null;
        const m = (0, l.A)((e) => {
          a.action.filter((0, n.A)(e, "target.value", ""));
        }, 500);
        return i.createElement(s.s, { flex: "1", ms: "spacing.m", my: 0, w: { md: "375px", base: "320px" } }, i.createElement(o.D, { isDisabled: d.isLoadingAll, onChange: m, size: "medium", placeholder: t }));
      };
    },
    ZH8F: (e, t, a) => {
      a.d(t, { e: () => l, g: () => i });
      let i = (function (e) {
        return (e.FILTER = "table-filter"), (e.PLAY = "table-play"), e;
      })({});
      const l = (e, t) => new CustomEvent(e, { detail: t });
    },
    dalA: (e, t, a) => {
      a.d(t, { A: () => l });
      var i = a("q1tI");
      const l = function (e, t, a) {
        let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : document;
        const n = (e) => {
          let { detail: i } = e;
          i.context.ID === a.ID && i.context.TYPE === a.TYPE && t(i);
        };
        return (
          i.useEffect(() =>
            l && l.addEventListener
              ? (l.addEventListener(e, n),
                () => {
                  l.removeEventListener(e, n);
                })
              : () => {}
          ),
          { eventName: e, handleEvent: n }
        );
      };
    },
    Eiyd: (e, t, a) => {
      a.d(t, { A: () => d });
      var i = a("q1tI"),
        l = a("H/eQ"),
        n = a("N67Q"),
        r = a("0oT0"),
        s = a("1h7S"),
        o = a("cFUB"),
        c = a("ZH8F");
      const d = () => {
        const { containerData: e, context: t, id: a, type: d } = i.useContext(s.PK),
          m = (0, i.useCallback)(() => {
            document.dispatchEvent((0, c.e)(c.g.PLAY, { context: t }));
          }, [t]);
        return (
          (0, i.useEffect)(
            () => (
              l.A.subscribe("EVENT.TRACKLIST.togglePlayAll", m),
              () => {
                l.A.unsubscribe("EVENT.TRACKLIST.togglePlayAll", m);
              }
            ),
            [m]
          ),
          e.NB_SONG || e.NB_EPISODES ? i.createElement(n.A, { testId: "play" }, i.createElement(r.A, { id: a, items: e.items || void 0, type: d, onClick: m, context: t, action: o.Hj.PLAY_SMALL, color: o.cW.PRIMARY, wordingType: o.Hn.STANDARD })) : null
        );
      };
    },
    "1h7S": (e, t, a) => {
      a.d(t, { Ay: () => c, PK: () => s });
      a("PHi8"), a("N/s9");
      var i = a("pxHn"),
        l = a("Jfek");
      const [n, r, s] = (0, i.q)({ name: "ToolbarContext" }),
        o = { context: { ID: "", TYPE: "" }, id: "", isEditable: !1, isShareable: !1, isLoveable: !1, isDownloadable: !1, isSponsored: !1, shareType: l.Gb.song, type: "" },
        c = (e) => ({ ...o, ...e });
    },
    N67Q: (e, t, a) => {
      a.d(t, { A: () => l });
      var i = a("q1tI");
      const l = (e) => {
        let { children: t, testId: a } = e;
        return a ? i.createElement("div", { "data-testid": a }, t) : i.createElement("div", null, t);
      };
    },
    Dteb: (e, t, a) => {
      a.r(t), a.d(t, { default: () => ei });
      a("PHi8"), a("/F+/"), a("N/s9");
      var i = a("q1tI"),
        l = a("/MKj"),
        n = a("X6oL"),
        r = a("H/eQ"),
        s = a("g1Ko"),
        o = (a("p8tg"), a("Ty5D")),
        c = a("Wp0Y"),
        d = a("5G9X"),
        m = a("iooo"),
        u = a("p/gB"),
        p = a("AY3M"),
        E = a("tZCQ"),
        A = a("8m9I"),
        y = a("1Pdy"),
        h = a("AfN5"),
        v = a("STEc"),
        g = a("DjLa");
      g.WR.PLAYLIST;
      const I = { TITLE: { SIZE: v.uq.Full }, PARENT: { BREAKPOINT: v.x1.md, SIZE: v.uq.PercentXs }, DURATION: { SIZE: v.uq.sm }, POPULARITY: { BREAKPOINT: v.x1.xl, SIZE: v.uq.sm }, SELECT: { ALIGN: v.uP.Right, SIZE: v.uq.sm } };
      var _,
        b,
        T,
        P = a("xCFc"),
        S = a("CdHq"),
        L = a("xLtY"),
        x = a("BP9I"),
        f = a("1Uwb"),
        C = a("hIIJ"),
        N = a("fSLK"),
        R = a("lXQd"),
        D = a("o+h5"),
        w = a("0JBE"),
        k = a("pQlO"),
        O = a("0oF4"),
        B = a("r4LN"),
        M = a("wkd/"),
        F = a("LGn+"),
        G = a("tgyz"),
        H = a("CxZw"),
        U = a("SehT");
      const Y = (0, i.memo)(
        (0, w.S2)(
          (e) => {
            let { data: t, index: a, style: l } = e;
            const { context: n, container: r, shouldExplicitBeHidden: s } = (0, P.$A)(),
              { playerStatus: o, play: m, isItemLoadedInPlayer: u } = (0, G.A)(n, r, !0),
              p = t.toDisplay[a],
              E = p.item.hasExplicitLyrics && s,
              A = (0, i.useCallback)(
                (e, a) => {
                  m({ playIndex: a, playItems: t.toPlay, isTrackActive: e });
                },
                [t.toPlay, m]
              ),
              y = (0, i.useCallback)(
                (e) => {
                  m({ notify: !1, playIndex: e, playItems: t.toPlay, playLyrics: !0 });
                },
                [t.toPlay, m]
              );
            return i.createElement(f.A.Row, { style: l, uuid: p.uuid, id: p.item.id, index: p.index, isActive: u(p.item) && o.isSameContext, isReadable: p.item.right === H.A.READABLE, isRestrictedByExplicit: E, type: p.item.type, isDraggable: !0 }, i.createElement(F.A, { size: I.TITLE.SIZE }, i.createElement(F.A.Play, { ariaLabel: (0, c.AP)("generic_action_playsongXbyartistX_web", { sprintf: [p.item.title, (0, R.A)(p, "item.artists[0].name", "")] }), hasExplicitCover: p.item.parent.hasExplicitCover, onPlayItems: A, pictureUrl: p.item.cover(D.r4).url }), _ || (_ = i.createElement(F.A.Download, null)), i.createElement(F.A.PlayableLabel, { hasExplicitLyrics: p.item.hasExplicitLyrics, label: "".concat(p.item.number || 0, ". ").concat(p.item.title), onPlayItems: A, tooltipText: (0, U.Y)(p.item, s) }), i.createElement(f.A.IconGroup, null, i.createElement(F.A.ShowLyrics, { item: p.item, lyricsId: p.item.lyricsId, onPlayLyrics: y }), b || (b = i.createElement(F.A.AddToFeedback, null)), i.createElement(F.A.OpenContextMenu, { item: p.item }))), i.createElement(f.A.CellBody, { breakpoint: I.PARENT.BREAKPOINT, size: I.PARENT.SIZE }, i.createElement(B.A, { links: [{ ...p.item.parent, type: d.Ay.Album }] })), i.createElement(f.A.CellBody, { size: I.DURATION.SIZE }, i.createElement(k.A, { duration: p.item.duration })), i.createElement(f.A.CellBody, { breakpoint: I.POPULARITY.BREAKPOINT, size: I.POPULARITY.SIZE }, i.createElement(O.A, { rank: p.item.popularity })), i.createElement(f.A.CellBody, { align: I.SELECT.ALIGN, size: I.SELECT.SIZE }, T || (T = i.createElement(M.A, null))));
          },
          (e) => {
            let { index: t, data: a } = e;
            return { item: d.Ay.Track, itemIndex: t, itemId: a.toDisplay[t].item.id };
          }
        ),
        N.t7
      );
      var K,
        z,
        q,
        Z = a("ZH8F"),
        V = a("dalA"),
        X = a("ftFY"),
        W = a("7u2F");
      const J = (e) => {
        let { context: t, id: a, items: l, shouldExplicitBeHidden: n = !1 } = e;
        const r = { id: a, type: h.Kk.TOP_ARTIST },
          { manageItems: s, tableItems: o } = (0, X.A)(a, l, t),
          d = (0, W.A)(o, t),
          { playerStatus: m, play: u } = (0, G.A)(t, r, !0);
        (0, V.A)(
          Z.g.PLAY,
          () => {
            u({ playItems: o.toPlay });
          },
          t
        );
        const p = (0, P.Ay)({ container: r, context: t, manageItems: s, playerStatus: m, select: d, shouldExplicitBeHidden: n });
        return i.createElement(
          P.ru,
          { value: p },
          i.createElement(S.s, { alignItems: "center", mb: "spacing.2xl" }, i.createElement(C.A, { title: (0, c.AP)("Top titres") }), K || (K = i.createElement(L.A, null))),
          i.createElement(
            f.A,
            { rowCount: o.toDisplay.length },
            i.createElement(f.A.Header, null, i.createElement(f.A.CellHead, { size: I.TITLE.SIZE, sortPath: "item.title" }, (0, c.AP)("datagrid_title_trackUPP_web")), i.createElement(f.A.CellHead, { breakpoint: I.PARENT.BREAKPOINT, size: I.PARENT.SIZE, sortPath: "item.parent.name" }, (0, c.AP)("datagrid_title_albumUPP_web")), i.createElement(f.A.CellHead, { ariaLabel: (0, c.AP)("sortingmenu_title_duration_web"), size: I.DURATION.SIZE, sortPath: "item.duration" }, z || (z = i.createElement(A.m, null))), i.createElement(f.A.CellHead, { breakpoint: I.POPULARITY.BREAKPOINT, size: I.POPULARITY.SIZE, sortPath: "item.popularity" }, (0, c.AP)("datagrid_title_popularityabbrevUPP_web")), i.createElement(f.A.CellHead, { align: I.SELECT.ALIGN, size: I.SELECT.SIZE }, q || (q = i.createElement(x.A, null)))),
            i.createElement(
              f.A.Body,
              null,
              o.toDisplay.map((e, t) => i.createElement(Y, { data: o, key: e.uuid, index: t, style: { height: y.F4.md } }))
            )
          )
        );
      };
      a("WpbS");
      g.WR.PLAYLIST;
      const j = { TITLE: { SIZE: v.uq.Full }, PARENT: { BREAKPOINT: v.x1.md, SIZE: v.uq.PercentXs }, DATE: { BREAKPOINT: v.x1.md, SIZE: v.uq.xl }, DURATION: { SIZE: v.uq.sm }, POPULARITY: { BREAKPOINT: v.x1.xl, SIZE: v.uq.sm }, SELECT: { ALIGN: v.uP.Right, SIZE: v.uq.sm } };
      var Q = a("FSqQ"),
        $ = a("/G5K"),
        ee = a("LOQS");
      const te = "artist_top_tracks",
        ae = "artist_playlists",
        ie = "artist_similar_artists",
        le = "highlight",
        ne = (e) => {
          ee.A.log({ type: "cdp", eventName: "view_all_clicked", customAttributes: { screen_view_name: "artist", screen_view_id_type: "artist", screen_view_id: String(e), section_name: "artist_favorite_items" } });
        };
      var re, se, oe;
      const ce = (0, i.memo)(
        (0, w.S2)(
          (e) => {
            let { data: t, index: a, style: l } = e;
            const { context: n, container: r, shouldExplicitBeHidden: s } = (0, P.$A)(),
              { playerStatus: o, play: m, isItemLoadedInPlayer: u } = (0, G.A)(n, r),
              p = t.toDisplay[a],
              E = p.item.hasExplicitLyrics && s,
              A = (e, i) => {
                var l, n, r;
                (m({ playIndex: i, playItems: t.toPlay, isTrackActive: e, playSeveralTracks: !0 }), e) || ((n = null === (l = t.toPlay[a].artist) || void 0 === l ? void 0 : l.id), (r = t.toPlay[a].id), n && ee.A.log({ type: "cdp", eventName: "play_clicked", eventVersion: 2, customAttributes: { screen_view_name: "artist_favorite_items", screen_view_id_type: "artist", screen_view_id: n, play_type: "direct_play", item_id: r, item_type: "track" } }));
              };
            return i.createElement(
              f.A.Row,
              { style: l, uuid: p.uuid, id: p.item.id, index: p.index, isActive: u(p.item) && o.isSameContext, isReadable: p.item.right === H.A.READABLE, isRestrictedByExplicit: E, type: p.item.type, isDraggable: !0 },
              i.createElement(
                F.A,
                { size: j.TITLE.SIZE },
                i.createElement(F.A.Play, { ariaLabel: (0, c.AP)("generic_action_playsongXbyartistX_web", { sprintf: [p.item.title, (0, R.A)(p, "item.artists[0].name", "")] }), hasExplicitCover: p.item.parent.hasExplicitCover, onPlayItems: A, pictureUrl: p.item.cover(D.r4).url }),
                re || (re = i.createElement(F.A.Download, null)),
                i.createElement(F.A.PlayableLabel, { hasExplicitLyrics: p.item.hasExplicitLyrics, label: p.item.title, onPlayItems: A, tooltipText: (0, U.Y)(p.item, s) }),
                i.createElement(
                  f.A.IconGroup,
                  null,
                  i.createElement(F.A.ShowLyrics, {
                    item: p.item,
                    lyricsId: p.item.lyricsId,
                    onPlayLyrics: (e) => {
                      m({ notify: !1, playIndex: e, playItems: t.toPlay, playLyrics: !0, playSeveralTracks: !0 });
                    },
                  }),
                  se || (se = i.createElement(F.A.AddToFeedback, null)),
                  i.createElement(F.A.OpenContextMenu, { item: p.item })
                )
              ),
              i.createElement(f.A.CellBody, { breakpoint: j.PARENT.BREAKPOINT, size: j.PARENT.SIZE }, i.createElement(B.A, { links: [{ ...p.item.parent, type: d.Ay.Album }] })),
              i.createElement(f.A.CellBody, { breakpoint: j.DATE.BREAKPOINT, size: j.DATE.SIZE }, i.createElement($.A, { date: new Date(p.item.date).getTime(), dataTestId: "added" })),
              i.createElement(f.A.CellBody, { size: j.DURATION.SIZE }, i.createElement(k.A, { duration: p.item.duration })),
              i.createElement(f.A.CellBody, { breakpoint: j.POPULARITY.BREAKPOINT, size: j.POPULARITY.SIZE }, i.createElement(O.A, { rank: p.item.popularity })),
              i.createElement(f.A.CellBody, { align: j.SELECT.ALIGN, size: j.SELECT.SIZE }, oe || (oe = i.createElement(M.A, null)))
            );
          },
          (e) => {
            let { index: t, data: a } = e;
            return { item: d.Ay.Track, itemIndex: t, itemId: a.toDisplay[t].item.id };
          }
        ),
        N.t7
      );
      var de,
        me,
        ue,
        pe = a("A2sV");
      const Ee = (0, w.S2)(
        (e) => {
          var t, a, l;
          let { id: n, shouldExplicitBeHidden: r = !1 } = e;
          const { previousData: s, data: o, loading: d, fetchMore: m } = (0, pe.gWG)({ variables: { artistId: n, first: 20, cursor: null }, fetchPolicy: "cache-and-network" }),
            u = o || s,
            p = Boolean(null == u || null === (t = u.me) || void 0 === t || null === (t = t.userFavorites.byArtist) || void 0 === t || null === (t = t.tracks) || void 0 === t ? void 0 : t.pageInfo.hasNextPage);
          i.useEffect(() => {
            var e;
            p && m({ variables: { cursor: null == u || null === (e = u.me) || void 0 === e || null === (e = e.userFavorites.byArtist) || void 0 === e || null === (e = e.tracks) || void 0 === e ? void 0 : e.pageInfo.endCursor } });
          }, [p, m, null == u || null === (a = u.me) || void 0 === a || null === (a = a.userFavorites.byArtist) || void 0 === a || null === (a = a.tracks) || void 0 === a ? void 0 : a.pageInfo.endCursor]),
            i.useEffect(() => {
              ((e) => {
                ee.A.log({ type: "cdp", eventName: "screen_view", customAttributes: { screen_view_name: "artist_favorite_items", screen_view_id_type: "artist", screen_view_id: e } });
              })(n);
            }, [n]);
          const E = { ID: n, TYPE: "artist_collected_tracks_page" },
            v = { id: n, type: h.Kk.TRACK },
            { playerStatus: g } = (0, G.A)(E, v),
            I = null != u && null !== (l = u.me) && void 0 !== l && null !== (l = l.userFavorites) && void 0 !== l && null !== (l = l.byArtist) && void 0 !== l && null !== (l = l.tracks) && void 0 !== l && l.edges ? (u.me.userFavorites.byArtist.tracks.edges || []).reduce((e, t) => (t.node && e.push({ ...t.node, date: t.favoritedAt }), e), []) : [];
          const { manageItems: _, tableItems: b } = (0, X.A)(n, I, E),
            T = (0, W.A)(b, E);
          if (d && !u) return de || (de = i.createElement(Q.A, null));
          const S = (0, P.Ay)({ container: v, context: E, manageItems: _, select: T, shouldExplicitBeHidden: r, playerStatus: g });
          return i.createElement(
            P.ru,
            { value: S },
            i.createElement(
              f.A,
              { rowCount: b.toDisplay.length },
              i.createElement(f.A.Header, null, i.createElement(f.A.CellHead, { size: j.TITLE.SIZE, sortPath: "item.title" }, (0, c.AP)("datagrid_title_trackUPP_web")), i.createElement(f.A.CellHead, { breakpoint: j.PARENT.BREAKPOINT, size: j.PARENT.SIZE, sortPath: "item.parent.name" }, (0, c.AP)("datagrid_title_albumUPP_web")), i.createElement(f.A.CellHead, { breakpoint: j.DATE.BREAKPOINT, size: j.DATE.SIZE, sortPath: "item.date" }, (0, c.AP)("datagrid_title_addedtrackUPP_web")), i.createElement(f.A.CellHead, { ariaLabel: (0, c.AP)("sortingmenu_title_duration_web"), size: j.DURATION.SIZE, sortPath: "item.duration" }, me || (me = i.createElement(A.m, null))), i.createElement(f.A.CellHead, { breakpoint: j.POPULARITY.BREAKPOINT, size: j.POPULARITY.SIZE, sortPath: "item.popularity" }, i.createElement("span", null, (0, c.AP)("datagrid_title_popularityabbrevUPP_web"))), i.createElement(f.A.CellHead, { align: j.SELECT.ALIGN, size: j.SELECT.SIZE }, ue || (ue = i.createElement(x.A, null)))),
              i.createElement(
                f.A.Body,
                null,
                b.toDisplay.map((e, t) => i.createElement(ce, { data: b, key: e.uuid, index: t, style: { height: y.F4.md } }))
              )
            )
          );
        },
        () => ({ page: "artist_favorite_items" })
      );
      var Ae,
        ye = a("1h7S"),
        he = a("Eiyd"),
        ve = a("9MQu");
      const ge = (e) => {
        let { id: t, context: a } = e;
        const n = (0, l.d4)((e) => (0, s.MD)(e.entities, { id: t })),
          r = (0, ye.Ay)({ containerData: { items: n.data }, context: a, id: t, type: d.Ay.TopArtistFull });
        return i.createElement(ye.PK.Provider, { value: r }, Ae || (Ae = i.createElement(ve.e, { gap: "spacing.xs", spacing: 0, "data-testid": "toolbar" }, i.createElement(he.A, null))));
      };
      var Ie = a("mk5l"),
        _e = a("Q6dJ"),
        be = a("5xmB"),
        Te = a("Z9kq");
      const Pe = "Wktsb",
        Se = "lvRs2",
        Le = "axvzv";
      var xe = a("ailv");
      const fe = (e) => {
        let { artistId: t, concerts: a } = e;
        const l = (0, n.z1)(),
          [r, s] = (0, i.useState)(""),
          o = (0, i.useCallback)(
            (e) => {
              s(e.target.value);
            },
            [s]
          ),
          d = ((e) => {
            if (!r || "" === r) return a;
            const t = e.filter((e) => {
              var t;
              return !(!(0, Ie.A)(e.name.toLowerCase()).includes((0, Ie.A)(r.toLowerCase())) && !(0, Ie.A)(null === (t = e.location) || void 0 === t ? void 0 : t.toLowerCase()).includes((0, Ie.A)(r.toLowerCase())));
            });
            return t.length || l.trackEvent({ event: "click", eventaction: "search", eventcategory: "artist-concert", eventlabel: "no-result" }), t;
          })(a);
        return i.createElement(
          "div",
          { className: "catalog-tab-discography" },
          i.createElement(
            "div",
            { className: "container" },
            i.createElement("div", { className: Pe }, i.createElement(C.A, { className: Se }, (0, c.AP)("eventpage_action_alltourdates_web")), i.createElement("div", { className: Le }, i.createElement(Te.D, { onChange: o, size: "small", placeholder: (0, c.AP)("eventsubpage_text_searchbycitycountryvenueorevent_web"), onFocus: () => l.trackEvent({ event: "click", eventaction: "search", eventcategory: "artist-concert", eventlabel: "click-to-search" }) }))),
            d.length
              ? d.map((e, a) =>
                  i.createElement(_e.A, {
                    concertId: e.id,
                    title: e.name,
                    date: e.date,
                    subtitle: e.location,
                    key: e.id,
                    onClick: () =>
                      ((e, a) => {
                        (0, xe.uV)({ action: xe.rc.CLICK_CONCERT, screen_view_id_type: xe.v5.ARTIST, screen_view_id: t, screen_view_name: xe.Xw.ARTIST, item_type: (0, xe.U$)(e.types), concert_ranking: a, item_id: e.id });
                      })(e, a),
                    locationState: { referringArtistId: t },
                  })
                )
              : i.createElement(be.A, { wording: (0, c.AP)("errormessage_text_sorryeventcouldnotbefound_web") })
          )
        );
      };
      var Ce;
      const Ne = (e) => {
        let { artistId: t } = e;
        const { data: a, loading: l, error: n, fetchMore: r } = (0, pe.AgB)({ variables: { artistId: t, liveEventsFirst: 70 } });
        if (
          ((0, i.useEffect)(() => {
            var e;
            a && a.artist && null !== (e = a.artist.liveEvents) && void 0 !== e && e.pageInfo.hasNextPage && r({ variables: { artistId: t, liveEventsAfter: a.artist.liveEvents.pageInfo.endCursor, liveEventsFirst: 70 } });
          }, [a, r, t]),
          n)
        )
          throw n;
        if (l) return Ce || (Ce = i.createElement(Q.A, null));
        if (!a || !a.artist) {
          const e = new Error("missing data in artist concert graphql call");
          throw ((e.cause = JSON.stringify(a)), e);
        }
        if (!a.artist.liveEvents) throw new Error("This artist has no concert available");
        const s = a.artist.liveEvents.edges
          .map((e) => {
            let { node: t } = e;
            return t ? { id: t.id, name: t.name, location: t.cityName && t.countryCode ? "".concat(t.cityName, ", ").concat(t.countryCode) : "", date: t.startDate, types: t.types } : null;
          })
          .filter(Boolean);
        return i.createElement(fe, { artistId: t, concerts: s });
      };
      var Re = a("61mP"),
        De = a("MTsA"),
        we = a("YVUD"),
        ke = a("sdUN"),
        Oe = a("TDRX"),
        Be = a("juqV"),
        Me = a("xobL");
      a("aRRr");
      const Fe = { TITLE: { SIZE: v.uq.Full }, PARENT: { SIZE: v.uq.xxl } };
      var Ge;
      const He = (e) => {
          let { data: t, index: a, style: l } = e;
          const n = t.toDisplay[a],
            { context: r, container: s, shouldExplicitBeHidden: o } = i.useContext(P.Gt),
            { playerStatus: m, play: u, isItemLoadedInPlayer: p } = (0, G.A)(r, s, !0),
            E = n.item.hasExplicitLyrics && o,
            A = (e, a) => {
              u({ playIndex: a, playItems: t.toPlay, isTrackActive: e });
            };
          return i.createElement(f.A.Row, { style: l, uuid: n.uuid, id: n.item.id, index: n.index, isActive: p(n.item) && m.isSameContext, isReadable: n.item.right === H.A.READABLE, isRestrictedByExplicit: E, type: n.item.type }, i.createElement(F.A, { size: Fe.TITLE.SIZE }, i.createElement(F.A.Play, { ariaLabel: (0, c.AP)("generic_action_playsongXbyartistX_web", { sprintf: [n.item.title, n.item.parent.name] }), hasExplicitCover: n.item.parent.hasExplicitCover, onPlayItems: A, pictureUrl: n.item.cover(D.r8).url }), Ge || (Ge = i.createElement(F.A.Download, null)), i.createElement(F.A.PlayableLabel, { description: n.item.description, hasExplicitLyrics: n.item.hasExplicitLyrics, label: n.item.title, onPlayItems: A, tooltipText: (0, U.Y)(n.item, o) }), i.createElement(f.A.IconGroup, null, i.createElement(F.A.OpenContextMenu, { item: n.item }))), i.createElement(f.A.CellBody, { size: Fe.PARENT.SIZE }, i.createElement(B.A, { links: [{ ...n.item.parent, type: d.Ay.Show }] })));
        },
        Ue = i.memo(He, N.t7),
        Ye = (e) => {
          let { context: t, id: a, items: l, shouldExplicitBeHidden: n = !1 } = e;
          const r = { id: a, type: h.Kk.EPISODE },
            s = y.F4.lg,
            { manageItems: o, tableItems: c } = (0, X.A)(a, l, t),
            { playerStatus: d } = (0, G.A)(t, r, !0),
            m = (0, P.Ay)({ container: r, context: t, hasBackground: !1, manageItems: o, playerStatus: d, rowHeight: s, shouldExplicitBeHidden: n });
          return i.createElement(
            P.ru,
            { value: m },
            i.createElement(
              f.A,
              { rowCount: c.toDisplay.length },
              i.createElement(
                f.A.Body,
                null,
                c.toDisplay.map((e, t) => i.createElement(Ue, { data: c, key: e.uuid, index: t, style: { height: s } }))
              )
            )
          );
        },
        Ke = { TITLE: { SIZE: v.uq.Full } };
      var ze, qe;
      const Ze = (e) => {
          let { data: t, index: a, style: l } = e;
          const { context: n, container: r, shouldExplicitBeHidden: s } = (0, P.$A)(),
            { playerStatus: o, play: m, isItemLoadedInPlayer: u } = (0, G.A)(n, r, !1),
            p = t.toDisplay[a],
            E = p.item.hasExplicitLyrics && s,
            A = (0, i.useCallback)(
              (e, a) => {
                m({ playIndex: a, playItems: t.toPlay, isTrackActive: e });
              },
              [t.toPlay, m]
            ),
            y = (0, i.useCallback)(
              (e) => {
                m({ notify: !1, playIndex: e, playItems: t.toPlay, playLyrics: !0 });
              },
              [t.toPlay, m]
            );
          return i.createElement(w.OJ, { value: { item: d.Ay.Track, itemIndex: a, itemId: t.toDisplay[a].item.id } }, i.createElement(f.A.Row, { style: l, uuid: p.uuid, id: p.item.id, index: p.index, isActive: u(p.item) && o.isSameContext, isReadable: p.item.right === H.A.READABLE, isRestrictedByExplicit: E, type: p.item.type, isDraggable: !0 }, i.createElement(F.A, { size: Ke.TITLE.SIZE }, i.createElement(F.A.Play, { ariaLabel: (0, c.AP)("generic_action_playsongXbyartistX_web", { sprintf: [p.item.title, (0, R.A)(p, "item.artists[0].name", "")] }), hasExplicitCover: p.item.parent.hasExplicitCover, onPlayItems: A, pictureUrl: p.item.cover(D.r4).url }), ze || (ze = i.createElement(F.A.Download, null)), i.createElement(F.A.PlayableLabel, { hasExplicitLyrics: p.item.hasExplicitLyrics, label: "".concat(p.item.number || 0, ". ").concat(p.item.title), onPlayItems: A, tooltipText: (0, U.Y)(p.item, s) }), i.createElement(f.A.IconGroup, null, i.createElement(F.A.ShowLyrics, { item: p.item, lyricsId: p.item.lyricsId, onPlayLyrics: y }), qe || (qe = i.createElement(F.A.AddToFeedback, null)), i.createElement(F.A.OpenContextMenu, { item: p.item })))));
        },
        Ve = (0, i.memo)(Ze, N.t7),
        Xe = (e) => {
          let { context: t, id: a, items: l, shouldExplicitBeHidden: n = !1 } = e;
          const r = { id: a, type: h.Kk.ALBUM },
            { manageItems: s, tableItems: o } = (0, X.A)(a, l, t),
            { playerStatus: c } = (0, G.A)(t, r, !0),
            d = (0, P.Ay)({ container: r, context: t, hasBackground: !1, manageItems: s, playerStatus: c, shouldExplicitBeHidden: n });
          return i.createElement(
            P.ru,
            { value: d },
            i.createElement(
              f.A,
              { rowCount: o.toDisplay.length },
              i.createElement(
                f.A.Body,
                null,
                o.toDisplay.map((e, t) => i.createElement(Ve, { data: o, key: e.uuid, index: t, style: { height: y.F4.md } }))
              )
            )
          );
        },
        We = { TITLE: { SIZE: v.uq.Full }, ARTIST: { SIZE: v.uq.PercentXs } };
      var Je, je;
      const Qe = (0, i.memo)(
          (0, w.S2)(
            (e) => {
              let { data: t, index: a, style: l } = e;
              const { context: n, container: r, shouldExplicitBeHidden: s } = (0, P.$A)(),
                { playerStatus: o, play: m, isItemLoadedInPlayer: u } = (0, G.A)(n, r, !1),
                p = t.toDisplay[a],
                E = p.item.hasExplicitLyrics && s,
                A = (0, i.useCallback)(
                  (e, a) => {
                    m({ playIndex: a, playItems: t.toPlay, isTrackActive: e });
                  },
                  [t.toPlay, m]
                ),
                y = (0, i.useCallback)(
                  (e) => {
                    m({ notify: !1, playIndex: e, playItems: t.toPlay, playLyrics: !0 });
                  },
                  [t.toPlay, m]
                );
              return i.createElement(f.A.Row, { style: l, uuid: p.uuid, id: p.item.id, index: p.index, isActive: u(p.item) && o.isSameContext, isReadable: p.item.right === H.A.READABLE, isRestrictedByExplicit: E, type: p.item.type, isDraggable: !0 }, i.createElement(F.A, { size: We.TITLE.SIZE }, i.createElement(F.A.Play, { ariaLabel: (0, c.AP)("generic_action_playsongXbyartistX_web", { sprintf: [p.item.title, (0, R.A)(p, "item.artists[0].name", "")] }), hasExplicitCover: p.item.parent.hasExplicitCover, onPlayItems: A, pictureUrl: p.item.cover(D.r4).url }), Je || (Je = i.createElement(F.A.Download, null)), i.createElement(F.A.PlayableLabel, { hasExplicitLyrics: p.item.hasExplicitLyrics, label: p.item.title, onPlayItems: A, tooltipText: (0, U.Y)(p.item, s) }), i.createElement(f.A.IconGroup, null, i.createElement(F.A.ShowLyrics, { item: p.item, lyricsId: p.item.lyricsId, onPlayLyrics: y }), je || (je = i.createElement(F.A.AddToFeedback, null)), i.createElement(F.A.OpenContextMenu, { item: p.item }))), i.createElement(f.A.CellBody, { size: We.ARTIST.SIZE }, i.createElement(B.A, { links: p.item.artists.map((e) => ({ ...e, type: d.Ay.Artist })) })));
            },
            (e) => {
              let { index: t, data: a } = e;
              return { item: d.Ay.Track, itemIndex: t, itemId: a.toDisplay[t].item.id };
            }
          ),
          N.t7
        ),
        $e = (e) => {
          let { context: t, id: a, items: l, shouldExplicitBeHidden: n = !1 } = e;
          const r = { id: a, type: h.Kk.PLAYLIST },
            { manageItems: s, tableItems: o } = (0, X.A)(a, l, t),
            { playerStatus: c } = (0, G.A)(t, r, !0),
            d = (0, P.Ay)({ container: r, context: t, hasBackground: !1, manageItems: s, playerStatus: c, shouldExplicitBeHidden: n });
          return i.createElement(
            P.ru,
            { value: d },
            i.createElement(
              f.A,
              { rowCount: o.toDisplay.length },
              i.createElement(
                f.A.Body,
                null,
                o.toDisplay.map((e, t) => i.createElement(Qe, { data: o, key: e.uuid, index: t, style: { height: y.F4.md } }))
              )
            )
          );
        },
        et = { TITLE: { SIZE: v.uq.Full } };
      var tt;
      const at = (e) => {
          let { data: t, index: a, style: l } = e;
          const n = t.toDisplay[a],
            { context: r, container: s, shouldExplicitBeHidden: o } = i.useContext(P.Gt),
            { playerStatus: d, play: m, isItemLoadedInPlayer: u } = (0, G.A)(r, s, !1),
            p = n.item.hasExplicitLyrics && o,
            E = (e, a) => {
              m({ playIndex: a, playItems: t.toPlay, isTrackActive: e });
            };
          return i.createElement(f.A.Row, { style: l, uuid: n.uuid, id: n.item.id, index: n.index, isActive: u(n.item) && d.isSameContext, isReadable: n.item.right === H.A.READABLE, isRestrictedByExplicit: p, type: n.item.type }, i.createElement(F.A, { size: et.TITLE.SIZE }, i.createElement(F.A.Play, { ariaLabel: (0, c.AP)("generic_action_playsongXbyartistX_web", { sprintf: [n.item.title, n.item.parent.name] }), hasExplicitCover: n.item.parent.hasExplicitCover, onPlayItems: E, pictureUrl: n.item.cover(D.r8).url }), tt || (tt = i.createElement(F.A.Download, null)), i.createElement(F.A.PlayableLabel, { description: n.item.description, hasExplicitLyrics: n.item.hasExplicitLyrics, label: n.item.title, onPlayItems: E, tooltipText: (0, U.Y)(n.item, o) }), i.createElement(f.A.IconGroup, null, i.createElement(F.A.OpenContextMenu, { item: n.item }))));
        },
        it = i.memo(at, N.t7),
        lt = (e) => {
          let { context: t, id: a, items: l, shouldExplicitBeHidden: n = !1 } = e;
          const r = { id: a, type: h.Kk.SHOW },
            s = y.F4.lg,
            { manageItems: o, tableItems: c } = (0, X.A)(a, l, t),
            { playerStatus: d } = (0, G.A)(t, r, !0),
            m = (0, P.Ay)({ container: r, context: t, hasBackground: !1, manageItems: o, playerStatus: d, rowHeight: s, shouldExplicitBeHidden: n });
          return i.createElement(
            P.ru,
            { value: m },
            i.createElement(
              f.A,
              { rowCount: c.toDisplay.length },
              i.createElement(
                f.A.Body,
                null,
                c.toDisplay.map((e, t) => i.createElement(it, { data: c, key: e.uuid, index: t, style: { height: s } }))
              )
            )
          );
        };
      var nt,
        rt = a("HmE0"),
        st = a("y7xR"),
        ot = a("nrKQ"),
        ct = a("GkjM"),
        dt = a("0CJU"),
        mt = a("7E8A");
      const ut =
        (0, n.Ay)()(
          (nt = class extends i.Component {
            constructor() {
              super(...arguments),
                (this.getTrackingParams = () => ({ type: "card" })),
                (this.handleClick = () => {
                  ot.A.call({ method: "log_central.log", data: { BATCH: [{ channel: "discography_click", params: this.getTrackingParams() }] } });
                }),
                (this.renderDescription = () => {
                  const { description: e } = this.props;
                  return e ? i.createElement("div", { className: "discography-description ellipsis" }, e) : null;
                }),
                (this.renderProducerLine = () => {
                  const { data: e, type: t } = this.props,
                    a = (0, R.A)(e, "PRODUCER_LINE");
                  return t === d.Ay.Album && a ? i.createElement("div", { className: "album-legal" }, a) : null;
                }),
                (this.renderViewMore = () => {
                  const { id: e, index: t, type: a, viewMoreLabel: l } = this.props;
                  return l ? i.createElement("div", { className: "view-more-container" }, i.createElement(rt.$n, { as: ct.A, onClick: this.handleClick, size: "sm", to: "/".concat(a, "/").concat(e), variant: "outline", "data-position": t || 0 }, l)) : null;
                });
            }
            render() {
              const { children: e, id: t, index: a, context: l, data: n, title: r, type: s } = this.props;
              return i.createElement("div", { className: "catalog-tab-box discography-row" }, i.createElement("div", { className: "discography-thumbnail" }, i.createElement(w.OJ, { value: { item: s === d.Ay.Album || s === d.Ay.Playlist ? s : void 0, itemId: String(t) } }, i.createElement("div", { className: "thumbnail-container" }, i.createElement(dt.A, { type: s, width: 200, height: 200, bordered: !0, context: l, pageContext: mt.CONTEXT_PAGE_ALBUM_DISCOGRAPHY, data: n, alt: r }))), this.renderProducerLine()), i.createElement("div", { className: "discography-infos" }, i.createElement(st.D, { variant: "heading.m", className: "ellipsis", _hover: { textDecoration: "underline" } }, i.createElement(ct.A, { to: "/".concat(s, "/").concat(t), onClick: this.handleClick, "data-position": a || 0 }, r)), this.renderDescription(), e, this.renderViewMore()));
            }
          })
        ) || nt;
      var pt = a("/sVC"),
        Et = a("3nMj"),
        At = a("sAMA");
      const yt = [d.Ay.Album, d.Ay.Episode, d.Ay.Playlist, d.Ay.Show];
      let ht = (function (e) {
        return (e.XXSMALL = "xxsmall"), (e.XSMALL = "xsmall"), (e.SMALL = "small"), (e.MEDIUM = "medium"), (e.DEFAULT = "default"), e;
      })({});
      const vt = (e) => {
          let { item: t, title: a, size: n } = e;
          const r = (0, R.A)(t, "__TYPE__");
          if (!r) throw new Error("Item without type was sent to Artist Highlight.");
          const s = r === d.Ay.Podcast ? d.Ay.Show : r;
          if (-1 === yt.indexOf(s)) throw new Error('Item of type "'.concat(s, '" is not handled by the Artist Highlight.'));
          const o = String(t[d.vn[s]]),
            m = { ID: o, TYPE: (0, u.Sx)(s) },
            p = (0, l.d4)((e) => (0, Me.Uw)(e.user) === At.g),
            E = () => {
              const e = Number((0, R.A)(t, "SONGS.total")) || Number(t.NB_SONG) || 0;
              return A() || e <= 6 ? "" : s === d.Ay.Album ? (0, c.WI)("artistpage_action_accessalbumpageXtracks_web", "artistpage_action_accessalbumpageXtracks_web", { count: e, sprintf: [e] }) : (0, c.WI)("artistpage_action_accessplaylistpageXtracks_web", "artistpage_action_accessplaylistpageXtracks_web", { count: e, sprintf: [e] });
            },
            A = () => s === d.Ay.Show,
            y = () => {
              const e = (0, R.A)(t, "SONGS.data") || (0, R.A)(t, "SONGS") || (0, R.A)(t, "EPISODES", []),
                a = A() ? 5 : 6,
                l = { context: m, id: o, items: e.slice(0, a), shouldExplicitBeHidden: p };
              switch (s) {
                case d.Ay.Album:
                  return i.createElement(Xe, l);
                case d.Ay.Playlist:
                  return i.createElement($e, l);
                case d.Ay.Show:
                  return i.createElement(lt, l);
              }
            },
            h = (0, Be.A)("top-content content-bottom content-left last-release", n);
          return i.createElement(
            w.OJ,
            { value: { section: le } },
            i.createElement(
              "div",
              { className: "top-cell top-cell-left" },
              i.createElement(C.A, { className: "catalog-section-title", title: a || (0, c.AP)("DerniĂ¨re sortie"), href: "/".concat(s, "/").concat(o) }),
              i.createElement(
                "div",
                { className: h },
                (() => {
                  if (s === d.Ay.Episode) return i.createElement(Ye, { context: m, id: o, items: [t], shouldExplicitBeHidden: p });
                  const e = A() ? t.SHOW_DESCRIPTION : (0, Et.A)((0, pt.A)(t));
                  return i.createElement(ut, { context: m, data: t, description: e, id: Number(o), title: t.ALB_TITLE || t.TITLE || t.SHOW_NAME || "", type: s, viewMoreLabel: E() }, y());
                })()
              )
            )
          );
        },
        gt = { TITLE: { SIZE: v.uq.Full } };
      var It, _t;
      const bt = (e) => {
          let { data: t, index: a, style: l } = e;
          const { context: n, container: r, shouldExplicitBeHidden: s } = (0, P.$A)(),
            { playerStatus: o, play: m, isItemLoadedInPlayer: u } = (0, G.A)(n, r, !0),
            p = t.toDisplay[a],
            E = p.item.hasExplicitLyrics && s,
            A = (0, i.useCallback)(
              (e, a) => {
                m({ playIndex: a, playItems: t.toPlay, isTrackActive: e });
              },
              [t.toPlay, m]
            ),
            y = (0, i.useCallback)(
              (e) => {
                m({ notify: !1, playIndex: e, playItems: t.toPlay, playLyrics: !0 });
              },
              [t.toPlay, m]
            );
          return i.createElement(w.OJ, { value: { item: d.Ay.Track, itemId: p.item.id, itemIndex: a } }, i.createElement(f.A.Row, { style: l, uuid: p.uuid, id: p.item.id, index: p.index, isActive: u(p.item) && o.isSameContext, isReadable: p.item.right === H.A.READABLE, isRestrictedByExplicit: E, type: p.item.type, isDraggable: !0 }, i.createElement(F.A, { size: gt.TITLE.SIZE }, i.createElement(F.A.Play, { ariaLabel: (0, c.AP)("generic_action_playsongXbyartistX_web", { sprintf: [p.item.title, (0, R.A)(p, "item.artists[0].name", "")] }), hasExplicitCover: p.item.parent.hasExplicitCover, onPlayItems: A, pictureUrl: p.item.cover(D.r4).url }), It || (It = i.createElement(F.A.Download, null)), i.createElement(F.A.PlayableLabel, { hasExplicitLyrics: p.item.hasExplicitLyrics, label: "".concat(p.item.number || 0, ". ").concat(p.item.title), onPlayItems: A, tooltipText: (0, U.Y)(p.item, s) }), i.createElement(f.A.IconGroup, null, i.createElement(F.A.ShowLyrics, { item: p.item, lyricsId: p.item.lyricsId, onPlayLyrics: y }), _t || (_t = i.createElement(F.A.AddToFeedback, null)), i.createElement(F.A.OpenContextMenu, { item: p.item })))));
        },
        Tt = (0, i.memo)(bt, N.t7),
        Pt = (e) => {
          let { context: t, id: a, items: l, maxItemsToDisplay: n, shouldExplicitBeHidden: r = !1 } = e;
          const s = { id: a, type: h.Kk.TOP_ARTIST },
            { manageItems: o, tableItems: c } = (0, X.A)(a, l, t),
            { playerStatus: d } = (0, G.A)(t, s, !0);
          n && (c.toDisplay = c.toDisplay.slice(0, n));
          const m = (0, P.Ay)({ container: s, context: t, hasBackground: !1, manageItems: o, playerStatus: d, shouldExplicitBeHidden: r });
          return i.createElement(
            w.OJ,
            { value: { section: te } },
            i.createElement(
              P.ru,
              { value: m },
              i.createElement(
                f.A,
                { rowCount: c.toDisplay.length },
                i.createElement(
                  f.A.Body,
                  null,
                  c.toDisplay.map((e, t) => i.createElement(Tt, { data: c, key: e.uuid, index: t, style: { height: y.F4.md } }))
                )
              )
            )
          );
        };
      var St = a("aFHr"),
        Lt = a("KVgY"),
        xt = a("wGgI");
      const ft = (e) => {
        let { onSort: t, sortType: a, sortTypes: l } = e,
          n = 0;
        const r = l.map((e, l) => {
          let [r, s] = e;
          return r === a && (n = l), i.createElement(xt.Ay.Item, { key: r, label: s, isSelected: r === a }, i.createElement("a", { onClick: t.bind(void 0, r), role: "button" }, s));
        });
        return i.createElement(xt.Ay, { selected: n }, r);
      };
      var Ct,
        Nt,
        Rt = a("GxIe"),
        Dt = a("3ns7");
      function wt(e) {
        return (e || []).reduce((e, t) => (t.node && e.push(t.node), e), []);
      }
      const kt = (e) => {
        var t, a, l, n, r, s, o, d;
        let { artistId: m } = e;
        const u = E.A.isAllowed("artist_page_albums_sorted_by_rank") ? pe.sV3.RANK : pe.sV3.RELEASE_DATE,
          [p, A] = (0, i.useState)(u),
          [, y] = (0, i.useTransition)(),
          h = { artistId: m, nb: 30, cursor: null, subType: null, roles: [pe.by3.MAIN], mode: pe.rb0.OFFICIAL, order: p },
          { data: v, fetchMore: g } = (0, pe.JDV)({ variables: { ...h, types: [pe.iqi.ALBUM], subType: pe.Mij.STUDIO } }),
          { data: I, fetchMore: _ } = (0, pe.JDV)({ variables: { ...h, types: [pe.iqi.EP] } }),
          { data: b, fetchMore: T } = (0, pe.JDV)({ variables: { ...h, types: [pe.iqi.SINGLES] } }),
          { data: P, fetchMore: S } = (0, pe.JDV)({ variables: { ...h, types: [pe.iqi.ALBUM], subType: pe.Mij.LIVE } }),
          { data: L, fetchMore: x } = (0, pe.JDV)({ variables: { ...h, types: [pe.iqi.ALBUM], subType: pe.Mij.COMPILATION } }),
          { data: f, fetchMore: C } = (0, pe.JDV)({ variables: { ...h, roles: [pe.by3.FEATURED], types: [pe.iqi.ALBUM, pe.iqi.EP, pe.iqi.SINGLES], mode: pe.rb0.ALL } }),
          N = wt(null == v || null === (t = v.artist) || void 0 === t ? void 0 : t.albums.edges),
          R = wt(null == I || null === (a = I.artist) || void 0 === a ? void 0 : a.albums.edges),
          D = wt(null == b || null === (l = b.artist) || void 0 === l ? void 0 : l.albums.edges),
          k = wt(null == P || null === (n = P.artist) || void 0 === n ? void 0 : n.albums.edges),
          O = wt(null == L || null === (r = L.artist) || void 0 === r ? void 0 : r.albums.edges),
          B = wt(null == f || null === (s = f.artist) || void 0 === s ? void 0 : s.albums.edges);
        let M = null == v || null === (o = v.artist) || void 0 === o ? void 0 : o.albums.pageInfo.hasNextPage,
          F = () => {
            var e;
            g({ variables: { cursor: null == v || null === (e = v.artist) || void 0 === e ? void 0 : e.albums.pageInfo.endCursor } });
          };
        const G = [[N, (0, c.AP)("favoritessidebar_title_albums_web"), "albums"]];
        var H, U, Y, K, z, q, Z, V, X, W;
        !1 === (null == v || null === (d = v.artist) || void 0 === d ? void 0 : d.albums.pageInfo.hasNextPage) &&
          (G.push([R, (0, c.AP)("discographytype_title_EPs_web"), "eps"]),
          (M = null == I || null === (H = I.artist) || void 0 === H ? void 0 : H.albums.pageInfo.hasNextPage),
          (F = () => {
            var e;
            _({ variables: { cursor: null == I || null === (e = I.artist) || void 0 === e ? void 0 : e.albums.pageInfo.endCursor } });
          }),
          !1 === (null == I || null === (U = I.artist) || void 0 === U ? void 0 : U.albums.pageInfo.hasNextPage) &&
            ((M = null == b || null === (Y = b.artist) || void 0 === Y ? void 0 : Y.albums.pageInfo.hasNextPage),
            G.push([D, (0, c.AP)("discographytype_title_singles_web"), "singles"]),
            (F = () => {
              var e;
              T({ variables: { cursor: null == b || null === (e = b.artist) || void 0 === e ? void 0 : e.albums.pageInfo.endCursor } });
            }),
            !1 === (null == b || null === (K = b.artist) || void 0 === K ? void 0 : K.albums.pageInfo.hasNextPage) &&
              ((M = null == P || null === (z = P.artist) || void 0 === z ? void 0 : z.albums.pageInfo.hasNextPage),
              G.push([k, (0, c.AP)("discographytype_title_livealbums_web"), "live_albums"]),
              (F = () => {
                var e;
                S({ variables: { cursor: null == P || null === (e = P.artist) || void 0 === e ? void 0 : e.albums.pageInfo.endCursor } });
              }),
              !1 === (null == P || null === (q = P.artist) || void 0 === q ? void 0 : q.albums.pageInfo.hasNextPage) &&
                ((M = null == L || null === (Z = L.artist) || void 0 === Z ? void 0 : Z.albums.pageInfo.hasNextPage),
                G.push([O, (0, c.AP)("discographytype_title_compilations_web"), "compilations"]),
                (F = () => {
                  var e;
                  x({ variables: { cursor: null == L || null === (e = L.artist) || void 0 === e ? void 0 : e.albums.pageInfo.endCursor } });
                }),
                !1 === (null == L || null === (V = L.artist) || void 0 === V ? void 0 : V.albums.pageInfo.hasNextPage) &&
                  ((M = null == f || null === (X = f.artist) || void 0 === X ? void 0 : X.albums.pageInfo.hasNextPage),
                  G.push([B, (0, c.AP)("discography_title_featuredin_web"), "artist_featured_discography"]),
                  (F = () => {
                    var e;
                    C({ variables: { cursor: null == f || null === (e = f.artist) || void 0 === e ? void 0 : e.albums.pageInfo.endCursor } });
                  }),
                  !1 === (null == f || null === (W = f.artist) || void 0 === W ? void 0 : W.albums.pageInfo.hasNextPage) && (F = () => {}))))));
        let J = !1;
        return i.createElement(
          Lt.A,
          { hasMore: M, loadMore: () => y(() => F()), loader: Ct || (Ct = i.createElement(Q.A, { key: "loader" })) },
          G.map((e) => {
            let [t, a, l] = e;
            return (
              t.length > 0 &&
              i.createElement(
                w.OJ,
                { key: a, value: { section: l } },
                i.createElement(
                  "div",
                  { key: "heading", className: "heading" },
                  i.createElement("div", { className: "cell cell-title" }, i.createElement(st.D, { variant: "heading.m" }, a)),
                  Nt || (Nt = i.createElement("div", { className: "cell cell-line" }, i.createElement("div", { className: "line" }))),
                  !J &&
                    (J = !0) &&
                    i.createElement(
                      "div",
                      { className: "cell cell-sort" },
                      i.createElement(ft, {
                        onSort: (e) => {
                          y(() => A(e));
                        },
                        sortType: p,
                        sortTypes: [
                          [pe.sV3.RELEASE_DATE, (0, c.AP)("Date de sortie")],
                          [pe.sV3.ALPHA, (0, c.AP)("A - Z")],
                          [pe.sV3.RANK, (0, c.AP)("Les plus ĂŠcoutĂŠs")],
                        ],
                      })
                    )
                ),
                i.createElement(
                  Dt.kK,
                  null,
                  t.map((e) => {
                    var t, a;
                    return i.createElement(w.OJ, { key: e.id, value: { legacyContext: { ID: e.id, CONTEXT_ID: m, TYPE: "album_discography" } } }, i.createElement(Rt.A, { id: e.id, albumName: e.displayTitle, picture: null === (t = e.cover) || void 0 === t ? void 0 : t.large[0], isExplicitAlbum: e.isExplicit || !1, hasExplicitCover: null === (a = e.cover) || void 0 === a ? void 0 : a.explicitStatus, releaseDate: (0, Et.A)(e.releaseDate), contributors: wt(e.contributors.edges) }));
                  })
                )
              )
            );
          })
        );
      };
      var Ot,
        Bt = a("23Qi"),
        Mt = a("Weh+"),
        Ft = a("gXj/"),
        Gt = a("FFW9"),
        Ht = a("A0BP"),
        Ut = a("lD5d"),
        Yt = a("5Loq"),
        Kt = a("934x"),
        zt = a("xvdY"),
        qt = a("9OcB"),
        Zt = a("AZMZ"),
        Vt = a("LpaV"),
        Xt = a("SrwL");
      const Wt = (e) => {
        var t;
        let { artistId: a, nbRelated: l, legacyData: n } = e;
        const { loading: r, data: s } = (0, pe.ORW)({ variables: { artistId: a, relatedArtistFirst: 6, cursor: null } });
        if (r || null == s || null === (t = s.artist) || void 0 === t || null === (t = t.relatedArtists) || void 0 === t || !t.edges) return null;
        const o = s.artist.relatedArtists.edges.slice(0, l);
        return i.createElement(
          Oe.a,
          { as: "aside", className: "top-cell top-cell-right", position: "relative" },
          i.createElement(st.D, { variant: "heading.m" }, i.createElement(Kt.A, { href: "/artist/".concat(a, "/related_artist") }, i.createElement("span", { className: "label" }, (0, c.AP)("Artistes similaires")))),
          o.map((e) => {
            var t;
            return e.node
              ? i.createElement(
                  w.OJ,
                  { key: e.node.id, value: { item: d.Ay.Artist, itemId: e.node.id, section: ie } },
                  i.createElement(
                    Mt.Q,
                    { mt: "spacing.l", w: "100%" },
                    i.createElement(Ft.h, null, i.createElement(qt.A, { alt: e.node.name, borderRadius: "rounded", src: null === (t = e.node.picture) || void 0 === t ? void 0 : t.small[0], type: d.Ay.Artist })),
                    i.createElement(Gt.f, { flex: 1 }, i.createElement(Ht.n, { _hover: { textDecoration: "underline" } }, i.createElement(ct.A, { to: "/artist/".concat(e.node.id), "data-instance": "artist_name" }, e.node.name)), i.createElement(Ut.P, null, (0, c.WI)("%s fan", "%s fans", { count: e.node.fansCount, sprintf: [(0, Bt.A)(e.node.fansCount)] }))),
                    i.createElement(
                      Gt.f,
                      { displayOnHover: !0 },
                      i.createElement(
                        Vt.K.Provider,
                        { value: (0, Xt.uC)() },
                        i.createElement(Zt.A, {
                          anchor: Ot || (Ot = i.createElement(rt.K0, { variant: "ghost", size: "small", "aria-label": "artist_contextmenu" }, i.createElement(Yt.j, null))),
                          context: { ID: Number(e.node.id), TYPE: (0, u.Pe)(d.Ay.Artist, p.Di) },
                          id: e.node.id,
                          data: n.find((t) => {
                            var a;
                            return String(t.ART_ID) === (null === (a = e.node) || void 0 === a ? void 0 : a.id);
                          }),
                        })
                      )
                    ),
                    i.createElement(Gt.f, null, i.createElement(zt.A, { type: d.Ay.Artist, id: e.node.id, context: { ID: Number(e.node.id), TYPE: (0, u.Pe)(d.Ay.Artist, p.Di) } }))
                  )
                )
              : null;
          }),
          s.artist.relatedArtists.edges.length > 3 ? i.createElement(Oe.a, { mt: "spacing.l" }, i.createElement(rt.$n, { as: ct.A, variant: "outline", size: "small", to: "/artist/".concat(a, "/related_artist") }, (0, c.AP)("Voir plus d'artistes"))) : null
        );
      };
      var Jt,
        jt,
        Qt = a("RGaU"),
        $t = a("4gOi"),
        ea = a("wuUY");
      const ta = (e) => {
        var t, a, l, n, r, s;
        let { artistId: o } = e;
        const { loading: m, data: u, error: p } = (0, pe.tjO)({ variables: { artistId: o, relatedPlaylistFirst: 3, cursor: null } }),
          { loading: E, data: A, error: y } = (0, pe.wi_)({ variables: { artistId: o, curatedPlaylistFirst: 2 } });
        if (p || null == u || null === (t = u.artist) || void 0 === t || !t.playlists.relatedPlaylists.edges.length || y || null == A || null === (a = A.artist) || void 0 === a || !a.playlists.curatedPlaylists.edges.length) return null;
        if (m || E) return i.createElement(Oe.a, null, i.createElement(st.D, { variant: "heading.m" }, i.createElement(Kt.A, { href: "/artist/".concat(o, "/related_playlist") }, i.createElement("span", { className: "label" }, (0, c.AP)("Playlists")))), Jt || (Jt = i.createElement(Qt.k, null)));
        const h = [...(null !== (l = null == A || null === (n = A.artist) || void 0 === n ? void 0 : n.playlists.curatedPlaylists.edges) && void 0 !== l ? l : []), ...(null !== (r = null == u || null === (s = u.artist) || void 0 === s ? void 0 : s.playlists.relatedPlaylists.edges) && void 0 !== r ? r : [])].slice(0, 3);
        return h.length
          ? i.createElement(
              Oe.a,
              { position: "relative" },
              i.createElement(st.D, { variant: "heading.m" }, i.createElement(Kt.A, { href: "/artist/".concat(o, "/related_playlist") }, i.createElement("span", { className: "label" }, (0, c.AP)("Playlists")))),
              h.map((e) => {
                var t, a, l, n, r, s;
                return e.node ? i.createElement(w.OJ, { key: e.node.id, value: { item: d.Ay.Playlist, itemId: e.node.id, section: ae } }, i.createElement(Mt.Q, { mt: "spacing.l", w: "100%" }, i.createElement(Ft.h, null, i.createElement(qt.A, { alt: e.node.title, src: null === (t = e.node.picture) || void 0 === t ? void 0 : t.small[0], type: d.Ay.Playlist })), i.createElement(Gt.f, { flex: 1 }, i.createElement(Ht.n, { _hover: { textDecoration: "underline" } }, i.createElement(ct.A, { to: "/playlist/".concat(e.node.id), "data-instance": "playlist_name" }, e.node.title)), e.node.fansCount && i.createElement(Ut.P, null, (0, c.WI)("%s fan", "%s fans", { count: e.node.fansCount, sprintf: [(0, Bt.A)(e.node.fansCount)] }))), i.createElement(Gt.f, { displayOnHover: !0 }, i.createElement(Vt.K.Provider, { value: (0, Xt.uC)() }, i.createElement($t.A, { anchor: i.createElement(rt.K0, { variant: "ghost", size: "small", "aria-label": "playlist_contextmenu", _focus: { outline: "none" } }, jt || (jt = i.createElement(Yt.j, null))), context: { ID: e.node.id, TYPE: "artist_similar_playlist" }, id: e.node.id, data: { picture: null === (a = e.node.picture) || void 0 === a ? void 0 : a.small[0], name: e.node.title, PARENT_USER_ID: null !== (l = null === (n = e.node.owner) || void 0 === n ? void 0 : n.id) && void 0 !== l ? l : "", NB_SONG: e.node.estimatedTracksCount, STATUS: e.node.isPrivate ? ea.Gd.PRIVATE : e.node.isCollaborative ? ea.Gd.COLLABORATIVE : ea.Gd.PUBLIC, USER_ID: null !== (r = null === (s = e.node.owner) || void 0 === s ? void 0 : s.id) && void 0 !== r ? r : "" } }))), i.createElement(Gt.f, null, i.createElement(zt.A, { type: d.Ay.Playlist, id: e.node.id, context: { ID: e.node.id, TYPE: "artist_similar_playlist" } })))) : null;
              })
            )
          : null;
      };
      let aa = (function (e) {
        return (e.sm = "sm"), (e.md = "md"), (e.lg = "lg"), e;
      })({});
      const ia = "HBxbS",
        la = "c9AV2",
        na = (e) => {
          var t;
          let { artistId: a } = e;
          const { loading: l, data: n, error: r } = (0, pe.KDJ)({ variables: { artistId: a } });
          if (l || r || !n || null == n || null === (t = n.artist) || void 0 === t || null === (t = t.liveEventsByProximity) || void 0 === t || null === (t = t.edges) || void 0 === t || null === (t = t[0]) || void 0 === t || !t.node) return null;
          const { id: s, name: o, startDate: d, countryCode: m, cityName: u, types: p } = n.artist.liveEventsByProximity.edges[0].node,
            E = u && m ? "".concat(u, ", ").concat(m) : null;
          return i.createElement("div", { className: "catalog-container ".concat(ia), "data-testid": "last-concert-section" }, i.createElement("div", { className: "heading" }, i.createElement("div", { className: "cell cell-title" }, i.createElement(C.A, { title: (0, c.AP)("artistpage_title_artistXontour_web", { sprintf: [n.artist.name] }), href: "/artist/".concat(n.artist.id, "/concerts"), ctaLabel: (0, c.AP)("eventpage_action_alltourdates_web") }))), i.createElement(_e.A, { title: o, concertId: s, date: d, subtitle: E, calendarIconSize: aa.md, className: la, locationState: { referringArtistId: a }, onClick: () => (0, xe.uV)({ action: xe.rc.CLICK_CONCERT, screen_view_name: xe.Xw.ARTIST, screen_view_id_type: xe.v5.ARTIST, screen_view_id: a, item_id: s, item_type: (0, xe.U$)(p) }) }));
        };
      var ra, sa;
      const oa = (e) => {
        var t, a, l;
        let { artistId: n } = e;
        const { data: r, loading: s } = (0, pe.TF)({ variables: { artistId: String(n) } }),
          d = (0, o.W6)();
        if (s) return ra || (ra = i.createElement(Q.A, null));
        if (!r || !r.artist) {
          const e = new Error("missing data in artist personal favorite graphql call");
          throw ((e.cause = JSON.stringify(r)), e);
        }
        const m = null === (t = r.artist.picture) || void 0 === t ? void 0 : t.small[0],
          u = Boolean(null === (a = r.artist.picture) || void 0 === a ? void 0 : a.explicitStatus),
          p = (null == r || null === (l = r.me) || void 0 === l || null === (l = l.userFavorites.byArtist) || void 0 === l ? void 0 : l.estimatedTracksCount) || 0;
        return p
          ? i.createElement(
              Mt.Q,
              {
                mb: "spacing.2xl",
                w: "100%",
                "data-testid": "in_your_fav_section",
                onClick: () => {
                  d.push("/artist/".concat(n, "/").concat(Re.G.FAVORITES)), ne(n);
                },
                _hover: { cursor: "pointer" },
              },
              i.createElement(Ft.h, { position: "relative", "data-testid": "in_your_fav_thumbnail" }, i.createElement(qt.A, { size: "size.xl", src: m, isExplicitCover: u }), sa || (sa = i.createElement(Oe.a, { position: "absolute", top: 0, left: 0, zIndex: 1, width: "100%", height: "100%", bg: "background.accent.onLight.default", opacity: "0.4" })), i.createElement(qt.A, { position: "absolute", top: "50%", insetStart: "50%", transform: "translate(-50%, -50%)", variant: "favTracks", size: "size.s", borderRadius: "rounded", alt: (0, c.AP)("artistpageentrypoint_title_inyourfavorites_web"), zIndex: 3 })),
              i.createElement(Gt.f, { flex: 1 }, i.createElement(Ht.n, { _hover: { textDecoration: "underline" }, _groupHover: { textDecoration: "underline" }, "data-testid": "in_your_fav_title" }, i.createElement(ct.A, { to: "/artist/".concat(n, "/").concat(Re.G.FAVORITES) }, (0, c.AP)("artistpageentrypoint_title_inyourfavorites_web"))), i.createElement(Ut.P, { "data-testid": "in_your_fav_subtitle" }, (0, c.WI)("%s titre", "%s titres", { sprintf: [p], count: p })))
            )
          : null;
      };
      var ca,
        da = a("fsGD"),
        ma = a("yiM3"),
        ua = (function (e) {
          return (e.SMALL = "small"), (e.BIG = "big"), e;
        })(ua || {});
      class pa extends i.Component {
        constructor(e) {
          super(e), (this.state = { display: this._getDisplay(!1), hasAdsFull: !1 }), (this._toggleDisplay = this._toggleDisplay.bind(this)), (this._initAds = this._initAds.bind(this));
        }
        componentDidMount() {
          r.A.subscribe(r.A.layout.resize, this._toggleDisplay), r.A.subscribe(r.A.layout.adsBackground, this._initAds);
        }
        componentWillUnmount() {
          r.A.unsubscribe(r.A.layout.resize, this._toggleDisplay), r.A.unsubscribe(r.A.layout.adsBackground, this._initAds);
        }
        render() {
          var e;
          const { id: t } = this.props,
            { TOP: a, VIDEO: l } = this.props.data,
            { display: n } = this.state;
          return i.createElement("div", { className: "catalog-tab-discography" }, i.createElement("div", { className: "container" }, n === ua.SMALL ? this._renderPersonalFavorite() : null, i.createElement("div", { className: "catalog-container" }, this._renderTopTracks(), n === ua.BIG ? i.createElement(Oe.a, { as: "aside", verticalAlign: "top", className: (0, Be.A)("top-cell", { "top-cell-right": a.data.length > 0 }) }, this._renderPersonalFavorite(), i.createElement(ta, { artistId: String(t) })) : null), this._renderOwnerMessage(), a.data.length > 0 ? i.createElement("div", { className: "catalog-container" }, this._renderHighlight(), n === ua.BIG ? this._renderRelatedArtists() : null) : null, (null === (e = l.ITEMS) || void 0 === e ? void 0 : e.length) > 0 ? i.createElement("div", { className: "catalog-container", id: "videos" }, this._renderLivestream()) : null, n === ua.SMALL ? i.createElement("div", { className: "catalog-container visible-ads-full" }, i.createElement(ta, { artistId: String(t) }), this._renderRelatedArtists()) : null, i.createElement(na, { artistId: String(t) })), i.createElement("div", { className: "container", "data-testid": "artist_discography" }, i.createElement(i.Suspense, { fallback: null }, i.createElement(kt, { artistId: this.props.id.toString() }))));
        }
        _renderTopTracks() {
          const { id: e, shouldExplicitBeHidden: t } = this.props,
            { TOP: a } = this.props.data;
          return 0 === a.data.length ? null : i.createElement("div", { className: "top-cell top-cell-left" }, i.createElement(C.A, { className: "catalog-section-title", title: (0, c.AP)("Top titres"), href: "/artist/".concat(e, "/top_track") }), i.createElement("div", { className: "top-content content-top content-left" }, i.createElement(Pt, { id: String(e), context: { ID: e, TYPE: (0, u.Pe)(d.Ay.Artist, p.sI) }, items: a.data, maxItemsToDisplay: 4, shouldExplicitBeHidden: t })));
        }
        _renderPersonalFavorite() {
          const { id: e } = this.props;
          return E.A.isAllowed("artist_page_favorite_content") ? i.createElement(oa, { artistId: e }) : null;
        }
        _renderHighlight() {
          const { data: e } = this.props,
            t = (0, R.A)(e, "HIGHLIGHT.ITEM");
          return t ? i.createElement(vt, { item: t, title: (0, R.A)(e, "HIGHLIGHT.TITLE"), size: this._getSize() }) : null;
        }
        _renderLivestream() {
          var e, t;
          const { userIsConnected: a } = this.props,
            { VIDEO: l } = this.props.data;
          if (0 === l.ITEMS.length) return null;
          const n = l.ITEMS.map((e) => {
              var t, i, l, n, r, s;
              return { type: "video-link", data: {}, target: a ? e.DEEPLINK : "", title: null !== (t = e.TITLE) && void 0 !== t ? t : "", subtitle: null !== (i = e.SUBTITLE) && void 0 !== i ? i : "", pictures: [{ md5: e.ASSET, type: "misc" }], theme: null !== (l = e.THEME) && void 0 !== l ? l : "dark", layout_parameters: { cta: { type: "watch", label: "WATCH" }, override: { title: null !== (n = e.TITLE) && void 0 !== n ? n : "", subtitle: null !== (r = e.SUBTITLE) && void 0 !== r ? r : "", theme: null !== (s = e.THEME) && void 0 !== s ? s : "dark" }, item_layout: "slide" } };
            }),
            r = i.createElement(St.A, { data: n, layoutType: da.Pl, pageContext: mt.CONTEXT_PAGE_ARTIST_DISCOGRAPHY, alignment: "right", title: null !== (e = l.TITLE) && void 0 !== e ? e : void 0, subtitle: null !== (t = l.SUBTITLE) && void 0 !== t ? t : void 0 });
          return a ? r : i.createElement("a", { href: (0, ma.t)({ route: "login", redirect: "/fr/5111084", query: { utm_campaign: "unloggedwebdesktop_FR-LomepalVOD-092022", utm_content: "LomepalTADV", utm_source: "webdesktop", utm_medium: "slideshow" } }) }, r);
        }
        _renderRelatedArtists() {
          const { id: e } = this.props,
            { RELATED_ARTISTS: t } = this.props.data;
          if (0 === t.data.length) return null;
          const a = this._getNbRelated(this._getSize());
          return i.createElement(Wt, { artistId: String(e), nbRelated: a, legacyData: t.data.slice(0, a) });
        }
        _renderOwnerMessage() {
          const { DISABLE_CATALOG: e } = this.props.data;
          return e ? i.createElement("div", { className: "alert alert-info owner-message", role: "alert" }, ca || (ca = i.createElement("span", { className: "icon icon-before icon-info" })), (0, c.AP)("A la demande de l'artiste ou de ses reprĂŠsentants, une partie ou l'intĂŠgralitĂŠ de la discographie est actuellement exclue des services de streaming. Deezer continue de faire son maximum pour la rendre disponible le plus rapidement possible.")) : null;
        }
        _toggleDisplay(e, t) {
          const { hasAdsFull: a, display: i } = this.state;
          if (a) return;
          const l = t.client_width > 1200 ? ua.BIG : ua.SMALL;
          l !== i && this.setState({ display: l });
        }
        _getTotalTracks(e, t) {
          switch (t) {
            case d.Ay.Playlist:
              return e.SONGS.length;
            case d.Ay.Podcast:
              return e.EPISODES.length;
            case d.Ay.Album:
              return e.SONGS.count;
            case d.Ay.Episode:
              return 1;
            default:
              return 0;
          }
        }
        _getSize() {
          const { HIGHLIGHT: e = {} } = this.props.data;
          if (!e.ITEM) return ht.DEFAULT;
          const t = this._getTotalTracks(e.ITEM, e.TYPE);
          return t < 3 ? (e.ITEM.PRODUCER_LINE.length <= 60 ? ht.XXSMALL : ht.XSMALL) : t >= 3 && t <= 5 ? ht.SMALL : 6 === t ? ht.MEDIUM : ht.DEFAULT;
        }
        _getNbRelated(e) {
          const t = { [ht.XXSMALL]: 3, [ht.XSMALL]: 3, [ht.SMALL]: 4, [ht.MEDIUM]: 5, [ht.DEFAULT]: 6 };
          return this.state.display === ua.SMALL ? 3 : t[e];
        }
        _getDisplay(e) {
          return window.innerWidth > 1200 && !e ? ua.BIG : ua.SMALL;
        }
        _initAds(e, t) {
          const a = t.display;
          this.setState({ hasAdsFull: a, display: this._getDisplay(a) });
        }
      }
      const Ea = pa;
      var Aa = a("2NhJ"),
        ya = a("oq/a"),
        ha = a("zJSK"),
        va = a("wRgy"),
        ga = a("WY4A"),
        Ia = a("Ozpl"),
        _a = a("WQvr"),
        ba = a("JKL/"),
        Ta = a("6K8D"),
        Pa = a("U9ZG"),
        Sa = a("2Av+"),
        La = a("/b/U");
      const xa = "qmFln",
        fa = "OptWm",
        Ca = "Q2ZWv";
      var Na, Ra, Da, wa;
      class ka extends i.Component {
        render() {
          const { picture: e, name: t, id: a } = this.props;
          return e ? i.createElement(w.OJ, { value: { item: d.Ay.Artist, itemId: a } }, i.createElement(Oe.a, { className: "container" }, i.createElement(Aa.Ay, null, this._renderThumbnail(), i.createElement(ya.A, { className: xa }, i.createElement(ha.A, null, t), this._renderFans(), this._renderStatus()), this._renderSocials()), this._renderActions())) : null;
        }
        _renderThumbnail() {
          var e;
          const { name: t, picture: a } = this.props;
          return a ? i.createElement(va.A, { alt: t, borderRadius: "rounded", src: null === (e = a.urls) || void 0 === e || null === (e = e.large) || void 0 === e ? void 0 : e[0], type: d.Ay.Artist, "data-testid": "artist-cover" }) : null;
        }
        _renderSubtitle() {
          const { fansCount: e, status: t } = this.props;
          return e || (t && t.length) ? i.createElement(i.Fragment, null, this._renderFans(), this._renderStatus()) : null;
        }
        _renderFans() {
          const { fansCount: e } = this.props;
          return e ? i.createElement(ga.A, null, i.createElement(Ia.A, null, (0, c.WI)("%s fan", "%s fans", { sprintf: [(0, Bt.A)(e)], count: e }))) : null;
        }
        _renderStatus() {
          const { status: e } = this.props;
          return e && e.length ? i.createElement(_a.A, null, e) : null;
        }
        _renderActions() {
          var e;
          const { hasSmartRadio: t, id: a, name: l, picture: n } = this.props,
            r = ["favorite", "options"];
          return t && !r.includes("play") && r.unshift("play"), i.createElement(ba.A, null, i.createElement(Pa.A, { id: Number(a), type: d.Ay.Artist, data: { id: a, type: d.Ay.Artist, SMARTRADIO: t, name: l, picture: null == n || null === (e = n.urls) || void 0 === e || null === (e = e.large) || void 0 === e ? void 0 : e[0] }, action: r, context: { ID: a, TYPE: "artist_smartradio" } }));
        }
        _renderSocials() {
          const { social: e, onTour: t } = this.props;
          return e && (e.facebook || e.twitter || t) ? i.createElement("ul", { className: fa }, this._renderFacebook(), this._renderTwitter()) : null;
        }
        _renderFacebook() {
          const { social: e } = this.props;
          if (!e) return null;
          if (!e.facebook) return i.createElement("li", { className: "".concat(Ca, " disabled") }, i.createElement(Ta.m, { label: (0, c.AP)("Page Facebook indisponible") }, Na || (Na = i.createElement(Sa.i, null))));
          const t = e.facebook.includes("http") ? e.facebook : "//".concat(e.facebook);
          return i.createElement("li", { className: Ca }, i.createElement(Ta.m, { label: (0, c.AP)("Page Facebook") }, i.createElement("a", { href: t, target: "_blank", rel: "noreferrer" }, Ra || (Ra = i.createElement(Sa.i, null)))));
        }
        _renderTwitter() {
          const { social: e } = this.props;
          if (!e) return null;
          if (!e.twitter) return i.createElement("li", { className: "".concat(Ca, " disabled") }, i.createElement(Ta.m, { label: (0, c.AP)("Page Twitter indisponible") }, Da || (Da = i.createElement(La.u, null))));
          const t = e.twitter.includes("http") ? e.twitter : "//".concat(e.twitter);
          return i.createElement("li", { className: Ca }, i.createElement(Ta.m, { label: (0, c.AP)("Page Twitter") }, i.createElement("a", { href: t, target: "_blank", rel: "noreferrer" }, wa || (wa = i.createElement(La.u, null)))));
        }
      }
      const Oa = ka;
      var Ba,
        Ma = a("aEwM"),
        Fa = a("HXS3");
      const Ga = (e) => {
          var t;
          let { id: a } = e;
          const { data: l, loading: n, fetchMore: r } = (0, pe.ORW)({ variables: { artistId: a, relatedArtistFirst: 10, cursor: null } }),
            s = (0, i.useCallback)(() => r({ query: pe.yRK, variables: { artistId: a, relatedArtistFirst: 10, cursor: l && l.artist && l.artist.relatedArtists && l.artist.relatedArtists.pageInfo.endCursor } }), [l, r, a]);
          if (n) return Ba || (Ba = i.createElement(Qt.k, null));
          if (!l || !l.artist) return null;
          const o = null === (t = l.artist.relatedArtists) || void 0 === t ? void 0 : t.edges.map((e) => e.node),
            d =
              null != o && o.length
                ? o.map((e) => {
                    var t, l;
                    return e ? i.createElement(w.OJ, { key: e.id, value: { legacyContext: { ID: e.id, TYPE: "artist_similar_artist", CONTEXT_ID: a } } }, i.createElement(Fa.A, { artistName: e.name, hasExplicitPicture: Boolean(null === (t = e.picture) || void 0 === t ? void 0 : t.explicitStatus), id: e.id, isFavorite: Boolean(e.isFavorite), nbOfFans: e.fansCount, picture: null === (l = e.picture) || void 0 === l ? void 0 : l.large[0] })) : null;
                  })
                : null;
          return i.createElement("div", { className: "container" }, i.createElement(Oe.a, { mb: "spacing.l" }, i.createElement(C.A, { title: (0, c.AP)("Artistes similaires") })), i.createElement(Ma.A, { hasMore: !!l.artist.relatedArtists && l.artist.relatedArtists.pageInfo.hasNextPage, loadMore: s, placeholder: { img: be.B.RECOMMENDATION, wording: (0, c.AP)("Aucun artiste similaire n'est disponible") } }, i.createElement(Dt.kK, null, d)));
        },
        Ha = "jbzvm",
        Ua = "_hESX",
        Ya = "Pbkan",
        Ka = "zbtBF";
      var za;
      const qa = (e) => {
        let { id: t } = e;
        const { data: a, loading: l, error: n } = (0, pe.Wyk)({ variables: { artistId: t } });
        if (l) return za || (za = i.createElement(Q.A, null));
        if (n) throw n;
        if (!a || !a.artist || !a.artist.bio) return null;
        const r = (0, Be.A)("heading-1", Ha),
          s = (0, Be.A)("heading-1", Ya);
        return i.createElement("div", { className: "container" }, E.A.isAllowed("revamp2023") ? i.createElement(Oe.a, { mb: "spacing.l" }, i.createElement(C.A, { title: (0, c.AP)("Biographie") })) : i.createElement("div", { className: r }, (0, c.AP)("Biographie")), i.createElement("div", { className: Ua }, i.createElement("h2", { className: s }, a.artist.name), i.createElement("div", { className: Ka, dangerouslySetInnerHTML: { __html: a.artist.bio.full } })));
      };
      var Za = a("tCiE"),
        Va = a("kPsn");
      var Xa, Wa;
      let Ja =
        (0, n.Ay)()(
          (((Wa = class extends i.Component {
            constructor(e) {
              super(e), (this._onTabSelect = this._onTabSelect.bind(this));
            }
            render() {
              const { dataFromStore: e, dataFromGQL: t, selectedTab: a } = this.props,
                l = a && ((n = a), Object.values(Re.G).includes(n)) ? a : Re.G.DISCOGRAPHY;
              var n;
              return i.createElement(
                "div",
                { className: "naboo-catalog", id: "page_naboo_artist", itemScope: !0, itemType: "http://schema.org/MusicGroup" },
                i.createElement(
                  Oa,
                  ((e, t) => {
                    if (!(0, Za.B)(t)) throw new Error("Legacy artist has wrong format");
                    if (!e) throw new Error("GraphQL artist has wrong format");
                    return { id: e.id, name: e.name, bio: e.bio, picture: (0, Va.jg)(d.Ay.Artist, e.picture, t), fansCount: t.NB_FAN, social: e.social, onTour: e.onTour, status: e.status, hasSmartRadio: e.hasSmartRadio };
                  })(t.artist, e)
                ),
                i.createElement(De.A, { items: this._getTabList(), active: l }),
                i.createElement("div", { className: "catalog-content", role: "tabpanel" }, this._renderTabContent(l)),
                i.createElement(ke.A, { type: d.Ay.Artist, data: e })
              );
            }
            _renderTabContent(e) {
              var t;
              const { id: a, dataFromStore: l, shouldExplicitBeHidden: n, userIsConnected: r } = this.props;
              switch (e) {
                case Re.G.DISCOGRAPHY:
                  return i.createElement(Ea, { id: Number(a), data: l, shouldExplicitBeHidden: n, userIsConnected: r });
                case Re.G.TOP_TRACK:
                  return i.createElement(w.OJ, { value: { page: "artist_top_tracks" } }, i.createElement("div", { className: "container" }, i.createElement(ge, { id: a, context: this._getContext((0, u.Pe)(d.Ay.Artist, p.sI)) }), i.createElement(J, { id: a, context: this._getContext((0, u.Pe)(d.Ay.Artist, p.sI)), items: [...((l && (null === (t = l.TOP) || void 0 === t ? void 0 : t.data)) || [])], shouldExplicitBeHidden: n })));
                case Re.G.RELATED_ARTIST:
                  return i.createElement(Ga, { id: a });
                case Re.G.RELATED_PLAYLIST:
                  return i.createElement(we.A, { type: d.Ay.Artist, title: this._getTabLabel(e), pageContext: mt.CONTEXT_PAGE_ARTIST_TAB_RELATED_PLAYLIST, key: e, id: a, total: l.RELATED_PLAYLIST.total });
                case Re.G.CONCERTS:
                  return i.createElement(Ne, { artistId: a });
                case Re.G.BIOGRAPHY:
                  return i.createElement(qa, { id: a });
                case Re.G.FAVORITES:
                  return i.createElement("div", { className: "container" }, i.createElement(Ee, { id: a, shouldExplicitBeHidden: n }));
                default:
                  return null;
              }
            }
            _onTabSelect(e) {
              const { id: t } = this.props;
              let a = "/artist/".concat(this.props.id);
              e.id !== Re.G.DISCOGRAPHY && (a += "/".concat(e.id)), e.id === Re.G.CONCERT && this.props.tracking && this.props.tracking.trackEvent({ event: "click", eventlabel: "concert", eventaction: "click-navbar", eventcategory: "artist" }), e.id === Re.G.FAVORITES && ne(t), this.props.history.push((0, m.jd)(a));
            }
            _getTabList() {
              var e, t, a, i, l;
              const { dataFromStore: n, dataFromGQL: r } = this.props;
              return [
                { id: Re.G.DISCOGRAPHY, label: this._getTabLabel(Re.G.DISCOGRAPHY), action: this._onTabSelect },
                { id: Re.G.TOP_TRACK, label: this._getTabLabel(Re.G.TOP_TRACK), action: this._onTabSelect, disabled: !(null !== (e = n.TOP) && void 0 !== e && e.data.length) },
                { id: Re.G.RELATED_ARTIST, label: this._getTabLabel(Re.G.RELATED_ARTIST), action: this._onTabSelect, disabled: !(null != r && null !== (t = r.artist) && void 0 !== t && null !== (t = t.relatedArtists) && void 0 !== t && t.edges.length) },
                { id: Re.G.RELATED_PLAYLIST, label: this._getTabLabel(Re.G.RELATED_PLAYLIST), action: this._onTabSelect, disabled: !n.PLAYLISTS.length },
                { id: Re.G.CONCERTS, label: this._getTabLabel(Re.G.CONCERTS), action: this._onTabSelect, isButton: !0, disabled: !(null != r && null !== (a = r.artist) && void 0 !== a && null !== (a = a.liveEvents) && void 0 !== a && a.edges.filter((e) => e.node).length) },
                { id: Re.G.BIOGRAPHY, label: this._getTabLabel(Re.G.BIOGRAPHY), action: this._onTabSelect, disabled: !(null != r && null !== (i = r.artist) && void 0 !== i && null !== (i = i.bio) && void 0 !== i && i.full) },
                { id: Re.G.FAVORITES, label: this._getTabLabel(Re.G.FAVORITES), action: this._onTabSelect, disabled: !E.A.isAllowed("artist_page_favorite_content") || !(null !== (l = r.me) && void 0 !== l && null !== (l = l.userFavorites.byArtist) && void 0 !== l && l.estimatedTracksCount) },
              ];
            }
            _getTabLabel(e) {
              switch (e) {
                case Re.G.DISCOGRAPHY:
                  return (0, c.AP)("discographytype_title_discography_web");
                case Re.G.TOP_TRACK:
                  return (0, c.AP)("Top titres");
                case Re.G.RELATED_ARTIST:
                  return (0, c.AP)("Artistes similaires");
                case Re.G.RELATED_PLAYLIST:
                  return (0, c.AP)("Playlists");
                case Re.G.CONCERT:
                  return (0, c.AP)("artistpage_title_ontour_web");
                case Re.G.CONCERTS:
                  return (0, c.AP)("generic_title_concerts_web");
                case Re.G.BIOGRAPHY:
                  return (0, c.AP)("Bio");
                case Re.G.FAVORITES:
                  return (0, c.AP)("artistpageentrypoint_title_inyourfavorites_web");
                default:
                  return "";
              }
            }
            _getContext(e) {
              return { ID: this.props.id, TYPE: e };
            }
          }).defaultProps = { selectedTab: Re.G.DISCOGRAPHY }),
          (Xa = Wa))
        ) || Xa;
      const ja = (0, o.y)(
        (0, l.Ng)((e) => {
          let { user: t } = e;
          return { shouldExplicitBeHidden: (0, Me.Uw)(t) === At.g, userIsConnected: (0, Me.UJ)(t) };
        })(Ja)
      );
      var Qa;
      const $a = (e) => {
        let {
          appState: t,
          match: { params: a },
        } = e;
        const [o, c] = (0, i.useState)(null),
          d = (0, n.z1)(),
          m = (0, l.wA)(),
          u = (0, l.Pj)(),
          p = (0, l.d4)((e) => (0, s.UV)(e.entities, a));
        (0, i.useEffect)(() => {
          m(function () {
            (0, s._7)({ id: a.id, rehydrateData: t ? { ...t, partial: !1 } : void 0 })(...arguments).catch((e) => {
              c(e);
            });
          }),
            d.trackEvent({ event: "updatepage", pagename: "artist", pagecategory: "catalog" });
        }, [t, m, a.id, u, d]);
        const E = (0, i.useCallback)(
          (e, t) => {
            if (!p || Number(t.id) !== Number(a.id)) return;
            const i = "USER.addFavorite" === e.namespace ? (p.NB_FAN || 0) + 1 : (p.NB_FAN || 0) - 1;
            m((0, s.Zt)({ id: a.id, nbFan: i }));
          },
          [p, m, a.id]
        );
        (0, i.useEffect)(
          () => (
            r.A.subscribe(r.A.user.addFavorite, E),
            r.A.subscribe(r.A.user.deleteFavorite, E),
            () => {
              (0, s.w8)(), r.A.unsubscribe(r.A.user.addFavorite, E), r.A.unsubscribe(r.A.user.deleteFavorite, E);
            }
          ),
          [E]
        );
        const { data: A, loading: y, error: h } = (0, pe.wgW)({ variables: { artistId: a.id, relatedArtistFirst: 6, liveEventsFirst: 6 } });
        if (o) throw o;
        if (String(a.id) !== String(p && p.ART_ID) || (p && p.partial) || y) return Qa || (Qa = i.createElement(Q.A, null));
        if (h) throw h;
        if (!A || !A.artist) {
          const e = new Error("missing data in artist graphql call");
          throw ((e.cause = JSON.stringify(A)), e);
        }
        return i.createElement(i.Suspense, { fallback: null }, i.createElement(w.OJ, { value: { page: "artist", entity: "artist", entityId: a.id } }, i.createElement(ja, { dataFromStore: p, dataFromGQL: A, id: a.id, selectedTab: a.tab, fetchTopTracks: m.bind(null, s.Cn) })));
      };
      $a.displayName = "artist";
      const ei = $a;
    },
    ailv: (e, t, a) => {
      a.d(t, { SP: () => l, U$: () => c, Xw: () => r, rc: () => n, uV: () => o, v5: () => s });
      var i = a("LOQS");
      let l = (function (e) {
          return (e.CONCERT = "concert"), (e.CONCERT_WITH_LIVESTREAM = "concert_with_livestream"), (e.FESTIVAL = "festival"), (e.FESTIVAL_WITH_LIVESTREAM = "festival_with_livestream"), e;
        })({}),
        n = (function (e) {
          return (e.CLICK_CONCERT = "click_concert"), (e.BUY_TICKET = "buy_ticket"), (e.SEARCH = "search"), (e.REMINDER = "put_concert_reminder"), e;
        })({}),
        r = (function (e) {
          return (e.CONCERT_HUB_FOR_YOU = "concert_hub_for_you"), (e.CONCERT_DETAIL = "concert_detail"), (e.ARTIST = "artist"), (e.VIEW_ALL = "view_all_concerts"), (e.ALBUM = "album"), e;
        })({}),
        s = (function (e) {
          return (e.CITY = "city"), (e.CONCERT = "concert"), (e.ARTIST = "artist"), (e.ALBUM = "album"), e;
        })({});
      const o = (e) => {
          i.A.log({ type: "cdp", eventName: "concert_hub_used", customAttributes: e });
        },
        c = (e) => (null != e && e.isConcert ? l.CONCERT : null != e && e.isFestival ? l.FESTIVAL : null != e && e.isLivestreamConcert ? l.CONCERT_WITH_LIVESTREAM : null != e && e.isLivestreamFestival ? l.FESTIVAL_WITH_LIVESTREAM : void 0);
    },
    eerp: (e, t, a) => {
      a.d(t, { A: () => l });
      const i = { song: 0, track: 0, album: 1, artist: 2, playlist: 3, collaborativePlaylist: 3, radio: 4, smart_radio: 6, smartradio: 6, sradio: 6, show: 7, episode: 8 };
      function l(e) {
        return i[e];
      }
    },
    sk1u: (e, t, a) => {
      a.d(t, { A: () => i });
      const i = { thumbnail: "GryKF", "thumbnail-list": "U1nbu", thumbnailList: "U1nbu", "info-item": "dMJfv", infoItem: "dMJfv" };
    },
  },
]);
