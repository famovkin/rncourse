import { StyleSheet, Text, Button, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your goals" />
        <Button title="Add goal" />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  mainContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 15,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});
