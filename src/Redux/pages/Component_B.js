import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux'; //state goruntulemek icin useSelector yeterli

const Component_B = (props) => {
  const ourCounter = useSelector((myGlobalState) => myGlobalState.counter);
  const myUserName = useSelector((canim) => canim.userName);
  return (
    <View style={{backgroundColor: '#bdbdbd', flex: 1}}>
      <Text>Component_B</Text>
      <Text style={{fontSize: 50, textAlign: 'center'}}>
        Counter: {ourCounter}
      </Text>
      <Text style={{fontSize: 50, margin: 10}}>Name: {myUserName}</Text>
    </View>
  );
};

export default Component_B;
