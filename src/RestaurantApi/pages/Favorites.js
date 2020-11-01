import React from 'react';
import {SafeAreaView, View, Text, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

const Favorites = (props) => {
  const favList = useSelector((state) => state.favoriteList);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={favList}
          renderItem={({item}) => (
            <View style={styles.container}>
              <Text style={styles.text}>
                <Icon name={'heart'} size={20} color={'red'} />
                {item.name}
              </Text>
            </View>
          )}
          ListEmptyComponent={() => <Text>Nothing on fav..</Text>}
        />
      </View>
    </SafeAreaView>
  );
};

export {Favorites};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffc107',
    margin: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
});
