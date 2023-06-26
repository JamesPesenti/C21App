import { Stack } from "expo-router"
import { StatusBar } from "expo-statusBar"

const RootLayout = () => {
  return (
    <>
      <StatusBar />
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
