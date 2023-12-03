import styled from 'styled-components';

export const StyledButton = styled.button`
 width: calc(100% - 20px); // Ajuste para a mesma largura líquida
 padding: 16px 20px;
 margin-bottom: 10px; // Garantir que a margem inferior seja a mesma
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;
  background-color: #046ee5;
  color: white;
  margin-left: 7px;


  // Assegura que padding e border sejam incluídos na largura total

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }

  // Estilos adicionais para normalizar o Link
  &, a {
    text-decoration: none; // Remove underline de links
    display: inline-block; // Garante que se comporte como um bloco inline
    text-align: center; // Centraliza o texto
  }
`;
