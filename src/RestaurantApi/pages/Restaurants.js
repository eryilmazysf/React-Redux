import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, FlatList} from 'react-native';
import {useDispatch} from 'react-redux';

import {RestaurantItem} from '../components';

const Restaurants = (props) => {
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  //post url data config ister ,  get url config ister
  //query string ? ile state gonderilir , yada params ile gonderilir
  const fetchData = () => {
    axios
      .get('https://opentable.herokuapp.com/api/restaurants', {
        params: {
          state: 'IL',
        },
      })
      .then((response) => setList(response.data.restaurants))
      .catch((error) => console.log(error));
  };
  ////////// headers ile veri cekme  //////////
  // axios
  //   .post(
  //     'https://worldwide-restaurants.p.rapidapi.com/search',
  // {
  //   limit: '30',
  //   language: 'en_US',
  //   location_id: '297704',
  //   currency: 'USD',
  // },
  // {
  //   headers: {
  //     'content-type': 'application/json', //dikkat sonunu json olarak aldik
  //     'x-rapidapi-host': 'worldwide-restaurants.p.rapidapi.com',
  //     'x-rapidapi-key':
  //       '9178a98d4emshd7e6c92344c53f7p11e8efjsn3f6021fc7ec0',
  //   },
  // },

  useEffect(() => fetchData(), []);

  const renderList = ({item}) => {
    return (
      <RestaurantItem
        item={item}
        onAddFavorite={() =>
          dispatch({
            type: 'ADD_TO_FAVORITE',
            payload: {selectedRestaurant: item},
          })
        }
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text style={{fontSize: 25, textAlign: 'center', fontWeight: 'bold'}}>
          Restoranlar
        </Text>
        <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={list}
          renderItem={renderList}
          ItemSeparatorComponent={() => (
            <View style={{borderWidth: 0.5, borderColor: '#bdbdbd'}} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export {Restaurants};
