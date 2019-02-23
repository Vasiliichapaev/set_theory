const { equal, negation } = require("../math_objects");
const S7 = require("../schemes/S7");
const C1 = require("../deductiv/C1");
const C8 = require("../deductiv/C8");
const C20 = require("../deductiv/C20");
const C26 = require("../deductiv/C26");
const C27 = require("../deductiv/C27");
const C30 = require("../deductiv/C30");
const CM8 = require("../deductiv/CM8");

// x = x

exports = module.exports = t => {
    let x = t.letter();
    let ratio = equal(x, x);
    if (!ratio.verity) {
        let R = negation(ratio);
        let sc = C8(R);
        sc = C20(sc, sc);
        C27(sc, x);
        sc = S7(R, R, x);
        sc = C1(sc);
        sc = C26(ratio, x);
        CM8(sc);
        sc = C30(ratio, x, x);
        C1(sc);
    }
    return ratio;
};
