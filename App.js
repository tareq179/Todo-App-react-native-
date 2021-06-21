import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Header from "./Components/Header";
import TodoItem from "./Components/TodoItem";
import AddTodo from "./Components/AddTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Buy coffee", key: "1" },
    { text: "Create an app", key: "2" },
    { text: "Play on the switch", key: "3" },
  ]);

  const pressHandle = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };
  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { text: text, key: Math.random().toString() }];
    });
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />
      <View style={styles.content}>
        {/* to form */}
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandle={pressHandle} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
