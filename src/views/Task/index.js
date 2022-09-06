import { useState, useEffect } from 'react'
import { Container, FormContainer, InputContainer, TextAreaContainer, TypeIcons } from './style'

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

        <InputContainer>
          <h3>Title</h3>
          <input type='text' placeholder='Task title...' />
        </InputContainer>

        <TextAreaContainer>
          <h3>Description</h3>
          <textarea rows={ 5 } placeholder='Task details...' />
        </TextAreaContainer>

        <InputContainer>
          <h3>Date</h3>
          <input type='date' placeholder='Task date...' />
        </InputContainer>

        <InputContainer>
          <h3>Hour</h3>
          <input type='time' placeholder='Task hour...' />
        </InputContainer>
      </FormContainer>

      <Footer />
    </Container>
  )
}

export default Task
