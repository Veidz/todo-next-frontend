import { useState, useEffect } from 'react'
import { Container, FormContainer, TypeIcons } from './style'

import api from '../../services/api'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import icons from '../../utils/type-icons'

function Task () {
  const [lateCount, setLateCount] = useState()
  const [type, setType] = useState(1)

  useEffect(() => {
    lateVerify()
  }, [])

  async function lateVerify () {
    const lateTasks = await api.get('/tasks/filter/late/11:11:11:11:11:11')
    setLateCount(lateTasks.data.length)
  }

  return (
    <Container>
      <Header lateCount={ lateCount } />

      <FormContainer>
        <TypeIcons>
          {
            icons.map((icon, index) => (
              index > 0 && 
              <button type='button' onClick={ () => setType(index) } >
                <img src={ icon } alt='Task type' className={ type && type !== index && 'inactive'} />
              </button>
            ))
          }
        </TypeIcons>
      </FormContainer>

      <Footer />
    </Container>
  )
}

export default Task
