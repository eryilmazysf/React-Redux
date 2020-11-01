import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';
import {reducer, initialState} from './context';
import {Favorites, Restaurants} from './pages';

const Tab = createBottomTabNavigator();
const store = createStore(reducer, initialState);

function Router() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="RestaurantsPage"
          // icon star from there
          screenOptions={({route}) => ({
            tabBarIcon: ({_, color, size}) => {
              let iconName;

              if (route.name === 'FavoritesPage') {
                iconName = 'heart';
                size = 35;
                color = 'red';
              } else if (route.name === 'RestaurantsPage') {
                iconName = 'cutlery';
                size = 30;
                color = 'black';
              }

              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />;
            },
            // icon end there
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen
            name="FavoritesPage"
            component={Favorites}
            options={{
              title: 'Favori Mekanlar',
            }}
          />
          <Tab.Screen
            name="RestaurantsPage"
            component={Restaurants}
            options={{
              title: 'Restoranlar',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default Router;
