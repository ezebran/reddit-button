import styled from 'styled-components'
import {colors} from './theme'

export const StopButtonStyle = styled.button`
    display: ${props => props.isRun ? "flex" : "none"};
    border-radius: 100px;
    border: none;
    padding: 0.5em 2.5em;
    color: ${props => props.isRun ? "white" :  "#969696"};
    font-weight: 600;
    cursor: ${props => props.isRun ? "pointer" : "no-drop" };
    background: ${props => props.isRun ? colors.primary :  "#c8c8c8"};
`;

export const ResetButtonStyle = styled.button`
    border-radius: 100px;
    padding: 0.5em 2.5em;
    color: ${props => props.count ? "gray" : colors.primary};
    font-weight: 600;
    cursor: ${props => props.count ? "no-drop" : "pointer"};
    border: 1px solid ${props => props.count ? "gray" : colors.primary};
`;

export const SendButtonStyle = styled.button`
    display: ${props => props.isRun ? "none" : "flex"};
    border-radius: 100px;
    border: none;
    padding: 0.5em 2.5em;
    color: ${props => props.isRun ? "#969696" :  "white"};
    font-weight: 600;
    cursor: ${props => props.isRun ? "no-drop" : "pointer" };
    background: ${props => props.isRun ? "#c8c8c8" : colors.primary};
`;


export const MainContainer = styled.div`
    padding: 5% 2em;
    border: 1px solid rgb(150,150,150);
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 22em;
    background: white;
`;

export const FormContainer = styled.form`
    display: ${props => props.name ? "none" : " flex"};
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const CountText = styled.h1`
    display: ${props => props.name ? "none" : " flex"};
    font-size: 7em;
    font-weight: 600;
    color:${colors.black};
`;

export const ButtonsContainer = styled.div`
    display: ${props => props.isRun ? "flex" : "none"};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;
`;

export const InputName = styled.input`
    background: rgb(240,240,240);
    border: 1px solid ${colors.black};
    margin-bottom: 1em;
    display: ${props => props.isRun ? "none" : "inline-block"};
    padding: 0.5em 0.75em;
    border-radius: 100px;
    font-size: 1em;
    &:focus{
        border:1px solid ${colors.primary};
        outline: none;
    }
`;
