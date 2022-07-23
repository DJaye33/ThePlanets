import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";

import MainScreen from "./screens/MainScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MainScreen />
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
