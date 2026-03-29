
import { NUM_COLUMNS, NUM_ROWS } from "./chess-constants";
import { SquareColour } from "./chess-types";

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

const NUMBER_TO_COLUMN_LOOKUP = new Map<number, string>(
  [
    [0,'a'],
    [1,'b'],
    [2,'c'],
    [3,'d'],
    [4,'e'],
    [5,'f'],
    [6,'g'],
    [7,'h'],
  ]
)

const ERR_TAG = "[ChessApp] [Coordinate] ";

// @TODO: big refactor of class
// constructor -> two separate factory methods
// tests need to be updated and re-run
// validate tests for other classes at the same time!!!
// also fix everything that used the old constructor yaaaay

export default class Coordinate {

  string: string;
  row: number;
  column: number;

  constructor(string: string, row: number, column: number) {
    this.string = string;
    this.row = row;
    this.column = column;
  }

  static fromString(coordString: string): Coordinate {

    if (coordString.length !== 2) {
      throw new Error(ERR_TAG + `Parameter coordString - value: ${coordString} - must be a two-character string`);
    }

    const resultString = coordString.toLowerCase();

    // determine row / column number from passed string

    const slices: string[] = coordString.split("");
    const colStr = slices[0].toLowerCase();
    const rowStr = slices[1];


    // @TODO: YOU GOT ROW/COLUMN MIXED UP AGAINNNN!!!!

    // columns (Alphabetic, A~H, mapping 0~7) ---------------------------------

    const colNum: number | undefined = COLUMN_TO_NUMBER_LOOKUP.get(colStr);

    if (typeof colNum === 'undefined') {
      throw new Error(ERR_TAG + `Parameter coordString must be a valid chess index. Column value '${colStr}' inferred from '${coordString}' should be a letter from A~H`);
    }    

    const resultColumn = colNum as number;


    // rows (Numeric, 1~8, mapping 0~7) ---------------------------------------

    const rowNum: number | undefined = Number.parseInt(rowStr);

    if (!rowNum) {
      throw new Error(ERR_TAG + `Parameter coordString must be a valid chess index. Row value '${rowStr}' inferred from '${coordString}' should be numeric, but cannot be parsed into a number.`)
    }   
    
    let resultRow = rowNum as number;
    resultRow -= 1;
    
    if (resultRow < 0 || resultRow >= NUM_ROWS) {
      throw new Error(ERR_TAG + `Parameter coordString must be a valid chess index. Row value '${rowStr}' inferred from '${coordString}' should be a number from 0~7`);
    }  
    
    return new Coordinate(resultString, resultRow, resultColumn);
  }

  static fromNumbers(row: number, column: number): Coordinate {

    if (!Number.isInteger(row) || !Number.isInteger(column)) {
      throw new Error(`${ERR_TAG} Parameter row:'${row}' and column: '${column} must be integers`);      
    }

    if (row < 0 || row >= NUM_ROWS) {
      throw new Error(`${ERR_TAG} Parameter row is '${row}', when it must be within a range of [0~7] inclusive`);
    }

    if (column < 0 || column >= NUM_COLUMNS) {
      throw new Error(`${ERR_TAG} Parameter column is '${column}', when it must be within a range of [0~7] inclusive`);
    }

    let resString = NUMBER_TO_COLUMN_LOOKUP.get(column) as string;
    resString += (row + 1).toString();

    return new Coordinate(resString, row, column);    
  }

  colour(): SquareColour {
    if (this.column % 2 === 0) {
      return this.row % 2 === 0 ? "black" : "white";
    } else {
      return this.row % 2 === 0 ? "white" : "black";
    } 
  }
}