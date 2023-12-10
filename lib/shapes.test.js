//imports the shape classes
const { Triangle, Circle, Square } = require("./shapes");

test("generateShapes for Triangle shape number 2", () => {
  const shape = new Triangle();
  shape.setColor("blue");
  expect(shape.render("blue", "red", "ABC")).toEqual(
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,20 250,180 50,180" fill="blue" /><text x="150" y="135" font-size="50" text-anchor="middle" fill="red">ABC</text></svg>'
  );
});

test("generateShapes for Triangle shape number 2", () => {
  const shape = new Circle();
  shape.setColor("blue");
  expect(shape.render("blue", "red", "ABC")).toEqual(
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ABC</text> </svg>`
  );
});

test("generateShapes for Triangle shape number 2", () => {
  const shape = new Square();
  shape.setColor("blue");
  expect(shape.render("blue", "red", "ABC")).toEqual(
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="50" width="200" height="200" fill="blue" /><text x="150" y="140" font-size="60" text-anchor="middle" fill="red">ABC</text></svg>`
  );
});
