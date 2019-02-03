const math_objects = require("./math_objects");
const theory = math_objects.theory;
const belong = math_objects.belong;
const disjunction = math_objects.disjunction;
const negation = math_objects.negation;
const tau = math_objects.tau;
const implication = require("./abbreviations/implication");
const is_implication = implication.is_implication;
const implication_args = implication.implication_args;

const C14 = require("./deductiv/C14");
const C11 = require("./deductiv/C11");

const T = theory()

a = T.letter()
b = T.letter(a)

A = belong(a, b)
B = belong(b, a)

t2 = C14(A, B)


a = t2.letter()
b = t2.letter(a)

A = belong(a, b)
B = belong(b, a)
C = belong(b, b)


f = C11(A)

console.log(f.verity)




T.close()