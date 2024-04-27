import { ControllerInput, Input, InputPassword } from '@/components'
import useAuth from '@/hooks/useAuth'
import useLazyFetch from '@/hooks/useLazyFetch'
import { registerSchema, registerSchemaType } from '@/schemas/register'
import {
  Box,
  Button,
  ButtonGroup,
  ButtonText,
  Spinner,
  Text,
} from '@gluestack-ui/themed'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'expo-router'
import { useForm } from 'react-hook-form'

const defaultValues: Partial<registerSchemaType> = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}
export default function Register() {
  const { login } = useAuth()
  const { fetchData, loading } = useLazyFetch<registerSchemaType, any>()

  const { control, handleSubmit, setError } = useForm<registerSchemaType>({
    defaultValues,
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = async (data: registerSchemaType) => {
    try {
      const response = await fetchData('sign-up', { data, method: 'POST' })
      login(response)
    } catch (err: any) {
      if (err.response?.data?.statusCode === 400)
        err.response?.data?.message.forEach((e: any) => {
          setError(e.property, { message: e.message, type: 'api' })
        })
    }
  }

  return (
    <Box height="100%" justifyContent="space-between" gap="$5">
      <Text bold size="4xl" textAlign="center">
        Create an Account
      </Text>
      <Box flexDirection="column" gap="$5">
        <ControllerInput
          required
          name="name"
          control={control}
          disabled={loading}
        >
          <Input
            label="Name"
            placeholder="John"
            textContentType="name"
            autoCapitalize="none"
          />
        </ControllerInput>
        <ControllerInput
          required
          name="email"
          control={control}
          disabled={loading}
        >
          <Input
            label="Email"
            placeholder="john@email.com"
            textContentType="username"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </ControllerInput>
        <ControllerInput
          required
          name="password"
          control={control}
          disabled={loading}
        >
          <InputPassword
            label="Password"
            textContentType="password"
            autoCapitalize="none"
          />
        </ControllerInput>
        <ControllerInput
          required
          name="confirmPassword"
          control={control}
          disabled={loading}
        >
          <InputPassword
            label="Confirm password"
            textContentType="password"
            autoCapitalize="none"
          />
        </ControllerInput>
      </Box>

      <ButtonGroup flexDirection="column">
        <Text textAlign="center">
          Already have an account?
          <Link href="/login">
            <Text bold> Login</Text>
          </Link>
        </Text>
        <Button
          size="xl"
          backgroundColor="black"
          borderRadius="$3xl"
          onPress={handleSubmit(onSubmit)}
        >
          {loading && <Spinner color="white" mr="$3" size="small" />}
          <ButtonText color="white">Register</ButtonText>
        </Button>
      </ButtonGroup>
    </Box>
  )
}
