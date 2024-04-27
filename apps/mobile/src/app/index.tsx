import withoutAuth from '@/HOCs/withoutAuth'
import Welcome from '@/views/Welcome'
import { SafeAreaView } from 'react-native-safe-area-context'

const AppPage = () => {
  return (
    <SafeAreaView>
      <Welcome />
    </SafeAreaView>
  )
}

export default withoutAuth(AppPage)
