/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import Solar from './Solar';

const Main = styled.div`
  border: 1px black solid;
  width: 70%;
  height: 100vh;
  margin: 0 auto;
`

const Container = () => {
  return (    
    <Main>
        <Solar />
    </Main>
  );
}

export default Container;
