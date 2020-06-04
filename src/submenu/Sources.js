/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import {useEffect, useState, useContext} from 'react';

const Container = styled.div`
   width 100%;
   text-align: left;
   margin: 0 auto 2rem auto;
   font-size: 22px;
   background-color: rgba(20, 20, 20, 0.904);
   border: 2px rgba(46, 46, 46, 0.5) solid;
   border-collapse: collapse;
   color: #d3d3d3;
   padding: 1rem 2rem;
`

const Sources = () => {

    return (                               
        <Container>
            <h1>Sources</h1>
        </Container>   
    );
  }
  
  export default Sources;
  