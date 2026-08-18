import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaLogin from './src/telas/TelaLogin';
import TelaListaContatos from './src/telas/TelaListaContatos'
import TelaCadastroUsuario from './src/telas/TelaCadastroUsuario';
import TelaCadastroContato from './src/telas/TelaCadastroContato';
import TelaEdicaoContatos from './src/telas/TelaEdicaoContatos'
import TelaEsqueceuSenha from './src/telas/TelaEsqueceuSenha';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaLogin">

        <Stack.Screen
          name="TelaLogin"
          component={TelaLogin}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="TelaListaContatos"
          component={TelaListaContatos}
        />
        
        <Stack.Screen
          name="TelaCadastroUsuario"
          component={TelaCadastroUsuario}
        />

        <Stack.Screen
          name="TelaCadastroContato"
          component={TelaCadastroContato}
        />
        
{/* 
        <Stack.Screen
          name="TelaEdicaoContatos"
          component={TelaEdicaoContatos}
        />

        <Stack.Screen
          name="TelaEsqueceuSenha"
          component={TelaEsqueceuSenha}
        /> */}


      </Stack.Navigator>
    </NavigationContainer>
  );
}
