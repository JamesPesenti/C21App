import { Stack } from "expo-router"
import { StatusBar } from "expo-statusBar"

const RootLayout = () => {
  return (
    <>
      <StatusBar color="light" />
      <Stack>
        <Stack.Screen 
          name="index"
          options={{headerShown: false}}
        />
      </Stack>
    </>
  )
}

export default RootLayout
