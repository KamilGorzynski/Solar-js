/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { useContext} from 'react';
import {ACTIONS, ReduxStoreContext} from './Container';

const HeaderContainer = styled.div`
  width: 100%;
  height: 8rem;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.904), rgba(35, 35, 35, 0.904));
  color: white;
  margin-bottom: 4rem;
  padding: 1.5rem 1.5rem 0 1.5rem;
  display: flex;
  justify-content: space-between;
`
const H1 = styled.h1`
  font-size: 4rem;
  margin-block-start: 0;
  margin-block-end: 0;
  font-family: 'Turret Road', cursive;
`

const LangH2 = styled.h2`
  margin: 0.5rem;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  &: hover {
    transform: scale(1.1);
  }
`
const H2 = styled.h2`
  margin: 0.5rem;
  
`

const LangContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0rem;
`

const Header = () => {

  const { dispatch } = useContext(ReduxStoreContext);

  const setLangVersion = (event) => {
    dispatch({
        type: ACTIONS.SET_LANG_VERSION,
        payload: event.target.innerText 
    });         
}

    return (                               
       <HeaderContainer>
           <H1>SOLAR.JS</H1>
           <LangContainer>
               <LangH2 value="PL" onClick={setLangVersion}>PL</LangH2>
               <H2>|</H2>  
               <LangH2 value="EN" onClick={setLangVersion}>EN</LangH2>
           </LangContainer>
       </HeaderContainer>       
    );
  }
  
  export default Header;
  