import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import FirstScreens from './src/firstscreens';
import Sreens02 from './src/1a';
import Sreens03 from './src/1b';
import Sreens04 from './src/1c';
import Screen05 from './src/1d';
import Screen06 from './src/1e';
import Screen07 from './src/2a';
import Screen08 from './src/2b';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="hide" />
      <FirstScreens />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});