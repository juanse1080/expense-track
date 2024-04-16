import {
  Box,
  Button,
  ButtonGroup,
  ButtonText,
  Text,
} from '@gluestack-ui/themed'
import WelcomeIcon from './WelcomeIcon'

export default function Welcome() {
  return (
    <Box bg="white" px="$5" py="$7" height="100%">
      <WelcomeIcon height={400} width="100%" />
      <Text bold size="4xl" textAlign="center" mt="$3">
        Welcome to Expense track
      </Text>
      <Box flexGrow={1} />
      <ButtonGroup flexDirection="column">
        <Button size="xl" backgroundColor="black" borderRadius="$3xl">
          <ButtonText>Login</ButtonText>
        </Button>
        <Button size="xl" backgroundColor="#bfbfbf" borderRadius="$3xl">
          <ButtonText color="black">Register</ButtonText>
        </Button>
      </ButtonGroup>
    </Box>
  )
}
