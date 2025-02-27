import React from "react";
import { Modal, View, Text, Button, StyleSheet } from "react-native";
import { HomeworkDTO } from "@/dtos/homework";

interface HomeworkDetailsModalProps {
  title: string;
  modalVisible: boolean;
  toggleModal: VoidFunction;
  homework: HomeworkDTO | null;
}

const HomeworkDetailsModal: React.FC<HomeworkDetailsModalProps> = ({
  title,
  modalVisible,
  toggleModal,
  homework,
}: HomeworkDetailsModalProps) => {
  return (
    <View
      style={(styles.container, { display: !modalVisible ? "flex" : "none" })}
    >
      <View
        style={styles.mainContent}
        // animationType="slide"
        // transparent={true}
        // visible={modalVisible}
        // onRequestClose={toggleModal}
      >
        <View style={styles.modalBackground}>
          <Text>{title}</Text>
          <View style={styles.modalContent}>
            {homework && (
              <View>
                <Text>Responsável: {homework.responsible}</Text>
                <Text>Título: {homework.title}</Text>
                <Text>Descrição: {homework.description}</Text>
                <Text>Prazo: {homework.deadline.toDateString()}</Text>
              </View>
            )}
            <Button title="Fechar" onPress={toggleModal} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    position: "absolute",
    marginTop: 16,
    zIndex: 10,
  },
  pressable: {
    backgroundColor: "a12e12",
    padding: 16,
  },
  mainContent: {
    position: "absolute",
    zIndex: 10,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "#ccc",
  },
  modalContent: {
    // width: 300,
    // padding: 20,
    // backgroundColor: "white",
    // borderRadius: 10,
    // alignItems: "center",
  },
});

export default HomeworkDetailsModal;
