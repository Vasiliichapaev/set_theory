const implication = require("../abbreviations/implication").implication;
const disjunction = require("../math_objects").disjunction;


exports.S1 = (A) => {
    if (A.is_ratio){
        let ratio = implication(disjunction(A, A), A);
        ratio.axiom();
        return ratio;
    };
};