const { negation, disjunction } = require("../math_objects");
const { implication } = require("../abbreviations");
const { S3, S4 } = require("../schemes");

const C1 = require("./C1");
const C6 = require("./C6");
const C16 = require("./C16");

// Если A и B - соотношения , то
// (не B влечёт не A) влечёт (A влечёт B)
// есть теорема.

exports = module.exports = (A, B) => {
    if (A.is_ratio && B.is_ratio) {
        let neA = negation(A);
        let neB = negation(B);
        let neneB = negation(neB);
        let neB_imp_neA = implication(neB, neA);
        let A_imp_B = implication(A, B);
        let ratio = implication(neB_imp_neA, A_imp_B);
        if (!ratio.verity) {
            let sc = S4(neneB, B, neA);
            C16(B);
            C1(sc);
            S3(neneB, neA);
            C6(neB_imp_neA, disjunction(neA, neneB), A_imp_B);
        }
        return ratio;
    }
};
