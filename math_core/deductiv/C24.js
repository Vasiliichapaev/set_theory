const { negation } = require("../math_objects");
const equivalence = require("../abbreviations/equivalence");
const C11 = require("./C11");
const C16 = require("./C16");
const C20 = require("./C20");

// Пусть A - соотношение, тогда соотношение
// (не не A) эвивалентно A
// - теорема.

exports.C24_1 = A => {
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
