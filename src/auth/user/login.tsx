import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

export const LoginScreen = (props: any) => {
  const navigation = props.navigation
  const email = props.route.params.email
  const password = props.route.params.password
  const loged = props.route.params.loged
  const setLoged = props.route.params.setLoged

  const [email1, setEmail] = useState('')
  const [password1, setPassword] = useState('')


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Login</Text>
      </View>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email1}
          onChangeText={(e) => setEmail(e)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password1}
          onChangeText={(e) => setPassword(e)}
        />
        <TouchableOpacity style={styles.forgotPasswordButton}>
          <Text style={styles.forgotPasswordButtonText}>Forgot?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if(email === email1 && password == password1){
              navigation.navigate('Settings', {email})
              Alert.alert("Login succes");
              setLoged(true)
            } else {
              Alert.alert("Email or password wrong!");
            }
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.createAccountButton}
          onPress={() => {
            navigation.navigate('userSignUp');
          }}>
          <Text style={styles.createAccountButtonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 20,
    width: '100%',
    height: 200,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#20B2AA',
    marginBottom: 10,
  },
  forgotPasswordButton: {
    width: '100%',
    textAlign: 'flex-end',
    marginTop: 10,
    marginBottom: 10,
  },
  forgotPasswordButtonText: {
    color: '#20B2AA',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    padding: 20,
    marginTop: 40,
    width: '90%',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '100%',
  },
  button: {
    backgroundColor: '#20B2AA',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  createAccountButton: {
    marginTop: 20,
  },
  createAccountButtonText: {
    color: '#20B2AA',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
