// Home Screen
import { ScrollView, FlatList, StyleSheet, Text, View, Image, Pressable, Dimensions } from "react-native";
import QuestionListItem from "../src/components/QuestionListItem"
import VideoContainer from "../src/components/VideoContainer"
import Reviews from "../src/components/Reviews"
import reviewsData from "../assets/reviews"
import { Link } from "expo-router"

const width = Dimensions.get("window").width


export default function Page() {

  const reviews = reviewsData.reviews

  return (
   <>
    <ScrollView 
      fadingEdgeLength={20} 
      showVerticalScrollbar={false}
      style={{ backgroundColor: "white"}}
    >
        <View style={styles.container}>
        {/* Video/Logo/Nav/Buttons */}
          <View style={{marginTop: 50}}>
            <View style={styles.overlay}>
              <VideoContainer />
            </View>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>Work with Pedro Guerra</Text>
              </View>
              <Link 
                href="/searchHomes"
                style={[styles.searchButton, styles.searchContactText]}
              >
                Search Homes
              </Link>
              <Link 
                href="/contactModal"
                style={[styles.contactButton, styles.searchContactText]}
              >
                Contact Me
              </Link>
        </View>
      </View>
       {/* Meet Me Section */}
        <View style={styles.meetContainer}>
          <Image 
            style={styles.pedroPic}
            source={{ uri: "https://media.licdn.com/dms/image/C4D03AQFj_3YpINRaoA/profile-displayphoto-shrink_400_400/0/1517629487800?e=1691625600&v=beta&t=_mKkRAAvtwhbyeem-AbQ1OvRGGzFbeElanyLZwQnuwo"}}
          />
          <Text style={styles.meetTitle}>Meet Pedro Guerra</Text>
            <Text numberOfLines={4} style={styles.description}>Pedro is dedicated to client service and believes in going the extra mile to exceed expectations, which has proved to make him a highly successful realtor best positioned to help you with your real estate goals.</Text>
            <Link 
              href="/learnMore"
              style={[styles.learnMoreButton, styles.learnMore]}
            >
              Learn More
            </Link>
        </View>
        <View style={styles.line} />
        {/* Reviews */}
        <View style={styles.reviewContainer}>
          <Text style={styles.meetTitle}>What Clients Are Saying</Text>
            <Image 
              style={{width: 50, height: 50, resizeMode: "contain", borderRadius: 100, marginTop: 20, marginBottom: -60}}
              source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS27nfvN50sAHzVY1DA_qYpcMTQvpbfZb1XLA&usqp=CAU" }}
            />
            <FlatList
              horizontal
              data={reviews}
              snapToAlignment="start"
              decelerationRate={"fast"}
              snapToInterval={Dimensions.get("window").width}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <>
                  <View style={styles.reviewContainer}>
                    <Text style={styles.comment}>{item.comment}</Text>
                    <Text style={styles.initials}>{item.initials}</Text>
                  </View>
                </>
              )}
            />
        </View>
        {/* Let's Connect */}
        <View style={styles.connectContainer}>
          <View style={styles.overlay}>
            <Image 
                 blurRadius={3}
              style={{width: width, height: 350, resizeMode: "stretch"}}
              source={{ uri: "https://i.pinimg.com/originals/9b/6c/56/9b6c5657916660a9f43d48f76cac9e5a.jpg"}}
            />
          </View>
            <Text style={styles.letsTitle}>Let's Connect</Text>
              <Text style={styles.connectText}>For the best results and service when it comes to all of your real estate needs, reach out anytime.</Text>
              <Pressable
                onPress={() => {}}
                style={styles.letsContactButton}
              >
                <Text style={styles.contactText}>Contact Me</Text>
              </Pressable>
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
    backgroundColor: "white"
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
    fontSize: 28,
    color: 'white',
 },
 searchButton: {
  marginTop: -10,
  width: 170,
  height: 50,
  padding: 10,
  backgroundColor: "transparent",
  borderColor: "white",
  borderWidth: 2,
  borderRadius: 1,
},
contactButton: {
  marginTop: -10,
  width: 170,
  height: 50,
  padding: 10,
  backgroundColor: "transparent",
  borderColor: "white",
  borderWidth: 2,
  borderRadius: 1,
},
searchContactText: {
  color: "white", 
  fontSize: 18,
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
  borderWidth: 2,
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
  borderWidth: 2,
  borderRadius: 1,
},
contactText: {
  color: "azure", 
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
