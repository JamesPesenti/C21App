import { Image } from "react-native"
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
          headerTitle: () => (
            <Image 
              style={{height: 50, width: 50, borderRadius: 50}}
              source={{ uri: "https://static.vecteezy.com/system/resources/thumbnails/004/701/546/small/pg-letter-logo-isolated-on-white-background-vector.jpg"}}
            />
          )
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
