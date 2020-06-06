/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { ReduxStoreContext } from '../containers/Container';
import { useContext } from 'react';
import config_pl from '../config/config_pl';
import config_en from '../config/config_en';

const Tab = styled.table`
   width: 100%;
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
  const { planet_data, planet } = state.langVersion == 'EN' ? config_en : config_pl;
  const data = state.currentPlanetData.data;

  return (
    <div>                                
         <Tab>
            <tbody>
               <Row>
                  <Td style={ {fontWeight: 'bold'} }>{ planet_data.name }</Td>
                  <Td style={ {fontWeight: 'bold'} }>{ planet[state.currentPlanet] }</Td>
               </Row>
               <Row>
                  <Td style={ {fontWeight: 'bold'} }>{ planet_data.semimajor_axis }</Td>
                  <Td>{ data ? data.semimajorAxis : '' } km</Td>
               </Row>
               <Row>
                  <Td style={ {fontWeight: 'bold'} }>{ planet_data.perihelion }</Td>
                  <Td>{ data ? data.perihelion : '' } km</Td>
               </Row>
               <Row>
                  <Td style={ {fontWeight: 'bold'} }>{ planet_data.aphelion }</Td>
                  <Td>{ data ? data.aphelion : '' } km</Td>
               </Row>
               <Row>
                  <Td style={ {fontWeight: 'bold'} }>{ planet_data.eccentricity }</Td>
                  <Td>{ data ? data.eccentricity : '' }</Td>
               </Row>
               <Row>
                  <Td style={ {fontWeight: 'bold'} }>{ planet_data.inclination }</Td>
                  <Td>{ data ? data.inclination : '' }°</Td>
               </Row>
               <Row>
                  <Td style={ {fontWeight: 'bold'} }>{ planet_data.density }</Td>
                  <Td>{ data ? data.density : '' } g/cm3</Td>
               </Row>
               <Row>
                  <Td style={ {fontWeight: 'bold'} }>{ planet_data.gravity }</Td>
                  <Td>{ data ? data.gravity : '' } m/s²</Td>
               </Row>
               <Row>
                  <Td style={ {fontWeight: 'bold'} }>{ planet_data.escape }</Td>
                  <Td>{ data ? data.escape : '' } km/s</Td>
               </Row>
               <Row>
                  <Td style={ {fontWeight: 'bold'} }>{ planet_data.mean_radius }</Td>
                  <Td>{ data ? data.meanRadius : '' } km</Td>
               </Row>
               <Row>
                  <Td style={ {fontWeight: 'bold'} }>{ planet_data.equa_radius }</Td>
                  <Td>{ data ? data.equaRadius : '' } km</Td>
               </Row>
                   
            </tbody>        
         </Tab> 
       </div>
  );
}

export default Table;
