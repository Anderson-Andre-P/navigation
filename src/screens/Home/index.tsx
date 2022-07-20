import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, View } from "react-native";

export function Home() {
  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate("about");
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button title="Ir para tela About" onPress={openScreen} />
    </View>
  );
}
