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
        <Links><a href='#'>HOME</a></Links>
        <Links><a href='#'>SYNC PHONE</a></Links>
        <Links><a href='#'>NEW TASK</a></Links>
        <button type='button' id='notification' onClick={ clickNotification }>
          <img src={ notification } alt='Notification' />
          <span>{ lateCount }</span>
        </button>
      </RightSide>
    </Container>
  )
}

export default Header
