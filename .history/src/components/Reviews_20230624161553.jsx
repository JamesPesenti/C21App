import { Image, ScrollView, FlatList, StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';

const width = Dimensions.get('window').width;

const Reviews = ({ reviews }) => {
  return (
    <>
      <View style={styles.reviewContainer}>
        <Text style={styles.meetTitle}>What Clients Are Saying</Text>
        <Image
          style={{ width: 50, height: 50, resizeMode: 'contain', borderRadius: 100, marginTop: 0, marginBottom: -60 }}
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS27nfvN50sAHzVY1DA_qYpcMTQvpbfZb1XLA&usqp=CAU' }}
        />
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <FlatList
          horizontal
          data={reviews}
          snapToAlignment="start"
          decelerationRate="fast"
          snapToInterval={Dimensions.get('window').width}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <View style={styles.imageContainer}>
                <Text style={styles.comment}>{item.comment}</Text>
                <Text style={styles.initials}>{item.initials}</Text>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  reviewContainer: {
    marginTop: 50,
    width: Dimensions.get('window').width,
    padding: 16,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  meetTitle: {
    fontSize: 30,
    right: 0
  },
  itemContainer: {
    marginTop: -100,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    marginTop: 0,
  },
  comment: {
    padding: 6,
    marginVertical: 20,
    textAlign: 'center',
    lineHeight: 20,
  },
  initials: {
    textAlign: 'center',
  },
});

export default Reviews;
