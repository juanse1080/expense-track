import { ReactElement, cloneElement } from 'react'
import { Controller, Control, FieldPath, FieldValues } from 'react-hook-form'

export type ControllerInputProps<T extends FieldValues> = {
  name: FieldPath<T>
  disabled?: boolean
  required?: boolean
  readonly?: boolean
  control: Control<T>
  children: ReactElement
}

const ControllerInput = <T extends FieldValues>({
  control,
  name,
  children,
  disabled,
  required,
  readonly,
}: ControllerInputProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange: onChangeText, onBlur, value },
        formState: { errors },
      }) =>
        cloneElement(children, {
          value,
          onBlur,
          disabled,
          required,
          readonly,
          onChangeText,
          error: name in errors,
          errorText: errors[name] ? errors[name]?.message : undefined,
        })
      }
    />
  )
}

export default ControllerInput
