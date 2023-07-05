import { StyleSheet, Image, Text, View } from 'react-native';
import { Link, useRouter } from "expo-router"

const MeetUs = () => {
  return (
    <>
      {/* Meet Us Section */}
      <View style={styles.meetContainer}>
        <View style={styles.imageContainer}>
          <View style={styles.imageWrapper}>
            <Image 
              style={styles.pedroPic}
              source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT05OCLMJC6OESBHckcBPMwyWA_6HQvqT-Ehg&usqp=CAU"}}
            />
               <Text style={{fontSize: 20}}>Pedro</Text>
            <View style={styles.reviewReferContainer}>
              <Text style={styles.reviewReferText}>Review</Text>
              <Text style={styles.reviewReferSeparator}>|</Text>
              <Text style={styles.reviewReferText}>Refer</Text>
            </View>
          </View>
          <View style={styles.imageWrapper}>
            <Image 
              style={styles.pedroPic}
              source={{ uri: "https://websiteimages.fnistools.com/images/uploads/agents/22783094/22783094.jpg"}}
            />
               <Text style={{fontSize: 20}}>Ximena</Text>
            <View style={styles.reviewReferContainer}>
             <Link
               href="/currentListings"
             >
               <Text style={styles.reviewReferText}>Review</Text>
             </Link>
                  <Text style={styles.reviewReferSeparator}>|</Text>
              <Link
               href="/"
              >
               <Text style={styles.reviewReferText}>Refer</Text>
              </Link>
            </View>
          </View>
        </View>

        <Text style={styles.meetTitle}>Meet Your Agents</Text>
        <Text numberOfLines={2} style={styles.description}>Our team is dedicated to excellent client service and always believe in going the extra mile to exceed expectations, which has proved to make him a highly successful realtor best positioned to help you with your real estate goals.Our team is dedicated to excellent client service and always believe in going the extra mile to exceed expectations, which has proved to make him a highly successful realtor best positioned to help you with your real estate goals.</Text>
            <Link 
              href="/learnMore"
              style={[styles.learnMoreButton, styles.learnMore]}
            >
              Learn More
            </Link>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  meetContainer: {
    marginTop: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 50,
    marginTop: 50
  },
  imageWrapper: {
    marginHorizontal: 10,
    alignItems: "center"
  },
  pedroPic: {
    width: 160, 
    height: 220,
    resizeMode: "cover",
  },
  reviewReferContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  reviewReferText: {
    color: "bronze",
  },
  reviewReferSeparator: {
    marginHorizontal: 5,
  },
  meetTitle: {
    fontSize: 28,
    textAlign: 'center',
  },
  description: {
    fontSize: 15,
    fontWeight: "100",
    marginTop: -20,
    padding: 40,
  },
  learnMoreButton: {
   marginTop: 30,
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
   color: "bronze",
   fontSize: 18,
   fontWeight: 400,
   letterSpacing: .5,
   justifyContent: 'center',
   alignItems: "center",
   textAlign: "center",
},
});

export default MeetUs;
