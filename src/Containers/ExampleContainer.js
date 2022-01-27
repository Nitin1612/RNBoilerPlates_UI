import React, { useState, useEffect } from 'react'
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
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
const ExampleContainer = (props) => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()

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
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[
        Layout.fill
      ]}
    >
      <View
        style={[
          //Layout.fill,
          Gutters.smallHPadding,
          Gutters.largeVMargin,
          //Common.backgroundPrimary,
        ]}>
        <Text>
          {"\n"}
        </Text>

        <Text style={Fonts.titleLarge}>
          New
        </Text>
        <Text style={Fonts.textLarge}>
          Collection
        </Text>

      </View>
      <View
        style={[
          Layout.fill,
          Gutters.smallHPadding,
          //Gutters.largeVMargin,
          //Common.backgroundPrimary,
        ]}
      >

        <SearchBar
          placeholder="Search for product"
          //inputStyle={{backgroundColor: '#212121'}}
          containerStyle={{ backgroundColor: '#dcdcdc', borderWidth: 0, borderRadius: 10, shadowColor: 'white', borderBottomColor: 'transparent', borderTopColor: 'transparent' }}
          placeholderTextColor={'grey'}
        />
      </View>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      <Text style={Fonts.textSmall}>       Best Seller        Featured         New&Recommended</Text>
      <Text>{"\n"}</Text>
      <FlatList
        data={picture.picture}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(item) => this.renderItem(item)}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  )
}

export default ExampleContainer
