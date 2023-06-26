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
        <View>
          <Image 
            style={{width: 100, height: 100}}
            source={"assets/pedropic.jpg"}
          />
          <Text>Pedro is dedicated to client service and believes in going the extra mile to exceed expectations, which has proved to make him a highly successful realtor best positioned to help you with your real estate goals.</Text>
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
 }
});
