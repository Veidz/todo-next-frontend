import { useState } from 'react'
import { Container, FilterContainer } from './style'

import Header from '../../components/Header'
import FilterCard from '../../components/FilterCard'
import Footer from '../../components/Footer'

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


      <Footer />
    </Container>
  )
}

export default Home
