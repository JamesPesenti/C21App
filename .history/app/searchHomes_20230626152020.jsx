 import { StyleSheet, Text, View, Pressable } from 'react-native'
 import CurrentListings from '../src/components/CurrentListings'
 import { Link, useRouter, useSearchParams } from "expo-router"


 const searchHomes = () => {

  const router = useRouter()

  const {name, lastName} = useSearchParams()

   return (
     <View style={styles.container}>
       <CurrentListings />
       <Pressable
        style={styles.goBackButton}
        onPress={() => router.back()}
       >
        <Text style={styles.goBackText}>Go Back</Text>
       </Pressable>

     </View>
   )
 }
 
 export default searchHomes
 
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 1500,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 50,
    backgroundColor: "white"
  },
  goBackButton: {
    shadowColor: "yellow",
    shadowOffset: 1,
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 2,
    marginVertical: 10,
    width: 170,
    height: 50,
    padding: 10,
    backgroundColor: "transparent",
    borderColor: "bronze",
    borderWidth: 2,
    borderRadius: 1,
  },
  goBackText: {
    color: "bronze", 
    fontSize: 18,
    fontWeight: 300,
    letterSpacing: .5,
    justifyContent: 'center',
    alignItems: "center",
    textAlign: "center",
  },
 })