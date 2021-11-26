import React from 'react'
import { StyleSheet, Text, View ,Image,TouchableOpacity,FlatList} from 'react-native'
import GeoIcon from '../../assets/geolocation.png'
import Glyph from '../../assets/Glyph.png'
import Glyph1 from '../../assets/Glyph1.png'
import Cloud from '../../assets/Cloud.png'
import mapicon from '../../assets/icons-map.png'
import SearchIcon from '../../assets/icons-search.png'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
  
const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
        id: '58694sa0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
      {
        id: '58694a0wf-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
  ]
  
export default function Forecast() {
    const [location,setlocation]=React.useState(false)
    const navigation = useNavigation();
    const [nearby,setnearby]=React.useState(true)
    const renderItem = ({ item }) => (
     <TouchableOpacity
     onPress={()=>{
navigation.navigate('forecastMenu')
     }}
     style={{width:wp(90),height:hp(13),backgroundColor:'white',borderRadius:RFValue(5),alignSelf:'center',flexDirection:'row'
     ,marginVertical:hp(1),elevation:RFValue(5)}}>
<View>
<Image style={{alignSelf:'center',resizeMode:'contain' ,height:hp(10),width:wp(15),marginLeft:wp(3)}}
                 source={Cloud}></Image>
<Text style={{fontFamily:'Roboto',alignSelf:'center',color:'black',fontSize:RFValue(12),fontWeight:'100'}}>
65°F
                </Text>
</View>
<View >
    <View style={{flexDirection:'row',justifyContent:'space-between',width:wp(50)}}>
    <Text style={{fontFamily:'Roboto',alignSelf:'center',color:'black',fontSize:RFValue(20),marginLeft:wp(2),width:wp(50)
    ,fontWeight:'bold',marginTop:hp(1)}}>
    Southampton
                </Text>
                <Text style={{fontFamily:'Roboto',alignSelf:'center',color:'black',marginLeft:wp(0),width:wp(20)
                ,fontSize:RFValue(12),fontWeight:'100',marginTop:hp(1)}}>
    100 M
                </Text>
    </View>
    <Text style={{fontFamily:'Roboto',marginLeft:wp(2),color:'black',fontSize:RFValue(12),fontWeight:'100',marginTop:hp(0)}}>
    Southampton
                </Text>
    <View style={{flexDirection:'row'}}>

        <TouchableOpacity style={{backgroundColor:'#4DC388',width:wp(30),height:hp(4),borderRadius:RFValue(5)}}>
        <Text style={{fontFamily:'Roboto',alignSelf:'center',color:'white',fontSize:RFValue(15),marginLeft:wp(1)
    ,fontWeight:'bold',marginTop:hp(0.5)}}>
    AM     2-3FT
                </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'#D74244',width:wp(30),height:hp(4),borderRadius:RFValue(5),marginLeft:wp(3)}}>
        <Text style={{fontFamily:'Roboto',alignSelf:'center',color:'white',fontSize:RFValue(15),marginLeft:wp(1)
    ,fontWeight:'bold',marginTop:hp(0.5)}}>
    PM     FLAT
                </Text>
        </TouchableOpacity>
    </View>
</View>
     </TouchableOpacity>
      );
    return (

        <View style={{width:wp(100),height:hp(79),backgroundColor:'#EDF4F7'}}>
            <View style={{flexDirection:'row' ,backgroundColor:'white'}}>
          <TouchableOpacity 
          onPress={()=>{
              setnearby(true)
          }}
          style={{borderBottomWidth:RFValue(nearby?3:0),borderColor:'#005488',width:wp(50),height:hp(7)}}>
            <Text style={{fontFamily:'Roboto',alignSelf:'center',color:'#005488',fontSize:RFValue(17),fontWeight:'bold',marginTop:hp(1)}}>
               Nearby
                </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                 onPress={()=>{
                    setnearby(false)
                }}
                style={{borderBottomWidth:RFValue(!nearby?3:0),borderColor:'#005488',width:wp(50),height:hp(7)}}>
            <Text style={{fontFamily:'Roboto',alignSelf:'center',color:'#005488',fontSize:RFValue(17),fontWeight:'bold',marginTop:hp(1.5)}}>
                Favourites
                </Text>
                </TouchableOpacity>
           </View>
            {location?
 
<FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      /> 
    
            :
            <View>
                <Image style={{alignSelf:'center',resizeMode:'stretch',marginTop:hp(10),height:hp(15),width:wp(30)}}
                 source={GeoIcon}></Image>
            <Text style={{fontFamily:'Roboto',alignSelf:'center',color:'black',fontSize:RFValue(20),fontWeight:'bold'}}>
                Geolocation is not Available
                </Text>
            <Text style={{fontFamily:'Roboto',alignSelf:'center',color:'#787C7C',textAlign: 'center',fontSize:RFValue(15),fontWeight:'bold',width:wp(80)}}>
            You have not turned on geolocation, we can’t show you the spots around you.</Text> 
            <TouchableOpacity
            onPress={()=>{
                setlocation(true)
            }}
            style={{height:hp(7),width:wp(50),borderRadius:RFValue(10),alignSelf:'center',
            marginTop:hp(2),backgroundColor:'#A1C6D7'}}>
   <Text style={{fontFamily:'Roboto',alignSelf:'center',color:'#005488',textAlign: 'center',marginTop:hp(2),
   fontSize:RFValue(15),fontWeight:'bold',width:wp(80)}}>
            Turn on geolocation</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={{height:hp(6),width:wp(30),left:wp(30),top:hp(15),
            borderRadius:RFValue(30),alignSelf:'center',flexDirection:'row',
            marginTop:hp(2),backgroundColor:'#005488'}}>
        <Image style={{ resizeMode:'contain' ,height:hp(8),width:wp(8),marginLeft:wp(2.5),bottom:hp(1)}}
                 source={mapicon}></Image>
   <Text style={{fontFamily:'Roboto',alignSelf:'center',color:'#ffffff',textAlign: 'center',marginTop:hp(0),
   fontSize:RFValue(13),fontWeight:'bold' }}>
            View Map</Text> 
       
       
            </TouchableOpacity>
            </View>}
           </View>
    )
}

const styles = StyleSheet.create({})
