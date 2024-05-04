import useAuth, { firstPage } from '@/hooks/useAuth'
import { Text } from '@gluestack-ui/themed'
import { Redirect } from 'expo-router'

import { ComponentType } from 'react'

function withoutAuth(Component: ComponentType) {
  return (props: any) => {
    const { auth, loading } = useAuth()

    if (loading) return <Text>Loading ...</Text>
    if (!loading && auth) return <Redirect href={firstPage} />

    return <Component {...props} />
  }
}

export default withoutAuth
