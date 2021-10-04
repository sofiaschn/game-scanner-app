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
    buttons?: Buttons;
}> = ({ text, icon, buttons = {} }) => {
    const [isVisible, setVisible] = useState(true);

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
            {isVisible && (
                <ModalTapDetection
                    onPress={() => setVisible(false)}
                    disabled={Object.keys(buttons).length > 1}>
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
