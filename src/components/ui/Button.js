import { Button as RButton } from 'rsuite';

const Button = (props) => {
    const { children, onClick, color, block, type, disabled, bgColor } = props
    return (
        <RButton
            block={block}
            onClick={onClick}
            color={color}
            appearance="primary"
            type={type}
            disabled={disabled}
            style={{ backgroundColor: bgColor }}
        >
            {children}
        </RButton>
    );
};


export default Button;
