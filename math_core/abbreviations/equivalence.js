const implication = require("./implication");
const conjunction = require("./conjunction");
const { implication_args } = require("./implication");
const { conjunction_args } = require("./conjunction");

exports = module.exports = (x, y) => {
    let sc = conjunction(implication(x, y), implication(y, x));
    sc._equivalence_args = [x, y];
    return sc;
};

exports.equivalence_args = sc => {
    if (sc.hasOwnProperty("_equivalence_args")) return sc._equivalence_args;
    let a = conjunction_args(sc)[0];
    sc._equivalence_args = implication_args(a);
    return sc._equivalence_args;
};
