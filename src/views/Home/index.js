import { useState, useEffect } from 'react'
import { Container, FilterContainer, Content, Title } from './style'

import api from '../../services/api'

import Header from '../../components/Header'
import FilterCard from '../../components/FilterCard'
import Footer from '../../components/Footer'
import TaskCard from '../../components/TaskCard'
import { Link, Navigate } from 'react-router-dom'

function Home () {
  const [filterActive, setFilterActive] = useState('all')
  const [tasks, setTasks] = useState([])
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    const isConnected = localStorage.getItem('todo-next/macaddress')
    if (!isConnected) setRedirect(true)
  }, [])

  useEffect(() => {
    async function loadTasks () {
      const tasks = await api.get(`/task/filter/${filterActive}/11:11:11:11:11:11`)
      setTasks(tasks.data)
    }
    loadTasks()
  }, [filterActive])

  function handleNotification () {
    setFilterActive('late')
  }
 
  return (
    <Container>
      {/* { console.log(redirect) } */}
      { redirect && <Navigate to='/sync' /> }
      <Header clickNotification={ handleNotification } />

      <FilterContainer>
        <button type='button' onClick={() => setFilterActive('all')}>
          <FilterCard
            title='All'
            active={ filterActive === 'all' }
          />
        </button>
        <button type='button' onClick={() => setFilterActive('today')}>
          <FilterCard
            title='Today'
            active={ filterActive === 'today' }
          />
        </button>
        <button type='button' onClick={() => setFilterActive('week')}>
          <FilterCard
            title='Week' 
            active={ filterActive === 'week' }
          />
        </button>
        <button type='button' onClick={() => setFilterActive('month')}>
          <FilterCard
            title='Month'
            active={ filterActive === 'month' }
          />
        </button>
        <button type='button' onClick={() => setFilterActive('year')}>
          <FilterCard
            title='Year' 
            active={ filterActive === 'year' }
          />
        </button>
      </FilterContainer>

      <Title>
        <h3>{ filterActive === 'late' ? 'LATE TASKS' : 'TASKS' }</h3>
      </Title>

      <Content>
        {
          tasks.map((task) => (
            <Link key={ task._id } to={ `/task/${task._id}` }>
              <TaskCard
                type={ task.type }
                title={ task.title }
                when={ task.when }
                done={ task.done }
              />
            </Link>
          ))
        }
      </Content>

      <Footer />
    </Container>
  )
}

export default Home
