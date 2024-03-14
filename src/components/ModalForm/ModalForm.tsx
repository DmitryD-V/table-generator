import React, { FC, useEffect, useRef, useState } from 'react';
import { CloseBtn, Container, Content, ContentWrapper, Global } from './styles';
import { Form } from '../Form/Form';
import useClickOutside from '../../utils/hooks/useClickOutside';

interface Props {
    data: {
        id: string
        name: string
        surname: string
        age: string
        city: string
    } | null
    onClose: () => void
    submit: (values: {
        name: string
        surname: string
        age: string
        city: string
    }) => void
}

export const ModalForm: FC<Props> = ({ data, onClose, submit }) => {

    const [scroll, setScroll] = useState(false);
    const ref = useRef(null);

    useClickOutside(ref, onClose);

    useEffect(() => {
        const safeDocument = typeof document !== 'undefined' && document;
        setScroll(safeDocument && (window.innerWidth - safeDocument.documentElement.clientWidth > 0));
    }, []);

    const onSubmit = (values: {
        name: string
        surname: string
        age: string
        city: string
    }) => {
        submit(values);
        onClose();
    };

    return !data ? null : (
        <Container>
            <Global $opened={!!data} $scroll={scroll} />
            <ContentWrapper>
                <Content ref={ref}>
                    <CloseBtn onClick={onClose} />
                    <Form
                        initialData={data || undefined}
                        submit={onSubmit}
                        buttonText={'AGREE'}
                    />
                </Content>
            </ContentWrapper>
        </Container>
    );
};
