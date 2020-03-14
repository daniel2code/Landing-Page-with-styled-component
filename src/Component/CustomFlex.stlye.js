// import styled { css } from './styled-components4'

import styled, { css } from "styled-components";

export const CustomFlex = styled.form`
  display: flex;
  flex-direction: column;
  justify-contents: center;

  align-items: ${props => (props.ai ? props.ai : css`center`)};
  flex-direction: ${props => (props.row ?  css `row` : css ` column`)};
  `;
  // color:${props => (props.textC ? css `white` : css `yellow`)};


export const Size = styled.image`
  height: 10px;
  width: 4px;
`;
