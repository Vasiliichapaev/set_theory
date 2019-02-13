const { disjunction } = require("../math_objects");
const implication = require("../abbreviations/implication");
const S1 = require("../schemes/S1");
const S3 = require("../schemes/S3");
const S4 = require("../schemes/S4");
const C1 = require("./C1");
const C6 = require("./C6");

// Метод разделения случаев.
// Пусть A, B, C, - соотношения. Если 'A или B', 'A влёчёт C', 'B влёчёт C'
// суть теоремы, то C есть теорема теории T.

exports = module.exports = (A, B, C) => {
    if (A.is_ratio && B.is_ratio && C.is_ratio) {
        let AorB = disjunction(A, B);
        let A_imp_C = implication(A, C);
        let B_imp_C = implication(B, C);
        if (AorB.verity && A_imp_C.verity && B_imp_C.verity) {
            if (!C.verity) {
                let sc = S4(B, C, A);
                C1(sc);
                sc = S4(A, C, C);
                C1(sc);
                S3(A, C);
                S1(C);
                let AorC = disjunction(A, C);
                let CorA = disjunction(C, A);
                let CorC = disjunction(C, C);
                C6(AorB, AorC, CorA);
                C6(AorB, CorA, CorC);
                C6(AorB, CorC, C);
                sc = implication(AorB, C);
                C1(sc);
            }
            return C;
        }
    }
};
