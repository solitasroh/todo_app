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
import {createStackNavigator} from '@react-navigation/stack';
import {LoginNaviParamList} from './Screens/types';
import {NavigationContainer} from '@react-navigation/native';
import LoginNavigator from './Screens/Navigator';
import {ApolloProvider} from '@apollo/client';
import {client} from './apollo/apollo';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const Top = styled(SafeAreaView)`
  flex: 1;
`;

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>{<LoginNavigator />}</NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
