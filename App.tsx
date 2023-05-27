import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Hello My love!</Text>
      <Text style={styles.Text}>I love you ❤️</Text>
      <Text style={styles.Text}>by libeti</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  Text: {
    color: "#fff",
  },
});
