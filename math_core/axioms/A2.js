const { equal, disjunction, coll, quant_all } = require("../abbreviations");

// Аксиома двухэлементного множества

exports = module.exports = t => {
    let x = t.letter();
    let y = t.letter(x);
    let z = t.letter(x, y);
    R = disjunction(equal(z, x), equal(z, y));
    sc1 = coll(R, z);
    sc2 = quant_all(sc1, y);
    ax = quant_all(sc2, x);
    ax.axiom();
    return ax;
};
