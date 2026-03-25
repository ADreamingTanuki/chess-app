import { CSSProperties, ReactNode } from "react";
import { Team } from "../lib/chess-types";
import COLOUR from "../lib/colours";

const STYLE: CSSProperties = {
  width: '50px',
  height: '50px',
  border: `2px solid #888`,
  borderRadius: '50%',
  margin: '10px'
}

export interface TurnIndicatorProps {
  isActive: boolean,
  teamToPlay: Team
}

export default function TurnIndicator(props: TurnIndicatorProps): ReactNode {
  
  let finalStyle;

  if (!props.isActive) {
    finalStyle = {
      ...STYLE,
      backgroundColor: '#555',
      color: '#aaa'
    } as CSSProperties;
  }
  else if (props.teamToPlay === 'black') {
    finalStyle = {
      ...STYLE,
      backgroundColor: COLOUR.BLACK_2,
      color: COLOUR.WHITE_1
    }
  }
  else {
    finalStyle = {
      ...STYLE,
      backgroundColor: COLOUR.WHITE_2,
      color: COLOUR.BLACK_1
    }
  }

  return (
    <div style={finalStyle}></div>
  )
}