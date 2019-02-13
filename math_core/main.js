const { theory, belong, disjunction, negation, tau } = require("./math_objects");
const implication = require("./abbreviations/implication");
const quant_all = require("./abbreviations/quant_all");
const { is_implication, implication_args } = require("./abbreviations/implication");

const equivalence = require("./abbreviations/equivalence");

const C14 = require("./deductiv/C14");
const C15 = require("./deductiv/C15");

const C17 = require("./deductiv/C17");
const S7 = require("./schemes/S7");

const T = theory();

a = T.letter();
b = T.letter(a);

A = belong(a, b);
B = belong(b, a);

w = C17(A, B);

console.log(w.verity);

T.close();
