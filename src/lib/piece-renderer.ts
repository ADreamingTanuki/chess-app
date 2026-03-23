
// react
import { JSX } from "react";

// custom
import Coordinate from "./coordinate"
import { Piece, Team, ChessJSGameState, ChessJSTileState } from "./chess-types"
import { ConvertChessJS } from "./convert-chess-js";
import { Piece as PieceComponent } from "../components/piece";


export interface PieceInfo {
  position: Coordinate,
  piece: Piece,
  team: Team
}

export default class RenderPieces {
  _pieces: PieceInfo[];

  constructor() {
    this._pieces = new Array<PieceInfo>();
  }

  static fromChessJS(gamestate: ChessJSGameState): RenderPieces {
    let res = new RenderPieces();
    gamestate.forEach(row => {
      row.forEach((tile: ChessJSTileState) => {
        if (!tile) return;
        const cmd: PieceInfo = {
          position: new Coordinate(tile.square),
          piece: ConvertChessJS.piece(tile.type),
          team: ConvertChessJS.team(tile.color)
        }
        res._pieces.push(cmd);
      });
    })
    return res;
  }

  add = (el: PieceInfo) => this._pieces.push(el);

  toInfo(): PieceInfo[] {
    return this._pieces;
  }

  toArray = (cellSize: number): JSX.Element[] => 
    this._pieces.map(piece => PieceComponent({
      position: piece.position,
      drawSize: cellSize,
      team: piece.team
    }
  ));
}