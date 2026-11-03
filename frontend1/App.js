import React, { useState } from "react";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { CheckBox } from "expo-checkbox";

import HomeScreen from "./screens/Homescreen";
import Koleksioni from "./screens/Koleksioni";

export default function App() {
  const [faqja, setFaqja] = useState("home");

  const [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (fontError) {
    throw fontError;
  }

  if (!fontsLoaded) {
    return null;
  }

  return faqja === "home" ? (
    <HomeScreen ndryshoFaqen={setFaqja} />
  ) : (
    <Koleksioni ndryshoFaqen={setFaqja} />
  );
}