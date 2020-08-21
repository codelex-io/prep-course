export interface Level {
  title: string;
  rows: number;
  columns: number;
  mines: number;
}

export const LEVELS: Level[] = [
  {
    title: "Beginner",
    rows: 10,
    columns: 10,
    mines: 10
  },
  {
    title: "Intermediate",
    rows: 25,
    columns: 25,
    mines: 25
  },
  {
    title: "Expert",
    rows: 100,
    columns: 100,
    mines: 9999
  }
];
