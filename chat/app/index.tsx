import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeScreen = () => {
  const pingBackend = async () => {
    const res = await fetch("http://10.212.240.61:3000");
    const data = await res.text();
    console.log(data);
  };
  return (
    <View>
      <Text>HomeScreen</Text>
      <Pressable style={styles.btn} onPress={pingBackend}>
        <Text style={{ color: "white" }}>ping backend</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#333",
  },
});
