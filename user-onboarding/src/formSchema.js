import * as yup from 'yup'

export default yup.object().shape({

    username: yup
                .string()
                  .required('username needed')
                  .min(3, 'must be 3 chars long'),
    email: yup
                .string()
                  .required('email required')
                  .email('must be an email'),
    password: yup
                .string()
                     .required('password')
                     .min(3,'must be 3 chars long'),
    termsOfService: yup.boolean(),






})