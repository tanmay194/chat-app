import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { authClient } from "@/utils/auth-client";
import { useAuth } from "@/contexts/auth-context";

const HomeScreen = () => {
  const pingBackend = async () => {
    const res = await fetch("http://10.255.187.61:3000");
    const data = await res.text();
    console.log(data);
  };
  const {signOut} = useAuth()
  return (
    <View style = {styles.container}>
      <Pressable onPress={() => signOut()}>
        <Text>sign out</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#333",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text : {
    margin : 30
  }
});
