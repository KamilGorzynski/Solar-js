/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import {ACTIONS, ReduxStoreContext} from './Container';
import {
    useContext
} from 'react';

const Tab = styled.table`
   width 100%;
   text-align: left;
   margin: 2rem auto;
   font-size: 22px;
   background-color: rgba(20, 20, 20, 0.904);
   border: 2px rgba(46, 46, 46, 0.5) solid;
   border-collapse: collapse;
   color: #d3d3d3;
   padding: 1rem 2rem;
`

const Row = styled.tr`
   font-size: 22px;
   height: 3rem;
   margin: 1rem;
   color: #d3d3d3;
   &:hover {
      background-color: rgba(50, 50, 50, 0.904);
   }
`

const Td = styled.td`
   width: 55%;
   padding: 0 2rem;  
`


const Table = () => {

  const { state, dispatch } = useContext(ReduxStoreContext);
  return (
    <div>                                    
         <Tab>
            <tbody>
               <Row>
                  <Td style={{fontWeight: 'bold'}}>Title:</Td>
                  <Td>{ state.currentPlanet }</Td>
               </Row>
               <Row>
                  <Td style={{fontWeight: 'bold'}}>Title:</Td>
                  <Td>{ state.currentPlanet }</Td>
               </Row>
               <Row>
                  <Td style={{fontWeight: 'bold'}}>Title:</Td>
                  <Td>{ state.currentPlanet }</Td>
               </Row>
               <Row>
                  <Td style={{fontWeight: 'bold'}}>Title:</Td>
                  <Td>{ state.currentPlanet }</Td>
               </Row>
               <Row>
                  <Td style={{fontWeight: 'bold'}}>Title:</Td>
                  <Td>{ state.currentPlanet }</Td>
               </Row>
                    
            </tbody>        
         </Tab> 
       </div>
  );
}

export default Table;
