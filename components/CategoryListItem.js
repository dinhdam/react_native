import React from 'react';
import medicine from '../assets/medicine.png'
import {
    Image,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Alert
    //lay tay cham vao dc
} from 'react-native';

// dung function components ta se dung export default
export default function CategoryListItem(props) {
    const {category} =  props;
    return<TouchableOpacity onPress={()=>
    {
     Alert.alert('click')
    }}>
    <View style={styles.container}>
       <Text style={styles.title}>{category.name}</Text>
        <Image style={styles.categoryImage} source={medicine}/>
    </View>
    </TouchableOpacity>



}
const  styles = StyleSheet.create({
 categoryImage:{
     width: 64,
     height:64
 },
 container:{
   alignItems: 'center',
     padding:16,
     shadowColor : '#000',
     shadowOpacity:0.3,
     shadowRadius:10,
     shadowOffset:{width: 0,height: 0},
     borderRadius:4,
     backgroundColor:'#FFF',
     // shadowColor: "#000",
     // shadowOffset: {
     //     width: 0,
     //     height: 2,
     // },
     // shadowOpacity: 0.25,
     // shadowRadius: 3.84,

     elevation: 3,
     marginBottom: 16


 },
 title:{
     textTransform : 'uppercase',
     marginBottom:8,
     fontWeight :'700'

 }
});


