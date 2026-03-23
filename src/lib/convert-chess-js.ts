// chess.js
import { BISHOP, BLACK, KING, KNIGHT, PAWN, QUEEN, ROOK, WHITE } from "chess.js";

// custom
import { Piece, Team } from "./chess-types";
import { makeErrorSubtag } from "./custom-errors";

const ERR_TAG = makeErrorSubtag("[ConvertChessTs]");

export class ConvertChessJS {

  static piece(chessJsInput: string): Piece {
    switch (chessJsInput) {
      case PAWN: return 'pawn';
      case KNIGHT: return 'knight';
      case BISHOP: return 'bishop';
      case ROOK: return 'rook';
      case KING: return 'king';
      case QUEEN: return 'queen';
      default: throw new SyntaxError(ERR_TAG + `${chessJsInput} is not a valid chess.js piece type.`);
    }
  }
  
  static team(chessJsInput: string): Team {
    switch(chessJsInput) {
      case WHITE: return 'white';
      case BLACK: return 'black';
      default: throw new SyntaxError(ERR_TAG + `${chessJsInput} is not a valid chess.js team type.`);
    }
  }

}