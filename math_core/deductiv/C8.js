const { implication, disjunction } = require("../abbreviations");
const { S1, S2 } = require("../schemes");

const C6 = require("./C6");

// Если A - соотношение, то
// A влечёт A
// есть теорема.

exports = module.exports = A => {
    if (A.is_ratio) {
        const ratio = implication(A, A);
        if (!ratio.verity) {
            S2(A, A);
            S1(A);
            C6(A, disjunction(A, A), A);
        }
        return ratio;
    }
};
