
// this code should be tested for consistencey...

const ROW_TO_NUMBER_LOOKUP = new Map<string, number>(
  [
    ['a',0],
    ['b',1],
    ['c',2],
    ['d',3],
    ['e',4],
    ['f',5],
    ['g',6],
    ['h',7],
  ]
)

export default class Coordinate {
  coordStr: string

  constructor(coordStr: string) {
    this.coordStr = coordStr;
  }

  getX(): number {
    let row: string = this.coordStr.split("")[0];
    row = row.toLowerCase();
    const n: number | undefined = ROW_TO_NUMBER_LOOKUP.get(row);
    return n as number;
  }

  getY(): number {
    const col: string = this.coordStr.split("")[1];
    const n: number = Number.parseInt(col) - 1;
    return n;
  }
  
  getString(): string {
    return this.coordStr;
  }

}