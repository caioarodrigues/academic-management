import React from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CreateHomeworkDTO } from "@/domain/dtos/homework";
import { useHomeworks } from "@/presentation/contexts/HomeworkContext";

const schema = yup.object().shape({
  responsible: yup.string().required("Responsável é obrigatório"),
  title: yup.string().required("Título é obrigatório"),
  description: yup.string().required("Descrição é obrigatória"),
  deadline: yup
    .date()
    .required("Prazo é obrigatório")
    .test('is-valid', 'Data inválida', (value) => 
      value instanceof Date && !isNaN(value.getTime())
    ),
});

const HomeworkForm: React.FC = () => {
  const { createHomework } = useHomeworks();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateHomeworkDTO>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<CreateHomeworkDTO> = async (data) => {
    try {
      await createHomework(data);
      Alert.alert("Sucesso", "Nova tarefa cadastrada com sucesso!", [
        {
          text: "OK",
          onPress: () => {
            reset({
              responsible: "",
              title: "",
              description: "",
              deadline: undefined,
            });
          },
        },
      ]);
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro ao criar a tarefa");
    }
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="responsible"
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              placeholder="Responsável"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={[
                styles.input,
                { borderColor: errors.responsible ? "red" : "black" },
              ]}
            />
            {errors.responsible && (
              <Text style={styles.errorText}>{errors.responsible.message}</Text>
            )}
          </>
        )}
      />

      <Controller
        control={control}
        name="title"
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              placeholder="Título"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={[
                styles.input,
                { borderColor: errors.title ? "red" : "black" },
              ]}
            />
            {errors.title && (
              <Text style={styles.errorText}>{errors.title.message}</Text>
            )}
          </>
        )}
      />

      <Controller
        control={control}
        name="description"
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              placeholder="Descrição"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={[
                styles.input,
                { borderColor: errors.description ? "red" : "black" },
              ]}
            />
            {errors.description && (
              <Text style={styles.errorText}>{errors.description.message}</Text>
            )}
          </>
        )}
      />

<Controller
        control={control}
        name="deadline"
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              placeholder="Prazo (YYYY-MM-DD)"
              onBlur={onBlur}
              onChangeText={(text) => onChange(text ? new Date(text) : null)}
              value={
                value && !isNaN(new Date(value).getTime())
                  ? new Date(value).toISOString().split('T')[0]
                  : ''
              }
              style={[
                styles.input,
                { borderColor: errors.deadline ? "red" : "black" },
              ]}
            />
            {errors.deadline && (
              <Text style={styles.errorText}>{errors.deadline.message}</Text>
            )}
          </>
        )}
      />

      <View style={{ alignSelf: "flex-end" }}>
        <Button title="Enviar" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginBottom: 12,
    borderRadius: 4,
  },
  errorText: {
    color: "red",
    marginBottom: 8,
  },
});

export default HomeworkForm;