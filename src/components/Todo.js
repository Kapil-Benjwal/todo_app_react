import React from 'react'
import { useState, useEffect } from 'react'
import { createContext } from 'react';
import TodoData from './TodoData'
import TodoPage from './TodoPage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const UserContext = createContext();

const gridStyle = {
    backgroundColor: "#282c3",
    display: "flex",
    width: "100%",
    gap: '5px',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    color: "black",
    padding: "0.5rem 1rem",
    flexWrap: "wrap"
}

const Todo = () => {

    const todoItem = { title: '', desc: '' };
    const [todo, setTodo] = useState(todoItem);
    const [todoData, setTodoData] = useState([]);
    const [error, setError] = useState({});
    const [gridView, setGridView] = useState(true);
    const [style, setStyle] = useState();
    const [text, setText] = useState('GridView Off');



    useEffect(() => {
        let todoList = JSON.parse(localStorage.getItem('userData')) || [];
        setTodoData(todoList);
    }, []);

    const handelSubmit = (e) => {
        // console.log(e.target.value);
        setTodo({ ...todo, [e.target.name]: e.target.value });
    }

    const addTodo = (event) => {
        event.preventDefault();
        let errorCopy = { ...error };

        if (!todo.title.trim() && !todo.desc.trim()) {
            toast.warn('Title or Desciption cannot be blank');
        }
        else if (!todo.title.trim()) {
            errorCopy.text = 'Title cannot be blank';
            setError({ ...errorCopy });
        }

        else if (!todo.desc.trim()) {
            errorCopy.text = 'Description cannot be blank';
            setError({ ...errorCopy });
        }

        else {
            const copyData = [...todoData];
            copyData.push(todo);
            setTodoData(copyData);
            localStorage.setItem('userData', JSON.stringify(copyData));
            setTodo(todoItem);
            setError('');
            toast.success('Successfully added');
        }

    }

    const onDelete = (i) => {
        const copyData = [...todoData];
        copyData.splice(i, 1);
        setTodoData(copyData);
        localStorage.setItem('userData', JSON.stringify(copyData));
        toast.success('Successfully deleted');

    }

    const handleGridViewChange = () => {
        setGridView(!gridView);
        gridView ? setStyle(gridStyle) || setText('GridView On') : setStyle() || setText('GridView Off');
        // gridView ? setText('GridView On') : setText('GridView Off');
    }

    return (
        <>
            <UserContext.Provider value={{ todo, addTodo, error, text, handleGridViewChange, handelSubmit, todoData, onDelete, style }}>
                <TodoPage />
                <TodoData />
                <ToastContainer />
            </UserContext.Provider>
        </>
    )
}

export default Todo


