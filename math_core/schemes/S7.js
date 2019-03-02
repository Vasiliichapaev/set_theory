const { equal, tau, implication, equivalence, quant_all } = require("../abbreviations");

// Если R и S  соотношения а, x -буква.
// тогда соотношение
//             ((All x)(R эквивалентно S)) влечёт (taux(R) = taux(S))
// есть аксиома.

module.exports = (R, S, x) => {
    if (R.is_ratio && S.is_ratio && x.is_letter) {
        let ratio = implication(quant_all(equivalence(R, S), x), equal(tau(R, x), tau(S, x)));
        ratio.axiom();
        return ratio;
    }
};
