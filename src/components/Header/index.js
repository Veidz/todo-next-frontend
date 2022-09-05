import React from 'react'

import { Container, LeftSide, Links, RightSide } from './style'
import logo from '../../assets/logo.png'
import notification from '../../assets/notification.png'

function Header () {
  return (
    <Container>
      <LeftSide>
        <img src={ logo } alt='Logo' />
      </LeftSide>
      <RightSide>
        <Links><a href='#'>HOME</a></Links>
        <Links><a href='#'>SYNC PHONE</a></Links>
        <Links><a href='#'>NEW TASK</a></Links>
        <a href='#' id='notification'>
          <img src={ notification } alt="Notification" />
          <span>2</span>
        </a>
      </RightSide>
    </Container>
  )
}

export default Header
