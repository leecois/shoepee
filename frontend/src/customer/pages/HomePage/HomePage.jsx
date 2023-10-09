import React from 'react'
import Billboard from '../../components/Billboard/Billboard';
import ShoeCanvasPicker from '../../components/ShoePicker/ShoeCanvasPicker';

const HomePage = () => {
  return (
    <div>
        <Billboard />
        <h1>Request a Custom Quote - Waitlist!</h1>
        <ShoeCanvasPicker />

        <div>
            orther content
        </div>
    </div>
  )
}

export default HomePage;