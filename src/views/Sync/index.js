import { useState, useEffect } from 'react'
import { Container, Content, QrCodeArea } from './style'

import api from '../../services/api'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Sync () {
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
      <Header lateCount={ lateCount } />
        <Content>
          <h1>READ THE QR CODE WITH THE APP</h1>
          <QrCodeArea></QrCodeArea>
          <p>Your tasks will be synchronized with your phone</p>
        </Content>
      <Footer />
    </Container>
  )
}

export default Sync
