import { HomeworksContext } from "./homeworkContext";
import { useContext } from "react";

export const useListHomeworks = () => {
    const homeworks = useContext(HomeworksContext);

    if (!homeworks) throw new Error("No homeworks found");

    return homeworks;
}