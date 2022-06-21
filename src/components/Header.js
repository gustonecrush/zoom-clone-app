import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Entypo name="notification" size={30} color="#EFEFEF" />
      </TouchableOpacity>

      <Text style={styles.header}>Meet {"&"} Chat</Text>

      <TouchableOpacity>
        <Entypo name="new-message" size={30} color="#EFEFEF" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 25,
  },
  header: {
    color: "#EFEFEF",
    fontSize: 20,
    fontWeight: "700",
  },
});
