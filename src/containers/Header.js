/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { useContext, useRef} from 'react';
import {ACTIONS, ReduxStoreContext} from './Container';

const HeaderContainer = styled.div`
  width: 100%;
  height: 8rem;
  color: white;
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
  color: grey;
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
  const PL = useRef(null);
  const EN = useRef(null);

  const setLangVersion = (event) => {
    const value = event.target.innerText;
    if (value === 'PL'){
      PL.current.style.color = 'white';
      EN.current.style.color = 'grey';
    } else {
      PL.current.style.color = 'grey';
      EN.current.style.color = 'white';
    }
    dispatch({
        type: ACTIONS.SET_LANG_VERSION,
        payload: value 
    });         
}

    return (                               
       <HeaderContainer>
           <H1>SOLAR.JS</H1>
           <LangContainer>
               <LangH2 ref={PL} value="PL" onClick={setLangVersion}>PL</LangH2>
               <H2>|</H2>  
               <LangH2 ref={EN} style={{color: 'white'}} value="EN" onClick={setLangVersion}>EN</LangH2>
           </LangContainer>
       </HeaderContainer>       
    );
  }
  
  export default Header;
  