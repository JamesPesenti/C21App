import { StyleSheet, Text, View } from "react-native";
import QuestionListItem from "../src/components/QuestionListItem"
import VideoContainer from "../src/components/VideoContainer"

export default function Page() {
  return (
    <View style={styles.container}>
     <VideoContainer />
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
  titleContainer: {
    position: 'absolute',
    top: 16,
    left: 16,
    right: 16,
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingVertical: 8,
 },
 title: {
    position: "center",
    fontSize: 28,
    color: 'white',
 }
});
