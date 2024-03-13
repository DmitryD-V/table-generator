import React, { FC } from 'react';
import {
    CellText,
    Container,
    CopyBtn,
    RemoveBtn,
    TableButton,
    TableButtons,
    TableCell,
    TableHeader,
    TableRow,
    TableWrapper
} from './styles';
import nextId from 'react-id-generator';

interface DataItemType {
    id: string;
    name: string;
    surname: string;
    age: string;
    city: string;
}

interface Props {
    data: Array<DataItemType>;
    copyTable: () => void;
    removeTable?: () => void;
    editRow: (data: DataItemType) => void;
    removeRow: (id: string) => void;
}

export const Table: FC<Props> = ({ data, copyTable, removeTable, editRow, removeRow }) => {

    return (
        <Container>
            <TableButtons>
                <CopyBtn onClick={copyTable}>Copy table</CopyBtn>
                {removeTable && <RemoveBtn onClick={removeTable} />}
            </TableButtons>
            <TableWrapper>
                <TableRow>
                    <TableHeader>Name</TableHeader>
                    <TableHeader>Surname</TableHeader>
                    <TableHeader>Age</TableHeader>
                    <TableHeader>City</TableHeader>
                    <TableHeader />
                </TableRow>
                {data.map((item) => <TableRow key={item.id}>
                    <TableCell $mobileHead={'Name'} title={item.name}><CellText>{item.name}</CellText></TableCell>
                    <TableCell $mobileHead={'Surname'}
                               title={item.surname}><CellText>{item.surname}</CellText></TableCell>
                    <TableCell $mobileHead={'Age'} title={item.age}><CellText>{item.age}</CellText></TableCell>
                    <TableCell $mobileHead={'City'} title={item.city}><CellText>{item.city}</CellText></TableCell>
                    <TableCell>
                        <TableButton $color={'#057AE3'} onClick={() => editRow(item)}>Edit</TableButton>
                        <TableButton $color={'#B0263D'} onClick={() => removeRow(item.id)}>Delete</TableButton>
                    </TableCell>
                </TableRow>)}
                {data.length < 7 && Array(7 - data.length).fill('').map(() => <TableRow
                    key={nextId()}
                >
                    <TableCell />
                    <TableCell />
                    <TableCell />
                    <TableCell />
                    <TableCell />
                </TableRow>)}
                <TableRow>
                    <TableCell />
                    <TableCell />
                    <TableCell />
                    <TableCell />
                    <TableCell />
                </TableRow>
            </TableWrapper>
        </Container>
    );
};
