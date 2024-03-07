import { useCallback, useState } from "react";

// Styles
import * as S from "./styles";

// Components
import Input from 'components/input';
import Button from "components/button";

// Utils
import { maskHeight, maskWeight } from "utils/masks";

// Services
import { calculateImc } from "services/chatApi";

const Home = () => {
  const [userWeight, setUserWeight] = useState('');
  const [userHeight, setUserHeight] = useState('');

  const onChangeWeight = useCallback((weight: any) => {
    setUserWeight(weight)
  }, []);

  const onChangeHeight = useCallback((height: any) => {
    setUserHeight(height);
  }, []);


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
          onChange={(e) => onChangeWeight(maskWeight(e.currentTarget.value))}
          maxLength={6}
          value={userWeight}
          placeholder='Digite seu peso'
          name="peso"
          label="Peso" />
        <Input
          onChange={(e) => onChangeHeight(maskHeight(e.currentTarget.value))}
          maxLength={4}
          value={userHeight}
          placeholder='Digite sua altura'
          name="altura"
          label="Altura" />
      </S.InputContainer>
      <S.ButtonContainer>
        <Button
          disabled={userWeight === '' || userHeight === ''}
          label="Calcular"
          onClick={handleCalculateImc} />
      </S.ButtonContainer>

    </S.Container>
  );
};

export default Home;
