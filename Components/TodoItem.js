import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function TodoItem({ item, pressHandle }) {
  return (
    <TouchableOpacity onPress={() => pressHandle(item.key)}>
      <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 16,
    marginTop: 16,
    borderColor: "#ddd",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
});
