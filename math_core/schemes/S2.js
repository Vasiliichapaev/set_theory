const implication = require("../abbreviations/implication").implication;
const disjunction = require("../math_objects").disjunction;


exports.S2 = (A, B) => {
    if (A.is_ratio && B.is_ratio){
        let ratio = implication(A, disjunction(A, B));
        ratio.axiom();
        return ratio;
    };
};