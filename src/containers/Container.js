/** @jsx jsx */
import {createContext, useReducer} from 'react';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import Solar from './Solar';
import Table from './Table';

const Main = styled.div`
  width: 868px;
  margin: 0 auto;
  background-color: rgba(81, 66, 97, 0.904);
  border: 2px rgba(46, 46, 46, 0.5) solid;
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
      <Main>
          <Solar />
          <Table />
      </Main>
    </ReduxStoreContext.Provider>   
    
  );
}

export default Container;
