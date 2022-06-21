import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  justify-content: space-between;
  background-color: rgb(255, 255, 255);
  padding: 20px 10px;
  border-radius: 24px;
  width: 100%;
  margin-bottom: 14px;
`;

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`;

export const CardItem = styled.span`
  display: flex;
  align-items: center;
  width: auto;
`;

export const Title = styled.h2`
  font-family: AprovaSansBlack, sans-serif;
  font-size: 18px;
  width: 100%;
  color: rgb(0, 0, 0);
  letter-spacing: -2.3px;
`;

export const Text = styled.p`
  margin-left: 10px;
  width: 100%;
  font-size: 14px;
  font-family: AprovaSans, sans-serif;
`;
