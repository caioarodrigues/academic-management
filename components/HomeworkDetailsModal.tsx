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
    <>
      {modalVisible && (
        <View style={styles.container}>
          <View style={styles.mainContent}>
            <View style={styles.modalBackground}>
              <Text style={styles.title}>{title}</Text>
              <View style={styles.modalContent}>
                {homework && (
                  <View>
                    <Text>Responsável: {homework.responsible}</Text>
                    <Text>Título: {homework.title}</Text>
                    <Text>Descrição: {homework.description}</Text>
                    <Text>Prazo: {homework.deadline.toDateString()}</Text>
                  </View>
                )}
                <View style={{ flexDirection: "row", gap: 8, marginTop: 8 }}>
                  <Button title="Concluir" onPress={toggleModal} />
                  <Button title="Fechar" onPress={toggleModal} />
                  <Button title="Editar" onPress={toggleModal} />
                  <Button title="Excluir" onPress={toggleModal} />
                </View>
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  container: {
    flex: 1,
    alignItems: "center",
    height: "100%",
    position: "absolute",
    marginTop: 16,
    width: "100%",
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
    padding: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
  },
  modalContent: {
    fontSize: 16,
  },
});

export default HomeworkDetailsModal;
