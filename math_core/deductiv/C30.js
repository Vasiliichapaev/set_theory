const { implication, quant_all, negation, tau } = require("../abbreviations");
const { S5 } = require("../schemes");

const C1 = require("./C1");
const C6 = require("./C6");
const C17 = require("./C17");
const C26 = require("./C26");

// Пусть R - соотношение, t - терм и x - буква.
// (All x)(R) влечёт (t|x)R
// - теорема.

exports = module.exports = (R, t, x) => {
    if (R.is_ratio && t.is_term && x.is_letter) {
        let sc1 = quant_all(R, x);
        let sc2 = R.replace(x, t);
        let ratio = implication(sc1, sc2);
        if (!ratio.verity) {
            S5(negation(R), t, x);
            sc = C17(R.replace(x, tau(negation(R), x)), sc2);
            C1(sc);
            C26(R, x);
            C6(sc1, R.replace(x, tau(negation(R), x)), sc2);
        }
        return ratio;
    }
};
