import { config } from '@/config/gluestack-ui.config'
import AuthProvider from '@/context/AuthContext'
import { Box, GluestackUIProvider } from '@gluestack-ui/themed'
import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function LayoutPage() {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
        <AuthProvider>
          <StatusBar style="auto" />
          <Box bg="white" px="$5" height="100%">
            <Slot />
          </Box>
        </AuthProvider>
      </GluestackUIProvider>
    </SafeAreaProvider>
  )
}
