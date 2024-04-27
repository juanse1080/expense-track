import withoutAuth from '@/HOCs/withoutAuth'
import Register from '@/views/Register'
import { SafeAreaView } from 'react-native-safe-area-context'

const RegisterPage = () => {
  return (
    <SafeAreaView>
      <Register />
    </SafeAreaView>
  )
}

export default withoutAuth(RegisterPage)
