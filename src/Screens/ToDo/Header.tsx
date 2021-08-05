import React from 'react';
import styled from 'styled-components/native';

const HeaderContainer = styled.View`
  height: 40px;
  justify-content: center;
  align-items: center;
`;
const TitleLabel = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <TitleLabel>Couple To-Do</TitleLabel>
    </HeaderContainer>
  );
};
export default Header;
