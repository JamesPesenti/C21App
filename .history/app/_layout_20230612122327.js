import { Image } from "react-native"
import { Stack, useRouter } from "expo-router"
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from "@expo/vector-icons"

const RootLayout = () => {

  const router = useRouter()

  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: 'papayawhip' },
          headerTintColor: "white",
         
        }}
      >
        <Stack.Screen 
          name="index"
          options={{
            headerShown: true,
            headerTransparent: false,
            headerRight: () => (
              <AntDesign 
                name="home" 
                size={24} 
                color={"black"}
                // Currently the contact modal/will be a nav bar button  
                onPress={() => router.push("navBarModal")} 
              />
            ),
          }}
        />
        <Stack.Screen 
          name="navBarModal"
          options={{
            presentation: "modal",
            animation:'slide_from_right',
            headerShown: true,
            headerTransparent: false
          }}
        />
        <Stack.Screen 
          name="contactModal"
          options={{
            headerTransparent: false
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
