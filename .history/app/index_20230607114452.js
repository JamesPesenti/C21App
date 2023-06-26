import { ScrollView, FlatList, StyleSheet, Text, View, Image, Pressable } from "react-native";
import QuestionListItem from "../src/components/QuestionListItem"
import VideoContainer from "../src/components/VideoContainer"
import Reviews from "../src/components/Reviews"
import reviewsData from "../assets/reviews"

export default function Page() {

  const reviews = reviewsData.reviews

  return (
   <>
    <ScrollView style={{ backgroundColor: "white"}}>
        <View style={styles.container}>
          <VideoContainer />
            {/* <View style={styles.logoContainer}>
              <Text style={styles.logo}>PG Realty Co</Text>
            </View> */}
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Work with Pedro Guerra</Text>
            </View>
        </View>
        <View style={styles.meetContainer}>
          <Image 
            style={styles.pedroPic}
            source={{ uri: "https://media.licdn.com/dms/image/C4D03AQFj_3YpINRaoA/profile-displayphoto-shrink_400_400/0/1517629487800?e=1691625600&v=beta&t=_mKkRAAvtwhbyeem-AbQ1OvRGGzFbeElanyLZwQnuwo"}}
          />
          <Text style={styles.meetTitle}>Meet Pedro Guerra</Text>
            <Text style={styles.description}>Pedro is dedicated to client service and believes in going the extra mile to exceed expectations, which has proved to make him a highly successful realtor best positioned to help you with your real estate goals.</Text>
            <Pressable
              onPress={() => {}}
              style={styles.learnMoreButton}
            >
              <Text style={styles.learnMore}>Learn More</Text>
            </Pressable>
        </View>
        <View style={styles.reviewsContainer}>
          <Text style={styles.meetTitle}>What Clients Are Saying</Text>
            <Image 
              style={{width: 55, height: 55, resizeMode: "contain", borderRadius: 100}}
              source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS27nfvN50sAHzVY1DA_qYpcMTQvpbfZb1XLA&usqp=CAU" }}
            />
            <FlatList
              horizontal
              data={reviews}
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
            >

          </FlatList>
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
    top: 100,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
 },
 title: {
    padding: 40,
    fontSize: 22,
    color: 'white',
 },
 meetContainer: {
    alignItems: 'center',
    justifyContent: 'center',
 },
 pedroPic: {
  marginVertical: 20,
  resizeMode: "cover",
  width: 180, 
  height: 220
 },
 meetTitle: {
  fontSize: 28,
  paddingHorizontal: 50,
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
 reviewsContainer: {
    width: 250, // Adjust the width to your preference
    marginHorizontal: 10, // Adjust the horizontal margin to create spacing between reviews
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
},
seeWhatText: {
  fontSize: 10
},

});
