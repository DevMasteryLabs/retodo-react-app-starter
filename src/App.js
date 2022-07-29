import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Container from 'react-bootstrap/Container';

import Navbar from './components/Navbar';
import Todos from './pages/Todos';
import NewTodo from './pages/NewTodo';
import TodoDetails from './pages/TodoDetails';


function App() {
  const [todos, setTodos] = useState([
    {
      id: "1",
      title: "Learn React",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officia culpa ipsum qui minima atque dolor suscipit quis cum accusamus",
      completed: true
    },
    {
      id: "2",
      title: "Learn Node.js",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officia culpa ipsum qui minima atque dolor suscipit quis cum accusamus",
      completed: false
    },
    {
      id: "3",
      title: "Learn MongoDB",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officia culpa ipsum qui minima atque dolor suscipit quis cum accusamus",
      completed: false
    },
  ])
  return (
    <>
      <Router>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path='/' component={() => <Todos todos={todos} />} />
            <Route path='/new-todo' component={NewTodo} />
            <Route path='/todos/:id' component={() => <TodoDetails todos={todos} />} />
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
