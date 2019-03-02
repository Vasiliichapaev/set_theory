const { Relation } = require("../math_objects");

exports = module.exports = equal = (a, b) => new Relation("equal", [a, b]);
