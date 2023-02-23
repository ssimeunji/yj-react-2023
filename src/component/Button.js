import styled, { css } from "styled-components";

const VARIANTS = {

    header: css`

    box-shadow: 0 2px 0 #6f9a37;
    color: #ffffff;
    background-color: #82b440;

    &:active,
    &:hover,
    &:focus {
        background-color: rgba(130, 180, 64 , 0.5);
        box-shadow: 0 2px 0 rgba(111, 154, 55, 0.5);
    }

    &:disabled {
    cursor: default;
    opacity: 0.5;
    }
    `
}

const StyledButton = styled.button`
    ${(p) => p.variantsStyle}

    margin: 0;
    border: none;
    cursor: pointer;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 14px;
    padding: 5px 20px;
    border-radius: 8px;
    line-height: 1.5;
`;

function Button({ disabled, variant, children }) {
    const variantsStyle = VARIANTS[variant];

    return (
    <StyledButton
        disabled={disabled}
        variantsStyle={variantsStyle}
    >
        {children}
    </StyledButton>
    );
}

export default Button;