import { useState } from 'react';
import './todo.css'
import InputField from './components/InputField';
import type { todo } from './model';
import TaskList from './components/TaskList';
import DoneList from './components/DoneList';



const BASE_URL = import.meta.env.PROD
    ? 'https://personal-projects-venv.netlify.app'
    : 'http://localhost:5173';

function App() {
    const [todo, setTodo] = useState<string>("");
    const [tasks, setTask] = useState<todo[]>([]);

    const handleadd = (e: React.FormEvent) => {
        e.preventDefault();

        if (todo) {
            setTask([...tasks, { id: Date.now(), task: todo, isDone: false }]);
            setTodo("");
        }

    }


    return (
        <div className='todo-page'>
            <a href={BASE_URL} className="absolute top-4 left-4 text-orange-500 font-bold hover:underline">&larr; Back to Home</a>
            <h1>Todo List</h1>
            <InputField todo={todo} setTodo={setTodo} handleadd={handleadd} />
            <div className='todo-container'>
                <TaskList tasks={tasks} setTask={setTask} />
                <DoneList tasks={tasks} setTask={setTask} />
            </div>
        </div>
    )
}

export default App
