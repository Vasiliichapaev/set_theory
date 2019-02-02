const negation = require("../math_objects").negation;
const disjunction = require("../math_objects").disjunction;
const implication_args = require("../abbreviations/implication").implication_args;
const S3 = require("../schemes/S3");
const C1 = require("./C1");
const C8 = require("./C8");

// Если A - соотношение, то 
// A или (не A)
// есть теорема. 

exports = module.exports = (A) => {
    if (A.is_ratio){
        let sc = disjunction(A, negation(A)); 
        if (!sc.verity){
            C8(A);
            sc = S3(negation(A), A);
            C1(...implication_args(sc));
        }; 
    };
};