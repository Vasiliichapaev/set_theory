const { equal, conjunction, implication, inclusion, quant_all } = require("../abbreviations");

// Аксиома экстенсиональности

exports = module.exports = t => {
    let x = t.letter();
    let y = t.letter(x);
    let sc1 = conjunction(inclusion(x, y), inclusion(y, x));
    let sc2 = equal(x, y);
    let sc3 = implication(sc1, sc2);
    let sc4 = quant_all(sc3, y);
    let ax = quant_all(sc4, x);
    ax.axiom();
    return ax;
};
