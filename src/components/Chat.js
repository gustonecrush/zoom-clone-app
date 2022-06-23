import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import ChatHeader from "./ChatHeader";
import { FontAwesome } from "@expo/vector-icons";

const Chat = ({ modalVisible, setModalVisible }) => {
  const [messageText, setMessageText] = useState();

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ height: "100%" }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <>
              <ChatHeader setModalVisible={setModalVisible} />
              {/* <ChatMessages /> */}
              <View style={styles.chatMessages}></View>
              {/* Type Messages */}
              <View style={styles.chatFormContainer}>
                <Text style={{ color: "#FFF" }}>Send to : Everyone</Text>
                <View style={styles.chatForm}>
                  <TextInput
                    value={messageText}
                    onChangeText={(text) => setMessageText(text)}
                    style={styles.textInput}
                    placeholder="Tap here to chat"
                    placeholderTextColor={"#595859"}
                  />
                  <TouchableOpacity
                    style={{
                      ...styles.button,
                      backgroundColor: messageText ? "#0B71EB" : '"#373838"',
                    }}
                  >
                    <FontAwesome name="send" size={18} color="#EFEFEF" />
                  </TouchableOpacity>
                </View>
              </View>
            </>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
  },
  chatMessages: {
    flex: 1,
  },
  chatFormContainer: {
    borderColor: "#2f2f2f",
    borderTopWidth: 1,
    padding: 12,
  },
  textInput: {
    height: 40,
    color: "#EFEFEF",
    borderColor: "#595859",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 12,
    flex: 1,
    padding: 10,
  },
  chatForm: {
    flexDirection: "row",
  },
  button: {
    height: 40,
    width: 40,
    marginTop: 12,
    marginLeft: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
