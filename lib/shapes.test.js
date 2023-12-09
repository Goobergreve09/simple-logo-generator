const generateShapes = require("./shapes"); //imports the generateShapes function

test('generateShapes for Triangle shape', () => {
    const answers = { // creates an object named 'answers' with properties.
        //this object will simulate the user.input 
      acronym: 'ABC',
      acronymColor: 'red',
      shape: 'Triangle',
      shapeColor: 'blue',
    };
  
    const result = generateShapes(answers); // generates an SVG string with the object named above

    const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,20 250,180 50,180" fill="${answers.shapeColor}" />
    <text x="150" y="135" font-size="50" text-anchor="middle" fill="${answers.acronymColor}">${answers.acronym}</text>
 </svg>`;
  
    expect(result).toEqual(expectedSvg);
  });

  test('generateShapes for Circle shape', () => {
    const answers = {
      acronym: 'ABC',
      acronymColor: '#FDEBD0',
      shape: 'Circle',
      shapeColor: 'black',
    };
  
    const result = generateShapes(answers);

    const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${answers.shapeColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.acronymColor}">${answers.acronym}</text>
  </svg>`;
  
    expect(result).toEqual(expectedSvg);
  });

  test('generateShapes for Square shape', () => {
    const answers = {
      acronym: 'ABC',
      acronymColor: '#45B39D',
      shape: 'Square',
      shapeColor: '#2E4053',
    };

    const result = generateShapes(answers);
  
    const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect x="50" y="50" width="200" height="200" fill="${answers.shapeColor}" />
<text x="150" y="140" font-size="60" text-anchor="middle" fill="${answers.acronymColor}">${answers.acronym}</text>
</svg>`;
  
    expect(result).toEqual(expectedSvg);
});

  