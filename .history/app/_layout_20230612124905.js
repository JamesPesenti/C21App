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
          headerStyle: { backgroundColor: 'transparent' },
          headerTintColor: "transparent",
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
            headerShown: true,
            headerTransparent: false,
            headerTintColor: "transparent",
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
            cardShadowEnabled: true,
            presentation: "modal",
            animation: 'slide_from_left',
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
