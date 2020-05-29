/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import Solar from './Solar';

const Main = styled.div`
  width: 800px;
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
