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
//FlatList
//Even handing
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
    FlatList
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
 export  default  class App extends React.Component {
   constructor(props){
     super(props);
     //luu mot cai array gom cac  item
     this.state ={

       categories:[
         {id:1,name:'Dung cụ y tế'},
         {id:2,name:'Thuốc'},
         {id:3,name:'Thuốc'},
       ]
     }
     }



   render() {
     const {categories} = this.state;
     return (
         <View >
           {/*<ScrollView  style={{paddingLeft: 16,paddingRight: 16}}>*/}
             {/*{categories.map(category=> <CategoryListItem key={category.id} category={category}/>)}*/}
             {/*thay the cho doan duoi*/}

         {/*<CategoryListItem/>*/}
         {/*<CategoryListItem/>*/}
         {/*<CategoryListItem/>*/}
         {/*<CategoryListItem/>*/}
         {/*<CategoryListItem/>*/}
         {/*<CategoryListItem/>*/}
             <FlatList

                 data={categories}
                 renderItem={({ item }) => <CategoryListItem title={item.title} category={item} />}
                 keyExtractor={item => `${item.id}`} // revert ve kieu string
                 contentContainerStyle={{paddingLeft: 16, paddingRight: 16}}

             />
           {/*</ScrollView>*/}
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


