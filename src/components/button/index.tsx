// Styles
import { useCallback } from 'react';
import * as S from './styles';

interface ButtonProps {
    label: string;
    onClick: Function;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ disabled, label, onClick }) => {
    const onClickExternal = useCallback(
        (e: any) => {
            e.preventDefault();
            if (onClick) onClick();
        },
        [onClick]
    );

    return (
        <S.Button opacity={disabled ? 0.4 : 1.0} disabled={disabled} onClick={onClickExternal}>{label}</S.Button>
    )
}

export default Button;