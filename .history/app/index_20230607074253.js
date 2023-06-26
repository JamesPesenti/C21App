import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import QuestionListItem from "../src/components/QuestionListItem"
import VideoContainer from "../src/components/VideoContainer"

export default function Page() {
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
  fontSize: 28
 },
 description: {
  marginTop: -20,
  padding: 40
 }
});
