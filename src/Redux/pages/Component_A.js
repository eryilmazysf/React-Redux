import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux'; //useDispatch fonksiyonlara erisim saglamak ve guncelleme yapmak icin,useSelector state erisim saglamamk icin

const Component_A = (props) => {
  const myCounter = useSelector((globalState) => globalState.counter);
  const dispatch = useDispatch(); //tetiklemek icin
  const [value, setValue] = useState('');

  return (
    <View style={{backgroundColor: '#eceff1', flex: 1}}>
      <Text>Component_A</Text>
      <Text style={{fontSize: 50, textAlign: 'center'}}>
        Counter: {myCounter}
      </Text>
      <Button
        title="Arttır"
        onPress={() => dispatch({type: 'INCREASE_COUNTER'})} //dispatch icinde ki obje reducer action gider
      />
      <Button
        title="Azalt"
        onPress={() => dispatch({type: 'DECREASE_COUNTER'})}
        color="red"
      />
      <View style={styles.textContainer}>
        <TextInput
          style={styles.text}
          onChangeText={(text) => setValue(text)}
        />
      </View>
      <Button
        title="Kullanıcı Adı Güncelle"
        onPress={() =>
          dispatch({
            type: 'SET_USERNAME',
            payload: {
              newUserName: value,
            },
          })
        }
      />
    </View>
  );
};

export default Component_A;
const styles = StyleSheet.create({
  textContainer: {
    justifyContent: 'center',
    flex: 0.5,
    justifyContent: 'center',
    alignSelf: 'center',
    width: 200,
  },
  text: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center',
    borderRadius: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
