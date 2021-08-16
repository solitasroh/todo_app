import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Input from './Input';
import Button from './Button';
import {LoginNaviParamList} from '../types';
import {Controller, useForm} from 'react-hook-form';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fdf6f0;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

type NavigationProp = StackNavigationProp<LoginNaviParamList, 'CreateAccount'>;

interface Props {
  navigation: NavigationProp;
}
const CreateAccount = ({navigation}: Props) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      userID: '',
      userName: '',
      userEmail: '',
      userPW: '',
    },
  });
  const onSubmit = data => console.log(data);
  const onError = error => {
    console.log(error);
  };

  return (
    <Container>
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <Input
            style={{marginBottom: 16}}
            placeholder="ID"
            onChangeText={onChange}
            value={value}
          />
        )}
        name="userID"
        rules={{required: true}}
      />
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <Input
            style={{marginBottom: 16}}
            placeholder="Name"
            onChangeText={onChange}
            value={value}
          />
        )}
        name="userName"
        rules={{required: true}}
      />
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <Input
            style={{marginBottom: 16}}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={value => onChange}
            value={value}
          />
        )}
        name="userPW"
        rules={{required: true}}
      />
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <Input
            style={{marginBottom: 16}}
            placeholder="email"
            keyboardType="email-address"
            onChangeText={onChange}
            value={value}
          />
        )}
        name="userEmail"
        rules={{required: true}}
      />
      <Button
        style={{marginBottom: 24}}
        label="Sign up"
        onPress={handleSubmit(onSubmit, onError)}
      />
    </Container>
  );
};

export default CreateAccount;
