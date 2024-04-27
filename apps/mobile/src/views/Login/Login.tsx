import { ControllerInput, Input, InputPassword } from '@/components'
import useAuth from '@/hooks/useAuth'
import useLazyFetch from '@/hooks/useLazyFetch'
import { loginSchema, loginSchemaType } from '@/schemas/login'
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
import LoginImage from './LoginImage'

const defaultValues: Partial<loginSchemaType> = {
  email: '',
  password: '',
}
export default function Login() {
  const { login } = useAuth()
  const { fetchData, loading } = useLazyFetch<loginSchemaType, any>()

  const { control, handleSubmit, setError } = useForm<loginSchemaType>({
    defaultValues,
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: loginSchemaType) => {
    try {
      const response = await fetchData('sign-in', { data, method: 'POST' })
      login(response)
    } catch (err: any) {
      if (err.response?.data?.statusCode === 401)
        setError('password', {
          message: 'Wrong credentials. Try again',
          type: 'custom',
        })

      if (err.response?.data?.statusCode === 400)
        err.response?.data?.message.forEach((e: any) => {
          setError(e.property, { message: e.message, type: 'api' })
        })
    }
  }

  return (
    <Box height="100%" justifyContent="space-between" gap="$5">
      <Box my="$3" justifyContent="center">
        <LoginImage height={300} width="100%" color="#6c63ff" />
      </Box>
      <Box flexDirection="column" gap="$5">
        <Text bold size="4xl" textAlign="center">
          Verify user
        </Text>
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
      </Box>

      <ButtonGroup flexDirection="column">
        <Text textAlign="center">
          Don't have an account?
          <Link href="/register">
            <Text bold> Register</Text>
          </Link>
        </Text>
        <Button
          size="xl"
          backgroundColor="black"
          borderRadius="$3xl"
          onPress={handleSubmit(onSubmit)}
        >
          {loading && <Spinner color="white" mr="$3" size="small" />}
          <ButtonText color="white">Login</ButtonText>
        </Button>
      </ButtonGroup>
    </Box>
  )
}
