let vigenere = {},
    helper = {};
vigenere.encode = function(e, n) {
    let r = helper.alphabet(),
        t = helper.keywordResize(e, n);
    return e.split("").map(function(e, n) {
        let i = r.indexOf(e) + r.indexOf(t[n]);
        return i > r.length && (i -= r.length), r[i]
    }).join("")
}, vigenere.decode = function(e, n) {
    let r = helper.alphabet(),
        t = helper.keywordResize(e, n);
    return e.split("").map(function(e, n) {
        let i = r.indexOf(e) - r.indexOf(t[n]);
        return i < 0 && (i += r.length), r[i]
    }).join("")
}, helper.keywordResize = function(e, n) {
    for (var r = "", t = n.split(""), i = 0; i < e.length; i++) {
        r += t[i % n.length]
    }
    return r
}, helper.alphabet = function() {
    let e = "abcdefghijklmnopqrstuvwxyz";
    return e = e.split("")
};
