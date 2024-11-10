import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import {
  Avatar,
  Text,
  Surface,
  TextInput,
  Button,
  IconButton,
  Divider,
  Searchbar,
} from "react-native-paper";

export default function ShopViewScreen(props) {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Shop View Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});