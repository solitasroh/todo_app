import React from 'react';
import styled from 'styled-components/native';
const StyleButton = styled.TouchableOpacity`
    width : 100%;
    height : 40px;
    border-radius :4px;
    justify-content :center;
    align-items: center;
    border : 1px;
    border-color :#333333;
`;
const Label = styled.Text`
    color : #515E63;
`;

interface Props{
    label : string;
    style?: Object;
    onPress?:()=>void;
}

const Button = ({ label, style, onPress} : Props) => {
    return(
        <StyleButton style = {style} onPress = {onPress}>
            <Label>{label}</Label>
        </StyleButton>
    );
};

export default Button;