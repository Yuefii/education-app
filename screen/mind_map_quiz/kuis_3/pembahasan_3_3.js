import { StyleSheet, Pressable, Text, SafeAreaView, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Pembahasan_3_3() {
  const navigation = useNavigation();
  const imgSource = '../../../assets/quiz/kuis_3/pembahasan_3_3.png'
  const url = 'kuis_3_soal_4'
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require(imgSource)} style={styles.imageContainer}>
        <Pressable style={styles.textContainer} onPress={()=> navigation.navigate(url)}>
          <Text style={styles.text}>Lanjut</Text>
        </Pressable>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  imageContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    paddingLeft: 30
  },
  textContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#D9D9D9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  text: {
    fontSize: 16,
  },
});
