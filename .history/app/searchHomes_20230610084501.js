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
     <>
      <ScrollView fadingEdgeLength={20} style={{ backgroundColor: "white"}}>
        <View style={styles.container}>
        {/* Video/Logo/Nav/Buttons  */}
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