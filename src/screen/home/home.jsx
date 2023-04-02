import React from "react";

import { StyledHome } from "../../theme/custom/home";
import { Text } from "../../component";

export const Home = () => {
  return (
    <StyledHome>
      <Text size="30" color="warn" weight='xs' as='span'>This</Text>
      <ul>
        <li>Hello</li>
      </ul>
    </StyledHome>
  )
}