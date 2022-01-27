
import React, { useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
//let { action, song } = this.props;

const SquareContainer = (props) => { 
 
  return (
    <View style={styles.container}>
      <View >       
          <Image style={styles.img} source={props.img} />
          <Text style={styles.title}>{props.name}</Text>
     </View>    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,

  },
  btn: {
    backgroundColor: '#ff0044',
    padding: 15,
    borderRadius: 10,
    margin: 10,
    width: 160,
  },
  text: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  img: {
    width: 275,
    height: 325,
    borderRadius: 10,
  },
  title: {
    color: '#fff',
    marginTop: 10,
    fontSize:17
  },
});

export default SquareContainer;


