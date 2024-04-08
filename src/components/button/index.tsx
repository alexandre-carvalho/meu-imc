// Styles
import { useCallback } from 'react';
import * as S from './styles';

interface ButtonProps {
    background: 'success' | 'error';
    label: string;
    onClick: Function;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ background, disabled, label, onClick }) => {
    const onClickExternal = useCallback(
        (e: any) => {
            e.preventDefault();
            if (onClick) onClick();
        },
        [onClick]
    );

    return (
        <S.Button background={background} opacity={disabled ? 0.4 : 1.0} disabled={disabled} onClick={onClickExternal}>{label}</S.Button>
    )
}

export default Button;