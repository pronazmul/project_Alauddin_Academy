import * as yup from 'yup'

// const SUPPORTED_FORMATS = ['image/jpeg', 'image/jpg', 'image/png']
const PasswordRegEx =
  /^.*((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/
const mobileRegEx = /(\+088)?-?01[0-9]\d{8}/g
// const onlyDigit = /^[0-9]+$/
// const onlyChar = /^[A-Z a-z]+$/

export const LoginSchema = yup.object().shape({
  email: yup.string().email('Invalid Email!').required('Email is required'),
  password: yup
    .string()
    .matches(PasswordRegEx, 'Invalid Password!')
    .required('Password is required'),
})

export const StudentRegistrationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  class: yup.string().required('Class is required'),
  section: yup.string().required('Section is required'),
  email: yup.string().email('Invalid Email!').optional(),
  gender: yup.string().required('Gender is required'),
  bloodGroup: yup.string().optional(),
  roll: yup.string().optional(),
  studentPhone: yup
    .string()
    .optional()
    .matches(mobileRegEx, 'Invalid Phone Number!'),
  fathersName: yup.string().optional(),
  fathersProfession: yup.string().optional(),
  mothersName: yup.string().optional(),
  mothersProfession: yup.string().optional(),
  parentsPhone: yup
    .string()
    .optional()
    .matches(mobileRegEx, 'Invalid Phone Number!'),
  address: yup.string().required('Address is required'),
})
