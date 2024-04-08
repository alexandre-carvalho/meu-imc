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
  const [imcResult, setImcResult] = useState<number>(0);
  const [classification, setClassification] = useState<string>('');
  const [imcType, setImcType] = useState<number>(0);
  const [result, setResult] = useState<boolean>(false);
  const [invalidValues, setInvalidValues] = useState(false);

  const onChangeWeight = useCallback((weight: any) => {
    setUserWeight(weight)
  }, []);

  const onChangeHeight = useCallback((height: any) => {
    setUserHeight(height);
  }, []);

  const handleCalculateImc = useCallback(() => {
    const parseWeight = parseFloat(userWeight);
    const parseHeight = parseFloat(userHeight);

    if (parseWeight > 0 && parseHeight > 0) {
      const calculate = parseWeight / (parseHeight * parseHeight);

      if (calculate <= 18.5) {
        setClassification('Magreza');
      } else if (calculate > 18.5 && calculate <= 24.9) {
        setClassification('Normal');
      } else if (calculate > 24.9 && calculate <= 29.9) {
        setClassification('Sobrepeso');
        setImcType(1);
      } else if (calculate > 29.9 && calculate <= 39.9) {
        setClassification('Obesidade');
        setImcType(2);
      } else {
        setClassification('Obesidade Grave');
        setImcType(3);
      }
      setInvalidValues(false);
      setImcResult(calculate);
      setResult(true);
    } else {
      setInvalidValues(true);
      setResult(false);
    }
  }, [userHeight, userWeight]);

  const clearImcResults = useCallback(() => {
    setUserWeight('');
    setUserHeight('');
    setResult(false);
    setInvalidValues(false);
  }, []);

  return (
    <S.Container>
      <S.SectionTitle>
        <S.Title>
          Cálculo de IMC
        </S.Title>
      </S.SectionTitle>
      <S.ContainerSection>
        <S.InputContainer>
          <S.InputContent>
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
          </S.InputContent>
          <Button
            background="success"
            disabled={userWeight === '' || userHeight === ''}
            label="Calcular"
            onClick={handleCalculateImc} />
        </S.InputContainer>

        <S.TableContainer>
          <S.Title>TEXTO</S.Title>
        </S.TableContainer>

      </S.ContainerSection>
      {/* {result && (
        <S.ResultContainer>
          <S.Result>{imcResult.toFixed(2)}</S.Result>
          <S.Result>{classification}</S.Result>
          <S.Result>{imcType}</S.Result>
          <Button
            background="success"
            label="Limpar Pesquisa"
            onClick={clearImcResults} />
        </S.ResultContainer>
      )
      }
      {
        invalidValues && (
          <S.ResultContainer>
            <S.Result>Por favor, digite peso e altura maior que zero.</S.Result>
            <Button
              background="error"
              label="Limpar Pesquisa"
              onClick={clearImcResults} />
          </S.ResultContainer>
        )
      } */}
    </S.Container>
  );
};

export default Home;
