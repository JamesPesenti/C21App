import { ScrollView, StyleSheet, Text, View } from 'react-native';
import VideoContainer from '../src/components/VideoContainer';

export default function Page() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <VideoContainer />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Work with Pedro Guerra</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  titleContainer: {
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  title: {
    padding: 40,
    fontSize: 22,
    color: 'white',
  },
});
