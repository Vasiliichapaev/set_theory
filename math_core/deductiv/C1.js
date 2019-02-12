const { is_implication, implication_args } = require("../abbreviations/implication");

// Если С соотношение вида: A => B
// если A, С - теоремы,
// тогда B есть теорема.

exports = module.exports = C => {
    if (is_implication(C)) {
        let [A, B] = implication_args(C);
        if (!B.verity) {
            if (A.verity && C.verity) {
                B.proof = [A, C, B];
            }
        }
        return B;
    }
};
