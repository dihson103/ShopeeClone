import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'

type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }

export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: {
      value: true,
      message: 'Email là bắt buộc!'
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Email không đúng định dạng!'
    },
    minLength: {
      value: 5,
      message: 'Độ dài tối thiểu là 5 ký tự!'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài tối đa là 160 ký tự!'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Password là bắt buộc!'
    },
    minLength: {
      value: 6,
      message: 'Độ dài tối thiểu là 6 ký tự!'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài tối đa là 160 ký tự!'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Confirm password là bắt buộc!'
    },
    minLength: {
      value: 6,
      message: 'Độ dài tối thiểu là 6 ký tự!'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài tối đa là 160 ký tự!'
    },
    validate:
      typeof getValues === 'function'
        ? (value) => value == getValues('password') || 'Confirm password không khớp'
        : undefined
  }
})