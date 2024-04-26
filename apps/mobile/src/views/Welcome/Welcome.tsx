import {
  Box,
  Button,
  ButtonGroup,
  ButtonText,
  Text,
} from '@gluestack-ui/themed'
import { Link } from 'expo-router'
import WelcomeIcon from './WelcomeIcon'

export default function Welcome() {
  return (
    <Box height="100%">
      <WelcomeIcon height={400} width="100%" />
      <Text bold size="4xl" textAlign="center" mt="$3">
        Welcome to
      </Text>
      <Text bold size="4xl" textAlign="center">
        Expense track
      </Text>
      <Box flexGrow={1} />
      <ButtonGroup flexDirection="column">
        <Link href="/login" asChild>
          <Button size="xl" backgroundColor="black" borderRadius="$3xl">
            <ButtonText>Login</ButtonText>
          </Button>
        </Link>
        <Link href="/register" asChild>
          <Button size="xl" backgroundColor="#afafaf" borderRadius="$3xl">
            <ButtonText color="black">Register</ButtonText>
          </Button>
        </Link>
      </ButtonGroup>
    </Box>
  )
}
