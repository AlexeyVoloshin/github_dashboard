import styled from "styled-components";

export const Root = styled.section`
  border: 1px solid #666;
  border-radius: 5px;
  margin-bottom: 10px;
  .list {
    border: 1px solid lightsteelblue;
    border-radius: 3px;
    padding: 3px;
    text-align: center;
    margin: 3px;
  }
`;

export const WrapperList = styled.div`
  height: 300px;
  overflow: auto;
`;

export const Li = styled.li`
  list-style-type: none;
`;

export const Ul = styled.ul`
  padding: 0;
`;
