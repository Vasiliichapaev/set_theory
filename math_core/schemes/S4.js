const implication = require("../abbreviations/implication");
const disjunction = require("../math_objects").disjunction;


module.exports = (A, B, C) => {
    if (A.is_ratio && B.is_ratio && C.is_ratio){
        let ratio = implication(implication(A, B), implication(disjunction(C, A), disjunction(C, B)));
        ratio.axiom();
        return ratio;
    };
};


