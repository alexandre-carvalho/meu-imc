import { useCallback, useEffect, useRef, useState } from "react";

// Styles
import * as S from "./styles";

// Components
import Button from "components/button";
import Card from "./components/card";
import Result from "./components/result";
import Loading from "components/loading";
import ChatResponse from "./components/chatResponse";

// Utils
import { maskHeight, maskWeight } from "utils/masks";

// Models
import { imcRanges } from "model/imc";

// Hooks
import { useAppDispatch, useAppSelector } from "hooks";

// Store
import { ApplicationState } from "store";
import { handleChatAsync } from "store/chat/thunks";
import { chatDefaultSucces, chatSetIsSuccessMessage } from "store/chat";

const Home: React.FC = () => {
  const { loading, error, messageError, messageSuccess, isSuccessMessage } =
    useAppSelector((state: ApplicationState) => state.chat);
  const dispatch = useAppDispatch();
  const [userWeight, setUserWeight] = useState<string>("");
  const [userHeight, setUserHeight] = useState<string>("");
  const [imcResult, setImcResult] = useState<number>(0);
  const [imcType, setImcType] = useState<number>(0);
  const [imcDetails, setImcDetails] = useState<string>("");
  const [imcClassification, setImcClassification] = useState<string>("");
  const [result, setResult] = useState<boolean>(false);
  const [invalidValues, setInvalidValues] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const initOfPageRef = useRef<HTMLDivElement>(null);
  const endOfPageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (error && !loading) {
      setTimeout(() => {
        endOfPageRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 50);
      setIsError(true);
      setInterval(() => {
        setIsError(false);
      }, 5000);
    }
  }, [loading, error]);

  useEffect(() => {
    if (isSuccessMessage)
      setTimeout(() => {
        endOfPageRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 50);
  }, [isSuccessMessage]);

  useEffect(() => {
    setTimeout(() => {
      result
        ? endOfPageRef.current?.scrollIntoView({ behavior: "smooth" })
        : initOfPageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }, [result]);

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
    dispatch(chatSetIsSuccessMessage(false));
    dispatch(chatDefaultSucces(""));
  }, []);

  const handleCalculate = useCallback(() => {
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
    if (isSuccessMessage) return true;
    return false;
  }, [userWeight, userHeight, isSuccessMessage]);

  const handleChat = useCallback(() => {
    dispatch(handleChatAsync(imcResult, imcClassification));
  }, [imcResult, imcClassification]);

  return (
    <S.Container>
      <div ref={initOfPageRef} />
      <Loading visible={loading} />
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
        <>
          <Result
            result={imcResult}
            type={imcType}
            classification={imcClassification}
            details={imcDetails}
            disabled={isSuccessMessage!}
            onCleanResults={onCleanResults}
            onClickChat={handleChat}
          />

          {isError && <S.ErrorLabel weight={600}>{messageError}</S.ErrorLabel>}
        </>
      )}
      {isSuccessMessage && <ChatResponse textResponse={messageSuccess} />}
      <div ref={endOfPageRef} />
    </S.Container>
  );
};

export default Home;
