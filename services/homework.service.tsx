import { HomeworksContext } from "@/context/homework/homeworkContext";
import { useContext } from "react";
import { HomeworkDTO, CreateHomeworkDTO } from "@/dtos/homework";

export default class HomeworkService {
  private static _instance: HomeworkService;
  private constructor() {}

  public static getInstance(): HomeworkService {
    if (!this._instance) {
      this._instance = new HomeworkService();
    }
    return this._instance;
  }

  public listHomeworks() {
    return useContext(HomeworksContext);
  }

  public listHomeworkById(id: number): HomeworkDTO | null {
    const homeworksContext = useContext(HomeworksContext);
    const homework = homeworksContext.find((homework) => homework.id === id);
    
    return homework || null;
  }

  public addHomework(homework: CreateHomeworkDTO): HomeworkDTO {
    const homeworksContext = useContext(HomeworksContext);
    const id = homeworksContext.length + 1;
    const newHomework: HomeworkDTO = { ...homework, id, done: false };

    homeworksContext.push(newHomework);
    return newHomework;
  }

  public updateHomework(homework: HomeworkDTO): HomeworkDTO {
    const homeworksContext = useContext(HomeworksContext);
    const index = homeworksContext.findIndex((homework) => homework.id === homework.id);
    homeworksContext[index] = homework;
    return homework;
  }

  public deleteHomework(id: number): HomeworkDTO {
    const homeworksContext = useContext(HomeworksContext);
    const index = homeworksContext.findIndex((homework) => homework.id === id);
    homeworksContext.splice(index, 1);

    return homeworksContext[index];
  }
}