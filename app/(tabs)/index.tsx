import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { ScrollView } from "react-native";
import { FlatList } from "react-native";
import { homeworksData } from "../data/homeworks";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.tabMessage}>
        <Text style={styles.title}>Listagem</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
      </View>
      <FlatList
        style={styles.homeworkList}
        data={homeworksData}
        renderItem={({ item: { title, description } }) => (
          <View>
            <Text style={styles.homeworkTitle}>{title}</Text>
            <Text>{description}</Text>
          </View>
        )}
      />
      <ScrollView></ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  homeworkList: {
    backgroundColor: "#f9f9f9",
    width: "100%",
    gap: 16,
    flex: 1,
    flexDirection: "column",
  },
  homeworkTitle: {
    fontSize: 16,
    fontWeight: "normal",
    textAlign: "left",
  },
  tabMessage: {
    width: "90%",
    paddingTop: 16,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "normal",
  },
  separator: {
    marginVertical: 10,
    height: 2,
  },
});
