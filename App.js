import React, { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { useRoute } from "./router";
import * as Font from "expo-font";

export default function App() {
  const routing = useRoute(false);

  const [fontsLoaded] = Font.useFonts({
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <NavigationContainer>{routing}</NavigationContainer>;
}
