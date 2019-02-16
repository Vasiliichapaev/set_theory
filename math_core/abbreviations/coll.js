const { belong } = require("../math_objects");
const equivalence = require("./equivalence");
const quant_all = require("./quant_all");
const quant_exist = require("./quant_exist");

// Колективизирующие соотношение

exports = module.exports = (R, x) => {
    let y = R.theory.letter(x, R);
    let sc = equivalence(belong(x, y), R);
    sc = quant_all(sc, x);
    sc = quant_exist(sc, y);
    return sc;
};
