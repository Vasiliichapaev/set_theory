const math_objects = require("./math_objects");
const theory = math_objects.theory;
const belong = math_objects.belong;
const disjunction = math_objects.disjunction;
const negation = math_objects.negation;
const tau = math_objects.tau;





let T = theory()

a = T.letter()
b = T.letter(a)

w = belong(a, b)


d = disjunction(w, w)

n = negation(d)

t = tau(n, w)

console.log(t)

T.close()