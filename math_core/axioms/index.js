const { theory } = require("../math_objects");
const A1 = require("./A1");
const A2 = require("./A2");
const A3 = require("./A3");

exports = module.exports = () => {
    let t = theory();

    let a = t.letter();
    let b = t.letter(a);
    let c = t.letter(a, b);
    let d = t.letter(a, b, c);

    A1(a, b);

    A2(a, b, c);

    A3(a, b, c, d);

    t.close();
};
