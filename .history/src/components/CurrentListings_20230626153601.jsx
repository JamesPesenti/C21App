import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native'
import { Link, useRouter } from "expo-router"
import currentListings from '../../assets/currentListings'

const CurrentListings = () => {

   const router = useRouter()

  return (
    <>
       <View style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
         <Image 
            style={{ width: 150, height: 80}}
            source={{ uri: "https://media0.giphy.com/media/LNFbMJQns7FZ8Mylry/giphy.gif?cid=6c09b952j6bgksl7lejzt49rib056blntlu41v5fqvpgulo7&ep=v1_stickers_related&rid=giphy.gif&ct=ts" }}
         /> 
            {/* <Text style={{ marginTop: 40, fontSize: 30, color: 'bronze' }}>Just Sold</Text> */}
           <View style={styles.imageContainer}>
              {currentListings.map((item) => {
                 return (
                  <>
                  <TouchableOpacity
                     key={item.id}
                     style={{backgroundColor: 'white' }}
                     onPress={() => router.push("/searchHomes")}
                  >
                     <Image
                        style={{ marginHorizontal: 5, borderRadius: 5, resizeMode: "cover", marginTop: 20, height: 120, width: 150}}
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
        </View>
    </>
  )
}

export default CurrentListings

const styles = StyleSheet.create({
   imageContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 16,
      textAlign: "center",
      color: "white",
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