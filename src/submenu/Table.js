/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { ReduxStoreContext } from '../containers/Container';
import { useContext } from 'react';
import config_pl from '../config/config_pl';
import config_en from '../config/config_en';
import Row from '../components/Row';

const Tab = styled.table`
   width: 100%;
   text-align: left;
   margin: 0 auto 2rem auto;
   font-size: 22px;
   background-color: rgba(20, 20, 20, 0.904);
   border: 2px rgba(46, 46, 46, 0.5) solid;
   border-top: none;
   border-collapse: collapse;
   color: #d3d3d3;
   padding: 1rem 2rem;
`

const PlanetHeader = styled.div`
   width: 100%;
   text-align: center;
   margin: 0 auto ;
   font-size: 22px;
   font-weight: bold;
   background-color: rgba(20, 20, 20, 0.904);
   border: 2px rgba(46, 46, 46, 0.5) solid;
   border-bottom:none;
   color: #d3d3d3;
   padding: 1rem 2rem;
`




const Table = () => {

  const { state } = useContext(ReduxStoreContext);
  const { planet_data, planet } = state.langVersion === 'EN' ? config_en : config_pl;


  return (
    <div>
         <PlanetHeader>{ planet[state.currentPlanet] }</PlanetHeader>                                
         <Tab>
            <tbody>
               <Row
                  label={planet_data.sideral_orbit}
                  value='sideralOrbit'
                  unit='d'
               />
               <Row
                  label={planet_data.sideral_rotation}
                  value='sideralRotation'
                  unit='h'
               />
               <Row
                  label={ planet_data.semimajor_axis }
                  value={'semimajorAxis'}
                  unit='km'
               />
               <Row
                  label={ planet_data.perihelion }
                  value='perihelion'
                  unit='km'
               />
               <Row
                  label={ planet_data.aphelion }
                  value='aphelion'
                  unit='km'
               />
               <Row
                  label={ planet_data.eccentricity }
                  value='eccentricity'
               />
               <Row
                  label={ planet_data.inclination }
                  value='inclination'
                  unit='°'
               />
               <Row
                  label={ planet_data.density }
                  value='density'
                  unit='g/cm3'
               />
               <Row
                  label={ planet_data.gravity }
                  value='gravity'
                  unit='m/s²'
               />
               <Row
                  label={ planet_data.escape }
                  value='escape'
                  unit='km/s'
               />
               <Row
                  label={ planet_data.mean_radius }
                  value='meanRadius'
                  unit='km'
               />
               <Row
                  label={ planet_data.equa_radius }
                  value='equaRadius'
                  unit='km'
               />
               <Row
                  label={planet_data.polar_radius}
                  value='polarRadius'
                  unit={'km'}
               />
               <Row
                  label={planet_data.mass}
                  value='mass'
                  exponent
                  unit={'kg'}
               />
               <Row
                  label={planet_data.vol}
                  value='vol'
                  exponent
                  unit={'km3'}
               />
               <Row
                  label={planet_data.flattening}
                  value='flattening'
               />
               <Row
                  label={planet_data.discovery_date}
                  value='discoveryDate'
               />
               
               
               
                   
            </tbody>        
         </Tab> 
       </div>
  );
}

export default Table;
