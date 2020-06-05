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
   color: #d3d3d3;
   padding: 1rem 2rem;
   border-radius: 0 0 1rem 1rem;
`

const Description = () => {

    return ( 
        <Container>
            <h1>Description</h1>
            <p>
            It is a long established fact that a reader will be distracted
             by the readable content of a page when looking at its layout.
              The point of using Lorem Ipsum is that it has a more-or-less
               normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
                 Many desktop publishing
            </p>
            <p>
            It is a long established fact that a reader will be distracted
             by the readable content of a page when looking at its layout.
              The point of using Lorem Ipsum is that it has a more-or-less
               normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
                 Many desktop publishing
            </p>
            <p>
            It is a long established fact that a reader will be distracted
             by the readable content of a page when looking at its layout.
              The point of using Lorem Ipsum is that it has a more-or-less
               normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
                 Many desktop publishing
            </p>
        </Container>                              
           
    );
  }
  
  export default Description;
  