/*! Terms: https://developers.google.com/terms */
(function() {
  var h, l = this,
    aa = function(a) {
      return void 0 !== a
    },
    ba = function() {},
    ca = function(a) {
      var b = typeof a;
      if ("object" == b)
        if (a) {
          if (a instanceof Array) return "array";
          if (a instanceof Object) return b;
          var c = Object.prototype.toString.call(a);
          if ("[object Window]" == c) return "object";
          if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
          if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" !=
            typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
        } else return "null";
      else if ("function" == b && "undefined" == typeof a.call) return "object";
      return b
    },
    da = function(a) {
      return null != a
    },
    fa = function(a) {
      return "array" == ca(a)
    },
    ga = function(a) {
      var b = ca(a);
      return "array" == b || "object" == b && "number" == typeof a.length
    },
    m = function(a) {
      return "string" == typeof a
    },
    n = function(a) {
      return "boolean" == typeof a
    },
    p = function(a) {
      return "function" == ca(a)
    },
    ha = function(a) {
      var b = typeof a;
      return "object" == b && null !=
        a || "function" == b
    },
    ia = function(a, b, c) {
      return a.call.apply(a.bind, arguments)
    },
    ja = function(a, b, c) {
      if (!a) throw Error();
      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
          var c = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(c, d);
          return a.apply(b, c)
        }
      }
      return function() {
        return a.apply(b, arguments)
      }
    },
    q = function(a, b, c) {
      q = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ia : ja;
      return q.apply(null, arguments)
    },
    ka = function(a,
      b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function() {
        var b = c.slice();
        b.push.apply(b, arguments);
        return a.apply(this, b)
      }
    },
    r = function(a, b) {
      for (var c in b) a[c] = b[c]
    },
    la = Date.now || function() {
      return +new Date
    },
    ma = function(a, b) {
      var c = a.split("."),
        d = l;
      c[0] in d || !d.execScript || d.execScript("var " + c[0]);
      for (var e; c.length && (e = c.shift());) !c.length && aa(b) ? d[e] = b : d = d[e] ? d[e] : d[e] = {}
    },
    t = function(a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.superClass_ = b.prototype;
      a.prototype = new c;
      a.prototype.constructor =
        a;
      a.base = function(a, c, f) {
        for (var g = Array(arguments.length - 2), k = 2; k < arguments.length; k++) g[k - 2] = arguments[k];
        return b.prototype[c].apply(a, g)
      }
    };
  var u = function(a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, u);
    else {
      var b = Error().stack;
      b && (this.stack = b)
    }
    a && (this.message = String(a))
  };
  t(u, Error);
  u.prototype.name = "CustomError";
  var na;
  var oa = function(a, b) {
      for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();
      return d + c.join("%s")
    },
    pa = String.prototype.trim ? function(a) {
      return a.trim()
    } : function(a) {
      return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    },
    xa = function(a) {
      if (!qa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(ra, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(sa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(ta, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(ua, "&quot;")); - 1 != a.indexOf("'") &&
        (a = a.replace(va, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(wa, "&#0;"));
      return a
    },
    ra = /&/g,
    sa = /</g,
    ta = />/g,
    ua = /"/g,
    va = /'/g,
    wa = /\x00/g,
    qa = /[\x00&<>"']/,
    ya = function(a, b) {
      return a < b ? -1 : a > b ? 1 : 0
    };
  var za = function(a, b) {
    b.unshift(a);
    u.call(this, oa.apply(null, b));
    b.shift()
  };
  t(za, u);
  za.prototype.name = "AssertionError";
  var Aa = function(a, b, c, d) {
      var e = "Assertion failed";
      if (c) var e = e + (": " + c),
        f = d;
      else a && (e += ": " + a, f = b);
      throw new za("" + e, f || []);
    },
    v = function(a, b, c) {
      a || Aa("", null, b, Array.prototype.slice.call(arguments, 2));
      return a
    },
    Ba = function(a, b) {
      throw new za("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    },
    Ca = function(a, b, c) {
      "number" == typeof a || Aa("Expected number but got %s: %s.", [ca(a), a], b, Array.prototype.slice.call(arguments, 2));
      return a
    },
    Da = function(a, b, c) {
      m(a) || Aa("Expected string but got %s: %s.", [ca(a), a], b, Array.prototype.slice.call(arguments, 2));
      return a
    },
    Ea = function(a, b, c) {
      p(a) || Aa("Expected function but got %s: %s.", [ca(a), a], b, Array.prototype.slice.call(arguments, 2))
    },
    Fa = function(a, b, c) {
      ha(a) || Aa("Expected object but got %s: %s.", [ca(a), a], b, Array.prototype.slice.call(arguments, 2));
      return a
    },
    Ga = function(a, b, c) {
      fa(a) || Aa("Expected array but got %s: %s.", [ca(a), a], b, Array.prototype.slice.call(arguments, 2));
      return a
    };
  var Ha = Array.prototype.indexOf ? function(a, b, c) {
      v(null != a.length);
      return Array.prototype.indexOf.call(a, b, c)
    } : function(a, b, c) {
      c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
      if (m(a)) return m(b) && 1 == b.length ? a.indexOf(b, c) : -1;
      for (; c < a.length; c++)
        if (c in a && a[c] === b) return c;
      return -1
    },
    Ia = Array.prototype.forEach ? function(a, b, c) {
      v(null != a.length);
      Array.prototype.forEach.call(a, b, c)
    } : function(a, b, c) {
      for (var d = a.length, e = m(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    },
    Ja = Array.prototype.filter ? function(a,
      b, c) {
      v(null != a.length);
      return Array.prototype.filter.call(a, b, c)
    } : function(a, b, c) {
      for (var d = a.length, e = [], f = 0, g = m(a) ? a.split("") : a, k = 0; k < d; k++)
        if (k in g) {
          var w = g[k];
          b.call(c, w, k, a) && (e[f++] = w)
        }
      return e
    },
    Ka = Array.prototype.map ? function(a, b, c) {
      v(null != a.length);
      return Array.prototype.map.call(a, b, c)
    } : function(a, b, c) {
      for (var d = a.length, e = Array(d), f = m(a) ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
      return e
    },
    La = Array.prototype.some ? function(a, b, c) {
      v(null != a.length);
      return Array.prototype.some.call(a,
        b, c)
    } : function(a, b, c) {
      for (var d = a.length, e = m(a) ? a.split("") : a, f = 0; f < d; f++)
        if (f in e && b.call(c, e[f], f, a)) return !0;
      return !1
    },
    Ma = function(a, b) {
      for (var c = a.length, d = m(a) ? a.split("") : a, e = 0; e < c; e++)
        if (e in d && b.call(void 0, d[e], e, a)) return e;
      return -1
    },
    Na = function(a, b) {
      return 0 <= Ha(a, b)
    },
    Pa = function(a, b) {
      var c = Ha(a, b),
        d;
      (d = 0 <= c) && Oa(a, c);
      return d
    },
    Oa = function(a, b) {
      v(null != a.length);
      Array.prototype.splice.call(a, b, 1)
    },
    Qa = function(a) {
      return Array.prototype.concat.apply(Array.prototype, arguments)
    },
    Ra = function(a) {
      var b =
        a.length;
      if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
        return c
      }
      return []
    },
    Ta = function(a, b, c, d) {
      v(null != a.length);
      Array.prototype.splice.apply(a, Sa(arguments, 1))
    },
    Sa = function(a, b, c) {
      v(null != a.length);
      return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };
  var Ua = function(a) {
      if (a.classList) return a.classList;
      a = a.className;
      return m(a) && a.match(/\S+/g) || []
    },
    Va = function(a, b) {
      return a.classList ? a.classList.contains(b) : Na(Ua(a), b)
    },
    Wa = function(a, b) {
      a.classList ? a.classList.add(b) : Va(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
    },
    Xa = function(a, b) {
      a.classList ? a.classList.remove(b) : Va(a, b) && (a.className = Ja(Ua(a), function(a) {
        return a != b
      }).join(" "))
    };
  var Ya = function(a, b, c) {
      for (var d in a) b.call(c, a[d], d, a)
    },
    Za = function(a, b, c) {
      if (null !== a && b in a) throw Error('The object already contains the key "' + b + '"');
      a[b] = c
    },
    $a = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
    ab = function(a, b) {
      for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (var f = 0; f < $a.length; f++) c = $a[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
      }
    };
  var bb;
  a: {
    var cb = l.navigator;
    if (cb) {
      var db = cb.userAgent;
      if (db) {
        bb = db;
        break a
      }
    }
    bb = ""
  }
  var x = function(a) {
    return -1 != bb.indexOf(a)
  };
  var fb = function() {
    this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ = "";
    this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ = eb
  };
  fb.prototype.implementsGoogStringTypedString = !0;
  fb.prototype.getTypedStringValue = function() {
    return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_
  };
  fb.prototype.toString = function() {
    return "Const{" + this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ + "}"
  };
  var gb = function(a) {
      if (a instanceof fb && a.constructor === fb && a.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ === eb) return a.stringConstValueWithSecurityContract__googStringSecurityPrivate_;
      Ba("expected object of type Const, got '" + a + "'");
      return "type_error:Const"
    },
    eb = {};
  var y = function() {
    this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = "";
    this.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = hb
  };
  y.prototype.implementsGoogStringTypedString = !0;
  y.prototype.getTypedStringValue = function() {
    return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_
  };
  y.prototype.getDirection = function() {
    return 1
  };
  y.prototype.toString = function() {
    return "SafeUrl{" + this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ + "}"
  };
  var ib = function(a) {
      if (a instanceof y && a.constructor === y && a.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === hb) return a.privateDoNotAccessOrElseSafeHtmlWrappedValue_;
      Ba("expected object of type SafeUrl, got '" + a + "' of type " + ca(a));
      return "type_error:SafeUrl"
    },
    jb = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,
    lb = function(a) {
      if (a instanceof y) return a;
      a = a.implementsGoogStringTypedString ? a.getTypedStringValue() : String(a);
      jb.test(a) || (a = "about:invalid#zClosurez");
      return kb(a)
    },
    hb = {},
    kb = function(a) {
      var b =
        new y;
      b.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = a;
      return b
    };
  kb("about:blank");
  var nb = function() {
    this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = "";
    this.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = mb
  };
  nb.prototype.implementsGoogStringTypedString = !0;
  nb.prototype.getTypedStringValue = function() {
    return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_
  };
  nb.prototype.getDirection = function() {
    return 1
  };
  nb.prototype.toString = function() {
    return "TrustedResourceUrl{" + this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ + "}"
  };
  var ob = function(a) {
      if (a instanceof nb && a.constructor === nb && a.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === mb) return a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_;
      Ba("expected object of type TrustedResourceUrl, got '" + a + "' of type " + ca(a));
      return "type_error:TrustedResourceUrl"
    },
    mb = {};
  var qb = function() {
    this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = "";
    this.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = pb;
    this.dir_ = null
  };
  qb.prototype.getDirection = function() {
    return this.dir_
  };
  qb.prototype.implementsGoogStringTypedString = !0;
  qb.prototype.getTypedStringValue = function() {
    return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_
  };
  qb.prototype.toString = function() {
    return "SafeHtml{" + this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ + "}"
  };
  var rb = function(a) {
      if (a instanceof qb && a.constructor === qb && a.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === pb) return a.privateDoNotAccessOrElseSafeHtmlWrappedValue_;
      Ba("expected object of type SafeHtml, got '" + a + "' of type " + ca(a));
      return "type_error:SafeHtml"
    },
    pb = {};
  qb.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(a) {
    this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = a;
    this.dir_ = null;
    return this
  };
  var sb = x("Opera"),
    z = x("Trident") || x("MSIE"),
    tb = x("Edge"),
    ub = tb || z,
    vb = x("Gecko") && !(-1 != bb.toLowerCase().indexOf("webkit") && !x("Edge")) && !(x("Trident") || x("MSIE")) && !x("Edge"),
    A = -1 != bb.toLowerCase().indexOf("webkit") && !x("Edge"),
    wb = A && x("Mobile"),
    xb = x("Macintosh"),
    yb = function() {
      var a = l.document;
      return a ? a.documentMode : void 0
    },
    zb;
  a: {
    var Ab = "",
      Bb = function() {
        var a = bb;
        if (vb) return /rv\:([^\);]+)(\)|;)/.exec(a);
        if (tb) return /Edge\/([\d\.]+)/.exec(a);
        if (z) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (A) return /WebKit\/(\S+)/.exec(a);
        if (sb) return /(?:Version)[ \/]?(\S+)/.exec(a)
      }();Bb && (Ab = Bb ? Bb[1] : "");
    if (z) {
      var Cb = yb();
      if (null != Cb && Cb > parseFloat(Ab)) {
        zb = String(Cb);
        break a
      }
    }
    zb = Ab
  }
  var Db = zb,
    Eb = {},
    B = function(a) {
      var b;
      if (!(b = Eb[a])) {
        b = 0;
        for (var c = pa(String(Db)).split("."), d = pa(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
          var g = c[f] || "",
            k = d[f] || "",
            w = RegExp("(\\d*)(\\D*)", "g"),
            V = RegExp("(\\d*)(\\D*)", "g");
          do {
            var D = w.exec(g) || ["", "", ""],
              Vb = V.exec(k) || ["", "", ""];
            if (0 == D[0].length && 0 == Vb[0].length) break;
            b = ya(0 == D[1].length ? 0 : parseInt(D[1], 10), 0 == Vb[1].length ? 0 : parseInt(Vb[1], 10)) || ya(0 == D[2].length, 0 == Vb[2].length) || ya(D[2], Vb[2])
          } while (0 == b)
        }
        b = Eb[a] = 0 <=
          b
      }
      return b
    },
    Fb = l.document,
    Gb = Fb && z ? yb() || ("CSS1Compat" == Fb.compatMode ? parseInt(Db, 10) : 5) : void 0;
  var Hb = !z || 9 <= Number(Gb),
    Ib = !vb && !z || z && 9 <= Number(Gb) || vb && B("1.9.1");
  z && B("9");
  var Lb = function(a) {
      return a ? new Jb(Kb(a)) : na || (na = new Jb)
    },
    Nb = function(a, b) {
      var c = b || document;
      return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : Mb(a, b)
    },
    Mb = function(a, b) {
      var c, d, e, f;
      c = document;
      c = b || c;
      if (c.querySelectorAll && c.querySelector && a) return c.querySelectorAll("" + (a ? "." + a : ""));
      if (a && c.getElementsByClassName) {
        var g = c.getElementsByClassName(a);
        return g
      }
      g = c.getElementsByTagName("*");
      if (a) {
        f = {};
        for (d = e = 0; c = g[d]; d++) {
          var k = c.className;
          "function" == typeof k.split && Na(k.split(/\s+/),
            a) && (f[e++] = c)
        }
        f.length = e;
        return f
      }
      return g
    },
    Pb = function(a, b) {
      Ya(b, function(b, d) {
        "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Ob.hasOwnProperty(d) ? a.setAttribute(Ob[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
      })
    },
    Ob = {
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      colspan: "colSpan",
      frameborder: "frameBorder",
      height: "height",
      maxlength: "maxLength",
      nonce: "nonce",
      role: "role",
      rowspan: "rowSpan",
      type: "type",
      usemap: "useMap",
      valign: "vAlign",
      width: "width"
    },
    Rb = function(a, b, c) {
      function d(c) {
        c && b.appendChild(m(c) ? a.createTextNode(c) : c)
      }
      for (var e = 2; e < c.length; e++) {
        var f = c[e];
        !ga(f) || ha(f) && 0 < f.nodeType ? d(f) : Ia(Qb(f) ? Ra(f) : f, d)
      }
    },
    Sb = function(a) {
      a && a.parentNode && a.parentNode.removeChild(a)
    },
    Kb = function(a) {
      v(a, "Node cannot be null or undefined.");
      return 9 == a.nodeType ? a : a.ownerDocument || a.document
    },
    Qb = function(a) {
      if (a && "number" == typeof a.length) {
        if (ha(a)) return "function" == typeof a.item || "string" == typeof a.item;
        if (p(a)) return "function" == typeof a.item
      }
      return !1
    },
    Ub = function(a) {
      return Tb(a, function(a) {
        return m(a.className) && Na(a.className.split(/\s+/), "firebaseui-textfield")
      })
    },
    Tb = function(a, b) {
      for (var c = 0; a;) {
        v("parentNode" != a.name);
        if (b(a)) return a;
        a = a.parentNode;
        c++
      }
      return null
    },
    Jb = function(a) {
      this.document_ = a || l.document || document
    };
  h = Jb.prototype;
  h.getDomHelper = Lb;
  h.getElement = function(a) {
    return m(a) ? this.document_.getElementById(a) : a
  };
  h.getElementsByClass = function(a, b) {
    return Nb(a, b || this.document_)
  };
  h.getElementByClass = function(a, b) {
    var c = b || this.document_,
      d = c || document;
    return (d.getElementsByClassName ? d.getElementsByClassName(a)[0] : d.querySelectorAll && d.querySelector ? d.querySelector("." + a) : Mb(a, c)[0]) || null
  };
  h.createDom = function(a, b, c) {
    var d = this.document_,
      e = arguments,
      f = String(e[0]),
      g = e[1];
    if (!Hb && g && (g.name || g.type)) {
      f = ["<", f];
      g.name && f.push(' name="', xa(g.name), '"');
      if (g.type) {
        f.push(' type="', xa(g.type), '"');
        var k = {};
        ab(k, g);
        delete k.type;
        g = k
      }
      f.push(">");
      f = f.join("")
    }
    f = d.createElement(f);
    g && (m(g) ? f.className = g : fa(g) ? f.className = g.join(" ") : Pb(f, g));
    2 < e.length && Rb(d, f, e);
    return f
  };
  h.createElement = function(a) {
    return this.document_.createElement(String(a))
  };
  h.createTextNode = function(a) {
    return this.document_.createTextNode(String(a))
  };
  h.appendChild = function(a, b) {
    a.appendChild(b)
  };
  h.getChildren = function(a) {
    return Ib && void 0 != a.children ? a.children : Ja(a.childNodes, function(a) {
      return 1 == a.nodeType
    })
  };
  h.contains = function(a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;) b = b.parentNode;
    return b == a
  };
  var Wb = "StopIteration" in l ? l.StopIteration : {
      message: "StopIteration",
      stack: ""
    },
    Xb = function() {};
  Xb.prototype.next = function() {
    throw Wb;
  };
  Xb.prototype.__iterator__ = function() {
    return this
  };
  var Yb = function(a, b) {
    this.map_ = {};
    this.keys_ = [];
    this.version_ = this.count_ = 0;
    var c = arguments.length;
    if (1 < c) {
      if (c % 2) throw Error("Uneven number of arguments");
      for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
    } else a && this.addAll(a)
  };
  Yb.prototype.getValues = function() {
    Zb(this);
    for (var a = [], b = 0; b < this.keys_.length; b++) a.push(this.map_[this.keys_[b]]);
    return a
  };
  Yb.prototype.getKeys = function() {
    Zb(this);
    return this.keys_.concat()
  };
  Yb.prototype.containsKey = function(a) {
    return $b(this.map_, a)
  };
  Yb.prototype.remove = function(a) {
    return $b(this.map_, a) ? (delete this.map_[a], this.count_--, this.version_++, this.keys_.length > 2 * this.count_ && Zb(this), !0) : !1
  };
  var Zb = function(a) {
    if (a.count_ != a.keys_.length) {
      for (var b = 0, c = 0; b < a.keys_.length;) {
        var d = a.keys_[b];
        $b(a.map_, d) && (a.keys_[c++] = d);
        b++
      }
      a.keys_.length = c
    }
    if (a.count_ != a.keys_.length) {
      for (var e = {}, c = b = 0; b < a.keys_.length;) d = a.keys_[b], $b(e, d) || (a.keys_[c++] = d, e[d] = 1), b++;
      a.keys_.length = c
    }
  };
  h = Yb.prototype;
  h.get = function(a, b) {
    return $b(this.map_, a) ? this.map_[a] : b
  };
  h.set = function(a, b) {
    $b(this.map_, a) || (this.count_++, this.keys_.push(a), this.version_++);
    this.map_[a] = b
  };
  h.addAll = function(a) {
    var b;
    if (a instanceof Yb) b = a.getKeys(), a = a.getValues();
    else {
      b = [];
      var c = 0,
        d;
      for (d in a) b[c++] = d;
      c = [];
      d = 0;
      for (var e in a) c[d++] = a[e];
      a = c
    }
    for (e = 0; e < b.length; e++) this.set(b[e], a[e])
  };
  h.forEach = function(a, b) {
    for (var c = this.getKeys(), d = 0; d < c.length; d++) {
      var e = c[d],
        f = this.get(e);
      a.call(b, f, e, this)
    }
  };
  h.clone = function() {
    return new Yb(this)
  };
  h.__iterator__ = function(a) {
    Zb(this);
    var b = 0,
      c = this.version_,
      d = this,
      e = new Xb;
    e.next = function() {
      if (c != d.version_) throw Error("The map has changed since the iterator was created");
      if (b >= d.keys_.length) throw Wb;
      var e = d.keys_[b++];
      return a ? e : d.map_[e]
    };
    return e
  };
  var $b = function(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
  };
  var C = function(a) {
    var b = a.type;
    if (!aa(b)) return null;
    switch (b.toLowerCase()) {
      case "checkbox":
      case "radio":
        return a.checked ? a.value : null;
      case "select-one":
        return b = a.selectedIndex, 0 <= b ? a.options[b].value : null;
      case "select-multiple":
        for (var b = [], c, d = 0; c = a.options[d]; d++) c.selected && b.push(c.value);
        return b.length ? b : null;
      default:
        return aa(a.value) ? a.value : null
    }
  };
  var ac = function(a) {
    ac[" "](a);
    return a
  };
  ac[" "] = ba;
  var bc = !z || 9 <= Number(Gb),
    cc = z && !B("9");
  !A || B("528");
  vb && B("1.9b") || z && B("8") || sb && B("9.5") || A && B("528");
  vb && !B("8") || z && B("9");
  var dc = function() {
    this.disposed_ = this.disposed_;
    this.onDisposeCallbacks_ = this.onDisposeCallbacks_
  };
  dc.prototype.disposed_ = !1;
  dc.prototype.isDisposed = function() {
    return this.disposed_
  };
  dc.prototype.dispose = function() {
    this.disposed_ || (this.disposed_ = !0, this.disposeInternal())
  };
  var ec = function(a, b) {
    a.disposed_ ? b.call(void 0) : (a.onDisposeCallbacks_ || (a.onDisposeCallbacks_ = []), a.onDisposeCallbacks_.push(aa(void 0) ? q(b, void 0) : b))
  };
  dc.prototype.disposeInternal = function() {
    if (this.onDisposeCallbacks_)
      for (; this.onDisposeCallbacks_.length;) this.onDisposeCallbacks_.shift()()
  };
  var fc = function(a) {
    a && "function" == typeof a.dispose && a.dispose()
  };
  var gc = function(a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.propagationStopped_ = !1;
    this.returnValue_ = !0
  };
  gc.prototype.stopPropagation = function() {
    this.propagationStopped_ = !0
  };
  gc.prototype.preventDefault = function() {
    this.defaultPrevented = !0;
    this.returnValue_ = !1
  };
  var E = function(a, b) {
    gc.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.event_ = this.state = null;
    a && this.init(a, b)
  };
  t(E, gc);
  E.prototype.init = function(a, b) {
    var c = this.type = a.type,
      d = a.changedTouches ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var e = a.relatedTarget;
    if (e) {
      if (vb) {
        var f;
        a: {
          try {
            ac(e.nodeName);
            f = !0;
            break a
          } catch (g) {}
          f = !1
        }
        f || (e = null)
      }
    } else "mouseover" == c ? e = a.fromElement : "mouseout" == c && (e = a.toElement);
    this.relatedTarget = e;
    null === d ? (this.offsetX = A || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = A || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX :
      a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0);
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.state = a.state;
    this.event_ = a;
    a.defaultPrevented &&
      this.preventDefault()
  };
  E.prototype.stopPropagation = function() {
    E.superClass_.stopPropagation.call(this);
    this.event_.stopPropagation ? this.event_.stopPropagation() : this.event_.cancelBubble = !0
  };
  E.prototype.preventDefault = function() {
    E.superClass_.preventDefault.call(this);
    var a = this.event_;
    if (a.preventDefault) a.preventDefault();
    else if (a.returnValue = !1, cc) try {
      if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
    } catch (b) {}
  };
  var hc = "closure_listenable_" + (1E6 * Math.random() | 0),
    ic = function(a) {
      return !(!a || !a[hc])
    },
    jc = 0;
  var kc = function(a, b, c, d, e) {
      this.listener = a;
      this.proxy = null;
      this.src = b;
      this.type = c;
      this.capture = !!d;
      this.handler = e;
      this.key = ++jc;
      this.removed = this.callOnce = !1
    },
    lc = function(a) {
      a.removed = !0;
      a.listener = null;
      a.proxy = null;
      a.src = null;
      a.handler = null
    };
  var mc = function(a) {
    this.src = a;
    this.listeners = {};
    this.typeCount_ = 0
  };
  mc.prototype.add = function(a, b, c, d, e) {
    var f = a.toString();
    a = this.listeners[f];
    a || (a = this.listeners[f] = [], this.typeCount_++);
    var g = nc(a, b, d, e); - 1 < g ? (b = a[g], c || (b.callOnce = !1)) : (b = new kc(b, this.src, f, !!d, e), b.callOnce = c, a.push(b));
    return b
  };
  mc.prototype.remove = function(a, b, c, d) {
    a = a.toString();
    if (!(a in this.listeners)) return !1;
    var e = this.listeners[a];
    b = nc(e, b, c, d);
    return -1 < b ? (lc(e[b]), Oa(e, b), 0 == e.length && (delete this.listeners[a], this.typeCount_--), !0) : !1
  };
  var oc = function(a, b) {
    var c = b.type;
    c in a.listeners && Pa(a.listeners[c], b) && (lc(b), 0 == a.listeners[c].length && (delete a.listeners[c], a.typeCount_--))
  };
  mc.prototype.removeAll = function(a) {
    a = a && a.toString();
    var b = 0,
      c;
    for (c in this.listeners)
      if (!a || c == a) {
        for (var d = this.listeners[c], e = 0; e < d.length; e++) ++b, lc(d[e]);
        delete this.listeners[c];
        this.typeCount_--
      }
    return b
  };
  mc.prototype.getListener = function(a, b, c, d) {
    a = this.listeners[a.toString()];
    var e = -1;
    a && (e = nc(a, b, c, d));
    return -1 < e ? a[e] : null
  };
  var nc = function(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.removed && f.listener == b && f.capture == !!c && f.handler == d) return e
    }
    return -1
  };
  var pc = "closure_lm_" + (1E6 * Math.random() | 0),
    qc = {},
    rc = 0,
    sc = function(a, b, c, d, e) {
      if (fa(b)) {
        for (var f = 0; f < b.length; f++) sc(a, b[f], c, d, e);
        return null
      }
      c = tc(c);
      return ic(a) ? a.listen(b, c, d, e) : uc(a, b, c, !1, d, e)
    },
    uc = function(a, b, c, d, e, f) {
      if (!b) throw Error("Invalid event type");
      var g = !!e,
        k = vc(a);
      k || (a[pc] = k = new mc(a));
      c = k.add(b, c, d, e, f);
      if (c.proxy) return c;
      d = wc();
      c.proxy = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener) a.addEventListener(b.toString(), d, g);
      else if (a.attachEvent) a.attachEvent(xc(b.toString()), d);
      else throw Error("addEventListener and attachEvent are unavailable.");
      rc++;
      return c
    },
    wc = function() {
      var a = yc,
        b = bc ? function(c) {
          return a.call(b.src, b.listener, c)
        } : function(c) {
          c = a.call(b.src, b.listener, c);
          if (!c) return c
        };
      return b
    },
    zc = function(a, b, c, d, e) {
      if (fa(b)) {
        for (var f = 0; f < b.length; f++) zc(a, b[f], c, d, e);
        return null
      }
      c = tc(c);
      return ic(a) ? a.listenOnce(b, c, d, e) : uc(a, b, c, !0, d, e)
    },
    Ac = function(a, b, c, d, e) {
      if (fa(b))
        for (var f = 0; f < b.length; f++) Ac(a, b[f], c, d, e);
      else c = tc(c), ic(a) ? a.unlisten(b, c, d, e) : a && (a = vc(a)) && (b = a.getListener(b, c, !!d, e)) && Bc(b)
    },
    Bc = function(a) {
      if ("number" !=
        typeof a && a && !a.removed) {
        var b = a.src;
        if (ic(b)) oc(b.eventTargetListeners_, a);
        else {
          var c = a.type,
            d = a.proxy;
          b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(xc(c), d);
          rc--;
          (c = vc(b)) ? (oc(c, a), 0 == c.typeCount_ && (c.src = null, b[pc] = null)) : lc(a)
        }
      }
    },
    xc = function(a) {
      return a in qc ? qc[a] : qc[a] = "on" + a
    },
    Dc = function(a, b, c, d) {
      var e = !0;
      if (a = vc(a))
        if (b = a.listeners[b.toString()])
          for (b = b.concat(), a = 0; a < b.length; a++) {
            var f = b[a];
            f && f.capture == c && !f.removed && (f = Cc(f, d), e = e && !1 !== f)
          }
        return e
    },
    Cc = function(a, b) {
      var c = a.listener,
        d = a.handler || a.src;
      a.callOnce && Bc(a);
      return c.call(d, b)
    },
    yc = function(a, b) {
      if (a.removed) return !0;
      if (!bc) {
        var c;
        if (!(c = b)) a: {
          c = ["window", "event"];
          for (var d = l, e; e = c.shift();)
            if (null != d[e]) d = d[e];
            else {
              c = null;
              break a
            }
          c = d
        }
        e = c;
        c = new E(e, this);
        d = !0;
        if (!(0 > e.keyCode || void 0 != e.returnValue)) {
          a: {
            var f = !1;
            if (0 == e.keyCode) try {
              e.keyCode = -1;
              break a
            } catch (w) {
              f = !0
            }
            if (f || void 0 == e.returnValue) e.returnValue = !0
          }
          e = [];
          for (f = c.currentTarget; f; f = f.parentNode) e.push(f);
          for (var f = a.type, g =
              e.length - 1; !c.propagationStopped_ && 0 <= g; g--) {
            c.currentTarget = e[g];
            var k = Dc(e[g], f, !0, c),
              d = d && k
          }
          for (g = 0; !c.propagationStopped_ && g < e.length; g++) c.currentTarget = e[g],
          k = Dc(e[g], f, !1, c),
          d = d && k
        }
        return d
      }
      return Cc(a, new E(b, this))
    },
    vc = function(a) {
      a = a[pc];
      return a instanceof mc ? a : null
    },
    Ec = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
    tc = function(a) {
      v(a, "Listener can not be null.");
      if (p(a)) return a;
      v(a.handleEvent, "An object listener must have handleEvent method.");
      a[Ec] || (a[Ec] = function(b) {
        return a.handleEvent(b)
      });
      return a[Ec]
    };
  var F = function() {
    dc.call(this);
    this.eventTargetListeners_ = new mc(this);
    this.actualEventTarget_ = this;
    this.parentEventTarget_ = null
  };
  t(F, dc);
  F.prototype[hc] = !0;
  h = F.prototype;
  h.setParentEventTarget = function(a) {
    this.parentEventTarget_ = a
  };
  h.addEventListener = function(a, b, c, d) {
    sc(this, a, b, c, d)
  };
  h.removeEventListener = function(a, b, c, d) {
    Ac(this, a, b, c, d)
  };
  h.dispatchEvent = function(a) {
    Fc(this);
    var b, c = this.parentEventTarget_;
    if (c) {
      b = [];
      for (var d = 1; c; c = c.parentEventTarget_) b.push(c), v(1E3 > ++d, "infinite loop")
    }
    c = this.actualEventTarget_;
    d = a.type || a;
    if (m(a)) a = new gc(a, c);
    else if (a instanceof gc) a.target = a.target || c;
    else {
      var e = a;
      a = new gc(d, c);
      ab(a, e)
    }
    var e = !0,
      f;
    if (b)
      for (var g = b.length - 1; !a.propagationStopped_ && 0 <= g; g--) f = a.currentTarget = b[g], e = Gc(f, d, !0, a) && e;
    a.propagationStopped_ || (f = a.currentTarget = c, e = Gc(f, d, !0, a) && e, a.propagationStopped_ || (e = Gc(f, d, !1,
      a) && e));
    if (b)
      for (g = 0; !a.propagationStopped_ && g < b.length; g++) f = a.currentTarget = b[g], e = Gc(f, d, !1, a) && e;
    return e
  };
  h.disposeInternal = function() {
    F.superClass_.disposeInternal.call(this);
    this.eventTargetListeners_ && this.eventTargetListeners_.removeAll(void 0);
    this.parentEventTarget_ = null
  };
  h.listen = function(a, b, c, d) {
    Fc(this);
    return this.eventTargetListeners_.add(String(a), b, !1, c, d)
  };
  h.listenOnce = function(a, b, c, d) {
    return this.eventTargetListeners_.add(String(a), b, !0, c, d)
  };
  h.unlisten = function(a, b, c, d) {
    return this.eventTargetListeners_.remove(String(a), b, c, d)
  };
  var Gc = function(a, b, c, d) {
    b = a.eventTargetListeners_.listeners[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
      var g = b[f];
      if (g && !g.removed && g.capture == c) {
        var k = g.listener,
          w = g.handler || g.src;
        g.callOnce && oc(a.eventTargetListeners_, g);
        e = !1 !== k.call(w, d) && e
      }
    }
    return e && 0 != d.returnValue_
  };
  F.prototype.getListener = function(a, b, c, d) {
    return this.eventTargetListeners_.getListener(String(a), b, c, d)
  };
  var Fc = function(a) {
    v(a.eventTargetListeners_, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
  };
  var Hc = function(a) {
      if (a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode) return !1;
      switch (a.keyCode) {
        case 18:
        case 20:
        case 93:
        case 17:
        case 40:
        case 35:
        case 27:
        case 36:
        case 45:
        case 37:
        case 224:
        case 91:
        case 144:
        case 12:
        case 34:
        case 33:
        case 19:
        case 255:
        case 44:
        case 39:
        case 145:
        case 16:
        case 38:
        case 252:
        case 224:
        case 92:
          return !1;
        case 0:
          return !vb;
        default:
          return 166 > a.keyCode || 183 < a.keyCode
      }
    },
    Kc = function(a, b, c, d, e) {
      if (!(z || tb || A && B("525"))) return !0;
      if (xb && e) return Ic(a);
      if (e && !d) return !1;
      "number" ==
      typeof b && (b = Jc(b));
      if (!c && (17 == b || 18 == b || xb && 91 == b)) return !1;
      if ((A || tb) && d && c) switch (a) {
        case 220:
        case 219:
        case 221:
        case 192:
        case 186:
        case 189:
        case 187:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
          return !1
      }
      if (z && d && b == a) return !1;
      switch (a) {
        case 13:
          return !0;
        case 27:
          return !(A || tb)
      }
      return Ic(a)
    },
    Ic = function(a) {
      if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (A || tb) && 0 == a) return !0;
      switch (a) {
        case 32:
        case 43:
        case 63:
        case 64:
        case 107:
        case 109:
        case 110:
        case 111:
        case 186:
        case 59:
        case 189:
        case 187:
        case 61:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
        case 219:
        case 220:
        case 221:
          return !0;
        default:
          return !1
      }
    },
    Jc = function(a) {
      if (vb) a = Lc(a);
      else if (xb && A) a: switch (a) {
        case 93:
          a = 91;
          break a
      }
      return a
    },
    Lc = function(a) {
      switch (a) {
        case 61:
          return 187;
        case 59:
          return 186;
        case 173:
          return 189;
        case 224:
          return 91;
        case 0:
          return 224;
        default:
          return a
      }
    };
  var Nc = function(a) {
    F.call(this);
    this.element_ = a;
    sc(a, Mc, this.handleKeyDown_, !1, this);
    sc(a, "click", this.handleClick_, !1, this)
  };
  t(Nc, F);
  var Mc = vb ? "keypress" : "keydown";
  Nc.prototype.handleKeyDown_ = function(a) {
    (13 == a.keyCode || A && 3 == a.keyCode) && Oc(this, a)
  };
  Nc.prototype.handleClick_ = function(a) {
    Oc(this, a)
  };
  var Oc = function(a, b) {
    var c = new Pc(b);
    if (a.dispatchEvent(c)) {
      c = new Qc(b);
      try {
        a.dispatchEvent(c)
      } finally {
        b.stopPropagation()
      }
    }
  };
  Nc.prototype.disposeInternal = function() {
    Nc.superClass_.disposeInternal.call(this);
    Ac(this.element_, Mc, this.handleKeyDown_, !1, this);
    Ac(this.element_, "click", this.handleClick_, !1, this);
    delete this.element_
  };
  var Qc = function(a) {
    E.call(this, a.event_);
    this.type = "action"
  };
  t(Qc, E);
  var Pc = function(a) {
    E.call(this, a.event_);
    this.type = "beforeaction"
  };
  t(Pc, E);
  var Rc = function(a) {
    F.call(this);
    this.element_ = a;
    a = z ? "focusout" : "blur";
    this.listenKeyIn_ = sc(this.element_, z ? "focusin" : "focus", this, !z);
    this.listenKeyOut_ = sc(this.element_, a, this, !z)
  };
  t(Rc, F);
  Rc.prototype.handleEvent = function(a) {
    var b = new E(a.event_);
    b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
    this.dispatchEvent(b)
  };
  Rc.prototype.disposeInternal = function() {
    Rc.superClass_.disposeInternal.call(this);
    Bc(this.listenKeyIn_);
    Bc(this.listenKeyOut_);
    delete this.element_
  };
  var Sc = function(a, b, c) {
    this.limit_ = c;
    this.create_ = a;
    this.reset_ = b;
    this.occupants_ = 0;
    this.head_ = null
  };
  Sc.prototype.get = function() {
    var a;
    0 < this.occupants_ ? (this.occupants_--, a = this.head_, this.head_ = a.next, a.next = null) : a = this.create_();
    return a
  };
  Sc.prototype.put = function(a) {
    this.reset_(a);
    this.occupants_ < this.limit_ && (this.occupants_++, a.next = this.head_, this.head_ = a)
  };
  var Tc = function(a) {
      l.setTimeout(function() {
        throw a;
      }, 0)
    },
    Uc, Vc = function() {
      var a = l.MessageChannel;
      "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !x("Presto") && (a = function() {
        var a = document.createElement("IFRAME");
        a.style.display = "none";
        a.src = "";
        document.documentElement.appendChild(a);
        var b = a.contentWindow,
          a = b.document;
        a.open();
        a.write("");
        a.close();
        var c = "callImmediate" + Math.random(),
          d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host,
          a = q(function(a) {
            if (("*" == d || a.origin == d) && a.data == c) this.port1.onmessage()
          }, this);
        b.addEventListener("message", a, !1);
        this.port1 = {};
        this.port2 = {
          postMessage: function() {
            b.postMessage(c, d)
          }
        }
      });
      if ("undefined" !== typeof a && !x("Trident") && !x("MSIE")) {
        var b = new a,
          c = {},
          d = c;
        b.port1.onmessage = function() {
          if (aa(c.next)) {
            c = c.next;
            var a = c.cb;
            c.cb = null;
            a()
          }
        };
        return function(a) {
          d.next = {
            cb: a
          };
          d = d.next;
          b.port2.postMessage(0)
        }
      }
      return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ?
        function(a) {
          var b = document.createElement("SCRIPT");
          b.onreadystatechange = function() {
            b.onreadystatechange = null;
            b.parentNode.removeChild(b);
            b = null;
            a();
            a = null
          };
          document.documentElement.appendChild(b)
        } : function(a) {
          l.setTimeout(a, 0)
        }
    };
  var Wc = function() {
      this.workTail_ = this.workHead_ = null
    },
    Yc = new Sc(function() {
      return new Xc
    }, function(a) {
      a.reset()
    }, 100);
  Wc.prototype.add = function(a, b) {
    var c = Yc.get();
    c.set(a, b);
    this.workTail_ ? this.workTail_.next = c : (v(!this.workHead_), this.workHead_ = c);
    this.workTail_ = c
  };
  Wc.prototype.remove = function() {
    var a = null;
    this.workHead_ && (a = this.workHead_, this.workHead_ = this.workHead_.next, this.workHead_ || (this.workTail_ = null), a.next = null);
    return a
  };
  var Xc = function() {
    this.next = this.scope = this.fn = null
  };
  Xc.prototype.set = function(a, b) {
    this.fn = a;
    this.scope = b;
    this.next = null
  };
  Xc.prototype.reset = function() {
    this.next = this.scope = this.fn = null
  };
  var cd = function(a, b) {
      Zc || $c();
      ad || (Zc(), ad = !0);
      bd.add(a, b)
    },
    Zc, $c = function() {
      if (l.Promise && l.Promise.resolve) {
        var a = l.Promise.resolve(void 0);
        Zc = function() {
          a.then(dd)
        }
      } else Zc = function() {
        var a = dd;
        !p(l.setImmediate) || l.Window && l.Window.prototype && !x("Edge") && l.Window.prototype.setImmediate == l.setImmediate ? (Uc || (Uc = Vc()), Uc(a)) : l.setImmediate(a)
      }
    },
    ad = !1,
    bd = new Wc,
    dd = function() {
      for (var a; a = bd.remove();) {
        try {
          a.fn.call(a.scope)
        } catch (b) {
          Tc(b)
        }
        Yc.put(a)
      }
      ad = !1
    };
  var ed = function(a) {
      a.prototype.then = a.prototype.then;
      a.prototype.$goog_Thenable = !0
    },
    fd = function(a) {
      if (!a) return !1;
      try {
        return !!a.$goog_Thenable
      } catch (b) {
        return !1
      }
    };
  var id = function(a, b) {
      this.state_ = 0;
      this.result_ = void 0;
      this.callbackEntriesTail_ = this.callbackEntries_ = this.parent_ = null;
      this.hadUnhandledRejection_ = this.executing_ = !1;
      if (a != ba) try {
        var c = this;
        a.call(b, function(a) {
          gd(c, 2, a)
        }, function(a) {
          if (!(a instanceof hd)) try {
            if (a instanceof Error) throw a;
            throw Error("Promise rejected.");
          } catch (b) {}
          gd(c, 3, a)
        })
      } catch (d) {
        gd(this, 3, d)
      }
    },
    jd = function() {
      this.next = this.context = this.onRejected = this.onFulfilled = this.child = null;
      this.always = !1
    };
  jd.prototype.reset = function() {
    this.context = this.onRejected = this.onFulfilled = this.child = null;
    this.always = !1
  };
  var kd = new Sc(function() {
      return new jd
    }, function(a) {
      a.reset()
    }, 100),
    ld = function(a, b, c) {
      var d = kd.get();
      d.onFulfilled = a;
      d.onRejected = b;
      d.context = c;
      return d
    };
  id.prototype.then = function(a, b, c) {
    null != a && Ea(a, "opt_onFulfilled should be a function.");
    null != b && Ea(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
    return md(this, p(a) ? a : null, p(b) ? b : null, c)
  };
  ed(id);
  id.prototype.cancel = function(a) {
    0 == this.state_ && cd(function() {
      var b = new hd(a);
      nd(this, b)
    }, this)
  };
  var nd = function(a, b) {
      if (0 == a.state_)
        if (a.parent_) {
          var c = a.parent_;
          if (c.callbackEntries_) {
            for (var d = 0, e = null, f = null, g = c.callbackEntries_; g && (g.always || (d++, g.child == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
            e && (0 == c.state_ && 1 == d ? nd(c, b) : (f ? (d = f, v(c.callbackEntries_), v(null != d), d.next == c.callbackEntriesTail_ && (c.callbackEntriesTail_ = d), d.next = d.next.next) : od(c), pd(c, e, 3, b)))
          }
          a.parent_ = null
        } else gd(a, 3, b)
    },
    rd = function(a, b) {
      a.callbackEntries_ || 2 != a.state_ && 3 != a.state_ || qd(a);
      v(null != b.onFulfilled);
      a.callbackEntriesTail_ ?
        a.callbackEntriesTail_.next = b : a.callbackEntries_ = b;
      a.callbackEntriesTail_ = b
    },
    md = function(a, b, c, d) {
      var e = ld(null, null, null);
      e.child = new id(function(a, g) {
        e.onFulfilled = b ? function(c) {
          try {
            var e = b.call(d, c);
            a(e)
          } catch (V) {
            g(V)
          }
        } : a;
        e.onRejected = c ? function(b) {
          try {
            var e = c.call(d, b);
            !aa(e) && b instanceof hd ? g(b) : a(e)
          } catch (V) {
            g(V)
          }
        } : g
      });
      e.child.parent_ = a;
      rd(a, e);
      return e.child
    };
  id.prototype.unblockAndFulfill_ = function(a) {
    v(1 == this.state_);
    this.state_ = 0;
    gd(this, 2, a)
  };
  id.prototype.unblockAndReject_ = function(a) {
    v(1 == this.state_);
    this.state_ = 0;
    gd(this, 3, a)
  };
  var gd = function(a, b, c) {
      if (0 == a.state_) {
        a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
        a.state_ = 1;
        var d;
        a: {
          var e = c,
            f = a.unblockAndFulfill_,
            g = a.unblockAndReject_;
          if (e instanceof id) null != f && Ea(f, "opt_onFulfilled should be a function."),
          null != g && Ea(g, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),
          rd(e, ld(f || ba, g || null, a)),
          d = !0;
          else if (fd(e)) e.then(f, g, a),
          d = !0;
          else {
            if (ha(e)) try {
              var k = e.then;
              if (p(k)) {
                sd(e, k, f, g, a);
                d = !0;
                break a
              }
            } catch (w) {
              g.call(a,
                w);
              d = !0;
              break a
            }
            d = !1
          }
        }
        d || (a.result_ = c, a.state_ = b, a.parent_ = null, qd(a), 3 != b || c instanceof hd || td(a, c))
      }
    },
    sd = function(a, b, c, d, e) {
      var f = !1,
        g = function(a) {
          f || (f = !0, c.call(e, a))
        },
        k = function(a) {
          f || (f = !0, d.call(e, a))
        };
      try {
        b.call(a, g, k)
      } catch (w) {
        k(w)
      }
    },
    qd = function(a) {
      a.executing_ || (a.executing_ = !0, cd(a.executeCallbacks_, a))
    },
    od = function(a) {
      var b = null;
      a.callbackEntries_ && (b = a.callbackEntries_, a.callbackEntries_ = b.next, b.next = null);
      a.callbackEntries_ || (a.callbackEntriesTail_ = null);
      null != b && v(null != b.onFulfilled);
      return b
    };
  id.prototype.executeCallbacks_ = function() {
    for (var a; a = od(this);) pd(this, a, this.state_, this.result_);
    this.executing_ = !1
  };
  var pd = function(a, b, c, d) {
      if (3 == c && b.onRejected && !b.always)
        for (; a && a.hadUnhandledRejection_; a = a.parent_) a.hadUnhandledRejection_ = !1;
      if (b.child) b.child.parent_ = null, ud(b, c, d);
      else try {
        b.always ? b.onFulfilled.call(b.context) : ud(b, c, d)
      } catch (e) {
        vd.call(null, e)
      }
      kd.put(b)
    },
    ud = function(a, b, c) {
      2 == b ? a.onFulfilled.call(a.context, c) : a.onRejected && a.onRejected.call(a.context, c)
    },
    td = function(a, b) {
      a.hadUnhandledRejection_ = !0;
      cd(function() {
        a.hadUnhandledRejection_ && vd.call(null, b)
      })
    },
    vd = Tc,
    hd = function(a) {
      u.call(this,
        a)
    };
  t(hd, u);
  hd.prototype.name = "cancel";
  var wd = function(a, b) {
    if (p(a)) b && (a = q(a, b));
    else if (a && "function" == typeof a.handleEvent) a = q(a.handleEvent, a);
    else throw Error("Invalid listener argument");
    return 2147483647 < Number(0) ? -1 : l.setTimeout(a, 0)
  };
  var xd = function(a) {
    dc.call(this);
    this.handler_ = a;
    this.keys_ = {}
  };
  t(xd, dc);
  var yd = [];
  xd.prototype.listen = function(a, b, c, d) {
    fa(b) || (b && (yd[0] = b.toString()), b = yd);
    for (var e = 0; e < b.length; e++) {
      var f = sc(a, b[e], c || this.handleEvent, d || !1, this.handler_ || this);
      if (!f) break;
      this.keys_[f.key] = f
    }
    return this
  };
  xd.prototype.listenOnce = function(a, b, c, d) {
    return zd(this, a, b, c, d)
  };
  var zd = function(a, b, c, d, e, f) {
    if (fa(c))
      for (var g = 0; g < c.length; g++) zd(a, b, c[g], d, e, f);
    else {
      b = zc(b, c, d || a.handleEvent, e, f || a.handler_ || a);
      if (!b) return a;
      a.keys_[b.key] = b
    }
    return a
  };
  xd.prototype.unlisten = function(a, b, c, d, e) {
    if (fa(b))
      for (var f = 0; f < b.length; f++) this.unlisten(a, b[f], c, d, e);
    else c = c || this.handleEvent, e = e || this.handler_ || this, c = tc(c), d = !!d, b = ic(a) ? a.getListener(b, c, d, e) : a ? (a = vc(a)) ? a.getListener(b, c, d, e) : null : null, b && (Bc(b), delete this.keys_[b.key]);
    return this
  };
  xd.prototype.removeAll = function() {
    Ya(this.keys_, function(a, b) {
      this.keys_.hasOwnProperty(b) && Bc(a)
    }, this);
    this.keys_ = {}
  };
  xd.prototype.disposeInternal = function() {
    xd.superClass_.disposeInternal.call(this);
    this.removeAll()
  };
  xd.prototype.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented");
  };
  var Ad = function(a) {
    F.call(this);
    this.timer_ = null;
    this.element_ = a;
    a = z || tb || A && !B("531") && "TEXTAREA" == a.tagName;
    this.eventHandler_ = new xd(this);
    this.eventHandler_.listen(this.element_, a ? ["keydown", "paste", "cut", "drop", "input"] : "input", this)
  };
  t(Ad, F);
  Ad.prototype.handleEvent = function(a) {
    if ("input" == a.type) z && B(10) && 0 == a.keyCode && 0 == a.charCode || (Bd(this), this.dispatchEvent(Cd(a)));
    else if ("keydown" != a.type || Hc(a)) {
      var b = "keydown" == a.type ? this.element_.value : null;
      z && 229 == a.keyCode && (b = null);
      var c = Cd(a);
      Bd(this);
      this.timer_ = wd(function() {
        this.timer_ = null;
        this.element_.value != b && this.dispatchEvent(c)
      }, this)
    }
  };
  var Bd = function(a) {
      null != a.timer_ && (l.clearTimeout(a.timer_), a.timer_ = null)
    },
    Cd = function(a) {
      a = new E(a.event_);
      a.type = "input";
      return a
    };
  Ad.prototype.disposeInternal = function() {
    Ad.superClass_.disposeInternal.call(this);
    this.eventHandler_.dispose();
    Bd(this);
    delete this.element_
  };
  var Dd = function(a, b) {
    F.call(this);
    a && (this.keyUpKey_ && this.detach(), this.element_ = a, this.keyPressKey_ = sc(this.element_, "keypress", this, b), this.keyDownKey_ = sc(this.element_, "keydown", this.handleKeyDown_, b, this), this.keyUpKey_ = sc(this.element_, "keyup", this.handleKeyup_, b, this))
  };
  t(Dd, F);
  h = Dd.prototype;
  h.element_ = null;
  h.keyPressKey_ = null;
  h.keyDownKey_ = null;
  h.keyUpKey_ = null;
  h.lastKey_ = -1;
  h.keyCode_ = -1;
  h.altKey_ = !1;
  var Ed = {
      3: 13,
      12: 144,
      63232: 38,
      63233: 40,
      63234: 37,
      63235: 39,
      63236: 112,
      63237: 113,
      63238: 114,
      63239: 115,
      63240: 116,
      63241: 117,
      63242: 118,
      63243: 119,
      63244: 120,
      63245: 121,
      63246: 122,
      63247: 123,
      63248: 44,
      63272: 46,
      63273: 36,
      63275: 35,
      63276: 33,
      63277: 34,
      63289: 144,
      63302: 45
    },
    Fd = {
      Up: 38,
      Down: 40,
      Left: 37,
      Right: 39,
      Enter: 13,
      F1: 112,
      F2: 113,
      F3: 114,
      F4: 115,
      F5: 116,
      F6: 117,
      F7: 118,
      F8: 119,
      F9: 120,
      F10: 121,
      F11: 122,
      F12: 123,
      "U+007F": 46,
      Home: 36,
      End: 35,
      PageUp: 33,
      PageDown: 34,
      Insert: 45
    },
    Gd = z || tb || A && B("525"),
    Hd = xb && vb;
  h = Dd.prototype;
  h.handleKeyDown_ = function(a) {
    if (A || tb)
      if (17 == this.lastKey_ && !a.ctrlKey || 18 == this.lastKey_ && !a.altKey || xb && 91 == this.lastKey_ && !a.metaKey) this.keyCode_ = this.lastKey_ = -1; - 1 == this.lastKey_ && (a.ctrlKey && 17 != a.keyCode ? this.lastKey_ = 17 : a.altKey && 18 != a.keyCode ? this.lastKey_ = 18 : a.metaKey && 91 != a.keyCode && (this.lastKey_ = 91));
    Gd && !Kc(a.keyCode, this.lastKey_, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.keyCode_ = Jc(a.keyCode), Hd && (this.altKey_ = a.altKey))
  };
  h.handleKeyup_ = function(a) {
    this.keyCode_ = this.lastKey_ = -1;
    this.altKey_ = a.altKey
  };
  h.handleEvent = function(a) {
    var b = a.event_,
      c, d, e = b.altKey;
    z && "keypress" == a.type ? (c = this.keyCode_, d = 13 != c && 27 != c ? b.keyCode : 0) : (A || tb) && "keypress" == a.type ? (c = this.keyCode_, d = 0 <= b.charCode && 63232 > b.charCode && Ic(c) ? b.charCode : 0) : sb && !A ? (c = this.keyCode_, d = Ic(c) ? b.keyCode : 0) : (c = b.keyCode || this.keyCode_, d = b.charCode || 0, Hd && (e = this.altKey_), xb && 63 == d && 224 == c && (c = 191));
    var f = c = Jc(c),
      g = b.keyIdentifier;
    c ? 63232 <= c && c in Ed ? f = Ed[c] : 25 == c && a.shiftKey && (f = 9) : g && g in Fd && (f = Fd[g]);
    a = f == this.lastKey_;
    this.lastKey_ =
      f;
    b = new Id(f, d, a, b);
    b.altKey = e;
    this.dispatchEvent(b)
  };
  h.getElement = function() {
    return this.element_
  };
  h.detach = function() {
    this.keyPressKey_ && (Bc(this.keyPressKey_), Bc(this.keyDownKey_), Bc(this.keyUpKey_), this.keyUpKey_ = this.keyDownKey_ = this.keyPressKey_ = null);
    this.element_ = null;
    this.keyCode_ = this.lastKey_ = -1
  };
  h.disposeInternal = function() {
    Dd.superClass_.disposeInternal.call(this);
    this.detach()
  };
  var Id = function(a, b, c, d) {
    E.call(this, d);
    this.type = "key";
    this.keyCode = a;
    this.charCode = b;
    this.repeat = c
  };
  t(Id, E);
  var Jd = function() {};
  Jd.getInstance = function() {
    return Jd.instance_ ? Jd.instance_ : Jd.instance_ = new Jd
  };
  Jd.prototype.nextId_ = 0;
  var G = function(a) {
    F.call(this);
    this.dom_ = a || Lb();
    this.id_ = null;
    this.inDocument_ = !1;
    this.element_ = null;
    this.googUiComponentHandler_ = void 0;
    this.childIndex_ = this.children_ = this.parent_ = null;
    this.wasDecorated_ = !1
  };
  t(G, F);
  G.prototype.idGenerator_ = Jd.getInstance();
  G.prototype.getId = function() {
    return this.id_ || (this.id_ = ":" + (this.idGenerator_.nextId_++).toString(36))
  };
  var Kd = function(a, b) {
    if (a.parent_ && a.parent_.childIndex_) {
      var c = a.parent_.childIndex_,
        d = a.id_;
      d in c && delete c[d];
      Za(a.parent_.childIndex_, b, a)
    }
    a.id_ = b
  };
  G.prototype.getElement = function() {
    return this.element_
  };
  G.prototype.getElementsByClass = function(a) {
    return this.element_ ? this.dom_.getElementsByClass(a, this.element_) : []
  };
  G.prototype.getElementByClass = function(a) {
    return this.element_ ? this.dom_.getElementByClass(a, this.element_) : null
  };
  var Ld = function(a) {
      a.googUiComponentHandler_ || (a.googUiComponentHandler_ = new xd(a));
      return a.googUiComponentHandler_
    },
    Nd = function(a, b) {
      if (a == b) throw Error("Unable to set parent component");
      if (b && a.parent_ && a.id_ && Md(a.parent_, a.id_) && a.parent_ != b) throw Error("Unable to set parent component");
      a.parent_ = b;
      G.superClass_.setParentEventTarget.call(a, b)
    };
  h = G.prototype;
  h.getParent = function() {
    return this.parent_
  };
  h.setParentEventTarget = function(a) {
    if (this.parent_ && this.parent_ != a) throw Error("Method not supported");
    G.superClass_.setParentEventTarget.call(this, a)
  };
  h.getDomHelper = function() {
    return this.dom_
  };
  h.createDom = function() {
    this.element_ = this.dom_.createElement("DIV")
  };
  h.render = function(a) {
    if (this.inDocument_) throw Error("Component already rendered");
    this.element_ || this.createDom();
    a ? a.insertBefore(this.element_, null) : this.dom_.document_.body.appendChild(this.element_);
    this.parent_ && !this.parent_.inDocument_ || this.enterDocument()
  };
  h.enterDocument = function() {
    this.inDocument_ = !0;
    Od(this, function(a) {
      !a.inDocument_ && a.getElement() && a.enterDocument()
    })
  };
  h.exitDocument = function() {
    Od(this, function(a) {
      a.inDocument_ && a.exitDocument()
    });
    this.googUiComponentHandler_ && this.googUiComponentHandler_.removeAll();
    this.inDocument_ = !1
  };
  h.disposeInternal = function() {
    this.inDocument_ && this.exitDocument();
    this.googUiComponentHandler_ && (this.googUiComponentHandler_.dispose(), delete this.googUiComponentHandler_);
    Od(this, function(a) {
      a.dispose()
    });
    !this.wasDecorated_ && this.element_ && Sb(this.element_);
    this.parent_ = this.element_ = this.childIndex_ = this.children_ = null;
    G.superClass_.disposeInternal.call(this)
  };
  var Md = function(a, b) {
      var c;
      a.childIndex_ && b ? (c = a.childIndex_, c = (null !== c && b in c ? c[b] : void 0) || null) : c = null;
      return c
    },
    Od = function(a, b) {
      a.children_ && Ia(a.children_, b, void 0)
    };
  G.prototype.removeChild = function(a, b) {
    if (a) {
      var c = m(a) ? a : a.getId();
      a = Md(this, c);
      if (c && a) {
        var d = this.childIndex_;
        c in d && delete d[c];
        Pa(this.children_, a);
        b && (a.exitDocument(), a.element_ && Sb(a.element_));
        Nd(a, null)
      }
    }
    if (!a) throw Error("Child is not in parent component");
    return a
  };
  var H = function(a, b) {
      var c;
      c = Ub(a);
      b ? (Xa(a, "firebaseui-input-invalid"), Wa(a, "firebaseui-input"), c && Xa(c, "firebaseui-textfield-invalid")) : (Xa(a, "firebaseui-input"), Wa(a, "firebaseui-input-invalid"), c && Wa(c, "firebaseui-textfield-invalid"))
    },
    Pd = function(a, b, c) {
      b = new Ad(b);
      ec(a, ka(fc, b));
      Ld(a).listen(b, "input", c)
    },
    Qd = function(a, b, c) {
      b = new Dd(b);
      ec(a, ka(fc, b));
      Ld(a).listen(b, "key", function(a) {
        13 == a.keyCode && (a.stopPropagation(), a.preventDefault(), c(a))
      })
    },
    Rd = function(a, b, c) {
      b = new Rc(b);
      ec(a, ka(fc, b));
      Ld(a).listen(b,
        "focusin", c)
    },
    Sd = function(a, b, c) {
      b = new Rc(b);
      ec(a, ka(fc, b));
      Ld(a).listen(b, "focusout", c)
    },
    Td = function(a, b, c) {
      b = new Nc(b);
      ec(a, ka(fc, b));
      Ld(a).listen(b, "action", function(a) {
        a.stopPropagation();
        a.preventDefault();
        c(a)
      })
    },
    Ud = function(a) {
      Wa(a, "firebaseui-hidden")
    },
    Vd = function(a, b) {
      if (b)
        if (v(null != a, "goog.dom.setTextContent expects a non-null value for node"), "textContent" in a) a.textContent = b;
        else if (3 == a.nodeType) a.data = b;
      else if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
        a.firstChild.data = b
      } else {
        for (var c; c = a.firstChild;) a.removeChild(c);
        c = Kb(a);
        a.appendChild(c.createTextNode(String(b)))
      }
      Xa(a, "firebaseui-hidden")
    },
    Wd = function(a) {
      return !Va(a, "firebaseui-hidden") && "none" != a.style.display
    };
  z && B(8);
  var Xd = {
      sanitizedContentKindHtml: !0
    },
    Yd = {
      sanitizedContentUri: !0
    },
    Zd = {
      sanitizedContentTrustedResourceUri: !0
    },
    $d = {
      sanitizedContentKindText: !0
    },
    I = function() {
      throw Error("Do not instantiate directly");
    };
  I.prototype.contentDir = null;
  I.prototype.toString = function() {
    return this.content
  };
  var ae = function() {
    I.call(this)
  };
  t(ae, I);
  var be = function() {
    I.call(this)
  };
  t(be, I);
  var fe = function(a, b, c, d) {
      v(a, "Soy template may not be null.");
      a: if (a = a(b || ce, void 0, c), d = (d || Lb()).createElement("DIV"), a = de(a), b = a.match(ee), v(!b, "This template starts with a %s, which cannot be a child of a <div>, as required by soy internals. Consider using goog.soy.renderElement instead.\nTemplate output: %s", b && b[0], a), d.innerHTML = a, 1 == d.childNodes.length && (a = d.firstChild, 1 == a.nodeType)) {
        d = a;
        break a
      }
      return d
    },
    de = function(a) {
      if (!ha(a)) return String(a);
      if (a instanceof I) {
        if (a.contentKind === Xd) return Da(a.content);
        if (a.contentKind === $d) return xa(a.content)
      }
      Ba("Soy template output is unsafe for use as HTML: " + a);
      return "zSoyz"
    },
    ee = /^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i,
    ce = {};
  var ge = function(a) {
      if (null != a) switch (a.contentDir) {
        case 1:
          return 1;
        case -1:
          return -1;
        case 0:
          return 0
      }
      return null
    },
    he = function() {
      I.call(this)
    };
  t(he, I);
  he.prototype.contentKind = Xd;
  var K = function(a) {
      return null != a && a.contentKind === Xd ? (v(a.constructor === he), a) : a instanceof qb ? J(rb(a), a.getDirection()) : J(xa(String(String(a))), ge(a))
    },
    ie = function() {
      I.call(this)
    };
  t(ie, I);
  ie.prototype.contentKind = {
    sanitizedContentJsChars: !0
  };
  ie.prototype.contentDir = 1;
  var je = function() {
    I.call(this)
  };
  t(je, I);
  je.prototype.contentKind = Yd;
  je.prototype.contentDir = 1;
  var ke = function() {
    I.call(this)
  };
  t(ke, I);
  ke.prototype.contentKind = Zd;
  ke.prototype.contentDir = 1;
  var le = function() {
    I.call(this)
  };
  t(le, I);
  le.prototype.contentKind = {
    sanitizedContentHtmlAttribute: !0
  };
  le.prototype.contentDir = 1;
  var me = function() {
    I.call(this)
  };
  t(me, be);
  me.prototype.contentKind = {
    sanitizedContentCss: !0
  };
  me.prototype.contentDir = 1;
  var ne = function(a, b) {
    this.content = String(a);
    this.contentDir = null != b ? b : null
  };
  t(ne, ae);
  ne.prototype.contentKind = $d;
  var oe = function(a) {
      function b(a) {
        this.content = a
      }
      b.prototype = a.prototype;
      return function(a) {
        return new b(String(a))
      }
    },
    pe = function(a) {
      return new ne(a, void 0)
    },
    J = function(a) {
      function b(a) {
        this.content = a
      }
      b.prototype = a.prototype;
      return function(a, d) {
        var e = new b(String(a));
        void 0 !== d && (e.contentDir = d);
        return e
      }
    }(he);
  oe(ie);
  var qe = oe(je);
  oe(ke);
  oe(le);
  oe(me);
  var re = function(a) {
    return (a = String(a)) ? new ne(a, void 0) : ""
  };
  (function(a) {
    function b(a) {
      this.content = a
    }
    b.prototype = a.prototype;
    return function(a, d) {
      var e = String(a);
      if (!e) return "";
      e = new b(e);
      void 0 !== d && (e.contentDir = d);
      return e
    }
  })(he);
  var L = function(a) {
      return null != a && a.contentKind === Xd ? (v(a.constructor === he), String(String(a.content).replace(se, "").replace(te, "&lt;")).replace(ue, ve)) : xa(String(a))
    },
    Ae = function(a) {
      if (null != a && a.contentKind === Yd) return v(a.constructor === je), we(a);
      if (null != a && a.contentKind === Zd) return v(a.constructor === ke), we(a);
      a instanceof y ? a = we(ib(a)) : a instanceof nb ? a = we(ob(a)) : (a = String(a), xe.test(a) ? a = a.replace(ye, ze) : (Ba("Bad value `%s` for |filterNormalizeUri", [a]), a = "#zSoyz"));
      return a
    },
    Ce = function(a) {
      if (null !=
        a && a.contentKind === Yd) return v(a.constructor === je), we(a);
      if (null != a && a.contentKind === Zd) return v(a.constructor === ke), we(a);
      a instanceof y ? a = we(ib(a)) : a instanceof nb ? a = we(ob(a)) : (a = String(a), Be.test(a) ? a = a.replace(ye, ze) : (Ba("Bad value `%s` for |filterNormalizeMediaUri", [a]), a = "about:invalid#zSoyz"));
      return a
    },
    M = function(a, b, c, d) {
      c = c instanceof Function ? c.displayName || c.name || "unknown type name" : c instanceof Object ? c.constructor.displayName || c.constructor.name || Object.prototype.toString.call(c) : null ===
        c ? "null" : typeof c;
      v(a, "expected param " + b + " of type " + d + (", but got " + c) + ".", void 0)
    },
    De = {
      "\x00": "&#0;",
      "\t": "&#9;",
      "\n": "&#10;",
      "\x0B": "&#11;",
      "\f": "&#12;",
      "\r": "&#13;",
      " ": "&#32;",
      '"': "&quot;",
      "&": "&amp;",
      "'": "&#39;",
      "-": "&#45;",
      "/": "&#47;",
      "<": "&lt;",
      "=": "&#61;",
      ">": "&gt;",
      "`": "&#96;",
      "\u0085": "&#133;",
      "\u00a0": "&#160;",
      "\u2028": "&#8232;",
      "\u2029": "&#8233;"
    },
    ve = function(a) {
      return De[a]
    },
    Ee = {
      "\x00": "\\x00",
      "\b": "\\x08",
      "\t": "\\t",
      "\n": "\\n",
      "\x0B": "\\x0b",
      "\f": "\\f",
      "\r": "\\r",
      '"': "\\x22",
      $: "\\x24",
      "&": "\\x26",
      "'": "\\x27",
      "(": "\\x28",
      ")": "\\x29",
      "*": "\\x2a",
      "+": "\\x2b",
      ",": "\\x2c",
      "-": "\\x2d",
      ".": "\\x2e",
      "/": "\\/",
      ":": "\\x3a",
      "<": "\\x3c",
      "=": "\\x3d",
      ">": "\\x3e",
      "?": "\\x3f",
      "[": "\\x5b",
      "\\": "\\\\",
      "]": "\\x5d",
      "^": "\\x5e",
      "{": "\\x7b",
      "|": "\\x7c",
      "}": "\\x7d",
      "\u0085": "\\x85",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029"
    },
    Fe = function(a) {
      return Ee[a]
    },
    Ge = {
      "\x00": "%00",
      "\u0001": "%01",
      "\u0002": "%02",
      "\u0003": "%03",
      "\u0004": "%04",
      "\u0005": "%05",
      "\u0006": "%06",
      "\u0007": "%07",
      "\b": "%08",
      "\t": "%09",
      "\n": "%0A",
      "\x0B": "%0B",
      "\f": "%0C",
      "\r": "%0D",
      "\u000e": "%0E",
      "\u000f": "%0F",
      "\u0010": "%10",
      "\u0011": "%11",
      "\u0012": "%12",
      "\u0013": "%13",
      "\u0014": "%14",
      "\u0015": "%15",
      "\u0016": "%16",
      "\u0017": "%17",
      "\u0018": "%18",
      "\u0019": "%19",
      "\u001a": "%1A",
      "\u001b": "%1B",
      "\u001c": "%1C",
      "\u001d": "%1D",
      "\u001e": "%1E",
      "\u001f": "%1F",
      " ": "%20",
      '"': "%22",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "<": "%3C",
      ">": "%3E",
      "\\": "%5C",
      "{": "%7B",
      "}": "%7D",
      "\u007f": "%7F",
      "\u0085": "%C2%85",
      "\u00a0": "%C2%A0",
      "\u2028": "%E2%80%A8",
      "\u2029": "%E2%80%A9",
      "\uff01": "%EF%BC%81",
      "\uff03": "%EF%BC%83",
      "\uff04": "%EF%BC%84",
      "\uff06": "%EF%BC%86",
      "\uff07": "%EF%BC%87",
      "\uff08": "%EF%BC%88",
      "\uff09": "%EF%BC%89",
      "\uff0a": "%EF%BC%8A",
      "\uff0b": "%EF%BC%8B",
      "\uff0c": "%EF%BC%8C",
      "\uff0f": "%EF%BC%8F",
      "\uff1a": "%EF%BC%9A",
      "\uff1b": "%EF%BC%9B",
      "\uff1d": "%EF%BC%9D",
      "\uff1f": "%EF%BC%9F",
      "\uff20": "%EF%BC%A0",
      "\uff3b": "%EF%BC%BB",
      "\uff3d": "%EF%BC%BD"
    },
    ze = function(a) {
      return Ge[a]
    },
    ue = /[\x00\x22\x27\x3c\x3e]/g,
    He = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,
    ye = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
    xe = /^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,
    Be = /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i,
    we = function(a) {
      return String(a).replace(ye, ze)
    },
    se = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
    te = /</g;
  var Ie = function() {
    return pe("Please login again to perform this operation")
  };
  var Je = /^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;
  var Ke = function() {
      return this.getElementByClass("firebaseui-id-email")
    },
    Oe = function() {
      return this.getElementByClass("firebaseui-id-email-error")
    },
    Pe = function(a) {
      var b = Ke.call(this),
        c = Oe.call(this);
      Pd(this, b, function() {
        Wd(c) && (H(b, !0), Ud(c))
      });
      a && Qd(this, b, function() {
        a()
      })
    },
    Qe = function() {
      return pa(C(Ke.call(this)) || "")
    },
    Re = function() {
      var a = Ke.call(this),
        b;
      b = Oe.call(this);
      var c = C(a) || "";
      c ? Je.test(c) ? (H(a, !0), Ud(b), b = !0) : (H(a, !1), Vd(b, pe("That email address isn't correct").toString()), b = !1) : (H(a, !1),
        Vd(b, pe("Enter your email address to continue").toString()), b = !1);
      return b ? pa(v(C(a))) : null
    };
  var N = function() {
      return this.getElementByClass("firebaseui-id-submit")
    },
    Se = function() {
      return this.getElementByClass("firebaseui-id-secondary-link")
    },
    O = function(a, b) {
      var c = N.call(this);
      Td(this, c, function() {
        a()
      });
      (c = Se.call(this)) && b && Td(this, c, function() {
        b()
      })
    };
  var Te = !z,
    Ue = function(a) {
      return Te && a.dataset ? "providerId" in a.dataset ? a.dataset.providerId : null : a.getAttribute("data-" + "providerId".replace(/([A-Z])/g, "-$1").toLowerCase())
    };
  var Ve = function(a) {
      a = a || {};
      M(null == a.email || a.email instanceof I || m(a.email), "email", a.email, "null|string|undefined");
      var b = a.email;
      M(null == a.disabled || n(a.disabled) || 1 === a.disabled || 0 === a.disabled, "disabled", a.disabled, "boolean|null|undefined");
      var c = a.disabled;
      M(null == a.changeEmail || n(a.changeEmail) || 1 === a.changeEmail || 0 === a.changeEmail, "changeEmail", a.changeEmail, "boolean|null|undefined");
      var d = '<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="email">',
        d = a.changeEmail ? d + "Enter new email address" : d + "Email",
        d = d + ('</label><input type="email" name="email" autocomplete="username" class="mdl-textfield__input firebaseui-input firebaseui-id-email" value="' + L(null == b ? "" : b) + '"' + (c ? "disabled" : "") + '></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-hidden firebaseui-id-email-error"></p></div>');
      return J(d)
    },
    P = function(a) {
      a = a || {};
      M(null == a.label || a.label instanceof I || m(a.label), "label", a.label, "null|string|undefined");
      a = a.label;
      var b = '<button type="submit" class="firebaseui-id-submit firebaseui-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored">',
        b = a ? b + K(a) : b + "Next";
      return J(b + "</button>")
    },
    We = function() {
      var a;
      a = "" + P({
        label: re("Sign In")
      });
      return J(a)
    },
    Xe = function() {
      var a;
      a = "" + P({
        label: re("Save")
      });
      return J(a)
    },
    Ye = function(a) {
      a = a || {};
      M(null == a.label || a.label instanceof I || m(a.label), "label", a.label, "null|string|undefined");
      a = a.label;
      var b = '<div class="firebaseui-new-password-component"><div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="newPassword">',
        b = a ? b + K(a) : b + "Choose password";
      return J(b + '</label><input type="password" name="newPassword" autocomplete="new-password" class="mdl-textfield__input firebaseui-input firebaseui-id-new-password"></div><a href="javascript:void(0)" class="firebaseui-input-floating-button firebaseui-id-password-toggle firebaseui-input-toggle-on firebaseui-input-toggle-blur"></a><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-hidden firebaseui-id-new-password-error"></p></div></div>')
    },
    Ze = function() {
      var a;
      a = {};
      M(null == a.current || n(a.current) || 1 === a.current || 0 === a.current, "current", a.current, "boolean|null|undefined");
      var b = '<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="password">',
        b = a.current ? b + "Current password" : b + "Password";
      return J(b + '</label><input type="password" name="password" autocomplete="current-password" class="mdl-textfield__input firebaseui-input firebaseui-id-password"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-hidden firebaseui-id-password-error"></p></div>')
    },
    $e = function() {
      return J('<a class="firebaseui-link firebaseui-id-secondary-link" href="javascript:void(0)">Trouble signing in?</a>')
    },
    af = function() {
      return J('<button class="firebaseui-id-secondary-link firebaseui-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Cancel</button>')
    },
    bf = function(a) {
      M(m(a.message) || a.message instanceof I, "message", a.message, "string|goog.soy.data.SanitizedContent");
      a = "" + ('<div class="firebaseui-info-bar firebaseui-id-info-bar"><p class="firebaseui-info-bar-message">' +
        K(a.message) + '&nbsp;&nbsp;<a href="javascript:void(0)" class="firebaseui-link firebaseui-id-dismiss-info-bar">Dismiss</a></p></div>');
      return J(a)
    };
  bf.soyTemplateName = "firebaseui.auth.soy2.element.infoBar";
  var cf = function() {
    return J('<div class="mdl-progress mdl-js-progress mdl-progress__indeterminate firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>')
  };
  cf.soyTemplateName = "firebaseui.auth.soy2.element.busyIndicator";
  var df = function(a) {
      var b;
      a = a || {};
      M(null == a.providerId || a.providerId instanceof I || m(a.providerId), "providerId", a.providerId, "null|string|undefined");
      var c = "";
      switch (ha(b = a.providerId) ? b.toString() : b) {
        case "google.com":
          c += "Google";
          break;
        case "github.com":
          c += "Github";
          break;
        case "facebook.com":
          c += "Facebook";
          break;
        case "twitter.com":
          c += "Twitter";
          break;
        default:
          c += "Password"
      }
      return pe(c)
    },
    ef = function(a) {
      var b;
      a = a || {};
      M(null == a.providerId || a.providerId instanceof I || m(a.providerId), "providerId", a.providerId,
        "null|string|undefined");
      var c = "";
      switch (ha(b = a.providerId) ? b.toString() : b) {
        case "google.com":
          c += "firebaseui-idp-google";
          break;
        case "github.com":
          c += "firebaseui-idp-github";
          break;
        case "facebook.com":
          c += "firebaseui-idp-facebook";
          break;
        case "twitter.com":
          c += "firebaseui-idp-twitter";
          break;
        default:
          c += "firebaseui-idp-password"
      }
      return pe(c)
    },
    ff = function(a, b) {
      var c;
      a = a || {};
      M(null == a.providerId || a.providerId instanceof I || m(a.providerId), "providerId", a.providerId, "null|string|undefined");
      var d = "";
      switch (ha(c =
        a.providerId) ? c.toString() : c) {
        case "google.com":
          d += Ae(b.googleLogo);
          break;
        case "github.com":
          d += Ae(b.githubLogo);
          break;
        case "facebook.com":
          d += Ae(b.facebookLogo);
          break;
        case "twitter.com":
          d += Ae(b.twitterLogo);
          break;
        default:
          d += Ae(b.passwordLogo)
      }
      return qe(d)
    };
  var hf = function() {
      Sb(gf.call(this))
    },
    gf = function() {
      return this.getElementByClass("firebaseui-id-info-bar")
    },
    jf = function() {
      return this.getElementByClass("firebaseui-id-dismiss-info-bar")
    };
  var kf = function() {
      return this.getElementByClass("firebaseui-id-name")
    },
    lf = function() {
      return this.getElementByClass("firebaseui-id-name-error")
    };
  var mf = function() {
      return this.getElementByClass("firebaseui-id-new-password")
    },
    nf = function() {
      return this.getElementByClass("firebaseui-id-password-toggle")
    },
    of = function() {
      this.isPasswordVisible_ = !this.isPasswordVisible_;
      var a = nf.call(this),
        b = mf.call(this);
      this.isPasswordVisible_ ? (b.type = "text", Wa(a, "firebaseui-input-toggle-off"), Xa(a, "firebaseui-input-toggle-on")) : (b.type = "password", Wa(a, "firebaseui-input-toggle-on"), Xa(a, "firebaseui-input-toggle-off"));
      b.focus()
    },
    pf = function() {
      return this.getElementByClass("firebaseui-id-new-password-error")
    },
    qf = function() {
      this.isPasswordVisible_ = !1;
      var a = mf.call(this);
      a.type = "password";
      var b = pf.call(this);
      Pd(this, a, function() {
        Wd(b) && (H(a, !0), Ud(b))
      });
      var c = nf.call(this);
      Wa(c, "firebaseui-input-toggle-on");
      Xa(c, "firebaseui-input-toggle-off");
      Rd(this, a, function() {
        Wa(c, "firebaseui-input-toggle-focus");
        Xa(c, "firebaseui-input-toggle-blur")
      });
      Sd(this, a, function() {
        Wa(c, "firebaseui-input-toggle-blur");
        Xa(c, "firebaseui-input-toggle-focus")
      });
      Td(this, c, q(of, this))
    },
    rf = function() {
      var a = mf.call(this),
        b;
      b = pf.call(this);
      C(a) ? (H(a, !0), Ud(b), b = !0) : (H(a, !1), Vd(b, pe("Enter your password").toString()), b = !1);
      return b ? C(a) : null
    };
  var sf = function() {
      return this.getElementByClass("firebaseui-id-password")
    },
    tf = function() {
      return this.getElementByClass("firebaseui-id-password-error")
    },
    uf = function() {
      var a = sf.call(this),
        b = tf.call(this);
      Pd(this, a, function() {
        Wd(b) && (H(a, !0), Ud(b))
      })
    },
    vf = function() {
      var a = sf.call(this),
        b;
      b = tf.call(this);
      C(a) ? (H(a, !0), Ud(b), b = !0) : (H(a, !1), Vd(b, pe("Enter your password").toString()), b = !1);
      return b ? C(a) : null
    };
  var wf = function(a, b, c) {
    a = a || {};
    c = c || {};
    M(null == a.email || a.email instanceof I || m(a.email), "email", a.email, "null|string|undefined");
    a = "" + ('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-in"><form onsubmit="' + (c.csp_nonce ? "/*" + c.csp_nonce + "*/" : "") + 'return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in with email</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">' + K(Ve(a)) + '</div></div><div class="firebaseui-card-footer"><div class="firebaseui-form-actions">' +
      K(P(null)) + "</div></div></form></div>");
    return J(a)
  };
  wf.soyTemplateName = "firebaseui.auth.soy2.page.signIn";
  var xf = function(a, b, c) {
    a = a || {};
    c = c || {};
    M(null == a.email || a.email instanceof I || m(a.email), "email", a.email, "null|string|undefined");
    a = "" + ('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-in"><form onsubmit="' + (c.csp_nonce ? "/*" + c.csp_nonce + "*/" : "") + 'return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content">' + K(Ve(a)) + K(Ze()) + '</div><div class="firebaseui-card-footer"><div class="firebaseui-form-actions">' +
      K(We()) + "</div>" + K($e()) + "</div></form></div>");
    return J(a)
  };
  xf.soyTemplateName = "firebaseui.auth.soy2.page.passwordSignIn";
  var yf = function(a, b, c) {
    a = a || {};
    c = c || {};
    M(null == a.email || a.email instanceof I || m(a.email), "email", a.email, "null|string|undefined");
    M(null == a.name || a.name instanceof I || m(a.name), "name", a.name, "null|string|undefined");
    M(null == a.tosUrl || a.tosUrl instanceof I || m(a.tosUrl), "tosUrl", a.tosUrl, "null|string|undefined");
    var d = a.tosUrl;
    M(null == a.allowCancel || n(a.allowCancel) || 1 === a.allowCancel || 0 === a.allowCancel, "allowCancel", a.allowCancel, "boolean|null|undefined");
    b = a.allowCancel;
    c = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-up"><form onsubmit="' +
      (c.csp_nonce ? "/*" + c.csp_nonce + "*/" : "") + 'return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Create account</h1></div><div class="firebaseui-card-content">' + K(Ve(a));
    var e, f;
    f = a || {};
    M(null == f.name || f.name instanceof I || m(f.name), "name", f.name, "null|string|undefined");
    f = "" + ('<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="name">First &amp; last name</label><input type="text" name="name" autocomplete="name" class="mdl-textfield__input firebaseui-input firebaseui-id-name" value="' +
      L(null == (e = f.name) ? "" : e) + '"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-hidden firebaseui-id-name-error"></p></div>');
    e = J(f);
    e = c + K(e) + K(Ye({
      choose: !0
    }));
    d ? (M(m(a.tosUrl) || a.tosUrl instanceof I, "tosUrl", a.tosUrl, "string|goog.soy.data.SanitizedContent"), a = "By tapping SAVE, you are indicating that you agree to the " + ('<a href="' + L(Ae(a.tosUrl)) + '" class="firebaseui-link" target="_blank">Terms of Service</a>'), a = J("" + ('<p class="firebaseui-tos">' + a + "</p>")), a = K(a)) :
      a = "";
    b = "" + (e + a + '</div><div class="firebaseui-card-footer"><div class="firebaseui-form-actions">' + (b ? K(af()) : "") + K(Xe()) + "</div></div></form></div>");
    return J(b)
  };
  yf.soyTemplateName = "firebaseui.auth.soy2.page.passwordSignUp";
  var zf = function(a, b, c) {
    a = a || {};
    c = c || {};
    M(null == a.email || a.email instanceof I || m(a.email), "email", a.email, "null|string|undefined");
    M(null == a.allowCancel || n(a.allowCancel) || 1 === a.allowCancel || 0 === a.allowCancel, "allowCancel", a.allowCancel, "boolean|null|undefined");
    b = a.allowCancel;
    a = "" + ('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery"><form onsubmit="' + (c.csp_nonce ? "/*" + c.csp_nonce + "*/" : "") + 'return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Recover password</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Get instructions sent to this email that explain how to reset your password</p>' +
      K(Ve(a)) + '</div><div class="firebaseui-card-footer"><div class="firebaseui-form-actions">' + (b ? K(af()) : "") + K(P({
        label: re("Send")
      })) + "</div></div></form></div>");
    return J(a)
  };
  zf.soyTemplateName = "firebaseui.auth.soy2.page.passwordRecovery";
  var Af = function(a) {
    M(m(a.email) || a.email instanceof I, "email", a.email, "string|goog.soy.data.SanitizedContent");
    var b = a.email;
    M(null == a.allowContinue || n(a.allowContinue) || 1 === a.allowContinue || 0 === a.allowContinue, "allowContinue", a.allowContinue, "boolean|null|undefined");
    a = a.allowContinue;
    var c = "",
      b = "Follow the instructions sent to <strong>" + (K(b) + "</strong> to recover your password"),
      c = c + ('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery-email-sent"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Check your email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">' +
        b + '</p></div><div class="firebaseui-card-footer">');
    a && (c += '<div class="firebaseui-form-actions">' + K(P({
      label: re("Done")
    })) + "</div>");
    return J(c + "</div></div>")
  };
  Af.soyTemplateName = "firebaseui.auth.soy2.page.passwordRecoveryEmailSent";
  var Bf = function() {
    return J('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-callback"><div class="firebaseui-callback-indicator-container">' + K(cf()) + "</div></div>")
  };
  Bf.soyTemplateName = "firebaseui.auth.soy2.page.callback";
  var Cf = function(a, b, c) {
    c = c || {};
    M(m(a.email) || a.email instanceof I, "email", a.email, "string|goog.soy.data.SanitizedContent");
    b = "";
    a = "You\u2019ve already used <strong>" + (K(a.email) + "</strong> to sign in. Enter your password for that account.");
    b += '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-linking"><form onsubmit="' + (c.csp_nonce ? "/*" + c.csp_nonce + "*/" : "") + 'return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">' +
      a + "</p>" + K(Ze()) + '</div><div class="firebaseui-card-footer">' + K($e()) + '<div class="firebaseui-form-actions">' + K(We()) + "</div></div></form></div>";
    return J(b)
  };
  Cf.soyTemplateName = "firebaseui.auth.soy2.page.passwordLinking";
  var Df = function(a, b, c) {
    c = c || {};
    M(m(a.email) || a.email instanceof I, "email", a.email, "string|goog.soy.data.SanitizedContent");
    var d = a.email;
    M(m(a.providerId) || a.providerId instanceof I, "providerId", a.providerId, "string|goog.soy.data.SanitizedContent");
    b = "";
    var e = "" + df(a),
      e = re(e);
    a = "Sign in with " + e;
    d = "You\u2019ve already used <strong>" + (K(d) + ("</strong>. Sign in with " + (K(e) + " to continue.")));
    b += '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-federated-linking"><form onsubmit="' +
      (c.csp_nonce ? "/*" + c.csp_nonce + "*/" : "") + 'return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">' + d + '</p></div><div class="firebaseui-card-footer"><div class="firebaseui-form-actions">' + K(P({
        label: re("" + a)
      })) + "</div></div></form></div>";
    return J(b)
  };
  Df.soyTemplateName = "firebaseui.auth.soy2.page.federatedLinking";
  var Ef = function(a, b, c) {
    c = c || {};
    M(m(a.email) || a.email instanceof I, "email", a.email, "string|goog.soy.data.SanitizedContent");
    b = "";
    var d = '<p class="firebaseui-text">for <strong>' + (K(a.email) + "</strong></p>");
    c = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset"><form onsubmit="' + (c.csp_nonce ? "/*" + c.csp_nonce + "*/" : "") + 'return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Reset your password</h1></div><div class="firebaseui-card-content">' +
      d;
    var d = {
        label: re("New password")
      },
      e;
    for (e in a) e in d || (d[e] = a[e]);
    b += c + K(Ye(d)) + '</div><div class="firebaseui-card-footer"><div class="firebaseui-form-actions">' + K(Xe()) + "</div></div></form></div>";
    return J(b)
  };
  Ef.soyTemplateName = "firebaseui.auth.soy2.page.passwordReset";
  var Ff = function(a) {
    a = a || {};
    M(null == a.allowContinue || n(a.allowContinue) || 1 === a.allowContinue || 0 === a.allowContinue, "allowContinue", a.allowContinue, "boolean|null|undefined");
    a = "" + ('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Password changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new password</p></div><div class="firebaseui-card-footer">' + (a.allowContinue ?
      '<div class="firebaseui-form-actions">' + K(P(null)) + "</div>" : "") + "</div></div>");
    return J(a)
  };
  Ff.soyTemplateName = "firebaseui.auth.soy2.page.passwordResetSuccess";
  var Gf = function(a) {
    a = a || {};
    M(null == a.allowContinue || n(a.allowContinue) || 1 === a.allowContinue || 0 === a.allowContinue, "allowContinue", a.allowContinue, "boolean|null|undefined");
    a = "" + ('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try resetting your password again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to reset your password has expired or the link has already been used</p></div><div class="firebaseui-card-footer">' + (a.allowContinue ?
      '<div class="firebaseui-form-actions">' + K(P(null)) + "</div>" : "") + "</div></div>");
    return J(a)
  };
  Gf.soyTemplateName = "firebaseui.auth.soy2.page.passwordResetFailure";
  var Hf = function(a, b, c) {
    c = c || {};
    M(m(a.email) || a.email instanceof I, "email", a.email, "string|goog.soy.data.SanitizedContent");
    b = a.email;
    M(null == a.allowContinue || n(a.allowContinue) || 1 === a.allowContinue || 0 === a.allowContinue, "allowContinue", a.allowContinue, "boolean|null|undefined");
    a = a.allowContinue;
    var d = "";
    b = "Your sign-in email address has been changed back to <strong>" + (K(b) + "</strong>.");
    d += '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-success"><form onsubmit="' +
      (c.csp_nonce ? "/*" + c.csp_nonce + "*/" : "") + 'return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Updated email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">' + b + '</p><p class="firebaseui-text">If you didn\u2019t ask to change your sign-in email, it\u2019s possible someone is trying to access your account and you should <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">change your password right away</a>.</p></div><div class="firebaseui-card-footer">' +
      (a ? '<div class="firebaseui-form-actions">' + K(P(null)) + "</div>" : "") + "</div></form></div>";
    return J(d)
  };
  Hf.soyTemplateName = "firebaseui.auth.soy2.page.emailChangeRevokeSuccess";
  var If = function(a) {
    a = a || {};
    M(null == a.allowContinue || n(a.allowContinue) || 1 === a.allowContinue || 0 === a.allowContinue, "allowContinue", a.allowContinue, "boolean|null|undefined");
    a = "" + ('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Unable to update your email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">There was a problem changing your sign-in email back.</p><p class="firebaseui-text">If you try again and still can\u2019t reset your email, try asking your administrator for help.</p></div><div class="firebaseui-card-footer">' + (a.allowContinue ?
      '<div class="firebaseui-form-actions">' + K(P(null)) + "</div>" : "") + "</div></div>");
    return J(a)
  };
  If.soyTemplateName = "firebaseui.auth.soy2.page.emailChangeRevokeFailure";
  var Jf = function(a) {
    a = a || {};
    M(null == a.allowContinue || n(a.allowContinue) || 1 === a.allowContinue || 0 === a.allowContinue, "allowContinue", a.allowContinue, "boolean|null|undefined");
    a = "" + ('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new account</p></div><div class="firebaseui-card-footer">' + (a.allowContinue ?
      '<div class="firebaseui-form-actions">' + K(P(null)) + "</div>" : "") + "</div></div>");
    return J(a)
  };
  Jf.soyTemplateName = "firebaseui.auth.soy2.page.emailVerificationSuccess";
  var Kf = function(a) {
    a = a || {};
    M(null == a.allowContinue || n(a.allowContinue) || 1 === a.allowContinue || 0 === a.allowContinue, "allowContinue", a.allowContinue, "boolean|null|undefined");
    a = "" + ('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try verifying your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify your email has expired or the link has already been used</p></div><div class="firebaseui-card-footer">' + (a.allowContinue ?
      '<div class="firebaseui-form-actions">' + K(P(null)) + "</div>" : "") + "</div></div>");
    return J(a)
  };
  Kf.soyTemplateName = "firebaseui.auth.soy2.page.emailVerificationFailure";
  var Lf = function(a) {
    a = a || {};
    M(null == a.email || a.email instanceof I || m(a.email), "email", a.email, "null|string|undefined");
    a = a.email;
    var b;
    b = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-info"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';
    b = a ? b + ("Your current email address on file is:<br><strong>" + K(a) + "</strong>") : b + "You don't have any email address associated with your account.";
    return J(b + '</p><p class="firebaseui-text"><a href="javascript:void(0)" class="firebaseui-link firebaseui-edit-action firebaseui-id-change-email">Update email address</a></p></div></div>')
  };
  Lf.soyTemplateName = "firebaseui.auth.soy2.page.emailInfo";
  var Mf = function(a, b, c) {
    a = a || {};
    c = c || {};
    M(null == a.email || a.email instanceof I || m(a.email), "email", a.email, "null|string|undefined");
    a = a.email;
    c = "" + ('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change"><form onsubmit="' + (c.csp_nonce ? "/*" + c.csp_nonce + "*/" : "") + 'return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Update email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">');
    c = a ? c + ("Your current email address on file is:<br><strong>" +
      K(a) + "</strong>") : c + "You don't have any email address for your account.";
    c += "</p>" + K(Ve({
      changeEmail: !0
    })) + '</div><div class="firebaseui-card-footer"><div class="firebaseui-form-actions">' + K(af()) + K(P(null)) + "</div></div></form></div>";
    return J(c)
  };
  Mf.soyTemplateName = "firebaseui.auth.soy2.page.emailChange";
  var Nf = function() {
    return J('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-info"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Password</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text"><a href="javascript:void(0)" class="firebaseui-link firebaseui-edit-action firebaseui-id-change-password">Change password</a></p></div></div>')
  };
  Nf.soyTemplateName = "firebaseui.auth.soy2.page.passwordInfo";
  var Of = function(a, b, c) {
    c = c || {};
    a = "" + ('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-change"><form onsubmit="' + (c.csp_nonce ? "/*" + c.csp_nonce + "*/" : "") + 'return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Change password</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Set a new password for your account. We highly recommend you create a unique password, one that you don\'t use on any other website.</p>' + K(Ye(null)) +
      '</div><div class="firebaseui-card-footer"><div class="firebaseui-form-actions">' + K(af()) + K(P(null)) + "</div></div></form></div>");
    return J(a)
  };
  Of.soyTemplateName = "firebaseui.auth.soy2.page.passwordChange";
  var Pf = function() {
    var a;
    a = "" + ('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-change-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Password Updated</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You have successfully changed your password.</p></div><div class="firebaseui-card-footer"><div class="firebaseui-form-actions">' + K(P(null)) + "</div></div></div>");
    return J(a)
  };
  Pf.soyTemplateName = "firebaseui.auth.soy2.page.passwordChangeSuccess";
  var Qf = function(a) {
    M(m(a.errorMessage) || a.errorMessage instanceof I, "errorMessage", a.errorMessage, "string|goog.soy.data.SanitizedContent");
    a = "" + ('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unrecoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">' + K(a.errorMessage) + "</p></div></div>");
    return J(a)
  };
  Qf.soyTemplateName = "firebaseui.auth.soy2.page.unrecoverableError";
  var Rf = function(a, b, c) {
    b = Ga(a.accounts, "expected parameter 'accounts' of type list<[displayName: null|string, email: null|string, photoURL: null|string, providerId: null|string]>.");
    var d = Ga(a.providerIds, "expected parameter 'providerIds' of type list<string>.");
    M(null == a.siteName || a.siteName instanceof I || m(a.siteName), "siteName", a.siteName, "null|string|undefined");
    a = a.siteName;
    var e;
    e = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-linked-accounts"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Linked accounts</h1></div><div class="firebaseui-card-content">';
    if (0 < b.length) {
      e += '<p class="firebaseui-text">';
      a ? (a = "Below are one or more ways you sign in to " + (K(a) + "."), e += a) : e += "Below are one or more ways you sign in to this site.";
      e += '</p><ul class="firebaseui-account-chip-list">';
      a = b.length;
      for (var f = 0; f < a; f++) {
        var g = b[f],
          k, w = {
            account: g,
            providerId: d[f]
          },
          V = c;
        k = void 0;
        var V = V || {},
          D = Fa(w.account, "expected parameter 'account' of type [displayName: null|string, email: null|string, photoURL: null|string, providerId: null|string].");
        M(null == w.providerId || w.providerId instanceof I || m(w.providerId), "providerId", w.providerId, "null|string|undefined");
        w = '<div class="firebaseui-account-chip firebaseui-id-account-chip"' + (D.email ? 'data-email="' + L(D.email) + '"' : "") + (D.displayName ? 'data-display-name="' + L(D.displayName) + '"' : "") + (D.providerId ? 'data-provider-id="' + L(D.providerId) + '"' : "") + '><img class="firebaseui-account-chip-photo" src="' + L(Ce(null == (k = D.photoURL) ? V.defaultPhotoUrl : k)) + '" onerror="' + (V.csp_nonce ? "/*" + V.csp_nonce + "*/" : "") + "this.src='" + L(String(V.defaultPhotoUrl).replace(He,
          Fe)) + "'; this.onerror=undefined;\">" + (D.displayName ? '<span class="firebaseui-account-chip-name">' + K(D.displayName) + "</span>" : "") + '<span class="' + (D.displayName ? "firebaseui-account-chip-email" : "firebaseui-account-chip-email-only") + '"><img class="firebaseui-idp-favicon ' + L(ef(w)) + '" src="' + L(Ce(ff(w, V))) + '" title="' + L(df(w)) + '"><span class="firebaseui-account-chip-email-label">';
        w = D.email ? w + K(D.email) : w + "No email.";
        k = J(w + "</span></span></div>");
        k = '<li class="firebaseui-list-item">' + K(k) + '<a href="javascript:void(0)" class="firebaseui-remove-action firebaseui-id-remove-idp" title="';
        D = "Remove".replace(ue, ve);
        e += k + D + '" data-provider-id="' + L(g.providerId) + '"></a></li>'
      }
      e += "</ul>"
    } else e += '<p class="firebaseui-text">', a ? (c = "You have not signed in to " + (K(a) + " with any other ways."), e += c) : e += "You have not signed in to this site with any other ways.", e += "</p>";
    return J(e + "</div></div>")
  };
  Rf.soyTemplateName = "firebaseui.auth.soy2.page.linkedAccounts";
  var Sf = function(a) {
    a = a || {};
    M(null == a.showTitle || n(a.showTitle) || 1 === a.showTitle || 0 === a.showTitle, "showTitle", a.showTitle, "boolean|null|undefined");
    var b = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-account-manage">';
    a.showTitle && (b += '<div class="firebaseui-card-header"><h1 class="firebaseui-title">Manage account</h1></div>');
    return J(b + '<div class="firebaseui-card-content"><ul class="firebaseui-manage-account-list"><li class="firebaseui-list-item firebaseui-id-email-info-container"></li><li class="firebaseui-list-item firebaseui-id-password-info-container"></li><li class="firebaseui-list-item firebaseui-id-linked-accounts-container"></li></ul></div></div>')
  };
  Sf.soyTemplateName = "firebaseui.auth.soy2.page.accountManage";
  var Tf = function(a, b, c) {
    c = c || {};
    M(m(a.userEmail) || a.userEmail instanceof I, "userEmail", a.userEmail, "string|goog.soy.data.SanitizedContent");
    var d = a.userEmail;
    M(m(a.pendingEmail) || a.pendingEmail instanceof I, "pendingEmail", a.pendingEmail, "string|goog.soy.data.SanitizedContent");
    b = "";
    a = "You originally wanted to sign in with " + K(a.pendingEmail);
    d = "Continue with " + (K(d) + "?");
    b += '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-mismatch"><form onsubmit="' + (c.csp_nonce ?
      "/*" + c.csp_nonce + "*/" : "") + 'return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">' + d + '</h2><p class="firebaseui-text">' + a + '</p></div><div class="firebaseui-card-footer"><div class="firebaseui-form-actions">' + K(af()) + K(P({
      label: re("Continue")
    })) + "</div></div></form></div>";
    return J(b)
  };
  Tf.soyTemplateName = "firebaseui.auth.soy2.page.emailMismatch";
  var Uf = function(a, b, c) {
    c = c || {};
    M(m(a.email) || a.email instanceof I, "email", a.email, "string|goog.soy.data.SanitizedContent");
    a = "" + ('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-verify"><form onsubmit="' + (c.csp_nonce ? "/*" + c.csp_nonce + "*/" : "") + 'return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Verify account password</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Please verify the account password to complete the requested account email change.</p>' +
      K(Ve({
        email: a.email,
        disabled: !0,
        changeEmail: !1
      })) + K(Ze()) + '</div><div class="firebaseui-card-footer"><div class="firebaseui-form-actions">' + K(P(null)) + "</div></div></form></div>");
    return J(a)
  };
  Uf.soyTemplateName = "firebaseui.auth.soy2.page.emailChangeVerify";
  var Vf = function(a, b, c) {
    c = c || {};
    a = Ga(a.providerIds, "expected parameter 'providerIds' of type list<string>.");
    var d = '<div class="firebaseui-container firebaseui-page-provider-sign-in firebaseui-id-page-provider-sign-in"><div class="firebaseui-card-content"><form onsubmit="' + (c.csp_nonce ? "/*" + c.csp_nonce + "*/" : "") + 'return false;"><ul class="firebaseui-idp-list">';
    b = a.length;
    for (var e = 0; e < b; e++) {
      var f;
      f = {
        providerId: a[e]
      };
      var g = c;
      M(m(f.providerId) || f.providerId instanceof I, "providerId", f.providerId, "string|goog.soy.data.SanitizedContent");
      var k = f.providerId,
        g = '<button class="firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised ' + L(ef(f)) + ' firebaseui-id-idp-button " data-provider-id="' + L(k) + '"><img class="firebaseui-idp-icon" src="' + L(Ce(ff(f, g))) + '">';
      "password" == k ? g += '<span class="firebaseui-idp-text firebaseui-idp-text-long">Sign in with email</span><span class="firebaseui-idp-text firebaseui-idp-text-short">Email</span>' : (k = "Sign in with " + K(df(f)), g += '<span class="firebaseui-idp-text firebaseui-idp-text-long">' + k +
        '</span><span class="firebaseui-idp-text firebaseui-idp-text-short">' + K(df(f)) + "</span>");
      f = J(g + "</button>");
      d += '<li class="firebaseui-list-item">' + K(f) + "</li>"
    }
    return J(d + "</ul></form></div></div>")
  };
  Vf.soyTemplateName = "firebaseui.auth.soy2.page.providerSignIn";
  var Wf = {},
    Xf = 0,
    Zf = function(a, b) {
      if (!a) throw Error("Event target element must be provided!");
      var c = Yf(a);
      if (Wf[c] && Wf[c].length)
        for (var d = 0; d < Wf[c].length; d++) Wf[c][d].dispatchEvent(b)
    },
    Yf = function(a) {
      "undefined" === typeof a.dispatchId_ && (a.dispatchId_ = Xf, Xf++);
      return a.dispatchId_
    },
    $f = function(a) {
      if (!a) throw Error("Event target element must be provided!");
      this.el_ = a;
      F.call(this)
    };
  t($f, F);
  $f.prototype.getElement = function() {
    return this.el_
  };
  $f.prototype.register = function() {
    var a = Yf(this.getElement());
    Wf[a] ? Na(Wf[a], this) || Wf[a].push(this) : Wf[a] = [this]
  };
  var ag = {
      defaultPhotoUrl: "https://www.gstatic.com/firebasejs/staging/3.0.0/auth/images/profile-picture-small.png",
      googleLogo: "https://www.gstatic.com/firebasejs/staging/3.0.0/auth/images/google.svg",
      githubLogo: "https://www.gstatic.com/firebasejs/staging/3.0.0/auth/images/github.svg",
      facebookLogo: "https://www.gstatic.com/firebasejs/staging/3.0.0/auth/images/facebook.svg",
      twitterLogo: "https://www.gstatic.com/firebasejs/staging/3.0.0/auth/images/twitter.svg",
      passwordLogo: "https://www.gstatic.com/firebasejs/staging/3.0.0/auth/images/mail.svg",
      imageBase: "https://www.gstatic.com/firebasejs/staging/3.0.0/auth/images/"
    },
    bg = function(a, b, c) {
      gc.call(this, a, b);
      for (var d in c) this[d] = c[d]
    };
  t(bg, gc);
  var Q = function(a, b, c, d) {
    G.call(this, c);
    this.template_ = a;
    this.templateData_ = b;
    this.inProcessing_ = !1;
    this.pageId_ = d || null;
    this.busyIndicator_ = this.showProcessingTimeout_ = null
  };
  t(Q, G);
  Q.prototype.createDom = function() {
    var a = fe(this.template_, this.templateData_, ag, this.getDomHelper());
    cg(a, "upgradeElement");
    this.element_ = a
  };
  var dg = ["mdl-js-textfield", "mdl-js-progress", "mdl-js-button"],
    cg = function(a, b) {
      a && window.componentHandler && window.componentHandler[b] && Ia(dg, function(c) {
        if (Va(a, c)) window.componentHandler[b](a);
        c = Nb(c, a);
        Ia(c, function(a) {
          window.componentHandler[b](a)
        })
      })
    };
  Q.prototype.enterDocument = function() {
    Q.superClass_.enterDocument.call(this);
    Zf(eg(this), new bg("pageEnter", eg(this), {
      pageId: this.pageId_
    }))
  };
  Q.prototype.exitDocument = function() {
    Zf(eg(this), new bg("pageExit", eg(this), {
      pageId: this.pageId_
    }));
    Q.superClass_.exitDocument.call(this)
  };
  Q.prototype.disposeInternal = function() {
    window.clearTimeout(this.showProcessingTimeout_);
    this.templateData_ = this.template_ = this.showProcessingTimeout_ = null;
    this.inProcessing_ = !1;
    this.busyIndicator_ = null;
    cg(this.getElement(), "downgradeElements");
    Q.superClass_.disposeInternal.call(this)
  };
  var fg = function(a) {
      a.inProcessing_ = !0;
      a.showProcessingTimeout_ = window.setTimeout(function() {
        a.getElement() && null === a.busyIndicator_ && (a.busyIndicator_ = fe(cf, null, null, a.getDomHelper()), a.getElement().appendChild(a.busyIndicator_), cg(a.busyIndicator_, "upgradeElement"))
      }, 500)
    },
    gg = function(a, b, c, d, e) {
      if (!a.inProcessing_) {
        fg(a);
        var f = function() {
          a.isDisposed() || (a.inProcessing_ = !1, window.clearTimeout(a.showProcessingTimeout_), a.showProcessingTimeout_ = null, a.busyIndicator_ && (cg(a.busyIndicator_, "downgradeElements"),
            Sb(a.busyIndicator_), a.busyIndicator_ = null))
        };
        b.apply(null, c).then(d, e).then(f, f)
      }
    },
    eg = function(a) {
      return a.getElement().parentElement || a.getElement().parentNode
    },
    hg = function(a, b, c) {
      Qd(a, b, function() {
        c.focus()
      })
    },
    ig = function(a, b, c) {
      Qd(a, b, function() {
        c()
      })
    };
  r(Q.prototype, {
    showInfoBar: function(a) {
      hf.call(this);
      var b = fe(bf, {
        message: a
      }, null, this.getDomHelper());
      this.getElement().appendChild(b);
      Td(this, jf.call(this), function() {
        Sb(b)
      })
    },
    dismissInfoBar: hf,
    getInfoBarElement: gf,
    getInfoBarDismissLinkElement: jf
  });
  var jg = function(a, b, c) {
    Q.call(this, Lf, {
      email: a,
      allowChange: !!b
    }, c, "emailInfo");
    this.onUpdateClick_ = b
  };
  t(jg, Q);
  jg.prototype.enterDocument = function() {
    var a = this.getUpdateLinkElement();
    if (a) {
      var b = this;
      Td(this, a, function() {
        b.onUpdateClick_()
      })
    }
    jg.superClass_.enterDocument.call(this)
  };
  jg.prototype.disposeInternal = function() {
    this.onUpdateClick_ = null;
    jg.superClass_.disposeInternal.call(this)
  };
  jg.prototype.getUpdateLinkElement = function() {
    return this.getElementByClass("firebaseui-id-change-email")
  };
  var kg = function(a, b) {
    Q.call(this, Nf, {}, b, "passwordInfo");
    this.onUpdateClick_ = a
  };
  t(kg, Q);
  kg.prototype.enterDocument = function() {
    var a = this;
    Td(this, this.getUpdateLinkElement(), function() {
      a.onUpdateClick_()
    });
    kg.superClass_.enterDocument.call(this)
  };
  kg.prototype.disposeInternal = function() {
    this.onUpdateClick_ = null;
    kg.superClass_.disposeInternal.call(this)
  };
  kg.prototype.getUpdateLinkElement = function() {
    return this.getElementByClass("firebaseui-id-change-password")
  };
  var lg = function(a, b, c, d) {
    Q.call(this, Rf, {
      accounts: a,
      providerIds: Ka(a, function(a) {
        return v(a.providerId)
      }),
      siteName: c
    }, d, "linkedAccounts");
    this.onRemoveClick_ = b
  };
  t(lg, Q);
  lg.prototype.enterDocument = function() {
    var a = this;
    Ia(this.getElementsByClass("firebaseui-id-remove-idp"), function(b) {
      Td(a, b, function() {
        var c = v(Ue(b));
        a.onRemoveClick_(c)
      })
    });
    lg.superClass_.enterDocument.call(this)
  };
  lg.prototype.disposeInternal = function() {
    this.onRemoveClick_ = null;
    lg.superClass_.disposeInternal.call(this)
  };
  var mg = function(a, b) {
    Q.call(this, Sf, {
      showTitle: a
    }, b, "accountManage")
  };
  t(mg, Q);
  var ng = function(a, b, c) {
      var d = Md(a, c.getId());
      d && (a.removeChild(d), d.dispose());
      d = a.children_ ? a.children_.length : 0;
      v(!!c, "Provided element must not be null.");
      if (c.inDocument_ && !a.inDocument_) throw Error("Component already rendered");
      if (0 > d || d > (a.children_ ? a.children_.length : 0)) throw Error("Child component index out of bounds");
      a.childIndex_ && a.children_ || (a.childIndex_ = {}, a.children_ = []);
      if (c.getParent() == a) {
        var e = c.getId();
        a.childIndex_[e] = c;
        Pa(a.children_, c)
      } else Za(a.childIndex_, c.getId(), c);
      Nd(c,
        a);
      Ta(a.children_, d, 0, c);
      c.inDocument_ && a.inDocument_ && c.getParent() == a ? (a = a.element_, d = a.childNodes[d] || null, d != c.getElement() && a.insertBefore(c.getElement(), d)) : a.inDocument_ && !c.inDocument_ && c.element_ && c.element_.parentNode && 1 == c.element_.parentNode.nodeType && c.enterDocument();
      c.render(b)
    },
    og = function(a, b) {
      Kd(b, "emailInfo");
      ng(a, a.getElementByClass("firebaseui-id-email-info-container"), b)
    },
    pg = function(a, b) {
      Kd(b, "passwordInfo");
      ng(a, a.getElementByClass("firebaseui-id-password-info-container"),
        b)
    },
    qg = function(a, b) {
      Kd(b, "linkedAccounts");
      ng(a, a.getElementByClass("firebaseui-id-linked-accounts-container"), b)
    };
  var rg = function(a) {
    Q.call(this, Bf, void 0, a, "callback")
  };
  t(rg, Q);
  var sg = function(a, b, c, d) {
    Q.call(this, Mf, {
      email: c
    }, d, "emailChange");
    this.onSubmitClick_ = a;
    this.onCancelClick_ = b
  };
  t(sg, Q);
  sg.prototype.enterDocument = function() {
    this.initEmailElement();
    this.initFormElement(this.onSubmitClick_, this.onCancelClick_);
    ig(this, this.getEmailElement(), this.onSubmitClick_);
    this.getEmailElement().focus();
    sg.superClass_.enterDocument.call(this)
  };
  sg.prototype.disposeInternal = function() {
    this.onCancelClick_ = this.onSubmitClick_ = null;
    sg.superClass_.disposeInternal.call(this)
  };
  r(sg.prototype, {
    getEmailElement: Ke,
    getEmailErrorElement: Oe,
    initEmailElement: Pe,
    getEmail: Qe,
    checkAndGetEmail: Re,
    getSubmitElement: N,
    getSecondaryLinkElement: Se,
    initFormElement: O
  });
  var tg = function(a, b, c, d) {
    Q.call(this, Hf, {
      email: a,
      allowContinue: !!c
    }, d, "emailChangeRevoke");
    this.onResetPasswordClick_ = b;
    this.onContinueClick_ = c || null
  };
  t(tg, Q);
  tg.prototype.enterDocument = function() {
    var a = this;
    Td(this, this.getElementByClass("firebaseui-id-reset-password-link"), function() {
      a.onResetPasswordClick_()
    });
    this.onContinueClick_ && (this.initFormElement(this.onContinueClick_), this.getSubmitElement().focus());
    tg.superClass_.enterDocument.call(this)
  };
  tg.prototype.disposeInternal = function() {
    this.onResetPasswordClick_ = this.onContinueClick_ = null;
    tg.superClass_.disposeInternal.call(this)
  };
  r(tg.prototype, {
    getSubmitElement: N,
    getSecondaryLinkElement: Se,
    initFormElement: O
  });
  var ug = function(a, b, c) {
    Q.call(this, Uf, {
      email: a
    }, c, "emailChangeVerify");
    this.onSubmitClick_ = b
  };
  t(ug, Q);
  ug.prototype.enterDocument = function() {
    this.initEmailElement();
    this.initPasswordElement();
    this.initFormElement(this.onSubmitClick_);
    ig(this, this.getPasswordElement(), this.onSubmitClick_);
    this.getPasswordElement().focus();
    ug.superClass_.enterDocument.call(this)
  };
  ug.prototype.disposeInternal = function() {
    this.onSubmitClick_ = null;
    ug.superClass_.disposeInternal.call(this)
  };
  r(ug.prototype, {
    getEmailElement: Ke,
    getEmailErrorElement: Oe,
    initEmailElement: Pe,
    getEmail: Qe,
    checkAndGetEmail: Re,
    getPasswordElement: sf,
    getPasswordErrorElement: tf,
    initPasswordElement: uf,
    checkAndGetPassword: vf,
    getSubmitElement: N,
    getSecondaryLinkElement: Se,
    initFormElement: O
  });
  var vg = function(a, b, c, d, e) {
    Q.call(this, Tf, {
      userEmail: a,
      pendingEmail: b
    }, e, "emailMismatch");
    this.onContinueClick_ = c;
    this.onCancelClick_ = d
  };
  t(vg, Q);
  vg.prototype.enterDocument = function() {
    this.initFormElement(this.onContinueClick_, this.onCancelClick_);
    this.getSubmitElement().focus();
    vg.superClass_.enterDocument.call(this)
  };
  vg.prototype.disposeInternal = function() {
    this.onCancelClick_ = this.onSubmitClick_ = null;
    vg.superClass_.disposeInternal.call(this)
  };
  r(vg.prototype, {
    getSubmitElement: N,
    getSecondaryLinkElement: Se,
    initFormElement: O
  });
  var wg = function(a, b, c, d) {
    Q.call(this, Df, {
      email: a,
      providerId: b
    }, d, "federatedLinking");
    this.onSubmitClick_ = c
  };
  t(wg, Q);
  wg.prototype.enterDocument = function() {
    this.initFormElement(this.onSubmitClick_);
    this.getSubmitElement().focus();
    wg.superClass_.enterDocument.call(this)
  };
  wg.prototype.disposeInternal = function() {
    this.onSubmitClick_ = null;
    wg.superClass_.disposeInternal.call(this)
  };
  r(wg.prototype, {
    getSubmitElement: N,
    initFormElement: O
  });
  var R = function(a, b, c, d, e) {
    Q.call(this, a, b, d, e || "notice");
    this.onContinueClick_ = c || null
  };
  t(R, Q);
  R.prototype.enterDocument = function() {
    this.onContinueClick_ && (this.initFormElement(this.onContinueClick_), this.getSubmitElement().focus());
    R.superClass_.enterDocument.call(this)
  };
  R.prototype.disposeInternal = function() {
    this.onContinueClick_ = null;
    R.superClass_.disposeInternal.call(this)
  };
  r(R.prototype, {
    getSubmitElement: N,
    getSecondaryLinkElement: Se,
    initFormElement: O
  });
  var xg = function(a, b, c) {
    R.call(this, Af, {
      email: a,
      allowContinue: !!b
    }, b, c, "passwordRecoveryEmailSent")
  };
  t(xg, R);
  var yg = function(a, b) {
    R.call(this, Jf, {
      allowContinue: !!a
    }, a, b, "emailVerificationSuccess")
  };
  t(yg, R);
  var zg = function(a, b) {
    R.call(this, Kf, {
      allowContinue: !!a
    }, a, b, "emailVerificationFailure")
  };
  t(zg, R);
  var Ag = function(a, b) {
    R.call(this, Ff, {
      allowContinue: !!a
    }, a, b, "passwordResetSuccess")
  };
  t(Ag, R);
  var Bg = function(a, b) {
    R.call(this, Gf, {
      allowContinue: !!a
    }, a, b, "passwordResetFailure")
  };
  t(Bg, R);
  var Cg = function(a, b) {
    R.call(this, Pf, null, a, b, "passwordChangeSuccess")
  };
  t(Cg, R);
  var Dg = function(a, b) {
    R.call(this, If, {
      allowContinue: !!a
    }, a, b, "emailChangeRevokeFailure")
  };
  t(Dg, R);
  var Eg = function(a, b) {
    R.call(this, Qf, {
      errorMessage: a
    }, void 0, b, "unrecoverableError")
  };
  t(Eg, R);
  var Fg = function(a, b, c) {
    Q.call(this, Of, {}, c, "passwordChange");
    this.onSubmitClick_ = a;
    this.onCancelClick_ = b
  };
  t(Fg, Q);
  Fg.prototype.enterDocument = function() {
    this.initNewPasswordElement();
    this.initFormElement(this.onSubmitClick_, this.onCancelClick_);
    ig(this, this.getNewPasswordElement(), this.onSubmitClick_);
    this.getNewPasswordElement().focus();
    Fg.superClass_.enterDocument.call(this)
  };
  Fg.prototype.disposeInternal = function() {
    this.onCancelClick_ = this.onSubmitClick_ = null;
    Fg.superClass_.disposeInternal.call(this)
  };
  r(Fg.prototype, {
    getNewPasswordElement: mf,
    getNewPasswordErrorElement: pf,
    getPasswordToggleElement: nf,
    initNewPasswordElement: qf,
    checkAndGetNewPassword: rf,
    getSubmitElement: N,
    getSecondaryLinkElement: Se,
    initFormElement: O
  });
  var Gg = function(a, b, c, d) {
    Q.call(this, Cf, {
      email: a
    }, d, "passwordLinking");
    this.onSubmitClick_ = b;
    this.onForgotClick_ = c
  };
  t(Gg, Q);
  Gg.prototype.enterDocument = function() {
    this.initPasswordElement();
    this.initFormElement(this.onSubmitClick_, this.onForgotClick_);
    ig(this, this.getPasswordElement(), this.onSubmitClick_);
    this.getPasswordElement().focus();
    Gg.superClass_.enterDocument.call(this)
  };
  Gg.prototype.disposeInternal = function() {
    this.onSubmitClick_ = null;
    Gg.superClass_.disposeInternal.call(this)
  };
  Gg.prototype.checkAndGetEmail = function() {
    return Da(C(this.getElementByClass("firebaseui-id-email")))
  };
  r(Gg.prototype, {
    getPasswordElement: sf,
    getPasswordErrorElement: tf,
    initPasswordElement: uf,
    checkAndGetPassword: vf,
    getSubmitElement: N,
    getSecondaryLinkElement: Se,
    initFormElement: O
  });
  var Hg = function(a, b, c, d) {
    Q.call(this, zf, {
      email: c,
      allowCancel: !!b
    }, d, "passwordRecovery");
    this.onSubmitClick_ = a;
    this.onCancelClick_ = b
  };
  t(Hg, Q);
  Hg.prototype.enterDocument = function() {
    this.initEmailElement();
    this.initFormElement(this.onSubmitClick_, this.onCancelClick_);
    C(this.getEmailElement()) || this.getEmailElement().focus();
    ig(this, this.getEmailElement(), this.onSubmitClick_);
    Hg.superClass_.enterDocument.call(this)
  };
  Hg.prototype.disposeInternal = function() {
    this.onCancelClick_ = this.onSubmitClick_ = null;
    Hg.superClass_.disposeInternal.call(this)
  };
  r(Hg.prototype, {
    getEmailElement: Ke,
    getEmailErrorElement: Oe,
    initEmailElement: Pe,
    getEmail: Qe,
    checkAndGetEmail: Re,
    getSubmitElement: N,
    getSecondaryLinkElement: Se,
    initFormElement: O
  });
  var Ig = function(a, b, c) {
    Q.call(this, Ef, {
      email: a
    }, c, "passwordReset");
    this.onSubmitClick_ = b
  };
  t(Ig, Q);
  Ig.prototype.enterDocument = function() {
    this.initNewPasswordElement();
    this.initFormElement(this.onSubmitClick_);
    ig(this, this.getNewPasswordElement(), this.onSubmitClick_);
    this.getNewPasswordElement().focus();
    Ig.superClass_.enterDocument.call(this)
  };
  Ig.prototype.disposeInternal = function() {
    this.onSubmitClick_ = null;
    Ig.superClass_.disposeInternal.call(this)
  };
  r(Ig.prototype, {
    getNewPasswordElement: mf,
    getNewPasswordErrorElement: pf,
    getPasswordToggleElement: nf,
    initNewPasswordElement: qf,
    checkAndGetNewPassword: rf,
    getSubmitElement: N,
    getSecondaryLinkElement: Se,
    initFormElement: O
  });
  var Jg = function(a, b, c, d) {
    Q.call(this, xf, {
      email: c
    }, d, "passwordSignIn");
    this.onSubmitClick_ = a;
    this.onForgotClick_ = b
  };
  t(Jg, Q);
  Jg.prototype.enterDocument = function() {
    this.initEmailElement();
    this.initPasswordElement();
    this.initFormElement(this.onSubmitClick_, this.onForgotClick_);
    hg(this, this.getEmailElement(), this.getPasswordElement());
    ig(this, this.getPasswordElement(), this.onSubmitClick_);
    C(this.getEmailElement()) ? this.getPasswordElement().focus() : this.getEmailElement().focus();
    Jg.superClass_.enterDocument.call(this)
  };
  Jg.prototype.disposeInternal = function() {
    this.onForgotClick_ = this.onSubmitClick_ = null;
    Jg.superClass_.disposeInternal.call(this)
  };
  r(Jg.prototype, {
    getEmailElement: Ke,
    getEmailErrorElement: Oe,
    initEmailElement: Pe,
    getEmail: Qe,
    checkAndGetEmail: Re,
    getPasswordElement: sf,
    getPasswordErrorElement: tf,
    initPasswordElement: uf,
    checkAndGetPassword: vf,
    getSubmitElement: N,
    getSecondaryLinkElement: Se,
    initFormElement: O
  });
  var Kg = function(a, b, c, d, e, f) {
    Q.call(this, yf, {
      email: d,
      name: e,
      tosUrl: a,
      allowCancel: !!c
    }, f, "passwordSignUp");
    this.onSubmitClick_ = b;
    this.onCancelClick_ = c
  };
  t(Kg, Q);
  Kg.prototype.enterDocument = function() {
    this.initEmailElement();
    this.initNameElement();
    this.initNewPasswordElement();
    this.initFormElement(this.onSubmitClick_, this.onCancelClick_);
    hg(this, this.getEmailElement(), this.getNameElement());
    hg(this, this.getNameElement(), this.getNewPasswordElement());
    this.onSubmitClick_ && ig(this, this.getNewPasswordElement(), this.onSubmitClick_);
    C(this.getEmailElement()) ? C(this.getNameElement()) ? this.getNewPasswordElement().focus() : this.getNameElement().focus() : this.getEmailElement().focus();
    Kg.superClass_.enterDocument.call(this)
  };
  Kg.prototype.disposeInternal = function() {
    this.onCancelClick_ = this.onSubmitClick_ = null;
    Kg.superClass_.disposeInternal.call(this)
  };
  r(Kg.prototype, {
    getEmailElement: Ke,
    getEmailErrorElement: Oe,
    initEmailElement: Pe,
    getEmail: Qe,
    checkAndGetEmail: Re,
    getNameElement: kf,
    getNameErrorElement: lf,
    initNameElement: function() {
      var a = kf.call(this),
        b = lf.call(this);
      Pd(this, a, function() {
        Wd(b) && (H(a, !0), Ud(b))
      })
    },
    checkAndGetName: function() {
      var a = kf.call(this),
        b;
      b = lf.call(this);
      var c = C(a),
        c = !/^[\s\xa0]*$/.test(null == c ? "" : String(c));
      H(a, c);
      c ? (Ud(b), b = !0) : (Vd(b, pe("Enter your account name").toString()), b = !1);
      return b ? pa(v(C(a))) : null
    },
    getNewPasswordElement: mf,
    getNewPasswordErrorElement: pf,
    getPasswordToggleElement: nf,
    initNewPasswordElement: qf,
    checkAndGetNewPassword: rf,
    getSubmitElement: N,
    getSecondaryLinkElement: Se,
    initFormElement: O
  });
  var Lg = function(a, b, c) {
    Q.call(this, Vf, {
      providerIds: b
    }, c, "providerSignIn");
    this.onIdpClick_ = a
  };
  t(Lg, Q);
  Lg.prototype.enterDocument = function() {
    this.initIdpList(this.onIdpClick_);
    Lg.superClass_.enterDocument.call(this)
  };
  Lg.prototype.disposeInternal = function() {
    this.onIdpClick_ = null;
    Lg.superClass_.disposeInternal.call(this)
  };
  r(Lg.prototype, {
    initIdpList: function(a) {
      for (var b = this.getElementsByClass("firebaseui-id-idp-button"), c = function(b) {
          a(b)
        }, d = 0; d < b.length; d++) {
        var e = b[d],
          f = v(Ue(e));
        Td(this, e, ka(c, f))
      }
    }
  });
  var Mg = function(a, b, c) {
    Q.call(this, wf, {
      email: b
    }, c, "signIn");
    this.onEmailEnter_ = a
  };
  t(Mg, Q);
  Mg.prototype.enterDocument = function() {
    this.initEmailElement(this.onEmailEnter_);
    this.initFormElement(this.onEmailEnter_);
    this.getEmailElement().focus();
    var a = this.getEmailElement(),
      b = (this.getEmailElement().value || "").length,
      c;
    try {
      c = "number" == typeof a.selectionStart
    } catch (d) {
      c = !1
    }
    c ? (a.selectionStart = b, a.selectionEnd = b) : z && ("textarea" == a.type && (b = a.value.substring(0, b).replace(/(\r\n|\r|\n)/g, "\n").length), a = a.createTextRange(), a.collapse(!0), a.move("character", b), a.select());
    Mg.superClass_.enterDocument.call(this)
  };
  Mg.prototype.disposeInternal = function() {
    this.onEmailEnter_ = null;
    Mg.superClass_.disposeInternal.call(this)
  };
  r(Mg.prototype, {
    getEmailElement: Ke,
    getEmailErrorElement: Oe,
    initEmailElement: Pe,
    getEmail: Qe,
    checkAndGetEmail: Re,
    getSubmitElement: N,
    initFormElement: O
  });
  var Ng = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/,
    Og = function(a, b) {
      if (a)
        for (var c = a.split("&"), d = 0; d < c.length; d++) {
          var e = c[d].indexOf("="),
            f, g = null;
          0 <= e ? (f = c[d].substring(0, e), g = c[d].substring(e + 1)) : f = c[d];
          b(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
        }
    },
    Pg = function(a, b, c, d) {
      for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
        var f = a.charCodeAt(b - 1);
        if (38 == f || 63 == f)
          if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f) return b;
        b += e + 1
      }
      return -1
    },
    Qg = /#|$/,
    Rg = function(a, b) {
      var c = a.search(Qg),
        d = Pg(a, 0, b, c);
      if (0 > d) return null;
      var e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(a.substr(d, e - d).replace(/\+/g, " "))
    },
    Sg = /[?&]($|#)/;
  var Tg = function(a, b) {
    this.domain_ = this.userInfo_ = this.scheme_ = "";
    this.port_ = null;
    this.fragment_ = this.path_ = "";
    this.ignoreCase_ = this.isReadOnly_ = !1;
    var c;
    if (a instanceof Tg) this.ignoreCase_ = aa(b) ? b : a.ignoreCase_, Ug(this, a.scheme_), c = a.userInfo_, S(this), this.userInfo_ = c, c = a.domain_, S(this), this.domain_ = c, Vg(this, a.port_), c = a.path_, S(this), this.path_ = c, Wg(this, a.queryData_.clone()), Xg(this, a.fragment_);
    else if (a && (c = String(a).match(Ng))) {
      this.ignoreCase_ = !!b;
      Ug(this, c[1] || "", !0);
      var d = c[2] || "";
      S(this);
      this.userInfo_ = Yg(d);
      d = c[3] || "";
      S(this);
      this.domain_ = Yg(d, !0);
      Vg(this, c[4]);
      d = c[5] || "";
      S(this);
      this.path_ = Yg(d, !0);
      Wg(this, c[6] || "", !0);
      Xg(this, c[7] || "", !0)
    } else this.ignoreCase_ = !!b, this.queryData_ = new Zg(null, 0, this.ignoreCase_)
  };
  Tg.prototype.toString = function() {
    var a = [],
      b = this.scheme_;
    b && a.push($g(b, ah, !0), ":");
    var c = this.domain_;
    if (c || "file" == b) a.push("//"), (b = this.userInfo_) && a.push($g(b, ah, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.port_, null != c && a.push(":", String(c));
    if (c = this.path_) this.domain_ && "/" != c.charAt(0) && a.push("/"), a.push($g(c, "/" == c.charAt(0) ? bh : ch, !0));
    (c = this.queryData_.toString()) && a.push("?", c);
    (c = this.fragment_) && a.push("#", $g(c, dh));
    return a.join("")
  };
  Tg.prototype.resolve = function(a) {
    var b = this.clone(),
      c = !!a.scheme_;
    c ? Ug(b, a.scheme_) : c = !!a.userInfo_;
    if (c) {
      var d = a.userInfo_;
      S(b);
      b.userInfo_ = d
    } else c = !!a.domain_;
    c ? (d = a.domain_, S(b), b.domain_ = d) : c = null != a.port_;
    d = a.path_;
    if (c) Vg(b, a.port_);
    else if (c = !!a.path_) {
      if ("/" != d.charAt(0))
        if (this.domain_ && !this.path_) d = "/" + d;
        else {
          var e = b.path_.lastIndexOf("/"); - 1 != e && (d = b.path_.substr(0, e + 1) + d)
        }
      e = d;
      if (".." == e || "." == e) d = "";
      else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
        for (var d = 0 == e.lastIndexOf("/", 0),
            e = e.split("/"), f = [], g = 0; g < e.length;) {
          var k = e[g++];
          "." == k ? d && g == e.length && f.push("") : ".." == k ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(k), d = !0)
        }
        d = f.join("/")
      } else d = e
    }
    c ? (S(b), b.path_ = d) : c = "" !== a.queryData_.toString();
    c ? Wg(b, Yg(a.queryData_.toString())) : c = !!a.fragment_;
    c && Xg(b, a.fragment_);
    return b
  };
  Tg.prototype.clone = function() {
    return new Tg(this)
  };
  var Ug = function(a, b, c) {
      S(a);
      a.scheme_ = c ? Yg(b, !0) : b;
      a.scheme_ && (a.scheme_ = a.scheme_.replace(/:$/, ""))
    },
    Vg = function(a, b) {
      S(a);
      if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
        a.port_ = b
      } else a.port_ = null
    },
    Wg = function(a, b, c) {
      S(a);
      b instanceof Zg ? (a.queryData_ = b, a.queryData_.setIgnoreCase(a.ignoreCase_)) : (c || (b = $g(b, eh)), a.queryData_ = new Zg(b, 0, a.ignoreCase_));
      return a
    },
    Xg = function(a, b, c) {
      S(a);
      a.fragment_ = c ? Yg(b) : b;
      return a
    },
    S = function(a) {
      if (a.isReadOnly_) throw Error("Tried to modify a read-only Uri");
    };
  Tg.prototype.setIgnoreCase = function(a) {
    this.ignoreCase_ = a;
    this.queryData_ && this.queryData_.setIgnoreCase(a);
    return this
  };
  var fh = function(a) {
      return a instanceof Tg ? a.clone() : new Tg(a, void 0)
    },
    gh = function(a) {
      var b = window.location.href;
      b instanceof Tg || (b = fh(b));
      a instanceof Tg || (a = fh(a));
      return b.resolve(a)
    },
    Yg = function(a, b) {
      return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    },
    $g = function(a, b, c) {
      return m(a) ? (a = encodeURI(a).replace(b, hh), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
    },
    hh = function(a) {
      a = a.charCodeAt(0);
      return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    },
    ah = /[#\/\?@]/g,
    ch = /[\#\?:]/g,
    bh = /[\#\?]/g,
    eh = /[\#\?@]/g,
    dh = /#/g,
    Zg = function(a, b, c) {
      this.count_ = this.keyMap_ = null;
      this.encodedQuery_ = a || null;
      this.ignoreCase_ = !!c
    },
    ih = function(a) {
      a.keyMap_ || (a.keyMap_ = new Yb, a.count_ = 0, a.encodedQuery_ && Og(a.encodedQuery_, function(b, c) {
        a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
      }))
    };
  h = Zg.prototype;
  h.add = function(a, b) {
    ih(this);
    this.encodedQuery_ = null;
    a = jh(this, a);
    var c = this.keyMap_.get(a);
    c || this.keyMap_.set(a, c = []);
    c.push(b);
    this.count_ = Ca(this.count_) + 1;
    return this
  };
  h.remove = function(a) {
    ih(this);
    a = jh(this, a);
    return this.keyMap_.containsKey(a) ? (this.encodedQuery_ = null, this.count_ = Ca(this.count_) - this.keyMap_.get(a).length, this.keyMap_.remove(a)) : !1
  };
  h.containsKey = function(a) {
    ih(this);
    a = jh(this, a);
    return this.keyMap_.containsKey(a)
  };
  h.getKeys = function() {
    ih(this);
    for (var a = this.keyMap_.getValues(), b = this.keyMap_.getKeys(), c = [], d = 0; d < b.length; d++)
      for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
    return c
  };
  h.getValues = function(a) {
    ih(this);
    var b = [];
    if (m(a)) this.containsKey(a) && (b = Qa(b, this.keyMap_.get(jh(this, a))));
    else {
      a = this.keyMap_.getValues();
      for (var c = 0; c < a.length; c++) b = Qa(b, a[c])
    }
    return b
  };
  h.set = function(a, b) {
    ih(this);
    this.encodedQuery_ = null;
    a = jh(this, a);
    this.containsKey(a) && (this.count_ = Ca(this.count_) - this.keyMap_.get(a).length);
    this.keyMap_.set(a, [b]);
    this.count_ = Ca(this.count_) + 1;
    return this
  };
  h.get = function(a, b) {
    var c = a ? this.getValues(a) : [];
    return 0 < c.length ? String(c[0]) : b
  };
  h.toString = function() {
    if (this.encodedQuery_) return this.encodedQuery_;
    if (!this.keyMap_) return "";
    for (var a = [], b = this.keyMap_.getKeys(), c = 0; c < b.length; c++)
      for (var d = b[c], e = encodeURIComponent(String(d)), d = this.getValues(d), f = 0; f < d.length; f++) {
        var g = e;
        "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
        a.push(g)
      }
    return this.encodedQuery_ = a.join("&")
  };
  h.clone = function() {
    var a = new Zg;
    a.encodedQuery_ = this.encodedQuery_;
    this.keyMap_ && (a.keyMap_ = this.keyMap_.clone(), a.count_ = this.count_);
    return a
  };
  var jh = function(a, b) {
    var c = String(b);
    a.ignoreCase_ && (c = c.toLowerCase());
    return c
  };
  Zg.prototype.setIgnoreCase = function(a) {
    a && !this.ignoreCase_ && (ih(this), this.encodedQuery_ = null, this.keyMap_.forEach(function(a, c) {
      var d = c.toLowerCase();
      c != d && (this.remove(c), this.remove(d), 0 < a.length && (this.encodedQuery_ = null, this.keyMap_.set(jh(this, d), Ra(a)), this.count_ = Ca(this.count_) + a.length))
    }, this));
    this.ignoreCase_ = a
  };
  var kh = function(a, b, c, d) {
    this.email_ = a;
    this.displayName_ = b || null;
    this.photoUrl_ = c || null;
    this.providerId_ = d || null
  };
  kh.prototype.getEmail = function() {
    return this.email_
  };
  kh.prototype.toPlainObject = function() {
    return {
      email: this.email_,
      displayName: this.displayName_,
      photoUrl: this.photoUrl_,
      providerId: this.providerId_
    }
  };
  var lh = function(a) {
    return a.email ? new kh(a.email, a.displayName, a.photoUrl, a.providerId) : null
  };
  var mh = null,
    nh = function(a) {
      return !(!a || -32E3 != a.code || "Service unavailable" != a.message)
    },
    qh = function(a, b, c, d) {
      mh || (a = {
        callbacks: {
          empty: a,
          select: function(a, d) {
            a && a.account && b ? b(lh(a.account)) : c && c(!nh(d))
          },
          store: a,
          update: a
        },
        language: "en",
        providers: void 0,
        ui: d
      }, "undefined" != typeof accountchooser && accountchooser.Api && accountchooser.Api.init ? mh = accountchooser.Api.init(a) : (mh = new oh(a), ph()))
    },
    rh = function(a, b, c) {
      v(!!mh);
      var d = function() {
        var a = gh(c).toString();
        mh.select(Ka(b || [], function(a) {
          return a.toPlainObject()
        }), {
          clientCallbackUrl: a
        })
      };
      b && b.length ? d() : mh.checkEmpty(function(b, c) {
        b || c ? a(!nh(c)) : d()
      })
    },
    oh = function(a) {
      this.config_ = a;
      this.config_.callbacks = this.config_.callbacks || {}
    },
    ph = function() {
      var a = mh;
      p(a.config_.callbacks.empty) && a.config_.callbacks.empty()
    },
    sh = {
      code: -32E3,
      message: "Service unavailable",
      data: "Service is unavailable."
    };
  oh.prototype.select = function() {
    p(this.config_.callbacks.select) && this.config_.callbacks.select(void 0, sh)
  };
  oh.prototype.update = function() {
    p(this.config_.callbacks.update) && this.config_.callbacks.update(void 0, sh)
  };
  oh.prototype.checkDisabled = function(a) {
    a(!0)
  };
  oh.prototype.checkEmpty = function(a) {
    a(void 0, sh)
  };
  var th = function() {
      this.instance_ = {}
    },
    uh = function(a, b, c) {
      if (b.toLowerCase() in a.instance_) throw Error("Configuration " + b + " has already been defined.");
      a.instance_[b.toLowerCase()] = c
    };
  th.prototype.update = function(a, b) {
    if (!(a.toLowerCase() in this.instance_)) throw Error("Configuration " + a + " is not defined.");
    this.instance_[a.toLowerCase()] = b
  };
  th.prototype.get = function(a) {
    if (!(a.toLowerCase() in this.instance_)) throw Error("Configuration " + a + " is not defined.");
    return this.instance_[a.toLowerCase()]
  };
  var vh = function(a, b) {
    var c = a.get(b);
    if (!c) throw Error("Configuration " + b + " is required.");
    return c
  };
  var xh = function(a) {
      return !!wh[a]
    },
    wh = {
      "facebook.com": "FacebookAuthProvider",
      "github.com": "GithubAuthProvider",
      "google.com": "GoogleAuthProvider",
      password: "EmailAuthProvider",
      "twitter.com": "TwitterAuthProvider"
    };
  var yh = function(a, b, c, d, e) {
    this.reset(a, b, c, d, e)
  };
  yh.prototype.exception_ = null;
  var zh = 0;
  yh.prototype.reset = function(a, b, c, d, e) {
    "number" == typeof e || zh++;
    this.time_ = d || la();
    this.level_ = a;
    this.msg_ = b;
    this.loggerName_ = c;
    delete this.exception_
  };
  yh.prototype.setLevel = function(a) {
    this.level_ = a
  };
  var Ah = function(a) {
      this.name_ = a;
      this.handlers_ = this.children_ = this.level_ = this.parent_ = null
    },
    Bh = function(a, b) {
      this.name = a;
      this.value = b
    };
  Bh.prototype.toString = function() {
    return this.name
  };
  var Ch = new Bh("SHOUT", 1200),
    Dh = new Bh("SEVERE", 1E3),
    Eh = new Bh("WARNING", 900),
    Fh = new Bh("CONFIG", 700);
  Ah.prototype.getParent = function() {
    return this.parent_
  };
  Ah.prototype.getChildren = function() {
    this.children_ || (this.children_ = {});
    return this.children_
  };
  Ah.prototype.setLevel = function(a) {
    this.level_ = a
  };
  var Gh = function(a) {
    if (a.level_) return a.level_;
    if (a.parent_) return Gh(a.parent_);
    Ba("Root logger has no level set.");
    return null
  };
  Ah.prototype.log = function(a, b, c) {
    if (a.value >= Gh(this).value)
      for (p(b) && (b = b()), a = new yh(a, String(b), this.name_), c && (a.exception_ = c), c = "log:" + a.msg_, l.console && (l.console.timeStamp ? l.console.timeStamp(c) : l.console.markTimeline && l.console.markTimeline(c)), l.msWriteProfilerMark && l.msWriteProfilerMark(c), c = this; c;) {
        b = c;
        var d = a;
        if (b.handlers_)
          for (var e = 0, f; f = b.handlers_[e]; e++) f(d);
        c = c.getParent()
      }
  };
  var Hh = {},
    Ih = null,
    Jh = function() {
      Ih || (Ih = new Ah(""), Hh[""] = Ih, Ih.setLevel(Fh))
    },
    Kh = function(a) {
      Jh();
      var b;
      if (!(b = Hh[a])) {
        b = new Ah(a);
        var c = a.lastIndexOf("."),
          d = a.substr(c + 1),
          c = Kh(a.substr(0, c));
        c.getChildren()[d] = b;
        b.parent_ = c;
        Hh[a] = b
      }
      return b
    };
  var Lh = function() {
      this.relativeTimeStart_ = la()
    },
    Mh = new Lh;
  Lh.prototype.set = function(a) {
    this.relativeTimeStart_ = a
  };
  Lh.prototype.reset = function() {
    this.set(la())
  };
  Lh.prototype.get = function() {
    return this.relativeTimeStart_
  };
  var Nh = function(a) {
    this.prefix_ = a || "";
    this.startTimeProvider_ = Mh
  };
  h = Nh.prototype;
  h.appendNewline = !0;
  h.showAbsoluteTime = !0;
  h.showRelativeTime = !0;
  h.showLoggerName = !0;
  h.showExceptionText = !1;
  h.showSeverityLevel = !1;
  var Oh = function(a) {
      return 10 > a ? "0" + a : String(a)
    },
    Ph = function(a, b) {
      var c = (a.time_ - b) / 1E3,
        d = c.toFixed(3),
        e = 0;
      if (1 > c) e = 2;
      else
        for (; 100 > c;) e++, c *= 10;
      for (; 0 < e--;) d = " " + d;
      return d
    },
    Qh = function(a) {
      Nh.call(this, a)
    };
  t(Qh, Nh);
  var Rh = function() {
    this.publishHandler_ = q(this.addLogRecord, this);
    this.formatter_ = new Qh;
    this.formatter_.showAbsoluteTime = !1;
    this.formatter_.showExceptionText = !1;
    this.isCapturing_ = this.formatter_.appendNewline = !1;
    this.logBuffer_ = "";
    this.filteredLoggers_ = {}
  };
  Rh.prototype.addLogRecord = function(a) {
    if (!this.filteredLoggers_[a.loggerName_]) {
      var b;
      b = this.formatter_;
      var c = [];
      c.push(b.prefix_, " ");
      if (b.showAbsoluteTime) {
        var d = new Date(a.time_);
        c.push("[", Oh(d.getFullYear() - 2E3) + Oh(d.getMonth() + 1) + Oh(d.getDate()) + " " + Oh(d.getHours()) + ":" + Oh(d.getMinutes()) + ":" + Oh(d.getSeconds()) + "." + Oh(Math.floor(d.getMilliseconds() / 10)), "] ")
      }
      b.showRelativeTime && c.push("[", Ph(a, b.startTimeProvider_.get()), "s] ");
      b.showLoggerName && c.push("[", a.loggerName_, "] ");
      b.showSeverityLevel &&
        c.push("[", a.level_.name, "] ");
      c.push(a.msg_);
      b.showExceptionText && (d = a.exception_) && c.push("\n", d instanceof Error ? d.message : d.toString());
      b.appendNewline && c.push("\n");
      b = c.join("");
      if (c = Sh) switch (a.level_) {
        case Ch:
          Th(c, "info", b);
          break;
        case Dh:
          Th(c, "error", b);
          break;
        case Eh:
          Th(c, "warn", b);
          break;
        default:
          Th(c, "debug", b)
      } else this.logBuffer_ += b
    }
  };
  var Sh = l.console,
    Th = function(a, b, c) {
      if (a[b]) a[b](c);
      else a.log(c)
    };
  var Uh;
  Uh = Kh("identitytoolkit");
  var Vh = new Rh;
  if (1 != Vh.isCapturing_) {
    Jh();
    var Wh = Ih,
      Xh = Vh.publishHandler_;
    Wh.handlers_ || (Wh.handlers_ = []);
    Wh.handlers_.push(Xh);
    Vh.isCapturing_ = !0
  }
  var Yh = function(a) {
    Uh && Uh.log(Dh, a, void 0)
  };
  var Zh = function(a, b) {
    this.email_ = a;
    this.credential_ = b || null
  };
  Zh.prototype.getEmail = function() {
    return this.email_
  };
  Zh.prototype.toPlainObject = function() {
    var a;
    if (a = this.credential_) {
      a = this.credential_;
      var b = {},
        c;
      for (c in a) b[c] = a[c];
      a = b
    }
    return {
      email: this.email_,
      credential: a
    }
  };
  var $h = function(a) {
    if (a && a.email) {
      var b;
      if (b = a.credential) {
        var c = (b = a.credential) && b.provider;
        wh[c] && firebase.auth[wh[c]] ? (b.secret && b.accessToken && (b.oauthToken = b.accessToken, b.oauthTokenSecret = b.secret), b = firebase.auth[wh[c]].credential(b)) : b = null
      }
      return new Zh(a.email, b)
    }
    return null
  };
  var ai = /MSIE ([\d.]+).*Windows NT ([\d.]+)/,
    bi = /Firefox\/([\d.]+)/,
    ci = /Opera[ \/]([\d.]+)(.*Version\/([\d.]+))?/,
    di = /Chrome\/([\d.]+)/,
    ei = /((Windows NT ([\d.]+))|(Mac OS X ([\d_]+))).*Version\/([\d.]+).*Safari/,
    fi = /Mac OS X;.*(?!(Version)).*Safari/,
    gi = /Android ([\d.]+).*Safari/,
    hi = /OS ([\d_]+) like Mac OS X.*Mobile.*Safari/,
    ii = /Konqueror\/([\d.]+)/,
    ji = /MSIE ([\d.]+).*Windows Phone OS ([\d.]+)/,
    T = function(a, b) {
      this.version_ = a;
      var c = a.split(b || ".");
      this.components_ = [];
      for (var d = 0; d < c.length; d++) this.components_.push(parseInt(c[d],
        10))
    };
  T.prototype.compare = function(a) {
    a instanceof T || (a = new T(String(a)));
    for (var b = Math.max(this.components_.length, a.components_.length), c = 0; c < b; c++) {
      var d = this.components_[c],
        e = a.components_[c];
      if (void 0 !== d && void 0 !== e && d !== e) return d - e;
      if (void 0 === d) return -1;
      if (void 0 === e) return 1
    }
    return 0
  };
  var U = function(a, b) {
      return 0 <= a.compare(b)
    },
    ki = function() {
      var a = window.navigator && window.navigator.userAgent;
      if (a) {
        var b;
        if (b = a.match(ci)) {
          var c = new T(b[3] || b[1]);
          return 0 <= a.indexOf("Opera Mini") ? !1 : 0 <= a.indexOf("Opera Mobi") ? 0 <= a.indexOf("Android") && U(c, "10.1") : U(c, "8.0")
        }
        if (b = a.match(bi)) return U(new T(b[1]), "2.0");
        if (b = a.match(di)) return U(new T(b[1]), "6.0");
        if (b = a.match(ei)) return c = new T(b[6]), a = b[3] && new T(b[3]), b = b[5] && new T(b[5], "_"), (!(!a || !U(a, "6.0")) || !(!b || !U(b, "10.5.6"))) && U(c, "3.0");
        if (b = a.match(gi)) return U(new T(b[1]), "3.0");
        if (b = a.match(hi)) return U(new T(b[1], "_"), "4.0");
        if (b = a.match(ii)) return U(new T(b[1]), "4.7");
        if (b = a.match(ji)) return c = new T(b[1]), a = new T(b[2]), U(c, "7.0") && U(a, "7.0");
        if (b = a.match(ai)) return c = new T(b[1]), a = new T(b[2]), U(c, "7.0") && U(a, "6.0");
        if (a.match(fi)) return !1
      }
      return !0
    };
  var li = function() {};
  var mi = function() {};
  t(mi, li);
  var ni = function(a) {
    this.storage_ = a
  };
  t(ni, mi);
  var oi = function(a) {
    if (!a.storage_) return !1;
    try {
      return a.storage_.setItem("__sak", "1"), a.storage_.removeItem("__sak"), !0
    } catch (b) {
      return !1
    }
  };
  h = ni.prototype;
  h.set = function(a, b) {
    try {
      this.storage_.setItem(a, b)
    } catch (c) {
      if (0 == this.storage_.length) throw "Storage mechanism: Storage disabled";
      throw "Storage mechanism: Quota exceeded";
    }
  };
  h.get = function(a) {
    a = this.storage_.getItem(a);
    if (!m(a) && null !== a) throw "Storage mechanism: Invalid value was encountered";
    return a
  };
  h.remove = function(a) {
    this.storage_.removeItem(a)
  };
  h.__iterator__ = function(a) {
    var b = 0,
      c = this.storage_,
      d = new Xb;
    d.next = function() {
      if (b >= c.length) throw Wb;
      var d = Da(c.key(b++));
      if (a) return d;
      d = c.getItem(d);
      if (!m(d)) throw "Storage mechanism: Invalid value was encountered";
      return d
    };
    return d
  };
  h.key = function(a) {
    return this.storage_.key(a)
  };
  var pi = function() {
    var a = null;
    try {
      a = window.localStorage || null
    } catch (b) {}
    this.storage_ = a
  };
  t(pi, ni);
  var qi = function() {
    var a = null;
    try {
      a = window.sessionStorage || null
    } catch (b) {}
    this.storage_ = a
  };
  t(qi, ni);
  var ri = function(a, b) {
    this.mechanism_ = a;
    this.prefix_ = b + "::"
  };
  t(ri, mi);
  ri.prototype.set = function(a, b) {
    this.mechanism_.set(this.prefix_ + a, b)
  };
  ri.prototype.get = function(a) {
    return this.mechanism_.get(this.prefix_ + a)
  };
  ri.prototype.remove = function(a) {
    this.mechanism_.remove(this.prefix_ + a)
  };
  ri.prototype.__iterator__ = function(a) {
    var b = this.mechanism_.__iterator__(!0),
      c = this,
      d = new Xb;
    d.next = function() {
      for (var d = b.next(); d.substr(0, c.prefix_.length) != c.prefix_;) d = b.next();
      return a ? d.substr(c.prefix_.length) : c.mechanism_.get(d)
    };
    return d
  };
  var si = function(a) {
      a = String(a);
      if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
        return eval("(" + a + ")")
      } catch (b) {}
      throw Error("Invalid JSON string: " + a);
    },
    vi = function(a) {
      var b = [];
      ti(new ui, a, b);
      return b.join("")
    },
    ui = function() {
      this.replacer_ = void 0
    },
    ti = function(a, b,
      c) {
      if (null == b) c.push("null");
      else {
        if ("object" == typeof b) {
          if (fa(b)) {
            var d = b;
            b = d.length;
            c.push("[");
            for (var e = "", f = 0; f < b; f++) c.push(e), e = d[f], ti(a, a.replacer_ ? a.replacer_.call(d, String(f), e) : e, c), e = ",";
            c.push("]");
            return
          }
          if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
          else {
            c.push("{");
            f = "";
            for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (e = b[d], "function" != typeof e && (c.push(f), wi(d, c), c.push(":"), ti(a, a.replacer_ ? a.replacer_.call(b, d, e) : e, c), f = ","));
            c.push("}");
            return
          }
        }
        switch (typeof b) {
          case "string":
            wi(b, c);
            break;
          case "number":
            c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
            break;
          case "boolean":
            c.push(String(b));
            break;
          case "function":
            c.push("null");
            break;
          default:
            throw Error("Unknown type: " + typeof b);
        }
      }
    },
    xi = {
      '"': '\\"',
      "\\": "\\\\",
      "/": "\\/",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\x0B": "\\u000b"
    },
    yi = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g,
    wi = function(a, b) {
      b.push('"', a.replace(yi, function(a) {
        var b =
          xi[a];
        b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), xi[a] = b);
        return b
      }), '"')
    };
  var zi = function(a) {
    this.mechanism = a
  };
  zi.prototype.set = function(a, b) {
    aa(b) ? this.mechanism.set(a, vi(b)) : this.mechanism.remove(a)
  };
  zi.prototype.get = function(a) {
    var b;
    try {
      b = this.mechanism.get(a)
    } catch (c) {
      return
    }
    if (null !== b) try {
      return si(b)
    } catch (c) {
      throw "Storage: Invalid value was encountered";
    }
  };
  zi.prototype.remove = function(a) {
    this.mechanism.remove(a)
  };
  var Ai, Bi = new pi;
  Ai = oi(Bi) ? new ri(Bi, "firebaseui") : null;
  var Ci = new zi(Ai),
    Di, Ei = new qi;
  Di = oi(Ei) ? new ri(Ei, "firebaseui") : null;
  var Fi = new zi(Di),
    Gi = {
      name: "pendingEmailCredential",
      persistent: !1
    },
    Hi = {
      name: "redirectUrl",
      persistent: !1
    },
    Ii = {
      name: "rememberAccount",
      persistent: !1
    },
    Ji = {
      name: "rememberedAccounts",
      persistent: !0
    },
    Ki = function(a, b) {
      return (a.persistent ? Ci : Fi).get(b ? a.name + ":" + b : a.name)
    },
    Li = function(a, b) {
      (a.persistent ? Ci : Fi).remove(b ? a.name + ":" + b : a.name)
    },
    Mi = function(a, b, c) {
      (a.persistent ? Ci : Fi).set(c ? a.name + ":" + c : a.name, b)
    },
    Ni = function(a) {
      a = Ki(Ji, a) || [];
      a = Ka(a, function(a) {
        return lh(a)
      });
      return Ja(a, da)
    },
    Oi = function(a, b) {
      var c =
        Ni(b),
        d = Ma(c, function(b) {
          return b.getEmail() == a.getEmail() && (b.providerId_ || null) == (a.providerId_ || null)
        }); - 1 < d && Oa(c, d);
      c.unshift(a);
      Mi(Ji, Ka(c, function(a) {
        return a.toPlainObject()
      }), b)
    },
    Pi = function(a) {
      a = Ki(Gi, a) || null;
      return $h(a)
    };
  var Qi = function(a) {
      window.location.assign(a)
    },
    Ri = function(a) {
      var b = (window.screen.availHeight - 600) / 2,
        c = (window.screen.availWidth - 500) / 2;
      var d = a || "about:blank",
        b = {
          width: 500,
          height: 600,
          top: 0 < b ? b : 0,
          left: 0 < c ? c : 0,
          location: !0,
          resizable: !0,
          statusbar: !0,
          toolbar: !1
        };
      b.target = b.target || d.target || "google_popup";
      b.width = b.width || 690;
      b.height = b.height || 500;
      (c = b) || (c = {});
      b = window;
      a = d instanceof y ? d : lb("undefined" != typeof d.href ? d.href : String(d));
      var d = c.target || d.target,
        e = [],
        f;
      for (f in c) switch (f) {
        case "width":
        case "height":
        case "top":
        case "left":
          e.push(f +
            "=" + c[f]);
          break;
        case "target":
        case "noreferrer":
          break;
        default:
          e.push(f + "=" + (c[f] ? 1 : 0))
      }
      f = e.join(",");
      (x("iPhone") && !x("iPod") && !x("iPad") || x("iPad") || x("iPod")) && b.navigator && b.navigator.standalone && d && "_self" != d ? (f = b.document.createElement("A"), a = a instanceof y ? a : lb(a), f.href = ib(a), f.setAttribute("target", d), c.noreferrer && f.setAttribute("rel", "noreferrer"), c = document.createEvent("MouseEvent"), c.initMouseEvent("click", !0, !0, b, 1), f.dispatchEvent(c), b = {}) : c.noreferrer ? (b = b.open("", d, f), c = ib(a), b && (ub &&
        -1 != c.indexOf(";") && (c = "'" + c.replace(/'/g, "%27") + "'"), b.opener = null, f = new fb, f.stringConstValueWithSecurityContract__googStringSecurityPrivate_ = "b/12014412, meta tag with sanitized URL", c = '<META HTTP-EQUIV="refresh" content="0; url=' + xa(c) + '">', Da(gb(f), "must provide justification"), v(!/^[\s\xa0]*$/.test(gb(f)), "must provide non-empty justification"), b.document.write(rb((new qb).initSecurityPrivateDoNotAccessOrElse_(c))), b.document.close())) : b = b.open(ib(a), d, f);
      b && b.focus()
    },
    Si = function(a) {
      a = ha(a) &&
        1 == a.nodeType ? a : document.querySelector(String(a));
      if (null == a) throw Error("Could not find the Firebase UI widget element on the page.");
      return a
    };
  var Ti = function() {
      this.config_ = new th;
      uh(this.config_, "acUiConfig");
      uh(this.config_, "accountChooserEnabled", !0);
      uh(this.config_, "callbacks");
      uh(this.config_, "idpConfig");
      uh(this.config_, "popupMode", !1);
      uh(this.config_, "queryParameterForSignInSuccessUrl", "signInSuccessUrl");
      uh(this.config_, "queryParameterForWidgetMode", "mode");
      uh(this.config_, "signInOptions");
      uh(this.config_, "signInSuccessUrl");
      uh(this.config_, "siteName");
      uh(this.config_, "tosUrl");
      uh(this.config_, "widgetUrl")
    },
    Ui = {
      AFTER_AC_STORE: "afterStore",
      CALLBACK: "callback",
      MANAGE_ACCOUNT: "manageAccount",
      MOBILE_LINK_ACCOUNT: "linkAccount",
      RECOVER_EMAIL: "recoverEmail",
      RECOVER_PASSWORD: "recoverPassword",
      RESET_PASSWORD: "resetPassword",
      SELECT: "select",
      VERIFY_EMAIL: "verifyEmail"
    },
    Wi = function(a, b) {
      var c = vh(a.config_, "widgetUrl");
      return Vi(a, c, b)
    },
    Xi = function(a) {
      var b = a.config_.get("widgetUrl");
      b || (b = Xg(fh(window.location.href), ""), b = Wg(b, "", void 0).toString());
      return Vi(a, b, "select")
    },
    Vi = function(a, b, c) {
      if (c) {
        a = Yi(a);
        for (var d = b.search(Qg), e = 0, f, g = []; 0 <=
          (f = Pg(b, e, a, d));) g.push(b.substring(e, f)), e = Math.min(b.indexOf("&", f) + 1 || d, d);
        g.push(b.substr(e));
        b = [g.join("").replace(Sg, "$1"), "&", a];
        null != c && b.push("=", encodeURIComponent(String(c)));
        b[1] && (c = b[0], a = c.indexOf("#"), 0 <= a && (b.push(c.substr(a)), b[0] = c = c.substr(0, a)), a = c.indexOf("?"), 0 > a ? b[1] = "?" : a == c.length - 1 && (b[1] = void 0));
        return b.join("")
      }
      return b
    },
    Zi = function(a, b) {
      var c = a.config_.get("idpConfig") || {};
      return xh(b) && c[b] ? (c = c[b].scopes || null, fa(c) ? c : []) : []
    },
    Yi = function(a) {
      return vh(a.config_, "queryParameterForWidgetMode")
    },
    $i = function(a) {
      return a.config_.get("callbacks") || {}
    },
    aj = function(a) {
      return !!a.config_.get("accountChooserEnabled")
    };
  Ti.prototype.setConfig = function(a) {
    for (var b in a) try {
      this.config_.update(b, a[b])
    } catch (c) {
      Yh('Invalid config: "' + b + '"')
    }
    wb && this.config_.update("popupMode", !1)
  };
  Ti.prototype.update = function(a, b) {
    this.config_.update(a, b)
  };
  var W = {},
    X = function(a, b, c, d) {
      var e = W[a];
      Ea(e);
      e.apply(null, Array.prototype.slice.call(arguments, 1))
    };
  /*
   Portions of this code are from MochiKit, received by
   The Closure Authors under the MIT license. All other code is Copyright
   2005-2009 The Closure Authors. All Rights Reserved.
  */
  var bj = function(a, b) {
    this.sequence_ = [];
    this.onCancelFunction_ = a;
    this.defaultScope_ = b || null;
    this.hadError_ = this.fired_ = !1;
    this.result_ = void 0;
    this.silentlyCanceled_ = this.blocking_ = this.blocked_ = !1;
    this.unhandledErrorId_ = 0;
    this.parent_ = null;
    this.branches_ = 0
  };
  bj.prototype.cancel = function(a) {
    if (this.fired_) this.result_ instanceof bj && this.result_.cancel();
    else {
      if (this.parent_) {
        var b = this.parent_;
        delete this.parent_;
        a ? b.cancel(a) : (b.branches_--, 0 >= b.branches_ && b.cancel())
      }
      this.onCancelFunction_ ? this.onCancelFunction_.call(this.defaultScope_, this) : this.silentlyCanceled_ = !0;
      this.fired_ || cj(this, new dj)
    }
  };
  bj.prototype.continue_ = function(a, b) {
    this.blocked_ = !1;
    ej(this, a, b)
  };
  var ej = function(a, b, c) {
      a.fired_ = !0;
      a.result_ = c;
      a.hadError_ = !b;
      fj(a)
    },
    hj = function(a) {
      if (a.fired_) {
        if (!a.silentlyCanceled_) throw new gj;
        a.silentlyCanceled_ = !1
      }
    };
  bj.prototype.callback = function(a) {
    hj(this);
    ij(a);
    ej(this, !0, a)
  };
  var cj = function(a, b) {
      hj(a);
      ij(b);
      ej(a, !1, b)
    },
    ij = function(a) {
      v(!(a instanceof bj), "An execution sequence may not be initiated with a blocking Deferred.")
    },
    jj = function(a, b, c, d) {
      v(!a.blocking_, "Blocking Deferreds can not be re-used");
      a.sequence_.push([b, c, d]);
      a.fired_ && fj(a)
    };
  bj.prototype.then = function(a, b, c) {
    var d, e, f = new id(function(a, b) {
      d = a;
      e = b
    });
    jj(this, d, function(a) {
      a instanceof dj ? f.cancel() : e(a)
    });
    return f.then(a, b, c)
  };
  ed(bj);
  var kj = function(a) {
      return La(a.sequence_, function(a) {
        return p(a[1])
      })
    },
    fj = function(a) {
      if (a.unhandledErrorId_ && a.fired_ && kj(a)) {
        var b = a.unhandledErrorId_,
          c = lj[b];
        c && (l.clearTimeout(c.id_), delete lj[b]);
        a.unhandledErrorId_ = 0
      }
      a.parent_ && (a.parent_.branches_--, delete a.parent_);
      for (var b = a.result_, d = c = !1; a.sequence_.length && !a.blocked_;) {
        var e = a.sequence_.shift(),
          f = e[0],
          g = e[1],
          e = e[2];
        if (f = a.hadError_ ? g : f) try {
          var k = f.call(e || a.defaultScope_, b);
          aa(k) && (a.hadError_ = a.hadError_ && (k == b || k instanceof Error),
            a.result_ = b = k);
          if (fd(b) || "function" === typeof l.Promise && b instanceof l.Promise) d = !0, a.blocked_ = !0
        } catch (w) {
          b = w, a.hadError_ = !0, kj(a) || (c = !0)
        }
      }
      a.result_ = b;
      d && (k = q(a.continue_, a, !0), d = q(a.continue_, a, !1), b instanceof bj ? (jj(b, k, d), b.blocking_ = !0) : b.then(k, d));
      c && (b = new mj(b), lj[b.id_] = b, a.unhandledErrorId_ = b.id_)
    },
    gj = function() {
      u.call(this)
    };
  t(gj, u);
  gj.prototype.message = "Deferred has already fired";
  gj.prototype.name = "AlreadyCalledError";
  var dj = function() {
    u.call(this)
  };
  t(dj, u);
  dj.prototype.message = "Deferred was canceled";
  dj.prototype.name = "CanceledError";
  var mj = function(a) {
    this.id_ = l.setTimeout(q(this.throwError, this), 0);
    this.error_ = a
  };
  mj.prototype.throwError = function() {
    v(lj[this.id_], "Cannot throw an error that is not scheduled.");
    delete lj[this.id_];
    throw this.error_;
  };
  var lj = {};
  var rj = function() {
      var a = {},
        b = a.document || document,
        c = document.createElement("SCRIPT"),
        d = {
          script_: c,
          timeout_: void 0
        },
        e = new bj(nj, d),
        f = null,
        g = null != a.timeout ? a.timeout : 5E3;
      0 < g && (f = window.setTimeout(function() {
        oj(c, !0);
        cj(e, new pj(1, "Timeout reached for loading script //www.gstatic.com/accountchooser/client.js"))
      }, g), d.timeout_ = f);
      c.onload = c.onreadystatechange = function() {
        c.readyState && "loaded" != c.readyState && "complete" != c.readyState || (oj(c, a.cleanupWhenDone || !1, f), e.callback(null))
      };
      c.onerror = function() {
        oj(c, !0, f);
        cj(e, new pj(0, "Error while loading script //www.gstatic.com/accountchooser/client.js"))
      };
      d = a.attributes || {};
      ab(d, {
        type: "text/javascript",
        charset: "UTF-8",
        src: "//www.gstatic.com/accountchooser/client.js"
      });
      Pb(c, d);
      qj(b).appendChild(c);
      return e
    },
    qj = function(a) {
      var b = a.getElementsByTagName("HEAD");
      return b && 0 != b.length ? b[0] : a.documentElement
    },
    nj = function() {
      if (this && this.script_) {
        var a = this.script_;
        a && "SCRIPT" == a.tagName && oj(a, !0, this.timeout_)
      }
    },
    oj = function(a, b, c) {
      null != c && l.clearTimeout(c);
      a.onload =
        ba;
      a.onerror = ba;
      a.onreadystatechange = ba;
      b && window.setTimeout(function() {
        Sb(a)
      }, 0)
    },
    pj = function(a, b) {
      var c = "Jsloader error (code #" + a + ")";
      b && (c += ": " + b);
      u.call(this, c);
      this.code = a
    };
  t(pj, u);
  var sj = !1,
    tj = function(a, b, c) {
      sj = !!c;
      "undefined" == typeof accountchooser || aj(a.config_) || Yh("Account chooser already enabled!");
      "undefined" == typeof accountchooser && ki() && aj(a.config_) ? (a = rj(), jj(a, b, null, void 0), jj(a, null, b, void 0)) : b()
    },
    uj = function(a, b) {
      var c = $i(a.config_).accountChooserInvoked || null;
      c ? c(b) : b()
    },
    vj = function(a, b, c) {
      (a = $i(a.config_).accountChooserResult || null) ? a(b, c): c()
    },
    wj = function(a, b, c, d, e) {
      d ? (X("callback", a, b), sj && c()) : uj(a, function() {
        rh(function(d) {
          vj(a, d ? "empty" : "unavailable",
            function() {
              X("signIn", a, b);
              (d || sj) && c()
            })
        }, Ni(a.appId_), e)
      })
    },
    zj = function(a, b, c, d) {
      var e = function(a) {
        a = Y(a);
        xj(b, c, a);
        d()
      };
      vj(b, "accountSelected", function() {
        Mi(Ii, !1, b.appId_);
        b.auth_.fetchProvidersForEmail(a.getEmail()).then(function(e) {
          yj(b, c, e, a.getEmail(), a.displayName_ || null || void 0);
          d()
        }, e)
      })
    },
    Aj = function(a, b, c, d) {
      vj(b, a ? "addAccount" : "unavailable", function() {
        X("signIn", b, c);
        (a || sj) && d()
      })
    },
    Bj = function(a, b, c, d) {
      var e = function() {
        var b = $i(a.config_).uiShown || null;
        b && b()
      };
      qh(function() {
        wj(a, b, e,
          c, d)
      }, function(c) {
        zj(c, a, b, e)
      }, function(c) {
        Aj(c, a, b, e)
      }, a.config_.config_.get("acUiConfig") || null)
    },
    Dj = function(a, b) {
      var c = a.auth_.currentUser;
      if (!c) throw Error("User not logged in.");
      var d = new kh(c.email, c.displayName, c.photoURL, b && b.provider);
      null != Ki(Ii, a.appId_) && !Ki(Ii, a.appId_) || Oi(d, a.appId_);
      Li(Ii, a.appId_);
      var d = $i(a.config_).signInSuccess || null,
        e = Ki(Hi, a.appId_) || null || void 0;
      Li(Hi, a.appId_);
      window.opener ? (d && !d(c, b, e) || window.opener.location.assign(Cj(a, e)), d || window.close()) : d && !d(c, b,
        e) || Qi(Cj(a, e))
    },
    Cj = function(a, b) {
      var c = b || a.config_.config_.get("signInSuccessUrl");
      if (!c) throw Error("No redirect url has been found. You must either specify a signInSuccessUrl in the configuration, pass in a redirect url to the widget URL, or return false from the callback.");
      return c
    },
    Y = function(a) {
      a = a.code;
      M(m(a) || a instanceof I, "code", a, "string|goog.soy.data.SanitizedContent");
      var b = "";
      switch (ha(a) ? a.toString() : a) {
        case "auth/email-already-in-use":
          b += "The email address is already used by another account";
          break;
        case "auth/requires-recent-login":
          b += Ie();
          break;
        case "auth/too-many-requests":
          b += "You have entered an incorrect password too many times. Please try again in a few minutes.";
          break;
        case "auth/user-not-found":
          b += "That email address doesn't match an existing account";
          break;
        case "auth/user-token-expired":
          b += Ie();
          break;
        case "auth/weak-password":
          b += "Strong passwords have at least 6 characters and a mix of letters and numbers";
          break;
        case "auth/wrong-password":
          b += "The email and password you entered don't match";
          break;
        default:
          b += "Error code: " + a
      }
      return pe(b).toString()
    },
    Ej = function(a, b, c) {
      var d = wh[c] && firebase.auth[wh[c]] ? new firebase.auth[wh[c]] : null;
      c = Zi(a.config_, c);
      if (d && d.addScope)
        for (var e = 0; e < c.length; e++) d.addScope(c[e]);
      gg(b, q(a.auth_.signInWithRedirect, a.auth_), [d], function() {}, function(a) {
        Yh("signInWithRedirect: " + a.code);
        a = Y(a);
        b.showInfoBar(a)
      })
    },
    Fj = function(a, b) {
      var c = b.checkAndGetEmail(),
        d = b.checkAndGetPassword();
      c ? d ? gg(b, q(a.auth_.signInWithEmailAndPassword, a.auth_), [c, d], function() {
          Dj(a)
        },
        function(a) {
          switch (a.code) {
            case "auth/email-exists":
              H(b.getEmailElement(), !1);
              Vd(b.getEmailErrorElement(), Y(a));
              break;
            case "auth/too-many-requests":
            case "auth/wrong-password":
              H(b.getPasswordElement(), !1);
              Vd(b.getPasswordErrorElement(), Y(a));
              break;
            default:
              Yh("verifyPassword: " + a.message), b.showInfoBar(Y(a))
          }
        }) : b.getPasswordElement().focus() : b.getEmailElement().focus()
    },
    xj = function(a, b, c) {
      X("providerSignIn", a, b, c)
    },
    yj = function(a, b, c, d, e) {
      c.length ? Na(c, firebase.auth.EmailAuthProvider.PROVIDER_ID) ? X("passwordSignIn",
        a, b, d) : (Mi(Gi, (new Zh(d)).toPlainObject(), a.appId_), X("federatedSignIn", a, b, d, c[0])) : X("passwordSignUp", a, b, d, e)
    };
  var Gj = function(a) {
      var b = window.location.href;
      a = Yi(a.config_);
      var b = Rg(b, a) || "",
        c;
      for (c in Ui)
        if (Ui[c].toLowerCase() == b.toLowerCase()) return Ui[c];
      return "callback"
    },
    Hj = function(a) {
      var b = window.location.href;
      a = vh(a.config_.config_, "queryParameterForSignInSuccessUrl");
      return Rg(b, a)
    },
    Ij = function() {
      return Da(Rg(window.location.href, "oobCode"))
    },
    Kj = function(a, b) {
      if (oi(new pi) && oi(new qi)) Jj(a, b);
      else {
        var c = Si(b);
        (new Eg(pe("The browser you are using does not support Web Storage. Please try again in a different browser.").toString())).render(c)
      }
    },
    Jj = function(a, b) {
      var c = Si(b);
      switch (Gj(a)) {
        case "callback":
          X("callback", a, c);
          break;
        case "resetPassword":
          X("passwordReset", a, c, Ij());
          break;
        case "recoverEmail":
          X("emailChangeRevocation", a, c, Ij());
          break;
        case "verifyEmail":
          X("emailVerification", a, c, Ij());
          break;
        case "manageAccount":
          X("accountManage", a, c, "true" === Rg(window.location.href, "inWebview"));
          break;
        case "recoverPassword":
          X("passwordRecovery", a, c, Da(Rg(window.location.href, "identifier")), !0);
          break;
        case "select":
          var d = Hj(a);
          d && Mi(Hi, d, a.appId_);
          tj(a,
            function() {
              Bj(a, c, !0)
            }, !0);
          return;
        default:
          throw Error("Unhandled widget operation.");
      }(d = $i(a.config_).uiShown || null) && d()
    };
  var Lj = function(a, b) {
      this.auth_ = a;
      this.appId_ = b;
      this.config_ = new Ti;
      this.widgetEventDispatcher_ = null
    },
    Mj = null;
  Lj.prototype.start = function(a, b) {
    var c = this;
    if (Mj) throw Error("UI Widget is already initialized on the page. Only one widget instance can be initialized per page.");
    this.setConfig(b);
    if ("complete" == l.document.readyState) {
      var d = Si(a);
      Mj = d;
      Nj(c, d);
      Kj(c, a)
    } else zc(window, "load", function() {
      var b = Si(a);
      Mj = b;
      Nj(c, b);
      Kj(c, a)
    })
  };
  var Nj = function(a, b) {
    a.currentPageId_ = null;
    a.widgetEventDispatcher_ = new $f(b);
    a.widgetEventDispatcher_.register();
    sc(a.widgetEventDispatcher_, "pageEnter", function(b) {
      b = b && b.pageId;
      if (a.currentPageId_ != b) {
        var d = $i(a.config_).uiChanged || null;
        d && d(a.currentPageId_, b);
        a.currentPageId_ = b
      }
    })
  };
  Lj.prototype.setConfig = function(a) {
    this.config_.setConfig(a)
  };
  Lj.prototype.signIn = function() {
    var a = Wi(this.config_, "select");
    this.config_.config_.get("popupMode") ? Ri(a) : Qi(a)
  };
  Lj.prototype.manageAccount = function() {
    var a = Wi(this.config_, "manageAccount");
    this.config_.config_.get("popupMode") ? Ri(a) : Qi(a)
  };
  var Pj = function(a, b, c) {
      var d = new jg(c, function() {
        Oj(a, b, c)
      });
      og(b, d)
    },
    Oj = function(a, b, c) {
      var d = new sg(function() {
        var c = d.checkAndGetEmail();
        c && gg(b, q(a.auth_.currentUser.updateEmail, a.auth_.currentUser), [c], function() {
          Pj(a, b, v(c))
        }, function(a) {
          d.showInfoBar(Y(a))
        })
      }, function() {
        Pj(a, b, c)
      }, c);
      og(b, d)
    },
    Rj = function(a, b) {
      var c = new kg(function() {
        Qj(a, b)
      });
      pg(b, c)
    },
    Qj = function(a, b) {
      var c = new Fg(function() {
        var d = c.checkAndGetNewPassword();
        d && gg(b, q(a.auth_.currentUser.updatePassword, a.auth_.currentUser), [d], function() {
          Sj(a, b)
        }, function(a) {
          Yh("resetPassword: " + vi(a));
          c.showInfoBar(Y(a))
        })
      }, function() {
        Rj(a, b)
      });
      pg(b, c)
    },
    Sj = function(a, b) {
      var c = new Cg(function() {
        a.auth_.signOut();
        Qi(Xi(a.config_))
      });
      pg(b, c)
    },
    Tj = function(a, b, c) {
      var d = new lg(c, function(c) {
        gg(b, q(a.auth_.currentUser.unlink, a.auth_.currentUser), [c], function(c) {
          Tj(a, b, c.providerData || [])
        }, function(a) {
          Yh("setAccountInfo: " + vi(a));
          d.showInfoBar(Y(a))
        })
      }, vh(a.config_.config_, "siteName"));
      qg(b, d)
    };
  W.accountManage = function(a, b, c) {
    var d = a.auth_.onAuthStateChanged(function(e) {
      d();
      e ? e.reload().then(function() {
        var d = new mg(!c);
        d.render(b);
        Pj(a, d, e.email);
        Rj(a, d);
        Tj(a, d, e.providerData || [])
      }, function(b) {
        Yh("getAccountInfo: " + vi(b));
        Qi(Xi(a.config_))
      }) : Qi(Xi(a.config_))
    })
  };
  var Yj = function(a, b, c) {
      if (c.user) {
        var d = Pi(a.appId_),
          e = d && d.getEmail();
        if (e && !Uj(c.user, e)) Vj(a, b, c.user, c.credential);
        else {
          var f = d && d.credential_;
          f ? c.user.link(f).then(function() {
            Wj(a, b, f)
          }, function(c) {
            Xj(a, b, c)
          }) : Wj(a, b, c.credential)
        }
      } else c = eg(b), b.dispose(), Li(Gi, a.appId_), xj(a, c)
    },
    Wj = function(a, b, c) {
      b.dispose();
      Li(Gi, a.appId_);
      Dj(a, c)
    },
    Xj = function(a, b, c) {
      var d = eg(b);
      Li(Gi, a.appId_);
      c = Y(c);
      b.dispose();
      xj(a, d, c)
    },
    Zj = function(a, b, c) {
      var d = eg(b);
      a.auth_.fetchProvidersForEmail(c).then(function(e) {
        b.dispose();
        "password" == e[0] ? X("passwordLinking", a, d, c) : X("federatedLinking", a, d, c, e[0])
      }, function(c) {
        Xj(a, b, c)
      })
    },
    Vj = function(a, b, c, d) {
      var e = eg(b);
      b.dispose();
      X("emailMismatch", a, e, c, d)
    },
    Uj = function(a, b) {
      if (b == a.email) return !0;
      if (a.providerData)
        for (var c = 0; c < a.providerData.length; c++)
          if (b == a.providerData[c].email) return !0;
      return !1
    };
  W.callback = function(a, b) {
    var c = new rg;
    c.render(b);
    a.auth_.getRedirectResult().then(function(b) {
      Yj(a, c, b)
    }, function(b) {
      if (b && b.email && b.credential) {
        var e = $h(b);
        Mi(Gi, e.toPlainObject(), a.appId_);
        Zj(a, c, b.email)
      } else Xj(a, c, b)
    })
  };
  var ak = function(a, b, c, d) {
    var e = eg(b);
    a.auth_.signOut().then(function() {
      b.dispose();
      c.credential_ ? X("federatedLinking", a, e, c.getEmail(), d) : X("federatedSignIn", a, e, c.getEmail(), d)
    }, function(a) {
      Yh("getToken: " + a.code);
      a = Y(a.code);
      b.showInfoBar(a)
    })
  };
  W.emailMismatch = function(a, b, c, d) {
    var e = Pi(a.appId_);
    if (e) {
      var f = new vg(c.email, e.getEmail(), function() {
        f.dispose();
        Li(Gi, a.appId_);
        Dj(a, d)
      }, function() {
        ak(a, f, e, d.provider)
      });
      f.render(b)
    } else xj(a, b)
  };
  W.federatedLinking = function(a, b, c, d) {
    var e = Pi(a.appId_);
    if (e && e.credential_) {
      var f = new wg(c, d, function() {
        Ej(a, f, d)
      });
      f.render(b)
    } else xj(a, b)
  };
  W.federatedSignIn = function(a, b, c, d) {
    var e = new wg(c, d, function() {
      Ej(a, e, d)
    });
    e.render(b)
  };
  var ck = function(a, b, c, d) {
      var e = c.checkAndGetNewPassword();
      e && gg(c, q(a.auth_.confirmPasswordReset, a.auth_), [d, e], function() {
        c.dispose();
        (new Ag).render(b)
      }, function(a) {
        bk(b, c, a)
      })
    },
    bk = function(a, b, c) {
      "auth/weak-password" == (c && c.code) ? (a = Y(c), H(b.getNewPasswordElement(), !1), Vd(b.getNewPasswordErrorElement(), a), b.getNewPasswordElement().focus()) : (b && b.dispose(), (new Bg).render(a))
    },
    dk = function(a, b, c) {
      var d = new tg(c, function() {
        gg(d, q(a.auth_.sendPasswordResetEmail, a.auth_), [c], function() {
          d.dispose();
          d = new xg(c);
          d.render(b)
        }, function() {
          d.showInfoBar(pe("Unable to send password reset code to specified email.").toString())
        })
      });
      d.render(b)
    };
  W.passwordReset = function(a, b, c) {
    a.auth_.verifyPasswordResetCode(c).then(function(d) {
      var e = new Ig(d, function() {
        ck(a, b, e, c)
      });
      e.render(b)
    }, function() {
      bk(b)
    })
  };
  W.emailChangeRevocation = function(a, b, c) {
    var d = null;
    a.auth_.checkActionCode(c).then(function(b) {
      d = b.data.email;
      return a.auth_.applyActionCode(c)
    }).then(function() {
      dk(a, b, d)
    }, function() {
      (new Dg).render(b)
    })
  };
  W.emailVerification = function(a, b, c) {
    a.auth_.applyActionCode(c).then(function() {
      (new yg).render(b)
    }, function() {
      (new zg).render(b)
    })
  };
  var ek = function(a, b, c, d) {
    var e = b.checkAndGetPassword();
    e ? gg(b, q(a.auth_.signInWithEmailAndPassword, a.auth_), [c, e], function(b) {
      return b.link(d).then(function() {
        Dj(a, d)
      })
    }, function(a) {
      switch (a.code) {
        case "auth/wrong-password":
          H(b.getPasswordElement(), !1);
          Vd(b.getPasswordErrorElement(), Y(a));
          break;
        case "auth/too-many-requests":
          b.showInfoBar(Y(a));
          break;
        default:
          Yh("signInWithEmailAndPassword: " + a.message), b.showInfoBar(Y(a))
      }
    }) : b.getPasswordElement().focus()
  };
  W.passwordLinking = function(a, b, c) {
    var d = Pi(a.appId_);
    Li(Gi, a.appId_);
    var e = d && d.credential_;
    if (e) {
      var f = new Gg(c, function() {
        ek(a, f, c, e)
      }, function() {
        f.dispose();
        X("passwordRecovery", a, b, c)
      });
      f.render(b)
    } else xj(a, b)
  };
  var fk = function(a, b) {
    var c = b.checkAndGetEmail();
    if (c) {
      var d = eg(b);
      gg(b, q(a.auth_.sendPasswordResetEmail, a.auth_), [c], function() {
        b.dispose();
        var e = new xg(c, function() {
          e.dispose();
          xj(a, d)
        });
        e.render(d)
      }, function(a) {
        H(b.getEmailElement(), !1);
        Vd(b.getEmailErrorElement(), Y(a))
      })
    } else b.getEmailElement().focus()
  };
  W.passwordRecovery = function(a, b, c, d) {
    var e = new Hg(function() {
      fk(a, e)
    }, d ? void 0 : function() {
      e.dispose();
      xj(a, b)
    }, c);
    e.render(b)
  };
  W.passwordSignIn = function(a, b, c) {
    var d = new Jg(function() {
      Fj(a, d)
    }, function() {
      var c = d.getEmail();
      d.dispose();
      X("passwordRecovery", a, b, c)
    }, c);
    d.render(b)
  };
  var gk = function(a, b) {
    var c = b.checkAndGetEmail(),
      d = b.checkAndGetName(),
      e = b.checkAndGetNewPassword();
    c ? d ? e ? gg(b, q(a.auth_.createUserWithEmailAndPassword, a.auth_), [c, e], function(b) {
      return b.updateProfile({
        displayName: d
      }).then(function() {
        Dj(a)
      })
    }, function(a) {
      var c = Y(a);
      switch (a.code) {
        case "auth/email-already-in-use":
          H(b.getEmailElement(), !1);
          Vd(b.getEmailErrorElement(), c);
          b.getEmailElement().focus();
          break;
        case "auth/too-many-requests":
          c = pe("Too many account requests are coming from your IP address. Try again in a few minutes.").toString();
        case "auth/operation-not-allowed":
        case "auth/weak-password":
          H(b.getNewPasswordElement(), !1);
          Vd(b.getNewPasswordErrorElement(), c);
          break;
        default:
          Yh("setAccountInfo: " + vi(a)), b.showInfoBar(c)
      }
    }) : b.getNewPasswordElement().focus() : b.getNameElement().focus() : b.getEmailElement().focus()
  };
  W.passwordSignUp = function(a, b, c, d, e) {
    var f = function() {
        g.dispose();
        xj(a, b)
      },
      g = new Kg(a.config_.config_.get("tosUrl") || null, function() {
        gk(a, g)
      }, e ? void 0 : f, c, d);
    g.render(b)
  };
  W.providerSignIn = function(a, b, c) {
    var d = new Lg(function(c) {
      c == firebase.auth.EmailAuthProvider.PROVIDER_ID ? (d.dispose(), tj(a, function() {
        mh ? uj(a, function() {
          rh(function(c) {
            vj(a, c ? "empty" : "unavailable", function() {
              X("signIn", a, b)
            })
          }, Ni(a.appId_), Xi(a.config_))
        }) : Bj(a, b, !1, Xi(a.config_))
      }, !1)) : Ej(a, d, c)
    }, Ja(a.config_.config_.get("signInOptions") || [], xh));
    d.render(b);
    c && d.showInfoBar(c)
  };
  var hk = function(a, b) {
    var c = b.checkAndGetEmail() || "";
    if (c) {
      var d = eg(b);
      gg(b, q(a.auth_.fetchProvidersForEmail, a.auth_), [c], function(e) {
        var f = aj(a.config_);
        Mi(Ii, f, a.appId_);
        b.dispose();
        yj(a, d, e, c)
      }, function() {})
    }
  };
  W.signIn = function(a, b, c, d) {
    var e = new Mg(function() {
      hk(a, e)
    }, c);
    e.render(b);
    d && e.showInfoBar(d)
  };
  ma("firebaseui.auth.AuthUI", Lj);
  ma("firebaseui.auth.AuthUI.prototype.start", Lj.prototype.start);
  ma("firebaseui.auth.AuthUI.prototype.setConfig", Lj.prototype.setConfig);
  ma("firebaseui.auth.AuthUI.prototype.signIn", Lj.prototype.signIn);
  ma("firebaseui.auth.AuthUI.prototype.manageAccount", Lj.prototype.manageAccount);
  /*

   Copyright 2015 Google Inc. All Rights Reserved.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
  */
  var Z = {
      upgradeDom: function() {},
      upgradeElement: function() {},
      upgradeElements: function() {},
      upgradeAllRegistered: function() {},
      registerUpgradedCallback: function() {},
      register: function() {},
      downgradeElements: function() {}
    },
    Z = function() {
      function a(a, b) {
        for (var c = 0; c < k.length; c++)
          if (k[c].className === a) return "undefined" !== typeof b && (k[c] = b), k[c];
        return !1
      }

      function b(a) {
        a = a.getAttribute("data-upgraded");
        return null === a ? [""] : a.split(",")
      }

      function c(a, c) {
        return -1 !== b(a).indexOf(c)
      }

      function d(b, c) {
        if ("undefined" ===
          typeof b && "undefined" === typeof c)
          for (var f = 0; f < k.length; f++) d(k[f].className, k[f].cssClass);
        else {
          "undefined" === typeof c && (f = a(b)) && (c = f.cssClass);
          for (var f = document.querySelectorAll("." + c), g = 0; g < f.length; g++) e(f[g], b)
        }
      }

      function e(d, e) {
        if (!("object" === typeof d && d instanceof Element)) throw Error("Invalid argument provided to upgrade MDL element.");
        var f = b(d),
          g = [];
        if (e) c(d, e) || g.push(a(e));
        else {
          var ik = d.classList;
          k.forEach(function(a) {
            ik.contains(a.cssClass) && -1 === g.indexOf(a) && !c(d, a.className) && g.push(a)
          })
        }
        for (var Le =
            0, jk = g.length, ea; Le < jk; Le++) {
          if (ea = g[Le]) {
            f.push(ea.className);
            d.setAttribute("data-upgraded", f.join(","));
            var Me = new ea.classConstructor(d);
            Me.mdlComponentConfigInternal_ = ea;
            w.push(Me);
            for (var Ne = 0, kk = ea.callbacks.length; Ne < kk; Ne++) ea.callbacks[Ne](d);
            ea.widget && (d[ea.className] = Me)
          } else throw Error("Unable to find a registered component for the given class.");
          "CustomEvent" in window && "function" === typeof window.CustomEvent ? ea = new Event("mdl-componentupgraded", {
            bubbles: !0,
            cancelable: !1
          }) : (ea = document.createEvent("Events"),
            ea.initEvent("mdl-componentupgraded", !0, !0));
          d.dispatchEvent(ea)
        }
      }

      function f(a) {
        Array.isArray(a) || (a = a instanceof Element ? [a] : Array.prototype.slice.call(a));
        for (var b = 0, c = a.length, d; b < c; b++) d = a[b], d instanceof HTMLElement && (e(d), 0 < d.children.length && f(d.children))
      }

      function g(a) {
        if (a) {
          w.splice(w.indexOf(a), 1);
          var b = a.element_.getAttribute("data-upgraded").split(",");
          b.splice(b.indexOf(a.mdlComponentConfigInternal_.classAsString), 1);
          a.element_.setAttribute("data-upgraded", b.join(","));
          "CustomEvent" in
          window && "function" === typeof window.CustomEvent ? new Event("mdl-componentdowngraded", {
            bubbles: !0,
            cancelable: !1
          }) : (a = document.createEvent("Events"), a.initEvent("mdl-componentdowngraded", !0, !0))
        }
      }
      var k = [],
        w = [];
      return {
        upgradeDom: d,
        upgradeElement: e,
        upgradeElements: f,
        upgradeAllRegistered: function() {
          for (var a = 0; a < k.length; a++) d(k[a].className)
        },
        registerUpgradedCallback: function(b, c) {
          var d = a(b);
          d && d.callbacks.push(c)
        },
        register: function(b) {
          var c = !0;
          if ("undefined" !== typeof b.widget || "undefined" !== typeof b.widget) c =
            b.widget || b.widget;
          var d = {
            classConstructor: b.constructor || b.constructor,
            className: b.classAsString || b.classAsString,
            cssClass: b.cssClass || b.cssClass,
            widget: c,
            callbacks: []
          };
          k.forEach(function(a) {
            if (a.cssClass === d.cssClass) throw Error("The provided cssClass has already been registered: " + a.cssClass);
            if (a.className === d.className) throw Error("The provided className has already been registered");
          });
          if (b.constructor.prototype.hasOwnProperty("mdlComponentConfigInternal_")) throw Error("MDL component classes must not have mdlComponentConfigInternal_ defined as a property.");
          a(b.classAsString, d) || k.push(d)
        },
        downgradeElements: function(a) {
          var b = function(a) {
            w.filter(function(b) {
              return b.element_ === a
            }).forEach(g)
          };
          if (a instanceof Array || a instanceof NodeList)
            for (var c = 0; c < a.length; c++) b(a[c]);
          else if (a instanceof Node) b(a);
          else throw Error("Invalid argument provided to downgrade MDL nodes.");
        }
      }
    }();
  Z.upgradeDom = Z.upgradeDom;
  Z.upgradeElement = Z.upgradeElement;
  Z.upgradeElements = Z.upgradeElements;
  Z.upgradeAllRegistered = Z.upgradeAllRegistered;
  Z.registerUpgradedCallback = Z.registerUpgradedCallback;
  Z.register = Z.register;
  Z.downgradeElements = Z.downgradeElements;
  window.componentHandler = Z;
  window.componentHandler = Z;
  window.addEventListener("load", function() {
    "classList" in document.createElement("div") && "querySelector" in document && "addEventListener" in window && Array.prototype.forEach ? (document.documentElement.classList.add("mdl-js"), Z.upgradeAllRegistered()) : (Z.upgradeElement = function() {}, Z.register = function() {})
  });
  (function() {
    var a = function(a) {
      this.element_ = a;
      this.init()
    };
    window.MaterialButton = a;
    a.prototype.Constant_ = {};
    a.prototype.CssClasses_ = {
      RIPPLE_EFFECT: "mdl-js-ripple-effect",
      RIPPLE_CONTAINER: "mdl-button__ripple-container",
      RIPPLE: "mdl-ripple"
    };
    a.prototype.blurHandler_ = function(a) {
      a && this.element_.blur()
    };
    a.prototype.disable = function() {
      this.element_.disabled = !0
    };
    a.prototype.disable = a.prototype.disable;
    a.prototype.enable = function() {
      this.element_.disabled = !1
    };
    a.prototype.enable = a.prototype.enable;
    a.prototype.init =
      function() {
        if (this.element_) {
          if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
            var a = document.createElement("span");
            a.classList.add(this.CssClasses_.RIPPLE_CONTAINER);
            this.rippleElement_ = document.createElement("span");
            this.rippleElement_.classList.add(this.CssClasses_.RIPPLE);
            a.appendChild(this.rippleElement_);
            this.boundRippleBlurHandler = this.blurHandler_.bind(this);
            this.rippleElement_.addEventListener("mouseup", this.boundRippleBlurHandler);
            this.element_.appendChild(a)
          }
          this.boundButtonBlurHandler =
            this.blurHandler_.bind(this);
          this.element_.addEventListener("mouseup", this.boundButtonBlurHandler);
          this.element_.addEventListener("mouseleave", this.boundButtonBlurHandler)
        }
      };
    Z.register({
      constructor: a,
      classAsString: "MaterialButton",
      cssClass: "mdl-js-button",
      widget: !0
    })
  })();
  (function() {
    var a = function(a) {
      this.element_ = a;
      this.init()
    };
    window.MaterialProgress = a;
    a.prototype.Constant_ = {};
    a.prototype.CssClasses_ = {
      INDETERMINATE_CLASS: "mdl-progress__indeterminate"
    };
    a.prototype.setProgress = function(a) {
      this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS) || (this.progressbar_.style.width = a + "%")
    };
    a.prototype.setProgress = a.prototype.setProgress;
    a.prototype.setBuffer = function(a) {
      this.bufferbar_.style.width = a + "%";
      this.auxbar_.style.width = 100 - a + "%"
    };
    a.prototype.setBuffer =
      a.prototype.setBuffer;
    a.prototype.init = function() {
      if (this.element_) {
        var a = document.createElement("div");
        a.className = "progressbar bar bar1";
        this.element_.appendChild(a);
        this.progressbar_ = a;
        a = document.createElement("div");
        a.className = "bufferbar bar bar2";
        this.element_.appendChild(a);
        this.bufferbar_ = a;
        a = document.createElement("div");
        a.className = "auxbar bar bar3";
        this.element_.appendChild(a);
        this.auxbar_ = a;
        this.progressbar_.style.width = "0%";
        this.bufferbar_.style.width = "100%";
        this.auxbar_.style.width =
          "0%";
        this.element_.classList.add("is-upgraded")
      }
    };
    Z.register({
      constructor: a,
      classAsString: "MaterialProgress",
      cssClass: "mdl-js-progress",
      widget: !0
    })
  })();
  (function() {
    var a = function(a) {
      this.element_ = a;
      this.maxRows = this.Constant_.NO_MAX_ROWS;
      this.init()
    };
    window.MaterialTextfield = a;
    a.prototype.Constant_ = {
      NO_MAX_ROWS: -1,
      MAX_ROWS_ATTRIBUTE: "maxrows"
    };
    a.prototype.CssClasses_ = {
      LABEL: "mdl-textfield__label",
      INPUT: "mdl-textfield__input",
      IS_DIRTY: "is-dirty",
      IS_FOCUSED: "is-focused",
      IS_DISABLED: "is-disabled",
      IS_INVALID: "is-invalid",
      IS_UPGRADED: "is-upgraded",
      HAS_PLACEHOLDER: "has-placeholder"
    };
    a.prototype.onKeyDown_ = function(a) {
      var c = a.target.value.split("\n").length;
      13 === a.keyCode && c >= this.maxRows && a.preventDefault()
    };
    a.prototype.onFocus_ = function() {
      this.element_.classList.add(this.CssClasses_.IS_FOCUSED)
    };
    a.prototype.onBlur_ = function() {
      this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)
    };
    a.prototype.onReset_ = function() {
      this.updateClasses_()
    };
    a.prototype.updateClasses_ = function() {
      this.checkDisabled();
      this.checkValidity();
      this.checkDirty();
      this.checkFocus()
    };
    a.prototype.checkDisabled = function() {
      this.input_.disabled ? this.element_.classList.add(this.CssClasses_.IS_DISABLED) :
        this.element_.classList.remove(this.CssClasses_.IS_DISABLED)
    };
    a.prototype.checkDisabled = a.prototype.checkDisabled;
    a.prototype.checkFocus = function() {
      this.element_.querySelector(":focus") ? this.element_.classList.add(this.CssClasses_.IS_FOCUSED) : this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)
    };
    a.prototype.checkFocus = a.prototype.checkFocus;
    a.prototype.checkValidity = function() {
      this.input_.validity && (this.input_.validity.valid ? this.element_.classList.remove(this.CssClasses_.IS_INVALID) : this.element_.classList.add(this.CssClasses_.IS_INVALID))
    };
    a.prototype.checkValidity = a.prototype.checkValidity;
    a.prototype.checkDirty = function() {
      this.input_.value && 0 < this.input_.value.length ? this.element_.classList.add(this.CssClasses_.IS_DIRTY) : this.element_.classList.remove(this.CssClasses_.IS_DIRTY)
    };
    a.prototype.checkDirty = a.prototype.checkDirty;
    a.prototype.disable = function() {
      this.input_.disabled = !0;
      this.updateClasses_()
    };
    a.prototype.disable = a.prototype.disable;
    a.prototype.enable = function() {
      this.input_.disabled = !1;
      this.updateClasses_()
    };
    a.prototype.enable =
      a.prototype.enable;
    a.prototype.change = function(a) {
      this.input_.value = a || "";
      this.updateClasses_()
    };
    a.prototype.change = a.prototype.change;
    a.prototype.init = function() {
      if (this.element_ && (this.input_ = this.element_.querySelector("." + this.CssClasses_.INPUT))) {
        this.input_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE) && (this.maxRows = parseInt(this.input_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE), 10), isNaN(this.maxRows) && (this.maxRows = this.Constant_.NO_MAX_ROWS));
        this.input_.hasAttribute("placeholder") &&
          this.element_.classList.add(this.CssClasses_.HAS_PLACEHOLDER);
        this.boundUpdateClassesHandler = this.updateClasses_.bind(this);
        this.boundFocusHandler = this.onFocus_.bind(this);
        this.boundBlurHandler = this.onBlur_.bind(this);
        this.boundResetHandler = this.onReset_.bind(this);
        this.input_.addEventListener("input", this.boundUpdateClassesHandler);
        this.input_.addEventListener("focus", this.boundFocusHandler);
        this.input_.addEventListener("blur", this.boundBlurHandler);
        this.input_.addEventListener("reset", this.boundResetHandler);
        this.maxRows !== this.Constant_.NO_MAX_ROWS && (this.boundKeyDownHandler = this.onKeyDown_.bind(this), this.input_.addEventListener("keydown", this.boundKeyDownHandler));
        var a = this.element_.classList.contains(this.CssClasses_.IS_INVALID);
        this.updateClasses_();
        this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
        a && this.element_.classList.add(this.CssClasses_.IS_INVALID);
        this.input_.hasAttribute("autofocus") && (this.element_.focus(), this.checkFocus())
      }
    };
    Z.register({
      constructor: a,
      classAsString: "MaterialTextfield",
      cssClass: "mdl-js-textfield",
      widget: !0
    })
  })();
})()
