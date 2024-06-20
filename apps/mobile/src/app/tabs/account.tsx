import useAuth from '@/hooks/useAuth'
import { Box, Button, ButtonText, Card, Text } from '@gluestack-ui/themed'
import { PropsWithChildren, ReactNode } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function AccountPage() {
  const { auth, logout } = useAuth()
  return (
    <Box bgColor="white" flex={1} gap="$5" as={SafeAreaView}>
      <AccountInfo auth={auth} />
      <Section title="General">
        <Item>Preference</Item>
        <Item>Notifications</Item>
        <Item disabledBorder>Theme</Item>
      </Section>

      <Section title="Security">
        <Item>Changes password</Item>
        <Item disabledBorder>Devices</Item>
      </Section>

      <Box flexGrow={1}></Box>

      <Button
        size="xl"
        backgroundColor="$rose600"
        borderRadius="$3xl"
        onPress={logout}
      >
        <ButtonText color="white">Logout</ButtonText>
      </Button>
    </Box>
  )
}

const Section = ({
  children,
  title,
}: PropsWithChildren<{ title?: ReactNode }>) => {
  return (
    <Box flexBasis="auto">
      <Text bold size="lg" textAlign="left" mb="$1">
        {title}
      </Text>
      <Card rounded="$3xl" variant="filled" display="flex" p="$0">
        {children}
      </Card>
    </Box>
  )
}

const Item = ({
  children,
  disabledBorder,
}: PropsWithChildren<{ disabledBorder?: boolean }>) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="flex-start"
      alignItems="center"
      gap="$3"
      px="$4"
      py="$3"
      borderBottomWidth={disabledBorder ? 0 : 1}
      borderColor="$trueGray200"
    >
      <Text size="lg" textAlign="left">
        {children}
      </Text>
    </Box>
  )
}
const AccountInfo = ({ auth }: any) => (
  <Box
    height="$16"
    display="flex"
    flexDirection="row"
    justifyContent="flex-start"
    alignItems="center"
    gap="$3"
  >
    <Box
      p="$2"
      rounded="$full"
      backgroundColor="$trueGray300"
      width="$16"
      height="$16"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Text size="2xl" textAlign="left">
        {auth?.name[0]}
      </Text>
    </Box>
    <Box>
      <Text size="2xl" textAlign="left">
        {auth?.name}
      </Text>
      <Text size="xl" textAlign="left">
        {auth?.email}
      </Text>
    </Box>
  </Box>
)
