const { negation } = require("../math_objects");
const { implication } = require("../abbreviations");
const { S3, S4 } = require("../schemes");

const C1 = require("./C1");
const C10 = require("./C10");

// Если A - соотношение, то
// (не не A) влечёт A
// есть теорема.

exports = module.exports = A => {
    if (A.is_ratio) {
        let neA = negation(A);
        let neneA = negation(neA);
        let neneneA = negation(neneA);
        let ratio = implication(neneA, A);
        if (!ratio.verity) {
            let sc = S4(neA, neneneA, A);
            C10(neneA);
            C10(A);
            sc = C1(sc);
            C1(sc);
            sc = S3(A, neneneA);
            C1(sc);
        }
        return ratio;
    }
};
