const { theory, belong, inclusion, complement } = require("./abbreviations");

const { C8 } = require("./deductiv");

const T = theory();

a = T.letter();
b = T.letter(a);
c = T.letter(a, b);
d = T.letter(a, b, c);

A = belong(a, b);

w = C8(A);

console.log(w);

T.close();
