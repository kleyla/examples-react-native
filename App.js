import { useState } from "react";
import {
  Button,
  Dimensions,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { styles } from "./src/styles";

const width = Dimensions.get("window").width;

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola!</Text>
      <MiFormulario />
    </View>
  );
}

const MiFormulario = () => {
  const [texto, settexto] = useState("");
  const [lista, setlista] = useState([]);
  const [isRefreshig, setisRefreshig] = useState(false);

  console.log("exa", texto);

  const miFuncion = () => {
    console.log("miFuncion");
    setlista([...lista, texto]);
    settexto("");
  };

  const cargar = () => {
    console.log("refresh");
    setlista([]);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={isRefreshig} onRefresh={cargar} />
      }
    >
      <TextInput
        value={texto}
        onChangeText={settexto}
        style={stylesForm.input}
      />
      <Button title="Evento" onPress={miFuncion} />
      <View>
        {lista.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </View>
    </ScrollView>
  );
};

const stylesForm = StyleSheet.create({
  input: {
    // backgroundColor: "yellow",
    padding: 12,
    width: width - 40,
    borderColor: "black",
    borderWidth: 1,
    fontSize: 30,
    marginBottom: 20,
  },
});
