import styled from 'styled-components'

export const Container = styled.div`
  width: 250px;
  height: 70px;
  background: #633BBC;
  color: #F2EBEB;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;

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
