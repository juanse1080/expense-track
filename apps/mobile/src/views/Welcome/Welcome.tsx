import {
  Box,
  Button,
  ButtonGroup,
  ButtonText,
  Text,
} from '@gluestack-ui/themed'
import { Link } from 'expo-router'
import WelcomeImage from './WelcomeImage'

export default function Welcome() {
  return (
    <Box height="100%" gap="$5" justifyContent="space-between">
      <WelcomeImage height={500} width="100%" color="#6c63ff" />
      <Text bold size="4xl" textAlign="center" mt="$3">
        Welcome
      </Text>
      <Box flexGrow={1} />
      <ButtonGroup flexDirection="column">
        <Link href="/login" asChild>
          <Button size="xl" backgroundColor="black" borderRadius="$3xl">
            <ButtonText>Login</ButtonText>
          </Button>
        </Link>
        <Link href="/register" asChild>
          <Button
            size="xl"
            backgroundColor="rgb(230, 230, 230)" // TODO: add to palette
            borderRadius="$3xl"
          >
            <ButtonText color="black">Register</ButtonText>
          </Button>
        </Link>
      </ButtonGroup>
    </Box>
  )
}
