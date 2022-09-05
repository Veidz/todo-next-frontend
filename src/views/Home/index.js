import { useState } from 'react'
import { Container, FilterContainer, Content, Title } from './style'

import Header from '../../components/Header'
import FilterCard from '../../components/FilterCard'
import Footer from '../../components/Footer'
import TaskCard from '../../components/TaskCard'

function Home () {
  const [filterActive, setFilterActive] = useState('today')

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
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </Content>

      <Footer />
    </Container>
  )
}

export default Home
