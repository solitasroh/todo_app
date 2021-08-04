import React from 'react';
import {FlatList, View} from 'react-native';
import Styled from 'styled-components/native';
import AddButton from './AddButton';

const Container = Styled.View`
    flex: 1;
`;

const ItemContainer = Styled.View`
    flex-direction: row;
    background-color: #fff;
    margin: 4px 16px;
    padding: 8px 16px;
    border-radius: 8px;
    align-items: center;
`;
const ItemLabel = Styled.Text`
    flex: 1;
    color: black;
`;

const TodoList = Styled(FlatList)`
    flex: 1;
`;

interface Props {}
const HeaderContainer = Styled.View`
    height: 40px;
    justify-content: center;
    align-items: center;
`;
const TitleLabel = Styled.Text`
    font-size :24px;
    font-weight :bold;
`;
const Header = ({}: Props) => {
  return (
    <HeaderContainer>
      <TitleLabel>Todo List App</TitleLabel>
    </HeaderContainer>
  );
};

const DeleteButton = Styled.TouchableOpacity``;
const Icon = Styled.Image`
    width : 24px;
    height :24px;
`;
const EmptyItem = ({}: Props) => {
  return (
    <Container>
      <Text>하단에 + 버튼을 눌러 할일 등록한다.</Text>
    </Container>
  );
};

const Todo = ({}: Props) => {
  const todoList = [
    {
      index: 1,
      title: 'todo1',
    },
    {
      index: 2,
      title: 'todo2',
    },
  ];
  const renderItem = ({item}) => {
    return (
      <ItemContainer>
        <ItemLabel>{item.title}</ItemLabel>
        <DeleteButton>
          <Icon source={require('~/Assets/Images/remove.png')} />
        </DeleteButton>
      </ItemContainer>
    );
  };
  return (
    <Container>
      <Container>
        <Header />
        <TodoList
          data={todoList}
          ListEmptyComponent={<EmptyItem />}
          keyExtractor={item => item.index}
          renderItem={renderItem}
        />
      </Container>
      <AddButton />
    </Container>
  );
};

export default Todo;
