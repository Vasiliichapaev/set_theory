const math_objects = require("./math_objects");
const theory = math_objects.theory;
const belong = math_objects.belong;
const disjunction = math_objects.disjunction;
const negation = math_objects.negation;
const tau = math_objects.tau;
const implication = require("./abbreviations/implication");
const quant_all = require("./abbreviations/quant_all");
const is_implication = implication.is;
const implication_args = implication.args;

const C14 = require("./deductiv/C14");
const C9 = require("./deductiv/C9");

const inclusion = require("./abbreviations/inclusion");

const T = theory()

a = T.letter()
b = T.letter(a)

A = belong(a, b)
B = belong(b, a)
e = implication(B, A)

t = inclusion(a, b)



console.log(t.use_letters)

T.close()