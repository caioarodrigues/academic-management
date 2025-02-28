import { HomeworkDTO } from "../domain/dtos/homework";

export const homeworksData: HomeworkDTO[] = [
  {
    id: 1,
    responsible: "John Doe",
    title: "Math Homework",
    description: "Solve all the exercises from the book",
    deadline: new Date("2021-10-01"),
    done: false,
  },
  {
    id: 2,
    responsible: "Jane Doe",
    title: "History Homework",
    description: "Read the chapter 3 and answer the questions",
    deadline: new Date("2021-10-05"),
    done: false,
  },
  {
    id: 3,
    responsible: "John Doe",
    title: "Geography Homework",
    description: "Draw the map of the country",
    deadline: new Date("2021-10-10"),
    done: false,
  },
];