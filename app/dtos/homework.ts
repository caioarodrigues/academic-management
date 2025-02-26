interface HomeworkBaseDTO {
  responsible: string;
  title: string;
  description: string;
  deadline: Date;
}

export interface HomeworkDTO extends HomeworkBaseDTO {
  id: number;
  done: boolean;
}

export interface CreateHomeworkDTO extends HomeworkBaseDTO {}

export interface UpdateHomeworkDTO extends HomeworkBaseDTO {
  id: number;
  done: boolean;
}

export interface HomeworkListDTO {
  homeworks: HomeworkDTO[];
}

export interface HomeworkResponseDTO extends HomeworkDTO {
  id: number;
  done: boolean;
}