import { Minesweeper } from "./Minesweeper";
import { LEVELS } from "./levels";

describe("Minesweeper", () => {
  const level = LEVELS[0];

  it("should have field with closed cells", () => {
    const minesweeper = new Minesweeper(level);

    const cells = minesweeper.getCells();

    expect(cells.length).toBe(10);
    cells.forEach(row => expect(row.length).toBe(10));
  });
});
