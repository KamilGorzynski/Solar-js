/** @jsx jsx */
import {createContext, useReducer, useEffect} from 'react';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import Solar from './Solar';
import PlanetData from './PlanetData';
import Header from './Header';
import axios from 'axios';

const Main = styled.div`
  width: 868px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.904);
  border: 2px rgba(46, 46, 46, 0.5) solid;
  padding: 2rem;
`

const initialState = {
  currentPlanet: "earth",
  currentPlanetData: {},
  langVersion: "EN",
};

export const ACTIONS = {
  SET_CURRENT_PLANET: 'SET_CURRENT_PLANET',
  SET_CURRENT_PLANET_DATA: 'SET_CURRENT_PLANET_DATA',
  SET_LANG_VERSION: 'SET_LANG_VERSION',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_CURRENT_PLANET:
      return {...state, currentPlanet: action.payload };

    case ACTIONS.SET_CURRENT_PLANET_DATA:
      return {...state, currentPlanetData: action.payload };
      
    case ACTIONS.SET_LANG_VERSION:
      return {...state, langVersion: action.payload };

    default:
      return state;
  }
};

export const ReduxStoreContext = createContext();

const Container = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const currentPlanet = state.currentPlanet;

  useEffect(() => {
    axios.get(`https://api.le-systeme-solaire.net/rest/bodies/${currentPlanet}`)
    .then(response => {
      dispatch({
        type: ACTIONS.SET_CURRENT_PLANET_DATA,
        payload: response 
      });   
    })   
}, [currentPlanet]);

  return ( 
    <ReduxStoreContext.Provider value={{ state, dispatch }}>
      
      <Main>
          <Header />
          <Solar />
          <PlanetData />
      </Main>
    </ReduxStoreContext.Provider>   
    
  );
}

export default Container;
