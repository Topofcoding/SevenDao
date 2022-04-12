import React from "react";
import styled from "styled-components";

interface ButtonProps {
    label: string;
    onClick: VoidFunction;
    disabled?: boolean;
}

const ButtonWrapper = styled.div<{disabled?: boolean}>`
    background-color: ${({disabled}) => disabled ? "rgba(24, 104, 183, 0.8)" :"rgb(24, 104, 183)" };
    border-color: rgb(24, 104, 183);
    height: 40px;
    display: flex;
    align-items: center;
    color: #ffffff;
    /* margin-right: 0.5rem;
    margin-left: 0.5rem; */
    padding: 0.5rem 1.25rem;
    font-size: 0.875rem;
    border-radius: 0.2rem;
    border: 1px solid transparent;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    font-weight: 500;
    cursor: pointer;
    line-height: 1.7;
    :hover {
        background-color: rgba(24, 104, 183, 0.8);
        border-color: rgba(24, 104, 183, 0.8);
    }
`;

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
    return <ButtonWrapper onClick={disabled ? () => {} : onClick} disabled={disabled}>{label}</ButtonWrapper>;
};

export default Button;
