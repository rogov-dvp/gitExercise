// import feature2 from "../gitExercise";
const feature1 = require('../gitExercise');

test('Sum', () => {
  expect(feature1(["hello", "abc", "acb", "abc", "bling"]))
  .toBe("abc abc acb bling hello");
});
