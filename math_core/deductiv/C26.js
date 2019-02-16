const { negation, tau } = require("../math_objects");
const equivalence = require("../abbreviations/equivalence");
const quant_all = require("../abbreviations/quant_all");
const C11 = require("./C11");
const C16 = require("./C16");
const C24_1 = require("./C24_1");

// Пусть R - соотношение, x - буква, тогда
// (All x)R эквивалентно ((tx(не R)|x)R)
// - теорема.

exports = module.exports = (R, x) => {
    if (R.is_ratio && x.is_letter) {
        let sc1 = quant_all(R, x);
        let sc2 = R.replace(x, tau(negation(R), x));
        let ratio = equivalence(sc1, sc2);
        if (!ratio.verity) {
            C24_1(sc2);
        }
        return ratio;
    }
};
