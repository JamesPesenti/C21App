import { Stack } from "expo-router"
import { StatusBar } from "expo-statusBar"

const RootLayout = () => {
  return (
    <>
      <StatusBar color="auto" />
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
