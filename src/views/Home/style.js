import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 30px 30px 0;

  button {
    background: none;
    border: none;
  }
`

export const Title = styled.div`
  width: 100%;
  border-bottom: 1px solid rgb(99, 59, 188);
  color: rgb(242, 235, 235);
  display: flex;
  justify-content: center;
  margin-bottom: 40px;

  h3 {
    position: relative;
    top: 30px;
    background: rgb(18, 18, 18);
    padding: 0 20px;
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 70px;

  a {
    text-decoration: none;
  }
`
