const negation = require("../math_objects").negation;
const disjunction = require("../math_objects").disjunction;
const MathTheory = require("../math_objects").MathTheory;
const implication = require("../abbreviations/implication");
const implication_args = require("../abbreviations/implication").args;
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
    constructor(A, B){
        super(false);
        this.db = A.theory.db;
        this.pro_theory = A.theory;
        this.A = A;
        this.B = B;
        this.new_A = this.copy(this.A);
        this.new_B = this.copy(this.B);
        this.ratio = implication(A, B);
        this.new_ratio = this.copy(this.ratio);
        this.theorems = [[this.new_A], [undefined], [undefined]];

      }

    set_proof(ratio){
        let in_theorems = false;
        for (let i in this.theorems[0]){
            if (this.theorems[0][i].eq(ratio)) {
                in_theorems = true;
                break;
            };
        };
        if (!in_theorems){
            this.theorems[0].push(ratio);
            this.theorems[1].push(ratio._proof[0]);
            this.theorems[2].push(ratio._proof[1]);
        };
    }

    get_proof(ratio){
        let in_theorems = false;
        let indx = -1;
        for (let i in this.theorems[0]){
            if (this.theorems[0][i].eq(ratio)) {
                in_theorems = true;
                indx = i;
                break;
            };
        };

        if (in_theorems){
            if (this.theorems[1][indx] == undefined){
                return ratio;
            };
            return [this.theorems[1][indx], this.theorems[2][indx], ratio];
        };
        return this.pro_theory.get_proof(ratio);
    }

    get_verity(ratio){
        let in_theorems = false;
        for (let i in this.theorems[0]){
            if (this.theorems[0][i].eq(ratio)) {
                in_theorems = true;
                break;
            };
        };
        if (in_theorems) return true;
        return this.pro_theory.get_verity(ratio);
    }

    proofer(B){
        let Bi = this.pro_theory.copy(B);
        let AimpBi = implication(this.A, Bi);
        if (!AimpBi.verity){
            if (Bi.eq(this.A)){
                C8(Bi);
            }else if (Bi.verity){
                C9(this.A, Bi);
            }else{
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

    close(){
        if (this.new_B.verity && !this.ratio.verity){
            this.proofer(this.new_B);
        };
      }


};




exports = module.exports = (A, B) => {
    return new AuxiliaryTheory(A, B);
};