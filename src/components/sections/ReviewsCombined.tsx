import React from 'react'
import BeforeAfterSection from './BeforeAfter'
import { Reviews } from './Reviews'
import InstagramSlider from './InstagramSlider'

export const ReviewsCombined: React.FC = () => {
  return (
    <div>
      <BeforeAfterSection />
      <Reviews />
      <InstagramSlider />
    </div>
  )
}

export default ReviewsCombined
