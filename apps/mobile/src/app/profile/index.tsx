import withAuth from '@/HOCs/withAuth'
import Home from '@/views/Home'
import { SafeAreaView } from 'react-native-safe-area-context'

const ProfilePage = () => {
  return (
    <SafeAreaView>
      <Home />
    </SafeAreaView>
  )
}

export default withAuth(ProfilePage)
