import { useState } from 'react'
import { QRCodeCanvas } from 'qrcode.react'

import { Container, Content, QrCodeArea, ValidationCode } from './style'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Navigate } from 'react-router-dom'

function Sync () {
  const [macaddress, setMacaddress] = useState()
  const [redirect, setRedirect] = useState(false)

  function saveMac () {
    localStorage.setItem('todo-next/macaddress', macaddress)
    setRedirect(true)
  }

  return (
    <Container>
      { redirect && <Navigate to='/' />}
      <Header />
        <Content>
          <h1>READ THE QR CODE WITH THE APP</h1>
          <p>Your tasks will be synchronized with your phone</p>
          <QrCodeArea>
            <QRCodeCanvas value='getmacaddress' size={ 350 } />
          </QrCodeArea>

          <ValidationCode>
            <span>Enter the code that appeared on your phone</span>
            <input type='text' onChange={ (e) => setMacaddress(e.target.value) } value={ macaddress } />
            <button type='button' onClick={ saveMac }>SYNC</button>
          </ValidationCode>
        </Content>
      <Footer />
    </Container>
  )
} 

export default Sync
