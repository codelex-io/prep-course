import {
  Configuration,
  CELLS_HORIZONTAL,
  CELLS_VERTICAL,
  SPEED
} from "./engine/Configuration";
import { Game } from "./engine/Game";

const CELL_SIZE = 20;
const SCALE = 2.0;

class GameUI {
  private canvas: HTMLCanvasElement;
  private game: Game;

  constructor(canvas: HTMLCanvasElement, game: Game) {
    this.canvas = canvas;
    this.game = game;
    requestAnimationFrame(this.draw.bind(this));

    window.addEventListener("keydown", this.onKeyDown.bind(this), false);
    window.focus();
  }

  draw(time: number) {
    const context = this.canvas.getContext("2d")!;
    if (this.game.shouldUpdate(time)) {
      this.drawBackground(context);
      this.drawGrid(context);
      this.drawBrand(context);
      this.drawScore(context);
      this.drawSnake(context);
      this.drawApples(context);
      this.game.update(time);
    }
    requestAnimationFrame(this.draw.bind(this));
  }

  drawBackground(context: CanvasRenderingContext2D) {
    const { width, height } = this.game.getConfiguration();

    context.fillStyle = "#4caf50";
    context.fillRect(0, 0, width, height);
  }

  drawBrand(context: CanvasRenderingContext2D) {
    const { width, height } = this.game.getConfiguration();

    context.font = height / 2.5 + "px Roboto";
    context.textBaseline = "middle";
    context.textAlign = "center";
    context.fillStyle = "rgba(255,255,255,0.75)";
    context.fillText("CODELEX", width / 2, height / 2);
  }

  drawScore(context: CanvasRenderingContext2D) {
    context.font = 35 * SCALE + "px Arial";
    context.textAlign = "left";
    context.textBaseline = "top";
    context.fillStyle = "rgba(255,255,255,0.75)";
    context.fillText(game.getScore().toString(), 10 * SCALE, 10 * SCALE);
  }

  drawGrid(context: CanvasRenderingContext2D) {
    const game = this.game;
    const { width, height, cellWidth, cellHeight } = game.getConfiguration();
    const lineWidth = 1 * SCALE;

    context.strokeStyle = "rgba(255,255,255,0.95)";
    context.lineWidth = lineWidth;

    for (let x = 0; x <= width; x += cellWidth) {
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x, height);
      context.stroke();
    }

    for (let y = 0; y <= height; y += cellHeight) {
      context.beginPath();
      context.moveTo(0, y);
      context.lineTo(width, y);
      context.stroke();
    }
  }

  drawApples(context: CanvasRenderingContext2D) {
    const { cellWidth, cellHeight } = game.getConfiguration();
    const lineWidth = 1 * SCALE;

    context.fillStyle = "#e91e63";
    const apples = game.getGrid().getApples();
    apples.forEach(cell =>
      context.fillRect(
        cellWidth * cell.x + lineWidth,
        cellHeight * cell.y + lineWidth,
        cellWidth - lineWidth * 2,
        cellHeight - lineWidth * 2
      )
    );
  }

  drawSnake(context: CanvasRenderingContext2D) {
    const snake = this.game.getSnake();
    const { cellWidth, cellHeight } = this.game.getConfiguration();
    // head
    const size = (CELL_SIZE * SCALE) / 10;
    const offset = (CELL_SIZE * SCALE) / 3;
    const x = cellWidth * snake.getHead().x;
    const y = cellHeight * snake.getHead().y;
    context.fillStyle = "#111111";
    context.fillRect(x, y, cellWidth, cellHeight);
    // eyes
    switch (snake.getDirection()) {
      case "Up":
        context.beginPath();
        context.arc(x + offset, y + offset, size, 0, 2 * Math.PI, false);
        context.arc(x + 2 * offset, y + offset, size, 0, 2 * Math.PI, false);
        context.fillStyle = "white";
        context.fill();
        break;
      case "Down":
        context.beginPath();
        context.arc(x + offset, y + 2 * offset, size, 0, 2 * Math.PI, false);
        context.arc(
          x + 2 * offset,
          y + 2 * offset,
          size,
          0,
          2 * Math.PI,
          false
        );
        context.fillStyle = "white";
        context.fill();
        break;
      case "Right":
        context.beginPath();
        context.arc(x + 2 * offset, y + offset, size, 0, 2 * Math.PI, false);
        context.arc(
          x + 2 * offset,
          y + 2 * offset,
          size,
          0,
          2 * Math.PI,
          false
        );
        context.fillStyle = "white";
        context.fill();
        break;
      case "Left":
        context.beginPath();
        context.arc(x + offset, y + offset, size, 0, 2 * Math.PI, false);
        context.arc(x + offset, y + 2 * offset, size, 0, 2 * Math.PI, false);
        context.fillStyle = "white";
        context.fill();
        break;
    }
    // tail
    context.fillStyle = "#333333";
    const tail = snake.getTail();
    tail.forEach(cell =>
      context.fillRect(
        cellWidth * cell.x,
        cellHeight * cell.y,
        cellWidth,
        cellHeight
      )
    );
  }

  onKeyDown(event: KeyboardEvent) {
    const snake = this.game.getSnake();
    switch (event.key) {
      case "ArrowUp":
        event.preventDefault();
        snake.setDirection("Up");
        break;
      case "ArrowDown":
        event.preventDefault();
        snake.setDirection("Down");
        break;
      case "ArrowLeft":
        event.preventDefault();
        snake.setDirection("Left");
        break;
      case "ArrowRight":
        event.preventDefault();
        snake.setDirection("Right");
        break;
    }
  }
}

const createCanvas = (): HTMLCanvasElement => {
  const container = document.getElementById("game")!;
  const canvas = document.createElement("Canvas") as HTMLCanvasElement;
  container.appendChild(canvas);

  // canvas element size in the page
  canvas.style.width = CELLS_HORIZONTAL * CELL_SIZE + "px";
  canvas.style.height = CELLS_VERTICAL * CELL_SIZE + "px";

  // image buffer size
  canvas.width = CELLS_HORIZONTAL * CELL_SIZE * SCALE;
  canvas.height = CELLS_VERTICAL * CELL_SIZE * SCALE;

  return canvas;
};

const createConfiguration = (canvas: HTMLCanvasElement): Configuration => {
  return {
    level: 0,
    speed: SPEED,
    width: canvas.width,
    height: canvas.height,
    nbCellsX: CELLS_HORIZONTAL,
    nbCellsY: CELLS_VERTICAL,
    cellWidth: canvas.width / CELLS_HORIZONTAL,
    cellHeight: canvas.height / CELLS_VERTICAL,
    apples: 5
  };
};

const canvas = createCanvas();
const configuration = createConfiguration(canvas);
const game = new Game(configuration);

new GameUI(canvas, game);
