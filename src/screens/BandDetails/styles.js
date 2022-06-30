import styled from 'styled-components';

export const Container = styled.View`
  align-items: center;
`;

export const Photo = styled.Image`
  height: 100px;
  width: 100%;
`;

export const Content = styled.View`
  flex-direction: column;
  padding: 0 10px;
`;

export const Header = styled.View`
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Name = styled.Text`
  font-size: 18px;
  color: #333;
  font-weight: bold;
`;

export const Information = styled.Text`
  font-size: 16px;
  color: gray;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 15px;
  color: gray;
`;
