import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Input from './Input';
import Button from './Button';
import { LoginNaviParamList } from '../types';

const Container = styled.SafeAreaView`
  flex : 1;
  background-color : #FDF6F0;
  align-items: center;
  justify-content: center;
  padding : 40px;
`;

type NavigationProp = StackNavigationProp<LoginNaviParamList, 'Login'>;

interface Props {
  navigation :NavigationProp;
}
const CreateAccount = ({navigation} : Props) => {
  return (
    <Container>
      <Input 
      style = {{marginBottom : 16}} placeholder= "ID" />
      <Input style = {{marginBottom : 16}} placeholder= "Name" />
      <Input
        style = {{marginBottom : 16}}
        placeholder = "Password"
        secureTextEntry ={true}
        />
        <Input 
        style = {{marginBottom : 16}}
        placeholder= "email"
        keyboardType="email-address" />
        <Button
          style ={{marginBottom : 24}}
          label = "Sign up"
          onPress = {()=> {
            //Login('nhkim', 'password');
          }}
        />
    </Container>
  );
};

export default CreateAccount;
