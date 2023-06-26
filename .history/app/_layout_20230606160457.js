import { Stack } from "expo-router"
import { statusBar } from "expo-statusBar"

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen 
         name="index"
         options={{headerShown: false}}
      />
    </Stack>
  )
}

export default RootLayout
