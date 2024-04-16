import { GluestackUIProvider } from '@gluestack-ui/themed'
import { StatusBar } from 'expo-status-bar'
import { config } from '../config/gluestack-ui.config'
import Welcome from './views/Welcome'

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <StatusBar style="auto" />
      <Welcome />
    </GluestackUIProvider>
  )
}
