const math_objects = require("./math_objects");
const theory = math_objects.theory;
const belong = math_objects.belong;
const disjunction = math_objects.disjunction;
const negation = math_objects.negation;
const tau = math_objects.tau;
const abbreviations_implication = require("./abbreviations/implication");
const implication = abbreviations_implication.implication;
const is_implication = abbreviations_implication.is_implication;
const implication_args = abbreviations_implication.implication_args;

const C1 = require("./deductiv/C1").C1;

let T = theory()

a = T.letter()
b = T.letter(a)

w = belong(a, b)
w.axiom()
c = belong(b, a)

g = implication(w, c)
g.axiom()
console.log(c.verity)
C1(w, c)
console.log(c.proof)


T.close()