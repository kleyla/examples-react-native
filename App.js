import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styles } from "./src/styles";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola!</Text>
      <MyPrimerComponente name={"Karen"} carrera={"sis"} />
      <MyPrimerComponente name={"Diana"} />
      <MyPrimerComponente name={"Jorge"} />
      <Card>
        <Text>Contenido hijo</Text>
      </Card>
    </View>
  );
}
// props
const MyPrimerComponente = ({ name, carrera = "Redes" }) => {
  return (
    <View style={styles.misEstilos}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Hola {name}!</Text>
      <Text>Carrera {carrera} !</Text>
    </View>
  );
};

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};
