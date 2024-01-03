import { BrowserRouter, Routes, Route } from 'react-router-dom'

import TestPage from '@pages/Test'
import HotelListPage from '@pages/HotelList'
import HotelPage from '@pages/Hotel'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HotelListPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/hotel/:id" element={<HotelPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
