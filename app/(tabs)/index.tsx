import { Button, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { FlatList } from "react-native";
import Question from "react-native-bootstrap-icons/icons/question";
import { Grid, Row, Col } from "react-native-easy-grid";
import HomeworkDetailsModal from "@/components/HomeworkDetailsModal";
import { useEffect, useState } from "react";
import { HomeworkDTO } from "../../domain/dtos/homework";
import { useHomeworks } from "@/presentation/contexts/HomeworkContext";
import { useIsFocused } from "@react-navigation/native";

export default function TabOneScreen() {
  const [modalOpen, setModalOpen] = useState(false);
  //const homeworkList = useContext(HomeworksContext);
  const { createHomework, homeworks, getHomeworks } = useHomeworks();
  const [selectedHomework, setSelectedHomework] = useState<HomeworkDTO | null>(
    null
  );
  const toggleModal = () => setModalOpen((state) => !state);
  const handleDetails = (homework: HomeworkDTO) => {
    setSelectedHomework(homework);
    toggleModal();
  };

  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
    }
  }, [isFocused]);

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
        data={homeworks}
        renderItem={({ item: { title, description }, index }) => (
          <View key={index}>
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
                  <Button
                    title="Detalhes"
                    color={"#000"}
                    onPress={() => handleDetails(homeworks[index])}
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
    width: "90%",
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
