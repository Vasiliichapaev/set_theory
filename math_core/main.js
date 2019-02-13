const { theory, belong, disjunction, negation, tau } = require("./math_objects");
const implication = require("./abbreviations/implication");
const quant_all = require("./abbreviations/quant_all");
const { is_implication, implication_args } = require("./abbreviations/implication");

const equivalence = require("./abbreviations/equivalence");

const C14 = require("./deductiv/C14");
const C15 = require("./deductiv/C15");

const C9 = require("./deductiv/C9");
const S7 = require("./schemes/S7");

const T = theory();

a = T.letter();
b = T.letter(a);

A = belong(a, b);
B = belong(b, a);

g = implication(negation(negation(A)), A);

t1 = C14(negation(negation(A)), A);

a = t1.copy(A);

t2 = C15(a);

a2 = t2.copy(a);

t2.close(negation(a2));

t1.close();

console.log(g.verity);

T.close();
