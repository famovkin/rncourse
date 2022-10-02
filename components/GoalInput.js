import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from "react-native";

function GoalInput({ onAddGoal, onCancel, showModal }) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (goalText) => setEnteredGoalText(goalText);
  const submitInputHandler = () => {
    if (!enteredGoalText) return;
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your goals"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button
              title="Add goal"
              onPress={submitInputHandler}
              color="#b180f0"
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    width: "100%",
    padding: 16,
    marginBottom: 10,
    borderRadius: 6,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
