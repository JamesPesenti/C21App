import { Stack } from "expo-router"
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from "@expo/vector-icons"

const RootLayout = () => {
  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerRight: () => (
            <AntDesign name="infocirlceo" size={24} color={"black"} />
          ),
        }}
      >
        <Stack.Screen 
          name="index"
          screenOptions={{
            color: "transparent"
          }}
          options={{
            title: "PG Realty Co",
            headerShown: true,
          }}
        />
        <Stack.Screen 
          name="searchHomes"
          options={{headerShown: false}}
        />
         <Stack.Screen 
          name="learnMore"
          options={{headerShown: false}}
        />
      </Stack>
    </>
  )
}

export default RootLayout
