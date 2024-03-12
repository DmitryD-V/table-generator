import React from 'react';
import GlobalStyle, { Container } from './styles';
import { Form } from '../Form/Form';
import { Table } from '../Table/Table';
import { ModalForm } from '../ModalForm/ModalForm';

const App = () => {
  return (
    <Container>
        <Form />
        <Table />
        <ModalForm opened={false} onClose={() => {/**/}} />
      <GlobalStyle />
    </Container>
  );
};

export default App;
