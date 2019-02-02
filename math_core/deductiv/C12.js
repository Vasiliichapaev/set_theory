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
        let imp_A_B = implication(A, B);
        let imp_neB_neA = implication(negation(B), negation(A));
        let neneB = negation(negation(B));
        const ratio = implication(imp_A_B, imp_neB_neA); 
        if (!ratio.verity){
            C11(B);
            let sc = S4(B, neneB, negation(A));
            C1(...implication_args(sc));
            S3(negation(A), neneB);
            C6(imp_A_B, disjunction(negation(A), neneB), imp_neB_neA);
        }; 
        return ratio;
    };
};