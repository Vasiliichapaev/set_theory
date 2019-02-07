const { negation } = require("../math_objects");
const quant_exist = require("./quant_exist");

exports = module.exports = (ratio, letter) => {
    let sc = negation(quant_exist(negation(ratio), letter));
    [sc._quant_all_ratio, (sc._quant_all_letter = ratio), letter];
    return sc;
};
