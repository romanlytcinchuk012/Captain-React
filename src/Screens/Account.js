import React from 'react'
import { StyleSheet, Text, View ,Image,TouchableOpacity, ScrollView,ImageBackground} from 'react-native'
import Icon from '../../assets/Shape.png'
import Glyph from '../../assets/Glyph.png'
import Glyph1 from '../../assets/Glyph1.png'
import Glyph2 from '../../assets/Glyph2.png'
import iconarrow from '../../assets/icons-arrowsmall.png'
import imageback from '../../assets/bg-profilepro.png'
import Forecast from './Forecast'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Home() {
const [nearby,setnearby]=React.useState(true)
const [forecast,setforecast]=React.useState(true)
const [Maps,setMaps]=React.useState(false)
const [Accounts,setAccounts]=React.useState(false)

 
    return (
    
           
           <ScrollView style={{flex:1}}contentContainerStyle={{width:wp(100), backgroundColor:'#EDF4F7',marginBottom:hp(5)}}>
               <ImageBackground source={imageback} style={{height:hp(25),width:wp(110),resizeMode:'contain',alignSelf:'center'}}>

                
            <Text style={{fontFamily:'Roboto',alignSelf:'center',color:'white',textAlign:'center',fontSize:hp(3),width:wp(70)
            ,fontWeight:'bold',marginTop:hp(4)}}>
               Get more out of Surf Captain
                </Text>
                <Text style={{fontFamily:'Roboto',alignSelf:'center',color:'white',textAlign:'center',fontSize:hp(2),width:wp(100)
            ,fontWeight:'100',marginTop:hp(0)}}>
             16-Days Forecast and Premium Features
                </Text>
<TouchableOpacity style={{height:hp(6),borderRadius:RFValue(10),width:wp(50),backgroundColor:'#F5A031',alignSelf:'center',marginTop:hp(1)}}>
<Text style={{fontFamily:'Roboto',alignSelf:'center',color:'white',fontSize:RFValue(17),fontWeight:'bold',top:wp(2),textAlign:'center'}}>
               Upgrade to Pro
                </Text>
</TouchableOpacity>
 
          
               </ImageBackground>
<View style={{width:wp(100),height:hp(6)}}>
<Text style={{fontFamily:'Roboto',alignSelf:'flex-start',color:'#787C7C',fontSize:RFValue(12),fontWeight:'bold',marginVertical:hp(1),marginHorizontal:wp(6)}}>
   YOUR ACCOUNT
                </Text>
</View>
<TouchableOpacity style={{height:hp(6),borderColor:'#EDF4F7',borderBottomWidth:RFValue(1),width:wp(100) ,backgroundColor:'white',flexDirection:'row',justifyContent:'space-between'}}>
<Text style={{fontFamily:'Roboto',alignSelf:'flex-start',color:'black',fontSize:RFValue(17),fontWeight:'100',marginVertical:hp(1),marginHorizontal:wp(6)}}>
   Login
                </Text>
          <Image source={iconarrow} style={{resizeMode:'contain',height:hp(5),width:wp(10),marginRight:wp(5),marginTop:hp(0.5)}}></Image>
</TouchableOpacity>

<View style={{width:wp(100),height:hp(6)}}>
<Text style={{fontFamily:'Roboto',alignSelf:'flex-start',color:'#787C7C',fontSize:RFValue(12),fontWeight:'bold',marginVertical:hp(1),marginHorizontal:wp(6)}}>
 FORECASTING
                </Text>
</View>

<TouchableOpacity style={{height:hp(6),borderColor:'#EDF4F7',borderBottomWidth:RFValue(0.5),width:wp(100) ,backgroundColor:'white',flexDirection:'row',justifyContent:'space-between'}}>
<Text style={{fontFamily:'Roboto',alignSelf:'flex-start',color:'black',fontSize:RFValue(17),fontWeight:'100',marginVertical:hp(1),marginHorizontal:wp(6)}}>
   Wind Speed
                </Text>
                <Text style={{fontFamily:'Roboto',alignSelf:'flex-start',color:'#005488',fontSize:RFValue(17),fontWeight:'100',marginVertical:hp(1),marginHorizontal:wp(6)}}>
   Miles Per Hour(mph)
                </Text>
        </TouchableOpacity>
<TouchableOpacity style={{height:hp(6),borderColor:'#EDF4F7',borderBottomWidth:RFValue(1),width:wp(100) ,backgroundColor:'white',flexDirection:'row',justifyContent:'space-between'}}>
<Text style={{fontFamily:'Roboto',alignSelf:'flex-start',color:'black',fontSize:RFValue(17),fontWeight:'100',marginVertical:hp(1),marginHorizontal:wp(6)}}>
   Wave Height
                </Text>
                <Text style={{fontFamily:'Roboto',alignSelf:'flex-start',color:'#005488',fontSize:RFValue(17),fontWeight:'100',marginVertical:hp(1),marginHorizontal:wp(6)}}>
FT
                </Text>
    </TouchableOpacity>
<TouchableOpacity style={{height:hp(6),borderColor:'#EDF4F7',borderBottomWidth:RFValue(1),width:wp(100) ,backgroundColor:'white',flexDirection:'row',justifyContent:'space-between'}}>
<Text style={{fontFamily:'Roboto',alignSelf:'flex-start',color:'black',fontSize:RFValue(17),fontWeight:'100',marginVertical:hp(1),marginHorizontal:wp(6)}}>
   Tide Height
                </Text>
                <Text style={{fontFamily:'Roboto',alignSelf:'flex-start',color:'#005488',fontSize:RFValue(17),fontWeight:'100',marginVertical:hp(1),marginHorizontal:wp(6)}}>
FT
                </Text>
      </TouchableOpacity>
<TouchableOpacity style={{height:hp(6),borderColor:'#EDF4F7',borderBottomWidth:RFValue(1),width:wp(100) ,backgroundColor:'white',flexDirection:'row',justifyContent:'space-between'}}>
<Text style={{fontFamily:'Roboto',alignSelf:'flex-start',color:'black',fontSize:RFValue(17),fontWeight:'100',marginVertical:hp(1),marginHorizontal:wp(6)}}>
   Temperature
                </Text>
                <Text style={{fontFamily:'Roboto',alignSelf:'flex-start',color:'#005488',fontSize:RFValue(17),fontWeight:'100',marginVertical:hp(1),marginHorizontal:wp(6)}}>
°F
                </Text>
     </TouchableOpacity>
<View style={{width:wp(100),height:hp(6)}}>
<Text style={{fontFamily:'Roboto',alignSelf:'flex-start',color:'#787C7C',fontSize:RFValue(12),fontWeight:'bold',marginVertical:hp(1),marginHorizontal:wp(6)}}>
   CUSTOMERS SUPPORT
                </Text>
</View>

<TouchableOpacity style={{height:hp(6),borderColor:'#EDF4F7',borderBottomWidth:RFValue(0.5),width:wp(100) ,backgroundColor:'white',flexDirection:'row',justifyContent:'space-between'}}>
<Text style={{fontFamily:'Roboto',alignSelf:'flex-start',color:'black',fontSize:RFValue(17),fontWeight:'100',marginVertical:hp(1),marginHorizontal:wp(6)}}>
   FAQ
                </Text>
          <Image source={iconarrow} style={{resizeMode:'contain',height:hp(5),width:wp(10),marginRight:wp(5),marginTop:hp(0.5)}}></Image>
</TouchableOpacity>
<TouchableOpacity style={{height:hp(6),borderColor:'#EDF4F7',borderBottomWidth:RFValue(1),width:wp(100) ,backgroundColor:'white',flexDirection:'row',justifyContent:'space-between'}}>
<Text style={{fontFamily:'Roboto',alignSelf:'flex-start',color:'black',fontSize:RFValue(17),fontWeight:'100',marginVertical:hp(1),marginHorizontal:wp(6)}}>
   Contact Us
                </Text>
          <Image source={iconarrow} style={{resizeMode:'contain',height:hp(5),width:wp(10),marginRight:wp(5),marginTop:hp(0.5)}}></Image>
</TouchableOpacity>
<TouchableOpacity style={{height:hp(6),borderColor:'#EDF4F7',borderBottomWidth:RFValue(1),width:wp(100) ,backgroundColor:'white',flexDirection:'row',justifyContent:'space-between'}}>
<Text style={{fontFamily:'Roboto',alignSelf:'flex-start',color:'black',fontSize:RFValue(17),fontWeight:'100',marginVertical:hp(1),marginHorizontal:wp(6)}}>
   Terms and Conditions
                </Text>
          <Image source={iconarrow} style={{resizeMode:'contain',height:hp(5),width:wp(10),marginRight:wp(5),marginTop:hp(0.5)}}></Image>
</TouchableOpacity>
<TouchableOpacity style={{height:hp(6),borderColor:'#EDF4F7',borderBottomWidth:RFValue(1),width:wp(100) ,backgroundColor:'white',flexDirection:'row',justifyContent:'space-between'}}>
<Text style={{fontFamily:'Roboto',alignSelf:'flex-start',color:'black',fontSize:RFValue(17),fontWeight:'400',marginVertical:hp(1),marginHorizontal:wp(6)}}>
   Privacy Policy
                </Text>
          <Image source={iconarrow} style={{resizeMode:'contain',height:hp(5),width:wp(10),marginRight:wp(5),marginTop:hp(0.5)}}></Image>
</TouchableOpacity>
<View style={{width:wp(100),height:hp(6)}}>
 
</View>

</ScrollView> 
    )
}

const styles = StyleSheet.create({

   
})
