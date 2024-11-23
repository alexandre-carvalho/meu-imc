import { useCallback, useState } from "react";

// Styles
import * as S from "./styles";

// Components
import Button from "components/button";
import Card from "./components/card";

// Utils
import { maskHeight, maskWeight } from "utils/masks";

const Home = () => {
  const [userWeight, setUserWeight] = useState<string>("");
  const [userHeight, setUserHeight] = useState<string>("");
  const [imcResult, setImcResult] = useState<number>(0);
  const [imcType, setImcType] = useState<number>(0);
  const [imcDetails, setImcDetails] = useState<string>("");
  const [imcClassification, setImcClassification] = useState<string>("");
  const [result, setResult] = useState<boolean>(false);
  const [invalidValues, setInvalidValues] = useState<boolean>(false);

  const onChangeWeight = useCallback((weight: any) => {
    setUserWeight(weight);
  }, []);

  const onChangeHeight = useCallback((height: any) => {
    setUserHeight(height);
  }, []);

  const clearImcResults = useCallback(() => {
    setUserWeight("");
    setUserHeight("");
    setResult(false);
  }, []);

  // TODO: Add new color scheme to imcDetails
  const handleCalculateImc = useCallback(() => {
    const parseWeight = parseFloat(userWeight);
    const parseHeight = parseFloat(userHeight);

    if (parseWeight > 0 && parseHeight > 0) {
      const calculate = parseWeight / (parseHeight * parseHeight);

      if (calculate <= 18.4) {
        setImcType(1);
        setImcClassification("Abaixo do peso");
        setImcDetails(
          "Indica que a pessoa está abaixo do peso ideal, o que pode estar associado a problemas nutricionais ou de saúde."
        );
      } else if (calculate >= 18.5 && calculate <= 24.9) {
        setImcType(2);
        setImcClassification("Peso normal");
        setImcDetails(
          "Considerado o peso ideal para a maioria das pessoas, com menor risco para problemas de saúde relacionados ao peso."
        );
      } else if (calculate >= 25.0 && calculate <= 29.9) {
        setImcType(3);
        setImcClassification("Sobrepeso");
        setImcDetails(
          "Indica excesso de peso, o que pode aumentar o risco de doenças como hipertensão e diabetes."
        );
      } else if (calculate >= 30.0 && calculate <= 34.9) {
        setImcType(4);
        setImcClassification("Obesidade grau 1");
        setImcDetails("Risco moderado para problemas de saúde.");
      } else if (calculate >= 35.0 && calculate <= 39.9) {
        setImcType(4);
        setImcClassification("Obesidade grau 2");
        setImcDetails("Risco elevado para complicações de saúde.");
      } else {
        setImcType(4);
        setImcClassification("Obesidade grau 3 - obesidade mórbida");
        setImcDetails("Risco muito elevado de problemas graves de saúde.");
      }
      setImcResult(calculate);
      setResult(true);
    } else {
      setInvalidValues(true);
      setResult(false);
      setTimeout(() => {
        setInvalidValues(false);
      }, 5000);
    }
  }, [userHeight, userWeight, result, invalidValues]);

  const handleValidate = useCallback(() => {
    if (userWeight === "" || userHeight === "") return true;
    return false;
  }, [userWeight, userHeight]);

  return (
    <S.Container>
      <S.Title>Cálculo de IMC</S.Title>

      <S.TextContent>
        <S.Text>
          O Índice de Massa Corporal (IMC) é um cálculo simples que avalia a
          relação entre o peso e a altura de uma pessoa para determinar se ela
          está com o peso ideal.
        </S.Text>
        <S.Text>
          O IMC é utilizado pela Organização Mundial da Saúde (OMS) para
          classificar padrões de saúde relacionados ao peso, como a desnutrição
          e a obesidade.
        </S.Text>
      </S.TextContent>

      <S.CalculatorContainer>
        <S.CalculatorContent>
          <Card
            onChange={(e) => onChangeWeight(maskWeight(e.currentTarget.value))}
            maxLength={6}
            value={userWeight}
            placeholder="Digite seu peso"
            name="peso"
            label="Peso"
          />
          <Card
            onChange={(e) => onChangeHeight(maskHeight(e.currentTarget.value))}
            maxLength={4}
            value={userHeight}
            placeholder="Digite sua altura"
            name="altura"
            label="Altura"
          />
        </S.CalculatorContent>
        <Button
          background="success"
          disabled={handleValidate()}
          label="Calcular"
          onClick={handleCalculateImc}
        />
      </S.CalculatorContainer>

      {result && (
        <S.ResultContainer>
          <S.ResultRow>
            <S.ResultLabel weight={600}>IMC:</S.ResultLabel>
            <S.ResultLabel weight={400}>{imcResult.toFixed(2)}</S.ResultLabel>
          </S.ResultRow>
          <S.ResultRow>
            <S.ResultLabel weight={600}>Tipo:</S.ResultLabel>
            <S.ResultLabel weight={400}>{imcType}</S.ResultLabel>
          </S.ResultRow>
          <S.ResultRow>
            <S.ResultLabel weight={600}>Classificação:</S.ResultLabel>
            <S.ResultLabel weight={400}>{imcClassification}</S.ResultLabel>
          </S.ResultRow>
          <S.ResultRow>
            <S.ResultLabel weight={600}>Detalhes:</S.ResultLabel>
            <S.ResultLabel weight={400}>{imcDetails}</S.ResultLabel>
          </S.ResultRow>

          <S.ButtonContainer>
            <Button
              background="success"
              label="Limpar Pesquisa"
              onClick={clearImcResults}
            />
          </S.ButtonContainer>
        </S.ResultContainer>
      )}

      {invalidValues && (
        <S.ErrorLabel weight={600}>
          Por favor, digite Peso e Altura maior do que zero.
        </S.ErrorLabel>
      )}
    </S.Container>
  );
};

export default Home;
