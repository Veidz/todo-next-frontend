import { Container } from './style'

import filter from '../../assets/filter.png'

function FilterCard ({ title, active }) {
  return (
    <Container active={ active }>
      <img src={ filter } alt='Filter' />
      <span>{ title }</span>
    </Container>
  )
}

export default FilterCard
