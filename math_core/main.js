const { theory, belong, disjunction, negation, tau } = require("./math_objects");
const implication = require("./abbreviations/implication");
const quant_all = require("./abbreviations/quant_all");
const { is_implication, implication_args } = require("./abbreviations/implication");

const conjunction = require("./abbreviations/conjunction");
const { is_conjunction, conjunction_args } = require("./abbreviations/conjunction");

const one_element_set = require("./abbreviations/one_element_set");

const C17 = require("./deductiv/C17");
const C15 = require("./deductiv/C15");

const C30 = require("./deductiv/C30");

const CM7 = require("./deductiv/CM7");
const S7 = require("./schemes/S7");

const A3 = require("./axioms/A3");

const T = theory();

require("./axioms")();

// a = T.letter();
// b = T.letter(a);
// c = T.letter(a, b);
// d = T.letter(a, b, c);

// A = belong(a, b);
// B = belong(b, a);
// C = belong(b, b);

// w = A3(a, b, c, d);

// console.log(w);

// T.close();
