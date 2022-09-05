import React from 'react'

import { Container } from './style'
import logo from '../../assets/logo-footer.png'

function Footer () {
  return (
    <Container>
      <p><img src={ logo } alt='Logo' />- Keep your life organized</p>
    </Container>
  )
}

export default Footer
