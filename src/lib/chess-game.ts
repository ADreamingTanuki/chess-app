
// Provides access to a singleton chess game run through chess.js
// This intermediate setup aims to allow react components to communicate with the game
// instance directley through state hooks, instead of forcing a clumsy top-down state architecture

import { Chess, Square } from "chess.js";
import Coordinate from "./coordinate";
import { makeErrorSubtag } from "./custom-errors";
import { Move as ChessJSMove } from "chess.js";
import { MoveList, MoveType } from "./chess-types";

const ERR_TAG = makeErrorSubtag("[ChessGame]");


export default class ChessGame {
  
  static game: Chess = new Chess();

  // start a new game session
  static new() {
    this.game.reset();
  }

  static clear() {
    this.game.clear();
  }
 
  // error if no game session exists
  static getMovesAt(position: Coordinate): MoveList {
    if (this.game === undefined) 
      throw new Error(ERR_TAG + `Tried to get moves at position '${position}' but no game has been initialized`);
    else 
      return new MoveList(
        this.game
        .moves({square: position.string as Square, verbose: true})
        .map(move => {
          console.log(`visible move: ${move}`);
          return {
            type: parseChessJSMoveType(move),
            from: position,
            to: Coordinate.fromString(move.to)
          };
        }
      ));
  }
  
  static async tryMove(from: Coordinate, to: Coordinate): Promise<void> {
    if (this.game === undefined)
      throw new Error(ERR_TAG + `Tried to execute a move but no game has been initialized`);
    else this.game.move({from: from.string, to: to.string})
  }
}

function parseChessJSMoveType(move: ChessJSMove): MoveType {
  if (move.isCapture()) return 'capture';
  if (move.isKingsideCastle()) return 'kingside-castle';
  if (move.isPromotion()) return 'promotion';
  if (move.isQueensideCastle()) return 'queenside-castle';
  if (move.isEnPassant()) return 'en-passant';
  return 'normal';
}