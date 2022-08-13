import React from "react"
import { Text, TouchableOpacity } from "react-native";
import { useTheme } from "../../context/theme";
import { Container, Title } from './styles';

export function Home() {
  const { handleChangeTheme } = useTheme();
  return (
    <Container >
      <Title>Hello World</Title>

      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: 'red',
          padding: 15,
          borderRadius: 10
        }}
        onPress={handleChangeTheme}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          Trocar de Tema
        </Text>
      </TouchableOpacity>
    </Container>
  );
}