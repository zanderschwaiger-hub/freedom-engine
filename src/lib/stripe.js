export const STRIPE_PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY

// Redirect to Stripe Checkout for the $30 course
// We use Stripe Payment Links — create this once in Stripe dashboard
// Dashboard → Payment Links → Create → Add product "The Digital Clean-Up" $30
// Paste the payment link URL here
export const COURSE_PAYMENT_LINK = 'https://buy.stripe.com/placeholder'

export function goToCheckout() {
  window.location.href = COURSE_PAYMENT_LINK
}
