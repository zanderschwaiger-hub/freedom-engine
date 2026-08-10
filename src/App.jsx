import React, { useState } from 'react'
import Nav from './components/Nav'
import EntryDoors from './components/EntryDoors'
import Mission from './components/Mission'
import Problem from './components/Problem'
import CourseOffer from './components/CourseOffer'
import Trust from './components/Trust'
import AppBreakdown from './components/AppBreakdown'
import Waitlist from './components/Waitlist'
import FunnelPath from './components/FunnelPath'
import Footer from './components/Footer'
import CheckoutModal from './components/CheckoutModal'

export default function App() {
  const [checkoutOpen, setCheckoutOpen] = useState(false)

  const openCheckout = () => setCheckoutOpen(true)
  const closeCheckout = () => setCheckoutOpen(false)

  return (
    <>
      <Nav onGetCourse={openCheckout} />

      <main>
        <EntryDoors />
        <Mission />
        <Problem />
        <CourseOffer onGetCourse={openCheckout} />
        <Trust />
        <AppBreakdown />
        <Waitlist />
        <FunnelPath onGetCourse={openCheckout} />
        <Footer onGetCourse={openCheckout} />
      </main>

      <CheckoutModal isOpen={checkoutOpen} onClose={closeCheckout} />
    </>
  )
}
