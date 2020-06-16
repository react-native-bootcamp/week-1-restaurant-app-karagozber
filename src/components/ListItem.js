import React from 'react'
import {View, Image, Text,StyleSheet, Dimensions} from 'react-native'

const ListItem = (props) => {
  return (  
    <View style={style.container}>
      <Image 
        source={{uri: props.myData.image}} 
        style={style.imageStyle}
      />
      <Text style={style.textStyle, {fontWeight: 'bold', fontSize:18}}>{props.myData.name}</Text>
      
      <View style={{flex: 1}}>  
        <Text style={style.textStyle, {alignSelf: 'flex-start'}}>{props.myData.location}</Text>
        <Text style={style.textStyle, {alignSelf: 'flex-end'}}>{props.myData.likes} </Text>
        <Image
        source={require('../assets/heart.png')}
        style={{width: Dimensions.get('window').width / 10, height: Dimensions.get('window').width / 10, alignSelf: 'flex-end', resizeMode: 'contain'}}
        />
      </View>
    
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    backgroundColor: '#eceff1',
    borderRadius: 8,
    padding: 10,
    margin: 5,
    width: Dimensions.get('window').width * 0.9,
    alignSelf: 'center'
  },
  textStyle: {
    color: '#555'
  },
  imageStyle: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').width * 0.8,
    resizeMode: "cover",
    alignSelf: "center",
  }
})

export {ListItem}