import { useState, useEffect } from 'react'
import { Container, FormContainer, InputContainer, OptionsContainer, AddContainer, TextAreaContainer, TypeIcons } from './style'

import api from '../../services/api'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import icons from '../../utils/type-icons'
import { Navigate, useParams } from 'react-router-dom'
import { format } from 'date-fns'

function Task () {
  const { id } = useParams()

  const [redirect, setRedirect] = useState(false)
  const [lateCount, setLateCount] = useState()
  const [type, setType] = useState(1)
  const [done, setDone] = useState(false)
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [date, setDate] = useState()
  const [hour, setHour] = useState()
  const [macaddress, setMacaddress] = useState('11:11:11:11:11:11')

  useEffect(() => {
    lateVerify()

    async function loadDetails () {
      const task = await api.get(`/task/${id}`)
      setType(task.data.type)
      setTitle(task.data.title)
      setDescription(task.data.description)
      setDate(format(new Date(task.data.when), 'yyyy-MM-dd'))
      setHour(format(new Date(task.data.when), 'HH:mm'))
      setDone(task.data.done)
    }
    if (id) loadDetails()
  }, [id])

  async function lateVerify () {
    const lateTasks = await api.get('/task/filter/late/11:11:11:11:11:11')
    setLateCount(lateTasks.data.length)
  }

  async function save () {
    if (!title) return alert('You need to fill the task title')
    if (!description) return alert('You need to fill the task description')
    if (!type) return alert('You need to fill the task type')
    if (!date) return alert('You need to fill the task date')
    if (!hour) return alert('You need to fill the task hour')

    if (id) {
      await api.put(`/task/${id}`, {
        macaddress,
        done,
        type,
        title,
        description,
        when: `${date}T${hour}:00.000`
      })
      setRedirect(true)
    } else {
      await api.post('/task', {
        macaddress,
        type,
        title,
        description,
        when: `${date}T${hour}:00.000`
      })
      setRedirect(true)
    }
  }

  async function remove () {
    const res = global.confirm('Do you really want to remove this task?')
    if (res) {
      await api.delete(`/task/${id}`)
      setRedirect(true)
    }
  }

  return (
    <Container>
      { redirect && <Navigate to='/' /> }
      <Header lateCount={ lateCount } />

      <FormContainer>
        <TypeIcons>
          {
            icons.map((icon, index) => (
              index > 0 && 
              <button key={ index } type='button' onClick={ () => setType(index) } >
                <img src={ icon } alt='Task type' className={ type && type !== index ? 'inactive' : ''} />
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

        {
          id && 
          <OptionsContainer>
            <div>
              <input type='checkbox' checked={ done } onChange={ () => setDone(!done) } />
              <span>COMPLETED</span>
            </div>
            <button type='button' onClick={ remove }>DELETE</button>
          </OptionsContainer>
        }

        <AddContainer>
          <button type='button' onClick={ save }>ADD</button>
        </AddContainer>
      </FormContainer>

      <Footer />
    </Container>
  )
}

export default Task
