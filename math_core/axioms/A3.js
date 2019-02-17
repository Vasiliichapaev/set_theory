const { equal, pair } = require("../math_objects");
const implication = require("../abbreviations/implication");
const conjunction = require("../abbreviations/conjunction");
const quant_all = require("../abbreviations/quant_all");
const { theory } = require("../math_objects");

// Аксиома пары

exports = module.exports = () => {
    let t = theory();
    let x = t.letter();
    let y = t.letter(x);
    let a = t.letter(x, y);
    let b = t.letter(x, y, a);
    let sc = implication(equal(pair(x, y), pair(a, b)), conjunction(equal(x, a), equal(y, b)));
    sc = quant_all(sc, b);
    sc = quant_all(sc, y);
    sc = quant_all(sc, a);
    sc = quant_all(sc, x);
    sc.axiom();
    t.close();
};
