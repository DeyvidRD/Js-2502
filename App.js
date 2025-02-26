import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ScreenA from './screenA';
import ScreenB from './screenB';
 
const Stack = createNativeStackNavigator();
 
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ScreenA">
          <Stack.Screen name="ScreenA" component={ScreenA} />
          <Stack.Screen name="ScreenB" component={ScreenB} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
 
export default App;