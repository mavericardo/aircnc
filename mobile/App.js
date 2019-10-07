import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Routes from "./src/routes";

import { YellowBox } from "react-native";

YellowBox.ignoreWarnings(["Unrecognized WebSocket"]);

export default function App() {
  return <Routes />;
}
