const disjunction = require("../math_objects").disjunction;
const implication = require("../abbreviations/implication");
const S1 = require("../schemes/S1");
const S2 = require("../schemes/S2");
const C6 = require("./C6");

// Если A - соотношение, то 
// A влечёт A
// есть теорема. 

exports = module.exports = (A) => {
    if (A.is_ratio){
        let sc = implication(A, A); 
        if (!sc.verity){
            S2(A, A);
            S1(A);
            C6(A, disjunction(A, A), A);
        }; 
    };
};