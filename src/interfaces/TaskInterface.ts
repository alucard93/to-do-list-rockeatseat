export interface ITask {
  id: string
  title?: string
  isComplete?: boolean
}

export interface ITasksProps {
  tasks: ITask[]
  setTask: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export interface IButtonTaskProps {
  task: ITask;
  setTask: React.Dispatch<React.SetStateAction<ITask[]>>;
  tasks: ITask[]
}

export interface ITopTaskProps {
  task: ITask[];
}