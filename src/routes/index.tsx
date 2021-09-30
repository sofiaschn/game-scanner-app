import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import QRCode from '../screens/QRCode';
import Header from '../components/Header';

const Stack = createStackNavigator();

const routes = () => {
    return (
        <NavigationContainer>
            <Header text={'Game Scanner'} />
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    presentation: 'transparentModal',
                    headerShown: false,
                }}>
                <Stack.Screen name={'Home'} component={Home} />
                <Stack.Screen name={'QRCode'} component={QRCode} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default routes;
