import { StyleSheet, Text, View } from "react-native";
import QuestionListItem from "../src/components/QuestionListItem"
import VideoContainer from "../src/components/VideoContainer"

export default function Page() {
  return (
    <View style={styles.container}>
     <VideoContainer />
     <View style={styles.logoContainer}>
        <Text style={styles.logo}>PG Realty Co</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Work with Pedro Guerra</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  logoContainer: {
    position: 'absolute',
    top: 30,
    left: 0,
    right: 170,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  logo: {
    fontSize: 20,
    color: "white"
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
