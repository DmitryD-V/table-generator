import React, { FC, useEffect, useState } from 'react';
import { Container, Global } from './styles';
import { Form } from '../Form/Form';

interface Props {
    opened: boolean
    onClose: () => void
}

export const ModalForm: FC<Props> = ({ opened, onClose }) => {

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const safeDocument = typeof document !== 'undefined' && document;
        setScroll(safeDocument && (window.innerWidth - safeDocument.documentElement.clientWidth > 0));
    }, []);

    return !opened ? null : (
        <Container>
            <Global $opened={opened} $scroll={scroll} />
            <Form />
        </Container>
    );
};
