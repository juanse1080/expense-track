import { EyeIcon, EyeOffIcon, InputIcon, InputSlot } from '@gluestack-ui/themed'
import { forwardRef, useState } from 'react'
import Input, { InputProps } from '../Input'

export type InputPasswordProps = Omit<InputProps, 'type' | 'endAdornment'>

const InputPassword = forwardRef<any, InputPasswordProps>(
  ({ ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false)

    const handleState = () => {
      setShowPassword((showState) => {
        return !showState
      })
    }

    return (
      <Input
        ref={ref}
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputSlot pr="$3" onPress={handleState}>
            <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
          </InputSlot>
        }
        {...props}
      />
    )
  }
)

export default InputPassword
