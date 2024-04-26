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
  auth?: AuthModel
  setAuth: (auth?: AuthModel) => void
}

export const AuthContext = createContext({} as AuthContextType)

export default function AuthProvider({
  children,
}: Readonly<PropsWithChildren<{}>>) {
  const [auth, setAuth] = useState<AuthModel>()

  const handleAuth = useCallback(async (newAuth?: AuthModel) => {
    setAuth(newAuth)
    await saveState('auth', newAuth)
  }, [])

  const authValue = useMemo(
    () => ({ setAuth: handleAuth, auth }),
    [auth, handleAuth]
  )

  useEffect(() => {
    const loadAuth = async () => {
      const localAuth = await loadState<AuthModel>('auth')
      setAuth(localAuth)
    }

    loadAuth()
  }, [])

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  )
}
