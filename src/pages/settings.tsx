import { borderRadius, height, padding } from '@mui/system';
import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Modal,
} from 'react-native';
import LogoutIcon from '../assets/icon/logout';

export const SettingsPage = ( props: any) => {

  const [loged, setLoged] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const email1 = props?.route?.params?.email
  const navigation = props.navigation
  // TEMPORARY DATA!  USE REAL PROPS WHEN BACKEND IS SETUP!
  props = {
    name: 'User: TestUser',
    profile_url: 'https://cdn.pixabay.com/photo/2016/11/10/21/11/house-1815147_1280.png',
  };
  // TEMPORARY DATA!  USE REAL PROPS WHEN BACKEND IS SETUP!

  const [modalVisible, setModalVisible] = useState(false);

  const Logout = () => {
    // PUT LOGOUT FUNCTION HERE WHEN BACKEND IS SETUP!
    setLoged(false)
    setModalVisible(false);
  };


  return (
    <SafeAreaView>
      <ScrollView>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styled.logoutmodalcontainer}>
            <View style={styled.logoutmodal}>
              <Text style={styled.logoutmodaltext}>
                Are you sure you want to logout?
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Pressable
                  onPress={e => {
                    Logout()
                  }}
                  style={styled.logoutmodalbtn1}>
                  <Text style={{ fontSize: 18, color: 'red' }}>Yes</Text>
                </Pressable>
                <Pressable
                  onPress={e => {
                    setModalVisible(false);
                  }}
                  style={styled.logoutmodalbtn2}>
                  <Text style={{ fontSize: 18, color: 'white' }}>No</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <View style={styled.body}>
          <View style={styled.container}>
            <Image
              style={styled.profile}
              source={{
                uri: props.profile_url,
              }}
            />
            <View style={styled.container2}>
              <Text style={styled.name}>{loged ? email1 : 'No user'}</Text>
            </View>
          </View>
          <View style={styled.line} />
          <View style={{ flexDirection: 'row', gap: 10 }}>
            {
              loged ? <Pressable
                style={styled.logout}
                onPress={e => {
                  setModalVisible(true)
                }}>
                <LogoutIcon />
                <Text style={styled.logouttext}>Log Out</Text>
              </Pressable> : <Pressable
                style={styled.logout}
                onPress={e => {
                  navigation.navigate('userSignUp', { setLoged, email, password, setEmail, setPassword })
                }}>
                <LogoutIcon />
                <Text style={styled.logouttext}>Sign Up</Text>
              </Pressable>
            }
            <Pressable
              style={styled.logout}
              onPress={e => {
                navigation.navigate('userLogin', { setLoged })
              }}>
              <LogoutIcon />
              <Text style={styled.logouttext}>Log In</Text>
            </Pressable>
          </View>
          <Text style={styled.about}>
            App Developers: {'\n'}
            {'\n'}Tuguldur{'\n'}Khuslen{'\n'}Bilguun{'\n'}Oyunbaatar{' '}
            {'\n'}Tsogt
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const windowWidth = Dimensions.get('window').width;
const styled = StyleSheet.create({
  body: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
  },
  container: {
    width: '80%',
    height: 120,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    // backgroundColor: 'red'
  },
  container2: {
    height: 120,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  profile: {
    width: 90,
    height: 90,
    borderRadius: 99999,
  },
  name: {
    fontSize: 25,
    fontWeight: '400',
  },
  line: {
    width: '80%',
    height: 1,
    backgroundColor: 'black',
  },
  about: {
    fontSize: 17.5,
    color: 'grey',
    width: '80%',
    textAlign: 'left',
    marginTop: 20,
  },
  logout: {
    width: '35%',
    height: 60,
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 23,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingRight: 30,
    paddingLeft: 10,
    marginTop: 10,
  },
  logouttext: {
    fontSize: 20,
    color: 'red',
  },
  logoutmodalcontainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  logoutmodal: {
    width: '70%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    gap: 10,
  },
  logoutmodaltext: {
    fontSize: 20,
    textAlign: 'center',
  },
  logoutmodalbtn1: {
    width: '40%',
    alignItems: 'center',
    padding: 8,
    bottom: -5,
    right: 10,
  },
  logoutmodalbtn2: {
    width: '40%',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 27, 27, 0.865)',
    borderRadius: 8,
    bottom: -5,
    padding: 8,
    left: 10,
  },
});
