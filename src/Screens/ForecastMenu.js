import React from 'react'
import { StyleSheet, Text, View ,Image,TouchableOpacity,ScrollView,FlatList} from 'react-native'
import icontemp from '../../assets/icon-temperature.png'
 
import back from '../../assets/back.png'
import Graph from '../../assets/Group26.png'
import Cloud from '../../assets/Cloud.png'
import save from '../../assets/save.png'
import Forecast from './Forecast'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
      
  ]
export default function Home() {
const [nearby,setnearby]=React.useState(true)
const [forecast,setforecast]=React.useState(true)
const [Maps,setMaps]=React.useState(false)
const [Accounts,setAccounts]=React.useState(false)

const renderItem = ({ item }) => (
    <View style={styles.ForecastDetails}>
<View>
<Image style={styles.ForecastImage}
                source={Cloud}></Image>
<Text style={styles.TempText}>
65°F
               </Text>
</View>
<View>
   <View style={{flexDirection:'row',justifyContent:'space-between'}}>
   <Text style={styles.TextTitle}>
   Southampton
               </Text>
               <Text style={styles.TextDistance}>
   100 M
               </Text>
   </View>
   <Text style={styles.TextTitle_2}>
   Southampton
               </Text>
   <View style={{flexDirection:'row'}}>

       <TouchableOpacity style={styles.AMButton}>
       <Text style={styles.AMButtonText}>
   AM     2-3FT
               </Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.PMButton}>
       <Text style={ styles.AMButtonText}>
   PM     FLAT
               </Text>
       </TouchableOpacity>
   </View>
</View>
    </View>    )
    return (
        <View style={{flex:1}}>
           <View style={styles.backView}>
           <Image style={styles.backImage}
            source={back}></Image>
           <Text style={styles.TopNavBar}>
                Southampton
                </Text>
                <Image 
                style={styles.saveImage} 
                source={save}></Image>
       
           </View>
        <ScrollView contentContainerStyle={{paddingBottom:hp(5),backgroundColor:'#DCE9F0'}}>
            <View>
<View style={styles.IntroView}>
<Text style={styles.IntroText_2}>
               Surf Conditions are
                </Text>
                <Text style={styles.IntroText_1}>
                [2-3 ft]
                </Text>
                <Text style={styles.IntroText_2}>
                and
                </Text>
                <Text style={styles.IntroText_1}>
                [clean]
                </Text>
                <Text style={styles.IntroText_2}>
                Rightnow at
                </Text>
                <Text style={styles.IntroText_1}>
                [Lewis,DE]
                </Text>
</View>
<View> 
<TouchableOpacity style={styles.ForecastButton}>
<Image style={styles.ForecastImage}
                 source={icontemp}></Image>
 <View style={{}}>
 <Text style={styles.ForecastTitle}>
              Weather
                </Text>
                <Text style={styles.ForecastCond}>
                65°F Partly cloudy ENE 15mph
                </Text>
 </View>
    </TouchableOpacity>
    <TouchableOpacity style={ styles.ForecastButton}>
<Image style={styles.ForecastImage}
                 source={icontemp}></Image>
 <View style={{}}>
 <Text style={styles.ForecastTitle}>
              Weather
                </Text>
                <Text style={styles.ForecastCond}>
                65°F Partly cloudy ENE 15mph
                </Text>
 </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.ForecastButton}>
<Image style={styles.ForecastImage}
                 source={icontemp}></Image>
 <View style={{}}>
 <Text style={styles.ForecastTitle}>
              Weather
                </Text>
                <Text style={styles.ForecastCond}>
                65°F Partly cloudy ENE 15mph
                </Text>
 </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.ForecastButton}>
<Image style={styles.ForecastImage}
                 source={icontemp}></Image>
 <View style={{}}>
 <Text style={styles.ForecastTitle}>
              Weather
                </Text>
                <Text style={styles.ForecastCond}>
                65°F Partly cloudy ENE 15mph
                </Text>
 </View>
    </TouchableOpacity>
      </View>
            </View>
            <View style={styles.ForecastView_2}>
        <Text style={styles.ForecastText}>
                Forecast
                </Text>
                <View style={{flexDirection:'row'}}>
<TouchableOpacity style={styles.DaysButton}>
<Text style={styles.DaysText}>
                3 Days
                </Text>
</TouchableOpacity>
<TouchableOpacity style={styles.ProButton}>
    <View style={styles.ProView}>
    <Text style={styles.ProText}>
                Pro
                </Text>
    </View>
<Text style={styles.Text_2}>
                7 Days
                </Text>
</TouchableOpacity>
                </View>

             
       
           </View>
           <View style={{flexDirection:'row' ,backgroundColor:'white'}}>
          <TouchableOpacity 
          onPress={()=>{
              setnearby(true)
          }}
          style={[{borderBottomWidth:RFValue(nearby?3:0)},styles.SurfButton]}>
            <Text style={styles.SurfText}>
               Surf
                </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                 onPress={()=>{
                    setnearby(false)
                }}
                style={[{borderBottomWidth:RFValue(!nearby?3:0)},styles.SwellButton]}>
            <Text style={styles.Swell}>
                Swell
                </Text>
                </TouchableOpacity>
           </View>
           <Image 
                style={styles.CleanImage} 
                source={Graph}></Image>  
                <View style={styles.ChartView}>
                    <View style={{flexDirection:'row',marginLeft:wp(8)}}>
                        <View style={styles.ChartTextView_3}
                        underlayColor = '#ccc'
                        >

                        </View>
                        <Text style={styles.ChartText}>
                Clean
                </Text>
                    </View>
                    <View style={{flexDirection:'row',right:wp(8)}}>
                        <View style={styles.ChartTextView_2}
                        underlayColor = '#ccc'
                        >

                        </View>
                        <Text style={styles.ChartText}>
                Fair
                </Text>
                    </View>
                    <View style={{flexDirection:'row',right:wp(15)}}>
                        <View style={styles.ChartTextView}
                        underlayColor = '#ccc'
                        >

                        </View>
                        <Text style={styles.ChartText}>
                Choppy
                </Text>
                    </View>

                </View>
                <View style={styles.ForecastViewText_1}>
<View style={styles.ForecastDetailView}>
<Text style={styles.ForecastDetailText}>
               Forecast Details
                </Text>
                
</View>
<View > 
<FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      /> 
      </View>
            </View>
            <View style={styles.BottomView}>
            <Text style={styles.DetailsText}>
               Check 16-Days Forecast with Surf Captain Pro
                </Text>
<TouchableOpacity style={styles.UpgradeButton}>
<Text style={styles.UpgradeText}>
               Upgrade to Pro
                </Text>
</TouchableOpacity>
 
            </View>
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
SwellButton:
{
    borderColor:'#005488',
    width:wp(50),
    height:hp(7)},
Text_2:
{
    fontFamily:'Roboto',
    alignSelf:'center',
    color:'black',
    fontSize:RFValue(15),
    fontWeight:'bold',
    bottom:hp(2)},
ProView:
{
    backgroundColor:'#F5A031' ,
    width:wp(10),
    height:hp(3),
    bottom:hp(3),
    borderRadius:RFValue(5),
    left:wp(10)},
ForecastText:
{
    fontFamily:'Roboto',
    alignSelf:'center',
    color:'black',
    marginLeft:wp(5),
    marginBottom:hp(2),
    fontSize:RFValue(25),
    fontWeight:'bold'},
IntroView:
{
    flexDirection:'row',
    flexWrap:'wrap',
    alignSelf:'center',
    marginTop:hp(5),
    marginLeft:wp(2),
    marginBottom:hp(2)},
TopNavBar:
{
    fontFamily:'Roboto',
    alignSelf:'center',
    color:'black',
    width:wp(60),
    fontSize:RFValue(20),
    fontWeight:'bold',
    marginLeft:wp(4)},
saveImage:
{
    marginLeft:wp(7),
    alignSelf:'center',
    resizeMode:'contain',
    marginTop:hp(0),
    height:hp(8),
    width:wp(8)},
backImage:
{
    marginLeft:wp(2),
    alignSelf:'center',
    resizeMode:'contain',
    marginTop:hp(0),
    height:hp(10),
    width:wp(10)},
backView:
{
    flexDirection:'row',
    backgroundColor:'white',
    width:wp(100),
    height:hp(10),
    borderColor:'grey'
    ,borderBottomWidth:hp(0.1),
    paddingVertical:hp(1),
    paddingHorizontal:wp(1)},
PMButton:
{
    backgroundColor:'#D74244',
    width:wp(30),
    height:hp(4),
    borderRadius:RFValue(5),
    marginLeft:wp(3)},
AMButtonText:
{
    fontFamily:'Roboto',
    alignSelf:'center',
    color:'white',
    fontSize:RFValue(15),
    marginLeft:wp(1)
   ,fontWeight:'bold',
   marginTop:hp(0.5)},
TextTitle_2:
{
    fontFamily:'Roboto',
    marginLeft:wp(2),
    color:'black',
    fontSize:RFValue(12),
    fontWeight:'100',
    marginTop:hp(0)},
DaysButton:
{ 
    height:hp(5),
    width:wp(20),
    backgroundColor:'#005488',
    borderRadius:RFValue(5),
    marginTop:hp(2)},
AMButton:
{
    backgroundColor:'#4DC388',
    width:wp(30),
    height:hp(4),
    borderRadius:RFValue(5)},
DaysText:
{
    fontFamily:'Roboto',
    alignSelf:'center',
    color:'white',
    fontSize:RFValue(15),
    fontWeight:'bold',
    marginTop:hp(1)},
ProButton:
{
     height:hp(5),
     width:wp(20),
     backgroundColor:'#005488',
     borderRadius:RFValue(5),
     marginTop:hp(2),
     backgroundColor:'#DCE9F0'},
SurfText:
{
    fontFamily:'Roboto',
    alignSelf:'center',
    color:'#005488',
    fontSize:RFValue(17),
    fontWeight:'bold',
    marginTop:hp(1)},
CleanImage:
{ 
    alignSelf:'center',
    resizeMode:'contain',
    bottom:hp(2),
    height:hp(30),
    width:wp(100)},
BottomView:
{
    height:hp(10),
    width:wp(100),
    backgroundColor:'#DCE9F0',
    bottom:hp(4)},
TextDistance:
{
    fontFamily:'Roboto',
    alignSelf:'center',
    color:'black',
    marginLeft:wp(0),
    fontSize:RFValue(12),
    fontWeight:'100',
    marginTop:hp(1)},
TextTitle:
{
    fontFamily:'Roboto',
    alignSelf:'center',
    color:'black',
    fontSize:RFValue(20),
    marginLeft:wp(2),
    width:wp(50)
   ,fontWeight:'bold',
   marginTop:hp(1)},
ProText:
{
    fontFamily:'Roboto',
    alignSelf:'center',
    color:'white',
    fontSize:RFValue(10),
    fontWeight:'bold',
    marginTop:hp(0.5)},
SurfButton:
{
    
    borderColor:'#005488',
    width:wp(50),
    height:hp(7)},
TempText:
{
    fontFamily:'Roboto',
    alignSelf:'center',
    color:'black',
    fontSize:RFValue(12),
    fontWeight:'100'},
IntroText_2:
{
    fontFamily:'Roboto',
    alignSelf:'center',
    color:'black',
    fontSize:RFValue(17),
    fontWeight:'500',
    marginLeft:wp(4)},
IntroText_1:
{
    fontFamily:'Roboto',
    alignSelf:'center',
    color:'#005488',
    fontSize:RFValue(17),
    fontWeight:'bold',
    marginLeft:wp(4)},
    
ForecastViewText_1:
{
    backgroundColor:'#DCE9F0',
    height:hp(80),
    width:wp(100),
    bottom:hp(4)},
Swell:
{
    fontFamily:'Roboto',
    alignSelf:'center',
    color:'#005488',
    fontSize:RFValue(17),
    fontWeight:'bold',
    marginTop:hp(1.5)},
ChartView:
{
    flexDirection:'row',
    height:hp(8),
    width:wp(100),
    bottom:hp(4),
    backgroundColor:'white',
    justifyContent:'space-evenly',
    borderColor:'grey',
    borderBottomWidth:RFValue(0.5)},
UpgradeText:
{
    fontFamily:'Roboto',
    alignSelf:'center',
    color:'white',
    fontSize:RFValue(23),
    fontWeight:'bold',
    top:wp(2),
    textAlign:'center'},
UpgradeButton:
{
    height:hp(7),
    borderRadius:RFValue(10),
    width:wp(90),
    backgroundColor:'#F5A031',
    alignSelf:'center',
    bottom:hp(2)},
ForecastDetails:
{
    width:wp(90),
    height:hp(13),backgroundColor:'white'
    ,borderRadius:RFValue(5)
    ,alignSelf:'center',
    flexDirection:'row'
    ,marginVertical:hp(1),
    elevation:RFValue(5)},
ForecastImage:
{alignSelf:'center',
resizeMode:'contain' ,
height:hp(10),
width:wp(15),
marginLeft:wp(3)},
ForecastTitle:
{
     fontFamily:'Roboto',
     color:'black',
     fontSize:RFValue(17),
     fontWeight:'500',
     marginLeft:wp(4)},
ForecastCond:
{
    fontFamily:'Roboto',
    color:'black',
    fontSize:RFValue(13),
    fontWeight:'500',
    marginLeft:wp(4)},
ForecastButton:
{   
    width:wp(90),
    height:hp(9),
    backgroundColor:'#DCE9F0',
    borderRadius:RFValue(5),
    alignSelf:'center',
    flexDirection:'row'
    ,marginVertical:hp(1),
    elevation:RFValue(5)},
ForecastView_2:
{
    flexDirection:'row',
    backgroundColor:'white',
    width:wp(100),
    height:hp(12),
    borderColor:'grey'
   ,justifyContent:'space-between',
    marginTop:hp(2)
  ,borderBottomWidth:hp(0),
  paddingVertical:hp(1),
  paddingHorizontal:wp(1)},
  ChartText:
  {
      fontFamily:'Roboto',
      alignSelf:'center',
      color:'black',
      marginLeft:wp(2),
      marginBottom:hp(1.5),
      fontSize:RFValue(15),
      fontWeight:'100'},
ChartTextView:
  {backgroundColor:'red',
  width:wp(3),
  height:hp(1.5),
  borderRadius:RFValue(7),
  marginTop:hp(2.5)},
ChartTextView_2:
{
    backgroundColor:'#4F93E2',
    width:wp(3),
    height:hp(1.5),
    borderRadius:RFValue(7),
    marginTop:hp(2.5)},
ChartTextView_3:
{
    backgroundColor:'#4DC388',
    width:wp(3),
    height:hp(1.5),
    borderRadius:RFValue(7),
    marginTop:hp(2.5)},
ForecastDetailView:
{
    flexDirection:'row',
    flexWrap:'wrap',
    alignSelf:'flex-start',
    marginTop:hp(5),
    marginLeft:wp(5),
    marginBottom:hp(2)},
ForecastDetailText:
{
    fontFamily:'Roboto',
    alignSelf:'flex-start',
    color:'black',
    fontSize:RFValue(25),
    fontWeight:'bold',
    marginLeft:wp(0)},
DetailsText:
{
    fontFamily:'Roboto',
    alignSelf:'center',
    color:'black',
    textAlign:'center',
    fontSize:RFValue(20),
    width:wp(70),
    fontWeight:'bold',
    bottom:wp(7)}
})
