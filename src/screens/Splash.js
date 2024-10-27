import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
    return () => clearTimeout();
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Animatable.Image
        animation={'slideInUp'}
        source={require('../images/recipelogo1.png')}
        style={styles.logo}
      />
      <Animatable.Text animation={'slideInUp'} style={styles.title}>
        Recipeze
      </Animatable.Text>
      <Animatable.Text animation={'slideInUp'} style={styles.tagline}>
        Unlock the power of flavorful cooking
      </Animatable.Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05B681',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 25,
    color: '#000',
    fontWeight: '600',
    marginTop: 5,
  },
  tagline: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
    position: 'absolute',
    bottom: 50,
  },
});
