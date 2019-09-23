export type XO = "X" | "O" | "-";

export class Game {
  getCells(): XO[] {
    return ["X", "-", "-", "-", "-", "-", "-", "-", "-"];
  }

  getTurn(): XO {
    return "-";
  }

  getWinner(): XO {
    return "-";
  }

  isTie(): boolean {
    return false;
  }

  onClick(i: number) {
    console.log(`cell ${i} clicked`);
  }

  restart(): void {
    console.log("restart called");
  }
}
