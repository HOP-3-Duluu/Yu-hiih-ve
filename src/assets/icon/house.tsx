import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

export const HouseIcon = ({props}: any) => {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4.688 45.833h11.718v-17.36h17.188v17.36h11.718V18.75L25 5.208 4.687 18.75v27.083zM0 50V16.667L25 0l25 16.667V50H28.906V32.639h-7.812V50H0z"
        fill="#FF678B"
      />
    </Svg>
  )
}
