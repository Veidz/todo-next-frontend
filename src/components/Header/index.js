import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Container, LeftSide, Links, RightSide } from './style'
import api from '../../services/api'
import logo from '../../assets/logo.png'
import notification from '../../assets/notification.png'

function Header ({ clickNotification }) {
  const [lateCount, setLateCount] = useState()

  useEffect(() => {
    lateVerify()
  }, [])

  async function lateVerify () {
    const lateTasks = await api.get('/task/filter/late/11:11:11:11:11:11')
    setLateCount(lateTasks.data.length)
  }

  return (
    <Container>
      <LeftSide>
        <img src={ logo } alt='Logo' />
      </LeftSide>
      <RightSide>
        <Links><Link to='/'>HOME</Link></Links>
        <Links><Link to='/task'>NEW TASK</Link></Links>
        <Links><Link to='/sync'>SYNC PHONE</Link></Links>
        {
          lateCount > 0 &&
          <>
            <button type='button' id='notification' onClick={ clickNotification }>
              <img src={ notification } alt='Notification' />
              <span>{ lateCount }</span>
            </button>
          </>
        }
      </RightSide>
    </Container>
  )
}

export default Header
