import React, { ChangeEvent, FC } from 'react';
import { Container, Error, Field } from './styles';

interface Props {
    placeholder?: string
    name?: string
    value?: string
    onChange?: (e: ChangeEvent<any>) => void
    error?: string
}

export const Input: FC<Props> = ({ placeholder, name, value, onChange, error, ...props }) => {
    return (
        <Container {...props}>
            <Field
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                type={'text'}
                $error={!!error}
            />
            {error && <Error>{error}</Error>}
        </Container>
    );
};
