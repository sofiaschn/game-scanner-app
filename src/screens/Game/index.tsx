/* eslint-disable no-eval */
import React from 'react';
import { Button } from 'react-native';
import BottomNavigation from '../../components/BottomNavigation';
import { Container, GameContainer } from './styles';
import Canvas from 'react-native-canvas';

const Game = ({ route }: any) => {
    const gameData: string = route.params.QRData.data;
    let direction = 'up';

    const handleCanvas = (canvas: any) => {
        eval(gameData);
    };

    return (
        <Container>
            <GameContainer>
                <Canvas ref={handleCanvas} />
            </GameContainer>
            <Button
                title={'up'}
                onPress={() => {
                    direction = 'up';
                }}
            />
            <Button
                title={'down'}
                onPress={() => {
                    direction = 'down';
                }}
            />
            <Button
                title={'left'}
                onPress={() => {
                    direction = 'left';
                }}
            />
            <Button
                title={'right'}
                onPress={() => {
                    direction = 'right';
                }}
            />
            <BottomNavigation />
        </Container>
    );
};

export default Game;
