import { StyleSheet, Text, View } from "react-native";
import QuestionListItem from "../src/components/QuestionListItem"
import VideoContainer from "../src/components/VideoContainer"

export default function Page() {
  return (
    <View style={styles.container}>
     {/* <QuestionListItem /> */}
     <VideoContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "white"
  },
});
