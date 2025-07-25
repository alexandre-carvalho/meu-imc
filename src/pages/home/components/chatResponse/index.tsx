import React from "react";
import ReactMarkdown from "react-markdown";

// Styles
import * as S from "./styles";

interface ChatResponseProps {
  textResponse?: string;
}

const ChatResponse: React.FC<ChatResponseProps> = ({ textResponse }) => {
  return (
    <S.Container>
      <S.LabelContent>
        <S.Label>Texto gerado por meio de Inteligência Artificial</S.Label>
      </S.LabelContent>
      <S.TextArea>
        <ReactMarkdown>{textResponse}</ReactMarkdown>
      </S.TextArea>
    </S.Container>
  );
};

export default ChatResponse;
