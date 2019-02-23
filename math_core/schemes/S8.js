const { equal, tau } = require("../math_objects");
const implication = require("../abbreviations/implication");
const equivalence = require("../abbreviations/equivalence");
const quant_all = require("../abbreviations/quant_all");

// Пусть R - сотношение x, y -различные буквы, X, Y - буквы отличные от x и y
// и не встречающиеся в R, Тогда
// 	(All y)(Exist X)(All x)(R влечёт (x Э X)) влечёт (All Y)Collx(Exist y)((y Э Y) и R)
// есть аксиома.

module.exports = (R, x, y, X, Y) => {
    // добавить условие
    let sc1 = quant_all(quant_exist(quant_all(implication(R, belong(x, X)), x), X), y);
    let sc2 = quant_all(сoll(quant_exist(conjunction(belong(y, Y), R), y), x), Y);
    let sc = implication(sc1, sc2);
    sc.axiom();
    return sc;
};
