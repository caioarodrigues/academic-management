import { HomeworksContext } from "./homeworkContext";
import { HomeworkDTO } from "@/domain/dtos/homework";
import { homeworksData } from "@/data/homeworks";

interface HomeworkProviderProps {
  children: React.ReactNode;
}

export const HomeworkProvider = ({ children }: HomeworkProviderProps) => {
  return (
    <HomeworksContext.Provider value={homeworksData}>
      {children}
    </HomeworksContext.Provider>
  )
}