import styled from 'styled-components'
import {colors} from './theme'

export const RecordsContainer = styled.div`
    border: 1px solid rgb(150,150,150);
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 22em;
    background: white;
`;

export const RecordHead = styled.div`
    background: ${colors.secondary};
    width: 100%;
    padding:0.5em;
    border-bottom: 1px solid rgb(150,150,150);
    h3{
        color: ${colors.black};
        font-weight: 600;
    }
`;

export const RecordSingle = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding:0.5em;
    border-bottom: 1px solid rgb(150,150,150);
    &:last-child{
        border-bottom: none;
    }
    h3{
        color: ${colors.black};
        font-weight: 600;
    }
`;

export const RecordColor = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 2px;
    border:${props => props.color === "#ffffff" ? "1px solid black" : "none"}; // Check if is white and add a border
    background: ${props => props.color};
`;