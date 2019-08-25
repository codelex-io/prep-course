import { pyramid } from "./index";

describe("Pyramin function", () => {
  let spy: jest.SpyInstance;
  beforeEach(() => {
    spy = jest.spyOn(console, "log");
  });

  afterEach(() => {
    spy.mockRestore();
  });

  test("should prints a pryamid when called with 2", () => {
    pyramid(2);
    expect(spy.mock.calls[0][0]).toEqual(" # ");
    expect(spy.mock.calls[1][0]).toEqual("###");
    expect(spy.mock.calls.length).toEqual(2);
  });

  test("should prints a pryamid when called with 3", () => {
    pyramid(3);
    expect(spy.mock.calls[0][0]).toEqual("  #  ");
    expect(spy.mock.calls[1][0]).toEqual(" ### ");
    expect(spy.mock.calls[2][0]).toEqual("#####");
    expect(spy.mock.calls.length).toEqual(3);
  });

  test("should prints a pryamid when called with 4", () => {
    pyramid(4);
    expect(spy.mock.calls[0][0]).toEqual("   #   ");
    expect(spy.mock.calls[1][0]).toEqual("  ###  ");
    expect(spy.mock.calls[2][0]).toEqual(" ##### ");
    expect(spy.mock.calls[3][0]).toEqual("#######");
    expect(spy.mock.calls.length).toEqual(4);
  });
});
