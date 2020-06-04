/** @jsx jsx */
import {createContext, useReducer} from 'react';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import Solar from './Solar';
import PlanetData from './PlanetData';
import Header from './Header';

const Main = styled.div`
  width: 868px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.904);
  border: 2px rgba(46, 46, 46, 0.5) solid;
  border-radius: 2rem 2rem 0 0;
  padding: 2rem;
`

// stan poczatkowy
const initialState = {
  currentPlanet: "2",
};

// definiujemy dostepne typy akcji
export const ACTIONS = {
  SET_CURRENT_PLANET: 'SET_CURRENT_PLANET',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_CURRENT_PLANET:
      return {...state, currentPlanet: action.payload };

    default:
      return state;
  }
};

export const ReduxStoreContext = createContext();

const Container = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return ( 
    <ReduxStoreContext.Provider value={{ state, dispatch }}>
      <Header />
      <Main>
          <Solar />
          <PlanetData />
      </Main>
    </ReduxStoreContext.Provider>   
    
  );
}

export default Container;
