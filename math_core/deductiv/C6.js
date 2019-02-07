const implication = require("../abbreviations/implication");
const implication_args = require("../abbreviations/implication").args;
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
                let [q, w] = implication_args(sc);
                C1(q, w);
                C1(...implication_args(w));
            }
        }
        return ratio;
    }
};
