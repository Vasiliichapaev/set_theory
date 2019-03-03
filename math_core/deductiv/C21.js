const { conjunction, implication, negation, disjunction } = require("../abbreviations");
const { S2 } = require("../schemes");

const C1 = require("./C1");
const C6 = require("./C6");
const C7 = require("./C7");
const C11 = require("./C11");
const C17 = require("./C17");

// Если A, B - соотношения, то
// (A и B) => A
// 		и
// (A и B) => B
// суть теоремы .

exports = module.exports = (A, B) => {
    if (A.is_ratio && B.is_ratio) {
        let ratio_1 = implication(conjunction(A, B), A);
        let ratio_2 = implication(conjunction(A, B), B);
        let neA = negation(A);
        let neB = negation(B);
        if (!ratio_1.verity) {
            S2(neA, neB);
            C11(disjunction(neA, neB));
            C6(neA, disjunction(neA, neB), negation(conjunction(A, B)));
            sc = C17(conjunction(A, B), A);
            C1(sc);
        }
        if (!ratio_2.verity) {
            C7(neA, neB);
            C11(disjunction(neA, neB));
            C6(neB, disjunction(neA, neB), negation(conjunction(A, B)));
            sc = C17(conjunction(A, B), B);
            C1(sc);
        }
        return [ratio_1, ratio_2];
    }
};
