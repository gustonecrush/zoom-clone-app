import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const contactsMenuButtons = [
  { type: "starred", name: "Starred" },
  {
    type: "contact",
    name: "Ghifari Sholeh",
    photo: "https://i.scdn.co/image/ab67616d0000b2737815a98b22b6914a45263190",
  },
  {
    type: "contact",
    name: "Zahra Ayfa",
    photo: "https://i.scdn.co/image/ab6761610000e5eb05cead99b1a81b82a9a42838",
  },
  {
    type: "contact",
    name: "Muhammad Rifqi",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcrxa_7BJaBZd39Hooz1tYCSd9UmnoZFv3vBbjvXV6K8pttDuGr_It2q-A4LuXgYLiN4o&usqp=CAU",
  },
  // {
  //   type: "contact",
  //   name: "Noobmaster69",
  //   photo:
  //     "https://pbs.twimg.com/profile_images/1537677628039380992/i3uUfk-Z_400x400.jpg",
  // },
];

const ContactsMenu = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} vertical>
        {/* Contact Container */}
        {contactsMenuButtons.map((contact, index) => (
          <View style={styles.row}>
            {/* Image */}
            {contact.type === "starred" ? (
              <View style={styles.starredIcon}>
                <AntDesign name="star" size={30} color={"#EFEFEF"} />
              </View>
            ) : (
              <Image source={{ uri: contact.photo }} style={styles.img} />
            )}

            {/* Text */}
            <TouchableOpacity>
              <Text style={styles.text}>{contact.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactsMenu;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  starredIcon: {
    width: 55,
    height: 55,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  text: {
    color: "#FFF",
    paddingLeft: 15,
    fontSize: 16,
  },
  img: {
    width: 55,
    height: 55,
    borderRadius: 20,
  },
});
