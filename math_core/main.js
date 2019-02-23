const { theory, belong, disjunction, negation, tau } = require("./math_objects");
const implication = require("./abbreviations/implication");
const quant_all = require("./abbreviations/quant_all");
const { is_implication, implication_args } = require("./abbreviations/implication");

const { is_conjunction, conjunction_args } = require("./abbreviations/conjunction");

const one_element_set = require("./abbreviations/one_element_set");

const C8 = require("./deductiv/C8");
const C27 = require("./deductiv/C27");

const C3 = require("./deductiv/C3");

const CM7 = require("./deductiv/CM7");
const S7 = require("./schemes/S7");
const T1_1 = require("./theorems/T1_1");

const { A1, A2, A3 } = require("./axioms");

const T = theory();

a = T.letter();
b = T.letter(a);
c = T.letter(a, b);
d = T.letter(a, b, c);

A = belong(a, b);
B = belong(b, a);
C = belong(b, b);

w = T1_1(T);

console.log(w.verity);

T.close();
