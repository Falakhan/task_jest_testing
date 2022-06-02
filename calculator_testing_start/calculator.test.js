const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 50;
    actual = sum(20, 30);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 130;
    actual = sum(100, 30);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -80;
    actual = sum(-50, -30);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -190;
    actual = sum(-100, -90);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 42;
    actual = sum(42, 0);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 31;
    actual = sum(31, 0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {
  
  test('can subtract two small numbers', () => {
  expected = 20;
  actual = subtract(35, 15);
  expect(actual).toBe(expected);
});

test('can subtract two big numbers', () => {
  expected = 200;
  actual = subtract(350, 150);
  expect(actual).toBe(expected);
});
});

 describe('multiply', () => {
  test('can multiply two small positive numbers', () => {
  expected = 35;
  actual = multiply(5, 7);
  expect(actual).toBe(expected);
});

test('can multiply two small negative numbers', () => {
expected = 35;
actual = multiply(-5, -7);
expect(actual).toBe(expected);
});


test('can multiply one negative and one positive number',() => {
expected = -35;
actual = multiply(-5, 7);
expect(actual).toBe(expected);
});
});

describe('divide', () => {
  test(`can divide`,() => {
  expected = 10;
  actual =  divide(70, 7);
  expect(actual).toBe(expected);
});
});

describe('modulus', () => {
  test(`find modulus`,() => {
  expected = 9;
  actual = modulus(-9);
  expect(actual).toBe(expected);
});
});

describe('even', () => {
  test(`if even`,() => {
  expected = false;
  actual = even(7);
  expect(actual).toBe(expected);
});
});

describe('odd', () => {
  test(`if odd`, () => {
  expected = true;
  actual = odd(7);
  expect(actual).toBe(expected);
});
});