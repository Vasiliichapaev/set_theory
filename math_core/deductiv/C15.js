const { negation } = require("../math_objects");
const implication = require("../abbreviations/implication");
const { implication_args } = require("../abbreviations/implication");
const S1 = require("../schemes/S1");
const S2 = require("../schemes/S2");
const S3 = require("../schemes/S3");
const S4 = require("../schemes/S4");
const C1 = require("./C1");
const C6 = require("./C6");
const C8 = require("./C8");
const C9 = require("./C9");
const C13 = require("./C13");

const { C14Theory } = require("./C14");

// Метод приведения к абсурду.
// Пусть A соотношение теории T, а T' - теория получаемая присоединением
// аксиомы 'не A' к аксиомам теории T. Если T' протеворечива, то A есть теормема теории T.

class C15Theory extends C14Theory {
    constructor(A) {
        super(A);
        this.theorems.add(negation(this.new_A));
    }

    proofer2(ratio) {
        let sc = S2(negation(ratio), this.new_A);
        sc = C1(...sc);
        C1(...sc);

        this.A = negation(this.A);
        this.proofer(this.new_A);
        sc = S4(this.A, self.ratio, self.ratio);
        C1(sc);
        sc2 = sc.implication_args[1];
        sc3 = sc2.implication_args[0];
        C10(sc3);
        C1(sc2);
        sc = S1(self.ratio);
        C1(sc);
    }

    close(ratio) {
        if (!this.A.verity) {
            if (ratio.verity && negation(ratio).verity) {
                this.proofer2(ratio);
            }
        }
    }
}

exports = module.exports = A => {
    return new C15Theory(A);
};
