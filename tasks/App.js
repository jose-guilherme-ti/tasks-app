
import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import commonStyles from './src/commonStyles';


export default class App extends Component{
    render(){
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Seja Bem Vindo!</Text>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome:{
    fontFamily: commonStyles.fontFamily,
    fontSize: 20,
    textAlign: 'center',
    margin: 10 
  }
});

