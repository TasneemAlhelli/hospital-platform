import Welcoming from '../components/Welcoming'
import About from '../components/About'
import InterestedServices from '../components/InterestedServices'

const Home = ({ user }) => {
  return (
    <div>
      <Welcoming user={user} />
      <About />
      <InterestedServices />
    </div>
  )
}

export default Home
