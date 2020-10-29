import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

const Sayfa_2 = () => {
  const almak = useSelector((state) => state.color);
  return (
    <View style={{flex: 1}}>
      <Text style={{backgroundColor: almak, flex: 1}}></Text>
    </View>
  );
};

export {Sayfa_2};
