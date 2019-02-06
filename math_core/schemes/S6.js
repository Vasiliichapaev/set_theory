const implication = require("../abbreviations/implication");
const equivalence = require("../abbreviations/equivalence");

// Пусть x - буква, t и u - термы, и R соотношение.
// тогда соотношение
//             (t = u) влечёт ((t|x)R эвивалентно (u|x)R)
// есть аксиома.

module.exports = (x, t, u, R) => {
    if (R.is_ratio && t.is_term && u.is_term && x.is_letter){
        let ratio = implication(equal(t, u), equivalence(R.replace(x, t), R.replace(x, u)));
        ratio.axiom();
        return ratio;
    };
};


