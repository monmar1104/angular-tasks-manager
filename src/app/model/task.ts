export interface Task {
  _id?: {$oid: string};
  name: string;
  createDate: string;
  endDate?: string;
  isDone: boolean;
}
