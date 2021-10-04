import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../components/Header';
import Home from '../screens/Home';
import QRCode from '../screens/QRCode';
import Game from '../screens/Game';
import GameSettings from '../screens/GameSettings';

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
                <Stack.Screen name={'Game'} component={Game} />
                <Stack.Screen name={'GameSettings'} component={GameSettings} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default routes;
