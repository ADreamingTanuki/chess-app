
// react
import { JSX } from "react";

// custom
import Coordinate from "./coordinate"
import { Piece, Team, ChessJSGameState, ChessJSTileState } from "./chess-types"
import { ConvertChessJS } from "./convert-chess-js";
import * as PieceComponent from "../components/piece";


export interface PieceInfo {
  position: Coordinate,
  type: Piece,
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
          type: ConvertChessJS.piece(tile.type),
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

  toArray(cellSize: number): JSX.Element[] {
    let k = -1;
    return this._pieces.map(piece => {
      k++;
      switch(piece.type) {
        case "king":
          return <PieceComponent.King
            key={k}
            position={piece.position}
            drawSize={cellSize}
            team={piece.team}
          />;
        case "queen":
          return <PieceComponent.Queen
            key={k}
            position={piece.position}
            drawSize={cellSize}
            team={piece.team}
          />;
        case "bishop":
          return <PieceComponent.Bishop
            key={k}
            position={piece.position}
            drawSize={cellSize}
            team={piece.team}
          />;
        case "knight":
          return <PieceComponent.Knight
            key={k}
            position={piece.position}
            drawSize={cellSize}
            team={piece.team}
          />;
        case "rook":
          return <PieceComponent.Rook
            key={k}
            position={piece.position}
            drawSize={cellSize}
            team={piece.team}
          />;
        case "pawn":
          return <PieceComponent.Pawn
            key={k}
            position={piece.position}
            drawSize={cellSize}
            team={piece.team}
          />;
      }
    });
  }
}