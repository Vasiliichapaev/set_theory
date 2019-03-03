const { implication, disjunction } = require("../abbreviations");
const { S2, S3 } = require("../schemes");

const C6 = require("./C6");

// Если A и B - соотношения , то
// B влечёт (A или B)
// есть теорема .

exports = module.exports = (A, B) => {
    if (A.is_ratio && B.is_ratio) {
        const ratio = implication(B, disjunction(A, B));
        if (!ratio.verity) {
            S2(B, A);
            S3(B, A);
            C6(B, disjunction(B, A), disjunction(A, B));
        }
        return ratio;
    }
};
