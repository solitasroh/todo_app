import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from '~/Screens/Login/Login';
import CreateAccount from '~/Screens/Login/CreateAccount';

const Stack = createStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name = "Login"
        component = {Login}
        options = {{
          title : 'Todo',
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
          title : 'Todo',
          headerTransparent : true,
          headerTintColor : '#E70915',
          headerTitleStyle : {
            fontWeight : 'bold',
          },
        }}
        />
    </Stack.Navigator>
  );
};

export default () => {
    return(
        <NavigationContainer>
            <LoginNavigator/>
        </NavigationContainer>
    )
}