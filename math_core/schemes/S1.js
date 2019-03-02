const { disjunction, implication } = require("../abbreviations");

// Если A - соотношение, то соотношение
// (A или A) влечёт A
// есть аксиома.

module.exports = A => {
    if (A.is_ratio) {
        let ratio = implication(disjunction(A, A), A);
        ratio.axiom();
        return ratio;
    }
};
