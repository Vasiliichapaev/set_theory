const { Relation } = require("../math_objects");

exports = module.exports = belong = (a, b) => new Relation("belong", [a, b]);
