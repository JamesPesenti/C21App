import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native'
import { Link, useRouter } from "expo-router"
import soldProperties from "../../assets/soldProperties"

const CurrentListings = () => {

   const router = useRouter()

  return (
    <>
       <ScrollView
         horizontal
         showsHorizontalScrollIndicator={false} style={styles.container}
       >
         {/* <Image 
            style={{ marginTop: 50, resizeMode: "cover", width: 180, height: 100}}
            source={{ uri: "https://d2b3iji0rbl31y.cloudfront.net/Century_21_Redwood_RW07_6X24_204_.png" }}
         />  */}
         <Text style={{ marginTop: 40, fontSize: 30, color: 'bronze' }}>Current Listings</Text>
           <View style={styles.imageContainer}>
              {soldProperties.map((item) => {
                 return (
                  <>
                  <TouchableOpacity
                     key={item.id}
                     style={{backgroundColor: 'white' }}
                     onPress={() => router.push("/searchHomes")}
                  >
                     <Image
                        style={{ marginHorizontal: 5, borderRadius: 5, resizeMode: "cover", marginTop: 20, height: 180, width: 200}}
                        source={item.image}
                     />
                      <Text style={{marginLeft: 0, fontSize: 10, fontWeight: "bold"}}>{item.address}</Text>
                      <Text style={{fontSize: 10}}>{item.bedsBathSqft}</Text>
                  </TouchableOpacity>
                  </>
                 )
              })}
                {/* <View style={styles.priceContainer}>
                  <Text style={{fontSize: 22, fontWeight: "600", color: "azure"}}>$435,000</Text>
                </View>
                <View style={styles.statusContainer}>
                  <Text style={{fontSize: 18, color: "white"}}>For Sale</Text>
                </View> */}
           </View>
        </ScrollView>
    </>
  )
}

export default CurrentListings

const styles = StyleSheet.create({
   container: {
      justifyContent: 'center', 
      alignItems: 'center', 
      textAlign: 'center',
      backgroundColor: "white"
   },
   imageContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: "center",
      color: "white",
      backgroundColor: "white"
  },
   priceContainer: {
      position: "absolute",
      top: 300,
      right: 125,
      backgroundColor: "gainsboro",
      opacity: 1,
      padding: 4,
      margin: 10,
      borderRadius: 5,
  },
  statusContainer: {
      position: "absolute",
      top: 40,
      right: 145,
      backgroundColor: "green",
      opacity: .9,
      padding: 1,
      marginRight: 20,
      borderRadius: 5,
  },
})