const implication = require("../abbreviations/implication");
const { negation } = require("../math_objects");
const S4 = require("../schemes/S4");
const C1 = require("./C1");

// Пусть A, B, C - соотношения. Если 'A влечет B' и
// 'B влечет C' суть теоремы, то 'A влечет С' есть теорема.

exports = module.exports = (A, B, C) => {
    if (A.is_ratio && B.is_ratio && C.is_ratio) {
        const ratio = implication(A, C);
        if (!ratio.verity) {
            if (implication(A, B).verity && implication(B, C).verity) {
                let sc = S4(B, C, negation(A));
                sc = C1(sc);
                C1(sc);
            }
        }
        return ratio;
    }
};
