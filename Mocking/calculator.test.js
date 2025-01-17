const { calculateSum } = require("./calculator");
const math = require("./math");

jest.mock("./math");

test("calculateSum utilise la fonction add simulée", () => {
  math.add.mockImplementation(() => 30);

  const result = calculateSum(11, 2);

  expect(math.add).toHaveBeenCalledWith(11, 2);
  expect(result).toBe(30);
});
