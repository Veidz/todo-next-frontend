import { Link } from 'react-router-dom'

import { Container, LeftSide, Links, RightSide } from './style'
import logo from '../../assets/logo.png'
import notification from '../../assets/notification.png'

function Header ({ lateCount, clickNotification }) {
  return (
    <Container>
      <LeftSide>
        <img src={ logo } alt='Logo' />
      </LeftSide>
      <RightSide>
        <Links><Link to='/'>HOME</Link></Links>
        <Links><Link to='/task'>NEW TASK</Link></Links>
        <Links><Link to='/sync'>SYNC PHONE</Link></Links>
        <button type='button' id='notification' onClick={ clickNotification }>
          <img src={ notification } alt='Notification' />
          <span>{ lateCount }</span>
        </button>
      </RightSide>
    </Container>
  )
}

export default Header
