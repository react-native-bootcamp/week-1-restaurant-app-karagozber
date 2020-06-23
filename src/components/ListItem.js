import React from 'react'
import {View, Image, Text,StyleSheet, Dimensions} from 'react-native'

const ListItem = (props) => {
  return (  
    <View style={style.container}>
      <Image 
        source={{uri: props.myData.image}} 
        style={style.imageStyle}
      />
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>  
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={style.textStyle, {fontWeight: 'bold', fontSize:16, alignItems: 'flex-start'}}>{props.myData.name}</Text>
            {
              props.myData.isPopular ? 
              <Image source={require('../assets/fire.png')} style={{width: Dimensions.get('window').width / 20, height: Dimensions.get('window').width / 20, alignSelf: 'flex-end'}} /> 
              :
              <Text></Text>
            }
          </View>
          <Text style={style.textStyle, {alignSelf: 'flex-start'}}>{props.myData.location}</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'column', alignItems: 'flex-end', alignContent: 'flex-end', justifyContent: 'center'}}>  
            <Image
            source={require('../assets/heart.png')}
            style={{width: Dimensions.get('window').width / 12, height: Dimensions.get('window').width / 12, alignSelf: 'flex-end', resizeMode: 'contain'}}
            />
            <Text style={style.textStyle, {textAlign: 'center'}}>{props.myData.likes} </Text>
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    backgroundColor: '#eceff1',
    borderRadius: 8,
    padding: 5,
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