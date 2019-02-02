const implication = require("../abbreviations/implication").implication;
const implication_args = require("../abbreviations/implication").implication_args;
const negation = require("../math_objects").negation;
const S4 = require("../schemes/S4");
const C1 = require("./C1");


module.exports = (A, B, C) => {
    if (A.is_ratio && B.is_ratio && C.is_ratio){
        if (!implication(A, C).verity){
            if (implication(A, B).verity && implication(B, C).verity){
                let sc = S4(B, C, negation(A));
                let [q, w] = implication_args(sc);
                C1(q, w);
                C1(...implication_args(w));
            };
        }; 
    };
};
