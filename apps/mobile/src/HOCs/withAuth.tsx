import useAuth from '@/hooks/useAuth'
import { Text } from '@gluestack-ui/themed'
import { Redirect } from 'expo-router'
import { ComponentType } from 'react'

function withAuth(Component: ComponentType, action?: string) {
  return (props: any) => {
    const { auth, loading } = useAuth()

    if (loading) return <Text>Loading ...</Text>
    if (!loading && !auth) return <Redirect href="/login" />

    return <Component {...props} />
  }
}

export default withAuth
