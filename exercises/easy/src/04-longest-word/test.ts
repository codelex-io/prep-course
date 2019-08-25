import { longestWord } from "./index";

describe("LongestWord function", () => {
  test("should return first, longest word in passed string", () => {
    expect(longestWord("Hello there")).toEqual("Hello");
    expect(longestWord("My name is Adam")).toEqual("name");
    expect(longestWord("fun&!! time")).toEqual("time");
  });
});
