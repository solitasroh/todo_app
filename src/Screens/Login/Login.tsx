import React from 'react';
import {Linking, Text, View} from 'react-native';
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
`;

const FormContainer = styled.View`
  width : 100%;
  padding : 40px;
`;
const Label = styled.Text`
    fontSize : 30px;
    color : #515E63;
`;
type NavigationProp = StackNavigationProp<LoginNaviParamList, 'Login'>;

interface Props {
  navigation :NavigationProp;
}
const Login = ({navigation} : Props) => {
  return (
    <Container>
      <Label>Login</Label>
      <FormContainer>
      <Input style = {{marginBottom : 16}} placeholder= "ID" />
      <Input
        style = {{marginBottom : 16}}
        placeholder = "비밀번호"
        secureTextEntry ={true}
        />
        <Button
          style ={{marginBottom : 24}}
          label = "로그인"
          onPress = {()=> {
            //Login('nhkim', 'password');
          }}
        />
        <Button
          style ={{marginBottom : 24}}
          label = "회원가입"
          onPress = {()=> {
            navigation.navigate('CreateAccount');
          }}
        />
        </FormContainer>
    </Container>
  );
};

export default Login;
