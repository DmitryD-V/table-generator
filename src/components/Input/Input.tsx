import React, { FC } from 'react';
import { Container, Field } from './styles';

interface Props {
    placeholder?: string
}

export const Input: FC<Props> = ({ placeholder, ...props }) => {
    return (
        <Container {...props}>
            <Field
                placeholder={placeholder}
                type={'text'}
            />
        </Container>
    );
};
