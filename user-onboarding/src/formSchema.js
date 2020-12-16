import * as yup from 'yup'

export default yup.object().shape({

    username: yup.string()
                 .required('username needed')
                 .min(2, 'length'),
    email: yup.string()
                .required('needs email')
                .email('must have email'),
    password: yup.string()
                    .required('password needed')
                    .min(5,'length'),
    termsOfService: yup.boolean(),






})