const { equal } = require("../math_objects");
const conjunction = require("../abbreviations/conjunction");
const implication = require("../abbreviations/implication");
const inclusion = require("../abbreviations/inclusion");
const quant_all = require("../abbreviations/quant_all");
const { theory } = require("../math_objects");

// Аксиома экстенсиональности

exports = module.exports = () => {
    let t = theory();
    let x = t.letter();
    let y = t.letter(x);
    let sc1 = conjunction(inclusion(x, y), inclusion(y, x));
    let sc2 = equal(x, y);
    let sc3 = implication(sc1, sc2);
    let sc4 = quant_all(sc3, y);
    let ax = quant_all(sc4, x);
    ax.axiom();
    t.close();
};
