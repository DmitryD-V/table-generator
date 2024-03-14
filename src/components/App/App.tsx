import React, { FC, useState } from 'react';
import GlobalStyle, { Container } from './styles';
import { Form } from '../Form/Form';
import { Table } from '../Table/Table';
import { ModalForm } from '../ModalForm/ModalForm';
import nextId from 'react-id-generator';

interface TableDataType {
    id: string;
    data: Array<TableRowType>;
}

interface TableRowType {
    id: string
    name: string
    surname: string
    age: string
    city: string
}

const initialTablesData: Array<TableDataType> = [{
    id: nextId(),
    data: []
}];

interface ModalDataType extends TableRowType {
    tableId: string
}

const App: FC = () => {

    const [tablesData, setTablesData] = useState<Array<TableDataType>>(initialTablesData);
    const [modalData, setModalData] = useState<ModalDataType | null>(null);

    const copyTable = (id: string) => {
        const newTable = tablesData.find(item => item.id === id);
        if (newTable) {
            setTablesData((prevState) => prevState.reduce((acc, item) => {
                acc.push(item);
                if (item.id === id) {
                    acc.push({
                        ...newTable,
                        id: nextId()
                    });
                }
                return acc;
            }, [] as Array<TableDataType>));
        }
    };

    const removeTable = (id: string) => {
        setTablesData((prevState) => prevState.filter((item) => item.id !== id));
    };

    const removeRow = (tableId: string, rowId: string) => {
        setTablesData((prevState) => prevState
            .map((item) => item.id === tableId ? {
                ...item,
                data: item.data.filter((row) => row.id !== rowId)
            } : item));
    };

    const addRow = (data: {
        name: string
        surname: string
        age: string
        city: string
    }) => {
        setTablesData((prevState) => prevState
            .map((item, index) => index === 0 ? {
                ...item,
                data: [
                    ...item.data,
                    {
                        id: nextId(),
                        ...data
                    }
                ]
            } : item));
    };

    const editRow = (values: {
        name: string
        surname: string
        age: string
        city: string
    }) => {
        setTablesData((prevState) => prevState
            .map((item) => item.id === modalData?.tableId ? {
                ...item,
                data: item.data.map((row) => row.id === modalData.id ? {
                    ...row,
                    ...values
                } : row)
            } : item));
    };

    return (
        <Container>
            <Form submit={(data) => addRow(data)} />
            {tablesData.map((item) => <Table
                key={item.id}
                data={item.data}
                copyTable={() => copyTable(item.id)}
                removeTable={tablesData[0].id === item.id ? undefined : () => removeTable(item.id)}
                editRow={(data) => setModalData({
                    ...data,
                    tableId: item.id
                })}
                removeRow={(rowId) => removeRow(item.id, rowId)}
            />)}
            <ModalForm
                data={modalData}
                onClose={() => setModalData(null)}
                submit={(values) => editRow(values)}
            />
            <GlobalStyle />
        </Container>
    );
};

export default App;
