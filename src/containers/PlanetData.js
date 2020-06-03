/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import {ACTIONS, ReduxStoreContext} from './Container';
import {useEffect, useState, useContext} from 'react';
import Table from './Table';



const PlanetData = () => {

    const { state, dispatch } = useContext(ReduxStoreContext);


    return (
       <div>                               
         <Table />
       </div>      
    );
  }
  
  export default PlanetData;
  