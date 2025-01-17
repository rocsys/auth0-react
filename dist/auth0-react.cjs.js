'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : { default: e };
}

var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function (d, b) {
  extendStatics =
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array &&
      function (d, b) {
        d.__proto__ = b;
      }) ||
    function (d, b) {
      for (var p in b)
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== 'function' && b !== null)
    throw new TypeError(
      'Class extends value ' + String(b) + ' is not a constructor or null'
    );
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype =
    b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
}

var __assign = function () {
  __assign =
    Object.assign ||
    function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    };
  return __assign.apply(this, arguments);
};

function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === 'function')
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (
        e.indexOf(p[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(s, p[i])
      )
        t[p[i]] = s[p[i]];
    }
  return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P
      ? value
      : new P(function (resolve) {
          resolve(value);
        });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator['throw'](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done
        ? resolve(result.value)
        : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: [],
    },
    f,
    y,
    t,
    g;
  return (
    (g = { next: verb(0), throw: verb(1), return: verb(2) }),
    typeof Symbol === 'function' &&
      (g[Symbol.iterator] = function () {
        return this;
      }),
    g
  );
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError('Generator is already executing.');
    while (_)
      try {
        if (
          ((f = 1),
          y &&
            (t =
              op[0] & 2
                ? y['return']
                : op[0]
                ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                : y.next) &&
            !(t = t.call(y, op[1])).done)
        )
          return t;
        if (((y = 0), t)) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (
              !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
              (op[0] === 6 || op[0] === 2)
            ) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var e = function (t, n) {
  return (
    (e =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (e, t) {
          e.__proto__ = t;
        }) ||
      function (e, t) {
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      }),
    e(t, n)
  );
};
function t(t, n) {
  if ('function' != typeof n && null !== n)
    throw new TypeError(
      'Class extends value ' + String(n) + ' is not a constructor or null'
    );
  function r() {
    this.constructor = t;
  }
  e(t, n),
    (t.prototype =
      null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
}
var n = function () {
  return (
    (n =
      Object.assign ||
      function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
          for (var o in (t = arguments[n]))
            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e;
      }),
    n.apply(this, arguments)
  );
};
function r(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
    var o = 0;
    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  }
  return n;
}
function o(e, t, n, r) {
  return new (n || (n = Promise))(function (o, i) {
    function a(e) {
      try {
        s(r.next(e));
      } catch (e) {
        i(e);
      }
    }
    function c(e) {
      try {
        s(r.throw(e));
      } catch (e) {
        i(e);
      }
    }
    function s(e) {
      var t;
      e.done
        ? o(e.value)
        : ((t = e.value),
          t instanceof n
            ? t
            : new n(function (e) {
                e(t);
              })).then(a, c);
    }
    s((r = r.apply(e, t || [])).next());
  });
}
function i(e, t) {
  var n,
    r,
    o,
    i,
    a = {
      label: 0,
      sent: function () {
        if (1 & o[0]) throw o[1];
        return o[1];
      },
      trys: [],
      ops: [],
    };
  return (
    (i = { next: c(0), throw: c(1), return: c(2) }),
    'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this;
      }),
    i
  );
  function c(i) {
    return function (c) {
      return (function (i) {
        if (n) throw new TypeError('Generator is already executing.');
        for (; a; )
          try {
            if (
              ((n = 1),
              r &&
                (o =
                  2 & i[0]
                    ? r.return
                    : i[0]
                    ? r.throw || ((o = r.return) && o.call(r), 0)
                    : r.next) &&
                !(o = o.call(r, i[1])).done)
            )
              return o;
            switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
              case 0:
              case 1:
                o = i;
                break;
              case 4:
                return a.label++, { value: i[1], done: !1 };
              case 5:
                a.label++, (r = i[1]), (i = [0]);
                continue;
              case 7:
                (i = a.ops.pop()), a.trys.pop();
                continue;
              default:
                if (
                  !((o = a.trys),
                  (o = o.length > 0 && o[o.length - 1]) ||
                    (6 !== i[0] && 2 !== i[0]))
                ) {
                  a = 0;
                  continue;
                }
                if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                  a.label = i[1];
                  break;
                }
                if (6 === i[0] && a.label < o[1]) {
                  (a.label = o[1]), (o = i);
                  break;
                }
                if (o && a.label < o[2]) {
                  (a.label = o[2]), a.ops.push(i);
                  break;
                }
                o[2] && a.ops.pop(), a.trys.pop();
                continue;
            }
            i = t.call(e, a);
          } catch (e) {
            (i = [6, e]), (r = 0);
          } finally {
            n = o = 0;
          }
        if (5 & i[0]) throw i[1];
        return { value: i[0] ? i[1] : void 0, done: !0 };
      })([i, c]);
    };
  }
}
function a(e, t) {
  var n = 'function' == typeof Symbol && e[Symbol.iterator];
  if (!n) return e;
  var r,
    o,
    i = n.call(e),
    a = [];
  try {
    for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) a.push(r.value);
  } catch (e) {
    o = { error: e };
  } finally {
    try {
      r && !r.done && (n = i.return) && n.call(i);
    } finally {
      if (o) throw o.error;
    }
  }
  return a;
}
function c(e, t, n) {
  if (n || 2 === arguments.length)
    for (var r, o = 0, i = t.length; o < i; o++)
      (!r && o in t) ||
        (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
  return e.concat(r || Array.prototype.slice.call(t));
}
var s =
  'undefined' != typeof globalThis
    ? globalThis
    : 'undefined' != typeof window
    ? window
    : 'undefined' != typeof global
    ? global
    : 'undefined' != typeof self
    ? self
    : {};
function u(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
function l(e, t) {
  return e((t = { exports: {} }), t.exports), t.exports;
}
var f,
  d,
  h = function (e) {
    return e && e.Math == Math && e;
  },
  p =
    h('object' == typeof globalThis && globalThis) ||
    h('object' == typeof window && window) ||
    h('object' == typeof self && self) ||
    h('object' == typeof s && s) ||
    (function () {
      return this;
    })() ||
    Function('return this')(),
  y = function (e) {
    try {
      return !!e();
    } catch (e) {
      return !0;
    }
  },
  v = !y(function () {
    return (
      7 !=
      Object.defineProperty({}, 1, {
        get: function () {
          return 7;
        },
      })[1]
    );
  }),
  m = !y(function () {
    var e = function () {}.bind();
    return 'function' != typeof e || e.hasOwnProperty('prototype');
  }),
  g = Function.prototype.call,
  b = m
    ? g.bind(g)
    : function () {
        return g.apply(g, arguments);
      },
  w = {}.propertyIsEnumerable,
  S = Object.getOwnPropertyDescriptor,
  _ =
    S && !w.call({ 1: 2 }, 1)
      ? function (e) {
          var t = S(this, e);
          return !!t && t.enumerable;
        }
      : w,
  k = { f: _ },
  I = function (e, t) {
    return {
      enumerable: !(1 & e),
      configurable: !(2 & e),
      writable: !(4 & e),
      value: t,
    };
  },
  T = Function.prototype,
  O = T.bind,
  E = T.call,
  x = m && O.bind(E, E),
  C = m
    ? function (e) {
        return e && x(e);
      }
    : function (e) {
        return (
          e &&
          function () {
            return E.apply(e, arguments);
          }
        );
      },
  R = C({}.toString),
  j = C(''.slice),
  A = function (e) {
    return j(R(e), 8, -1);
  },
  F = p.Object,
  U = C(''.split),
  K = y(function () {
    return !F('z').propertyIsEnumerable(0);
  })
    ? function (e) {
        return 'String' == A(e) ? U(e, '') : F(e);
      }
    : F,
  P = p.TypeError,
  W = function (e) {
    if (null == e) throw P("Can't call method on " + e);
    return e;
  },
  L = function (e) {
    return K(W(e));
  },
  Z = function (e) {
    return 'function' == typeof e;
  },
  G = function (e) {
    return 'object' == typeof e ? null !== e : Z(e);
  },
  X = function (e) {
    return Z(e) ? e : void 0;
  },
  V = function (e, t) {
    return arguments.length < 2 ? X(p[e]) : p[e] && p[e][t];
  },
  D = C({}.isPrototypeOf),
  N = V('navigator', 'userAgent') || '',
  Y = p.process,
  M = p.Deno,
  z = (Y && Y.versions) || (M && M.version),
  B = z && z.v8;
B && (d = (f = B.split('.'))[0] > 0 && f[0] < 4 ? 1 : +(f[0] + f[1])),
  !d &&
    N &&
    (!(f = N.match(/Edge\/(\d+)/)) || f[1] >= 74) &&
    (f = N.match(/Chrome\/(\d+)/)) &&
    (d = +f[1]);
var J = d,
  H =
    !!Object.getOwnPropertySymbols &&
    !y(function () {
      var e = Symbol();
      return (
        !String(e) ||
        !(Object(e) instanceof Symbol) ||
        (!Symbol.sham && J && J < 41)
      );
    }),
  q = H && !Symbol.sham && 'symbol' == typeof Symbol.iterator,
  Q = p.Object,
  $ = q
    ? function (e) {
        return 'symbol' == typeof e;
      }
    : function (e) {
        var t = V('Symbol');
        return Z(t) && D(t.prototype, Q(e));
      },
  ee = p.String,
  te = function (e) {
    try {
      return ee(e);
    } catch (e) {
      return 'Object';
    }
  },
  ne = p.TypeError,
  re = function (e) {
    if (Z(e)) return e;
    throw ne(te(e) + ' is not a function');
  },
  oe = function (e, t) {
    var n = e[t];
    return null == n ? void 0 : re(n);
  },
  ie = p.TypeError,
  ae = Object.defineProperty,
  ce = function (e, t) {
    try {
      ae(p, e, { value: t, configurable: !0, writable: !0 });
    } catch (n) {
      p[e] = t;
    }
    return t;
  },
  se = p['__core-js_shared__'] || ce('__core-js_shared__', {}),
  ue = l(function (e) {
    (e.exports = function (e, t) {
      return se[e] || (se[e] = void 0 !== t ? t : {});
    })('versions', []).push({
      version: '3.22.0',
      mode: 'global',
      copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
      license: 'https://github.com/zloirock/core-js/blob/v3.22.0/LICENSE',
      source: 'https://github.com/zloirock/core-js',
    });
  }),
  le = p.Object,
  fe = function (e) {
    return le(W(e));
  },
  de = C({}.hasOwnProperty),
  he =
    Object.hasOwn ||
    function (e, t) {
      return de(fe(e), t);
    },
  pe = 0,
  ye = Math.random(),
  ve = C((1).toString),
  me = function (e) {
    return 'Symbol(' + (void 0 === e ? '' : e) + ')_' + ve(++pe + ye, 36);
  },
  ge = ue('wks'),
  be = p.Symbol,
  we = be && be.for,
  Se = q ? be : (be && be.withoutSetter) || me,
  _e = function (e) {
    if (!he(ge, e) || (!H && 'string' != typeof ge[e])) {
      var t = 'Symbol.' + e;
      H && he(be, e) ? (ge[e] = be[e]) : (ge[e] = q && we ? we(t) : Se(t));
    }
    return ge[e];
  },
  ke = p.TypeError,
  Ie = _e('toPrimitive'),
  Te = function (e, t) {
    if (!G(e) || $(e)) return e;
    var n,
      r = oe(e, Ie);
    if (r) {
      if ((void 0 === t && (t = 'default'), (n = b(r, e, t)), !G(n) || $(n)))
        return n;
      throw ke("Can't convert object to primitive value");
    }
    return (
      void 0 === t && (t = 'number'),
      (function (e, t) {
        var n, r;
        if ('string' === t && Z((n = e.toString)) && !G((r = b(n, e))))
          return r;
        if (Z((n = e.valueOf)) && !G((r = b(n, e)))) return r;
        if ('string' !== t && Z((n = e.toString)) && !G((r = b(n, e))))
          return r;
        throw ie("Can't convert object to primitive value");
      })(e, t)
    );
  },
  Oe = function (e) {
    var t = Te(e, 'string');
    return $(t) ? t : t + '';
  },
  Ee = p.document,
  xe = G(Ee) && G(Ee.createElement),
  Ce = function (e) {
    return xe ? Ee.createElement(e) : {};
  },
  Re =
    !v &&
    !y(function () {
      return (
        7 !=
        Object.defineProperty(Ce('div'), 'a', {
          get: function () {
            return 7;
          },
        }).a
      );
    }),
  je = Object.getOwnPropertyDescriptor,
  Ae = {
    f: v
      ? je
      : function (e, t) {
          if (((e = L(e)), (t = Oe(t)), Re))
            try {
              return je(e, t);
            } catch (e) {}
          if (he(e, t)) return I(!b(k.f, e, t), e[t]);
        },
  },
  Fe =
    v &&
    y(function () {
      return (
        42 !=
        Object.defineProperty(function () {}, 'prototype', {
          value: 42,
          writable: !1,
        }).prototype
      );
    }),
  Ue = p.String,
  Ke = p.TypeError,
  Pe = function (e) {
    if (G(e)) return e;
    throw Ke(Ue(e) + ' is not an object');
  },
  We = p.TypeError,
  Le = Object.defineProperty,
  Ze = Object.getOwnPropertyDescriptor,
  Ge = {
    f: v
      ? Fe
        ? function (e, t, n) {
            if (
              (Pe(e),
              (t = Oe(t)),
              Pe(n),
              'function' == typeof e &&
                'prototype' === t &&
                'value' in n &&
                'writable' in n &&
                !n.writable)
            ) {
              var r = Ze(e, t);
              r &&
                r.writable &&
                ((e[t] = n.value),
                (n = {
                  configurable:
                    'configurable' in n ? n.configurable : r.configurable,
                  enumerable: 'enumerable' in n ? n.enumerable : r.enumerable,
                  writable: !1,
                }));
            }
            return Le(e, t, n);
          }
        : Le
      : function (e, t, n) {
          if ((Pe(e), (t = Oe(t)), Pe(n), Re))
            try {
              return Le(e, t, n);
            } catch (e) {}
          if ('get' in n || 'set' in n) throw We('Accessors not supported');
          return 'value' in n && (e[t] = n.value), e;
        },
  },
  Xe = v
    ? function (e, t, n) {
        return Ge.f(e, t, I(1, n));
      }
    : function (e, t, n) {
        return (e[t] = n), e;
      },
  Ve = C(Function.toString);
Z(se.inspectSource) ||
  (se.inspectSource = function (e) {
    return Ve(e);
  });
var De,
  Ne,
  Ye,
  Me = se.inspectSource,
  ze = p.WeakMap,
  Be = Z(ze) && /native code/.test(Me(ze)),
  Je = ue('keys'),
  He = function (e) {
    return Je[e] || (Je[e] = me(e));
  },
  qe = {},
  Qe = p.TypeError,
  $e = p.WeakMap;
if (Be || se.state) {
  var et = se.state || (se.state = new $e()),
    tt = C(et.get),
    nt = C(et.has),
    rt = C(et.set);
  (De = function (e, t) {
    if (nt(et, e)) throw new Qe('Object already initialized');
    return (t.facade = e), rt(et, e, t), t;
  }),
    (Ne = function (e) {
      return tt(et, e) || {};
    }),
    (Ye = function (e) {
      return nt(et, e);
    });
} else {
  var ot = He('state');
  (qe[ot] = !0),
    (De = function (e, t) {
      if (he(e, ot)) throw new Qe('Object already initialized');
      return (t.facade = e), Xe(e, ot, t), t;
    }),
    (Ne = function (e) {
      return he(e, ot) ? e[ot] : {};
    }),
    (Ye = function (e) {
      return he(e, ot);
    });
}
var it = {
    set: De,
    get: Ne,
    has: Ye,
    enforce: function (e) {
      return Ye(e) ? Ne(e) : De(e, {});
    },
    getterFor: function (e) {
      return function (t) {
        var n;
        if (!G(t) || (n = Ne(t)).type !== e)
          throw Qe('Incompatible receiver, ' + e + ' required');
        return n;
      };
    },
  },
  at = Function.prototype,
  ct = v && Object.getOwnPropertyDescriptor,
  st = he(at, 'name'),
  ut = {
    EXISTS: st,
    PROPER: st && 'something' === function () {}.name,
    CONFIGURABLE: st && (!v || (v && ct(at, 'name').configurable)),
  },
  lt = l(function (e) {
    var t = ut.CONFIGURABLE,
      n = it.get,
      r = it.enforce,
      o = String(String).split('String');
    (e.exports = function (e, n, i, a) {
      var c,
        s = !!a && !!a.unsafe,
        u = !!a && !!a.enumerable,
        l = !!a && !!a.noTargetGet,
        f = a && void 0 !== a.name ? a.name : n;
      Z(i) &&
        ('Symbol(' === String(f).slice(0, 7) &&
          (f = '[' + String(f).replace(/^Symbol\(([^)]*)\)/, '$1') + ']'),
        (!he(i, 'name') || (t && i.name !== f)) && Xe(i, 'name', f),
        (c = r(i)).source ||
          (c.source = o.join('string' == typeof f ? f : ''))),
        e !== p
          ? (s ? !l && e[n] && (u = !0) : delete e[n],
            u ? (e[n] = i) : Xe(e, n, i))
          : u
          ? (e[n] = i)
          : ce(n, i);
    })(Function.prototype, 'toString', function () {
      return (Z(this) && n(this).source) || Me(this);
    });
  }),
  ft = Math.ceil,
  dt = Math.floor,
  ht = function (e) {
    var t = +e;
    return t != t || 0 === t ? 0 : (t > 0 ? dt : ft)(t);
  },
  pt = Math.max,
  yt = Math.min,
  vt = function (e, t) {
    var n = ht(e);
    return n < 0 ? pt(n + t, 0) : yt(n, t);
  },
  mt = Math.min,
  gt = function (e) {
    return e > 0 ? mt(ht(e), 9007199254740991) : 0;
  },
  bt = function (e) {
    return gt(e.length);
  },
  wt = function (e) {
    return function (t, n, r) {
      var o,
        i = L(t),
        a = bt(i),
        c = vt(r, a);
      if (e && n != n) {
        for (; a > c; ) if ((o = i[c++]) != o) return !0;
      } else
        for (; a > c; c++) if ((e || c in i) && i[c] === n) return e || c || 0;
      return !e && -1;
    };
  },
  St = { includes: wt(!0), indexOf: wt(!1) },
  _t = St.indexOf,
  kt = C([].push),
  It = function (e, t) {
    var n,
      r = L(e),
      o = 0,
      i = [];
    for (n in r) !he(qe, n) && he(r, n) && kt(i, n);
    for (; t.length > o; ) he(r, (n = t[o++])) && (~_t(i, n) || kt(i, n));
    return i;
  },
  Tt = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf',
  ],
  Ot = Tt.concat('length', 'prototype'),
  Et = {
    f:
      Object.getOwnPropertyNames ||
      function (e) {
        return It(e, Ot);
      },
  },
  xt = { f: Object.getOwnPropertySymbols },
  Ct = C([].concat),
  Rt =
    V('Reflect', 'ownKeys') ||
    function (e) {
      var t = Et.f(Pe(e)),
        n = xt.f;
      return n ? Ct(t, n(e)) : t;
    },
  jt = function (e, t, n) {
    for (var r = Rt(t), o = Ge.f, i = Ae.f, a = 0; a < r.length; a++) {
      var c = r[a];
      he(e, c) || (n && he(n, c)) || o(e, c, i(t, c));
    }
  },
  At = /#|\.prototype\./,
  Ft = function (e, t) {
    var n = Kt[Ut(e)];
    return n == Wt || (n != Pt && (Z(t) ? y(t) : !!t));
  },
  Ut = (Ft.normalize = function (e) {
    return String(e).replace(At, '.').toLowerCase();
  }),
  Kt = (Ft.data = {}),
  Pt = (Ft.NATIVE = 'N'),
  Wt = (Ft.POLYFILL = 'P'),
  Lt = Ft,
  Zt = Ae.f,
  Gt = function (e, t) {
    var n,
      r,
      o,
      i,
      a,
      c = e.target,
      s = e.global,
      u = e.stat;
    if ((n = s ? p : u ? p[c] || ce(c, {}) : (p[c] || {}).prototype))
      for (r in t) {
        if (
          ((i = t[r]),
          (o = e.noTargetGet ? (a = Zt(n, r)) && a.value : n[r]),
          !Lt(s ? r : c + (u ? '.' : '#') + r, e.forced) && void 0 !== o)
        ) {
          if (typeof i == typeof o) continue;
          jt(i, o);
        }
        (e.sham || (o && o.sham)) && Xe(i, 'sham', !0), lt(n, r, i, e);
      }
  },
  Xt = {};
Xt[_e('toStringTag')] = 'z';
var Vt,
  Dt = '[object z]' === String(Xt),
  Nt = _e('toStringTag'),
  Yt = p.Object,
  Mt =
    'Arguments' ==
    A(
      (function () {
        return arguments;
      })()
    ),
  zt = Dt
    ? A
    : function (e) {
        var t, n, r;
        return void 0 === e
          ? 'Undefined'
          : null === e
          ? 'Null'
          : 'string' ==
            typeof (n = (function (e, t) {
              try {
                return e[t];
              } catch (e) {}
            })((t = Yt(e)), Nt))
          ? n
          : Mt
          ? A(t)
          : 'Object' == (r = A(t)) && Z(t.callee)
          ? 'Arguments'
          : r;
      },
  Bt = p.String,
  Jt = function (e) {
    if ('Symbol' === zt(e))
      throw TypeError('Cannot convert a Symbol value to a string');
    return Bt(e);
  },
  Ht = _e('match'),
  qt = p.TypeError,
  Qt = function (e) {
    if (
      (function (e) {
        var t;
        return G(e) && (void 0 !== (t = e[Ht]) ? !!t : 'RegExp' == A(e));
      })(e)
    )
      throw qt("The method doesn't accept regular expressions");
    return e;
  },
  $t = _e('match'),
  en = function (e) {
    var t = /./;
    try {
      '/./'[e](t);
    } catch (n) {
      try {
        return (t[$t] = !1), '/./'[e](t);
      } catch (e) {}
    }
    return !1;
  },
  tn = Ae.f,
  nn = C(''.startsWith),
  rn = C(''.slice),
  on = Math.min,
  an = en('startsWith'),
  cn = !(an || ((Vt = tn(String.prototype, 'startsWith')), !Vt || Vt.writable));
Gt(
  { target: 'String', proto: !0, forced: !cn && !an },
  {
    startsWith: function (e) {
      var t = Jt(W(this));
      Qt(e);
      var n = gt(on(arguments.length > 1 ? arguments[1] : void 0, t.length)),
        r = Jt(e);
      return nn ? nn(t, r, n) : rn(t, n, n + r.length) === r;
    },
  }
);
var sn = function (e, t) {
  return C(p[e].prototype[t]);
};
sn('String', 'startsWith');
var un =
    Array.isArray ||
    function (e) {
      return 'Array' == A(e);
    },
  ln = function (e, t, n) {
    var r = Oe(t);
    r in e ? Ge.f(e, r, I(0, n)) : (e[r] = n);
  },
  fn = function () {},
  dn = [],
  hn = V('Reflect', 'construct'),
  pn = /^\s*(?:class|function)\b/,
  yn = C(pn.exec),
  vn = !pn.exec(fn),
  mn = function (e) {
    if (!Z(e)) return !1;
    try {
      return hn(fn, dn, e), !0;
    } catch (e) {
      return !1;
    }
  },
  gn = function (e) {
    if (!Z(e)) return !1;
    switch (zt(e)) {
      case 'AsyncFunction':
      case 'GeneratorFunction':
      case 'AsyncGeneratorFunction':
        return !1;
    }
    try {
      return vn || !!yn(pn, Me(e));
    } catch (e) {
      return !0;
    }
  };
gn.sham = !0;
var bn,
  wn =
    !hn ||
    y(function () {
      var e;
      return (
        mn(mn.call) ||
        !mn(Object) ||
        !mn(function () {
          e = !0;
        }) ||
        e
      );
    })
      ? gn
      : mn,
  Sn = _e('species'),
  _n = p.Array,
  kn = function (e, t) {
    return new ((function (e) {
      var t;
      return (
        un(e) &&
          ((t = e.constructor),
          ((wn(t) && (t === _n || un(t.prototype))) ||
            (G(t) && null === (t = t[Sn]))) &&
            (t = void 0)),
        void 0 === t ? _n : t
      );
    })(e))(0 === t ? 0 : t);
  },
  In = _e('species'),
  Tn = _e('isConcatSpreadable'),
  On = p.TypeError,
  En =
    J >= 51 ||
    !y(function () {
      var e = [];
      return (e[Tn] = !1), e.concat()[0] !== e;
    }),
  xn =
    ((bn = 'concat'),
    J >= 51 ||
      !y(function () {
        var e = [];
        return (
          ((e.constructor = {})[In] = function () {
            return { foo: 1 };
          }),
          1 !== e[bn](Boolean).foo
        );
      })),
  Cn = function (e) {
    if (!G(e)) return !1;
    var t = e[Tn];
    return void 0 !== t ? !!t : un(e);
  };
Gt(
  { target: 'Array', proto: !0, forced: !En || !xn },
  {
    concat: function (e) {
      var t,
        n,
        r,
        o,
        i,
        a = fe(this),
        c = kn(a, 0),
        s = 0;
      for (t = -1, r = arguments.length; t < r; t++)
        if (Cn((i = -1 === t ? a : arguments[t]))) {
          if (s + (o = bt(i)) > 9007199254740991)
            throw On('Maximum allowed index exceeded');
          for (n = 0; n < o; n++, s++) n in i && ln(c, s, i[n]);
        } else {
          if (s >= 9007199254740991) throw On('Maximum allowed index exceeded');
          ln(c, s++, i);
        }
      return (c.length = s), c;
    },
  }
);
var Rn = Dt
  ? {}.toString
  : function () {
      return '[object ' + zt(this) + ']';
    };
Dt || lt(Object.prototype, 'toString', Rn, { unsafe: !0 });
var jn,
  An =
    Object.keys ||
    function (e) {
      return It(e, Tt);
    },
  Fn =
    v && !Fe
      ? Object.defineProperties
      : function (e, t) {
          Pe(e);
          for (var n, r = L(t), o = An(t), i = o.length, a = 0; i > a; )
            Ge.f(e, (n = o[a++]), r[n]);
          return e;
        },
  Un = { f: Fn },
  Kn = V('document', 'documentElement'),
  Pn = He('IE_PROTO'),
  Wn = function () {},
  Ln = function (e) {
    return '<script>' + e + '</script>';
  },
  Zn = function (e) {
    e.write(Ln('')), e.close();
    var t = e.parentWindow.Object;
    return (e = null), t;
  },
  Gn = function () {
    try {
      jn = new ActiveXObject('htmlfile');
    } catch (e) {}
    var e, t;
    Gn =
      'undefined' != typeof document
        ? document.domain && jn
          ? Zn(jn)
          : (((t = Ce('iframe')).style.display = 'none'),
            Kn.appendChild(t),
            (t.src = String('javascript:')),
            (e = t.contentWindow.document).open(),
            e.write(Ln('document.F=Object')),
            e.close(),
            e.F)
        : Zn(jn);
    for (var n = Tt.length; n--; ) delete Gn.prototype[Tt[n]];
    return Gn();
  };
qe[Pn] = !0;
var Xn =
    Object.create ||
    function (e, t) {
      var n;
      return (
        null !== e
          ? ((Wn.prototype = Pe(e)),
            (n = new Wn()),
            (Wn.prototype = null),
            (n[Pn] = e))
          : (n = Gn()),
        void 0 === t ? n : Un.f(n, t)
      );
    },
  Vn = p.Array,
  Dn = Math.max,
  Nn = Et.f,
  Yn =
    'object' == typeof window && window && Object.getOwnPropertyNames
      ? Object.getOwnPropertyNames(window)
      : [],
  Mn = function (e) {
    try {
      return Nn(e);
    } catch (e) {
      return (function (e, t, n) {
        for (
          var r = bt(e),
            o = vt(t, r),
            i = vt(void 0 === n ? r : n, r),
            a = Vn(Dn(i - o, 0)),
            c = 0;
          o < i;
          o++, c++
        )
          ln(a, c, e[o]);
        return (a.length = c), a;
      })(Yn);
    }
  },
  zn = {
    f: function (e) {
      return Yn && 'Window' == A(e) ? Mn(e) : Nn(L(e));
    },
  },
  Bn = { f: _e },
  Jn = p,
  Hn = Ge.f,
  qn = function (e) {
    var t = Jn.Symbol || (Jn.Symbol = {});
    he(t, e) || Hn(t, e, { value: Bn.f(e) });
  },
  Qn = function () {
    var e = V('Symbol'),
      t = e && e.prototype,
      n = t && t.valueOf,
      r = _e('toPrimitive');
    t &&
      !t[r] &&
      lt(t, r, function (e) {
        return b(n, this);
      });
  },
  $n = Ge.f,
  er = _e('toStringTag'),
  tr = function (e, t, n) {
    e && !n && (e = e.prototype),
      e && !he(e, er) && $n(e, er, { configurable: !0, value: t });
  },
  nr = C(C.bind),
  rr = function (e, t) {
    return (
      re(e),
      void 0 === t
        ? e
        : m
        ? nr(e, t)
        : function () {
            return e.apply(t, arguments);
          }
    );
  },
  or = C([].push),
  ir = function (e) {
    var t = 1 == e,
      n = 2 == e,
      r = 3 == e,
      o = 4 == e,
      i = 6 == e,
      a = 7 == e,
      c = 5 == e || i;
    return function (s, u, l, f) {
      for (
        var d,
          h,
          p = fe(s),
          y = K(p),
          v = rr(u, l),
          m = bt(y),
          g = 0,
          b = f || kn,
          w = t ? b(s, m) : n || a ? b(s, 0) : void 0;
        m > g;
        g++
      )
        if ((c || g in y) && ((h = v((d = y[g]), g, p)), e))
          if (t) w[g] = h;
          else if (h)
            switch (e) {
              case 3:
                return !0;
              case 5:
                return d;
              case 6:
                return g;
              case 2:
                or(w, d);
            }
          else
            switch (e) {
              case 4:
                return !1;
              case 7:
                or(w, d);
            }
      return i ? -1 : r || o ? o : w;
    };
  },
  ar = {
    forEach: ir(0),
    map: ir(1),
    filter: ir(2),
    some: ir(3),
    every: ir(4),
    find: ir(5),
    findIndex: ir(6),
    filterReject: ir(7),
  }.forEach,
  cr = He('hidden'),
  sr = it.set,
  ur = it.getterFor('Symbol'),
  lr = Object.prototype,
  fr = p.Symbol,
  dr = fr && fr.prototype,
  hr = p.TypeError,
  pr = p.QObject,
  yr = Ae.f,
  vr = Ge.f,
  mr = zn.f,
  gr = k.f,
  br = C([].push),
  wr = ue('symbols'),
  Sr = ue('op-symbols'),
  _r = ue('wks'),
  kr = !pr || !pr.prototype || !pr.prototype.findChild,
  Ir =
    v &&
    y(function () {
      return (
        7 !=
        Xn(
          vr({}, 'a', {
            get: function () {
              return vr(this, 'a', { value: 7 }).a;
            },
          })
        ).a
      );
    })
      ? function (e, t, n) {
          var r = yr(lr, t);
          r && delete lr[t], vr(e, t, n), r && e !== lr && vr(lr, t, r);
        }
      : vr,
  Tr = function (e, t) {
    var n = (wr[e] = Xn(dr));
    return (
      sr(n, { type: 'Symbol', tag: e, description: t }),
      v || (n.description = t),
      n
    );
  },
  Or = function (e, t, n) {
    e === lr && Or(Sr, t, n), Pe(e);
    var r = Oe(t);
    return (
      Pe(n),
      he(wr, r)
        ? (n.enumerable
            ? (he(e, cr) && e[cr][r] && (e[cr][r] = !1),
              (n = Xn(n, { enumerable: I(0, !1) })))
            : (he(e, cr) || vr(e, cr, I(1, {})), (e[cr][r] = !0)),
          Ir(e, r, n))
        : vr(e, r, n)
    );
  },
  Er = function (e, t) {
    Pe(e);
    var n = L(t),
      r = An(n).concat(jr(n));
    return (
      ar(r, function (t) {
        (v && !b(xr, n, t)) || Or(e, t, n[t]);
      }),
      e
    );
  },
  xr = function (e) {
    var t = Oe(e),
      n = b(gr, this, t);
    return (
      !(this === lr && he(wr, t) && !he(Sr, t)) &&
      (!(n || !he(this, t) || !he(wr, t) || (he(this, cr) && this[cr][t])) || n)
    );
  },
  Cr = function (e, t) {
    var n = L(e),
      r = Oe(t);
    if (n !== lr || !he(wr, r) || he(Sr, r)) {
      var o = yr(n, r);
      return (
        !o || !he(wr, r) || (he(n, cr) && n[cr][r]) || (o.enumerable = !0), o
      );
    }
  },
  Rr = function (e) {
    var t = mr(L(e)),
      n = [];
    return (
      ar(t, function (e) {
        he(wr, e) || he(qe, e) || br(n, e);
      }),
      n
    );
  },
  jr = function (e) {
    var t = e === lr,
      n = mr(t ? Sr : L(e)),
      r = [];
    return (
      ar(n, function (e) {
        !he(wr, e) || (t && !he(lr, e)) || br(r, wr[e]);
      }),
      r
    );
  };
H ||
  ((dr = (fr = function () {
    if (D(dr, this)) throw hr('Symbol is not a constructor');
    var e =
        arguments.length && void 0 !== arguments[0] ? Jt(arguments[0]) : void 0,
      t = me(e),
      n = function (e) {
        this === lr && b(n, Sr, e),
          he(this, cr) && he(this[cr], t) && (this[cr][t] = !1),
          Ir(this, t, I(1, e));
      };
    return v && kr && Ir(lr, t, { configurable: !0, set: n }), Tr(t, e);
  }).prototype),
  lt(dr, 'toString', function () {
    return ur(this).tag;
  }),
  lt(fr, 'withoutSetter', function (e) {
    return Tr(me(e), e);
  }),
  (k.f = xr),
  (Ge.f = Or),
  (Un.f = Er),
  (Ae.f = Cr),
  (Et.f = zn.f = Rr),
  (xt.f = jr),
  (Bn.f = function (e) {
    return Tr(_e(e), e);
  }),
  v &&
    (vr(dr, 'description', {
      configurable: !0,
      get: function () {
        return ur(this).description;
      },
    }),
    lt(lr, 'propertyIsEnumerable', xr, { unsafe: !0 }))),
  Gt({ global: !0, wrap: !0, forced: !H, sham: !H }, { Symbol: fr }),
  ar(An(_r), function (e) {
    qn(e);
  }),
  Gt(
    { target: 'Symbol', stat: !0, forced: !H },
    {
      useSetter: function () {
        kr = !0;
      },
      useSimple: function () {
        kr = !1;
      },
    }
  ),
  Gt(
    { target: 'Object', stat: !0, forced: !H, sham: !v },
    {
      create: function (e, t) {
        return void 0 === t ? Xn(e) : Er(Xn(e), t);
      },
      defineProperty: Or,
      defineProperties: Er,
      getOwnPropertyDescriptor: Cr,
    }
  ),
  Gt({ target: 'Object', stat: !0, forced: !H }, { getOwnPropertyNames: Rr }),
  Qn(),
  tr(fr, 'Symbol'),
  (qe[cr] = !0);
var Ar = H && !!Symbol.for && !!Symbol.keyFor,
  Fr = ue('string-to-symbol-registry'),
  Ur = ue('symbol-to-string-registry');
Gt(
  { target: 'Symbol', stat: !0, forced: !Ar },
  {
    for: function (e) {
      var t = Jt(e);
      if (he(Fr, t)) return Fr[t];
      var n = V('Symbol')(t);
      return (Fr[t] = n), (Ur[n] = t), n;
    },
  }
);
var Kr = ue('symbol-to-string-registry');
Gt(
  { target: 'Symbol', stat: !0, forced: !Ar },
  {
    keyFor: function (e) {
      if (!$(e)) throw TypeError(te(e) + ' is not a symbol');
      if (he(Kr, e)) return Kr[e];
    },
  }
);
var Pr = Function.prototype,
  Wr = Pr.apply,
  Lr = Pr.call,
  Zr =
    ('object' == typeof Reflect && Reflect.apply) ||
    (m
      ? Lr.bind(Wr)
      : function () {
          return Lr.apply(Wr, arguments);
        }),
  Gr = C([].slice),
  Xr = V('JSON', 'stringify'),
  Vr = C(/./.exec),
  Dr = C(''.charAt),
  Nr = C(''.charCodeAt),
  Yr = C(''.replace),
  Mr = C((1).toString),
  zr = /[\uD800-\uDFFF]/g,
  Br = /^[\uD800-\uDBFF]$/,
  Jr = /^[\uDC00-\uDFFF]$/,
  Hr =
    !H ||
    y(function () {
      var e = V('Symbol')();
      return (
        '[null]' != Xr([e]) || '{}' != Xr({ a: e }) || '{}' != Xr(Object(e))
      );
    }),
  qr = y(function () {
    return (
      '"\\udf06\\ud834"' !== Xr('\udf06\ud834') || '"\\udead"' !== Xr('\udead')
    );
  }),
  Qr = function (e, t) {
    var n = Gr(arguments),
      r = t;
    if ((G(t) || void 0 !== e) && !$(e))
      return (
        un(t) ||
          (t = function (e, t) {
            if ((Z(r) && (t = b(r, this, e, t)), !$(t))) return t;
          }),
        (n[1] = t),
        Zr(Xr, null, n)
      );
  },
  $r = function (e, t, n) {
    var r = Dr(n, t - 1),
      o = Dr(n, t + 1);
    return (Vr(Br, e) && !Vr(Jr, o)) || (Vr(Jr, e) && !Vr(Br, r))
      ? '\\u' + Mr(Nr(e, 0), 16)
      : e;
  };
Xr &&
  Gt(
    { target: 'JSON', stat: !0, forced: Hr || qr },
    {
      stringify: function (e, t, n) {
        var r = Gr(arguments),
          o = Zr(Hr ? Qr : Xr, null, r);
        return qr && 'string' == typeof o ? Yr(o, zr, $r) : o;
      },
    }
  );
var eo =
  !H ||
  y(function () {
    xt.f(1);
  });
Gt(
  { target: 'Object', stat: !0, forced: eo },
  {
    getOwnPropertySymbols: function (e) {
      var t = xt.f;
      return t ? t(fe(e)) : [];
    },
  }
),
  qn('asyncIterator');
var to = Ge.f,
  no = p.Symbol,
  ro = no && no.prototype;
if (v && Z(no) && (!('description' in ro) || void 0 !== no().description)) {
  var oo = {},
    io = function () {
      var e =
          arguments.length < 1 || void 0 === arguments[0]
            ? void 0
            : Jt(arguments[0]),
        t = D(ro, this) ? new no(e) : void 0 === e ? no() : no(e);
      return '' === e && (oo[t] = !0), t;
    };
  jt(io, no), (io.prototype = ro), (ro.constructor = io);
  var ao = 'Symbol(test)' == String(no('test')),
    co = C(ro.toString),
    so = C(ro.valueOf),
    uo = /^Symbol\((.*)\)[^)]+$/,
    lo = C(''.replace),
    fo = C(''.slice);
  to(ro, 'description', {
    configurable: !0,
    get: function () {
      var e = so(this),
        t = co(e);
      if (he(oo, e)) return '';
      var n = ao ? fo(t, 7, -1) : lo(t, uo, '$1');
      return '' === n ? void 0 : n;
    },
  }),
    Gt({ global: !0, forced: !0 }, { Symbol: io });
}
qn('hasInstance'),
  qn('isConcatSpreadable'),
  qn('iterator'),
  qn('match'),
  qn('matchAll'),
  qn('replace'),
  qn('search'),
  qn('species'),
  qn('split'),
  qn('toPrimitive'),
  Qn(),
  qn('toStringTag'),
  tr(V('Symbol'), 'Symbol'),
  qn('unscopables'),
  tr(p.JSON, 'JSON', !0),
  tr(Math, 'Math', !0),
  Gt({ global: !0 }, { Reflect: {} }),
  tr(p.Reflect, 'Reflect', !0),
  Jn.Symbol;
var ho,
  po,
  yo,
  vo = C(''.charAt),
  mo = C(''.charCodeAt),
  go = C(''.slice),
  bo = function (e) {
    return function (t, n) {
      var r,
        o,
        i = Jt(W(t)),
        a = ht(n),
        c = i.length;
      return a < 0 || a >= c
        ? e
          ? ''
          : void 0
        : (r = mo(i, a)) < 55296 ||
          r > 56319 ||
          a + 1 === c ||
          (o = mo(i, a + 1)) < 56320 ||
          o > 57343
        ? e
          ? vo(i, a)
          : r
        : e
        ? go(i, a, a + 2)
        : o - 56320 + ((r - 55296) << 10) + 65536;
    };
  },
  wo = { codeAt: bo(!1), charAt: bo(!0) },
  So = !y(function () {
    function e() {}
    return (
      (e.prototype.constructor = null),
      Object.getPrototypeOf(new e()) !== e.prototype
    );
  }),
  _o = He('IE_PROTO'),
  ko = p.Object,
  Io = ko.prototype,
  To = So
    ? ko.getPrototypeOf
    : function (e) {
        var t = fe(e);
        if (he(t, _o)) return t[_o];
        var n = t.constructor;
        return Z(n) && t instanceof n
          ? n.prototype
          : t instanceof ko
          ? Io
          : null;
      },
  Oo = _e('iterator'),
  Eo = !1;
[].keys &&
  ('next' in (yo = [].keys())
    ? (po = To(To(yo))) !== Object.prototype && (ho = po)
    : (Eo = !0));
var xo =
  null == ho ||
  y(function () {
    var e = {};
    return ho[Oo].call(e) !== e;
  });
xo && (ho = {}),
  Z(ho[Oo]) ||
    lt(ho, Oo, function () {
      return this;
    });
var Co = { IteratorPrototype: ho, BUGGY_SAFARI_ITERATORS: Eo },
  Ro = {},
  jo = Co.IteratorPrototype,
  Ao = function () {
    return this;
  },
  Fo = p.String,
  Uo = p.TypeError,
  Ko =
    Object.setPrototypeOf ||
    ('__proto__' in {}
      ? (function () {
          var e,
            t = !1,
            n = {};
          try {
            (e = C(
              Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set
            ))(n, []),
              (t = n instanceof Array);
          } catch (e) {}
          return function (n, r) {
            return (
              Pe(n),
              (function (e) {
                if ('object' == typeof e || Z(e)) return e;
                throw Uo("Can't set " + Fo(e) + ' as a prototype');
              })(r),
              t ? e(n, r) : (n.__proto__ = r),
              n
            );
          };
        })()
      : void 0),
  Po = ut.PROPER,
  Wo = ut.CONFIGURABLE,
  Lo = Co.IteratorPrototype,
  Zo = Co.BUGGY_SAFARI_ITERATORS,
  Go = _e('iterator'),
  Xo = function () {
    return this;
  },
  Vo = function (e, t, n, r, o, i, a) {
    !(function (e, t, n, r) {
      var o = t + ' Iterator';
      (e.prototype = Xn(jo, { next: I(+!r, n) })), tr(e, o, !1), (Ro[o] = Ao);
    })(n, t, r);
    var c,
      s,
      u,
      l = function (e) {
        if (e === o && y) return y;
        if (!Zo && e in h) return h[e];
        switch (e) {
          case 'keys':
          case 'values':
          case 'entries':
            return function () {
              return new n(this, e);
            };
        }
        return function () {
          return new n(this);
        };
      },
      f = t + ' Iterator',
      d = !1,
      h = e.prototype,
      p = h[Go] || h['@@iterator'] || (o && h[o]),
      y = (!Zo && p) || l(o),
      v = ('Array' == t && h.entries) || p;
    if (
      (v &&
        (c = To(v.call(new e()))) !== Object.prototype &&
        c.next &&
        (To(c) !== Lo && (Ko ? Ko(c, Lo) : Z(c[Go]) || lt(c, Go, Xo)),
        tr(c, f, !0)),
      Po &&
        'values' == o &&
        p &&
        'values' !== p.name &&
        (Wo
          ? Xe(h, 'name', 'values')
          : ((d = !0),
            (y = function () {
              return b(p, this);
            }))),
      o)
    )
      if (
        ((s = {
          values: l('values'),
          keys: i ? y : l('keys'),
          entries: l('entries'),
        }),
        a)
      )
        for (u in s) (Zo || d || !(u in h)) && lt(h, u, s[u]);
      else Gt({ target: t, proto: !0, forced: Zo || d }, s);
    return h[Go] !== y && lt(h, Go, y, { name: o }), (Ro[t] = y), s;
  },
  Do = wo.charAt,
  No = it.set,
  Yo = it.getterFor('String Iterator');
Vo(
  String,
  'String',
  function (e) {
    No(this, { type: 'String Iterator', string: Jt(e), index: 0 });
  },
  function () {
    var e,
      t = Yo(this),
      n = t.string,
      r = t.index;
    return r >= n.length
      ? { value: void 0, done: !0 }
      : ((e = Do(n, r)), (t.index += e.length), { value: e, done: !1 });
  }
);
var Mo = function (e, t, n) {
    var r, o;
    Pe(e);
    try {
      if (!(r = oe(e, 'return'))) {
        if ('throw' === t) throw n;
        return n;
      }
      r = b(r, e);
    } catch (e) {
      (o = !0), (r = e);
    }
    if ('throw' === t) throw n;
    if (o) throw r;
    return Pe(r), n;
  },
  zo = function (e, t, n, r) {
    try {
      return r ? t(Pe(n)[0], n[1]) : t(n);
    } catch (t) {
      Mo(e, 'throw', t);
    }
  },
  Bo = _e('iterator'),
  Jo = Array.prototype,
  Ho = function (e) {
    return void 0 !== e && (Ro.Array === e || Jo[Bo] === e);
  },
  qo = _e('iterator'),
  Qo = function (e) {
    if (null != e) return oe(e, qo) || oe(e, '@@iterator') || Ro[zt(e)];
  },
  $o = p.TypeError,
  ei = function (e, t) {
    var n = arguments.length < 2 ? Qo(e) : t;
    if (re(n)) return Pe(b(n, e));
    throw $o(te(e) + ' is not iterable');
  },
  ti = p.Array,
  ni = _e('iterator'),
  ri = !1;
try {
  var oi = 0,
    ii = {
      next: function () {
        return { done: !!oi++ };
      },
      return: function () {
        ri = !0;
      },
    };
  (ii[ni] = function () {
    return this;
  }),
    Array.from(ii, function () {
      throw 2;
    });
} catch (e) {}
var ai = function (e, t) {
    if (!t && !ri) return !1;
    var n = !1;
    try {
      var r = {};
      (r[ni] = function () {
        return {
          next: function () {
            return { done: (n = !0) };
          },
        };
      }),
        e(r);
    } catch (e) {}
    return n;
  },
  ci = !ai(function (e) {
    Array.from(e);
  });
Gt(
  { target: 'Array', stat: !0, forced: ci },
  {
    from: function (e) {
      var t = fe(e),
        n = wn(this),
        r = arguments.length,
        o = r > 1 ? arguments[1] : void 0,
        i = void 0 !== o;
      i && (o = rr(o, r > 2 ? arguments[2] : void 0));
      var a,
        c,
        s,
        u,
        l,
        f,
        d = Qo(t),
        h = 0;
      if (!d || (this == ti && Ho(d)))
        for (a = bt(t), c = n ? new this(a) : ti(a); a > h; h++)
          (f = i ? o(t[h], h) : t[h]), ln(c, h, f);
      else
        for (
          l = (u = ei(t, d)).next, c = n ? new this() : [];
          !(s = b(l, u)).done;
          h++
        )
          (f = i ? zo(u, o, [s.value, h], !0) : s.value), ln(c, h, f);
      return (c.length = h), c;
    },
  }
),
  Jn.Array.from;
var si,
  ui,
  li,
  fi = 'undefined' != typeof ArrayBuffer && 'undefined' != typeof DataView,
  di = Ge.f,
  hi = p.Int8Array,
  pi = hi && hi.prototype,
  yi = p.Uint8ClampedArray,
  vi = yi && yi.prototype,
  mi = hi && To(hi),
  gi = pi && To(pi),
  bi = Object.prototype,
  wi = p.TypeError,
  Si = _e('toStringTag'),
  _i = me('TYPED_ARRAY_TAG'),
  ki = me('TYPED_ARRAY_CONSTRUCTOR'),
  Ii = fi && !!Ko && 'Opera' !== zt(p.opera),
  Ti = !1,
  Oi = {
    Int8Array: 1,
    Uint8Array: 1,
    Uint8ClampedArray: 1,
    Int16Array: 2,
    Uint16Array: 2,
    Int32Array: 4,
    Uint32Array: 4,
    Float32Array: 4,
    Float64Array: 8,
  },
  Ei = { BigInt64Array: 8, BigUint64Array: 8 },
  xi = function (e) {
    if (!G(e)) return !1;
    var t = zt(e);
    return he(Oi, t) || he(Ei, t);
  };
for (si in Oi) (li = (ui = p[si]) && ui.prototype) ? Xe(li, ki, ui) : (Ii = !1);
for (si in Ei) (li = (ui = p[si]) && ui.prototype) && Xe(li, ki, ui);
if (
  (!Ii || !Z(mi) || mi === Function.prototype) &&
  ((mi = function () {
    throw wi('Incorrect invocation');
  }),
  Ii)
)
  for (si in Oi) p[si] && Ko(p[si], mi);
if ((!Ii || !gi || gi === bi) && ((gi = mi.prototype), Ii))
  for (si in Oi) p[si] && Ko(p[si].prototype, gi);
if ((Ii && To(vi) !== gi && Ko(vi, gi), v && !he(gi, Si)))
  for (si in ((Ti = !0),
  di(gi, Si, {
    get: function () {
      return G(this) ? this[_i] : void 0;
    },
  }),
  Oi))
    p[si] && Xe(p[si], _i, si);
var Ci = {
    NATIVE_ARRAY_BUFFER_VIEWS: Ii,
    TYPED_ARRAY_CONSTRUCTOR: ki,
    TYPED_ARRAY_TAG: Ti && _i,
    aTypedArray: function (e) {
      if (xi(e)) return e;
      throw wi('Target is not a typed array');
    },
    aTypedArrayConstructor: function (e) {
      if (Z(e) && (!Ko || D(mi, e))) return e;
      throw wi(te(e) + ' is not a typed array constructor');
    },
    exportTypedArrayMethod: function (e, t, n, r) {
      if (v) {
        if (n)
          for (var o in Oi) {
            var i = p[o];
            if (i && he(i.prototype, e))
              try {
                delete i.prototype[e];
              } catch (n) {
                try {
                  i.prototype[e] = t;
                } catch (e) {}
              }
          }
        (gi[e] && !n) || lt(gi, e, n ? t : (Ii && pi[e]) || t, r);
      }
    },
    exportTypedArrayStaticMethod: function (e, t, n) {
      var r, o;
      if (v) {
        if (Ko) {
          if (n)
            for (r in Oi)
              if ((o = p[r]) && he(o, e))
                try {
                  delete o[e];
                } catch (e) {}
          if (mi[e] && !n) return;
          try {
            return lt(mi, e, n ? t : (Ii && mi[e]) || t);
          } catch (e) {}
        }
        for (r in Oi) !(o = p[r]) || (o[e] && !n) || lt(o, e, t);
      }
    },
    isView: function (e) {
      if (!G(e)) return !1;
      var t = zt(e);
      return 'DataView' === t || he(Oi, t) || he(Ei, t);
    },
    isTypedArray: xi,
    TypedArray: mi,
    TypedArrayPrototype: gi,
  },
  Ri = p.TypeError,
  ji = _e('species'),
  Ai = function (e, t) {
    var n,
      r = Pe(e).constructor;
    return void 0 === r || null == (n = Pe(r)[ji])
      ? t
      : (function (e) {
          if (wn(e)) return e;
          throw Ri(te(e) + ' is not a constructor');
        })(n);
  },
  Fi = Ci.TYPED_ARRAY_CONSTRUCTOR,
  Ui = Ci.aTypedArrayConstructor,
  Ki = Ci.aTypedArray;
(0, Ci.exportTypedArrayMethod)(
  'slice',
  function (e, t) {
    for (
      var n,
        r = Gr(Ki(this), e, t),
        o = Ui(Ai((n = this), n[Fi])),
        i = 0,
        a = r.length,
        c = new o(a);
      a > i;

    )
      c[i] = r[i++];
    return c;
  },
  y(function () {
    new Int8Array(1).slice();
  })
);
var Pi = _e('unscopables'),
  Wi = Array.prototype;
null == Wi[Pi] && Ge.f(Wi, Pi, { configurable: !0, value: Xn(null) });
var Li = function (e) {
    Wi[Pi][e] = !0;
  },
  Zi = St.includes;
Gt(
  { target: 'Array', proto: !0 },
  {
    includes: function (e) {
      return Zi(this, e, arguments.length > 1 ? arguments[1] : void 0);
    },
  }
),
  Li('includes'),
  sn('Array', 'includes');
var Gi = C(''.indexOf);
Gt(
  { target: 'String', proto: !0, forced: !en('includes') },
  {
    includes: function (e) {
      return !!~Gi(
        Jt(W(this)),
        Jt(Qt(e)),
        arguments.length > 1 ? arguments[1] : void 0
      );
    },
  }
),
  sn('String', 'includes');
var Xi = Ge.f,
  Vi = it.set,
  Di = it.getterFor('Array Iterator');
Vo(
  Array,
  'Array',
  function (e, t) {
    Vi(this, { type: 'Array Iterator', target: L(e), index: 0, kind: t });
  },
  function () {
    var e = Di(this),
      t = e.target,
      n = e.kind,
      r = e.index++;
    return !t || r >= t.length
      ? ((e.target = void 0), { value: void 0, done: !0 })
      : 'keys' == n
      ? { value: r, done: !1 }
      : 'values' == n
      ? { value: t[r], done: !1 }
      : { value: [r, t[r]], done: !1 };
  },
  'values'
);
var Ni = (Ro.Arguments = Ro.Array);
if ((Li('keys'), Li('values'), Li('entries'), v && 'values' !== Ni.name))
  try {
    Xi(Ni, 'name', { value: 'values' });
  } catch (e) {}
var Yi = y(function () {
    if ('function' == typeof ArrayBuffer) {
      var e = new ArrayBuffer(8);
      Object.isExtensible(e) && Object.defineProperty(e, 'a', { value: 8 });
    }
  }),
  Mi = Object.isExtensible,
  zi =
    y(function () {
      Mi(1);
    }) || Yi
      ? function (e) {
          return !!G(e) && (!Yi || 'ArrayBuffer' != A(e)) && (!Mi || Mi(e));
        }
      : Mi,
  Bi = !y(function () {
    return Object.isExtensible(Object.preventExtensions({}));
  }),
  Ji = l(function (e) {
    var t = Ge.f,
      n = !1,
      r = me('meta'),
      o = 0,
      i = function (e) {
        t(e, r, { value: { objectID: 'O' + o++, weakData: {} } });
      },
      a = (e.exports = {
        enable: function () {
          (a.enable = function () {}), (n = !0);
          var e = Et.f,
            t = C([].splice),
            o = {};
          (o[r] = 1),
            e(o).length &&
              ((Et.f = function (n) {
                for (var o = e(n), i = 0, a = o.length; i < a; i++)
                  if (o[i] === r) {
                    t(o, i, 1);
                    break;
                  }
                return o;
              }),
              Gt(
                { target: 'Object', stat: !0, forced: !0 },
                { getOwnPropertyNames: zn.f }
              ));
        },
        fastKey: function (e, t) {
          if (!G(e))
            return 'symbol' == typeof e
              ? e
              : ('string' == typeof e ? 'S' : 'P') + e;
          if (!he(e, r)) {
            if (!zi(e)) return 'F';
            if (!t) return 'E';
            i(e);
          }
          return e[r].objectID;
        },
        getWeakData: function (e, t) {
          if (!he(e, r)) {
            if (!zi(e)) return !0;
            if (!t) return !1;
            i(e);
          }
          return e[r].weakData;
        },
        onFreeze: function (e) {
          return Bi && n && zi(e) && !he(e, r) && i(e), e;
        },
      });
    qe[r] = !0;
  });
Ji.enable, Ji.fastKey, Ji.getWeakData, Ji.onFreeze;
var Hi = p.TypeError,
  qi = function (e, t) {
    (this.stopped = e), (this.result = t);
  },
  Qi = qi.prototype,
  $i = function (e, t, n) {
    var r,
      o,
      i,
      a,
      c,
      s,
      u,
      l = n && n.that,
      f = !(!n || !n.AS_ENTRIES),
      d = !(!n || !n.IS_ITERATOR),
      h = !(!n || !n.INTERRUPTED),
      p = rr(t, l),
      y = function (e) {
        return r && Mo(r, 'normal', e), new qi(!0, e);
      },
      v = function (e) {
        return f
          ? (Pe(e), h ? p(e[0], e[1], y) : p(e[0], e[1]))
          : h
          ? p(e, y)
          : p(e);
      };
    if (d) r = e;
    else {
      if (!(o = Qo(e))) throw Hi(te(e) + ' is not iterable');
      if (Ho(o)) {
        for (i = 0, a = bt(e); a > i; i++)
          if ((c = v(e[i])) && D(Qi, c)) return c;
        return new qi(!1);
      }
      r = ei(e, o);
    }
    for (s = r.next; !(u = b(s, r)).done; ) {
      try {
        c = v(u.value);
      } catch (e) {
        Mo(r, 'throw', e);
      }
      if ('object' == typeof c && c && D(Qi, c)) return c;
    }
    return new qi(!1);
  },
  ea = p.TypeError,
  ta = function (e, t) {
    if (D(t, e)) return e;
    throw ea('Incorrect invocation');
  },
  na = function (e, t, n) {
    for (var r in t) lt(e, r, t[r], n);
    return e;
  },
  ra = _e('species'),
  oa = Ge.f,
  ia = Ji.fastKey,
  aa = it.set,
  ca = it.getterFor,
  sa = {
    getConstructor: function (e, t, n, r) {
      var o = e(function (e, o) {
          ta(e, i),
            aa(e, {
              type: t,
              index: Xn(null),
              first: void 0,
              last: void 0,
              size: 0,
            }),
            v || (e.size = 0),
            null != o && $i(o, e[r], { that: e, AS_ENTRIES: n });
        }),
        i = o.prototype,
        a = ca(t),
        c = function (e, t, n) {
          var r,
            o,
            i = a(e),
            c = s(e, t);
          return (
            c
              ? (c.value = n)
              : ((i.last = c =
                  {
                    index: (o = ia(t, !0)),
                    key: t,
                    value: n,
                    previous: (r = i.last),
                    next: void 0,
                    removed: !1,
                  }),
                i.first || (i.first = c),
                r && (r.next = c),
                v ? i.size++ : e.size++,
                'F' !== o && (i.index[o] = c)),
            e
          );
        },
        s = function (e, t) {
          var n,
            r = a(e),
            o = ia(t);
          if ('F' !== o) return r.index[o];
          for (n = r.first; n; n = n.next) if (n.key == t) return n;
        };
      return (
        na(i, {
          clear: function () {
            for (var e = a(this), t = e.index, n = e.first; n; )
              (n.removed = !0),
                n.previous && (n.previous = n.previous.next = void 0),
                delete t[n.index],
                (n = n.next);
            (e.first = e.last = void 0), v ? (e.size = 0) : (this.size = 0);
          },
          delete: function (e) {
            var t = this,
              n = a(t),
              r = s(t, e);
            if (r) {
              var o = r.next,
                i = r.previous;
              delete n.index[r.index],
                (r.removed = !0),
                i && (i.next = o),
                o && (o.previous = i),
                n.first == r && (n.first = o),
                n.last == r && (n.last = i),
                v ? n.size-- : t.size--;
            }
            return !!r;
          },
          forEach: function (e) {
            for (
              var t,
                n = a(this),
                r = rr(e, arguments.length > 1 ? arguments[1] : void 0);
              (t = t ? t.next : n.first);

            )
              for (r(t.value, t.key, this); t && t.removed; ) t = t.previous;
          },
          has: function (e) {
            return !!s(this, e);
          },
        }),
        na(
          i,
          n
            ? {
                get: function (e) {
                  var t = s(this, e);
                  return t && t.value;
                },
                set: function (e, t) {
                  return c(this, 0 === e ? 0 : e, t);
                },
              }
            : {
                add: function (e) {
                  return c(this, (e = 0 === e ? 0 : e), e);
                },
              }
        ),
        v &&
          oa(i, 'size', {
            get: function () {
              return a(this).size;
            },
          }),
        o
      );
    },
    setStrong: function (e, t, n) {
      var r = t + ' Iterator',
        o = ca(t),
        i = ca(r);
      Vo(
        e,
        t,
        function (e, t) {
          aa(this, { type: r, target: e, state: o(e), kind: t, last: void 0 });
        },
        function () {
          for (var e = i(this), t = e.kind, n = e.last; n && n.removed; )
            n = n.previous;
          return e.target && (e.last = n = n ? n.next : e.state.first)
            ? 'keys' == t
              ? { value: n.key, done: !1 }
              : 'values' == t
              ? { value: n.value, done: !1 }
              : { value: [n.key, n.value], done: !1 }
            : ((e.target = void 0), { value: void 0, done: !0 });
        },
        n ? 'entries' : 'values',
        !n,
        !0
      ),
        (function (e) {
          var t = V(e),
            n = Ge.f;
          v &&
            t &&
            !t[ra] &&
            n(t, ra, {
              configurable: !0,
              get: function () {
                return this;
              },
            });
        })(t);
    },
  };
function ua(e) {
  var t = this.constructor;
  return this.then(
    function (n) {
      return t.resolve(e()).then(function () {
        return n;
      });
    },
    function (n) {
      return t.resolve(e()).then(function () {
        return t.reject(n);
      });
    }
  );
}
function la(e) {
  return new this(function (t, n) {
    if (!e || void 0 === e.length)
      return n(
        new TypeError(
          typeof e +
            ' ' +
            e +
            ' is not iterable(cannot read property Symbol(Symbol.iterator))'
        )
      );
    var r = Array.prototype.slice.call(e);
    if (0 === r.length) return t([]);
    var o = r.length;
    function i(e, n) {
      if (n && ('object' == typeof n || 'function' == typeof n)) {
        var a = n.then;
        if ('function' == typeof a)
          return void a.call(
            n,
            function (t) {
              i(e, t);
            },
            function (n) {
              (r[e] = { status: 'rejected', reason: n }), 0 == --o && t(r);
            }
          );
      }
      (r[e] = { status: 'fulfilled', value: n }), 0 == --o && t(r);
    }
    for (var a = 0; a < r.length; a++) i(a, r[a]);
  });
}
!(function (e, t, n) {
  var r = -1 !== e.indexOf('Map'),
    o = -1 !== e.indexOf('Weak'),
    i = r ? 'set' : 'add',
    a = p[e],
    c = a && a.prototype,
    s = a,
    u = {},
    l = function (e) {
      var t = C(c[e]);
      lt(
        c,
        e,
        'add' == e
          ? function (e) {
              return t(this, 0 === e ? 0 : e), this;
            }
          : 'delete' == e
          ? function (e) {
              return !(o && !G(e)) && t(this, 0 === e ? 0 : e);
            }
          : 'get' == e
          ? function (e) {
              return o && !G(e) ? void 0 : t(this, 0 === e ? 0 : e);
            }
          : 'has' == e
          ? function (e) {
              return !(o && !G(e)) && t(this, 0 === e ? 0 : e);
            }
          : function (e, n) {
              return t(this, 0 === e ? 0 : e, n), this;
            }
      );
    };
  if (
    Lt(
      e,
      !Z(a) ||
        !(
          o ||
          (c.forEach &&
            !y(function () {
              new a().entries().next();
            }))
        )
    )
  )
    (s = n.getConstructor(t, e, r, i)), Ji.enable();
  else if (Lt(e, !0)) {
    var f = new s(),
      d = f[i](o ? {} : -0, 1) != f,
      h = y(function () {
        f.has(1);
      }),
      v = ai(function (e) {
        new a(e);
      }),
      m =
        !o &&
        y(function () {
          for (var e = new a(), t = 5; t--; ) e[i](t, t);
          return !e.has(-0);
        });
    v ||
      (((s = t(function (e, t) {
        ta(e, c);
        var n = (function (e, t, n) {
          var r, o;
          return (
            Ko &&
              Z((r = t.constructor)) &&
              r !== n &&
              G((o = r.prototype)) &&
              o !== n.prototype &&
              Ko(e, o),
            e
          );
        })(new a(), e, s);
        return null != t && $i(t, n[i], { that: n, AS_ENTRIES: r }), n;
      })).prototype = c),
      (c.constructor = s)),
      (h || m) && (l('delete'), l('has'), r && l('get')),
      (m || d) && l(i),
      o && c.clear && delete c.clear;
  }
  (u[e] = s),
    Gt({ global: !0, forced: s != a }, u),
    tr(s, e),
    o || n.setStrong(s, e, r);
})(
  'Set',
  function (e) {
    return function () {
      return e(this, arguments.length ? arguments[0] : void 0);
    };
  },
  sa
),
  Jn.Set;
var fa = setTimeout;
function da(e) {
  return Boolean(e && void 0 !== e.length);
}
function ha() {}
function pa(e) {
  if (!(this instanceof pa))
    throw new TypeError('Promises must be constructed via new');
  if ('function' != typeof e) throw new TypeError('not a function');
  (this._state = 0),
    (this._handled = !1),
    (this._value = void 0),
    (this._deferreds = []),
    wa(e, this);
}
function ya(e, t) {
  for (; 3 === e._state; ) e = e._value;
  0 !== e._state
    ? ((e._handled = !0),
      pa._immediateFn(function () {
        var n = 1 === e._state ? t.onFulfilled : t.onRejected;
        if (null !== n) {
          var r;
          try {
            r = n(e._value);
          } catch (e) {
            return void ma(t.promise, e);
          }
          va(t.promise, r);
        } else (1 === e._state ? va : ma)(t.promise, e._value);
      }))
    : e._deferreds.push(t);
}
function va(e, t) {
  try {
    if (t === e)
      throw new TypeError('A promise cannot be resolved with itself.');
    if (t && ('object' == typeof t || 'function' == typeof t)) {
      var n = t.then;
      if (t instanceof pa) return (e._state = 3), (e._value = t), void ga(e);
      if ('function' == typeof n)
        return void wa(
          ((r = n),
          (o = t),
          function () {
            r.apply(o, arguments);
          }),
          e
        );
    }
    (e._state = 1), (e._value = t), ga(e);
  } catch (t) {
    ma(e, t);
  }
  var r, o;
}
function ma(e, t) {
  (e._state = 2), (e._value = t), ga(e);
}
function ga(e) {
  2 === e._state &&
    0 === e._deferreds.length &&
    pa._immediateFn(function () {
      e._handled || pa._unhandledRejectionFn(e._value);
    });
  for (var t = 0, n = e._deferreds.length; t < n; t++) ya(e, e._deferreds[t]);
  e._deferreds = null;
}
function ba(e, t, n) {
  (this.onFulfilled = 'function' == typeof e ? e : null),
    (this.onRejected = 'function' == typeof t ? t : null),
    (this.promise = n);
}
function wa(e, t) {
  var n = !1;
  try {
    e(
      function (e) {
        n || ((n = !0), va(t, e));
      },
      function (e) {
        n || ((n = !0), ma(t, e));
      }
    );
  } catch (e) {
    if (n) return;
    (n = !0), ma(t, e);
  }
}
(pa.prototype.catch = function (e) {
  return this.then(null, e);
}),
  (pa.prototype.then = function (e, t) {
    var n = new this.constructor(ha);
    return ya(this, new ba(e, t, n)), n;
  }),
  (pa.prototype.finally = ua),
  (pa.all = function (e) {
    return new pa(function (t, n) {
      if (!da(e)) return n(new TypeError('Promise.all accepts an array'));
      var r = Array.prototype.slice.call(e);
      if (0 === r.length) return t([]);
      var o = r.length;
      function i(e, a) {
        try {
          if (a && ('object' == typeof a || 'function' == typeof a)) {
            var c = a.then;
            if ('function' == typeof c)
              return void c.call(
                a,
                function (t) {
                  i(e, t);
                },
                n
              );
          }
          (r[e] = a), 0 == --o && t(r);
        } catch (e) {
          n(e);
        }
      }
      for (var a = 0; a < r.length; a++) i(a, r[a]);
    });
  }),
  (pa.allSettled = la),
  (pa.resolve = function (e) {
    return e && 'object' == typeof e && e.constructor === pa
      ? e
      : new pa(function (t) {
          t(e);
        });
  }),
  (pa.reject = function (e) {
    return new pa(function (t, n) {
      n(e);
    });
  }),
  (pa.race = function (e) {
    return new pa(function (t, n) {
      if (!da(e)) return n(new TypeError('Promise.race accepts an array'));
      for (var r = 0, o = e.length; r < o; r++) pa.resolve(e[r]).then(t, n);
    });
  }),
  (pa._immediateFn =
    ('function' == typeof setImmediate &&
      function (e) {
        setImmediate(e);
      }) ||
    function (e) {
      fa(e, 0);
    }),
  (pa._unhandledRejectionFn = function (e) {
    'undefined' != typeof console &&
      console &&
      console.warn('Possible Unhandled Promise Rejection:', e);
  });
var Sa = (function () {
  if ('undefined' != typeof self) return self;
  if ('undefined' != typeof window) return window;
  if ('undefined' != typeof global) return global;
  throw new Error('unable to locate global object');
})();
'function' != typeof Sa.Promise
  ? (Sa.Promise = pa)
  : (Sa.Promise.prototype.finally || (Sa.Promise.prototype.finally = ua),
    Sa.Promise.allSettled || (Sa.Promise.allSettled = la)),
  (function (e) {
    function t() {}
    function n(e, t) {
      if (
        ((e = void 0 === e ? 'utf-8' : e),
        (t = void 0 === t ? { fatal: !1 } : t),
        -1 === o.indexOf(e.toLowerCase()))
      )
        throw new RangeError(
          "Failed to construct 'TextDecoder': The encoding label provided ('" +
            e +
            "') is invalid."
        );
      if (t.fatal)
        throw Error(
          "Failed to construct 'TextDecoder': the 'fatal' option is unsupported."
        );
    }
    function r(e) {
      for (
        var t = 0,
          n = Math.min(65536, e.length + 1),
          r = new Uint16Array(n),
          o = [],
          i = 0;
        ;

      ) {
        var a = t < e.length;
        if (!a || i >= n - 1) {
          if ((o.push(String.fromCharCode.apply(null, r.subarray(0, i))), !a))
            return o.join('');
          (e = e.subarray(t)), (i = t = 0);
        }
        if (0 == (128 & (a = e[t++]))) r[i++] = a;
        else if (192 == (224 & a)) {
          var c = 63 & e[t++];
          r[i++] = ((31 & a) << 6) | c;
        } else if (224 == (240 & a)) {
          c = 63 & e[t++];
          var s = 63 & e[t++];
          r[i++] = ((31 & a) << 12) | (c << 6) | s;
        } else if (240 == (248 & a)) {
          65535 <
            (a =
              ((7 & a) << 18) |
              ((c = 63 & e[t++]) << 12) |
              ((s = 63 & e[t++]) << 6) |
              (63 & e[t++])) &&
            ((a -= 65536),
            (r[i++] = ((a >>> 10) & 1023) | 55296),
            (a = 56320 | (1023 & a))),
            (r[i++] = a);
        }
      }
    }
    if (e.TextEncoder && e.TextDecoder) return !1;
    var o = ['utf-8', 'utf8', 'unicode-1-1-utf-8'];
    Object.defineProperty(t.prototype, 'encoding', { value: 'utf-8' }),
      (t.prototype.encode = function (e, t) {
        if ((t = void 0 === t ? { stream: !1 } : t).stream)
          throw Error("Failed to encode: the 'stream' option is unsupported.");
        t = 0;
        for (
          var n = e.length,
            r = 0,
            o = Math.max(32, n + (n >>> 1) + 7),
            i = new Uint8Array((o >>> 3) << 3);
          t < n;

        ) {
          var a = e.charCodeAt(t++);
          if (55296 <= a && 56319 >= a) {
            if (t < n) {
              var c = e.charCodeAt(t);
              56320 == (64512 & c) &&
                (++t, (a = ((1023 & a) << 10) + (1023 & c) + 65536));
            }
            if (55296 <= a && 56319 >= a) continue;
          }
          if (
            (r + 4 > i.length &&
              ((o += 8),
              (o = ((o *= 1 + (t / e.length) * 2) >>> 3) << 3),
              (c = new Uint8Array(o)).set(i),
              (i = c)),
            0 == (4294967168 & a))
          )
            i[r++] = a;
          else {
            if (0 == (4294965248 & a)) i[r++] = ((a >>> 6) & 31) | 192;
            else if (0 == (4294901760 & a))
              (i[r++] = ((a >>> 12) & 15) | 224),
                (i[r++] = ((a >>> 6) & 63) | 128);
            else {
              if (0 != (4292870144 & a)) continue;
              (i[r++] = ((a >>> 18) & 7) | 240),
                (i[r++] = ((a >>> 12) & 63) | 128),
                (i[r++] = ((a >>> 6) & 63) | 128);
            }
            i[r++] = (63 & a) | 128;
          }
        }
        return i.slice ? i.slice(0, r) : i.subarray(0, r);
      }),
      Object.defineProperty(n.prototype, 'encoding', { value: 'utf-8' }),
      Object.defineProperty(n.prototype, 'fatal', { value: !1 }),
      Object.defineProperty(n.prototype, 'ignoreBOM', { value: !1 });
    var i = r;
    'function' == typeof Buffer && Buffer.from
      ? (i = function (e) {
          return Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString(
            'utf-8'
          );
        })
      : 'function' == typeof Blob &&
        'function' == typeof URL &&
        'function' == typeof URL.createObjectURL &&
        (i = function (e) {
          var t = URL.createObjectURL(
            new Blob([e], { type: 'text/plain;charset=UTF-8' })
          );
          try {
            var n = new XMLHttpRequest();
            return n.open('GET', t, !1), n.send(), n.responseText;
          } catch (t) {
            return r(e);
          } finally {
            URL.revokeObjectURL(t);
          }
        }),
      (n.prototype.decode = function (e, t) {
        if ((t = void 0 === t ? { stream: !1 } : t).stream)
          throw Error("Failed to decode: the 'stream' option is unsupported.");
        return (
          (e =
            e instanceof Uint8Array
              ? e
              : e.buffer instanceof ArrayBuffer
              ? new Uint8Array(e.buffer)
              : new Uint8Array(e)),
          i(e)
        );
      }),
      (e.TextEncoder = t),
      (e.TextDecoder = n);
  })('undefined' != typeof window ? window : s),
  (function () {
    function e(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function t(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function n(e, n, r) {
      return n && t(e.prototype, n), r && t(e, r), e;
    }
    function r(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function'
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        t && i(e, t);
    }
    function o(e) {
      return (
        (o = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        o(e)
      );
    }
    function i(e, t) {
      return (
        (i =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          }),
        i(e, t)
      );
    }
    function a() {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    }
    function c(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function u(e, t) {
      return !t || ('object' != typeof t && 'function' != typeof t) ? c(e) : t;
    }
    function l(e) {
      var t = a();
      return function () {
        var n,
          r = o(e);
        if (t) {
          var i = o(this).constructor;
          n = Reflect.construct(r, arguments, i);
        } else n = r.apply(this, arguments);
        return u(this, n);
      };
    }
    function f(e, t) {
      for (
        ;
        !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = o(e));

      );
      return e;
    }
    function d(e, t, n) {
      return (
        (d =
          'undefined' != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, n) {
                var r = f(e, t);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, t);
                  return o.get ? o.get.call(n) : o.value;
                }
              }),
        d(e, t, n || e)
      );
    }
    var h = (function () {
        function t() {
          e(this, t),
            Object.defineProperty(this, 'listeners', {
              value: {},
              writable: !0,
              configurable: !0,
            });
        }
        return (
          n(t, [
            {
              key: 'addEventListener',
              value: function (e, t, n) {
                e in this.listeners || (this.listeners[e] = []),
                  this.listeners[e].push({ callback: t, options: n });
              },
            },
            {
              key: 'removeEventListener',
              value: function (e, t) {
                if (e in this.listeners)
                  for (
                    var n = this.listeners[e], r = 0, o = n.length;
                    r < o;
                    r++
                  )
                    if (n[r].callback === t) return void n.splice(r, 1);
              },
            },
            {
              key: 'dispatchEvent',
              value: function (e) {
                if (e.type in this.listeners) {
                  for (
                    var t = this.listeners[e.type].slice(), n = 0, r = t.length;
                    n < r;
                    n++
                  ) {
                    var o = t[n];
                    try {
                      o.callback.call(this, e);
                    } catch (e) {
                      Promise.resolve().then(function () {
                        throw e;
                      });
                    }
                    o.options &&
                      o.options.once &&
                      this.removeEventListener(e.type, o.callback);
                  }
                  return !e.defaultPrevented;
                }
              },
            },
          ]),
          t
        );
      })(),
      p = (function (t) {
        r(a, t);
        var i = l(a);
        function a() {
          var t;
          return (
            e(this, a),
            (t = i.call(this)).listeners || h.call(c(t)),
            Object.defineProperty(c(t), 'aborted', {
              value: !1,
              writable: !0,
              configurable: !0,
            }),
            Object.defineProperty(c(t), 'onabort', {
              value: null,
              writable: !0,
              configurable: !0,
            }),
            t
          );
        }
        return (
          n(a, [
            {
              key: 'toString',
              value: function () {
                return '[object AbortSignal]';
              },
            },
            {
              key: 'dispatchEvent',
              value: function (e) {
                'abort' === e.type &&
                  ((this.aborted = !0),
                  'function' == typeof this.onabort &&
                    this.onabort.call(this, e)),
                  d(o(a.prototype), 'dispatchEvent', this).call(this, e);
              },
            },
          ]),
          a
        );
      })(h),
      y = (function () {
        function t() {
          e(this, t),
            Object.defineProperty(this, 'signal', {
              value: new p(),
              writable: !0,
              configurable: !0,
            });
        }
        return (
          n(t, [
            {
              key: 'abort',
              value: function () {
                var e;
                try {
                  e = new Event('abort');
                } catch (t) {
                  'undefined' != typeof document
                    ? document.createEvent
                      ? (e = document.createEvent('Event')).initEvent(
                          'abort',
                          !1,
                          !1
                        )
                      : ((e = document.createEventObject()).type = 'abort')
                    : (e = { type: 'abort', bubbles: !1, cancelable: !1 });
                }
                this.signal.dispatchEvent(e);
              },
            },
            {
              key: 'toString',
              value: function () {
                return '[object AbortController]';
              },
            },
          ]),
          t
        );
      })();
    function v(e) {
      return e.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL
        ? (console.log(
            '__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill'
          ),
          !0)
        : ('function' == typeof e.Request &&
            !e.Request.prototype.hasOwnProperty('signal')) ||
            !e.AbortController;
    }
    'undefined' != typeof Symbol &&
      Symbol.toStringTag &&
      ((y.prototype[Symbol.toStringTag] = 'AbortController'),
      (p.prototype[Symbol.toStringTag] = 'AbortSignal')),
      (function (e) {
        v(e) && ((e.AbortController = y), (e.AbortSignal = p));
      })('undefined' != typeof self ? self : s);
  })();
var _a = l(function (e, t) {
  Object.defineProperty(t, '__esModule', { value: !0 });
  var n = (function () {
    function e() {
      var e = this;
      (this.locked = new Map()),
        (this.addToLocked = function (t, n) {
          var r = e.locked.get(t);
          void 0 === r
            ? void 0 === n
              ? e.locked.set(t, [])
              : e.locked.set(t, [n])
            : void 0 !== n && (r.unshift(n), e.locked.set(t, r));
        }),
        (this.isLocked = function (t) {
          return e.locked.has(t);
        }),
        (this.lock = function (t) {
          return new Promise(function (n, r) {
            e.isLocked(t) ? e.addToLocked(t, n) : (e.addToLocked(t), n());
          });
        }),
        (this.unlock = function (t) {
          var n = e.locked.get(t);
          if (void 0 !== n && 0 !== n.length) {
            var r = n.pop();
            e.locked.set(t, n), void 0 !== r && setTimeout(r, 0);
          } else e.locked.delete(t);
        });
    }
    return (
      (e.getInstance = function () {
        return void 0 === e.instance && (e.instance = new e()), e.instance;
      }),
      e
    );
  })();
  t.default = function () {
    return n.getInstance();
  };
});
u(_a);
var ka = l(function (e, t) {
    var n =
        (s && s.__awaiter) ||
        function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function a(e) {
              try {
                s(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function c(e) {
              try {
                s(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              e.done
                ? o(e.value)
                : new n(function (t) {
                    t(e.value);
                  }).then(a, c);
            }
            s((r = r.apply(e, t || [])).next());
          });
        },
      r =
        (s && s.__generator) ||
        function (e, t) {
          var n,
            r,
            o,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: c(0), throw: c(1), return: c(2) }),
            'function' == typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function c(i) {
            return function (c) {
              return (function (i) {
                if (n) throw new TypeError('Generator is already executing.');
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return a.label++, { value: i[1], done: !1 };
                      case 5:
                        a.label++, (r = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !((o = a.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== i[0] && 2 !== i[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          a.label = i[1];
                          break;
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = i);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(i);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = t.call(e, a);
                  } catch (e) {
                    (i = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, c]);
            };
          }
        };
    Object.defineProperty(t, '__esModule', { value: !0 });
    var o = 'browser-tabs-lock-key';
    function i(e) {
      return new Promise(function (t) {
        return setTimeout(t, e);
      });
    }
    function a(e) {
      for (
        var t = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz',
          n = '',
          r = 0;
        r < e;
        r++
      ) {
        n += t[Math.floor(Math.random() * t.length)];
      }
      return n;
    }
    var c = (function () {
      function e() {
        (this.acquiredIatSet = new Set()),
          (this.id = Date.now().toString() + a(15)),
          (this.acquireLock = this.acquireLock.bind(this)),
          (this.releaseLock = this.releaseLock.bind(this)),
          (this.releaseLock__private__ =
            this.releaseLock__private__.bind(this)),
          (this.waitForSomethingToChange =
            this.waitForSomethingToChange.bind(this)),
          (this.refreshLockWhileAcquired =
            this.refreshLockWhileAcquired.bind(this)),
          void 0 === e.waiters && (e.waiters = []);
      }
      return (
        (e.prototype.acquireLock = function (t, c) {
          return (
            void 0 === c && (c = 5e3),
            n(this, void 0, void 0, function () {
              var n, s, u, l, f, d;
              return r(this, function (r) {
                switch (r.label) {
                  case 0:
                    (n = Date.now() + a(4)),
                      (s = Date.now() + c),
                      (u = o + '-' + t),
                      (l = window.localStorage),
                      (r.label = 1);
                  case 1:
                    return Date.now() < s ? [4, i(30)] : [3, 8];
                  case 2:
                    return (
                      r.sent(),
                      null !== l.getItem(u)
                        ? [3, 5]
                        : ((f = this.id + '-' + t + '-' + n),
                          [4, i(Math.floor(25 * Math.random()))])
                    );
                  case 3:
                    return (
                      r.sent(),
                      l.setItem(
                        u,
                        JSON.stringify({
                          id: this.id,
                          iat: n,
                          timeoutKey: f,
                          timeAcquired: Date.now(),
                          timeRefreshed: Date.now(),
                        })
                      ),
                      [4, i(30)]
                    );
                  case 4:
                    return (
                      r.sent(),
                      null !== (d = l.getItem(u)) &&
                      (d = JSON.parse(d)).id === this.id &&
                      d.iat === n
                        ? (this.acquiredIatSet.add(n),
                          this.refreshLockWhileAcquired(u, n),
                          [2, !0])
                        : [3, 7]
                    );
                  case 5:
                    return (
                      e.lockCorrector(), [4, this.waitForSomethingToChange(s)]
                    );
                  case 6:
                    r.sent(), (r.label = 7);
                  case 7:
                    return (n = Date.now() + a(4)), [3, 1];
                  case 8:
                    return [2, !1];
                }
              });
            })
          );
        }),
        (e.prototype.refreshLockWhileAcquired = function (e, t) {
          return n(this, void 0, void 0, function () {
            var o = this;
            return r(this, function (i) {
              return (
                setTimeout(function () {
                  return n(o, void 0, void 0, function () {
                    var n, o;
                    return r(this, function (r) {
                      switch (r.label) {
                        case 0:
                          return [4, _a.default().lock(t)];
                        case 1:
                          return (
                            r.sent(),
                            this.acquiredIatSet.has(t)
                              ? ((n = window.localStorage),
                                null === (o = n.getItem(e))
                                  ? (_a.default().unlock(t), [2])
                                  : (((o = JSON.parse(o)).timeRefreshed =
                                      Date.now()),
                                    n.setItem(e, JSON.stringify(o)),
                                    _a.default().unlock(t),
                                    this.refreshLockWhileAcquired(e, t),
                                    [2]))
                              : (_a.default().unlock(t), [2])
                          );
                      }
                    });
                  });
                }, 1e3),
                [2]
              );
            });
          });
        }),
        (e.prototype.waitForSomethingToChange = function (t) {
          return n(this, void 0, void 0, function () {
            return r(this, function (n) {
              switch (n.label) {
                case 0:
                  return [
                    4,
                    new Promise(function (n) {
                      var r = !1,
                        o = Date.now(),
                        i = !1;
                      function a() {
                        if (
                          (i ||
                            (window.removeEventListener('storage', a),
                            e.removeFromWaiting(a),
                            clearTimeout(c),
                            (i = !0)),
                          !r)
                        ) {
                          r = !0;
                          var t = 50 - (Date.now() - o);
                          t > 0 ? setTimeout(n, t) : n();
                        }
                      }
                      window.addEventListener('storage', a), e.addToWaiting(a);
                      var c = setTimeout(a, Math.max(0, t - Date.now()));
                    }),
                  ];
                case 1:
                  return n.sent(), [2];
              }
            });
          });
        }),
        (e.addToWaiting = function (t) {
          this.removeFromWaiting(t), void 0 !== e.waiters && e.waiters.push(t);
        }),
        (e.removeFromWaiting = function (t) {
          void 0 !== e.waiters &&
            (e.waiters = e.waiters.filter(function (e) {
              return e !== t;
            }));
        }),
        (e.notifyWaiters = function () {
          void 0 !== e.waiters &&
            e.waiters.slice().forEach(function (e) {
              return e();
            });
        }),
        (e.prototype.releaseLock = function (e) {
          return n(this, void 0, void 0, function () {
            return r(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4, this.releaseLock__private__(e)];
                case 1:
                  return [2, t.sent()];
              }
            });
          });
        }),
        (e.prototype.releaseLock__private__ = function (t) {
          return n(this, void 0, void 0, function () {
            var n, i, a;
            return r(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    (n = window.localStorage),
                    (i = o + '-' + t),
                    null === (a = n.getItem(i))
                      ? [2]
                      : (a = JSON.parse(a)).id !== this.id
                      ? [3, 2]
                      : [4, _a.default().lock(a.iat)]
                  );
                case 1:
                  r.sent(),
                    this.acquiredIatSet.delete(a.iat),
                    n.removeItem(i),
                    _a.default().unlock(a.iat),
                    e.notifyWaiters(),
                    (r.label = 2);
                case 2:
                  return [2];
              }
            });
          });
        }),
        (e.lockCorrector = function () {
          for (
            var t = Date.now() - 5e3,
              n = window.localStorage,
              r = Object.keys(n),
              i = !1,
              a = 0;
            a < r.length;
            a++
          ) {
            var c = r[a];
            if (c.includes(o)) {
              var s = n.getItem(c);
              null !== s &&
                ((void 0 === (s = JSON.parse(s)).timeRefreshed &&
                  s.timeAcquired < t) ||
                  (void 0 !== s.timeRefreshed && s.timeRefreshed < t)) &&
                (n.removeItem(c), (i = !0));
            }
          }
          i && e.notifyWaiters();
        }),
        (e.waiters = void 0),
        e
      );
    })();
    t.default = c;
  }),
  Ia = u(ka),
  Ta = { timeoutInSeconds: 60 },
  Oa = [
    'login_required',
    'consent_required',
    'interaction_required',
    'account_selection_required',
    'access_denied',
  ],
  Ea = { name: 'auth0-spa-js', version: '1.21.1' },
  xa = function () {
    return Date.now();
  },
  Ca = (function (e) {
    function n(t, r) {
      var o = e.call(this, r) || this;
      return (
        (o.error = t),
        (o.error_description = r),
        Object.setPrototypeOf(o, n.prototype),
        o
      );
    }
    return (
      t(n, e),
      (n.fromPayload = function (e) {
        return new n(e.error, e.error_description);
      }),
      n
    );
  })(Error),
  Ra = (function (e) {
    function n(t, r, o, i) {
      void 0 === i && (i = null);
      var a = e.call(this, t, r) || this;
      return (
        (a.state = o),
        (a.appState = i),
        Object.setPrototypeOf(a, n.prototype),
        a
      );
    }
    return t(n, e), n;
  })(Ca),
  ja = (function (e) {
    function n() {
      var t = e.call(this, 'timeout', 'Timeout') || this;
      return Object.setPrototypeOf(t, n.prototype), t;
    }
    return t(n, e), n;
  })(Ca),
  Aa = (function (e) {
    function n(t) {
      var r = e.call(this) || this;
      return (r.popup = t), Object.setPrototypeOf(r, n.prototype), r;
    }
    return t(n, e), n;
  })(ja),
  Fa = (function (e) {
    function n(t) {
      var r = e.call(this, 'cancelled', 'Popup closed') || this;
      return (r.popup = t), Object.setPrototypeOf(r, n.prototype), r;
    }
    return t(n, e), n;
  })(Ca),
  Ua = (function (e) {
    function n(t, r, o) {
      var i = e.call(this, t, r) || this;
      return (i.mfa_token = o), Object.setPrototypeOf(i, n.prototype), i;
    }
    return t(n, e), n;
  })(Ca),
  Ka = function (e) {
    return new Promise(function (t, n) {
      var r,
        o = setInterval(function () {
          e.popup &&
            e.popup.closed &&
            (clearInterval(o),
            clearTimeout(i),
            window.removeEventListener('message', r, !1),
            n(new Fa(e.popup)));
        }, 1e3),
        i = setTimeout(function () {
          clearInterval(o),
            n(new Aa(e.popup)),
            window.removeEventListener('message', r, !1);
        }, 1e3 * (e.timeoutInSeconds || 60));
      (r = function (a) {
        if (a.data && 'authorization_response' === a.data.type) {
          if (
            (clearTimeout(i),
            clearInterval(o),
            window.removeEventListener('message', r, !1),
            e.popup.close(),
            a.data.response.error)
          )
            return n(Ca.fromPayload(a.data.response));
          t(a.data.response);
        }
      }),
        window.addEventListener('message', r);
    });
  },
  Pa = function () {
    return window.crypto || window.msCrypto;
  },
  Wa = function () {
    var e = Pa();
    return e.subtle || e.webkitSubtle;
  },
  La = function () {
    var e =
        '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.',
      t = '';
    return (
      Array.from(Pa().getRandomValues(new Uint8Array(43))).forEach(function (
        n
      ) {
        return (t += e[n % e.length]);
      }),
      t
    );
  },
  Za = function (e) {
    return btoa(e);
  },
  Ga = function (e) {
    return Object.keys(e)
      .filter(function (t) {
        return void 0 !== e[t];
      })
      .map(function (t) {
        return encodeURIComponent(t) + '=' + encodeURIComponent(e[t]);
      })
      .join('&');
  },
  Xa = function (e) {
    return o(void 0, void 0, void 0, function () {
      var t;
      return i(this, function (n) {
        switch (n.label) {
          case 0:
            return (
              (t = Wa().digest(
                { name: 'SHA-256' },
                new TextEncoder().encode(e)
              )),
              window.msCrypto
                ? [
                    2,
                    new Promise(function (e, n) {
                      (t.oncomplete = function (t) {
                        e(t.target.result);
                      }),
                        (t.onerror = function (e) {
                          n(e.error);
                        }),
                        (t.onabort = function () {
                          n('The digest operation was aborted');
                        });
                    }),
                  ]
                : [4, t]
            );
          case 1:
            return [2, n.sent()];
        }
      });
    });
  },
  Va = function (e) {
    return (function (e) {
      return decodeURIComponent(
        atob(e)
          .split('')
          .map(function (e) {
            return '%' + ('00' + e.charCodeAt(0).toString(16)).slice(-2);
          })
          .join('')
      );
    })(e.replace(/_/g, '/').replace(/-/g, '+'));
  },
  Da = function (e) {
    var t = new Uint8Array(e);
    return (function (e) {
      var t = { '+': '-', '/': '_', '=': '' };
      return e.replace(/[+/=]/g, function (e) {
        return t[e];
      });
    })(
      window.btoa(
        String.fromCharCode.apply(String, c([], a(Array.from(t)), !1))
      )
    );
  };
var Na = function (e, t) {
    return o(void 0, void 0, void 0, function () {
      var n, r;
      return i(this, function (o) {
        switch (o.label) {
          case 0:
            return [
              4,
              ((i = e),
              (a = t),
              (a = a || {}),
              new Promise(function (e, t) {
                var n = new XMLHttpRequest(),
                  r = [],
                  o = [],
                  c = {},
                  s = function () {
                    return {
                      ok: 2 == ((n.status / 100) | 0),
                      statusText: n.statusText,
                      status: n.status,
                      url: n.responseURL,
                      text: function () {
                        return Promise.resolve(n.responseText);
                      },
                      json: function () {
                        return Promise.resolve(n.responseText).then(JSON.parse);
                      },
                      blob: function () {
                        return Promise.resolve(new Blob([n.response]));
                      },
                      clone: s,
                      headers: {
                        keys: function () {
                          return r;
                        },
                        entries: function () {
                          return o;
                        },
                        get: function (e) {
                          return c[e.toLowerCase()];
                        },
                        has: function (e) {
                          return e.toLowerCase() in c;
                        },
                      },
                    };
                  };
                for (var u in (n.open(a.method || 'get', i, !0),
                (n.onload = function () {
                  n
                    .getAllResponseHeaders()
                    .replace(
                      /^(.*?):[^\S\n]*([\s\S]*?)$/gm,
                      function (e, t, n) {
                        r.push((t = t.toLowerCase())),
                          o.push([t, n]),
                          (c[t] = c[t] ? c[t] + ',' + n : n);
                      }
                    ),
                    e(s());
                }),
                (n.onerror = t),
                (n.withCredentials = 'include' == a.credentials),
                a.headers))
                  n.setRequestHeader(u, a.headers[u]);
                n.send(a.body || null);
              })),
            ];
          case 1:
            return (n = o.sent()), (r = { ok: n.ok }), [4, n.json()];
          case 2:
            return [2, ((r.json = o.sent()), r)];
        }
        var i, a;
      });
    });
  },
  Ya = function (e, t, n) {
    return o(void 0, void 0, void 0, function () {
      var r, o;
      return i(this, function (i) {
        return (
          (r = new AbortController()),
          (t.signal = r.signal),
          [
            2,
            Promise.race([
              Na(e, t),
              new Promise(function (e, t) {
                o = setTimeout(function () {
                  r.abort(), t(new Error("Timeout when executing 'fetch'"));
                }, n);
              }),
            ]).finally(function () {
              clearTimeout(o);
            }),
          ]
        );
      });
    });
  },
  Ma = function (e, t, n, r, a, c, s) {
    return o(void 0, void 0, void 0, function () {
      return i(this, function (o) {
        return [
          2,
          ((i = {
            auth: { audience: t, scope: n },
            timeout: a,
            fetchUrl: e,
            fetchOptions: r,
            useFormData: s,
          }),
          (u = c),
          new Promise(function (e, t) {
            var n = new MessageChannel();
            (n.port1.onmessage = function (n) {
              n.data.error ? t(new Error(n.data.error)) : e(n.data);
            }),
              u.postMessage(i, [n.port2]);
          })),
        ];
        var i, u;
      });
    });
  },
  za = function (e, t, n, r, a, c, s) {
    return (
      void 0 === s && (s = 1e4),
      o(void 0, void 0, void 0, function () {
        return i(this, function (o) {
          return a ? [2, Ma(e, t, n, r, s, a, c)] : [2, Ya(e, r, s)];
        });
      })
    );
  };
function Ba(e, t, n, a, c, s, u) {
  return o(this, void 0, void 0, function () {
    var o, l, f, d, h, p, y, v, m;
    return i(this, function (i) {
      switch (i.label) {
        case 0:
          (o = null), (f = 0), (i.label = 1);
        case 1:
          if (!(f < 3)) return [3, 6];
          i.label = 2;
        case 2:
          return i.trys.push([2, 4, , 5]), [4, za(e, n, a, c, s, u, t)];
        case 3:
          return (l = i.sent()), (o = null), [3, 6];
        case 4:
          return (d = i.sent()), (o = d), [3, 5];
        case 5:
          return f++, [3, 1];
        case 6:
          if (o) throw ((o.message = o.message || 'Failed to fetch'), o);
          if (
            ((h = l.json),
            (p = h.error),
            (y = h.error_description),
            (v = r(h, ['error', 'error_description'])),
            !l.ok)
          ) {
            if (
              ((m = y || 'HTTP error. Unable to fetch '.concat(e)),
              'mfa_required' === p)
            )
              throw new Ua(p, m, v.mfa_token);
            throw new Ca(p || 'request_error', m);
          }
          return [2, v];
      }
    });
  });
}
function Ja(e, t) {
  var n = e.baseUrl,
    a = e.timeout,
    c = e.audience,
    s = e.scope,
    u = e.auth0Client,
    l = e.useFormData,
    f = r(e, [
      'baseUrl',
      'timeout',
      'audience',
      'scope',
      'auth0Client',
      'useFormData',
    ]);
  return o(this, void 0, void 0, function () {
    var e;
    return i(this, function (r) {
      switch (r.label) {
        case 0:
          return (
            (e = l ? Ga(f) : JSON.stringify(f)),
            [
              4,
              Ba(
                ''.concat(n, '/oauth/token'),
                a,
                c || 'default',
                s,
                {
                  method: 'POST',
                  body: e,
                  headers: {
                    'Content-Type': l
                      ? 'application/x-www-form-urlencoded'
                      : 'application/json',
                    'Auth0-Client': btoa(JSON.stringify(u || Ea)),
                  },
                },
                t,
                l
              ),
            ]
          );
        case 1:
          return [2, r.sent()];
      }
    });
  });
}
var Ha = function (e) {
    return Array.from(new Set(e));
  },
  qa = function () {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return Ha(e.join(' ').trim().split(/\s+/)).join(' ');
  },
  Qa = (function () {
    function e(e, t) {
      void 0 === t && (t = '@@auth0spajs@@'),
        (this.prefix = t),
        (this.client_id = e.client_id),
        (this.scope = e.scope),
        (this.audience = e.audience);
    }
    return (
      (e.prototype.toKey = function () {
        return ''
          .concat(this.prefix, '::')
          .concat(this.client_id, '::')
          .concat(this.audience, '::')
          .concat(this.scope);
      }),
      (e.fromKey = function (t) {
        var n = a(t.split('::'), 4),
          r = n[0],
          o = n[1],
          i = n[2];
        return new e({ client_id: o, scope: n[3], audience: i }, r);
      }),
      (e.fromCacheEntry = function (t) {
        return new e({
          scope: t.scope,
          audience: t.audience,
          client_id: t.client_id,
        });
      }),
      e
    );
  })(),
  $a = (function () {
    function e() {}
    return (
      (e.prototype.set = function (e, t) {
        localStorage.setItem(e, JSON.stringify(t));
      }),
      (e.prototype.get = function (e) {
        var t = window.localStorage.getItem(e);
        if (t)
          try {
            return JSON.parse(t);
          } catch (e) {
            return;
          }
      }),
      (e.prototype.remove = function (e) {
        localStorage.removeItem(e);
      }),
      (e.prototype.allKeys = function () {
        return Object.keys(window.localStorage).filter(function (e) {
          return e.startsWith('@@auth0spajs@@');
        });
      }),
      e
    );
  })(),
  ec = function () {
    var e;
    this.enclosedCache =
      ((e = {}),
      {
        set: function (t, n) {
          e[t] = n;
        },
        get: function (t) {
          var n = e[t];
          if (n) return n;
        },
        remove: function (t) {
          delete e[t];
        },
        allKeys: function () {
          return Object.keys(e);
        },
      });
  },
  tc = (function () {
    function e(e, t, n) {
      (this.cache = e),
        (this.keyManifest = t),
        (this.nowProvider = n),
        (this.nowProvider = this.nowProvider || xa);
    }
    return (
      (e.prototype.get = function (e, t) {
        var n;
        return (
          void 0 === t && (t = 0),
          o(this, void 0, void 0, function () {
            var r, o, a, c, s;
            return i(this, function (i) {
              switch (i.label) {
                case 0:
                  return [4, this.cache.get(e.toKey())];
                case 1:
                  return (r = i.sent()) ? [3, 4] : [4, this.getCacheKeys()];
                case 2:
                  return (o = i.sent())
                    ? (a = this.matchExistingCacheKey(e, o))
                      ? [4, this.cache.get(a)]
                      : [3, 4]
                    : [2];
                case 3:
                  (r = i.sent()), (i.label = 4);
                case 4:
                  return r ? [4, this.nowProvider()] : [2];
                case 5:
                  return (
                    (c = i.sent()),
                    (s = Math.floor(c / 1e3)),
                    r.expiresAt - t < s
                      ? r.body.refresh_token
                        ? ((r.body = { refresh_token: r.body.refresh_token }),
                          [4, this.cache.set(e.toKey(), r)])
                        : [3, 7]
                      : [3, 10]
                  );
                case 6:
                  return i.sent(), [2, r.body];
                case 7:
                  return [4, this.cache.remove(e.toKey())];
                case 8:
                  return (
                    i.sent(),
                    [
                      4,
                      null === (n = this.keyManifest) || void 0 === n
                        ? void 0
                        : n.remove(e.toKey()),
                    ]
                  );
                case 9:
                  return i.sent(), [2];
                case 10:
                  return [2, r.body];
              }
            });
          })
        );
      }),
      (e.prototype.set = function (e) {
        var t;
        return o(this, void 0, void 0, function () {
          var n, r;
          return i(this, function (o) {
            switch (o.label) {
              case 0:
                return (
                  (n = new Qa({
                    client_id: e.client_id,
                    scope: e.scope,
                    audience: e.audience,
                  })),
                  [4, this.wrapCacheEntry(e)]
                );
              case 1:
                return (r = o.sent()), [4, this.cache.set(n.toKey(), r)];
              case 2:
                return (
                  o.sent(),
                  [
                    4,
                    null === (t = this.keyManifest) || void 0 === t
                      ? void 0
                      : t.add(n.toKey()),
                  ]
                );
              case 3:
                return o.sent(), [2];
            }
          });
        });
      }),
      (e.prototype.clear = function (e) {
        var t;
        return o(this, void 0, void 0, function () {
          var n,
            r = this;
          return i(this, function (a) {
            switch (a.label) {
              case 0:
                return [4, this.getCacheKeys()];
              case 1:
                return (n = a.sent())
                  ? [
                      4,
                      n
                        .filter(function (t) {
                          return !e || t.includes(e);
                        })
                        .reduce(function (e, t) {
                          return o(r, void 0, void 0, function () {
                            return i(this, function (n) {
                              switch (n.label) {
                                case 0:
                                  return [4, e];
                                case 1:
                                  return n.sent(), [4, this.cache.remove(t)];
                                case 2:
                                  return n.sent(), [2];
                              }
                            });
                          });
                        }, Promise.resolve()),
                    ]
                  : [2];
              case 2:
                return (
                  a.sent(),
                  [
                    4,
                    null === (t = this.keyManifest) || void 0 === t
                      ? void 0
                      : t.clear(),
                  ]
                );
              case 3:
                return a.sent(), [2];
            }
          });
        });
      }),
      (e.prototype.clearSync = function (e) {
        var t = this,
          n = this.cache.allKeys();
        n &&
          n
            .filter(function (t) {
              return !e || t.includes(e);
            })
            .forEach(function (e) {
              t.cache.remove(e);
            });
      }),
      (e.prototype.wrapCacheEntry = function (e) {
        return o(this, void 0, void 0, function () {
          var t, n, r;
          return i(this, function (o) {
            switch (o.label) {
              case 0:
                return [4, this.nowProvider()];
              case 1:
                return (
                  (t = o.sent()),
                  (n = Math.floor(t / 1e3) + e.expires_in),
                  (r = Math.min(n, e.decodedToken.claims.exp)),
                  [2, { body: e, expiresAt: r }]
                );
            }
          });
        });
      }),
      (e.prototype.getCacheKeys = function () {
        var e;
        return o(this, void 0, void 0, function () {
          var t;
          return i(this, function (n) {
            switch (n.label) {
              case 0:
                return this.keyManifest ? [4, this.keyManifest.get()] : [3, 2];
              case 1:
                return (
                  (t =
                    null === (e = n.sent()) || void 0 === e ? void 0 : e.keys),
                  [3, 4]
                );
              case 2:
                return [4, this.cache.allKeys()];
              case 3:
                (t = n.sent()), (n.label = 4);
              case 4:
                return [2, t];
            }
          });
        });
      }),
      (e.prototype.matchExistingCacheKey = function (e, t) {
        return t.filter(function (t) {
          var n = Qa.fromKey(t),
            r = new Set(n.scope && n.scope.split(' ')),
            o = e.scope.split(' '),
            i =
              n.scope &&
              o.reduce(function (e, t) {
                return e && r.has(t);
              }, !0);
          return (
            '@@auth0spajs@@' === n.prefix &&
            n.client_id === e.client_id &&
            n.audience === e.audience &&
            i
          );
        })[0];
      }),
      e
    );
  })(),
  nc = (function () {
    function e(e, t) {
      (this.storage = e),
        (this.clientId = t),
        (this.storageKey = ''
          .concat('a0.spajs.txs', '.')
          .concat(this.clientId)),
        (this.transaction = this.storage.get(this.storageKey));
    }
    return (
      (e.prototype.create = function (e) {
        (this.transaction = e),
          this.storage.save(this.storageKey, e, { daysUntilExpire: 1 });
      }),
      (e.prototype.get = function () {
        return this.transaction;
      }),
      (e.prototype.remove = function () {
        delete this.transaction, this.storage.remove(this.storageKey);
      }),
      e
    );
  })(),
  rc = function (e) {
    return 'number' == typeof e;
  },
  oc = [
    'iss',
    'aud',
    'exp',
    'nbf',
    'iat',
    'jti',
    'azp',
    'nonce',
    'auth_time',
    'at_hash',
    'c_hash',
    'acr',
    'amr',
    'sub_jwk',
    'cnf',
    'sip_from_tag',
    'sip_date',
    'sip_callid',
    'sip_cseq_num',
    'sip_via_branch',
    'orig',
    'dest',
    'mky',
    'events',
    'toe',
    'txn',
    'rph',
    'sid',
    'vot',
    'vtm',
  ],
  ic = function (e) {
    if (!e.id_token) throw new Error('ID token is required but missing');
    var t = (function (e) {
      var t = e.split('.'),
        n = a(t, 3),
        r = n[0],
        o = n[1],
        i = n[2];
      if (3 !== t.length || !r || !o || !i)
        throw new Error('ID token could not be decoded');
      var c = JSON.parse(Va(o)),
        s = { __raw: e },
        u = {};
      return (
        Object.keys(c).forEach(function (e) {
          (s[e] = c[e]), oc.includes(e) || (u[e] = c[e]);
        }),
        {
          encoded: { header: r, payload: o, signature: i },
          header: JSON.parse(Va(r)),
          claims: s,
          user: u,
        }
      );
    })(e.id_token);
    if (!t.claims.iss)
      throw new Error(
        'Issuer (iss) claim must be a string present in the ID token'
      );
    if (t.claims.iss !== e.iss)
      throw new Error(
        'Issuer (iss) claim mismatch in the ID token; expected "'
          .concat(e.iss, '", found "')
          .concat(t.claims.iss, '"')
      );
    if (!t.user.sub)
      throw new Error(
        'Subject (sub) claim must be a string present in the ID token'
      );
    if ('RS256' !== t.header.alg)
      throw new Error(
        'Signature algorithm of "'.concat(
          t.header.alg,
          '" is not supported. Expected the ID token to be signed with "RS256".'
        )
      );
    if (
      !t.claims.aud ||
      ('string' != typeof t.claims.aud && !Array.isArray(t.claims.aud))
    )
      throw new Error(
        'Audience (aud) claim must be a string or array of strings present in the ID token'
      );
    if (Array.isArray(t.claims.aud)) {
      if (!t.claims.aud.includes(e.aud))
        throw new Error(
          'Audience (aud) claim mismatch in the ID token; expected "'
            .concat(e.aud, '" but was not one of "')
            .concat(t.claims.aud.join(', '), '"')
        );
      if (t.claims.aud.length > 1) {
        if (!t.claims.azp)
          throw new Error(
            'Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values'
          );
        if (t.claims.azp !== e.aud)
          throw new Error(
            'Authorized Party (azp) claim mismatch in the ID token; expected "'
              .concat(e.aud, '", found "')
              .concat(t.claims.azp, '"')
          );
      }
    } else if (t.claims.aud !== e.aud)
      throw new Error(
        'Audience (aud) claim mismatch in the ID token; expected "'
          .concat(e.aud, '" but found "')
          .concat(t.claims.aud, '"')
      );
    if (e.nonce) {
      if (!t.claims.nonce)
        throw new Error(
          'Nonce (nonce) claim must be a string present in the ID token'
        );
      if (t.claims.nonce !== e.nonce)
        throw new Error(
          'Nonce (nonce) claim mismatch in the ID token; expected "'
            .concat(e.nonce, '", found "')
            .concat(t.claims.nonce, '"')
        );
    }
    if (e.max_age && !rc(t.claims.auth_time))
      throw new Error(
        'Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified'
      );
    if (!rc(t.claims.exp))
      throw new Error(
        'Expiration Time (exp) claim must be a number present in the ID token'
      );
    if (!rc(t.claims.iat))
      throw new Error(
        'Issued At (iat) claim must be a number present in the ID token'
      );
    var n = e.leeway || 60,
      r = new Date(e.now || Date.now()),
      o = new Date(0),
      i = new Date(0),
      c = new Date(0);
    if (
      (c.setUTCSeconds(parseInt(t.claims.auth_time) + e.max_age + n),
      o.setUTCSeconds(t.claims.exp + n),
      i.setUTCSeconds(t.claims.nbf - n),
      r > o)
    )
      throw new Error(
        'Expiration Time (exp) claim error in the ID token; current time ('
          .concat(r, ') is after expiration time (')
          .concat(o, ')')
      );
    if (rc(t.claims.nbf) && r < i)
      throw new Error(
        "Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Currrent time ("
          .concat(r, ') is before ')
          .concat(i)
      );
    if (rc(t.claims.auth_time) && r > c)
      throw new Error(
        'Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Currrent time ('
          .concat(r, ') is after last auth at ')
          .concat(c)
      );
    if (e.organizationId) {
      if (!t.claims.org_id)
        throw new Error(
          'Organization ID (org_id) claim must be a string present in the ID token'
        );
      if (e.organizationId !== t.claims.org_id)
        throw new Error(
          'Organization ID (org_id) claim mismatch in the ID token; expected "'
            .concat(e.organizationId, '", found "')
            .concat(t.claims.org_id, '"')
        );
    }
    return t;
  },
  ac = l(function (e, t) {
    var n =
      (s && s.__assign) ||
      function () {
        return (
          (n =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }),
          n.apply(this, arguments)
        );
      };
    function r(e, t) {
      if (!t) return '';
      var n = '; ' + e;
      return !0 === t ? n : n + '=' + t;
    }
    function o(e, t, n) {
      return (
        encodeURIComponent(e)
          .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
          .replace(/\(/g, '%28')
          .replace(/\)/g, '%29') +
        '=' +
        encodeURIComponent(t).replace(
          /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
          decodeURIComponent
        ) +
        (function (e) {
          if ('number' == typeof e.expires) {
            var t = new Date();
            t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires),
              (e.expires = t);
          }
          return (
            r('Expires', e.expires ? e.expires.toUTCString() : '') +
            r('Domain', e.domain) +
            r('Path', e.path) +
            r('Secure', e.secure) +
            r('SameSite', e.sameSite)
          );
        })(n)
      );
    }
    function i(e) {
      for (
        var t = {}, n = e ? e.split('; ') : [], r = /(%[\dA-F]{2})+/gi, o = 0;
        o < n.length;
        o++
      ) {
        var i = n[o].split('='),
          a = i.slice(1).join('=');
        '"' === a.charAt(0) && (a = a.slice(1, -1));
        try {
          t[i[0].replace(r, decodeURIComponent)] = a.replace(
            r,
            decodeURIComponent
          );
        } catch (e) {}
      }
      return t;
    }
    function a() {
      return i(document.cookie);
    }
    function c(e, t, r) {
      document.cookie = o(e, t, n({ path: '/' }, r));
    }
    (t.__esModule = !0),
      (t.encode = o),
      (t.parse = i),
      (t.getAll = a),
      (t.get = function (e) {
        return a()[e];
      }),
      (t.set = c),
      (t.remove = function (e, t) {
        c(e, '', n(n({}, t), { expires: -1 }));
      });
  });
u(ac), ac.encode, ac.parse, ac.getAll;
var cc = ac.get,
  sc = ac.set,
  uc = ac.remove,
  lc = {
    get: function (e) {
      var t = cc(e);
      if (void 0 !== t) return JSON.parse(t);
    },
    save: function (e, t, n) {
      var r = {};
      'https:' === window.location.protocol &&
        (r = { secure: !0, sameSite: 'none' }),
        (null == n ? void 0 : n.daysUntilExpire) &&
          (r.expires = n.daysUntilExpire),
        (null == n ? void 0 : n.cookieDomain) && (r.domain = n.cookieDomain),
        sc(e, JSON.stringify(t), r);
    },
    remove: function (e) {
      uc(e);
    },
  },
  fc = {
    get: function (e) {
      var t = lc.get(e);
      return t || lc.get(''.concat('_legacy_').concat(e));
    },
    save: function (e, t, n) {
      var r = {};
      'https:' === window.location.protocol && (r = { secure: !0 }),
        (null == n ? void 0 : n.daysUntilExpire) &&
          (r.expires = n.daysUntilExpire),
        sc(''.concat('_legacy_').concat(e), JSON.stringify(t), r),
        lc.save(e, t, n);
    },
    remove: function (e) {
      lc.remove(e), lc.remove(''.concat('_legacy_').concat(e));
    },
  },
  dc = {
    get: function (e) {
      if ('undefined' != typeof sessionStorage) {
        var t = sessionStorage.getItem(e);
        if (void 0 !== t) return JSON.parse(t);
      }
    },
    save: function (e, t) {
      sessionStorage.setItem(e, JSON.stringify(t));
    },
    remove: function (e) {
      sessionStorage.removeItem(e);
    },
  };
function hc(e, t, n) {
  var r = void 0 === t ? null : t,
    o = (function (e, t) {
      var n = atob(e);
      if (t) {
        for (var r = new Uint8Array(n.length), o = 0, i = n.length; o < i; ++o)
          r[o] = n.charCodeAt(o);
        return String.fromCharCode.apply(null, new Uint16Array(r.buffer));
      }
      return n;
    })(e, void 0 !== n && n),
    i = o.indexOf('\n', 10) + 1,
    a = o.substring(i) + (r ? '//# sourceMappingURL=' + r : ''),
    c = new Blob([a], { type: 'application/javascript' });
  return URL.createObjectURL(c);
}
var pc,
  yc,
  vc,
  mc,
  gc =
    ((pc =
      'Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwohZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Ci8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKgogICAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uCgogICAgUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55CiAgICBwdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuCgogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICJBUyBJUyIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEgKICAgIFJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWQogICAgQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULAogICAgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NCiAgICBMT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUgogICAgT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUgogICAgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS4KICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovdmFyIGU9ZnVuY3Rpb24oKXtyZXR1cm4gZT1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHIsdD0xLG49YXJndW1lbnRzLmxlbmd0aDt0PG47dCsrKWZvcih2YXIgbyBpbiByPWFyZ3VtZW50c1t0XSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocixvKSYmKGVbb109cltvXSk7cmV0dXJuIGV9LGUuYXBwbHkodGhpcyxhcmd1bWVudHMpfTtmdW5jdGlvbiByKGUscix0LG4pe3JldHVybiBuZXcodHx8KHQ9UHJvbWlzZSkpKChmdW5jdGlvbihvLGEpe2Z1bmN0aW9uIHMoZSl7dHJ5e2Mobi5uZXh0KGUpKX1jYXRjaChlKXthKGUpfX1mdW5jdGlvbiBpKGUpe3RyeXtjKG4udGhyb3coZSkpfWNhdGNoKGUpe2EoZSl9fWZ1bmN0aW9uIGMoZSl7dmFyIHI7ZS5kb25lP28oZS52YWx1ZSk6KHI9ZS52YWx1ZSxyIGluc3RhbmNlb2YgdD9yOm5ldyB0KChmdW5jdGlvbihlKXtlKHIpfSkpKS50aGVuKHMsaSl9Yygobj1uLmFwcGx5KGUscnx8W10pKS5uZXh0KCkpfSkpfWZ1bmN0aW9uIHQoZSxyKXt2YXIgdCxuLG8sYSxzPXtsYWJlbDowLHNlbnQ6ZnVuY3Rpb24oKXtpZigxJm9bMF0pdGhyb3cgb1sxXTtyZXR1cm4gb1sxXX0sdHJ5czpbXSxvcHM6W119O3JldHVybiBhPXtuZXh0OmkoMCksdGhyb3c6aSgxKSxyZXR1cm46aSgyKX0sImZ1bmN0aW9uIj09dHlwZW9mIFN5bWJvbCYmKGFbU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfSksYTtmdW5jdGlvbiBpKGEpe3JldHVybiBmdW5jdGlvbihpKXtyZXR1cm4gZnVuY3Rpb24oYSl7aWYodCl0aHJvdyBuZXcgVHlwZUVycm9yKCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuIik7Zm9yKDtzOyl0cnl7aWYodD0xLG4mJihvPTImYVswXT9uLnJldHVybjphWzBdP24udGhyb3d8fCgobz1uLnJldHVybikmJm8uY2FsbChuKSwwKTpuLm5leHQpJiYhKG89by5jYWxsKG4sYVsxXSkpLmRvbmUpcmV0dXJuIG87c3dpdGNoKG49MCxvJiYoYT1bMiZhWzBdLG8udmFsdWVdKSxhWzBdKXtjYXNlIDA6Y2FzZSAxOm89YTticmVhaztjYXNlIDQ6cmV0dXJuIHMubGFiZWwrKyx7dmFsdWU6YVsxXSxkb25lOiExfTtjYXNlIDU6cy5sYWJlbCsrLG49YVsxXSxhPVswXTtjb250aW51ZTtjYXNlIDc6YT1zLm9wcy5wb3AoKSxzLnRyeXMucG9wKCk7Y29udGludWU7ZGVmYXVsdDppZighKG89cy50cnlzLChvPW8ubGVuZ3RoPjAmJm9bby5sZW5ndGgtMV0pfHw2IT09YVswXSYmMiE9PWFbMF0pKXtzPTA7Y29udGludWV9aWYoMz09PWFbMF0mJighb3x8YVsxXT5vWzBdJiZhWzFdPG9bM10pKXtzLmxhYmVsPWFbMV07YnJlYWt9aWYoNj09PWFbMF0mJnMubGFiZWw8b1sxXSl7cy5sYWJlbD1vWzFdLG89YTticmVha31pZihvJiZzLmxhYmVsPG9bMl0pe3MubGFiZWw9b1syXSxzLm9wcy5wdXNoKGEpO2JyZWFrfW9bMl0mJnMub3BzLnBvcCgpLHMudHJ5cy5wb3AoKTtjb250aW51ZX1hPXIuY2FsbChlLHMpfWNhdGNoKGUpe2E9WzYsZV0sbj0wfWZpbmFsbHl7dD1vPTB9aWYoNSZhWzBdKXRocm93IGFbMV07cmV0dXJue3ZhbHVlOmFbMF0/YVsxXTp2b2lkIDAsZG9uZTohMH19KFthLGldKX19fXZhciBuPXt9LG89ZnVuY3Rpb24oZSxyKXtyZXR1cm4iIi5jb25jYXQoZSwifCIpLmNvbmNhdChyKX07YWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsKGZ1bmN0aW9uKGEpe3ZhciBzPWEuZGF0YSxpPXMudGltZW91dCxjPXMuYXV0aCx1PXMuZmV0Y2hVcmwsZj1zLmZldGNoT3B0aW9ucyxsPXMudXNlRm9ybURhdGEsaD1mdW5jdGlvbihlLHIpe3ZhciB0PSJmdW5jdGlvbiI9PXR5cGVvZiBTeW1ib2wmJmVbU3ltYm9sLml0ZXJhdG9yXTtpZighdClyZXR1cm4gZTt2YXIgbixvLGE9dC5jYWxsKGUpLHM9W107dHJ5e2Zvcig7KHZvaWQgMD09PXJ8fHItLSA+MCkmJiEobj1hLm5leHQoKSkuZG9uZTspcy5wdXNoKG4udmFsdWUpfWNhdGNoKGUpe289e2Vycm9yOmV9fWZpbmFsbHl7dHJ5e24mJiFuLmRvbmUmJih0PWEucmV0dXJuKSYmdC5jYWxsKGEpfWZpbmFsbHl7aWYobyl0aHJvdyBvLmVycm9yfX1yZXR1cm4gc30oYS5wb3J0cywxKVswXTtyZXR1cm4gcih2b2lkIDAsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXt2YXIgcixhLHMscCx5LGIsZCx2LHcsZztyZXR1cm4gdCh0aGlzLChmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnM9KGE9Y3x8e30pLmF1ZGllbmNlLHA9YS5zY29wZSx0LmxhYmVsPTE7Y2FzZSAxOmlmKHQudHJ5cy5wdXNoKFsxLDcsLDhdKSwhKHk9bD8oaz1mLmJvZHksUz1uZXcgVVJMU2VhcmNoUGFyYW1zKGspLF89e30sUy5mb3JFYWNoKChmdW5jdGlvbihlLHIpe19bcl09ZX0pKSxfKTpKU09OLnBhcnNlKGYuYm9keSkpLnJlZnJlc2hfdG9rZW4mJiJyZWZyZXNoX3Rva2VuIj09PXkuZ3JhbnRfdHlwZSl7aWYoYj1mdW5jdGlvbihlLHIpe3JldHVybiBuW28oZSxyKV19KHMscCksIWIpdGhyb3cgbmV3IEVycm9yKCJUaGUgd2ViIHdvcmtlciBpcyBtaXNzaW5nIHRoZSByZWZyZXNoIHRva2VuIik7Zi5ib2R5PWw/bmV3IFVSTFNlYXJjaFBhcmFtcyhlKGUoe30seSkse3JlZnJlc2hfdG9rZW46Yn0pKS50b1N0cmluZygpOkpTT04uc3RyaW5naWZ5KGUoZSh7fSx5KSx7cmVmcmVzaF90b2tlbjpifSkpfWQ9dm9pZCAwLCJmdW5jdGlvbiI9PXR5cGVvZiBBYm9ydENvbnRyb2xsZXImJihkPW5ldyBBYm9ydENvbnRyb2xsZXIsZi5zaWduYWw9ZC5zaWduYWwpLHY9dm9pZCAwLHQubGFiZWw9MjtjYXNlIDI6cmV0dXJuIHQudHJ5cy5wdXNoKFsyLDQsLDVdKSxbNCxQcm9taXNlLnJhY2UoWyhtPWksbmV3IFByb21pc2UoKGZ1bmN0aW9uKGUpe3JldHVybiBzZXRUaW1lb3V0KGUsbSl9KSkpLGZldGNoKHUsZSh7fSxmKSldKV07Y2FzZSAzOnJldHVybiB2PXQuc2VudCgpLFszLDVdO2Nhc2UgNDpyZXR1cm4gdz10LnNlbnQoKSxoLnBvc3RNZXNzYWdlKHtlcnJvcjp3Lm1lc3NhZ2V9KSxbMl07Y2FzZSA1OnJldHVybiB2P1s0LHYuanNvbigpXTooZCYmZC5hYm9ydCgpLGgucG9zdE1lc3NhZ2Uoe2Vycm9yOiJUaW1lb3V0IHdoZW4gZXhlY3V0aW5nICdmZXRjaCcifSksWzJdKTtjYXNlIDY6cmV0dXJuKHI9dC5zZW50KCkpLnJlZnJlc2hfdG9rZW4/KGZ1bmN0aW9uKGUscix0KXtuW28ocix0KV09ZX0oci5yZWZyZXNoX3Rva2VuLHMscCksZGVsZXRlIHIucmVmcmVzaF90b2tlbik6ZnVuY3Rpb24oZSxyKXtkZWxldGUgbltvKGUscildfShzLHApLGgucG9zdE1lc3NhZ2Uoe29rOnYub2ssanNvbjpyfSksWzMsOF07Y2FzZSA3OnJldHVybiBnPXQuc2VudCgpLGgucG9zdE1lc3NhZ2Uoe29rOiExLGpzb246e2Vycm9yX2Rlc2NyaXB0aW9uOmcubWVzc2FnZX19KSxbMyw4XTtjYXNlIDg6cmV0dXJuWzJdfXZhciBtLGssUyxffSkpfSkpfSkpfSgpOwoK'),
    (yc = null),
    (vc = !1),
    function (e) {
      return (mc = mc || hc(pc, yc, vc)), new Worker(mc, e);
    }),
  bc = {},
  wc = (function () {
    function e(e, t) {
      (this.cache = e),
        (this.clientId = t),
        (this.manifestKey = this.createManifestKeyFrom(this.clientId));
    }
    return (
      (e.prototype.add = function (e) {
        var t;
        return o(this, void 0, void 0, function () {
          var n, r;
          return i(this, function (o) {
            switch (o.label) {
              case 0:
                return (r = Set.bind), [4, this.cache.get(this.manifestKey)];
              case 1:
                return (
                  (n = new (r.apply(Set, [
                    void 0,
                    (null === (t = o.sent()) || void 0 === t
                      ? void 0
                      : t.keys) || [],
                  ]))()).add(e),
                  [
                    4,
                    this.cache.set(this.manifestKey, { keys: c([], a(n), !1) }),
                  ]
                );
              case 2:
                return o.sent(), [2];
            }
          });
        });
      }),
      (e.prototype.remove = function (e) {
        return o(this, void 0, void 0, function () {
          var t, n;
          return i(this, function (r) {
            switch (r.label) {
              case 0:
                return [4, this.cache.get(this.manifestKey)];
              case 1:
                return (t = r.sent())
                  ? ((n = new Set(t.keys)).delete(e),
                    n.size > 0
                      ? [
                          4,
                          this.cache.set(this.manifestKey, {
                            keys: c([], a(n), !1),
                          }),
                        ]
                      : [3, 3])
                  : [3, 5];
              case 2:
              case 4:
                return [2, r.sent()];
              case 3:
                return [4, this.cache.remove(this.manifestKey)];
              case 5:
                return [2];
            }
          });
        });
      }),
      (e.prototype.get = function () {
        return this.cache.get(this.manifestKey);
      }),
      (e.prototype.clear = function () {
        return this.cache.remove(this.manifestKey);
      }),
      (e.prototype.createManifestKeyFrom = function (e) {
        return ''.concat('@@auth0spajs@@', '::').concat(e);
      }),
      e
    );
  })(),
  Sc = new Ia(),
  _c = {
    memory: function () {
      return new ec().enclosedCache;
    },
    localstorage: function () {
      return new $a();
    },
  },
  kc = function (e) {
    return _c[e];
  },
  Ic = function () {
    return !/Trident.*rv:11\.0/.test(navigator.userAgent);
  },
  Tc = (function () {
    function e(e) {
      var t, n, o, i;
      if (
        ((this.options = e),
        'undefined' != typeof window &&
          (function () {
            if (!Pa())
              throw new Error(
                'For security reasons, `window.crypto` is required to run `auth0-spa-js`.'
              );
            if (void 0 === Wa())
              throw new Error(
                '\n      auth0-spa-js must run on a secure origin. See https://github.com/auth0/auth0-spa-js/blob/master/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin for more information.\n    '
              );
          })(),
        e.cache &&
          e.cacheLocation &&
          console.warn(
            'Both `cache` and `cacheLocation` options have been specified in the Auth0Client configuration; ignoring `cacheLocation` and using `cache`.'
          ),
        e.cache)
      )
        o = e.cache;
      else {
        if (
          ((this.cacheLocation = e.cacheLocation || 'memory'),
          !kc(this.cacheLocation))
        )
          throw new Error(
            'Invalid cache location "'.concat(this.cacheLocation, '"')
          );
        o = kc(this.cacheLocation)();
      }
      (this.httpTimeoutMs = e.httpTimeoutInSeconds
        ? 1e3 * e.httpTimeoutInSeconds
        : 1e4),
        (this.cookieStorage = !1 === e.legacySameSiteCookie ? lc : fc),
        (this.orgHintCookieName =
          ((i = this.options.client_id),
          'auth0.'.concat(i, '.organization_hint'))),
        (this.isAuthenticatedCookieName = (function (e) {
          return 'auth0.'.concat(e, '.is.authenticated');
        })(this.options.client_id)),
        (this.sessionCheckExpiryDays = e.sessionCheckExpiryDays || 1);
      var a,
        c = e.useCookiesForTransactions ? this.cookieStorage : dc;
      (this.scope = this.options.scope),
        (this.transactionManager = new nc(c, this.options.client_id)),
        (this.nowProvider = this.options.nowProvider || xa),
        (this.cacheManager = new tc(
          o,
          o.allKeys ? null : new wc(o, this.options.client_id),
          this.nowProvider
        )),
        (this.domainUrl =
          ((a = this.options.domain),
          /^https?:\/\//.test(a) ? a : 'https://'.concat(a))),
        (this.tokenIssuer = (function (e, t) {
          return e
            ? e.startsWith('https://')
              ? e
              : 'https://'.concat(e, '/')
            : ''.concat(t, '/');
        })(this.options.issuer, this.domainUrl)),
        (this.defaultScope = qa(
          'openid',
          void 0 !==
            (null ===
              (n =
                null === (t = this.options) || void 0 === t
                  ? void 0
                  : t.advancedOptions) || void 0 === n
              ? void 0
              : n.defaultScope)
            ? this.options.advancedOptions.defaultScope
            : 'openid profile email'
        )),
        this.options.useRefreshTokens &&
          (this.scope = qa(this.scope, 'offline_access')),
        'undefined' != typeof window &&
          window.Worker &&
          this.options.useRefreshTokens &&
          'memory' === this.cacheLocation &&
          Ic() &&
          (this.worker = new gc()),
        (this.customOptions = (function (e) {
          return (
            e.advancedOptions,
            e.audience,
            e.auth0Client,
            e.authorizeTimeoutInSeconds,
            e.cacheLocation,
            e.client_id,
            e.domain,
            e.issuer,
            e.leeway,
            e.max_age,
            e.redirect_uri,
            e.scope,
            e.useRefreshTokens,
            e.useCookiesForTransactions,
            e.useFormData,
            r(e, [
              'advancedOptions',
              'audience',
              'auth0Client',
              'authorizeTimeoutInSeconds',
              'cacheLocation',
              'client_id',
              'domain',
              'issuer',
              'leeway',
              'max_age',
              'redirect_uri',
              'scope',
              'useRefreshTokens',
              'useCookiesForTransactions',
              'useFormData',
            ])
          );
        })(e));
    }
    return (
      (e.prototype._url = function (e) {
        var t = encodeURIComponent(
          btoa(JSON.stringify(this.options.auth0Client || Ea))
        );
        return ''.concat(this.domainUrl).concat(e, '&auth0Client=').concat(t);
      }),
      (e.prototype._getParams = function (e, t, o, i, a) {
        var c = this.options;
        c.useRefreshTokens,
          c.useCookiesForTransactions,
          c.useFormData,
          c.auth0Client,
          c.cacheLocation,
          c.advancedOptions,
          c.detailedResponse,
          c.nowProvider,
          c.authorizeTimeoutInSeconds,
          c.legacySameSiteCookie,
          c.sessionCheckExpiryDays,
          c.domain,
          c.leeway,
          c.httpTimeoutInSeconds;
        var s = r(c, [
          'useRefreshTokens',
          'useCookiesForTransactions',
          'useFormData',
          'auth0Client',
          'cacheLocation',
          'advancedOptions',
          'detailedResponse',
          'nowProvider',
          'authorizeTimeoutInSeconds',
          'legacySameSiteCookie',
          'sessionCheckExpiryDays',
          'domain',
          'leeway',
          'httpTimeoutInSeconds',
        ]);
        return n(n(n({}, s), e), {
          scope: qa(this.defaultScope, this.scope, e.scope),
          response_type: 'code',
          response_mode: 'query',
          state: t,
          nonce: o,
          redirect_uri: a || this.options.redirect_uri,
          code_challenge: i,
          code_challenge_method: 'S256',
        });
      }),
      (e.prototype._authorizeUrl = function (e) {
        return this._url('/authorize?'.concat(Ga(e)));
      }),
      (e.prototype._verifyIdToken = function (e, t, n) {
        return o(this, void 0, void 0, function () {
          var r;
          return i(this, function (o) {
            switch (o.label) {
              case 0:
                return [4, this.nowProvider()];
              case 1:
                return (
                  (r = o.sent()),
                  [
                    2,
                    ic({
                      iss: this.tokenIssuer,
                      aud: this.options.client_id,
                      id_token: e,
                      nonce: t,
                      organizationId: n,
                      leeway: this.options.leeway,
                      max_age: this._parseNumber(this.options.max_age),
                      now: r,
                    }),
                  ]
                );
            }
          });
        });
      }),
      (e.prototype._parseNumber = function (e) {
        return 'string' != typeof e ? e : parseInt(e, 10) || void 0;
      }),
      (e.prototype._processOrgIdHint = function (e) {
        e
          ? this.cookieStorage.save(this.orgHintCookieName, e, {
              daysUntilExpire: this.sessionCheckExpiryDays,
              cookieDomain: this.options.cookieDomain,
            })
          : this.cookieStorage.remove(this.orgHintCookieName);
      }),
      (e.prototype.buildAuthorizeUrl = function (e) {
        return (
          void 0 === e && (e = {}),
          o(this, void 0, void 0, function () {
            var t, o, a, c, s, u, l, f, d, h, p, y;
            return i(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    (t = e.redirect_uri),
                    (o = e.appState),
                    (a = r(e, ['redirect_uri', 'appState'])),
                    (c = Za(La())),
                    (s = Za(La())),
                    (u = La()),
                    [4, Xa(u)]
                  );
                case 1:
                  return (
                    (l = i.sent()),
                    (f = Da(l)),
                    (d = e.fragment ? '#'.concat(e.fragment) : ''),
                    (h = this._getParams(a, c, s, f, t)),
                    (p = this._authorizeUrl(h)),
                    (y = e.organization || this.options.organization),
                    this.transactionManager.create(
                      n(
                        {
                          nonce: s,
                          code_verifier: u,
                          appState: o,
                          scope: h.scope,
                          audience: h.audience || 'default',
                          redirect_uri: h.redirect_uri,
                          state: c,
                        },
                        y && { organizationId: y }
                      )
                    ),
                    [2, p + d]
                  );
              }
            });
          })
        );
      }),
      (e.prototype.loginWithPopup = function (e, t) {
        return o(this, void 0, void 0, function () {
          var o, a, c, s, u, l, f, d, h, p, y, v, m;
          return i(this, function (i) {
            switch (i.label) {
              case 0:
                if (
                  ((e = e || {}),
                  !(t = t || {}).popup &&
                    ((t.popup = (function (e) {
                      var t = window.screenX + (window.innerWidth - 400) / 2,
                        n = window.screenY + (window.innerHeight - 600) / 2;
                      return window.open(
                        e,
                        'auth0:authorize:popup',
                        'left='
                          .concat(t, ',top=')
                          .concat(n, ',width=')
                          .concat(400, ',height=')
                          .concat(600, ',resizable,scrollbars=yes,status=1')
                      );
                    })('')),
                    !t.popup))
                )
                  throw new Error(
                    'Unable to open a popup for loginWithPopup - window.open returned `null`'
                  );
                return (
                  (o = r(e, [])),
                  (a = Za(La())),
                  (c = Za(La())),
                  (s = La()),
                  [4, Xa(s)]
                );
              case 1:
                return (
                  (u = i.sent()),
                  (l = Da(u)),
                  (f = this._getParams(
                    o,
                    a,
                    c,
                    l,
                    this.options.redirect_uri || window.location.origin
                  )),
                  (d = this._authorizeUrl(
                    n(n({}, f), { response_mode: 'web_message' })
                  )),
                  (t.popup.location.href = d),
                  [
                    4,
                    Ka(
                      n(n({}, t), {
                        timeoutInSeconds:
                          t.timeoutInSeconds ||
                          this.options.authorizeTimeoutInSeconds ||
                          60,
                      })
                    ),
                  ]
                );
              case 2:
                if (((h = i.sent()), a !== h.state))
                  throw new Error('Invalid state');
                return [
                  4,
                  Ja(
                    {
                      audience: f.audience,
                      scope: f.scope,
                      baseUrl: this.domainUrl,
                      client_id: this.options.client_id,
                      code_verifier: s,
                      code: h.code,
                      grant_type: 'authorization_code',
                      redirect_uri: f.redirect_uri,
                      auth0Client: this.options.auth0Client,
                      useFormData: this.options.useFormData,
                      timeout: this.httpTimeoutMs,
                    },
                    this.worker
                  ),
                ];
              case 3:
                return (
                  (p = i.sent()),
                  (y = e.organization || this.options.organization),
                  [4, this._verifyIdToken(p.id_token, c, y)]
                );
              case 4:
                return (
                  (v = i.sent()),
                  (m = n(n({}, p), {
                    decodedToken: v,
                    scope: f.scope,
                    audience: f.audience || 'default',
                    client_id: this.options.client_id,
                  })),
                  [4, this.cacheManager.set(m)]
                );
              case 5:
                return (
                  i.sent(),
                  this.cookieStorage.save(this.isAuthenticatedCookieName, !0, {
                    daysUntilExpire: this.sessionCheckExpiryDays,
                    cookieDomain: this.options.cookieDomain,
                  }),
                  this._processOrgIdHint(v.claims.org_id),
                  [2]
                );
            }
          });
        });
      }),
      (e.prototype.getUser = function (e) {
        return (
          void 0 === e && (e = {}),
          o(this, void 0, void 0, function () {
            var t, n, r;
            return i(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    (t = e.audience || this.options.audience || 'default'),
                    (n = qa(this.defaultScope, this.scope, e.scope)),
                    [
                      4,
                      this.cacheManager.get(
                        new Qa({
                          client_id: this.options.client_id,
                          audience: t,
                          scope: n,
                        })
                      ),
                    ]
                  );
                case 1:
                  return [
                    2,
                    (r = o.sent()) && r.decodedToken && r.decodedToken.user,
                  ];
              }
            });
          })
        );
      }),
      (e.prototype.getIdTokenClaims = function (e) {
        return (
          void 0 === e && (e = {}),
          o(this, void 0, void 0, function () {
            var t, n, r;
            return i(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    (t = e.audience || this.options.audience || 'default'),
                    (n = qa(this.defaultScope, this.scope, e.scope)),
                    [
                      4,
                      this.cacheManager.get(
                        new Qa({
                          client_id: this.options.client_id,
                          audience: t,
                          scope: n,
                        })
                      ),
                    ]
                  );
                case 1:
                  return [
                    2,
                    (r = o.sent()) && r.decodedToken && r.decodedToken.claims,
                  ];
              }
            });
          })
        );
      }),
      (e.prototype.loginWithRedirect = function (e) {
        return (
          void 0 === e && (e = {}),
          o(this, void 0, void 0, function () {
            var t, n, o;
            return i(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    (t = e.redirectMethod),
                    (n = r(e, ['redirectMethod'])),
                    [4, this.buildAuthorizeUrl(n)]
                  );
                case 1:
                  return (o = i.sent()), window.location[t || 'assign'](o), [2];
              }
            });
          })
        );
      }),
      (e.prototype.handleRedirectCallback = function (e) {
        return (
          void 0 === e && (e = window.location.href),
          o(this, void 0, void 0, function () {
            var t, r, o, c, s, u, l, f, d, h;
            return i(this, function (i) {
              switch (i.label) {
                case 0:
                  if (0 === (t = e.split('?').slice(1)).length)
                    throw new Error(
                      'There are no query params available for parsing.'
                    );
                  if (
                    ((r = (function (e) {
                      e.indexOf('#') > -1 && (e = e.substr(0, e.indexOf('#')));
                      var t = e.split('&'),
                        n = {};
                      return (
                        t.forEach(function (e) {
                          var t = a(e.split('='), 2),
                            r = t[0],
                            o = t[1];
                          n[r] = decodeURIComponent(o);
                        }),
                        n.expires_in && (n.expires_in = parseInt(n.expires_in)),
                        n
                      );
                    })(t.join(''))),
                    (o = r.state),
                    (c = r.code),
                    (s = r.error),
                    (u = r.error_description),
                    !(l = this.transactionManager.get()))
                  )
                    throw new Error('Invalid state');
                  if ((this.transactionManager.remove(), s))
                    throw new Ra(s, u, o, l.appState);
                  if (!l.code_verifier || (l.state && l.state !== o))
                    throw new Error('Invalid state');
                  return (
                    (f = {
                      audience: l.audience,
                      scope: l.scope,
                      baseUrl: this.domainUrl,
                      client_id: this.options.client_id,
                      code_verifier: l.code_verifier,
                      grant_type: 'authorization_code',
                      code: c,
                      auth0Client: this.options.auth0Client,
                      useFormData: this.options.useFormData,
                      timeout: this.httpTimeoutMs,
                    }),
                    void 0 !== l.redirect_uri &&
                      (f.redirect_uri = l.redirect_uri),
                    [4, Ja(f, this.worker)]
                  );
                case 1:
                  return (
                    (d = i.sent()),
                    [
                      4,
                      this._verifyIdToken(
                        d.id_token,
                        l.nonce,
                        l.organizationId
                      ),
                    ]
                  );
                case 2:
                  return (
                    (h = i.sent()),
                    [
                      4,
                      this.cacheManager.set(
                        n(
                          n(
                            n(n({}, d), {
                              decodedToken: h,
                              audience: l.audience,
                              scope: l.scope,
                            }),
                            d.scope ? { oauthTokenScope: d.scope } : null
                          ),
                          { client_id: this.options.client_id }
                        )
                      ),
                    ]
                  );
                case 3:
                  return (
                    i.sent(),
                    this.cookieStorage.save(
                      this.isAuthenticatedCookieName,
                      !0,
                      {
                        daysUntilExpire: this.sessionCheckExpiryDays,
                        cookieDomain: this.options.cookieDomain,
                      }
                    ),
                    this._processOrgIdHint(h.claims.org_id),
                    [2, { appState: l.appState }]
                  );
              }
            });
          })
        );
      }),
      (e.prototype.checkSession = function (e) {
        return o(this, void 0, void 0, function () {
          var t;
          return i(this, function (n) {
            switch (n.label) {
              case 0:
                if (!this.cookieStorage.get(this.isAuthenticatedCookieName)) {
                  if (!this.cookieStorage.get('auth0.is.authenticated'))
                    return [2];
                  this.cookieStorage.save(this.isAuthenticatedCookieName, !0, {
                    daysUntilExpire: this.sessionCheckExpiryDays,
                    cookieDomain: this.options.cookieDomain,
                  }),
                    this.cookieStorage.remove('auth0.is.authenticated');
                }
                n.label = 1;
              case 1:
                return n.trys.push([1, 3, , 4]), [4, this.getTokenSilently(e)];
              case 2:
                return n.sent(), [3, 4];
              case 3:
                if (((t = n.sent()), !Oa.includes(t.error))) throw t;
                return [3, 4];
              case 4:
                return [2];
            }
          });
        });
      }),
      (e.prototype.getTokenSilently = function (e) {
        return (
          void 0 === e && (e = {}),
          o(this, void 0, void 0, function () {
            var t,
              o,
              a,
              c = this;
            return i(this, function (i) {
              return (
                (t = n(
                  n({ audience: this.options.audience, ignoreCache: !1 }, e),
                  { scope: qa(this.defaultScope, this.scope, e.scope) }
                )),
                (o = t.ignoreCache),
                (a = r(t, ['ignoreCache'])),
                [
                  2,
                  ((s = function () {
                    return c._getTokenSilently(n({ ignoreCache: o }, a));
                  }),
                  (u = ''
                    .concat(this.options.client_id, '::')
                    .concat(a.audience, '::')
                    .concat(a.scope)),
                  (l = bc[u]),
                  l ||
                    ((l = s().finally(function () {
                      delete bc[u], (l = null);
                    })),
                    (bc[u] = l)),
                  l),
                ]
              );
              var s, u, l;
            });
          })
        );
      }),
      (e.prototype._getTokenSilently = function (e) {
        return (
          void 0 === e && (e = {}),
          o(this, void 0, void 0, function () {
            var t, a, c, s, u, l, f, d, h;
            return i(this, function (p) {
              switch (p.label) {
                case 0:
                  return (
                    (t = e.ignoreCache),
                    (a = r(e, ['ignoreCache'])),
                    t
                      ? [3, 2]
                      : [
                          4,
                          this._getEntryFromCache({
                            scope: a.scope,
                            audience: a.audience || 'default',
                            client_id: this.options.client_id,
                            getDetailedEntry: e.detailedResponse,
                          }),
                        ]
                  );
                case 1:
                  if ((c = p.sent())) return [2, c];
                  p.label = 2;
                case 2:
                  return [
                    4,
                    ((y = function () {
                      return Sc.acquireLock('auth0.lock.getTokenSilently', 5e3);
                    }),
                    (v = 10),
                    void 0 === v && (v = 3),
                    o(void 0, void 0, void 0, function () {
                      var e;
                      return i(this, function (t) {
                        switch (t.label) {
                          case 0:
                            (e = 0), (t.label = 1);
                          case 1:
                            return e < v ? [4, y()] : [3, 4];
                          case 2:
                            if (t.sent()) return [2, !0];
                            t.label = 3;
                          case 3:
                            return e++, [3, 1];
                          case 4:
                            return [2, !1];
                        }
                      });
                    })),
                  ];
                case 3:
                  if (!p.sent()) return [3, 15];
                  p.label = 4;
                case 4:
                  return (
                    p.trys.push([4, , 12, 14]),
                    t
                      ? [3, 6]
                      : [
                          4,
                          this._getEntryFromCache({
                            scope: a.scope,
                            audience: a.audience || 'default',
                            client_id: this.options.client_id,
                            getDetailedEntry: e.detailedResponse,
                          }),
                        ]
                  );
                case 5:
                  if ((c = p.sent())) return [2, c];
                  p.label = 6;
                case 6:
                  return this.options.useRefreshTokens
                    ? [4, this._getTokenUsingRefreshToken(a)]
                    : [3, 8];
                case 7:
                  return (u = p.sent()), [3, 10];
                case 8:
                  return [4, this._getTokenFromIFrame(a)];
                case 9:
                  (u = p.sent()), (p.label = 10);
                case 10:
                  return (
                    (s = u),
                    [
                      4,
                      this.cacheManager.set(
                        n({ client_id: this.options.client_id }, s)
                      ),
                    ]
                  );
                case 11:
                  return (
                    p.sent(),
                    this.cookieStorage.save(
                      this.isAuthenticatedCookieName,
                      !0,
                      {
                        daysUntilExpire: this.sessionCheckExpiryDays,
                        cookieDomain: this.options.cookieDomain,
                      }
                    ),
                    e.detailedResponse
                      ? ((l = s.id_token),
                        (f = s.access_token),
                        (d = s.oauthTokenScope),
                        (h = s.expires_in),
                        [
                          2,
                          n(
                            n(
                              { id_token: l, access_token: f },
                              d ? { scope: d } : null
                            ),
                            { expires_in: h }
                          ),
                        ])
                      : [2, s.access_token]
                  );
                case 12:
                  return [4, Sc.releaseLock('auth0.lock.getTokenSilently')];
                case 13:
                  return p.sent(), [7];
                case 14:
                  return [3, 16];
                case 15:
                  throw new ja();
                case 16:
                  return [2];
              }
              var y, v;
            });
          })
        );
      }),
      (e.prototype.getTokenWithPopup = function (e, t) {
        return (
          void 0 === e && (e = {}),
          void 0 === t && (t = {}),
          o(this, void 0, void 0, function () {
            return i(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    (e.audience = e.audience || this.options.audience),
                    (e.scope = qa(this.defaultScope, this.scope, e.scope)),
                    (t = n(n({}, Ta), t)),
                    [4, this.loginWithPopup(e, t)]
                  );
                case 1:
                  return (
                    r.sent(),
                    [
                      4,
                      this.cacheManager.get(
                        new Qa({
                          scope: e.scope,
                          audience: e.audience || 'default',
                          client_id: this.options.client_id,
                        })
                      ),
                    ]
                  );
                case 2:
                  return [2, r.sent().access_token];
              }
            });
          })
        );
      }),
      (e.prototype.isAuthenticated = function () {
        return o(this, void 0, void 0, function () {
          return i(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, this.getUser()];
              case 1:
                return [2, !!e.sent()];
            }
          });
        });
      }),
      (e.prototype.buildLogoutUrl = function (e) {
        void 0 === e && (e = {}),
          null !== e.client_id
            ? (e.client_id = e.client_id || this.options.client_id)
            : delete e.client_id;
        var t = e.federated,
          n = r(e, ['federated']),
          o = t ? '&federated' : '';
        return this._url('/v2/logout?'.concat(Ga(n))) + o;
      }),
      (e.prototype.logout = function (e) {
        var t = this;
        void 0 === e && (e = {});
        var n = e.localOnly,
          o = r(e, ['localOnly']);
        if (n && o.federated)
          throw new Error(
            'It is invalid to set both the `federated` and `localOnly` options to `true`'
          );
        var i = function () {
          if (
            (t.cookieStorage.remove(t.orgHintCookieName),
            t.cookieStorage.remove(t.isAuthenticatedCookieName),
            !n)
          ) {
            var e = t.buildLogoutUrl(o);
            window.location.assign(e);
          }
        };
        if (this.options.cache)
          return this.cacheManager.clear().then(function () {
            return i();
          });
        this.cacheManager.clearSync(), i();
      }),
      (e.prototype._getTokenFromIFrame = function (e) {
        return o(this, void 0, void 0, function () {
          var t, o, a, c, s, u, l, f, d, h, p, y, v, m, g, b, w;
          return i(this, function (i) {
            switch (i.label) {
              case 0:
                return (t = Za(La())), (o = Za(La())), (a = La()), [4, Xa(a)];
              case 1:
                (c = i.sent()),
                  (s = Da(c)),
                  (u = r(e, ['detailedResponse'])),
                  (l = this._getParams(
                    u,
                    t,
                    o,
                    s,
                    e.redirect_uri ||
                      this.options.redirect_uri ||
                      window.location.origin
                  )),
                  (f = this.cookieStorage.get(this.orgHintCookieName)) &&
                    !l.organization &&
                    (l.organization = f),
                  (d = this._authorizeUrl(
                    n(n({}, l), {
                      prompt: 'none',
                      response_mode: 'web_message',
                    })
                  )),
                  (i.label = 2);
              case 2:
                if ((i.trys.push([2, 6, , 7]), window.crossOriginIsolated))
                  throw new Ca(
                    'login_required',
                    'The application is running in a Cross-Origin Isolated context, silently retrieving a token without refresh token is not possible.'
                  );
                return (
                  (h =
                    e.timeoutInSeconds ||
                    this.options.authorizeTimeoutInSeconds),
                  [
                    4,
                    ((S = d),
                    (_ = this.domainUrl),
                    (k = h),
                    void 0 === k && (k = 60),
                    new Promise(function (e, t) {
                      var n = window.document.createElement('iframe');
                      n.setAttribute('width', '0'),
                        n.setAttribute('height', '0'),
                        (n.style.display = 'none');
                      var r,
                        o = function () {
                          window.document.body.contains(n) &&
                            (window.document.body.removeChild(n),
                            window.removeEventListener('message', r, !1));
                        },
                        i = setTimeout(function () {
                          t(new ja()), o();
                        }, 1e3 * k);
                      (r = function (n) {
                        if (
                          n.origin == _ &&
                          n.data &&
                          'authorization_response' === n.data.type
                        ) {
                          var a = n.source;
                          a && a.close(),
                            n.data.response.error
                              ? t(Ca.fromPayload(n.data.response))
                              : e(n.data.response),
                            clearTimeout(i),
                            window.removeEventListener('message', r, !1),
                            setTimeout(o, 2e3);
                        }
                      }),
                        window.addEventListener('message', r, !1),
                        window.document.body.appendChild(n),
                        n.setAttribute('src', S);
                    })),
                  ]
                );
              case 3:
                if (((p = i.sent()), t !== p.state))
                  throw new Error('Invalid state');
                return (
                  (y = e.scope),
                  (v = e.audience),
                  (m = r(e, [
                    'scope',
                    'audience',
                    'redirect_uri',
                    'ignoreCache',
                    'timeoutInSeconds',
                    'detailedResponse',
                  ])),
                  [
                    4,
                    Ja(
                      n(n(n({}, this.customOptions), m), {
                        scope: y,
                        audience: v,
                        baseUrl: this.domainUrl,
                        client_id: this.options.client_id,
                        code_verifier: a,
                        code: p.code,
                        grant_type: 'authorization_code',
                        redirect_uri: l.redirect_uri,
                        auth0Client: this.options.auth0Client,
                        useFormData: this.options.useFormData,
                        timeout: m.timeout || this.httpTimeoutMs,
                      }),
                      this.worker
                    ),
                  ]
                );
              case 4:
                return (g = i.sent()), [4, this._verifyIdToken(g.id_token, o)];
              case 5:
                return (
                  (b = i.sent()),
                  this._processOrgIdHint(b.claims.org_id),
                  [
                    2,
                    n(n({}, g), {
                      decodedToken: b,
                      scope: l.scope,
                      oauthTokenScope: g.scope,
                      audience: l.audience || 'default',
                    }),
                  ]
                );
              case 6:
                throw (
                  ('login_required' === (w = i.sent()).error &&
                    this.logout({ localOnly: !0 }),
                  w)
                );
              case 7:
                return [2];
            }
            var S, _, k;
          });
        });
      }),
      (e.prototype._getTokenUsingRefreshToken = function (e) {
        return o(this, void 0, void 0, function () {
          var t, o, a, c, s, u, l, f, d;
          return i(this, function (i) {
            switch (i.label) {
              case 0:
                return (
                  (e.scope = qa(
                    this.defaultScope,
                    this.options.scope,
                    e.scope
                  )),
                  [
                    4,
                    this.cacheManager.get(
                      new Qa({
                        scope: e.scope,
                        audience: e.audience || 'default',
                        client_id: this.options.client_id,
                      })
                    ),
                  ]
                );
              case 1:
                return ((t = i.sent()) && t.refresh_token) || this.worker
                  ? [3, 3]
                  : [4, this._getTokenFromIFrame(e)];
              case 2:
                return [2, i.sent()];
              case 3:
                (o =
                  e.redirect_uri ||
                  this.options.redirect_uri ||
                  window.location.origin),
                  (c = e.scope),
                  (s = e.audience),
                  (u = r(e, [
                    'scope',
                    'audience',
                    'ignoreCache',
                    'timeoutInSeconds',
                    'detailedResponse',
                  ])),
                  (l =
                    'number' == typeof e.timeoutInSeconds
                      ? 1e3 * e.timeoutInSeconds
                      : null),
                  (i.label = 4);
              case 4:
                return (
                  i.trys.push([4, 6, , 9]),
                  [
                    4,
                    Ja(
                      n(
                        n(
                          n(n(n({}, this.customOptions), u), {
                            audience: s,
                            scope: c,
                            baseUrl: this.domainUrl,
                            client_id: this.options.client_id,
                            grant_type: 'refresh_token',
                            refresh_token: t && t.refresh_token,
                            redirect_uri: o,
                          }),
                          l && { timeout: l }
                        ),
                        {
                          auth0Client: this.options.auth0Client,
                          useFormData: this.options.useFormData,
                          timeout: this.httpTimeoutMs,
                        }
                      ),
                      this.worker
                    ),
                  ]
                );
              case 5:
                return (a = i.sent()), [3, 9];
              case 6:
                return 'The web worker is missing the refresh token' ===
                  (f = i.sent()).message ||
                  (f.message && f.message.indexOf('invalid refresh token') > -1)
                  ? [4, this._getTokenFromIFrame(e)]
                  : [3, 8];
              case 7:
                return [2, i.sent()];
              case 8:
                throw f;
              case 9:
                return [4, this._verifyIdToken(a.id_token)];
              case 10:
                return (
                  (d = i.sent()),
                  [
                    2,
                    n(n({}, a), {
                      decodedToken: d,
                      scope: e.scope,
                      oauthTokenScope: a.scope,
                      audience: e.audience || 'default',
                    }),
                  ]
                );
            }
          });
        });
      }),
      (e.prototype._getEntryFromCache = function (e) {
        var t = e.scope,
          r = e.audience,
          a = e.client_id,
          c = e.getDetailedEntry,
          s = void 0 !== c && c;
        return o(this, void 0, void 0, function () {
          var e, o, c, u, l;
          return i(this, function (i) {
            switch (i.label) {
              case 0:
                return [
                  4,
                  this.cacheManager.get(
                    new Qa({ scope: t, audience: r, client_id: a }),
                    60
                  ),
                ];
              case 1:
                return (e = i.sent()) && e.access_token
                  ? s
                    ? ((o = e.id_token),
                      (c = e.access_token),
                      (u = e.oauthTokenScope),
                      (l = e.expires_in),
                      [
                        2,
                        n(
                          n(
                            { id_token: o, access_token: c },
                            u ? { scope: u } : null
                          ),
                          { expires_in: l }
                        ),
                      ])
                    : [2, e.access_token]
                  : [2];
            }
          });
        });
      }),
      e
    );
  })(),
  Oc = function () {};

/**
 * The initial auth state.
 */
var initialAuthState = {
  isAuthenticated: false,
  isLoading: true,
};

/**
 * @ignore
 */
var stub = function () {
  throw new Error('You forgot to wrap your component in <Auth0Provider>.');
};
/**
 * @ignore
 */
var initialContext = __assign(__assign({}, initialAuthState), {
  buildAuthorizeUrl: stub,
  buildLogoutUrl: stub,
  getAccessTokenSilently: stub,
  getAccessTokenWithPopup: stub,
  getIdTokenClaims: stub,
  loginWithRedirect: stub,
  loginWithPopup: stub,
  logout: stub,
  handleRedirectCallback: stub,
});
/**
 * The Auth0 Context
 */
var Auth0Context = React.createContext(initialContext);

/**
 * An OAuth2 error will come from the authorization server and will have at least an `error` property which will
 * be the error code. And possibly an `error_description` property
 *
 * See: https://openid.net/specs/openid-connect-core-1_0.html#rfc.section.3.1.2.6
 */
var OAuthError = /** @class */ (function (_super) {
  __extends(OAuthError, _super);
  function OAuthError(error, error_description) {
    var _this = _super.call(this, error_description || error) || this;
    _this.error = error;
    _this.error_description = error_description;
    return _this;
  }
  return OAuthError;
})(Error);

var CODE_RE = /[?&]code=[^&]+/;
var STATE_RE = /[?&]state=[^&]+/;
var ERROR_RE = /[?&]error=[^&]+/;
var hasAuthParams = function (searchParams) {
  if (searchParams === void 0) {
    searchParams = window.location.search;
  }
  return (
    (CODE_RE.test(searchParams) || ERROR_RE.test(searchParams)) &&
    STATE_RE.test(searchParams)
  );
};
var normalizeErrorFn = function (fallbackMessage) {
  return function (error) {
    if ('error' in error) {
      return new OAuthError(error.error, error.error_description);
    }
    if (error instanceof Error) {
      return error;
    }
    return new Error(fallbackMessage);
  };
};
var loginError = normalizeErrorFn('Login failed');
var tokenError = normalizeErrorFn('Get access token failed');

/**
 * Handles how that state changes in the `useAuth0` hook.
 */
var reducer = function (state, action) {
  var _a, _b;
  switch (action.type) {
    case 'LOGIN_POPUP_STARTED':
      return __assign(__assign({}, state), { isLoading: true });
    case 'LOGIN_POPUP_COMPLETE':
    case 'INITIALISED':
      return __assign(__assign({}, state), {
        isAuthenticated: !!action.user,
        user: action.user,
        isLoading: false,
        error: undefined,
      });
    case 'HANDLE_REDIRECT_COMPLETE':
    case 'GET_ACCESS_TOKEN_COMPLETE':
      if (
        ((_a = state.user) === null || _a === void 0
          ? void 0
          : _a.updated_at) ===
        ((_b = action.user) === null || _b === void 0 ? void 0 : _b.updated_at)
      ) {
        return state;
      }
      return __assign(__assign({}, state), {
        isAuthenticated: !!action.user,
        user: action.user,
      });
    case 'LOGOUT':
      return __assign(__assign({}, state), {
        isAuthenticated: false,
        user: undefined,
      });
    case 'ERROR':
      return __assign(__assign({}, state), {
        isLoading: false,
        error: action.error,
      });
  }
};

/**
 * @ignore
 */
var toAuth0ClientOptions = function (opts) {
  var clientId = opts.clientId,
    redirectUri = opts.redirectUri,
    maxAge = opts.maxAge,
    validOpts = __rest(opts, ['clientId', 'redirectUri', 'maxAge']);
  return __assign(__assign({}, validOpts), {
    client_id: clientId,
    redirect_uri: redirectUri,
    max_age: maxAge,
    auth0Client: {
      name: 'auth0-react',
      version: '1.10.1',
    },
  });
};
/**
 * @ignore
 */
var toAuth0LoginRedirectOptions = function (opts) {
  if (!opts) {
    return;
  }
  var redirectUri = opts.redirectUri,
    validOpts = __rest(opts, ['redirectUri']);
  return __assign(__assign({}, validOpts), { redirect_uri: redirectUri });
};
/**
 * @ignore
 */
var defaultOnRedirectCallback = function (appState) {
  window.history.replaceState(
    {},
    document.title,
    (appState === null || appState === void 0 ? void 0 : appState.returnTo) ||
      window.location.pathname
  );
};
/**
 * ```jsx
 * <Auth0Provider
 *   domain={domain}
 *   clientId={clientId}
 *   redirectUri={window.location.origin}>
 *   <MyApp />
 * </Auth0Provider>
 * ```
 *
 * Provides the Auth0Context to its child components.
 */
var Auth0Provider = function (opts) {
  var children = opts.children,
    skipRedirectCallback = opts.skipRedirectCallback,
    _a = opts.onRedirectCallback,
    onRedirectCallback = _a === void 0 ? defaultOnRedirectCallback : _a,
    clientOpts = __rest(opts, [
      'children',
      'skipRedirectCallback',
      'onRedirectCallback',
    ]);
  var client = React.useState(function () {
    return new Tc(toAuth0ClientOptions(clientOpts));
  })[0];
  var _b = React.useReducer(reducer, initialAuthState),
    state = _b[0],
    dispatch = _b[1];
  var didInitialise = React.useRef(false);
  React.useEffect(
    function () {
      if (didInitialise.current) {
        return;
      }
      didInitialise.current = true;
      (function () {
        return __awaiter(void 0, void 0, void 0, function () {
          var appState, user, error_1;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                _a.trys.push([0, 6, , 7]);
                if (!(hasAuthParams() && !skipRedirectCallback))
                  return [3 /*break*/, 2];
                return [4 /*yield*/, client.handleRedirectCallback()];
              case 1:
                appState = _a.sent().appState;
                onRedirectCallback(appState);
                return [3 /*break*/, 4];
              case 2:
                return [4 /*yield*/, client.checkSession()];
              case 3:
                _a.sent();
                _a.label = 4;
              case 4:
                return [4 /*yield*/, client.getUser()];
              case 5:
                user = _a.sent();
                dispatch({ type: 'INITIALISED', user: user });
                return [3 /*break*/, 7];
              case 6:
                error_1 = _a.sent();
                dispatch({ type: 'ERROR', error: loginError(error_1) });
                return [3 /*break*/, 7];
              case 7:
                return [2 /*return*/];
            }
          });
        });
      })();
    },
    [client, onRedirectCallback, skipRedirectCallback]
  );
  var buildAuthorizeUrl = React.useCallback(
    function (opts) {
      return client.buildAuthorizeUrl(toAuth0LoginRedirectOptions(opts));
    },
    [client]
  );
  var buildLogoutUrl = React.useCallback(
    function (opts) {
      return client.buildLogoutUrl(opts);
    },
    [client]
  );
  var loginWithRedirect = React.useCallback(
    function (opts) {
      return client.loginWithRedirect(toAuth0LoginRedirectOptions(opts));
    },
    [client]
  );
  var loginWithPopup = React.useCallback(
    function (options, config) {
      return __awaiter(void 0, void 0, void 0, function () {
        var error_2, user;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              dispatch({ type: 'LOGIN_POPUP_STARTED' });
              _a.label = 1;
            case 1:
              _a.trys.push([1, 3, , 4]);
              return [4 /*yield*/, client.loginWithPopup(options, config)];
            case 2:
              _a.sent();
              return [3 /*break*/, 4];
            case 3:
              error_2 = _a.sent();
              dispatch({ type: 'ERROR', error: loginError(error_2) });
              return [2 /*return*/];
            case 4:
              return [4 /*yield*/, client.getUser()];
            case 5:
              user = _a.sent();
              dispatch({ type: 'LOGIN_POPUP_COMPLETE', user: user });
              return [2 /*return*/];
          }
        });
      });
    },
    [client]
  );
  var logout = React.useCallback(
    function (opts) {
      if (opts === void 0) {
        opts = {};
      }
      var maybePromise = client.logout(opts);
      if (opts.localOnly) {
        if (maybePromise && typeof maybePromise.then === 'function') {
          return maybePromise.then(function () {
            return dispatch({ type: 'LOGOUT' });
          });
        }
        dispatch({ type: 'LOGOUT' });
      }
      return maybePromise;
    },
    [client]
  );
  var getAccessTokenSilently = React.useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function (opts) {
      return __awaiter(void 0, void 0, void 0, function () {
        var token, error_3, _a;
        var _b;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              _c.trys.push([0, 2, 3, 5]);
              return [4 /*yield*/, client.getTokenSilently(opts)];
            case 1:
              token = _c.sent();
              return [3 /*break*/, 5];
            case 2:
              error_3 = _c.sent();
              throw tokenError(error_3);
            case 3:
              _a = dispatch;
              _b = {
                type: 'GET_ACCESS_TOKEN_COMPLETE',
              };
              return [4 /*yield*/, client.getUser()];
            case 4:
              _a.apply(void 0, [((_b.user = _c.sent()), _b)]);
              return [7 /*endfinally*/];
            case 5:
              return [2 /*return*/, token];
          }
        });
      });
    },
    [client]
  );
  var getAccessTokenWithPopup = React.useCallback(
    function (opts, config) {
      return __awaiter(void 0, void 0, void 0, function () {
        var token, error_4, _a;
        var _b;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              _c.trys.push([0, 2, 3, 5]);
              return [4 /*yield*/, client.getTokenWithPopup(opts, config)];
            case 1:
              token = _c.sent();
              return [3 /*break*/, 5];
            case 2:
              error_4 = _c.sent();
              throw tokenError(error_4);
            case 3:
              _a = dispatch;
              _b = {
                type: 'GET_ACCESS_TOKEN_COMPLETE',
              };
              return [4 /*yield*/, client.getUser()];
            case 4:
              _a.apply(void 0, [((_b.user = _c.sent()), _b)]);
              return [7 /*endfinally*/];
            case 5:
              return [2 /*return*/, token];
          }
        });
      });
    },
    [client]
  );
  var getIdTokenClaims = React.useCallback(
    function (opts) {
      return client.getIdTokenClaims(opts);
    },
    [client]
  );
  var handleRedirectCallback = React.useCallback(
    function (url) {
      return __awaiter(void 0, void 0, void 0, function () {
        var error_5, _a;
        var _b;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              _c.trys.push([0, 2, 3, 5]);
              return [4 /*yield*/, client.handleRedirectCallback(url)];
            case 1:
              return [2 /*return*/, _c.sent()];
            case 2:
              error_5 = _c.sent();
              throw tokenError(error_5);
            case 3:
              _a = dispatch;
              _b = {
                type: 'HANDLE_REDIRECT_COMPLETE',
              };
              return [4 /*yield*/, client.getUser()];
            case 4:
              _a.apply(void 0, [((_b.user = _c.sent()), _b)]);
              return [7 /*endfinally*/];
            case 5:
              return [2 /*return*/];
          }
        });
      });
    },
    [client]
  );
  var contextValue = React.useMemo(
    function () {
      return __assign(__assign({}, state), {
        buildAuthorizeUrl: buildAuthorizeUrl,
        buildLogoutUrl: buildLogoutUrl,
        getAccessTokenSilently: getAccessTokenSilently,
        getAccessTokenWithPopup: getAccessTokenWithPopup,
        getIdTokenClaims: getIdTokenClaims,
        loginWithRedirect: loginWithRedirect,
        loginWithPopup: loginWithPopup,
        logout: logout,
        handleRedirectCallback: handleRedirectCallback,
      });
    },
    [
      state,
      buildAuthorizeUrl,
      buildLogoutUrl,
      getAccessTokenSilently,
      getAccessTokenWithPopup,
      getIdTokenClaims,
      loginWithRedirect,
      loginWithPopup,
      logout,
      handleRedirectCallback,
    ]
  );
  return React__default['default'].createElement(
    Auth0Context.Provider,
    { value: contextValue },
    children
  );
};

/**
 * ```js
 * const {
 *   // Auth state:
 *   error,
 *   isAuthenticated,
 *   isLoading,
 *   user,
 *   // Auth methods:
 *   getAccessTokenSilently,
 *   getAccessTokenWithPopup,
 *   getIdTokenClaims,
 *   loginWithRedirect,
 *   loginWithPopup,
 *   logout,
 * } = useAuth0<TUser>();
 * ```
 *
 * Use the `useAuth0` hook in your components to access the auth state and methods.
 *
 * TUser is an optional type param to provide a type to the `user` field.
 */
var useAuth0 = function () {
  return React.useContext(Auth0Context);
};

/**
 * ```jsx
 * class MyComponent extends Component {
 *   render() {
 *     // Access the auth context from the `auth0` prop
 *     const { user } = this.props.auth0;
 *     return <div>Hello {user.name}!</div>
 *   }
 * }
 * // Wrap your class component in withAuth0
 * export default withAuth0(MyComponent);
 * ```
 *
 * Wrap your class components in this Higher Order Component to give them access to the Auth0Context
 */
var withAuth0 = function (Component) {
  return function WithAuth(props) {
    return React__default['default'].createElement(
      Auth0Context.Consumer,
      null,
      function (auth) {
        return React__default['default'].createElement(
          Component,
          __assign({}, props, { auth0: auth })
        );
      }
    );
  };
};

/**
 * @ignore
 */
var defaultOnRedirecting = function () {
  return React__default['default'].createElement(
    React__default['default'].Fragment,
    null
  );
};
/**
 * @ignore
 */
var defaultReturnTo = function () {
  return ''.concat(window.location.pathname).concat(window.location.search);
};
/**
 * ```js
 * const MyProtectedComponent = withAuthenticationRequired(MyComponent);
 * ```
 *
 * When you wrap your components in this Higher Order Component and an anonymous user visits your component
 * they will be redirected to the login page and returned to the page they we're redirected from after login.
 */
var withAuthenticationRequired = function (Component, options) {
  if (options === void 0) {
    options = {};
  }
  return function WithAuthenticationRequired(props) {
    var _this = this;
    var _a = useAuth0(),
      user = _a.user,
      isAuthenticated = _a.isAuthenticated,
      isLoading = _a.isLoading,
      loginWithRedirect = _a.loginWithRedirect;
    var _b = options.returnTo,
      returnTo = _b === void 0 ? defaultReturnTo : _b,
      _c = options.onRedirecting,
      onRedirecting = _c === void 0 ? defaultOnRedirecting : _c,
      _d = options.claimCheck,
      claimCheck =
        _d === void 0
          ? function () {
              return true;
            }
          : _d,
      loginOptions = options.loginOptions;
    /**
     * The route is authenticated if the user has valid auth and there are no
     * JWT claim mismatches.
     */
    var routeIsAuthenticated = isAuthenticated && claimCheck(user);
    React.useEffect(
      function () {
        if (isLoading || routeIsAuthenticated) {
          return;
        }
        var opts = __assign(__assign({}, loginOptions), {
          appState: __assign(
            __assign({}, loginOptions && loginOptions.appState),
            { returnTo: typeof returnTo === 'function' ? returnTo() : returnTo }
          ),
        });
        (function () {
          return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  return [4 /*yield*/, loginWithRedirect(opts)];
                case 1:
                  _a.sent();
                  return [2 /*return*/];
              }
            });
          });
        })();
      },
      [
        isLoading,
        routeIsAuthenticated,
        loginWithRedirect,
        loginOptions,
        returnTo,
      ]
    );
    return routeIsAuthenticated
      ? React__default['default'].createElement(Component, __assign({}, props))
      : onRedirecting();
  };
};

exports.Auth0Context = Auth0Context;
exports.Auth0Provider = Auth0Provider;
exports.InMemoryCache = ec;
exports.LocalStorageCache = $a;
exports.OAuthError = OAuthError;
exports.User = Oc;
exports.useAuth0 = useAuth0;
exports.withAuth0 = withAuth0;
exports.withAuthenticationRequired = withAuthenticationRequired;
//# sourceMappingURL=auth0-react.cjs.js.map
