import {
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalTitle,
} from "./style";

export function Modal({ modalTitle, modalContent, buttonText, show, onClose }) {
  if (!show) {
    return null;
  }
  return (
    <ModalContainer>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>{modalTitle}</ModalTitle>
        </ModalHeader>
        <ModalBody>{modalContent}</ModalBody>
        <div>
          <button onClick={onClose}>{buttonText}</button>
        </div>
      </ModalContent>
    </ModalContainer>
  );
}
