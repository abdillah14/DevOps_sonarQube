const { add } = require("./math");

function calculateSum(a, b) {
  return add(a, b);
}

module.exports = { calculateSum };
