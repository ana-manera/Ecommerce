import { Routes, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

import About from './pages/about'
import Home from './pages/home'
import NotFound from './pages/notFound'
import Shop from './pages/shop'

const App = () => {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="shop" element={<Shop />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </RecoilRoot>
  )
}

export default App
