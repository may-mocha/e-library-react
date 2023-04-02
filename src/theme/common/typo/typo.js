import styled from "styled-components";
import { fontSize, fontWeight, color } from "../../attribute";

export const StyledText = styled.p`
  font-size: ${props => fontSize[props?.size] || props?.size}px;
  font-weight: ${props => fontWeight[props?.weight] || props?.weight};
  color: ${props => color[props?.color] || props?.color};
`