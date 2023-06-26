import { Stack } from "expo-router"
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from "@expo/vector-icons"

const RootLayout = () => {
  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerTintColor: "white",
          headerRight: () => (
            <AntDesign name="home" size={24} color={"black"} />
          ),
          headerTitle: "PG Realty Co."
        }}
      >
        <Stack.Screen 
          name="index"
          options={{
            title: "PG Realty Co",
            headerShown: true,
            headerTransparent: true
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
