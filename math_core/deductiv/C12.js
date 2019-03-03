const { implication, negation, disjunction } = require("../abbreviations");
const { S3, S4 } = require("../schemes");

const C1 = require("./C1");
const C6 = require("./C6");
const C11 = require("./C11");

// Пусть A, B - два соотношения.
// Соотношение (A влечёт B) влечёт ((не B) влечёт (не A))
// есть теорема.

exports = module.exports = (A, B) => {
    if (A.is_ratio && B.is_ratio) {
        let imp_A_B = implication(A, B);
        let imp_neB_neA = implication(negation(B), negation(A));
        let neneB = negation(negation(B));
        const ratio = implication(imp_A_B, imp_neB_neA);
        if (!ratio.verity) {
            C11(B);
            let sc = S4(B, neneB, negation(A));
            C1(sc);
            S3(negation(A), neneB);
            C6(imp_A_B, disjunction(negation(A), neneB), imp_neB_neA);
        }
        return ratio;
    }
};
