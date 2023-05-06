import * as React from "react"
import Svg, { Rect } from "react-native-svg"

export const Categories_icon = ({props}: any) => {
  return (
    <Svg
      width={107}
      height={132}
      viewBox="0 0 107 132"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect y={32} width={107} height={100} rx={13} fill="#414141" />
      <Rect x={11} y={15} width={85} height={9} rx={4.5} fill="#414141" />
      <Rect x={19} width={69} height={8} rx={4} fill="#414141" />
    </Svg>
  )
}

