import { Matrix } from "./index";

describe("Matrix", () => {
  test("extract row from one number matrix", () => {
    expect(new Matrix("1").rows[0]).toEqual([1]);
  });

  test("can extract row", () => {
    expect(new Matrix("1 2\n3 4").rows[1]).toEqual([3, 4]);
  });

  test("extract row where numbers have different widths", () => {
    expect(new Matrix("1 2\n10 20").rows[1]).toEqual([10, 20]);
  });

  test("can extract row from non-square matrix", () => {
    expect(new Matrix("1 2 3\n4 5 6\n7 8 9\n8 7 6").rows[2]).toEqual([7, 8, 9]);
  });

  test("extract column from one number matrix", () => {
    expect(new Matrix("1").columns[0]).toEqual([1]);
  });

  test("can extract column", () => {
    expect(new Matrix("1 2 3\n4 5 6\n7 8 9").columns[2]).toEqual([3, 6, 9]);
  });

  test("can extract column from non-square matrix", () => {
    expect(new Matrix("1 2 3\n4 5 6\n7 8 9\n8 7 6").columns[2]).toEqual([
      3,
      6,
      9,
      6
    ]);
  });

  test("extract column where numbers have different widths", () => {
    expect(new Matrix("89 1903 3\n18 3 1\n9 4 800").columns[1]).toEqual([
      1903,
      3,
      4
    ]);
  });
});
