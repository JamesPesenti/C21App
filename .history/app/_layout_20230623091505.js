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
              style={{resizeMode: "contain", height: 50, width: 100, borderRadius: 10}}
              source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQftroyVLktGEpJB-dKzcW2L28LiiR5Cmpl3LQFBmDRQL9m-ikybuN1XpGBJ3fATF-PMzQ&usqp=CAU"}}
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
