

// Styles
import * as S from "./styles"


interface InputProps {
    label: string;
    value: string | number;
    placeholder: string;
    name: string;
    onChange?(value: any): void;
}

const Input: React.FC<InputProps> = ({ label, value, name, placeholder, onChange }) => {


    return (
        <S.Container>
            <S.Label>{label}</S.Label>
            <S.Field type="number" value={value} name={name} placeholder={placeholder} onChange={onChange} />
        </S.Container>
    )
}

export default Input;