const implication = require("./implication");
const conjunction = require("./conjunction");

exports = module.exports = (x, y) => {
    let sc = conjunction(implication(x, y), implication(y, x));
    sc.equivalence_args = [x, y];
    return sc;
};
