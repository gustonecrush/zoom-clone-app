import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const StartMeeting = ({ name, setName, roomId, setRoomId, joinRoom }) => {
  return (
    <View style={styles.startMeetinWrapper}>
      <View style={styles.info}>
        <TextInput
          value={name}
          style={styles.textInput}
          placeholder="Enter Name"
          placeholderTextColor="#767476"
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={styles.info}>
        <TextInput
          value={roomId}
          onChangeText={(text) => setRoomId(text)}
          placeholder="Enter Room ID"
          placeholderTextColor="#767476"
          style={styles.textInput}
        />
      </View>

      <View style={{ alignItems: "center" }}>
        <TouchableOpacity onPress={() => joinRoom()} style={styles.startMeetingBtn}>
          <Text style={{ color: "#FFF", fontWeight: "bold", fontSize: 15 }}>
            Start Meeting
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StartMeeting;

const styles = StyleSheet.create({
  startMeetinWrapper: {
    marginTop: 25,
  },
  info: {
    width: "100%",
    backgroundColor: "#373538",
    height: 50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#484648",
    padding: 12,
    justifyContent: "center",
  },
  textInput: {
    color: "#FFF",
    fontSize: 16,
  },
  startMeetingBtn: {
    width: 350,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 15,
    backgroundColor: "#0470DC",
  },
});
