import React,{useEffect} from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native'
import Icon from '../../assets/Toolbar.png'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Splash({navigation}) {
    useEffect(() => {
        setTimeout(()=>{navigation.navigate('Home')},3000)
    }, [])
    return (
        <View style={{flex:1,backgroundColor:'#005488'}}>
            <Image style={{alignSelf:'center',resizeMode:'contain' ,flex:1}} source={Icon}></Image>
          
     
        </View>
    )
}

 