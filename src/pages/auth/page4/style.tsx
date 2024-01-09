import styled from '@emotion/styled';

export const Page = styled.section`
  // display: inline-flex;
  display: flex;
  justify-content: center;

  // flex-wrap: wrap;
  // width: auto;
  // height: auto;
  // margin: 16px 0px 0px 0px;
  // background-color: white;
`;

export const RowWrapper = styled.div`
  // display: flex;
  // flex-direction: column;
  // flex-wrap: wrap;
  // max-width: auto;
  // margin-right: 16px;
`;

export const FormContainer = styled.div`
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 16px;
`;

export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

export const PostList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const PostItem = styled.li`
  border: 1px solid #ccc;

  border-radius: 5px;

  h3 {
    margin-bottom: 5px;
  }

  p {
    color: #555;
  }
`;
