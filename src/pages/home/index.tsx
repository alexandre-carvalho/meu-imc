import { useCallback, useState } from "react";

// Styles
import * as S from "./styles";

// Components
import Input from 'components/input';
import Button from "components/button";

// Utils
import { maskHeight, maskWeight } from "utils/masks";

const Home = () => {
  const [userWeight, setUserWeight] = useState<string>('');
  const [userHeight, setUserHeight] = useState<string>('');
  const [textResult, setTextResult] = useState<number>(0);
  const [result, setResult] = useState<boolean>(false);
  console.log('calculate', textResult);

  const onChangeWeight = useCallback((weight: any) => {
    setUserWeight(weight)
  }, []);

  const onChangeHeight = useCallback((height: any) => {
    setUserHeight(height);
  }, []);


  const handleCalculateImc = useCallback(() => {
    const parseWeight = parseFloat(userWeight);
    const parseHeight = parseFloat(userHeight);
    const calculate = parseWeight / (parseHeight * parseHeight);

    setTextResult(calculate);
    setResult(true);

  }, [userHeight, userWeight]);

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
      {result && (
        <S.ResultContainer>
          <S.Result>{textResult.toFixed(2)}</S.Result>
        </S.ResultContainer>
      )
      }
    </S.Container>
  );
};

export default Home;
