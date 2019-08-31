import { Cell } from "./Cell";
import { Configuration } from "./Configuration";

export class Grid {
  private configuration: Configuration;

  constructor(configuration: Configuration) {
    this.configuration = configuration;
  }

  seed(): void {}

  isAppleInside(cell: Cell): boolean {
    return false;
  }

  removeApple(cell: Cell): void {}

  isDone(): boolean {
    return false;
  }

  getApples(): Cell[] {
    return [
      new Cell(33, 22),
      new Cell(35, 22),
      new Cell(37, 22),
      new Cell(39, 22)
    ];
  }
}
