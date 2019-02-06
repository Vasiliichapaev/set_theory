const negation = require("../math_objects").negation;
const disjunction = require("../math_objects").disjunction;


exports = module.exports = (x, y) => {
    let sc = negation(disjunction(negation(x), negation(y)));
    sc._conjunction_args = [x, y];
    return sc;
  };
