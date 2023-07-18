import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const Task2Component = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.timerContainer}>
        <Text style={styles.timer}>{formatTime(time)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  timer: {
    fontSize: 45,
    fontWeight: "bold",
  },
  timerContainer: {
    width: 150,
    height: 65,
    borderRadius: 10,
    padding: 10,
  },
});

export default Task2Component;
