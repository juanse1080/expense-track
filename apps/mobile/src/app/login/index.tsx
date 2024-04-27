import withoutAuth from '@/HOCs/withoutAuth'
import Login from '@/views/Login'
import { SafeAreaView } from 'react-native-safe-area-context'

const LoginPage = () => {
  return (
    <SafeAreaView>
      <Login />
    </SafeAreaView>
  )
}

export default withoutAuth(LoginPage)
