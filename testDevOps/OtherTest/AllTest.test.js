const { sub, factor } = require("./AllTest");

describe("La somme de deux nombre a et b ", () => {
  it("sustraction", () => {
    expect(sub(14, 3)).toBe(11);
  });
  test("factorielle", () => {
    expect(factor(3)).toBe(6);
  });
});
