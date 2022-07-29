import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup } from 'react-bootstrap'

export default function Todos(props) {
    return (
        <div className='mt-5'>
            <ListGroup>
                {props.todos.map(todo => (
                    <ListGroup.Item
                        variant="primary"
                        key={todo.id}
                        className="d-flex justify-content-between align-items-center"
                    >
                        <div>
                            <i className={`bi ${todo.completed ? 'bi-check-square-fill' : 'bi-square'} fs-3 text-secondary btn`}></i>
                            <span>{todo.title}</span>
                        </div>
                        <div>
                            <Link to={`/todos/${todo.id}`}>
                                <i className="bi bi-eye-fill fs-3 text-primary btn"></i>
                            </Link>
                            <i className="bi bi-trash fs-3 text-danger btn"></i>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    )
}
