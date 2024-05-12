import React from 'react';
import { UserContext } from './Todo'
import { useContext } from 'react'

const TodoPage = () => {

    const { addTodo, todo, error, text, handleGridViewChange, handelSubmit } = useContext(UserContext);

    const styleTodo = {
        marginTop: '5%',
        textAlign: 'center',
        border: '2px solid gray',
        borderRadius: '5px',
        width: '40%',
        backgroundColor: 'rgba(148, 200, 189, 0.311)',
        marginBottom: '3%'
    }

    return (
        <>
            <div className='container' style={styleTodo}>
                <h3>ToDo APP</h3>
                <hr></hr>
                <form onSubmit={addTodo}>
                    <div className='mb-3'>
                        <label htmlFor='title' className='form-label'>Todo Title</label>
                        <input type="text" className='form-control' id='title' name='title' value={todo.title} onChange={handelSubmit} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='desc' className='form-label'> Todo Description</label>
                        <input type="text" className='form-control' id='desc' name='desc' value={todo.desc} onChange={handelSubmit} />
                        <span className='text-danger'>{error.text}</span>
                    </div>
                    <button className='btn btn-lg btn-success mb-3' type='submit' >Add Todo</button>
                </form>
            </div>
            <div className="form-check form-switch my-2" style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                <input className="form-check-input" type="checkbox" aria-checked="false" id="flexSwitchCheckDefault"
                    onClick={handleGridViewChange} />
                <label className="form-check-label"><b>{text}</b> </label>
            </div>
        </>
    )
}

export default TodoPage