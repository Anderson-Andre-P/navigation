import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Routes } from "./src/routes";
import "react-native-gesture-handler";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" translucent />
      <Routes />
    </View>
  );
}
