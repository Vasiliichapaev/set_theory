const { implication, negation } = require("../abbreviations");

const C1 = require("./C1");
const C7 = require("./C7");

// Если A - соотношение, а B - теорема, то
// A влечёт B
// есть теорема.

exports = module.exports = (A, B) => {
    if (A.is_ratio && B.is_ratio && B.verity) {
        const ratio = implication(A, B);
        if (!ratio.verity) {
            let sc = C7(negation(A), B);
            C1(sc);
        }
        return ratio;
    }
};
