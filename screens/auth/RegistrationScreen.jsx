import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
  TouchableOpacity,
  Image,
} from "react-native";
import { useDispatch } from "react-redux";
import { authSignUpUser } from "../../redux/auth/authOperations";

import * as MediaLibrary from "expo-media-library";

export default function RegistrationScreen({ navigation }) {
  const dispatch = useDispatch();

  const initialState = {
    nickname: "",
    email: "",
    password: "",
    userPhoto:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
  };

  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [inputLoginBgColor, setInputLoginBgColor] = useState("#F8F8F8");
  const [inputEmailBgColor, setInputEmailBgColor] = useState("#F8F8F8");
  const [inputPasswordBgColor, setInputPasswordBgColor] = useState("#F8F8F8");

  const [state, setState] = useState(initialState);
  const [profilePhoto, setProfilePhoto] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
  );

  useEffect(() => {
    (async () => {
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  const handleKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleRegistration = () => {
    dispatch(authSignUpUser(state));
    setState(initialState);
  };

  const handleLoginFocus = () => {
    setInputLoginBgColor("#FF6C00");
  };

  const handleLoginBlur = () => {
    setInputLoginBgColor("#F8F8F8");
  };

  const handleEmailFocus = () => {
    setInputEmailBgColor("#FF6C00");
  };

  const handleEmailBlur = () => {
    setInputEmailBgColor("#F8F8F8");
  };

  const handlePasswordFocus = () => {
    setInputPasswordBgColor("#FF6C00");
  };

  const handlePasswordBlur = () => {
    setInputPasswordBgColor("#F8F8F8");
  };

  return (
    <TouchableWithoutFeedback onPress={handleKeyboard}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={-150}
      >
        <ImageBackground
          source={require("../../assets/images/Photo_BG.jpg")}
          style={styles.image}
        >
          <View style={styles.registrationBox}>
            <View style={styles.photoBox}>
              <Image
                style={styles.profilePhoto}
                source={{ uri: profilePhoto }}
              />
            </View>
            <Text style={styles.title}>Реєстрація</Text>
            <View style={styles.form}>
              <TextInput
                placeholder="Login"
                style={[styles.input, { borderColor: inputLoginBgColor }]}
                value={state.nickname}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, nickname: value }))
                }
                onFocus={handleLoginFocus}
                onBlur={handleLoginBlur}
                textAlign={"center"}
              />
              <TextInput
                placeholder="Email"
                style={[styles.input, { borderColor: inputEmailBgColor }]}
                value={state.email}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
                onFocus={handleEmailFocus}
                onBlur={handleEmailBlur}
                textAlign={"center"}
              />
              <TextInput
                placeholder="Password"
                secureTextEntry={true}
                style={[styles.input, { borderColor: inputPasswordBgColor }]}
                value={state.password}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, password: value }))
                }
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
                textAlign={"center"}
              />
              <View style={styles.btnsBox}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.btn}
                  onPress={handleRegistration}
                >
                  <Text style={styles.btnTitle}>Зареєструватися</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.link}
                  onPress={() => navigation.navigate("Login")}
                >
                  <Text style={styles.linkText}>
                    Вже є аккаунт? Авторизуватися
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

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
  registrationBox: {
    flex: 0.75,
    position: "relative",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  photoBox: {
    position: "absolute",
    top: -60,
    height: 120,
    width: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  profilePhoto: {
    flex: 1,
    borderRadius: 16,
  },
  addPhotoBtn: {
    position: "absolute",
    right: -15,
    bottom: 10,
  },
  form: {
    width: "100%",
    paddingHorizontal: 20,
  },
  btnsBox: {},
  title: {
    fontFamily: "Montserrat-Bold",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
  },
  input: {
    marginTop: 15,
    height: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#F8F8F8",
    borderRadius: 8,
  },
  btn: {
    height: 51,
    background: "#FF6C00",
    borderRadius: 10,
    borderWidth: 1,
    height: 40,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    ...Platform.select({
      ios: {
        backgroundColor: "#FF6C00",
        borderColor: "#f0f8ff",
      },
      android: {
        backgroundColor: "#FF6C00",
        borderColor: "transparent",
      },
    }),
  },
  btnTitle: {
    color: "#f0f8ff",
    fontSize: 18,
  },
  linkText: {
    marginTop: 16,
    textAlign: "center",
    color: "#1B4371",
    fontSize: 18,
  },
  loader: {
    position: "absolute",
    left: -54,
    bottom: 40,
  },
});
