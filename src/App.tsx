/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import styled from 'styled-components/native';

import {SafeAreaView, Text} from 'react-native';
import Todo from '~/Screens/ToDo/Todo';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const Top = styled(SafeAreaView)`
  flex: 1;
`;

const App = () => {
  return (
    <Top>
      <Container>
        <Todo />
      </Container>
    </Top>
  );
};

export default App;
