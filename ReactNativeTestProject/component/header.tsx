import React from "react";
import { Text, View } from "react-native";
import { headerStyles } from "../styles/styles";

export default function Header() {
  return (
    <View style={headerStyles.header}>
      <Text style={headerStyles.title}>My Todos</Text>
    </View>
  );
}
