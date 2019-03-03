const disjunction = require("./disjunction");
const negation = require("./negation");

exports = module.exports = (a, b) => {
    let ratio = disjunction(negation(a), b);
    ratio._implication_args = [a, b];
    return ratio;
};

exports.is_implication = sc => {
    return sc.is_disjunction && sc.disjunction_args[0].is_negation;
};

exports.implication_args = sc => {
    if (sc.hasOwnProperty("_implication_args")) return sc._implication_args;
    sc._implication_args = [sc.disjunction_args[0].negation_ratio, sc.disjunction_args[1]];
    return sc._implication_args;
};
