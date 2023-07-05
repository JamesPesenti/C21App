import { Pressable, Dimensions, ScrollView, StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native'
import { Link, useRouter } from "expo-router"
import soldProperties from "../assets/soldProperties"
import currentListings from '../assets/currentListings'

const width = Dimensions.get("window").width


const CurrentListings = () => {
   

   const router = useRouter()

  return (
    <>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
     <Text style={{ justifyContent: "center", textAlign: "center", marginTop: 40, fontSize: 30, color: 'bronze' }}>Current Listings</Text>
       <ScrollView
         horizontal
         showsHorizontalScrollIndicator={false} 
         contentContainerStyle={styles.scrollContainer}
         snapToAlignment="start"
         decelerationRate="fast"
         snapToInterval={Dimensions.get('window').width}
       >
         {/* <Image 
            style={{ marginTop: 50, resizeMode: "cover", width: 180, height: 100}}
            source={{ uri: "https://d2b3iji0rbl31y.cloudfront.net/Century_21_Redwood_RW07_6X24_204_.png" }}
         />  */}
           <View style={styles.imageContainer}>
              {currentListings.map((item) => {
                 return (
                  <>
                  <TouchableOpacity
                     key={item.id}
                     style={styles.listingContainer}
                     onPress={() => router.push("https://www.rdeskwebsite.com/ximena-alban/listing/listingsearchresultsonly.aspx?Search=8c0f7a56-b152-4c5d-9768-1086f4320545&SearchType=AgentHome&InternalAgentCd=&OfficeCds=&AgentHomePageSearchType=AllMyListings&ListingType=&ListingDistrictTypeID=&PriorSales=&Sort=6")}
                  >
                     <Image
                        style={styles.listingImage}
                        source={item.image}
                     />
                      <View style={styles.listingInfo}>
                      <View style={styles.priceContainer}>
                        <Text style={styles.priceText}>${item.price}</Text>
                      </View>
                        <Text style={styles.listingBedBath}>{item.bedsBathSqft}</Text>
                        <Text style={styles.listingAddress}>{item.address}</Text>
                      <View style={styles.statusContainer}>
                        <Text style={[ item.forSale ? styles.forSale : styles.notForSale]}>
                          {item.forSale ? "For Sale" : "Contingent"}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  </>
                 )
              })}
                <View style={styles.priceContainer}>
                  <Text style={{fontSize: 42, fontWeight: "600", color: "azure"}}>$435,000</Text>
                </View>
                <View style={styles.statusContainer}>
                  <Text style={{fontSize: 38, color: "white"}}>For Sale</Text>
                </View>
           </View>
        </ScrollView>
       <View style={{marginTop: 50, alignItems: "center", textAlign: "center"}}>
         <Pressable
            style={styles.goBack}
            onPress={() => router.back()}
         >
            <Text style={styles.goBackText}>Go Back</Text>
         </Pressable>
       </View>
     </ScrollView>
    </>
  )
}

export default CurrentListings

const styles = StyleSheet.create({
   container: {
      height: 860,
      justifyContent: 'center', 
      alignItems: 'center', 
      textAlign: 'center',
      backgroundColor: "white",
   },
   scrollContainer: {
      justifyContent: 'center', 
      alignItems: 'center', 
      textAlign: 'center',
      backgroundColor: "white",
      paddingHorizontal: 50
   },
   listingContainer: {
      backgroundColor: '#fff',
      borderRadius: 10,
      marginHorizontal: 10,
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
  },
   imageContainer: {
      backgroundColor: "white",
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
   listingImage: {
      marginHorizontal: 5, 
      borderRadius: 5, 
      resizeMode: "contain", 
      marginTop: 20, 
      height: 380, 
      width: width - 60,
   },
   listingInfo: {
      padding: 20
   },
   listingAddress: {
      fontSize: 18,
      fontWeight: '400',
      marginBottom: 5,
      alignSelf: 'flex-start',
    },
    listingBedBath: {
      fontSize: 14,
      fontWeight: '500',
      letterSpacing: .5,
      marginBottom: 10,
      alignSelf: 'flex-start',
    },
    priceContainer: {
      alignSelf: "flex-start",
      backgroundColor: '#fff',
      borderRadius: 2,
      marginVertical: 5,
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    priceText: {
      marginHorizontal: 5,
      fontSize: 20,
      fontWeight: '500',
      color: 'bronze',
    },
    statusContainer: {
      borderRadius: 5,
      paddingVertical: 5,
      paddingHorizontal: 10,
      alignSelf: 'flex-start',
      marginTop: 10,
    },
    statusText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
    },
    forSale: {
      padding: 10,
      backgroundColor: 'green',
      color: "white"
    },
    notForSale: {
      backgroundColor: 'yellow',
      color: "bronze"
    },
  goBack: {
   marginTop: 30,
   marginBottom: 20,
   width: 150,
   height: 50,
   padding: 10,
   backgroundColor: "white",
   borderColor: "black",
   borderWidth: 2,
   borderRadius: 1,
  },
  goBackText: {
   color: "bronze",
   fontSize: 18,
   fontWeight: 400,
   letterSpacing: .5,
   justifyContent: 'center',
   alignItems: "center",
   textAlign: "center",
  }
})











