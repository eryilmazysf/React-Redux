import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';

const Sayfa_1 = () => {
  const gonderme = useDispatch();
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => gonderme({type: 'pink'})}
        style={{backgroundColor: 'pink', flex: 1}}></TouchableOpacity>

      <TouchableOpacity
        onPress={() => gonderme({type: 'red'})}
        style={{backgroundColor: 'red', flex: 1}}></TouchableOpacity>

      <TouchableOpacity
        onPress={() => gonderme({type: 'yellow'})}
        style={{backgroundColor: 'yellow', flex: 1}}></TouchableOpacity>

      <TouchableOpacity
        onPress={() => gonderme({type: 'black'})}
        style={{backgroundColor: 'black', flex: 1}}></TouchableOpacity>
    </View>
  );
};

export {Sayfa_1};
