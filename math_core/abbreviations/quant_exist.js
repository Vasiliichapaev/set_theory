const tau = require("./tau");
const { get_quant, set_quant } = require("../database_functions");

exports = module.exports = (ratio, letter) => {
    let t = tau(ratio, letter);
    let sc = get_quant(ratio, letter, t);
    if (sc == undefined) {
        sc = ratio.replace(letter, t);
        set_quant(ratio, letter, t, sc);
    }
    [sc._quant_exist_ratio, sc._quant_exist_letter] = [ratio, letter];
    return sc;
};
