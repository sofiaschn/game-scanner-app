import React, { useState } from 'react';
import {
    ButtonContainer,
    ModalContainer,
    ModalText,
    ModalTapDetection,
} from './styles';
import { ExclamationIcon } from 'react-native-heroicons/outline';
import { Button } from 'react-native';
import {
    InformationCircleIcon,
    QuestionMarkCircleIcon,
} from 'react-native-heroicons/solid';

type Icons = 'info' | 'error' | 'question' | 'warn';
type Titles = 'ok' | 'cancel' | 'retry' | 'yes' | 'no';
type Buttons = {
    titles: Titles[];
    onPress: (buttonPressed: Titles) => void;
};

const Modal: React.FC<{
    text: string;
    icon: Icons;
    visible: boolean;
    onPressOut?: () => void;
    buttons?: Buttons;
}> = ({ text, icon, visible, onPressOut, buttons = {} }) => {
    const getIcon = () => {
        const size = 50;
        if (icon === 'error' || icon === 'warn') {
            const color = icon === 'error' ? 'red' : 'yellow';
            return <ExclamationIcon size={size} color={color} />;
        } else if (icon === 'info') {
            return <InformationCircleIcon size={size} color={'lightblue'} />;
        } else if (icon === 'question') {
            return <QuestionMarkCircleIcon size={size} color={'lightblue'} />;
        }
    };

    return (
        <>
            {visible && (
                <ModalTapDetection
                    onPress={onPressOut}
                    disabled={typeof onPressOut === 'undefined'}>
                    <ModalContainer>
                        {getIcon()}
                        <ModalText>{text}</ModalText>
                        <ButtonContainer>
                            {buttons.titles?.map((title) => {
                                return (
                                    <Button
                                        onPress={() => buttons.onPress!(title)}
                                        title={title}
                                    />
                                );
                            })}
                        </ButtonContainer>
                    </ModalContainer>
                </ModalTapDetection>
            )}
        </>
    );
};

export default Modal;
