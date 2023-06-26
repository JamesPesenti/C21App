// Root Navigator for app
import { Image } from "react-native"
import { Stack, useRouter } from "expo-router"
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from "@expo/vector-icons"

const RootLayout = () => {

  const router = useRouter()

  const transitionSpec = {
    animation: "spring",
    config: {
      stiffness: 110,
      damping: 20,
      mass: 1,
      overshootClamping: false,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          animation: 'slide_from_left',
          headerStyle: { backgroundColor: 'papayawhip' },
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
            headerStyle: { backgroundColor: 'papayawhip' },
            headerTintColor: "transparent",
            headerRight: () => (
              <AntDesign 
                name="home" 
                size={24} 
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
            animation: 'slide_from_right',
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
          options={{
            headerShown: false,
            transitionSpec: {
              open: transitionSpec,
              close: transitionSpec,
            },
            }}
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
