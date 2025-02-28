import React, { createContext, useContext, useState, useEffect } from "react";
import { HomeworkRepository } from "@/domain/repositories/HomeworkRepository";
import { Homework } from "@/domain/Homework";
import { InMemoryHomeworkRepository } from "@/infra/repositories/InMemoryHomeworkRepository";
import { CreateHomeworkDTO } from "@/domain/dtos/homework";
import { homeworksData } from "@/data/homeworks";

interface HomworksContextType {
  homeworks: Homework[];
  getHomeworks: () => Homework[];
  createHomework: (data: CreateHomeworkDTO) => void;
  updateHomework: (id: number, data: Partial<Homework>) => void;
  deleteHomework: (id: number) => void;
  getCurrentWeekHomeworks: () => Homework[];
}

interface HomeworksProviderProps {
  children: React.ReactNode;
}

const HomeworksContext = createContext<HomworksContextType>(
  {} as HomworksContextType
);

export const HomeworksProvider = ({ children }: HomeworksProviderProps) => {
  const repository: HomeworkRepository = new InMemoryHomeworkRepository();
  const [currentHomeworks, setCurrentHomeworks] = useState<Homework[]>([]);

  const loadHomeworks = async () => {
    const data = await repository.findAll();
    setCurrentHomeworks(data);
  };

  useEffect(() => {
    console.log("Carregando homeworks");
    loadHomeworks();
  }, []);

  const getHomeworks = () => currentHomeworks;

  const createHomework = async (data: CreateHomeworkDTO) => {
    const newHomework = await repository.create(data);
    setCurrentHomeworks(prev => [...prev, newHomework]);
    //loadHomeworks();

    await repository.findAll().then(console.log);
  };

  const updateHomework = async () => {};

  const deleteHomework = async () => {};

  const getCurrentWeekHomeworks = () => {
    const today = new Date();
    const startOfWeek = new Date(
      today.setDate(today.getDate() - today.getDay())
    );
    const endOfWeek = new Date(
      today.setDate(today.getDate() - today.getDay() + 6)
    );

    return currentHomeworks.filter(
      (activity) =>
        new Date(activity.deadline) >= startOfWeek &&
        new Date(activity.deadline) <= endOfWeek
    );
  };

  return (
    <HomeworksContext.Provider
      value={{
        homeworks: currentHomeworks,
        getHomeworks,
        createHomework,
        updateHomework,
        deleteHomework,
        getCurrentWeekHomeworks,
      }}
    >
      {children}
    </HomeworksContext.Provider>
  );
};

export const useHomeworks = () => useContext(HomeworksContext);
