const { negation, disjunction } = require("../math_objects");

exports = module.exports = (x, y) => {
    let sc = negation(disjunction(negation(x), negation(y)));
    sc._conjunction_args = [x, y];
    return sc;
};
