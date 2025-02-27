import HomeworkForm from "@/components/HomeworkForm";
import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { ScrollView } from "react-native";

export default function TabTwoScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Adicionar tarefa</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <HomeworkForm />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
