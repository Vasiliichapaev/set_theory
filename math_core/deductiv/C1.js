const implication = require("../abbreviations/implication").implication;


exports.C1 = (A, B) => {
    if (!B.verity){
        if (A.is_ratio && B.is_ratio){
            const C = implication(A, B);
            if (A.verity && C.verity){
                B.proof = [A, C, B];
            };
        };  
    };
};