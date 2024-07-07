import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Answer2() {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <Text style={styles.Text}>Pembahasan soal 2</Text>
      <Button
        title="Soal Selanjutnya"
        onPress={() => navigation.navigate("Page3_6")}
      >
        /
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    marginTop: 25,
    padding: 20,
  },
  Text: {
    fontSize: 40,
    textAlign: "center",
  },
});
