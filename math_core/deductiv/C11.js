const { negation } = require("../math_objects");
const { implication } = require("../abbreviations");

const C10 = require("./C10");

// Если A - соотношение , то
// A влечёт (не не A)
// есть теорема .

exports = module.exports = A => {
    if (A.is_ratio) {
        const ratio = implication(A, negation(negation(A)));
        if (!ratio.verity) {
            C10(negation(A));
        }
        return ratio;
    }
};
