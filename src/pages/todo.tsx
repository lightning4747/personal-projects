import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const TodoPage = () => {
    const [todos, setTodos] = useState<{ id: number; text: string; completed: boolean }[]>([]);
    const [inputValue, setInputValue] = useState('');

    const addTodo = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        setTodos([
            ...todos,
            { id: Date.now(), text: inputValue, completed: false }
        ]);
        setInputValue('');
    };

    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="min-h-screen bg-neutral-900 text-white p-8">
            <Link to="/" className="text-cyan-400 hover:text-cyan-300 mb-8 inline-block">&larr; Back to Home</Link>

            <div className="max-w-md mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-center text-cyan-400">Todo List</h1>

                <form onSubmit={addTodo} className="mb-8 flex gap-2">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Add a new task..."
                        className="flex-1 p-3 rounded bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                    <button
                        type="submit"
                        className="px-6 py-3 bg-cyan-600 text-white rounded font-medium hover:bg-cyan-500 transition-colors"
                    >
                        Add
                    </button>
                </form>

                <ul className="space-y-3">
                    <AnimatePresence>
                        {todos.map(todo => (
                            <motion.li
                                key={todo.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                className="flex items-center gap-3 p-4 bg-neutral-800 rounded shadow-md group border border-neutral-700 hover:border-cyan-500/30 transition-colors"
                            >
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => toggleTodo(todo.id)}
                                    className="w-5 h-5 accent-cyan-500 cursor-pointer rounded bg-neutral-700 border-neutral-600 focus:ring-cyan-500"
                                />
                                <span className={`flex-1 ${todo.completed ? 'line-through text-neutral-500' : ''}`}>
                                    {todo.text}
                                </span>
                                <button
                                    onClick={() => deleteTodo(todo.id)}
                                    className="text-red-400 opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-300 px-2 py-1"
                                >
                                    Delete
                                </button>
                            </motion.li>
                        ))}
                    </AnimatePresence>
                </ul>

                {todos.length === 0 && (
                    <p className="text-center text-neutral-500 mt-12">No tasks yet. Add one above!</p>
                )}
            </div>
        </div>
    );
};

export default TodoPage;
