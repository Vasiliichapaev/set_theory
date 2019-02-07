const { negation, disjunction, MathTheory } = require("../math_objects");
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

// Метод вспомогательной гипотезы.
// Пусть A соотношение теории T, а T' - теория получаемая присоединением A к
// аксиомам теории T, Если B - теорема теории T', то 'A влечет B' есть теорема теории T.

class AuxiliaryTheory extends MathTheory {
    constructor(A, B) {
        super(false);
        this.db = A.theory.db;
        this.pro_theory = A.theory;
        this.A = A;
        this.B = B;
        this.new_A = this.copy(this.A);
        this.new_A._proof = [this.new_A];
        this.new_B = this.copy(this.B);
        this.ratio = implication(A, B);
        this.new_ratio = this.copy(this.ratio);
        this.theorems = new Dict();
        this.theorems.add(this.new_A);
    }

    set_proof(ratio) {
        this.theorems.add(ratio);
    }

    get_proof(ratio) {
        if (this.theorems.has(ratio)) {
            return this.theorems.proof(ratio);
        }
        return this.pro_theory.get_proof(ratio);
    }

    get_verity(ratio) {
        if (this.theorems.has(ratio)) {
            return true;
        }
        return this.pro_theory.get_verity(ratio);
    }

    proofer(B) {
        let Bi = this.pro_theory.copy(B);
        let AimpBi = implication(this.A, Bi);
        if (!AimpBi.verity) {
            if (Bi.eq(this.A)) {
                C8(Bi);
            } else if (Bi.verity) {
                C9(this.A, Bi);
            } else {
                this.proofer(B.proof[0]);
                this.proofer(B.proof[1]);
                let Bj = this.pro_theory.copy(B.proof[0]);
                let Bj_imp_Bi = this.pro_theory.copy(B.proof[1]);
                C13(this.A, Bj, Bi);
                C6(this.A, Bj_imp_Bi, AimpBi);
                let neA = negation(this.A);
                let sc = S3(neA, AimpBi);
                C1(...implication_args(sc));
                S2(neA, Bi);
                sc = S4(neA, AimpBi, AimpBi);
                C1(...implication_args(sc));
                sc = implication_args(sc)[1];
                C1(...implication_args(sc));
                sc = S1(AimpBi);
                C1(...implication_args(sc));
            }
        }
    }

    close() {
        if (this.new_B.verity && !this.ratio.verity) {
            this.proofer(this.new_B);
        }
    }
}

class Dict {
    constructor() {
        this.names = {};
    }

    add(ratio) {
        if (!(ratio.name in this.names)) {
            this.names[ratio.name] = {};
        }
        this.names[ratio.name][ratio.id] = ratio._proof;
    }

    has(ratio) {
        if (ratio.name in this.names) {
            if (ratio.id in this.names[ratio.name]) {
                return true;
            }
        }
        return false;
    }

    proof(ratio) {
        return this.names[ratio.name][ratio.id];
    }
}

exports = module.exports = (A, B) => {
    return new AuxiliaryTheory(A, B);
};
