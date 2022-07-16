import { Routes, Route } from 'react-router-dom'

import About from './pages/about'
import Home from './pages/home'
import NotFound from './pages/notFound'
import Shop from './pages/shop'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="shop" element={<Shop />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App