class Shape {
  constructor() {
    this.color = "black";
  }

  setColor(color) {
    this.color = color;
  }
}

class Triangle extends Shape { // makes the shape class the parent class
  // The super keyword allows child classes to access and use the methods and properties of their parent class.
  constructor() {
    super(); // ensures that the shape class's constructor is executed
  }
  setColor(color) {
    super.setColor(color);
  }

  render(shapeColor, acronymColor, acronym) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,20 250,180 50,180" fill="${shapeColor}" /><text x="150" y="135" font-size="50" text-anchor="middle" fill="${acronymColor}">${acronym}</text></svg>`;
  }
}

class Circle extends Shape {
  constructor() {
    super();
  }
  setColor(color) {
    super.setColor(color);
  }
  render(shapeColor, acronymColor, acronym) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${acronymColor}">${acronym}</text> </svg>`;
  }
}

class Square extends Shape {
  constructor() {
    super();
  }
  setColor(color) {
    super.setColor(color);
  }
  render(shapeColor, acronymColor, acronym) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="50" width="200" height="200" fill="${shapeColor}" /><text x="150" y="140" font-size="60" text-anchor="middle" fill="${acronymColor}">${acronym}</text></svg>`;
  }
}

function generateShapes(answers) {
  if (answers && answers.shape) {
    if (`${answers.shape}` === "Circle") {
      const shape = new Circle();
      shape.setColor(answers.shapeColor);

      return shape.render(
        answers.shapeColor,
        answers.acronymColor,
        answers.acronym
      );
    } else if (`${answers.shape}` === "Triangle") {
      const shape = new Triangle();
      shape.setColor(answers.shapeColor);

      return shape.render(
        answers.shapeColor,
        answers.acronymColor,
        answers.acronym
      );
    } else if (`${answers.shape}` === "Square") {
      const shape = new Square();
      shape.setColor(answers.shapeColor);

      return shape.render(
        answers.shapeColor,
        answers.acronymColor,
        answers.acronym
      );
    }
  }

  return "Uh-oh...Something went wrong";
}

// correct syntax for exporting multiple items
module.exports = {
  generateShapes,
  Triangle,
  Square,
  Circle,
};
