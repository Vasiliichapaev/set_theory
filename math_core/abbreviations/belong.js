const { Relation } = require("../math_objects");

exports.belong = (a, b) => new Relation("belong", [a, b]);
