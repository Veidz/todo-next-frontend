import { useMemo } from 'react'
import { format } from 'date-fns'

import { BottomCard, Container, TopCard } from './style'
import defaultIcon from '../../assets/default.png'

function TaskCard ({ type, title, when }) {
  const date = useMemo(() => format(new Date(when), 'dd/MM/yyyy'), [when])
  const hour = useMemo(() => format(new Date(when), 'HH:mm'), [when])

  return (
    <Container>
      <TopCard>
        <img src={ defaultIcon } alt='Task icon' />
        <h3>{ title }</h3>
      </TopCard>
      <BottomCard>
        <strong>{ date }</strong>
        <span>{ hour }</span>
      </BottomCard>
    </Container>
  )
}

export default TaskCard
