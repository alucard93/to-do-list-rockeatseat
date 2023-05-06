import { useState } from "react";

import { Header } from "../../components/Header/Header";
import { Form } from "../../components/Form/Form";
import { HomeStyled } from "./style";
import { Task } from "../../components/Task/Task";

import { v4 as uuidv4 } from "uuid";

import { ITask } from "../../interfaces/TaskInterface";

let tasks: ITask[] = [
  {
    id: uuidv4(),
    title:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isComplete: false,
  },
  {
    id: uuidv4(),
    title:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isComplete: false,
  },
  {
    id: uuidv4(),
    title:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isComplete: false,
  },
  {
    id: uuidv4(),
    title:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isComplete: true,
  },
  {
    id: uuidv4(),
    title:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isComplete: true,
  },
];

export const Home = () => {
  const [task, setTask] = useState<ITask[]>(tasks)
  return (
    <HomeStyled>
      <Header />
      <main className="content">
        <section className="container">
          <div className="content-form">
            <Form task={task} setTask={setTask} />
          </div>
          <div className="content-task">
            <Task tasks={task} setTask={setTask}/>
          </div>
        </section>
      </main>
    </HomeStyled>
  );
};
