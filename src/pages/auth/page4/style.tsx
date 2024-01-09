import styled from '@emotion/styled';

export const Page = styled.section`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 80%;
  margin: 20px;
`;

export const FormContainer = styled.div`
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 15px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 15px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const PostList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const PostItem = styled.li`
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 10px 0;

  h3 {
    background-color: #4caf50;
    color: white;
    padding: 10px;
    margin: 0;
    border-radius: 5px 5px 0 0;
  }

  p {
    padding: 10px;
    margin: 0;
    color: #333;
  }
`;
