import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {TRENDY_RECIPES} from '../Data';
import Details from './Details';

const Search = () => {
  const [search, setSearch] = useState('');
  const navigation = useNavigation();
  const [recipes, setRecipes] = useState([]);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          source={require('../images/icons/backBlack.png')}
          style={styles.backImg}
        />
      </TouchableOpacity>
      <View style={styles.searchBox}>
        <Image
          source={require('../images/icons/search.png')}
          style={styles.searchImg}
        />
        <TextInput
          value={search}
          onChangeText={setSearch}
          style={styles.textInput}
          placeholder="Search here"
          placeholderTextColor={'#8e8e8e'}
        />
        {search != '' && (
          <TouchableOpacity
            onPress={() => {
              setSearch('');
              setRecipes('');
            }}>
            <Image
              source={require('../images/icons/close.png')}
              style={styles.closeImg}
            />
          </TouchableOpacity>
        )}
      </View>
      {search != '' && (
        <TouchableOpacity
          style={styles.searchBtn}
          onPress={() => {
            const filteredRecipes = TRENDY_RECIPES.filter(recipe =>
              recipe.label.toLowerCase().includes(search.toLowerCase()),
            );
            setRecipes(filteredRecipes);
          }}>
          <Text style={styles.searchTxt}>Search</Text>
        </TouchableOpacity>
      )}

      <FlatList
        data={recipes}
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
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backBtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginTop: 20,
    marginLeft: 10,
    backgroundColor: 'rgba(0,0,0,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backImg: {
    width: 20,
    height: 20,
  },
  searchBox: {
    width: '90%',
    height: 50,
    borderWidth: 0.5,
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 8,
    borderColor: '#9e9e9e',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  searchImg: {
    width: 20,
    height: 20,
  },
  closeImg: {
    width: 15,
    height: 15,
  },
  textInput: {
    width: '80%',
    marginLeft: 10,
    color: '#000',
    fontSize: 16,
  },
  searchBtn: {
    width: '40%',
    height: 50,
    backgroundColor: '#05B681',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchTxt: {
    fontSize: 16,
    color: '#fff',
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
