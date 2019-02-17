const two_elements_set = require("./two_elements_set");

// Одноэлементное множество

exports = module.exports = x => {
    return two_elements_set(x, x);
};
