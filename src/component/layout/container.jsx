import React from "react"
import { StyledContainer } from "../../theme/common/layout"

export const Container = ({ children, ...props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>
}
