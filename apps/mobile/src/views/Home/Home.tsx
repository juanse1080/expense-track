import useAuth from '@/hooks/useAuth'
import { Box, Text } from '@gluestack-ui/themed'
import { Stack } from 'expo-router'

const Home = () => {
  const { auth } = useAuth()

  return (
    <Box height="100%" justifyContent="flex-start">
      <Text bold size="4xl" textAlign="center">
        Home view
      </Text>

      <Text mt="$8" size="2xl" textAlign="center">
        Welcome {auth?.name}
      </Text>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </Box>
  )
}

export default Home
