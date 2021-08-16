import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  width : 100%;
  height : 40px;
  padding-left : 16px;
  padding-right : 16px;
  border-radius : 4px;
  background-color : #FFFFFF;
`;

const InputField = styled.TextInput`
    flex : 1;
    color : #38738a;

`;

interface Props{
    placeholder ? : string;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
    secureTextEntry?:boolean;
    style?:Object;
    clearMode ?: boolean;
    onChangeText?:(text : string) => void;
}

const Input = ({
    placeholder,
    keyboardType,
    secureTextEntry,
    style,
    clearMode,
    onChangeText,} : Props) => {
    return(
        <Container style ={style}>
            <InputField
                selectionColor = "#38738a"
                secureTextEntry = {secureTextEntry}
                keyboardType ={keyboardType ? keyboardType : 'default'}
                autoCapitalize = "none"
                autoCorrect = {false}
                allowFontScaling = {false}
                placeholderTextColor = "#38738a"
                placeholder = {placeholder}
                clearButtonMode = {clearMode ? 'while-editing' : 'never'}
                onChangeText = {onChangeText}/>
        </Container>
    );
};

    export default Input;