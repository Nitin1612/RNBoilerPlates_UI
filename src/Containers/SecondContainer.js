import React, { useState, useEffect } from 'react'
import {
  View,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image
} from 'react-native'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Brand } from '@/Components'
import { useTheme } from '@/Hooks'
import { useLazyFetchOneQuery } from '@/Services/modules/users'
import { changeTheme } from '@/Store/Theme'
import { SearchBar } from 'react-native-elements/dist/searchbar/SearchBar'
import { FlatList } from 'react-native-gesture-handler'
import SquareContainer from './SquareContainer'
import * as picture from '../data/picture'
import { Icon } from 'react-native-elements';
import { ToggleButton, Text } from 'react-native-paper';
import { ButtonGroup } from 'react-native-elements'


const SecondContainer = (props) => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [userId, setUserId] = useState('9')
  const [
    fetchOne,
    { data, isSuccess, isLoading, isFetching, error },
  ] = useLazyFetchOneQuery()

  useEffect(() => {
    fetchOne(userId)
  }, [fetchOne, userId])

  const onChangeTheme = ({ theme, darkMode }) => {
    dispatch(changeTheme({ theme, darkMode }))
  }
  const [status, setStatus] = React.useState('checked');
  const [value, setValue] = React.useState('one');

  const onButtonToggle = value => {
    setStatus(status === 'checked' ? 'unchecked' : 'checked');
  };

  renderItem = (item) => {
    return (
      <SquareContainer
        song={item.item}
        name={item.item.name}
        img={item.item.img}
      />
    );
  };

  return (
    <View 
     style={[
          Layout.fill,
        ]}>
    
    <ScrollView
      style={Layout.fill}
      // contentContainerStyle={[
      //   Layout.fill
      // ]}
    >


      <View >
       <Text>
         {"\n"}
       </Text>

        <Text style={Fonts.textSmall}>
          Women Shoes
        </Text>
        <Text style={Fonts.titleLarge}>
          Balengiaca
        </Text>
        <Text style={Fonts.textSmall}>
          <Icon
            name='star-half'
            type='ionicon'
            color='#517fa4'
          />4.5(98 Reviews)
        </Text>
      </View>
      <View
        style={[
         // Layout.fill,
          Gutters.smallHPadding,
          Gutters.largeVMargin,
          Common.backgroundPrimary,
        ]}
      >

        <Image
          style={{ height: 275, width: 350 ,borderRadius: 10}}
          source={require('../Assets/Images/shoe.png')}
        />
      </View>

      <View>
        <Text style={Fonts.textSmall}>
          Size
        </Text>
        <ToggleButton.Row onValueChange={value => setValue(value)} value={value}>
        <ToggleButton
          icon={() => <View><Text style={{color: 'grey',fontSize:30}}>8.5</Text></View>}
          value="one"
          status={status}
          style={{ width: 75,height:75,borderRadius: 20 }}        
         
        />
        <ToggleButton
          icon={() => <View><Text style={{ color: 'grey',fontSize:30}}>9</Text></View>}
          value="two"
          status={status}
          style={{ width: 75,height:75,borderRadius: 20 }}        
         
        />
        <ToggleButton
          icon={() => <View><Text style={{color: 'grey',fontSize:30}}>9.5</Text></View>}
          value="three"
          status={status}   
          style={{ width: 75,height:75,borderRadius: 20 }}        
      
        />
        <ToggleButton
          icon={() => <View><Text style={{ color: 'grey',fontSize:30}}>10</Text></View>}
          value="four"
          status={status} 
          style={{ width: 75,height:75 ,borderRadius: 20}}        
        />
         <ToggleButton
          icon={() => <View><Text style={{ color: 'grey',fontSize:30}}>10.5</Text></View>}
          value="five"
          status={status}
          style={{ width: 75,height:75,borderRadius: 20 }}        
         
        />
        </ToggleButton.Row>
       

      <Text>{"\n"}</Text>
      <Text style={{fontSize:20,color:'grey'}}>   The Triple S stands for triple sole. 
      Placed atop three chunky soles, these multicoloured leather Triple S logo embroidered sneakers
       from Balenciaga are sure to fit the bill. No wonder they have such a cult following.
        Featuring a round toe, a ridged rubber sole, a lace fastening, an embroidered logo to the front
         and a pull tab at the rear.</Text>
     


      </View>
      
    </ScrollView>
    <TouchableOpacity style={ {  padding: 13,
    borderRadius: 15,margin: 5,width: 375, height: 70,
    backgroundColor:"#daa520"}}>
                <Text style={Fonts.titleSmall} >Add to Cart - $92.15</Text>
    </TouchableOpacity>
   </View>
  )
}
const styles = StyleSheet.create({});



export default SecondContainer
