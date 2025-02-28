import { CreateHomeworkDTO, HomeworkResponseDTO } from "../dtos/homework";

export interface HomeworkRepository {
  create(data: CreateHomeworkDTO): Promise<HomeworkResponseDTO>;
  update(id: number, data: Partial<HomeworkResponseDTO>): Promise<HomeworkResponseDTO>;
  delete(id: number): Promise<void>;
  findAll(): Promise<HomeworkResponseDTO[]>;
  findById(id: number): Promise<HomeworkResponseDTO | undefined>;
}