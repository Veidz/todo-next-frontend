import styled from 'styled-components'

export const Container = styled.div`
  width: 270px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: rgb(242, 235, 235);
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.73);
  border-radius: 10px;
  margin: 20px;
  opacity: 0.6;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`

export const TopCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const BottomCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  strong {
    color: rgb(99, 59, 188);
    font-weight: bold;
  }

  span {
    color: rgb(112, 112, 112);
  }
`
