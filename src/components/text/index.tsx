
interface TextProps {
    label?: string
}

const Text: React.FC<TextProps> = ({ label }) => {
    return (
        <text>{label ?? 'Olá'}</text>
    )
}

export default Text;