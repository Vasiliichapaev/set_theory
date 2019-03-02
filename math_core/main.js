const { theory, belong, inclusion, complement } = require("./abbreviations");

const T = theory();

a = T.letter();
b = T.letter(a);
c = T.letter(a, b);
d = T.letter(a, b, c);

A = belong(a, b);
B = belong(b, a);
C = belong(b, b);

f = inclusion(a, b);
f.axiom();

w = complement(a, b);

console.log(f);

T.close();
