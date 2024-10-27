import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {TYPES} from '../Data';
import * as Animatable from 'react-native-animatable';
const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity);
const Details = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={styles.container}>
      <Animatable.Image
        animation={'slideInUp'}
        source={route.params.item.image}
        style={styles.detailsRecipeImg}
      />
      <AnimatedBtn
        animation={'slideInUp'}
        style={styles.backBtn}
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          source={require('../images/icons/back.png')}
          style={styles.backImg}
        />
      </AnimatedBtn>
      <Animatable.Text animation={'slideInUp'} style={styles.title}>
        {route.params.item.label}
      </Animatable.Text>
      <Animatable.Text animation={'slideInUp'} style={styles.source}>
        {'added by ' + route.params.item.source}
      </Animatable.Text>
      <Animatable.Text animation={'slideInUp'} style={styles.calories}>
        {'Calries : '}
        <Text style={{color: 'orange'}}>{route.params.item.calaries}</Text>
      </Animatable.Text>
      <Animatable.Text animation={'slideInUp'} style={styles.calories}>
        {'Total Weight : '}
        <Animatable.Text animation={'slideInUp'} style={{color: '#000'}}>
          {route.params.item.totalweight}
        </Animatable.Text>
      </Animatable.Text>
      <Animatable.Text animation={'slideInUp'} style={styles.calories}>
        {'Meal Type : '}
        <Animatable.Text animation={'slideInUp'} style={{color: 'green'}}>
          {route.params.item.mealtype}
        </Animatable.Text>
      </Animatable.Text>
      <View>
        <FlatList
          data={TYPES}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{marginTop: 10}}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={[
                  styles.typeItem,
                  {
                    marginLeft: index == 0 ? 20 : 10,
                    borderWidth: selectedTab == index ? 0 : 0.5,
                    backgroundColor: selectedTab == index ? '#05B681' : '#fff',
                  },
                ]}
                onPress={() => {
                  setSelectedTab(index);
                }}>
                <Text style={{color: selectedTab == index ? '#fff' : '#000'}}>
                  {item.type}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <FlatList
        data={
          selectedTab == 0
            ? route.params.item.healthLabels
            : selectedTab == 1
            ? route.params.item.cautions
            : selectedTab == 2
            ? route.params.item.ingredients
            : selectedTab == 3
            ? route.params.item.dietLabels
            : setSelectedTab == 4
            ? route.params.item.mealType
            : selectedTab == 5
            ? route.params.item.cuiseneType
            : route.params.item.dishType
        }
        renderItem={({item, index}) => {
          return (
            <Animatable.View animation={'slideInUp'} style={styles.labels}>
              <Text style={{color: '#000'}}>{item}</Text>
            </Animatable.View>
          );
        }}
      />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsRecipeImg: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  backBtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(0,0,0,0.7)',
    position: 'absolute',
    top: 20,
    left: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backImg: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    color: '#000',
  },
  source: {
    fontSize: 12,
    marginLeft: 20,
    marginTop: 5,
    color: '#000',
  },
  typeItem: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginLeft: 10,
    borderRadius: 8,
  },
  labels: {
    width: '90%',
    alignSelf: 'center',
    height: 50,
    borderWidth: 0.5,
    justifyContent: 'center',
    marginTop: 10,
    borderColor: '#9e9e9e',
    padding: 10,
  },
  calories: {
    fontSize: 15,
    color: '#000',
    marginLeft: 20,
    marginTop: 5,
  },
});
