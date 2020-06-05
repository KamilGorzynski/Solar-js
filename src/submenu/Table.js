/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import {ACTIONS, ReduxStoreContext} from '../containers/Container';
import { useContext } from 'react';

const Tab = styled.table`
   width 100%;
   text-align: left;
   margin: 0 auto 2rem auto;
   font-size: 22px;
   background-color: rgba(20, 20, 20, 0.904);
   border: 2px rgba(46, 46, 46, 0.5) solid;
   border-collapse: collapse;
   color: #d3d3d3;
   padding: 1rem 2rem;
   border-radius: 0 0 1rem 1rem;
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

  const { state } = useContext(ReduxStoreContext);
  const data = state.currentPlanetData.data;
  return (
    <div>                                
         <Tab>
            <tbody>
               <Row>
                  <Td style={ {fontWeight: 'bold'} }>Title:</Td>
                  <Td>{ state.langVersion }</Td>
               </Row>
               <Row>
                  <Td style={ {fontWeight: 'bold'} }>Title:</Td>
                  <Td>{ state.currentPlanet }</Td>
               </Row>
               <Row>
                  <Td style={ {fontWeight: 'bold'} }>Title:</Td>
                  <Td>{ data ? data.density : '' }</Td>
               </Row>
               
                    
            </tbody>        
         </Tab> 
       </div>
  );
}

export default Table;
