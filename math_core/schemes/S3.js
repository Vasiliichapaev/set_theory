const implication = require("../abbreviations/implication").implication;
const disjunction = require("../math_objects").disjunction;


exports.S3 = (A, B) => {
    if (A.is_ratio && B.is_ratio){
        let ratio = implication(disjunction(A, B), disjunction(B, A));
        ratio.axiom();
        return ratio;
    };
};