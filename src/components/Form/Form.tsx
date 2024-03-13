import React, { FC } from 'react';
import { Container, InputField, SubmitBtn } from './styles';
import { Select } from '../Select/Select';
import { useFormik } from 'formik';
import TableFormSchema from '../../utils/validationSchemas/TableForm';

interface Props {
    initialData?: {
        name: string
        surname: string
        age: string
        city: string
    }
    submit: (values: {
        name: string
        surname: string
        age: string
        city: string
    }) => void
    buttonText?: string
}

export const Form: FC<Props> = ({ initialData, submit, buttonText }) => {

    const formik = useFormik({
        initialValues: {
            name: initialData?.name || '',
            surname: initialData?.surname || '',
            age: initialData?.age || '',
            city: initialData?.city || '',
        },
        validationSchema: TableFormSchema({
            required: 'required field',
            numberType: 'must be a number'
        }),
        onSubmit: (values) => onSubmit(values),
        enableReinitialize: true
    });

    const onSubmit = (values: {
        name: string
        surname: string
        age: string
        city: string
    }) => {
        submit(values);
        formik.resetForm();
    };

    return (
        <Container onSubmit={formik.handleSubmit}>
            <InputField
                placeholder={'Name'}
                name={'name'}
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && formik.errors.name ? formik.errors.name : undefined}
            />
            <InputField
                placeholder={'Surname'}
                name={'surname'}
                value={formik.values.surname}
                onChange={formik.handleChange}
                error={formik.touched.surname && formik.errors.surname ? formik.errors.surname : undefined}
            />
            <InputField
                placeholder={'Age'}
                name={'age'}
                value={formik.values.age}
                onChange={formik.handleChange}
                error={formik.touched.age && formik.errors.age ? formik.errors.age : undefined}
            />
            <Select
                options={['Riga', 'Daugavpils', 'Jūrmala', 'Ventspils']}
                onChange={(option) => formik.setFieldValue('city', option)}
                placeholder={'City'}
                value={formik.values.city}
                error={formik.touched.city && formik.errors.city ? formik.errors.city : undefined}
            />
            <SubmitBtn
                type={'submit'}
                $disabled={Object.values(formik.values).every(item => !item)}
            >{buttonText || 'ADD'}</SubmitBtn>
        </Container>
    );
};
