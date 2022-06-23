import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const items = [
  {
    id: 1,
    name: "video-camera",
    title: "New Meeting",
    customColor: "#FF7215",
  },
  { id: 2, name: "plus-square", title: "Join" },
  { id: 3, name: "calendar", title: "Schedule" },
  { id: 4, name: "upload", title: "Share Screen" },
];

const MenuButtons = ({ navigation }) => {
  const openMeeting = () => {
    navigation.navigate('Room');
  };

  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View style={styles.buttonContainer} key={index}>
          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor: item.customColor ? item.customColor : "#0470DC",
            }}
            onPress={() => openMeeting()}
          >
            <FontAwesome name={item.name} size={23} color="#EFEFEF" />
          </TouchableOpacity>
          <Text style={styles.buttonText}>{item.title}</Text>
        </View>
      ))}
    </View>
  );
};

export default MenuButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 25,
    paddingBottom: 10,
    borderBottomColor: "#1f1f1f",
    borderBottomWidth: 1,
    justifyContent: "space-between",
    // alignItems: "center",
    // paddingHorizontal: 10,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: "blue",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#e5e5e5",
    fontSize: 12,
    paddingTop: 10,
    fontWeight: "600",
  },
});
