// Root Navigator for app
import { Image, Pressable } from "react-native"
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
          headerShown: false,
          animation: "slide_from_bottom",
          headerStyle: { backgroundColor: '#CCBFAA' },
          headerTintColor: "transparent",
          headerTitle: () => (
            <Image 
              style={{ height: 50, width: 50, borderRadius: 10 }}
              source={{ uri: "https://images.squarespace-cdn.com/content/v1/5b101d96a9e02838162c787e/1565105219810-RAL6GZWZLALZZ10MZJ6Z/SchmidtResources_C21SquareTemplate-05.jpg"}}
            />
          )
        }}
      >
        <Stack.Screen 
          name="index"
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: '#CCBFAA' },
            headerTintColor: "transparent",

            headerRight: () => (
              // <AntDesign
              //   name="home" 
              //   size={28} 
              //   color={"black"}
              //   //  nav bar button  
              //   onPress={() => router.push("navBarModal")} 
              // />
              <>
                <Pressable
                  onPress={() => router.push("navBarModal")} 
                >
                  <Image 
                    style={{ resizeMode: "contain", height: 50, width: 50, borderRadius: 10 }}
                    source={{ uri: "https://rebrand.c21.com/images/signage-b.png?v=20180228"}}
                  />
                </Pressable>
              </>
            ),
          }}
        />
        <Stack.Screen 
          name="navBarModal"
          options={{
            headerShown: true,
            cardShadowEnabled: true,
            presentation: "formSheet",
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
