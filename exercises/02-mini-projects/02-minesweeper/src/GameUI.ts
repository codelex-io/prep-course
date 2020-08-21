import { Minesweeper, Cell } from "./Minesweeper";
import { LEVELS } from "./levels";

const cellWidth = 16;

const cellClassName = (cell: Cell): string => {
  if (cell.isOpen) {
    if (cell.isBomb) {
      return "mine-hit";
    }
    return `mines${cell.mines}`;
  }
  if (cell.isFlag) {
    return "flag";
  }
  if (cell.isUnsure) {
    return "question";
  }
  return "covered";
};

const faceClassName = (minesweeper: Minesweeper) => {
  if (minesweeper.isLost()) {
    return "face-sad";
  }
  if (minesweeper.isWon()) {
    return "face-sunglasses";
  }
  if (minesweeper.isTense()) {
    return "face-surprised";
  }
  return "face-smile";
};

const getHundreds = (n: number) => Math.floor((n / 100) % 10);
const getTens = (n: number) => Math.floor((n / 10) % 10);
const getOnes = (n: number) => Math.floor(n % 10);
const elementById = (id: string) => document.getElementById(id) as HTMLElement;

class GameUI {
  private minesweeper: Minesweeper;
  private isMenuOpen: boolean = false;
  private windowWrapperOuter = elementById("window-wrapper-outer");
  private resetButton = elementById("minesweeper-reset-button");
  private menuLink = elementById("menu-link");
  private menu = elementById("menu");
  private menuNew = elementById("menu-new");
  private menuBeginner = elementById("menu-beginner");
  private menuIntermediate = elementById("menu-intermediate");
  private menuExpert = elementById("menu-expert");
  private menuMarks = elementById("menu-marks");

  constructor() {
    this.minesweeper = new Minesweeper(LEVELS[0]);
    this.windowWrapperOuter.addEventListener("contextmenu", e =>
      e.preventDefault()
    );
    this.resetButton.addEventListener(
      "mousedown",
      () => (this.resetButton.className = "face-pressed")
    );
    this.resetButton.addEventListener("mouseup", () => {
      this.resetButton.className = "face-smile";
      this.minesweeper.reset();
      this.draw();
    });
    document.body.addEventListener("click", () => {
      if (this.isMenuOpen) {
        this.isMenuOpen = false;
        this.draw();
      }
    });
    this.menuLink.addEventListener("click", e => {
      e.stopPropagation();
      this.isMenuOpen = !this.isMenuOpen;
      this.draw();
    });
    this.menuNew.addEventListener("click", () => {
      this.minesweeper.reset();
      this.draw();
    });
    this.menuBeginner.addEventListener("click", () => {
      this.minesweeper.selectLevel(LEVELS[0]);
      this.draw();
    });
    this.menuIntermediate.addEventListener("click", () => {
      this.minesweeper.selectLevel(LEVELS[1]);
      this.draw();
    });
    this.menuExpert.addEventListener("click", () => {
      this.minesweeper.selectLevel(LEVELS[2]);
      this.draw();
    });
    this.menuMarks.addEventListener("click", () => {
      this.minesweeper.toggleQuestionMarksEnabled();
      this.draw();
    });
  }

  start() {
    const windowWrapperOuter = elementById("window-wrapper-outer");
    windowWrapperOuter.style.width =
      cellWidth * this.minesweeper.columnsCount() + 27 + "px";
    this.draw();
    elementById("game").style.display = "block";
  }

  draw() {
    const minefield = elementById("minefield");
    minefield.innerHTML = "";
    this.minesweeper
      .getCells()
      .forEach((row, i) =>
        row.forEach((cell, j) => this.drawCell(minefield, cell, i, j))
      );
    this.drawResetButton();
    this.drawCounters();
    this.drawMenu();
  }

  drawCell(minefield: HTMLElement, cell: Cell, x: number, y: number) {
    const div = document.createElement("div");
    div.className = cellClassName(cell);
    minefield.appendChild(div);
    div.addEventListener("mouseup", e => {
      if (e.which === 3) {
        this.minesweeper.onRightMouseUp(x, y);
      } else {
        this.minesweeper.onLeftMouseUp(x, y);
      }
      this.draw();
    });
    div.addEventListener("mousedown", e => {
      if (e.which === 3) {
        e.stopPropagation();
        return;
      }
      this.minesweeper.onLeftMouseDown(x, y);
      this.draw();
    });
  }

  drawResetButton() {
    this.resetButton.className = faceClassName(this.minesweeper);
  }

  drawCounters() {
    const fillCounter = (prefix: string, count: number) => {
      elementById(`${prefix}-hundreds`).className = `t${getHundreds(count)}`;
      elementById(`${prefix}-tens`).className = `t${getTens(count)}`;
      elementById(`${prefix}-ones`).className = `t${getOnes(count)}`;
    };

    fillCounter("mine-count", this.minesweeper.minesLeftCount());
    fillCounter("timer", this.minesweeper.timePassed());
  }

  drawMenu() {
    this.menuLink.className = this.isMenuOpen ? "active" : "";
    this.menu.style.display = this.isMenuOpen ? "block" : "none";
    const currentLevel = this.minesweeper.currentLevel();
    this.menuBeginner.className =
      currentLevel.title === LEVELS[0].title ? "checked" : "game-level";
    this.menuIntermediate.className =
      currentLevel.title === LEVELS[1].title ? "checked" : "game-level";
    this.menuExpert.className =
      currentLevel.title === LEVELS[2].title ? "checked" : "game-level";
    this.menuMarks.className = this.minesweeper.isQuestionMarksEnabled()
      ? "checked"
      : "game-level";
  }
}

const game = new GameUI();
game.start();
