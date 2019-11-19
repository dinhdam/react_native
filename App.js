/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import CategoryListItem from './components/CategoryListItem';
//ScrollView  thanh cuon nen cuon xuong
//horizontal={true} la thanh cuon ngang
// <ScrollView horizontal={true}>
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
 export  default  class App extends React.Component {

   render() {
     return (
         <View >
           <ScrollView  style={{paddingLeft: 16,paddingRight: 16}}>
         <CategoryListItem/>
         <CategoryListItem/>
         <CategoryListItem/>
         <CategoryListItem/>
         <CategoryListItem/>
         <CategoryListItem/>
           </ScrollView>
         </View>

     )

   }
 }

const styles = StyleSheet.create({
  container:{
    flex:1,
     // ko phai la px ma la mot diem tren man hinh
    alignItems:'stretch', // keo dan sang hai ben
    backgroundColor:'#fff',
    justifyContent :'center',
    paddingLeft:16,
    paddingRight:16
  },

});


