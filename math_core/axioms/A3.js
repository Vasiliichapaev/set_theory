const { equal, pair, implication, conjunction, quant_all } = require("../abbreviations");

// Аксиома пары

exports = module.exports = t => {
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
    return ax;
};
