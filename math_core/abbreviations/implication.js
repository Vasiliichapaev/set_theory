const math_objects = require("../math_objects");
const disjunction = math_objects.disjunction;
const negation = math_objects.negation;


exports.implication = (a, b) => {
    this._implication_args = [a, b];
    return disjunction(negation(a), b);
  };

exports.is_implication = sc => {
  return sc.is_disjunction && sc.disjunction_args[0].is_negation;
}

exports.implication_args = sc => {
  if (this.hasOwnProperty("_implication_args")) return this._implication_args;
  this._implication_args = [this.disjunction_args[0].negation_ratio, this.disjunction_args[1]];
  return this._implication_args;
}