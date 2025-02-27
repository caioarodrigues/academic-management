import { HomeworksContext } from "@/context/homework/homeworkContext";
import { useContext } from "react";
import { HomeworkDTO, CreateHomeworkDTO } from "@/dtos/homework";

export default class HomeworkService {
  private static _instance: HomeworkService;
  private _homeworksContext = useContext(HomeworksContext);
  private constructor() {}

  public static getInstance(): HomeworkService {
    if (!this._instance) {
      this._instance = new HomeworkService();
    }
    return this._instance;
  }

  public listHomeworks() {
    return this._homeworksContext;
  }

  public listHomeworkById(id: number): HomeworkDTO | null {
    const homework = this._homeworksContext.find((homework) => homework.id === id);
    
    return homework || null;
  }

  public addHomework(homework: CreateHomeworkDTO): HomeworkDTO {
    const id = this._homeworksContext.length + 1;
    const newHomework: HomeworkDTO = { ...homework, id, done: false };

    this._homeworksContext.push(newHomework);
    return newHomework;
  }

  public updateHomework(homework: HomeworkDTO): HomeworkDTO {
    const index = this._homeworksContext.findIndex((homework) => homework.id === homework.id);
    this._homeworksContext[index] = homework;
    return homework;
  }

  public deleteHomework(id: number): HomeworkDTO {
    const index = this._homeworksContext.findIndex((homework) => homework.id === id);
    this._homeworksContext.splice(index, 1);

    return this._homeworksContext[index];
  }
}