/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import Table from '../submenu/Table';
import Description from '../submenu/Description';
import Sources from '../submenu/Sources';
import PlanetBanner from './PlanetBanner';
import{ BrowserRouter, Route, Switch} from 'react-router-dom';

const PlanetDataDiv = styled.div`
  margin-top: 2rem;
`

const PlanetData = () => {

    return (
       <PlanetDataDiv>      
          <BrowserRouter>
          <PlanetBanner />
            <section>
            <Switch>
                <Route exact path="/" component={Table} />
                <Route path="/description" component={Description} />
                <Route path="/sources" component={Sources} />
            </Switch>
            </section>
        </BrowserRouter>                                

       </PlanetDataDiv>      
    );
  }
  
  export default PlanetData;
  