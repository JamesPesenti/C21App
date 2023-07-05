import { ScrollView, FlatList, StyleSheet, Text, View, Image, Pressable, Dimensions } from "react-native";
import QuestionListItem from "../src/components/QuestionListItem"
import VideoContainer from "../src/components/VideoContainer"
import Reviews from "../src/components/Reviews"
import reviewsData from "../assets/reviews"
import { Link, Redirect, useRouter, useSearchParams } from "expo-router"

const width = Dimensions.get("window").width

  const reviews = reviewsData.reviews



 const searchHomes = () => {

  const router = useRouter()

  const {name, lastName} = useSearchParams()

   return (
     <View style={styles.container}>
       <Text>Search Homes</Text>
       <Pressable
        style={styles.goBackButton}
        onPress={() => router.back()}
       >
        <Text style={styles.goBackText}>Go Back</Text>
       </Pressable>

     </View>
   )
 }
 
 export default searchHomes
 
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 50,
    backgroundColor: "white"
  },
  goBackButton: {
    shadowColor: "yellow",
    shadowOffset: 1,
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 2,
    marginVertical: 10,
    width: 170,
    height: 50,
    padding: 10,
    backgroundColor: "transparent",
    borderColor: "gainsboro",
    borderWidth: 2,
    borderRadius: 1,
  },
  goBackText: {
    color: "gainsboro", 
    fontSize: 18,
    fontWeight: 100,
    letterSpacing: .5,
    justifyContent: 'center',
    alignItems: "center",
    textAlign: "center",
  },
 })