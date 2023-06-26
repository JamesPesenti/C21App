// Root Navigator for app
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
          animation: "slide_from_bottom",
          headerStyle: { backgroundColor: 'papayawhip' },
          headerTintColor: "transparent",
          headerTitle: () => (
            <Image 
              style={{height: 50, width: 50, borderRadius: 50}}
              source={{ uri: "data:image/jpeg;base64,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"}}
            />
          )
        }}
      >
        <Stack.Screen 
          name="index"
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: 'papayawhip' },
            headerTintColor: "transparent",
            headerRight: () => (
              <AntDesign
                name="home" 
                size={28} 
                color={"black"}
                //  nav bar button  
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
            animation: "slide_from_right",
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
          name="recentSales"
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
