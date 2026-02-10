import React from 'react'
import type { todo } from '../model'

interface Props {
    tasks: todo[]
    setTask: React.Dispatch<React.SetStateAction<todo[]>>
}

const TaskList: React.FC<Props> = ({ tasks, setTask }) => {

    const handleDone = (id: number) => {
        setTask(tasks.map(task =>
            task.id === id ? { ...task, isDone: !task.isDone } : task
        ));
    };

    const handleDelete = (id: number) => {
        setTask(tasks.filter(task => task.id !== id));
    };

    return (
        <div className='tasks-container'>
            <h1 className='task-header'>Task</h1>
            {
                tasks
                    .filter(task => !task.isDone)
                    .map(task => (
                        <div key={task.id} className="task">
                            <p>{task.task}</p>
                            <button
                                className="done-btn"
                                onClick={() => handleDone(task.id)}
                            >
                                {task.isDone ? "Undo" : "Done"}
                            </button>
                            <button
                                className="delete-btn"
                                onClick={() => handleDelete(task.id)}
                            >
                                X
                            </button>
                        </div>
                    ))
            }
        </div>
    )
}

export default TaskList
