
const { testLength, testHexidecimal } = require('../index.js');


describe('Acronym Length', () => {
  it('should throw an error when the acronym is greater than 3 characters', () => {
    const cb = () => new testLength('EEEE');
    const err = new Error('Acronym must not be more than 3 characters long.');

    expect(cb).toThrowError(err);
  });
});

describe('shapeColor Syntax', () => {
  it('should throw an error when the hexidecimal input is invalid', () => {
    const cb = () => new testHexidecimal('#0001f<');
    const err = new Error('A hexidecimal must only contain letters, numbers, and pound symbol (ex. #00013F)');

    expect(cb).toThrowError(err);
  });
});





