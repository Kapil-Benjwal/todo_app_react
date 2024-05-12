import React from 'react'
import { UserContext } from './Todo'
import { useContext } from 'react'

const TodoData = () => {
    const styleTodoData = {
        marginTop: '2%',
        textAlign: 'center',
        border: '2px solid',
        borderRadius: '5px',
        width: '33%',
        backgroundColor: 'rgba(236, 246, 187, 0.495)',
        wordBreak: 'break-all'

    }
    const { todoData, onDelete, style } = useContext(UserContext);


    return (
        <>
            <div className="container mt-1" style={style}>

                {
                    todoData && todoData.length ? todoData.map((todo, i) => {
                        return (

                            <div key={i} className='container' style={styleTodoData}>
                                <p className='my-3'><b>{todo.title}</b></p>
                                <hr />
                                <p className='w-100'>{todo.desc}</p>
                                <div className='my-2'><button className='btn btn-danger' onClick={() => onDelete(i)}>Delete</button></div>
                            </div>

                        )
                    }) : <h3 style={{textAlign: 'center', marginTop: '2%' }}>No data found</h3>
                }
            </div>
        </>
    )
}

export default TodoData
