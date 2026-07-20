export const STRIPE_PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY

// Redirect to Stripe Checkout for the $30 course
// Payment link created in Stripe dashboard — The Digital Clean-Up, $30 CAD
export const COURSE_PAYMENT_LINK = 'https://buy.stripe.com/cNibJ363x1Zm243aefb7y02'

export function goToCheckout() {
  window.location.href = COURSE_PAYMENT_LINK
}
