import styled from "styled-components";

export const StyledMain = styled.main`
min-height: 50vh;
`
export const StyledContainer = styled.div`
  background: ${props => props?.theme?.color?.container?.[props?.bgColor] || props?.bgColor || props?.theme?.color?.container?.light};
`