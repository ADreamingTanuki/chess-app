
export type Piece = 'king' | 'queen' | 'bishop' | 'knight' | 'rook' | 'pawn';
export type Team = 'black' | 'white';
export type SquareColour = 'black' | 'white';


export type ChessJSTileState = {
  square: string; 
  type: string; 
  color: string;
} | null;

export type ChessJSGameState = ChessJSTileState[][];
