import { reverse } from "./index";

describe("Reverse function", () => {
  test("should return passed string with the reversed order of characters", () => {
    expect(reverse("abcd")).toEqual("dcba");
    expect(reverse("  abcd")).toEqual("dcba  ");
  });
});
