import React, { useCallback, useEffect, useState } from "react";

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
} from "react-native";

import * as Font from "expo-font";

function RegistrationScreen() {
  const [inputLoginBgColor, setInputLoginBgColor] = useState("#F8F8F8");
  const [inputEmailBgColor, setInputEmailBgColor] = useState("#F8F8F8");
  const [inputPasswordBgColor, setInputPasswordBgColor] = useState("#F8F8F8");

  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const [fontsLoaded] = Font.useFonts({
    "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
  });

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    console.log(1);
    return null;
  }

  const handleRegistration = () => {
    console.log(`Login:${login}, Email: ${email}, "Password": ${password}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ImageBackground
          source={require("../assets/images/PhotoBG.jpg")}
          style={styles.image}
        >
          <View style={styles.registrationBox}>
            <View style={styles.photoBox}></View>
            <Text style={styles.title}>Реєстрація</Text>
            <View style={styles.form}>
              <TextInput
                placeholder="Login"
                style={[styles.input, { borderColor: inputLoginBgColor }]}
                onChangeText={(text) => setLogin(text)}
                onFocus={() => setInputLoginBgColor("#FF6C00")}
                onBlur={() => setInputLoginBgColor("#F8F8F8")}
                textAlign={"center"}
              />
              <TextInput
                placeholder="Email"
                style={[styles.input, { borderColor: inputEmailBgColor }]}
                onChangeText={(text) => setEmail(text)}
                onFocus={() => setInputEmailBgColor("#FF6C00")}
                onBlur={() => setInputEmailBgColor("#F8F8F8")}
                textAlign={"center"}
              />
              <TextInput
                placeholder="Password"
                secureTextEntry={true}
                style={[styles.input, { borderColor: inputPasswordBgColor }]}
                onChangeText={(text) => setPassword(text)}
                onFocus={() => setInputPasswordBgColor("#FF6C00")}
                onBlur={() => setInputPasswordBgColor("#F8F8F8")}
                textAlign={"center"}
              />
              {!isKeyboardVisible && (
                <View>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.btn}
                    onPress={handleRegistration}
                  >
                    <Text style={styles.btnTitle}>Реєстрація</Text>
                  </TouchableOpacity>
                  <Text style={styles.link}>Вже є аккаунт? Ввійдіть</Text>
                </View>
              )}
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
  form: {
    width: "100%",
    paddingHorizontal: 20,
  },
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
        backgroundColor: "#4169e2",
        borderColor: "#f0f8ff",
      },
      android: {
        backgroundColor: "#4169e1",
        borderColor: "transparent",
      },
    }),
  },
  btnTitle: {
    color: "#f0f8ff",
    fontSize: 18,
  },
  link: {
    marginTop: 15,
    fontSize: 18,
    textAlign: "center",
  },
});

export default RegistrationScreen;