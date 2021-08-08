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
import Welcome from '~/Screens/Login/Welcome';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginNaviParamList } from './Screens/types';
import { NavigationContainer } from '@react-navigation/native';

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
      <NavigationContainer>
        {<Welcome />}
      </NavigationContainer>
    </Top>
  );
};

export default App;
