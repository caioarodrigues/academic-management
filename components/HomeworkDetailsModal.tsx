import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { HomeworkDTO } from "@/domain/dtos/homework";
import { BlurView } from "expo-blur";

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
}) => {
  if (!modalVisible) return null;

  return (
    <BlurView intensity={50} tint="dark" style={styles.container}>
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
          <View style={styles.buttonRow}>
            <Button title="Concluir" onPress={toggleModal} />
            <Button title="Fechar" onPress={toggleModal} />
            <Button title="Editar" onPress={toggleModal} />
            <Button color="red" title="Excluir" onPress={toggleModal} />
          </View>
        </View>
      </View>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
  },
  modalBackground: {
    width: "90%",
    padding: 16,
    borderRadius: 4,
    backgroundColor: "#ccc",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  modalContent: {
    marginTop: 8,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16,
  },
});

export default HomeworkDetailsModal;
