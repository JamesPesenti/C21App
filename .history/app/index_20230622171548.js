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
        <View style={styles.footerContainer}>
         
        </View>
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
  logoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    marginHorizontal: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  logo: {
    fontSize: 20,
    color: "black"
  },
  titleContainer: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
 },
 title: {
    textAlign: "center",
    padding: 40,
    fontSize: 30,
    color: 'white',
 },
 searchButton: {
  justifyContent: "center",
  alignSelf: "center",
  textAlign: "center",
  marginTop: 200,
  width: 180,
  height: 50,
  padding: 10,
  backgroundColor: "transparent",
  borderColor: "white",
  borderWidth: 3.5,
  borderRadius: 1,
},
contactButton: {
  justifyContent: "center",
  alignSelf: "center",
  textAlign: "center",
  marginTop: 10,
  width: 180,
  height: 50,
  padding: 10,
  backgroundColor: "transparent",
  borderColor: "white",
  borderWidth: 3.5,
  borderRadius: 1,
},
searchContactText: {
  color: "azure", 
  opacity: 1,
  fontSize: 20,
  fontWeight: 100,
  letterSpacing: .5,
  justifyContent: 'center',
  alignItems: "center",
  textAlign: "center",
},
 meetContainer: {
    alignItems: 'center',
    justifyContent: 'center',
 },
 pedroPic: {
    marginTop: 200,
    marginBottom: 60,
    resizeMode: "cover",
    width: 180, 
    height: 220,
    borderColor: "black",
    borderWidth: 6,
    borderRadius: 2,
 },
 meetTitle: {
    marginTop: -20,
    fontSize: 28,
    textAlign: 'center',
 },
 description: {
    fontSize: 15,
    fontWeight: 100,
    marginTop: -20,
    padding: 40
 },
 learnMoreButton: {
    marginTop: -10,
    marginBottom: 20,
    width: 150,
    height: 50,
    padding: 10,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 1,
 },
 learnMore: {
    fontSize: 16,
    fontWeight: 100,
    letterSpacing: .5,
    justifyContent: 'center',
    alignItems: "center",
    textAlign: "center",
 },
 line: {
    marginTop: 60, 
    borderColor: "grey", 
    borderWidth: 2, 
    paddingHorizontal: width, 
    opacity: .1
 },
 imageContainer: {
    position: "relative",
    marginTop: 16,
    textAlign: "center",
    color: "white",
},
 priceContainer: {
    position: "absolute",
    top: 300,
    right: 125,
    backgroundColor: "gainsboro",
    opacity: 1,
    padding: 4,
    margin: 10,
    borderRadius: 5,
},
statusContainer: {
  position: "absolute",
  top: 40,
  right: 145,
  backgroundColor: "green",
  opacity: .9,
  padding: 1,
  marginRight: 20,
  borderRadius: 5,
},
 reviewLine: {
    marginTop: -20, 
    borderColor: "grey", 
    borderWidth: 2, 
    paddingHorizontal: width, 
    opacity: .1
},
 reviewContainer: {
    width: width, 
    marginVertical: 100,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
},
comment: {
  fontSize: 16,
  marginVertical: 20,
  marginHorizontal: 0, 
  textAlign: "center",
  lineHeight: 20,
},
initials: {
  fontSize: 16,
  textAlign: "center",
  marginTop: 10
},
seeWhatText: {
  fontSize: 10
},
connectContainer: {
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 10
},
letsTitle: {
  fontSize: 28,
  marginTop: 40,
  paddingHorizontal: 50,
  textAlign: 'center',
  color: "white"
},
connectText: {
  color: "white",
  fontSize: 22,
  fontWeight: "thin",
  marginTop: -20,
  padding: 40
},

contactText: {
  color: "white", 
  fontSize: 18,
  fontWeight: 100,
  letterSpacing: .5,
  justifyContent: 'center',
  alignItems: "center",
  textAlign: "center",
},
letsContactButton: {
  marginVertical: 20,
  width: 170,
  height: 50,
  padding: 10,
  backgroundColor: "transparent",
  borderColor: "white",
  borderWidth: 2,
  borderRadius: 1,
},
footerContainer: {
  height: 300,
  backgroundColor: "#d0c3ae",
  alignItems: 'center',
  justifyContent: 'center',
},
});