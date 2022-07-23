import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";

const { Screen, Navigator } = createDrawerNavigator();

import { Home } from "../screens/Home";
import { About } from "../screens/About";

export function DrawerRoutes() {
  return (
    <Navigator>
      <Screen
        name="home"
        component={Home}
        options={{
          drawerLabel: "Home",
          drawerIcon: () => <MaterialIcons name="home" size={22} />,
        }}
      />
      <Screen name="about" component={About} />
    </Navigator>
  );
}
