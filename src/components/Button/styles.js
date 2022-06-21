import styled from "styled-components";

export const ButtonWrapper = styled.button`
  background-color: ${({ color }) => color};
  text-align: center;
  border-radius: 28px;
  border-style: none;
  width: 12%;
  padding: 11px 0px;
  cursor: pointer;
`;

export const ButtonText = styled.span`
  color: rgb(17, 17, 17);
  font-family: AprovaSansBold;
  font-size: 18px;
  line-height: 1;
  letter-spacing: -0.5px;
`;
