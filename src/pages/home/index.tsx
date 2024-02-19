
// Styles
import * as S from "./styles";

// Local Components
import Form from 'pages/home/components/form'


const Home = () => {
  return (
    <S.Container>
      <S.SectionTitle>
        <S.Title>
          Cálculo de IMC
        </S.Title>
      </S.SectionTitle>
      <S.SectionContent>
        <Form label="Peso" />
        <Form label="Altura" />
      </S.SectionContent>
    </S.Container>
  );
};

export default Home;
