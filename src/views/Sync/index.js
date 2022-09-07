import { QRCodeCanvas } from 'qrcode.react'

import { Container, Content, QrCodeArea, ValidationCode } from './style'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Sync () {
  return (
    <Container>
      <Header />
        <Content>
          <h1>READ THE QR CODE WITH THE APP</h1>
          <p>Your tasks will be synchronized with your phone</p>
          <QrCodeArea>
            <QRCodeCanvas value='getmacaddress' size={ 350 } />
          </QrCodeArea>

          <ValidationCode>
            <span>Enter the code that appeared on your phone</span>
            <input type='text' />
            <button type='button'>SYNC</button>
          </ValidationCode>
        </Content>
      <Footer />
    </Container>
  )
} 

export default Sync
