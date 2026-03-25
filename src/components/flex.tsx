import { JSX, CSSProperties, ReactNode } from "react"

export type FlexDirection = 'row' | 'column';

const STYLE = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
} as CSSProperties

function buildStyle(direciton: FlexDirection): CSSProperties {
  const dir = direciton === 'row' ? 'row' : 'column';
  return {
    ...STYLE,
    flexDirection: dir
  };
}

export interface FlexProps {
  direciton: FlexDirection,
  children?: ReactNode[] | ReactNode
}

export default function Flex(props: FlexProps): JSX.Element {
  return (
    <div style={buildStyle(props.direciton)}>
      {props.children}
    </div>
  )
}