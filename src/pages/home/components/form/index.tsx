
// Styles
import * as S from "./styles"


interface Props {
    label: string;
}

const Form: React.FC<Props> = ({ label }) => {
    return (
        <S.Container>
            <S.Label>{label}</S.Label>
            <S.InputField>
                <S.Label>INPUT</S.Label>
            </S.InputField>
        </S.Container>
    )
}

export default Form;