const { conjunction, equivalence } = require("../abbreviations");
const { conjunction_args } = conjunction;
const { equivalence_args } = equivalence;

const C1 = require("./C1");
const CM7 = require("./CM7");

// Если два соотношения эквивалентны и одно из них теорема, то второе
// так же теорема.

exports = module.exports = C => {
    if (C.verity) {
        CM7(C);
        let [A, B] = conjunction_args(C);
        C1(A);
        C1(B);
        return equivalence_args(C);
    }
};
