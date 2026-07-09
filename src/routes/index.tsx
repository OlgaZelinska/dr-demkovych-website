import { Routes, Route } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import { Hero } from '../components/sections/Hero'
import { Services } from '../components/sections/Services'
import { About } from '../components/sections/About'
import BeforeAfterPage from '../components/sections/BeforeAfterPage'
import ReviewsPage from '../components/sections/ReviewsPage'
import { Contact } from '../components/sections/Contact'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Hero />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="before-after" element={<BeforeAfterPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
