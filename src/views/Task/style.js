import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const FormContainer = styled.div`
  width: 50%;
`

export const TypeIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .inactive {
    opacity: 0.5;
  }

  button {
    background: none;
    border: none;  
  }

  img {
    width: 50px;
    height: 50px;
    margin: 10px;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
`
