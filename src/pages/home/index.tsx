
// Styles
import { useState } from "react";
import * as S from "./styles";

// Local Components
import Input from 'pages/home/components/input';


const Home = () => {

  const [userWeight, setUserWeight] = useState('');


  console.log('PESO', userWeight);

  return (
    <S.Container>
      <S.SectionTitle>
        <S.Title>
          Cálculo de IMC
        </S.Title>
      </S.SectionTitle>
      <S.SectionContent>
        <Input
          onChange={(e) => setUserWeight(e.currentTarget.value)}
          value={userWeight}
          placeholder='Digite seu peso'
          name="peso"
          label="Peso" />
      </S.SectionContent>
    </S.Container>
  );
};

export default Home;
