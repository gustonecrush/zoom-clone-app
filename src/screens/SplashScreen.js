import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Home");
    }, 4000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/zoom-logo.png")}
        style={{ height: 120, width: 170 }}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
