import styled from 'styled-components'

export const Container = styled.div`
  width: 250px;
  height: 70px;
  background: ${(props) => props.active ? 'rgb(99, 59, 188)' : 'rgba(99, 59, 188, 0.3)'};
  color: #F2EBEB;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  margin: 30px 30px 0;
  cursor: pointer;

  img {
    width: 25px;
    height: 25px;
  }

  span {
    align-self: flex-end;
    font-weight: bold;
    font-size: 18px;
  }
`
