import React from 'react';
import Styled from 'styled-components/native';
import AddButton from './AddButton';
import Header from './Header';
import TodoList from './ToDoList';

const Container = Styled.View`
    flex: 1;
`;

interface Props {}

const Todo = ({}: Props) => {
  return (
    <Container>
      <Container>
        <Header />
        <TodoList></TodoList>
      </Container>
      <AddButton />
    </Container>
  );
};

export default Todo;
