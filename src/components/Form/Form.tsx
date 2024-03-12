import React from 'react';
import { Container, InputField, SubmitBtn } from './styles';
import { Select } from '../Select/Select';

export const Form = () => {
  return (
    <Container>
        <InputField
            placeholder={'Name'}
        />
        <InputField
            placeholder={'Surname'}
        />
        <InputField
            placeholder={'Age'}
        />
        <Select
            options={['Riga', 'Daugavpils', 'Jūrmala', 'Ventspils']}
            onChange={() => {/**/}}
            placeholder={'City'}
            // value={'Riga'}
        />
        <SubmitBtn>ADD</SubmitBtn>
    </Container>
  );
};
