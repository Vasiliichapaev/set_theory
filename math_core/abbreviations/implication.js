const { disjunction, negation } = require("../math_objects");

exports = module.exports = (a, b) => {
    this._implication_args = [a, b];
    return disjunction(negation(a), b);
};

exports.is = function(sc) {
    return sc.is_disjunction && sc.disjunction_args[0].is_negation;
};

exports.args = sc => {
    if (sc.hasOwnProperty("_implication_args")) return sc._implication_args;
    sc._implication_args = [
        sc.disjunction_args[0].negation_ratio,
        sc.disjunction_args[1]
    ];
    return sc._implication_args;
};
