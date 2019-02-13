const { negation } = require("../math_objects");
const S1 = require("../schemes/S1");
const S2 = require("../schemes/S2");
const S4 = require("../schemes/S4");
const C1 = require("./C1");
const C10 = require("./C10");

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
        //принимает соотношение вызывающие протеворичивость
        let sc = S2(negation(ratio), this.new_A);
        sc = C1(sc);
        C1(sc);
        let ratio2 = this.A;
        this.A = negation(this.A);
        this.proofer(this.new_A);
        sc = S4(negation(ratio2), ratio2, ratio2);
        sc = C1(sc);
        C10(ratio2, negation(ratio2));
        C1(sc);
        sc = S1(ratio2);
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
