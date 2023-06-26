import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const width = Dimensions.get("window").width

const Reviews = ({ reviews }) => {
  return (
    <>
      <ScrollView horizontal>
       <View style={styles.reviewContainer}>
          <Text style={styles.meetTitle}>What Clients Are Saying</Text>
            <Image 
              style={{width: 50, height: 50, resizeMode: "contain", borderRadius: 100, marginTop: 20, marginBottom: -60}}
              source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS27nfvN50sAHzVY1DA_qYpcMTQvpbfZb1XLA&usqp=CAU" }}
            />
            <FlatList
              horizontal
              data={reviews}
              snapToAlignment="start"
              decelerationRate={"fast"}
              snapToInterval={Dimensions.get("window").width}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <>
                  <View style={styles.reviewContainer}>
                    <Text style={styles.comment}>{item.comment}</Text>
                    <Text style={styles.initials}>{item.initials}</Text>
                  </View>
                </>
              )}
            />
        </View>
       </ScrollView>
    </>
  )
}

export default Reviews

const styles = StyleSheet.create({
   container: {
      width: Dimensions.get('window').width,
      padding: 16,
      backgroundColor: '#f0f0f0',
      justifyContent: 'center',
      alignItems: 'center',
   },
   comment: {
      marginVertical: 20,
      textAlign: "center",
      lineHeight: 20,
   },
   initials: {
      textAlign: "center",
   }
})