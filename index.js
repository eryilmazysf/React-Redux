/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import Restaurant from './src/RestaurantApi/Router';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Restaurant);
