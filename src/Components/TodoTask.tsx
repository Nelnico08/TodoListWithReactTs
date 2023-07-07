import { ITask } from '../Interfaces'

interface Props {
    task: ITask;
    completeTask(taskIdToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className='task'>
        <div className='content'>
            <span>{task.taskName}</span>
            <button onClick={() => completeTask(task.ID)}>X</button>
        </div>
    </div>
  )
}

export default TodoTask