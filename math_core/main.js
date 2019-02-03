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
const C9 = require("./deductiv/C9");

const T = theory()

a = T.letter()
b = T.letter(a)

A = belong(a, b)
B = belong(b, a)
e = implication(B, A)
w = implication(A, e)

t2 = C14(A, e)

a = t2.copy(A)
b = t2.copy(B)

C9(b, a)


t2.close()

console.log(w.proof)

T.close()