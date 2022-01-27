/**
 * This file contains all application's style relative to fonts
 */
import { StyleSheet } from 'react-native'

/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ({ FontSize, Colors }) {
  return StyleSheet.create({
    textSmall: {
      fontSize: FontSize.small,
      color: Colors.text,
      textAlign: 'justify',
    },
    textRegular: {
      fontSize: FontSize.large,
      color: Colors.text,
    },
    textLarge: {
      fontSize: FontSize.large,
      color: Colors.text,
    },
    titleSmall: {
      fontSize: FontSize.small *1.5,
      fontWeight: 'bold',
      color: Colors.text,
      textAlign: 'center'
    },
    titleRegular: {
      fontSize: FontSize.regular ,
      fontWeight: 'bold',
      color: Colors.text,
    },
    titleLarge: {
      fontSize: FontSize.small * 2,
      fontWeight: 'bold',
      color: Colors.text,
    },
    textCenter: {
      textAlign: 'center',
    },
    textJustify: {
      textAlign: 'justify',
    },
    textLeft: {
      textAlign: 'left',
    },
    textRight: {
      textAlign: 'right',
    },
  })
}
