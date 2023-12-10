const { testLength, testHexidecimal } = require("../index.js");

test("Acronym Length > should throw an error when the acronym is greater than 3 characters", () => {
  const cb = () => new testLength("EEEE");
  const err = new Error("Acronym must not be more than 3 characters long.");

  expect(cb).toThrowError(err);
});

test("shapeColor Syntax > should throw an error when the hexidecimal input is invalid", () => {
  const answers = {
    shapeColor: "invalid_color",
    acronymColor: "valid_color",
  };

  const cb = () => {
    testHexidecimal(answers);
  };

  const expectedErrorMessage =
    "A hexidecimal must only contain letters, numbers, and pound symbol (ex. #00013F)";

  expect(cb).toThrowError(expectedErrorMessage);
});
