const { belong } = require("../math_objects");
const implication = require("./implication");
const quant_all = require("./quant_all");

exports = module.exports = (x, y) => {
    let z = x.theory.letter(x, y);
    let sc = implication(belong(z, x), belong(z, y));
    return quant_all(sc, z);
};
