import ReactDOM from "react-dom";
import {
  Button,
  Modal,
  Div,
  ButtonContainer,
} from "../styles/portalModal/PortalModalStyle";

const ReactPortal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <Div>
      <Modal>
        <ButtonContainer>
          <Button onClick={onClose}>X</Button>
        </ButtonContainer>
        {children}
      </Modal>
    </Div>,
    document.getElementById("modal-root")
  );
};

export default ReactPortal;
