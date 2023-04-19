import { MaterialIcons } from "@expo/vector-icons";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const DefaultPostsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topBox}>
        <TouchableOpacity activeOpacity={0.8} style={styles.updateIcon}>
          <MaterialIcons name="update" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Publications</Text>

        <TouchableOpacity activeOpacity={0.8} style={styles.link}>
          <MaterialIcons
            style={styles.logoutIcon}
            name="logout"
            size={24}
            color="#BDBDBD"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  topBox: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    height: 88,

    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
  },
  title: {
    position: "relative",
    fontFamily: "Montserrat-Bold",
    fontSize: 17,
    marginBottom: 11,
  },
  loader: {
    position: "absolute",
    left: "70%",
    bottom: "13%",
  },
  updateIcon: {
    marginRight: "auto",
    marginBottom: 10,
  },
  logoutIcon: {
    marginLeft: 103,
    marginBottom: 12,
  },
  bottomBox: {
    marginTop: 5,
    alignSelf: "center",
  },
  userBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  userPhoto: {
    borderRadius: 16,
    width: 60,
    height: 60,
  },
  userInformation: {
    marginLeft: 8,
  },
  userName: {
    fontFamily: "Montserrat-Bold",
    fontSize: 13,
  },
  userMail: {
    fontFamily: "Montserrat-Regular",
    fontSize: 13,
  },
});

export default DefaultPostsScreen;
