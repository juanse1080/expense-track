import { Box, Fab, FabLabel, Text } from '@gluestack-ui/themed'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function FriendsPage() {
  return (
    <Box bgColor="white" flex={1} gap="$5" as={SafeAreaView}>
      <Box mt="$5" flexDirection="row" justifyContent="space-between">
        <Text bold size="xl">
          Total
        </Text>
        <Text size="xl" color="$green400">
          $ {Number(1176500).toLocaleString('es-CO')}
        </Text>
      </Box>

      <Item name="Juan Martinez" cant={-190000} />
      <Item name="Paola Caicedo" cant={80000} />
      <Item name="Edwin Sambrano" cant={1104500} />
      <Item name="Erwing Figueredo" cant={-8000} />
      <Item name="John Tali" cant={190000} />

      <Fab size="lg" backgroundColor="#6c63ff">
        <FabLabel>Add</FabLabel>
      </Fab>
    </Box>
  )
}

const Item = ({ name, cant }: { name: string; cant: number }) => {
  return (
    <Box
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
        width="$12"
        height="$12"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text size="2xl" textAlign="left">
          {name[0]}
        </Text>
      </Box>
      <Text size="xl" textAlign="left">
        {name}
      </Text>
      <Box flexGrow={1}></Box>
      <Text
        size="xl"
        textAlign="left"
        color={cant > 0 ? '$green400' : '$rose400'}
      >
        $ {Math.abs(cant).toLocaleString('es-CO')}
      </Text>
    </Box>
  )
}
