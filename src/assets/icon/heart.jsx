import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const Heart_icon = (props) => {
  return (
    <Svg
      width={23}
      height={23}
      viewBox="0 0 60 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M52.856 7.166a14.214 14.214 0 00-20.106 0l-2.74 2.74-2.74-2.74A14.218 14.218 0 007.165 27.272l2.74 2.74L30.01 50.118l20.107-20.106 2.74-2.74a14.215 14.215 0 000-20.106v0z"
        stroke="#414141"
        strokeWidth={5.1688}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
