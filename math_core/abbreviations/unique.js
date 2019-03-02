const equal = require("./equal");
const implication = require("./implication");
const conjunction = require("./conjunction");
const quant_all = require("./quant_all");

// Cуществует самое большое одно x такое, что R.
// Если является теормемой, то R однозначно по x.

exports = module.exports = (R, x) => {
    let y = R.theory.letter(R, x);
    let z = R.theory.letter(R, x, y);
    let sc1 = conjunction(R.replace(x, y), R.replace(x, z));
    let sc2 = equal(y, z);
    let sc = implication(sc1, sc2);
    let ratio = quant_all(sc, z);
    ratio = quant_all(ratio, y);
    return ratio;
};
