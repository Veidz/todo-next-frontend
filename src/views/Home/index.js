import { useState, useEffect } from 'react'
import { Container, FilterContainer, Content, Title } from './style'

import api from '../../services/api'

import Header from '../../components/Header'
import FilterCard from '../../components/FilterCard'
import Footer from '../../components/Footer'
import TaskCard from '../../components/TaskCard'

function Home () {
  const [filterActive, setFilterActive] = useState('all')
  const [tasks, setTasks] = useState([])

  async function loadTasks () {
    const tasks = await api.get(`/tasks/filter/${filterActive}/11:11:11:11:11:11`)
    setTasks(tasks.data)
  }

  useEffect(() => {
    loadTasks()
  }, [filterActive])

  return (
    <Container>
      <Header />

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
        <h3>TASKS</h3>
      </Title>

      <Content>
        {
          tasks.map((task) => (
            <TaskCard
              key={ task._id }
              title={ task.title }
              when={ task.when }
            />
          ))
        }
      </Content>

      <Footer />
    </Container>
  )
}

export default Home
