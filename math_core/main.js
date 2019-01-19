const math_objects = require("./math_objects");
const theory = math_objects.theory;
const belong = math_objects.belong;
const disjunction = math_objects.disjunction;
const negation = math_objects.negation;
const tau = math_objects.tau;
const abbreviations = require("./abbreviations");
const implication = abbreviations.implication;


let T = theory()

a = T.letter()
b = T.letter(a)

w = belong(a, b)

f = implication(w, w)

g = T.copy(f)

console.log(f)
console.log(g)

T.close()