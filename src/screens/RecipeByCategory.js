import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {BREAKFAST_RECIPES, BRUNCH_RECIPES, CATEGORY_ITEMS} from '../Data';

const RecipeByCategory = ({route}) => {
  const navigation = useNavigation();
  const {selectedMealType} = route.params;
  console.log(selectedMealType);

  //   const filteredRecipes = CATEGORY_ITEMS.filter(item =>
  //     item.mealType.includes(selectedMealType),
  //   );
  //   console.log('Filtered Recipes:', filteredRecipes);
  return (
    <View style={styles.container}>
      <View style={{marginTop: 10}}>
        <FlatList
          data={
            selectedMealType == 'breakfast'
              ? BREAKFAST_RECIPES
              : selectedMealType == 'brunch'
              ? BRUNCH_RECIPES
              : []
          }
          //   data={CATEGORY_ITEMS}
          //   keyExtractor={(item) => item.id.toString()}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={styles.recipeItem}
                onPress={() => {
                  navigation.navigate('Details', {item});
                }}>
                <Image source={item.image} style={styles.recipeImage} />
                <View>
                  <Text style={styles.label}>{item.label}</Text>
                  <Text style={styles.source}>{item.source}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('../images/icons/back.png')}
            style={styles.backImg}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RecipeByCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backBtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    position: 'absolute',
    top: 20,
    left: 10,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backImg: {
    width: 20,
    height: 20,
  },
  recipeItem: {
    width: '90%',
    height: 100,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  recipeImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  label: {
    fontSize: 18,
    width: '84%',
    color: '#000',
    fontWeight: '500',
    marginLeft: 10,
  },
  source: {
    fontSize: 14,
    width: '84%',
    color: 'green',
    fontWeight: '500',
    marginLeft: 10,
  },
});
