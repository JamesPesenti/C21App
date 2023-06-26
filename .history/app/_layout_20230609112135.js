import { Stack } from "expo-router"
import { StatusBar } from 'expo-status-bar';

const RootLayout = () => {
  return (
    <>
      <StatusBar style="dark" />
      <Stack>
        <Stack.Screen 
          name="index"
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="searchHomes"
          options={{headerShown: false}}
        />
      </Stack>
    </>
  )
}

export default RootLayout
