import { useMemo } from 'react'
import { format } from 'date-fns'

import { BottomCard, Container, TopCard } from './style'
import typeIcons from '../../utils/type-icons'

function TaskCard ({ type, title, when, done }) {
  const date = useMemo(() => format(new Date(when), 'dd/MM/yyyy'), [when])
  const hour = useMemo(() => format(new Date(when), 'HH:mm'), [when])

  return (
    <Container done={ done }>
      <TopCard>
        <img src={ typeIcons[type] } alt='Task icon' />
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
