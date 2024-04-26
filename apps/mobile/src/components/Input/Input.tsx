import {
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
  Input as InputGlueStack,
  InputField,
} from '@gluestack-ui/themed'
import { forwardRef, ReactNode } from 'react'
import { TextInputProps } from 'react-native'

export type InputProps = TextInputProps & {
  type?: 'text' | 'password'
  disabled?: boolean
  error?: boolean
  readonly?: boolean
  required?: boolean
  label?: ReactNode
  helperText?: ReactNode
  errorText?: ReactNode
  startAdornment?: ReactNode
  endAdornment?: ReactNode
}

const Input = forwardRef<any, InputProps>(
  (
    {
      type,
      label,
      error,
      disabled,
      readonly,
      required,
      helperText,
      errorText,
      children,
      startAdornment,
      endAdornment,
      ...props
    },
    ref
  ) => {
    return (
      <FormControl
        size="sm"
        isDisabled={disabled}
        isInvalid={error}
        isReadOnly={readonly}
        isRequired={required}
      >
        <FormControlLabel mb="$1" mx="$2">
          <FormControlLabelText>{label}</FormControlLabelText>
        </FormControlLabel>
        <InputGlueStack size="xl">
          {startAdornment}
          <InputField ref={ref} type={type} {...props} />
          {endAdornment}
        </InputGlueStack>
        {helperText && (
          <FormControlHelper mt="$1" mx="$2">
            <FormControlHelperText>{helperText}</FormControlHelperText>
          </FormControlHelper>
        )}
        {errorText && (
          <FormControlError mt="$1" mx="$2">
            <FormControlErrorText>{errorText}</FormControlErrorText>
          </FormControlError>
        )}
      </FormControl>
    )
  }
)

export default Input
