import React from 'react';
import { Button } from 'react-native';
import {
    ArrowView,
    BottomArrow,
    ButtonView,
    GamepadContainer,
    MiddleArrows,
    UpArrow,
} from './styles';

const Gamepad: React.FC<{ onPressArrow: (arrow: string) => void }> = ({
    onPressArrow,
}) => {
    return (
        <GamepadContainer>
            <ButtonView></ButtonView>
            <ArrowView>
                <UpArrow>
                    <Button onPress={() => onPressArrow('up')} title="up" />
                </UpArrow>
                <MiddleArrows>
                    <Button onPress={() => onPressArrow('left')} title="left" />
                    <Button
                        onPress={() => onPressArrow('right')}
                        title="right"
                    />
                </MiddleArrows>
                <BottomArrow>
                    <Button onPress={() => onPressArrow('down')} title="down" />
                </BottomArrow>
            </ArrowView>
        </GamepadContainer>
    );
};

export default Gamepad;
