// Home Screen
import { TouchableOpacity, ScrollView, FlatList, StyleSheet, Text, View, Image, Pressable, Dimensions } from "react-native";
import QuestionListItem from "../src/components/QuestionListItem"
import VideoContainer from "../src/components/VideoContainer"
import reviewsData from "../assets/reviews"
import MeetUs from "../src/components/MeetUs"
import Reviews from "../src/components/Reviews"
import { Link, useRouter } from "expo-router"
import CurrentListings from "../src/components/CurrentListings";


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
          {/* Names and Numbers */}
            <View style={styles.contactContainer}>
              <View style={styles.namesContainer}>
                <Text style={styles.names}>Pedro Guerra</Text>
                <Text style={styles.dot}>•</Text>
                <Text style={styles.names}>Ximena Alban</Text>
              </View>
              <View style={styles.numbersContainer}>
                <Text style={styles.numbers}>708.543.9342</Text>
                <Text style={styles.numbers}>773.416.9568</Text>
              </View>
            </View>
            {/* Video */}
            <View style={styles.overlay}>
              <VideoContainer />
            </View>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>Work with Ximena & Pedro</Text>
              </View>
             <View style={styles.buttonsContainer}>
                <Link 
                  href="/searchHomes"
                  style={[styles.searchButton, styles.searchContactText]}
                >
                  <Text>Search Homes</Text>
                </Link>
                <Link 
                  href="/contactModal"
                  style={[styles.contactButton, styles.searchContactText]}
                >
                  <Text >Contact Us</Text>
                </Link>
             </View>
        </View>
      </View>
      {/* Meet the team section */}
      <MeetUs />
      <View style={styles.line} />
        {/* Current Listings */}
        <View style={{paddingHorizontal: 10}}>
          <CurrentListings />
        </View>
        <View style={styles.line} />

        {/* Reviews */}
        <Reviews 
          reviews={reviews}
        />
       {/* Let's Connect */}
      <View style={styles.connectContainer}>
        <Image
          blurRadius={0}
          style={styles.backgroundImage}
          source={{uri: "https://i.pinimg.com/originals/9b/6c/56/9b6c5657916660a9f43d48f76cac9e5a.jpg"}}
        />
        <View style={styles.overlay} />
        <View style={styles.letsConnectContent}>
          <Text style={styles.letsTitle}>Let's Connect</Text>
          <Text style={styles.connectText}>
            For the best results and service when it comes to all of your real estate needs, reach out anytime.
          </Text>
          <Pressable onPress={() => {}} style={styles.letsContactButton}>
            <Text style={styles.contactText}>Contact Me</Text>
          </Pressable>
        </View>
      </View>
      {/* Footer */}
    <View style={styles.footerContainer}>
         
         </View>
    </ScrollView>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    height: 1200
  },
  contactContainer: {
    flex: 1,
    backgroundColor: "#faf1e3"
  },
  namesContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 0,
    gap: 20
  },
  names: {
    fontSize: 16,
    color: "bronze",
    fontWeight: "600",
    letterSpacing: .5
  },
  dot: {
    fontSize: 14,
    marginHorizontal: 0,
    marginTop: 10
  },
  numbersContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 0,
    gap: 65
  },
  numbers: {
    color: "bronze",
    marginHorizontal: -5,
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: .5
  },
  overlay: {
    opacity: .8,
    shadowColor: "blue",
    shadowOffset: 3,
    shadowOpacity: .1,
    shadowRadius: 10,
    // position: "absolute",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: "black",
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
    top: 150,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
 },
 title: {
    textAlign: "center",
    padding: 30,
    fontSize: 35,
    fontWeight: "400",
    letterSpacing: 1,
    color: 'white',
 },
 buttonsContainer: {
    position: 'absolute',
    top: 300,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
},
 searchButton: {
    alignSelf: "center",
    alignItems: 'center',
    justifyContent: 'center',
    // top: 300,
    width: "60%",
    height: 60,
    padding: 10,
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 3.5,
    borderRadius: 1,
},
contactButton: {
    alignSelf: "center",
    alignItems: 'center',
    justifyContent: 'center',
    // top: 350,
    width: "60%",
    height: 60,
    padding: 10,
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 3.5,
    borderRadius: 1,
    gap: 0
},
searchContactText: {
    color: "azure", 
    opacity: 1,
    fontSize: 26,
    fontWeight: 400,
    letterSpacing: .5,
    justifyContent: 'center',
    alignItems: "center",
    alignSelf: 'center',
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
meetTitle: {
  textAlign: "center",
  padding: 30,
  fontSize: 30,
  fontWeight: "400",
  letterSpacing: 1,
  color: 'bronze',
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
  position: "relative",
  marginTop: 16,
  textAlign: "center",
  color: "white",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
},
backgroundImage: {
  ...StyleSheet.absoluteFillObject,
  width: "100%",
  height: 600,
  resizeMode: "contain",
},
letsConnectContent: {
  position: "absolute",
  top: 140,
  left: 0,
  right: 0,
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: 30,
  paddingVertical: 30,
  backgroundColor: "rgba(0, 0, 0, 0.2)",
},
letsTitle: {
  fontSize: 36,
  fontWeight: "bold",
  color: "white",
  marginBottom: 20,
},
connectText: {
  fontSize: 18,
  color: "white",
  marginBottom: 20,
  textAlign: "center",
},
letsContactButton: {
  alignItems: "center",
  justifyContent: "center",
  width: "50%",
  height: 50,
  borderRadius: 50,
  backgroundColor: "transparent",
  borderColor: "white",
  borderWidth: 2,
},
contactText: {
  fontSize: 18,
  color: "white",
  textAlign: "center",
},
footerContainer: {
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#CCBFAA",
  paddingVertical: 20,
},
});
