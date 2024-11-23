// Styles
import * as S from "./styles";

interface CardProps {
  label: string;
  value: any;
  placeholder: string;
  name: string;
  onChange?(value: any): void;
  maxLength: number;
}

const Card: React.FC<CardProps> = ({
  maxLength,
  label,
  value,
  name,
  placeholder,
  onChange,
}) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Field
        maxLength={maxLength}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </S.Container>
  );
};

export default Card;
