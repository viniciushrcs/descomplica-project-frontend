import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  width: 500px;
  background-color: #fff;
  font-family: AprovaSansBlack, sans-serif;
  padding: 10px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalHeader = styled.div`
  padding: 10px;
`;

export const ModalBody = styled.div`
  padding: 20px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  width: 80%;
`;

export const ModalTitle = styled.h3`
  font-family: AprovaSansBlack, sans-serif;
  font-size: 16px;
`;
