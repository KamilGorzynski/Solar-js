/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { useContext } from 'react';
import { ReduxStoreContext} from '../containers/Container';
import sources from '../config/sources';
import config_pl from '../config/pl/config_pl';
import config_en from '../config/en/config_en';

const Container = styled.div`
   width: 100%;
   text-align: left;
   margin: 0 auto 2rem auto;
   font-size: 22px;
   background-color: rgba(20, 20, 20, 0.904);
   border: 2px rgba(46, 46, 46, 0.5) solid;
   color: #d3d3d3;
   padding: 1rem 2rem;
   border-radius: 0 0 1rem 1rem;
`

const Sources = () => {

    const { state } = useContext(ReduxStoreContext);
    const { submenu } = state.langVersion === 'EN' ? config_en : config_pl;

    return (                               
        <Container>
            <h1>{ submenu.sources }</h1>
            <ul>
                { sources[state.currentPlanet].map(item => <li><h3>{item}</h3></li>) }
            </ul>
        </Container>   
    );
  }
  
  export default Sources;
  