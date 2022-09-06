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

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  color: white;

  h3 {
    color: rgb(112, 112, 112);
    margin-bottom: 5px 0;
  }

  input {
    font-size: 16px;
    padding: 10px;
    border: none;
    background: none;
    border-bottom: 1px solid rgb(130, 87, 230);
    color: rgb(242, 235, 235);
    color-scheme: dark;

    &:focus {
      outline-color: rgb(130, 87, 230);
      outline-style: solid;
      border-radius: 5px;
    }
  }
`

export const TextAreaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h3 {
    color: rgb(112, 112, 112);
    margin-bottom: 5px 0;
  }

  textarea {
    font-size: 16px;
    background: none;
    border: 1px solid rgb(130, 87, 230);
    border-radius: 5px;
    resize: none;
    color: rgb(242, 235, 235);
    padding: 10px;

    &:focus {
      outline-color: rgb(130, 87, 230);
      outline-style: solid;
    }
  }
`
