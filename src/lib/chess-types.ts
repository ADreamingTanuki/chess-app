import Coordinate from "./coordinate";

export type Piece = 'king' | 'queen' | 'bishop' | 'knight' | 'rook' | 'pawn';
export type Team = 'black' | 'white';
export type SquareColour = 'black' | 'white';

export type MoveType = 'normal' | 'kingside-castle' | 'queenside-castle' | 'promotion' | 'en-passant' | 'capture';
export type Move = {
  type: MoveType,
  from: Coordinate,
  to: Coordinate
} 
export class MoveList {
  moves: Move[];
  constructor(moves: Move[]) { this.moves = moves }
  toTargetCoordinates = (): Coordinate[] => this.moves.map(move => move.to);  
}

export type TileClickCallback = (pos: Coordinate) => void;
export type PieceClickCallback = (pos: Coordinate) => void;

export type ChessJSTileState = {
  square: string; 
  type: string; 
  color: string;
} | null;

export type ChessJSGameState = ChessJSTileState[][];

