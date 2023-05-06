import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const EventIcon = ({props}: any) => {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 63 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M54.75 29.928a21.657 21.657 0 01-2.326 9.82 21.968 21.968 0 01-19.642 12.147 21.657 21.657 0 01-9.82-2.326L8.23 54.48l4.91-14.73a21.657 21.657 0 01-2.325-9.821 21.967 21.967 0 0112.147-19.642 21.657 21.657 0 019.82-2.326h1.293A21.916 21.916 0 0154.75 28.636v1.292z"
        stroke="#414141"
        strokeWidth={5.1688}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
