const { disjunction, equal } = require("../math_objects");
const epsilon = require("./epsilon");

// Двухэлементное множество

exports = module.exports = (x, y) => {
    let z = x.theory.letter(x, y);
    return epsilon(disjunction(equal(z, x), equal(z, y)), z);
};
