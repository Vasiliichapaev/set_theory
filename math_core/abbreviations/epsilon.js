const equivalence = require("./equivalence");
const quant_all = require("./quant_all");
const { tau, belong } = require("../math_objects");

exports = module.exports = (R, x) => {
    let y = R.theory.letter(x, R);
    let sc = equivalence(belong(x, y), R);
    sc = quant_all(sc, x);
    sc = tau(sc, y);
    return sc;
};
