import { Grid } from "./Grid";
import { Snake } from "./Snake";
import { Configuration, MAX_LEVEL } from "./Configuration";
import { Cell } from "./Cell";

export class Game {
  private score: number = 0;
  private running: boolean = false;
  private grid: Grid;
  private snake: Snake;
  private configuration: Configuration;
  private nextTick: number;

  constructor(configuration: Configuration) {
    this.configuration = configuration;
    this.snake = new Snake();
    this.grid = new Grid(this.configuration);
    this.nextTick = 0;
    this.running = true;
  }

  getSnake(): Snake {
    return this.snake;
  }

  getConfiguration() {
    return this.configuration;
  }

  shouldUpdate(time: number): boolean {
    return this.running && time >= this.nextTick;
  }

  update(time: number) {
    this.nextTick = time + this.configuration.speed;

    this.snake.move();

    switch (this.checkState()) {
      case -1:
        this.die();
        break;
      case 1:
        this.snake.grow();
        this.score += 100;
        this.grid.removeApple(this.snake.getHead());
        if (this.grid.isDone()) {
          this.levelUp();
        }
    }
  }

  checkState() {
    const cell = this.snake.getHead();

    // left the play area or ate itself??
    if (this.isOutside(cell) || this.snake.isSnake(cell)) {
      // dead
      return -1;
    }

    // ate apple?
    if (this.grid.isAppleInside(cell)) {
      return 1;
    }

    // nothing special
    return 0;
  }

  levelUp() {
    this.score += 1000;
    this.configuration.level++;
    if (this.configuration.level < MAX_LEVEL) {
      this.configuration.speed -= 7;
      this.grid.seed();
    } else {
      this.win();
    }
  }

  win() {
    this.stop();
  }

  die() {
    this.stop();
  }

  isOutside(cell: Cell) {
    const { nbCellsX, nbCellsY } = this.configuration;
    return cell.x < 0 || cell.x >= nbCellsX || cell.y < 0 || cell.y >= nbCellsY;
  }

  getScore(): number {
    return this.score;
  }

  getGrid(): Grid {
    return this.grid;
  }

  stop() {
    this.running = false;
  }
}
