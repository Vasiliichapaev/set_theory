const tau = require("../math_objects").tau;
const database_fanctions = require("../database_fanctions");
const get_quant = database_fanctions.get_quant;
const set_quant = database_fanctions.set_quant;

exports = module.exports = (ratio, letter) => {
    let t = tau(ratio, letter);
    let sc = get_quant(ratio, letter, t);
    if (sc == undefined){
        sc = ratio.replace(letter, t);
        set_quant(ratio, letter, t, sc);
    };
    [sc._quant_exist_ratio, sc._quant_exist_letter] = [ratio, letter];
    return sc;
  };

