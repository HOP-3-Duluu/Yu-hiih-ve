import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function LogoutIcon({props}: any) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M7.5 35c-.667 0-1.25-.25-1.75-.75S5 33.167 5 32.5v-25c0-.667.25-1.25.75-1.75S6.833 5 7.5 5h12.125v2.5H7.5v25h12.125V35H7.5zm20.25-7.708L25.958 25.5l4.25-4.25H15.625v-2.5h14.5l-4.25-4.25 1.792-1.792L35 20.042l-7.25 7.25z"
        fill="red"
      />
    </Svg>
  );
}

export default LogoutIcon;
