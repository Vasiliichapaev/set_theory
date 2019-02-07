const implication = require("../abbreviations/implication");
const { disjunction } = require("../math_objects");

// Если A и B - соотношения, то соотношение
// (A или B) влечёт (B или A)
// есть аксиома.

module.exports = (A, B) => {
    if (A.is_ratio && B.is_ratio) {
        let ratio = implication(disjunction(A, B), disjunction(B, A));
        ratio.axiom();
        return ratio;
    }
};
