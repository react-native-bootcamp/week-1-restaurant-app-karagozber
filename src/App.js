import React from 'react'
import {
  SafeAreaView,
  FlatList,
  View
} from 'react-native'
import { ListItem } from './components'

const App = () => {
  const restData = require('./restList.json')
  

  return (
      <SafeAreaView style={{flex:1}}>
        <View style={{flex:1}}>
            <FlatList 
              keyExtractor={(item,index) => item.toString()}
              data={restData}
              renderItem={({item}) => <ListItem myData={item} />}
            /> 
        </View>
      </SafeAreaView>
  )
}

export default App;
