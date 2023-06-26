import { ScrollView, StyleSheet, Text, View } from 'react-native';
import VideoContainer from '../src/components/VideoContainer';

export default function Page() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <VideoContainer />
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>PG Realty Co</Text>
        </View>
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
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginBottom: 20,
  },
  logo: {
    fontSize: 20,
    color: 'black',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    marginTop: 100,
  },
  title: {
    padding: 40,
    fontSize: 22,
    color: 'white',
  },
});
