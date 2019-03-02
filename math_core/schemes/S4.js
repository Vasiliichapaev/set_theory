const { disjunction, implication } = require("../abbreviations");

// Если A, B и C - соотношения, то соотношение
// (A влечёт B) влечёт ((C или A) влечёт (C или B))
// есть аксиома.

module.exports = (A, B, C) => {
    if (A.is_ratio && B.is_ratio && C.is_ratio) {
        let ratio = implication(
            implication(A, B),
            implication(disjunction(C, A), disjunction(C, B))
        );
        ratio.axiom();
        return ratio;
    }
};
