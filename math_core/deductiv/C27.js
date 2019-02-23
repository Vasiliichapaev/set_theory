const { negation, tau } = require("../math_objects");
const implication = require("../abbreviations/implication");
const quant_all = require("../abbreviations/quant_all");
const S5 = require("../schemes/S5");
const CM8 = require("./CM8");
const C6 = require("./C6");
const C17 = require("./C17");
const C26 = require("./C26");

// Если R - теорема, x - буква, то
// (All x)R
// - теорема.

exports = module.exports = (R, x) => {
    if (R.is_ratio && x.is_letter && R.verity) {
        let ratio = quant_all(R, x);
        if (!ratio.verity) {
            let sc = C3(R, x, tau(negation(R), x));
            sc = C26(sc, x);
            CM8(sc);
        }
        return ratio;
    }
};
