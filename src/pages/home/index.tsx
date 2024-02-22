import { useCallback, useEffect, useState } from "react";

// Styles
import * as S from "./styles";

// Components
import Input from 'components/input';
import Button from "components/button";

// Services
import { calculateImc } from "services/chatApi";

const Home = () => {
  const [userWeight, setUserWeight] = useState(0);
  const [userHeight, setUserHeight] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (userWeight > 0 && userHeight > 0) {
      setIsDisabled(false);
    }
    else {
      setIsDisabled(true);
    }

  }, [userWeight, userHeight]);

  const handleCalculateImc = useCallback(() => {
    return calculateImc(userWeight, userHeight);
  }, [userWeight, userHeight]);

  return (
    <S.Container>
      <S.SectionTitle>
        <S.Title>
          Cálculo de IMC
        </S.Title>
      </S.SectionTitle>
      <S.InputContainer>
        <Input
          onChange={(e) => setUserWeight(e.currentTarget.value)}
          value={userWeight}
          placeholder='Digite seu peso'
          name="peso"
          label="Peso" />
        <Input
          onChange={(e) => setUserHeight(e.currentTarget.value)}
          value={userHeight}
          placeholder='Digite sua altura'
          name="altura"
          label="Altura" />
      </S.InputContainer>
      <S.ButtonContainer>
        <Button disabled={isDisabled} label="Calcular" onClick={handleCalculateImc} />
      </S.ButtonContainer>

    </S.Container>
  );
};

export default Home;
