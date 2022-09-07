import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(242, 235, 235);
  /* background-color: red; */
`

export const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const QrCodeArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const ValidationCode = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;

  span {
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 20px;
    margin-top: 10px;
  }

  input {
    font-size: 18px;
    padding: 10px;
    background: none;
    border: 1px solid rgb(130, 87, 230);
    color: rgb(242, 235, 235);
    font-family: inherit;

    &:focus {
      outline-color: rgb(130, 87, 230);
      outline-style: solid;
      border-radius: 5px;
    }
  }

  button {
    font-weight: bold;
    font-size: 18px;
    padding: 10px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    margin-top: 10px;
    background-color: rgb(130, 87, 230);
    color: rgb(242, 235, 235);

    &:hover {
      opacity: 0.7;
    }
  }
`
