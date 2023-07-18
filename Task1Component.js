import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";

const Task1Component = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.centerContainer}>
        <Text style={styles.title}>Title</Text>
        {[...Array(10)].map((_, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.test}>Test</Text>
            <Text style={styles.index}>{10 - index}</Text>
          </View>
        ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  scrollContainer: {
    flex: 1,
    marginTop: 20,
  },
  centerContainer: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    backgroundColor: "#6495ED",
    color: "white",
    marginBottom: 20,
    textAlign: "center",
    paddingTop: 50,
    paddingBottom: 50,
    width: "100%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 25,
    backgroundColor: "#000080",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    width: "90%",
  },
  test: {
    fontSize: 16,
    color: "white",
  },
  index: {
    fontSize: 16,
    color: "white",
  },
});

export default Task1Component;
