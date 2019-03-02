const negation = require("./negation");
const belong = require("./belong");
const conjunction = require("./conjunction");
const inclusion = require("./inclusion");
const epsilon = require("./epsilon");

// Пусть A - часть множества X. Дополнением множества A относительно X
// называется множество элементов из X не принадлежищих A

exports = module.exports = (A, X) => {
    if (inclusion(A, X).verity) {
        let x = X.theory.letter(X);
        let ratio = conjunction(negation(belong(x, A)), belong(x, X));
        return epsilon(ratio, x);
    }
};
