const { theory, belong, disjunction, negation, tau } = require("./math_objects");
const implication = require("./abbreviations/implication");
const quant_all = require("./abbreviations/quant_all");
const { is_implication, implication_args } = require("./abbreviations/implication");

const equivalence = require("./abbreviations/equivalence");

const C14 = require("./deductiv/C14");

const C9 = require("./deductiv/C9");
const S7 = require("./schemes/S7");

const T = theory();

a = T.letter();
b = T.letter(a);

A = belong(a, b);
B = belong(b, a);

w = implication(B, A);

g = implication(A, w);

t2 = C14(A, w);

a = t2.copy(A);
b = t2.copy(B);

f = C9(b, a);
console.log(f.id);

t2.close();

console.log(g.verity);

T.close();
