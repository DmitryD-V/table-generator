import React from 'react';
import {
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

export const Table = () => {
    return (
        <Container>
            <TableButtons>
                <CopyBtn>Copy table</CopyBtn>
                <RemoveBtn />
            </TableButtons>
            <TableWrapper>
                <TableRow>
                    <TableHeader>Name</TableHeader>
                    <TableHeader>Surname</TableHeader>
                    <TableHeader>Age</TableHeader>
                    <TableHeader>City</TableHeader>
                    <TableHeader />
                </TableRow>
                <TableRow>
                    <TableCell $mobileHead={'Name'}>
                        <div>Name</div>
                    </TableCell>
                    <TableCell $mobileHead={'Surname'}>
                        <div>Surname</div>
                    </TableCell>
                    <TableCell $mobileHead={'Age'}>
                        <div>Age</div>
                    </TableCell>
                    <TableCell $mobileHead={'City'}>
                        <div>City</div>
                    </TableCell>
                    <TableCell>
                        <TableButton $color={'#057AE3'}>Edit</TableButton>
                        <TableButton $color={'#B0263D'}>Delete</TableButton>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><div /></TableCell>
                    <TableCell><div /></TableCell>
                    <TableCell><div /></TableCell>
                    <TableCell><div /></TableCell>
                    <TableCell><div /></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><div /></TableCell>
                    <TableCell><div /></TableCell>
                    <TableCell><div /></TableCell>
                    <TableCell><div /></TableCell>
                    <TableCell><div /></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><div /></TableCell>
                    <TableCell><div /></TableCell>
                    <TableCell><div /></TableCell>
                    <TableCell><div /></TableCell>
                    <TableCell><div /></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><div /></TableCell>
                    <TableCell><div /></TableCell>
                    <TableCell><div /></TableCell>
                    <TableCell><div /></TableCell>
                    <TableCell><div /></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><div /></TableCell>
                    <TableCell><div /></TableCell>
                    <TableCell><div /></TableCell>
                    <TableCell><div /></TableCell>
                    <TableCell><div /></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><div /></TableCell>
                    <TableCell><div /></TableCell>
                    <TableCell><div /></TableCell>
                    <TableCell><div /></TableCell>
                    <TableCell><div /></TableCell>
                </TableRow>
            </TableWrapper>
        </Container>
    );
};
