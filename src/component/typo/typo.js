import React from "react";
import { StyledText } from '../../theme/common/typo'

export const Text = props => {
  return (
    <StyledText {...props}>{props?.children && props?.children}</StyledText>
  )
}