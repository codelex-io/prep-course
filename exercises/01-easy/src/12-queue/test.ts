import { Queue } from "./index";

describe("Queue class", () => {
  test("should be able to add elements to a queue", () => {
    const q = new Queue();
    expect(() => {
      q.add(1);
    }).not.toThrow();
  });

  test("should be able to remove elements from a queue", () => {
    const q = new Queue();
    expect(() => {
      q.add(1);
      q.remove();
    }).not.toThrow();
  });

  test("should have maintained order of its elements", () => {
    const q = new Queue();
    q.add(1);
    q.add(2);
    q.add(3);
    expect(q.remove()).toEqual(1);
    expect(q.remove()).toEqual(2);
    expect(q.remove()).toEqual(3);
    expect(q.remove()).toEqual(undefined);
  });
});
