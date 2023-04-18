import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const Home_icon = ({props}: any) => {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 53 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M21.09 3H3v18.09h18.09V3zM49.52 3H31.428v18.09h18.09V3zM49.52 31.428H31.428V49.52h18.09V31.43zM21.09 31.428H3V49.52h18.09V31.43z"
        stroke="#414141"
        strokeWidth={5.1688}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

