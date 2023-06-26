import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native'
import { Link, useRouter } from "expo-router"

const CurrentListings = () => {

   const router = useRouter()

  return (
    <>
       <View style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <Text style={{ marginTop: 40, fontSize: 30, color: 'black' }}>My Listings</Text>
           <View style={styles.imageContainer}>
              <TouchableOpacity
                style={{backgroundColor: 'white' }}
                onPress={() => router.push("/searchHomes")}
              >
                <Image
                    style={{marginTop: 20, height: 350, width: 250}}
                    source={{ uri: "https://ap.rdcpix.com/474b7a41b20a49dc849c039a0c089c8dl-b4121730557od-w480_h360_x2.webp"}}
                />
              </TouchableOpacity>
                <View style={styles.priceContainer}>
                  <Text style={{fontSize: 22, fontWeight: "600", color: "azure"}}>$435,000</Text>
                </View>
                <View style={styles.statusContainer}>
                  <Text style={{fontSize: 18, color: "white"}}>For Sale</Text>
                </View>
           </View>
            <Text style={{marginTop: -40, fontSize: 17}}>637 N Monticello Ave Chicago, IL 60624</Text>
            <Text style={{fontSize: 15}}> 4 beds | 4 bath | 2,000 sq. ft.</Text>
        </View>
    </>
  )
}

export default CurrentListings

const styles = StyleSheet.create({})