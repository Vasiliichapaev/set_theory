const { theory, belong, disjunction, negation, tau } = require("./math_objects");
const implication = require("./abbreviations/implication");
const quant_all = require("./abbreviations/quant_all");
const { is_implication, implication_args } = require("./abbreviations/implication");

const equivalence = require("./abbreviations/equivalence");

const C17 = require("./deductiv/C17");
const C15 = require("./deductiv/C15");

const C18 = require("./deductiv/C18");
const S7 = require("./schemes/S7");

const T = theory();

a = T.letter();
b = T.letter(a);

A = belong(a, b);
B = belong(b, a);
C = belong(b, b);

disjunction(A, B).axiom();
implication(A, C).axiom();
implication(B, C).axiom();

w = C18(A, B, C);

console.log(w.verity);

T.close();
