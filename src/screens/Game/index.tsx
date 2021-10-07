/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-eval */
import React, { CSSProperties, useState } from 'react';
import BottomNavigation from '../../components/BottomNavigation';
import { Container, GameContainer, CanvasContainer } from './styles';
// @ts-ignore
import { GCanvasView } from '@flyskywhy/react-native-gcanvas';
import Gamepad from '../../components/Gamepad';
import { storage } from '../../services/storage';
import { Directions, GameObject } from '../../interfaces/Game';

const Game = ({ route }: any) => {
    const [style, setStyle] = useState({} as CSSProperties);
    const [canvasVisible, setCanvasVisible] = useState(false);

    const game: GameObject = route.params.game;
    storage.storeGame(game);
    let direction: Directions;

    const handleCanvas = (canvas: HTMLCanvasElement) => {
        const _c = canvas;
        let _x = _c.getContext('2d');
        let _xs = (color: string) => (_x!.fillStyle = color);
        let _xr = (x: number, y: number, maxX: number, maxY: number) =>
            _x!.fillRect(x, y, maxX, maxY);

        eval(game.code);
    };

    return (
        <Container>
            <GameContainer>
                <CanvasContainer
                    onLayout={(event) => {
                        const { width, height } = event.nativeEvent.layout;
                        setStyle({ width, height });
                        setCanvasVisible(true);
                    }}>
                    {canvasVisible && (
                        <GCanvasView
                            onCanvasCreate={handleCanvas}
                            style={style}
                        />
                    )}
                </CanvasContainer>
                <Gamepad
                    onPressArrow={(arrow) => {
                        direction = arrow;
                    }}
                />
            </GameContainer>
            <BottomNavigation />
        </Container>
    );
};

export default Game;
