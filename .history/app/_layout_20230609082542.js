import { Stack } from "expo-router"
import { StatusBar } from 'expo-status-bar';
import LearnMore from "../src/components/LearnMore"

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
          name="Learn More"
          options={{headerShown: false}}
        />
      </Stack>
    </>
  )
}

export default RootLayout
