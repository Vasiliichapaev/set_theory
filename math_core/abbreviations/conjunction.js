const { negation, disjunction } = require("../math_objects");

exports = module.exports = (x, y) => {
    let sc = negation(disjunction(negation(x), negation(y)));
    sc._conjunction_args = [x, y];
    return sc;
};

exports.is_conjunction = sc => {
    if (sc.is_negation) {
        let ratio = sc.negation_ratio;
        if (ratio.is_disjunction) {
            let [x, y] = ratio.disjunction_args;
            if (x.is_negation && y.is_negation) return true;
        }
    }
    return false;
};

exports.conjunction_args = sc => {
    // if (sc.hasOwnProperty("_conjunction_args")) return sc._conjunction_args;
    sc._conjunction_args = [
        sc.negation_ratio.disjunction_args[0].negation_ratio,
        sc.negation_ratio.disjunction_args[1].negation_ratio
    ];
    return sc._conjunction_args;
};
