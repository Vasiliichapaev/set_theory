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

let T = theory()

a = T.letter()
b = T.letter(a)

w = belong(a, b)

g = implication(w, w)


console.log(implication_args(g))

T.close()