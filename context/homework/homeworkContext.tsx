import { createContext } from "react";
import { HomeworkDTO } from "@/domain/dtos/homework";

export const HomeworksContext = createContext<HomeworkDTO[]>([]);