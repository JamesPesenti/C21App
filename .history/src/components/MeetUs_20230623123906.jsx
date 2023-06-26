import { StyleSheet, Image, Text, View } from 'react-native'
import { Link, useRouter } from "expo-router"

const MeetUs = () => {
  return (
    <>
       {/* Meet Us Section */}
       <View style={styles.meetContainer}>
         <View style={{flex: 1}}>
            <View style={{flexDirection: "row"}}>
            <Image 
            style={styles.pedroPic}
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT05OCLMJC6OESBHckcBPMwyWA_6HQvqT-Ehg&usqp=CAU"}}
          />
         <View style={{flex: 1}}>
          <View style={{flexDirection: "row", justifyContent: "center", marginTop: -50, gap: 20}}> 
            <Text style={{color: "bronze"}}>Review Me</Text>
            <Text style={{marginHorizontal: -12}}>|</Text>
            <Text style={{color: "bronze"}}>Refer Me</Text>
          </View>
         </View>
         <Image 
            style={styles.pedroPic}
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT05OCLMJC6OESBHckcBPMwyWA_6HQvqT-Ehg&usqp=CAU"}}
          />
         <View style={{flex: 1}}>
          <View style={{flexDirection: "row", justifyContent: "center", marginTop: -50, gap: 20}}> 
            <Text style={{color: "bronze"}}>Review Me</Text>
            <Text style={{marginHorizontal: -12}}>|</Text>
            <Text style={{color: "bronze"}}>Refer Me</Text>
          </View>
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

export default MeetUs

const styles = StyleSheet.create({
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
})