import { useCallback, useState } from "react";

// Services
import { sendMessage } from "services/openai";

// Styles
import * as S from "./styles";

// Components
import Button from "components/button";
import Card from "./components/card";
import Result from "./components/result";

// Utils
import { maskHeight, maskWeight } from "utils/masks";

// Models
import { imcRanges } from "model/imc";
import Loading from "components/loading";

const Home: React.FC = () => {
  const [userWeight, setUserWeight] = useState<string>("");
  const [userHeight, setUserHeight] = useState<string>("");
  const [imcResult, setImcResult] = useState<number>(0);
  const [imcType, setImcType] = useState<number>(0);
  const [imcDetails, setImcDetails] = useState<string>("");
  const [imcClassification, setImcClassification] = useState<string>("");
  const [result, setResult] = useState<boolean>(false);
  const [invalidValues, setInvalidValues] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);

  const onChangeWeight = useCallback((weight: any) => {
    setUserWeight(weight);
  }, []);

  const onChangeHeight = useCallback((height: any) => {
    setUserHeight(height);
  }, []);

  const onCleanResults = useCallback(() => {
    setUserWeight("");
    setUserHeight("");
    setResult(false);
  }, []);

  const handleCalculate = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    const parseWeight = parseFloat(userWeight);
    const parseHeight = parseFloat(userHeight);

    if (parseWeight > 0 && parseHeight > 0) {
      const calculate = parseWeight / (parseHeight * parseHeight);

      const imcData = imcRanges.find(
        ({ min = -Infinity, max = Infinity }) =>
          calculate >= min && calculate <= max
      );

      if (imcData) {
        setImcType(imcData.type);
        setImcClassification(imcData.classification);
        setImcDetails(imcData.details);
      }

      setImcResult(calculate);
      setResult(true);
    } else {
      setInvalidValues(true);
      setTimeout(() => setInvalidValues(false), 5000);
    }
  }, [userWeight, userHeight]);

  const handleValidate = useCallback(() => {
    if (userWeight === "" || userHeight === "") return true;
    return false;
  }, [userWeight, userHeight]);

  const handleChat = useCallback(() => {
    sendMessage();
  }, []);

  return (
    <S.Container>
      <Loading visible={isLoading} />
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
          onClick={handleCalculate}
        />
      </S.CalculatorContainer>

      {invalidValues && (
        <S.ErrorLabel weight={600}>
          Por favor, digite Peso e Altura maior do que zero.
        </S.ErrorLabel>
      )}

      {result && (
        <Result
          result={imcResult}
          type={imcType}
          classification={imcClassification}
          details={imcDetails}
          onCleanResults={onCleanResults}
          onClickChat={handleChat}
        />
      )}
    </S.Container>
  );
};

export default Home;
