/* eslint-disable linebreak-style */
import styled from 'styled-components';

export const Button = styled.button`
    color: var(--white);
    border: 3px solid var(--frontEnd);
    text-shadow: 1px 3px var(--primary);
    background: var(--black);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
&:hover,
&:focus {
    opacity: .5;
}
`;

export const ButtonExcluir = styled.button`
    color: var(--white);
    border: 1px solid var(--white);
    background: var(--frontEnd);
    box-sizing: border-box;
    cursor: pointer;
    padding: 3px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    margin-left: 22px;
    margin-bottom: 4px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    &:hover,
    &:focus {
    opacity: .5;
    }
`;

export default Button;
