import * as Yup from 'yup';

interface ValidationMessages {
    required: string
    numberType: string
}

const TableFormSchema = (messages: ValidationMessages) => Yup.object().shape({
    name: Yup.string()
        .required(messages.required),
    surname: Yup.string()
        .required(messages.required),
    age: Yup.number()
        .required(messages.required)
        .typeError(messages.numberType),
    city: Yup.string()
        .required(messages.required)
});

export default TableFormSchema;
