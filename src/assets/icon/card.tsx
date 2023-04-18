import * as React from 'react';
import Svg, { Rect, Path } from "react-native-svg"

export const CardIcon = ({props}: any) => {
  return (
    <Svg
    width={props.width}
    height={props.height}
      viewBox="0 0 94 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect
        x={0.881836}
        y={0.821899}
        width={93.0384}
        height={93.0384}
        rx={20.6752}
        fill="#fff"
      />
      <Path
        d="M16.388 31.189a7.753 7.753 0 017.753-7.754h46.52a7.753 7.753 0 017.752 7.754v3.876H16.388V31.19zm0 11.63V62.2a7.753 7.753 0 007.753 7.754h46.52a7.753 7.753 0 007.752-7.754V42.818H16.388zm11.63 7.753h3.876a3.877 3.877 0 013.877 3.876v3.877a3.877 3.877 0 01-3.877 3.876h-3.877a3.877 3.877 0 01-3.876-3.876v-3.877a3.876 3.876 0 013.877-3.876z"
        fill="#8DBCE8"
      />
    </Svg>
  );
}
