const math_objects = require("./math_objects");
const theory = math_objects.theory;
const belong = math_objects.belong;
const disjunction = math_objects.disjunction;
const negation = math_objects.negation;
const tau = math_objects.tau;
const implication = require("./abbreviations/implication");
const is_implication = implication.is_implication;
const implication_args = implication.implication_args;

const C11 = require("./deductiv/C11");

let T = theory()

a = T.letter()
b = T.letter(a)

A = belong(a, b)
B = belong(b, a)
C = belong(a, a)

w = C11(A)




console.log(w.verity)


T.close()