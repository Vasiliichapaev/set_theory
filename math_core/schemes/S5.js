const { quant_exist, implication } = require("../abbreviations");

// Если R - соотношение , t - терм и x - буква, то соотношение
// (t|x)R влечёт (Exist x)R
// есть аксиома.

module.exports = (R, t, x) => {
    if (R.is_ratio && t.is_term && x.is_letter) {
        let ratio = implication(R.replace(x, t), quant_exist(R, x));
        ratio.axiom();
        return ratio;
    }
};
