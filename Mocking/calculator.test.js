const { calculateSum } = require("./calculator");
const math = require("./math");

jest.mock("./math");

// jest.mock('./math'); dit à Jest de remplacer toutes les fonctions exportées par le module math.js
// par des fonctions simulées (mocks). Cela signifie que toute utilisation de add dans notre test sera
// une version simulée (mock) de la fonction, et non l'implémentation réelle.

test("calculateSum uses the mocked add function", () => {
  math.add.mockImplementation(() => 42);

  //   math.add.mockImplementation(() => 42); remplace le comportement de la fonction add par une
  //   version simulée qui retourne toujours 42, indépendamment des arguments fournis.

  const result = calculateSum(1, 2);

  expect(math.add).toHaveBeenCalledWith(1, 2);
  expect(result).toBe(42);
});
