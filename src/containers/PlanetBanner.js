/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import gif from '../assets/giphy.gif';
import { NavLink } from 'react-router-dom';


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
  width: 12rem;
  margin-top: 1rem;
`

const Ul = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  justify-content: space-between;
  padding: 1rem 6rem 1rem 6rem;
  
`

const Li = styled.li`
  color: white;
  width: 10rem;
  text-decoration: none;
  font-size: 1.4rem;
`


const PlanetBanner = () => {


    return (
       <PlanetBannerDiv>
           <PlanetGif src={gif} />
           <Ul>
              <Li><NavLink exact activeClassName="active" to="/" >Planet data</NavLink></Li>
              <Li><NavLink activeClassName="active" to="/description" >Description</NavLink></Li>
              <Li><NavLink activeClassName="active" to="/sources" >Sources</NavLink></Li>
           </Ul>
            

       </PlanetBannerDiv>      
    );
  }
  
  export default PlanetBanner;
  