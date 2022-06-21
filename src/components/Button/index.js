import { ButtonWrapper, ButtonText } from "./styles";

export function Button({ text, color, onClick }) {
  return (
    <>
      <ButtonWrapper color={color} onClick={() => onClick()}>
        <ButtonText>{text}</ButtonText>
      </ButtonWrapper>
    </>
  );
}
