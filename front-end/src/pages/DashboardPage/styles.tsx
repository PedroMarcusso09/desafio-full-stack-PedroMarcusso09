import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column; // Para alinhar Header e ContactList em coluna
  align-items: center; // Centraliza horizontalmente
  gap: 20px; // Espaço entre Header e ContactList
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  width: 90%; // Ajuste a largura conforme necessário
  max-width: 800px; // Limita a largura máxima
  margin: 0 auto; // Centraliza o container
`;

export const Header = styled.header`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`;

export const ContactsList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px; // Espaço entre cada item
`;

export const ContactItem = styled.li`
  background: #f2f2f2;
  padding: 15px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContactInfo = styled.div`
  & > h3 {
    margin: 0 0 5px 0;
    color: #333;
    font-size: 1.2em; // Aumenta um pouco o tamanho da fonte
  }

  & > p {
    margin: 0;
    color: #666;
  }
`;
