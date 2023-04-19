import { MaterialIcons } from "@expo/vector-icons";

import {
  ImageBackground,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/PhotoBG.jpg")}
        style={styles.image}
      >
        <View style={styles.profileBox}>
          <View style={styles.photoBox}>
            <Image style={styles.profilePhoto} />
          </View>
          <TouchableOpacity activeOpacity={0.8} style={styles.link}>
            <MaterialIcons
              style={styles.logoutIcon}
              name="logout"
              size={24}
              color="#BDBDBD"
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaeaea",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
  },
  profileBox: {
    flex: 0.85,
    position: "relative",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
  },
  photoBox: {
    position: "absolute",
    top: -60,
    alignSelf: "center",
    height: 120,
    width: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  profilePhoto: {
    flex: 1,
    borderRadius: 16,
  },
  logoutIcon: {
    marginTop: 22,
    right: 0,
    position: "absolute",
  },
  name: {
    marginTop: 65,
    fontFamily: "Montserrat-Bold",
    fontSize: 30,
    textAlign: "center",
  },
  bottomBox: {
    alignSelf: "center",
  },
  error: {
    marginTop: 20,
    alignSelf: "center",
    fontFamily: "Montserrat-Bold",
  },
  loader: {
    position: "absolute",
    left: 10,
    top: 22,
  },
});

export default ProfileScreen;
