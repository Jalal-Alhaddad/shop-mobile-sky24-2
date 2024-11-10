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
import { fetchProducts } from "../utils/api";

export default function ShopViewScreen(props) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError("Unable to fetch data, offline mode");
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Shop View Screen</Text>
      {products.map((product) => (
              <Text key={product.id}>{product.name}</Text>
            ))}
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
