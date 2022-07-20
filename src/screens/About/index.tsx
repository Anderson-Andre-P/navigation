import React from "react";
import { Button, View } from "react-native";

export function About({ navigation }) {
  function openScreen() {
    navigation.navigate("home");
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button title="Ir para tela Home" onPress={openScreen} />
    </View>
  );
}
