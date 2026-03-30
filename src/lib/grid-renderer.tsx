// react
import { JSX } from "react";

// chess.js
import { SQUARES } from "chess.js";

// custom
import { TileClickCallback } from "./chess-types";
import { NUM_COLUMNS, NUM_ROWS } from "./chess-constants";
import Tile from "../components/tile";
import Coordinate from "./coordinate";

export default class RenderGrid {

  _selectedTile?: Coordinate;
  _visibleMoves?: Coordinate[];
  _callback: TileClickCallback;

  constructor(callback: TileClickCallback) {
    this._callback = callback;
  }

  static using(callback: TileClickCallback): RenderGrid {
    return new RenderGrid(callback);
  }

  withVisibleMoves(positions?: Coordinate[]): RenderGrid {
    this._visibleMoves = positions;
    return this;
  }

  withSelectedTile(position?: Coordinate) : RenderGrid {
    this._selectedTile = position;
    return this;
  }

  toArray():JSX.Element[] {

    let grid: JSX.Element[] = []

    for (let row = NUM_ROWS -1; row >= 0; row--) {
      for (let col = 0; col < NUM_COLUMNS; col++) {
        const i = (row * NUM_COLUMNS) + col;

        // check selcted tile
        const isSelected =
          this._selectedTile &&
          this._selectedTile.row === row &&
          this._selectedTile.column === col;

        // check visible moves
        let isVisibleMove = false;
        if (this._visibleMoves) {
          for (let j = 0; j < this._visibleMoves.length; j++) {
            if (
              this._visibleMoves[j].row !== row ||
              this._visibleMoves[j].column !== col
            ) continue;
            
            isVisibleMove = true;
            break;
          }
        }

        // build tile
        grid.push(<Tile 
          key={i} 
          coordinate={Coordinate.fromNumbers(row, col)}
          callback={this._callback}
          drawAsSelected = {isSelected}
          drawAsMove = {isVisibleMove}
        />);
      }
    }
    return grid;
  }
}
