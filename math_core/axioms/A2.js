const { equal, disjunction } = require("../math_objects");
const coll = require("../abbreviations/coll");
const quant_all = require("../abbreviations/quant_all");

// Аксиома двухэлементного множества

exports = module.exports = (x, y, z) => {
    R = disjunction(equal(z, x), equal(z, y));
    sc1 = coll(R, z);
    sc2 = quant_all(sc1, y);
    ax = quant_all(sc2, x);
    ax.axiom();
    return ax;
};
