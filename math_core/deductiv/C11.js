const negation = require("../math_objects").negation;
const implication = require("../abbreviations/implication");
const C10 = require("./C10");

// Если A - соотношение , то 
// A влечёт (не не A)
// есть теорема . 

exports = module.exports = (A) => {
    if (A.is_ratio){
        let sc = implication(A, negation(negation(A))); 
        if (!sc.verity){
            C10(negation(A));
        }; 
    };
};