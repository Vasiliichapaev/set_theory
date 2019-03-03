const { conjunction, negation, disjunction } = require("../abbreviations");
const { S1, S3, S4 } = require("../schemes");

const C1 = require("./C1");
const C6 = require("./C6");
const C9 = require("./C9");
const C12 = require("./C12");

// Если A, B - теоремы, то 'A и B' тоже есть теорема

exports = module.exports = (A, B) => {
    if (A.is_ratio && B.is_ratio) {
        if (A.verity && B.verity) {
            let ratio = conjunction(A, B);
            if (!ratio.verity) {
                let neA = negation(A);
                let neB = negation(B);
                C9(A, B);
                let sc = C12(A, B);
                C1(sc);
                sc = S4(neB, neA, neA);
                C1(sc);
                S1(neA);
                C6(disjunction(neA, neB), disjunction(neA, neA), neA);
                sc = S3(negation(disjunction(neA, neB)), neA);
                sc = C1(sc);
                C1(sc);
            }
            return ratio;
        }
    }
};
