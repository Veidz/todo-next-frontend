import { useState, useEffect } from 'react'
import { Container, FormContainer, InputContainer, OptionsContainer, AddContainer, TextAreaContainer, TypeIcons } from './style'

import api from '../../services/api'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import icons from '../../utils/type-icons'

function Task () {
  const [lateCount, setLateCount] = useState()
  const [type, setType] = useState(1)
  const [id, setId] = useState()
  const [done, setDone] = useState(false)
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [date, setDate] = useState()
  const [hour, setHour] = useState()
  const [macaddress, setMacaddress] = useState('11:11:11:11:11:11')

  useEffect(() => {
    lateVerify()
  }, [])

  async function lateVerify () {
    const lateTasks = await api.get('/tasks/filter/late/11:11:11:11:11:11')
    setLateCount(lateTasks.data.length)
  }

  async function save () {
    try {
      await api.post('/tasks', {
        macaddress,
        type,
        title,
        description,
        when: `${date}T${hour}:00.000`
      })
    } catch (error) {
      console.log(error.message)
    }
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
          <input type='text' placeholder='Task title...' onChange={ (e) => setTitle(e.target.value) } value={ title } />
        </InputContainer>

        <TextAreaContainer>
          <h3>Description</h3>
          <textarea rows={ 5 } placeholder='Task details...' onChange={ (e) => setDescription(e.target.value) } value={ description } />
        </TextAreaContainer>

        <InputContainer>
          <h3>Date</h3>
          <input type='date' placeholder='Task date...' onChange={ (e) => setDate(e.target.value) } value={ date } />
        </InputContainer>

        <InputContainer>
          <h3>Hour</h3>
          <input type='time' placeholder='Task hour...' onChange={ (e) => setHour(e.target.value) } value={ hour } />
        </InputContainer>

        <OptionsContainer>
          <div>
            <input type='checkbox' checked={ done } onChange={ () => setDone(!done) } />
            <span>COMPLETED</span>
          </div>
          <button type='button'>DELETE</button>
        </OptionsContainer>

        <AddContainer>
          <button type='button' onClick={ save }>ADD</button>
        </AddContainer>
      </FormContainer>

      <Footer />
    </Container>
  )
}

export default Task
