import { createContext } from "react";
import { HomeworkDTO } from "@/dtos/homework";

export const HomeworksContext = createContext<HomeworkDTO[]>([]);