const tau = require("./tau");
const belong = require("./belong");
const equivalence = require("./equivalence");
const quant_all = require("./quant_all");

// Множество всех x таких что R

exports = module.exports = (R, x) => {
    let y = R.theory.letter(x, R);
    let sc = equivalence(belong(x, y), R);
    sc = quant_all(sc, x);
    sc = tau(sc, y);
    return sc;
};
