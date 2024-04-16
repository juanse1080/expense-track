import {
  Box,
  Button,
  ButtonGroup,
  ButtonText,
  Text,
  Image,
} from '@gluestack-ui/themed'
export default function Login() {
  return (
    <Box
      bg="white"
      px="$5"
      py="$7"
      height="100%"
      justifyContent="space-between"
    >
      <Image size="md" alt="photo" source={require('../assets/sapiens.svg')} />
      <Text bold size="4xl" textAlign="center">
        Welcome to expense track
      </Text>
      <ButtonGroup flexDirection="column">
        <Button size="xl" backgroundColor="black" borderRadius="$3xl">
          <ButtonText>Login</ButtonText>
        </Button>
        <Button size="xl" backgroundColor="grey" borderRadius="$3xl">
          <ButtonText color="black">Register</ButtonText>
        </Button>
      </ButtonGroup>
    </Box>
  )
}
