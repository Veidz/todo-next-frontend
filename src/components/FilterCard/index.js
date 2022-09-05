import { Container } from './style'

import filter from '../../assets/filter.png'

function FilterCard () {
  return (
    <Container>
      <img src={ filter } alt='Filter' />
      <span>All</span>
    </Container>
  )
}

export default FilterCard
