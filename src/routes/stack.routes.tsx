import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator();

import { Home } from "../screens/Home";
import { About } from "../screens/About";

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name="home"
        component={Home}
        options={{
          title: "Tela inicial",
          headerTitleAlign: "center",
          headerShown: false,
        }}
      />
      <Screen
        name="about"
        component={About}
        options={{
          title: "Tela sobre",
          headerStyle: { backgroundColor: "white" },
          headerTintColor: "#222",
        }}
      />
    </Navigator>
  );
}
