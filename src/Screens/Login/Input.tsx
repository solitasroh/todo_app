import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  width : 100%;
  height : 40px;
  padding-left : 16px;
  padding-right : 16px;
  border-radius : 4px;
  background-color : #333333;
`;

const InputField = styled.TextInput`
    flex : 1;
    color : #FFFFFF;
`;

interface Props{
    placeholder ? : string;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
    secureTextEntye?:boolean;
    style?:Object;
    clearMode ?: boolean;
    onChangeText?:(text : string) => void;
}

const Input = ({
    placeholder,
    keyboardType,
    secureTextEntye,
    style,
    clearMode,
    onChangeText,} : Props) => {
    return(
        <Container style ={style}>
            <InputField
                selectionColor = "#FFFFFF"
                secureTextEntry = {secureTextEntye}
                keyboardType ={keyboardType ? keyboardType : 'default'}
                autoCapitalize = "none"
                autoCorrect = {false}
                allowFontScaling = {false}
                placeholderTextColor = "#FFFFFF"
                placeholder = {placeholder}
                clearButtonMode = {clearMode ? 'while-editing' : 'never'}
                onChangeText = {onChangeText}/>
        </Container>
    );
};

    export default Input;