(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        48312: function(t, e, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return r(34099)
            }])
        },
        30434: function(t, e, r) {
            "use strict";
            r.d(e, {
                Z: function() {
                    return i
                }
            });
            var n = r(85893),
                s = r(78633);

            function i() {
                return (0, n.jsx)("a", {
                    href: "https://t.me/dihtrade_bot",
                    target: "_blank",
                    children: (0, n.jsxs)("div", {
                        className: "pointer-events-auto flex flex-row items-center rounded-full bg-[#ffffff] px-4 py-3 cursor-pointer",
                        children: [(0, n.jsx)(s.iEj, {
                            size: 24,
                            color: "#000"
                        }), (0, n.jsx)("p", {
                            className: "text-black text-md ml-2",
                            style: {
                                fontWeight: 500
                            },
                            children: "Get Started"
                        })]
                    })
                })
            }
        },
        9852: function(t, e, r) {
            "use strict";
            r.d(e, {
                Z: function() {
                    return c
                }
            });
            var n = r(85893),
                s = r(41664),
                i = r.n(s),
                a = r(30434),
                o = r(94184),
                l = r.n(o);

            function c(t) {
                let {
                    tab: e,
                    setTab: r,
                    useLink: s = !1
                } = t;
                return (0, n.jsxs)("div", {
                    className: "z-0 pointer-events-none flex flex-row items-center justify-between w-full px-4 py-4 h-[80px]",
                    children: [(0, n.jsxs)("div", {
                        className: "flex flex-row items-center",
                        children: [s ? (0, n.jsx)(i(), {
                            href: "/",
                            className: l()("pointer-events-auto ml-8 text-lg font-normal cursor-pointer hover:text-white", {
                                "text-white": "home" === e,
                                "text-neutral-300": "home" !== e
                            }),
                            children: "Home"
                        }) : (0, n.jsx)("p", {
                            className: l()("pointer-events-auto ml-8 text-lg font-normal cursor-pointer hover:text-white", {
                                "text-white": "home" === e,
                                "text-neutral-300": "home" !== e
                            }),
                            onClick: () => r("home"),
                            children: "Home"
                        }), (0, n.jsx)("a", {
                            className: l()("pointer-events-auto ml-8 text-lg font-normal text-neutral-300 cursor-pointer hover:text-white", {
                                "text-white": "faq" === e,
                                "text-neutral-300": "faq" !== e
                            }),
                            href: "https://docs.dih",
                            target: "_blank",
                            children: "Docs"
                        })]
                    }), (0, n.jsx)("div", {
                        className: "md:block hidden",
                        children: (0, n.jsx)(a.Z, {})
                    })]
                })
            }
        },
        78895: function(t, e, r) {
            "use strict";
            r.d(e, {
                Z: function() {
                    return a
                }
            });
            var n = r(85893),
                s = r(9008),
                i = r.n(s);

            function a(t) {
                let {
                    title: e,
                    description: r,
                    ogImageUrl: s
                } = t;
                return (0, n.jsxs)(i(), {
                    children: [(0, n.jsx)("title", {
                        children: e
                    }), (0, n.jsx)("meta", {
                        name: "title",
                        content: e
                    }), (0, n.jsx)("meta", {
                        name: "description",
                        content: r
                    }), (0, n.jsx)("meta", {
                        property: "og:type",
                        content: "website"
                    }), (0, n.jsx)("meta", {
                        property: "og:url",
                        content: "https://dih.me"
                    }), (0, n.jsx)("meta", {
                        property: "og:title",
                        content: e
                    }), (0, n.jsx)("meta", {
                        property: "og:description",
                        content: r
                    }), (0, n.jsx)("meta", {
                        property: "og:locale",
                        content: "en_US"
                    }), (0, n.jsx)("meta", {
                        property: "og:image",
                        content: s
                    }), (0, n.jsx)("meta", {
                        property: "twitter:card",
                        content: "summary_large_image"
                    }), (0, n.jsx)("meta", {
                        property: "twitter:url",
                        content: "https://x.com"
                    }), (0, n.jsx)("meta", {
                        property: "twitter:title",
                        content: e
                    }), (0, n.jsx)("meta", {
                        property: "twitter:image",
                        content: s
                    }), (0, n.jsx)("meta", {
                        property: "twitter:site",
                        content: "@pvp_dot_trade"
                    }), (0, n.jsx)("meta", {
                        property: "twitter:creator",
                        content: "@pvp_dot_trade"
                    }), (0, n.jsx)("meta", {
                        property: "twitter:description",
                        content: r
                    })]
                })
            }
        },
        34099: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                default: function() {
                    return T
                }
            });
            var n = r(85893),
                s = r(9008),
                i = r.n(s),
                a = r(62086),
                o = r(15029),
                l = r(67294),
                c = r(99477),
                d = r(87011),
                x = r(26038),
                h = r(34715),
                u = r(99313);

            function m() {
                function t() {
                    const {
                        width: t,
                        height: e
                    } = (0, u.iP)();
                    return (0, n.jsxs)("group", {
                        children: [(0, n.jsxs)("mesh", {
                            rotation: [0, 0, 0],
                            position: [0, 0, -3],
                            children: [(0, n.jsx)("planeGeometry", {
                                args: [t, e]
                            }), (0, n.jsx)("meshStandardMaterial", {
                                transparent: !0,
                                opacity: .6
                            }), (0, n.jsx)("ambientLight", {
                                intensity: .1
                            })]
                        }), (0, n.jsx)("fog", {
                            attach: "fog",
                            args: ["#3c3c5d", 0, 25]
                        })]
                    })
                }

                function e() {
                    const t = (0, l.useRef)(),
                        {
                            viewport: e
                        } = (0, a.A)();
                    return (0, a.C)((r => {
                        let {
                            mouse: n
                        } = r;
                        const s = n.x * e.width / 2,
                            i = n.y * e.height / 2;
                        t.current.position.set(s, i, 4), t.current.rotation.set(-i, s, 4)
                    })), (0, n.jsx)("pointLight", {
                        position: [0, 0, 10],
                        intensity: 4 * Math.PI,
                        color: "white",
                        distance: 10,
                        ref: t
                    })
                }

                function r() {
                    var t, e;
                    const r = (0, l.useRef)(),
                        s = (0, l.useRef)(),
                        i = (0, a.F)(d.L, "/skull.obj"),
                        o = (0, l.useRef)(),
                        u = (0, l.useRef)(),
                        [m, p] = (0, l.useState)(!1);
                    (0, h.V)((() => {
                        x.ZP.timeline({
                            onComplete: () => p(!0)
                        }).fromTo(r.current.scale, {
                            x: .08,
                            y: .08,
                            z: .08
                        }, {
                            x: .015,
                            y: .015,
                            z: .015,
                            duration: 6,
                            ease: "expo.out"
                        }).fromTo([o.current.material, u.current.material], {
                            opacity: 0
                        }, {
                            opacity: 1,
                            duration: 3
                        }, "-=9");
                        s.current.children.forEach((t => {
                            t.isMesh && (t.material = new c.MeshPhongMaterial, t.material.color.set("white"), t.material.transparent = !0, t.material.wireframe = !0, t.material.opacity = 0, x.ZP.fromTo(t.material, {
                                opacity: 0
                            }, {
                                opacity: .2,
                                duration: 2,
                                delay: 2
                            }))
                        }))
                    }), {
                        dependencies: m,
                        revertOnUpdate: !1
                    });
                    let f = new c.Vector3;
                    if ((0, a.C)((t => {
                            let {
                                mouse: e
                            } = t;
                            var n;
                            m && (f.x += .05 * (e.x - f.x), f.y += .05 * (e.y - f.y), null === (n = r.current) || void 0 === n || n.lookAt(f.x, f.y, 1))
                        })), i) return (0, n.jsxs)("group", {
                        position: [0, 0, 0],
                        ref: r,
                        children: [(0, n.jsx)("mesh", {
                            children: (0, n.jsx)("primitive", {
                                object: i,
                                ref: s
                            })
                        }), (0, n.jsxs)("points", {
                            ref: o,
                            children: [(0, n.jsx)("bufferGeometry", {
                                children: (0, n.jsx)("bufferAttribute", {
                                    attach: "attributes-position",
                                    count: 19281,
                                    itemSize: 3,
                                    array: null === (t = i.children[0]) || void 0 === t ? void 0 : t.geometry.attributes.position.array
                                })
                            }), (0, n.jsx)("pointsMaterial", {
                                size: .01,
                                color: "white",
                                transparent: !0,
                                sizeAttenuation: !0
                            })]
                        }), (0, n.jsxs)("points", {
                            ref: u,
                            children: [(0, n.jsx)("bufferGeometry", {
                                children: (0, n.jsx)("bufferAttribute", {
                                    attach: "attributes-position",
                                    count: 19281,
                                    itemSize: 3,
                                    array: null === (e = i.children[1]) || void 0 === e ? void 0 : e.geometry.attributes.position.array
                                })
                            }), (0, n.jsx)("pointsMaterial", {
                                size: .01,
                                color: "white",
                                transparent: !0,
                                sizeAttenuation: !0
                            })]
                        })]
                    })
                }
                const {
                    width: s,
                    height: i
                } = (0, u.iP)();
                return (0, n.jsxs)(o.Xz, {
                    style: {
                        width: "100dvw",
                        height: "100dvh",
                        minHeight: i,
                        minWidth: s,
                        position: "absolute",
                        top: 0,
                        left: 0
                    },
                    camera: {
                        position: [0, 0, 6]
                    },
                    children: [(0, n.jsx)(r, {}), (0, n.jsx)(e, {}), (0, n.jsx)(t, {})]
                })
            }
            var p = r(61470),
                f = r.n(p);

            function j() {
                const [t, e] = (0, l.useState)(null), r = (0, l.useRef)(null), {
                    width: s,
                    height: i
                } = (0, u.iP)();
                return (0, h.V)((() => {
                    x.ZP.fromTo(r.current, {
                        opacity: 0
                    }, {
                        opacity: 1,
                        duration: 5,
                        delay: .5
                    })
                })), (0, l.useEffect)((() => (t || e(f()({
                    el: r.current,
                    THREE: c,
                    highlightColor: 14274494,
                    midtoneColor: 986381,
                    lowlightColor: 921103,
                    baseColor: 4408392
                })), () => {
                    t && t.destroy()
                })), [t]), (0, l.useEffect)((() => {
                    t && t.setOptions({
                        minHeight: i,
                        minWidth: s,
                        height: i,
                        width: s
                    })
                }), [s, i]), (0, n.jsx)("div", {
                    className: "absolute",
                    ref: r,
                    style: {
                        width: "100dvw",
                        height: "100dvh"
                    }
                })
            }
            var g = r(94184),
                y = r.n(g),
                v = r(9852),
                w = r(30434),
                b = r(52091);

            function N() {
                const [t, e] = (0, l.useState)("home"), [r, s] = (0, l.useState)(!1), i = (0, l.useRef)([]);
                let a;
                return (0, l.useEffect)((() => {
                    setTimeout((() => {
                        s(!0)
                    }), 2500)
                }), []), (0, h.V)((() => {
                    x.ZP.fromTo(i.current, {
                        opacity: 0,
                        y: 50
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 2,
                        stagger: 0,
                        delay: 5
                    })
                })), "home" === t ? a = (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("h1", {
                        className: "text-[48px] md:text-[90px] text-white font-light mt-4 leading-[88px]",
                        ref: t => i.current[0] = t,
                        children: ["dih", (0, n.jsx)("span", {
                            className: "text-accent-400 font-light",
                            children: ""
                        })]
                    }), (0, n.jsxs)("div", {
                        className: "flex flex-row items-center justify-start gap-4 mb-8 -mt-2 leading-3",
                        ref: t => i.current[1] = t,
                        children: [(0, n.jsx)("span", {
                            className: "text-[16px] text-white font-light",
                            children: "Powered by"
                        }), (0, n.jsx)("img", {
                            src: "/hl_logo.svg",
                            className: "h-4 -ml-2"
                        })]
                    }), (0, n.jsx)("h2", {
                        className: "text-[16px] text-white mb-0 font-normal font-medium max-w-[780px]",
                        ref: t => i.current[2] = t,
                        children: "Long and short tokens together in your browser. Share alpha, copy, and countertrade your friends."
                    }), (0, n.jsx)("h2", {
                        className: "text-[16px] text-white mb-6 italic max-w-[780px]",
                        ref: t => i.current[3] = t,
                        children: "Don't get liquidated."
                    }), (0, n.jsx)("div", {
                        ref: t => i.current[4] = t,
                        children: (0, n.jsx)(w.Z, {})
                    }), (0, n.jsxs)("div", {
                        className: "flex flex-row items-center justify-start mt-8 gap-4 pointer-events-auto",
                        ref: t => i.current[5] = t,
                        children: [(0, n.jsx)("a", {
                            href: "https://twitter.com/pvp_dot_trade",
                            target: "_blank",
                            children: (0, n.jsx)(b.fWC, {
                                className: "text-2xl text-neutral-400"
                            })
                        }), (0, n.jsx)("a", {
                            href: "https://discord.gg/pvptrade",
                            target: "_blank",
                            children: (0, n.jsx)(b.j2d, {
                                className: "text-2xl text-neutral-400"
                            })
                        })]
                    })]
                }) : "faq" === t && (a = (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("h1", {
                        className: "text-[48px] md:text-[90px] text-white font-light mt-4 leading-[88px]",
                        ref: t => i.current[0] = t,
                        children: "FAQ"
                    }), (0, n.jsxs)("div", {
                        children: [(0, n.jsxs)("div", {
                            children: [(0, n.jsx)("h3", {
                                className: "text-2xl font-semibold text-white mt-12",
                                children: "What is dih?"
                            }), (0, n.jsx)("p", {
                                className: "text-lg font-normal text-neutral-100 mt-4",
                                children: "dih is a Telegram bot you can add to your trading groups. Once added, you and your group members can track each others' positions and place trades in real-time. Share alpha, copy, or countertrade your friends, all in the comfort of your existing Telegram group."
                            })]
                        }), (0, n.jsx)("div", {
                            className: "h-[1px] bg-neutral-500 mt-8"
                        }), (0, n.jsxs)("div", {
                            children: [(0, n.jsx)("h3", {
                                className: "text-2xl font-semibold text-white mt-8",
                                children: "How do I use the bot?"
                            }), (0, n.jsx)("p", {
                                className: "text-lg font-normal text-neutral-100 mt-4",
                                children: "To get started, simply DM the bot to get started and set up your existing Hyperliquid account. You will be asked for your wallet address and to connect an API key. Then, you can add the bot to any group chats you're in."
                            })]
                        }), (0, n.jsx)("div", {
                            className: "h-[1px] bg-neutral-500 mt-8"
                        }), (0, n.jsxs)("div", {
                            children: [(0, n.jsx)("h3", {
                                className: "text-2xl font-semibold text-white mt-8",
                                children: "Is dih secure?"
                            }), (0, n.jsx)("p", {
                                className: "text-lg font-normal text-neutral-100 mt-4",
                                children: "Yes. You can give the bot trade-only access. The bot does not have permission to withdraw any funds."
                            })]
                        }), (0, n.jsx)("div", {
                            className: "h-[1px] bg-neutral-500 mt-8"
                        }), (0, n.jsxs)("div", {
                            children: [(0, n.jsx)("h3", {
                                className: "text-2xl font-semibold text-white mt-8",
                                children: "Will there be a token?"
                            }), (0, n.jsx)("p", {
                                className: "text-lg font-normal text-neutral-100 mt-4",
                                children: "We have secured the PVP ticker on Hyperliquid. There will be a points program to reward users for using and promoting the bot."
                            })]
                        }), (0, n.jsx)("div", {
                            className: "h-[1px] bg-neutral-500 mt-8"
                        }), (0, n.jsxs)("div", {
                            children: [(0, n.jsx)("h3", {
                                className: "text-2xl font-semibold text-white mt-8",
                                children: "Are there fees for using the bot?"
                            }), (0, n.jsx)("p", {
                                className: "text-lg font-normal text-neutral-100 mt-4",
                                children: "There is a 0.05% fee on futures, and a 0.5% fee on spot."
                            })]
                        })]
                    }), (0, n.jsx)("div", {
                        className: "my-8 w-fit mx-auto mb-24",
                        children: (0, n.jsx)(w.Z, {})
                    })]
                })), (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("div", {
                        ref: t => i.current[6] = t,
                        className: y()({
                            hidden: !r
                        }),
                        children: (0, n.jsx)(v.Z, {
                            tab: t,
                            setTab: e
                        })
                    }), (0, n.jsx)("div", {
                        className: y()("z-0 flex flex-col items-start justify-start px-12", {
                            hidden: !r,
                            "overflow-scroll flex-1": "faq" === t,
                            "py-8 mb-12 pointer-events-none": "home" === t
                        }),
                        children: a
                    })]
                })
            }
            var _ = r(78895),
                k = r(11163);

            function T() {
                (0, k.useRouter)();
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(_.Z, {
                        title: "Home | dih",
                        description: "Don't get liquidated.",
                        ogImageUrl: "https://cdn.dih/og.png"
                    }), (0, n.jsx)(i(), {
                        children: (0, n.jsx)("title", {
                            children: "Home | dih"
                        })
                    }), (0, n.jsxs)("div", {
                        className: "flex flex-col justify-between",
                        style: {
                            height: "100dvh",
                            width: "100dvw"
                        },
                        children: [(0, n.jsx)(j, {}), (0, n.jsx)(m, {}), (0, n.jsx)(N, {})]
                    })]
                })
            }
        }
    },
    function(t) {
        t.O(0, [365, 738, 737, 953, 817, 774, 888, 179], (function() {
            return e = 48312, t(t.s = e);
            var e
        }));
        var e = t.O();
        _N_E = e
    }
]);