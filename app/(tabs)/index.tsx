import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { ScrollView } from "react-native";
import { FlatList } from "react-native";
import { homeworksData } from "../data/homeworks";
import CheckCircleFill from "react-native-bootstrap-icons/icons/check-circle-fill";
import Pencil from "react-native-bootstrap-icons/icons/pencil";
import Trash from "react-native-bootstrap-icons/icons/trash";
import Question from "react-native-bootstrap-icons/icons/question";
import { Grid, Row, Col } from 'react-native-easy-grid';

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
            <Grid>
              <Row>
                <Col>
                  <Text style={styles.homeworkTitle}>{title}</Text>
                  <Text>{description}</Text>
                </Col>
                <Col style={{ width: "auto", flexDirection: "row" }}>
                  <Pencil width={32} height={32} fill={"#000"} />
                  <Trash width={32} height={32} fill={"#000"} />
                  <Question width={32} height={32} fill={"#000"} />
                </Col>
              </Row>
            </Grid>
          </View>
        )}
        contentContainerStyle={{ gap: 10 }}
      />
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
