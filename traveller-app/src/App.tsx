import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { ToursRouter } from './pages/ToursRouter'
import { BookingSuccess } from './pages/BookingSuccess'
import { Contact } from './pages/Contact'
import { Admin } from './pages/Admin'
import { Locations } from './pages/Locations'
import { LocationDetail } from './pages/LocationDetail'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tours" element={<ToursRouter />} />
          <Route path="tours/:segment" element={<ToursRouter />} />
          <Route path="locations" element={<Locations />} />
          <Route path="locations/:slug" element={<LocationDetail />} />
          <Route path="booking/success" element={<BookingSuccess />} />
          <Route path="contact" element={<Contact />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
