import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

const ChatHeader = ({ setModalVisible }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => setModalVisible(false)}>
        <Text style={styles.buttonText}>Close</Text>
      </Pressable>
      <Text style={styles.heading}>Chat</Text>
      <Entypo name="bell" size={25} color={"#efefef"} />
    </View>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '600'
  },
  heading: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
  }
});
