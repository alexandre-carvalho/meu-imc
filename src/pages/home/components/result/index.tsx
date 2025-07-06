import React from "react";

// Styles
import * as S from "./styles";

//Components
import Button from "components/button";

interface ResultProps {
  result: number;
  type: number;
  classification: string;
  details: string;
  onCleanResults: Function;
  onClickChat: Function;
  disabled: boolean;
}

const Result: React.FC<ResultProps> = ({
  result,
  type,
  classification,
  details,
  onCleanResults,
  onClickChat,
  disabled,
}) => {
  return (
    <S.ResultContainer>
      <S.ResultRow>
        <S.ResultLabel weight={600}>IMC:</S.ResultLabel>
        <S.ResultLabel weight={400}>{result.toFixed(2)}</S.ResultLabel>
      </S.ResultRow>
      <S.ResultRow>
        <S.ResultLabel weight={600}>Tipo:</S.ResultLabel>
        <S.ResultLabel weight={400}>{type}</S.ResultLabel>
      </S.ResultRow>
      <S.ResultRow>
        <S.ResultLabel weight={600}>Classificação:</S.ResultLabel>
        <S.ResultLabel weight={400}>{classification}</S.ResultLabel>
      </S.ResultRow>
      <S.ResultRow>
        <S.ResultLabel weight={600}>Detalhes:</S.ResultLabel>
        <S.ResultLabel weight={400}>{details}</S.ResultLabel>
      </S.ResultRow>

      <S.ResultButtonContainer>
        <Button
          background="success"
          label="Realizar nova pesquisa"
          onClick={onCleanResults}
        />
        <Button
          disabled={disabled}
          background="info"
          label="Obter mais informações"
          onClick={onClickChat}
        />
      </S.ResultButtonContainer>
    </S.ResultContainer>
  );
};

export default Result;
