import React from 'react'
import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import Icon from '../../assets/Shape.png'
import Glyph from '../../assets/Glyph.png'
import Glyph1 from '../../assets/Glyph1.png'
import Glyph2 from '../../assets/Glyph2.png'
import mapicon from '../../assets/icons-map.png'
import SearchIcon from '../../assets/icons-search.png'
import Forecast from './Forecast'
import Account from './Account'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Home() {

const [forecast,setforecast]=React.useState(true)
const [Maps,setMaps]=React.useState(false)
const [Accounts,setAccounts]=React.useState(false)

 
    return (
        <View style={{flex:1}}>
           <View style={styles.TopNavBar}>
           <Image style={styles.icon}
            source={Icon}></Image>
           <Text style={styles.titleText}>
                SURF CAPTAIN
                </Text>
                <Image 
                style={styles.SearchIcon} 
                source={SearchIcon}></Image>
       
           </View>
         
           {forecast? <Forecast  ></Forecast>:null}
           { Accounts?<Account  ></Account>:null}
           <View style={styles.BottomNavBar}>
          <TouchableOpacity 
               onPress={()=>{
                setMaps(false)
                setforecast(true)
                setAccounts(false)
            }}
          style={[{borderBottomWidth:RFValue(forecast?3:0)},styles.forecastButton]}>
          <Image style={styles.forecastImage}
            source={Glyph1}></Image>
       
            <Text style={styles.forecastText}>
               Forecast
                </Text>
                </TouchableOpacity>
                <TouchableOpacity
                     onPress={()=>{
                        setMaps(true)
                        setforecast(false)
                        setAccounts(false)
                    }}
                style={[{borderBottomWidth:RFValue(Maps?3:0)},styles.MapsButton]}>
                <Image style={styles.MapIcon}
            source={Glyph2}></Image>
       
            <Text style={styles.MapsText}>
                Maps
                </Text>
                </TouchableOpacity>
                <TouchableOpacity
                     onPress={()=>{
                        setMaps(false)
                        setforecast(false)
                        setAccounts(true)
                    }}
                style={{borderBottomWidth:RFValue(Accounts?3:0)},styles.AccountButton}>
                <Image style={styles.AccountIcon}
            source={Glyph}></Image>
       
            <Text style={styles.AccountText}>
                Account 
                </Text>
                </TouchableOpacity>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
TopNavBar:{
    flexDirection:'row', 
    backgroundColor:'white',
    width:wp(100),height:hp(8),
    borderColor:'grey'
,borderBottomWidth:hp(0.1),
paddingVertical:hp(1),
paddingHorizontal:wp(1)}
,
icon:
{
    marginLeft:wp(2),
    alignSelf:'center',
    resizeMode:'contain',
    marginTop:hp(0),
    height:hp(10),
    width:wp(10)}
    ,
titleText:
    {fontFamily:'Roboto',
    alignSelf:'center',
    color:'#005488',
    fontSize:RFValue(25),
    fontWeight:'bold'}
,
SearchIcon:
{
    marginLeft:wp(32),
    alignSelf:'center',
    resizeMode:'contain',
    marginTop:hp(0),
    height:hp(8),
    width:wp(8)}
    ,
forecastButton:{
        borderColor:'#005488',
        width:wp(33),
        height:hp(10)
    },
forecastImage:
    {
        marginLeft:wp(2),
        alignSelf:'center',
        resizeMode:'contain',
        height:hp(7),
        width:wp(10)}
,
BottomNavBar:
{
    flexDirection:'row',
    backgroundColor:'white',
    height:hp(10),
    width:wp(100)}
    ,
forecastText:
    {fontFamily:'Roboto',
    alignSelf:'center',
    color:'#005488',
    fontSize:RFValue(15),
    fontWeight:'bold',
    bottom:hp(1)}
    ,
    forecastMaps:
    {borderColor:'#005488',
    width:wp(33),
    height:hp(10)}
    ,
MapIcon:
    {
    marginLeft:wp(2),
    alignSelf:'center',
    resizeMode:'contain',
    marginTop:hp(0),
    height:hp(8),
    width:wp(10)}
,
MapsText:
{
    fontFamily:'Roboto',
    alignSelf:'center',
    color:'#005488',
    fontSize:RFValue(15),
    marginLeft:wp(2),
    fontWeight:'bold'

    ,bottom:hp(1.5)},
AccountButton:
{
    borderColor:'#005488',
    width:wp(33),
    height:hp(10)},
AccountIcon:
{   marginLeft:wp(2),
    alignSelf:'center',
    resizeMode:'contain',
    marginTop:hp(0),
    height:hp(8),
    width:wp(10)},
AccountText:
{
    fontFamily:'Roboto',
    alignSelf:'center',
    color:'#005488',
    fontSize:RFValue(15),
    bottom:wp(4),
    fontWeight:'bold',
    marginTop:hp(0.5)}
})
