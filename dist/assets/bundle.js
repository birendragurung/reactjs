!function (e) {
    var t = {};

    function r(n) {
        if (t[n]) return t[n].exports;
        var o = t[n] = {i: n, l: !1, exports: {}};
        return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }

    r.m = e, r.c = t, r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {configurable: !1, enumerable: !0, get: n})
    }, r.r = function (e) {
        Object.defineProperty(e, "__esModule", {value: !0})
    }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "assets", r(r.s = 0)
}([function (e, t, r) {
    "use strict";
    React.createElement;
    (0, ReactDOM.render)(React.createElement("h1", {
        id: "title",
        className: "header",
        style: {backgroundColor: "orange", color: "white", fontFamily: "verdana"}
    }, "Hello world"), document.getElementById("react-container"))
}]);