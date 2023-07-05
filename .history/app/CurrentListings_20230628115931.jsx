import React from 'react';
import { Dimensions, StyleSheet, Image, TouchableOpacity, Text, View, ScrollView } from 'react-native';
import { Link, useRouter } from 'expo-router';
import soldProperties from '../assets/soldProperties';
import currentListings from '../assets/currentListings';

const width = Dimensions.get('window').width;

const CurrentListings = () => {
  const router = useRouter();

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Current Listings</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        snapToAlignment="start"
        decelerationRate="fast"
        snapToInterval={Dimensions.get('window').width}
      >
        {currentListings.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.listingContainer}
            onPress={() =>
              router.push(
                'https://www.rdeskwebsite.com/ximena-alban/listing/listingsearchresultsonly.aspx?Search=8c0f7a56-b152-4c5d-9768-1086f4320545&SearchType=AgentHome&InternalAgentCd=&OfficeCds=&AgentHomePageSearchType=AllMyListings&ListingType=&ListingDistrictTypeID=&PriorSales=&Sort=6'
              )
            }
          >
            <Image style={styles.listingImage} source={item.image} />
            <View style={styles.listingInfo}>
              <Text style={styles.listingAddress}>{item.address}</Text>
              <Text style={styles.listingBedBath}>{item.bedsBathSqft}</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.priceText}>${item.price}</Text>
              </View>
              <View style={styles.statusContainer}>
                <Text style={styles.statusText}>For Sale</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.goBackContainer}>
        <TouchableOpacity style={styles.goBackButton} onPress={() => router.back()}>
          <Text style={styles.goBackText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CurrentListings;

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingBottom: 50,
  },
  heading: {
    fontSize: 30,
    color: '#d4af37',
    marginTop: 40,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  scrollContainer: {
    alignItems: 'center',
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
  listingImage: {
    width: width - 60,
    height: 300,
    borderRadius: 10,
  },
  listingInfo: {
    padding: 20,
  },
  listingAddress: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  listingBedBath: {
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },
  priceContainer: {
    backgroundColor: '#d4af37',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignSelf: 'flex-end',
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  statusContainer: {
    backgroundColor: '#007f00',
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
  goBackContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  goBackButton: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 1,
  },
  goBackText: {
    color: '#d4af37',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});
