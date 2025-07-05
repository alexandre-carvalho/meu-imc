import Modal from "react-modal";

// Styles
import * as S from "./styles";

// Assets
import LoadingGif from "assets/loading/loading.gif";

interface LoadingProps {
  visible: boolean;
}

Modal.setAppElement("#root");

const Loading: React.FC<LoadingProps> = ({ visible }) => {
  return (
    <Modal
      isOpen={visible}
      style={{
        overlay: S.OverlayStyles,
        content: S.ContentStyles,
      }}
    >
      <S.Animation src={LoadingGif} />
    </Modal>
  );
};

export default Loading;
