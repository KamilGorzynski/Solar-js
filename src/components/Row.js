/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { useContext} from 'react';
import {ReduxStoreContext} from '../containers/Container';

const Tr = styled.tr`
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

const Row = ({ label, value, exponent, unit }) => {
    const { state } = useContext(ReduxStoreContext);
    const data = state.currentPlanetData.data;
    return (                               
        <Tr>
            <Td style={ {fontWeight: 'bold'} }>{ label }</Td>
            <Td >
                {exponent ? (data ? data[value][`${value}Value`] : '-') : (data ? data[value] || '-' : '-')}
                { exponent ? ` x 10`: ''}
                { exponent && <sup>{ data ? data[value][`${value}Exponent`] : '' }</sup> }
                { unit ? ` ${unit}` : '' }
            </Td>
        </Tr>       
    );
  }
  
  export default Row;
  