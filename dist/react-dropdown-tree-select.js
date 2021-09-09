!(function(e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t(require('react')))
    : 'function' == typeof define && define.amd
    ? define('ReactDropdownTreeSelect', ['react'], t)
    : 'object' == typeof exports
    ? (exports.ReactDropdownTreeSelect = t(require('react')))
    : (e.ReactDropdownTreeSelect = t(e.React))
})(this, function(e) {
  return (function(e) {
    var t = {}
    function n(r) {
      if (t[r]) return t[r].exports
      var o = (t[r] = { i: r, l: !1, exports: {} })
      return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r })
      }),
      (n.r = function(e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 })
      }),
      (n.t = function(e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e
        var r = Object.create(null)
        if ((n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
          for (var o in e)
            n.d(
              r,
              o,
              function(t) {
                return e[t]
              }.bind(null, o)
            )
        return r
      }),
      (n.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default
              }
            : function() {
                return e
              }
        return n.d(t, 'a', t), t
      }),
      (n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }),
      (n.p = ''),
      n((n.s = 10))
    )
  })([
    function(e, t, n) {
      e.exports = n(4)()
    },
    function(t, n) {
      t.exports = e
    },
    function(e, t, n) {
      var r
      ;(r = function(e) {
        return (function(e) {
          var t = {}
          function n(r) {
            if (t[r]) return t[r].exports
            var o = (t[r] = { exports: {}, id: r, loaded: !1 })
            return e[r].call(o.exports, o, o.exports, n), (o.loaded = !0), o.exports
          }
          return (n.m = e), (n.c = t), (n.p = ''), n(0)
        })([
          function(e, t, n) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: !0 })
            var r =
                Object.assign ||
                function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t]
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                  }
                  return e
                },
              o = (function() {
                function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n]
                    ;(r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      'value' in r && (r.writable = !0),
                      Object.defineProperty(e, r.key, r)
                  }
                }
                return function(t, n, r) {
                  return n && e(t.prototype, n), r && e(t, r), t
                }
              })(),
              a = function(e, t, n) {
                for (var r = !0; r; ) {
                  var o = e,
                    a = t,
                    i = n
                  ;(r = !1), null === o && (o = Function.prototype)
                  var l = Object.getOwnPropertyDescriptor(o, a)
                  if (void 0 !== l) {
                    if ('value' in l) return l.value
                    var s = l.get
                    if (void 0 === s) return
                    return s.call(i)
                  }
                  var c = Object.getPrototypeOf(o)
                  if (null === c) return
                  ;(e = c), (t = a), (n = i), (r = !0), (l = c = void 0)
                }
              }
            function i(e) {
              return e && e.__esModule ? e : { default: e }
            }
            var l = n(8),
              s = i(l),
              c = i(n(6)),
              u = i(n(2)),
              d = n(1),
              h = (function(e) {
                function t(e) {
                  !(function(e, t) {
                    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
                  })(this, t),
                    a(Object.getPrototypeOf(t.prototype), 'constructor', this).call(this),
                    (this.state = {
                      showLoader: !1,
                      lastScrollTop: 0,
                      actionTriggered: !1,
                      pullToRefreshThresholdBreached: !1,
                    }),
                    (this.startY = 0),
                    (this.currentY = 0),
                    (this.dragging = !1),
                    (this.maxPullDownDistance = 0),
                    (this.onScrollListener = this.onScrollListener.bind(this)),
                    (this.throttledOnScrollListener = (0, u.default)(this.onScrollListener, 150).bind(this)),
                    (this.onStart = this.onStart.bind(this)),
                    (this.onMove = this.onMove.bind(this)),
                    (this.onEnd = this.onEnd.bind(this)),
                    (this.getScrollableTarget = this.getScrollableTarget.bind(this))
                }
                return (
                  (function(e, t) {
                    if ('function' != typeof t && null !== t)
                      throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
                    ;(e.prototype = Object.create(t && t.prototype, {
                      constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
                    })),
                      t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
                  })(t, l.Component),
                  o(t, [
                    {
                      key: 'componentDidMount',
                      value: function() {
                        if (
                          ((this._scrollableNode = this.getScrollableTarget()),
                          (this.el = this.props.height ? this._infScroll : this._scrollableNode || window),
                          this.el.addEventListener('scroll', this.throttledOnScrollListener),
                          'number' == typeof this.props.initialScrollY &&
                            this.el.scrollHeight > this.props.initialScrollY &&
                            this.el.scrollTo(0, this.props.initialScrollY),
                          this.props.pullDownToRefresh &&
                            (this.el.addEventListener('touchstart', this.onStart),
                            this.el.addEventListener('touchmove', this.onMove),
                            this.el.addEventListener('touchend', this.onEnd),
                            this.el.addEventListener('mousedown', this.onStart),
                            this.el.addEventListener('mousemove', this.onMove),
                            this.el.addEventListener('mouseup', this.onEnd),
                            (this.maxPullDownDistance = this._pullDown.firstChild.getBoundingClientRect().height),
                            this.forceUpdate(),
                            'function' != typeof this.props.refreshFunction))
                        )
                          throw new Error(
                            'Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\''
                          )
                      },
                    },
                    {
                      key: 'componentWillUnmount',
                      value: function() {
                        this.el.removeEventListener('scroll', this.throttledOnScrollListener),
                          this.props.pullDownToRefresh &&
                            (this.el.removeEventListener('touchstart', this.onStart),
                            this.el.removeEventListener('touchmove', this.onMove),
                            this.el.removeEventListener('touchend', this.onEnd),
                            this.el.removeEventListener('mousedown', this.onStart),
                            this.el.removeEventListener('mousemove', this.onMove),
                            this.el.removeEventListener('mouseup', this.onEnd))
                      },
                    },
                    {
                      key: 'componentWillReceiveProps',
                      value: function(e) {
                        ;(this.props.key === e.key && this.props.dataLength === e.dataLength) ||
                          this.setState({ showLoader: !1, actionTriggered: !1, pullToRefreshThresholdBreached: !1 })
                      },
                    },
                    {
                      key: 'getScrollableTarget',
                      value: function() {
                        return this.props.scrollableTarget instanceof HTMLElement
                          ? this.props.scrollableTarget
                          : 'string' == typeof this.props.scrollableTarget
                          ? document.getElementById(this.props.scrollableTarget)
                          : (null === this.props.scrollableTarget &&
                              console.warn(
                                'You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      '
                              ),
                            null)
                      },
                    },
                    {
                      key: 'onStart',
                      value: function(e) {
                        this.state.lastScrollTop ||
                          ((this.dragging = !0),
                          (this.startY = e.pageY || e.touches[0].pageY),
                          (this.currentY = this.startY),
                          (this._infScroll.style.willChange = 'transform'),
                          (this._infScroll.style.transition = 'transform 0.2s cubic-bezier(0,0,0.31,1)'))
                      },
                    },
                    {
                      key: 'onMove',
                      value: function(e) {
                        this.dragging &&
                          ((this.currentY = e.pageY || e.touches[0].pageY),
                          this.currentY < this.startY ||
                            (this.currentY - this.startY >= this.props.pullDownToRefreshThreshold &&
                              this.setState({ pullToRefreshThresholdBreached: !0 }),
                            this.currentY - this.startY > 1.5 * this.maxPullDownDistance ||
                              ((this._infScroll.style.overflow = 'visible'),
                              (this._infScroll.style.transform =
                                'translate3d(0px, ' + (this.currentY - this.startY) + 'px, 0px)'))))
                      },
                    },
                    {
                      key: 'onEnd',
                      value: function(e) {
                        var t = this
                        ;(this.startY = 0),
                          (this.currentY = 0),
                          (this.dragging = !1),
                          this.state.pullToRefreshThresholdBreached &&
                            this.props.refreshFunction &&
                            this.props.refreshFunction(),
                          requestAnimationFrame(function() {
                            t._infScroll &&
                              ((t._infScroll.style.overflow = 'auto'),
                              (t._infScroll.style.transform = 'none'),
                              (t._infScroll.style.willChange = 'none'))
                          })
                      },
                    },
                    {
                      key: 'isElementAtBottom',
                      value: function(e) {
                        var t = arguments.length <= 1 || void 0 === arguments[1] ? 0.8 : arguments[1],
                          n =
                            e === document.body || e === document.documentElement
                              ? window.screen.availHeight
                              : e.clientHeight,
                          r = (0, d.parseThreshold)(t)
                        return r.unit === d.ThresholdUnits.Pixel
                          ? e.scrollTop + n >= e.scrollHeight - r.value
                          : e.scrollTop + n >= (r.value / 100) * e.scrollHeight
                      },
                    },
                    {
                      key: 'onScrollListener',
                      value: function(e) {
                        var t = this
                        'function' == typeof this.props.onScroll &&
                          setTimeout(function() {
                            return t.props.onScroll(e)
                          }, 0)
                        var n =
                          this.props.height || this._scrollableNode
                            ? e.target
                            : document.documentElement.scrollTop
                            ? document.documentElement
                            : document.body
                        this.state.actionTriggered ||
                          (this.isElementAtBottom(n, this.props.scrollThreshold) &&
                            this.props.hasMore &&
                            (this.setState({ actionTriggered: !0, showLoader: !0 }), this.props.next()),
                          this.setState({ lastScrollTop: n.scrollTop }))
                      },
                    },
                    {
                      key: 'render',
                      value: function() {
                        var e = this,
                          t = r(
                            { height: this.props.height || 'auto', overflow: 'auto', WebkitOverflowScrolling: 'touch' },
                            this.props.style
                          ),
                          n = this.props.hasChildren || !(!this.props.children || !this.props.children.length),
                          o = this.props.pullDownToRefresh && this.props.height ? { overflow: 'auto' } : {}
                        return s.default.createElement(
                          'div',
                          { style: o },
                          s.default.createElement(
                            'div',
                            {
                              className: 'infinite-scroll-component ' + (this.props.className || ''),
                              ref: function(t) {
                                return (e._infScroll = t)
                              },
                              style: t,
                            },
                            this.props.pullDownToRefresh &&
                              s.default.createElement(
                                'div',
                                {
                                  style: { position: 'relative' },
                                  ref: function(t) {
                                    return (e._pullDown = t)
                                  },
                                },
                                s.default.createElement(
                                  'div',
                                  {
                                    style: {
                                      position: 'absolute',
                                      left: 0,
                                      right: 0,
                                      top: -1 * this.maxPullDownDistance,
                                    },
                                  },
                                  !this.state.pullToRefreshThresholdBreached && this.props.pullDownToRefreshContent,
                                  this.state.pullToRefreshThresholdBreached && this.props.releaseToRefreshContent
                                )
                              ),
                            this.props.children,
                            !this.state.showLoader && !n && this.props.hasMore && this.props.loader,
                            this.state.showLoader && this.props.hasMore && this.props.loader,
                            !this.props.hasMore && this.props.endMessage
                          )
                        )
                      },
                    },
                  ]),
                  t
                )
              })()
            ;(t.default = h),
              (h.defaultProps = {
                pullDownToRefreshContent: s.default.createElement('h3', null, 'Pull down to refresh'),
                releaseToRefreshContent: s.default.createElement('h3', null, 'Release to refresh'),
                pullDownToRefreshThreshold: 100,
                disableBrowserPullToRefresh: !0,
              }),
              (h.propTypes = {
                next: c.default.func,
                hasMore: c.default.bool,
                children: c.default.node,
                loader: c.default.node.isRequired,
                scrollThreshold: c.default.oneOfType([c.default.number, c.default.string]),
                endMessage: c.default.node,
                style: c.default.object,
                height: c.default.number,
                scrollableTarget: c.default.node,
                hasChildren: c.default.bool,
                pullDownToRefresh: c.default.bool,
                pullDownToRefreshContent: c.default.node,
                releaseToRefreshContent: c.default.node,
                pullDownToRefreshThreshold: c.default.number,
                refreshFunction: c.default.func,
                onScroll: c.default.func,
                dataLength: c.default.number.isRequired,
                key: c.default.string,
              }),
              (e.exports = t.default)
          },
          function(e, t) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.parseThreshold = function(e) {
                if ('number' == typeof e) return { unit: n.Percent, value: 100 * e }
                if ('string' == typeof e)
                  return e.match(/^(\d*(\.\d+)?)px$/)
                    ? { unit: n.Pixel, value: parseFloat(e) }
                    : e.match(/^(\d*(\.\d+)?)%$/)
                    ? { unit: n.Percent, value: parseFloat(e) }
                    : (console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'), r)
                return console.warn('scrollThreshold should be string or number'), r
              })
            var n = { Pixel: 'Pixel', Percent: 'Percent' }
            t.ThresholdUnits = n
            var r = { unit: n.Percent, value: 0.8 }
          },
          function(e, t) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.default = function(e, t, n) {
                var r, o
                return (
                  t || (t = 250),
                  function() {
                    var a = n || this,
                      i = +new Date(),
                      l = arguments
                    r && i < r + t
                      ? (clearTimeout(o),
                        (o = setTimeout(function() {
                          ;(r = i), e.apply(a, l)
                        }, t)))
                      : ((r = i), e.apply(a, l))
                  }
                )
              }),
              (e.exports = t.default)
          },
          function(e, t) {
            'use strict'
            function n(e) {
              return function() {
                return e
              }
            }
            var r = function() {}
            ;(r.thatReturns = n),
              (r.thatReturnsFalse = n(!1)),
              (r.thatReturnsTrue = n(!0)),
              (r.thatReturnsNull = n(null)),
              (r.thatReturnsThis = function() {
                return this
              }),
              (r.thatReturnsArgument = function(e) {
                return e
              }),
              (e.exports = r)
          },
          function(e, t, n) {
            'use strict'
            var r = function(e) {}
            e.exports = function(e, t, n, o, a, i, l, s) {
              if ((r(t), !e)) {
                var c
                if (void 0 === t)
                  c = new Error(
                    'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
                  )
                else {
                  var u = [n, o, a, i, l, s],
                    d = 0
                  ;(c = new Error(
                    t.replace(/%s/g, function() {
                      return u[d++]
                    })
                  )).name = 'Invariant Violation'
                }
                throw ((c.framesToPop = 1), c)
              }
            }
          },
          function(e, t, n) {
            'use strict'
            var r = n(3),
              o = n(4),
              a = n(7)
            e.exports = function() {
              function e(e, t, n, r, i, l) {
                l !== a &&
                  o(
                    !1,
                    'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
                  )
              }
              function t() {
                return e
              }
              e.isRequired = e
              var n = {
                array: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
              }
              return (n.checkPropTypes = r), (n.PropTypes = n), n
            }
          },
          function(e, t, n) {
            e.exports = n(5)()
          },
          function(e, t) {
            'use strict'
            e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
          },
          function(t, n) {
            t.exports = e
          },
        ])
      }),
        (e.exports = r(n(1)))
    },
    function(e, t, n) {
      'use strict'
      e.exports = function(e, t) {
        var n = e.filter(t)
        return 0 !== n.length && n.length !== e.length
      }
    },
    function(e, t, n) {
      'use strict'
      var r = n(5)
      function o() {}
      function a() {}
      ;(a.resetWarningCache = o),
        (e.exports = function() {
          function e(e, t, n, o, a, i) {
            if (i !== r) {
              var l = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
              )
              throw ((l.name = 'Invariant Violation'), l)
            }
          }
          function t() {
            return e
          }
          e.isRequired = e
          var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: a,
            resetWarningCache: o,
          }
          return (n.PropTypes = n), n
        })
    },
    function(e, t, n) {
      'use strict'
      e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
    },
    function(e, t, n) {},
    function(e, t, n) {},
    function(e, t, n) {},
    function(e, t, n) {},
    function(e, t, n) {
      'use strict'
      n.r(t)
      var r,
        o,
        a,
        i = n(0),
        l = n.n(i),
        s = n(1),
        c = n.n(s),
        u = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object.keys(e).reduce(function(t, n) {
            var r
            return (t['data-' + ((r = n), r.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase())] = e[n]), t
          }, {})
        },
        d = ((function() {})(),
        function(e) {
          return !e || (Array.isArray(e) && !e.length)
        }),
        h = function(e, t) {
          return (
            e instanceof Event &&
            !(function(e) {
              if (e.path) return e.path
              for (var t = e.target, n = [t]; t.parentElement; ) (t = t.parentElement), n.unshift(t)
              return n
            })(e).some(function(e) {
              return e === t
            })
          )
        },
        p = function(e, t) {
          var n = void 0
          return function() {
            for (var r = arguments.length, o = Array(r), a = 0; a < r; a++) o[a] = arguments[a]
            var i = !n
            clearTimeout(n),
              (n = setTimeout(function() {
                ;(n = null), e.apply(void 0, o)
              }, t)),
              i && e.apply(void 0, o)
          }
        },
        f = ((r = 'rdts'),
        (o = 1),
        (a = new WeakMap()),
        {
          get: function(e) {
            return a.has(e) || a.set(e, o++), '' + r + a.get(e)
          },
          reset: function() {
            ;(a = new WeakMap()), (o = 1)
          },
        })
      var g = function(e, t, n) {
        if (Array.prototype.findIndex) return e.findIndex(t, n)
        if (!e) throw new TypeError('findIndex called on null or undefined')
        if ('function' != typeof t) throw new TypeError('findIndex predicate must be a function')
        for (var r = 0; r < e.length; r++) {
          var o = e[r]
          if (t.call(n, o, r, e)) return r
        }
        return -1
      }
      function y(e, t) {
        var n = (function(e) {
          if (!e) return {}
          if ('#' === e[0]) return { 'aria-labelledby': e.substring(1).replace(/ #/g, ' ') }
          return { 'aria-label': e }
        })(e)
        return t && (n['aria-labelledby'] = ((n['aria-labelledby'] || '') + ' ' + t).trim()), n
      }
      var b =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        v = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      var m = (function(e) {
        function t(e) {
          !(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
          var n = (function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
          return (
            (n.handleInputChange = function(e) {
              e.persist(), n.delayedCallback(e)
            }),
            (n.delayedCallback = p(function(e) {
              return n.props.onInputChange(e.target.value)
            }, 300)),
            n
          )
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, s['PureComponent']),
          v(t, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.inputRef,
                  n = e.texts,
                  r = void 0 === n ? {} : n,
                  o = e.onFocus,
                  a = e.onBlur,
                  i = e.disabled,
                  l = e.readOnly,
                  s = e.onKeyDown,
                  u = e.activeDescendant,
                  d = e.inlineSearchInput
                return c.a.createElement(
                  'input',
                  b(
                    {
                      type: 'text',
                      disabled: i,
                      ref: t,
                      className: 'search',
                      placeholder: d ? r.inlineSearchPlaceholder || 'Search...' : r.placeholder || 'Choose...',
                      onKeyDown: s,
                      onChange: this.handleInputChange,
                      onFocus: o,
                      onBlur: a,
                      readOnly: l,
                      'aria-activedescendant': u,
                      'aria-autocomplete': s ? 'list' : void 0,
                    },
                    y(r.label)
                  )
                )
              },
            },
          ]),
          t
        )
      })()
      m.propTypes = {
        tags: l.a.array,
        texts: l.a.object,
        onInputChange: l.a.func,
        onFocus: l.a.func,
        onBlur: l.a.func,
        onTagRemove: l.a.func,
        onKeyDown: l.a.func,
        inputRef: l.a.func,
        disabled: l.a.bool,
        readOnly: l.a.bool,
        activeDescendant: l.a.string,
        inlineSearchInput: l.a.bool,
      }
      var w = m,
        O = (n(6),
        (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })())
      function k(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var T = function(e) {
          return e + '_tag'
        },
        _ = (function(e) {
          function t() {
            var e, n, r
            !(function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            })(this, t)
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i]
            return (
              (n = r = k(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
              (r.handleClick = function(e) {
                var t = r.props,
                  n = t.id,
                  o = t.onDelete
                e.stopPropagation(), e.nativeEvent.stopImmediatePropagation(), o(n, void 0 !== (e.key || e.keyCode))
              }),
              (r.onKeyDown = function(e) {
                'Backspace' === e.key && (r.handleClick(e), e.preventDefault())
              }),
              (r.onKeyUp = function(e) {
                ;(32 === e.keyCode || ['Delete', 'Enter'].indexOf(e.key) > -1) && (r.handleClick(e), e.preventDefault())
              }),
              k(r, n)
            )
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
            })(t, s['PureComponent']),
            O(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.id,
                    n = e.label,
                    r = e.labelRemove,
                    o = void 0 === r ? 'Remove' : r,
                    a = e.readOnly,
                    i = e.disabled,
                    l = T(t),
                    s = t + '_button',
                    u = ['tag-remove', a && 'readOnly', i && 'disabled'].filter(Boolean).join(' '),
                    d = a || i
                  return c.a.createElement(
                    'span',
                    { className: 'tag', id: l, 'aria-label': n },
                    n,
                    c.a.createElement(
                      'button',
                      {
                        id: s,
                        onClick: d ? void 0 : this.handleClick,
                        onKeyDown: d ? void 0 : this.onKeyDown,
                        onKeyUp: d ? void 0 : this.onKeyUp,
                        className: u,
                        type: 'button',
                        'aria-label': o,
                        'aria-labelledby': s + ' ' + l,
                        'aria-disabled': d,
                      },
                      'x'
                    )
                  )
                },
              },
            ]),
            t
          )
        })()
      _.propTypes = {
        id: l.a.string.isRequired,
        label: l.a.string.isRequired,
        onDelete: l.a.func,
        readOnly: l.a.bool,
        disabled: l.a.bool,
        labelRemove: l.a.string,
      }
      var P = _,
        S = (n(7),
        (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()),
        C =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          }
      var E = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            })(this, t),
            (function(e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
              return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
          )
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, s['PureComponent']),
          S(t, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.tags,
                  n = e.onTagRemove,
                  r = e.texts,
                  o = void 0 === r ? {} : r,
                  a = e.disabled,
                  i = e.readOnly,
                  l =
                    e.children || c.a.createElement('span', { className: 'placeholder' }, o.placeholder || 'Choose...')
                return c.a.createElement(
                  'ul',
                  { className: 'tag-list' },
                  (function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                      t = arguments[1],
                      n = arguments[2],
                      r = arguments[3],
                      o = arguments[4]
                    return e.map(function(e) {
                      var a = e._id,
                        i = e.label,
                        l = e.tagClassName,
                        s = e.dataset,
                        d = e.tagLabel
                      return c.a.createElement(
                        'li',
                        C({ className: ['tag-item', l].filter(Boolean).join(' '), key: 'tag-item-' + a }, u(s)),
                        c.a.createElement(P, {
                          label: d || i,
                          id: a,
                          onDelete: t,
                          readOnly: n,
                          disabled: r || e.disabled,
                          labelRemove: o,
                        })
                      )
                    })
                  })(t, n, i, a, o.labelRemove),
                  c.a.createElement('li', { className: 'tag-item' }, l)
                )
              },
            },
          ]),
          t
        )
      })()
      E.propTypes = {
        tags: l.a.array,
        onTagRemove: l.a.func,
        readOnly: l.a.bool,
        disabled: l.a.bool,
        texts: l.a.object,
        children: l.a.node,
      }
      var x = E,
        j =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        N = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      function I(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var D = (function(e) {
        function t() {
          var e, n, r
          !(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
          for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i]
          return (
            (n = r = I(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
            (r.getAriaAttributes = function() {
              var e = r.props,
                t = e.mode,
                n = e.texts,
                o = void 0 === n ? {} : n,
                a = e.showDropdown,
                i = e.clientId,
                l = e.tags,
                s = i + '_trigger',
                c = [],
                u = y(o.label)
              return (
                l &&
                  l.length &&
                  (u['aria-label'] && c.push(s),
                  l.forEach(function(e) {
                    c.push(T(e._id))
                  }),
                  (u = y(o.label, c.join(' ')))),
                j(
                  {
                    id: s,
                    role: 'button',
                    tabIndex: r.props.tabIndex,
                    'aria-haspopup': 'simpleSelect' === t ? 'listbox' : 'tree',
                    'aria-expanded': a ? 'true' : 'false',
                  },
                  u
                )
              )
            }),
            (r.handleTrigger = function(e) {
              ;(e.key && 13 !== e.keyCode && 32 !== e.keyCode && 40 !== e.keyCode) ||
                (e.key && r.triggerNode && r.triggerNode !== document.activeElement) ||
                (r.props.showDropdown || 32 !== e.keyCode || e.preventDefault(), r.props.onTrigger(e))
            }),
            I(r, n)
          )
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, s['PureComponent']),
          N(t, [
            {
              key: 'render',
              value: function() {
                var e = this,
                  t = this.props,
                  n = t.disabled,
                  r = t.readOnly,
                  o = t.showDropdown,
                  a = ['dropdown-trigger', 'arrow', n && 'disabled', r && 'readOnly', o && 'top', !o && 'bottom']
                    .filter(Boolean)
                    .join(' ')
                return c.a.createElement(
                  'a',
                  j(
                    {
                      ref: function(t) {
                        e.triggerNode = t
                      },
                      className: a,
                      onClick: n ? void 0 : this.handleTrigger,
                      onKeyDown: n ? void 0 : this.handleTrigger,
                    },
                    this.getAriaAttributes()
                  ),
                  this.props.children
                )
              },
            },
          ]),
          t
        )
      })()
      D.propTypes = {
        onTrigger: l.a.func,
        disabled: l.a.bool,
        readOnly: l.a.bool,
        showDropdown: l.a.bool,
        mode: l.a.oneOf(['multiSelect', 'simpleSelect', 'radioSelect', 'hierarchical']),
        texts: l.a.object,
        clientId: l.a.string,
        tags: l.a.array,
        tabIndex: l.a.number,
      }
      var M = D,
        R = n(2),
        F = n.n(R),
        A = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      function B(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var L = (function(e) {
        function t() {
          var e, n, r
          !(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
          for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i]
          return (
            (n = r = B(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
            (r.handleClick = function() {
              var e = r.props,
                t = e.onAction,
                n = e.actionData
              t && t(n.nodeId, n.action)
            }),
            B(r, n)
          )
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, s['PureComponent']),
          A(t, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.title,
                  n = e.className,
                  r = e.text,
                  o = e.readOnly
                return c.a.createElement('i', { title: t, className: n, onClick: o ? void 0 : this.handleClick }, r)
              },
            },
          ]),
          t
        )
      })()
      ;(L.propTypes = {
        title: l.a.string,
        text: l.a.string,
        className: l.a.string,
        actionData: l.a.object,
        onAction: l.a.func,
        readOnly: l.a.bool,
      }),
        (L.defaultProps = { onAction: function() {} })
      var V = L,
        K =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        Y = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      var q = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            })(this, t),
            (function(e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
              return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
          )
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, s['PureComponent']),
          Y(t, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.actions,
                  n = e.id,
                  r = (function(e, t) {
                    var n = {}
                    for (var r in e) t.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]))
                    return n
                  })(e, ['actions', 'id'])
                return d(t)
                  ? null
                  : t.map(function(e, t) {
                      var o = e.id || 'action-' + t
                      return c.a.createElement(
                        V,
                        K({ key: o }, r, e, { actionData: { action: K({}, e, { id: o }), nodeId: n } })
                      )
                    })
              },
            },
          ]),
          t
        )
      })()
      q.propTypes = { id: l.a.string.isRequired, actions: l.a.array }
      var H = q,
        U =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        W = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      var z = function(e) {
          var t = e.checked,
            n = e.indeterminate
          return function(e) {
            e && ((e.checked = t), (e.indeterminate = n))
          }
        },
        $ = (function(e) {
          function t() {
            return (
              (function(e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
              })(this, t),
              (function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
              })(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            )
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
            })(t, s['PureComponent']),
            W(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.checked,
                    n = e.indeterminate,
                    r = void 0 !== n && n,
                    o = e.onChange,
                    a = e.disabled,
                    i = e.readOnly,
                    l = (function(e, t) {
                      var n = {}
                      for (var r in e)
                        t.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]))
                      return n
                    })(e, ['checked', 'indeterminate', 'onChange', 'disabled', 'readOnly']),
                    s = a || i
                  return c.a.createElement(
                    'input',
                    U({ type: 'checkbox', ref: z({ checked: t, indeterminate: r }), onChange: o, disabled: s }, l)
                  )
                },
              },
            ]),
            t
          )
        })()
      $.propTypes = {
        checked: l.a.bool,
        indeterminate: l.a.bool,
        onChange: l.a.func,
        disabled: l.a.bool,
        readOnly: l.a.bool,
      }
      var J = $,
        G =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        Z = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      var Q = function(e) {
          var t = e.checked
          return function(e) {
            e && (e.checked = t)
          }
        },
        X = (function(e) {
          function t() {
            return (
              (function(e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
              })(this, t),
              (function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
              })(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            )
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
            })(t, s['PureComponent']),
            Z(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.name,
                    n = e.checked,
                    r = e.onChange,
                    o = e.disabled,
                    a = e.readOnly,
                    i = (function(e, t) {
                      var n = {}
                      for (var r in e)
                        t.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]))
                      return n
                    })(e, ['name', 'checked', 'onChange', 'disabled', 'readOnly']),
                    l = o || a
                  return c.a.createElement(
                    'input',
                    G({ type: 'radio', name: t, ref: Q({ checked: n }), onChange: r, disabled: l }, i)
                  )
                },
              },
            ]),
            t
          )
        })()
      X.propTypes = {
        name: l.a.string.isRequired,
        checked: l.a.bool,
        onChange: l.a.func,
        disabled: l.a.bool,
        readOnly: l.a.bool,
      }
      var ee = X,
        te =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        ne = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      function re(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var oe = (function(e) {
        function t() {
          var e, n, r
          !(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
          for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i]
          return (
            (n = r = re(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
            (r.handleCheckboxChange = function(e) {
              var t = r.props,
                n = t.mode,
                o = t.id,
                a = t.onCheckboxChange
              'simpleSelect' === n || 'radioSelect' === n ? a(o, !0) : a(o, e.target.checked)
              e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
            }),
            re(r, n)
          )
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, s['PureComponent']),
          ne(t, [
            {
              key: 'render',
              value: function() {
                var e = this,
                  t = this.props,
                  n = t.mode,
                  r = t.title,
                  o = t.label,
                  a = t.id,
                  i = t.partial,
                  l = t.checked,
                  s = this.props,
                  u = s.value,
                  d = s.disabled,
                  h = s.showPartiallySelected,
                  p = s.readOnly,
                  f = s.clientId,
                  g = { className: 'node-label' }
                'simpleSelect' === n && !p && !d && (g.onClick = this.handleCheckboxChange)
                var y = { id: a, value: u, checked: l, disabled: d, readOnly: p, tabIndex: -1 },
                  b = ['checkbox-item', 'simpleSelect' === n && 'simple-select'].filter(Boolean).join(' ')
                return c.a.createElement(
                  'label',
                  {
                    title: r || o,
                    onClick: function(t) {
                      return e.props.onNodeToggle(t)
                    },
                  },
                  'radioSelect' === n
                    ? c.a.createElement(
                        ee,
                        te({ name: f, className: 'radio-item', onChange: this.handleCheckboxChange }, y)
                      )
                    : c.a.createElement(
                        J,
                        te({ name: a, className: b, indeterminate: h && i, onChange: this.handleCheckboxChange }, y)
                      ),
                  c.a.createElement('span', g, o)
                )
              },
            },
          ]),
          t
        )
      })()
      oe.propTypes = {
        id: l.a.string.isRequired,
        actions: l.a.array,
        title: l.a.string,
        label: l.a.string.isRequired,
        value: l.a.string.isRequired,
        checked: l.a.bool,
        partial: l.a.bool,
        disabled: l.a.bool,
        dataset: l.a.object,
        mode: l.a.oneOf(['multiSelect', 'simpleSelect', 'radioSelect', 'hierarchical']),
        showPartiallySelected: l.a.bool,
        onCheckboxChange: l.a.func,
        onNodeToggle: l.a.func,
        readOnly: l.a.bool,
        clientId: l.a.string,
      }
      var ae = oe,
        ie = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      function le(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var se = (function(e) {
        function t() {
          var e, n, r
          !(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
          for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i]
          return (
            (n = r = le(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
            (r.onToggle = function(e) {
              e.stopPropagation(), e.nativeEvent.stopImmediatePropagation(), r.props.onNodeToggle(r.props.id)
            }),
            (r.onKeyDown = function(e) {
              ;('Enter' !== e.key && 32 !== e.keyCode) || (r.props.onNodeToggle(r.props.id), e.preventDefault())
            }),
            le(r, n)
          )
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, s['PureComponent']),
          ie(t, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.expanded,
                  n = e.isLeaf,
                  r = ['toggle', t && 'expanded', !t && 'collapsed'].filter(Boolean).join(' ')
                if (n) return null
                if (this.props.toggler) {
                  var o = c.a.cloneElement(this.props.toggler)
                  return c.a.createElement(
                    'div',
                    { className: r },
                    c.a.createElement(o, { onClick: this.onToggle, onKeyDown: this.onKeyDown })
                  )
                }
                return c.a.createElement('i', {
                  role: 'button',
                  tabIndex: -1,
                  className: r,
                  onClick: this.onToggle,
                  onKeyDown: this.onKeyDown,
                  'aria-hidden': !0,
                })
              },
            },
          ]),
          t
        )
      })()
      se.propTypes = {
        expanded: l.a.bool,
        isLeaf: l.a.bool,
        onNodeToggle: l.a.func,
        id: l.a.string,
        toggler: l.a.element,
      }
      var ce = se,
        ue = (n(8),
        Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          }),
        de = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      function he(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var pe = function(e) {
          return d(e)
        },
        fe = (function(e) {
          function t() {
            var e, n, r
            !(function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            })(this, t)
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i]
            return (
              (n = r = he(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
              (r.getAriaAttributes = function() {
                var e = r.props,
                  t = e._children,
                  n = e._depth,
                  o = e.checked,
                  a = e.disabled,
                  i = e.expanded,
                  l = e.readOnly,
                  s = e.mode,
                  c = e.partial,
                  u = {}
                return (
                  (u.role = 'simpleSelect' === s ? 'option' : 'treeitem'),
                  (u['aria-disabled'] = a || l),
                  (u['aria-selected'] = o),
                  'simpleSelect' !== s &&
                    ((u['aria-checked'] = c ? 'mixed' : o),
                    (u['aria-level'] = (n || 0) + 1),
                    (u['aria-expanded'] = t && (i ? 'true' : 'false'))),
                  u
                )
              }),
              he(r, n)
            )
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
            })(t, s['PureComponent']),
            de(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.mode,
                    n = e.keepTreeOnSearch,
                    r = e._id,
                    o = e._children,
                    a = e.dataset,
                    i = e._depth,
                    l = e.expanded,
                    s = e.title,
                    d = e.label,
                    h = e.partial,
                    p = e.checked,
                    f = e.value,
                    g = e.disabled,
                    y = e.actions,
                    b = e.onAction,
                    v = e.searchModeOn,
                    m = e.onNodeToggle,
                    w = e.onCheckboxChange,
                    O = e.showPartiallySelected,
                    k = e.readOnly,
                    T = e.clientId,
                    _ = e.toggler,
                    P = (function(e) {
                      var t = e.keepTreeOnSearch,
                        n = e.keepChildrenOnSearch,
                        r = e._children,
                        o = e.matchInChildren,
                        a = e.matchInParent,
                        i = e.disabled,
                        l = e.partial,
                        s = e.hide,
                        c = e.className,
                        u = e.showPartiallySelected,
                        d = e.readOnly,
                        h = e.checked,
                        p = e._focused
                      return [
                        'node',
                        pe(r) && 'leaf',
                        !pe(r) && 'tree',
                        i && 'disabled',
                        s && 'hide',
                        t && o && 'match-in-children',
                        t && n && a && 'match-in-parent',
                        u && l && 'partial',
                        d && 'readOnly',
                        h && 'checked',
                        p && 'focused',
                        c,
                      ]
                        .filter(Boolean)
                        .join(' ')
                    })(this.props),
                    S = n || !v ? { paddingLeft: 20 * (i || 0) + 'px' } : {},
                    C = r + '_li'
                  return c.a.createElement(
                    'li',
                    ue({ className: P, style: S, id: C }, u(a), this.getAriaAttributes()),
                    c.a.createElement(ae, {
                      title: s,
                      label: d,
                      id: r,
                      partial: h,
                      checked: p,
                      value: f,
                      disabled: g,
                      onNodeToggle: m,
                      mode: t,
                      onCheckboxChange: w,
                      showPartiallySelected: O,
                      readOnly: k,
                      clientId: T,
                    }),
                    c.a.createElement(ce, { isLeaf: pe(o), expanded: l, id: r, onNodeToggle: m, toggler: _ }),
                    c.a.createElement(H, { actions: y, onAction: b, id: r, readOnly: k })
                  )
                },
              },
            ]),
            t
          )
        })()
      fe.propTypes = {
        _id: l.a.string.isRequired,
        _depth: l.a.number,
        _children: l.a.array,
        actions: l.a.array,
        className: l.a.string,
        title: l.a.string,
        label: l.a.string.isRequired,
        value: l.a.string.isRequired,
        checked: l.a.bool,
        expanded: l.a.bool,
        disabled: l.a.bool,
        partial: l.a.bool,
        dataset: l.a.object,
        keepTreeOnSearch: l.a.bool,
        keepChildrenOnSearch: l.a.bool,
        searchModeOn: l.a.bool,
        onNodeToggle: l.a.func,
        onAction: l.a.func,
        onCheckboxChange: l.a.func,
        mode: l.a.oneOf(['multiSelect', 'simpleSelect', 'radioSelect', 'hierarchical']),
        showPartiallySelected: l.a.bool,
        readOnly: l.a.bool,
        clientId: l.a.string,
        toggler: l.a.element,
      }
      var ge = fe,
        ye =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        be = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      var ve = (function(e) {
        function t(e) {
          !(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
          var n = (function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
          return (
            me.call(n),
            (n.currentPage = 1),
            n.computeInstanceProps(e, !0),
            (n.state = { items: n.allVisibleNodes.slice(0, n.props.pageSize) }),
            n
          )
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, s['Component']),
          be(t, [
            {
              key: 'render',
              value: function() {
                var e = this.props.searchModeOn
                return c.a.createElement(
                  'ul',
                  ye(
                    { className: 'root ' + (e ? 'searchModeOn' : ''), ref: this.setNodeRef },
                    this.getAriaAttributes()
                  ),
                  this.state.scrollableTarget &&
                    c.a.createElement(
                      F.a,
                      {
                        dataLength: this.state.items.length,
                        next: this.loadMore,
                        hasMore: this.hasMore(),
                        loader: c.a.createElement('span', { className: 'searchLoader' }, 'Loading...'),
                        scrollableTarget: this.state.scrollableTarget,
                      },
                      this.state.items
                    )
                )
              },
            },
          ]),
          t
        )
      })()
      ;(ve.propTypes = {
        data: l.a.object,
        keepTreeOnSearch: l.a.bool,
        keepChildrenOnSearch: l.a.bool,
        searchModeOn: l.a.bool,
        onChange: l.a.func,
        onNodeToggle: l.a.func,
        onAction: l.a.func,
        onCheckboxChange: l.a.func,
        mode: l.a.oneOf(['multiSelect', 'simpleSelect', 'radioSelect', 'hierarchical']),
        showPartiallySelected: l.a.bool,
        pageSize: l.a.number,
        readOnly: l.a.bool,
        clientId: l.a.string,
        activeDescendant: l.a.string,
        toggler: l.a.element,
      }),
        (ve.defaultProps = { pageSize: 100 })
      var me = function() {
          var e = this
          ;(this.componentWillReceiveProps = function(t) {
            var n = t.activeDescendant === e.props.activeDescendant
            e.computeInstanceProps(t, !n),
              e.setState({ items: e.allVisibleNodes.slice(0, e.currentPage * e.props.pageSize) })
          }),
            (this.componentDidMount = function() {
              e.setState({ scrollableTarget: e.node.parentNode })
            }),
            (this.computeInstanceProps = function(t, n) {
              if (
                ((e.allVisibleNodes = e.getNodes(t)),
                (e.totalPages = Math.ceil(e.allVisibleNodes.length / e.props.pageSize)),
                n && t.activeDescendant)
              ) {
                var r = t.activeDescendant.replace(/_li$/, ''),
                  o =
                    g(e.allVisibleNodes, function(e) {
                      return e.key === r
                    }) + 1
                e.currentPage = o > 0 ? Math.ceil(o / e.props.pageSize) : 1
              }
            }),
            (this.shouldRenderNode = function(e, t) {
              var n = t.data,
                r = t.searchModeOn,
                o = e.expanded,
                a = e._parent
              if (r || o) return !0
              var i = a && n.get(a)
              return !i || i.expanded
            }),
            (this.getNodes = function(t) {
              var n = t.data,
                r = t.keepTreeOnSearch,
                o = t.keepChildrenOnSearch,
                a = t.searchModeOn,
                i = t.mode,
                l = t.showPartiallySelected,
                s = t.readOnly,
                u = t.onAction,
                d = t.onChange,
                h = t.onCheckboxChange,
                p = t.onNodeToggle,
                f = t.activeDescendant,
                g = t.clientId,
                y = t.toggler,
                b = []
              return (
                n.forEach(function(n) {
                  e.shouldRenderNode(n, t) &&
                    b.push(
                      c.a.createElement(
                        ge,
                        ye({ keepTreeOnSearch: r, keepChildrenOnSearch: o, key: n._id }, n, {
                          searchModeOn: a,
                          onChange: d,
                          onCheckboxChange: h,
                          onNodeToggle: p,
                          onAction: u,
                          mode: i,
                          showPartiallySelected: l,
                          readOnly: s,
                          clientId: g,
                          activeDescendant: f,
                          toggler: y,
                        })
                      )
                    )
                }),
                b
              )
            }),
            (this.hasMore = function() {
              return e.currentPage < e.totalPages
            }),
            (this.loadMore = function() {
              e.currentPage = e.currentPage + 1
              var t = e.allVisibleNodes.slice(0, e.currentPage * e.props.pageSize)
              e.setState({ items: t })
            }),
            (this.setNodeRef = function(t) {
              e.node = t
            }),
            (this.getAriaAttributes = function() {
              var t = e.props.mode
              return {
                role: 'simpleSelect' === t ? 'listbox' : 'tree',
                'aria-multiselectable': /multiSelect|hierarchical/.test(t),
              }
            })
        },
        we = ve,
        Oe = n(3),
        ke = n.n(Oe),
        Te = function(e) {
          return e
        },
        _e = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'children',
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Te
          return (
            ke()(e[t], function(e) {
              return n(e).checked
            }) ||
            e[t].some(function(e) {
              return n(e).partial
            })
          )
        }
      var Pe = function(e) {
          var t = e.tree,
            n = e.simple,
            r = e.radio,
            o = e.showPartialState,
            a = e.hierarchical,
            i = e.rootPrefixId
          return (function e(t) {
            var n = t.nodes,
              r = t.parent,
              o = t.depth,
              a = void 0 === o ? 0 : o,
              i = t.simple,
              l = t.radio,
              s = t.showPartialState,
              c = t.hierarchical,
              u = t.rootPrefixId,
              h = t._rv,
              p = void 0 === h ? { list: new Map(), defaultValues: [], singleSelectedNode: null } : h,
              f = i || l
            return (
              n.forEach(function(t, n) {
                ;(t._depth = a),
                  r
                    ? ((t._id = t.id || r._id + '-' + n), (t._parent = r._id), r._children.push(t._id))
                    : (t._id = t.id || '' + (u ? u + '-' + n : n)),
                  f && t.checked && (p.singleSelectedNode ? (t.checked = !1) : (p.singleSelectedNode = t)),
                  f &&
                    t.isDefaultValue &&
                    p.singleSelectedNode &&
                    !p.singleSelectedNode.isDefaultValue &&
                    ((p.singleSelectedNode.checked = !1), (p.singleSelectedNode = null)),
                  !t.isDefaultValue ||
                    (f && 0 !== p.defaultValues.length) ||
                    (p.defaultValues.push(t._id), (t.checked = !0), f && (p.singleSelectedNode = t)),
                  (c && !l) ||
                    (function(e) {
                      for (
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                          n =
                            arguments.length > 2 && void 0 !== arguments[2] && !arguments[2]
                              ? ['disabled']
                              : ['checked', 'disabled'],
                          r = 0;
                        r < n.length;
                        r++
                      ) {
                        var o = n[r]
                        void 0 === e[o] && void 0 !== t[o] && (e[o] = t[o])
                      }
                    })(t, r, !l),
                  p.list.set(t._id, t),
                  !i &&
                    t.children &&
                    ((t._children = []),
                    e({
                      nodes: t.children,
                      parent: t,
                      depth: a + 1,
                      radio: l,
                      showPartialState: s,
                      hierarchical: c,
                      _rv: p,
                    }),
                    s &&
                      !t.checked &&
                      ((t.partial = _e(t)),
                      f ||
                        d(t.children) ||
                        !t.children.every(function(e) {
                          return e.checked
                        }) ||
                        (t.checked = !0)),
                    (t.children = void 0))
              }),
              p
            )
          })({
            nodes: Array.isArray(t) ? t : [t],
            simple: n,
            radio: r,
            showPartialState: o,
            hierarchical: a,
            rootPrefixId: i,
          })
        },
        Se = function e(t, n, r) {
          ;(n[t._id] = !0),
            d(t._children) ||
              t._children.forEach(function(t) {
                return e(r(t), n, r)
              })
        },
        Ce = function(e, t) {
          var n = [],
            r = {}
          return (
            e.forEach(function(e, o) {
              r[o] || (t(e, o, r) && n.push(e), (r[o] = !0))
            }),
            n
          )
        },
        Ee = {
          getNodesMatching: Ce,
          getVisibleNodes: function(e, t, n) {
            return Ce(e, function(e, r, o) {
              return n && e._children && e._children.length && !0 !== e.expanded && Se(e, o, t), !e.hide
            })
          },
          markSubTreeVisited: Se,
        },
        xe = (function() {
          return function(e, t) {
            if (Array.isArray(e)) return e
            if (Symbol.iterator in Object(e))
              return (function(e, t) {
                var n = [],
                  r = !0,
                  o = !1,
                  a = void 0
                try {
                  for (
                    var i, l = e[Symbol.iterator]();
                    !(r = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t);
                    r = !0
                  );
                } catch (e) {
                  ;(o = !0), (a = e)
                } finally {
                  try {
                    !r && l.return && l.return()
                  } finally {
                    if (o) throw a
                  }
                }
                return n
              })(e, t)
            throw new TypeError('Invalid attempt to destructure non-iterable instance')
          }
        })(),
        je = 'ArrowUp',
        Ne = 'ArrowDown',
        Ie = 'ArrowLeft',
        De = 'ArrowRight',
        Me = 'Enter',
        Re = 'Home',
        Fe = 'PageUp',
        Ae = 'End',
        Be = 'PageDown',
        Le = {
          None: 'None',
          FocusPrevious: 'FocusPrevious',
          FocusNext: 'FocusNext',
          FocusParent: 'FocusParent',
          FocusFirst: 'FocusFirst',
          FocusLast: 'FocusLast',
          ToggleExpanded: 'ToggleExpanded',
          ToggleChecked: 'ToggleChecked',
        },
        Ve = new Set([Le.FocusPrevious, Le.FocusNext, Le.FocusParent, Le.FocusFirst, Le.FocusLast]),
        Ke = [je, Ne, Re, Fe, Ae, Be],
        Ye = Ke.concat([Ie, De, Me]),
        qe = function(e, t, n, r) {
          return t.indexOf(e) > -1 || (!n && e === r)
        },
        He = function(e, t, n) {
          if (!e || 0 === e.length) return t
          var r = t
          ;(function(e) {
            return qe(e, [Le.FocusFirst, Le.FocusLast], !0)
          })(n)
            ? (r = xe(e, 1)[0])
            : [Le.FocusPrevious, Le.FocusNext].indexOf(n) > -1 &&
              (r = (function(e, t) {
                var n = e.indexOf(t) + 1
                return n % e.length == 0 ? e[0] : e[n]
              })(e, t))
          return r
        },
        Ue = {
          isValidKey: function(e, t) {
            return (t ? Ye : Ke).indexOf(e) > -1
          },
          getAction: function(e, t) {
            return t === Ie
              ? (function(e, t) {
                  return e && t === Ie
                    ? !0 === e.expanded
                      ? Le.ToggleExpanded
                      : e._parent
                      ? Le.FocusParent
                      : Le.None
                    : Le.None
                })(e, t)
              : t === De
              ? (function(e, t) {
                  return e && e._children && t === De ? (!0 !== e.expanded ? Le.ToggleExpanded : Le.FocusNext) : Le.None
                })(e, t)
              : (function(e, t) {
                  return qe(e, [Re, Fe], t, Ne)
                })(t, e)
              ? Le.FocusFirst
              : (function(e, t) {
                  return qe(e, [Ae, Be], t, je)
                })(t, e)
              ? Le.FocusLast
              : (function(e, t) {
                  if (!e) return Le.None
                  switch (t) {
                    case je:
                      return Le.FocusPrevious
                    case Ne:
                      return Le.FocusNext
                    case Me:
                      return Le.ToggleChecked
                    default:
                      return Le.None
                  }
                })(e, t)
          },
          getNextFocus: function(e, t, n, r, o) {
            if (n === Le.FocusParent)
              return (function(e, t) {
                return e && e._parent ? t(e._parent) : e
              })(t, r)
            if (!Ve.has(n)) return t
            var a = Ee.getVisibleNodes(e, r, o)
            return (
              (function(e) {
                return qe(e, [Le.FocusPrevious, Le.FocusLast], !0)
              })(n) && (a = a.reverse()),
              He(a, t, n)
            )
          },
          getNextFocusAfterTagDelete: function(e, t, n, r) {
            var o = t
              ? g(t, function(t) {
                  return t._id === e
                })
              : -1
            if (o < 0 || !n.length) return r
            var a = n[(o = n.length > o ? o : n.length - 1)]._id,
              i = document.getElementById(T(a))
            return (i && i.firstElementChild) || r
          },
          handleFocusNavigationkey: function(e, t, n, r, o) {
            var a = Ue.getNextFocus(e, n, t, r, o)
            return Ue.adjustFocusedProps(n, a), a ? a._id : n && n._id
          },
          handleToggleNavigationkey: function(e, t, n, r, o) {
            return (
              e !== Le.ToggleChecked || n || t.readOnly || t.disabled
                ? e === Le.ToggleExpanded && o(t._id)
                : r(t._id, !0 !== t.checked),
              t && t._id
            )
          },
          adjustFocusedProps: function(e, t) {
            e && t && e._id !== t._id && (e._focused = !1), t && (t._focused = !0)
          },
        },
        We = Ue,
        ze = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      var $e = (function() {
        function e(t) {
          var n = t.data,
            r = t.mode,
            o = t.showPartiallySelected,
            a = t.rootPrefixId,
            i = t.searchPredicate
          !(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, e),
            (this._src = n),
            (this.simpleSelect = 'simpleSelect' === r),
            (this.radioSelect = 'radioSelect' === r),
            (this.hierarchical = 'hierarchical' === r),
            (this.searchPredicate = i)
          var l = Pe({
              tree: JSON.parse(JSON.stringify(n)),
              simple: this.simpleSelect,
              radio: this.radioSelect,
              showPartialState: o,
              hierarchical: this.hierarchical,
              rootPrefixId: a,
            }),
            s = l.list,
            c = l.defaultValues,
            u = l.singleSelectedNode
          ;(this.tree = s),
            (this.defaultValues = c),
            (this.showPartialState = !this.hierarchical && o),
            (this.searchMaps = new Map()),
            (this.simpleSelect || this.radioSelect) && u && (this.currentChecked = u._id)
        }
        return (
          ze(e, [
            {
              key: 'getNodeById',
              value: function(e) {
                return this.tree.get(e)
              },
            },
            {
              key: 'getMatches',
              value: function(e) {
                var t = this
                if (this.searchMaps.has(e)) return this.searchMaps.get(e)
                var n = -1,
                  r = e
                this.searchMaps.forEach(function(t, o) {
                  e.startsWith(o) && o.length > n && ((n = o.length), (r = o))
                })
                var o = [],
                  a = this._getAddOnMatch(o, e)
                r !== e
                  ? this.searchMaps.get(r).forEach(function(e) {
                      return a(t.getNodeById(e))
                    })
                  : this.tree.forEach(a)
                return this.searchMaps.set(e, o), o
              },
            },
            {
              key: 'addParentsToTree',
              value: function(e, t) {
                if (void 0 !== e) {
                  var n = this.getNodeById(e)
                  this.addParentsToTree(n._parent, t),
                    (n.hide = !n._isMatch || n.hide),
                    (n.matchInChildren = !0),
                    t.set(e, n)
                }
              },
            },
            {
              key: 'addChildrenToTree',
              value: function(e, t, n) {
                var r = this
                void 0 !== e &&
                  e.forEach(function(e) {
                    if (!n || !n.includes(e)) {
                      var o = r.getNodeById(e)
                      ;(o.matchInParent = !0), t.set(e, o), r.addChildrenToTree(o._children, t)
                    }
                  })
              },
            },
            {
              key: 'filterTree',
              value: function(e, t, n) {
                var r = this,
                  o = this.getMatches(e.toLowerCase()),
                  a = new Map()
                o.forEach(function(e) {
                  var i = r.getNodeById(e)
                  ;(i.hide = !1),
                    (i._isMatch = !0),
                    t && r.addParentsToTree(i._parent, a),
                    a.set(e, i),
                    t && n && r.addChildrenToTree(i._children, a, o)
                })
                var i = 0 === o.length
                return (this.matchTree = a), { allNodesHidden: i, tree: a }
              },
            },
            {
              key: 'restoreNodes',
              value: function() {
                return (
                  this.tree.forEach(function(e) {
                    e.hide = !1
                  }),
                  this.tree
                )
              },
            },
            {
              key: 'restoreDefaultValues',
              value: function() {
                var e = this
                return (
                  this.defaultValues.forEach(function(t) {
                    e.setNodeCheckedState(t, !0)
                  }),
                  this.tree
                )
              },
            },
            {
              key: 'togglePreviousChecked',
              value: function(e, t) {
                var n = this.currentChecked
                if (n && n !== e) {
                  var r = this.getNodeById(n)
                  ;(r.checked = !1), this.radioSelect && this.showPartialState && this.partialCheckParents(r)
                }
                this.currentChecked = t ? e : null
              },
            },
            {
              key: 'setNodeCheckedState',
              value: function(e, t) {
                this.radioSelect && this.togglePreviousChecked(e, t)
                var n = this.getNodeById(e)
                ;(n.checked = t),
                  this.showPartialState && (n.partial = !1),
                  this.simpleSelect
                    ? this.togglePreviousChecked(e, t)
                    : this.radioSelect
                    ? (this.showPartialState && this.partialCheckParents(n), t || this.unCheckParents(n))
                    : (this.hierarchical || this.toggleChildren(e, t),
                      this.showPartialState && this.partialCheckParents(n),
                      this.hierarchical || t || this.unCheckParents(n))
              },
            },
            {
              key: 'unCheckParents',
              value: function(e) {
                for (var t = e._parent; t; ) {
                  var n = this.getNodeById(t)
                  ;(n.checked = !1), (n.partial = _e(n, '_children', this.getNodeById.bind(this))), (t = n._parent)
                }
              },
            },
            {
              key: 'partialCheckParents',
              value: function(e) {
                for (var t = this, n = e._parent; n; ) {
                  var r = this.getNodeById(n)
                  ;(r.checked = r._children.every(function(e) {
                    return t.getNodeById(e).checked
                  })),
                    (r.partial = _e(r, '_children', this.getNodeById.bind(this))),
                    (n = r._parent)
                }
              },
            },
            {
              key: 'toggleChildren',
              value: function(e, t) {
                var n = this,
                  r = this.getNodeById(e)
                ;(r.checked = t),
                  this.showPartialState && (r.partial = !1),
                  d(r._children) ||
                    r._children.forEach(function(e) {
                      return n.toggleChildren(e, t)
                    })
              },
            },
            {
              key: 'toggleNodeExpandState',
              value: function(e) {
                var t = this.getNodeById(e)
                return (t.expanded = !t.expanded), t.expanded || this.collapseChildren(t), this.tree
              },
            },
            {
              key: 'collapseChildren',
              value: function(e) {
                var t = this
                ;(e.expanded = !1),
                  d(e._children) ||
                    e._children.forEach(function(e) {
                      return t.collapseChildren(t.getNodeById(e))
                    })
              },
            },
            {
              key: 'getTreeAndTags',
              value: function() {
                return { tree: this.tree, tags: this.tags }
              },
            },
            {
              key: 'handleNavigationKey',
              value: function(e, t, n, r, o, a, i) {
                var l = this,
                  s = e && this.getNodeById(e),
                  c = We.getAction(s, n)
                return Ve.has(c)
                  ? We.handleFocusNavigationkey(
                      t,
                      c,
                      s,
                      function(e) {
                        return l.getNodeById(e)
                      },
                      o
                    )
                  : s && t.has(s._id)
                  ? We.handleToggleNavigationkey(c, s, r, a, i)
                  : e
              },
            },
            {
              key: '_getAddOnMatch',
              value: function(e, t) {
                var n = function(e, t) {
                  return e.label.toLowerCase().indexOf(t) >= 0
                }
                return (
                  'function' == typeof this.searchPredicate && (n = this.searchPredicate),
                  function(r) {
                    n(r, t) && e.push(r._id)
                  }
                )
              },
            },
            {
              key: 'tags',
              get: function() {
                var e = this
                return this.radioSelect || this.simpleSelect
                  ? this.currentChecked
                    ? [this.getNodeById(this.currentChecked)]
                    : []
                  : Ee.getNodesMatching(this.tree, function(t, n, r) {
                      return (
                        t.checked &&
                          !e.hierarchical &&
                          Ee.markSubTreeVisited(t, r, function(t) {
                            return e.getNodeById(t)
                          }),
                        t.checked
                      )
                    })
              },
            },
          ]),
          e
        )
      })()
      n(9)
      n.d(t, 'clientIdGenerator', function() {
        return f
      }),
        n.d(t, 'Tree', function() {
          return we
        }),
        n.d(t, 'Input', function() {
          return w
        }),
        n.d(t, 'TreeManager', function() {
          return $e
        })
      var Je =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        Ge = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      /*!
       * React Dropdown Tree Select
       * A lightweight, fast and highly customizable tree select component.
       * Hrusikesh Panda <hrusikesh.panda@dowjones.com>
       * Copyright (c) 2017 Dow Jones, Inc. <support@dowjones.com> (http://dowjones.com)
       * license MIT
       * see https://github.com/dowjones/react-dropdown-tree-select
       */
      var Ze = (function(e) {
        function t(e) {
          !(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
          var n = (function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
          return (
            (n.initNewProps = function(e) {
              var t = e.data,
                r = e.mode,
                o = e.showDropdown,
                a = e.showPartiallySelected,
                i = e.searchPredicate
              ;(n.treeManager = new $e({
                data: t,
                mode: r,
                showPartiallySelected: a,
                rootPrefixId: n.clientId,
                searchPredicate: i,
              })),
                n.setState(function(e) {
                  var t = e.currentFocus && n.treeManager.getNodeById(e.currentFocus)
                  return (
                    t && (t._focused = !0),
                    Je(
                      { showDropdown: /initial|always/.test(o) || !0 === e.showDropdown },
                      n.treeManager.getTreeAndTags()
                    )
                  )
                })
            }),
            (n.resetSearchState = function() {
              return (
                n.searchInput && (n.searchInput.value = ''),
                { tree: n.treeManager.restoreNodes(), searchModeOn: !1, allNodesHidden: !1 }
              )
            }),
            (n.handleClick = function(e, t) {
              n.setState(function(e) {
                var t = 'always' === n.props.showDropdown || n.keepDropdownActive || !e.showDropdown
                return (
                  t !== e.showDropdown &&
                    (t
                      ? document.addEventListener('click', n.handleOutsideClick, !1)
                      : document.removeEventListener('click', n.handleOutsideClick, !1)),
                  t ? n.props.onFocus() : n.props.onBlur(),
                  t ? { showDropdown: t } : Je({ showDropdown: t }, n.resetSearchState())
                )
              }, t)
            }),
            (n.handleOutsideClick = function(e) {
              'always' !== n.props.showDropdown && h(e, n.node) && n.handleClick()
            }),
            (n.onInputChange = function(e) {
              var t = n.treeManager.filterTree(e, n.props.keepTreeOnSearch, n.props.keepChildrenOnSearch),
                r = t.allNodesHidden,
                o = t.tree,
                a = e.length > 0
              n.setState({ tree: o, searchModeOn: a, allNodesHidden: r })
            }),
            (n.onTagRemove = function(e, t) {
              var r = n.state.tags
              n.onCheckboxChange(e, !1, function(o) {
                t && We.getNextFocusAfterTagDelete(e, r, o, n.searchInput).focus()
              })
            }),
            (n.onNodeToggle = function(e) {
              n.treeManager.toggleNodeExpandState(e)
              var t = n.state.searchModeOn ? n.treeManager.matchTree : n.treeManager.tree
              n.setState({ tree: t }),
                'function' == typeof n.props.onNodeToggle && n.props.onNodeToggle(n.treeManager.getNodeById(e))
            }),
            (n.onCheckboxChange = function(e, t, r) {
              var o = n.props,
                a = o.mode,
                i = o.keepOpenOnSelect,
                l = o.clearSearchOnChange,
                s = n.state,
                c = s.currentFocus,
                u = s.searchModeOn
              n.treeManager.setNodeCheckedState(e, t)
              var d = n.treeManager.tags,
                h = ['simpleSelect', 'radioSelect'].indexOf(a) > -1,
                p = !(h && !i) && n.state.showDropdown,
                f = c && n.treeManager.getNodeById(c),
                g = n.treeManager.getNodeById(e)
              d.length || (n.treeManager.restoreDefaultValues(), (d = n.treeManager.tags))
              var y = {
                tree: u ? n.treeManager.matchTree : n.treeManager.tree,
                tags: d,
                showDropdown: p,
                currentFocus: e,
              }
              ;((h && !p) || l) && Object.assign(y, n.resetSearchState()),
                h && !p && document.removeEventListener('click', n.handleOutsideClick, !1),
                We.adjustFocusedProps(f, g),
                n.setState(y, function() {
                  r && r(d)
                }),
                n.props.onChange(g, d)
            }),
            (n.onAction = function(e, t) {
              n.props.onAction(n.treeManager.getNodeById(e), t)
            }),
            (n.onInputFocus = function() {
              n.keepDropdownActive = !0
            }),
            (n.onInputBlur = function() {
              n.keepDropdownActive = !1
            }),
            (n.onTrigger = function(e) {
              n.handleClick(e, function() {
                n.state.showDropdown && n.searchInput.focus()
              })
            }),
            (n.onKeyboardKeyDown = function(e) {
              var t = n.props,
                r = t.readOnly,
                o = t.mode,
                a = n.state,
                i = a.showDropdown,
                l = a.tags,
                s = a.searchModeOn,
                c = a.currentFocus,
                u = n.treeManager,
                d = s ? u.matchTree : u.tree
              if (i || (!We.isValidKey(e.key, !1) && !/^\w$/i.test(e.key)))
                if (i && We.isValidKey(e.key, !0)) {
                  var h = u.handleNavigationKey(c, d, e.key, r, !s, n.onCheckboxChange, n.onNodeToggle)
                  h !== c &&
                    n.setState({ currentFocus: h }, function() {
                      var e = document && document.getElementById(h + '_li')
                      e && e.scrollIntoView()
                    })
                } else {
                  if (i && ['Escape', 'Tab'].indexOf(e.key) > -1)
                    return void ('simpleSelect' === o && d.has(c)
                      ? n.onCheckboxChange(c, !0)
                      : ((n.keepDropdownActive = !1), n.handleClick()))
                  if ('Backspace' !== e.key || !l.length || 0 !== n.searchInput.value.length) return
                  var p = l.pop()
                  n.onCheckboxChange(p._id, !1)
                }
              else if (
                (e.persist(),
                n.handleClick(null, function() {
                  return n.onKeyboardKeyDown(e)
                }),
                /\w/i.test(e.key))
              )
                return
              e.preventDefault()
            }),
            (n.getAriaAttributes = function() {
              var e = n.props,
                t = e.mode,
                r = e.texts
              return 'radioSelect' !== t ? {} : Je({ role: 'radiogroup' }, y(r.label))
            }),
            (n.state = { searchModeOn: !1, currentFocus: void 0 }),
            (n.clientId = e.id || f.get(n)),
            n
          )
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, s['Component']),
          Ge(t, [
            {
              key: 'componentWillMount',
              value: function() {
                this.initNewProps(this.props)
              },
            },
            {
              key: 'componentWillUnmount',
              value: function() {
                document.removeEventListener('click', this.handleOutsideClick, !1)
              },
            },
            {
              key: 'componentWillReceiveProps',
              value: function(e) {
                this.initNewProps(e)
              },
            },
            {
              key: 'render',
              value: function() {
                var e = this,
                  t = this.props,
                  n = t.disabled,
                  r = t.readOnly,
                  o = t.mode,
                  a = t.texts,
                  i = t.inlineSearchInput,
                  l = t.tabIndex,
                  s = t.toggler,
                  u = this.state,
                  d = u.showDropdown,
                  h = u.currentFocus,
                  p = u.tags,
                  f = {
                    disabled: n,
                    readOnly: r,
                    activeDescendant: h ? h + '_li' : void 0,
                    texts: a,
                    mode: o,
                    clientId: this.clientId,
                  },
                  g = c.a.createElement(
                    w,
                    Je(
                      {
                        inputRef: function(t) {
                          e.searchInput = t
                        },
                        onInputChange: this.onInputChange,
                        onFocus: this.onInputFocus,
                        onBlur: this.onInputBlur,
                        onKeyDown: this.onKeyboardKeyDown,
                      },
                      f,
                      { inlineSearchInput: i }
                    )
                  )
                return c.a.createElement(
                  'div',
                  {
                    id: this.clientId,
                    className: [this.props.className && this.props.className, 'react-dropdown-tree-select']
                      .filter(Boolean)
                      .join(' '),
                    ref: function(t) {
                      e.node = t
                    },
                  },
                  c.a.createElement(
                    'div',
                    {
                      className: [
                        'dropdown',
                        'simpleSelect' === o && 'simple-select',
                        'radioSelect' === o && 'radio-select',
                      ]
                        .filter(Boolean)
                        .join(' '),
                    },
                    c.a.createElement(
                      M,
                      Je({ onTrigger: this.onTrigger, showDropdown: d }, f, { tags: p, tabIndex: l }),
                      c.a.createElement(x, Je({ tags: p, onTagRemove: this.onTagRemove }, f), !i && g)
                    ),
                    d &&
                      c.a.createElement(
                        'div',
                        Je({ className: 'dropdown-content' }, this.getAriaAttributes()),
                        i && g,
                        this.state.allNodesHidden
                          ? c.a.createElement('span', { className: 'no-matches' }, a.noMatches || 'No matches found')
                          : c.a.createElement(
                              we,
                              Je(
                                {
                                  data: this.state.tree,
                                  keepTreeOnSearch: this.props.keepTreeOnSearch,
                                  keepChildrenOnSearch: this.props.keepChildrenOnSearch,
                                  searchModeOn: this.state.searchModeOn,
                                  onAction: this.onAction,
                                  onCheckboxChange: this.onCheckboxChange,
                                  onNodeToggle: this.onNodeToggle,
                                  mode: o,
                                  showPartiallySelected: this.props.showPartiallySelected,
                                  toggler: s,
                                },
                                f
                              )
                            )
                      )
                  )
                )
              },
            },
          ]),
          t
        )
      })()
      ;(Ze.propTypes = {
        data: l.a.oneOfType([l.a.object, l.a.array]).isRequired,
        clearSearchOnChange: l.a.bool,
        keepTreeOnSearch: l.a.bool,
        keepChildrenOnSearch: l.a.bool,
        keepOpenOnSelect: l.a.bool,
        texts: l.a.shape({
          placeholder: l.a.string,
          inlineSearchPlaceholder: l.a.string,
          noMatches: l.a.string,
          label: l.a.string,
          labelRemove: l.a.string,
        }),
        showDropdown: l.a.oneOf(['default', 'initial', 'always']),
        className: l.a.string,
        onChange: l.a.func,
        onAction: l.a.func,
        onNodeToggle: l.a.func,
        onFocus: l.a.func,
        onBlur: l.a.func,
        mode: l.a.oneOf(['multiSelect', 'simpleSelect', 'radioSelect', 'hierarchical']),
        showPartiallySelected: l.a.bool,
        disabled: l.a.bool,
        readOnly: l.a.bool,
        id: l.a.string,
        searchPredicate: l.a.func,
        inlineSearchInput: l.a.bool,
        tabIndex: l.a.number,
        toggler: l.a.element,
      }),
        (Ze.defaultProps = {
          onAction: function() {},
          onFocus: function() {},
          onBlur: function() {},
          onChange: function() {},
          texts: {},
          showDropdown: 'default',
          inlineSearchInput: !1,
          tabIndex: 0,
        })
      t.default = Ze
    },
  ])
})
//# sourceMappingURL=react-dropdown-tree-select.js.map
