import { steps } from "./index";

describe("Steps function", () => {
  let spy: jest.SpyInstance;
  beforeEach(() => {
    spy = jest.spyOn(console, "log");
  });

  afterEach(() => {
    spy.mockRestore();
  });

  test("should prints steps when called with 1", () => {
    steps(1);
    expect(spy.mock.calls[0][0]).toEqual("#");
    expect(spy.mock.calls.length).toEqual(1);
  });

  test("should prints steps when called with 2", () => {
    steps(2);
    expect(spy.mock.calls[0][0]).toEqual("# ");
    expect(spy.mock.calls[1][0]).toEqual("##");
    expect(spy.mock.calls.length).toEqual(2);
  });

  test("should prints steps when called with 3", () => {
    steps(3);
    expect(spy.mock.calls[0][0]).toEqual("#  ");
    expect(spy.mock.calls[1][0]).toEqual("## ");
    expect(spy.mock.calls[2][0]).toEqual("###");
    expect(spy.mock.calls.length).toEqual(3);
  });
});
