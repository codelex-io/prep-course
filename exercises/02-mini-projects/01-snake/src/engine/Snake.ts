import { Cell } from "./Cell";
import { Direction } from "./Direction";

export class Snake {
  setDirection(direction: Direction) {}

  move() {}

  grow() {}

  getHead(): Cell {
    return new Cell(4, 0);
  }

  isSnake(cell: Cell): boolean {
    return false;
  }

  getDirection(): Direction {
    return "Right";
  }

  getTail(): Cell[] {
    return [new Cell(0, 0), new Cell(2, 0)];
  }
}
