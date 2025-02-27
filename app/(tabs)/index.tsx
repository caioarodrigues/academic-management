import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { FlatList } from "react-native";
import Question from "react-native-bootstrap-icons/icons/question";
import { Grid, Row, Col } from "react-native-easy-grid";
import HomeworkDetailsModal from "@/components/HomeworkDetailsModal";
import { useState } from "react";
import { HomeworkDTO } from "../../dtos/homework";
import HomeworkService from "@/services/homework.service";

export default function TabOneScreen() {
  const [modalOpen, setModalOpen] = useState(false);
  const homeworkService = HomeworkService.getInstance();
  const homeworkList = homeworkService.listHomeworks();
  const [selectedHomework, setSelectedHomework] = useState<HomeworkDTO | null>(null);
  const toggleModal = () => setModalOpen((state) => !state);
  const handleDetails = (homework: HomeworkDTO) => {
    setSelectedHomework(homework);
    toggleModal();
  }

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
      <HomeworkDetailsModal
        modalVisible={modalOpen}
        toggleModal={toggleModal}
        title="Detalhes da atividade"
        homework={selectedHomework}
      />
      <FlatList
        style={styles.homeworkList}
        data={homeworkList}
        renderItem={({ item: { title, description }, index }) => (
          <View>
            <Grid>
              <Row>
                <Col>
                  <Text style={styles.homeworkTitle}>{title}</Text>
                  <Text>{description}</Text>
                </Col>
                <Col
                  style={{
                    width: "auto",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Question
                    width={32}
                    height={32}
                    fill={"#000"}
                    onPress={() => handleDetails(homeworkList[index])}
                  />
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
