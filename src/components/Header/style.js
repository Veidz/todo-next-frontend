import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 70px;
  background: #0B0B0C;
  color: #F2EBEB;
  border-bottom: 5px solid #633BBC;
  display: flex;
`

export const LeftSide = styled.div`
  width: 50%;
  height: 70px;
  display: flex;
  align-items: center;
  padding-left: 20px;

  img {
    height: 56.8px;
    width: 100px;
  }
`

export const RightSide = styled.div`
  width: 50%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  #notification {
    img {
      width: 25px;
      height: 30px;
    }

    span {
      background-color: #fff;
      color: #8257E6;
      padding: 3px 7px;
      border-radius: 50%;
      position: relative;
      top: -15px;
      right: 12px;
    }

    &:hover {
      opacity: 0.5;
    }
  }
`

export const Links = styled.div`
  border: 3px solid transparent;
  padding: 0 10px;

  :not(:nth-child(3)) {
    border-right: 3px solid #707070;
  }

  a {
    color: inherit;
    font-weight: bold;
    text-decoration: none;
    margin: 0 10px;
    padding: 5px 0;

    &:hover {
      border-bottom: 3px solid #633BBC;
    }
  }
`
