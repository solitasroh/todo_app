import React from 'react';
import styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Input from './Input';
import Button from './Button';
import {LoginNaviParamList} from '../types';
import {Controller, FieldValues, useForm} from 'react-hook-form';
import {gql, useMutation} from '@apollo/client';
import {Alert} from 'react-native';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fdf6f0;
  align-items: center;
  justify-content: center;
`;

const ErrorField = styled.Text`
  color: red;
  font-weight: 500;
  text-align: left;
  width: 90%;
  margin-bottom: 16px;
  margin-top: 5px;
`;

const EMAIL_PATTERN =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;
type NavigationProp = StackNavigationProp<LoginNaviParamList, 'CreateAccount'>;

/* 
  회원가입 쿼리
  signup input 의 데이터를 입력해 인자로 전달하면, 
  서버로 해당 데이터를 전송한다.
  access Token, refreshToken, user를 응답 요청한다.
*/
const SIGNUP = gql`
  mutation signup($data: SignupInput!) {
    signup(data: $data) {
      accessToken
      refreshToken
    }
  }
`;

interface SignupInput {
  email: string;
  password: string;
  name?: string;
}

interface User {
  email: string;
  password?: string;
  name?: string;
}

interface Auth {
  accessToken: string;
  refreshToken: string;
  user?: User;
}

interface Props {
  navigation: NavigationProp;
}
const CreateAccount = ({navigation}: Props) => {
  //------ signup request  -----------------------------
  // signup 요청은 "signup()" 를 호출
  const [signup, {error, data, loading}] = useMutation<
    {signup: Auth}, // sign_up 응답 데이터
    {data: SignupInput} // signup variables (입력)
  >(SIGNUP, {
    // signup 성공 시 처리 : 화면 전환 등..
    onCompleted({signup}) {
      console.log(signup);
      Alert.alert('Success', 'sign up!', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    },
    // signup 실패 시 error 응답 처리
    onError(error) {
      Alert.alert('Fail', error.message, [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    },
  });
  //------ signup request end -----------------------------

  //------ process form input -----------------------------
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      userName: '',
      userEmail: '',
      userPW: '',
    },
  });

  const onSubmit = async (data: FieldValues) => {
    if (loading) {
      return;
    }
    console.log(data);
    // TODO: error가 존재하면 아래 로직이 수행되면 안된다.
    await signup({
      variables: {
        data: {
          email: data.userEmail,
          password: data.userPW,
          name: data.userName,
        },
      },
    });
  };

  const onError = (error: any) => {
    console.log(`${error}`);
  };
  //------ process form input -----------------------------
  return (
    <Container>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            onChangeText={onChange}
            value={value}
          />
        )}
        name="userEmail"
        rules={{
          required: {
            value: true,
            message: 'e-mail이 입력되지 않았습니다',
          },
          pattern: {
            value: EMAIL_PATTERN,
            message: 'email 형식이 아닙니다',
          },
        }}
      />
      <ErrorField>{errors.userEmail && errors.userEmail.message}</ErrorField>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <Input placeholder="Name" onChangeText={onChange} value={value} />
        )}
        name="userName"
        rules={{required: {value: true, message: '이름이 입력되지 않았습니다'}}}
      />
      <ErrorField>{errors.userName && errors.userName.message}</ErrorField>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="userPW"
        rules={{
          required: {value: true, message: '비밀번호가 입력되지 않았습니다'},
          minLength: {value: 8, message: '8자 이상 입력해야합니다.'},
        }}
      />
      <ErrorField>{errors.userPW && errors.userPW.message}</ErrorField>
      <Button
        style={{marginBottom: 24, width: '90%'}}
        label="Sign up"
        onPress={handleSubmit(onSubmit, onError)}
      />
    </Container>
  );
};

export default CreateAccount;
