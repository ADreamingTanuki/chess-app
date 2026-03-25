import { CSSProperties, ReactNode, useEffect, useState } from "react";
import { Team } from "../lib/chess-types";
import COLOUR from "../lib/colours";
import ChessGame, { TeamToMove } from "../lib/chess-game";


const STYLE: CSSProperties = {
  width: '50px',
  height: '50px',
  border: `2px solid #888`,
  borderRadius: '50%',
  margin: '10px'
}

function buildStyle(team: TeamToMove): CSSProperties {
  let res = { ...STYLE };

  if (typeof team === "undefined") {
    return {
      ...STYLE,
      backgroundColor: '#555',
      color: '#aaa'
    } as CSSProperties;
  }

  if (team === 'black') {
    res.backgroundColor = COLOUR.BLACK_2;
    res.color = COLOUR.WHITE_1;
  } else {
    res.backgroundColor = COLOUR.WHITE_2;
    res.color = COLOUR.BLACK_1;
  }

  return res as CSSProperties;
}

export default function TurnIndicator(): ReactNode {

  const [teamToMove, setTeamToMove] = useState<TeamToMove>();

  // todo state hook
  useEffect(() => {
    console.log("Use effect: team:" + ChessGame.teamToMove);
  }, [ChessGame.teamToMove]);

  return (
    <div style={buildStyle(teamToMove)}></div>
  )
}