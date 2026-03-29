
// Provides access to a singleton chess game run through chess.js
// This intermediate setup aims to allow react components to communicate with the game
// instance directley through state hooks, instead of forcing a clumsy top-down state architecture

import { Chess, Square } from "chess.js";
import Coordinate from "./coordinate";
import { makeErrorSubtag } from "./custom-errors";
import { coordFromMove } from "./chess-game-helpers";

const ERR_TAG = makeErrorSubtag("[ChessGame]");


export default class ChessGame {
  
  static game: Chess = new Chess();

  // start a new game session
  static new() {
    this.game.reset()
  }

  // error if no game session exists
  static async getMovesAt(position: Coordinate): Promise<Coordinate[]> {
    if (this.game === undefined) 
      throw new Error(ERR_TAG + `Tried to get moves at position '${position}' but no game has been initialized`);
    else 
      return this.game
        .moves({square: position.string as Square})
        .map(move => {
          console.log(`visible move: ${move}`)
          return coordFromMove(move);
        })
  }
}