import { Level } from "./levels";

export class Cell {
  isOpen: boolean = false;
  mines: number = 0;
  isBomb: boolean = false;
  isFlag: boolean = false;
  isUnsure: boolean = false;
}

export class Minesweeper {
  private level: Level;

  constructor(level: Level) {
    this.level = level;
  }

  columnsCount(): number {
    return 10;
  }

  getCells(): Cell[][] {
    return [
      [new Cell(), new Cell(), new Cell()],
      [new Cell(), new Cell(), new Cell()],
      [new Cell(), new Cell(), new Cell()]
    ];
  }

  onLeftMouseDown(x: number, y: number) {}

  onLeftMouseUp(x: number, y: number) {}

  onRightMouseUp(x: number, y: number) {}

  isTense(): boolean {
    return true;
  }

  timePassed(): number {
    return 999;
  }

  minesLeftCount() {
    return 999;
  }

  reset() {}

  currentLevel(): Level {
    return this.level;
  }

  selectLevel(level: Level) {}

  isLost(): boolean {
    return false;
  }

  isWon(): boolean {
    return false;
  }

  isQuestionMarksEnabled(): boolean {
    return false;
  }

  toggleQuestionMarksEnabled() {}
}
