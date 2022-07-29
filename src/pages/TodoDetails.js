import React from 'react'
import { Alert, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export default function TodoDetails(props) {
  const todos = props.todos;
  const params = useParams()
  const id = params.id
  const todo = todos.find(t => t.id === id)
  return (
    <div className='mt-5'>
      {
        todo ? (
          <Table bordered>
            <tbody>
              <tr>
                <td>Title</td>
                <td> {todo.title} </td>
              </tr>
              <tr>
                <td>Description</td>
                <td> {todo.description} </td>
              </tr>
            </tbody>
          </Table>
        ) : (
          <Alert variant='danger'>
            ToDo not found
          </Alert>
        )
      }
    </div>
  )
}
