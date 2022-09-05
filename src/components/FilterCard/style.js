import styled from 'styled-components'

export const Container = styled.div`
  width: 250px;
  height: 70px;
  background: ${(props) => props.active ? 'rgb(99, 59, 188)' : 'rgba(99, 59, 188, 0.3)'};
  color: rgb(242, 235, 235);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in;

  img {
    width: 25px;
    height: 25px;
  }

  span {
    align-self: flex-end;
    font-weight: bold;
    font-size: 18px;
  }

  &:hover {
    background: rgb(99, 59, 188);
  }
`
