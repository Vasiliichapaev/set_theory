const unique = require("./unique");
const conjunction = require("./conjunction");
const quant_all = require("./quant_all");

// Cуществует единственное x такое, что R.
// Если является теормемой, то R - соотношения
// функциональное по x.

exports = module.exports = (R, x) => {
    let sc1 = quant_all(R, x);
    let sc2 = unique(R, x);
    let ratio = conjunction(sc1, sc2);
    return ratio;
};
