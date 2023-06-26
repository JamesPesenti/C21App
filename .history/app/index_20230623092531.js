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
              <View style={styles.titleContainer}>
                <Text style={styles.title}>Work with Pedro Guerra</Text>
              </View>
              {/* <Link 
                href="/searchHomes"
                style={[styles.searchButton, styles.searchContactText]}
              >
                <Text>Search Homes</Text>
              </Link>
              <Link 
                href="/contactModal"
                style={[styles.contactButton, styles.searchContactText]}
              >
                 <Text >Contact Me</Text>
              </Link> */}
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

        {/* Current Listings */}
        <View style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <Text style={{ marginTop: 40, fontSize: 30, color: 'black' }}>My Listings</Text>
           <View style={styles.imageContainer}>
              <TouchableOpacity
                style={{backgroundColor: 'white' }}
                onPress={() => router.push("/searchHomes")}
              >
                <Image
                    style={{marginTop: 20, height: 350, width: 250}}
                    source={{ uri: "https://ap.rdcpix.com/474b7a41b20a49dc849c039a0c089c8dl-b4121730557od-w480_h360_x2.webp"}}
                />
              </TouchableOpacity>
                <View style={styles.priceContainer}>
                  <Text style={{fontSize: 22, fontWeight: "600", color: "azure"}}>$435,000</Text>
                </View>
                <View style={styles.statusContainer}>
                  <Text style={{fontSize: 18, color: "white"}}>For Sale</Text>
                </View>
           </View>
            <Text style={{marginTop: 20, fontSize: 17}}>637 N Monticello Ave Chicago, IL 60624</Text>
            <Text style={{fontSize: 15}}> 4 beds | 4 bath | 2,000 sq. ft.</Text>
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
              blurRadius={5}
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
  overlay: {
    opacity: 1,
    shadowColor: "blue",
    shadowOffset: 3,
    shadowOpacity: .1,
    shadowRadius: 10,
    // position: "absolute",
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
    fontSize: 40,
    letterSpacing: 1,
    color: 'white',
 },
 searchButton: {
  position: 'absolute',
  alignSelf: "center",
  alignItems: 'center',
  justifyContent: 'center',
  width: 180,
  height: 50,
  padding: 10,
  backgroundColor: "transparent",
  borderColor: "white",
  borderWidth: 3.5,
  borderRadius: 1,
  gap: 20
},
contactButton: {
  position: 'absolute',
  alignSelf: "center",
  alignItems: 'center',
  justifyContent: 'center',
  width: 180,
  height: 50,
  padding: 10,
  backgroundColor: "transparent",
  borderColor: "white",
  borderWidth: 3.5,
  borderRadius: 1,
  gap: 40
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
