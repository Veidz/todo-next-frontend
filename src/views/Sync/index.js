import { Container, Content, QrCodeArea } from './style'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Sync () {
  return (
    <Container>
      <Header />
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
