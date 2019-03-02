const { Relation } = require("../math_objects");

exports.equal = (a, b) => new Relation("equal", [a, b]);
