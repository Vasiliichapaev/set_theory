const { equal, pair } = require("../math_objects");
const implication = require("../abbreviations/implication");
const conjunction = require("../abbreviations/conjunction");
const quant_all = require("../abbreviations/quant_all");

// Аксиома пары

exports = module.exports = (x, y, a, b) => {
    let sc = implication(equal(pair(x, y), pair(a, b)), conjunction(equal(x, a), equal(y, b)));
    sc = quant_all(sc, b);
    sc = quant_all(sc, y);
    sc = quant_all(sc, a);
    sc = quant_all(sc, x);
    sc.axiom();
    return sc;
};
