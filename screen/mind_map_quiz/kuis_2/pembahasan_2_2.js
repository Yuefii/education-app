import { View, Text, StyleSheet } from 'react-native'
import ButtonNext from '../../../components/ButtonNext';

const data = [
  {
    id: '1',
    desc: 'Diluar nukleus (inti atom), terdapat elektron yang bermuatan negatif. Elektron mengelilingi nukleus dalam orbit atau tingkat energi tertentu, sementara proton dan neutron berada dalam nukleus. Proton memiliki muatan positif, sedangkan neutron tidak memiliki muatan (netral).'
  }
]
export default function Pembahasan_2_2() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pembahasan:</Text>
      {data.map((item) => (
        <View key={item.id}>
          <Text style={styles.text_description}>{item.desc}</Text>
        </View>
      ))
      }
      <ButtonNext url='kuis_2_soal_3' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 30,
    textAlign: "left",
    marginTop: 10,
    paddingHorizontal: 20,
  },
  img: {
    width: 200,
    height: 250
  },
  flex: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 20
  },
  text_description: {
    width: "100%",
    fontSize: 20,
    textAlign: 'justify',
    paddingVertical: 10,
  },
});