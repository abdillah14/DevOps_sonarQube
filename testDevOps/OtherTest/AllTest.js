const sub = (a, b) => a - b;

const factor = (a) => {
  let factor = 1;
  for (let i = 1; i <= a; i++) {
    factor *= i;
  }
  return factor;
};

module.exports = { sub, factor };
