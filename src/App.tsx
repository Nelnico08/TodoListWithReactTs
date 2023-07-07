import { FC, useState, ChangeEvent } from "react"
import "./App.css"
import { ITask } from "./Interfaces"
import { v4 as uuid} from "uuid"
import TodoTask from "./Components/TodoTask"

const App: FC =() => {

  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value)
  }

  const addTask = (): void => {
    let id = uuid()

    while(todoList.filter((task: ITask) => task.ID === id).length){
      id = uuid()
    }

    const newTask: ITask = {
      ID: id,
      taskName: task
    }

    setTodoList([ ...todoList, newTask ]);
    setTask("")
  }

  const completeTask = (taskIdToDelete: string): void => {
    setTodoList(todoList.filter((task: ITask) => {
      return task.ID !== taskIdToDelete
    }))
  }

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input type="text" placeholder="Task..." name="task" value={task} onChange={handleChange}  />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="toDoList">
        {
          todoList?.map((task: ITask, key: number) => {
            return <TodoTask key={key} task={task} completeTask={completeTask} />
          })
        }
      </div>
    </div>
  )
}

export default App
