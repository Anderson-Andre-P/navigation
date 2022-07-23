import React from "react";
import { Button, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

type ParamsProps = {
  name: string;
};

export function About() {
  function openScreen() {
    navigation.navigate("home");
  }

  const navigation = useNavigation();

  const route = useRoute();

  const { name } = route.params as ParamsProps;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button title={"Nome: " + name} onPress={() => navigation.goBack()} />
    </View>
  );
}
