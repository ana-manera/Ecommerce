import { Routes, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

import About from './pages/about'
import Checkout from './pages/checkout'
import Home from './pages/home'
import NotFound from './pages/notFound'
import Producto from './pages/producto'
import Shop from './pages/shop'

const App = () => {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="shop" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="/producto/:id" element={<Producto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </RecoilRoot>
  )
}

export default App
