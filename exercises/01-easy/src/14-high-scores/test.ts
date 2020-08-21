import { HighScores } from "./index";

describe("High Scores Test Suite", () => {
  test("List of scores", () => {
    const input = [30, 50, 20, 70];
    expect(new HighScores(input).scores).toEqual([30, 50, 20, 70]);
  });

  test("Latest score", () => {
    const input = [100, 0, 90, 30];
    expect(new HighScores(input).latest).toEqual(30);
  });

  test("Personal best", () => {
    const input = [40, 100, 70];
    expect(new HighScores(input).personalBest).toEqual(100);
  });

  test("Personal top three from a list of scores", () => {
    const input = [10, 30, 90, 30, 100, 20, 10, 0, 30, 40, 40, 70, 70];
    expect(new HighScores(input).personalTopThree).toEqual([100, 90, 70]);
  });

  test("Personal top highest to lowest", () => {
    const input = [20, 10, 30];
    expect(new HighScores(input).personalTopThree).toEqual([30, 20, 10]);
  });

  test("Personal top when ther eis a tie", () => {
    const input = [40, 20, 40, 30];
    expect(new HighScores(input).personalTopThree).toEqual([40, 40, 30]);
  });

  test("Personal top when there are less than 3", () => {
    const input = [30, 70];
    expect(new HighScores(input).personalTopThree).toEqual([70, 30]);
  });

  test("Personal top when there is only one", () => {
    const input = [40];
    expect(new HighScores(input).personalTopThree).toEqual([40]);
  });
});
