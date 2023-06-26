import { Stack } from "expo-router"


const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen 
         name="index"
         options={{title: "Home", textAlign: "center"}}
      />
    </Stack>
  )
}

export default RootLayout
