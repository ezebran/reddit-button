import styled from 'styled-components'
import {colors} from './theme'

export const NavbarContainer = styled.div`
    width:100%;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    padding: 0.5em 5%;
`;

export const Nav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const NavLink = styled.a`
  color: ${colors.primary};
  font-weight: bold;
  cursor: pointer;
  padding: 0.5em;
`;

export const LayoutContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: ${colors.background};
    height:calc(100vh - 60px);
`;