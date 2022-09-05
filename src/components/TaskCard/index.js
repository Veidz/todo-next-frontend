import { BottomCard, Container, TopCard } from './style'

import defaultIcon from '../../assets/default.png'

function TaskCard () {
  return (
    <Container>
      <TopCard>
        <img src={ defaultIcon } alt='Task icon' />
        <h3>Task Title</h3>
      </TopCard>
      <BottomCard>
        <strong>31/12/2022</strong>
        <span>22:22</span>
      </BottomCard>
    </Container>
  )
}

export default TaskCard
