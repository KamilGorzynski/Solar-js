/** @jsx jsx */
import { jsx } from '@emotion/core';
import {ACTIONS, ReduxStoreContext} from './Container'
import {useEffect, useState, useContext} from 'react';


const Table = () => {

    const { state, dispatch } = useContext(ReduxStoreContext);


    return (                               
       <h3>{state.currentPlanet}</h3>       
    );
  }
  
  export default Table;
  