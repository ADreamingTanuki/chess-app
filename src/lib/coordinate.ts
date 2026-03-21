
import { NUM_ROWS } from "./chess-constants";

const COLUMN_TO_NUMBER_LOOKUP = new Map<string, number>(
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

const ERR_TAG = "[ChessApp] [Coordinate] ";

export default class Coordinate {
  string: string;
  row: number;
  column: number;

  constructor(coordString: string) {

    console.log(COLUMN_TO_NUMBER_LOOKUP);

    if (coordString.length !== 2) {
      throw new Error(ERR_TAG + "Parameter coordString must be a two-character string");
    }

    this.string = coordString.toLowerCase();

    // determine row / column number from passed string

    const slices: string[] = coordString.split("");
    const colStr = slices[0].toLowerCase();
    const rowStr = slices[1];


    // columns (Alphabetic, A~H, mapping 0~7) ---------------------------------

    const colNum: number | undefined = COLUMN_TO_NUMBER_LOOKUP.get(colStr);

    if (typeof colNum === 'undefined') {
      throw new Error(ERR_TAG + `Parameter coordString must be a valid chess index. Column value '${colStr}' inferred from '${coordString}' should be a letter from A~H`);
    }    

    this.column = colNum as number;


    // rows (Numeric, 1~8, mapping 0~7) ---------------------------------------

    const rowNum: number | undefined = Number.parseInt(rowStr);

    if (!rowNum) {
      throw new Error(ERR_TAG + `Parameter coordString must be a valid chess index. Column value '${rowStr}' inferred from '${coordString}' should be numeric, but cannot be parsed into a number.`)
    }   
    
    this.row = rowNum as number;
    this.row -= 1;
    
    if (this.row < 0 || this.row >= NUM_ROWS) {
      throw new Error(ERR_TAG + `Parameter coordString must be a valid chess index. Column value '${rowStr}' inferred from '${coordString}' should be a number from 0~7`);
    }    
  }

  colour(): 'black' | 'white' {
    if (this.column % 2 === 0) {
      return this.row % 2 === 0 ? "black" : "white";
    } else {
      return this.row % 2 === 0 ? "white" : "black";
    } 
  }
}