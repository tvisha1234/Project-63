import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import { Header } from 'react-native-elements';
import HomeScreen from './screens/HomeScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Mobile Dictionary',
            style: { color: '#fff', fontSize: 20 },
          }}
        />

        <HomeScreen />
      </View>
    );
  }
}
