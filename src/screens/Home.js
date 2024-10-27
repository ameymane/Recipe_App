import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {MEAL_FILTERS, TRENDY_RECIPES} from '../Data';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity);

const Home = () => {
  const Navigation = useNavigation();
  const [animation, setAnimation] = useState('slideInUp');

  const handlePress = item => {
    setAnimation();
    setTimeout(() => {
      setAnimation('slideInUp');
      Navigation.navigate('Details', {item});
    });
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.TopView}>
        <Image
          source={require('../images/cooking.jpg')}
          style={styles.TopImg}
        />
        <View style={styles.transparentView}>
          <Text style={styles.logoTxt}>Recipeze</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.searchBox}
            onPress={() => {
              Navigation.navigate('Search');
            }}>
            <Image
              source={require('../images/icons/search.png')}
              style={styles.search}
            />
            <Text style={styles.placeholderTxt}>
              Please search here ........
            </Text>
          </TouchableOpacity>
          <Text style={styles.note}>
            Search 1000+ recipes easily with one click
          </Text>
        </View>
      </View>
      <Text style={styles.heading}>Catagories</Text>
      <View>
        <FlatList
          horizontal
          data={MEAL_FILTERS}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={styles.catagoryItem}
                onPress={() => {
                  Navigation.navigate('RecipeByCategory', {
                    selectedMealType: item.title, 
                  });
                }}>
                <View style={styles.card}>
                  <Image source={item.icon} style={styles.catagoryIcon} />
                </View>
                <Text style={styles.catagory}>{item.title}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Text style={styles.heading}>Trendy Recipes</Text>
      <View>
        <FlatList
          contentContainerStyle={{marginTop: 20}}
          // showsHorizontalScrollIndicator={false}
          horizontal
          data={TRENDY_RECIPES}
          renderItem={({item, index}) => {
            return (
              <AnimatedBtn
                animation={'slideInUp'}
                activeOpacity={0.5}
                style={styles.recipeItem}
                onPress={() => handlePress(item)}>
                <Image source={item.image} style={styles.recipeImg} />
                <View style={[styles.transparentView, {borderRadius: 15}]}>
                  <Text style={styles.trendyrecipeTxt}>{item.label}</Text>
                </View>
              </AnimatedBtn>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TopView: {
    width: '100%',
    height: '40%',
  },
  TopImg: {
    width: '100%',
    height: '100%',
  },
  transparentView: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,.5)',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBox: {
    width: '90%',
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
    paddingLeft: 10,
  },
  search: {
    width: 20,
    height: 20,
  },
  placeholderTxt: {
    fontSize: 15,
    color: '#838383',
    marginLeft: 15,
  },
  logoTxt: {
    fontSize: 30,
    color: '#fff',
    fontWeight: '600',
    position: 'absolute',
    top: 10,
    left: 20,
  },
  note: {
    fontSize: 16,
    color: '#fff',
    width: '90%',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 20,
    fontWeight: '600',
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginLeft: 10,
    marginTop: 10,
  },
  catagoryItem: {
    width: 120,
    height: 120,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '80%',
    height: '70%',
    backgroundColor: '#FFF',
    shadowColor: 'rgba(0,0,0,.3)',
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  catagoryIcon: {
    width: 50,
    height: 50,
  },
  catagory: {
    fontSize: 15,
    fontWeight: '600',
    color: '#838383',
    marginTop: 5,
  },
  recipeItem: {
    width: 150,
    height: 200,
    marginLeft: 20,
    borderRadius: 15,
  },
  recipeImg: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  trendyrecipeTxt: {
    fontSize: 15,
    color: '#fff',
    width: '90%',
    fontWeight: '600',
  },
});
