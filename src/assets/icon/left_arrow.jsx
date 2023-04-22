import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const LeftArrow = (props) => {
  return (
    <Svg
      width={15}
      height={33}
      viewBox="0 0 19 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M.02 18.354c-.002-.604.208-1.19.594-1.654L13.536 1.193a2.587 2.587 0 113.98 3.308L5.938 18.354l11.164 13.852a2.585 2.585 0 01-.387 3.644 2.585 2.585 0 01-3.774-.362L.46 19.982a2.585 2.585 0 01-.44-1.628z"
        fill="#242424"
      />
    </Svg>
  )
}

