import AsyncStorage from '@react-native-async-storage/async-storage'

export const loadState = async <T = any>(
  key: string
): Promise<T | undefined> => {
  if (typeof window !== 'undefined') {
    try {
      const value = await AsyncStorage.getItem(key)
      if (value === null) return undefined

      return JSON.parse(value) as T
    } catch (err) {
      console.error(err)
      return undefined
    }
  }
  return undefined
}

export const saveState = async (key: string, state?: any) => {
  if (typeof window !== 'undefined') {
    try {
      if (state === undefined || state === null) {
        await AsyncStorage.removeItem(key)
      } else {
        const serialState = JSON.stringify(state)
        await AsyncStorage.setItem(key, serialState)
      }
    } catch (err) {
      console.error(err)
    }
  }
  return undefined
}

export const removeState = async (key: string) => {
  if (typeof window !== 'undefined') {
    try {
      await AsyncStorage.removeItem(key)
    } catch (err) {
      console.error(err)
    }
  }
  return undefined
}
