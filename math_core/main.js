const { theory, belong, disjunction, negation, tau } = require("./math_objects");
const implication = require("./abbreviations/implication");
const quant_all = require("./abbreviations/quant_all");
const { is_implication, implication_args } = require("./abbreviations/implication");

const conjunction = require("./abbreviations/conjunction");
const { is_conjunction, conjunction_args } = require("./abbreviations/conjunction");

const two_elements_set = require("./abbreviations/two_elements_set");

const C17 = require("./deductiv/C17");
const C15 = require("./deductiv/C15");

const C30 = require("./deductiv/C30");

const CM7 = require("./deductiv/CM7");
const S7 = require("./schemes/S7");

const A2 = require("./axioms/A2");

const T = theory();

a = T.letter();
b = T.letter(a);
c = T.letter(a, b);

A = belong(a, b);
B = belong(b, a);
C = belong(b, b);

w = two_elements_set(a, b);

console.log(w);

T.close();
