const { tau } = require("../math_objects");
const database_functions = require("../database_functions");
const get_quant = database_functions.get_quant;
const set_quant = database_functions.set_quant;

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
