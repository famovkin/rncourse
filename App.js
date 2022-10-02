import { useState } from "react";
import { StyleSheet, View, FlatList, Button, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [listGoals, setListGoals] = useState([]);

  const startAddGoalHandler = () => setIsModalVisible(true);
  const endAddGoalHandler = () => setIsModalVisible(false);
  const submitInputHandler = (enteredGoalText) => {
    setListGoals((listGoals) => [
      ...listGoals,
      {
        text: enteredGoalText,
        id: `${enteredGoalText}${Math.random().toString()}`,
      },
    ]);
    endAddGoalHandler();
  };
  const deleteGoalHandler = (itemId) => {
    setListGoals((listGoals) => listGoals.filter((goal) => goal.id !== itemId));
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.mainContainer}>
        <Button
          onPress={startAddGoalHandler}
          title="Add new goal"
          color="#a065ec"
        />
        <GoalInput
          showModal={isModalVisible}
          onAddGoal={submitInputHandler}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={listGoals}
            renderItem={(itemData) => (
              <GoalItem
                onDeleteGoal={deleteGoalHandler}
                text={itemData.item.text}
                id={itemData.item.id}
              />
            )}
            alwaysBounceVertical={false}
            keyExtractor={(item, _) => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 15,
    backgroundColor: "#1e085a",
  },
  goalsContainer: {
    flex: 5,
  },
});
