// Home Screen
import { TouchableOpacity, ScrollView, FlatList, StyleSheet, Text, View, Image, Pressable, Dimensions } from "react-native";
import QuestionListItem from "../src/components/QuestionListItem"
import VideoContainer from "../src/components/VideoContainer"
import Reviews from "../src/components/Reviews"
import reviewsData from "../assets/reviews"
import { Link, useRouter } from "expo-router"

const width = Dimensions.get("window").width


export default function Page() {

  const reviews = reviewsData.reviews

  const router = useRouter()

  return (
   <>
    <ScrollView 
      fadingEdgeLength={20} 
      showVerticalScrollbar={false}
      style={{ backgroundColor: "white"}}
    >
        <View style={styles.container}>

        {/* Video/Logo/Nav/Buttons */}
          <View style={{marginTop: 0}}>
            <View style={styles.overlay}>
              <VideoContainer />
            </View>
            
        </View>
        {/* Footer */}
        
        </View>
    </ScrollView>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  overlay: {
    opacity: 1,
    shadowColor: "blue",
    shadowOffset: 3,
    shadowOpacity: .1,
    shadowRadius: 10,
    position: "absolute",
    top: 100,
    left: 100,
    transform: [{ translateX: -100}, { translateY: -100}],
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: "white",
  },
  
});
