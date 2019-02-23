const C1 = require("./C1");

// Пусть A - теорема, t - терм.
// Тогда (t|x)A есть теорема.

C3 = (A, letters, terms) => {
    let ratio = A.replace(letters, terms);
    if (!ratio.verity) {
        if (A.proof.length == 1) {
            ratio.axiom();
        } else {
            C3(A.proof[0], letters, terms);
            let sc = C3(A.proof[1], letters, terms);
            C1(sc);
        }
    }
    return ratio;
};

exports = module.exports = C3;
