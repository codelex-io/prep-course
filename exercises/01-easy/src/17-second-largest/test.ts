import { secondLargest } from "./index";

test("secondLargest()", function() {
  const numbers = [2, 0, 23, 0, 57, 1, 230];

  const output = secondLargest(numbers);

  expect(output).toEqual(57);
});
