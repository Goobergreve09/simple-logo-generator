function generateShapes(answers) {
  if (`${answers.shape}` === "Circle") {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${answers.shapeColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.acronymColor}">${answers.acronym}</text>
  </svg>`;
  } else if (`${answers.shape}` === "Triangle") {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,20 250,180 50,180" fill="${answers.shapeColor}" />
    <text x="150" y="135" font-size="50" text-anchor="middle" fill="${answers.acronymColor}">${answers.acronym}</text>
 </svg>`;
  } else if (`${answers.shape}` === "Square")
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect x="50" y="50" width="200" height="200" fill="${answers.shapeColor}" />
<text x="150" y="140" font-size="60" text-anchor="middle" fill="${answers.acronymColor}">${answers.acronym}</text>
</svg>`;

  return "Uh-oh...Something went wrong";
}

module.exports = generateShapes;
