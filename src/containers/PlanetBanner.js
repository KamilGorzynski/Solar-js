/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ReduxStoreContext} from '../containers/Container';
import config_pl from '../config/config_pl';
import config_en from '../config/config_en';

import mercuryIcon from '../assets/planets/mercury.png';
import venusIcon from '../assets/planets/venus.png';
import earthIcon from '../assets/planets/earth.png';
import marsIcon from '../assets/planets/mars.png';
import jupiterIcon from '../assets/planets/jupiter.png';
import saturnIcon from '../assets/planets/saturn.png';
import uranusIcon from '../assets/planets/uranus.png';
import neptunIcon from '../assets/planets/neptun.png';


const PlanetBannerDiv = styled.div`
  width: 100%;
  height: 18rem;
  color: white;
  border-radius: 1rem 1rem 0 0;
  border: 2px rgba(46, 46, 46, 0.5) solid;
  border-width: 2px 2px 0 2px;
  background-color: black;
  text-align: center;
`
const PlanetGif = styled.img`
  width: 10rem;
  margin-top: 2rem;
`

const Ul = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  justify-content: space-between;
  padding: 1rem 6rem;
  
`

const Li = styled.li`
  color: white;
  width: 10rem;
  text-decoration: none;
  font-size: 1.4rem;
`


const PlanetBanner = () => {

  const { state } = useContext(ReduxStoreContext);
  const { submenu } = state.langVersion === 'EN' ? config_en : config_pl;

  const setPlanetIcon = () => {
    switch (state.currentPlanet) {
      case 'mercury':
        return mercuryIcon;
      case 'venus':
        return venusIcon;
      case 'mars':
        return marsIcon;
      case 'jupiter':
        return jupiterIcon;
      case 'saturn':
        return saturnIcon;
      case 'uranus':
        return uranusIcon;
      case 'neptune':
        return neptunIcon;
  
      default:
        return earthIcon;
    }
  };

    return (
       <PlanetBannerDiv>
           <PlanetGif src={ setPlanetIcon() } />
           <Ul>
              <Li><NavLink exact activeClassName="active" to="/" >{ submenu.planet_data }</NavLink></Li>
              <Li><NavLink activeClassName="active" to="/description" >{ submenu.description }</NavLink></Li>
              <Li><NavLink activeClassName="active" to="/sources" >{ submenu.sources }</NavLink></Li>
           </Ul>
            

       </PlanetBannerDiv>      
    );
  }
  
  export default PlanetBanner;
  