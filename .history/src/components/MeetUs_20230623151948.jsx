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
               <Text>Pedro</Text>
            <View style={styles.reviewReferContainer}>
              <Text style={styles.reviewReferText}>Review Me</Text>
              <Text style={styles.reviewReferSeparator}>|</Text>
              <Text style={styles.reviewReferText}>Refer Me</Text>
            </View>
          </View>
          <View style={styles.imageWrapper}>
            <Image 
              style={styles.pedroPic}
              source={{ uri: "https://websiteimages.fnistools.com/images/uploads/agents/22783094/22783094.jpg"}}
            />
               <Text>Ximena</Text>
            <View style={styles.reviewReferContainer}>
             <Link>
               <Text style={styles.reviewReferText}>Review Me</Text>
             </Link>
                  <Text style={styles.reviewReferSeparator}>|</Text>
              <Link>
               <Text style={styles.reviewReferText}>Refer Me</Text>
              </Link>
            </View>
          </View>
        </View>

        <Text style={styles.meetTitle}>Meet the team</Text>
        <Text numberOfLines={4} style={styles.description}>Pedro is dedicated to client service and believes in going the extra mile to exceed expectations, which has proved to make him a highly successful realtor best positioned to help you with your real estate goals.</Text>
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
    marginTop: -20,
    fontSize: 28,
    textAlign: 'center',
  },
  description: {
    fontSize: 15,
    fontWeight: "100",
    marginTop: -20,
    padding: 40,
  },
});

export default MeetUs;
