import React from "react";

import { StyledMain } from "../../theme/common/layout";

export const Main = props => {
  return (
    <StyledMain>
      {props?.children ? props?.children : <h1>Add UI Component Here</h1>}
    </StyledMain>
  )
}