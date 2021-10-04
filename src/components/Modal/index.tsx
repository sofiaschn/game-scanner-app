import React from 'react';
import {
    ButtonContainer,
    ModalContainer,
    ModalText,
    TextContainer,
} from './styles';

const Modal: React.FC<{}> = ({}) => {
    return (
        <ModalContainer>
            <TextContainer>
                <ModalText>
                    Erro na leitura do QR Code! TODO: Substituir texto
                </ModalText>
            </TextContainer>
            <ButtonContainer></ButtonContainer>
        </ModalContainer>
    );
};

export default Modal;
