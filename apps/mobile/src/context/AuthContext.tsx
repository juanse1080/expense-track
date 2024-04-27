import { loadState, saveState } from '@/utils/AsyncStorage'
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'

export type AuthModel = {
  name: string
  email: string
  token: string
  actions: string[]
}

export interface AuthContextType {
  loading?: boolean
  auth?: AuthModel
  setAuth: (auth?: AuthModel) => void
  setLoading: (newLoading: boolean) => void
}

export const AuthContext = createContext({} as AuthContextType)

export default function AuthProvider({
  children,
}: Readonly<PropsWithChildren<{}>>) {
  const [loading, setLoading] = useState<boolean>(true)
  const [auth, setAuth] = useState<AuthModel>()

  const handleAuth = useCallback(async (newAuth?: AuthModel) => {
    setAuth(newAuth)
    await saveState('auth', newAuth)
  }, [])

  const handleLoading = useCallback((newLoading: boolean) => {
    setLoading(newLoading)
  }, [])

  const authValue = useMemo(
    () => ({ setAuth: handleAuth, auth, loading, setLoading: handleLoading }),
    [auth, loading, handleAuth]
  )

  useEffect(() => {
    setLoading(true)
    const loadAuth = async () => {
      const localAuth = await loadState<AuthModel>('auth')
      setAuth(localAuth)
    }

    loadAuth()
    setLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  )
}
