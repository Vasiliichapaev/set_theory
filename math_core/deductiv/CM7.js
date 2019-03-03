const conjunction = require("../abbreviations");
const { is_conjunction, conjunction_args } = conjunction;

const C1 = require("./C1");
const C21 = require("./C21");

// Если С теорема вида: A и B
// тогда A, B есть теоремы.

exports = module.exports = C => {
    if (is_conjunction(C) && C.verity) {
        let [A, B] = conjunction_args(C);
        if (!B.verity || !A.verity) {
            let [sc1, sc2] = C21(A, B);
            C1(sc1);
            C1(sc2);
        }
        return [A, B];
    }
};
