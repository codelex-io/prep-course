import { isEven } from "./index";

describe("IsEven function", () => {
  test("should return true if passed number is even and false if is not", () => {
    expect(isEven(234)).toBeTruthy();
    expect(isEven(33)).toBeFalsy();
    expect(isEven(-2)).toBeTruthy();
    expect(isEven(0.15)).toBeTruthy();
    expect(isEven(3092348903.28409238409)).toBeFalsy();
  });
});
