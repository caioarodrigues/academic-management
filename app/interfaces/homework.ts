export default interface IHomework {
  id?: number;
  responsible: string;
  title: string;
  description: string;
  deadline: Date;
  done: boolean;
}