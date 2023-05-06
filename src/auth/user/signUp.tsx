import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export const SignUpScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>sign up</Text>
      </View>
      <View style={styles.card}>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity
          onPress={() => {
            console.log('log');
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>SignUp</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.createAccountButton}
          onPress={() => {
            navigation.navigate('userLogin');
          }}>
          <Text style={styles.createAccountButtonText}>
            Already have an account?{' '}
          </Text>
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
