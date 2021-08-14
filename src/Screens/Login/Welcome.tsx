import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';
import { createStackNavigator } from '@react-navigation/stack';
import Button from './Button';
import CreateAccount from './CreateAccount';
import { LoginNaviParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Container = styled.SafeAreaView`
  flex : 1;
  background-color : #FDF6F0;
  align-items: center;
  justify-content: center;
  padding : 40px;
`;
type NavigationProp = StackNavigationProp<LoginNaviParamList, 'Welcome'>;

interface Props {
  navigation :NavigationProp;
}
const Welcome = ({navigation} : Props) => {
  return (
    <Container>
      <Button
        style ={{marginBottom : 24}}
        label = "로그인"
        onPress = {()=> {
          navigation.navigate('Login');
        }}
      />
      <Button
        style ={{marginBottom : 24}}
        label = "회원가입"
        onPress = {()=> {
          navigation.navigate('CreateAccount');
        }}
      />
      </Container>
  );
};

export default Welcome;
