import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from '~/Screens/Login/Login';
import CreateAccount from '~/Screens/Login/CreateAccount';
import Welcome from './Login/Welcome';

const Stack = createStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator>
       <Stack.Screen
        name = "Welcome"
        component = {Welcome}
        options = {{
          title : 'Welcome',
          //headerTransparent : true,
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          //headerTintColor : '#E70915',
          headerTitleStyle : {
            fontWeight : 'bold',
          },
        }}
        />
      <Stack.Screen
        name = "Login"
        component = {Login}
        options = {{
          title : 'Login',
          headerTransparent : true,
          headerTintColor : '#E70915',
          headerTitleStyle : {
            fontWeight : 'bold',
          },
        }}
        />
        <Stack.Screen
        name = "CreateAccount"
        component = {CreateAccount}
        options = {{
          title : 'Sign Up',
          headerTransparent : true,
          headerTintColor : '#515E63',
          headerTitleStyle : {
            fontWeight : 'bold',
          },
        }}
        />
    </Stack.Navigator>
  );
};

export default LoginNavigator;