import { Stack } from "./index";

describe("Stack class", () => {
  test("should be able to add and remove items", () => {
    const s = new Stack();
    s.push(1);
    expect(s.pop()).toEqual(1);
    s.push(2);
    expect(s.pop()).toEqual(2);
  });

  test("should follows first in, last out", () => {
    const s = new Stack();
    s.push(1);
    s.push(2);
    s.push(3);
    expect(s.pop()).toEqual(3);
    expect(s.pop()).toEqual(2);
    expect(s.pop()).toEqual(1);
  });

  test("should have peek method which returns the first element but doesnt removes it", () => {
    const s = new Stack();
    s.push(1);
    s.push(2);
    s.push(3);
    expect(s.peek()).toEqual(3);
    expect(s.pop()).toEqual(3);
    expect(s.peek()).toEqual(2);
    expect(s.pop()).toEqual(2);
    expect(s.peek()).toEqual(1);
    expect(s.pop()).toEqual(1);
  });
});
