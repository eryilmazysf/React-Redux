import React from 'react';
import {SafeAreaView, View, Text, TextInput, Button} from 'react-native';
import auth from '@react-native-firebase/auth';

const LoginPage = (props) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const signIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  const signUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <SafeAreaView>
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>
          Login
        </Text>

        <View
          style={{
            backgroundColor: '#eceff1',
            padding: 5,
            margin: 5,
            borderRadius: 5,
          }}>
          <TextInput
            placeholder="Type your mail.."
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View
          style={{
            backgroundColor: '#eceff1',
            padding: 5,
            margin: 5,
            borderRadius: 5,
          }}>
          <TextInput
            placeholder="Type your password"
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <Button title="Sign Up" onPress={signUp} />
        <Button title="Sign In" onPress={signIn} />
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;
