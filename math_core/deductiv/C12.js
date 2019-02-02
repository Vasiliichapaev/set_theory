const negation = require("../math_objects").negation;
const disjunction = require("../math_objects").disjunction;
const implication = require("../abbreviations/implication");
const implication_args = require("../abbreviations/implication").implication_args;
const S3 = require("../schemes/S3");
const S4 = require("../schemes/S4");
const C1 = require("./C1");
const C6 = require("./C6");
const C11 = require("./C11");

// Пусть A, B - два соотношения. Соотношение
// (A влечёт B) влечёт ((не B) влечёт (не A))
// есть теорема.

exports = module.exports = (A) => {
    if (A.is_ratio){
        const ratio = implication(implication(A, B), implication(negation(B), negation(A))); 
        if (!ratio.verity){
            C11(B);
            let sc = S4(B, negation(negation(B)), negation(A));
            C1(...implication_args(sc));
            S3(negation(A), negation(negation(B)));
            C6(implication(A, B), disjunction(negation(A), negation(negation(B))), implication(negation(B), negation(A)));
        }; 
        return ratio;
    };
};