import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import image from "../../../assets/penerapan/keamanan2_6.jpg";

export default function Page6() {
  const home = () => {
    navigation.navigate("Materi/Pages8/BidangKeamanan");
  };
  const previous = () => {
    navigation.navigate("Materi/Pages8/PageKeamanan2_4");
  };
  const navigation = useNavigation();
  return (
    // <Te
    <View style={styles.Container}>
      <ImageBackground
        source={image}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.flex}>
          <Pressable style={styles.buttonNext} onPress={home}>
            <Text style={styles.text}>Next</Text>
          </Pressable>
          <Pressable style={styles.buttonPrevious} onPress={previous}>
            <Text style={styles.text}>Back </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    margin: 10,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  flex: {
    flex: 1,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  buttonNext: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
  },
  buttonPrevious: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});
