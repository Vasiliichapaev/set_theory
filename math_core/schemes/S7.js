const equal = require("../math_objects").equal;
const tau = require("../math_objects").tau;
const implication = require("../abbreviations/implication");
const equivalence = require("../abbreviations/equivalence");
const quant_all = require("../abbreviations/quant_all");

// Если R и S  соотношения а, x -буква.
// тогда соотношение
//             ((All x)(R эквивалентно S)) влечёт (taux(R) = taux(S))
// есть аксиома.

module.exports = (R, S, x) => {
    if (R.is_ratio && S.is_ratio && x.is_letter){
        let ratio = implication(quant_all(equivalence(R, S), x), equal(tau(R, x), tau(S, x)));
        ratio.axiom();
        return ratio;
    };
};


