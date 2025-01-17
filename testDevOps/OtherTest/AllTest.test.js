const { sub, factor } = require("./AllTest");

describe("les test des nos fonctions ", () => {
  it("sustraction", () => {
    expect(sub(14, 3)).toBe(11);
  });
  test("factorielle", () => {
    expect(factor(3)).toBe(6);
  });
});
