const { negation, disjunction } = require("../math_objects");
const implication = require("../abbreviations/implication");
const { S3, S4 } = require("../schemes");

const C1 = require("./C1");
const C6 = require("./C6");
const C12 = require("./C12");

// Пусть A, B, C - соотношения . Если 'A влечет B' теорема , то
// (B влечет С) влечёт (A влечет С)
// есть теорема.

exports = module.exports = (A, B, C) => {
    if (A.is_ratio && B.is_ratio && C.is_ratio) {
        let AimpB = implication(A, B);
        if (AimpB.verity) {
            let AimpC = implication(A, C);
            let BimpC = implication(B, C);
            let neA = negation(A);
            let neB = negation(B);
            const ratio = implication(BimpC, AimpC);
            if (!ratio.verity) {
                let sc = C12(A, B);
                C1(sc);
                sc = S4(neB, neA, C);
                C1(sc);
                S3(neB, C);
                S3(C, neA);
                C6(BimpC, disjunction(C, neB), disjunction(C, neA));
                C6(BimpC, disjunction(C, neA), AimpC);
            }
            return ratio;
        }
    }
};
