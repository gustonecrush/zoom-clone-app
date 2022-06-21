import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Fontisto } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Fontisto name="search" size={20} color="#858585" />
      <Text style={styles.textSearchBar}>Search</Text>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flexDirection: "row",
    backgroundColor: "#333",
    paddingHorizontal: 10,
    height: 40,
    alignItems: "center",
    borderRadius: 10,
  },
  textSearchBar: {
    color: '#858585',
    paddingLeft: 10,
    fontSize: 17,
  },
});
