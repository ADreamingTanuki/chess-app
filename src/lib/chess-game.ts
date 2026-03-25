
// Provides access to a singleton chess game run through chess.js
// This intermediate setup aims to allow react components to communicate with the game
// instance directley through state hooks, instead of forcing a clumsy top-down state architecture

import { Chess, Square } from "chess.js";
import Coordinate from "./coordinate";
import { makeErrorSubtag } from "./custom-errors";
import { Team } from "./chess-types";

const ERR_TAG = makeErrorSubtag("[ChessGame]");

export type TeamToMove = Team | undefined;

export default class ChessGame {
  
  static _game: Chess | undefined;
  static teamToMove: TeamToMove;
  static isActive: boolean = false;

  // start a new game session
  static new() {
    this._game = new Chess();
    this.isActive = true;
    this.teamToMove = 'white';
  }

  // error if no game session exists
  static async getMovesAt(position: Coordinate): Promise<Coordinate[]> {
    if (this._game === undefined) 
      throw new Error(ERR_TAG + `Tried to get moves at position '${position}' but no game has been initialized`);
    else 
      return this._game
        .moves({square: position.string as Square})
        .map(str => new Coordinate(str))
  }
}