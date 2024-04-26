import { AuthContext, AuthModel } from '@/context/AuthContext'
import { router } from 'expo-router'

import { useCallback, useContext } from 'react'

const useAuth = () => {
  const { auth, setAuth } = useContext(AuthContext)

  const checkAction = useCallback(
    (action: string) => !auth || auth.actions?.includes(action),
    [auth]
  )

  const login = useCallback(
    (newAuth: AuthModel) => {
      setAuth(newAuth)
      router.push('/home')
    },
    [setAuth, router]
  )

  const logout = useCallback(() => {
    setAuth()
    router.replace('/login')
  }, [setAuth, router])

  return {
    auth,
    setAuth,
    login,
    logout,
    checkAction,
  }
}

export default useAuth
