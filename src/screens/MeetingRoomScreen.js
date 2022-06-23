import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Modal,
} from "react-native";
import StartMeeting from "../components/StartMeeting";
import { io } from "socket.io-client";
import { Camera } from "expo-camera";
import { Alert, ScrollView } from "react-native-web";
import { FontAwesome } from "@expo/vector-icons";
import Chat from "../components/Chat";

let socket;

const menuIcons = [
  { id: 1, name: "microphone", title: "Mute", customColor: "#EFEFEF" },
  { id: 2, name: "video-camera", title: "Stop Video" },
  { id: 3, name: "upload", title: "Share Content" },
  { id: 4, name: "group", title: "Participants" },
];

const MeetingRoomScreen = () => {
  const [name, setName] = useState();
  const [roomId, setRoomId] = useState();
  const [activeUsers, setActiveUsers] = useState([]);
  const [startCamera, setStartCamera] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const startCameraOn = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      setStartCamera(true);
    } else {
      Alert.alert("Access denied");
    }
  };

  const joinRoom = () => {
    startCameraOn();
    socket.emit("join-room", { roomId: roomId, userName: name });
  };

  useEffect(() => {
    socket = io("https://9b6a-116-206-35-4.ap.ngrok.io");
    socket.on("connection", () => console.log("connected"));
    socket.on("all-users", (users) => {
      console.log("Active Users");
      console.log(users);
      //   users = users.filter((user) => user.userName !== name);
      setActiveUsers(users);
    });
  }, []);

  return (
    <View style={styles.container}>
      {startCamera ? (
        <SafeAreaView style={{ flex: 1 }}>
          <Modal
            animationType="slide"
            transparent={false}
            presentationStyle={"fullScreen"}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Chat
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />
          </Modal>

          {/* Active Users */}
          <View style={styles.activeUsersContainer}>
            <View style={styles.cameraContainer}>
              <Camera
                type={"front"}
                style={{
                  width: activeUsers.length <= 1 ? "100%" : 180,
                  height: activeUsers.length <= 1 ? 600 : 180,
                }}
              ></Camera>
              {activeUsers
                .filter((user) => user.userName !== name)
                .map((item, index) => (
                  <View key={index} style={styles.activeUserContainer}>
                    <Text style={{ color: "#FFF" }}>{item.userName}</Text>
                  </View>
                ))}
            </View>
          </View>

          <View style={styles.footerMenu}>
            {menuIcons.map((icon, index) => (
              <TouchableOpacity key={index} style={styles.tile}>
                <FontAwesome name={icon.name} size={24} color="#efefef" />
                <Text style={styles.textTile}>{icon.title}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.tile}
              onPress={() => setModalVisible(true)}
            >
              <FontAwesome name={"comment"} size={24} color="#efefef" />
              <Text style={styles.textTile}>Chat</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      ) : (
        // Start Meeting Section
        <StartMeeting
          name={name}
          setName={setName}
          roomId={roomId}
          setRoomId={setRoomId}
          joinRoom={joinRoom}
        />
      )}
    </View>
  );
};

export default MeetingRoomScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
  },
  tile: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginTop: 15,
  },
  footerMenu: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  textTile: {
    color: "#FFF",
    marginTop: 10,
  },
  cameraContainer: {
    backgroundColor: "#000",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  activeUserContainer: {
    borderColor: "gray",
    borderWidth: 1,
    width: 180,
    height: 180,
    justifyContent: "center",
    alignItems: "center",
  },
  activeUsersContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
});
