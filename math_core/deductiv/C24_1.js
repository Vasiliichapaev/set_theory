const { equivalence, negation } = require("../abbreviations");

const C11 = require("./C11");
const C16 = require("./C16");
const C20 = require("./C20");

// Пусть A - соотношение, тогда соотношение
// (не не A) эвивалентно A
// - теорема.

exports = module.exports = A => {
    if (A.is_ratio) {
        let ratio = equivalence(negation(negation(A)), A);
        if (!ratio.verity) {
            let sc1 = C16(A);
            let sc2 = C11(A);
            C20(sc1, sc2);
            C20(sc2, sc1);
        }
        return ratio;
    }
};
