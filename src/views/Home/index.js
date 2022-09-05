import { Container } from './style'

import Header from '../../components/Header'
import FilterCard from '../../components/FilterCard'
import Footer from '../../components/Footer'

function Home () {
  return (
    <Container>
      <Header />

      <FilterCard />
      <FilterCard />
      <FilterCard />
      <FilterCard />
      <FilterCard />

      <Footer />
    </Container>
  )
}

export default Home
