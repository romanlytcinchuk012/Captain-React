import { StyleSheet, Text, View } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
container:{
    flex:1
},
topNavBar:{
width:wp(100),
height:hp(8),
borderBottomWidth:2,
backgroundColor:'red'
}

})

export default styles;