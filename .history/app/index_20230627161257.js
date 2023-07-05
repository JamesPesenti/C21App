// Home Screen
import { TouchableOpacity, ScrollView, FlatList, StyleSheet, Text, View, Image, Pressable, Dimensions } from "react-native";
import QuestionListItem from "../src/components/QuestionListItem"
import VideoContainer from "../src/components/VideoContainer"
import reviewsData from "../assets/reviews"
import MeetUs from "../src/components/MeetUs"
import Reviews from "../src/components/Reviews"
import { Link, useRouter } from "expo-router"
import Sold from "../src/components/Sold";
import { AntDesign } from "@expo/vector-icons"

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
                  href="https://www.rdeskwebsite.com/ximena-alban/listing/listingsearch.aspx"
                  style={[styles.searchButton, styles.searchContactText]}
                >
                  <Text>
                    <AntDesign
                      name="search1" 
                      size={23} 
                      color={"white"}
                      //  nav bar button  
                      onPress={() => router.push("navBarModal")} 
                    />  Search Homes
                  </Text>
                </Link>
                <Link 
                  href="/contactModal"
                  style={[styles.contactButton, styles.searchContactText]}
                >
                  <Text >Current Listings</Text>
                </Link>
             </View>
        </View>
      </View>
        {/* Meet the team section */}
        <MeetUs />
        <View style={styles.line} />
        {/* Sold */}
        <View style={{paddingHorizontal: 10}}>
          <Sold />
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
        <View style={styles.imageOverlay} />
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
          {/* <Image 
            style={{ resizeMode: "contain", width: 300, height: 120, borderRadius: 2 }}
            source={{ uri: "https://rebrand.c21.com/images/signage-b.png?v=20180228"}}
          /> */}
          <Image 
            style={{ resizeMode: "contain", width: 260, height: 140, borderRadius: 2 }}
            source={{ uri: "https://www.c21universal.com/images/uploads/graphics/6/C21_Universal.png"}}
          />
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
    opacity: 1,
    shadowColor: "blue",
    shadowOffset: 3,
    shadowOpacity: .1,
    shadowRadius: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
    padding: 5,
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 2.5,
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
  textAlign: "center",
  color: "white",
  alignItems: "center",
  justifyContent: "center",
},
backgroundImage: {
  width: "100%",
  height: 400,
},
imageOverlay: {
  opacity: 1,
  shadowColor: "blue",
  shadowOffset: 3,
  shadowOpacity: .1,
  shadowRadius: 10,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "black",
},
letsConnectContent: {
  position: "absolute",
  height: "100%",
  left: 0,
  right: 0,
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: 30,
  paddingVertical: 0,
  backgroundColor: "rgba(0, 0, 0, 0.4)",
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
  padding: 10,
  backgroundColor: "transparent",
  borderColor: "white",
  borderWidth: 2,
  borderRadius: 1,
},
contactText: {
  color: "white",
  fontSize: 18,
  fontWeight: 400,
  letterSpacing: .5,
  justifyContent: 'center',
  alignItems: "center",
  textAlign: "center",
},
footerContainer: {
  opacity: 1,
  height: 200,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#dbcdb6",
},
});
