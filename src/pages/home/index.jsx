import { Link } from 'react-router-dom'

import Layout from '../../layout'

const Home = () => {
  return (
    <Layout>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </Layout>
  )
}

export default Home
