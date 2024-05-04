import { AuthContext, AuthModel } from '@/context/AuthContext'
import { router } from 'expo-router'

import { useCallback, useContext } from 'react'

export const firstPage = '/tabs/users'

const useAuth = () => {
  const { loading, setLoading, auth, setAuth } = useContext(AuthContext)

  const checkAction = useCallback(
    (action: string) => !auth || auth.actions?.includes(action),
    [auth]
  )

  const login = useCallback(
    (newAuth: AuthModel) => {
      setAuth(newAuth)
      router.push(firstPage)
    },
    [setAuth, router]
  )

  const logout = useCallback(() => {
    setAuth()
    router.replace('/login')
  }, [setAuth, router])

  return {
    loading,
    setLoading,
    auth,
    setAuth,
    login,
    logout,
    checkAction,
  }
}

export default useAuth
